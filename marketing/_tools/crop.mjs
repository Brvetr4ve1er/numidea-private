import { createRequire } from 'node:module';
const require = createRequire('/home/user/STICKITTY.INC/package.json');
const sharp = require('sharp');
const [src, out, l, t, w, h, W] = process.argv.slice(2);
await sharp(src).extract({ left: +l, top: +t, width: +w, height: +h }).resize(+W || null).png().toFile(out);
console.log(out);
