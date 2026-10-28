// Blueprint draw (scripts-trailer.md §3.4): an SVG homepage outline in 3 px
// --crimson strokes (brass in Arcanum) — browser outline, nav bar, logo box,
// heading lines, button, hatched image block, three cards — drawn path by
// path by stroke-dashoffset on the clock (pathLength="1", the site's
// animated-icon grammar, BRAND.md "Animated icons").
//
// The drawing is generated for the box it sits in (viewBox = box in px), so
// the stroke stays 3 px whatever the size, and a "glide" from one box to
// another (S1 -> the S2 mock-up frame) re-lays the paths each frame instead
// of scaling a bitmap or the stroke.
//
// Geometry is written on an 800 x 500 page (the S2 mock-up size); the nav
// links sit where the S2 tab row (F31) will be, the logo box where « Votre
// logo » goes, the heading lines where « Votre entreprise » goes.
import { prog, lerp, ease, bezier } from './scene.js';

const NS = 'http://www.w3.org/2000/svg';
const drawEase = bezier(0.6, 0, 0.2, 1); // the site's ai-draw curve

function rr(x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  const f = (v) => +v.toFixed(2);
  return `M${f(x + r)} ${f(y)}H${f(x + w - r)}A${f(r)} ${f(r)} 0 0 1 ${f(x + w)} ${f(y + r)}V${f(y + h - r)}` +
    `A${f(r)} ${f(r)} 0 0 1 ${f(x + w - r)} ${f(y + h)}H${f(x + r)}A${f(r)} ${f(r)} 0 0 1 ${f(x)} ${f(y + h - r)}` +
    `V${f(y + r)}A${f(r)} ${f(r)} 0 0 1 ${f(x + r)} ${f(y)}Z`;
}
function circ(cx, cy, r) {
  const f = (v) => +v.toFixed(2);
  return `M${f(cx - r)} ${f(cy)}A${f(r)} ${f(r)} 0 1 1 ${f(cx + r)} ${f(cy)}A${f(r)} ${f(r)} 0 1 1 ${f(cx - r)} ${f(cy)}Z`;
}
const line = (x1, y1, x2, y2) => `M${+x1.toFixed(2)} ${+y1.toFixed(2)}L${+x2.toFixed(2)} ${+y2.toFixed(2)}`;

// Hatching at 45 deg inside a rect, as one path of separate strokes.
function hatch(x, y, w, h, gap) {
  const segs = [];
  for (let c = gap; c < w + h; c += gap) {
    // line u - v = c - h, in rect coords: from (u0, v0) bottom-left side up-right
    const x1 = Math.max(0, c - h), y1 = Math.min(h, c);
    const x2 = Math.min(w, c), y2 = Math.max(0, c - w);
    if (x2 - x1 < 1) continue;
    segs.push(line(x + x1, y + y1, x + x2, y + y2));
  }
  return segs.join('');
}

// The page, laid out for a w x h box (aspect ~1.6). In draw order.
export function geometry(w, h, stroke = 3) {
  const sx = w / 800, sy = h / 500, s = Math.min(sx, sy), i = stroke / 2;
  const X = (v) => v * sx, Y = (v) => v * sy;
  const R = (x, y, ww, hh, r) => rr(X(x), Y(y), X(ww), Y(hh), r * s);
  return [
    ['frame', rr(i, i, w - stroke, h - stroke, 16 * s)],
    ['chrome', line(i, Y(48), w - i, Y(48))],
    ['dots', circ(X(28), Y(24), 6 * s) + circ(X(50), Y(24), 6 * s) + circ(X(72), Y(24), 6 * s)],
    ['address', R(104, 13, 360, 22, 11)],
    ['logo', R(40, 68, 140, 32, 6)],
    ['nav', line(X(500), Y(84), X(560), Y(84)) + line(X(588), Y(84), X(648), Y(84)) + line(X(676), Y(84), X(760), Y(84))],
    ['h1', line(X(40), Y(160), X(420), Y(160))],
    ['h2', line(X(40), Y(194), X(340), Y(194))],
    ['p1', line(X(40), Y(234), X(400), Y(234))],
    ['p2', line(X(40), Y(258), X(330), Y(258))],
    ['button', R(40, 290, 170, 48, 24)],
    ['image', R(470, 130, 290, 210, 8)],
    ['hatch', hatch(X(470), Y(130), X(290), Y(210), 20 * s)],
    ['card1', R(40, 372, 230, 98, 10)],
    ['card2', R(285, 372, 230, 98, 10)],
    ['card3', R(530, 372, 230, 98, 10)],
  ];
}

// svg: an empty <svg> placed absolutely. draw = [t0, t1]; glide = { at, dur,
// to: {x,y,w,h} } moves and resizes it (layout, not transform).
// preset = ['frame', ...]: parts already drawn at t = 0 (V01: the brass
// browser outline is on screen from frame 0, so the first frame carries the
// brand's drawing; only the page's inner parts draw over [t0, t1]).
// retire = { ids: ['logo', ...], at, dur, dir, e }: those strokes give way to
// the mock-up's blocks (V01 S2). They are clipped away behind the same wipe
// edge that fills the mock-up (same window, same curve, same direction), so a
// stroke never crosses the text that replaces it. The browser frame, chrome
// line, dots and address bar stay as the mock-up's brass outline.
let clipSeq = 0;
export function blueprint(svg, { box, draw: [t0, t1], glide = null, retire = null, preset = [], stroke = 3, overlap = 0.08 }) {
  const ids = geometry(box.w, box.h, stroke).map(([id]) => id);
  const retired = new Set(retire?.ids || []);
  for (const id of retired) if (!ids.includes(id)) throw new Error(`blueprint: no part ${id} to retire`);
  const drawn = new Set(preset);
  for (const id of drawn) if (!ids.includes(id)) throw new Error(`blueprint: no part ${id} to preset`);
  let group = null, clipRect = null;
  if (retired.size) {
    const cid = `bp-retire-${++clipSeq}`;
    const defs = document.createElementNS(NS, 'defs');
    const cp = document.createElementNS(NS, 'clipPath');
    cp.setAttribute('id', cid); cp.setAttribute('clipPathUnits', 'userSpaceOnUse');
    clipRect = document.createElementNS(NS, 'rect');
    cp.append(clipRect); defs.append(cp); svg.append(defs);
    group = document.createElementNS(NS, 'g');
    group.setAttribute('class', 'bp-retire');
    svg.append(group);
  }
  const parts = geometry(box.w, box.h, stroke).map(([id]) => {
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', `bp-${id}`);
    p.setAttribute('pathLength', '1');
    (retired.has(id) ? group : svg).append(p);
    return p;
  });
  if (group) svg.append(group); // the retiring strokes paint over the kept ones, as in draw order
  // Time per path ~ length^0.6 (short strokes still read), with a small
  // overlap so the hand never stops.
  const lens = geometry(box.w, box.h, stroke).map(([, d]) => {
    const tmp = document.createElementNS(NS, 'path'); tmp.setAttribute('d', d); svg.append(tmp);
    const L = tmp.getTotalLength(); tmp.remove(); return L;
  });
  // Preset parts weigh nothing: the hand's time is shared by the parts it draws.
  const wts = lens.map((L, i) => (drawn.has(ids[i]) ? 0 : L ** 0.6)), W = wts.reduce((a, b) => a + b, 0);
  const span = t1 - t0, k = 1 - overlap;
  let acc = 0;
  const win = wts.map((w, i) => {
    if (drawn.has(ids[i])) return [-2, -1]; // drawn before frame 0
    const a = t0 + span * k * (acc / W); acc += w; return [a, t0 + span * k * (acc / W) + span * overlap];
  });

  let laid = null;
  const layout = (b) => {
    const key = `${b.x.toFixed(2)},${b.y.toFixed(2)},${b.w.toFixed(2)},${b.h.toFixed(2)}`;
    if (key === laid) return;
    laid = key;
    Object.assign(svg.style, { left: `${+b.x.toFixed(2)}px`, top: `${+b.y.toFixed(2)}px`, width: `${+b.w.toFixed(2)}px`, height: `${+b.h.toFixed(2)}px` });
    svg.setAttribute('viewBox', `0 0 ${+b.w.toFixed(2)} ${+b.h.toFixed(2)}`);
    svg.dataset.box = `${Math.round(b.x)},${Math.round(b.y)},${Math.round(b.w)},${Math.round(b.h)}`;
    geometry(b.w, b.h, stroke).forEach(([, d], i) => parts[i].setAttribute('d', d));
  };

  const update = (t) => {
    let b = box;
    if (glide) {
      const g = prog(t, glide.at, glide.at + glide.dur, ease.out);
      if (g > 0) b = { x: lerp(box.x, glide.to.x, g), y: lerp(box.y, glide.to.y, g), w: lerp(box.w, glide.to.w, g), h: lerp(box.h, glide.to.h, g) };
    }
    layout(b);
    if (group) {
      // The part of the page the fill has not reached yet keeps its strokes.
      const r = prog(t, retire.at, retire.at + retire.dur, retire.e || ease.out);
      group.style.visibility = r >= 1 ? 'hidden' : '';
      if (r <= 0) group.removeAttribute('clip-path');
      else {
        const w = +b.w.toFixed(2), h = +b.h.toFixed(2), cut = +(r * w).toFixed(3);
        clipRect.setAttribute('x', retire.dir === 'rtl' ? '-10' : String(cut));
        clipRect.setAttribute('y', '-10');
        clipRect.setAttribute('width', String(+(w - cut + 10).toFixed(3)));
        clipRect.setAttribute('height', String(h + 20));
        group.setAttribute('clip-path', `url(#${clipRect.parentNode.id})`);
      }
    }
    parts.forEach((p, i) => {
      const q = prog(t, win[i][0], win[i][1], drawEase);
      p.style.visibility = q <= 0 ? 'hidden' : '';
      const drawing = q > 0 && q < 1;
      p.style.strokeDasharray = drawing ? '1' : '';
      p.style.strokeDashoffset = drawing ? String(+(1 - q).toFixed(5)) : '';
    });
  };
  update.windows = win.map(([a, b], i) => (drawn.has(ids[i]) ? { part: parts[i].getAttribute('class'), preset: 'drawn at f0' }
    : { part: parts[i].getAttribute('class'), from: +a.toFixed(3), to: +b.toFixed(3) }));
  return update;
}
