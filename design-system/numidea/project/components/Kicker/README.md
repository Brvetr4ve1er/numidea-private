# Kicker

The section opener: a numbered mono eyebrow led by a fading crimson rule (« 04 — Tarifs »), over a display heading whose last words turn crimson. Hand-written from assets/styles.css › `.kicker`, `.kicker::before`, `.kicker::after`, `h2.sec`, `h2.sec em`, `.sec-lead` and index.html › every section header (`<span class="kicker">` + `<h2 class="sec">` + `<p class="sec-lead">`). Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- At the top of a slide, a carousel page, a landing section or an ad's headline block: the eyebrow names the chapter, the heading says the one thing.
- The site numbers its seven sections: 01 — Preuves, 02 — Projets, 03 — Services, 04 — Tarifs, 05 — Équipe & fondateur, 06 — FAQ, 07 — Contact (EN: Proof, Work, Services, Pricing, Team & founder, FAQ, Contact). A piece numbers its own chapters the same way: two digits, an em dash, one word.

## What the consumer provides

```html
<span class="kicker">04 — Tarifs</span>
<h2 class="sec">Un prix <em>avant le devis.</em></h2>
<p class="sec-lead">…</p>   <!-- optional -->
```

- A heading from the site's own lines, with the closing phrase in `<em>`: « Un prix *avant le devis.* » / "A price *before the quote.*" / «سعر *قبل عرض السعر.*»; « Ce qu'on *construit pour vous.* » / "What we *build for you.*"; « Les questions *qui comptent.* » / "The questions *that matter.*".
- The theme on the page's root (`data-theme`): the heading takes that theme's face, weight and tracking, and only Arcanum keeps the diamond. `face-geist` on a container shows the Geist set inside an Arcanum page.
- `dir="rtl"` on the container for Arabic (the Arabic awaits a native speaker's review).
- `.sec` works on any element; the site uses it on `h2`.

## Do

- Kicker: Geist Mono 11px, uppercase, tracking .14em, `crimson-text` (6.24:1 or more on `void`, 5.88:1 or more on a `band`). A 32px rule fading out from `crimson` leads it, 8px (`s-2`) before the text; Arcanum adds a 6px `crimson` diamond after it. 24px (`s-5`) down to the heading.
- Heading (`section-title`): Arcanum sets Cinzel 700, 62px, line height 1.04, tracking .01em, in `ice`, at most 11.934em wide, 48px (`s-7`) above what follows. The emphasised words keep the face and stay upright, in `crimson-text`.
- The other themes: Geist, Noir 700 / -.035em, Daylight and Engineering 600 / -.03em, Monochrome 500 / -.035em, Alt-neon 700 / -.025em, with no diamond. `face-geist` inside an Arcanum page uses Noir's values.
- Arabic: IBM Plex Sans Arabic 600, no tracking anywhere, the rule fading the other way.
- Lead: Geist 18px / 1.5 in `muted` (6.37:1 or more), at most 39.78em.

## Don't

- Don't set the emphasis in italic, in Cinzel Decorative or as gradient text: the flourish is kept for the hero line and the contact heading.
- Don't track Arabic, and don't let the kicker's Latin numbering reorder: write it as the site does, « 04 — الأسعار ».
- Don't stack two emphasised phrases in one heading, or emphasise a claim `claims.md` does not allow.
- Don't set the kicker in `crimson` (the fill): text uses `crimson-text`.

## Differences from the site

The heading face, weight and tracking follow the theme on the site (`--font-head`, `--head-weight`, `--head-tracking`) and the diamond is sized by `--kicker-node`; tokens.json carries none of these, so `bundle.css` re-declares the site's per-theme values on the same `data-theme` selectors, under its own `--ds-*` names. 62px is the desktop end of the site's `clamp(26px, 14px + 3.33vw, 62px)`.
