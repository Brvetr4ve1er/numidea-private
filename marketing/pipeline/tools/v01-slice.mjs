#!/usr/bin/env node
// Determinism slices (review aid, no encode). The renderer's own check
// re-captures 7 frames; this captures whole windows of consecutive frames
// twice, on two fresh warmed pages: pass A in ascending order, pass B in
// descending order, so every frame is painted after different neighbours.
// A frame whose pixels depend on what the page painted before (pipeline.md
// §4.1: a changing transform with a clip-path on one element, a plate's
// first paint) shows up as an A/B mismatch. Windows cover the scene changes,
// the mirror glide, the coins' turn, Plate V's ink-in and beam.
//
//   node tools/v01-slice.mjs [--out ../out/v01/preflight]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
import { warmUp } from '../lib/warm.mjs';

const argv = process.argv.slice(2);
const o = { out: '../out/v01/preflight' };
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i];
const ARGS = ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars',
  '--disable-partial-raster', '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows', '--disable-checker-imaging'];
// [ratio, lang, extra, first, last, what]
const WINDOWS = [
  ['9x16', 'fr', '', 0, 12, 'S1 start: Plate I, the outline, T40 (the thumbnail frame)'],
  ['9x16', 'fr', '', 226, 251, 'the mirror glide'],
  ['9x16', 'fr', '', 306, 345, 'S2 -> S3, the coins inking in and turning'],
  ['16x9', 'fr', '', 666, 735, 'S4 -> S5, Plate V inking in, the beam sweeping'],
  ['16x9', 'en', '', 380, 481, 'S3 -> S4 (EN): the coins drifting to the end of their eased drift, sub-pixel per frame'],
  ['9x16', 'fr', '', 380, 459, 'S3 (FR 9:16): the coins drifting to the end of their eased drift'],
  ['9x16', 'en', '&pointer=li', 676, 760, 'S5 in the crop layout (EN li): Plate V moved, the beam'],
  ['9x16', 'fr', '', 0, 899, 'the whole 9:16 FR master, every frame'],
];
const sha1 = (b) => crypto.createHash('sha1').update(b).digest('hex').slice(0, 16);
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ARGS });
const results = [];
let bad = 0;
try {
  for (const [ratio, lang, extra, a, b, what] of WINDOWS) {
    const [w, h] = ratio === '9x16' ? [1080, 1920] : [1920, 1080];
    const pass = async (frames) => {
      const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      await page.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=${lang}&theme=arcanum${extra}&render`, { waitUntil: 'load' });
      await page.waitForFunction(() => window.__scene);
      await page.evaluate(() => window.__scene.ready());
      const cdp = await ctx.newCDPSession(page);
      const warm = await warmUp(page, cdp);
      if (!warm.stable) throw new Error('slice: warm-up never stable');
      const out = {};
      for (const n of frames) {
        await page.evaluate((i) => window.__scene.seekFrame(i), n);
        out[n] = sha1(Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false })).data, 'base64'));
      }
      await ctx.close();
      return out;
    };
    const frames = []; for (let n = a; n <= b; n++) frames.push(n);
    const A = await pass(frames), B = await pass([...frames].reverse());
    const diff = frames.filter((n) => A[n] !== B[n]);
    if (diff.length) bad++;
    results.push({ ratio, lang, variant: extra.replace('&pointer=', '') || null, frames: [a, b], what, compared: frames.length, mismatches: diff });
    console.log(`${ratio} ${lang}${extra ? ' ' + extra.slice(1) : ''} f${a}-f${b} (${what}): ${frames.length - diff.length}/${frames.length} identical${diff.length ? ' MISMATCH at f' + diff.join(', f') : ''}`);
  }
} finally { await browser.close(); await server.close(); }
fs.mkdirSync(path.resolve(PIPELINE_ROOT, o.out), { recursive: true });
fs.writeFileSync(path.resolve(PIPELINE_ROOT, o.out, 'slice.json'), JSON.stringify(results, null, 2));
process.exit(bad ? 1 : 0);
