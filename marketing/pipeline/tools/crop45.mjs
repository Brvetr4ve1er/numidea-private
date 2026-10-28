#!/usr/bin/env node
// The 4:5 file as a crop of a 9:16 render (scripts-trailer.md §3.3, §10.3):
// window y 90-1440 (crop=1080:1350:0:90), re-encoded with the masters' own
// x264 settings, the audio stream copied as is. The crop is re-encoded, so
// the whole verify runs on the cropped file too: ffprobe container checks,
// faststart, frame count, and colour / frame accuracy against the browser's
// PNGs of the same frames (rendered with the same URL, cropped losslessly).
// The 9:16 band (x 140-940, y 290-1240, checked per block by the source
// render) lands at x 140-940, y 200-1150, inside the 4:5 safe area (90 px).
//
//   node tools/crop45.mjs ../out/v01/src/v01__9x16__fr__li__silent.mp4 --params pointer=li \
//        --out ../out/v01/v01__4x5__fr__li__silent.mp4 [--lang fr|en] [--ref 239] [--contact 0,90,...] [--contact-labels "a|b"]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { FFMPEG, SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
import { verify } from '../lib/verify.mjs';
import { X264_PARAMS } from '../lib/encode.mjs';
import { warmUp } from '../lib/warm.mjs';

export const CROP = { w: 1080, h: 1350, x: 0, y: 90 };
const BAND_916 = { l: 140, r: 940, t: 290, b: 1240 };
const SAFE_45 = 90;
const ARGS = ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars',
  '--disable-partial-raster', '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows', '--disable-checker-imaging'];

const argv = process.argv.slice(2);
const o = { params: '', lang: 'fr', ref: '239', crf: '18', preset: 'slow', contact: '', 'contact-labels': '' };
for (let i = 0; i < argv.length; i++) { if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i]; else o.src = argv[i]; }
if (!o.src || !o.out) throw new Error('usage: node tools/crop45.mjs <9x16.mp4> --out <4x5.mp4> [--params pointer=li] [--ref 239]');
const src = path.resolve(o.src), out = path.resolve(o.out);
const t0 = performance.now();

// 1. crop + encode (the masters' settings: lib/encode.mjs)
const crop = `crop=${CROP.w}:${CROP.h}:${CROP.x}:${CROP.y}`;
const args = ['-hide_banner', '-loglevel', 'error', '-y', '-i', src, '-map', '0:v:0', '-map', '0:a:0',
  '-vf', crop, '-c:v', 'libx264', '-preset', o.preset, '-crf', o.crf, '-x264-params', X264_PARAMS, '-profile:v', 'high', '-level:v', '4.1',
  '-pix_fmt', 'yuv420p', '-g', '60', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
  '-r', '30', '-c:a', 'copy', '-map_metadata', '-1', '-movflags', '+faststart', out];
fs.mkdirSync(path.dirname(out), { recursive: true });
execFileSync(FFMPEG, args);
const tEnc = performance.now();

// 2. browser reference frames (n-1, n, n+1) of the same URL, cropped losslessly
const ref = Number(o.ref);
const extra = o.params.split(',').filter(Boolean).map((kv) => '&' + kv).join('');
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ARGS });
const cropPng = (buf) => execFileSync(FFMPEG, ['-v', 'error', '-f', 'png_pipe', '-i', '-', '-vf', `${crop},format=rgb24`, '-f', 'image2pipe', '-vcodec', 'png', '-'], { input: buf, maxBuffer: 64 << 20 });
let result, contact = null, safeNote, seamStill = null;
try {
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(`${server.url}/videos/v01.html?ratio=9x16&lang=${o.lang}&theme=arcanum${extra}&render`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__scene);
  await page.evaluate(() => window.__scene.ready());
  const cdp = await ctx.newCDPSession(page);
  const warm = await warmUp(page, cdp);
  if (!warm.stable) throw new Error('crop45: the reference page never painted the same twice (warm-up)');
  const shot = async (n) => {
    await page.evaluate((i) => window.__scene.seekFrame(i), n);
    return Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false })).data, 'base64');
  };
  const full = await shot(ref);
  // the source render's own still of that frame, when it saved one: same pixels?
  const srcStill = src.replace(/\.mp4$/, `__f${String(ref).padStart(3, '0')}.png`);
  if (fs.existsSync(srcStill)) {
    const md5 = (b) => execFileSync(FFMPEG, ['-v', 'error', '-f', 'png_pipe', '-i', '-', '-pix_fmt', 'rgb24', '-f', 'md5', '-'], { input: b }).toString().trim();
    seamStill = { file: path.relative(PIPELINE_ROOT, srcStill), identical: md5(full) === md5(fs.readFileSync(srcStill)) };
  }
  const png = cropPng(full);
  const neighbours = [ref - 1, ref + 1].filter((n) => n >= 0 && n < 900);
  const nb = [];
  for (const n of neighbours) nb.push({ frame: n, png: cropPng(await shot(n)) });
  await ctx.close();
  result = verify(out, { width: CROP.w, height: CROP.h, fps: 30, frames: 900, duration: 30, reference: { frame: ref, png, neighbours: nb } });
  // 3. the 9:16 band inside the 4:5 safe area, by construction of the window
  const band = { l: BAND_916.l - CROP.x, r: BAND_916.r - CROP.x, t: BAND_916.t - CROP.y, b: BAND_916.b - CROP.y };
  const ok = band.l >= SAFE_45 && band.r <= CROP.w - SAFE_45 && band.t >= SAFE_45 && band.b <= CROP.h - SAFE_45;
  safeNote = `9:16 band x ${BAND_916.l}-${BAND_916.r}, y ${BAND_916.t}-${BAND_916.b} lands at x ${band.l}-${band.r}, y ${band.t}-${band.b}; 4:5 safe area x ${SAFE_45}-${CROP.w - SAFE_45}, y ${SAFE_45}-${CROP.h - SAFE_45}`;
  result.checks.push({ name: 'the per-block-checked 9:16 band sits inside the 4:5 safe area (90 px)', ok, value: safeNote });
  if (seamStill) result.checks.push({ name: `browser reference f${ref} identical to the source render's own still`, ok: seamStill.identical, value: seamStill.file });
  // 4. audio copied bit for bit
  const amd5 = (f) => execFileSync(FFMPEG, ['-v', 'error', '-i', f, '-map', '0:a:0', '-c', 'copy', '-f', 'md5', '-']).toString().trim();
  const aSame = amd5(src) === amd5(out);
  result.checks.push({ name: 'audio stream copied from the 9:16 source unchanged', ok: aSame, value: aSame ? amd5(out) : 'different' });
  result.ok = result.checks.every((c) => c.ok);
  if (o.contact) {
    const { contactSheet } = await import('./contact-sheet.mjs');
    contact = path.relative(PIPELINE_ROOT, await contactSheet(browser, server, { mp4: out, frames: o.contact.split(',').map(Number),
      labels: o['contact-labels'].split('|'), out: out.replace(/\.mp4$/, '__contact.png'), title: path.basename(out),
      sub: `1080×1350 · crop y 90–1440 of ${path.basename(src)} · 900 frames · arcanum · frames decoded from the encoded MP4`, cols: 6 }));
  }
} finally {
  await browser.close(); await server.close();
}
let loud = null;
const hasMusic = !/silent/.test(path.basename(out));
if (hasMusic) {
  const { loudness } = await import('./loudness.mjs');
  loud = loudness(out); loud.file = path.relative(PIPELINE_ROOT, out);
  result.checks.push(...loud.checks); result.ok = result.ok && loud.ok;
}
const tEnd = performance.now();
result.file = path.relative(PIPELINE_ROOT, out);
const report = { source: path.relative(PIPELINE_ROOT, src), crop, encoder_args: args.map((a) => (a === src || a === out ? path.relative(PIPELINE_ROOT, a) : a)),
  timing_s: { crop_encode: +((tEnc - t0) / 1000).toFixed(2), verify_and_contact: +((tEnd - tEnc) / 1000).toFixed(2), total: +((tEnd - t0) / 1000).toFixed(2) },
  verify: result, loudness: loud, contact };
fs.writeFileSync(out.replace(/\.mp4$/, '.report.json'), JSON.stringify(report, null, 2));
const bad = result.checks.filter((c) => !c.ok);
console.log(`${result.file}  crop+encode ${report.timing_s.crop_encode}s, total ${report.timing_s.total}s, ${(result.bytes / 1024).toFixed(0)} KB  ` +
  (result.ok ? 'verify OK' : 'VERIFY FAILED: ' + bad.map((c) => `${c.name} (${c.value})`).join('; ')));
process.exit(result.ok ? 0 : 1);
