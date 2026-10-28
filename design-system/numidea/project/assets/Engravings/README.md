# Engravings

The atlas, in fourteen files: eleven engravings of the region the studio works from and of its workshop, and three background textures. Each file is **white line art on pure black** (webp), generated in earlier image runs for the site and now a closed set: no new engraving is made, and none is ever described as hand-engraved, hand-made or « sans IA ».

## How to draw them

- **Never show a file as a picture.** The site applies each one as a **luminance mask over a theme ink**, so the white lines take the ink colour and the black disappears. One file then re-inks itself in all six themes:
  ```css
  .ink{background:var(--teal-text);
    -webkit-mask-image:url(<the file's URL>);mask-image:url(<the file's URL>);
    -webkit-mask-size:contain;mask-size:contain;
    -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
    -webkit-mask-source-type:luminance;mask-mode:luminance}
  ```
  Keep both the `-webkit-mask-source-type` and `mask-mode` lines. For an exported image, recolour the white lines to the ink and the black to transparent; never leave white on black.
- **Ink** each file in the token given below, at the site's strength, multiplied by the theme's ink strength: Arcanum 1, Noir .85, Daylight .6, Monochrome .55, Alt-neon 1, Engineering .8. Behind text keep that watermark strength; as the sole figure of a frame with nothing over it, ink it stronger: the share card sets Plate II at .62.
- **Caption** a plate in `plate-caption` (Geist Mono 11px, uppercase, .14em) in `muted`, on a solid `void` chip (padding 3px 7px, radius 3px), because small type over line work falls under 4.5:1. Arabic captions: IBM Plex Sans Arabic 11px, no tracking. Hold « Pl. » to its numeral with a no-break space.
- **Frame** a plate, when it is framed, with 1px `crimson` corner brackets 14–15px long.
- **Size floor:** never smaller than about 90px across: the detail collapses into smudges. These are detailed renderings, not icons.
- **Motion,** if any, is slow and settles: parallax drift, a coin turning, the beam sweeping, the lantern swinging. Nothing loops forever; nothing moves under reduced motion.

## The files

| File | Size | What it depicts | Plate and caption | Ink · site strength |
|---|---|---|---|---|
| `vista-far.webp` | 1600 × 679 | A long mountain ridge, the Bibans: the far layer | Pl. I — Les Bibans · Bordj Bou Arréridj / Pl. I — The Bibans · Bordj Bou Arréridj | `muted` · .32 |
| `vista-mid.webp` | 1600 × 679 | A round colonnaded tomb on a hill with olive trees: the middle layer | Plate I (one caption for the three layers) | `teal-text` · .42 |
| `vista-near.webp` | 1500 × 636 | Foreground palms, agaves and shrubs: the near layer | Plate I | `body-strong` · .26 |
| `arch.webp` | 1000 × 558 | A triple-bay Roman triumphal arch with column ruins and a paved road | Pl. II — Arc de Trajan · Timgad / Pl. II — Arch of Trajan · Timgad | `teal-text` · .13 (.62 on the share card) |
| `coin-king.webp` | 320 × 320 | A coin: a laureate, bearded male profile | Pl. III — Monnaies numides / Pl. III — Numidian coins | `crimson-text` · .5 |
| `coin-horse.webp` | 320 × 320 | A coin: a prancing horse | Plate III | `crimson-text` · .5 |
| `coin-palm.webp` | 320 × 320 | A coin: a date palm with fruit | Plate III | `crimson-text` · .5 |
| `lighthouse.webp` | 1100 × 595 | A lighthouse on a rocky cliff above the sea | Pl. IV — Cap Carbon · Béjaïa | `teal-text` · .16; its beam a `crimson-text` wash at 30% |
| `dunes.webp` | 1500 × 596 | A sea of dunes with a small camel caravan on a ridge | Pl. V — Le Grand Erg / Pl. V — The Grand Erg | `crimson-text` · .2 |
| `bench.webp` | 1100 × 614 | The workbench seen from above: a laptop with code, a sketchbook of logo sketches, compass, ruler, coffee cup, a note; **no person** | none (behind the founder card) | `teal-text` · .1 |
| `lantern.webp` | 560 × 835 | An ornate pierced hanging lantern on a chain | none (the FAQ's gutter) | `crimson-text` · .6, with a 1px chain line above |
| `px-plan.webp` | 1600 × 679 | An architectural floor-plan grid: a texture | none (behind Services) | `teal-text` · .12 |
| `px-contour.webp` | 1400 × 594 | A topographic contour-line field: a texture | none (behind Pricing) | `crimson-hi` · .1 |
| `px-stars.webp` | 1600 × 679 | A star chart and constellation grid: a texture | none (behind Contact) | `teal-text` · .1 |

Arabic captions [AR à relire]: «لوحة 1 — جبال البيبان · برج بوعريريج», «لوحة 2 — قوس تراجان · تيمقاد», «لوحة 3 — نقود نوميدية», «لوحة 4 — رأس كاربون · بجاية», «لوحة 5 — العرق الكبير».

## Plate I is three layers

Stack `vista-far.webp`, `vista-mid.webp` and `vista-near.webp` back to front, each wider than the frame and hanging below its bottom edge. A mask cannot hide what lies behind it, so before inking each layer, fill its skyline with a `void`–`navy` mix, darker toward the viewer (the site uses 62% `navy` for the far fill and 30% for the middle), so the near palms stand in front of the ridge. Over the sky the site sets small stars in `muted`, a moon in `crimson-text` and a constellation in `teal-text` that draws itself once.

## Do

- Start a piece with a plate when it is about the place, the brand or the studio: the Bibans for Bordj Bou Arréridj, the arch for the work, the coins for prices, the lighthouse for contact, the erg to close.
- Use the workbench (`bench.webp`) where a piece would otherwise want the founder's face.
- Use the three textures as quiet backgrounds behind a section's content, never as a figure.
- Number plates I to V as the site does today.

## Don't

- Don't show a file white-on-black, tint it with a gradient, add a glow, or set text over its dense line work (a caption sits on its `void` chip).
- Don't caption `vista-mid.webp` as the Medracen: it is a generic round tomb.
- Don't let `coin-king.webp`, or any figure, stand for the founder.
- Don't draw a plate under about 90px, or crop it so the subject is lost.
- Don't number with the marketing kit's old scheme (a strata plate as IV, the lighthouse as V, the erg as VI): the strata plate left the site and is not in this system.
- Don't make new engravings or "matching" images in this style.
