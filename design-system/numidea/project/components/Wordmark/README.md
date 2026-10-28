# Wordmark

The studio's name set in type, « Numidea Labs » with « idea » in teal and a solid crimson block after it: no logo file exists, so this markup is the logo. Hand-written from assets/styles.css › `.logo`, `.logo i`, `.cursor` and index.html › `header .logo` (the footer repeats it). Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- As the signature on every piece: the corner of a post, the last frame of a carousel, the header of a landing page, the title slide of a deck.
- Once per frame. It is a sign-off, not a pattern.
- Not as a square avatar: the favicon mark (`assets/Marks/favicon.svg`) is for a browser tab or a bookmark only, and a profile picture for the studio's accounts is the owner's decision (`assets/Marks/README.md`).

## What the consumer provides

```html
<span class="logo">Num<i>idea</i> Labs<span class="cursor" aria-hidden="true"></span></span>
```

- Exactly these three runs: « Num », « idea » in `<i>`, « Labs », with the block last. `white-space:pre` keeps the space before « Labs »; do not add others.
- Size: 22px as written (the navbar). Inside an element with class `footer` it is 24px. Anything larger: scale the whole mark (CSS `zoom` or `transform: scale()` on a wrapper) so the 9 × 20px block keeps its proportion to the letters, and add `logo-scaled` to that wrapper: it drops the block's glow, which must never scale with the mark (its 1px ring would become a thick outline and its halo a bloom). Never re-set the parts separately.
- Face: it follows the theme on the page's root (`data-theme`): Cinzel in Arcanum, Geist at the theme's own weight and tracking elsewhere. `face-geist` shows the Geist mark inside an Arcanum page.
- Arabic pieces: keep the mark as it is. It is forced left to right (`direction:ltr; unicode-bidi:isolate`) and keeps its own tracking. In Arabic running text the name is written نوميديا لابز (awaiting a native speaker's review).

## Do

- Arcanum: Cinzel 700, 22px, tracking .04em (the `logo` type style); « idea » in Geist 600, upright, in `teal-text` (#34d0e8); the rest inherits `ice` (#eaf1f8).
- Other themes: Geist, Noir 700 / -.02em, Alt-neon 700 / -.01em, Daylight 600 / -.015em, Monochrome 600 / -.02em, Engineering 600 / -.02em (`face-geist` inside an Arcanum page: Noir's). On an Arabic page the site sets it in Geist 600 at -.01em.
- The block: `crimson` fill, 9 × 20px, 5px after « Labs », dropped 3px, with the `glow-crimson` shadow at 22px and 24px only; scaled up, no glow (`logo-scaled`).
- Put it on `void`, `navy` or `plum`. Measured in all six themes: `ice` 13.16:1 or more, `teal-text` 6.14:1 or more (on `plum`, the lowest), the block 4.69:1 or more as a mark.

## Don't

- Don't draw, trace, outline or vectorise a logo, and don't add an icon or monogram beside the name. No such artwork exists (BRAND.md, « The logo »).
- Don't colour « idea » with `teal` (the fill token) or recolour it per piece: text uses `teal-text`.
- Don't set the mark on a `crimson` fill: `ice` on `crimson` is 1.00 to 3.50:1 across the themes.
- Don't animate the block. It used to blink; the site's anti-slop sweep stopped it.
- Don't recolour the favicon mark or lift its colours (#09D8C7, #EAF2F4, #BD0927 on a plum-to-navy tile) into a palette: they predate the six themes and are not brand tokens.

## Differences from the site

tokens.json carries one face per theme only through the type styles; the site switches the face per theme through `--font-logo`, `--logo-weight` and `--logo-tracking`, which `bundle.css` re-declares on the same `data-theme` selectors under its own `--ds-*` names. `logo-scaled` is an intentional addition: the site never draws the mark larger than 24px. The hover filter on « idea » is kept; the site's 44px touch target under 960px is not (it is layout, not the mark).
