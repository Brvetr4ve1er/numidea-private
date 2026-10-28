import re, json, sys
src = open('/home/user/STICKITTY.INC/assets/themes.css').read()
src = re.sub(r'/\*.*?\*/', '', src, flags=re.S)
themes = {}
for m in re.finditer(r':root\[data-theme="([a-z]+)"\]\{([^{}]*)\}', src):
    name, body = m.group(1), m.group(2)
    decl = {}
    for d in re.split(r';(?![^(]*\))', body):
        if ':' not in d: continue
        k, v = d.split(':', 1)
        k = k.strip(); v = ' '.join(v.split())
        if k.startswith('--'): decl[k[2:]] = v
    themes[name] = decl
def rgb(v, t):
    v = v.strip()
    m = re.match(r'var\(--([\w-]+)\)$', v)
    if m: return rgb(themes[t][m.group(1)], t)
    m = re.match(r'#([0-9a-fA-F]{6})$', v)
    if m: h = m.group(1); return tuple(int(h[i:i+2], 16) for i in (0, 2, 4)) + (1.0,)
    m = re.match(r'rgba?\(([^)]*)\)$', v)
    if m:
        p = [x.strip() for x in m.group(1).split(',')]
        return (float(p[0]), float(p[1]), float(p[2]), float(p[3]) if len(p) > 3 else 1.0)
    raise ValueError(v)
def over(fg, bg):
    a = fg[3]
    return tuple(fg[i]*a + bg[i]*(1-a) for i in range(3)) + (1.0,)
def lum(c):
    def f(x):
        x /= 255
        return x/12.92 if x <= 0.03928 else ((x+0.055)/1.055)**2.4
    return 0.2126*f(c[0]) + 0.7152*f(c[1]) + 0.0722*f(c[2])
def ratio(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True)
    return (x+0.05)/(y+0.05)
ORDER = ['arcanum', 'noir', 'daylight', 'mono', 'altneon', 'engineering']
def col(t, name):
    # composite grounds: "band@void" etc.
    if '@' in name:
        top, base = name.split('@')
        return over(rgb(themes[t][top], t), col(t, base))
    return rgb(themes[t][name], t)
PAIRS = [
 ('ice','void',4.5),('ice','navy',4.5),('ice','plum',4.5),('ice','band@void',4.5),('ice','field-bg@navy',4.5),
 ('body-strong','void',4.5),('body-strong','navy',4.5),('body-strong','plum',4.5),
 ('muted','void',4.5),('muted','navy',4.5),('muted','plum',4.5),('muted','band@void',4.5),('muted','nav-glass@void',4.5),
 ('faint','void',4.5),('faint','navy',4.5),('faint','plum',4.5),('faint','field-bg@navy',4.5),('faint','field-bg@void',4.5),
 ('crimson-text','void',4.5),('crimson-text','navy',4.5),('crimson-text','plum',4.5),('crimson-text','band@void',4.5),
 ('teal-text','void',4.5),('teal-text','navy',4.5),('teal-text','plum',4.5),('teal-text','band@void',4.5),
 ('on-crimson','crimson',4.5),('on-crimson','crimson-hi',4.5),('on-teal','teal',4.5),('void','teal-text',4.5),
 ('teal','void',3),('teal','navy',3),('crimson','void',3),('crimson','navy',3),
 ('hairline','void',3),('hairline','navy',3),('hairline-2','void',3),('hairline-2','navy',3),('hairline-2','field-bg@navy',3),
 ('teal','crimson',1),
]
out = {}
for fg, bg, need in PAIRS:
    row = {}
    for t in ORDER:
        row[t] = round(ratio(col(t, fg), col(t, bg)), 2)
    out[f'{fg} on {bg}'] = (need, row)
w = max(len(k) for k in out)
print(' '*w, ' need ', ' '.join(f'{t[:8]:>8}' for t in ORDER))
for k, (need, row) in out.items():
    flags = ' '.join((f'{row[t]:>7.2f}' + ('*' if row[t] < need else ' ')) for t in ORDER)
    print(f'{k:<{w}}  {need:>4}  {flags}')
json.dump({k: {'need': n, **r} for k, (n, r) in out.items()}, open(sys.argv[1], 'w'), indent=1)
