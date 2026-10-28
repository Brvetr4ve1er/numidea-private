import { createRequire } from 'node:module';
import fs from 'node:fs'; import path from 'node:path';
const require = createRequire('/home/user/STICKITTY.INC/package.json');
const sharp = require('sharp');
const root = '/home/user/STICKITTY.INC/';
const dirs = process.argv.slice(2);
for (const d of dirs) {
  const walk = (p) => fs.statSync(p).isDirectory() ? fs.readdirSync(p).sort().flatMap(f => walk(path.join(p, f))) : [p];
  for (const f of walk(path.join(root, d))) {
    const sz = (fs.statSync(f).size / 1024).toFixed(0);
    let dim = '';
    try { const m = await sharp(f).metadata(); dim = `${m.width}x${m.height} ${m.format}${m.hasAlpha ? ' alpha' : ''}`; } catch (e) { dim = '(n/a)'; }
    console.log(f.replace(root, ''), dim, sz + 'KB');
  }
}
