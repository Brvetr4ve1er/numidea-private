# Background removal for character sheets, then split into one PNG per figure.
import sys, os, numpy as np
from PIL import Image
from rembg import remove, new_session
from scipy import ndimage

def cut(src, outdir, model='isnet-general-use', min_area=0.004, pad=24):
    sess = new_session(model)
    im = Image.open(src).convert('RGB')
    rgba = remove(im, session=sess, post_process_mask=True)
    os.makedirs(outdir, exist_ok=True)
    base = os.path.splitext(os.path.basename(src))[0]
    rgba.save(f'{outdir}/{base}__all.png')
    a = np.array(rgba)[:, :, 3]
    mask = a > 24
    mask = ndimage.binary_closing(mask, iterations=6)
    lab, n = ndimage.label(mask)
    H, W = a.shape
    out = []
    for i, sl in enumerate(ndimage.find_objects(lab), 1):
        ys, xs = sl
        area = (lab[sl] == i).sum()
        if area < min_area * H * W: continue
        y0, y1 = max(ys.start - pad, 0), min(ys.stop + pad, H)
        x0, x1 = max(xs.start - pad, 0), min(xs.stop + pad, W)
        crop = np.array(rgba)[y0:y1, x0:x1].copy()
        keep = (lab[y0:y1, x0:x1] == i) | (lab[y0:y1, x0:x1] == 0)
        crop[:, :, 3] = np.where(keep, crop[:, :, 3], 0)
        out.append((x0, y0, x1 - x0, y1 - y0, crop))
    out.sort(key=lambda t: (round(t[1] / (H / 4)), t[0]))
    for k, (x, y, w, h, crop) in enumerate(out, 1):
        Image.fromarray(crop).save(f'{outdir}/{base}__{k:02d}.png')
        print(f'{base}__{k:02d}.png  x{x} y{y} {w}x{h}')

if __name__ == '__main__':
    cut(sys.argv[1], sys.argv[2], *(sys.argv[3:4] or []))
