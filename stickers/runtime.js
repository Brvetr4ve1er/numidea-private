// Sticker runtime: a deterministic loop clock and motion helpers.
// A scene calls Sticker({ width, height, fps, seconds, poster, draw }) where draw(p) paints
// loop phase p in [0, 1). Phase 1 equals phase 0, so every loop is seamless.
(function () {
  const TAU = Math.PI * 2;

  // cubic-bezier solver (the house easing is cubic-bezier(.16,1,.3,1))
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (t) => ((ax * t + bx) * t + cx) * t;
    const sy = (t) => ((ay * t + by) * t + cy) * t;
    const dx = (t) => (3 * ax * t + 2 * bx) * t + cx;
    return (x) => {
      if (x <= 0) return 0; if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 8; i++) { const e = sx(t) - x; if (Math.abs(e) < 1e-6) break; const d = dx(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
      return sy(t);
    };
  }

  const ease = {
    house: bezier(0.16, 1, 0.3, 1),
    inOut: (t) => 0.5 - 0.5 * Math.cos(Math.PI * Math.min(Math.max(t, 0), 1)),
    out: (t) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3),
    in: (t) => Math.pow(Math.min(Math.max(t, 0), 1), 3),
    back: (t) => { const c = 1.70158, u = Math.min(Math.max(t, 0), 1) - 1; return 1 + (c + 1) * u * u * u + c * u * u; },
  };

  // periodic helpers: n full cycles per loop keep the loop seamless
  const osc = (p, n = 1, phase = 0) => Math.sin(TAU * (n * p + phase));
  const tri = (p, n = 1) => { const x = (n * p) % 1; return x < 0.5 ? x * 2 : 2 - x * 2; };
  // window: 0..1 progress of p inside [a, b], clamped
  const win = (p, a, b) => Math.min(Math.max((p - a) / (b - a), 0), 1);
  // pulse: rises over [a, a+up], holds, falls over [b-down, b]
  const pulse = (p, a, b, up = 0.08, down = 0.08) => Math.min(ease.inOut(win(p, a, a + up)), 1 - ease.inOut(win(p, b - down, b)));

  function set(el, { x = 0, y = 0, s = 1, sx = 1, sy = 1, r = 0, o = null } = {}) {
    el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s * sx}, ${s * sy})`;
    if (o !== null) el.style.opacity = String(o);
  }

  window.Sticker = function ({ width = 1080, height = 1080, fps = 30, seconds = 3, poster = 0, draw }) {
    const frames = Math.round(fps * seconds);
    const imgs = [...document.images];
    const ready = Promise.all(imgs.map((im) => (im.complete ? Promise.resolve() : new Promise((res) => { im.onload = res; im.onerror = res; }))));
    const s = window.__sticker = { width, height, fps, frames, poster, ready: false, seek(f) { draw((((f % frames) + frames) % frames) / frames); } };
    ready.then(() => { draw(poster / frames); s.ready = true; });
    // preview in a normal browser: play the loop
    if (!navigator.webdriver) {
      const t0 = performance.now();
      const tick = () => { draw(((performance.now() - t0) / 1000 / seconds) % 1); requestAnimationFrame(tick); };
      ready.then(() => requestAnimationFrame(tick));
    }
  };
  window.Motion = { ease, osc, tri, win, pulse, set, bezier, TAU };
})();
