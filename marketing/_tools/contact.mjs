import { createRequire } from 'node:module';
const require = createRequire('/home/user/STICKITTY.INC/package.json');
const sharp = require('sharp');
const [out, cols, cell, ...files] = process.argv.slice(2);
const C = +cols, S = +cell, rows = Math.ceil(files.length / C);
const comps = [];
for (let i = 0; i < files.length; i++) {
  const buf = await sharp(files[i]).flatten({ background: '#000' }).resize(S, S, { fit: 'contain', background: '#202020' }).png().toBuffer();
  const label = Buffer.from(`<svg width="${S}" height="22"><rect width="${S}" height="22" fill="#c00"/><text x="4" y="16" font-size="14" fill="#fff" font-family="sans-serif">${i + 1}. ${files[i].split('/').pop()}</text></svg>`);
  comps.push({ input: buf, left: (i % C) * S, top: Math.floor(i / C) * (S + 22) + 22 });
  comps.push({ input: label, left: (i % C) * S, top: Math.floor(i / C) * (S + 22) });
}
await sharp({ create: { width: C * S, height: rows * (S + 22), channels: 3, background: '#333' } }).composite(comps).png().toFile(out);
console.log(out);
