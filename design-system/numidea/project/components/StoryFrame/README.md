# StoryFrame

A 9:16 frame (1080 × 1920) for Reels, Stories, TikTok, YouTube Shorts and WhatsApp Status: the wordmark, a kicker, a hook of seven words or fewer and one lead line, all inside the one safe box every platform and language leaves clear. An intentional addition, composed from the site's components (`.logo`, `.kicker`, `.sec`, a plate texture) with the rules in README › Marketing formats; the site has no social formats.

## When to use

- The first frame of a vertical piece, or a still Story. One frame says one thing.
- Any market: Algeria (FR, then AR), France (FR only), the Gulf (EN, AR; no price), YouTube Shorts.

## What the consumer provides

```html
<div class="fmt fmt-916" lang="fr">
  <div class="fmt-safe">
    <span class="logo fmt-mark">Num<i>idea</i> Labs<span class="cursor" aria-hidden="true"></span></span>
    <div class="fmt-push">
      <span class="kicker">04 — Tarifs</span>
      <p class="sec fmt-hook">Un prix <em>avant le devis.</em></p>
      <p class="fmt-lead">Fourchette indicative, pas un devis.</p>
    </div>
  </div>
  <span class="pi pi-contour fmt-deco" style="left:-160px;width:1400px;bottom:60px" aria-hidden="true"><i style="mask-image:url(<assets/Engravings/px-contour.webp>)"></i></span>
</div>
```

- `data-theme` on the page's root (Arcanum unless the plan says otherwise); `lang`, and `dir="rtl"` for Arabic.
- A kicker, a hook and a lead from `copy-library.md`, at the gate the piece is allowed (Gate 0 now). The heading pattern holds: the hook in `ice`, its closing words in `<em>` (`crimson-text`).
- Optional decoration below y 1240: an uncaptioned texture or the erg (`fd-ink`), at the site's strength.
- `fmt-guide` (the preview's dashed box and its labels) is a checking aid: delete it before export.

## Do

- Keep all text and key visuals inside the safe box, x 140–940, y 290–1240, in every language. Below y 1240, decoration only: the platforms' captions and buttons cover it.
- Hook 120px (`fmt-hook`; 96–140px is the range), at most 3 lines of 16–20 Latin characters, held at least 1.5 s in motion. Lead 60px (`fmt-lead`), at most 3 lines of 26–30 characters. Small print (`fmt-small`) 44px or more, and repeated in the caption.
- Arabic: the same box, right-aligned (`dir="rtl"`); the hook at 132px and the lead at 66px (10% larger), line height 1.5 or more, IBM Plex Sans Arabic, no tracking, never a line that starts with a Latin word. The wordmark stays Latin and left to right. Every Arabic string awaits a native speaker's review.
- Signature: the wordmark at ×2 (`fmt-mark`, no glow) at the top of the box.
- Write the hook and the searchable phrase again in the caption's first line.

## Don't

- Don't put a URL, an email address or a `?ref=` code on the frame.
- Don't headline the Aperçu or end on its call to action before Gate B; after Gate B, never without its conditions (the short form on the frame, the full line in the caption).
- Don't show a price on a Gulf frame (no AED or SAR price exists), and say "based in Algeria" in every Gulf piece.
- Don't set text over a plate's line work, or move text below y 1240 because it does not fit: cut words instead.
- Don't add a second accent colour, a gradient on type or a glow on the wordmark.
