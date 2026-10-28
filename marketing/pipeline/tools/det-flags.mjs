// In-order pass on one page, then jumps on a fresh page, per Chromium flag set.
// Reports bit-identical frames, worst channel delta and capture speed.
import { chromium } from 'playwright-core';
import { execFileSync } from 'node:child_process';
import { startServer } from '../lib/server.mjs';
import { FFMPEG, SITE_ASSETS, PIPELINE_ROOT } from '../lib/bin.mjs';
const BASE = ['--force-color-profile=srgb','--font-render-hinting=none','--disable-lcd-text','--hide-scrollbars'];
const SETS = { default: [], 'disable-gpu': ['--disable-gpu'], 'disable-gpu-rasterization': ['--disable-gpu-rasterization'],
  'disable-gpu+no-partial': ['--disable-gpu', '--disable-partial-raster'] };
const exe = process.argv[2] === 'chrome' ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell';
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const raw = (png) => execFileSync(FFMPEG, ['-v','error','-f','png_pipe','-i','-','-f','rawvideo','-pix_fmt','rgb24','-'], { input: png, maxBuffer: 1e8 });
for (const [name, flags] of Object.entries(SETS)) {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: [...BASE, ...flags] });
  const open = async () => { const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage(); await page.goto(server.url + '/videos/test-3s.html?ratio=9x16&lang=fr&render');
    await page.evaluate(() => window.__scene.ready()); return { page, cdp: await ctx.newCDPSession(page) }; };
  const grab = async ({ page, cdp }, n) => { await page.evaluate((i) => window.__scene.seekFrame(i), n);
    return Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true })).data, 'base64'); };
  const a = await open(); const seq = []; const t = performance.now();
  for (let n = 0; n < 90; n++) seq[n] = await grab(a, n);
  const fps = 90 / ((performance.now() - t) / 1000);
  const b = await open(); let same = 0, worst = 0, px = 0; const order = [45, 89, 88, 60, 30, 75, 7, 0];
  for (const n of order) { const s = await grab(b, n); if (s.equals(seq[n])) { same++; continue; }
    const A = raw(s), B = raw(seq[n]); for (let i = 0; i < A.length; i++) { const d = Math.abs(A[i] - B[i]); if (d) { px++; worst = Math.max(worst, d); } } }
  console.log(`${name.padEnd(28)} ${same}/${order.length} bit-identical, worst delta ${worst}, ${px} bytes differ in total, sequential capture ${fps.toFixed(1)} fps`);
  await browser.close();
}
await server.close();
