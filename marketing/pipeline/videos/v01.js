// V01-30 « L'atlas » — scene code (scripts-trailer.md §4.1 scene table, §4.2
// layout per ratio, §3 shared blocks). One file for every ratio and language.
// Times are seconds on the 30 s master's clock; frame = t x 30. All five
// scenes: S1 (Hook, f0-99), S2 (Three languages, f100-319), S3 (A price
// before the quote, f320-459), S4 (The atelier, f460-679), S5 (End card,
// f680-899, held on f899). No cut parameter renders the 30 s master.
import { createScene, params, ease, isPainted } from '/runtime/scene.js';
import { loadCopy, FORBID_V01, applyNobreak, markSeparatorBreaks } from '/runtime/copy.js';
import { fitAll } from '/runtime/fit.js';
import { createLayout } from '/runtime/layout.js';
import { readVistaStyles, vista, vistaScale, sky, inkIn, wipeState, coin, COIN, readBeamStyles, lighthouse, LIGHT } from '/runtime/atlas.js';
import { blueprint } from '/runtime/blueprint.js';
import { typeMove } from '/runtime/components.js';
import { mockup } from '/runtime/mockup.js';
import { founderCard, MONOGRAM } from '/runtime/founder.js';
import { buildWordmark, pointerFor, WORDMARK } from '/runtime/endcard.js';

const FPS = 30;

// ------------------------------------------------------------------ cuts
// A cut is a window [first frame, end frame) of the master's clock. The
// clock is offset by whole frames, so frame n of a cut is bit for bit frame
// (first + n) of the 30 s master. No cut = the master.
const CUTS = {
  s1: [0, 120],          // S1 (f0-99) and its exit (to f115): 4.0 s
  s2: [100, 340],        // S2 (f100-319) with its wipe-out (f310-320) and T42's entrance (f320-338): 8.0 s
  s3: [320, 475],        // S3 (f320-459): T42 in, its own wipe-out (f450-460), the founder card's entrance: 5.17 s
  s4: [460, 700],        // S4 (f460-679) with its wipe-out (f670-680) and the wordmark's entrance (f680-698): 8.0 s
  s5: [680, 900],        // S5 (f680-899) from the wordmark's entrance to the held last frame: 7.33 s
  's1-s3': [0, 475],     // S1 -> S3 continuity: 15.83 s
  's4-s5': [460, 900],   // S4 -> S5 continuity: 14.67 s
  full: [0, 900],        // the 30 s master (900 frames)
};
const cut = params.get('cut') || 'full';
if (!CUTS[cut]) throw new Error(`v01: cut "${cut}" is not built yet (built: ${Object.keys(CUTS).join(', ')})`);
const [F0, F1] = CUTS[cut];

// ------------------------------------------------------------------ time
// Scene changes (review of 2026-10-27): a scene's exit wipe ENDS on the
// scene boundary and the next scene's first block enters ON it, half a beat
// later than the exit began. The outgoing and incoming text never share a
// frame, so no frame splices two headings on the same rows (the earlier
// build brought T42, the founder card and the wordmark in on the exit's own
// wipe edge, and for ~4 frames the two read as one garbled line). The
// entrances keep their beats (§4.1, §4.4: T42 on the 10.67 chord, the
// wordmark on the 22.67 end-card chimes); each exit starts half a beat
// earlier than §4.1's "Out" time. Holds still meet §4.3 (T41 6.67 s, T42
// 4.33 s, T09 3.67 s, T32 3.67 s >= 3.45 s).
const T = {
  // S1 · Hook (f0-99). T40 set at f0 (no reveal). Plate I and the
  // blueprint's brass browser outline are on screen from f0 too, so the
  // first frame (the in-feed thumbnail, and the frame a loop returns to from
  // the end card) carries the atlas and the drawing, not the hook alone
  // (review of 2026-10-27; §4.1 had Plate I ink in 0.00-1.20). Plate I then
  // drifts; stars and one constellation line 0.60-1.80; the page's inner
  // parts draw path by path 0.10-2.60; at 3.33-3.83 T40 eases to header size
  // at the top of the band and the blueprint glides into the mock-up frame,
  // while Plate I and its sky wipe out (faq3 takes the decoration zone at 4.00).
  s1: [0, 10 / 3],
  sky: [0.6, 1.2], bp: [0.1, 2.6],
  bpPreset: ['frame', 'chrome', 'dots', 'address'], // drawn at f0
  move: [10 / 3, 0.5],            // 3.33 -> 3.83
  // S2 · Three languages (f100-319).
  s2: [10 / 3, 32 / 3],
  t41: [11 / 3, 0.8],             // 3.67: T41 wipes in, in the reading direction
  fill: [23 / 6, 0.6],            // 3.83 -> 4.43: the landed blueprint fills into « Votre site » (state 1);
                                  // its inner strokes are cleared behind the same wipe edge
  faq3: [4.0, 1.2],               // 4.00: faq3 inks in, in --teal (settles over 3 s)
  states: [23 / 6, 7.0, 23 / 3],  // state 1 (the master's language) · state 2 at 7.00 · state 3 (Arabic layout) at 7.67
  mirror: [23 / 3, 0.6],          // 7.67 -> 8.27: every block glides to its mirrored place
  s2out: [31 / 3, 1 / 3],         // 10.33 -> 10.67: T40, T41, the mock-up and faq3 wipe out in the reading direction
  // S3 · A price before the quote (f320-459).
  s3: [32 / 3, 46 / 3],
  t42: [32 / 3, 0.6],             // 10.67: T42 wipes in on the chord, once S2 has cleared
  contour: [32 / 3, 1.0],         // px-contour, ink at opacity .12
  horse: 32 / 3, palm: 11.0,      // Plate III inks in at two depths; each coin turns once (1.2 s) from a third of a second later
  t09: [34 / 3, 0.6],             // 11.33: the three package names, names only
  s3out: [15.0, 1 / 3],           // 15.00 -> 15.33: S3 wipes out
  // S4 · The atelier (f460-679). The founder card: the monogram « Y » in its
  // ring (no photo, no drawing, no figure); the workbench seen from above.
  s4: [46 / 3, 68 / 3],
  founder: [46 / 3, 0.6],         // 15.33: the card wipes in once S3 has cleared
  ring: [46 / 3, 2 / 3],          // 15.33 -> 16.00: the ring draws itself, the disc fades in under it
  mono: [15.5, 0.6],              // the « Y » settles in (1.08 -> 1)
  t30: [47 / 3, 0.6],             // 15.67: the name
  bench: [16.0, 1.2],             // 16.00: bench.webp inks in, --teal at opacity .4, settle 1.06 -> 1 over 3 s
  t31: [49 / 3, 0.6],             // 16.33: the role
  t32: [56 / 3, 0.8],             // 18.67: the founder's promise
  s4out: [67 / 3, 1 / 3],         // 22.33 -> 22.67: S4 wipes out
  // S5 · End card (f680-899): the series card before Gate B, held on f899.
  // No call to action, no URL, no conditions. The 28.80-30.00 fade of the
  // scene table is the music's (the encoder's 1.2 s audio fade); the picture
  // holds, so f890 (the carousel's end-card still, §4.6) and f899 are whole.
  s5: [68 / 3, 30],
  wordmark: [68 / 3, 0.6],        // 22.67: on the end-card chimes, once S4 has cleared
  light: [23.0, 1.2],             // 23.00: Plate V inks in, --teal at opacity .4 (settle over 3 s), once the bench has gone
  beam: [23.0, 2.0],              // one coded beam sweep 23.00 -> 25.00, then still
  t50: [23.0, 0.6],               // 23.00: the label
  t51: [70 / 3, 0.6],             // 23.33: the motto
  t52: [77 / 3, 0.6],             // 25.67: the pointer (9:16 only)
};
// The blueprint strokes the mock-up's blocks replace (the browser frame,
// chrome line, dots and address bar stay as its brass outline).
const RETIRE = ['logo', 'nav', 'h1', 'h2', 'p1', 'p2', 'button', 'image', 'hatch', 'card1', 'card2', 'card3'];

// ---------------------------------------------------------------- layout
// §4.2, canvas px [x, y, w, h]. 9:16: band x 140-940, y 290-1240 in every
// language. 16:9: text x 120-900 / visual x 960-1800, mirrored for Arabic.
const LAYOUT = {
  '9x16': {
    t40_hook: [140, 380, 800, 340],   // FR/EN 120 px, 2 lines; AR 113 px, 2 lines
    t40_head: [140, 290, 800, 110],   // FR 65, EN 72, AR 73 px, 1 line (S2 header)
    bp: [220, 800, 640, 400],         // blueprint 640 x 400
    mock: [140, 700, 800, 500],       // S2 « Votre site » 800 x 500
    vista: [0, 1240, 1080, 680],      // Plate I, 1080 wide, below the band (decoration)
    stars: [0, 1250, 1080, 300],      // the vista's sky
    const: [96, 1290, 300, 122],      // the constellation's box
    t41: [140, 410, 800, 260],        // FR/EN 76 px, 3 lines; AR 86 px, 2 lines
    faq3: [300, 1300, 480, 480],      // <= 480 px, decoration zone (y 1300-1780)
    t42: [140, 330, 800, 300],        // FR/EN 96 px, 2 lines; AR 100 px, 2 lines
    t09: [140, 680, 800, 110],        // Geist Mono 46 px; AR 60 px. The name cards add their padding:
                                      // AR at line-height 1.5 needs ~100 px
    coin_horse: [230, 860, 300, 300], // Plate III, 300 px each
    coin_palm: [550, 860, 300, 300],
    contour: [-160, 790, 1400, 594],  // px-contour texture at 1.0x, behind the coins
    // S4. The founder block spans the band (so it wipes on the band's edge);
    // its 200 px roundel sits at the band's start, y 300-500.
    founder: [140, 300, 800, 200],
    t30: [140, 520, 800, 105],        // FR/EN 80 px; AR 69 px
    t31: [140, 645, 800, 150],        // FR/EN 56 px, 2 lines; AR 63 px, 1 line
    t32: [140, 820, 800, 180],        // FR 72 px, 2 lines; EN 72 px, 1 line; AR 80 px, 1 line
    bench: [140, 1020, 800, 447],     // 800 x 447; decoration below y 1240
    // S5.
    wordmark: [140, 340, 800, 110],   // 88 px
    t50: [140, 480, 800, 170],        // FR/EN 52 px, 2 lines; AR 56 px, 2 lines
    t51: [140, 670, 800, 130],        // FR/EN 52 px, 2 lines; AR 56 px, 1 line
    t52: [140, 850, 800, 90],         // 52 px; AR 58 px. §4.2 says y 860-935, but 75 px cannot hold the
                                      // Arabic line at line-height 1.5 (58 px needs 87): 90 px from y 850
    light: [80, 1290, 1000, 541],     // Plate V 1000 x 541 in the decoration zone, its rocks bleeding off
                                      // the right edge (x 80-1080); the sea's side and the foot feathered
    _fixed: ['vista'],
  },
  '16x9': {
    _mirror: true,
    t40_hook: [120, 300, 780, 220],   // FR/EN 96 px, 2 lines; AR 102 px, 1 line
    t40_head: [120, 112, 780, 96],    // S2 header. §4.2 says y 120-200, but 80 px cannot hold the
                                      // Arabic header at line-height 1.5 even at its floor (54 px
                                      // needs 81 px): 96 px tall, same centre (y 160).
    bp: [1000, 200, 760, 470],        // blueprint 760 x 470 in the visual column
    mock: [980, 190, 800, 500],       // S2 « Votre site » in the visual column
    vista: [260, 700, 1400, 380],     // Plate I <= 1400 wide, centred (never mirrored)
    stars: [260, 560, 1400, 200],
    const: [300, 580, 270, 109],
    t41: [120, 220, 780, 260],        // FR 72 px, 2 lines; EN 72 px, 3 lines; AR 80 px, 2 lines
    faq3: [270, 540, 480, 480],       // behind the text column at opacity .2, y 540-1020
    t42: [120, 200, 780, 300],        // FR/EN 88 px, 2 lines; AR 100 px, 2 lines
    t09: [120, 525, 780, 110],        // 46 px; AR 58 px. §4.2 says y 540-600, but 60 px cannot hold
                                      // the Arabic line at line-height 1.5 (58 px needs 87) with the
                                      // name cards' padding: 110 px tall from y 525.
    coin_horse: [1060, 300, 300, 300],// Plate III, 300 px each, in the visual column, y 300-600
    coin_palm: [1400, 300, 300, 300],
    contour: [920, 250, 1000, 424],   // px-contour texture (0.71x) behind the coins
    // S4.
    founder: [120, 120, 780, 160],    // roundel 160 px at the column's start, y 120-280
    t30: [120, 296, 780, 100],        // §4.2 y 300-390; 100 px tall from y 296, so the Arabic name fits in range
                                      // at line-height 1.5 (66 px needs 99)
    t31: [120, 410, 780, 135],        // FR/EN 52 px, 2 lines; AR 58 px, 1 line
    t32: [120, 575, 780, 160],        // FR 64 px, 2 lines; EN 64 px, 1 line; AR 72 px, 1 line. §4.2 y 580-735
                                      // is 155 px; two lines at 64 px need 160 at the body line-height 1.25
    bench: [960, 300, 840, 469],      // 840 x 469 in the visual column
    // S5. No pointer in 16:9.
    wordmark: [120, 194, 780, 110],   // 88 px. §4.2 y 200-300; the line box of the three runs (Cinzel, the
                                      // Geist « idea », the cursor) is 102 px at 88 px: 110 px tall from y 194
    t50: [120, 330, 780, 150],        // FR/EN 48 px, 2 lines; AR 50 px, 2 lines
    t51: [120, 500, 780, 120],        // FR/EN 48 px, 2 lines; AR 54 px, 1 line
    light: [960, 300, 840, 455],      // Plate V 840 x 455 in the visual column
    _fixed: ['vista'],
  },
};
// The 4:5 files are crops (y 90-1440) of a 9:16 render (§3.3). A 9:16 render
// made for the crop (pointer=li, the LinkedIn source; or frame=45, the
// Instagram carousel stills) moves the decoration plates so that each one is
// wholly inside the window or not shown: the 9:16 plates below the band
// (faq3 at y 1300-1780, Plate V at y 1290-1831) were cut by the window's
// bottom edge into fragments (review of 2026-10-27).
//   - faq3: not shown. Inside the window only y 1200-1440 is free under the
//     mock-up, and the plate would have to shrink below the 300 px minimum
//     of §3.4 to fit there.
//   - Plate V: 800 x 433 at y 1000-1433, under the end card's last line
//     (T52 ends at y 940), its rocks still running off the right edge.
//   - the workbench: 740 x 413 at y 1012-1425 (9:16: 800 x 447 to y 1467,
//     whose drawing ends near y 1430), so its box, settle included, stays
//     inside the window.
// Plate I is the ground, a landscape that runs off the bottom of every frame
// (in this window only its sky shows: the stars and the constellation, which
// end at y 1412). cropCheck() below is run by preflight on every frame.
const CROP45 = { window: [90, 1440], '9x16': { faq3: null, light: [280, 1000, 800, 433], bench: [170, 1012, 740, 413] } };
// The decoration a crop must never cut: each painted one is wholly inside
// the window or wholly outside it (its transformed box; Plate V clips its
// own ink and beam). Stars are points and Plate I is the ground: not listed.
const CROP_PLATES = ['#faq3 .ink', '#light', '#bench .ink', '#contour .ink', '#coin-horse .ink', '#coin-palm .ink', '#sky .const', '#sky .const-s'];
// Plate I layers inside the vista box (container px). Layers are wider than
// the box by more than their drift (<= 26 px), so no drift bares an edge,
// and never shown above 1.0x their source width (checked at ready()).
const VISTA_CFG = {
  '9x16': { layers: { far: { w: 1140, left: -30, top: 64 }, mid: { w: 975, left: 135, top: 281 }, near: { w: 1140, left: -30, top: 342 } },
    drift: { far: 8, mid: 16, near: 26 }, fadeSides: 0, fadeTop: 0 },
  '16x9': { layers: { far: { w: 1452, left: -26, top: -267 }, mid: { w: 1231, left: 195, top: -40 }, near: { w: 1452, left: -26, top: 76 } },
    drift: { far: 8, mid: 16, near: 26 }, fadeSides: 0.14, fadeTop: 0.08 },
};
// Plates other than Plate I: source widths (never shown above 1.0x, settle
// included, §3.6) and their settle.
const PLATES = {
  faq3: { src: '/site/illus/faq3.png', natural: 512, settle: 1.06 },
  contour: { src: '/site/illus/px-contour.webp', natural: 1400, settle: 1 },
  coin_horse: { src: '/site/illus/coin-horse.webp', natural: COIN.natural, settle: 1.06, depth: 'near', drift: 14, ring: COIN.ring.horse },
  coin_palm: { src: '/site/illus/coin-palm.webp', natural: COIN.natural, settle: 1.06, depth: 'far', drift: 6, ring: COIN.ring.palm },
  bench: { src: '/site/illus/bench.webp', natural: 1100, settle: 1.06 },
  light: { src: LIGHT.src, natural: LIGHT.natural, settle: 1.06 },
};
// Plate V's feathered edges, in hundredths of its box (left, right, bottom):
// in 9:16 its rocks run off the frame's right edge, so only the sea's side
// and the foot fade; in 16:9 it sits inside the visual column.
const LIGHT_CFG = { '9x16': { fl: 14, fr: 0, fb: 14 }, '16x9': { fl: 12, fr: 10, fb: 14 } };

// ----------------------------------------------------------------- scene
const scene = createScene({
  duration: (F1 - F0) / FPS, fps: FPS,
  fonts: [
    ['700 120px "Cinzel"', 'Votre site sur mesure, Custom websites Numidea Labs Un prix Yasser Hamisse Enraciné en Numidie · bâti sur des idées'],
    ['700 76px "Cinzel Decorative"', 'en français, anglais ou arabe. in English, French and Arabic. avant le devis.'],
    ['700 113px "IBM Plex Sans Arabic"', 'موقعك المخصّص، بالعربية والفرنسية والإنجليزية. المؤسّس: Yasser Hamisse'],
    ['600 56px "IBM Plex Sans Arabic"', 'مصمّم غرافيك ومطوّر ويب الأساسي أبقى بعد الإطلاق. استوديو ويب وبرمجيات · برج بوعريريج، الجزائر جذورها في نوميديا الرابط في الملف التعريفي'],
    ['400 52px "Geist"', 'Studio web & logiciel · Bordj Bou Arréridj, Algérie'],
    ['500 52px "Geist"', 'Studio web & logiciel · Bordj Bou Arréridj, Algérie Designer graphique & développeur web · Fondateur'],
    ['600 52px "Geist"', 'Numidea Labs idea Je reste à vos côtés après le lancement.'],
    ['700 48px "Geist"', 'Votre logo Votre entreprise Your logo Your business Y'],
    ['500 46px "Geist Mono"', 'Essentiel · Studio · Moteur FR · EN · AR Lien en bio Lien en commentaire Link in comments'],
  ],
  images: ['/site/illus/vista-far.webp', '/site/illus/vista-mid.webp', '/site/illus/vista-near.webp',
    ...Object.values(PLATES).map((p) => p.src)],
});
const $ = (s) => document.querySelector(s);
// The pointer per placement (F30): « Lien en bio »; pointer=li (the LinkedIn
// 4:5 crop) « Lien en commentaire »; none in 16:9. Without a pointer the T52
// block leaves the page before the copy loader runs, so it is never set.
const pointer = pointerFor({ ratio: scene.ratio, params });
const crop45 = scene.ratio === '9x16' && (pointer === 'li' || params.get('frame') === '45');
if (crop45) Object.assign(LAYOUT['9x16'], CROP45['9x16']);
document.documentElement.toggleAttribute('data-crop45', crop45);
const L = createLayout(scene, LAYOUT);
const dir = scene.dir;
if (crop45) scene.cropCheck = () => {
  const [y0, y1] = CROP45.window, out = [];
  for (const sel of CROP_PLATES) for (const el of document.querySelectorAll(sel)) {
    if (!isPainted(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.height < 0.5 || r.width < 0.5) continue;
    const inside = r.top >= y0 - 0.5 && r.bottom <= y1 + 0.5, outside = r.bottom <= y0 || r.top >= y1;
    if (!inside && !outside) out.push({ el: sel, problem: `cut by the 4:5 window (y ${y0}-${y1}): y ${Math.round(r.top)}-${Math.round(r.bottom)}` });
  }
  return out;
};

// The master's clock: t (cut-relative, a whole frame when rendering) -> the
// master's time, computed exactly as the full master computes frame F0 + n.
const abs = (t) => {
  const f = t * FPS, n = Math.abs(f - Math.round(f)) < 1e-6 ? Math.round(f) : f;
  return (F0 + n) / FPS;
};
const on = (fn) => scene.on((t) => fn(abs(t)));
// Safe-area checkpoints, in the master's time; kept only if inside the cut.
const check = (t, label) => {
  const f = Math.round(t * FPS);
  if (f >= F0 && f < F1) scene.checkAt((f - F0) / FPS, `${label} (f${f})`);
};
// Warm frames (lib/warm.mjs): one frame per group of image plates, inside
// the window where that group is painted (master frames [preferred, first,
// last]): Plate I and the blueprint; faq3 and the mock-up; Plate III and
// px-contour; the workbench and the founder card; Plate V. A cut takes the
// preferred frame clamped into its own window, so a plate that shows only at
// a cut's edge (Plate V inking in at the end of the S4 cut) is warmed too;
// plus the cut's first frame.
const WARM = [[0, 0, 110], [220, 125, 315], [380, 335, 455], [600, 485, 675], [800, 691, 899]];
scene.warmAt(0);
for (const [pref, lo, hi] of WARM) {
  const a = Math.max(lo, F0), b = Math.min(hi, F1 - 1);
  if (a <= b) scene.warmAt((Math.min(Math.max(pref, a), b) - F0) / FPS);
}

const ardraft = params.has('ardraft');
if (!pointer) document.getElementById('t52').remove();
const copyReady = loadCopy('/copy/trailer.json', {
  cut: 'v01-30', lang: scene.lang, variant: pointer === 'li' ? 'li' : null,
  render: scene.render, ardraft, forbid: FORBID_V01,
});
// The wordmark (F20): a mark rebuilt from the site's .logo, not copy.
buildWordmark(document.getElementById('wordmark'));

if (scene.lang === 'ar' && (ardraft || !scene.render)) {
  const d = $('#draft');
  d.hidden = false;
  d.textContent = 'BROUILLON AR · à relire par un arabophone natif · pas un livrable';
}

// « Votre site »: its blocks exist from now on, so the copy loader fills its
// text slots (M01, M02, M03) with the others.
const mk = mockup($('#mock'), {
  lang: scene.lang, dir, fill: T.fill, states: T.states, mirror: T.mirror, out: T.s2out,
});

// 1. Copy: every [data-copy] block from the dictionary, with its fact ID.
scene.prepare('copy', async () => {
  const copy = await copyReady;
  // The LinkedIn pointer exists in French only (T52.fr_li): refuse rather
  // than fall back to « Link in bio » on a LinkedIn file.
  if (pointer === 'li' && copy.dict.T52?.[`${scene.lang}_li`] == null) {
    throw new Error(`v01: pointer=li has no T52.${scene.lang}_li string in copy/trailer.json`);
  }
  copy.apply(document);
  // Fixed phrases kept on one line (« sur mesure »): layout only, the
  // strings are unchanged (applyNobreak checks textContent).
  scene.nobreak = applyNobreak(document);
  scene.copyReport = copy.report;
  return [...copy.report(),
    // the two marks on screen that are not copy: rebuilt from the site, with their fact IDs
    { key: 'mark:wordmark', src: WORDMARK.src, lang: null, text: WORDMARK.parts.join(''), ref: WORDMARK.ref },
    { key: 'mark:monogram', src: MONOGRAM.src, lang: null, text: MONOGRAM.text, ref: MONOGRAM.ref }];
});

// 2. The site's Plate I skylines, fills and inks, and Plate V's beam, read
// live from styles.css.
let vistaStyles = null, beamStyles = null;
scene.prepare('siteCss', async () => {
  vistaStyles = await readVistaStyles('/site/styles.css');
  beamStyles = await readBeamStyles('/site/styles.css');
  return { ...Object.fromEntries(Object.entries(vistaStyles).map(([k, v]) => [k, { points: v.points, fill: v.fill, ink: v.ink, opacity: v.opacity }])),
    beam: beamStyles };
});

// 3. Fit-text on every block, in every state it takes.
let fit = null;
scene.prepare('fit', async () => {
  const t40 = $('#t40');
  const wide = scene.ratio === '16x9';
  const box = (id) => { const b = L.box(id); return { w: b.w, h: b.h }; };
  const report = fitAll(scene, [
    { id: 'T40', state: 'hook', el: t40, role: 'hook', box: box('t40_hook'), lines: 2 },
    { id: 'T40', state: 'header', el: t40, role: 'header', box: box('t40_head'), lines: 1, cap: 72 }, // §3.2: FR 65, EN 72, AR 73 px
    { id: 'T41', el: $('#t41'), role: 'header', box: box('t41'), lines: 3 },
    ...mk.textBlocks(L.box('mock')),                                                                // M01, M02, M03 (picture text)
    { id: 'T42', el: $('#t42'), role: 'header', box: box('t42'), lines: 2 },
    { id: 'T09', el: $('#t09'), role: 'label', box: box('t09'), lines: 1 },
    // S4. Caps where §4.2 sets a block below its role's max, so the name
    // leads, the role stays second and the promise reads as the line.
    { id: 'T30', el: $('#t30'), role: 'header', box: box('t30'), lines: 1, cap: 80 },             // FR/EN 80 px
    { id: 'T31', el: $('#t31'), role: 'body', box: box('t31'), lines: 2, cap: wide ? 52 : 56 },   // FR/EN 56 px (16:9: 52)
    { id: 'T32', el: $('#t32'), role: 'body', box: box('t32'), lines: 2 },                        // FR 72 px (16:9: 64)
    // S5. The wordmark is Latin in every master (no Arabic scaling).
    { id: 'wordmark', el: $('#wordmark'), role: 'wordmark', box: box('wordmark'), lines: 1, lang: 'zxx' },
    { id: 'T50', el: $('#t50'), role: 'label', box: box('t50'), lines: 2, cap: wide ? 48 : 52 },  // FR/EN 52 px (16:9: 48)
    { id: 'T51', el: $('#t51'), role: 'label', box: box('t51'), lines: 2, cap: wide ? 48 : 52 },
    ...(pointer ? [{ id: 'T52', el: $('#t52'), role: 'label', box: box('t52'), lines: 1, cap: 52 }] : []),
  ]);
  fit = Object.fromEntries(report.map((r) => [r.state && r.state !== 'mock' ? `${r.id}/${r.state}` : r.id, r]));
  return report;
});

// 4. Lay out and animate.
const setType = (el, f) => { el.style.fontSize = `${f.size}px`; el.style.lineHeight = String(f.lh); };
const placeBox = (el, b) => Object.assign(el.style, { left: `${b.x}px`, top: `${b.y}px`, width: `${b.w}px`, height: `${b.h}px` });
scene.prepare('layout', async () => {
  const cfg = VISTA_CFG[scene.ratio];

  // Plates: never shown above 1.0x their source width, settle included (§3.6).
  const scale = vistaScale(cfg);
  for (const [k, p] of Object.entries(PLATES)) if (L.has(k)) scale[k] = +(L.box(k).w * p.settle / p.natural).toFixed(3);
  if (Object.values(scale).some((s) => s > 1)) throw new Error('v01: a plate is shown above 1.0x its source: ' + JSON.stringify(scale));

  // ---------------------------------------------------------------- S1
  const vb = L.box('vista');
  const vEl = $('#vista');
  vEl.style.setProperty('--fade-sides', `${cfg.fadeSides * 100}` + '%'); // fractions of the plate's width / height
  vEl.style.setProperty('--fade-top', `${cfg.fadeTop * 100}` + '%');
  // Plate I is inked at f0 (inAt null: no entrance wipe), then drifts.
  on(vista(vEl, { box: vb, layers: cfg.layers, drift: cfg.drift }, vistaStyles, {
    inAt: null, outAt: T.move[0], outDur: T.move[1], dir, driftFrom: 0, driftTo: T.move[0] + T.move[1],
  }));

  // The sky: seeded stars, one constellation line.
  const avoid = ['t40_hook', 'bp'].map((id) => L.box(id));
  const cb = L.box('const');
  on(sky($('#sky'), {
    area: { x: 0, y: 0, w: scene.width, h: scene.height }, region: L.box('stars'), avoid, seed: 7,
    count: scene.ratio === '9x16' ? 34 : 30,
    starsIn: T.sky[0], starsSpan: T.sky[1], constIn: T.sky[0], constDur: T.sky[1],
    constellation: { x: cb.x - 160 * (cb.w / 192), y: cb.y - 34 * (cb.w / 192), k: cb.w / 192 },
    outAt: T.move[0], outDur: T.move[1], dir,
  }));

  // The blueprint: its brass browser outline is on screen from f0, the
  // page's inner parts draw in S1; it glides into the mock-up frame at 3.33,
  // its inner strokes give way to the mock-up's blocks, and its frame leaves
  // with the mock-up (10.33-10.67).
  const bp = $('#bp');
  const bpUpdate = blueprint(bp, { box: L.box('bp'), draw: T.bp, preset: T.bpPreset, glide: { at: T.move[0], dur: T.move[1], to: L.box('mock') },
    retire: { ids: RETIRE, at: T.fill[0], dur: T.fill[1], dir } }); // cleared behind the fill's own wipe edge
  on((t) => { bpUpdate(t); wipeState(bp, t, { outAt: T.s2out[0], outDur: T.s2out[1], dir }); });

  // T40: set at f0 at hook size; re-set to header size 3.33-3.83; header of
  // S2 until it wipes out (10.33-10.67).
  const t40 = $('#t40');
  const hook = fit['T40/hook'], head = fit['T40/header'];
  const mover = typeMove(t40, {
    a: { size: hook.size, lh: hook.lh, box: L.box('t40_hook'), valign: 'center', h: hook.h },
    b: { size: head.size, lh: head.lh, box: L.box('t40_head'), valign: 'center', h: head.h },
    at: T.move[0], dur: T.move[1], e: ease.out,
  });
  const moved = mover.measure();
  on((t) => { mover(t); wipeState(t40, t, { outAt: T.s2out[0], outDur: T.s2out[1], dir }); });

  // ---------------------------------------------------------------- S2
  // T41, the hero title's swash half, under the header.
  const t41 = $('#t41');
  setType(t41, fit.T41);
  L.place(t41, 't41', { valign: 'top', contentH: fit.T41.h, height: 'auto' });
  on((t) => wipeState(t41, t, { inAt: T.t41[0], inDur: T.t41[1], outAt: T.s2out[0], outDur: T.s2out[1], dir }));

  // « Votre site »: fill, states, mirror, exit.
  const mock = mk.layout(L.box('mock'), { M01: fit.M01, M02: fit.M02, M03: fit.M03 });
  on(mk.update);

  // faq3: three linked speech bubbles, inked in --teal in the decoration
  // zone (not shown in a render made for the 4:5 crop: CROP45).
  const faq3 = $('#faq3');
  if (L.has('faq3')) {
    placeBox(faq3, L.box('faq3'));
    on(inkIn(faq3, { src: PLATES.faq3.src, inAt: T.faq3[0], inDur: T.faq3[1], outAt: T.s2out[0], outDur: T.s2out[1], dir,
      settle: 3, from: PLATES.faq3.settle }));
  } else faq3.remove();

  // ---------------------------------------------------------------- S3
  // px-contour, a texture (ink at opacity .12) behind the coins.
  const contour = $('#contour');
  placeBox(contour, L.box('contour'));
  on(inkIn(contour, { src: PLATES.contour.src, inAt: T.contour[0], inDur: T.contour[1], outAt: T.s3out[0], outDur: T.s3out[1], dir }));

  // Plate III: coin-horse (near) and coin-palm (far) ink in at two depths,
  // each turns once on the clock and settles, once the mock-up has gone.
  const coins = {};
  for (const [key, id, at] of [['coin_horse', '#coin-horse', T.horse], ['coin_palm', '#coin-palm', T.palm]]) {
    const el = $(id), p = PLATES[key], b = L.box(key);
    L.place(el, key);
    el.dataset.box = `${b.x - p.drift},${b.y},${b.w + 2 * p.drift},${b.h}`; // its box, widened by its drift
    on(coin(el, { src: p.src, inAt: at, inDur: 0.7, turnAt: at + 1 / 3, turnDur: 1.2, settle: 2.4, from: p.settle,
      outAt: T.s3out[0], outDur: T.s3out[1], dir, drift: p.drift, driftFrom: T.s3[0], driftTo: T.s3[1], ring: p.ring, natural: p.natural }));
    coins[key] = { box: el.dataset.box, inAt: +at.toFixed(3), turn: [+(at + 1 / 3).toFixed(3), +(at + 1 / 3 + 1.2).toFixed(3)], depth: p.depth };
  }

  // T42 with its swash half: wipes in at 10.67, the frame S2 has cleared,
  // so no frame shows the old heading and the new one on the same rows.
  const t42 = $('#t42');
  setType(t42, fit.T42);
  L.place(t42, 't42', { valign: 'center', contentH: fit.T42.h, height: 'auto' });
  on((t) => wipeState(t42, t, { inAt: T.t42[0], inDur: T.t42[1], outAt: T.s3out[0], outDur: T.s3out[1], dir }));

  // T09: the three package names on one card row. Names only: no figures.
  const t09 = $('#t09');
  setType(t09, fit.T09);
  L.place(t09, 't09', { valign: 'center', contentH: fit.T09.h, height: 'auto' });
  on((t) => wipeState(t09, t, { inAt: T.t09[0], inDur: T.t09[1], outAt: T.s3out[0], outDur: T.s3out[1], dir }));

  // In 16:9 the workbench and Plate V are the visual column's key visuals,
  // checked like the coins; in 9:16 they are decoration below the band.
  const keyVisual = (el, id) => { if (scene.ratio !== '16x9') return; const b = L.box(id); el.dataset.safe = ''; el.dataset.box = `${b.x},${b.y},${b.w},${b.h}`; };

  // ---------------------------------------------------------------- S4
  // The founder card: the block spans the band; it wipes in at 15.33, once
  // T42 and T09 have cleared, and leaves with S4.
  const founder = $('#founder');
  const fb = L.place(founder, 'founder');
  const card = founderCard(founder, { size: fb.h, dir, ring: T.ring, mono: T.mono,
    wipe: { inAt: T.founder[0], inDur: T.founder[1], e: ease.out, outAt: T.s4out[0], outDur: T.s4out[1] } });
  on(card);

  // T30 (the name), T31 (the role), T32 (the promise): stacked under the
  // roundel, each wiped in in the reading direction, all out at 22.33-22.67.
  for (const [key, win] of [['t30', T.t30], ['t31', T.t31], ['t32', T.t32]]) {
    const el = $(`#${key}`), f = fit[key.toUpperCase()];
    setType(el, f);
    L.place(el, key, { valign: 'top', contentH: f.h, height: 'auto' });
    on((t) => wipeState(el, t, { inAt: win[0], inDur: win[1], outAt: T.s4out[0], outDur: T.s4out[1], dir }));
  }

  // The workbench from above (bench.webp, no person): the founder's stand-in.
  const bench = $('#bench');
  placeBox(bench, L.box('bench'));
  keyVisual(bench, 'bench');
  on(inkIn(bench, { src: PLATES.bench.src, inAt: T.bench[0], inDur: T.bench[1], outAt: T.s4out[0], outDur: T.s4out[1], dir,
    settle: 3, from: PLATES.bench.settle }));

  // ---------------------------------------------------------------- S5
  // The wordmark: wipes in at 22.67, the frame S4 has cleared (the roundel
  // and the wordmark never share a frame).
  const wm = $('#wordmark');
  setType(wm, fit.wordmark);
  L.place(wm, 'wordmark', { valign: 'top', contentH: fit.wordmark.h, height: 'auto' });
  on((t) => wipeState(wm, t, { inAt: T.wordmark[0], inDur: T.wordmark[1], dir }));

  // T50 (label), T51 (motto), T52 (pointer, 9:16 only): wiped in, held to
  // f899. Where T50 or T51 breaks at its own « · », that separator is hidden.
  const s5blocks = [['t50', T.t50], ['t51', T.t51], ...(pointer ? [['t52', T.t52]] : [])];
  const sepBreaks = {};
  for (const [key, win] of s5blocks) {
    const el = $(`#${key}`), f = fit[key.toUpperCase()];
    setType(el, f);
    L.place(el, key, { valign: 'top', contentH: f.h, height: 'auto' });
    if (el.dataset.keep) sepBreaks[key.toUpperCase()] = markSeparatorBreaks(el).length;
    on((t) => wipeState(el, t, { inAt: win[0], inDur: win[1], dir }));
  }

  // Plate V: the lighthouse inks in, its beam (the site's own) sweeps once
  // over the sea and stays still.
  const light = $('#light');
  placeBox(light, L.box('light'));
  keyVisual(light, 'light');
  for (const [k, v] of Object.entries(LIGHT_CFG[scene.ratio])) light.style.setProperty(`--${k}`, `${v}` + '%');
  on(lighthouse(light, { beam: beamStyles, src: PLATES.light.src, inAt: T.light[0], inDur: T.light[1], settle: 3, from: PLATES.light.settle,
    sweepAt: T.beam[0], sweepDur: T.beam[1], dir }));

  // Safe checks (master time): every block's settled entrance and every
  // scene's last frame; only those inside the cut are kept.
  const settled = (w) => w[0] + w[1];
  check(0, 'S1 f0: T40 set, Plate I and the blueprint outline on screen, the thumbnail frame');
  check(T.sky[0] + T.sky[1], 'S1: stars and constellation set');
  check(T.bp[1], 'S1: blueprint drawn');
  check(T.s1[1] - 1 / FPS, 'S1 last frame');
  check(settled(T.move), 'T40 header and blueprint in the mock-up frame');
  check(settled(T.fill), 'S2: « Votre site » filled, state 1');
  check(settled(T.t41), 'S2: T41 settled');
  check(T.states[1] + 0.3, 'S2: state 2 (grey bars)');
  check(T.mirror[0] + T.mirror[1] / 2, 'S2: mid-mirror glide');
  check(settled(T.mirror), 'S2: state 3, Arabic layout mirrored');
  check(T.s2[1] - 1 / FPS, 'S2 last frame');
  check(T.s2out[0] + T.s2out[1] / 2, 'S2 -> S3 wipe, halfway');
  check(settled(T.t42), 'S3: T42 settled');
  check(T.horse + 0.7, 'S3: coin-horse inked');
  check(settled(T.t09), 'S3: T09 settled');
  check(T.palm + 1 / 3 + 1.2, 'S3: both coins turned');
  check(T.s3[1] - 1 / FPS, 'S3 last frame');
  check(T.s3out[0] + T.s3out[1] / 2, 'S3 -> S4 wipe, halfway');
  check(T.founder[0] + T.founder[1] / 2, 'S4: founder card wiping in');
  check(settled(T.ring), 'S4: ring drawn');
  check(settled(T.t30), 'S4: T30 settled');
  check(settled(T.mono), 'S4: monogram settled');
  check(settled(T.t31), 'S4: T31 settled');
  check(settled(T.bench), 'S4: bench inked');
  check(settled(T.t32), 'S4: T32 settled');
  check(T.s4[1] - 1 / FPS, 'S4 last frame');
  check(T.s4out[0] + T.s4out[1] / 2, 'S4 -> S5 wipe, halfway');
  check(T.t42[0] + T.t42[1] / 2, 'S3: T42 wiping in');
  check(T.wordmark[0] + T.wordmark[1] / 2, 'S5: wordmark wiping in');
  check(settled(T.wordmark), 'S5: wordmark set');
  check(settled(T.t50), 'S5: T50 settled');
  check(settled(T.t51), 'S5: T51 settled');
  check(settled(T.light), 'S5: Plate V inked');
  check(settled(T.beam), 'S5: beam swept, still');
  if (pointer) check(settled(T.t52), 'S5: T52 settled');
  check(T.s5[1] - 1 / FPS, 'S5 last frame (held)');

  return { cut: { name: cut, frames: [F0, F1] }, blueprint: bpUpdate.windows, t40: moved, mock, coins, plateScale: scale,
    founder: { box: founder.dataset.box, roundel: fb.h, mark: MONOGRAM }, wordmark: { box: wm.dataset.box, size: fit.wordmark.size, mark: WORDMARK },
    pointer: pointer || 'none', light: LIGHT_CFG[scene.ratio], crop45: crop45 ? CROP45 : false,
    nobreak: scene.nobreak, separatorsHiddenAtBreak: sepBreaks };
});

if (!scene.render) scene.ready().then((r) => { window.__ready = r; }, (e) => { window.__readyError = String(e); console.error(e); });
