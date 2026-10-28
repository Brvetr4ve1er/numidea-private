# Hub loops: private, run once (python3 -I tools/loops.py <hub-art dir> <ffmpeg>).
# Turns sticker frames (loops-src/<name>/f0000.png ...) into finite animated WebP masters:
# rotated to start on the poster frame, with one extra poster frame at the end so the animation
# settles on it; a bone die-cut border so dark figures read on the night palette; cropped to the
# union of all frames; 20 fps. Total motion stays at or under 5 s (WCAG 2.2.2).
import sys, os, glob, json, subprocess, shutil
import numpy as np, cv2
from scipy import ndimage

H, FF = sys.argv[1], sys.argv[2]
OUT = f'{H}/masters/loops'
os.makedirs(OUT, exist_ok=True)
BONE = np.array([211, 230, 244], np.uint8)          # #F4E6D3 in BGR
LOOPS = {   # name: (poster frame, plays, source fps)
    'yasser-wave': ('yasser-salut', 10, 2),
    'yasser-lost': ('yasser-perdu', 46, 1),
    'kuro-sleep': ('kuro-dodo', 40, 1),
}
FPS_SRC, FPS = 30, 20
BORDER = 12                                        # px at 1080
report = {}
for name, (src, poster, plays) in LOOPS.items():
    files = sorted(glob.glob(f'{H}/loops-src/{src}/f*.png'))
    n = len(files)
    seq = files[poster:] + files[:poster]
    keep = [seq[int(round(i * FPS_SRC / FPS))] for i in range(int(n * FPS / FPS_SRC))]
    frames = [cv2.imread(f, cv2.IMREAD_UNCHANGED) for f in keep]
    union = np.zeros(frames[0].shape[:2], bool)
    for f in frames:
        union |= f[:, :, 3] > 8
    ys, xs = np.where(ndimage.binary_dilation(union, iterations=BORDER + 6))
    y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
    tmp = f'{OUT}/_{name}'
    shutil.rmtree(tmp, ignore_errors=True); os.makedirs(tmp)
    disk = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * BORDER + 1, 2 * BORDER + 1))
    out_frames = frames + [frames[0]]               # settle on the poster frame
    for i, f in enumerate(out_frames):
        a = f[:, :, 3]
        ring = cv2.dilate((a > 24).astype(np.uint8) * 255, disk)
        ring = cv2.GaussianBlur(ring, (3, 3), 0)
        base = np.zeros_like(f); base[:, :, :3] = BONE; base[:, :, 3] = ring
        al = a[:, :, None] / 255.0
        comp = base.astype(float)
        comp[:, :, :3] = f[:, :, :3] * al + base[:, :, :3] * (1 - al)
        comp[:, :, 3] = np.maximum(ring, a)
        cv2.imwrite(f'{tmp}/f{i:04d}.png', comp.astype(np.uint8)[y0:y1, x0:x1])
    w = x1 - x0; h = y1 - y0
    # still: the poster frame
    shutil.copy(f'{tmp}/f0000.png', f'{OUT}/{name}-still.png')
    # animated master at full crop size; loop count = number of plays; last frame = poster
    dur = len(frames) / FPS * plays
    assert dur <= 5.0 + 1e-6, (name, dur)
    out = f'{OUT}/{name}.webp'
    subprocess.run([FF, '-hide_banner', '-loglevel', 'error', '-y', '-framerate', str(FPS), '-i', f'{tmp}/f%04d.png',
                    '-c:v', 'libwebp_anim', '-lossless', '0', '-q:v', '80', '-loop', str(plays), '-an', out], check=True)
    report[name] = {'from': src, 'frames': len(out_frames), 'fps': FPS, 'plays': plays, 'seconds_total': round(dur, 2),
                    'size': [int(w), int(h)], 'kb': round(os.path.getsize(out) / 1024, 1)}
    shutil.rmtree(tmp)
json.dump(report, open(f'{OUT}/report.json', 'w'), indent=1)
print(json.dumps(report, indent=1))
