import { readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
const [root, list] = process.argv.slice(2);
const bin = new Set(['.webp','.png','.jpg','.woff2','.mp3','.pdf','.obj']);
let n = 0;
for (const f of readFileSync(list, 'utf8').split('\n').filter(Boolean)) {
  if (bin.has(extname(f))) continue;
  let b; try { b = readFileSync(join(root, f)); } catch { continue; }
  if (b.includes(0)) continue;
  const s = b.toString('latin1').replace(/\n/g, '\r\n');
  writeFileSync(join(root, f), Buffer.from(s, 'latin1')); n++;
}
console.log('converted', n);
