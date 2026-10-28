// Frames in (PNG or JPEG over a pipe), H.264 + AAC MP4 out.
// Settings are aimed at what Facebook, Instagram, TikTok, LinkedIn and
// YouTube all accept: H.264 High, yuv420p, BT.709 tagged AND converted
// (screenshots are sRGB; converting with the default BT.601 matrix while
// tagging BT.709 shifts the brand colours), AAC-LC 48 kHz stereo, moov atom
// at the front (+faststart) so a web player or upload preview starts at once.
import { spawn } from 'node:child_process';
import { FFMPEG } from './bin.mjs';

// The audio chain for a music bed, shared with tools/loudness.mjs (which
// simulates it to pick a gain before a render):
//   audioGain null (default): trim, 1.2 s fade-out, single-pass loudnorm to
//     about -14 LUFS (dynamic; for a bed of unknown level);
//   audioGain <dB>: trim, the same fade, then ONE constant gain (linear, no
//     dynamics), for a bed already normalised by music-lab/render.sh (two-pass
//     linear loudnorm), so the delivered loudness and range are the bed's own,
//     moved by exactly that gain. Pick the gain with tools/loudness.mjs.
export function audioFilter({ duration, audioGain = null }) {
  const fadeStart = Math.max(0, duration - 1.2).toFixed(3);
  const head = `atrim=0:${duration},afade=t=out:st=${fadeStart}:d=1.2`;
  if (audioGain != null) return `${head},volume=${Number(audioGain).toFixed(2)}dB,aresample=48000`;
  return `${head},loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000`;
}

// Chroma quantised 4 steps finer than luma: the brand's dark, low-contrast
// tints (the brass grid at 7 %, ink plates at 12-40 %) otherwise decode as
// neutral grey (about +6 % bitrate; brand/base.css .grid).
export const X264_PARAMS = 'chroma-qp-offset=-4';

export function encoderArgs({ fps, duration, out, frameFormat = 'png', audio = null, crf = 18, preset = 'slow',
  audioGain = null, audioBitrate = '192k' }) {
  const args = ['-hide_banner', '-loglevel', 'error', '-y',
    '-f', 'image2pipe', '-framerate', String(fps), '-c:v', frameFormat === 'png' ? 'png' : 'mjpeg', '-i', '-'];
  if (audio) {
    // A music bed: trimmed to the video, 1.2 s fade-out, loudness-normalised
    // to about -14 LUFS integrated (the level the big platforms play at).
    args.push('-i', audio);
  } else {
    // Silent AAC track: some platforms and players treat "no audio stream"
    // differently from "silence"; a real track keeps every export uniform.
    args.push('-f', 'lavfi', '-t', String(duration), '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000');
  }
  args.push('-map', '0:v:0', '-map', '1:a:0',
    '-vf', 'scale=out_color_matrix=bt709:out_range=tv:flags=accurate_rnd+full_chroma_int,format=yuv420p',
    '-c:v', 'libx264', '-preset', preset, '-crf', String(crf), '-x264-params', X264_PARAMS,
    '-profile:v', 'high', '-level:v', '4.1', '-pix_fmt', 'yuv420p', '-g', String(fps * 2),
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
    '-r', String(fps));
  if (audio) args.push('-af', audioFilter({ duration, audioGain }));
  // AAC-LC 48 kHz stereo; music.md §4.5 asks 384 kb/s for music masters
  // (--audio-bitrate 384k); the silent track stays at 192k.
  args.push('-c:a', 'aac', '-b:a', audioBitrate, '-ar', '48000', '-ac', '2',
    '-t', String(duration), '-map_metadata', '-1', '-movflags', '+faststart', out);
  return args;
}

export function startEncoder(opts) {
  const args = encoderArgs(opts);
  const proc = spawn(FFMPEG, args, { stdio: ['pipe', 'ignore', 'pipe'] });
  let stderr = '';
  let pipeError = null;
  proc.stderr.on('data', (d) => { stderr += d; });
  proc.stdin.on('error', (e) => { pipeError = e; });
  const done = new Promise((resolve, reject) => {
    proc.on('error', reject);
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}: ${stderr}`))));
  });
  return {
    args,
    write(buf) {
      if (pipeError) return Promise.reject(new Error(`ffmpeg pipe closed: ${pipeError.message}\n${stderr}`));
      return new Promise((resolve) => {
        if (proc.stdin.write(buf)) resolve();
        else proc.stdin.once('drain', resolve);
      });
    },
    end() { proc.stdin.end(); return done; },
  };
}
