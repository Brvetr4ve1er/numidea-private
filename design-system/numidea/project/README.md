Numidea Labs is a web and software studio in Bordj Bou Arréridj, Algeria (`hero.eyebrow`). It designs, builds, launches and supports websites and web apps in French, English and Arabic, with the Arabic built natively right to left (`meta.desc`, `faq3.a`). Its founder is Yasser Hamisse, graphic designer and web developer, freelance since 2019 (`founder.role`, `fx2.when`). It publishes its prices, three packages from 90 000 DA (`price.t1name`…`price.t3e`, `PRICE_MODEL`), and its signature offer, L'Aperçu, builds a registered business's homepage with its own content before any payment (`prev.brief`, `prev.terms`). The identity is an engraved atlas of the region the studio works from, as the footer line says: « Enraciné en Numidie · bâti sur des idées » (`footer.tag`).

Use this system to make the studio's marketing: posts, carousels, ads, decks and landing pages, in the site's own themes, type and engravings. Keys in parentheses such as `prev.terms` are the site's dictionary keys in `assets/app.js` (French, English and Arabic blocks); quote those strings, never paraphrase them into new facts.

**Read `claims.md` before writing any copy.** The live site still carries sentences that are barred from marketing (a team size, « 6 ans », client counts, a client that is never named, tool names). A line is not safe because the site prints it. Then:
- `business.md` for the offer, the prices, the services and the project sheets, each figure with its source;
- `copy-library.md` for ready lines, sorted by pillar and by the gate each one needs;
- `marketing.md` for the plan: markets, channels, gates, cadence, measurement;
- `market.md` for what buyers in Algeria, France and the Gulf expect, and where the studio stands;
- `project.md` for the website, the October 2026 audit and the owner's open items.

Every Arabic string in this system is marked **[AR à relire]**: it is the site's own copy or a restatement of it, and it awaits a native speaker's review. Publish no Arabic until that review is done.

---

## Content fundamentals

### Voice

- Write calm, exact and unhurried, like the engraved atlas the site is drawn as. Prefer one plain sentence to three clever ones.
- Say what the buyer gets and what a visitor can do. Never say what changed for a client: the project sheets were written with no metric, no result, no "more" and no "increased", and marketing keeps that rule.
- Restate, never add. A rewrite may shorten or simplify a site line; it may not add a number, a feature, a client, a promise or a result.
- Use the site's short paired fragments for rhythm: « Zéro risque. Juste la preuve. » (`prev.promise`), « Pas une fourchette, un chiffre. » (`prev.tl2p`), « Un prix avant le devis. » (`price.title`).
- No superlatives or rankings (« meilleur », « n°1 », « leader », « le seul studio qui… »), no urgency, no "places left" counter, no discount, no exclamation mark (the French dictionaries contain none), no emoji.
- Never compare the studio with a named seller. Comparisons with market prices appear only with the fixed sources line from `business.md` (« Sources : … ») in the caption or on the visual. That line names kinds of source, never a studio, an agency or a platform.

### Who speaks, and to whom

- The studio speaks as « on » in French, the site's register: « On conçoit, on code, on livre et on suit vos sites et applications » (`meta.desc`), « On revient sous 24 h ouvrées » (`prev.tl2`). « Nous » and « nos » appear where they read better: « Nos prix, publiés » (`price.lead`). English uses "we"; Arabic uses first-person plural verbs: «نصمّم ونبرمج ونطلق» (`meta.desc`) [AR à relire].
- Address the reader as « vous » in French, "you" in English and the singular "you" (أنت) in Arabic, the site's convention.
- The founder says « je » in one line only, his own: « Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement. » (second sentence of `founder.bio`; the first sentence is barred).
- Never write "the team", "our specialists" or a headcount. Name « Numidea Labs », « le studio », or the founder, Yasser Hamisse.

### Each language

| | French | English | Arabic [AR à relire] |
|---|---|---|---|
| Role | The site's default language. First in Algeria, the only language for France | The Gulf (with Arabic) and YouTube | Algeria (after French) and the Gulf |
| Register | « vous », short declaratives, verbless pairs | "you", plain business English; restate the French, never translate idioms. "Data, not vibes." (`f5.promise`) reads as slang to business buyers: use the brief instead | Singular "you"; brand names in Latin script, except نوميديا in prose (نوميديا لابز) |
| Language list | Reader's language first: « en français, anglais ou arabe » (`hero.title`) | "in English, French and Arabic" (`hero.title`) | «بالعربية والفرنسية والإنجليزية» (`hero.title`) |
| Price | « env. 90 000 – 160 000 DA » | "about $670–1,200 excl. tax" | «نحو 90 000 – 160 000 دج» |
| Call to action | « Demander mon Aperçu gratuit → » (`hero.cta1`, Gate B) | "Request my free Preview →" | «اطلب معاينتك المجانية ←» |

- One language per piece. Never set French and Arabic in one frame, except a demonstration of the site's language switch, captioned in French.
- Pieces aimed at France show French-only screens, mock-ups included.
- Gulf pieces say the studio is based in Algeria, every time.

### Casing

- Headings and buttons in sentence case. Headings end with a full stop, as every section title on the site does: « Réalisations choisies. » (`work.title`), « Les questions qui comptent. » (`faq.title`). Buttons end with an arrow, not a full stop: « Obtenir le prix ferme → » (`price.estCta`).
- Capitals only through the mono styles `kicker`, `mono-label` and `plate-caption`, which set uppercase with text-transform. Type them in sentence case: `04 — Tarifs` renders as 04 — TARIFS. Never type running text in capitals.
- In Arcanum, Cinzel draws lowercase as small capitals: type the heading in sentence case and let the face do the rest.
- Names keep their form: « Numidea Labs » (two words), « L'Aperçu » as a name and « l'Aperçu » in running text (`faq2.a`: « Voir aussi l'Aperçu »), the packages « Essentiel », « Studio », « Moteur »; in English "The Preview", "Essential", "Studio", "Engine".
- Kickers: two digits, a space, an em dash, a space, one word: « 04 — Tarifs » (`price.kicker`), « 07 — Contact » (`contact.kicker`).

### Numbers, prices and units

- Digits, always, in all three languages, and Western digits in Arabic: « 5 jours ouvrés », « 24 h ouvrées », « 2 à 4 semaines ».
- French groups thousands with U+202F, the narrow no-break space: « 90 000 », « 1 200 000 ». English uses commas: "90,000 DZD". A figure is one unit and never wraps.
- Ranges: an en dash. French and Arabic hold it with no-break spaces, « 90 000 – 160 000 DA »; English closes it up, "€1,500–6,000", "90,000–160,000 DZD". A range never breaks across lines.
- Currency follows the figure in French and Arabic (« 600 – 1 100 € », «90 000 دج») and precedes € and $ in English ("$670–1,200"). Dinars are « DA » in French, "DZD" in English, «دج» in Arabic.
- In marketing every price starts with « env. » / "about" / «نحو». Euro and dollar prices add « HT » / "excl. tax". **Dinar prices carry no tax label** until the owner and the accountant say whether they are before tax; the site's dinar cards carry none either.
- Euro and dollar figures are the site's rounded conversions at the Bank of Algeria official rate of October 2026 (1 € ≈ 151 DA, 1 $ ≈ 134 DA, `price.curNoteEUR`, `price.curNoteUSD`). Put that note in the caption, never on the visual, and stop before its VAT sentence.
- No price at all for the Gulf: no AED or SAR price exists.
- Percent: « +25 % » in French with a no-break space (`md.d6p`), "+25%" in English.
- The hero's coordinates are written with prime marks: « 36°04′N · 4°46′E ».

### French typography

- Before « ; », « ! » and « ? » set U+202F, the narrow no-break space. Before « : » and inside « » set a no-break space: BRAND.md specifies U+00A0, and the dictionaries also use U+202F before the colon. Either is right; an ordinary space never is, because a line could then begin with the mark. The site's check refuses a breakable space before ? ! ; : ».
- Plate captions hold « Pl. » to its numeral with U+00A0: « Pl. II — Arc de Trajan · Timgad ».
- Quote in « » with inner no-break spaces in French and Arabic; English uses “ ” (`faq4.a`: No “good luck” on launch day).
- The em dash, spaced, opens a clause in all three languages: « Sites et applications web sur mesure — rapides, bien référencés… » (`f1.brief`).
- The middle dot, spaced, separates list items on one line: « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » (`prev.terms`).

### Arabic: right to left, Western digits

- Mirror the whole layout (`dir="rtl"`) and right-align Arabic text. Forward arrows point left: «اطلب معاينتك ←» (`prev.cta`) [AR à relire].
- Set every Arabic word in IBM Plex Sans Arabic (`arabic-display`, `arabic-section-title`, `arabic-lede`, `arabic-body`, `arabic-label`). Never letter-space Arabic: tracking breaks the joins of the script, so every Arabic style here has `letterSpacing` 0.
- Mono labels in Arabic use the `mono-rtl` family: Arabic letters take Plex, Latin letters and digits keep Geist Mono.
- Western digits (0–9) everywhere; the site's check fails on any Arabic-Indic digit.
- The wordmark stays in Latin script and left to right, even on an Arabic page.
- On phone formats set Arabic 10–15% larger than the Latin size with a line height of 1.5 or more, and never start a line with a Latin word. Durations as the site writes them: «من 2 إلى 4 أسابيع» (`price.t1time`) [AR à relire].

### Real copy from the site

| Key | French | English |
|---|---|---|
| `hero.eyebrow` | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Web & software studio · Bordj Bou Arréridj, Algeria |
| `hero.title` | Votre site sur mesure, *en français, anglais ou arabe.* | Custom websites, *in English, French and Arabic.* |
| `price.title` | Un prix *avant le devis.* | A price *before the quote.* |
| `price.estFine` | Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. | An indicative range, not a quote. The firm price follows once we have scoped it together — and it does not move after that. |
| `price.t1b` | Design sur mesure — jamais un modèle tout fait repeint à vos couleurs | Custom design — never a re-themed template |
| `md.d3p` | Chaque langue ajoute du contenu ; l'arabe ajoute une mise en page de droite à gauche. | Each language adds content; Arabic adds a right-to-left layout. |
| `faq4.a` (part) | Pas de « bonne chance » le jour de la mise en ligne. | No “good luck” on launch day. |
| `prev.promise` (Gate B) | Zéro risque. Juste la preuve. | Zero risk: see it before you pay. |
| `contact.sub` | Dites-nous ce qu'il vous faut : une urgence à traiter, quelque chose à corriger, une échéance à tenir. En français, anglais ou arabe. | Tell us what you need: an urgent job, something that needs fixing, a deadline to meet. In English, French or Arabic. |
| `form.note` (part) | Ce site ne conserve pas votre message. | This site does not keep your message. |
| `footer.tag` | Enraciné en Numidie · bâti sur des idées | Rooted in Numidia · built on ideas |

Arabic of the same keys: `hero.title` «موقعك المخصّص، بالعربية والفرنسية والإنجليزية.», `price.title` «سعر قبل عرض السعر.», `footer.tag` «جذورها في نوميديا · مبنيّة على الأفكار» [AR à relire].

---

## Visual foundations

### The six themes

All six themes set the same tokens with different values (`assets/themes.css`); each token's note in `tokens.json` gives its value and contrast in every theme. **Arcanum is the brand.** Start every piece in Arcanum.

| Theme id | Character (BRAND.md) | Ground `void` · ink `ice` | Primary accent `crimson` | Secondary `teal` | Headings | `r-sm` / `r-md` | Use in marketing |
|---|---|---|---|---|---|---|---|
| `arcanum` | Arcane blue and brass, engraved Cinzel display | #0a1420 · #eaf1f8 | brass #e6b450 | electric teal #34d0e8 | Cinzel 700, .01em; swash in Cinzel Decorative | 8 / 14px | The default for every piece: launch, brand, prices, method, covers, end cards, all markets |
| `noir` | Cinematic black, signal red, steel | #0b0b0e · #f2f2f4 | signal red #e5484d (text #ff6b6f) | steel #c9ced6 | Geist 700, −.035em | 6 / 10px | One excursion inside a piece; the plan gives it the strategy-service piece |
| `daylight` | Warm paper, ink, ochre and deep teal | #f6f3ec · #15181d | ochre #8c5e0a (text #7a5208) | deep teal #0e6e78 (text #0b5f68) | Geist 600, −.03em | 10 / 16px | The one light ground: a piece that must read like paper; the plan gives it the market-intelligence piece |
| `mono` | True black and white, no colour | #0a0a0a · #f5f5f5 | white #f5f5f5 | grey #bdbdbd (text #d4d4d4) | Geist 500, −.035em | 2 / 4px | Only inside a theme cycle |
| `altneon` | Synthwave violet, magenta and cyan | #0c0716 · #f4eeff | magenta #ff3ea5 (text #ff62b5) | cyan #3ee6ff | Geist 700, −.025em | 10 / 18px | Only inside a theme cycle |
| `engineering` | Graphite, safety orange, drafting grid | #0e1012 · #eceff1 | orange #ff5b1f (text #ff7a45) | #8ec5e8 | Geist 600, −.03em | 2 / 4px | One excursion inside a piece; the plan's alternative excursion for the Aperçu cut |

- Keep a piece in one theme. A single excursion into a second theme is allowed once per piece, and a theme cycle (one card re-inked through three or six themes) is allowed only where the subject is the system itself: « un site, six thèmes ».
- Never take colours from outside the tokens. The favicon's teal-white-red gradient predates the six themes and is not a palette.

### Colour roles

- **Ground:** `void` under everything. `navy` for cards and panels, `plum` for a raised surface, `band` as a translucent wash behind an alternating section (on the site it fades in and out over clamp(56px, 8vw, 120px), never a hard edge).
- **Ink:** `ice` for headlines, titles and prices (16.06–18.16:1 on `void` across the six themes); `body-strong` for long copy; `muted` for secondary lines, captions and labels; `faint` for tertiary keys only, and only on `void`, `navy` or `field-bg`, never on `plum`.
- **Primary accent:** `crimson` is a FILL: the primary button, the kicker's rule, the corner brackets, the wordmark's cursor block. Text on it is `on-crimson`, never `ice` or white (ice on Arcanum's brass is 1.67:1). As text, the accent is `crimson-text`: kickers and the emphasised words of a heading. `crimson-hi` is the fill's highlight; its one text use is the founder's monogram at 26–46px bold, because in Daylight it reaches only 3.66:1 on `void` and about 3.0:1 under the roundel's crimson light (`FounderCard`).
- **Secondary accent:** `teal` is a FILL: focus rings, tier ticks, the live dot, hover borders, the pressed language button (with `on-teal`). As text it is `teal-text`: the hero eyebrow, the swash line, « idea » in the wordmark, bold words in a lead, and the ink of most engravings. Ration it: the brand's teal is "electric teal as rationed neon".
- **Never set text in a fill token.** `teal` as text fails on Daylight and `crimson` as text fails on the dark themes; the site corrected 49 rules for this.
- **Rules:** `hairline` for quiet 1px separations, `hairline-2` for interactive edges (pills, fields, ghost buttons). Both measure under 3:1, so a hairline never carries meaning alone.
- **The heading pattern:** the heading in `ice`, its closing words in `crimson-text`: « Un prix *avant le devis.* », « Parlons de *votre projet.* » (`contact.title`). The hero is the one exception: its second line is `teal-text` in `hero-swash`.
- **Client colours** (a project's own brand colour) are never set as text directly; the site mixes them 55% with 45% `ice`. Client material needs that client's written permission first (`claims.md`).

### Type

The faces ship in `fonts/` (woff2 subsets under the SIL Open Font License 1.1, `assets/Fonts/OFL.txt`; the licence does not restrict images or documents made with them). Never substitute another face.

| Family key | Face | Where |
|---|---|---|
| `deco` | Cinzel 700 | Arcanum headings and the wordmark |
| `deco-dec` | Cinzel Decorative 700 | Arcanum's swash line and the contact heading's emphasis |
| `display`, `body` | Geist 400–700 | All running text; headings and the wordmark in the five other themes |
| `mono` | Geist Mono 400–700 | Kickers, labels, buttons, pills, prices' currency, captions |
| `arabic`, `mono-rtl` | IBM Plex Sans Arabic 400, 600, 700 | Every Arabic word; mono labels in Arabic |

- **Display.** In Arcanum set the headline in `hero-title` (Cinzel 700, line height 1.03, .01em) with its second line in `hero-swash` (Cinzel Decorative, `teal-text`), and section headings in `section-title` (1.04). In the other five themes use `hero-title-sans` (Geist 700, −.035em, .97 at Noir's values; each theme's own weight and tracking are in its note). Arabic headings: `arabic-display` (600, line height 1.3) and `arabic-section-title`.
- **Cinzel is Arcanum's alone.** A piece in any other theme never uses Cinzel or Cinzel Decorative, for headings, the wordmark or a cover's name. `components/bundle.css` follows this by itself: with `data-theme` on the page's root, headings (`sec`) and the wordmark (`logo`) take the theme's own face, weight and tracking.
- **Text.** `lede` (18px / 1.5) for the lead under a headline, `body` (16 / 1.6), `body-card` (15 / 1.6) inside cards, `small` (13 / 1.6) for notes and sources. Measure: about 29–30em for a lead.
- **Titles and figures.** `card-title` (Geist 600, 22 / 1.2) for every card title; `feature-title` (30 / 1.15) for a package name, the Aperçu's title or the founder's name; `price` (Geist 700, −.02em) followed by `price-currency` (Geist Mono, .06em, `teal-text`).
- **Labels.** `kicker` (Geist Mono 11px, uppercase, .14em, `crimson-text`), `mono-label` for every other caption, `pill`, `button` (Geist Mono 14px 700), `plate-caption` (11px, .14em, `muted` on a `void` chip).
- The pixel sizes above are the site's desktop sizes. On social canvases keep the hierarchy and use the sizes under "Marketing formats".
- **The wordmark.** There is no drawn logo: always set the name in type with the `logo` style: « Num*idea* Labs », Cinzel 700 at .04em in `ice`, « idea » in Geist 600 `teal-text`, then a solid `crimson` block (9 × 20px at the 22px size, scaled with it) with `glow-crimson` at the navbar and footer sizes. Scaled up (an end card, a poster), the block keeps its proportion and drops the glow (`logo-scaled` on the wrapper): never scale the glow with the mark, which would turn its 1px ring into an outline and its halo into a bloom. The block never blinks. In the other themes the whole mark is Geist (700 in Noir and Alt-neon, 600 in Daylight, Monochrome and Engineering). Always left to right in Latin script.

### The engraved plates

The atlas is the brand's image. Fourteen engraved files (`assets/Engravings`: eleven engravings and three background textures) and six line drawings (`assets/Line drawings`) are the whole set: white line art on pure black, generated in earlier image runs and closed now. No new ones are made, and none is ever described as hand-engraved, hand-made or « sans IA ».

- **Never show a plate as a picture.** Use it as a luminance mask over a theme ink, so one file re-inks itself in every theme:
  ```css
  .plate-ink{background:var(--teal-text);
    -webkit-mask-image:url(<the file's URL>);mask-image:url(<the file's URL>);
    -webkit-mask-size:contain;mask-size:contain;
    -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
    -webkit-mask-source-type:luminance;mask-mode:luminance}
  ```
  Keep both the `-webkit-mask-source-type` and `mask-mode` lines. Where a mask cannot be used (an exported image), recolour the white lines to the theme ink and the black to transparent; never show white-on-black.
- **Ink and strength.** Ink each plate as the site does, then multiply the opacity by the theme's ink strength (`--ink-k`: Arcanum 1, Noir .85, Daylight .6, Monochrome .55, Alt-neon 1, Engineering .8). Behind text, keep the site's watermark strength; as the sole figure of a frame with no text over it, ink it stronger: the share card sets Plate II in `teal-text` at .62, framed in a `hairline-2` box with `crimson-text` corner brackets (the `Plate` card's `pi-figure` modifier).

  | Plate | File(s) in `assets/Engravings/` | Caption (FR) | Ink | Site strength |
  |---|---|---|---|---|
  | I | `vista-far.webp`, `vista-mid.webp`, `vista-near.webp` | Pl. I — Les Bibans · Bordj Bou Arréridj | far `muted`, middle `teal-text`, near `body-strong` | .32, .42, .26 |
  | II | `arch.webp` | Pl. II — Arc de Trajan · Timgad | `teal-text` | .13 |
  | III | `coin-king.webp`, `coin-horse.webp`, `coin-palm.webp` | Pl. III — Monnaies numides | `crimson-text` | .5 |
  | IV | `lighthouse.webp` | Pl. IV — Cap Carbon · Béjaïa | `teal-text`; the beam in `crimson-text` at 30% | .16 |
  | V | `dunes.webp` | Pl. V — Le Grand Erg | `crimson-text` | .2 |
  | — | `bench.webp` (the workbench, no person) | none | `teal-text` | .1 |
  | — | `lantern.webp` | none | `crimson-text` | .6 |
  | — | `px-plan.webp`, `px-contour.webp`, `px-stars.webp` (textures) | none | `teal-text`; `px-contour.webp` in `crimson-hi` | .12, .1, .1 |
  | — | `assets/Line drawings/faq1.png` … `faq6.png` | none | `teal-text` in a 92px `void` tile | 1 |

- **Captions** in `plate-caption`, `muted` on a solid `void` chip (padding 3px 7px, radius 3px), because small type over dense line work fell under 4.5:1. Number the plates as the site does today, I to V. English: « Pl. I — The Bibans · Bordj Bou Arréridj », « Pl. II — Arch of Trajan · Timgad », « Pl. III — Numidian coins », « Pl. IV — Cap Carbon · Béjaïa », « Pl. V — The Grand Erg »; Arabic «لوحة 1 — جبال البيبان · برج بوعريريج» to «لوحة 5 — العرق الكبير» [AR à relire], in Plex Arabic 11px without tracking. The marketing kit's older numbering (a plate IV of strata, the lighthouse as V, the erg as VI) is out of date.
- **Depth.** Plate I is three layers. Masks cannot hide what lies behind them, so fill each layer's skyline with a `void`–`navy` mix, darker toward the viewer, before inking it.
- **Size.** Never draw a plate or a drawing smaller than about 90px across: the detail collapses into smudges.
- **Never** caption the middle layer of Plate I (`assets/Engravings/vista-mid.webp`) as the Medracen: it is a generic round tomb. Never let `assets/Engravings/coin-king.webp` or any figure stand for the founder.

### The construction grid and the atmosphere

- Draw the grid as the site does, at the top of the frame only: 1px lines in `grid-color` every 64px (48px in Alt-neon, 32px in Engineering), at the theme's grid opacity (Arcanum .07: the brass grid; Noir .035, Daylight .045, Monochrome .04, Alt-neon .06, Engineering .09), masked away by about 76% of the frame's height so it never sits behind body copy. It is a drafting sheet, not a pattern: no honeycomb, no noise, no film grain.
- Under the grid, each theme lays two or three soft radial glows (Arcanum: a brass crown top right, a teal glow top left, a deep floor). That is the whole atmosphere: no aurora, no colour fields.

### Drafting devices

- **Kicker.** A 32px rule fading from `crimson` to transparent, an 8px gap, then the kicker text in `crimson-text`. Arcanum adds a 6px rotated square in `crimson` (the other themes have none). In Arabic the rule fades the other way.
- **Corner brackets.** 1px `crimson` L-brackets, 14–15px long, at the four corners of a framed plate, screenshot or sheet (`.pk`, `.sheet-frame .sf`; .75 opacity on the sheet frame, whose own edge is `muted` at 15%).
- **Dimension line.** A hairline with end ticks and a mono label: the hero's « 36°04′N · 4°46′E ».
- **Title block.** A strip of labelled fields along the bottom of a sheet: keys in `mono-label` and `faint`, values in `ice`. Every value must be true and checkable: « Studio · Numidea Labs, Bordj Bou Arréridj, Algérie », « Langues · FR · EN · AR », « Réponse · < 24 h ouvrées », and « Aperçu · Gratuit · 5 jours ouvrés à réception de vos contenus ». That last field is Gate B only, and only in a frame that also carries the short conditions line (« Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. »), with the full line in the caption. Never the site's « En ligne · 4 sites clients » field.

### Borders, shadows and radii

- Separate with 1px borders, not shadows: `hairline` around cards, FAQ items and table rules, `hairline-2` on pills, fields, ghost buttons and the founder card.
- The only shadows are the glow tokens: `btn-glow` on the primary button at rest, `glow-crimson` on its hover and on the wordmark's block, `glow-teal` on focus. No neon bloom, no glow on type, no drop shadow under a card on a visual.
- Radii follow the theme: `r-sm` for buttons, fields and glyph tiles; `r-md` for cards and plates; `r-lg` equals `r-md` (panels share the card radius); `r-pill` is 4px in every theme, a squared chip, never a capsule.
- Never draw a rounded card with a coloured left border.

### Components as the site draws them

Each has a static card in this system (`Button`, `Pill`, `Kicker`, `Plate`, `Wordmark`, `TierCard`, `ApercuCard`, `FounderCard`, `ProjectCard`, `TrustLine`, `LanguageSwitch`, `FormField`); read a card's guidelines before reusing it on a visual. Four more cards are intentional additions, because the site has no social formats: `StoryFrame`, `CarouselPage`, `PricePost` and `EndCard` set those components on the canvases, safe zones and sizes under "Marketing formats". Start a piece from one of them.

- **Buttons** (`button` style, padding 14px 28px, `r-sm`, 1px border). Primary: `crimson` fill, `on-crimson` label, `btn-glow`. Teal: transparent, `teal-text` label, `teal` border. Ghost: transparent, `ice` label, `hairline-2` border. Labels end with « → » (« ← » in Arabic).
- **Pills** (`pill` style, padding 5px 11px, `r-pill`, `hairline-2` border, `muted` text). A dashed border marks a portfolio demo, never client work.
- **Cards** on `navy` with a `hairline` border and `r-md`: one marker each, a number or an icon, never both, and no decorative drawing beside the icon.
- **Package cards**: name in `feature-title`, the line it is for in `body-card`, the price in `price` + `price-currency` (in marketing « env. » before the figure, and « DA » with no tax label), the duration in `mono-label` `faint` above a `hairline` divider, the list in `body-strong` with `teal` ticks. Studio carries the badge « Recommandé » (`price.popular`) in `void` on `teal-text`.
- **The Aperçu card**: tag « Offre signature », title « L'Aperçu » in `feature-title`, the promise, the brief, the five-step path ending on « Payé jusqu'ici : 0 DA » (never the site's next sentence, `prev.tl5p`), the conditions line, the button. Gate B only (`marketing.md`).
- **The founder card**: the monogram « Y » in `crimson-hi` on a disc where a photo would be, name in `feature-title`, role in `mono-label`. It stays a monogram until the founder supplies a real photo.
- **The proof line**: one line of facts held together by spaced middle dots. On the site it opens with « 4 sites livrés », a barred client count; on a visual use only « Réponse < 24 h ouvrées · FR · EN · AR ».
- **Language switch**: three buttons, « FR », « EN » and « ع », in Geist Mono 12px, `muted`, side by side inside one `hairline-2` border with `r-pill` corners; the current language is a `teal` fill with an `on-teal` label.
- **Form fields** (landing pages): `field-bg` fill, `hairline-2` border, `r-sm`, text in `ice`, placeholder in `faint`, label in `mono-label` `muted`. Focus adds the 2px `teal` outline and `glow-teal`; an invalid field takes a `crimson` border and its message in `crimson-text`. Keep the site's privacy line under a form only if it stays true: « Ce site ne conserve pas votre message. »
- **Project cards**: a screenshot, a category, a description and a benefit line. With no client permission yet, only the Glaive demo (badged « Démo portfolio ») or WorkspaceHQ may fill one.

### Spacing and layout

- Space on the nine-step scale: `s-2` 8px, `s-3` 12, `s-4` 16, `s-5` 24, `s-6` 32, `s-7` 48, `s-8` 64, `s-9` 96, `s-10` 128 (there is no `s-1`). Kicker to heading `s-5`; heading to content `s-7`; card padding `s-5` to `s-6`; section padding `s-9`.
- Web layouts: content at most 1200px wide with a 48px gutter; sections pad clamp(72px, 7vw, 112px) from 961px up; 960px is the phone boundary.
- Every section, and every slide, is a kicker, a heading and a lead, then one thing: a plate, a card, a list or a figure. One display size and one accent colour per heading.
- Set text on solid theme surfaces, never directly over a screenshot or over a plate's dense line work.
- Said once: a fact appears once per piece. The site removed its second telling of the method for that reason.

### Motion

- House easing `cubic-bezier(.16,1,.3,1)`; durations .2s (small state changes), .3s (base), .7s (reveals). A reveal is a 12px rise with a fade over .7s; the hero rises over .9s.
- Wipe screenshots, never cross-fade them: a hard edge led by a bright `crimson-hi` rule keeps both images sharp.
- Nothing loops forever. A loop plays a few cycles (three by default) and settles; the site's audit fails on any infinite animation. No blinking cursor, no drifting colour fields, no pulsing dots.
- The plates move slowly and stop: parallax drift, the coins turning, the lighthouse beam, the lantern's swing, a constellation drawing itself. Icons draw in once, then idle a few cycles.
- Under `prefers-reduced-motion: reduce` nothing moves: no animation, no transition, reveals shown at rest, the wipe removed. Every animated piece (a GIF, a landing page, a deck transition) has a still version that carries the whole message.
- The tone is calm, not spectacle.

### Imagery

- Use only: the engravings and line drawings in this system, type, theme tokens, coded geometry on the icon grammar below, and captures of the studio's own site (named regions only: see `claims.md`), shown in a browser frame with a blank address bar.
- No stock photos. No generated images, footage, voices or music. No new engravings.
- **No faces.** Never generate, draw or imply a face for the founder. The monogram « Y » or the workbench engraving (`assets/Engravings/bench.webp`, seen from above, no person) stands in for him.
- Client screenshots, names and logos appear only after that client's written permission. None has been given.
- Mock-ups use fictional businesses labelled « exemple », and never a client's site presented as an Aperçu.
- Gulf pieces: no flags, landmarks, emblems or local-office look. France pieces: French-only screens.

### Legibility

- Use the text-and-ground pairs that each token's note lists; every one holds 4.5:1 or more in all six themes. Check later themes too: Daylight inverts the ground.
- Large bold type (24px+, or 19px+ bold) may drop to 3:1; that is the only room `crimson-hi` has in Daylight.
- The keyboard focus ring on a landing page is a 2px solid `teal` outline at a 3px offset (at least 5.38:1 on `void`), plus `glow-teal` on fields.

---

## Iconography

- The site draws its own icons as inline SVG: eleven service glyphs and twenty-one animated icons. There is no icon library, no icon font, no raster icon and no emoji. This system ships no icon files; draw any new icon on the same grammar.
- **Grammar:** `viewBox="0 0 24 24"`, stroke 1.5, `currentColor`, no fill, round caps and joins; straight runs, true circles and 45° diagonals, no freehand curves; every mark inside the 24 × 24 frame. Each drawable part is a stroked path, so it can draw itself in.
- **Glyph tiles:** 46px square, `hairline-2` border, `r-sm`, the icon at 26px in `teal-text`.
- **Each icon is specific to what it labels:** a registration mark for L'Aperçu, a viewport for web, three plates in register for identity, a two-into-one route for pipelines, a scope with an off-centre reading for market intelligence, steps and a vector for growth, a drilled tag for commerce, a ruled artboard for graphic design, axes and a series for data, a hub-and-four graph for knowledge systems, a pinned die for AI tools.
- **Text glyphs:** « → » ends a call to action (« ← » in Arabic), « ↗ » marks an external link, « ↓ » a download, « · » separates items, « — » follows a kicker's number, « ◆ » opens the project-sheets kicker.

---

## Marketing formats

Four cards set these rules on real canvases, at their pixel sizes: `StoryFrame` (9:16, with the safe box drawn as a guide), `CarouselPage` (4:5), `PricePost` (the three packages in marketing form) and `EndCard` (the last frame, 9:16 and 4:5). Copy their markup, change the copy from `copy-library.md`, and keep their sizes.

### Canvases

| Ratio | Size | Where |
|---|---|---|
| 9:16 | 1080 × 1920 | Instagram and Facebook Reels and Stories, TikTok, YouTube Shorts, WhatsApp Status |
| 4:5 | 1080 × 1350 | Instagram feed posts and carousels (5–8 frames), LinkedIn posts and document carousels (6–10 pages) |
| 1:1 | 1080 × 1080 | LinkedIn document pages, square posts |
| 16:9 | 1920 × 1080 | YouTube, decks, the hero of a landing page |

### Safe zones

- **9:16:** Reels cover the top 14% (about 270px), the bottom 35% (about 672px) and 6% on each side (about 65px); TikTok's button rail takes about 140px on the right and follows the viewer's app language, not the piece's. Keep all text and key visuals inside **one box for every language: x 140–940, y 290–1240**. Right-align Arabic inside the same box. Below y 1240, decoration only: plates, grid, texture.
- **4:5:** keep 5% margins (54px); that also clears the 34px Instagram's 3:4 profile-grid crop takes off each side. A 4:5 cut of a 9:16 frame is its y 285–1635 band, with the text block re-centred.
- **1:1 and LinkedIn:** 5% margins.
- **16:9:** for a phone held upright the frame shows about 390px wide, so size text as below.

### Text sizes for phones

| Canvas | Hook / headline | Body | Small print (conditions, « env. », « HT ») |
|---|---|---|---|
| 1080 × 1920 | 96–140px, at most 3 lines of 16–20 Latin characters | 60–72px, at most 3 lines of 26–30 characters | 44px or more, repeated in the caption |
| 1920 × 1080 | 56px or more for anything read | 56px or more | 64px or more, or a full frame of its own |

- Arabic: 10–15% larger than the Latin size, line height 1.5 or more.
- The hook is seven words or fewer, on the first frame. In motion, hold a hook at least 1.5s and give each block 0.35s per word plus 1s before the next block arrives; never bring in two new blocks at once.
- Scale `kicker`, `mono-label` and `plate-caption` up with the canvas; never set legal text smaller than the small-print size.
- Write the hook and the searchable phrase in the caption's first line. At most 5 hashtags on Instagram, 0–3 on LinkedIn.

### Per market

| Market | Language | Price on the visual | Before Gate B the piece ends with |
|---|---|---|---|
| Algeria (Facebook, Instagram) | FR, then AR | « env. … DA », a smaller ≈ € line | the wordmark, the label, « Lien en bio » |
| France (LinkedIn, Instagram) | FR only, French-only screens | « env. … € HT » | the wordmark, the label, « Lien en commentaire » on LinkedIn |
| Gulf (TikTok, Instagram) | EN, AR | none | the wordmark, the label (it says Algeria), "Link in bio" |
| YouTube | FR, then AR, EN | per language: DA (FR, AR), $ (EN) | the wordmark and the label |

- **End card:** the wordmark with the label « Studio web & logiciel · Bordj Bou Arréridj, Algérie » (`hero.eyebrow`); the motto `footer.tag` small, if there is room. **No URL, no email address and no `?ref=` code on a visual**: the code lives in the post's link only.
- **The Aperçu conditions go with every mention of the Aperçu**: in full where the frame gives them room, otherwise the short form on the visual and the full line in the caption (`copy-library.md`).

---

## What never appears

The full list, with the reason for each item, is in `claims.md`. In short, never show or say:

- a team size, « trois spécialistes », « 4 personnes », or any team member;
- a number of years (« 6 ans »); say « en freelance depuis 2019 »;
- a client count, a client result or metric, a client's own figures visible in a screenshot, a ranking, a testimonial, a quote, a review or a star rating;
- Nomara Voyages, in any form;
- any client's name, screenshot or logo before that client's written permission; the words « client » and « livré » for Bordj Steel and Alliance Travel until the owner decides how to describe each;
- tool or stack names (React, Next.js, Vercel and the rest), « open source », or the name of any AI model;
- a registration, legal form, RC, NIF, ANAE or « entreprise enregistrée » for the studio; VAT mechanics;
- payment terms, deposits or payment methods of any kind; ownership, hosting or revision promises; what support or maintenance covers;
- AED or SAR prices, « moins cher », or a comparison with a named seller;
- a face for the founder, a generated image, a stock photo, a new engraving;
- the Aperçu without its conditions, or as a headline or call to action before Gate B;
- Arabic that a native speaker has not reviewed.
