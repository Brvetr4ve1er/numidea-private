// Resolves the three binaries the pipeline needs. Each can be overridden by
// an environment variable, so a different machine only has to point at its own.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');

function firstExisting(list) { return list.find((p) => p && fs.existsSync(p)) || null; }

// ffmpeg: ffmpeg-static (npm, 7.0.2 static build with libx264 + aac).
// Fallback: imageio-ffmpeg from PyPI (same 7.0.2 build, shipped inside the
// wheel, so it installs even if GitHub release downloads are ever blocked):
//   python3 -m venv .venv && .venv/bin/pip install imageio-ffmpeg
function venvFfmpeg() {
  const lib = path.join(ROOT, '.venv', 'lib');
  if (!fs.existsSync(lib)) return null;
  for (const py of fs.readdirSync(lib)) {
    const dir = path.join(lib, py, 'site-packages', 'imageio_ffmpeg', 'binaries');
    if (!fs.existsSync(dir)) continue;
    const exe = fs.readdirSync(dir).find((f) => f.startsWith('ffmpeg-'));
    if (exe) return path.join(dir, exe);
  }
  return null;
}
let ffmpegStatic = null;
try { ffmpegStatic = require('ffmpeg-static'); } catch { /* not installed */ }

export const FFMPEG = firstExisting([process.env.FFMPEG_PATH, ffmpegStatic, venvFfmpeg()]);

let ffprobeNpm = null;
try { ffprobeNpm = require('@ffprobe-installer/ffprobe').path; } catch { /* not installed */ }
export const FFPROBE = firstExisting([process.env.FFPROBE_PATH, ffprobeNpm]);

// Chromium: this machine has Playwright's build 1194 (Chromium 141). The
// playwright-core in package.json would look for a newer build by default,
// so the path is always passed explicitly.
export const CHROMIUM = firstExisting([
  process.env.CHROMIUM_PATH,
  '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
]);

// The public site, mounted read-only at /site/ by lib/server.mjs.
export const SITE_ASSETS = process.env.SITE_ASSETS || '/home/user/STICKITTY.INC/assets';
export const SITE_REPO = path.resolve(SITE_ASSETS, '..');
export const PIPELINE_ROOT = ROOT;

export function assertBins() {
  const missing = Object.entries({ FFMPEG, FFPROBE, CHROMIUM }).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) throw new Error('Missing binaries: ' + missing.join(', ') + ' (see pipeline.md, "Install")');
}
