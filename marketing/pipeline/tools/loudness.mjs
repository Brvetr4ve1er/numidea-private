#!/usr/bin/env node
// Loudness of a delivered file's audio (music.md §4.5; scripts-trailer.md
// §4.4): EBU R128 integrated loudness, loudness range and TRUE peak, measured
// on the encoded MP4 or M4A (lossy encoding adds peaks, so never on the WAV),
// plus the phone-speaker check (two 2-pole high-passes at 250 Hz, music.md §3.2).
//
//   node tools/loudness.mjs out/v01/v01__9x16__fr__music-s7.mp4 [more files]
//   node tools/loudness.mjs --simulate ../music-lab/out/v01-30-s7.wav --dur 30 --gain 0 --bitrate 384k
//     (runs the encoder's own audio chain, lib/encode.mjs audioFilter(), and its
//      AAC settings into a temporary .m4a and measures that: the gain a render
//      with --audio-gain will deliver, without rendering a frame)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { FFMPEG } from '../lib/bin.mjs';
import { audioFilter } from '../lib/encode.mjs';

// Targets (music.md §4.5): social / YouTube -14 LUFS, true peak <= -1 dBTP,
// loudness range <= 4 LU for a bed under text, phone loss <= 4 LU.
export const TARGET = { I: -14, tolI: 0.5, TP: -1, LRA: 4, phoneLoss: 4 };

// ffmpeg writes its filter summaries on stderr: return that.
function run(args) {
  const r = spawnSync(FFMPEG, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`ffmpeg exited ${r.status}: ${r.stderr.slice(-400)}`);
  return r.stderr;
}

function ebur128(file, pre = '') {
  const err = run(['-hide_banner', '-nostats', '-i', file, '-vn', '-af', `${pre}ebur128=peak=true`, '-f', 'null', '-']);
  const sum = err.slice(err.lastIndexOf('Summary:'));
  const num = (re) => { const m = sum.match(re); return m ? Number(m[1]) : null; };
  return { I: num(/I:\s+(-?[\d.]+|-inf) LUFS/), LRA: num(/LRA:\s+(-?[\d.]+) LU/), TP: num(/Peak:\s+(-?[\d.]+|-inf) dBFS/) };
}
// Two-decimal integrated loudness, computed here from the decoded samples
// (ITU-R BS.1770-4: K-weighting at 48 kHz, 400 ms blocks with 75 % overlap,
// absolute gate -70 LKFS, relative gate -10 LU). ffmpeg's ebur128 filter
// prints one decimal; loudnorm's own measurement pass reads about 0.2 LU low
// on these beds (-14.01 where ebur128 and this read -13.8), so it is not used.
function bs1770(file) {
  const r = spawnSync(FFMPEG, ['-v', 'error', '-i', file, '-vn', '-ac', '2', '-ar', '48000', '-f', 'f32le', '-'], { maxBuffer: 1 << 30 });
  if (r.status !== 0) throw new Error(`ffmpeg exited ${r.status}: ${String(r.stderr).slice(-400)}`);
  const raw = r.stdout;
  const x = new Float32Array(raw.buffer, raw.byteOffset, raw.length / 4);
  const n = x.length / 2;
  const bq = (b, a) => { let x1 = 0, x2 = 0, y1 = 0, y2 = 0; return (v) => { const y = b[0] * v + b[1] * x1 + b[2] * x2 - a[1] * y1 - a[2] * y2; x2 = x1; x1 = v; y2 = y1; y1 = y; return y; }; };
  const S1 = [[1.53512485958697, -2.69169618940638, 1.19839281085285], [1, -1.69065929318241, 0.73248077421585]];
  const S2 = [[1, -2, 1], [1, -1.99004745483398, 0.99007225036621]];
  const cum = [0, 1].map((c) => {
    const f1 = bq(...S1), f2 = bq(...S2), s = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) { const y = f2(f1(x[2 * i + c])); s[i + 1] = s[i] + y * y; }
    return s;
  });
  const B = 19200, H = 4800, z = [];
  for (let s = 0; s + B <= n; s += H) z.push((cum[0][s + B] - cum[0][s] + cum[1][s + B] - cum[1][s]) / B);
  const L = (v) => -0.691 + 10 * Math.log10(v);
  const mean = (a) => a.reduce((p, q) => p + q, 0) / a.length;
  const abs = z.filter((v) => L(v) > -70);
  if (!abs.length) return { I: -Infinity };
  const rel = L(mean(abs)) - 10;
  return { I: +L(mean(abs.filter((v) => L(v) > rel))).toFixed(2) };
}

export function loudness(file) {
  const r = ebur128(file);
  const p = bs1770(file);
  const phone = ebur128(file, 'highpass=f=250:poles=2,highpass=f=250:poles=2,');
  const out = {
    file, integrated_lufs: r.I, integrated_lufs_bs1770: p.I, loudness_range_lu: r.LRA, true_peak_dbtp: r.TP,
    phone_lufs: phone.I, phone_loss_lu: +(r.I - phone.I).toFixed(1),
  };
  out.checks = [
    { name: `integrated loudness ${TARGET.I} ± ${TARGET.tolI} LUFS (EBU R128, encoded file)`, ok: Math.abs(p.I - TARGET.I) <= TARGET.tolI && Math.abs(r.I - TARGET.I) <= TARGET.tolI, value: `${r.I} LUFS (ebur128); ${p.I.toFixed(2)} LUFS (BS.1770-4, 2 decimals)` },
    { name: `true peak <= ${TARGET.TP} dBTP (encoded file)`, ok: r.TP <= TARGET.TP, value: `${r.TP} dBTP` },
    { name: `loudness range <= ${TARGET.LRA} LU`, ok: r.LRA <= TARGET.LRA, value: `${r.LRA} LU` },
    { name: `phone-speaker loss <= ${TARGET.phoneLoss} LU (2 x 2-pole high-pass at 250 Hz)`, ok: out.phone_loss_lu <= TARGET.phoneLoss, value: `${phone.I} LUFS (-${out.phone_loss_lu} LU)` },
  ];
  out.ok = out.checks.every((c) => c.ok);
  return out;
}

// The encoder's audio chain and AAC settings, audio only, into a temp .m4a.
export function simulate({ src, duration, gain, bitrate = '192k' }) {
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'loud-')), 'sim.m4a');
  run(['-hide_banner', '-loglevel', 'error', '-y', '-i', src, '-af', audioFilter({ duration, audioGain: gain }),
    '-c:a', 'aac', '-b:a', bitrate, '-ar', '48000', '-ac', '2', '-t', String(duration), tmp]);
  const r = loudness(tmp);
  fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
  return { ...r, file: `simulated: ${path.basename(src)} gain ${gain} dB, ${bitrate}` };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const o = { files: [] };
  for (let i = 0; i < argv.length; i++) { if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i]; else o.files.push(argv[i]); }
  const show = (r) => console.log(`${r.file}\n  ${r.checks.map((c) => `${c.ok ? 'ok ' : 'BAD'} ${c.name}: ${c.value}`).join('\n  ')}`);
  let bad = 0;
  if (o.simulate) {
    const r = simulate({ src: o.simulate, duration: Number(o.dur || 30), gain: o.gain == null ? null : Number(o.gain), bitrate: o.bitrate || '192k' });
    show(r); if (!r.ok) bad++;
    if (o.json) fs.writeFileSync(o.json, JSON.stringify(r, null, 2));
  }
  const all = [];
  for (const f of o.files) { const r = loudness(f); all.push(r); show(r); if (!r.ok) bad++; }
  if (o.json && all.length) fs.writeFileSync(o.json, JSON.stringify(all, null, 2));
  process.exit(bad ? 1 : 0);
}
