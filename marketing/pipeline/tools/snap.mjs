#!/usr/bin/env node
// Authoring aid: open a video in render mode, run ready() (fonts, copy,
// fit-text, layout), print the fit report and the safe checks, and save PNG
// stills of chosen frames. No encoding; nothing here is a deliverable.
//
//   node tools/snap.mjs videos/v01.html --ratio 9x16 --lang fr --params cut=s1 --frames 0,36,99 --out out/v01/checks/snap
//   (--ardraft lets an unreviewed Arabic layout open, stamped as a draft)
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';

const argv = process.argv.slice(2);
const o = { ratio: '9x16', lang: 'fr', params: '', frames: '', out: 'out/snap', guides: false, ardraft: false, quiet: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) { o.video = a; continue; }
  const k = a.slice(2);
  if (['guides', 'ardraft', 'quiet'].includes(k)) { o[k] = true; continue; }
  o[k] = argv[++i];
}
const [W, H] = { '9x16': [1080, 1920], '16x9': [1920, 1080] }[o.ratio];
const extra = o.params.split(',').filter(Boolean).map((kv) => '&' + kv).join('') + (o.guides ? '&guides' : '') + (o.ardraft ? '&ardraft' : '');
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true,
  args: ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars'] });
try {
  const page = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })).newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(`${server.url}/${o.video}?ratio=${o.ratio}&lang=${o.lang}&theme=arcanum${extra}&render`);
  await page.waitForFunction(() => window.__scene);
  const ready = await page.evaluate(() => window.__scene.ready());
  if (!o.quiet) {
    console.log('fonts', ready.fontChecks.every((f) => f.ok) ? 'ok' : JSON.stringify(ready.fontChecks.filter((f) => !f.ok)));
    for (const f of ready.steps.fit || []) console.log(`fit ${f.id}/${f.state} ${f.lang} box ${f.box} -> ${f.size}px ${f.lines}L h${f.h} [${f.status}; range ${f.range.join('-')} floor ${f.floor}]`);
    for (const c of ready.steps.copy || []) console.log(`copy ${c.key} [${c.src}] ${c.lang}: ${c.text}`);
  }
  const meta = await page.evaluate(() => ({ frames: window.__scene.frames, checkpoints: window.__scene.checkpoints }));
  for (const cp of [...meta.checkpoints, { frame: meta.frames - 1, label: 'last' }]) {
    await page.evaluate((n) => window.__scene.seekFrame(n), cp.frame);
    const v = await page.evaluate(() => window.__scene.safeCheck());
    console.log(`safe f${cp.frame} (${cp.label}): ${v.length ? JSON.stringify(v) : 'ok'}`);
  }
  if (o.frames) {
    const dir = path.resolve(PIPELINE_ROOT, o.out);
    fs.mkdirSync(dir, { recursive: true });
    for (const n of o.frames.split(',').map(Number)) {
      await page.evaluate((i) => window.__scene.seekFrame(i), n);
      const f = path.join(dir, `${path.basename(o.video, '.html')}__${o.ratio}__${o.lang}__f${String(n).padStart(3, '0')}.png`);
      await page.screenshot({ path: f });
      console.log(f);
    }
  }
  if (errors.length) console.log('PAGE ERRORS:', errors.join(' | '));
} catch (e) {
  console.log('FAILED:', e.message.split('\n')[0]);
  process.exitCode = 1;
} finally { await browser.close(); await server.close(); }
