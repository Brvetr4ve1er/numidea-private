#!/usr/bin/env node
// Renders one video file to MP4 for every requested aspect ratio and language.
//
//   node render.mjs videos/test-3s.html --ratios 9x16,16x9 --langs fr
//
// Options (all optional):
//   --ratios 9x16,16x9,4x5,1x1   --langs fr,en,ar   --theme arcanum
//   --workers 4        parallel browser pages (frames are interleaved)
//   --frames png|jpeg  how frames leave the browser (png = lossless, default)
//   --browser shell|chrome   headless shell (default) or full Chromium
//   --audio path       music bed (default: a silent AAC track)
//   --audio-gain dB    a bed already normalised (music-lab/render.sh): one constant
//                      gain instead of the encoder's dynamic loudnorm (pick it
//                      with tools/loudness.mjs --simulate)
//   --audio-bitrate 384k   AAC bitrate of the music track (default 192k)
//   --crf 18 --preset slow   x264 quality / speed
//   --still 45         also save that frame as PNG (for review)
//   --determinism      re-capture some frames out of order and compare hashes
//   --out out          output folder
//   --params k=v,k=v   extra URL parameters for the video (cut=s1, pointer=li, ...)
//   --name v01         output base name (default: the video file's name)
//   --tag silent       last part of the file name (v01__9x16__fr__li__silent.mp4)
//   --report name      base name of the report JSON (default: <name>[__<pointer>][__<tag>])
//   --contact 0,36,99  also save a contact sheet of these frames, decoded from the MP4
//                      (--contact-labels "a|b|c" labels them)
//
// The clock is the page's own (runtime/scene.js): each frame is seek(n/fps)
// then a screenshot. Nothing depends on how long a frame takes to capture.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { startServer } from './lib/server.mjs';
import { FFMPEG, FFPROBE, CHROMIUM, SITE_ASSETS, SITE_REPO, PIPELINE_ROOT, assertBins } from './lib/bin.mjs';
import { startEncoder, audioFilter } from './lib/encode.mjs';
import { verify } from './lib/verify.mjs';
import { warmUp } from './lib/warm.mjs';

const BROWSERS = {
  shell: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
  chrome: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
};
const CHROME_ARGS = [
  '--force-color-profile=srgb',      // screenshots in sRGB, whatever the host
  '--font-render-hinting=none',      // glyph shapes independent of host hinting
  '--disable-lcd-text',              // greyscale antialiasing: no colour fringes to compress
  '--hide-scrollbars',
  ...(process.env.NO_PARTIAL_RASTER === '0' ? [] : ['--disable-partial-raster']), // repaint whole tiles: pixels must not depend on the previous frame
  '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows',
  // Decode every image at raster time, never later: with checker-imaging a
  // large image (the engravings are 1400-1600 px masks) may be painted as a
  // blank placeholder until an async decode lands, so a frame's pixels would
  // depend on machine load. V01 S2, 16:9, once failed determinism on f100
  // and f101 (a worker's first frames, Plate I on screen) in a render where
  // capture fell to 7 fps; not reproduced since. This flag removes the path.
  ...(process.env.CHECKER_IMAGING === '1' ? [] : ['--disable-checker-imaging']), // CHECKER_IMAGING=1: Chromium's default, for diagnosis only
];

function parseArgs(argv) {
  const o = { ratios: ['9x16'], langs: ['fr'], theme: 'arcanum', workers: 4, frames: 'png', browser: 'shell',
    audio: null, 'audio-gain': null, 'audio-bitrate': '192k', crf: 18, preset: 'slow', still: null, determinism: false, out: 'out', quiet: false,
    params: {}, name: null, tag: null, report: null, contact: null, 'contact-labels': '' };
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { pos.push(a); continue; }
    const k = a.slice(2);
    if (k === 'determinism' || k === 'quiet') { o[k] = true; continue; }
    const v = argv[++i];
    if (k === 'ratios' || k === 'langs') o[k] = v.split(',');
    else if (k === 'params') o.params = Object.fromEntries(v.split(',').filter(Boolean).map((kv) => { const [a, ...b] = kv.split('='); return [a, b.join('=')]; }));
    else if (k === 'contact') o.contact = v.split(',').map(Number);
    else if (['workers', 'crf', 'still', 'audio-gain'].includes(k)) o[k] = Number(v);
    else o[k] = v;
  }
  o.video = pos[0];
  if (!o.video) throw new Error('usage: node render.mjs <videos/file.html> [options]');
  return o;
}

const sha1 = (b) => crypto.createHash('sha1').update(b).digest('hex').slice(0, 16);

async function capture(cdp, frames) {
  const r = await cdp.send('Page.captureScreenshot', {
    format: frames, ...(frames === 'jpeg' ? { quality: 92 } : {}),
    optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false,
  });
  return Buffer.from(r.data, 'base64');
}

async function openPage(browser, url, w, h) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('requestfailed', (r) => errors.push('request failed: ' + r.url()));
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__scene);
  const ready = await page.evaluate(() => window.__scene.ready());
  const meta = await page.evaluate(() => {
    const s = window.__scene; return { frames: s.frames, fps: s.fps, duration: s.duration, width: s.width, height: s.height,
      checkpoints: s.checkpoints || [] };
  });
  const cdp = await ctx.newCDPSession(page);
  // Paint the warm frames until two rounds are identical (lib/warm.mjs).
  const warm = await warmUp(page, cdp);
  if (!warm.stable) throw new Error(`warm-up: frames ${warm.frames.join(', ')} never painted the same twice in ${warm.rounds} rounds`);
  return { ctx, page, cdp, ready, meta, errors, warm };
}

export function outName(o, ratio, lang) {
  const name = o.name || path.basename(o.video, '.html');
  const pointer = o.params.pointer ? `__${o.params.pointer}` : '';
  return `${name}__${ratio}__${lang}${pointer}${o.tag ? '__' + o.tag : ''}`;
}

export async function renderJob(browser, server, o, ratio, lang) {
  const extra = Object.entries(o.params).map(([k, v]) => `&${encodeURIComponent(k)}${v === '' ? '' : '=' + encodeURIComponent(v)}`).join('');
  const url = `${server.url}/${o.video.replace(/^\.?\//, '')}?ratio=${ratio}&lang=${lang}&theme=${o.theme}${extra}&render`;
  const [w, h] = { '9x16': [1080, 1920], '16x9': [1920, 1080], '4x5': [1080, 1350], '1x1': [1080, 1080] }[ratio];
  const outDir = path.resolve(PIPELINE_ROOT, o.out);
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${outName(o, ratio, lang)}.mp4`);
  const tStart = performance.now();

  const pages = await Promise.all(Array.from({ length: o.workers }, () => openPage(browser, url, w, h)));
  const { ready, meta } = pages[0];
  const badFonts = ready.fontChecks.filter((f) => !f.ok);
  if (!o.quiet) for (const s of ready.steps?.fit || []) if (s.status !== 'ok') console.log(`  fit: ${s.id}/${s.state} ${s.lang} ${s.size}px is ${s.status} (range ${s.range.join('-')}, floor ${s.floor})`);
  const badImgs = ready.images.filter((i) => !i.ok);
  if (badFonts.length || badImgs.length) {
    throw new Error(`Refusing to render in fallback type or without plates: ${JSON.stringify({ badFonts, badImgs })}`);
  }
  const tReady = performance.now();

  const enc = startEncoder({ fps: meta.fps, duration: meta.duration, out: file, frameFormat: o.frames,
    audio: o.audio, crf: o.crf, preset: o.preset, audioGain: o.audio ? o['audio-gain'] : null,
    audioBitrate: o.audio ? o['audio-bitrate'] : '192k' });
  const hashes = new Array(meta.frames);
  const keep = new Map(); // DUMP_FRAMES=1: keep main-pass frames to inspect a determinism failure
  const pending = new Map();
  let next = 0;
  let stillBuf = null;
  const ahead = o.workers * 3; // frames a worker may run ahead of the encoder
  const waiters = new Set();
  let failed = null;
  const wakeAll = () => { for (const r of waiters) r(); waiters.clear(); };
  const flush = async () => {
    try {
      while (pending.has(next)) {
        const buf = pending.get(next); pending.delete(next);
        await enc.write(buf); next++;
      }
    } catch (e) { failed = e; }
    wakeAll();
  };
  let flushing = Promise.resolve();
  const worker = async (k) => {
    const { page, cdp } = pages[k];
    for (let n = k; n < meta.frames; n += o.workers) {
      while (n - next >= ahead && !failed) await new Promise((r) => waiters.add(r));
      if (failed) throw failed;
      await page.evaluate((i) => window.__scene.seekFrame(i), n);
      const buf = await capture(cdp, o.frames);
      hashes[n] = sha1(buf);
      if (process.env.DUMP_FRAMES) keep.set(n, buf);
      if (n === o.still) stillBuf = buf;
      pending.set(n, buf);
      flushing = flushing.then(flush);
    }
  };
  await Promise.all(pages.map((_, k) => worker(k)));
  await flushing;
  if (failed) throw failed;
  const tCaptured = performance.now();
  await enc.end();
  const tEncoded = performance.now();

  // Reference frames for the colour / frame-accuracy check: the browser's
  // PNGs of frame n and its two neighbours (default n = the middle frame).
  const refFrame = o.still ?? Math.floor(meta.frames / 2);
  const shotAt = async (n) => {
    await pages[0].page.evaluate((i) => window.__scene.seekFrame(i), n);
    return capture(pages[0].cdp, 'png');
  };
  const refPng = o.frames === 'png' && stillBuf ? stillBuf : await shotAt(refFrame);
  const neighbours = [];
  for (const n of [refFrame - 1, refFrame + 1]) if (n >= 0 && n < meta.frames) neighbours.push({ frame: n, png: await shotAt(n) });
  if (o.still != null) fs.writeFileSync(file.replace(/\.mp4$/, `__f${String(o.still).padStart(3, '0')}.png`), refPng);

  // Layout: every text block and marked element inside the safe area (and
  // inside its own box) on every checkpoint the video declares (the settled
  // frame of each entrance, the last frame of each scene) and on the last frame.
  const checkpoints = [...meta.checkpoints, { frame: meta.frames - 1, label: 'last frame' }];
  const safeViolations = [];
  const safeChecked = [];
  for (const cp of checkpoints) {
    await pages[0].page.evaluate((i) => window.__scene.seekFrame(i), cp.frame);
    const v = await pages[0].page.evaluate(() => window.__scene.safeCheck());
    safeChecked.push({ ...cp, violations: v.length });
    for (const x of v) safeViolations.push({ ...x, frame: cp.frame, label: cp.label });
  }

  let determinism = null;
  if (o.determinism) {
    // Fresh page, frames in a scrambled order, compared with the main pass.
    const probePage = await openPage(browser, url, w, h);
    const order = [Math.floor(meta.frames / 2), 0, meta.frames - 1, 7, Math.floor(meta.frames / 2), 1, meta.frames - 2];
    const results = [];
    for (const n of order) {
      await probePage.page.evaluate((i) => window.__scene.seekFrame(i), n);
      const shot = await capture(probePage.cdp, o.frames);
      const hsh = sha1(shot);
      results.push({ frame: n, same: hsh === hashes[n] });
      if (process.env.DUMP_FRAMES && hsh !== hashes[n]) {
        fs.writeFileSync(path.join(outDir, `dbg-f${n}-main.png`), keep.get(n));
        fs.writeFileSync(path.join(outDir, `dbg-f${n}-probe.png`), shot);
      }
    }
    await probePage.ctx.close();
    determinism = { checked: results.length, identical: results.filter((r) => r.same).length, results, probe_warm: probePage.warm };
  }

  const errors = pages.flatMap((p) => p.errors);
  await Promise.all(pages.map((p) => p.ctx.close()));

  const result = verify(file, { width: w, height: h, fps: meta.fps, frames: meta.frames, duration: meta.duration,
    reference: { frame: refFrame, png: refPng, neighbours } });
  result.file = path.relative(PIPELINE_ROOT, file); // reports carry no machine-specific absolute paths
  result.checks.push({ name: `text blocks and key visuals inside the safe area and their boxes (${checkpoints.length} checkpoint frames)`,
    ok: safeViolations.length === 0,
    value: safeViolations.length ? safeViolations.map((v) => `f${v.frame} ${v.el}: ${v.problem}`).join('; ') : `all inside at f${checkpoints.map((c) => c.frame).join(', f')}` });
  result.checks.push({ name: 'no page errors', ok: errors.length === 0, value: errors.length ? errors.join(' | ') : 'none' });
  result.ok = result.ok && safeViolations.length === 0 && errors.length === 0;
  // A music bed: loudness, range, true peak and the phone check, measured on
  // the encoded MP4's audio (music.md §4.5), fail the render when off target.
  let loud = null;
  if (o.audio) {
    const { loudness } = await import('./tools/loudness.mjs');
    loud = loudness(file);
    loud.file = path.relative(PIPELINE_ROOT, file);
    result.checks.push(...loud.checks);
    result.ok = result.ok && loud.ok;
  }
  let contact = null;
  if (o.contact) {
    const { contactSheet } = await import('./tools/contact-sheet.mjs');
    contact = path.relative(PIPELINE_ROOT, await contactSheet(browser, server, { mp4: file, frames: o.contact.filter((n) => n < meta.frames),
      labels: o['contact-labels'].split('|'), out: file.replace(/\.mp4$/, '__contact.png'), title: path.basename(file),
      sub: `${w}×${h} · ${meta.frames} frames · ${o.theme} · frames decoded from the encoded MP4` }));
  }
  const tVerified = performance.now();
  const secs = (a, b) => +((b - a) / 1000).toFixed(2);
  return {
    video: o.video, ratio, lang, theme: o.theme, file: path.relative(PIPELINE_ROOT, file),
    settings: { workers: o.workers, frames: o.frames, browser: o.browser, crf: o.crf, preset: o.preset,
      audio: o.audio ? path.relative(PIPELINE_ROOT, path.resolve(o.audio)) : 'silent AAC',
      ...(o.audio ? { audio_chain: audioFilter({ duration: meta.duration, audioGain: o['audio-gain'] }), audio_bitrate: o['audio-bitrate'] } : {}) },
    meta, timing_s: {
      open_and_ready: secs(tStart, tReady), capture: secs(tReady, tCaptured), encode_tail: secs(tCaptured, tEncoded),
      verify: secs(tEncoded, tVerified), total: secs(tStart, tEncoded),
      capture_fps: +(meta.frames / ((tCaptured - tReady) / 1000)).toFixed(1),
      realtime_factor: +(meta.duration / ((tEncoded - tStart) / 1000)).toFixed(3),
    },
    ready, warm: pages.map((p) => p.warm), safe_checked: safeChecked, determinism, page_errors: errors, verify: result, loudness: loud, contact,
  };
}

export async function renderAll(o) {
  assertBins();
  const exe = BROWSERS[o.browser] || CHROMIUM;
  const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: CHROME_ARGS });
  const browserVersion = browser.version();
  const jobs = [];
  try {
    for (const ratio of o.ratios) for (const lang of o.langs) {
      const r = await renderJob(browser, server, o, ratio, lang);
      jobs.push(r);
      if (!o.quiet) {
        const bad = r.verify.checks.filter((c) => !c.ok);
        console.log(`${r.file}  ${r.timing_s.total}s total, capture ${r.timing_s.capture_fps} fps, ${(r.verify.bytes / 1024).toFixed(0)} KB  ` +
          (r.verify.ok ? 'verify OK' : 'VERIFY FAILED: ' + bad.map((c) => `${c.name} (${c.value})`).join('; ')) +
          (r.determinism ? `  determinism ${r.determinism.identical}/${r.determinism.checked}` : '') +
          (r.page_errors.length ? `  PAGE ERRORS: ${r.page_errors.join(' | ')}` : ''));
      }
    }
  } finally {
    await browser.close();
    await server.close();
  }
  let commit = null;
  try { commit = execFileSync('git', ['-C', SITE_REPO, 'log', '-1', '--format=%h %ci']).toString().trim(); } catch { /* not a repo */ }
  const env = {
    rendered_at: new Date().toISOString(), site_assets_commit: commit,
    ffmpeg: execFileSync(FFMPEG, ['-hide_banner', '-version']).toString().split('\n')[0],
    ffprobe: execFileSync(FFPROBE, ['-hide_banner', '-version']).toString().split('\n')[0],
    chromium: exe, browser_version: browserVersion, cpus: (await import('node:os')).cpus().length,
  };
  return { env, jobs };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const o = parseArgs(process.argv.slice(2));
  const t0 = performance.now();
  const report = await renderAll(o);
  report.wall_s = +((performance.now() - t0) / 1000).toFixed(2);
  const outDir = path.resolve(PIPELINE_ROOT, o.out);
  const rep = path.join(outDir, `${o.report || `${o.name || path.basename(o.video, '.html')}${o.params.pointer ? '__' + o.params.pointer : ''}${o.tag ? '__' + o.tag : ''}`}.report.json`);
  fs.writeFileSync(rep, JSON.stringify(report, null, 2));
  console.log(`report: ${path.relative(PIPELINE_ROOT, rep)}  (wall ${report.wall_s}s)`);
  if (report.jobs.some((j) => !j.verify.ok || (j.determinism && j.determinism.identical !== j.determinism.checked))) process.exit(1);
}
