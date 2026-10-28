const sharp = require('/home/user/STICKITTY.INC/node_modules/sharp');
const fs = require('fs');
const [,, dir, prefixes, out] = process.argv;
const pre = prefixes.split(',');
(async () => {
  const files = fs.readdirSync(dir).filter(f => /__\d\d\.png$/.test(f) && pre.some(p => f.startsWith(p))).sort();
  const T = 260, C = 6, comps = [];
  for (const [i, f] of files.entries()) {
    const b = await sharp(`${dir}/${f}`).resize(T, T - 20, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    const x = (i % C) * (T + 6), y = Math.floor(i / C) * (T + 6);
    const lbl = Buffer.from(`<svg width="${T}" height="20"><text x="4" y="15" font-family="monospace" font-size="13" fill="#fff">${f.replace('.png', '')}</text></svg>`);
    comps.push({ input: b, left: x, top: y + 20 }, { input: lbl, left: x, top: y });
  }
  const rows = Math.ceil(files.length / C);
  await sharp({ create: { width: C * (T + 6), height: rows * (T + 6), channels: 4, background: '#2b6e8a' } }).composite(comps).png().toFile(out);
  console.log(files.length, 'cut-outs ->', out);
})();
