#!/usr/bin/env node
// Contact sheet of a rendered MP4: the frames are decoded from the encoded
// file (what a viewer gets, BT.709 limited -> full range), laid out with a
// label each, and saved as one PNG.
//
//   node tools/contact-sheet.mjs out/v01/v01__9x16__fr__silent.mp4 \
//        --frames 0,36,99,115 [--labels "f0 hook|..."] [--cols 6] [--out x.png] [--title "..."]
//
// Also used by render.mjs (--contact) with the browser it already has open.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { FFMPEG, FFPROBE, SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';

function frameSize(mp4) {
  const s = execFileSync(FFPROBE, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height,r_frame_rate', '-of', 'csv=p=0', mp4]).toString().trim().split(',');
  const [n, d] = s[2].split('/').map(Number);
  return { w: Number(s[0]), h: Number(s[1]), fps: n / d };
}

// One decoded frame, scaled to the tile width, as a PNG data URI.
function framePng(mp4, n, tileW) {
  const png = execFileSync(FFMPEG, ['-v', 'error', '-i', mp4,
    '-vf', `select=eq(n\\,${n}),scale=${tileW}:-2:in_color_matrix=bt709:in_range=tv:out_range=pc:flags=lanczos+accurate_rnd+full_chroma_int,format=rgb24,setparams=color_primaries=unknown:color_trc=unknown:colorspace=unknown`,
    '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'], { maxBuffer: 64 * 1024 * 1024 });
  if (!png.length) throw new Error(`contact: frame ${n} not found in ${mp4}`);
  return 'data:image/png;base64,' + png.toString('base64');
}

export async function contactSheet(browser, server, { mp4, frames, labels = [], out, cols, title, sub = '' }) {
  const { w, h, fps } = frameSize(mp4);
  const portrait = h > w;
  cols = cols || (portrait ? 6 : 4);
  const tileW = portrait ? 300 : 460;
  const tiles = frames.map((n, i) => ({ src: framePng(mp4, n, tileW), head: `f${n}`, label: `${(n / fps).toFixed(2)} s${labels[i] ? ' · ' + labels[i] : ''}` }));
  return layoutSheet(browser, server, { tiles, cols, tileW, out, title: title || path.basename(mp4), sub: sub || `${w}×${h} · ${frames.length} frames decoded from the MP4` });
}

// Lays out prepared tiles ({ src: data URI, head, label }) on the contact page.
export async function layoutSheet(browser, server, { tiles, cols, tileW, out, title, sub = '' }) {
  const ctx = await browser.newContext({ viewport: { width: 24 * 2 + cols * tileW + (cols - 1) * 12, height: 600 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(`${server.url}/tools/contact-page.html`, { waitUntil: 'load' });
  const size = await page.evaluate((d) => window.build(d), { title, sub, cols, tileW, tiles });
  await page.setViewportSize({ width: size.w, height: size.h });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.screenshot({ path: out, fullPage: true });
  await ctx.close();
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const o = { cols: 0 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { o.mp4 = a; continue; }
    o[a.slice(2)] = argv[++i];
  }
  if (!o.mp4 || !o.frames) throw new Error('usage: node tools/contact-sheet.mjs <file.mp4> --frames 0,10,20 [--labels "a|b|c"] [--cols 6] [--out file.png] [--title t]');
  const { chromium } = await import('playwright-core');
  const { startServer } = await import('../lib/server.mjs');
  const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
  const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text'] });
  try {
    const out = await contactSheet(browser, server, { mp4: o.mp4, frames: o.frames.split(',').map(Number), labels: (o.labels || '').split('|'),
      out: o.out || o.mp4.replace(/\.mp4$/, '__contact.png'), cols: Number(o.cols) || 0, title: o.title });
    console.log(out);
  } finally { await browser.close(); await server.close(); }
}
