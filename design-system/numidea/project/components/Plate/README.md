# Plate

An engraved plate: one of the studio's engravings used as a luminance mask in a theme ink, framed like the hero's plate with crimson corner ticks, and captioned « Pl. N — … » on a solid chip. Hand-written from assets/styles.css › THE ATLAS (`.pi`, the mask rule on `.pi>i`, `.pi-arch`, `.pi-coins`/`.pc`, `.pi-bench`, `.pi-lantern`, `.pi-light`, `.fd-ink`, `.pl-cap`) with the hero plate's frame (`.plate`, `.pk`) and index.html › the `.px-wrap` plates in `#work`, `#pricing`, `#founder`, `#faq`, `#contact` and the footer. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- The brand's picture language, « rooted in Numidia »: behind a heading, as the image of a cover slide or a carousel's first page, on an end card.
- The site's numbered plates (FR / EN / AR, the Arabic awaiting a native speaker's review):

| Plate | Caption | File (`assets/Engravings/`) | Ink on the site |
|---|---|---|---|
| I | « Pl. I — Les Bibans · Bordj Bou Arréridj » / "Pl. I — The Bibans · Bordj Bou Arréridj" / «لوحة 1 — جبال البيبان · برج بوعريريج» | `vista-far.webp`, `vista-mid.webp`, `vista-near.webp` | three layers: `muted` 32%, `teal-text` 42%, `body-strong` 26% |
| II | « Pl. II — Arc de Trajan · Timgad » / "Pl. II — Arch of Trajan · Timgad" / «لوحة 2 — قوس تراجان · تيمقاد» | `arch.webp` (1000 × 558) | `teal-text` 13% |
| III | « Pl. III — Monnaies numides » / "Pl. III — Numidian coins" / «لوحة 3 — نقود نوميدية» | `coin-king.webp`, `coin-horse.webp`, `coin-palm.webp` (1:1) | `crimson-text` 50% |
| IV | « Pl. IV — Cap Carbon · Béjaïa » / "Pl. IV — Cap Carbon · Béjaïa" / «لوحة 4 — رأس كاربون · بجاية» | `lighthouse.webp` (1100 × 595) | `teal-text` 16% |
| V | « Pl. V — Le Grand Erg » / "Pl. V — The Grand Erg" / «لوحة 5 — العرق الكبير» | `dunes.webp` (1500 × 596) | `crimson-text` 20% |
| uncaptioned | the founder's workbench seen from above, no person | `bench.webp` (1100 × 614) | `teal-text` 10% |
| uncaptioned | a hanging lantern | `lantern.webp` (560 × 835) | `crimson-text` 60% |

## What the consumer provides

```html
<div class="plate-frame">
  <div class="plate">
    <span class="pi pi-arch" style="left:7%;right:7%;top:8%" aria-hidden="true">
      <i style="mask-image:url(<assets/Engravings/arch.webp>);-webkit-mask-image:url(…)"></i>
    </span>
    <span class="pl-cap" style="left:14px;bottom:12px">Pl.&nbsp;II — Arc de Trajan · Timgad</span>
  </div>
  <i class="pk tl"></i><i class="pk tr"></i><i class="pk bl"></i><i class="pk br"></i>
</div>
```

- The engraving file as the mask of the inner `<i>`; the ink class (`pi-arch`, `pc`, `pi-bench`, `pi-lantern`, `pi-light`, `fd-ink`) gives its colour, strength and aspect ratio.
- Where it sits: the placement offsets on `.pi` (or `.pi-coins` holding three `.pi.pc` coins) and on `.pl-cap`. Each site plate has its own offsets; they are page layout and are not part of the component.
- The frame is optional: a plate can also sit straight on the page ground behind a heading, as on the site.

## Do

- Keep it a luminance mask (`mask-mode:luminance`, `mask-size:100% 100%`): the files are white line art on black, and the mask lets one file take any theme ink. Give the box the file's aspect ratio.
- Ink in `teal-text` or `crimson-text` (or `muted` / `body-strong` for Plate I's layers) at the site's strengths above when the plate sits behind text (a watermark). On the site every strength is multiplied by a per-theme ink factor: Arcanum 1, Noir .85, Daylight .6, Monochrome .55, Alt-neon 1, Engineering .8. `bundle.css` uses 1; lower the opacity by that factor in the other themes.
- When the plate is the sole figure of a marketing frame, with no text over it, add `pi-figure` to the `.pi`: the share card's strength, .62 (the preview's Plate II). At the 13% watermark strength a lone plate is a ghost, and in Daylight it all but disappears (about 1.2:1 on the white plate).
- Caption: Geist Mono 11px, uppercase, tracking .14em, `muted` on a solid `void` chip (padding 3px 7px, radius 3px), 6.75:1 or more. In Arabic: IBM Plex Sans Arabic 11px, no tracking, « لوحة N ».
- Frame: `navy` ground, 1px `hairline-2` border, radius `r-md`, a 6px ring of `void` at 55%; ticks 14 × 14px, 1px `crimson` (4.69:1 or more on `navy`).

## Don't

- Don't show an engraving as a plain image: it is black and white until it is a mask.
- Don't make new engravings or have any generated: the fourteen engravings and six line drawings (twenty files) are a closed set (owner rule, « no more generations »).
- Don't caption Plate I's middle layer as the Medracen; it is a generic round tomb.
- Don't use `coin-king.webp`, or any figure, to stand for the founder. The safe stand-in is the workbench (`bench.webp`).
- Don't set type on the hatching without the chip: line work behind small type fell under 4.5:1. Don't use a plate below about 90px; it turns into a smudge.

## Differences from the site

- Intentional addition, `.plate-frame`: on the site the four `.pk` ticks are children of `.plate`, whose `overflow:hidden` clips them away entirely (seen in a render of index.html on 2026-10-27, Arcanum, 1440px). Placed on a wrapper outside the clip, they draw on the frame's outer corners.
- The caption is 11px at .14em, its computed value: the site's design-system label rule overrides the 10px at .18em written in the atlas block.
- Left out: the lazy loading of masks (`.lz-on`), the coins' turn, the lantern's swing, the lighthouse beam, Plate I's three-layer parallax with its traced skylines, and the card drop shadow (it needs `--shade`, which tokens.json does not carry).
