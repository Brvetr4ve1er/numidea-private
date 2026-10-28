// Layout per ratio, in canvas pixels, from a table written straight from the
// script (scripts-trailer.md §4.2): { '9x16': { id: [x, y, w, h], ... }, ... }.
//
// The right-to-left hook: a ratio table with `_mirror: true` reflects every
// box for Arabic (x' = W - x - w), which is the 16:9 two-column rule (text
// x 120-900 becomes 1020-1800, the visual column 960-1800 becomes 120-960).
// Ids listed in `_fixed` never move (artwork: the engravings are never
// mirrored). 9:16 keeps the same band in every language; Arabic text is
// right-aligned inside it by its own dir="rtl".
export const mirrorX = (b, W) => ({ ...b, x: W - b.x - b.w });

export function createLayout(scene, table) {
  const t = table[scene.ratio];
  if (!t) throw new Error(`layout: no table for ${scene.ratio}`);
  const mirror = scene.dir === 'rtl' && !!t._mirror;
  const fixed = new Set(t._fixed || []);
  const L = {
    ratio: scene.ratio, mirror,
    has(id) { return Array.isArray(t[id]); },
    box(id) {
      const v = t[id];
      if (!Array.isArray(v)) throw new Error(`layout: no box ${id} in ${scene.ratio}`);
      const [x, y, w, h] = v;
      const b = { x, y, w, h };
      return mirror && !fixed.has(id) ? mirrorX(b, scene.width) : b;
    },
    // Position an element on a box: absolute, left/top/width (and height
    // unless `auto`). A text block whose height is known (fit-text) can be
    // aligned inside its box: valign 'top' | 'center' | 'bottom'. The box is
    // recorded in data-box, so the safe check also keeps the text inside it.
    place(el, idOrBox, { valign = 'top', contentH = null, height = 'box' } = {}) {
      const b = typeof idOrBox === 'string' ? L.box(idOrBox) : idOrBox;
      let top = b.y;
      if (contentH != null && valign !== 'top') top = b.y + (valign === 'center' ? (b.h - contentH) / 2 : b.h - contentH);
      Object.assign(el.style, { position: 'absolute', left: `${b.x}px`, top: `${Math.round(top)}px`, width: `${b.w}px`,
        height: height === 'box' ? `${b.h}px` : height === 'auto' ? '' : `${height}px` });
      el.dataset.box = `${b.x},${b.y},${b.w},${b.h}`;
      return { ...b, top: Math.round(top) };
    },
  };
  return L;
}
