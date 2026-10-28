#!/usr/bin/env python3
"""Validate project/tokens.json (+ tokens.css, fonts/) against format.md's grammar
and cross-check every value against the site's sources.
Usage: python3 -I validate_tokens.py <repo> <project_dir>
"""
import json, os, re, sys

REPO, PROJ = sys.argv[1], sys.argv[2]
errors, warns, info = [], [], []
E = errors.append; W = warns.append; I = info.append

tj = json.load(open(os.path.join(PROJ, 'tokens.json'), encoding='utf-8'))
NAME = re.compile(r'^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$')
LEN = re.compile(r'^(-?(\d+(\.\d+)?|\.\d+)(px|rem|em|%)|0)$')
HEXC = re.compile(r'^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$')
FUNC = re.compile(r'^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch)\(\s*[-+]?(\d+(\.\d+)?|\.\d+)(%|deg)?(\s*[,/ ]\s*[-+]?(\d+(\.\d+)?|\.\d+)(%|deg)?)*\s*\)$')
ALIAS = re.compile(r'^\{([A-Za-z0-9][A-Za-z0-9_.-]{0,63})\}$')

def is_len(v):
    return (isinstance(v, (int, float)) and not isinstance(v, bool)) or (isinstance(v, str) and bool(LEN.match(v)))

# ---------- top-level shape
for k in tj:
    if k not in ('version', 'meta', 'color', 'type', 'spacing', 'radius', 'shadow'):
        W(f'top-level key "{k}" is not a known family')
for fam in ('color', 'spacing', 'radius', 'shadow'):
    if not isinstance(tj.get(fam, {}).get('tokens'), list):
        E(f'{fam}.tokens must be a LIST')

# ---------- themes
themes = tj['color']['themes']
ids = [t['id'] for t in themes]
if len(ids) > 8: E('more than 8 themes')
if len(set(ids)) != len(ids): E('duplicate theme ids')
for i in ids:
    if not NAME.match(i) or i != i.lower(): E(f'theme id {i!r} invalid')
if ids[0] != 'arcanum': E('Arcanum must be the first theme')
expected_order = ['arcanum', 'noir', 'daylight', 'mono', 'altneon', 'engineering']
if ids != expected_order: E(f'theme order {ids} != {expected_order}')

# ---------- one namespace, names
namespace = {}
for fam in ('color', 'spacing', 'radius', 'shadow'):
    for t in tj[fam]['tokens']:
        n = t['name']
        if not NAME.match(n): E(f'{fam}: bad name {n!r}')
        if n in namespace: E(f'name {n!r} in both {namespace[n]} and {fam} (would drop)')
        namespace[n] = fam
        u = t.get('usage')
        if not u: E(f'{fam}:{n} has no usage note')
        elif len(u) > 1000: E(f'{fam}:{n} usage {len(u)} > 1000 chars (clamps)')
    note = tj[fam].get('note')
    if note and len(note) > 400: E(f'{fam} note {len(note)} > 400')
    if fam != 'color' and len(tj[fam]['tokens']) > 60: E(f'{fam}: more than 60 tokens')
if len(tj['color']['tokens']) > 600: E('more than 600 colours')

# ---------- colour values + aliases
ctok = {t['name']: t for t in tj['color']['tokens']}
def check_color(v, where):
    if not isinstance(v, str): E(f'{where}: not a string'); return
    if HEXC.match(v): return
    if v.startswith('#'): E(f'{where}: hex not lowercase/valid {v!r}'); return
    m = ALIAS.match(v)
    if m:
        if m.group(1) not in ctok: E(f'{where}: alias of missing colour {m.group(1)!r}')
        return
    if FUNC.match(v): return
    E(f'{where}: invalid colour value {v!r} (would drop)')
for n, t in ctok.items():
    v = t['value']
    if isinstance(v, str):
        check_color(v, f'color:{n}')
    else:
        for th in ids:
            if th not in v: E(f'color:{n} has no value for theme {th}')
        for th, x in v.items():
            if th not in ids: E(f'color:{n}: unknown theme {th}')
            check_color(x, f'color:{n}@{th}')
def resolve(n, th, depth=0, seen=()):
    if depth > 16: raise ValueError('chain > 16')
    if n in seen: raise ValueError('cycle')
    v = ctok[n]['value']
    v = v if isinstance(v, str) else v.get(th, v.get(ids[0]))
    m = ALIAS.match(v)
    return resolve(m.group(1), th, depth + 1, seen + (n,)) if m else v
for n in ctok:
    for th in ids:
        try: resolve(n, th)
        except ValueError as e: E(f'color:{n}@{th}: alias {e}')

# ---------- shadow
SHADOW_OK = re.compile(r'^[A-Za-z0-9 #%(),./+-]*$')
for t in tj['shadow']['tokens']:
    vals = t['value'] if isinstance(t['value'], dict) else {ids[0]: t['value']}
    for th in ids:
        if th not in vals: E(f'shadow:{t["name"]} missing theme {th}')
    for th, v in vals.items():
        if 'var(' in v or 'url(' in v: E(f'shadow:{t["name"]}@{th}: var()/url()')
        if len(v) > 400: E(f'shadow:{t["name"]}@{th}: > 400 chars')
        if not SHADOW_OK.match(v): E(f'shadow:{t["name"]}@{th}: unexpected characters')
        if v.count('(') != v.count(')'): E(f'shadow:{t["name"]}@{th}: unbalanced parens')

# ---------- spacing, radius
for fam in ('spacing', 'radius'):
    for t in tj[fam]['tokens']:
        if not is_len(t['value']): E(f'{fam}:{t["name"]}: bad length {t["value"]!r}')

# ---------- type
ty = tj['type']
fams = ty['families']
if len(fams) > 12: E('more than 12 families')
for k, v in fams.items():
    if not NAME.match(k) or k != k.lower(): E(f'family key {k!r} invalid')
    if len(v) > 200: E(f'family {k}: stack > 200 chars')
    if re.search(r'[;{}<>\\()]', v): E(f'family {k}: forbidden character')
    if v.count('"') % 2 or v.count("'") % 2: E(f'family {k}: unbalanced quotes')
for f in ty['fonts']:
    if re.search(r'["\']', f['family']): E(f'font family {f["family"]!r} must be bare')
    if not re.match(r'^\d{1,4}( \d{1,4})?$', f['weight']): E(f'font weight {f["weight"]!r}')
    if f['style'] not in ('normal', 'italic', 'oblique'): E(f'font style {f["style"]!r}')
    path = f['file'] if '/' in f['file'] else 'fonts/' + f['file']
    p = os.path.join(PROJ, path)
    if not os.path.isfile(p): E(f'font file missing: {path}')
    else:
        head = open(p, 'rb').read(4)
        if head != b'wOF2': E(f'{path}: not woff2 by first bytes ({head!r})')
        if os.path.getsize(p) > 1024 * 1024: E(f'{path} > 1 MB')
    if not any(f['family'] in v for v in fams.values()): W(f'font family {f["family"]} not named by any stack')
groups = ty['groups']
if len(groups) > 12: E('more than 12 type groups')
styles = [(g, s) for g in groups for s in g['styles']]
if len(styles) > 80: E('more than 80 styles')
snames = [s['name'] for _, s in styles]
if len(set(snames)) != len(snames): E('duplicate style names')
for g, s in styles:
    n = s['name']
    if not NAME.match(n): E(f'style name {n!r}')
    fam = s.get('family', g.get('family'))
    if fam not in fams: E(f'style {n}: family {fam!r} not in type.families')
    if not is_len(s['fontSize']): E(f'style {n}: bad fontSize (style would drop)')
    lh = s.get('lineHeight')
    if lh is not None and not ((isinstance(lh, (int, float)) and 0 < lh < 10) or is_len(lh)): E(f'style {n}: bad lineHeight')
    fw = s.get('fontWeight')
    if fw is not None and not (isinstance(fw, int) and 1 <= fw <= 1000): E(f'style {n}: bad fontWeight')
    ls = s.get('letterSpacing')
    if ls is not None and not is_len(ls): E(f'style {n}: bad letterSpacing')
    if len(s.get('sample', '')) > 200: E(f'style {n}: sample > 200')
    if len(s.get('usage', '')) > 1000: E(f'style {n}: usage > 1000')
    if not s.get('usage'): E(f'style {n}: no usage')
for g in groups:
    if len(g.get('note', '')) > 400: E(f'group {g["name"]}: note > 400')

# ---------- cross-check against the site's sources (exact values, nothing invented, nothing dropped)
strip = lambda s: re.sub(r'/\*.*?\*/', '', s, flags=re.S)
tcss = strip(open(os.path.join(REPO, 'assets/themes.css'), encoding='utf-8').read())
src = {}
for m in re.finditer(r':root\[data-theme="([a-z]+)"\]\{([^{}]*)\}', tcss):
    d = {}
    for part in re.split(r';(?![^(]*\))', m.group(2)):
        if ':' in part:
            k, v = part.split(':', 1)
            if k.strip().startswith('--'): d[k.strip()[2:]] = ' '.join(v.split())
    src[m.group(1)] = d
if list(src) != expected_order: E(f'source theme order changed: {list(src)}')
def src_color(v):
    m = re.match(r'^var\(--([\w-]+)\)$', v)
    if m: return '{' + m.group(1) + '}'
    return v.lower() if v.startswith('#') else v
for n, t in ctok.items():
    for th in ids:
        want = src_color(src[th][n])
        got = t['value'][th]
        if got != want: E(f'color:{n}@{th}: {got!r} != source {want!r}')
def lit(th, v):
    m = re.match(r'^var\(--([\w-]+)\)$', v)
    return lit(th, src[th][m.group(1)]) if m else v
for t in tj['shadow']['tokens']:
    for th in ids:
        if t['value'][th] != lit(th, src[th][t['name']]): E(f'shadow:{t["name"]}@{th} differs from source')
scss = strip(open(os.path.join(REPO, 'assets/styles.css'), encoding='utf-8').read())
root = {}
for m in re.finditer(r'(?m)^:root\{([^{}]*)\}', scss):
    for part in re.split(r';(?![^(]*\))', m.group(1)):
        if ':' in part:
            k, v = part.split(':', 1)
            if k.strip().startswith('--'): root[k.strip()[2:]] = ' '.join(v.split())
for t in tj['spacing']['tokens']:
    if root.get(t['name']) != t['value']: E(f'spacing {t["name"]}: {t["value"]} != source {root.get(t["name"])}')
src_space = sorted(k for k in root if re.match(r'^s-\d+$', k))
if sorted(t['name'] for t in tj['spacing']['tokens']) != src_space: E(f'spacing set differs from source {src_space}')
rad = {t['name']: t['value'] for t in tj['radius']['tokens']}
r_lg = root['r-lg']; r_lg = src['arcanum']['r-md'] if r_lg == 'var(--r-md)' else r_lg
for n, want in [('r-sm', src['arcanum']['r-sm']), ('r-md', src['arcanum']['r-md']), ('r-lg', r_lg), ('r-pill', root['r-pill'])]:
    if rad.get(n) != want: E(f'radius {n}: {rad.get(n)} != effective source {want}')
for k in ('display', 'body', 'mono', 'deco', 'deco-dec'):
    if fams[k] != root['font-' + k]: E(f'family {k} differs from --font-{k}')
if fams['arabic'] != root['font-ar-display']: E('family arabic differs from --font-ar-display')
# source fonts the site's fonts.css loads vs type.fonts
fcss = open(os.path.join(REPO, 'assets/fonts.css'), encoding='utf-8').read()
src_files = sorted(set(re.findall(r'url\("fonts/([^"]+\.woff2)"\)', fcss)))
ours = sorted(os.path.basename(f['file']) for f in ty['fonts'])
if src_files != ours: E(f'font files differ from fonts.css: {set(src_files) ^ set(ours)}')
# what the colour family deliberately leaves out
skipped = []
for k in src['arcanum']:
    if k in ctok or k in namespace: continue
    vals = [src[th][k] for th in ids]
    skipped.append(f'--{k} = {vals[0][:48]}{"…" if len(vals[0]) > 48 else ""}')
I('theme tokens not in tokens.json (non-colour or composite): ' + str(len(skipped)))
for s in skipped: I('   ' + s)
I('styles.css :root custom properties not in tokens.json: ' + ', '.join('--' + k for k in root if k not in namespace and not k.startswith('font-')))

# ---------- tokens.css
css = open(os.path.join(PROJ, 'tokens.css'), encoding='utf-8').read()
first_line = css.split('\n', 1)[0]
if first_line != '/* Numidea Labs Design System — generated from tokens.json */': E(f'tokens.css first line: {first_line!r}')
if not css.split('\n')[2].startswith(':root, [data-theme="arcanum"] {'): E('first block must be :root, [data-theme="arcanum"]')
for n in namespace:
    if f'--{n}:' not in css: E(f'tokens.css lacks --{n}')
for k in fams:
    if f'--font-{k}:' not in css: E(f'tokens.css lacks --font-{k}')
for s in snames:
    if f'\n.{s} {{' not in css: E(f'tokens.css lacks .{s}')
faces = re.findall(r'url\("([^"]+)"\)', css)
if len(faces) != len(ty['fonts']): E(f'{len(faces)} @font-face urls for {len(ty["fonts"])} fonts')
for u in faces:
    if not os.path.isfile(os.path.join(PROJ, u)): E(f'tokens.css url {u} missing')
blocks = dict(re.findall(r'\[data-theme="(\w+)"\] \{([^}]*)\}', css))
for th in ids[1:]:
    if th not in blocks: E(f'tokens.css lacks [data-theme="{th}"]'); continue
    for n, t in ctok.items():
        v = t['value'][th]
        if v.startswith('{') and f'--{n}: var(--{v[1:-1]});' not in blocks[th]: E(f'{th}: alias --{n} not re-declared')
        if v != t['value'][ids[0]] and f'--{n}:' not in blocks[th]: E(f'{th}: override --{n} missing')
if re.search(r'url\((?!"fonts/)', css): E('tokens.css references something outside fonts/')

# ---------- contrast from tokens.json's own values (every theme)
def rgba(v):
    if v.startswith('#'):
        h = v[1:]
        if len(h) in (3, 4): h = ''.join(c * 2 for c in h)
        return tuple(int(h[i:i+2], 16) for i in (0, 2, 4)) + ((int(h[6:8], 16) / 255) if len(h) == 8 else 1.0,)
    p = [float(x) for x in re.findall(r'[-+]?(?:\d+\.\d+|\d+|\.\d+)', v)]
    return (p[0], p[1], p[2], p[3] if len(p) > 3 else 1.0)
def lum(c):
    f = lambda x: (x / 255) / 12.92 if x / 255 <= 0.03928 else (((x / 255) + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])
def over(a, b):
    return tuple(a[i] * a[3] + b[i] * (1 - a[3]) for i in range(3)) + (1.0,)
def col(n, th):
    if '@' in n:
        top, base = n.split('@'); return over(col(top, th), col(base, th))
    return rgba(resolve(n, th))
def ratio(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True); return (x + 0.05) / (y + 0.05)
TEXT_PAIRS = [('ice', g) for g in ('void', 'navy', 'plum', 'band@void', 'field-bg@navy')] + \
    [('body-strong', g) for g in ('void', 'navy', 'plum', 'glass@void')] + \
    [('muted', g) for g in ('void', 'navy', 'plum', 'band@void', 'nav-glass@void', 'glass@void')] + \
    [('faint', g) for g in ('void', 'navy', 'plum', 'field-bg@navy', 'field-bg@void')] + \
    [('crimson-text', g) for g in ('void', 'navy', 'plum', 'band@void')] + \
    [('teal-text', g) for g in ('void', 'navy', 'plum', 'band@void')] + \
    [('on-crimson', 'crimson'), ('on-teal', 'teal'), ('void', 'teal-text')]
MARK_PAIRS = [('teal', 'void'), ('teal', 'navy'), ('crimson', 'void'), ('crimson', 'navy'),
              ('crimson-hi', 'void'), ('crimson-hi', 'navy')]  # 3:1 (focus ring, fills, large bold monogram)
DECOR = [('hairline', 'void'), ('hairline', 'navy'), ('hairline-2', 'void'), ('hairline-2', 'navy')]
low = []
for fg, bg in TEXT_PAIRS:
    rs = {th: ratio(col(fg, th), col(bg, th)) for th in ids}
    for th, r in rs.items():
        if r < 4.5: low.append(f'{fg} on {bg} @{th} {r:.2f}:1 < 4.5')
    I(f'text  {fg:>12} on {bg:<14} min {min(rs.values()):5.2f}:1 ({min(rs, key=rs.get)})')
for fg, bg in MARK_PAIRS:
    rs = {th: ratio(col(fg, th), col(bg, th)) for th in ids}
    for th, r in rs.items():
        if r < 3: low.append(f'{fg} on {bg} @{th} {r:.2f}:1 < 3')
    I(f'mark  {fg:>12} on {bg:<14} min {min(rs.values()):5.2f}:1 ({min(rs, key=rs.get)})')
for fg, bg in DECOR:
    rs = {th: ratio(col(fg, th), col(bg, th)) for th in ids}
    I(f'decor {fg:>12} on {bg:<14} {min(rs.values()):.2f}-{max(rs.values()):.2f}:1 (source value, under 3:1; note says so)')
for l in low: E('contrast: ' + l)
for n in ('hairline', 'hairline-2'):
    if 'kept exact from the source' not in ctok[n]['usage'].lower(): E(f'{n}: failing pair not stated in its note')

print('INFO');  [print('  ' + x) for x in info]
print('WARNINGS (%d)' % len(warns)); [print('  ' + x) for x in warns]
print('ERRORS (%d)' % len(errors)); [print('  ' + x) for x in errors]
print(f'summary: {len(ctok)} colours x {len(ids)} themes, {len(tj["spacing"]["tokens"])} spacing, {len(tj["radius"]["tokens"])} radius, '
      f'{len(tj["shadow"]["tokens"])} shadow, {len(ty["fonts"])} fonts, {len(fams)} families, {len(groups)} groups / {len(styles)} styles')
sys.exit(1 if errors else 0)
