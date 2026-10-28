// Render-speed benchmark for one video at 9:16 (the heaviest format).
import fs from 'node:fs';
import { renderAll } from '../render.mjs';
const video = process.argv[2] || 'videos/test-3s.html';
const base = { ratios: ['9x16'], langs: ['fr'], theme: 'arcanum', audio: null, crf: 18, still: null, determinism: false, out: 'out/bench', quiet: true, video };
const runs = [
  { browser: 'shell', frames: 'png', workers: 1, preset: 'slow' },
  { browser: 'shell', frames: 'png', workers: 2, preset: 'slow' },
  { browser: 'shell', frames: 'png', workers: 4, preset: 'slow' },
  { browser: 'shell', frames: 'png', workers: 6, preset: 'slow' },
  { browser: 'shell', frames: 'jpeg', workers: 4, preset: 'slow' },
  { browser: 'chrome', frames: 'png', workers: 4, preset: 'slow' },
  { browser: 'shell', frames: 'png', workers: 4, preset: 'medium' },
];
const rows = [];
for (const r of runs) {
  const rep = await renderAll({ ...base, ...r });
  const j = rep.jobs[0];
  const row = { ...r, capture_fps: j.timing_s.capture_fps, total_s: j.timing_s.total, realtime_factor: j.timing_s.realtime_factor,
    s_per_video_second: +(j.timing_s.total / j.meta.duration).toFixed(2), kb: Math.round(j.verify.bytes / 1024), verify_ok: j.verify.ok,
    psnr: j.verify.checks.find((c) => c.name.includes('PSNR'))?.value };
  rows.push(row);
  console.log(JSON.stringify(row));
}
fs.writeFileSync('out/bench/bench.json', JSON.stringify({ at: new Date().toISOString(), video, rows }, null, 2));
