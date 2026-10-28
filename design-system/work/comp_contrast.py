"""Contrast of every text (and meaningful mark) pair the component previews paint,
in all six themes, computed from tokens.json. Grounds that are translucent are
composited over what sits under them in the preview (and on the site)."""
import json, re, sys

TOK = '/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/ds/numidea/project/tokens.json'
t = json.load(open(TOK))
themes = [x['id'] for x in t['color']['themes']]
raw = {tok['name']: tok['value'] for tok in t['color']['tokens']}


def val(name, th):
    v = raw[name]
    if isinstance(v, dict):
        v = v.get(th, v[themes[0]])
    m = re.fullmatch(r'\{([\w-]+)\}', v)
    if m:
        return val(m.group(1), th)
    return v


def parse(v):
    v = v.strip()
    m = re.fullmatch(r'#([0-9a-f]{6})', v, re.I)
    if m:
        h = m.group(1)
        return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), 1.0)
    m = re.fullmatch(r'rgba?\(([^)]*)\)', v)
    if m:
        p = [x.strip() for x in m.group(1).split(',')]
        return (float(p[0]), float(p[1]), float(p[2]), float(p[3]) if len(p) > 3 else 1.0)
    raise ValueError(v)


def over(fg, bg):
    a = fg[3]
    return tuple(fg[i] * a + bg[i] * (1 - a) for i in range(3)) + (1.0,)


def mix(c, pct):  # color-mix(in srgb, c pct%, transparent) == c at alpha pct
    return c[:3] + (c[3] * pct,)


WHITE = lambda a: (255, 255, 255, a)


def ground(spec, th):
    """spec: 'void' | 'a@b@c' (a over b over c) | 'white.045@navy' | 'teal*.22@x'"""
    parts = spec.split('@')
    col = None
    for p in reversed(parts):
        if p.startswith('white'):
            c = WHITE(float(p[5:]))
        elif '*' in p:
            n, k = p.split('*')
            c = mix(parse(val(n, th)), float(k))
        else:
            c = parse(val(p, th))
        col = c if col is None else over(c, col)
    if col[3] < 1:
        raise ValueError('ground not opaque: ' + spec)
    return col


def lum(c):
    def f(x):
        x /= 255
        return x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])


def ratio(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True)
    return (x + 0.05) / (y + 0.05)


def fgcol(spec, th, bg):
    c = ground(spec, th) if '@' in spec else parse(val(spec, th))
    return over(c, bg) if c[3] < 1 else c


# (component, what, fg, [grounds], need)
P = []
def add(comp, what, fg, grounds, need=4.5):
    for g in grounds:
        P.append((comp, what, fg, g, need))

V, N = 'void', 'navy'
BAND = 'band@void'
# preview scaffolding labels
for c in ['Wordmark', 'Button', 'Pill', 'Kicker', 'Plate', 'TierCard', 'ApercuCard', 'TrustLine',
          'LanguageSwitch', 'FormField', 'ProjectCard', 'FounderCard']:
    add(c, 'state label (ds-label)', 'muted', [V])
# Wordmark
add('Wordmark', 'Num / Labs', 'ice', [V])
add('Wordmark', 'idea', 'teal-text', [V])
add('Wordmark', 'cursor block (mark)', 'crimson', [V], 3)
# Button
add('Button', 'primary label', 'on-crimson', ['crimson'])
add('Button', 'primary fill edge (mark)', 'crimson', [V], 3)
add('Button', 'teal label', 'teal-text', [V, 'teal*.08@void'])
add('Button', 'teal border (mark)', 'teal', [V], 3)
add('Button', 'ghost label', 'ice', [V])
add('Button', 'ghost border at rest (source value)', 'hairline-2', [V], 3)
add('Button', 'focus ring', 'teal', [V], 3)
# Pill
add('Pill', 'pill text', 'muted', [N])
add('Pill', 'live text', 'teal-text', [N])
add('Pill', 'live dot / border (mark)', 'teal', [N], 3)
add('Pill', 'pill border (source value)', 'hairline-2', [N], 3)
# Kicker
add('Kicker', 'kicker 11px', 'crimson-text', [V, BAND])
add('Kicker', 'heading', 'ice', [V, BAND])
add('Kicker', 'heading em', 'crimson-text', [V, BAND])
add('Kicker', 'section lead', 'muted', [V, BAND])
add('Kicker', 'rule + node (mark)', 'crimson', [V, BAND], 3)
# Plate
add('Plate', 'caption on its void chip', 'muted', [V])
add('Plate', 'corner ticks (mark)', 'crimson', [V, N], 3)
# TierCard
TG = ['white.04@navy', N]
add('TierCard', 'name, price figure', 'ice', TG)
add('TierCard', 'for-line, list', 'body-strong', TG)
add('TierCard', 'currency, env., HT', 'teal-text', TG)
add('TierCard', 'duration, ruler ends', 'muted', TG)
add('TierCard', 'badge text', 'void', ['teal-text'])
add('TierCard', 'list ticks, weeks bar (mark)', 'teal', TG, 3)
add('TierCard', 'recommended corner icon (mark)', 'crimson-text', TG, 3)
add('TierCard', 'corner icon (mark)', 'teal-text', TG, 3)
add('TierCard', 'price note under the row', 'muted', [V])
# ApercuCard (transparent card: sheen over the page ground, teal glow at its peak)
AG = ['white.045@void', 'white.045@band@void', 'teal*.22@white.045@void', 'teal*.22@white.045@band@void']
add('ApercuCard', 'tag, Payé/terms accents', 'crimson-text', AG)
add('ApercuCard', 'title, 0 DA, outcome', 'ice', AG)
add('ApercuCard', 'promise, outcome label, DA, WhatsApp link', 'teal-text', AG)
add('ApercuCard', 'brief, step notes, step durations', 'muted', AG)
add('ApercuCard', 'step titles, terms', 'body-strong', AG)
add('ApercuCard', 'CTA label', 'on-crimson', ['crimson'])
add('ApercuCard', 'markers, path (mark)', 'teal', AG, 3)
add('ApercuCard', 'decision diamond, outcome rule (mark)', 'crimson', AG, 3)
# TrustLine
add('TrustLine', 'proof line', 'muted', [V])
add('TrustLine', 'kicker', 'crimson-text', [V])
# LanguageSwitch
add('LanguageSwitch', 'idle language', 'muted', [V, 'nav-glass@void'])
add('LanguageSwitch', 'hovered language', 'ice', [V, 'nav-glass@void'])
add('LanguageSwitch', 'pressed language', 'on-teal', ['teal'])
add('LanguageSwitch', 'focus ring (idle)', 'teal', [V], 3)
add('LanguageSwitch', 'focus ring (pressed)', 'on-teal', ['teal'], 3)
add('LanguageSwitch', 'group border (source value)', 'hairline-2', [V], 3)
# FormField (site: contact is a band; preview: void)
FG_ = ['field-bg@void', 'field-bg@band@void']
add('FormField', 'label', 'muted', [V, BAND])
add('FormField', 'typed text', 'ice', FG_)
add('FormField', 'placeholder', 'faint', FG_)
add('FormField', 'error message', 'crimson-text', [V, BAND])
add('FormField', 'hint message', 'muted', [V, BAND])
add('FormField', 'invalid border (mark)', 'crimson', [V, BAND], 3)
add('FormField', 'focus ring (mark)', 'teal', [V, BAND], 3)
add('FormField', 'field border at rest (source value)', 'hairline-2', [V, BAND], 3)
# ProjectCard
PG = ['white.045@navy', N]
add('ProjectCard', 'category', 'teal-text', PG)
add('ProjectCard', 'title, action links', 'ice', PG)
add('ProjectCard', 'description, pills', 'muted', PG)
add('ProjectCard', 'benefit line', 'body-strong', PG)
add('ProjectCard', 'live pill', 'teal-text', [N])
add('ProjectCard', 'slot note on the placeholder', 'muted', ['plum'])
add('ProjectCard', 'benefit diamond (mark)', 'teal', PG, 3)
# FounderCard (roundel: plum -> navy -> void, crimson 22% at its top-left fading out)
add('FounderCard', 'name', 'ice', [N])
add('FounderCard', 'role', 'teal-text', [N])
add('FounderCard', 'pills', 'muted', [N])
add('FounderCard', 'bio', 'body-strong', [N])
add('FounderCard', 'monogram Y (46px bold: 3:1)', 'crimson-hi',
    ['navy', 'void', 'crimson*.11@navy', 'crimson*.11@void', 'crimson*.22@plum'], 3)

rows = []
misses = []
for comp, what, fg, g, need in P:
    r = {}
    for th in themes:
        bg = ground(g, th)
        r[th] = round(ratio(fgcol(fg, th, bg), bg), 2)
    worst = min(r.values())
    rows.append((comp, what, fg, g, need, r))
    for th, x in r.items():
        if x < need:
            misses.append((comp, what, fg, g, need, th, x))

w = 30
print(f"{'component':<15}{'pair':<44}{'ground':<32}need  " + ' '.join(f'{x[:7]:>7}' for x in themes))
for comp, what, fg, g, need, r in rows:
    print(f"{comp:<15}{(fg + ' ' + what)[:43]:<44}{g[:31]:<32}{need:<5} " +
          ' '.join(f"{r[th]:>6.2f}{'*' if r[th] < need else ' '}" for th in themes))
print('\nMISSES:')
for m in misses:
    print(m)
json.dump([{'component': c, 'what': w_, 'fg': f, 'ground': g, 'need': n, **r} for c, w_, f, g, n, r in rows],
          open(sys.argv[1] if len(sys.argv) > 1 else '/dev/null', 'w'), indent=1)
