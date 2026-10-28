#!/usr/bin/env node
// V01 stills (scripts-trailer.md §4.6), lossless: browser PNGs of the master's
// frames, captured with the renderer's own flags and URL (the pixels the
// encoder received), cropped or scaled with ffmpeg in RGB (no YUV round trip).
// Per language (--langs fr,en):
//   - first frame f0 in every ratio (the feed shows it before play: the hook,
//     Plate I and the blueprint's brass outline since the 2026-10-27 review);
//   - YouTube thumbnail 1280 x 720 from the 16:9 f300 (§4.6: "designed at
//     1280×720 from the 16:9 f300 frame"): the default, the one to upload;
//   - Instagram cover: 9:16 f90;
//   - carousel « Ce que vous obtenez », 4:5 crops (y 90-1440) of f90, f300,
//     f450, f670, f890 from 9:16 renders laid out for the crop: Instagram
//     from frame=45 (« Lien en bio » / "Link in bio"), LinkedIn from
//     pointer=li (« Lien en commentaire » / "Link in comments"), with its PDF.
// V01 never names the Aperçu, so no still needs a conditions line.
//
// The PDF is written here, not printed by Chromium: page.pdf() rounded the
// 1350 px page up to 1013.04 pt and left a 0.54 pt unpainted strip at the
// bottom of every page (review of 2026-10-27). Each page is now exactly
// 810 x 1012.5 pt (1080 x 1350 px at 0.75 pt/px) and holds one image XObject
// drawn over the whole MediaBox: the PNG's own zlib stream with the PNG
// predictor, so the pixels are the PNG's, bit for bit. checkPdf() re-reads
// the file and proves it.
//
//   node tools/v01-stills.mjs [--out ../out/v01/stills] [--langs fr,en]
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { FFMPEG, SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
import { warmUp } from '../lib/warm.mjs';

const argv = process.argv.slice(2);
const o = { out: '../out/v01/stills', langs: 'fr,en' };
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[++i];
const outDir = path.resolve(PIPELINE_ROOT, o.out);
fs.mkdirSync(outDir, { recursive: true });
const ARGS = ['--force-color-profile=srgb', '--font-render-hinting=none', '--disable-lcd-text', '--hide-scrollbars',
  '--disable-partial-raster', '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
  '--disable-backgrounding-occluded-windows', '--disable-checker-imaging'];
const CROP45 = 'crop=1080:1350:0:90';
const CAROUSEL = [90, 300, 450, 670, 890];
const rgb = (vf, buf) => execFileSync(FFMPEG, ['-v', 'error', '-f', 'png_pipe', '-i', '-', '-vf', `${vf},format=rgb24`, '-f', 'image2pipe', '-vcodec', 'png', '-'], { input: buf, maxBuffer: 64 << 20 });
const md5 = (b) => execFileSync(FFMPEG, ['-v', 'error', '-f', 'png_pipe', '-i', '-', '-pix_fmt', 'rgb24', '-f', 'md5', '-'], { input: b }).toString().trim();
const pad = (n) => String(n).padStart(3, '0');

// ------------------------------------------------------------------ PDF
// One page per PNG (8-bit RGB, not interlaced), page = W x H px at 0.75 pt/px.
function pngParts(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('pdf: not a PNG');
  let p = 8; const idat = []; let ihdr = null;
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), type = buf.toString('latin1', p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len);
    if (type === 'IHDR') ihdr = { w: data.readUInt32BE(0), h: data.readUInt32BE(4), depth: data[8], color: data[9], interlace: data[12] };
    if (type === 'IDAT') idat.push(data);
    p += 12 + len;
  }
  if (!ihdr || ihdr.depth !== 8 || ihdr.color !== 2 || ihdr.interlace !== 0) throw new Error(`pdf: PNG must be 8-bit RGB, not interlaced (${JSON.stringify(ihdr)})`);
  return { ...ihdr, data: Buffer.concat(idat) };
}
export function writePdf(pngs, { title }) {
  const pts = (px) => +(px * 0.75).toFixed(4);
  const objs = []; // [num, Buffer]
  const add = (body) => { objs.push(body); return objs.length; };
  const catalog = add(null), pagesN = add(null), info = add(Buffer.from(`<< /Title (${title.replace(/[()\\]/g, '\\$&')}) /Producer (numidea motion pipeline) >>`, 'latin1'));
  const kids = [];
  for (const png of pngs) {
    const im = pngParts(png);
    const W = pts(im.w), H = pts(im.h);
    const img = add(Buffer.concat([Buffer.from(`<< /Type /XObject /Subtype /Image /Width ${im.w} /Height ${im.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
      `/Filter /FlateDecode /DecodeParms << /Predictor 15 /Colors 3 /BitsPerComponent 8 /Columns ${im.w} >> /Length ${im.data.length} >>\nstream\n`, 'latin1'),
    im.data, Buffer.from('\nendstream', 'latin1')]));
    const content = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`;
    const cs = add(Buffer.from(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`, 'latin1'));
    kids.push(add(Buffer.from(`<< /Type /Page /Parent ${pagesN} 0 R /MediaBox [0 0 ${W} ${H}] /CropBox [0 0 ${W} ${H}] ` +
      `/Resources << /XObject << /Im0 ${img} 0 R >> >> /Contents ${cs} 0 R >>`, 'latin1')));
  }
  objs[catalog - 1] = Buffer.from(`<< /Type /Catalog /Pages ${pagesN} 0 R >>`, 'latin1');
  objs[pagesN - 1] = Buffer.from(`<< /Type /Pages /Kids [${kids.map((k) => `${k} 0 R`).join(' ')}] /Count ${kids.length} >>`, 'latin1');
  const chunks = [Buffer.from('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n', 'latin1')];
  let off = chunks[0].length; const offsets = [];
  objs.forEach((body, i) => {
    offsets.push(off);
    const b = Buffer.concat([Buffer.from(`${i + 1} 0 obj\n`, 'latin1'), body, Buffer.from('\nendobj\n', 'latin1')]);
    chunks.push(b); off += b.length;
  });
  const xref = `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offsets.map((x) => `${String(x).padStart(10, '0')} 00000 n \n`).join('')}` +
    `trailer\n<< /Size ${objs.length + 1} /Root ${catalog} 0 R /Info ${info} 0 R >>\nstartxref\n${off}\n%%EOF\n`;
  chunks.push(Buffer.from(xref, 'latin1'));
  return Buffer.concat(chunks);
}
// Re-reads a PDF written by writePdf: xref offsets, one page per PNG, every
// page's MediaBox and CropBox exactly W x H px x 0.75 pt, its only content an
// image drawn over the whole box, and the image's pixels identical to the PNG.
export function checkPdf(pdf, pngs) {
  const s = pdf.toString('latin1'), problems = [];
  const startxref = Number(/startxref\s+(\d+)\s+%%EOF\s*$/.exec(s)?.[1]);
  const xr = s.slice(startxref);
  const n = Number(/xref\s+0 (\d+)/.exec(xr)?.[1]);
  const offs = [...xr.matchAll(/(\d{10}) 00000 n /g)].map((m) => Number(m[1]));
  if (offs.length !== n - 1) problems.push(`xref lists ${offs.length} objects, expected ${n - 1}`);
  offs.forEach((x, i) => { if (!s.startsWith(`${i + 1} 0 obj`, x)) problems.push(`xref offset of object ${i + 1} is wrong`); });
  const obj = (k) => { const a = offs[k - 1]; return s.slice(a, s.indexOf('endobj', a)); };
  const pages = [...s.matchAll(/\/Type \/Page /g)].length;
  if (pages !== pngs.length) problems.push(`${pages} pages for ${pngs.length} slides`);
  const boxes = [];
  for (let k = 1; k <= offs.length; k++) {
    const o_ = obj(k);
    if (!/\/Type \/Page /.test(o_)) continue;
    const i = boxes.length, im = pngParts(pngs[i]);
    const want = `[0 0 ${+(im.w * 0.75).toFixed(4)} ${+(im.h * 0.75).toFixed(4)}]`;
    const mb = /\/MediaBox (\[[^\]]*\])/.exec(o_)?.[1], cb = /\/CropBox (\[[^\]]*\])/.exec(o_)?.[1];
    if (mb !== want || cb !== want) problems.push(`page ${i + 1}: MediaBox ${mb} / CropBox ${cb}, expected ${want}`);
    const c = obj(Number(/\/Contents (\d+) 0 R/.exec(o_)[1]));
    const content = c.slice(c.indexOf('stream\n') + 7, c.lastIndexOf('\nendstream'));
    const parts = content.split(/\s+/);
    if (content !== `q ${want.slice(5, -1).replace(' ', ' 0 0 ')} 0 0 cm /Im0 Do Q`) problems.push(`page ${i + 1}: content « ${content} » does not paint the whole box`);
    const x = obj(Number(/\/Im0 (\d+) 0 R/.exec(o_)[1]));
    const len = Number(/\/Length (\d+)/.exec(x)[1]);
    const a = offs[Number(/\/Im0 (\d+) 0 R/.exec(o_)[1]) - 1] + x.indexOf('stream\n') + 7;
    const raw = pdf.subarray(a, a + len);
    if (!zlib.inflateSync(raw).equals(zlib.inflateSync(im.data))) problems.push(`page ${i + 1}: image pixels differ from the PNG`);
    boxes.push({ page: i + 1, mediabox: mb, painted: `${parts[1]} x ${parts[4]} pt from (0, 0)` });
  }
  return { ok: !problems.length, pages, boxes, problems };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
  const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true, args: ARGS });
  const files = [];
  const checks = [];
  const save = (name, buf, what, lang) => { const f = path.join(outDir, name); fs.writeFileSync(f, buf); files.push({ file: name, lang, what }); };
  try {
    for (const lang of o.langs.split(',')) {
      const open = async (ratio, extra = '') => {
        const [w, h] = ratio === '9x16' ? [1080, 1920] : [1920, 1080];
        const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
        const page = await ctx.newPage();
        await page.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=${lang}&theme=arcanum${extra}&render`, { waitUntil: 'load' });
        await page.waitForFunction(() => window.__scene);
        const ready = await page.evaluate(() => window.__scene.ready());
        if (!ready.fontChecks.every((f) => f.ok) || !ready.images.every((i) => i.ok)) throw new Error('stills: fonts or plates not loaded');
        const cdp = await ctx.newCDPSession(page);
        const warm = await warmUp(page, cdp);
        if (!warm.stable) throw new Error(`stills: ${ratio}${extra} never painted the same twice (warm-up)`);
        const shot = async (n) => {
          await page.evaluate((i) => window.__scene.seekFrame(i), n);
          return Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false })).data, 'base64');
        };
        return { ctx, shot, page };
      };
      // Same pixels as the renders? Compare with each render's own reference still.
      const same = async (shot, n, rel) => {
        const ref = path.resolve(PIPELINE_ROOT, rel);
        const ok = fs.existsSync(ref) && md5(await shot(n)) === md5(fs.readFileSync(ref));
        checks.push({ name: `still f${n} identical to the render's own frame (${path.basename(rel)})`, ok, lang });
      };
      const L = lang.toUpperCase();

      // 9:16 (the Reel / Short)
      let p = await open('9x16');
      await same(p.shot, 239, `../out/v01/v01__9x16__${lang}__silent__f239.png`);
      save(`v01__9x16__${lang}__thumb__f000.png`, await p.shot(0), `First frame, 9:16 ${L} (Reels, Shorts, TikTok): the hook, Plate I and the blueprint outline`, lang);
      save(`v01__9x16__${lang}__ig-cover__f090.png`, await p.shot(90), `Instagram cover, 9:16 ${L} f90: the hook and the finished blueprint (text inside the 3:4 grid crop)`, lang);
      await p.ctx.close();

      // 9:16 laid out for the 4:5 crop, « Lien en bio »: the Instagram carousel
      p = await open('9x16', '&frame=45');
      for (const [i, n] of CAROUSEL.entries()) save(`v01__4x5__${lang}__carousel-ig__${i + 1}-f${pad(n)}.png`, rgb(CROP45, await p.shot(n)), `Carousel slide ${i + 1} (Instagram, ${L}), 4:5 crop of 9:16 f${n} (crop layout)`, lang);
      await p.ctx.close();

      // 9:16 pointer=li (crop layout, the LinkedIn pointer)
      p = await open('9x16', '&pointer=li');
      await same(p.shot, 239, `../out/v01/src/v01__9x16__${lang}__li__silent__f239.png`);
      save(`v01__4x5__${lang}__li__thumb__f000.png`, rgb(CROP45, await p.shot(0)), `First frame, LinkedIn 4:5 ${L}: f0 of the pointer=li render, cropped y 90-1440`, lang);
      const li = [];
      for (const [i, n] of CAROUSEL.entries()) {
        const buf = rgb(CROP45, await p.shot(n));
        li.push(buf);
        save(`v01__4x5__${lang}__li__carousel__${i + 1}-f${pad(n)}.png`, buf, `Carousel slide ${i + 1} (LinkedIn, ${L}), 4:5 crop of 9:16 pointer=li f${n}`, lang);
      }
      await p.ctx.close();

      // 16:9
      p = await open('16x9');
      await same(p.shot, 239, `../out/v01/v01__16x9__${lang}__silent__f239.png`);
      const f0 = await p.shot(0), f300 = await p.shot(300);
      save(`v01__16x9__${lang}__thumb__f000.png`, f0, `First frame, 16:9 ${L}, 1920 x 1080: the hook, Plate I and the blueprint outline`, lang);
      save(`v01__16x9__${lang}__yt-thumb-1280x720__f300.png`, rgb('scale=1280:720:flags=lanczos', f300), `YouTube thumbnail ${L}, 1280 x 720 from the 16:9 f300 (§4.6): the default, upload it as the custom thumbnail`, lang);
      await p.ctx.close();

      // LinkedIn carousel PDF: five 1080 x 1350 px pages (810 x 1012.5 pt), the PNGs embedded as they are.
      const pdf = writePdf(li, { title: `V01 - Ce que vous obtenez (${L})` });
      save(`v01__4x5__${lang}__li__carousel.pdf`, pdf, `LinkedIn PDF carousel « Ce que vous obtenez » (${L}): the five LinkedIn slides, one per page, 810 x 1012.5 pt = 1080 x 1350 px`, lang);
      const pc = checkPdf(fs.readFileSync(path.join(outDir, `v01__4x5__${lang}__li__carousel.pdf`)), li);
      checks.push({ name: `carousel PDF (${L}): 5 pages, every MediaBox and CropBox [0 0 810 1012.5], each painted whole by its slide, pixels = the PNG slides`,
        ok: pc.ok && pc.pages === 5, value: pc.ok ? `${pc.pages} pages; ${pc.boxes[0].mediabox}, painted ${pc.boxes[0].painted}` : pc.problems.join('; '), lang });
    }
  } finally { await browser.close(); await server.close(); }

  for (const f of files) {
    const buf = fs.readFileSync(path.join(outDir, f.file));
    f.bytes = buf.length;
    if (f.file.endsWith('.png')) f.size = `${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`; // PNG size from its IHDR chunk
  }
  fs.writeFileSync(path.join(outDir, 'stills.json'), JSON.stringify({ files, checks }, null, 2));
  for (const c of checks) console.log(`${c.ok ? 'ok ' : 'BAD'} ${c.name}${c.value != null ? ': ' + c.value : ''}`);
  for (const f of files) console.log(`${f.file}  ${f.size || ''}  ${(f.bytes / 1024).toFixed(0)} KB`);
  process.exit(checks.every((c) => c.ok) ? 0 : 1);
}
