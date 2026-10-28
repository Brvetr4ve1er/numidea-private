// Repeated, interleaved runs of the main candidates (variance on a shared VM).
import fs from 'node:fs';
import { renderAll } from '../render.mjs';
const steal = () => { const f = fs.readFileSync('/proc/stat', 'utf8').split('\n')[0].trim().split(/\s+/).slice(1).map(Number); return { steal: f[7], total: f.reduce((a, b) => a + b, 0) }; };
const base = { ratios: ['9x16'], langs: ['fr'], theme: 'arcanum', audio: null, crf: 18, still: null, determinism: false, out: 'out/bench', quiet: true, video: 'videos/test-3s.html' };
const C = {
  'shell png w1 slow': { browser: 'shell', frames: 'png', workers: 1, preset: 'slow' },
  'shell png w4 slow': { browser: 'shell', frames: 'png', workers: 4, preset: 'slow' },
  'chrome png w4 slow': { browser: 'chrome', frames: 'png', workers: 4, preset: 'slow' },
  'shell png w4 medium': { browser: 'shell', frames: 'png', workers: 4, preset: 'medium' },
  'shell jpeg w4 medium': { browser: 'shell', frames: 'jpeg', workers: 4, preset: 'medium' },
};
const res = Object.fromEntries(Object.keys(C).map((k) => [k, []]));
for (let rep = 0; rep < 3; rep++) for (const [k, v] of Object.entries(C)) {
  const s0 = steal(); const r = await renderAll({ ...base, ...v }); const s1 = steal();
  const j = r.jobs[0];
  res[k].push({ total: j.timing_s.total, fps: j.timing_s.capture_fps, steal_pct: +(100 * (s1.steal - s0.steal) / (s1.total - s0.total)).toFixed(1) });
}
const out = {};
for (const [k, a] of Object.entries(res)) {
  const t = a.map((x) => x.total).sort((p, q) => p - q);
  out[k] = { totals_s: a.map((x) => x.total), median_total_s: t[1], median_s_per_video_second: +(t[1] / 3).toFixed(2), capture_fps: a.map((x) => x.fps), steal_pct: a.map((x) => x.steal_pct) };
  console.log(k.padEnd(22), JSON.stringify(out[k]));
}
fs.writeFileSync('out/bench/bench2.json', JSON.stringify({ at: new Date().toISOString(), cpus: 4, results: out }, null, 2));
