#!/usr/bin/env node
// V01 master preflight (review aid, no encode). For each variant of the 30 s
// master (ratio:lang[:pointer], e.g. 9x16:fr, 16x9:en, 9x16:fr:li), with the
// renderer's own Chromium flags:
//   1. sweep, on EVERY frame (the renderer checks the declared checkpoints
//      only), wipes and moves in flight included:
//      - safeCheck(): every painted text block and key visual inside the safe
//        area and inside its own layout box;
//      - overlapCheck(): no frame shows blocks of two different scenes on
//        shared rows (the spliced headings of the 2026-10-27 review);
//      - cropCheck() (renders made for the 4:5 crop): no decoration plate cut
//        by the y 90-1440 window;
//   2. seams: the master's frame first+n is pixel-identical (decoded rgb24
//      framemd5) to frame n of each scene cut reviewed earlier (the stills the
//      cut renders saved in out/v01/checks/), so the assembled master is the
//      reviewed scenes, not a re-timed copy;
//   3. optional --frames: browser PNG stills of chosen master frames.
//
//   node tools/v01-preflight.mjs [--variants 9x16:fr,16x9:fr,9x16:fr:li] [--frames 0,90,300] [--out ../out/v01/preflight]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { SITE_ASSETS, PIPELINE_ROOT, CHROMIUM, FFMPEG } from '../lib/bin.mjs';
import { warmUp } from '../lib/warm.mjs';

const argv = process.argv.slice(2);
const o = { variants: '9x16:fr,16x9:fr,9x16:fr:li,9x16:en,16x9:en,9x16:en:li', frames: '', out: '../out/v01/preflight', every: '1' };
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i];
const ARGS = ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars',
  '--disable-partial-raster', '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows', '--disable-checker-imaging'];
const SIZE = { '9x16': [1080, 1920], '16x9': [1920, 1080] };
// Reviewed cut stills: [cut, cut frame, master frame].
const SEAMS = [['s1', 45, 45], ['s2', 139, 239], ['s3', 26, 346], ['s4', 40, 500], ['s5', 50, 730]];
const md5 = (f) => execFileSync(FFMPEG, ['-v', 'error', '-i', f, '-pix_fmt', 'rgb24', '-f', 'framemd5', '-']).toString().trim().split('\n').pop().split(',').pop().trim();

const outDir = path.resolve(PIPELINE_ROOT, o.out);
fs.mkdirSync(outDir, { recursive: true });
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ARGS });
const result = { variants: [] };
let bad = 0;
try {
  for (const v of o.variants.split(',')) {
    const [ratio, lang = 'fr', pointer] = v.split(':');
    const [W, H] = SIZE[ratio];
    const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    await page.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=${lang}&theme=arcanum${pointer ? '&pointer=' + pointer : ''}&render`, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__scene);
    const ready = await page.evaluate(() => window.__scene.ready());
    const frames = await page.evaluate(() => window.__scene.frames);
    const cdp = await ctx.newCDPSession(page);
    const warm = await warmUp(page, cdp);
    if (!warm.stable) throw new Error(`preflight ${v}: never painted the same twice (warm-up)`);
    const shot = async (n) => {
      await page.evaluate((i) => window.__scene.seekFrame(i), n);
      const r = await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false });
      return Buffer.from(r.data, 'base64');
    };

    // 1. sweep every frame
    const t0 = performance.now();
    const viol = [], splices = [], crops = [];
    const step = Number(o.every) || 1;
    const hasCrop = await page.evaluate(() => typeof window.__scene.cropCheck === 'function');
    for (let n = 0; n < frames; n += step) {
      const r = await page.evaluate((i) => { const s = window.__scene; s.seekFrame(i);
        return { safe: s.safeCheck(), splice: s.overlapCheck(), crop: s.cropCheck ? s.cropCheck() : [] }; }, n);
      for (const x of r.safe) viol.push({ frame: n, ...x });
      for (const x of r.splice) splices.push({ frame: n, ...x });
      for (const x of r.crop) crops.push({ frame: n, ...x });
    }
    const sweepS = +((performance.now() - t0) / 1000).toFixed(1);
    // group violations by element + problem kind into frame ranges
    const group = (list) => { const g = {}; for (const x of list) { const k = `${x.el}: ${x.problem.replace(/\d+/g, 'N')}`; (g[k] ||= []).push(x.frame); }
      return Object.fromEntries(Object.entries(g).map(([k, fs_]) => [k, `${fs_.length} frames, f${fs_[0]}-f${fs_[fs_.length - 1]}`])); };

    // 2. seams vs the reviewed cut stills (same ratio, no pointer variant)
    const seams = [];
    if (!pointer && lang === 'fr') for (const [cut, cf, mf] of SEAMS) {
      const ref = path.resolve(PIPELINE_ROOT, '../out/v01/checks', `v01-${cut}__${ratio}__fr__silent__f${String(cf).padStart(3, '0')}.png`);
      if (!fs.existsSync(ref)) { seams.push({ cut, cutFrame: cf, masterFrame: mf, same: null, note: 'no reviewed still' }); continue; }
      const f = path.join(outDir, `seam-${cut}-${ratio}-m${mf}.png`);
      fs.writeFileSync(f, await shot(mf));
      const same = md5(f) === md5(ref);
      if (!same) bad++;
      seams.push({ cut, cutFrame: cf, masterFrame: mf, same });
      fs.unlinkSync(f);
    }

    // 3. stills
    const stills = [];
    if (o.frames) for (const n of o.frames.split(',').map(Number)) {
      const f = path.join(outDir, `v01__${ratio}__${lang}${pointer ? '__' + pointer : ''}__f${String(n).padStart(3, '0')}.png`);
      fs.writeFileSync(f, await shot(n));
      stills.push(path.relative(PIPELINE_ROOT, f));
    }
    if (viol.length || splices.length || crops.length || errors.length) bad++;
    const fit = (ready.steps.fit || []).map((f) => `${f.id}${f.state && f.state !== 'mock' ? '/' + f.state : ''} ${f.size}px ${f.lines}L ${f.status}`);
    const L = ready.steps.layout;
    const rec = { variant: v, ratio, lang, pointer: pointer || null, frames, fonts_ok: ready.fontChecks.every((f) => f.ok), images_ok: ready.images.every((i) => i.ok),
      fit, sweep: { frames_checked: Math.ceil(frames / step), seconds: sweepS, violations: viol.length, groups: group(viol),
        splices: splices.length, splice_groups: group(splices), crop_checked: hasCrop, crop_cuts: crops.length, crop_groups: group(crops) },
      nobreak: L.nobreak, separators_hidden: L.separatorsHiddenAtBreak, crop45: L.crop45, mirror: L.mock.mirror, yields: L.mock.yields,
      warm, seams, stills, page_errors: errors };
    result.variants.push(rec);
    console.log(`${v}: sweep ${rec.sweep.frames_checked} frames in ${sweepS}s, ${viol.length} safe violation(s), ${splices.length} scene splice(s)` +
      (hasCrop ? `, ${crops.length} plate(s) cut by the 4:5 window` : '') +
      [rec.sweep.groups, rec.sweep.splice_groups, rec.sweep.crop_groups].flatMap((g) => Object.entries(g)).map(([k, s]) => `\n  ${k} (${s})`).join('') +
      (seams.length ? `\n  seams: ${seams.map((s) => `${s.cut} f${s.cutFrame} = master f${s.masterFrame}: ${s.same === null ? s.note : s.same ? 'identical' : 'DIFFERENT'}`).join('; ')}` : '') +
      (errors.length ? `\n  PAGE ERRORS: ${errors.join(' | ')}` : ''));
    await ctx.close();
  }
} finally { await browser.close(); await server.close(); }
fs.writeFileSync(path.join(outDir, 'preflight.json'), JSON.stringify(result, null, 2));
console.log(bad ? `preflight: ${bad} problem(s)` : 'preflight: clean');
process.exit(bad ? 1 : 0);
