// Shared brand components. Each one is: markup in the video file, a CSS
// class in brand/base.css, and (here) a function that returns an updater
// (t) => void for scene.on(). Timing is always passed in, never stored.
//
// Never put will-change on an animated element: Chromium then rasterises the
// layer once and rescales the bitmap, so the same frame came out different
// (up to 112 levels) depending on which frames were painted before it.
import { prog, lerp, ease } from './scene.js';

// ---------------------------------------------------------------- captions
// One dictionary per video: { key: { fr, en, ar } }. Every element with
// data-cap="key" gets the string for the video's language; data-cap-lang
// forces a language on one element (e.g. an Arabic line inside a French
// video). Each element gets its own lang and dir, so bidi, the Arabic font
// and the "no letter-spacing on Arabic" rule follow the text, not the page.
// ARABIC: every `ar` string is "à relire par un arabophone natif" until a
// native speaker has signed it off (see pipeline.md, "Arabic review gate").
export function applyCaptions(dict, lang, root = document) {
  const missing = [];
  for (const el of root.querySelectorAll('[data-cap]')) {
    const key = el.dataset.cap;
    const l = el.dataset.capLang || lang;
    const s = dict[key]?.[l];
    if (s == null) { missing.push(`${key}.${l}`); continue; }
    el.textContent = s;
    el.lang = l;
    el.dir = l === 'ar' ? 'rtl' : 'ltr';
  }
  if (missing.length) throw new Error('Missing captions: ' + missing.join(', '));
}

// ------------------------------------------------------------ plate reveal
// An engraving from the site's assets/illus, applied exactly like the site
// does it: a luminance mask over currentColor, so it takes the theme's ink.
// The reveal is a burin pass: a wipe in reading direction led by a thin
// brass rule, with a slow settle in scale.
export function plate(el, { src, t0 = 0, dur = 1.2, settle = 3 }) {
  const ink = el.querySelector('.plate-ink');
  const burin = el.querySelector('.plate-burin');
  ink.style.setProperty('--mask', `url("${src}")`);
  return (t) => {
    const p = prog(t, t0, t0 + dur, ease.out);
    const rtl = getComputedStyle(el).direction === 'rtl';
    const cut = (1 - p) * 100;
    ink.style.clipPath = rtl ? `inset(0 0 0 ${cut}%)` : `inset(0 ${cut}% 0 0)`;
    ink.style.transform = `scale(${lerp(1.06, 1, prog(t, t0, t0 + settle, ease.soft))})`;
    if (burin) {
      const pos = rtl ? cut : 100 - cut;
      burin.style.insetInlineStart = '';
      burin.style.left = `${pos}%`;
      burin.style.opacity = p > 0 && p < 1 ? String(Math.min(1, (1 - p) * 6)) : '0';
    }
  };
}

// ------------------------------------------------------------------- rise
// The site's hero-rise: translateY(18px) -> 0 with opacity, on --ease-out.
export function rise(el, { t0, dur = 0.8, dist = 18 }) {
  return (t) => {
    const p = prog(t, t0, t0 + dur, ease.out);
    // At rest the properties are cleared, not set to their identity values:
    // translateY(0px) still paints through a transform, and its pixels then
    // depended (by 1 level) on the frames painted before it.
    el.style.opacity = p >= 1 ? '' : String(p);
    el.style.transform = p >= 1 ? '' : `translateY(${(1 - p) * dist}px)`;
  };
}

// --------------------------------------------------------- reading wipe
// Reveals text in its own reading direction: left-to-right for French and
// English, right-to-left for Arabic.
export function wipe(el, { t0, dur = 0.9 }) {
  return (t) => {
    const p = prog(t, t0, t0 + dur, ease.out);
    const cut = (1 - p) * 100;
    if (p >= 1) { el.style.clipPath = ''; return; }
    el.style.clipPath = el.dir === 'rtl' || getComputedStyle(el).direction === 'rtl'
      ? `inset(-20% 0 -20% ${cut}%)` : `inset(-20% ${cut}% -20% 0)`;
  };
}

// ------------------------------------------------------------- fade
export function fade(el, { t0, dur = 0.5 }) {
  return (t) => { const p = prog(t, t0, t0 + dur, ease.soft); el.style.opacity = p >= 1 ? '' : String(p); };
}

// ------------------------------------------------------------ type move
// A block re-set from one size and box to another (V01: T40 from hook size
// to header size, 3.33-3.83 s): each word (span.w, from the copy loader's
// data-words) glides from its place in the first setting to its place in the
// second, scaling by the ratio of the two sizes. Before the move the block is
// laid out natively in state A; after it, natively in state B; only the
// words in flight carry a transform, and it is cleared when they land.
//
// a, b = { size, lh, box: {x, y, w, h}, valign, h (text height from fit) }.
// Call measure() once (after fonts and fit); it records every word's place
// in both settings, in canvas px, independent of any preview scaling.
export function typeMove(el, { a, b, at, dur = 0.5, e = ease.out, ey = ease.inOut }) {
  const words = [...el.querySelectorAll('.w')];
  const top = (s) => Math.round(s.valign === 'center' ? s.box.y + (s.box.h - s.h) / 2 : s.valign === 'bottom' ? s.box.y + s.box.h - s.h : s.box.y);
  const apply = (s) => Object.assign(el.style, { position: 'absolute', left: `${s.box.x}px`, top: `${top(s)}px`, width: `${s.box.w}px`,
    height: '', fontSize: `${s.size}px`, lineHeight: String(s.lh) });
  const boxAttr = (s) => `${s.box.x},${s.box.y},${s.box.w},${s.box.h}`;
  const union = (p, q) => { const x = Math.min(p.x, q.x), y = Math.min(p.y, q.y);
    return `${x},${y},${Math.max(p.x + p.w, q.x + q.w) - x},${Math.max(p.y + p.h, q.y + q.h) - y}`; };
  let A = null, B = null;
  const place = (s) => {
    apply(s);
    const r0 = el.getBoundingClientRect(), k = r0.width / el.offsetWidth || 1;
    return words.map((w) => { const r = w.getBoundingClientRect();
      return { x: s.box.x + (r.left - r0.left) / k, y: top(s) + (r.top - r0.top) / k }; });
  };
  let state = null;
  // Words that change line would cross the words already in place, so the
  // horizontal move runs on `e` and the vertical one on the slower `ey`: a
  // word from a lower line reaches its column first, then rises into place.
  const update = (t) => {
    const p = prog(t, at, at + dur, e);
    const py = prog(t, at, at + dur, ey);
    const next = p <= 0 ? 'a' : 'b';
    if (next !== state) { apply(next === 'a' ? a : b); state = next; }
    el.dataset.box = p <= 0 ? boxAttr(a) : p >= 1 ? boxAttr(b) : union(a.box, b.box);
    words.forEach((w, i) => {
      if (p <= 0 || p >= 1 || !A) { w.style.transform = ''; return; }
      const k = lerp(a.size / b.size, 1, p);
      // translations on Chromium's 1/64 px layout unit (atlas.js q64; pipeline.md §4.1 rule 10)
      const q = (v) => Math.round(v * 64) / 64;
      w.style.transform = `translate(${q((A[i].x - B[i].x) * (1 - p))}px,${q((A[i].y - B[i].y) * (1 - py))}px) scale(${k.toFixed(5)})`;
    });
  };
  update.measure = () => {
    for (const w of words) w.style.transform = '';
    A = place(a); B = place(b); state = null;
    return { a: { size: a.size, top: top(a) }, b: { size: b.size, top: top(b) }, words: words.length };
  };
  return update;
}
