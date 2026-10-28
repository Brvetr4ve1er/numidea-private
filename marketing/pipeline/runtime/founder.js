// Founder card, no face (scripts-trailer.md §3.4 "Founder card", §4.1 S4;
// facts-bank.md §1.2 "no face, ever", §2.4). The site's own stand-in
// (index.html:1050-1054, styles.css .fd-photo): the monogram « Y » in
// --crimson-text inside a ring stroked in --crimson, on the site's disc
// (--grad-noir with its brass highlight). No photo, drawing or figure, ever;
// coin-king.webp is never used.
//
// The monogram is a mark, not reading text: it is set here with its source
// (MONOGRAM), like the wordmark (endcard.js), and never comes from the copy
// dictionary. It is the same « Y » in every master: never translated, never
// mirrored.
//
// root: a block on the band. Its box spans the band's width, so it wipes in
// and out on the same edge as the band's text blocks (the S3 exit at 15.33,
// the S4 exit at 22.67) and two scenes never overlap. The roundel sits at its
// inline start (left in FR/EN, right in AR).
//
//   size              the ring's outer diameter (canvas px)
//   ring: [at, dur]   the ring draws itself from 12 o'clock, clockwise in a
//                     left-to-right master, anticlockwise in Arabic; the
//                     disc fades in under it
//   mono: [at, dur]   the « Y » comes in: opacity, and a 1.08 -> 1 settle
//                     over 1.5 x dur
//   wipe              { inAt, inDur, outAt, outDur } of the block
//
// Determinism: values come only from t; at rest the dash, opacity and
// transform are cleared; no will-change.
import { prog, lerp, ease } from './scene.js';
import { wipeState, setTransform } from './atlas.js';

export const MONOGRAM = { text: 'Y', src: 'F17', ref: 'index.html .fd-photo .mono (scripts-trailer.md §3.4 cites l. 1050; l. 1053 at site 076c991); facts-bank.md §1.2' };

const NS = 'http://www.w3.org/2000/svg';
const px = (v) => `${+v.toFixed(2)}px`;

export function founderCard(root, { size, stroke = 3, dir = 'ltr', ring, mono, wipe }) {
  root.textContent = '';
  const roundel = document.createElement('span');
  roundel.className = 'fd-roundel';
  Object.assign(roundel.style, { width: px(size), height: px(size) });

  const disc = document.createElement('i');
  disc.className = 'fd-disc';

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'fd-ring');
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  const c = size / 2, r = (size - stroke) / 2, sweep = dir === 'rtl' ? 0 : 1;
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('pathLength', '1');
  path.setAttribute('d', `M${c} ${c - r}A${r} ${r} 0 1 ${sweep} ${c} ${c + r}A${r} ${r} 0 1 ${sweep} ${c} ${c - r}`);
  path.style.strokeWidth = String(stroke);
  svg.append(path);

  const y = document.createElement('span');
  y.className = 'fd-mono';
  y.textContent = MONOGRAM.text;
  y.setAttribute('translate', 'no');
  y.dataset.src = MONOGRAM.src;
  y.style.fontSize = px(size * 0.46); // the site's proportion: 46 px in a 100 px roundel (styles.css .fd-photo)

  roundel.append(disc, svg, y);
  root.append(roundel);

  const update = (t) => {
    const { hidden } = wipeState(root, t, { inAt: wipe.inAt, inDur: wipe.inDur, outAt: wipe.outAt, outDur: wipe.outDur, dir, e: wipe.e });
    if (hidden) return;
    const q = prog(t, ring[0], ring[0] + ring[1], ease.inOut);
    path.style.visibility = q <= 0 ? 'hidden' : '';
    path.style.strokeDasharray = q > 0 && q < 1 ? '1' : '';
    path.style.strokeDashoffset = q > 0 && q < 1 ? String(+(1 - q).toFixed(5)) : '';
    const d = prog(t, ring[0], ring[0] + ring[1], ease.soft);
    disc.style.opacity = d >= 1 ? '' : String(+d.toFixed(4));
    const m = prog(t, mono[0], mono[0] + mono[1], ease.out);
    y.style.opacity = m >= 1 ? '' : String(+m.toFixed(4));
    y.style.visibility = m <= 0 ? 'hidden' : '';
    setTransform(y, { s: lerp(1.08, 1, prog(t, mono[0], mono[0] + mono[1] * 1.5, ease.soft)) });
  };
  update.info = { size, stroke, mark: MONOGRAM };
  return update;
}
