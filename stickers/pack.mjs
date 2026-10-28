// WhatsApp sticker pack builder. PRIVATE marketing tooling.
//
//   node pack.mjs pack.json
//
// pack.json: { "identifier", "name", "publisher", "tray": "<asset png>", "stickers": [{ "name", "emojis": [..] }] }
// Reads out/<name>/<name>.wa.webp for each sticker, checks WhatsApp's rules for animated packs,
// and writes out/_pack/<identifier>/:
//   <identifier>.wastickers  zip with title.txt, author.txt, tray.png and the stickers (sticker-importer apps open it)
//   contents.json + files    the layout of WhatsApp's own sticker-pack sample app
//   report.json              the checks per sticker
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const sharp = createRequire(import.meta.url)('/home/user/STICKITTY.INC/node_modules/sharp');

// WhatsApp's limits for an animated pack
const RULES = { size: 512, maxKB: 500, maxSeconds: 10, minFrameMs: 8, trayPx: 96, trayMaxKB: 50, minStickers: 3, maxStickers: 30, maxEmojis: 3 };

async function check(file) {
  const m = await sharp(file, { animated: true }).metadata();
  const kb = fs.statSync(file).size / 1024;
  const frames = m.pages || 1;
  const delays = m.delay || [];
  const seconds = delays.reduce((a, b) => a + b, 0) / 1000;
  const problems = [];
  if (m.width !== RULES.size || (m.pageHeight || m.height) !== RULES.size) problems.push(`size ${m.width}x${m.pageHeight || m.height}, not 512x512`);
  if (kb > RULES.maxKB) problems.push(`${kb.toFixed(0)} KB, over ${RULES.maxKB} KB`);
  if (frames < 2) problems.push('not animated');
  if (seconds > RULES.maxSeconds) problems.push(`${seconds.toFixed(2)} s, over ${RULES.maxSeconds} s`);
  if (delays.some((d) => d < RULES.minFrameMs)) problems.push(`a frame shorter than ${RULES.minFrameMs} ms`);
  if (!m.hasAlpha) problems.push('no transparency');
  return { kb: +kb.toFixed(1), frames, seconds: +seconds.toFixed(2), loop: m.loop, problems };
}

async function main(specFile) {
  const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));
  const dir = path.join(here, 'out/_pack', spec.identifier);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  if (spec.stickers.length < RULES.minStickers || spec.stickers.length > RULES.maxStickers) throw new Error(`a pack holds ${RULES.minStickers} to ${RULES.maxStickers} stickers`);

  // tray icon: 96x96 PNG under 50 KB
  const tray = path.join(dir, 'tray.png');
  await sharp(path.join(here, spec.tray)).trim({ threshold: 1 }).resize(88, 88, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9, palette: true }).toFile(tray);
  const trayKB = fs.statSync(tray).size / 1024;

  const report = { pack: spec.name, tray: { kb: +trayKB.toFixed(1), ok: trayKB <= RULES.trayMaxKB }, stickers: [] };
  const contents = { android_play_store_link: '', ios_app_store_link: '', sticker_packs: [{
    identifier: spec.identifier, name: spec.name, publisher: spec.publisher, tray_image_file: 'tray.png',
    image_data_version: '1', avoid_cache: false, animated_sticker_pack: true,
    publisher_email: '', publisher_website: '', privacy_policy_website: '', license_agreement_website: '', stickers: [] }] };

  for (const [i, s] of spec.stickers.entries()) {
    const src = path.join(here, 'out', s.name, `${s.name}.wa.webp`);
    if (!fs.existsSync(src)) { report.stickers.push({ name: s.name, problems: ['missing: render it first'] }); continue; }
    const file = `${String(i + 1).padStart(2, '0')}_${s.name}.webp`;
    fs.copyFileSync(src, path.join(dir, file));
    const c = await check(src);
    if (!s.emojis?.length || s.emojis.length > RULES.maxEmojis) c.problems.push('needs 1 to 3 emojis');
    report.stickers.push({ name: s.name, file, emojis: s.emojis, ...c });
    contents.sticker_packs[0].stickers.push({ image_file: file, emojis: s.emojis });
  }
  fs.writeFileSync(path.join(dir, 'contents.json'), JSON.stringify(contents, null, 2));
  fs.writeFileSync(path.join(dir, 'title.txt'), spec.name);
  fs.writeFileSync(path.join(dir, 'author.txt'), spec.publisher);
  fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(report, null, 2));

  // .wastickers: a plain zip of title.txt, author.txt, tray.png and the stickers
  const files = ['title.txt', 'author.txt', 'tray.png', ...contents.sticker_packs[0].stickers.map((s) => s.image_file)];
  const out = path.join(dir, `${spec.identifier}.wastickers`);
  const z = spawnSync('python3', ['-I', '-c', 'import sys,zipfile\nz=zipfile.ZipFile(sys.argv[1],"w",zipfile.ZIP_STORED)\nfor f in sys.argv[3:]: z.write(f"{sys.argv[2]}/{f}",f)\nz.close()', out, dir, ...files], { encoding: 'utf8' });
  if (z.status !== 0) throw new Error(z.stderr);
  const bad = report.stickers.filter((s) => s.problems?.length);
  console.log(JSON.stringify({ dir: path.relative(here, dir), wastickers: path.relative(here, out), stickers: report.stickers.length, tray: report.tray, problems: bad.map((b) => ({ name: b.name, problems: b.problems })) }, null, 1));
}

main(process.argv[2]).catch((e) => { console.error(e.message); process.exit(1); });
