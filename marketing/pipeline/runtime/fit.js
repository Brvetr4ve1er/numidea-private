// Fit-text (scripts-trailer.md §3.2, §3.4): before frame 0, once the faces are
// proven loaded, every text block gets the LARGEST size in its role's range
// that fits its layout box in its maximum number of lines, with no word
// overflowing the width. Measured once on a hidden clone, so every frame and
// every render worker uses the same size (deterministic).
//
// Search order: from the role's max down to its FLOOR, 1 px at a time.
//   size >= range min        -> ok
//   floor <= size < min      -> "below-range" (allowed, reported as a warning)
//   nothing >= floor fits    -> "fail": the render refuses to start.
// Arabic: IBM Plex Sans Arabic, every size +12 %, line-height 1.5 (§1).

// [min, max, floor] per ratio, Latin sizes in px (§3.2 "Sizes, measured").
export const ROLES = {
  hook:   { lh: 1.1,  '9x16': [84, 120, 84], '16x9': [76, 96, 76] },
  header: { lh: 1.1,  '9x16': [56, 96, 52],  '16x9': [56, 88, 48] },
  body:   { lh: 1.25, '9x16': [52, 72, 52],  '16x9': [48, 64, 48] },
  label:  { lh: 1.25, '9x16': [46, 56, 44],  '16x9': [40, 48, 40] },
  small:  { lh: 1.3,  '9x16': [46, 56, 46],  '16x9': [40, 48, 40] },
  cta:    { lh: 1.2,  '9x16': [44, 52, 44],  '16x9': [40, 48, 40] },
  // Picture text inside the « Votre site » mock-up (F25 placeholders, F31
  // tab row): not a reading role of §3.2 (§3.2 counts it as picture text,
  // in its own column). The mock-up is 800 x 500 in both ratios, so one
  // range serves both. Sizes are for a mock-up at scale 1 (800 px wide).
  mockHead:  { lh: 1.1, '9x16': [40, 56, 34], '16x9': [40, 56, 34] },
  mockLabel: { lh: 1.2, '9x16': [26, 32, 22], '16x9': [26, 32, 22] },
  // The wordmark (F20, §3.2 "Wordmark"): 88 px in 9:16 and 16:9, one line,
  // cursor included. A mark, not reading text: fit-text only proves it fits
  // its box at that size (floor 80 px); it is always Latin and left to right,
  // so it is never scaled for Arabic (fitAll's `lang` override).
  wordmark:  { lh: 1.1, '9x16': [88, 88, 80], '16x9': [88, 88, 80] },
};
export const AR_SCALE = 1.12;
export const AR_LH = 1.5;

// `cap` (optional, Latin px) lowers a block's max below its role's, where
// the script sizes a block smaller than the role allows (V01 T40 as header:
// measured at <= 72 px, §3.2). Arabic scales the cap like the range.
export function rangeFor(role, ratio, lang, cap = null) {
  const r = ROLES[role];
  if (!r || !r[ratio]) throw new Error(`fit: no range for role ${role} in ${ratio}`);
  let [min, max, floor] = r[ratio];
  if (cap != null) { max = Math.min(max, cap); min = Math.min(min, max); }
  if (lang === 'ar') { min = Math.round(min * AR_SCALE); max = Math.round(max * AR_SCALE); floor = Math.round(floor * AR_SCALE); }
  return { min, max, floor, lh: lang === 'ar' ? AR_LH : r.lh };
}

let layer = null;
function measureLayer() {
  if (layer?.isConnected) return layer;
  layer = document.createElement('div');
  layer.className = 'fit-measure';
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;overflow:visible;visibility:hidden;pointer-events:none;contain:layout style';
  (document.querySelector('.stage') || document.body).append(layer);
  return layer;
}

// Lays a clone of `el` out at width w, size px, line-height lh and reports
// its height, its number of lines (distinct line tops), its widest line and
// whether anything sticks out of the width. The clone keeps el's classes and
// lang/dir, so it gets the same face, weight and tracking.
export function measure(el, { w, size, lh }) {
  const c = el.cloneNode(true);
  for (const n of [c, ...c.querySelectorAll('*')]) { n.removeAttribute('id'); delete n.dataset.copy; delete n.dataset.cap; delete n.dataset.safe; }
  c.style.cssText = `position:absolute;left:0;top:0;display:block;margin:0;padding:0;transform:none;clip-path:none;opacity:1;` +
    `width:${w}px;height:auto;font-size:${size}px;line-height:${lh};white-space:normal;overflow-wrap:normal;word-break:normal;hyphens:none`;
  for (const n of c.querySelectorAll('*')) { n.style.transform = ''; n.style.opacity = ''; }
  measureLayer().append(c);
  const box = c.getBoundingClientRect();
  const range = document.createRange();
  range.selectNodeContents(c);
  const tops = [];
  let left = box.left, right = box.right;
  for (const q of range.getClientRects()) {
    if (!q.width) continue;
    left = Math.min(left, q.left); right = Math.max(right, q.right);
    if (!tops.some((t) => Math.abs(t - q.top) < size * 0.35)) tops.push(q.top);
  }
  const out = { h: box.height, lines: tops.length, overflowX: Math.max(0, right - box.right, box.left - left, c.scrollWidth - w) };
  c.remove();
  return out;
}

// One block. spec = { role, box: {w, h}, lines, ratio, lang }. Returns the
// chosen size and the measures; never throws (fitAll decides).
export function fitBlock(el, { role, box, lines, ratio, lang, cap = null }) {
  const { min, max, floor, lh } = rangeFor(role, ratio, lang, cap);
  for (let s = max; s >= floor; s--) {
    const m = measure(el, { w: box.w, size: s, lh });
    if (m.lines <= lines && m.h <= box.h + 0.5 && m.overflowX <= 0.5) {
      return { size: s, lh, lines: m.lines, h: Math.round(m.h), range: [min, max], floor, status: s >= min ? 'ok' : 'below-range' };
    }
  }
  const m = measure(el, { w: box.w, size: floor, lh });
  return { size: null, lh, lines: m.lines, h: Math.round(m.h), range: [min, max], floor, status: 'fail',
    atFloor: `${m.lines} lines, ${Math.round(m.h)} px tall, overflow ${Math.round(m.overflowX)} px` };
}

// Every block of the video. blocks = [{ id, el, role, box, lines, state?,
// cap?, lang? }]. `lang` overrides the element's language for the range
// only (the wordmark: Latin in every master). Returns the report; throws (so
// ready() rejects and the render refuses to start) when any block has no
// size in range.
export function fitAll(scene, blocks) {
  const report = blocks.map((b) => {
    const lang = b.lang || b.el.lang || scene.lang;
    const r = fitBlock(b.el, { role: b.role, box: b.box, lines: b.lines, ratio: scene.ratio, lang, cap: b.cap ?? null });
    return { id: b.id, state: b.state || null, role: b.role, lang, box: `${b.box.w}x${b.box.h}`, maxLines: b.lines, cap: b.cap ?? null, text: b.el.textContent, ...r };
  });
  const failed = report.filter((r) => r.status === 'fail');
  if (failed.length) {
    throw new Error('fit-text: no size in range fits: ' + failed.map((f) =>
      `${f.id}${f.state ? '/' + f.state : ''} (${f.lang}, box ${f.box}, ≤${f.maxLines} lines, floor ${f.floor}px: ${f.atFloor})`).join('; '));
  }
  return report;
}
