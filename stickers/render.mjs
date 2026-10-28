// Sticker renderer: transparent HTML scenes to looping sticker files.
// PRIVATE marketing tooling: never copy into the public site repository.
//
//   node render.mjs scenes/kuro-sleep.html [--out out] [--name kuro-sleep] [--formats webm,mov,wa,gif,mp4,png]
//
// A scene sets window.__sticker = { width, height, fps, frames, seek(frame) } and draws
// frame n of a seamless loop when seek(n) is called (frame `frames` equals frame 0).
// Frames are captured with a transparent background, then encoded to:
//   webm  VP9 with alpha, full size (the site, video editors)
//   mov   ProRes 4444 with alpha (CapCut, Premiere, Final Cut)
//   wa    animated WebP 512x512 for WhatsApp sticker packs (target under 500 KB)
//   gif   480 px GIF with transparency (fallback, GIPHY)
//   mp4   9:16 story 1080x1920 on the brand navy (where alpha is not supported)
//   png   the poster frame, transparent (still version, reduced motion)
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
// the machine's pre-installed Playwright (its browser needs no download)
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE || '/home/user/STICKITTY.INC/node_modules/playwright');
const FF = path.join(here, '../pipeline/node_modules/ffmpeg-static/ffmpeg');
const NAVY = '0x0a1420';

function args(argv) {
  const o = { scene: null, out: path.join(here, 'out'), name: null, formats: 'webm,mov,wa,gif,mp4,png', poster: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { o.scene = a; continue; }
    o[a.slice(2)] = argv[++i];
  }
  if (!o.scene) throw new Error('usage: node render.mjs scenes/<name>.html');
  o.name ||= path.basename(o.scene, '.html');
  return o;
}

function ff(list) {
  const r = spawnSync(FF, ['-hide_banner', '-loglevel', 'error', '-y', ...list], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${r.stderr}`);
}

export async function render(o) {
  const dir = path.join(o.out, o.name);
  const fr = path.join(dir, 'frames');
  // clear only the frames: other formats from earlier renders stay
  fs.rmSync(fr, { recursive: true, force: true });
  fs.mkdirSync(fr, { recursive: true });

  const exe = process.env.CHROMIUM_PATH || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  const browser = await chromium.launch({ executablePath: exe, args: ['--font-render-hinting=none', '--disable-lcd-text', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.resolve(o.scene)).href);
  await page.waitForFunction(() => window.__sticker && window.__sticker.ready !== false);
  const meta = await page.evaluate(() => { const s = window.__sticker; return { w: s.width, h: s.height, fps: s.fps, frames: s.frames, poster: s.poster ?? 0 }; });
  await page.setViewportSize({ width: meta.w, height: meta.h });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  for (let f = 0; f < meta.frames; f++) {
    await page.evaluate((n) => window.__sticker.seek(n), f);
    await page.screenshot({ path: path.join(fr, `f${String(f).padStart(4, '0')}.png`), omitBackground: true });
  }
  await browser.close();

  const seq = ['-framerate', String(meta.fps), '-i', path.join(fr, 'f%04d.png')];
  const want = new Set(o.formats.split(','));
  const made = [];
  if (want.has('webm')) { const f = path.join(dir, `${o.name}.webm`); ff([...seq, '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-b:v', '0', '-crf', '30', '-auto-alt-ref', '0', '-row-mt', '1', f]); made.push(f); }
  if (want.has('mov')) { const f = path.join(dir, `${o.name}.mov`); ff([...seq, '-c:v', 'prores_ks', '-profile:v', '4444', '-pix_fmt', 'yuva444p10le', '-vendor', 'apl0', f]); made.push(f); }
  if (want.has('wa')) {
    const f = path.join(dir, `${o.name}.wa.webp`);
    // WhatsApp: 512x512, under 500 KB; 15 fps keeps the motion and halves the weight
    let q = 70, rate = 15;
    for (;;) {
      ff([...seq, '-vf', `fps=${rate},scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000,format=rgba`, '-c:v', 'libwebp_anim', '-lossless', '0', '-q:v', String(q), '-loop', '0', '-an', f]);
      if (fs.statSync(f).size <= 500000) break;
      if (q > 25) q -= 15; else if (rate > 10) rate = 10; else break;
    }
    made.push(f);
  }
  if (want.has('gif')) {
    const f = path.join(dir, `${o.name}.gif`);
    ff([...seq, '-vf', `fps=15,scale=400:-1:flags=lanczos,split[a][b];[a]palettegen=reserve_transparent=1:stats_mode=diff:max_colors=128[p];[b][p]paletteuse=alpha_threshold=128:dither=bayer:bayer_scale=4:diff_mode=rectangle`, '-loop', '0', f]);
    made.push(f);
  }
  if (want.has('mp4')) {
    const f = path.join(dir, `${o.name}.story.mp4`);
    ff(['-f', 'lavfi', '-i', `color=c=${NAVY}:s=1080x1920:r=${meta.fps}`, ...seq, '-filter_complex', `[1:v]scale=1000:-1[s];[0:v][s]overlay=(W-w)/2:(H-h)/2-80:shortest=1,format=yuv420p`, '-c:v', 'libx264', '-crf', '18', '-movflags', '+faststart', '-t', String(meta.frames / meta.fps), f]);
    made.push(f);
  }
  if (want.has('png')) { const f = path.join(dir, `${o.name}.png`); fs.copyFileSync(path.join(fr, `f${String(meta.poster).padStart(4, '0')}.png`), f); made.push(f); }
  return { dir, meta, made: made.map((f) => ({ file: path.relative(here, f), kb: Math.round(fs.statSync(f).size / 1024) })) };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const o = args(process.argv.slice(2));
  render(o).then((r) => console.log(JSON.stringify(r, null, 1))).catch((e) => { console.error(e); process.exit(1); });
}
