#!/usr/bin/env node
// Frame-by-frame review strips of the V01 masters, decoded from the ENCODED
// MP4s (what a viewer gets), cropped to the region under review: the scene
// changes (S2 -> S3, S3 -> S4, S4 -> S5) on the text band, and the right-to-
// left mirror glide on « Votre site » (review of 2026-10-27). One PNG each in
// out/v01/review/. Review aid, not a deliverable.
//
//   node tools/v01-review-strips.mjs [--out ../out/v01] [--langs fr,en]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { FFMPEG, SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
import { layoutSheet } from './contact-sheet.mjs';

const argv = process.argv.slice(2);
const o = { out: '../out/v01', langs: 'fr,en' };
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i];
const OUT = path.resolve(PIPELINE_ROOT, o.out);
const dir = path.join(OUT, 'review');
fs.mkdirSync(dir, { recursive: true });

// [name, ratio, first, last, crop w:h:x:y, tile width, cols, what]
const STRIPS = [
  ['s2s3', '9x16', 306, 341, '800:700:140:290', 200, 9, 'S2 -> S3: S2 wipes out f310-f320, T42 wipes in f320-f338 (text band x 140-940, y 290-990)'],
  ['s3s4', '9x16', 446, 481, '800:700:140:290', 200, 9, 'S3 -> S4: S3 wipes out f450-f460, the founder card wipes in f460-f478 (text band)'],
  ['s4s5', '9x16', 666, 701, '800:700:140:290', 200, 9, 'S4 -> S5: S4 wipes out f670-f680, the wordmark wipes in f680-f698 (text band)'],
  ['mirror', '9x16', 226, 251, '800:500:140:700', 250, 7, 'the mirror glide f230-f248 on « Votre site » (x 140-940, y 700-1200)'],
  ['s2s3', '16x9', 306, 341, '800:640:110:80', 200, 9, 'S2 -> S3 on the text column (x 110-910, y 80-720)'],
  ['s4s5', '16x9', 666, 701, '800:640:110:80', 200, 9, 'S4 -> S5 on the text column (x 110-910, y 80-720)'],
  ['mirror', '16x9', 226, 251, '800:500:980:190', 250, 7, 'the mirror glide f230-f248 on « Votre site » (visual column x 980-1780, y 190-690)'],
];

const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text'] });
const made = [];
try {
  for (const lang of o.langs.split(',')) for (const [name, ratio, a, b, crop, tileW, cols, what] of STRIPS) {
    const mp4 = path.join(OUT, `v01__${ratio}__${lang}__silent.mp4`);
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'v01strip-'));
    // one decode for the whole range, BT.709 limited -> full range, cropped, scaled
    execFileSync(FFMPEG, ['-v', 'error', '-i', mp4, '-vf',
      `select=between(n\\,${a}\\,${b}),crop=${crop},scale=${tileW}:-2:in_color_matrix=bt709:in_range=tv:out_range=pc:flags=lanczos+accurate_rnd+full_chroma_int,format=rgb24`,
      '-fps_mode', 'passthrough', path.join(tmp, 'f%03d.png')]);
    const tiles = [];
    for (let n = a; n <= b; n++) {
      const f = path.join(tmp, `f${String(n - a + 1).padStart(3, '0')}.png`);
      tiles.push({ src: 'data:image/png;base64,' + fs.readFileSync(f).toString('base64'), head: `f${n}`, label: `${(n / 30).toFixed(2)} s` });
    }
    fs.rmSync(tmp, { recursive: true, force: true });
    const out = path.join(dir, `v01__${ratio}__${lang}__${name}__f${a}-f${b}.png`);
    await layoutSheet(browser, server, { tiles, cols, tileW, out, title: path.basename(out), sub: `${what} · every frame, decoded from ${path.basename(mp4)}` });
    made.push({ file: path.relative(OUT, out), what, frames: [a, b], lang, ratio });
    console.log(path.relative(OUT, out));
  }
} finally { await browser.close(); await server.close(); }
fs.writeFileSync(path.join(dir, 'strips.json'), JSON.stringify(made, null, 2));
