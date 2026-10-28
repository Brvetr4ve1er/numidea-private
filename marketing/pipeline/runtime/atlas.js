// The atlas, rebuilt for video from the site's own technique (styles.css,
// "THE ATLAS"): every engraving is a LUMINANCE mask over currentColor, so it
// takes the theme's ink; nothing is a bitmap pasted on the frame.
//
//   inkIn()        reveal any element by a wipe in the reading direction,
//                  led by a brass burin rule; optional 1.06 -> 1 settle; exit
//                  by the same wipe (S2-S5 exits).
//   readSiteCss()  reads rules from /site/styles.css through a constructed
//                  stylesheet that is NEVER adopted (§3.4 "Skyline
//                  clip-paths"): a site change reaches the video, nothing of
//                  the site's page layout is applied.
//   vista()        Plate I: far / mid / near layers, each a skyline-clipped
//                  fill (aerial perspective) under its ink, as on the site.
//   sky()          seeded stars and one constellation line that draws itself.
//   coin()         Plate III: a coin inks in, turns once on the clock, settles.
//   lighthouse()   Plate V: the lighthouse inks in; its beam (the site's own
//                  .pi-light .beam, readBeamStyles()) sweeps once and rests.
//
// Determinism: values come only from t; at rest every animated property is
// cleared (no identity transform or empty clip left behind); no will-change.
import { prog, lerp, ease, clamp, bezier } from './scene.js';

// ------------------------------------------------------------ helpers
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const px = (v) => `${+v.toFixed(2)}px`;
// Translations are quantised to 1/64 px, Chromium's layout unit. A move
// smaller than that between two frames (the last frames of an eased drift)
// did not make Chromium raster again, so the frame kept the pixels of
// whichever neighbour the page painted first: V01 16:9 f442-f449, coin-horse,
// up to 12 levels (review of 2026-10-27; pipeline.md §4.1 rule 10). On the
// grid, two frames either share a value exactly or differ by a step Chromium
// repaints.
export const q64 = (v) => Math.round(v * 64) / 64;
export function setTransform(el, { x = 0, y = 0, s = 1 } = {}) {
  const qx = q64(x), qy = q64(y);
  const id = qx === 0 && qy === 0 && Math.abs(s - 1) < 0.00005;
  el.style.transform = id ? '' : `translate(${qx}px,${qy}px)${s !== 1 ? ` scale(${+s.toFixed(5)})` : ''}`;
}

// A wipe window on one element, in the reading direction:
//   in : the visible part grows from the reading start (left in FR/EN,
//        right in AR);
//   out: the visible part shrinks toward the reading end.
// Before the entrance and after the exit the element is visibility:hidden
// (so the safe check and the painter both skip it). Fully shown: clip-path
// is cleared. Returns the in-progress p (0..1) for a burin.
export function wipeState(el, t, { inAt = null, inDur = 1, outAt = null, outDur = 0.33, dir = 'ltr', e = ease.out }) {
  const pin = inAt == null ? 1 : prog(t, inAt, inAt + inDur, e);
  const pout = outAt == null ? 0 : prog(t, outAt, outAt + outDur, ease.inOut);
  const hidden = pin <= 0 || pout >= 1;
  el.style.visibility = hidden ? 'hidden' : '';
  if (hidden) { el.style.clipPath = ''; return { pin, pout, hidden }; }
  const lead = (1 - pin) * 100;  // part not yet revealed, at the reading end
  const tail = pout * 100;       // part already wiped away, at the reading start
  if (lead < 0.001 && tail < 0.001) { el.style.clipPath = ''; return { pin, pout, hidden }; }
  const [l, r] = dir === 'rtl' ? [lead, tail] : [tail, lead];
  el.style.clipPath = `inset(-2% ${r.toFixed(3)}% -2% ${l.toFixed(3)}%)`;
  return { pin, pout, hidden };
}

// The burin: a brass rule riding the leading edge of an entrance wipe.
export function burinAt(burin, pin, dir) {
  if (!burin) return;
  if (pin <= 0 || pin >= 1) { burin.style.opacity = '0'; burin.style.left = ''; return; }
  const pos = dir === 'rtl' ? (1 - pin) * 100 : pin * 100;
  burin.style.left = `${pos.toFixed(3)}%`;
  burin.style.opacity = String(+Math.min(1, (1 - pin) * 5, pin * 12).toFixed(3));
}

// Any engraving or block: wipe in (with burin), optional settle on the ink,
// optional exit. el holds the ink child (.ink) and optionally a .burin.
export function inkIn(el, { src = null, inAt, inDur = 1.2, outAt = null, outDur = 0.33, dir = 'ltr', settle = 0, from = 1.06 }) {
  const ink = el.querySelector('.ink');
  const burin = el.querySelector(':scope > .burin');
  if (src && ink) ink.style.setProperty('--mask', `url("${src}")`);
  return (t) => {
    const { pin } = wipeState(el, t, { inAt, inDur, outAt, outDur, dir });
    burinAt(burin, pin, dir);
    if (settle && ink) setTransform(ink, { s: lerp(from, 1, prog(t, inAt, inAt + settle, ease.soft)) });
  };
}

// ------------------------------------------------------------ Plate III
// One coin of Plate III (BRAND.md: "three coins, three depths, each turns on
// its own axis"; scripts-trailer.md §4.1 S3): it inks in by a wipe in the
// reading direction (burin), turns ONCE on the clock and settles.
//
// The turn is drawn in 2D: the face is scaled by |cos θ| about its vertical
// axis as θ runs 0 -> 360°, so the engraving is never shown mirrored (the
// coin's back shows the same face) and no 3D layer is promoted (a promoted
// layer is rasterised once and rescaled, and its pixels then depend on the
// frames painted before: pipeline.md §4.1). The turn's curve overshoots a
// few degrees and comes back: that is the settle. Depth: each coin has its
// own ink strength (CSS) and its own parallax drift (here). At rest every
// transform is cleared.
//
// The coin files are crops of one sheet: each carries, at its top edge, a
// sliver of the rim of a third coin (coin-king, never shown). `ring` (the
// coin's own rim, measured in source px: centre and radius) adds a circular
// mask layer that keeps the coin and drops the sliver.
export const COIN = {
  natural: 320, // coin-horse.webp, coin-palm.webp: 320 x 320
  // Measured 2026-10-26 on the site's files: rim x 4-312 / 6-314, y 12-318.
  ring: { horse: { cx: 158, cy: 165, r: 157 }, palm: { cx: 160, cy: 165, r: 157 } },
};
const turnEase = bezier(0.45, 0, 0.2, 1.1);
export function coin(el, { src, inAt, inDur = 0.7, turnAt, turnDur = 1.2, settle = 2.4, from = 1.06,
  outAt = null, outDur = 0.33, dir = 'ltr', drift = 0, driftFrom = 0, driftTo = 1, ring = null, natural = COIN.natural }) {
  const ink = el.querySelector('.ink');
  const burin = el.querySelector(':scope > .burin');
  ink.style.setProperty('--mask', `url("${src}")`);
  if (ring) {
    const w = el.offsetWidth, R = (ring.r / natural) * w, f = (v) => +(v / natural * 100).toFixed(3);
    ink.style.setProperty('--ring', `radial-gradient(circle ${+R.toFixed(2)}px at ${f(ring.cx)}% ${f(ring.cy)}%, #fff 98.5%, rgba(255,255,255,0) 100%)`);
  }
  const sign = dir === 'rtl' ? 1 : -1; // the land slides against the reading direction, as in Plate I
  return (t) => {
    const { pin, hidden } = wipeState(el, t, { inAt, inDur, outAt, outDur, dir });
    burinAt(burin, pin, dir);
    if (hidden) return;
    const k = lerp(from, 1, prog(t, inAt, inAt + settle, ease.soft));
    const q = turnEase(clamp((t - turnAt) / turnDur));
    const sx = k * Math.abs(Math.cos(q * 2 * Math.PI));
    ink.style.transform = Math.abs(sx - 1) < 5e-5 && Math.abs(k - 1) < 5e-5 ? '' : `scale(${+sx.toFixed(5)},${+k.toFixed(5)})`;
    setTransform(el, { x: drift ? sign * drift * prog(t, driftFrom, driftTo, ease.soft) : 0 });
  };
}

// ------------------------------------------------------------ Plate V
// The lighthouse (BRAND.md "The atlas": "the beam sweeps"; styles.css
// "Plate V"; scripts-trailer.md §4.1 S5: "one coded beam sweep 23.00-25.00,
// then still"). The plate inks in like any engraving (wipe + burin, 1.06 ->
// 1 settle). Its beam is the site's own `.pi-light .beam`: position on the
// lamp, size, the brass wedge's gradient, clip-path and opacity are read
// live from /site/styles.css through the never-applied stylesheet
// (readBeamStyles), so nothing here copies them. The site turns the wedge
// about the lamp with scaleX (keyframes 1 -> .05 -> -1 -> -.05 -> 1, 8 s, 3
// times); the video makes ONE half turn on the clock, scaleX = cos(pi q)
// (never thinner than the site's .05), from pointing inland (right) to
// pointing over the sea (left), and rests there. The root clips the beam to
// the plate's box (overflow: hidden), so it never reaches the text. The
// artwork is never mirrored for Arabic (the site flips the plate in RTL; the
// videos do not, §3.4).
export const LIGHT = { src: '/site/illus/lighthouse.webp', natural: 1100, aspect: 1100 / 595 };
// A turning lamp: an even turn with soft ends (ease-in-out sine). The site's
// --ease-soft back-loads the turn: measured, most of the half turn then fell
// in 0.4 s of the 2 s window, so the beam seemed to snap across.
const sweepEase = bezier(0.37, 0, 0.63, 1);
const BEAM_PROPS = ['left', 'top', 'width', 'height', 'translate', 'transform-origin', 'background', 'background-image', 'clip-path', 'opacity'];
export async function readBeamStyles(url = '/site/styles.css') {
  const r = await readSiteCss(url, { '.pi-light .beam': BEAM_PROPS });
  const b = r['.pi-light .beam'] || {};
  const missing = ['left', 'top', 'width', 'height', 'clip-path'].filter((p) => !b[p]);
  if (!b.background && !b['background-image']) missing.push('background');
  if (missing.length) throw new Error(`atlas: .pi-light .beam lacks ${missing.join(', ')} in ${url}`);
  return b;
}
// The turn is drawn as GEOMETRY, not as the site's transform: scaleX(s) about
// the lamp (the beam's left edge, its transform-origin) is the same shape as a
// box |s| times as wide that starts at the lamp (s > 0) or ends at it (s < 0),
// with the wedge's clip-path polygon and the gradient mirrored for s < 0 (the
// polygon and the gradient stops are in % of the box, so they scale with it).
// A clip-path on an element whose transform changes every frame came out
// different (31 px, 2 levels, at the lamp, 16:9 f699) depending on the frames
// the page had painted before (review of 2026-10-27; pipeline.md §4.1).
const pctOf = (v, name) => {
  const m = /^(-?[\d.]+)%$/.exec(String(v).trim());
  if (!m) throw new Error(`atlas: .pi-light .beam ${name} "${v}" is not a percentage; the beam's geometry cannot follow it`);
  return Number(m[1]);
};
// polygon(x y, ...) mirrored about the box's vertical centre line.
export function mirrorPolygon(clip) {
  const m = /^polygon\((.*)\)$/.exec(clip.trim());
  if (!m) throw new Error(`atlas: beam clip-path "${clip}" is not a polygon()`);
  const flip = (x) => {
    if (/^0(px|%)?$/.test(x)) return '100%';
    const p = /^(-?[\d.]+)%$/.exec(x);
    return p ? `${+(100 - Number(p[1])).toFixed(4)}%` : `calc(100% - ${x})`;
  };
  return `polygon(${m[1].split(',').map((pt) => { const [x, ...y] = pt.trim().split(/\s+/); return `${flip(x)} ${y.join(' ')}`; }).join(', ')})`;
}
// linear-gradient(<angle>deg | to left/right, ...) mirrored left-right.
export function mirrorGradient(bg) {
  const a = /linear-gradient\(\s*(-?[\d.]+)deg/.exec(bg);
  if (a) return bg.replace(a[0], `linear-gradient(${+((360 - Number(a[1])) % 360).toFixed(4)}deg`);
  if (/linear-gradient\(\s*to (left|right)\b/.test(bg)) return bg.replace(/to (left|right)\b/, (_, s) => `to ${s === 'left' ? 'right' : 'left'}`);
  throw new Error(`atlas: beam background "${bg}" is not a horizontal linear-gradient(); it cannot be mirrored`);
}
export function lighthouse(root, { beam: bs, src = LIGHT.src, inAt, inDur = 1.2, settle = 3, from = 1.06,
  sweepAt, sweepDur = 2, beamIn = 1 / 3, outAt = null, outDur = 0.33, dir = 'ltr' }) {
  const ink = root.querySelector('.ink');
  const burin = root.querySelector(':scope > .burin');
  const beam = root.querySelector('.beam');
  ink.style.setProperty('--mask', `url("${src}")`);
  for (const p of BEAM_PROPS) if (bs[p] && p !== 'opacity' && p !== 'transform-origin') beam.style.setProperty(p, bs[p]);
  if (!/^(0(px|%)?|left)\s+(50%|center)$/.test(String(bs['transform-origin'] || '').trim())) {
    throw new Error(`atlas: .pi-light .beam transform-origin "${bs['transform-origin']}" is not its left edge; the beam's geometry assumes it`);
  }
  const L0 = pctOf(bs.left, 'left'), W0 = pctOf(bs.width, 'width');
  const bg = bs.background || bs['background-image'], bgProp = bs.background ? 'background' : 'background-image';
  const shape = { right: { clip: bs['clip-path'], bg }, left: { clip: mirrorPolygon(bs['clip-path']), bg: mirrorGradient(bg) } };
  let side = null;
  const turn = (sx) => {
    const a = Math.abs(sx), s = sx < 0 ? 'left' : 'right';
    if (s !== side) { beam.style.clipPath = shape[s].clip; beam.style.setProperty(bgProp, shape[s].bg); side = s; }
    beam.style.width = `${+(W0 * a).toFixed(4)}%`;
    beam.style.left = `${+(s === 'right' ? L0 : L0 - W0 * a).toFixed(4)}%`;
  };
  const op = bs.opacity != null && bs.opacity !== '' ? +bs.opacity : 1;
  return (t) => {
    const { pin, hidden } = wipeState(root, t, { inAt, inDur, outAt, outDur, dir });
    burinAt(burin, pin, dir);
    if (hidden) return;
    setTransform(ink, { s: lerp(from, 1, prog(t, inAt, inAt + settle, ease.soft)) });
    if (t < sweepAt) { beam.style.visibility = 'hidden'; turn(1); beam.style.opacity = ''; return; }
    beam.style.visibility = '';
    const q = prog(t, sweepAt, sweepAt + sweepDur, sweepEase);
    const c = q >= 1 ? -1 : Math.cos(Math.PI * q);
    turn((c < 0 ? -1 : 1) * Math.max(0.05, Math.abs(c)));
    beam.style.opacity = String(+(op * prog(t, sweepAt, sweepAt + beamIn, ease.soft)).toFixed(4));
  };
}

// ------------------------------------------------- the site's stylesheet
// Reads the wanted properties of the wanted top-level rules of a stylesheet,
// without applying it: new CSSStyleSheet() + replaceSync(), never adopted.
export async function readSiteCss(url, wanted) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`atlas: cannot read ${url} (${res.status})`);
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(await res.text());
  const out = {};
  for (const rule of sheet.cssRules) {
    if (!(rule instanceof CSSStyleRule) || !(rule.selectorText in wanted)) continue;
    const o = (out[rule.selectorText] ||= {});
    for (const p of wanted[rule.selectorText]) { const v = rule.style.getPropertyValue(p).trim(); if (v) o[p] = v; }
  }
  return out;
}

// ------------------------------------------------------------ Plate I
export const VISTA = {
  layers: ['far', 'mid', 'near'],
  src: { far: '/site/illus/vista-far.webp', mid: '/site/illus/vista-mid.webp', near: '/site/illus/vista-near.webp' },
  natural: { far: 1600, mid: 1600, near: 1500 }, // source widths: never shown above 1.0x
  aspect: 1600 / 679,                            // the site's .v-l box (mask-size 100% 100%)
};

// Reads the three skylines, fills and inks from the site's styles.css.
export async function readVistaStyles(url = '/site/styles.css') {
  const wanted = { '.v-fill': ['background', 'background-color'] };
  for (const l of VISTA.layers) {
    wanted[`.v-${l} .v-fill`] = ['clip-path', 'background', 'background-color'];
    wanted[`.v-${l} .v-ink`] = ['color', 'opacity'];
  }
  const r = await readSiteCss(url, wanted);
  const out = {};
  for (const l of VISTA.layers) {
    const fill = r[`.v-${l} .v-fill`] || {};
    const ink = r[`.v-${l} .v-ink`] || {};
    const clip = fill['clip-path'];
    if (!clip || !clip.startsWith('polygon(')) throw new Error(`atlas: no skyline clip-path for .v-${l} .v-fill in ${url}`);
    const bg = fill.background || fill['background-color'] || r['.v-fill']?.background || r['.v-fill']?.['background-color'];
    if (!bg || !ink.color || !ink.opacity) throw new Error(`atlas: .v-${l} fill or ink colour missing in ${url}`);
    out[l] = { clip, fill: bg, ink: ink.color, opacity: ink.opacity, points: (clip.match(/,/g) || []).length + 1 };
  }
  return out;
}

// cfg = { box: {x,y,w,h}, layers: { far: { w, left, top }, ... } (container px),
//         drift: { far, mid, near } px over [driftFrom, driftTo] }
export function vista(root, cfg, styles, { inAt = 0, inDur = 1.2, outAt = null, outDur = 0.5, dir = 'ltr', driftFrom = 0, driftTo = 4 }) {
  const { box } = cfg;
  Object.assign(root.style, { left: px(box.x), top: px(box.y), width: px(box.w), height: px(box.h) });
  const layers = {};
  for (const l of VISTA.layers) {
    const c = cfg.layers[l];
    const el = root.querySelector(`.v-${l}`);
    const h = c.w / VISTA.aspect;
    Object.assign(el.style, { left: px(c.left), top: px(c.top), width: px(c.w), height: px(h) });
    const fill = el.querySelector('.v-fill'), base = el.querySelector('.v-base'), ink = el.querySelector('.v-ink');
    fill.style.clipPath = styles[l].clip;
    fill.style.background = styles[l].fill;
    if (base) base.style.background = styles[l].fill;
    ink.style.color = styles[l].ink;
    ink.style.opacity = styles[l].opacity;
    ink.style.setProperty('--mask', `url("${VISTA.src[l]}")`);
    layers[l] = { el, w: c.w, h };
  }
  const burin = root.querySelector(':scope > .burin');
  const sign = dir === 'rtl' ? 1 : -1; // the eye travels in the reading direction; the land slides against it
  return (t) => {
    const { pin, hidden } = wipeState(root, t, { inAt, inDur, outAt, outDur, dir, e: ease.soft });
    burinAt(burin, pin, dir);
    if (hidden) return;
    const d = prog(t, driftFrom, driftTo, ease.soft);
    for (const l of VISTA.layers) setTransform(layers[l].el, { x: sign * (cfg.drift?.[l] || 0) * d });
  };
}

// The largest scale a plate reaches against its source width (§3.6: never
// above 1.0x, settle included). Run at ready(); the video throws if > 1.
export function vistaScale(cfg, settle = 1) {
  return Object.fromEntries(VISTA.layers.map((l) => [l, +(cfg.layers[l].w * settle / VISTA.natural[l]).toFixed(3)]));
}

// ------------------------------------------------------------ the sky
// The site's constellation (index.html, Plate I's .v-sky: the path
// "M160 52 214 34 262 61 318 48 352 92 M262 61 248 112" in a 1200x300 box),
// a shape, not copy. Scaled and placed by the video.
export const CONSTELLATION = { pts: [[160, 52], [214, 34], [262, 61], [318, 48], [352, 92], [248, 112]], runs: [[0, 1, 2, 3, 4], [2, 5]] };

// svg covers `area` (canvas px). Stars: `count` seeded points inside
// `region` (canvas px), none inside the `avoid` boxes (text, key visuals);
// each fades in at a seeded time in [starsIn, starsIn + starsSpan]. The
// constellation is placed by { x, y, k } (offset and scale of the site's
// coordinates) and draws over [constIn, constIn + constDur].
export function sky(svg, { area, region, avoid = [], seed = 7, count = 40, rMin = 1.1, rMax = 2.6,
  starsIn = 0.6, starsSpan = 1.2, constellation, constIn = 0.6, constDur = 1.2, outAt = null, outDur = 0.5, dir = 'ltr' }) {
  const NS = 'http://www.w3.org/2000/svg';
  Object.assign(svg.style, { left: px(area.x), top: px(area.y), width: px(area.w), height: px(area.h) });
  svg.setAttribute('viewBox', `0 0 ${area.w} ${area.h}`);
  const rnd = mulberry32(seed);
  const inside = (x, y, b, m = 24) => x > b.x - m && x < b.x + b.w + m && y > b.y - m && y < b.y + b.h + m;
  const stars = [];
  let guard = 0;
  while (stars.length < count && guard++ < count * 50) {
    const x = region.x + rnd() * region.w, y = region.y + rnd() * region.h;
    const r = rMin + (rMax - rMin) * rnd() ** 2.2;
    const at = starsIn + rnd() * starsSpan;
    const a = 0.3 + 0.5 * rnd();
    if (avoid.some((b) => inside(x, y, b))) continue;
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('class', 'star');
    c.setAttribute('cx', (x - area.x).toFixed(1)); c.setAttribute('cy', (y - area.y).toFixed(1)); c.setAttribute('r', r.toFixed(2));
    c.setAttribute('fill-opacity', a.toFixed(2));
    svg.append(c);
    stars.push({ c, at, a });
  }
  // Each run of the constellation is its own path (Chromium restarts a dash
  // pattern at every sub-path), drawn one after the other at an even speed;
  // a node lights when the line reaches it.
  const lines = []; const nodes = [];
  if (constellation) {
    const { x, y, k } = constellation;
    const P = CONSTELLATION.pts.map(([a, b]) => [x - area.x + a * k, y - area.y + b * k]);
    const len = (i, j) => Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]);
    const runLen = CONSTELLATION.runs.map((run) => run.slice(1).reduce((s, i, n) => s + len(run[n], i), 0));
    const total = runLen.reduce((a, b) => a + b, 0);
    const reach = new Array(P.length).fill(null);
    let acc = 0;
    CONSTELLATION.runs.forEach((run, r) => {
      const path = document.createElementNS(NS, 'path');
      path.setAttribute('class', 'const');
      path.setAttribute('pathLength', '1');
      path.setAttribute('d', 'M' + run.map((i) => P[i].map((v) => v.toFixed(1)).join(' ')).join(' '));
      svg.append(path);
      lines.push({ path, from: acc / total, to: (acc + runLen[r]) / total });
      let along = acc;
      run.forEach((i, n) => { if (n) along += len(run[n - 1], i); if (reach[i] == null) reach[i] = along / total; });
      acc += runLen[r];
    });
    P.forEach(([cx, cy], i) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('class', 'const-s'); c.setAttribute('cx', cx.toFixed(1)); c.setAttribute('cy', cy.toFixed(1)); c.setAttribute('r', (2.2 * Math.max(1, k / 1.4)).toFixed(2));
      svg.append(c);
      nodes.push({ c, at: reach[i] });
    });
  }
  return (t) => {
    const { hidden } = wipeState(svg, t, { inAt: null, outAt, outDur, dir });
    if (hidden) return;
    for (const s of stars) {
      const p = prog(t, s.at, s.at + 0.35, ease.soft);
      s.c.style.opacity = p >= 1 ? '' : String(+(p * 1).toFixed(3));
      s.c.style.visibility = p <= 0 ? 'hidden' : '';
    }
    if (lines.length) {
      const p = prog(t, constIn, constIn + constDur, ease.soft);
      for (const l of lines) {
        const q = clamp((p - l.from) / (l.to - l.from));
        l.path.style.visibility = q <= 0 ? 'hidden' : '';
        l.path.style.strokeDasharray = q > 0 && q < 1 ? '1' : '';
        l.path.style.strokeDashoffset = q > 0 && q < 1 ? String(+(1 - q).toFixed(5)) : '';
      }
      for (const n of nodes) {
        const q = p <= 0 ? 0 : clamp((p - n.at) / 0.08 + 1);
        n.c.style.visibility = q <= 0 ? 'hidden' : '';
        n.c.style.opacity = q >= 1 ? '' : String(+q.toFixed(3));
      }
    }
  };
}
