#!/usr/bin/env node
// PRIVATE. Writes out/v01/REPORT.md for the V01-30 FR + EN batch
// (tools/render-v01-master.sh): every file, an independent ffprobe pass over
// every MP4 (not the renderer's own verify), the renderers' checks, the
// preflight sweeps (safe box, scene splices, the 4:5 crop), loudness, the
// silent / music picture identity, the on-screen copy re-checked against the
// site at the render commit, the review issues of 2026-10-27 with what was
// done and measured on the ENCODED files, and the timings of every step.
//
//   node tools/v01-report.mjs [--out ../out/v01] [--round1 ../_review/v01-round1/out-v01]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { FFMPEG, FFPROBE, SITE_REPO, SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
import { startServer } from '../lib/server.mjs';
import { topLevelBoxes } from '../lib/verify.mjs';
import { X264_PARAMS } from '../lib/encode.mjs';

const argv = process.argv.slice(2);
const o = { out: '../out/v01', round1: '../_review/v01-round1/out-v01' };
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i];
const OUT = path.resolve(PIPELINE_ROOT, o.out);
const R1 = path.resolve(PIPELINE_ROOT, o.round1);
const LANGS = ['fr', 'en'];
const LN = { fr: 'French', en: 'English' };
const rel = (f) => path.relative(OUT, f) || '.';
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(OUT, f), 'utf8'));
const sha = (f) => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const kb = (n) => (n >= 1 << 20 ? `${(n / (1 << 20)).toFixed(2)} MB` : `${(n / 1024).toFixed(0)} KB`);
const yes = (b) => (b ? 'pass' : '**FAIL**');
const problems = [];

// ------------------------------------------------------------ the reports
const R = { silent: {}, music: {}, crop: {} };
for (const L of LANGS) {
  R.silent[L] = readJson(`v01__${L}__silent.report.json`);
  R.music[L] = readJson(`v01__${L}__music-s7.report.json`);
  R.crop[L] = { silent: readJson(`v01__4x5__${L}__li__silent.report.json`), music: readJson(`v01__4x5__${L}__li__music-s7.report.json`) };
}
R.liSilent = readJson('src/v01__li__silent.report.json');
R.liMusic = readJson('src/v01__li__music-s7.report.json');
R.preflight = readJson('preflight/preflight.json');
R.stills = readJson('stills/stills.json');
R.loudness = readJson('loudness.json');
R.strips = fs.existsSync(path.join(OUT, 'review/strips.json')) ? readJson('review/strips.json') : [];
const SLICE = fs.existsSync(path.join(OUT, 'preflight/slice.json')) ? readJson('preflight/slice.json') : null;
R.checks = fs.readdirSync(path.join(OUT, 'checks')).filter((f) => f.endsWith('.report.json')).sort().map((f) => readJson(`checks/${f}`));
const timings = fs.readFileSync(path.join(OUT, 'timings.tsv'), 'utf8').trim().split('\n').slice(1).map((l) => { const [step, start, s] = l.split('\t'); return { step, start, s: Number(s) }; });
const jobs = [...LANGS.flatMap((L) => R.silent[L].jobs), ...R.liSilent.jobs, ...LANGS.flatMap((L) => R.music[L].jobs), ...R.liMusic.jobs];
const checkJobs = R.checks.flatMap((r) => r.jobs);
const jobFor = (file) => jobs.find((j) => path.resolve(PIPELINE_ROOT, j.file) === file);
const job = (L, ratio, tag = 'silent', li = false) => jobFor(path.join(OUT, li ? `src/v01__9x16__${L}__li__${tag}.mp4` : `v01__${ratio}__${L}__${tag}.mp4`));
const env = R.silent.fr.env;

// ------------------------------------------------- independent ffprobe pass
function probe(file) {
  const p = JSON.parse(execFileSync(FFPROBE, ['-v', 'error', '-count_frames', '-show_streams', '-show_format', '-of', 'json', file]));
  const v = p.streams.find((s) => s.codec_type === 'video'), a = p.streams.find((s) => s.codec_type === 'audio');
  const boxes = topLevelBoxes(file).map((b) => b.type);
  const r = {
    codec: v?.codec_name, profile: v?.profile, pix_fmt: v?.pix_fmt, size: `${v?.width}x${v?.height}`, fps: v?.r_frame_rate, avg_fps: v?.avg_frame_rate,
    frames: Number(v?.nb_read_frames), v_dur: Number(v?.duration), a_codec: a ? `${a.codec_name} ${a.profile}` : 'none', a_rate: a?.sample_rate, a_ch: a?.channels,
    a_kbps: a ? Math.round(Number(a.bit_rate) / 1000) : null, a_dur: Number(a?.duration), dur: Number(p.format.duration), bytes: Number(p.format.size),
    kbps: Math.round(Number(p.format.bit_rate) / 1000), boxes: boxes.join(' > '), faststart: boxes.indexOf('moov') > -1 && boxes.indexOf('moov') < boxes.indexOf('mdat'),
    colour: `${v?.color_space}/${v?.color_primaries}/${v?.color_transfer}`,
  };
  r.ok = r.codec === 'h264' && r.pix_fmt === 'yuv420p' && r.fps === '30/1' && r.avg_fps === '30/1' && r.frames === 900 && r.faststart
    && /^aac/.test(r.a_codec) && r.a_rate === '48000' && r.a_ch === 2 && Math.abs(r.dur - 30) < 0.0005 && Math.abs(r.v_dur - 30) < 0.0005;
  return r;
}
const md5Stream = (file, sel) => execFileSync(FFMPEG, ['-v', 'error', '-i', file, '-map', `0:${sel}:0`, '-c', 'copy', '-f', 'md5', '-']).toString().trim().replace(/^MD5=/, '');

const MASTERS = LANGS.flatMap((L) => [
  { L, file: `v01__9x16__${L}__silent.mp4`, what: `9:16 ${L.toUpperCase()}, silent track (the default until the listening test)`, use: L === 'fr' ? 'Instagram / Facebook Reel, YouTube Short (FR)' : 'TikTok EN, Instagram Reel, YouTube Short EN' },
  { L, file: `v01__9x16__${L}__music-s7.mp4`, what: `9:16 ${L.toUpperCase()}, code-made bed seed 7 (preview)`, use: 'the same, once the owner has listened (G5)' },
  { L, file: `v01__16x9__${L}__silent.mp4`, what: `16:9 ${L.toUpperCase()}, silent track, no pointer`, use: L === 'fr' ? 'YouTube upload and channel trailer' : 'YouTube upload (EN)' },
  { L, file: `v01__16x9__${L}__music-s7.mp4`, what: `16:9 ${L.toUpperCase()}, code-made bed seed 7 (preview)`, use: 'the same, once the owner has listened (G5)' },
  { L, file: `v01__4x5__${L}__li__silent.mp4`, what: `4:5 ${L.toUpperCase()} LinkedIn, crop y 90-1440 of the 9:16 pointer=li render, silent`, use: "the founder's LinkedIn" },
  { L, file: `v01__4x5__${L}__li__music-s7.mp4`, what: `4:5 ${L.toUpperCase()} LinkedIn, crop of the 9:16 pointer=li music render (preview)`, use: 'the same, once the owner has listened (G5)' },
]);
const SOURCES = LANGS.flatMap((L) => [`src/v01__9x16__${L}__li__silent.mp4`, `src/v01__9x16__${L}__li__music-s7.mp4`]).map((file) => ({ file }));
for (const m of [...MASTERS, ...SOURCES]) m.probe = probe(path.join(OUT, m.file));
for (const m of [...MASTERS, ...SOURCES]) if (!m.probe.ok) problems.push(`${m.file}: the independent ffprobe pass failed (${JSON.stringify(m.probe)})`);

const verifyOf = (file) => {
  const m = /v01__4x5__(\w+)__li__(silent|music-s7)\.mp4$/.exec(file);
  if (m) return R.crop[m[1]][m[2] === 'silent' ? 'silent' : 'music'].verify;
  return jobFor(path.join(OUT, file))?.verify;
};
for (const m of [...MASTERS, ...SOURCES]) {
  m.verify = verifyOf(m.file);
  if (!m.verify?.ok) problems.push(`${m.file}: renderer verify not OK: ${(m.verify?.checks || []).filter((c) => !c.ok).map((c) => `${c.name} (${c.value})`).join('; ')}`);
}

// picture identity: silent vs music, the H.264 bitstreams
const pairs = LANGS.flatMap((L) => [[`v01__9x16__${L}__silent.mp4`, `v01__9x16__${L}__music-s7.mp4`], [`v01__16x9__${L}__silent.mp4`, `v01__16x9__${L}__music-s7.mp4`],
  [`src/v01__9x16__${L}__li__silent.mp4`, `src/v01__9x16__${L}__li__music-s7.mp4`], [`v01__4x5__${L}__li__silent.mp4`, `v01__4x5__${L}__li__music-s7.mp4`]]);
const identity = pairs.map(([a, b]) => { const ma = md5Stream(path.join(OUT, a), 'v'), mb = md5Stream(path.join(OUT, b), 'v'); return { a, b, ma, same: ma === mb }; });
for (const x of identity) if (!x.same) problems.push(`${x.a} and ${x.b}: the pictures differ (H.264 bitstreams not identical)`);

// ------------------------------------------------------------ copy re-check
const site = fs.readFileSync(path.join(SITE_REPO, 'assets/app.js'), 'utf8') + '\n' + fs.readFileSync(path.join(SITE_REPO, 'index.html'), 'utf8');
const norm = (s) => s.replace(/<\/?[a-z][^>]*>/gi, '').replace(/&amp;/g, '&').replace(/&nbsp;|[  ]/g, ' ').replace(/\\'/g, "'").replace(/\s+/g, ' ');
const SITE = norm(site).toLowerCase();
const NOT_SITE = { F25: 'mock-up placeholder (campaign kit), picture text, not a claim', F30: 'pointer label per placement, not a fact' };
const copyRows = (j) => j.ready.steps.copy.map((c) => {
  if (c.key.startsWith('mark:')) return { ...c, check: `mark rebuilt in code (${c.ref || c.src})` };
  if (NOT_SITE[c.src]) return { ...c, check: NOT_SITE[c.src] };
  const segs = c.text.split(' · ').map((s) => s.replace(/[.,]$/, '').trim().toLowerCase());
  const miss = segs.filter((s) => !SITE.includes(s));
  if (miss.length) problems.push(`copy ${c.key}.${c.lang} « ${c.text} »: not found in the site at the render commit: ${miss.join('; ')}`);
  return { ...c, check: miss.length ? `**NOT FOUND**: ${miss.join('; ')}` : `found in assets/app.js / index.html${segs.length > 1 ? ` (${segs.length} segments)` : ''}` };
});
const copyBy = Object.fromEntries(LANGS.map((L) => [L, copyRows(job(L, '9x16'))]));
const liPointer = Object.fromEntries(LANGS.map((L) => [L, job(L, '9x16', 'silent', true).ready.steps.copy.find((c) => c.key === 'T52')]));

// ------------------------------------------------------------ other checks
const pf = R.preflight.variants;
for (const v of pf) {
  if (v.sweep.violations || v.sweep.splices || v.sweep.crop_cuts || v.page_errors.length || !v.fonts_ok || !v.images_ok)
    problems.push(`preflight ${v.variant}: ${v.sweep.violations} safe violation(s), ${v.sweep.splices} splice(s), ${v.sweep.crop_cuts} crop cut(s), ${v.page_errors.length} page error(s)`);
  for (const s of v.seams) if (s.same === false) problems.push(`preflight ${v.variant}: master f${s.masterFrame} differs from the ${s.cut} cut`);
}
for (const j of [...jobs, ...checkJobs]) {
  if (!j.determinism || j.determinism.identical !== j.determinism.checked) problems.push(`${j.file}: determinism ${j.determinism?.identical}/${j.determinism?.checked}`);
  if (j.page_errors.length) problems.push(`${j.file}: page errors ${j.page_errors.join(' | ')}`);
  if (!j.verify.ok) problems.push(`${j.file}: verify not OK`);
  for (const f of j.ready.steps.fit) if (f.status !== 'ok') problems.push(`${j.file}: fit ${f.id}/${f.state} ${f.status}`);
}
for (const l of R.loudness) if (!l.ok) problems.push(`${l.file}: loudness off target: ${l.checks.filter((c) => !c.ok).map((c) => c.value).join('; ')}`);
if (!SLICE) problems.push('the determinism slice (tools/v01-slice.mjs) was not run');
else for (const x of SLICE) if (x.mismatches.length) problems.push(`determinism slice ${x.ratio} ${x.lang} f${x.frames[0]}-f${x.frames[1]}: frames ${x.mismatches.join(', ')} differ between the two passes`);
for (const c of R.stills.checks) if (!c.ok) problems.push(`stills: ${c.name}${c.value ? ' (' + c.value + ')' : ''}`);

// ------------------------------------------- measured on the ENCODED files
// Decoded frame n of an MP4 (BT.709 limited range -> full range RGB).
function decode(mp4, n, { w, h }) {
  return execFileSync(FFMPEG, ['-v', 'error', '-i', mp4, '-vf', `select=eq(n\\,${n}),scale=in_color_matrix=bt709:in_range=tv:out_range=pc:flags=accurate_rnd+full_chroma_int,format=rgb24`,
    '-frames:v', '1', '-f', 'rawvideo', '-'], { maxBuffer: 1 << 28 }).subarray(0, w * h * 3);
}
const decodePng = (png, { w, h }) => execFileSync(FFMPEG, ['-v', 'error', '-i', png, '-vf', 'format=rgb24', '-frames:v', '1', '-f', 'rawvideo', '-'], { maxBuffer: 1 << 28 }).subarray(0, w * h * 3);
// Share of pixels that differ from the ground by more than 12 levels (issue 1's measure).
function coverage(buf, { w, h }) {
  const g = [0, 1, 2].map((c) => { const hist = new Map(); for (let i = c; i < buf.length; i += 3 * 97) hist.set(buf[i], (hist.get(buf[i]) || 0) + 1); return [...hist].sort((a, b) => b[1] - a[1])[0][0]; });
  let n = 0;
  for (let i = 0; i < w * h * 3; i += 3) if (Math.max(Math.abs(buf[i] - g[0]), Math.abs(buf[i + 1] - g[1]), Math.abs(buf[i + 2] - g[2])) > 12) n++;
  return { pct: +(100 * n / (w * h)).toFixed(2), ground: g };
}
// The grid in an empty band (rows y0-y1): the brighter of the two columns at
// each 64 px line (centred tiles), against the ground between lines.
function grid(buf, { w, h }, y0, y1) {
  const offX = ((w - 64) / 2) % 64, offY = ((h - 64) / 2) % 64;
  const ph = (v, off) => (((v - off) % 64) + 64) % 64;
  const col = (dx) => { const s = [0, 0, 0]; let n = 0; for (let y = y0; y < y1; y++) { if (ph(y, offY) < 4 || ph(y, offY) > 60) continue; for (let x = 0; x < w; x++) if (ph(x, offX) === dx) { const i = (y * w + x) * 3; s[0] += buf[i]; s[1] += buf[i + 1]; s[2] += buf[i + 2]; n++; } } return s.map((v) => v / n); };
  const ground = (() => { const s = [0, 0, 0]; let n = 0; for (let y = y0; y < y1; y++) { if (ph(y, offY) < 8 || ph(y, offY) > 56) continue; for (let x = 0; x < w; x++) { if (ph(x, offX) < 8 || ph(x, offX) > 56) continue; const i = (y * w + x) * 3; s[0] += buf[i]; s[1] += buf[i + 1]; s[2] += buf[i + 2]; n++; } } return s.map((v) => v / n); })();
  const cols = [col(0), col(1)];
  const line = cols.sort((a, b) => b[0] + b[1] + b[2] - (a[0] + a[1] + a[2]))[0];
  const d = line.map((v, i) => +(v - ground[i]).toFixed(2));
  return { line: line.map((v) => +v.toFixed(1)), ground: ground.map((v) => +v.toFixed(1)), delta: d, brass: d[0] - d[2] >= 2.5 };
}
const S916 = { w: 1080, h: 1920 }, S169 = { w: 1920, h: 1080 }, S45 = { w: 1080, h: 1350 };
const M = {
  cov: {
    new916: coverage(decode(path.join(OUT, 'v01__9x16__fr__silent.mp4'), 0, S916), S916),
    new916_90: coverage(decode(path.join(OUT, 'v01__9x16__fr__silent.mp4'), 90, S916), S916),
    new169: coverage(decode(path.join(OUT, 'v01__16x9__fr__silent.mp4'), 0, S169), S169),
    new45: coverage(decode(path.join(OUT, 'v01__4x5__fr__li__silent.mp4'), 0, S45), S45),
  },
  grid: {
    new916: grid(decode(path.join(OUT, 'v01__9x16__fr__silent.mp4'), 0, S916), S916, 0, 280),
    new169: grid(decode(path.join(OUT, 'v01__16x9__fr__silent.mp4'), 0, S169), S169, 0, 180),
    new45: grid(decode(path.join(OUT, 'v01__4x5__fr__li__silent.mp4'), 0, S45), S45, 0, 180),
    browser916: grid(decodePng(path.join(OUT, 'stills/v01__9x16__fr__thumb__f000.png'), S916), S916, 0, 280),
  },
};
const r1 = fs.existsSync(path.join(R1, 'v01__9x16__fr__silent.mp4'));
if (r1) {
  M.cov.old916 = coverage(decode(path.join(R1, 'v01__9x16__fr__silent.mp4'), 0, S916), S916);
  M.cov.old169 = coverage(decode(path.join(R1, 'v01__16x9__fr__silent.mp4'), 0, S169), S169);
  M.grid.old916 = grid(decode(path.join(R1, 'v01__9x16__fr__silent.mp4'), 0, S916), S916, 0, 280);
  M.grid.old169 = grid(decode(path.join(R1, 'v01__16x9__fr__silent.mp4'), 0, S169), S169, 0, 180);
}
for (const [k, g] of Object.entries(M.grid)) if (!/old/.test(k) && !g.brass) problems.push(`grid ${k}: the line decodes as neutral (${g.delta.join('/')}), not brass`);
// Bitrate cost of the chroma setting: total kb/s of the silent masters, this round vs round 1.
const kbpsOld = r1 ? Object.fromEntries(['v01__9x16__fr__silent.mp4', 'v01__16x9__fr__silent.mp4'].map((f) => [f, Math.round(Number(JSON.parse(execFileSync(FFPROBE, ['-v', 'error', '-show_format', '-of', 'json', path.join(R1, f)])).format.bit_rate) / 1000)])) : {};

// --------------------------------------- the line breaks, read from the page
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars'] });
const LINES = {};
try {
  for (const L of LANGS) for (const ratio of ['9x16', '16x9']) {
    const [w, h] = ratio === '9x16' ? [1080, 1920] : [1920, 1080];
    const page = await (await browser.newContext({ viewport: { width: w, height: h } })).newPage();
    await page.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=${L}&render`, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__scene);
    await page.evaluate(() => window.__scene.ready());
    LINES[`${ratio}:${L}`] = await page.evaluate(() => {
      const lines = (el) => {
        const out = [];
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (n.parentElement.closest('.sep.at-break')) continue; // hidden at a break
          const r = document.createRange();
          for (let i = 0; i < n.data.length; i++) {
            r.setStart(n, i); r.setEnd(n, i + 1);
            const q = r.getClientRects()[0]; if (!q) continue;
            let ln = out.find((l) => Math.abs(l.top - q.top) < q.height / 2);
            if (!ln) out.push(ln = { top: q.top, text: '' });
            ln.text += n.data[i];
          }
        }
        return out.sort((a, b) => a.top - b.top).map((l) => l.text.trim().replace(/\s+/g, ' '));
      };
      const s = window.__scene; s.seekFrame(0);
      const hook = lines(document.getElementById('t40'));
      s.seekFrame(600);
      const t31 = lines(document.getElementById('t31'));
      s.seekFrame(890);
      return { hook, t31, t50: lines(document.getElementById('t50')), t51: lines(document.getElementById('t51')) };
    });
    await page.close();
  }
} finally { await browser.close(); await server.close(); }
if (LINES['16x9:fr'].hook.join(' / ').toLowerCase().includes('sur / mesure')) problems.push('16:9 FR hook still breaks inside « sur mesure »');
for (const [k, v] of Object.entries(LINES)) for (const b of ['t50', 't51']) if (v[b].some((l) => /·$/.test(l))) problems.push(`${k} ${b}: a line still ends on its « · »`);

// The measures behind §1, kept next to the preflight results.
fs.writeFileSync(path.join(OUT, 'preflight', 'measures.json'), JSON.stringify({ coverage: M.cov, grid: M.grid, lines: LINES, kbps_round1: kbpsOld }, null, 2));

// --------------------------------------------------------------- the files
function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])); }
const all = walk(OUT).filter((f) => !f.endsWith('REPORT.md')).sort();
const inv = (filter) => all.filter(filter).map((f) => `| \`${rel(f)}\` | ${kb(fs.statSync(f).size)} | \`${sha(f).slice(0, 16)}\` |`).join('\n');

// --------------------------------------------------------------- markdown
const jt = (file) => jobFor(path.join(OUT, file))?.timing_s;
const renderCell = (m) => {
  const c = /v01__4x5__(\w+)__li__(silent|music-s7)/.exec(m.file);
  if (c) { const t = R.crop[c[1]][c[2] === 'silent' ? 'silent' : 'music'].timing_s, s = jt(`src/v01__9x16__${c[1]}__li__${c[2]}.mp4`); return `source render ${s.total} s + crop/encode ${t.crop_encode} s (verify ${t.verify_and_contact} s)`; }
  const x = jt(m.file); return `${x.total} s (capture ${x.capture} s at ${x.capture_fps} fps; verify ${x.verify} s)`;
};
const loudOf = (file) => R.loudness.find((l) => path.basename(l.file) === path.basename(file));
const vchk = (v, re) => v.checks.find((c) => re.test(c.name));
const totalMachine = timings.reduce((a, x) => a + x.s, 0);
const pfv = (v) => pf.find((x) => x.variant === v);
const fitRow = (id, state) => { const cell = (j) => { const g = j?.ready.steps.fit.find((f) => f.id === id && f.state === state); return g ? `${g.size} px, ${g.lines} line${g.lines > 1 ? 's' : ''}, box ${g.box} (${g.range.join('–')}, floor ${g.floor}) ${g.status}` : '—'; };
  return `| ${id}${state && state !== 'mock' ? ' / ' + state : ''} | ${LANGS.flatMap((L) => [cell(job(L, '9x16')), cell(job(L, '16x9')), cell(job(L, '9x16', 'silent', true))]).join(' | ')} |`; };
const fitIds = job('fr', '9x16').ready.steps.fit.map((f) => [f.id, f.state]);
const lay = (L, ratio, li = false) => job(L, ratio, 'silent', li).ready.steps.layout;
const g = M.grid, c = M.cov;
const fmtD = (x) => `(${x.delta.map((v) => (v >= 0 ? '+' : '') + v).join(', ')})`;
const stripList = (name) => R.strips.filter((s) => s.file.includes(`__${name}__`)).map((s) => `\`${s.file}\``).join(', ');
const allSplices = pf.reduce((a, v) => a + v.sweep.splices, 0), allCuts = pf.filter((v) => v.pointer).reduce((a, v) => a + v.sweep.crop_cuts, 0);
const warmRounds = [...jobs, ...checkJobs].flatMap((j) => j.warm || []).map((w) => w.rounds);

const md = [];
md.push(`# V01-30 « L'atlas » — French and English masters, render report

PRIVATE. Never copy this folder, or anything in it, into \`/home/user/STICKITTY.INC\`.

- **What:** the 30 s brand launch trailer, French and English masters, 900 frames at 30 fps, Arcanum throughout (scripts-trailer.md §4; PLAN.md §9). Coded motion design only: HTML/CSS/JS scenes on a deterministic clock, captured frame by frame by headless Chromium, encoded by ffmpeg (libx264 + AAC).
- **This round:** the reviewers' nine issues of 2026-10-27 were each checked against the files; the real ones are fixed in the scene code and every file was rendered again (§1). The English master is new. The previous round's outputs are kept, unchanged, in \`_review/v01-round1/out-v01/\` for comparison.
- **Page:** \`pipeline/videos/v01.html\` + \`pipeline/videos/v01.js\` (all five scenes; no \`cut\` = the 30 s master). Copy: \`pipeline/copy/trailer.json\` (Appendix A). Batch: \`pipeline/tools/render-v01-master.sh\` (\`npm run v01:master\`); this report: \`pipeline/tools/v01-report.mjs\`.
- **Rendered:** batch started ${timings[0].start.replace('T', ' ').replace('Z', ' UTC')} (timings in §9), against the site at \`${env.site_assets_commit}\` (assets read only, mounted at \`/site/\`). Toolchain: ${env.ffmpeg.split(' https')[0]} (libx264 \`${X264_PARAMS}\`, native AAC); ${env.ffprobe.split(' https')[0]}; Chromium headless shell ${env.browser_version}; ${env.cpus} CPUs; renders run one after another.
- **Default = the silent files.** The owner has not done the listening test (P3 / G5), so the \`music-s7\` files are previews with the code-made bed (\`bed.mjs --bars 8.5 --dur 30 --seed 7\`, ledger M-0003). Same picture, bit for bit (§6).
- **Not rendered:** Arabic (waits for the native reviewer, G1; the page lays it out and an AR render refuses to start without \`arReviewed\`).
- **Verdict:** ${problems.length ? `**${problems.length} problem(s)**, listed in §11.` : 'every check below passes.'}

## 1. The review of 2026-10-27: each issue, checked, and what was done

| # | Issue (severity) | Checked against the files | Decision | What changed | Measured after (encoded files) |
|---|---|---|---|---|---|
| 1 | f0 and the default YouTube thumbnail are the hook alone on an empty grid (major) | Confirmed: round-1 9:16 f0 decodes ${r1 ? `${c.old916.pct} %` : '—'} of pixels off the ground (16:9 ${r1 ? `${c.old169.pct} %` : '—'}); the 1280×720 YouTube thumbnail was made from f0, not from f300 as §4.6 says | **Fixed** | Plate I is set (inked) at f0 and the blueprint's brass browser outline (frame, chrome line, dots, address bar) is drawn at f0; only the page's inner parts draw over 0.10–2.60 and the plate drifts (\`v01.js\` T.bpPreset, \`blueprint.js\` preset). The YouTube thumbnail is now made only from the 16:9 f300 (\`stills/v01__16x9__{fr,en}__yt-thumb-1280x720__f300.png\`); no f0 YouTube thumbnail is produced | 9:16 f0: ${c.new916.pct} % of pixels off the ground (f90: ${c.new916_90.pct} %); 16:9 f0: ${c.new169.pct} %; 4:5 f0: ${c.new45.pct} % (in the 4:5 window Plate I sits below the frame: f0 there is the hook and the outline). A loop from f899 now returns to the hook, the plate and the drawing |
| 2 | The 16:9 hook breaks inside « sur mesure » (major) | Confirmed (round 1: « VOTRE SITE SUR / MESURE, ») | **Fixed** | A no-break rule at render time (\`runtime/copy.js\` NOBREAK, \`applyNobreak()\`): the phrase's words are wrapped in a \`white-space: nowrap\` span; the string is unchanged (the loader checks \`textContent\`). The same class of break was found in the new EN master (« Graphic designer & web / developer ») and is fixed the same way (« web developer ») | Hook lines read from the page: 16:9 FR « ${LINES['16x9:fr'].hook.join(' / ')} », 9:16 FR « ${LINES['9x16:fr'].hook.join(' / ')} », 16:9 EN « ${LINES['16x9:en'].hook.join(' / ')} »; T31 EN 9:16 « ${LINES['9x16:en'].t31.join(' / ')} ». Fit-text: 16:9 hook ${job('fr', '16x9').ready.steps.fit.find((f) => f.id === 'T40' && f.state === 'hook').size} px, 2 lines; safe box clean (§5) |
| 3 | Scene-change wipes splice the outgoing and incoming headings (major) | Confirmed: T42, the founder card and the wordmark entered on the exit's own wipe edge, in shared rows | **Fixed** | Each exit now ends on the scene boundary and the next scene's first block enters on it: S2 out 10.33–10.67 (f310–320), T42 in from 10.67 (f320–338); S3 out 15.00–15.33, founder card from 15.33; S4 out 22.33–22.67, wordmark from 22.67 (f680–698). The entrances keep §4.1's beats (the 10.67 chord, the 22.67 end-card chimes); each exit starts half a beat earlier than §4.1's "Out" time. A new check, \`scene.overlapCheck()\`, fails any frame where blocks of two scenes share rows within 200 px, and runs on all 900 frames of every variant | ${allSplices} spliced frame(s) in ${pf.length} variants × 900 frames (§5); the negative tests force T42 in at f315 and the wordmark in at f675 and both are caught. Frame-by-frame strips decoded from the masters: ${stripList('s2s3')}, ${stripList('s3s4')}, ${stripList('s4s5')} |
| 4 | The 4:5 crop cuts faq3 and Plate V into fragments; carousel slides 2 and 5 (major) | Confirmed (round 1: faq3's top at y 1265–1350 of the crop; Plate V's lantern alone in the corner) | **Fixed** | A layout for the crop (\`v01.js\` CROP45), used by the \`pointer=li\` source of the LinkedIn 4:5 and by the Instagram carousel stills (\`frame=45\`): faq3 is not shown (only 200–240 px of free height under the mock-up inside the window, below §3.4's 300 px minimum for a plate); Plate V 800×433 at y 1000–1433 under the end card, its rocks running off the right edge; the workbench 740×413 at y 1012–1425. \`scene.cropCheck()\` fails any frame where a plate crosses the window's edge | ${allCuts} plate(s) cut, all 900 frames of both pointer=li variants (§5). Carousel slides 2 and 5 re-exported (FR and EN, IG and LinkedIn) and the PDF rebuilt |
| 5 | The brass grid decodes as neutral grey; no --atmos glows or grid mask (minor) | Confirmed for the colour: round-1 9:16 f0 line ${r1 ? fmtD(g.old916) : '—'} over the ground (neutral). Tested: 2 px lines alone at half opacity still decoded neutral (+4.39/+4.39/+4.39); the loss is x264's chroma quantisation of a 1–2 code tint, not only 4:2:0 | **Fixed (colour); the glows and mask declined** | Grid lines 2 px wide on even pixel coordinates at the token's own 7 % (\`brand/base.css\` .grid), and the encoder quantises chroma 4 steps finer (\`lib/encode.mjs\` X264_PARAMS \`${X264_PARAMS}\`). Declined: the site's --atmos glows and its top-weighted grid mask. §4.1 sets the ground as --void with the brass grid at 64 px and 7 % for the whole trailer; the mask would remove the grid from the 9:16 band's lower half and the 16:9 lower third; and wide dark radial gradients band in 8-bit 4:2:0. It is a look change for the owner to ask for (§11) | Decoded line minus ground: 9:16 ${fmtD(g.new916)}, 16:9 ${fmtD(g.new169)}, 4:5 ${fmtD(g.new45)}; the browser frame ${fmtD(g.browser916)}: brass (R rises most, B least). Bitrate of the silent masters: 9:16 FR ${MASTERS.find((m) => m.file === 'v01__9x16__fr__silent.mp4').probe.kbps} kb/s${kbpsOld['v01__9x16__fr__silent.mp4'] ? ` (round 1: ${kbpsOld['v01__9x16__fr__silent.mp4']})` : ''}, 16:9 FR ${MASTERS.find((m) => m.file === 'v01__16x9__fr__silent.mp4').probe.kbps} kb/s${kbpsOld['v01__16x9__fr__silent.mp4'] ? ` (round 1: ${kbpsOld['v01__16x9__fr__silent.mp4']})` : ''}; the frames changed too, so this is not the chroma setting alone (measured alone on the same 300 frames: +6.3 %) |
| 6 | T50 and T51 end line 1 on their « · » (minor) | Confirmed | **Fixed** | The separator is its own span; once laid out, a separator left at a line break is hidden with \`visibility\` so nothing reflows (\`copy.js\` markSeparatorBreaks); the string is unchanged | 9:16 FR T50 « ${LINES['9x16:fr'].t50.join(' / ')} », T51 « ${LINES['9x16:fr'].t51.join(' / ')} »; 16:9 FR T50 « ${LINES['16x9:fr'].t50.join(' / ')} »; EN 9:16 T50 « ${LINES['9x16:en'].t50.join(' / ')} », T51 « ${LINES['9x16:en'].t51.join(' / ')} » |
| 7 | The mirror glide moves every block straight through the others; the three cards stack into one (minor) | Confirmed (round 1 f238–f240) | **Fixed** | Look-alike blocks take the nearest mirrored place: the three cards stay put and only their bars glide to the other side of each card; where a block must cross another on its row, the one behind yields with the overlap: the logo slot fades under the tab row, the hatched image dims to 28 % under the text column (\`runtime/mockup.js\`). Positions still come from the clock, layout only | Glide destinations: ${lay('fr', '9x16').mock.mirror.filter((x) => /card|image|button/.test(x)).join('; ')}. Strips f226–f251: ${stripList('mirror')} |
| 8 | The LinkedIn PDF pages are 0.54 pt taller than their painted area (minor) | Confirmed (MediaBox 1013.04 pt, content painted from the top over 1012.5 pt). The suggested box [0 0 810 1012.5] alone would not have fixed it: the content was drawn down from y 1013.04, so the strip at the bottom would have stayed unpainted | **Fixed** | The PDF is written by the pipeline (\`tools/v01-stills.mjs\` writePdf), not printed by Chromium: each page is exactly 810 × 1012.5 pt with MediaBox = CropBox = [0 0 810 1012.5], one image drawn over the whole box, the slide PNG's own pixels | ${R.stills.checks.filter((x) => /PDF/.test(x.name)).map((x) => `${x.lang.toUpperCase()}: ${x.value}`).join('; ')} (re-read and checked page by page; the image streams inflate to the PNGs' bytes) |
| 9 | The 4:5 crop cuts the S2 and S5 engravings and the S1 constellation (minor; the same as 4) | Partly confirmed: faq3 and Plate V, as in 4. Not confirmed for the constellation: it spans y 1290–1412, inside the window (round 1 and now); only single stars fall either side of y 1440, and Plate I (the ground) lies below the window | **Fixed** with 4; the constellation needed no change | As 4; the constellation's lines and nodes are in \`cropCheck()\` | As 4 |

Also found and fixed while rendering this round: **a fresh page could paint an engraving's first frame without its ink.** The S2 review cut failed its determinism check (6/7) on its f0 = master f100 (16:9); reproduced on 1 of 64 fresh-page first captures under load: Plate I's fills painted, its ink missing (106 levels, x 264–1658, y 749–1079). The plates are CSS masks whose url() is set by script, and Chromium can attach the image after the first paint. Since Plate I is now on screen from f0, every worker's first frame was exposed. Every capturing page now paints the video's warm frames until three rounds in a row are pixel-identical before it captures (\`lib/warm.mjs\`, in \`render.mjs\`, \`crop45.mjs\`, \`v01-stills.mjs\`, \`v01-preflight.mjs\`): 0 differences in 64 captures under the same load. A second run then failed on the S4 cut's last frame (f699, 16:9), where Plate V starts to ink in but none of that cut's warm frames showed it; the warm frames are now one per group of image plates, clamped into each cut's own window (\`v01.js\` WARM; pipeline.md §4.1 rule 8). A third run failed on the same S4 frame for another reason: **Plate V's beam came out 31 pixels different (2 levels, at the lamp) depending on the frames painted before it**, even with one page and one worker. The beam turned with the site's \`scaleX()\` under its wedge \`clip-path\`; removing either property removed the dependence. The turn is now drawn as geometry (\`atlas.js\` lighthouse(): the box's width and left in %, the polygon and the gradient mirrored for the second half), the same shape at every phase (compared with round 1's frames), and the coins' translate-plus-wipe tested independent of history (pipeline.md §4.1 rule 9). Then the new determinism slice found **16:9 EN f442–f449 differing between the ascending and descending passes**: at the end of the coins' eased drift the coin moved by less than 1/64 px per frame, Chromium did not raster it again, and the frame kept the pixels of whichever neighbour the page had painted first (coin-horse, up to 12 levels). Animated translations are now quantised to Chromium's 1/64 px layout unit (\`atlas.js\` setTransform, \`components.js\` typeMove; pipeline.md §4.1 rule 10); tested clean in both orders, and the scale settles tested clean near their ends. The failed runs were stopped before any deliverable was kept, and everything was rendered again from the top. A determinism slice now captures whole windows of consecutive frames in ascending and descending order on two fresh pages (\`tools/v01-slice.mjs\`): ${SLICE ? SLICE.map((x) => `${x.ratio} ${x.lang}${x.variant ? ' ' + x.variant : ''} f${x.frames[0]}–f${x.frames[1]} ${x.compared - x.mismatches.length}/${x.compared}`).join('; ') : 'not run'}. This round: ${warmRounds.length} pages warmed, ${Math.min(...warmRounds)}–${Math.max(...warmRounds)} rounds each; determinism 7/7 on every render (§4).

## 2. Deliverables

| File | What | Where it goes | Size | Render time | Checks |
|---|---|---|---|---|---|
${MASTERS.map((m) => `| \`${m.file}\` | ${m.what} | ${m.use} | ${kb(m.probe.bytes)} | ${renderCell(m)} | ffprobe ${yes(m.probe.ok)}; verify ${yes(m.verify.ok)}${loudOf(m.file) ? `; loudness ${yes(loudOf(m.file).ok)}` : ''} |`).join('\n')}

Intermediate files in \`src/\`: the 9:16 \`pointer=li\` renders the 4:5 files are cropped from (\`v01__9x16__{fr,en}__li__{silent,music-s7}.mp4\`, verified like the masters, not for posting: they are laid out for the crop and their pointer reads « Lien en commentaire » / "Link in comments").

Contact sheets (12 frames each, decoded from the encoded MP4: f0, every scene's first and settled frame, f899): ${LANGS.flatMap((L) => [`\`v01__9x16__${L}__silent__contact.png\``, `\`v01__16x9__${L}__silent__contact.png\``, `\`v01__4x5__${L}__li__silent__contact.png\``]).join(', ')}. Frames: f0 (S1 first: the hook, Plate I, the blueprint outline), f90 (S1 settled), f100 (S2 first), f200 (state 1, the master's placeholders), f300 (state 3, mirrored), f320 (S3 first: S2 cleared, T42 wipes in), f450 (S3 settled), f460 (S4 first: the card wipes in), f670 (S4 settled), f680 (S5 first: the wordmark wipes in), f890 (S5 settled), f899 (last frame, held). The music files have the same picture (§6), so they share these sheets.

Review strips (\`review/\`, every frame decoded from the silent masters, cropped to the region under review): ${R.strips.map((s) => `\`${s.file}\``).join(', ')}.

Review stills saved by the renderer next to each file (\`…__f239.png\` silent, \`…__f500.png\` music): the browser's own PNG of the frame the colour and frame-accuracy checks compare against.

## 3. Independent ffprobe pass (every MP4)

Run by this report, separately from the renderer's verify: \`ffprobe -count_frames\` (frames decoded and counted, not estimated) and the file's top-level box order read from the box headers.

| File | Video | Size | fps (r / avg) | Frames | Duration (format / video / audio) | Audio | Box order | Result |
|---|---|---|---|---|---|---|---|---|
${[...MASTERS, ...SOURCES].map((m) => { const p = m.probe; return `| \`${m.file}\` | ${p.codec} ${p.profile}, ${p.pix_fmt}, ${p.colour}, ${p.kbps} kb/s total | ${p.size} | ${p.fps} / ${p.avg_fps} | ${p.frames} | ${p.dur.toFixed(3)} / ${p.v_dur.toFixed(3)} / ${p.a_dur.toFixed(3)} s | ${p.a_codec}, ${p.a_rate} Hz, ${p.a_ch} ch, ${p.a_kbps} kb/s | ${p.boxes} | ${yes(p.ok)} |`; }).join('\n')}

Required: h264, yuv420p, 30/1 fps, 900 frames, faststart (\`moov\` before \`mdat\`), an AAC track, 30.000 s.

## 4. The renderer's verify (per file) and determinism

| Check | ${MASTERS.map((m) => `\`${m.file.replace(/^v01__|\.mp4$/g, '')}\``).join(' | ')} |
|---|${MASTERS.map(() => '---').join('|')}|
${[
  ['H.264 High, yuv420p, size, 30/1, 900 frames, BT.709 tags, AAC 48 kHz stereo, ±0.05 s', (v) => yes(v.checks.slice(0, 11).every((x) => x.ok))],
  ['faststart (moov before mdat)', (v) => yes(vchk(v, /faststart/).ok)],
  ['colour: MP4 frame vs browser PNG, mean shift < 1.5/255', (v) => `${yes(vchk(v, /colour shift/).ok)} (${vchk(v, /colour shift/).value.replace('mean shift R,G,B = ', '')})`],
  ['PSNR ≥ 32 dB vs the browser frame', (v) => `${yes(vchk(v, /PSNR >= 32/).ok)} (${vchk(v, /PSNR >= 32/).value})`],
  ['frame accuracy: closest to its own browser frame, not n±1', (v) => yes(vchk(v, /closest/).ok)],
  ['safe area + own box, per block, on every checkpoint', (v) => { const x = vchk(v, /safe area and their boxes/); return x ? `${yes(x.ok)} (${x.name.match(/\((\d+) checkpoint/)?.[1]} frames)` : 'on its 9:16 source render'; }],
  ['4:5: 9:16 band inside the 4:5 safe area; audio copied unchanged', (v) => { const a = vchk(v, /4:5 safe area/), b = vchk(v, /audio stream copied/); return a ? yes(a.ok && b.ok) : 'n/a'; }],
  ['no page errors', (v) => { const x = vchk(v, /page errors/); return x ? yes(x.ok) : 'n/a (crop)'; }],
].map(([name, f]) => `| ${name} | ${MASTERS.map((m) => f(m.verify)).join(' | ')} |`).join('\n')}

Determinism (a fresh, warmed page re-captures 7 frames in a scrambled order: the middle frame twice, f0, f1, f7, f898, f899; every one must be bit-identical to the main pass):
${jobs.map((j) => `- \`${path.relative(OUT, path.resolve(PIPELINE_ROOT, j.file))}\`: ${j.determinism.identical}/${j.determinism.checked} identical`).join('\n')}
- the ten per-scene review cuts in \`checks/\`: ${checkJobs.map((j) => `${path.basename(j.file).replace(/__silent\.mp4$/, '')} ${j.determinism.identical}/${j.determinism.checked}`).join(', ')}

## 5. Text and layout checks: copy lint, fonts, fit-text, the safe box per block, scene splices, the 4:5 crop

- **Copy lint** (\`tools/copy-lint.mjs\`, the do-not-claim net over \`videos/\` and \`copy/\`): clean (the batch stops otherwise). The copy loader also refuses, before frame 0, any V01 string that matches a URL, an email, a phone number, a price figure, the Aperçu or a call to action, a gated or deferred block, or a block whose \`use\` does not name \`v01-30\`.
- **Fonts** proven loaded before frame 0 (\`document.fonts.check()\` on every declared face; the render refuses otherwise): ${job('fr', '9x16').ready.fontChecks.map((f) => `${f.font} ${f.ok ? 'ok' : 'MISSING'}`).join('; ')}. Faces fetched from \`/site/fonts/\`: ${(job('fr', '9x16').ready.fetchedFonts || []).map((f) => `\`${String(f).split('/').pop()}\``).join(', ')}.
- **Plates decoded** before frame 0: ${job('fr', '9x16').ready.images.map((i) => `\`${i.src.split('/').pop()}\` ${i.ok ? 'ok' : 'FAILED'}`).join(', ')}; then the warm-up (§1). Never shown above 1.0× their source width, settle included (9:16: ${Object.entries(lay('fr', '9x16').plateScale).map(([k, v]) => `${k} ${v}`).join(', ')}; crop layout: ${Object.entries(lay('fr', '9x16', true).plateScale).filter(([k]) => ['light', 'bench'].includes(k)).map(([k, v]) => `${k} ${v}`).join(', ')}).
- **Fit-text** on every block (the largest size in the role's range that fits its box in its maximum lines; no size at or above the floor fails the render):

| Block | 9:16 FR | 16:9 FR | 9:16 FR li | 9:16 EN | 16:9 EN | 9:16 EN li |
|---|---|---|---|---|---|---|
${fitIds.map(([id, state]) => fitRow(id, state)).join('\n')}

- **Kept together at render time** (NOBREAK; strings unchanged): ${LANGS.map((L) => `${L.toUpperCase()} ${lay(L, '9x16').nobreak.map((x) => `${x.key} « ${x.phrase} »`).join(', ')}`).join('; ')}. **Separators hidden at a break:** ${LANGS.flatMap((L) => ['9x16', '16x9'].map((r) => `${r} ${L.toUpperCase()} ${Object.entries(lay(L, r).separatorsHiddenAtBreak).map(([k, v]) => `${k} ${v}`).join(', ')}`)).join('; ')}.
- **Safe box, per block.** 9:16: every text block (\`[data-copy]\`) and key visual (\`[data-safe]\`) inside x 140–940, y 290–1240 **and** inside its own layout box (text runs included); 16:9: x 120–1800, y 80–960 plus the column boxes.
  - the renderer, on the checkpoint frames the page declares (each block's settled entrance, each scene's last frame, the halfway point of every wipe, the last frame): ${jobs.filter((j) => /silent/.test(j.file)).map((j) => `${j.ratio} ${j.lang}${j.file.includes('__li__') ? ' li' : ''} ${j.safe_checked.length} frames, ${j.safe_checked.reduce((a, x) => a + x.violations, 0)} violation(s)`).join('; ')};
  - the preflight sweep, on **every** frame (900 per variant, wipes and moves in flight included): ${pf.map((v) => `${v.variant} ${v.sweep.violations}`).join('; ')} violation(s).
- **Scene splices** (\`scene.overlapCheck()\`, every frame): ${pf.map((v) => `${v.variant} ${v.sweep.splices}`).join('; ')} spliced frame(s).
- **The 4:5 crop** (\`scene.cropCheck()\`, every frame of the renders laid out for it): ${pf.filter((v) => v.pointer).map((v) => `${v.variant} ${v.sweep.crop_cuts}`).join('; ')} plate(s) cut by the y 90–1440 window. The 9:16 band lands at x 140–940, y 200–1150 of the crop, inside its 90 px safe area, so the per-block 9:16 check carries over.
- **Negative tests** (\`tools/safe-negative-v01.mjs\`): blocks pushed out of the band or squeezed out of their box in S1–S5, a heading forced in during the S2 and S4 exits, and Plate V or the workbench pushed across the 4:5 window are all caught; the untouched frames pass (the batch stops otherwise).
- **Seams:** the master's frames are pixel-identical to the per-scene review cuts rendered in this batch (\`checks/\`): ${pf.filter((v) => v.seams.length).map((v) => `${v.variant}: ${v.seams.map((s) => `${s.cut} f${s.cutFrame} = master f${s.masterFrame} ${s.same ? 'identical' : 'DIFFERENT'}`).join(', ')}`).join('; ')}.

## 6. Music previews: loudness (measured on the encoded MP4) and picture identity

| File | Integrated (target −14 ± 0.5 LUFS) | True peak (≤ −1 dBTP) | Loudness range (≤ 4 LU) | Phone check (≤ 4 LU loss) | Result |
|---|---|---|---|---|---|
${R.loudness.map((l) => `| \`${path.basename(l.file)}\` | ${l.integrated_lufs} LUFS (ebur128); ${l.integrated_lufs_bs1770.toFixed(2)} LUFS (BS.1770-4) | ${l.true_peak_dbtp} dBTP | ${l.loudness_range_lu} LU | ${l.phone_lufs} LUFS (−${l.phone_loss_lu} LU) | ${yes(l.ok)} |`).join('\n')}

Bed: \`music-lab/out/v01-30-s7.wav\` (sha256 \`${sha(path.resolve(PIPELINE_ROOT, '../music-lab/out/v01-30-s7.wav')).slice(0, 16)}…\`, ledger M-0003), made by \`node bed.mjs --bars 8.5 --dur 30 --seed 7\` through \`music-lab/render.sh\` (two-pass linear loudnorm, limiter at −2 dBTP). Audio chain in the encoder: \`${R.music.fr.jobs[0].settings.audio_chain}\`, AAC-LC 48 kHz stereo at ${R.music.fr.jobs[0].settings.audio_bitrate}. The gain is one constant, so the bed's own range and dynamics are kept. The silent files carry a silent AAC-LC 48 kHz stereo track (192 kb/s nominal).

Picture identity (the H.264 bitstream of the video track, md5):
${identity.map((x) => `- \`${x.a}\` = \`${x.b}\`: ${x.same ? `identical (\`${x.ma}\`)` : '**DIFFERENT**'}`).join('\n')}

## 7. On-screen copy and fact IDs (re-checked against the site at \`${env.site_assets_commit.split(' ')[0]}\`)

| Block | Fact | FR on screen | Re-check | EN on screen | Re-check |
|---|---|---|---|---|---|
${copyBy.fr.map((x) => { const e = copyBy.en.find((y) => y.key === x.key); return `| ${x.key} | ${x.src} | « ${x.text} »${x.swash ? ` (swash: « ${x.swash} »)` : ''} | ${x.check} | ${e ? `"${e.text}"${e.swash ? ` (swash: "${e.swash}")` : ''}` : '—'} | ${e ? e.check : '—'} |`; }).join('\n')}
| T52 (pointer=li) | ${liPointer.fr.src} | « ${liPointer.fr.text} » | pointer label per placement, not a fact (4:5 LinkedIn only) | "${liPointer.en.text}" | the same; \`en_li\` added to Appendix A and \`trailer.json\` on 2026-10-27 for this file (F30 is a label, not a fact) |

16:9 has no pointer (no T52). Nothing on screen is a URL, an email, a phone number, a price figure, the Aperçu, a call to action, a client name or capture, or a face: the founder is the monogram « Y » in its ring and \`bench.webp\` (the workbench from above, no person). \`coin-king.webp\` is never loaded. Arcanum tokens are read live from \`/site/themes.css\`.

## 8. Stills (§4.6) in \`stills/\`

${R.stills.files.map((f) => `- \`stills/${f.file}\` (${f.size || 'PDF'}, ${kb(f.bytes)}): ${f.what}`).join('\n')}

Checks: ${R.stills.checks.map((x) => `${x.name}${x.value != null ? ` (${x.value})` : ''}: ${yes(x.ok)}`).join('; ')}. Stills are lossless browser PNGs of the masters' frames (the pixels the encoder received), cropped or scaled in RGB. **Upload:** the YouTube thumbnail is the f300 one (§4.6). On Instagram pick the f90 cover; on TikTok, Shorts and LinkedIn the first frame now carries the hook, Plate I and the blueprint outline, and choosing f90 as the cover at upload remains the stronger option.

## 9. Timings (wall clock, this batch)

| Step | Started (UTC) | Seconds |
|---|---|---|
${timings.map((x) => `| ${x.step} | ${x.start.replace('T', ' ').replace('Z', '')} | ${x.s.toFixed(1)} |`).join('\n')}
| **total** | | **${totalMachine.toFixed(1)}** (${(totalMachine / 60).toFixed(1)} min) |

Per render (open, warm-up and ready + capture + encode tail; verify, determinism and contact sheet are counted separately in the step times):
${jobs.map((j) => `- \`${path.basename(j.file)}\`: ${j.timing_s.total} s (capture ${j.timing_s.capture} s, ${j.timing_s.capture_fps} fps); verify ${j.timing_s.verify} s`).join('\n')}
- 4:5 crops: ${LANGS.map((L) => `${L.toUpperCase()} silent ${R.crop[L].silent.timing_s.crop_encode} s crop + encode (${R.crop[L].silent.timing_s.total} s with verify and contact sheet), music ${R.crop[L].music.timing_s.crop_encode} s (${R.crop[L].music.timing_s.total} s)`).join('; ')}.

## 10. Owner rules, as built

- Coded motion design only: no generated image, footage or music. The engravings are the site's existing plates (owner's decision of 2026-10-26); the bed is written in code.
- Founder: no face or figure, only the monogram « Y » and the workbench engraving.
- No client screenshot or name; no price figure (T09 is the three package names only); no Aperçu; no call to action; no URL, email, phone or ref code.
- Arcanum throughout. Every on-screen line from \`copy/trailer.json\` with its fact ID (§7).
- Arabic not rendered (G1). Music previews only until the listening test (G5); post the silent files by default.

## 11. Problems, departures from the script, and open items

${problems.length ? problems.map((p) => `- **${p}**`).join('\n') : '- No check failed.'}

Departures from scripts-trailer.md made in this round (PLAN.md §10 does not cover them; each follows a review finding):
- §4.1 S1: Plate I no longer inks in over 0.00–1.20; it is set at f0 with the blueprint's browser outline (issue 1). The inner parts still draw over 0.10–2.60.
- §4.1 "Out": S2, S3 and S4 wipe out half a beat earlier (10.33, 15.00, 22.33 instead of 10.67, 15.33, 22.67), so that no frame holds two scenes (issue 3). The entrances (T42 10.67, the founder card 15.33, the wordmark 22.67) keep their beats and now wipe in over 0.6 s on the site's ease-out instead of riding the exit's edge. Holds still meet §4.3 (T41 6.67 s, T42 4.33 s, T09 3.67 s, T32 3.67 s, minimum 3.45 s).
- §3.3 / §4.2 4:5: the LinkedIn file is cropped from a 9:16 render laid out for the crop (no faq3; Plate V and the workbench moved inside the window), so it is no longer the same picture as the 9:16 Reel below the band (issue 4). The text band is unchanged.
- §3.6 / §4.1 grid: 2 px lines (the site's 1 CSS px is 3 device px on a phone) and the encoder's chroma QP −4 (issue 5).
- Appendix A: T52 gains \`en_li\` « Link in comments » for the EN LinkedIn file (task brief of 2026-10-27; F30 is a label, not a fact).

Notes:
- The scene table's 28.80–30.00 "fade" is applied to the sound only (the encoder's 1.2 s audio fade): the picture holds on the end card to f899, so f890 (the carousel's end-card still) is whole; a platform that loops now jumps from the end card to the hook with Plate I and the blueprint outline.
- Owner choice, not done: the site's --atmos glows and top-weighted grid mask behind the video (issue 5). If wanted, render one test with them and check the banding on a phone before adopting it.
- Not made in this batch (outside the step): the 16:9 website file at −16 LUFS (bed M-0004 exists; waits on Gate W), the SRT/VTT subtitles of §4.6, the AR master (G1).
- Before posting: the phone QA pass per file (G8), the owner's listening test before any music file is used (G5), and the TikTok RTL safe-zone check (G8; the band stays x 140–940 until then).

## 12. Every file in \`out/v01/\`

Deliverables, contact sheets, review stills and reports:

| File | Size | sha256 (first 16) |
|---|---|---|
${inv((f) => path.dirname(f) === OUT)}

\`src/\` (the 9:16 pointer=li sources of the 4:5 crops):

| File | Size | sha256 (first 16) |
|---|---|---|
${inv((f) => path.dirname(f) === path.join(OUT, 'src'))}

\`stills/\`:

| File | Size | sha256 (first 16) |
|---|---|---|
${inv((f) => path.dirname(f) === path.join(OUT, 'stills'))}

\`review/\` (frame-by-frame strips decoded from the masters):

| File | Size | sha256 (first 16) |
|---|---|---|
${inv((f) => path.dirname(f) === path.join(OUT, 'review'))}

\`preflight/\` and \`checks/\` (the per-scene review cuts the preflight's seam check compares the master against):

| File | Size | sha256 (first 16) |
|---|---|---|
${inv((f) => /\/(preflight|checks)\//.test(f))}
`);
fs.writeFileSync(path.join(OUT, 'REPORT.md'), md.join('\n'));
console.log(`REPORT.md written: ${problems.length ? problems.length + ' problem(s)' : 'all checks pass'}`);
for (const p of problems) console.log('  ' + p);
process.exit(problems.length ? 1 : 0);
