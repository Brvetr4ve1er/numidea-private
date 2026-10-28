# Hub art masters: private, run once (python3 -I tools/masters.py <hub-art dir>).
# Reads src/<magnific id>.png, writes masters/*.png and qa/*.png.
# 1. Paints out generated lettering inside recorded boxes (coat badge text, cup sleeve, wall notes).
# 2. Builds the hero layers from the hero render and its cut-out (same frame, pixel-registered):
#    hero-bg (figures removed and the gap filled with the paper), hero-yasser, hero-kuro.
# 3. Copies the cleaned bands and diary prints, and writes QA sheets.
import sys, os, json, hashlib
import numpy as np, cv2
from scipy import ndimage

H = sys.argv[1]
SRC, OUT, QA = f'{H}/src', f'{H}/masters', f'{H}/qa'
os.makedirs(OUT, exist_ok=True); os.makedirs(QA, exist_ok=True)

# Generated lettering to paint out: (x0, y0, x1, y1, kind). 'red' = burgundy badge text,
# 'ink' = dark handwriting on paper. Boxes measured on the source renders.
PAINT = {
    'nV5x8JoYQD': [(2366, 489, 2447, 512, 'red')],
    'WDkgWegcXe': [(2366, 489, 2447, 512, 'red')],
    'IfONrR5tvE': [(2418, 924, 2502, 950, 'red')],
    'mEP2bXIhJQ': [(1922, 897, 2038, 936, 'red')],
    'mEPZBKNhJQ': [(879, 487, 931, 506, 'red')],
    '8aJipYmIrU': [(252, 602, 316, 621, 'red')],
    'LwM8kSlswO': [(857, 335, 905, 349, 'red')],
    'WDkg2YLcXe': [(373, 83, 425, 104, 'ink'), (226, 285, 268, 304, 'ink'), (226, 342, 268, 358, 'ink'),
                   (283, 381, 314, 399, 'ink'), (1216, 26, 1264, 50, 'ink')],
}
SOURCES = ['nV5x8JoYQD', 'WDkgWegcXe', 'IfONrR5tvE', '3zEkVHLREY', 'mEP2bXIhJQ', 'mEPZBKNhJQ', '8aJipYmIrU',
           'WDkg2YLcXe', 'P3mQU8C42C', 'JN8Cg30Oq4', 'LwM8kSlswO', 'hu42BwkvqL']


def paint(im, boxes):
    rgb = np.ascontiguousarray(im[:, :, :3])
    mask = np.zeros(rgb.shape[:2], np.uint8)
    f = rgb.astype(int); b, g, r = f[:, :, 0], f[:, :, 1], f[:, :, 2]
    lum = f.mean(2)
    for x0, y0, x1, y1, kind in boxes:
        m = np.zeros(mask.shape, bool)
        if kind == 'red':
            # burgundy ink relative to this box's own ground (coat, cup sleeve, sunset light):
            # redder than the ground and darker than it. Ink lines are darker but not redder.
            rg = (r - g)
            bg_rg = np.median(rg[y0:y1, x0:x1]); bg_l = np.median(lum[y0:y1, x0:x1])
            red = (lum < bg_l - 30) & (rg > 22)   # darker than the ground and red-brown (ink lines are grey: r-g under 16)
            # each box starts just below the hexagon, so the badge itself is never touched
            m[y0:y1, x0:x1] = red[y0:y1, x0:x1]
        else:
            loc = np.median(lum[y0:y1, x0:x1])
            m[y0:y1, x0:x1] = (lum < loc - 40)[y0:y1, x0:x1]
        mask |= ndimage.binary_dilation(m, iterations=2).astype(np.uint8)
    out = im.copy()
    out[:, :, :3] = cv2.inpaint(rgb, mask * 255, 4, cv2.INPAINT_TELEA)
    return out, int(mask.sum())


def load(i):
    return cv2.imread(f'{SRC}/{i}.png', cv2.IMREAD_UNCHANGED)


report = {}
clean = {}
for i in SOURCES:
    im = load(i)
    n = 0
    if i in PAINT:
        im, n = paint(im, PAINT[i])
    clean[i] = im
    report[i] = {'size': [im.shape[1], im.shape[0]], 'painted_px': n,
                 'src_sha256': hashlib.sha256(open(f'{SRC}/{i}.png', 'rb').read()).hexdigest()}

# hero layers
hero = clean['nV5x8JoYQD'][:, :, :3]
cut = clean['WDkgWegcXe']
alpha = cut[:, :, 3]
lab, k = ndimage.label(alpha > 20)
sizes = ndimage.sum(np.ones_like(alpha), lab, range(1, k + 1))
order = np.argsort(-sizes)
yas_id, kur_id = order[0] + 1, order[1] + 1
objs = ndimage.find_objects(lab)
if objs[yas_id - 1][1].start < objs[kur_id - 1][1].start:   # Yasser stands right of Kuro
    yas_id, kur_id = kur_id, yas_id
for name, lid in (('yasser', yas_id), ('kuro', kur_id)):
    keep = ndimage.binary_dilation(lab == lid, iterations=3)
    layer = cut.copy()
    layer[:, :, 3] = np.where(keep, alpha, 0)
    cv2.imwrite(f'{OUT}/hero-{name}.png', layer)
# background: the figures' footprint (grown) filled with the local paper, edges inpainted
fig = ndimage.binary_dilation(alpha > 8, iterations=10)
paper = np.median(hero[~ndimage.binary_dilation(fig, iterations=40)].reshape(-1, 3), axis=0)
bg = hero.copy()
bg[fig] = paper.astype(np.uint8)
ring = (ndimage.binary_dilation(fig, iterations=6) & ~ndimage.binary_erosion(fig, iterations=6)).astype(np.uint8) * 255
bg = cv2.inpaint(bg, ring, 6, cv2.INPAINT_TELEA)
cv2.imwrite(f'{OUT}/hero-bg.png', bg)
report['hero'] = {'paper_bgr': paper.tolist(), 'yasser_bbox': [objs[yas_id - 1][1].start, objs[yas_id - 1][0].start,
                  objs[yas_id - 1][1].stop, objs[yas_id - 1][0].stop],
                  'kuro_bbox': [objs[kur_id - 1][1].start, objs[kur_id - 1][0].start, objs[kur_id - 1][1].stop, objs[kur_id - 1][0].stop]}

# bands and diary prints
NAMES = {'IfONrR5tvE': 'band-design', '3zEkVHLREY': 'band-diary', 'mEP2bXIhJQ': 'diary-4am', 'mEPZBKNhJQ': 'diary-buried',
         '8aJipYmIrU': 'diary-art-director', 'WDkg2YLcXe': 'diary-second-brain', 'P3mQU8C42C': 'diary-miniature',
         'JN8Cg30Oq4': 'diary-morning', 'LwM8kSlswO': 'diary-wandering', 'hu42BwkvqL': 'diary-traveler'}
for i, name in NAMES.items():
    cv2.imwrite(f'{OUT}/{name}.png', clean[i][:, :, :3])
    report[i]['master'] = name

# QA: every painted box before/after, at 3x
tiles = []
for i, boxes in PAINT.items():
    src = load(i)
    for x0, y0, x1, y1, _ in boxes:
        p = 20
        a = src[max(y0 - p, 0):y1 + p, max(x0 - p, 0):x1 + p]
        b = clean[i][max(y0 - p, 0):y1 + p, max(x0 - p, 0):x1 + p]
        def rgb(c):
            if c.shape[2] == 4:
                al = c[:, :, 3:4] / 255.0
                return (c[:, :, :3] * al + np.array([138, 110, 43]) * (1 - al)).astype(np.uint8)
            return c
        t = np.hstack([rgb(a), np.zeros((a.shape[0], 4, 3), np.uint8), rgb(b)])
        t = cv2.resize(t, (t.shape[1] * 3, t.shape[0] * 3), interpolation=cv2.INTER_NEAREST)
        tiles.append(t)
W = max(t.shape[1] for t in tiles)
cv2.imwrite(f'{QA}/paintouts.png', np.vstack([np.pad(t, ((0, 8), (0, W - t.shape[1]), (0, 0))) for t in tiles]))
# QA: hero layers recomposed on the paper, and the background alone
comp = bg.astype(float)
for name in ('kuro', 'yasser'):
    L = cv2.imread(f'{OUT}/hero-{name}.png', cv2.IMREAD_UNCHANGED).astype(float)
    a = L[:, :, 3:4] / 255.0
    comp = L[:, :, :3] * a + comp * (1 - a)
side = np.hstack([cv2.resize(bg, (1376, 768)), cv2.resize(comp.astype(np.uint8), (1376, 768))])
cv2.imwrite(f'{QA}/hero-layers.png', side)
json.dump(report, open(f'{OUT}/report.json', 'w'), indent=1)
print(json.dumps({k: v.get('painted_px', v) for k, v in report.items()}, indent=0))

# vignettes for "What I make": figure cut-outs (isnet-anime alpha saved as src/<id>.alpha.png),
# colours from the painted source, enclosed holes filled, paper left between dreads cleared
VIGNETTES = {
    'make-designer': ('ksWMyqe16B', (69, 25, 1068, 1055), [(566, 443, 672, 475, 'red'), (606, 429, 672, 443, 'red')]),
    'make-developer': ('ksWMyqe16B', (1351, 36, 935, 808), []),
    'make-artist': ('6AfFeoKiJO', (1505, 31, 1013, 837), [(2168, 579, 2200, 605, 'red')]),
}
vtiles = []
for name, (sid, (x, y, w, h), boxes) in VIGNETTES.items():
    src = load(sid)
    if boxes:
        src, n = paint(src, boxes)
        report.setdefault(sid, {})['painted_px_' + name] = n
    a = cv2.imread(f'{SRC}/{sid}.alpha.png', cv2.IMREAD_GRAYSCALE)[y:y + h, x:x + w].copy()
    rgb = src[y:y + h, x:x + w, :3].copy()
    # keep the largest figure group only, then fill enclosed holes (the laptop screen, eyes)
    lab, k = ndimage.label(a > 20)
    if k > 1:
        sizes = ndimage.sum(np.ones_like(a), lab, range(1, k + 1))
        keep = np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s > 0.12 * sizes.max()])
        a = np.where(ndimage.binary_dilation(keep, iterations=2), a, 0)
    holes = ndimage.binary_fill_holes(a > 128) & (a <= 128)
    hl, hk = ndimage.label(holes)
    hs = ndimage.sum(np.ones_like(a), hl, range(1, hk + 1))
    fill = np.isin(hl, [i + 1 for i, s in enumerate(hs) if s < 0.03 * a.size])
    a[fill] = 255
    # paper left between dreads: light, low-chroma, next to transparency, inside dark hair
    f = rgb.astype(int); mx, mn = f.max(2), f.min(2); lum = f.mean(2)
    cream = (a > 100) & (mn > 165) & ((mx - mn) < 55)
    near = ndimage.binary_dilation(a < 60, iterations=2)
    darkfrac = cv2.blur(((lum < 90) & (a > 128)).astype(np.float32), (31, 31))
    patch = cream & near & (darkfrac > 0.2)
    # grow each patch through the rest of its own paper-coloured blob
    pl, _ = ndimage.label(cream)
    patch = np.isin(pl, np.unique(pl[patch & (pl > 0)])) & (pl > 0) & (darkfrac > 0.12)
    a[patch] = 0
    out = np.dstack([rgb, a])
    ys, xs = np.where(a > 20)
    out = out[max(ys.min() - 8, 0):ys.max() + 9, max(xs.min() - 8, 0):xs.max() + 9]
    cv2.imwrite(f'{OUT}/{name}.png', out)
    report[name] = {'from': sid, 'size': [out.shape[1], out.shape[0]], 'holes_filled_px': int(fill.sum())}
    al = out[:, :, 3:4] / 255.0
    for bgc in ((43, 110, 138), (17, 17, 17)):
        t = (out[:, :, :3] * al + np.array(bgc) * (1 - al)).astype(np.uint8)
        vtiles.append(cv2.resize(t, (int(t.shape[1] * 500 / t.shape[0]), 500)))
cv2.imwrite(f'{QA}/vignettes.png', np.hstack([np.pad(t, ((0, 0), (0, 8), (0, 0))) for t in vtiles]))
json.dump(report, open(f'{OUT}/report.json', 'w'), indent=1)
print('vignettes', {k: report[k] for k in VIGNETTES})
