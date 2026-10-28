// « Votre site »: the mock-up and its right-to-left mirror
// (scripts-trailer.md §3.4 "Mock-up + mirror", §4.1 S2).
//
// The blueprint (blueprint.js) fills into a page built from theme surfaces:
// a --navy page under a --plum chrome bar, --plum cards and image block, an
// unlabeled --crimson button, grey text bars, the F25 placeholders
// (« Votre logo », « Votre entreprise ») and the F31 tab row. Every block sits
// where the blueprint drew it (the same 800 x 500 page, blueprint.js
// geometry()).
//
// States (one language per frame, scripts-trailer.md §1):
//   FR master: FR (placeholders) -> EN (grey bars) -> AR (grey bars, mirrored)
//   EN master: EN (placeholders) -> FR (grey bars) -> AR (grey bars, mirrored)
//   AR master: FR (grey bars) -> EN (grey bars) -> AR (Arabic placeholders, mirrored)
// A copy slot shows its words only in the master's own state; in the others
// each of its lines becomes a grey bar of the same width, in the same place.
// The tab row is always in the master's script and underlines the active
// state. The Arabic state sets dir="rtl" on the page, and every block glides
// to its mirrored place (x' = W - x - w) over the mirror window: a FLIP done
// in code, positions computed from the clock, layout (left) only, never a
// transform. The page's artwork is never flipped: only its blocks move.
//
// Blocks never pass through each other as one shape:
//   - blocks that look the same (the three cards; the bars of each card row)
//     are interchangeable, so each takes the NEAREST mirrored place: the
//     cards stay where they are and only their bars glide to the other side
//     of each card (no two cards ever stack into one);
//   - where a block must cross another on the same row, the one behind
//     yields: the logo slot fades under the tab row as they pass, and the
//     hatched image dims while the text column crosses it. The fade follows
//     the overlap of the two blocks, so it is 0 (cleared) at both ends.
//
// It is "your site": never called an Aperçu, never a client site, and it
// never morphs into a real screenshot. No string is written here: the text
// slots are [data-copy] blocks filled by the copy loader (copy/trailer.json).
import { prog, lerp, ease } from './scene.js';
import { wipeState } from './atlas.js';

export const PAGE = { w: 800, h: 500, chrome: 48, radius: 16 };

// The page's blocks, in page units, in paint order (surfaces under bars
// under text). kind: img | card | btn | bar | text (a copy slot) | tabs.
const cardBars = (x) => [
  { id: `c${x}a`, kind: 'bar', x: x + 22, y: 398, w: 150, h: 12 },
  { id: `c${x}b`, kind: 'bar', x: x + 22, y: 422, w: 100, h: 12 },
];
export const LEAVES = [
  { id: 'image', kind: 'img', x: 470, y: 130, w: 290, h: 210 },
  { id: 'card1', kind: 'card', x: 40, y: 372, w: 230, h: 98 },
  { id: 'card2', kind: 'card', x: 285, y: 372, w: 230, h: 98 },
  { id: 'card3', kind: 'card', x: 530, y: 372, w: 230, h: 98 },
  { id: 'button', kind: 'btn', x: 40, y: 290, w: 170, h: 48 },  // no label, ever
  { id: 'p1', kind: 'bar', x: 40, y: 234, w: 360, h: 12 },
  { id: 'p2', kind: 'bar', x: 40, y: 258, w: 290, h: 12 },
  ...cardBars(40), ...cardBars(285), ...cardBars(530),
  // copy slots: the box is the most the text may take; the leaf shrinks to
  // its text after fit-text, keeping its start edge (or its end edge).
  { id: 'logo', kind: 'text', copy: 'M01', cls: 'mk-logo', role: 'mockLabel', lines: 1, x: 40, y: 60, w: 240, h: 48 },
  { id: 'head', kind: 'text', copy: 'M02', cls: 'mk-head', role: 'mockHead', lines: 2, x: 40, y: 126, w: 410, h: 92 },
  { id: 'tabs', kind: 'tabs', copy: 'M03', cls: 'mk-tabs', role: 'mockLabel', lines: 1, x: 440, y: 60, w: 320, h: 48, anchor: 'end' },
];
export const LANGS = ['fr', 'en', 'ar']; // the tab row's order (F31)

export function stateOrder(master) {
  return master === 'en' ? ['en', 'fr', 'ar'] : ['fr', 'en', 'ar'];
}

const px = (v) => `${+v.toFixed(2)}px`;
function setO(el, o) {
  el.style.opacity = o >= 1 ? '' : String(+o.toFixed(4));
  el.style.visibility = o <= 0 ? 'hidden' : '';
}

// root: an empty .mock element (it may hold the .mk-chrome bar). Builds the
// page's blocks now, so the copy loader fills the text slots at ready().
//   lang      the master's language
//   dir       the master's reading direction (the fill and exit wipes)
//   fill      [at, dur]: the surfaces wipe in, in the reading direction
//   states    [t1, t2, t3]: when each state begins (t1 = the first, shown by the fill)
//   mirror    [at, dur]: the glide to the mirrored layout (state 3)
//   out       [at, dur]: the wipe out
export function mockup(root, { lang, dir = 'ltr', fill, states, mirror, out = [null, 0.33], xfade = 0.2, slide = 0.3 }) {
  const order = stateOrder(lang);
  if (states.length !== 3) throw new Error('mockup: three states expected');
  const leaves = LEAVES.map((d) => {
    const el = document.createElement(d.kind === 'text' || d.kind === 'tabs' ? 'div' : 'i');
    el.className = `mk-leaf mk-${d.kind}${d.cls ? ' ' + d.cls : ''}`;
    if (d.copy) el.dataset.copy = d.copy;
    if (d.kind === 'tabs') el.setAttribute('data-words', '');
    root.append(el);
    return { ...d, el };
  });
  // The grey bars standing in for a copy slot's lines (placed by layout()).
  for (const lf of leaves.filter((l) => l.kind === 'text')) {
    lf.bars = Array.from({ length: lf.lines }, (_, i) => {
      const el = document.createElement('i');
      el.className = 'mk-leaf mk-bar mk-slotbar';
      root.insertBefore(el, leaves.find((l) => l.kind === 'text').el);
      return { id: `${lf.id}-bar${i}`, el, x: 0, y: 0, w: 0, h: 0, used: false };
    });
  }
  const textLeaves = leaves.filter((l) => l.copy);
  const tabs = leaves.find((l) => l.kind === 'tabs');
  let box = null, s = 1, tabPos = null, ul = null, yields = [];
  // How much a block yields to the blocks it crosses: 0 apart, 1 once their
  // overlap reaches a third of the narrower one (smoothstep in between).
  const cover = (a, b) => {
    if (Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y) <= 0) return 0;
    const ov = Math.min(a.cx + a.w, b.cx + b.w) - Math.max(a.cx, b.cx);
    const r = Math.min(1, Math.max(0, ov / Math.min(a.w, b.w)) / 0.34);
    return r * r * (3 - 2 * r);
  };

  const api = {
    order, leaves,
    // The text blocks fit-text sizes (at the mock-up's scale).
    textBlocks(b) {
      const k = b.w / PAGE.w;
      return textLeaves.map((l) => ({ id: l.copy, state: 'mock', el: l.el, role: l.role, lines: l.lines,
        box: { w: Math.floor(l.w * k), h: Math.floor(l.h * k) } }));
    },
    // After fonts, copy and fit: place the page on its box, set each slot at
    // its fitted size, shrink it to its text, and measure its lines for the
    // grey bars. fit: { M01: {size, lh, h}, ... }.
    layout(b, fit) {
      box = b; s = b.w / PAGE.w;
      if (Math.abs(b.h / PAGE.h - s) > 0.01) throw new Error(`mockup: box ${b.w}x${b.h} is not 800 x 500 in proportion`);
      Object.assign(root.style, { left: px(b.x), top: px(b.y), width: px(b.w), height: px(b.h), borderRadius: px(PAGE.radius * s) });
      root.dataset.box = `${b.x},${b.y},${b.w},${b.h}`;
      root.style.setProperty('--mk-s', String(s));
      root.style.setProperty('--mk-chrome', px(PAGE.chrome * s));
      for (const lf of leaves) {
        Object.assign(lf.el.style, { top: px(lf.y * s), width: px(lf.w * s), height: px(lf.h * s), left: px(lf.x * s) });
        if (!lf.copy) continue;
        const f = fit[lf.copy];
        if (!f) throw new Error(`mockup: no fit for ${lf.copy}`);
        Object.assign(lf.el.style, { fontSize: `${f.size}px`, lineHeight: String(f.lh), paddingTop: px((lf.h * s - f.h) / 2) });
        // Shrink the slot to its text (start edge kept; the tab row keeps its
        // end edge, where the blueprint's nav strokes end), so the mirrored
        // slot lands flush on the other side.
        const lines0 = lineRects(lf.el);
        const ext = Math.max(...lines0.map((q) => q.right)) - Math.min(...lines0.map((q) => q.left));
        let w = Math.ceil(ext) + 2;
        for (let i = 0; i < 4; i++) {
          lf.el.style.width = px(w);
          if (lineRects(lf.el).length === lines0.length) break;
          w += 2;
        }
        const wU = w / s;
        if (lf.anchor === 'end') lf.x = lf.x + lf.w - wU;
        lf.w = wU;
        lf.el.style.left = px(lf.x * s);
        lf.size = f.size;
        // One grey bar per line, as wide as the line, centred on it.
        if (lf.bars) {
          const lines = lineRects(lf.el);
          lf.bars.forEach((bar, i) => {
            const q = lines[i];
            bar.used = !!q;
            if (!q) return;
            const hB = Math.max(10, Math.round(f.size * 0.5)) / s;
            Object.assign(bar, { x: lf.x + q.left / s, w: (q.right - q.left) / s, h: hB, y: lf.y + ((q.top + q.bottom) / 2) / s - hB / 2 });
            Object.assign(bar.el.style, { top: px(bar.y * s), width: px(bar.w * s), height: px(bar.h * s), left: px(bar.x * s) });
          });
        }
      }
      // The tab row: three tabs (the words that are not separators) and the
      // --crimson underline that slides to the active state.
      const words = [...tabs.el.querySelectorAll('.w')].filter((w) => w.textContent.trim() !== '·');
      if (words.length !== 3) throw new Error(`mockup: the tab row needs 3 tabs, got ${words.length}`);
      ul = document.createElement('i');
      ul.className = 'mk-ul';
      tabs.el.append(ul);
      const lineBottom = parseFloat(tabs.el.style.paddingTop) + fit[tabs.copy].h;
      tabPos = words.map((w) => ({ el: w, x: w.offsetLeft, w: w.offsetWidth }));
      Object.assign(ul.style, { top: px(Math.min(lineBottom + 1, tabs.h * s - 4)), height: px(Math.max(2, 3 * s)) });
      // Mirror destinations; look-alike blocks take the nearest mirrored place.
      const groups = new Map();
      for (const lf of leaves) {
        lf.x2 = PAGE.w - lf.x - lf.w;
        if (lf.copy) continue;
        const k = `${lf.kind}|${lf.w}|${lf.h}|${lf.y}`;
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push(lf);
      }
      for (const g of groups.values()) {
        if (g.length < 2) continue;
        const dst = g.map((l) => PAGE.w - l.x - l.w).sort((a, b) => a - b);
        [...g].sort((a, b) => a.x - b.x).forEach((l, i) => { l.x2 = dst[i]; });
      }
      for (const lf of leaves) for (const bar of lf.bars || []) bar.x2 = PAGE.w - bar.x - bar.w;
      // Who yields to whom while crossing.
      const byId = (id) => leaves.find((l) => l.id === id);
      const logo = byId('logo'), head = byId('head');
      yields = [
        { name: 'logo slot under the tab row', who: [logo, ...logo.bars.filter((b) => b.used)], over: [tabs], depth: 1 },
        { name: 'image under the text column', who: [byId('image')], over: [head, ...head.bars.filter((b) => b.used), byId('p1'), byId('p2'), byId('button')], depth: 0.72 },
      ];
      return {
        scale: s, order,
        slots: textLeaves.map((l) => ({ copy: l.copy, size: l.size, x: +l.x.toFixed(1), w: +l.w.toFixed(1),
          bars: (l.bars || []).filter((b) => b.used).map((b) => `${b.x.toFixed(0)},${b.y.toFixed(0)},${b.w.toFixed(0)}x${b.h.toFixed(0)}`) })),
        mirror: leaves.filter((l) => !l.copy).map((l) => `${l.id} ${l.x}->${+l.x2.toFixed(1)}`),
        yields: yields.map((y) => y.name),
      };
    },
    update(t) {
      const { hidden } = wipeState(root, t, { inAt: fill[0], inDur: fill[1], outAt: out[0], outDur: out[1], dir });
      if (hidden) return;
      const st = t >= states[2] ? 2 : t >= states[1] ? 1 : 0;
      const rtl = t >= mirror[0];
      if (root.dir !== (rtl ? 'rtl' : 'ltr')) root.dir = rtl ? 'rtl' : 'ltr';
      const m = prog(t, mirror[0], mirror[0] + mirror[1], ease.inOut);
      // The master's words show in its own state only; a crossfade with the
      // grey bars at each state change.
      let o = 0;
      order.forEach((l, i) => {
        if (l !== lang) return;
        const a = states[i], b = states[i + 1];
        if (i > 0 && t < a) return;
        const fin = i === 0 ? 1 : prog(t, a, a + xfade, ease.soft);
        const fout = b == null ? 0 : prog(t, b, b + xfade, ease.soft);
        o = Math.max(o, fin * (1 - fout));
      });
      const place = (lf) => {
        const x = lerp(lf.x, lf.x2 ?? PAGE.w - lf.x - lf.w, m);
        lf.el.style.left = px(x * s);
        lf.cx = x; // current x, page units
        return x;
      };
      for (const lf of leaves) {
        const x = place(lf);
        if (lf.copy) lf.el.dataset.box = `${Math.round(box.x + x * s)},${Math.round(box.y + lf.y * s)},${Math.round(lf.w * s)},${Math.round(lf.h * s)}`;
        if (lf.bars) for (const bar of lf.bars) place(bar);
      }
      // Crossing blocks: the one behind yields while they overlap.
      const keep = new Map();
      for (const y of yields) {
        const k = 1 - y.depth * Math.max(...y.who.flatMap((a) => y.over.map((b) => cover(a, b))));
        for (const a of y.who) keep.set(a, Math.min(keep.get(a) ?? 1, k));
      }
      for (const lf of leaves) {
        const k = keep.get(lf) ?? 1;
        if (lf.kind === 'text') {
          setO(lf.el, o * k);
          for (const bar of lf.bars) setO(bar.el, bar.used ? (1 - o) * (keep.get(bar) ?? 1) : 0);
        } else if (lf.kind !== 'tabs') setO(lf.el, k);
      }
      // The underline slides to the active tab at each state change; the
      // tab's ink switches halfway through the slide.
      const idx = order.map((l) => LANGS.indexOf(l));
      let from = idx[0], to = idx[0], p = 1;
      if (st >= 1) { const a = states[st]; from = idx[st - 1]; to = idx[st]; p = prog(t, a, a + slide, ease.out); }
      const A = tabPos[from], B = tabPos[to];
      ul.style.left = px(lerp(A.x, B.x, p));
      ul.style.width = px(lerp(A.w, B.w, p));
      const on = p >= 0.5 ? to : from;
      tabPos.forEach((tp, i) => tp.el.classList.toggle('on', i === on));
    },
  };
  return api;
}

// The lines of a text block, relative to its padding box, in layout px
// (independent of any preview scaling): [{ left, right, top, bottom }].
function lineRects(el) {
  const r = el.getBoundingClientRect();
  const k = el.offsetWidth ? r.width / el.offsetWidth : 1;
  const range = document.createRange();
  range.selectNodeContents(el);
  const lines = [];
  for (const q of range.getClientRects()) {
    if (!q.width || !q.height) continue;
    const top = (q.top - r.top) / k, bottom = (q.bottom - r.top) / k, left = (q.left - r.left) / k, right = (q.right - r.left) / k;
    const ln = lines.find((l) => Math.abs((l.top + l.bottom) / 2 - (top + bottom) / 2) < (bottom - top) * 0.4);
    if (ln) { ln.left = Math.min(ln.left, left); ln.right = Math.max(ln.right, right); ln.top = Math.min(ln.top, top); ln.bottom = Math.max(ln.bottom, bottom); }
    else lines.push({ left, right, top, bottom });
  }
  return lines.sort((a, b) => a.top - b.top);
}
