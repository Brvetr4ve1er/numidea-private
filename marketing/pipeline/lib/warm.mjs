// Warm-up before the first real capture (pipeline.md §4.1, rule 8).
//
// A fresh page could paint an engraving's FIRST frame without its ink: the
// plates are CSS luminance masks whose url() is set by script at ready(), and
// Chromium attaches a CSS image to the paint asynchronously, even when the
// same file was already decoded through `new Image()` (ready()). Seen on V01
// 16:9 master f100 (S2 cut f0): Plate I's fills painted, its ink missing,
// 106 levels over x 264-1658, y 749-1079, on one capture in 64 under load;
// the same frame was whole on every later capture. --disable-checker-imaging
// does not cover it (the image is not yet attached, so there is nothing to
// decode).
//
// So every page that captures frames first paints the video's warm frames
// (scene.warmAt(): frames that show every plate; default first, middle,
// last), round after round, two animation frames apart, until THREE
// consecutive rounds are pixel-identical (a plate missing its image on the
// first round shows as a change between rounds 1 and 2).
// Nothing here depends on time: the outcome is a page whose every plate has
// been painted with its image, and render.mjs refuses to capture otherwise.
import crypto from 'node:crypto';

const sha1 = (b) => crypto.createHash('sha1').update(b).digest('hex');
async function shot(cdp) {
  const r = await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, fromSurface: true, captureBeyondViewport: false });
  return Buffer.from(r.data, 'base64');
}

export async function warmUp(page, cdp, { maxRounds = 10, same = 3 } = {}) {
  const frames = await page.evaluate(() => {
    const s = window.__scene;
    const w = (s.warmFrames || []).filter((n) => n >= 0 && n < s.frames);
    return w.length ? [...new Set(w)] : [0, Math.floor(s.frames / 2), s.frames - 1];
  });
  let prev = null, run = 0;
  for (let round = 1; round <= maxRounds; round++) {
    const hs = [];
    for (const n of frames) {
      await page.evaluate((i) => window.__scene.seekFrame(i), n);
      hs.push(sha1(await shot(cdp)));
    }
    const key = hs.join(',');
    run = key === prev ? run + 1 : 1;
    if (run >= same) return { frames, rounds: round, stable: true };
    prev = key;
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  }
  return { frames, rounds: maxRounds, stable: false };
}
