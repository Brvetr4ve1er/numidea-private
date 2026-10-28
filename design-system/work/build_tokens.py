#!/usr/bin/env python3
"""Build tokens.json, tokens.css and fonts/ for the Numidea Labs Design System.

Reads the site's sources (read-only) and writes ONLY under OUT.
Usage: python3 -I build_tokens.py <repo> <out_project_dir> <short_sha>
"""
import json, os, re, shutil, sys

REPO, OUT, SHA = sys.argv[1], sys.argv[2], sys.argv[3]
read = lambda p: open(os.path.join(REPO, p), encoding='utf-8').read()
strip_comments = lambda s: re.sub(r'/\*.*?\*/', '', s, flags=re.S)

THEMES_CSS = strip_comments(read('assets/themes.css'))
STYLES_CSS = read('assets/styles.css')
STYLES_NC = strip_comments(STYLES_CSS)
FONTS_CSS = read('assets/fonts.css')

ORDER = ['arcanum', 'noir', 'daylight', 'mono', 'altneon', 'engineering']
NAMES = {'arcanum': 'Arcanum', 'noir': 'Noir', 'daylight': 'Daylight', 'mono': 'Monochrome',
         'altneon': 'Alt-neon', 'engineering': 'Engineering'}

def decls(body):
    out = {}
    for d in re.split(r';(?![^(]*\))', body):
        if ':' not in d:
            continue
        k, v = d.split(':', 1)
        k, v = k.strip(), ' '.join(v.split())
        if k.startswith('--'):
            out[k[2:]] = v
    return out

theme = {}
for m in re.finditer(r':root\[data-theme="([a-z]+)"\]\{([^{}]*)\}', THEMES_CSS):
    theme[m.group(1)] = decls(m.group(2))
assert list(theme) == ORDER, list(theme)

root_blocks = [decls(m.group(1)) for m in re.finditer(r'(?m)^:root\{([^{}]*)\}', STYLES_NC)]
root = {}
for b in root_blocks:
    root.update(b)  # later :root wins (same specificity, later in the sheet)

# ---------------------------------------------------------------- source asserts
def need(cond, msg):
    if not cond:
        raise SystemExit('SOURCE CHANGED: ' + msg)

need(theme['arcanum']['hero-fs-wide'] == 'clamp(46px,4.9vw,92px)', 'arcanum hero-fs-wide')
need(theme['arcanum']['hero-fs'] == 'clamp(27px,12.67px + 3.98vw,70px)', 'arcanum hero-fs')
need(theme['arcanum']['hero-lh'] == '1.03' and theme['arcanum']['head-tracking'] == '.01em', 'arcanum hero lh/tracking')
need(theme['arcanum']['head-weight'] == '700' and theme['arcanum']['font-head'] == 'var(--font-deco)', 'arcanum head')
need(theme['arcanum']['font-head-em'] == 'var(--font-deco-dec)', 'arcanum head-em')
need(theme['arcanum']['font-logo'] == 'var(--font-deco)' and theme['arcanum']['logo-weight'] == '700' and theme['arcanum']['logo-tracking'] == '.04em', 'arcanum logo')
for t in ORDER[1:]:
    need(theme[t]['hero-fs-wide'] == 'clamp(52px,5.6vw,104px)', t + ' hero-fs-wide')
    need(theme[t]['hero-fs'] == 'clamp(31px,13.33px + 4.91vw,84px)', t + ' hero-fs')
need((theme['noir']['head-weight'], theme['noir']['head-tracking'], theme['noir']['hero-lh']) == ('700', '-.035em', '.97'), 'noir head')
need((theme['altneon']['head-weight'], theme['altneon']['head-tracking'], theme['altneon']['hero-lh']) == ('700', '-.025em', '.97'), 'altneon head')
need((theme['daylight']['head-weight'], theme['daylight']['head-tracking'], theme['daylight']['hero-lh']) == ('600', '-.03em', '.98'), 'daylight head')
need((theme['engineering']['head-weight'], theme['engineering']['head-tracking'], theme['engineering']['hero-lh']) == ('600', '-.03em', '.97'), 'engineering head')
need((theme['mono']['head-weight'], theme['mono']['head-tracking'], theme['mono']['hero-lh']) == ('500', '-.035em', '.97'), 'mono head')
for frag in [
    'h2.sec{font-size:clamp(26px, 14px + 3.33vw, 62px);letter-spacing:-.025em}',
    'letter-spacing:-.02em;line-height:1.04',
    '.lede{font-size:clamp(18px,1.9vw,23px)',
    '.btn{font-family:var(--font-mono);font-size:14px;font-weight:700;padding:14px 28px;border-radius:var(--r-sm)',
    '.pill{font-family:var(--font-mono);font-size:11px;padding:5px 11px',
    '.pill{font-size:var(--t-label);letter-spacing:.02em}',
    '.t-range b,.eo-range b,.eo-range .eo-dash{font-size:clamp(19px,1.9vw,var(--t-feature));letter-spacing:-.02em}',
    '.t-range .cur,.eo-range .cur,.mk-table .cur{font-size:var(--t-small);letter-spacing:.06em}',
    '.proj h3{font-family:var(--font-display);font-weight:600;font-size:22px',
    '.tier h3{font-family:var(--font-display);font-weight:600',
    'font-size:var(--t-title);line-height:1.2;letter-spacing:-.01em',
    'font-size:var(--t-feature);line-height:1.15;letter-spacing:-.015em',
    'font-size:var(--t-lead);line-height:1.5',
    'font-size:var(--t-body);line-height:1.6',
    'font-size:var(--t-small);line-height:1.6',
    'font-family:var(--font-body);font-size:16px;line-height:1.6',
    '.nav-links a{font-family:var(--font-mono);font-size:13px;color:var(--muted)',
    '.pl-cap{position:absolute;font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase',
    'html[dir="rtl"] .hero-h{font-family:var(--font-ar-display);line-height:1.3}',
    'html[dir="rtl"] body :not(.logo, .logo *){letter-spacing:0!important}',
    'html[dir="rtl"]{--font-mono:"Geist Mono", "IBM Plex Sans Arabic", "IBM Plex Sans Arabic Fallback", "Geist Mono Fallback", ui-monospace, monospace}',
    '.hero-h{font-family:var(--font-display);font-weight:600',
    '.hero-h{font-size:clamp(52px,5.6vw,104px);line-height:.98;letter-spacing:-.028em}',
    '.logo{font-family:var(--font-display);font-weight:600;font-size:22px',
    '.logo i{font-family:var(--font-swash);font-style:normal;font-weight:600;color:var(--teal-text)',
]:
    need(frag in STYLES_CSS, frag)
need(root['t-label'] == '11px' and root['t-small'] == '13px' and root['t-ui'] == '14px' and root['t-body'] == '15px'
     and root['t-lead'] == '18px' and root['t-title'] == '22px' and root['t-feature'] == '30px' and root['ls-label'] == '.14em', 'type scale')
need(root['r-lg'] == 'var(--r-md)' and root['r-pill'] == '4px', 'radius root')

# ---------------------------------------------------------------- colour
COLOR_ORDER = ['void', 'navy', 'plum', 'ice', 'body-strong', 'muted', 'faint',
               'crimson', 'crimson-hi', 'on-crimson', 'crimson-text', 'teal', 'teal-text', 'on-teal',
               'hairline', 'hairline-2', 'band', 'grid-color', 'nav-glass', 'glass', 'field-bg']
COLOR_USAGE = {
 'void': "Page ground in every theme (warm paper in Daylight, near-black elsewhere): the body background, the solid chip behind plate captions, the skyline fills of Plate I, and the text colour of the 'popular' tier badge (void on teal-text, 6.65-13.36:1). Every text token is checked on it: ice 16.06-18.16:1, body-strong 11.97-13.36, muted 6.75-8.48, faint 5.70-7.06, crimson-text 6.24-18.16, teal-text 6.65-13.36 across the six themes.",
 'navy': "Card surface (a historical name: it is white in Daylight): project cards, service rows, tier cards, FAQ items, the founder card, pills, the theme menu and the skip link. Text on it in every theme: ice 14.76-17.79:1, body-strong 11.25-13.27, muted 7.13-7.70, faint 5.23-6.68, crimson-text 6.64-16.90, teal-text 7.37-12.50.",
 'plum': "Raised surface: chart tooltips (body-strong text, 10.03-11.72:1), the service banner's art tiles, the start of gradients toward navy. ice reads on it at 13.16-15.63:1, muted 6.23-7.18, crimson-text 5.76-15.63, teal-text 6.14-11.69. faint is lowest here (4.66:1 in Arcanum): keep faint on void, navy or fields.",
 'ice': "Primary text and the foreground of every theme (dark ink in Daylight, near-white elsewhere): the hero title, section and card titles, prices, form input text, the ghost button label. The site's contract holds it at 7:1 or better on void and navy; measured 16.06-18.16:1 on void, 14.76-17.79:1 on navy, 13.16-15.63:1 on plum, 15.15:1 or more on band sections. Mixing any outside colour toward ice keeps it legible (the per-project tint rule: 55% brand, 45% ice).",
 'body-strong': "Long copy: the hero lede, tier descriptions and lists, service family labels, the Aperçu card's lists, chart tooltips, and the ink of the near layer of Plate I. On void 11.97-13.36:1, navy 11.25-13.27:1, plum 10.03-11.72:1 in the six themes.",
 'muted': "Secondary text: nav links, section leads, field labels and legends, pills, price notes, plate captions (on their void chip), the far layer of Plate I. On void 6.75-8.48:1, navy 7.13-7.70:1, plum 6.23-7.18:1, band sections 6.37-7.98:1 in the six themes.",
 'faint': "Tertiary text: title-block keys, dimension-line labels, tier duration labels, form placeholders, table currency codes. On void 5.70-7.06:1, navy 5.23-6.68:1, field-bg 5.56-7.06:1; on plum 4.66:1 at worst (Arcanum). The site moved a hint off faint where it measured 4.44:1 on the pricing surface, so use it only on void, navy and fields.",
 'crimson': "Primary accent FILL: brass in Arcanum, signal red in Noir, ochre in Daylight, white in Monochrome, magenta in Alt-neon, safety orange in Engineering. The primary button's fill and border, the kicker's rule and node, the wordmark's cursor block, invalid-field borders, plate corner brackets. Never text (use crimson-text). As a mark it holds 4.69:1 or more on void and navy in every theme.",
 'crimson-hi': "Highlight of the crimson fill: plate-rail tab hover, the pause button's hover border, the plate wipe's leading edge, the Pricing texture ink, and, its one text use, the founder card's initials monogram (26-46px, weight 700), which stands where a photo would be. In Daylight it is 3.66:1 on void and 4.06:1 on navy, enough only for large bold type (3:1); 6.33:1 or more in the other themes. Do not set on-crimson on it: 4.06:1 in Daylight.",
 'on-crimson': "Text and icons on a crimson fill: the primary button's label. 9.71:1 Arcanum, 5.02 Noir, 5.64 Daylight, 18.16 Monochrome, 6.13 Alt-neon, 6.14 Engineering. Each theme states its own because no single colour works: ice on crimson is 1.00-3.50:1 across the six themes (1.67:1 on Arcanum's brass), so never put ice or white on a crimson fill.",
 'crimson-text': "Accent as TEXT: section kickers ('04 — Tarifs'), the emphasised words of section headings and of the contact heading, field error messages, and the ink of the coin and lantern engravings and the Plate I moon. On void 6.24-18.16:1, navy 6.64-16.90:1, plum 5.76-15.63:1, band 5.88-17.27:1. Equal to ice in Monochrome.",
 'teal': "Secondary accent FILL: the keyboard focus ring (2px solid outline at 3px offset; 5.38-13.21:1 on void and 5.97-12.50:1 on navy, so at least 3:1 everywhere), the teal button's border, the pressed language button's fill, tier-list ticks, the live-pill dot, hover borders. Steel grey in Noir, #bdbdbd in Monochrome. Set text in teal-text, never in teal (the site keeps fill and text tokens apart in every theme).",
 'teal-text': "Secondary accent as TEXT: the hero eyebrow, the hero title's swash line, 'idea' in the wordmark, bold words in the lede, link hovers, the teal button's label, the selected theme, tier currency codes, and the ink of most engravings (Timgad arch, workbench, lighthouse, Plate I middle layer, parallax fields). Also a FILL under void text in the 'popular' tier badge (6.65-13.36:1). On void 6.65-13.36:1, navy 7.37-12.50:1, plum 6.14-11.69:1.",
 'on-teal': "Text on a teal fill: the pressed language button (FR / EN / ع) and outlines drawn over teal. 10.00:1 Arcanum, 12.43 Noir, 5.97 Daylight, 10.54 Monochrome, 13.21 Alt-neon, 10.26 Engineering.",
 'hairline': "Quiet 1px rules: section top borders, card and FAQ-item borders, the tier duration divider, table rules. Decorative separation only: the source values measure 1.21-1.48:1 on void and 1.19-1.34:1 on navy, under the 3:1 non-text floor, so a hairline never carries meaning on its own. Kept exact from the source.",
 'hairline-2': "Stronger 1px borders on interactive edges: pills, the language and theme switches, ghost buttons, form fields, the founder card, the estimator. The source values measure 1.48-1.99:1 on void and 1.53-1.80:1 on navy, under the 3:1 a field boundary asks for; kept exact from the source. Focus and hover lift the edge (the teal ring; ice on a hovered ghost button).",
 'band': "Translucent wash behind alternating .band sections, faded in and out over clamp(56px,8vw,120px) instead of ending on a hard edge. Text on it, composited over void: ice 15.15:1 or more, muted 6.37, crimson-text 5.88, teal-text 6.27 at worst.",
 'grid-color': "Ink of the construction grid at the top of every page: 1px lines every 64px (48px in Alt-neon, 32px in Engineering) at 3.5-9% opacity, masked away by about 76% of the viewport height. Brass in Arcanum, cyan in Alt-neon; an alias of muted in Noir and Engineering and of ice in Daylight and Monochrome. Decorative only.",
 'nav-glass': "Background of the fixed navbar once the page scrolls, under a 14px backdrop blur: void at 78-86% opacity, so the nav links (muted) and the wordmark keep their contrast on void (muted 6.75:1 or more).",
 'glass': "Translucent fill of the folded capabilities panel. Text on it, composited over void: body-strong 11.07:1 or more, muted 7.18:1 or more.",
 'field-bg': "Fill of form inputs and textareas, under ice text (15.69:1 or more) and faint placeholders (5.56:1 or more). Bordered in hairline-2; on focus the field gains the 2px teal outline and glow-teal.",
}
VAR = re.compile(r'^var\(--([\w-]+)\)$')
HEX = re.compile(r'^#[0-9a-fA-F]{3,8}$')

def color_value(v):
    m = VAR.match(v)
    if m:
        return '{' + m.group(1) + '}'
    if HEX.match(v):
        return v.lower()
    return v  # rgb()/rgba() kept as written

color_tokens = []
for name in COLOR_ORDER:
    color_tokens.append({'name': name,
                         'value': {t: color_value(theme[t][name]) for t in ORDER},
                         'usage': COLOR_USAGE[name]})

# ---------------------------------------------------------------- shadow (plain box-shadows only)
def literal_shadow(t, v):
    m = VAR.match(v)
    return literal_shadow(t, theme[t][m.group(1)]) if m else v

SHADOW_USAGE = {
 'glow-teal': "Focus glow: added to a form field on focus (with the 2px teal outline) and to the teal button on hover. A 1px teal ring in every theme; Alt-neon adds a 24px halo.",
 'glow-crimson': "Hover glow of the primary button and the wordmark's cursor block: a 1px crimson ring; Arcanum adds a 34px halo, Noir 30px, Alt-neon 40px.",
 'btn-glow': "Resting shadow of the primary button. Arcanum and Alt-neon reuse their glow-crimson; Noir and Daylight cast a soft drop shadow; Monochrome and Engineering have none. The anti-slop sweep cut the old neon bloom down to these.",
}
shadow_tokens = [{'name': n, 'value': {t: literal_shadow(t, theme[t][n]) for t in ORDER}, 'usage': SHADOW_USAGE[n]}
                 for n in ['glow-teal', 'glow-crimson', 'btn-glow']]

# ---------------------------------------------------------------- spacing / radius
SPACE_USAGE = {
 's-2': "Tightest step: the kicker's rule-to-text gap, the CV note, the estimator button's top margin, small icon gaps.",
 's-3': "Card title to body (project h3), tier-list gaps, team-grid gaps, the form's fallback actions.",
 's-4': "Between the hero buttons, the nav-right items and the client logos; the drafting frame's bottom inset; service-card row gap.",
 's-5': "Kicker to heading, lede top margin, field to field in the form, tier side padding, card body padding, client voice padding.",
 's-6': "Service-card padding and tier top padding, work-grid and team gaps, footer top; the hero eyebrow's bottom margin on wide screens.",
 's-7': "Heading to content (h2.sec margin-bottom, the header-to-content gap from 961px), the hero buttons' top margin, the Aperçu card's padding.",
 's-8': "Hero grid gap, the title block's top margin, the price note's bottom margin, the capabilities panel's top margin, the footer.",
 's-9': "Section padding below 961px (section{padding:var(--s-9) 0}), the hero's bottom padding, the footer's top padding.",
 's-10': "Hero top padding: calc(var(--s-10) + 40px), which clears the 72px fixed navbar.",
}
spacing_tokens = []
for n in ['s-2', 's-3', 's-4', 's-5', 's-6', 's-7', 's-8', 's-9', 's-10']:
    spacing_tokens.append({'name': n, 'value': root[n], 'usage': SPACE_USAGE[n]})

per = lambda k: ', '.join(f"{NAMES[t]} {theme[t][k]}" for t in ORDER)
radius_tokens = [
 {'name': 'r-sm', 'value': theme['arcanum']['r-sm'],
  'usage': "Buttons, form fields, glyph tiles, menu items, the skip link. Set by each theme: " + per('r-sm') + "."},
 {'name': 'r-md', 'value': theme['arcanum']['r-md'],
  'usage': "Cards: projects, service rows, FAQ items, plates, the theme menu, the capabilities panel. Set by each theme: " + per('r-md') + "."},
 {'name': 'r-lg', 'value': theme['arcanum']['r-md'],
  'usage': "Panels: tier cards, the founder card, the Aperçu card, the estimator, the market tables, client voices. The DESIGN SYSTEM block sets --r-lg:var(--r-md) ('panels share the card radius'), so it equals r-md in every theme; the earlier :root value of 22px is overridden and never renders."},
 {'name': 'r-pill', 'value': root['r-pill'],
  'usage': "Pills, the language switch, the theme button, the tier badge, estimator chips, project action links. 4px in every theme: despite the name these are squared chips, not capsules."},
]

# ---------------------------------------------------------------- type
FONT_FILES = []  # (family, file, weight)
for m in re.finditer(r"@font-face \{\s*font-family: '([^']+)';\s*font-style: (\w+);\s*font-weight: (\d+);\s*font-display: swap;\s*src: url\(\"fonts/([^\"]+)\"\)", FONTS_CSS):
    FONT_FILES.append((m.group(1), m.group(4), m.group(3), m.group(2)))
fonts = []
seen = {}
for fam, f, w, st in FONT_FILES:
    if f in seen:  # Geist / Geist Mono: one variable file per subset, declared once per weight
        seen[f]['w'].append(int(w))
        continue
    seen[f] = {'fam': fam, 'w': [int(w)], 'st': st}
for f, d in seen.items():
    ws = sorted(set(d['w']))
    weight = str(ws[0]) if len(ws) == 1 else f"{ws[0]} {ws[-1]}"
    fonts.append({'family': d['fam'], 'file': 'fonts/' + f, 'weight': weight, 'style': d['st']})
need(len(fonts) == 17, f'expected 17 font files, got {len(fonts)}')

families = {
 'display': root['font-display'],
 'body': root['font-body'],
 'mono': root['font-mono'],
 'deco': root['font-deco'],
 'deco-dec': root['font-deco-dec'],
 'arabic': root['font-ar-display'],
 'mono-rtl': '"Geist Mono", "IBM Plex Sans Arabic", "IBM Plex Sans Arabic Fallback", "Geist Mono Fallback", ui-monospace, monospace',
}
need(root['font-ar-display'] == root['font-ar-body'], 'arabic stacks differ')
need(root['font-swash'] == root['font-display'], 'swash differs from display')

AR_REVIEW = " The Arabic sample is the site's own copy, which awaits a native speaker's review."
groups = [
 {'name': 'Display', 'family': 'deco',
  'note': "Headings as Arcanum, the default theme, sets them: --font-head is Cinzel 700 there and Geist in the other five themes (hero-title-sans). Sizes are the desktop end of each clamp().",
  'styles': [
   {'name': 'hero-title', 'fontSize': '92px', 'lineHeight': 1.03, 'fontWeight': 700, 'letterSpacing': '0.01em',
    'sample': 'Votre site sur mesure,',
    'usage': "The hero h1 in Arcanum: Cinzel 700, tracking .01em, line height 1.03, in ice. 92px is the desktop end of clamp(46px,4.9vw,92px), used from 1100px wide and reached at 1878px (about 71px at 1440); under 1100px the size is clamp(27px,12.67px + 3.98vw,70px). Cinzel draws lowercase as small capitals. The second line is hero-swash."},
   {'name': 'hero-swash', 'family': 'deco-dec', 'fontSize': '92px', 'lineHeight': 1.03, 'fontWeight': 700, 'letterSpacing': '0.01em',
    'sample': 'en français, anglais ou arabe.',
    'usage': "The hero title's second line (.swash) and the contact heading's emphasised words in Arcanum: Cinzel Decorative 700 at the hero-title size, in teal-text in the hero and crimson-text in the contact heading. In the other themes this line stays in the theme's Geist heading face."},
   {'name': 'section-title', 'fontSize': '62px', 'lineHeight': 1.04, 'fontWeight': 700, 'letterSpacing': '0.01em',
    'sample': 'Un prix avant le devis.',
    'usage': "Every section heading (h2.sec) and the contact heading in Arcanum: Cinzel 700, .01em, line height 1.04, ice, with the emphasised words in crimson-text. 62px is the desktop end of clamp(26px, 14px + 3.33vw, 62px), reached at about 1441px. A kicker sits above it and a lede-size lead below. Other themes set it in Geist at their own heading weight and tracking (see hero-title-sans)."},
   {'name': 'logo', 'fontSize': '22px', 'lineHeight': 1.6, 'fontWeight': 700, 'letterSpacing': '0.04em',
    'sample': 'Numidea Labs',
    'usage': "The wordmark 'Num<i>idea</i> Labs' in Arcanum: Cinzel 700, tracking .04em, 22px, ice; 'idea' switches to Geist 600 in teal-text, and a solid 9x20px crimson block with glow-crimson follows 'Labs'. Other themes set the whole mark in Geist (700 in Noir and Alt-neon, 600 in Daylight, Monochrome and Engineering). There is no drawn logo: always set the name in type."},
   {'name': 'hero-title-sans', 'family': 'display', 'fontSize': '104px', 'lineHeight': 0.97, 'fontWeight': 700, 'letterSpacing': '-0.035em',
    'sample': 'Votre site sur mesure,',
    'usage': "The hero h1 in the five Geist themes, at Noir's values: 700, -.035em, line height .97. Alt-neon 700 / -.025em / .97; Daylight 600 / -.03em / .98; Engineering 600 / -.03em / .97; Monochrome 500 / -.035em / .97. 104px is the desktop end of clamp(52px,5.6vw,104px) from 1100px (reached at 1858px); under 1100px clamp(31px,13.33px + 4.91vw,84px). Section headings in these themes use the same face, weight and tracking at section-title's size."},
  ]},
 {'name': 'Text', 'family': 'body',
  'note': "Geist, the body face of every theme, on the site's one scale (the DESIGN SYSTEM block of styles.css): 11 / 13 / 14 / 15 / 18 / 22 / 30.",
  'styles': [
   {'name': 'lede', 'fontSize': '18px', 'lineHeight': 1.5, 'fontWeight': 400,
    'sample': 'Studio web et logiciel à Bordj Bou Arréridj, Algérie. On conçoit, on code, on livre et on suit vos sites et applications, en français, anglais et arabe.',
    'usage': "The hero lede and every lead paragraph (section leads, the contact intro, the founder bio, FAQ questions): Geist 400, 18px, line height 1.5; body-strong in the hero, muted under section headings; bold words in teal-text at 600. Fixed at 18px: the design-system rule overrides .lede's own clamp(18px,1.9vw,23px). Measure about 29-30em."},
   {'name': 'body', 'fontSize': '16px', 'lineHeight': 1.6, 'fontWeight': 400,
    'sample': "Dites-nous ce qu'il vous faut : une urgence à traiter, quelque chose à corriger, une échéance à tenir.",
    'usage': "Default running text (the body element): Geist 400, 16px, line height 1.6, ice on void."},
   {'name': 'body-card', 'fontSize': '15px', 'lineHeight': 1.6, 'fontWeight': 400,
    'sample': 'Logos, couleurs, typographie, animation et une charte complète, documentée, prête à l’emploi.',
    'usage': "Card copy at 15px / 1.6: project descriptions, service briefs, FAQ answers, the price note; body-strong or muted on navy."},
   {'name': 'small', 'fontSize': '13px', 'lineHeight': 1.6, 'fontWeight': 400,
    'sample': 'Ce site ne conserve pas votre message.',
    'usage': "Fine print at 13px / 1.6: notes, sources, chart captions, form hints; muted on void or navy."},
   {'name': 'card-title', 'fontSize': '22px', 'lineHeight': 1.2, 'fontWeight': 600, 'letterSpacing': '-0.01em', 'family': 'display',
    'sample': 'Identité & systèmes visuels',
    'usage': "Every card title (projects, services, capabilities): Geist 600, 22px / 1.2, -.01em, ice on navy."},
   {'name': 'feature-title', 'fontSize': '30px', 'lineHeight': 1.15, 'fontWeight': 600, 'letterSpacing': '-0.015em', 'family': 'display',
    'sample': 'Essentiel',
    'usage': "Featured titles: tier names, the Aperçu card's title, the founder's name. Geist 600, 30px / 1.15, -.015em, ice (the tier title's own clamp(22px,2.6vw,30px) is overridden to 30px)."},
   {'name': 'price', 'fontSize': '30px', 'lineHeight': 1.6, 'fontWeight': 700, 'letterSpacing': '-0.02em', 'family': 'display',
    'sample': '90 000 – 160 000',
    'usage': "Tier price figures: Geist 700, -.02em, ice, followed by price-currency. 30px is the desktop end of clamp(19px,1.9vw,30px), reached at about 1579px: a figure such as '1 200 000' is one unit and never wraps, so it shrinks instead. Prices are set in dinars. In marketing every price carries « env. » and « HT » (about, excl. tax)."},
  ]},
 {'name': 'Mono', 'family': 'mono',
  'note': "Geist Mono for every label, button and readout. Labels are uppercase through text-transform, which a type style cannot carry: the samples are typed in capitals.",
  'styles': [
   {'name': 'kicker', 'fontSize': '11px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0.14em',
    'sample': '04 — TARIFS',
    'usage': "Section kicker, numbered '01 — Preuves' to '07 — Contact': Geist Mono 11px uppercase at .14em, crimson-text. A 32px rule fading out from crimson precedes it (8px gap); Arcanum adds a 6px rotated-square node in crimson (0px in the other themes)."},
   {'name': 'mono-label', 'fontSize': '11px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0.14em',
    'sample': 'STUDIO WEB & LOGICIEL · BORDJ BOU ARRÉRIDJ, ALGÉRIE',
    'usage': "Every other mono caption at the kicker's metrics (11px uppercase, .14em): the hero eyebrow (teal-text), field labels and legends (muted), tags, table heads, title-block keys and tier durations (faint), the founder's role."},
   {'name': 'button', 'fontSize': '14px', 'lineHeight': 1.6, 'fontWeight': 700,
    'sample': 'Demander mon Aperçu gratuit →',
    'usage': ".btn: Geist Mono 14px 700, padding 14px 28px, radius r-sm, 1px border. Primary: crimson fill, on-crimson label, btn-glow at rest, glow-crimson and a 2px lift on hover. Teal: transparent, teal-text label, teal border. Ghost: transparent, ice label, hairline-2 border (ice on hover). Line height 1.6 on link buttons such as the hero calls to action; a <button> takes the browser's normal. The form's submit pads 15px 40px."},
   {'name': 'nav-link', 'fontSize': '13px', 'lineHeight': 1.6, 'fontWeight': 400,
    'sample': 'Services',
    'usage': "Navbar links: Geist Mono 13px, muted, teal-text on hover, 26px apart."},
   {'name': 'pill', 'fontSize': '11px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0.02em',
    'sample': 'Site vitrine',
    'usage': ".pill: Geist Mono 11px, .02em, muted on navy, 1px hairline-2 border, radius r-pill, padding 5px 11px. The .live variant is teal-text with a teal border and dot; .concept (a portfolio demo, not client work) has a dashed border."},
   {'name': 'price-currency', 'fontSize': '13px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0.06em',
    'sample': 'DA',
    'usage': "The currency after a price figure: Geist Mono 13px, .06em, teal-text. 'DA' in French, 'DZD' in English, 'دج' in Arabic; euro and dollar figures are rounded conversions from dinars."},
   {'name': 'plate-caption', 'fontSize': '10px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0.18em',
    'sample': 'PL. II — ARC DE TRAJAN · TIMGAD',
    'usage': "Engraving captions: Geist Mono 10px uppercase at .18em, muted, on a solid void chip (padding 3px 7px, radius 3px), because line work behind 10px type fell under 4.5:1. The plates run from 'Pl. I — Les Bibans · Bordj Bou Arréridj' to 'Pl. V — Le Grand Erg'. In Arabic the caption is IBM Plex Sans Arabic 11px with no tracking."},
  ]},
 {'name': 'Arabic', 'family': 'arabic',
  'note': "IBM Plex Sans Arabic for the whole Arabic page (dir=rtl). Letter-spacing is forced to 0 there: tracking breaks the joins of the script. Western digits, forward arrows point left (←). All Arabic copy awaits a native speaker's review.",
  'styles': [
   {'name': 'arabic-display', 'fontSize': '104px', 'lineHeight': 1.3, 'fontWeight': 600, 'letterSpacing': '0',
    'sample': 'موقعك المخصّص،',
    'usage': "The Arabic hero h1: IBM Plex Sans Arabic 600, line height 1.3, no tracking, ice, with the swash line in teal-text. 104px is the desktop end of clamp(52px,5.6vw,104px) from 1100px (reached at 1858px); below, clamp(31px,13.33px + 4.91vw,84px). The contact heading uses the same face and line height at clamp(26px, 14px + 3.33vw, 62px)." + AR_REVIEW},
   {'name': 'arabic-section-title', 'fontSize': '62px', 'lineHeight': 1.04, 'fontWeight': 600, 'letterSpacing': '0',
    'sample': 'سعر قبل عرض السعر.',
    'usage': "Arabic section headings: h2.sec switches to IBM Plex Sans Arabic in RTL at weight 600 with no tracking; 62px is the desktop end of clamp(26px, 14px + 3.33vw, 62px). The source keeps the Latin line height 1.04 here (only the hero and the contact heading get 1.3). Emphasised words in crimson-text." + AR_REVIEW},
   {'name': 'arabic-lede', 'fontSize': '18px', 'lineHeight': 1.5, 'fontWeight': 400, 'letterSpacing': '0',
    'sample': 'نصمّم ونبرمج ونطلق مواقع وتطبيقات الويب ونتابعها بعد الإطلاق، بالعربية والفرنسية والإنجليزية.',
    'usage': "Arabic leads at the lede metrics, 18px / 1.5, body-strong in the hero and muted under headings; no tracking." + AR_REVIEW},
   {'name': 'arabic-body', 'fontSize': '16px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0',
    'sample': 'استوديو ويب وبرمجيات في برج بوعريريج، الجزائر.',
    'usage': "Arabic running text: in RTL the body switches to IBM Plex Sans Arabic at 16px / 1.6, ice on void; no tracking." + AR_REVIEW},
   {'name': 'arabic-label', 'family': 'mono-rtl', 'fontSize': '11px', 'lineHeight': 1.6, 'fontWeight': 400, 'letterSpacing': '0',
    'sample': '04 — الأسعار',
    'usage': "Arabic kickers and mono labels: in RTL the mono stack lists IBM Plex Sans Arabic right after Geist Mono (the mono-rtl family), so Arabic letters take Plex while Latin letters and digits keep the mono face; 11px with tracking forced to 0, colours as kicker and mono-label." + AR_REVIEW},
  ]},
]

tokens = {
 'version': 1,
 'meta': {
  'source': 'github',
  'repo': 'Brvetr4ve1er/Numidea.tech',
  'ref': f'claude/numidea-labs-landing-c4jokc@{SHA}',
  'paths': {
   'tokens': ['assets/themes.css', 'assets/styles.css'],
   'fonts': ['assets/fonts.css', 'assets/fonts/'],
   'assets': ['assets/illus/', 'assets/favicon.svg', 'assets/og.jpg'],
   'docs': ['BRAND.md', 'README.md', 'OWNER-CONTENT.md', 'IMPROVEMENTS.md', 'RELEASE.md'],
  },
  'synced': '2026-10-27',
 },
 'color': {'themes': [{'id': t, 'name': NAMES[t]} for t in ORDER], 'tokens': color_tokens},
 'type': {'fonts': fonts, 'families': families, 'groups': groups},
 'spacing': {'note': "One nine-step scale from :root in styles.css (it starts at s-2; there is no s-1). Sections pad clamp(72px,7vw,112px) from 961px; the page is at most 1200px wide with a 48px gutter.",
             'tokens': spacing_tokens},
 'radius': {'note': "Corner radii move with the theme: r-sm and r-md are set in each theme block, r-lg follows r-md and r-pill is fixed. Values here are Arcanum's; each usage note lists the other themes.",
            'tokens': radius_tokens},
 'shadow': {'note': "Only the plain glows are tokens. Card depth uses rgb(var(--shade) / calc(.85 * var(--shade-k))), a composite left out.",
            'tokens': shadow_tokens},
}

os.makedirs(os.path.join(OUT, 'fonts'), exist_ok=True)
with open(os.path.join(OUT, 'tokens.json'), 'w', encoding='utf-8') as fh:
    json.dump(tokens, fh, ensure_ascii=False, indent=2)
    fh.write('\n')

# ---------------------------------------------------------------- fonts
for f in fonts:
    src = os.path.join(REPO, 'assets', f['file'])
    shutil.copyfile(src, os.path.join(OUT, f['file']))
shutil.copyfile(os.path.join(REPO, 'assets/fonts/OFL.txt'), os.path.join(OUT, 'fonts/OFL.txt'))

# ---------------------------------------------------------------- tokens.css (format.md: "tokens.css as compiled")
def css_color(v):
    return f'var(--{v[1:-1]})' if v.startswith('{') else v

def css_len(v):
    return f'{v}px' if isinstance(v, (int, float)) and v != 0 else str(v)

first = ORDER[0]
L = ['/* Numidea Labs Design System — generated from tokens.json */', '']
L.append(f':root, [data-theme="{first}"] {{')
for t in color_tokens:
    L.append(f'  --{t["name"]}: {css_color(t["value"][first])};')
for t in shadow_tokens:
    L.append(f'  --{t["name"]}: {t["value"][first]};')
L.append('}')
for th in ORDER[1:]:
    L.append('')
    L.append(f'[data-theme="{th}"] {{')
    for t in color_tokens + shadow_tokens:
        v = t['value'][th]
        if v != t['value'][first] or v.startswith('{'):
            L.append(f'  --{t["name"]}: {css_color(v)};')
    L.append('}')
L.append('')
L.append(':root {')
for t in spacing_tokens + radius_tokens:
    L.append(f'  --{t["name"]}: {t["value"]};')
for k, v in families.items():
    L.append(f'  --font-{k}: {v};')
L.append('}')
for g in groups:
    for s in g['styles']:
        fam = s.get('family', g['family'])
        props = [f'font-family: var(--font-{fam})', f'font-size: {css_len(s["fontSize"])}']
        if 'lineHeight' in s:
            props.append(f'line-height: {s["lineHeight"]}')
        if 'fontWeight' in s:
            props.append(f'font-weight: {s["fontWeight"]}')
        if 'letterSpacing' in s:
            props.append(f'letter-spacing: {css_len(s["letterSpacing"])}')
        if 'fontStyle' in s:
            props.append(f'font-style: {s["fontStyle"]}')
        L.append('')
        L.append(f'.{s["name"]} {{ ' + '; '.join(props) + '; }')
for f in fonts:
    L.append('')
    L.append('@font-face {')
    L.append(f'  font-family: "{f["family"]}";')
    L.append(f'  src: url("{f["file"]}") format("woff2");')
    L.append(f'  font-weight: {f["weight"]};')
    L.append(f'  font-style: {f["style"]};')
    L.append('  font-display: swap;')
    L.append('}')
with open(os.path.join(OUT, 'tokens.css'), 'w', encoding='utf-8') as fh:
    fh.write('\n'.join(L) + '\n')
print('wrote', os.path.join(OUT, 'tokens.json'), 'and tokens.css;', len(fonts), 'fonts + OFL.txt')
