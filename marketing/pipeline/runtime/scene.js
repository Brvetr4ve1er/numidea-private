// Deterministic scene clock.
//
// A video is a pure function of time: the page never reads the wall clock.
// The renderer calls window.__scene.seek(t) for t = 0, 1/fps, 2/fps, ... and
// screenshots after each call, so frame N is identical whether it is rendered
// first, last, twice, or by another worker in parallel.
//
// Two ways to animate, both seekable:
//   1. JS updaters: scene.on((t) => { el.style.transform = ... })
//   2. CSS @keyframes: every Web Animation on the page is paused and its
//      currentTime set to t on each seek (CSS *transitions* are disabled in
//      render mode because they run on the wall clock).
//
// URL parameters: ?ratio=9x16|16x9|4x5|1x1 &lang=fr|en|ar &theme=<site theme>
//                 &render (set by the renderer) &guides (draw safe zones)

export const params = new URLSearchParams(location.search);

// Output sizes. Safe zones are conservative working values (the union of the
// overlays Reels, TikTok and Shorts draw over a 9:16 video; YouTube title-safe
// for 16:9); re-check them against each platform's current spec before a
// production batch. Text and logos stay inside; backgrounds bleed to the edge.
// 9:16 (scripts-trailer.md §3.3, §3.4): the text and key-visual band is
// x 140-940, y 290-1240 in EVERY language (platform chrome mirrors with the
// viewer's app language, not the video's) until TikTok's RTL safe-zone file
// has been checked (gate G8). 16:9: text y 80-960, the bottom 120 px stay free
// for the player's controls.
export const RATIOS = {
  '9x16': { w: 1080, h: 1920, safe: { t: 290, r: 140, b: 680, l: 140 } },
  '16x9': { w: 1920, h: 1080, safe: { t: 80, r: 120, b: 120, l: 120 } },
  '4x5': { w: 1080, h: 1350, safe: { t: 90, r: 90, b: 90, l: 90 } },
  '1x1': { w: 1080, h: 1080, safe: { t: 90, r: 90, b: 90, l: 90 } },
};

// Easing: the same cubic-bezier curves assets/styles.css uses on the site.
export function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (t) => ((ax * t + bx) * t + cx) * t;
  const sy = (t) => ((ay * t + by) * t + cy) * t;
  const dx = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    if (x <= 0) return 0; if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) { const e = sx(t) - x, d = dx(t); if (Math.abs(e) < 1e-7) return sy(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
    let lo = 0, hi = 1; t = x;
    for (let i = 0; i < 40; i++) { const v = sx(t); if (Math.abs(v - x) < 1e-7) break; if (v < x) lo = t; else hi = t; t = (lo + hi) / 2; }
    return sy(t);
  };
}
export const ease = {
  out: bezier(0.16, 1, 0.3, 1),      // --ease-out on the site
  inOut: bezier(0.7, 0, 0.3, 1),
  soft: bezier(0.3, 0, 0.3, 1),
  spring: bezier(0.34, 1.56, 0.64, 1),
  linear: (x) => x,
};
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, p) => a + (b - a) * p;
// Progress 0..1 of the window [t0, t1], eased.
export const prog = (t, t0, t1, e = ease.out) => e(clamp((t - t0) / (t1 - t0)));

// Is this element painted at all right now? (display, visibility, opacity of
// it and every ancestor). Used by the safe check, which looks at what a
// viewer can see on the frame, not at blocks still waiting for their entrance.
export function isPainted(el) {
  for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
    const cs = getComputedStyle(n);
    if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return false;
  }
  return true;
}

// The box a block really paints: its border box united with its text runs.
// A run's horizontal extent is exact (advance widths: a word that overflows
// the width, a word in flight). Its vertical extent is taken as its LINE box,
// centre +/- half the line-height (half-leading is split evenly, so the
// centres coincide): a font's content area is taller than a 1.1 line box and
// is not ink, while fit-text and the script's sizes are line boxes. Text
// that overflows a fixed-height box still shows up, line by line.
export function paintedRect(el) {
  const r = el.getBoundingClientRect();
  let { left, top, right, bottom } = r;
  if (el.textContent.trim()) {
    const k = el.offsetWidth ? r.width / el.offsetWidth : 1;
    const range = document.createRange();
    range.selectNodeContents(el);
    for (const q of range.getClientRects()) {
      if (!q.width || !q.height) continue;
      left = Math.min(left, q.left); right = Math.max(right, q.right);
    }
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!n.textContent.trim()) continue;
      const lhRaw = getComputedStyle(n.parentElement).lineHeight;
      const tr = document.createRange(); tr.selectNodeContents(n);
      for (const q of tr.getClientRects()) {
        if (!q.width || !q.height) continue;
        // a word in flight carries its own scale: measure its line box at it
        const sk = n.parentElement.offsetHeight ? n.parentElement.getBoundingClientRect().height / n.parentElement.offsetHeight : k;
        const half = lhRaw === 'normal' ? q.height / 2 : (parseFloat(lhRaw) * sk) / 2;
        const cy = (q.top + q.bottom) / 2;
        top = Math.min(top, cy - half); bottom = Math.max(bottom, cy + half);
      }
    }
  }
  return { left, top, right, bottom, width: right - left, height: bottom - top };
}

// The part of a block a viewer can see: paintedRect() cut by the block's own
// clip-path when it is an inset() in % (the reading-direction wipes). null if
// nothing is left.
export function visibleRect(el) {
  const p = paintedRect(el);
  let { left, top, right, bottom } = p;
  const m = /inset\(\s*([-\d.]+)%\s+([-\d.]+)%\s+([-\d.]+)%\s+([-\d.]+)%\s*\)/.exec(el.style.clipPath || '');
  if (m) {
    const b = el.getBoundingClientRect();
    const [t, r, bt, l] = m.slice(1).map(Number);
    left = Math.max(left, b.left + (l / 100) * b.width); right = Math.min(right, b.right - (r / 100) * b.width);
    top = Math.max(top, b.top + (t / 100) * b.height); bottom = Math.min(bottom, b.bottom - (bt / 100) * b.height);
  }
  if (right - left <= 0.5 || bottom - top <= 0.5) return null;
  return { left, top, right, bottom, width: right - left, height: bottom - top };
}

export function createScene({ duration, fps = 30, fonts = [], images = [] }) {
  const ratio = RATIOS[params.get('ratio')] ? params.get('ratio') : '9x16';
  const lang = ['fr', 'en', 'ar'].includes(params.get('lang')) ? params.get('lang') : 'fr';
  const theme = params.get('theme') || 'arcanum';
  const render = params.has('render');
  const { w, h, safe } = RATIOS[ratio];
  const readySteps = [];

  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.ratio = ratio;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (render) root.dataset.render = '';
  if (params.has('guides')) root.dataset.guides = '';
  const s = root.style;
  s.setProperty('--W', w + 'px'); s.setProperty('--H', h + 'px');
  for (const k of ['t', 'r', 'b', 'l']) s.setProperty('--safe-' + k, safe[k] + 'px');

  const updaters = [];
  const scene = {
    duration, fps, frames: Math.round(duration * fps), width: w, height: h,
    ratio, lang, theme, render, t: 0, params,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    // Frames the renderer re-checks after the capture: the last frame of every
    // scene and the settled frame of every block's entrance (§3.4). Videos add
    // them with checkAt(); the renderer always adds the very last frame.
    checkpoints: [],
    checkAt(t, label) { scene.checkpoints.push({ frame: Math.min(scene.frames - 1, Math.round(t * fps)), label }); return scene; },
    // Frames the capture tools paint before the first real capture, until
    // two rounds are identical (lib/warm.mjs): together they should show
    // every plate and image the video uses.
    warmFrames: [],
    warmAt(t) { const n = Math.round(t * fps); if (n >= 0 && n < scene.frames) scene.warmFrames.push(n); return scene; },
    // Async steps run by ready() after fonts and images are proven loaded
    // (fit-text, runtime reads of the site's CSS...). A step that throws
    // makes ready() reject, and the renderer refuses to start.
    prepare(name, fn) { readySteps.push([name, fn]); return scene; },
    on(fn) { updaters.push(fn); return scene; },
    seek(t) {
      scene.t = t;
      for (const a of document.getAnimations()) { a.pause(); a.currentTime = t * 1000; }
      for (const fn of updaters) fn(t, scene);
      return t;
    },
    seekFrame(n) { return scene.seek(n / fps); },
    // Every text block ([data-cap], [data-copy]) and every element marked
    // [data-safe] that is painted on this frame must sit inside the safe area,
    // text overflow included (paintedRect). A block with a [data-box] (its
    // layout box, "x,y,w,h" in canvas px) must also keep its text inside that
    // box. The renderer runs this on every checkpoint frame and fails the
    // render if anything sticks out.
    safeCheck(selector = '[data-cap], [data-copy], [data-safe]') {
      const box = document.querySelector('.safe')?.getBoundingClientRect();
      if (!box) return [{ el: '.safe', problem: 'no .safe element' }];
      const out = [];
      const over = (r, b) => Object.entries({ top: b.top - r.top, right: r.right - b.right, bottom: r.bottom - b.bottom, left: b.left - r.left })
        .filter(([, v]) => v > 1).map(([k, v]) => `${k} +${Math.round(v)}px`);
      for (const el of document.querySelectorAll(selector)) {
        if (!isPainted(el)) continue;
        const r = paintedRect(el);
        if (!r.width && !r.height) continue;
        const name = el.dataset.copy || el.dataset.cap || el.id || el.className?.baseVal || el.className || el.tagName;
        const bad = over(r, box);
        if (bad.length) out.push({ el: name, problem: 'outside the safe area: ' + bad.join(', ') });
        if (el.dataset.box) {
          const [x, y, bw, bh] = el.dataset.box.split(',').map(Number);
          const own = over(r, { left: x, top: y, right: x + bw, bottom: y + bh });
          if (own.length) out.push({ el: name, problem: `outside its box ${el.dataset.box}: ` + own.join(', ') });
        }
      }
      return out;
    },
    // Scene changes: blocks of DIFFERENT scenes ([data-scene], space-separated
    // scene ids) painted on shared rows within `gap` px of each other read as
    // one spliced line (V01 review of 2026-10-27: « UN RANÇAIS », « NUM) »).
    // Each block's visible part is its painted box cut by its clip-path
    // inset (the wipes). Returns the offending pairs.
    overlapCheck(selector = '[data-scene]', gap = 200) {
      const items = [];
      for (const el of document.querySelectorAll(selector)) {
        if (!isPainted(el)) continue;
        const r = visibleRect(el);
        if (!r) continue;
        items.push({ name: el.dataset.copy || el.id, scenes: el.dataset.scene.split(/\s+/), r });
      }
      const out = [];
      for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
        const a = items[i], b = items[j];
        if (a.scenes.some((s) => b.scenes.includes(s))) continue;
        const rows = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
        const hgap = Math.max(a.r.left, b.r.left) - Math.min(a.r.right, b.r.right);
        if (rows > 1 && hgap < gap) out.push({ el: `${a.name} (${a.scenes.join('+')}) / ${b.name} (${b.scenes.join('+')})`,
          problem: `blocks of two scenes share ${Math.round(rows)} px of rows, ${hgap < 0 ? 'overlapping' : Math.round(hgap) + ' px apart'}` });
      }
      return out;
    },
    async ready() {
      // Fonts: ask for every face the video sets, then report which woff2
      // files were really fetched. A screenshot taken in a fallback face is
      // a different design (BRAND.md, "Fonts are self-hosted").
      await Promise.all(fonts.map(([font, sample]) => document.fonts.load(font, sample)));
      await document.fonts.ready;
      const fontChecks = fonts.map(([font, sample]) => ({ font, ok: document.fonts.check(font, sample) }));
      const loadedFaces = [...document.fonts].filter((f) => f.status === 'loaded')
        .map((f) => `${f.family.replace(/"/g, '')} ${f.weight}`);
      // Images (engravings are CSS masks): decode before the first frame so a
      // late decode cannot leave one frame without its plate.
      const imgs = await Promise.all(images.map(async (src) => {
        const img = new Image(); img.src = src;
        try { await img.decode(); return { src, ok: true, w: img.naturalWidth, h: img.naturalHeight }; }
        catch { return { src, ok: false }; }
      }));
      const fetchedFonts = performance.getEntriesByType('resource')
        .filter((e) => e.name.endsWith('.woff2')).map((e) => e.name.split('/').pop());
      // Steps need real faces and decoded plates: refuse to run them otherwise.
      const steps = {};
      if (fontChecks.every((f) => f.ok) && imgs.every((i) => i.ok)) {
        for (const [name, fn] of readySteps) steps[name] = await fn(scene);
      }
      scene.seek(0);
      return { fontChecks, loadedFaces: [...new Set(loadedFaces)], fetchedFonts, images: imgs, steps };
    },
  };
  window.__scene = scene;
  if (!render) startPreview(scene);
  return scene;
}

// Preview player for authoring in a normal browser (never used by the
// renderer). Space: play/pause. Left/Right: one frame. Home: start.
function startPreview(scene) {
  let playing = true, t0 = performance.now(), at = 0;
  const fit = () => {
    const k = Math.min(innerWidth / scene.width, (innerHeight - 40) / scene.height);
    document.documentElement.style.setProperty('--preview-scale', k);
  };
  addEventListener('resize', fit); fit();
  document.documentElement.dataset.preview = '';
  const bar = document.createElement('div');
  bar.className = 'preview-bar';
  document.body.append(bar);
  const show = () => { bar.textContent = `${scene.ratio} · ${scene.lang} · ${scene.theme} · t=${at.toFixed(2)} s · frame ${Math.round(at * scene.fps)}/${scene.frames} · space, ←, →`; };
  addEventListener('keydown', (e) => {
    if (e.key === ' ') { playing = !playing; t0 = performance.now() - at * 1000; e.preventDefault(); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { playing = false; at = clamp(at + (e.key === 'ArrowRight' ? 1 : -1) / scene.fps, 0, scene.duration); scene.seek(at); show(); }
    if (e.key === 'Home') { at = 0; t0 = performance.now(); scene.seek(0); show(); }
  });
  const loop = (now) => {
    if (playing) { at = ((now - t0) / 1000) % scene.duration; scene.seek(at); show(); }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
