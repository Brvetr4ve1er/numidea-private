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
# 'ink' = dark handwriting on paper, 'recolor' = lettering in a narrow box between the coat's own lines
# (recoloured to the coat around it, not inpainted, so the lines stay sharp). Boxes measured on the source renders.
PAINT = {
    'nV5x8JoYQD': [(2366, 489, 2447, 512, 'red')],
    'WDkgWegcXe': [(2366, 489, 2447, 512, 'red')],
    'IfONrR5tvE': [(2418, 924, 2502, 950, 'red')],
    # the coat badge, then lettering in the sketchbooks ("Dostov", a mirrored scrawl) and the maker's mark on the clock dial
    'mEP2bXIhJQ': [(1922, 897, 2038, 936, 'red'), (782, 1452, 808, 1502, 'ink'), (698, 1345, 728, 1372, 'ink'),
                   (722, 1326, 754, 1352, 'ink'),
                   (382, 1000, 405, 1016, 'ink')],
    'mEPZBKNhJQ': [(879, 487, 931, 506, 'red')],
    '8aJipYmIrU': [(252, 602, 316, 621, 'red')],
    'LwM8kSlswO': [(857, 335, 905, 349, 'red')],
    'JN8Cg30Oq4': [(993, 369, 1007, 378, 'recolor')],      # the end of the coat lettering under the folded badge
    # wall notes: the legible letter groups go; the rest of the pseudo-handwriting stays as scribble texture
    'WDkg2YLcXe': [(373, 83, 425, 104, 'ink'), (226, 285, 268, 304, 'ink'), (226, 342, 268, 358, 'ink'),
                   (283, 381, 314, 399, 'ink'), (1216, 26, 1264, 50, 'ink'),
                   (236, 314, 278, 338, 'ink'), (238, 364, 265, 384, 'ink'),                # "Occnnsted", "Kal"
                   (562, 506, 606, 521, 'ink'), (562, 521, 628, 553, 'ink'),                # "Thermys Blow" note
                   (627, 320, 687, 360, 'ink'),                                            # "Buuu (15)" note
                   (1138, 198, 1202, 216, 'ink'), (999, 27, 1040, 44, 'ink')],             # "Selle cuds", "Acam a"
}
SOURCES = ['nV5x8JoYQD', 'WDkgWegcXe', 'IfONrR5tvE', '3zEkVHLREY', 'mEP2bXIhJQ', 'mEPZBKNhJQ', '8aJipYmIrU',
           'WDkg2YLcXe', 'P3mQU8C42C', 'JN8Cg30Oq4', 'LwM8kSlswO', 'hu42BwkvqL']


def paint(im, boxes):
    rgb = np.ascontiguousarray(im[:, :, :3])
    mask = np.zeros(rgb.shape[:2], np.uint8)
    f = rgb.astype(int); b, g, r = f[:, :, 0], f[:, :, 1], f[:, :, 2]
    lum = f.mean(2)
    recol = []
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
        elif kind == 'recolor':
            # the lettering is darker and redder than the coat between the lines that bound the box
            rg = (r - g)[y0:y1, x0:x1]; L = lum[y0:y1, x0:x1]
            ground = L >= np.percentile(L, 55)
            coat = np.median(rgb[y0:y1, x0:x1][ground], axis=0)
            w = np.clip((np.median(L[ground]) - L - 6) / 30.0, 0, 1)[:, :, None]
            recol.append((y0, y1, x0, x1, w, coat))
            continue
        else:
            loc = np.median(lum[y0:y1, x0:x1])
            m[y0:y1, x0:x1] = (lum < loc - 40)[y0:y1, x0:x1]
        mask |= ndimage.binary_dilation(m, iterations=2).astype(np.uint8)
    out = im.copy()
    out[:, :, :3] = cv2.inpaint(rgb, mask * 255, 4, cv2.INPAINT_TELEA)
    for y0, y1, x0, x1, w, coat in recol:
        reg = out[y0:y1, x0:x1, :3].astype(np.float32)
        out[y0:y1, x0:x1, :3] = np.round(reg * (1 - w) + coat[None, None, :] * w).astype(np.uint8)
        mask[y0:y1, x0:x1] |= (w[:, :, 0] > 0.05)
    return out, int(mask.sum())


def load(i):
    return cv2.imread(f'{SRC}/{i}.png', cv2.IMREAD_UNCHANGED)


# Strings on the wall that a paint-out box cut through, drawn again from the pin to where they leave the box
# (anti-aliased, in the colour of the string's darkest remaining pixels).
STRINGS = {'WDkg2YLcXe': [((653, 320), (689, 343), (689, 343, 700, 352))]}


def restring(im, lines):
    for p0, p1, (x0, y0, x1, y1) in lines:
        ref = im[y0 - 3:y1 + 3, x0:x1 + 3, :3].reshape(-1, 3).astype(int)
        col = ref[np.argsort(ref.sum(1))[:12]].mean(0)
        cv2.line(im, p0, p1, tuple(int(c) for c in col) + ((255,) if im.shape[2] == 4 else ()), 2, cv2.LINE_AA)
    return im


report = {}
clean = {}
for i in SOURCES:
    im = load(i)
    n = 0
    if i in PAINT:
        im, n = paint(im, PAINT[i])
    if i in STRINGS:
        im = restring(im, STRINGS[i])
    clean[i] = im
    report[i] = {'size': [im.shape[1], im.shape[0]], 'painted_px': n,
                 'src_sha256': hashlib.sha256(open(f'{SRC}/{i}.png', 'rb').read()).hexdigest()}

# hero layers. The render and its cut-out are one frame, pixel-registered. Every layer is padded by the same
# rows (PAD_TOP of paper above, PAD_BOT below), so the figures have headroom and floor room inside the page's
# 3% bleed and their parallax never pushes a sole or a curl against the stage edge.
#  - the paper is flattened first (its grain is about 1.4 levels: the web encoder turned it into blocks)
#  - the contact shadows (under the shoes, under Kuro's tail and paws) leave the paper and go into the figure
#    that casts them, as semi-transparent brown, so they stay under the feet when the layers move
#  - the paper layer is filled with its own local tone where the figures stand, grown by only FILL px with a hard
#    edge, so the line work runs on to the outline as drawn and the figure covers its end
#  - the ink specks where the hero's words sit are painted out (the large splatter at the far left stays)
PAD_TOP, PAD_BOT, FILL = 46, 92, 6
SPECK_ZONE = (200, 470, 1650, 1000)            # x0, y0, x1, y1 on the unpadded frame: where the h1, name and motto fall
KURO_SPLIT = 2045                              # shadows left of this x are Kuro's, right of it Yasser's
hero = clean['nV5x8JoYQD'][:, :, :3]
hero = cv2.bilateralFilter(cv2.bilateralFilter(hero, 9, 7, 5), 9, 7, 5)
cut = clean['WDkgWegcXe']
alpha = cut[:, :, 3]
Hh, Wh = alpha.shape
lab, k = ndimage.label(alpha > 20)
sizes = ndimage.sum(np.ones_like(alpha), lab, range(1, k + 1))
order = np.argsort(-sizes)
yas_id, kur_id = order[0] + 1, order[1] + 1
objs = ndimage.find_objects(lab)
if objs[yas_id - 1][1].start < objs[kur_id - 1][1].start:   # Yasser stands right of Kuro
    yas_id, kur_id = kur_id, yas_id
heroF = hero.astype(np.float32)
lum = heroF.mean(2)
figure = alpha > 0


def tone_of(img, valid, scale=8):
    """the paper's smooth local colour everywhere: valid pixels averaged in cells, holes inpainted at low res"""
    h, w = valid.shape
    sw, sh = w // scale, h // scale
    num = cv2.resize(img * valid[:, :, None], (sw, sh), interpolation=cv2.INTER_AREA)
    den = cv2.resize(valid.astype(np.float32), (sw, sh), interpolation=cv2.INTER_AREA)
    t = num / np.maximum(den, 1e-3)[:, :, None]
    holes = (den < 0.35).astype(np.uint8) * 255
    t = cv2.inpaint(np.clip(t, 0, 255).astype(np.uint8), holes, 6, cv2.INPAINT_TELEA).astype(np.float32)
    t = cv2.GaussianBlur(t, (0, 0), 4)
    return cv2.resize(t, (w, h), interpolation=cv2.INTER_CUBIC)


med = cv2.medianBlur(hero, 9).astype(np.float32)
rough = tone_of(heroF, ~ndimage.binary_dilation(figure, iterations=12) & (lum > 200))
ink = (rough.mean(2) - lum) > 10
tone = tone_of(heroF, ~ndimage.binary_dilation(figure, iterations=12) & ~ndimage.binary_dilation(ink, iterations=3))
toneL = tone.mean(2)
# contact shadows: broad, soft and darker than the paper, on the floor; thin lines are not shadows (median 9)
diff = toneL - med.mean(2)
floor = np.zeros_like(figure)
floor[1380:, 1650:2700] = True
cand = (diff > 4) & floor & ~(alpha > 128)
sl, sn = ndimage.label(cand)
ssz = ndimage.sum(np.ones_like(diff), sl, range(1, sn + 1))
smask = np.isin(sl, [i + 1 for i, z in enumerate(ssz) if z > 400])
core = med[smask & (diff > np.percentile(diff[smask], 97))].mean(0) if smask.any() else np.array([146, 175, 203])
SH_K = tone[smask].mean(0) + (core - tone[smask].mean(0)) / 0.55    # the shadow's ink: its core is 55% of it
dk = tone - SH_K[None, None, :]
s = np.clip(((tone - med) * dk).sum(2) / np.maximum((dk * dk).sum(2), 1), 0, 1)
s = np.where(ndimage.binary_dilation(smask, iterations=2), s, 0)
s = cv2.GaussianBlur(s.astype(np.float32), (0, 0), 1.2)
s[alpha > 250] = 0
# the paper layer: the shadows' floor and the figures' footprint become the local paper (no line work crosses
# the shadows: the ground lines run above them)
# The smooth tone is corrected by the paper's own offset from it just outside, carried inward over ~12 px, so
# the fill meets the paper around it without a step.
fill = ndimage.binary_dilation(figure, iterations=FILL)
sw = np.clip(s / 0.06, 0, 1)
around = ~ndimage.binary_dilation(fill | (sw > 0), iterations=2) & ~ndimage.binary_dilation(ink, iterations=3)
den = cv2.GaussianBlur(around.astype(np.float32), (0, 0), 12)
off = cv2.GaussianBlur((heroF - tone) * around[:, :, None], (0, 0), 12) / np.maximum(den, 1e-3)[:, :, None]
off *= np.clip(den / 0.15, 0, 1)[:, :, None]
paper = tone + off
bg = heroF * (1 - sw[:, :, None]) + paper * sw[:, :, None]
bg[fill] = paper[fill]
# specks in the words' zone (at every viewport the h1, the name and the motto fall inside it): ink dots, that is
# compact blobs with a black core lying wholly inside the zone. Lines, dashes, stripes and the large splatter at
# the far left are long, light or outside it, so they stay.
x0z, y0z, x1z, y1z = SPECK_ZONE
bgL = bg.mean(2)
dl, dn = ndimage.label((toneL - bgL) > 25)
specks = np.zeros_like(figure)
speck_boxes = []
for i, sl_ in enumerate(ndimage.find_objects(dl)):
    if sl_[1].start < x0z or sl_[1].stop > x1z or sl_[0].start < y0z or sl_[0].stop > y1z:
        continue
    hgt, wid = sl_[0].stop - sl_[0].start, sl_[1].stop - sl_[1].start
    own = dl[sl_] == i + 1
    area = int(own.sum())
    if area < 2500 and max(hgt, wid) / max(min(hgt, wid), 1) < 3.5 and max(hgt, wid) < 70 and bgL[sl_][own].min() < 120:
        specks[sl_] |= dl[sl_] == i + 1
        speck_boxes.append([sl_[1].start, sl_[0].start, sl_[1].stop, sl_[0].stop])
specks = ndimage.binary_dilation(specks, iterations=3)
bg[specks] = paper[specks]
# padding: the paper goes on above and below; the frame's own top and bottom rows fade into it, so the lines
# that ran off the old edge now taper out on the paper
edge = lambda rows: cv2.GaussianBlur(rows.mean(0, keepdims=True), (0, 0), sigmaX=60, sigmaY=0.1)
toneE = tone.copy()
for a_, b_ in ((0, 120), (Hh - 120, Hh)):       # the last rows lean toward the smooth edge colour the padding takes
    ramp = (np.linspace(0, 1, b_ - a_) if a_ else np.linspace(1, 0, b_ - a_))[:, None, None]
    toneE[a_:b_] = tone[a_:b_] * (1 - ramp) + edge(tone[a_:b_]) * ramp
toneP = np.concatenate([np.repeat(edge(tone[:120]), PAD_TOP, 0), toneE, np.repeat(edge(tone[-120:]), PAD_BOT, 0)])
w = np.ones(Hh, np.float32)
w[:36] = np.linspace(0, 1, 36) ** 1.5
w[-56:] = np.linspace(1, 0, 56) ** 1.5
bgP = toneP.copy()
bgP[PAD_TOP:PAD_TOP + Hh] = bg * w[:, None, None] + toneE * (1 - w[:, None, None])
cv2.imwrite(f'{OUT}/hero-bg.png', np.clip(np.round(bgP), 0, 255).astype(np.uint8))
# the figures, each with its own contact shadow under it, on the padded canvas
for name, lid in (('yasser', yas_id), ('kuro', kur_id)):
    keep = ndimage.binary_dilation(lab == lid, iterations=3)
    aF = np.where(keep, alpha, 0).astype(np.float32) / 255
    xs = np.arange(Wh)[None, :]
    aS = s * ((xs < KURO_SPLIT) if name == 'kuro' else (xs >= KURO_SPLIT))
    aO = aF + aS * (1 - aF)
    rgb = (cut[:, :, :3].astype(np.float32) * aF[:, :, None] + SH_K[None, None, :] * (aS * (1 - aF))[:, :, None]) \
        / np.maximum(aO, 1e-4)[:, :, None]
    layer = np.zeros((Hh + PAD_TOP + PAD_BOT, Wh, 4), np.uint8)
    layer[PAD_TOP:PAD_TOP + Hh, :, :3] = np.clip(np.round(rgb), 0, 255).astype(np.uint8)
    layer[PAD_TOP:PAD_TOP + Hh, :, 3] = np.clip(np.round(aO * 255), 0, 255).astype(np.uint8)
    layer[layer[:, :, 3] == 0, :3] = 0
    cv2.imwrite(f'{OUT}/hero-{name}.png', layer)
bbox = lambda i: [int(objs[i - 1][1].start), int(objs[i - 1][0].start) + PAD_TOP, int(objs[i - 1][1].stop), int(objs[i - 1][0].stop) + PAD_TOP]
report['hero'] = {'pad_top': PAD_TOP, 'pad_bottom': PAD_BOT, 'fill_px': FILL, 'size': [Wh, Hh + PAD_TOP + PAD_BOT],
                  'paper_bgr': np.round(tone[700:900, 1000:1400].reshape(-1, 3).mean(0), 1).tolist(),
                  'shadow_ink_bgr': np.round(SH_K, 1).tolist(), 'shadow_px': int((s > 0.02).sum()),
                  'specks_removed': len(speck_boxes), 'speck_boxes': speck_boxes,
                  'yasser_bbox': bbox(yas_id), 'kuro_bbox': bbox(kur_id)}
# QA: the specks removed, in place, before and after (x2)
z = hero[y0z:y1z, x0z:x1z].copy()
zb = np.clip(bg[y0z:y1z, x0z:x1z], 0, 255).astype(np.uint8)
for x_0, y_0, x_1, y_1 in speck_boxes:
    cv2.rectangle(z, (x_0 - x0z - 3, y_0 - y0z - 3), (x_1 - x0z + 3, y_1 - y0z + 3), (0, 0, 255), 1)
cv2.imwrite(f'{QA}/hero-specks.png', cv2.resize(np.hstack([z, zb]), None, fx=0.75, fy=0.75, interpolation=cv2.INTER_AREA))

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
# QA: hero layers recomposed on the paper, and the background alone; then the feet at 1:1, at rest and with
# the figures moved 3 px down-left of their paper (more than the page's pointer depth ever separates them)
bgP = cv2.imread(f'{OUT}/hero-bg.png')
def compose(dx=0, dy=0):
    comp = bgP.astype(float)
    for name in ('kuro', 'yasser'):
        L = cv2.imread(f'{OUT}/hero-{name}.png', cv2.IMREAD_UNCHANGED).astype(float)
        L = np.roll(L, (dy, dx), (0, 1))
        a = L[:, :, 3:4] / 255.0
        comp = L[:, :, :3] * a + comp * (1 - a)
    return comp.astype(np.uint8)
comp = compose()
hs = (1376, round(1376 * bgP.shape[0] / bgP.shape[1]))
cv2.imwrite(f'{QA}/hero-layers.png', np.hstack([cv2.resize(bgP, hs, interpolation=cv2.INTER_AREA), cv2.resize(comp, hs, interpolation=cv2.INTER_AREA)]))
fy0 = report['hero']['kuro_bbox'][1] + 150
cv2.imwrite(f'{QA}/hero-feet.png', np.vstack([comp[fy0:fy0 + 330, 1650:2700], compose(-3, 3)[fy0:fy0 + 330, 1650:2700],
                                              bgP[fy0:fy0 + 330, 1650:2700]]))
cv2.imwrite(f'{QA}/hero-coat.png', np.hstack([comp[300:1100, 1900:2700], compose(-3, 3)[300:1100, 1900:2700]]))
json.dump(report, open(f'{OUT}/report.json', 'w'), indent=1)
print(json.dumps({k: v.get('painted_px', v) for k, v in report.items()}, indent=0))

# vignettes for "What I make": figure cut-outs (isnet-anime alpha saved as src/<id>.alpha.png),
# colours from the painted source, enclosed holes filled, paper left between dreads cleared
VIGNETTES = {
    'make-designer': ('ksWMyqe16B', (69, 25, 1068, 1055), [(566, 443, 672, 475, 'red'), (606, 429, 672, 443, 'red')]),
    'make-developer': ('ksWMyqe16B', (1351, 36, 935, 808), []),
    'make-artist': ('6AfFeoKiJO', (1505, 31, 1013, 837), [(2168, 579, 2200, 605, 'red')]),
}
# and, measured on the finished cut-outs (their own pixels): the laptop's title-bar capitals, and two specks the
# badge paint-out left on the artist's coat
VIGNETTE_POST = {
    'make-developer': [(76, 235, 96, 245, 'recolor'), (96, 234, 107, 244, 'recolor'), (271, 203, 292, 213, 'recolor')],
    'make-artist': [(651, 531, 658, 548, 'recolor'), (667, 540, 675, 555, 'recolor')],
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
    if name in VIGNETTE_POST:
        out, n = paint(out, VIGNETTE_POST[name])
        report.setdefault(name + '-post', {})['painted_px'] = n
    cv2.imwrite(f'{OUT}/{name}.png', out)
    report[name] = {'from': sid, 'size': [out.shape[1], out.shape[0]], 'holes_filled_px': int(fill.sum())}
    al = out[:, :, 3:4] / 255.0
    for bgc in ((43, 110, 138), (17, 17, 17)):
        t = (out[:, :, :3] * al + np.array(bgc) * (1 - al)).astype(np.uint8)
        vtiles.append(cv2.resize(t, (int(t.shape[1] * 500 / t.shape[0]), 500)))
cv2.imwrite(f'{QA}/vignettes.png', np.hstack([np.pad(t, ((0, 0), (0, 8), (0, 0))) for t in vtiles]))
json.dump(report, open(f'{OUT}/report.json', 'w'), indent=1)
print('vignettes', {k: report[k] for k in VIGNETTES})
