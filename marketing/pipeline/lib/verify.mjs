// Verifies an exported MP4 the way an upload would see it:
//   - ffprobe: H.264, yuv420p, expected size / fps / frame count / duration,
//     AAC 48 kHz stereo, BT.709 tags
//   - faststart: the top-level 'moov' box comes before 'mdat' (read directly
//     from the file's box headers, not inferred)
//   - colour: one decoded frame matches the browser's own PNG of that frame
//     (catches a BT.601/BT.709 mismatch, which shifts every brand colour)
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { FFPROBE, FFMPEG } from './bin.mjs';

export function topLevelBoxes(file) {
  const fd = fs.openSync(file, 'r');
  const size = fs.fstatSync(fd).size;
  const boxes = [];
  let pos = 0;
  const head = Buffer.alloc(16);
  while (pos < size && boxes.length < 64) {
    fs.readSync(fd, head, 0, 16, pos);
    let len = head.readUInt32BE(0);
    const type = head.toString('latin1', 4, 8);
    if (len === 1) len = Number(head.readBigUInt64BE(8));
    else if (len === 0) len = size - pos;
    if (len < 8) break;
    boxes.push({ type, offset: pos, size: len });
    pos += len;
  }
  fs.closeSync(fd);
  return boxes;
}

export function probe(file) {
  const json = execFileSync(FFPROBE, ['-v', 'error', '-count_frames', '-show_streams', '-show_format', '-of', 'json', file]);
  return JSON.parse(json);
}

// Decodes frame `frame` of the MP4 back to RGB (BT.709, limited range ->
// full) and compares it with the PNG the browser produced for that frame.
// A wrong colour matrix shows up as a mean shift on every channel; heavy
// compression shows up as a low PSNR.
function rgbFromMp4(file, frame, width, height) {
  return execFileSync(FFMPEG, ['-v', 'error', '-i', file,
    '-vf', `select=eq(n\\,${frame}),scale=in_color_matrix=bt709:in_range=tv:out_range=pc:flags=accurate_rnd+full_chroma_int,format=rgb24`,
    '-frames:v', '1', '-f', 'rawvideo', '-'], { maxBuffer: width * height * 3 + 1024 });
}
function rgbFromPng(png, width, height) {
  return execFileSync(FFMPEG, ['-v', 'error', '-f', 'png_pipe', '-i', '-', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'],
    { input: png, maxBuffer: width * height * 3 + 1024 });
}
export function compareToReference(file, { frame, png, width, height }) {
  const a = rgbFromMp4(file, frame, width, height), b = rgbFromPng(png, width, height);
  const sumA = [0, 0, 0], sumB = [0, 0, 0];
  let se = 0;
  for (let i = 0; i < a.length; i++) { const c = i % 3; sumA[c] += a[i]; sumB[c] += b[i]; const d = a[i] - b[i]; se += d * d; }
  const n = a.length / 3;
  const meanA = sumA.map((v) => v / n), meanB = sumB.map((v) => v / n);
  const mse = se / a.length;
  return {
    psnr: mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse),
    meanShift: meanA.map((v, i) => +(v - meanB[i]).toFixed(2)),
  };
}

export function verify(file, expect) {
  const p = probe(file);
  const v = p.streams.find((s) => s.codec_type === 'video');
  const a = p.streams.find((s) => s.codec_type === 'audio');
  const boxes = topLevelBoxes(file);
  const order = boxes.map((b) => b.type);
  const moov = order.indexOf('moov'), mdat = order.indexOf('mdat');
  const checks = [
    ['video codec h264', v?.codec_name === 'h264', v?.codec_name],
    ['profile High', v?.profile === 'High', v?.profile],
    ['pix_fmt yuv420p', v?.pix_fmt === 'yuv420p', v?.pix_fmt],
    ['size', v?.width === expect.width && v?.height === expect.height, `${v?.width}x${v?.height}`],
    ['fps', v?.r_frame_rate === `${expect.fps}/1`, v?.r_frame_rate],
    ['frame count', Number(v?.nb_read_frames) === expect.frames, v?.nb_read_frames],
    ['colour tags bt709', v?.color_space === 'bt709' && v?.color_primaries === 'bt709' && v?.color_transfer === 'bt709', `${v?.color_space}/${v?.color_primaries}/${v?.color_transfer}`],
    ['audio aac', a?.codec_name === 'aac', a?.codec_name],
    ['audio 48 kHz stereo', a?.sample_rate === '48000' && a?.channels === 2, `${a?.sample_rate} Hz, ${a?.channels} ch`],
    ['faststart (moov before mdat)', moov !== -1 && mdat !== -1 && moov < mdat, order.join(' > ')],
    ['container duration', Math.abs(Number(p.format.duration) - expect.duration) < 0.05, p.format.duration],
  ];
  if (expect.reference) {
    // reference = { frame, png, neighbours: [{ frame, png }] }: browser PNGs
    // of frame n and of n-1 / n+1. The MP4's frame n must be closest to the
    // browser's frame n (no stale, dropped or shifted frames), its colours
    // must not shift (matrix / range errors), and its PSNR must stay high.
    const { frame, png, neighbours = [] } = expect.reference;
    const own = compareToReference(file, { frame, png, width: expect.width, height: expect.height });
    const others = neighbours.map((nb) => ({ frame: nb.frame,
      psnr: compareToReference(file, { frame, png: nb.png, width: expect.width, height: expect.height }).psnr }));
    checks.push([`MP4 frame ${frame} vs browser frame ${frame}: colour shift < 1.5/255 per channel`,
      own.meanShift.every((d) => Math.abs(d) < 1.5), `mean shift R,G,B = ${own.meanShift.join(', ')}`]);
    checks.push([`MP4 frame ${frame} vs browser frame ${frame}: PSNR >= 32 dB`, own.psnr >= 32, `${own.psnr.toFixed(2)} dB`]);
    if (others.length) {
      checks.push([`MP4 frame ${frame} is closest to browser frame ${frame} (not ${others.map((o) => o.frame).join(' / ')})`,
        others.every((o) => own.psnr > o.psnr),
        `${own.psnr.toFixed(2)} dB vs ${others.map((o) => `f${o.frame} ${o.psnr.toFixed(2)} dB`).join(', ')}`]);
    }
  }
  return {
    file, ok: checks.every((c) => c[1]),
    checks: checks.map(([name, ok, value]) => ({ name, ok, value: String(value) })),
    bytes: Number(p.format.size), bitrate_kbps: Math.round(Number(p.format.bit_rate) / 1000),
    video: { codec: v?.codec_name, profile: v?.profile, level: v?.level, pix_fmt: v?.pix_fmt },
  };
}
