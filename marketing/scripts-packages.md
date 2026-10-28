# Numidea Labs: explainer scripts for L'Aperçu, the three packages and maintenance (FR / AR / EN)

PRIVATE. Never copy this file, or anything made from it, into `/home/user/STICKITTY.INC` (the public repository).
Written 2026-10-26 from the facts bank (repository at commit `82603b0`) and the research files in this folder. **Revised 2026-10-26 after review** (what changed, issue by issue: §10). Status: **scripts for owner review**. Nothing here may be published until its gates are open (§0.3).
Every Arabic string in this file is marked **[à relire par un arabophone natif]**. No Arabic is rendered for publication before a native speaker has signed it off.

**How sources are cited**

| Tag | Meaning |
|---|---|
| [FB §x] | `marketing/facts-bank.md`: what may be said, what may not, the assets |
| [ST §x] | `marketing/strategy.md`: slate IDs, calendar, gates, end cards, ref codes |
| [CH §x] | `marketing/channels.md`: formats, safe zones, reading time |
| [PL §x] | `marketing/pipeline.md`: render pipeline and components |
| [MU §x] | `marketing/music.md`: sound |
| [KIT §x] | The earlier campaign kit (vault `notes/campaign/`), as the strategy cites it. Its drafts are not owner decisions |
| BRAND.md, styles.css, themes.css, index.html | Files of the public site, read only, cited by line |
| `app.js:FR/EN/AR` | Site strings in `/home/user/STICKITTY.INC/assets/app.js`, three line numbers for the three languages |
| (site) / (restated) / (new) | Exact site string · site meaning, reworded more plainly or trimmed (✂) · new wording with no site source (labels only, never a fact) |
| **OWNER PREREQUISITE** | Something only the owner (or the owner's lawyer or accountant) can supply. The script does not fill it in |

**How the numbers in this file were produced.** Line counts were measured in Chromium with the site's own woff2 faces (Geist 500 at 64 px, line-height 1.2; IBM Plex Sans Arabic 600 at 72 px, line-height 1.5; an 800 px box in 9:16, a 900 px column in 16:9). Scene times were computed by a script from the final strings, with the rule in §1.3. Both tools are private, in `marketing/_review/measure-pk/` (`gen.mjs` + `run.mjs` for lines, `timing.mjs` for times). Re-run them on the reviewed Arabic before locking any timeline.

---

## 0. Summary

### 0.1 What is in this file

Lengths in seconds. "→" gives the value before and after Gate B (the end card changes; after B a conditions beat is added where the call to action names the Aperçu). DZ = the FR-DZ and AR-DZ cuts; Gulf = AR-GU and EN-GU.

| Slate ID [ST §5] | Video | 9:16 long master (DZ / Gulf) | 9:16 social cut, `len=short` (DZ / Gulf) | LinkedIn 4:5 (FR-FR) | 16:9 (YouTube, site) | Calendar [ST §8.2] | Section |
|---|---|---|---|---|---|---|---|
| V10 | **L'Aperçu** / The Preview / المعاينة [à relire par un arabophone natif] | 79.4 / 85.4 (Gate B only) | 44.1 / 50.1 | social cut, 50.4 | 78.4, 4 chapters (89.5 with S4b) | W10 if Gate B is open | §2 |
| V04 | **Essentiel** | 71.9 / 73.0 → 72.6 / 73.7 | 39.2 / 40.3 → 45.5 / 46.6 | long, 77.2 → 78.9 | 69.8 → 72.3, 3 chapters | W8 (W6 if Gate B is late) | §3 |
| V05 | **Studio** | 85.6 / 86.7 → 86.3 / 87.4 | 41.0 / 42.1 → 47.3 / 48.4 | social cut, 46.3 → 53.6 | 83.5 → 86.0, 3 chapters | W8 only if V04 ran in W6; otherwise next quarter | §4 |
| V06 | **Moteur** | 70.5 / 71.6 → 71.6 / 72.6 | 39.3 / 40.4 → 40.4 / 41.4 | long, 75.8 → 76.8 | 68.4 → 70.9 (**not rendered** until it has a slot) | Next quarter | §5 |
| V07 | **Maintenance** | 53.2 → 59.5 (DZ only) | none | long, 58.5 → 65.8 | 50.4 → 58.5 (**not rendered**) | On hold (T5, T6, X6) | §6 |
| V27 | **« Quelle formule pour moi ? »** | — | — | — (carousel optional, §8.6) | 81.3 → 98.5 | W11 if the W8 review keeps the hours | §7 |

**Where each file goes** (detail in each video's CTA table):
- **Instagram and Facebook Reels** take the long master (explainers up to 60–90 s [CH §1.5]; the strategy places the long master there [ST §5 V04]).
- **TikTok, YouTube Shorts, Instagram Stories and WhatsApp Status** take the social cut: hook, scope, weeks, price card (or the Gulf no-price line), end card. The firm line and the steps scene stay in the long versions.
- **LinkedIn 4:5** takes the long master when it runs 80 s or less (V04, V06, V07), otherwise the social cut in 4:5 (V05, V10).
- **16:9** is rendered only for videos with a calendar slot: V04 (W8), V10 (W10), V27 (W11), and V05 only if it takes W8. AR and EN 16:9 versions follow "as reviews allow" [ST §8.2 W10].

The lengths grew against the first draft (63.9–74.4 s). The 3-line limit splits several blocks into two (§1.3), the sequential reading budget is now applied to every block, and the end card became a sequence that gives the label, the market line and the call to action each their own reading time (§1.6). These are the honest lengths for the site's strings at this reading speed.

Each script has a scene table (time, coded visual with asset paths, on-screen text in FR, AR and EN, reading time, sources and flags), a social-cut timeline, a 16:9 adaptation, a CTA and `?ref=` table, and the list of questions the video cannot answer yet. Production, hours and QA are in §8, owner questions in §9, the change log in §10.

### 0.2 The choices that shape every script

1. **The facts bank is the only source.** On-screen text is the site's own string wherever one exists. Anything reworded is marked "restated" and keeps the site's meaning. "New" wording is used only for labels such as « Illustration » or « Lien en bio », never for a fact.
2. **The package explainers all follow the same order:** what the package is for → its scope, one line per scene → weeks and included support → the price as an indicative range → how the firm timeline and firm price are set → the four steps → end card. A buyer who watches two of them knows where to look. The social cut keeps the first four and the end card.
3. **Prices are the site's prices:** dinars as the reference, and euros or dollars only as the site's own rounded conversions (151 DA per euro, 134 DA per dollar).
   - **Dinar prices carry « env. » / «نحو» [à relire par un arabophone natif] and no tax label**, exactly as the site's DA cards (index.html:773, :790, :807, :822) and the estimator (app.js:1877 leaves the label off for DZD). No legal form or tax regime has been published, so « HT » on a dinar price would tell Algerian buyers that VAT will be added: an unbacked tax claim (⚑ T11).
   - **Euro and dollar prices keep « HT » / "excl. tax" / «غير شاملة الضريبة» [à relire par un arabophone natif]**, which the site's own notes state (app.js:378-379, :490-491, :605-606).
   - Gulf cuts show no price, because no AED or SAR price exists [FB §1.5].
4. **Some site lines are left out on purpose:**
   - Essentiel's « Mise en ligne, domaine et certificat configurés » [FB §2.1 #17];
   - « un forfait, sans frais cachés » (flag T4);
   - **« Quatre étapes. Zéro surprise. »** / "Four steps. No surprises." / «أربع خطوات. بلا مفاجآت.» [à relire par un arabophone natif] (the `#how` title, app.js:48/146/247): it makes the same promise as « sans frais cachés » while deposit, revisions, hosting and renewals (T1–T4) are undecided. The site's own Arabic for « sans frais cachés » is «دون مفاجآت» (app.js:286), almost the same words;
   - the superlative EN and AR outcome line of the Aperçu ("The easiest yes you'll ever give");
   - the « Zéro risque » promise;
   - everything on the do-not-claim list [FB §2].
5. **The owner's missing terms are never filled in on screen.** Deposit, ownership, revisions, hosting, what support and maintenance cover, the tax status of the dinar prices, and the Aperçu's open rules all stay unsaid. §1.7 lists each question a viewer will ask, the scene where it comes up, and what would unblock it. Every package script keeps a **reserved slot R, « Après le oui »**, which is rendered only once the owner has written those terms (Gate D).
6. **No client work, no face, no figure, no new generated images.**
   - The emblems are the site's own hand-coded SVG icons.
   - The engraved plates were generated in earlier runs, so they appear only if the owner confirms reuse; each video has a fallback without them. No plate that contains a human figure is used (V07 drops `faq4.png`, §6).
   - The demos use the studio's own site and coded illustrations labelled « Illustration ».
   - No client screenshot appears anywhere in these six videos, so the clients' permission (OWNER-CONTENT §6) is not needed for them.
7. **Calls to action follow the gates and the strategy** [ST §3.2, §3.4, §7.2].
   - Before Gate B: no invitation to write. The end card carries the studio label and the pointer (« Lien en bio »).
   - After Gate B: every end card carries the Aperçu call to action for its market, after a conditions beat. **Exception: V06** keeps « Décrire mon projet → » until the owner says whether a web application gets an Aperçu (⚑ A4).
   - Links carry `?ref=` codes. No URL, email, phone number or ref code ever appears on screen.

### 0.3 Gates per video (from [ST §7])

| Video | Render now? | Publish when | Parts that wait longer |
|---|---|---|---|
| V10 L'Aperçu | Drafts for review only, **with `gate=post` only**: the whole video is the offer, so a pre-Gate-B file could never be posted | **Gate B is open** (it includes a live privacy page, a real legal name, a dedicated WhatsApp number, time blocked for up to 4 Aperçus a month, and the lawyer's answer on promoting the Aperçu before the ANAE registration, A8 [ST §7.1]), **and** the AR review is signed off. The revised strategy starts the Aperçu push the week B opens (§7.2) and places V10 in W10 if B is open (§8.2); the pre-review strategy required Gates A and B together. This file follows the revised strategy. **OWNER:** say so if V10 should also wait for Gate A | — |
| V04 Essentiel | Yes, for W8 (W6 if Gate B is late) | **Gate 0** is met: accounts exist, an AR reviewer is named, the music bed is approved (or the silent track is used), and engraving reuse is confirmed (or the fallback is used) | The post-Gate-B end card and conditions beat. Slot R waits for Gate D |
| V05 Studio | After V04's template, only if V05 takes W8 | Gate 0, **plus** the AR review of the site's own Arabic in the `#how` capture before any S3 still is rendered (O7, §4.1) | As V04 |
| V06 Moteur | No: next quarter. Review stills only | Gate 0 | As V04; the Aperçu waits for A4 |
| V07 Maintenance | No | **Hold** until the owner decides what support and maintenance cover (T5, T6) and settles the light-plan question [ST §5 V07] | — |
| V27 « Quelle formule pour moi ? » | When W11 is confirmed at the W8 review | Gate 0 | Scene S7 (the Aperçu card) only after Gate B |

---

## 1. Rules applied in every script

### 1.1 Sources and wording

- Every on-screen line names its source in the Notes column, as `app.js:FR/EN/AR` lines or [FB §x].
- The do-not-claim list [FB §2.1] was checked line by line. None of these appears anywhere:
  - team size, "6 ans", client counts, results or metrics;
  - stack or tool names, Nomara, testimonials, "open source";
  - « pas d'intermédiaire », registration claims for the studio, VAT mechanics, a tax status for the dinar prices, model names, payment methods.
- No figure appears on screen except the site's prices, page counts, weeks, months, "24 h", "5 jours", "30 min", "4 par mois" and the plate numbers. No scores, speeds or percentages, so the copy lint passes [PL §2.8].
- The Aperçu never appears without its conditions [FB §1.3]. Wherever « 5 jours ouvrés » appears, « à réception de vos contenus » appears with it.

### 1.2 Prices: the exact strings, per cut

Figures are exactly what the site displays (`PRICE_MODEL` app.js:679-686, `RETAINER` app.js:1709, display rule app.js:1720-1732; recomputed for this file with the site's rounding). **Dinar strings carry no tax label** (§0.2 point 3, ⚑ T11).

| | Essentiel | Studio | Moteur | Maintenance |
|---|---|---|---|---|
| **FR, DA** | env. 90 000 – 160 000 DA | env. 180 000 – 420 000 DA | env. 450 000 – 1 200 000 DA | env. 18 000 – 60 000 DA par mois |
| **FR, €** | env. 600 – 1 100 € HT | env. 1 200 – 2 800 € HT | env. 3 000 – 7 900 € HT | env. 120 – 400 € HT par mois |
| **EN, $** | about $670–1,200 excl. tax | about $1,300–3,100 excl. tax | about $3,400–9,000 excl. tax | about $130–450 a month, excl. tax |
| **AR, DA** | نحو 90 000 – 160 000 دج [à relire par un arabophone natif] | نحو 180 000 – 420 000 دج [à relire par un arabophone natif] | نحو 450 000 – 1 200 000 دج [à relire par un arabophone natif] | نحو 18 000 – 60 000 دج شهرياً [à relire par un arabophone natif] |
| **AR, $** | نحو 670 – 1 200 $ غير شاملة الضريبة [à relire par un arabophone natif] | نحو 1 300 – 3 100 $ غير شاملة الضريبة [à relire par un arabophone natif] | نحو 3 400 – 9 000 $ غير شاملة الضريبة [à relire par un arabophone natif] | نحو 130 – 450 $ شهرياً، غير شاملة الضريبة [à relire par un arabophone natif] |

**If the owner and the accountant confirm that the dinar ranges are before tax (T11):** add « HT » / «غير شاملة الضريبة» [à relire par un arabophone natif] back to every DA string in `copy/*.json` and re-run the timing script (one more word per DA line). Until then, nothing about tax is said on a dinar price. **OWNER PREREQUISITE.**

**Which figure each cut shows:**

| Cut | Where it goes | Price on screen |
|---|---|---|
| FR-DZ 9:16 (long and social) | Instagram and Facebook, YouTube Shorts, Stories, WhatsApp Status | DA, with the € line smaller underneath |
| FR-FR 4:5 | LinkedIn (France) | € only |
| AR-DZ 9:16 | Instagram and Facebook | DA only |
| AR-GU 9:16 | TikTok (Gulf) | **No price**: the no-price line below |
| EN-GU 9:16 | TikTok, Instagram, YouTube Shorts (Gulf) | **No price**: the no-price line below |
| FR 16:9 | YouTube FR and the site in French | DA, with the € line smaller underneath |
| AR 16:9 | YouTube AR and the site in Arabic | DA, with the $ line smaller underneath |
| EN 16:9 | YouTube EN and the site in English | $ only |

V27 shows one currency per language only (FR and AR in DA, EN in $); its € line goes in the description (§7).

**No-price line (Gulf cuts).** One line over the held week bars, no pointer (the pointer is on the end card a few seconds later). The scene shortens to 3.5 s in the Gulf cuts, rendered per cut.
- EN: "A price before the quote." (app.js:465, site).
- AR: «سعر قبل عرض السعر.» [à relire par un arabophone natif] (app.js:580, site).

**Conversion note.** It is never on screen; it goes in the caption or description whenever € or $ is shown:
- FR « Conversion au taux officiel de la Banque d'Algérie (1 € ≈ 151 DA, octobre 2026), arrondie. » (app.js:378 ✂: stops before « Prix HT. Entreprise française : facture sans TVA, autoliquidée… », which is the VAT line on the do-not-claim list [FB §2.1 #19]).
- EN "Converted at the Bank of Algeria official rate ($1 ≈ 134 DZD, October 2026), rounded." (app.js:491 ✂).
- AR «تحويل بالسعر الرسمي لبنك الجزائر (1 $ ≈ 134 دج، أكتوبر 2026)، مع التقريب.» [à relire par un arabophone natif] (app.js:606 ✂).

**Typesetting rules:**
- **The site's own price type** (styles.css:1456-1459, :2626-2627): figures in Geist 700, tracking −.02em, tabular numerals; the currency in Geist Mono 500 at .62 of the figure size, tracking .06em.
- **One figure size in every video**, so the scale stays comparable: **72 px** in 9:16 and 4:5, **76 px** in 16:9. Measured: Moteur's « 450 000 – 1 200 000 DA » is 742 px at 72 px (AR 766 px), inside the 800 px box; at 80 px it is 825 px and does not fit.
- « env. » / «نحو» [à relire par un arabophone natif] / "about" sits on its own line above the range, in small print. The second-currency line (€ or $, with « HT » / "excl. tax") sits under it in small print, in `--muted`.
- **No range ever breaks**, and the currency never leaves its figure. Every price string in `copy/*.json` carries U+202F (narrow no-break space) inside numbers, U+00A0 (no-break space) before the currency, and U+2060 (word joiner) after the en dash, as the site's dictionaries do [BRAND.md "Ranges must not wrap apart"]. The copy lint checks for them (§8.4 step 1).
- Group digits as the site does: a narrow no-break space in FR and AR, commas in EN. Western digits in Arabic.
- Prices wipe in. They never count up from zero, and no coin or till sound plays near them [MU §5.2].

**Notes for the reviewer and the owner:**
- The site's Arabic tax label is «قبل الضريبة» (app.js:604). The facts-bank rule (from the campaign kit) is «غير شاملة الضريبة» [à relire par un arabophone natif]. It now applies only to the $ lines. Choose one and use it everywhere.
- Arabic ranges could also be written «من … إلى …» [à relire par un arabophone natif] [CH §1.3]. The scripts keep the site's dash form so they match the price cards.

### 1.3 Formats, layout, type and timing

| | 9:16 master (1080×1920, 30 fps) | 4:5 (1080×1350, FR-FR for LinkedIn) | 16:9 (1920×1080, 30 fps) |
|---|---|---|---|
| Text box | **x 140–940, y 290–1240, for every language** (800 px wide; Arabic right-aligned inside it) [ST §3.3]. Below y 1240, decoration only | Same 800 px width (x 140–940), re-centred vertically. Rendered natively with `ratio=4x5` [PL §4]; the 4:5 layout is designed once per template, LTR and RTL (§8.2) | Text column x 160–1060 (FR, EN) or x 860–1760 (AR). Visual column on the other side. Full-width rows (timelines, week scale, the comparison rows, the conditions) at x 160–1760. Bottom 120 px free of text (player controls) |
| Title (Cinzel 700, Latin only) | 120–132 px | 108 px | 104 px |
| Body (Geist 500) | 64 px, **at most 3 lines** | 60 px, at most 3 lines | **64 px**, at most 3 lines |
| Figures (§1.2) | 72 px | 72 px | 76 px |
| Small print (Geist 400 or Geist Mono 500) | **46 px, never smaller**, held ≥ 3 s, at most 4 lines | 44 px | **54 px, never smaller** |
| Conditions | Body size (V10), 56 px (the short-form beat) or small print (steps scene) | same | **64 px or more**, full width [ST §3.3] |
| Caption chips | **40 px** (AR 44 px), Geist Mono 500, uppercase, tracking .08em, on a solid `--void` chip like the site's `.pl-cap` (styles.css:2138-2143); may wrap to two lines | 40 px | 40 px |
| Arabic (IBM Plex Sans Arabic 700/600) | 12% larger than the Latin size, line-height ≥ 1.5, **never letter-spaced**, Western digits. A Latin word in parentheses is bound to the Arabic word before it with U+00A0 (« البحث (SEO) » [à relire par un arabophone natif]), so no line starts with a Latin word [CH §1.3] | same | same |

**Why x 140–940 for every language.** The button rail on the right of Reels and TikTok (about 140 px wide) follows the viewer's **app language, not the video's**. Many Algerian (French interface) and Gulf (English interface) viewers of the Arabic cuts will have the rail on the right, over x ≈ 940–1000, so an Arabic line may not run past x 940. The box is the intersection of the LTR and mirrored boxes and lies inside the 120 px side margin of the pipeline's check and of the sibling scripts' LTR band. Confirm it against TikTok's LTR and RTL safe-zone files [CH §1.4, S16] before the first render. Every line count in this file was measured in the 800 px box.

**16:9 is designed for full-screen landscape viewing** (desktop, TV, a phone turned sideways). A 1920 px frame shown about 390 px wide (YouTube on a phone held upright) is scaled by about 0.2, so no size can make it comfortable there. On the site's mobile layout, the player serves the 9:16 social cut or the 4:5 file (Gate W, [CH §1.5]). **The 16:9 check** is a 1280 px-wide desktop player (54 px becomes about 36 px) and a phone in landscape full screen (about 24 px), not a phone held upright.

**Timing rule used to set every Time column** [CH §1.3; ST §3.3]:
- **Reading time** is how long a block of text is fully legible: 0.35 s per word plus 1 s, counted on the **longest of the three languages**. Words are space-separated tokens; numerals and units count ("24 h" is two); tokens made only of punctuation (· — → ← … /) do not.
- **Sequential reading budget.** Each block gets 0.4 s to come in plus its own reading time **before the next block enters**. Never two new text blocks at once. Earlier blocks may stay on screen, dimmed to `--muted`.
- **Scene length** = the sum of its blocks' (0.4 s + reading time), plus any declared visual hold, plus 0.3 s out, rounded up to 0.1 s.
- **The hook** has 6 words or fewer ([ST §3.3] allows 7) and stays **alone** on screen for at least 1.5 s: no chip, plate caption or second block enters during those 1.5 s.
- Small print stays at least 3 s.
- **Caption chips are part of the picture, not timed text.** These are the plate captions, « Illustration » and « Exemple : … ». They sit in a corner of the visual they describe, say the same thing in every language, and never carry a fact the viewer needs (the facts are in the timed text).
- All three languages share one timeline for every shared scene. Only the cut-specific scenes differ: the price card (or the Gulf no-price line), the conditions beat and the end card (§1.6). **If the reviewed Arabic runs longer than a scene allows, lengthen that scene in every language** and re-run `timing.mjs`.

**Checks that enforce this** (before production, §8.2):
- **Line count:** each text element's height ÷ (font size × line-height) is at most 3 for body and 4 for small print, asserted at render time.
- **Safe area at every text block, not only the last frame.** Today `render.mjs` runs `safeCheck()` on the last frame only (render.mjs:161-163), which is the end card; none of the scenes before it is checked. The scene timeline must emit a list of check frames (each block's settled frame: its entry + 0.4 s) and the renderer must seek and check each one against the box above. **Until that exists, a person checks one still per text block in every cut** (§8.4 step 5).

### 1.4 Visual system and assets (all under `/home/user/STICKITTY.INC/`, read-only)

- **Theme: Arcanum for all six videos.** It is the site's default (themes.css:23-46). The root theme never changes during a video.

  | Token | Colour | Used for |
  |---|---|---|
  | `--void` | #0A1420 | Ground, chip backgrounds |
  | `--navy` | #0F1E30 | Cards |
  | `--plum` | #13283E | Raised cards |
  | `--ice` | #EAF1F8 | Text |
  | `--body-strong` | #C7D5E2 | Long copy |
  | `--muted` | #9DB2C6 | Dimmed text, the second-currency line |
  | `--crimson` (brass, **fill**) | #E6B450 | Rules, hairlines, nodes, the wordmark's cursor block, strokes |
  | `--crimson-text` (brass, **text**) | #E6B450 | Figures, the CTA label, any brass text |
  | `--on-crimson` | #0A1420 | Text on a brass fill (the « Recommandé » chip) |
  | `--teal` (cyan, **fill**) | #34D0E8 | Progress lines, fills |
  | `--teal-text` (cyan, **text**) | #34D0E8 | « idea » in the wordmark, any cyan text |
  | `--hairline`, `--hairline-2` | #1C3550, #27496B | Hairlines |

  Text is coloured only with the text tokens, never with `--crimson` or `--teal` [BRAND.md "Text tokens vs fill tokens"]. The values happen to match in Arcanum; they differ in other themes. The ground carries the brass grid at .07 opacity, 64 px. Colours are loaded from the site's CSS, never copied [PL §5.1]. No gradient text, no glow on type [ST §3.3].
- **Emblems.** These are hand-coded SVG drawn for the site, so their origin raises no question. They draw in with the site's icon grammar (stroke draw-in on a 24 grid, 1.5 stroke, then rest [FB §3.6]) and are scaled to 240–320 px. Their idle motion keeps the **site's tempo**, "tuned for calm" [MU §5.1]: the pulse 2.6 s (styles.css:2309), the compass swing 3.4 s (:2305), the gear 10 s a turn (`--t:10s`, index.html:804; styles.css:2291). The SVG path strings are copied privately into each video file, with their source line noted.

  | Video | Emblem | Source |
  |---|---|---|
  | L'Aperçu | Viewfinder: corner brackets and crosshair | index.html:564 |
  | Essentiel | Hexagon with a pulsing dot | index.html:770 |
  | Studio | Swinging compass | index.html:787 |
  | Moteur | Turning gear | index.html:804 |

- **Plates** (generated engravings; they wait for the owner's reuse decision, flag O1).
  - They are luminance masks re-inked in `--ice` at 18–30% opacity behind text, or in brass for a reveal. They are never narrower than 300 px. They wipe in behind a brass burin rule, using the pipeline's `plate()` [PL §5.2]. A plate is a single raster mask: lighting part of it needs a hand-traced clip path (budgeted in §8.5).
  - A plate caption is shown only when it is the site's own caption, and never during the hook's first 1.5 s.
  - **No plate that contains a human figure**: a figure beside « On reste » or the studio's lines would stand for the founder or "us" [FB §1.2, §2.4].
  - Per video:

    | Video | Plates |
    |---|---|
    | L'Aperçu | `assets/illus/lighthouse.webp`, « Pl. V — Cap Carbon · Béjaïa » (uncaptioned in Gulf cuts, below); `assets/illus/bench.webp`, uncaptioned, standing for the studio's work, never for a person |
    | Essentiel | `assets/illus/px-plan.webp` (texture) |
    | Studio | `assets/illus/arch.webp`, « Pl. II — Arc de Trajan · Timgad » (uncaptioned in Gulf cuts) |
    | Moteur | `assets/illus/strata.webp`, « Pl. IV — Coupe des couches » |
    | Maintenance | **None by default**: the dimension-line motif alone. `faq4.png` is not used (its scaffolding has a small worker with a hammer [FB §3.1]). Option if O1 allows: `assets/illus/faq1.png` (schedule grid with a finish flag; no figure), ≤ 512 px |
    | Comparison | `assets/illus/px-contour.webp` (texture) |

  - **Fallback if reuse is refused:** drop the plate layer and keep the emblem, the dimension lines and the brass grid. Timings stay the same.
- **Gulf cuts: the rule as applied here.** No Gulf landmarks, flags or emblems, and no local-office look; every Gulf cut says the studio is based in Algeria [Campaign.md:73; FB §2.4; ST §3.2]. The Algerian plates do not create a local-office look; they support "based in Algeria". But because FB §2.4 and ST §3.2 state "landmarks" without that qualifier, **the AR-GU and EN-GU cuts show the lighthouse and arch plates without their captions** until the owner confirms this reading (O6). QA step 8 checks against this wording.
- **The studio's own site, as stills.**
  - Capture only the `ol.steps` list of `#how` in `fr`, `en` and `ar` into `marketing/captures/` (§8.2). The capture leaves out the kicker, the title h2#how-h (« Quatre étapes. Zéro surprise. », §0.2 point 4) and the lead (« Entreprise immatriculée ? Vous ne payez rien… », an Aperçu pitch beyond step 3), and the `.how-cta` buttons.
  - **Never capture the hero:** its lede carries the team claim and its title block says "4 sites clients" [FB §2.1 #1, #7].
  - Never capture the work section.
  - Stills sit in a plain browser frame with a **blank address bar** [FB §2.4], and are wiped, never cross-faded.
  - **Never mix FR and AR in one frame**, except a French caption over an Arabic page in a demonstration of the language switch [ST §3.3]. So: Arabic cuts never show the French still.
- **Coded illustrations.** These are generic and fictional:
  - the pieces: wireframe homepage, desktop-to-phone reflow, page-title panel, content editor, style-and-component sheet, app shell, data flow, connectors, call window;
  - placeholder text only: « Votre logo », « Votre entreprise » / "Your logo", "Your company" / «شعارك هنا» [à relire par un arabophone natif], «اسم شركتك» [à relire par un arabophone natif];
  - each one carries the chip « Illustration » / "Illustration" / «رسم توضيحي» [à relire par un arabophone natif] (new);
  - never: third-party logos, payment-method marks, figures that could read as results, check marks that could read as "passed", search-result lines, or rankings.
- **Dimension line and week scale.** These are the site's own devices: the Aperçu timeline (index.html:574-582) and the tier week bars (index.html:775, :792, :809; styles.css:1680-1690). **All package videos share one 0–16-week scale**, so the durations can be compared honestly.
- **Marks drawn as paths, never as system-font text.**
  - The "0" of V10 S1 is drawn as an SVG path in the icon grammar (an ellipse on the 24 grid), then cross-faded in 0.3 s to the Geist Mono 700 text "0" once drawn.
  - The studio's mark in the V10 call window is a monogram « N » **drawn for this video** on the 24 grid (three strokes, 1.5 stroke, brass; new). It is not `assets/favicon.svg`, whose "N" is SVG `<text>` in Georgia italic and renders differently on every machine.
- **Motion rules:**
  - the site's easing, `cubic-bezier(.16,1,.3,1)`;
  - stills wiped, never cross-faded;
  - loops settle after one or two cycles at the site's tempo; the lighthouse beam moves at the site's 8 s cycle (styles.css:2237-2239);
  - no `will-change`; clear transforms once settled [PL §4.1];
  - nothing strobes, and no full-frame recolouring.
- **Never on screen:**
  - a face or figure standing for the founder: the call window shows the drawn « N » mark, not a person [FB §1.2];
  - client screenshots, names or logos (Gate C);
  - Nomara;
  - `netlify.app` or any other URL;
  - payment marks;
  - Gulf landmarks, flags, emblems or a local-office look in Gulf cuts, and the Algerian plate captions there until O6 is settled.

### 1.5 Sound

- **The bed** is the code-made one [MU §3], once the owner has done the listening test [MU §3.5]. It is in D minor at 90 BPM, Arcanum variant. **Until `bed.mjs --cues` exists, use the pipeline's silent track.** Today's `bed.mjs` takes only seed, BPM, bars and mode; it lays continuous 16th-note "burin" ticks and a chime on each chord change, with no scene cues, so it cannot hold the ticks back under prices or put a chime on each emblem. The cue export is in §8.2 and §8.5.
- **The percussion-only bed is not offered** for the AR cuts: it loses 8.1 LU through the phone filter and "needs another pass" [MU §3.2]. The owner's question on it [MU §5.5] stays open for after that pass.
- **Cue map, once `--cues` exists, the same in every video:**
  - a chime on each emblem or plate reveal;
  - one soft tick per text block;
  - a **held pad with no ticks under prices and conditions**;
  - on the end card, the frame-drum heartbeat and the coded sting; the last 1.2 s fade to silence.
- **The bed is rendered at each cut's exact length**: the end card and the price slot differ by cut (§1.6, §1.2).
- **Loudness** [MU §4.5]:
  - −14 LUFS for 9:16 and 4:5;
  - −16 LUFS for 16:9 (YouTube and the site);
  - true peak ≤ −1 dBTP, measured on the encoded file;
  - sound from frame 0.
- **Every video must read completely with the sound off.** The website player starts muted, with a sound toggle.

### 1.6 End card, conditions beat, calls to action, captions and `?ref=` codes

**Series spec.** This end card and the price card in §1.8 are written as one spec for all three script files and `pipeline.md`. The other files still describe different versions; §8.7 lists what they should change.

**End card: a sequence, never a stack.**
1. **Block A, wordmark + label.** The emblem (or V10's glyph) settles, and the wordmark appears with the house reveal, then the label.
2. **Block M, market line** (FR-FR and Gulf cuts only), as its own block.
3. **Block B, the pointer before Gate B; the call to action and the pointer after it.**
4. Everything fades over the last 1.2 s. The sting plays on the card's first frame.

- **Wordmark, built exactly as the site does** (index.html navbar; styles.css:43, :139-142; themes.css:43): « Num » and « Labs » in Cinzel 700, tracking .04em (Arcanum's logo tokens); « idea » in Geist 600 (`--font-swash`) in `--teal-text`; then the **solid brass cursor block** (`.cursor`: width .41 em, height .91 em, 0.23 em gap), which **never blinks** [BRAND.md "The logo"]. Always left to right (`dir="ltr"`, as styles.css:2454 isolates it). Size: 92 px in 9:16 and 4:5 (measured 755 px wide; at 104 px it would be 853 px, wider than the box), 104 px in 16:9. Note: on the site's Arabic pages the theme's logo face applies only under `dir="ltr"` (styles.css:43), so those pages show the wordmark in Geist; the videos use the Arcanum lock-up in every cut, for one mark across languages.
- **The CTA is set as text with its arrow**, in `--crimson-text` with a brass rule under it, not as a button shape: nothing in a video can be clicked.
- **No motto** in any cut. It costs about 3.5 s of reading and is optional in the strategy [ST §3.4]; it can go in YouTube descriptions.
- **No plate animation on the card** (no beam sweep), no URL, email, phone number or ref code.

| Element | FR | AR [à relire par un arabophone natif] | EN | Source |
|---|---|---|---|---|
| Label (block A, every cut; it states "based in Algeria" for the Gulf) | Studio web & logiciel · Bordj Bou Arréridj, Algérie | استوديو ويب وبرمجيات · برج بوعريريج، الجزائر [à relire par un arabophone natif] | Web & software studio · Bordj Bou Arréridj, Algeria | app.js:20/118/219 (site) |
| Market line (block M), FR-FR only | UTC+1 · l'heure de Paris en hiver, 1 h de moins en été | — | — | app.js:403 (site) |
| Market line (block M), Gulf cuts only | — | UTC+1 (توقيت الجزائر) · أقلّ بساعتين من توقيت الرياض، وبثلاث ساعات من توقيت دبي [à relire par un arabophone natif] | UTC+1 (Algeria) · 2 h behind Riyadh, 3 h behind Dubai | app.js:630 (site); app.js:515 ✂ (drops "same as Paris…") |
| Pointer (block B): Instagram, Facebook, TikTok cuts (also read as the channel links on Shorts) | Lien en bio | الرابط في الملف التعريفي [à relire par un arabophone natif] | Link in bio | [ST §3.4]; AR new |
| Pointer: FR-FR 4:5 (LinkedIn) | Lien en commentaire | — | — | [ST §6.1] (new) |
| Pointer: 16:9 | **None.** The YouTube description and end screen, or the site's own button beside the player, carry the link | | | |
| CTA after Gate B: Algeria cuts, V04, V05, V07, V10, V27 | Demander mon Aperçu → | اطلب معاينتك ← [à relire par un arabophone natif] | — | app.js:403/515/630 (site); [ST §3.2] |
| CTA after Gate B: FR-FR (LinkedIn) | Écrivez-moi « Aperçu » en message privé | — | — | [ST §3.2], from the campaign kit [KIT §5.5 P3, P8] (**not a site string**; first person, the founder's voice) |
| CTA after Gate B: Gulf cuts | — | اطلب معاينتك ← [à relire par un arabophone natif] | Request my Preview → | app.js:515/630 (site); [ST §3.2] |
| CTA after Gate B: 16:9 | Demander mon Aperçu → | اطلب معاينتك ← [à relire par un arabophone natif] | Request my Preview → | as above, in the video's language, no pointer |
| CTA after Gate B: **V06 only**, every cut (⚑ A4) | Décrire mon projet → | صِف لنا مشروعك ← [à relire par un arabophone natif] | Describe my project → | app.js:398/510/625 (site) |

**Conditions beat (after Gate B, its own scene just before the end card)** [ST §3.4]. It is skipped when the scene before the card already shows the full conditions (the steps scene in the long package masters, V10 S12, V27 S7). Short form, one block at 56 px (AR 63 px): measured 3, 3 and 2 lines. 5.6 s.
- FR « Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. » (the site's share card, index.html:34, site).
- EN "Free, no obligation · registered businesses · at most 4 a month." (restated [ST §3.4]).
- AR «مجّاناً ودون التزام · للشركات المسجّلة · 4 في الشهر كحدّ أقصى» [à relire par un arabophone natif] (restated [ST §3.4]).
- The full line goes in the caption (line 3 below).

**End-card length per cut** (from `timing.mjs`; block A 4.9 s, the market line 5.6 s FR-FR or 6.0 s Gulf, the pointer 2.8 s, the CTA and pointer 3.5–4.2 s, the fade 1.2 s):

| Cut | Before Gate B | After Gate B, Aperçu CTA | After Gate B, V06 |
|---|---|---|---|
| FR-DZ, AR-DZ 9:16 | 8.9 s | 9.6 s | 10.0 s |
| FR-FR 4:5 | 14.2 s | 15.9 s | 15.2 s |
| AR-GU, EN-GU 9:16 | 14.9 s | 15.6 s | 15.9 s |
| 16:9 | 6.1 s | 8.6 s | 8.6 s |

The FR-FR and Gulf cards are long because their market line is the main "based in Algeria, same hours" message for those markets and needs its own reading time.

**`?ref=` codes** [CH §1.8; ST §10.2]:
- **Scheme:** `{market}-{platform}-{lang}-{id}`, at most 20 characters, `a-z 0-9 -` only.
- **Base:** `{SITE}` = `https://brvetr4ve1er.github.io/Numidea.tech/` until the own domain exists. Then swap the base and keep the codes.
- **Query before the anchor,** for example `{SITE}?lang=fr&ref=dz-fb-fr-w08#pricing`. Anchors: `#pricing` for the packages and V27, `#apercu` for V10.
- **Always link to the site, never to `wa.me`.** The site writes the ref into the WhatsApp prefill and the email body itself [FB §1.11].
- **Remove the link preview** wherever the composer allows it, and leave the link out wherever it does not, until `og.jpg` stops showing a client capture [ST §7.1 Gate 0].
- **Week numbers follow the strategy calendar [ST §8.2].** If a post moves, its code takes the week it actually goes out.
- **Where links can be clicked:**
  - Facebook post text, Instagram Story stickers, the LinkedIn first comment, YouTube descriptions and WhatsApp Status carry a clickable link with a per-post code.
  - Instagram and TikTok captions cannot: the bio link's fixed code counts instead (`dz-ig-bio`, `gu-ig-bio`, `gu-tt-bio`, `fr-li-bio` [ST §10.2]).
- **The website embed needs no code:** the visitor is already on the site.

**Caption template for the package explainers** (the first line carries the searchable phrase [CH §1.9]):

| | FR (DZ and FR) | AR [à relire par un arabophone natif] | EN (YouTube; Gulf without line 2) |
|---|---|---|---|
| 1 | « [Essentiel / Studio / Moteur] : ce que contient la formule, combien de temps, à quel prix. » (new) | «[الأساسي / الاستوديو / المحرّك]: ما تتضمّنه الباقة، والمدّة، والسعر.» [à relire par un arabophone natif] (new) | "[Essential / Studio / Engine]: what the package includes, how long it takes, what it costs." (new) |
| 2 | Price line from §1.2 + « Fourchette indicative, pas un devis. » (+ the conversion note if € is shown) | Price line + «تقدير استرشادي، لا عرض سعر رسمي.» [à relire par un arabophone natif] | Price line + "An indicative range, not a quote." + the conversion note |
| 3 | **Whenever the file mentions the Aperçu** (the long masters' steps scene before Gate B; every cut of V04, V05, V07 and V27 after it; never V06): « L'Aperçu : gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » | «المعاينة: مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [à relire par un arabophone natif] | "The Preview: free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." |
| 4 | Label (above) + the link or « Lien en bio » | Label + link | Label + link |

### 1.7 Flag register: questions the videos cannot answer yet

These are the owner's missing terms (vault `Maps/Owner decisions pending.md`, "Money and terms" and "The Preview's rules"; [FB §2.2]). Each scene table cites them as ⚑ codes. **On screen, the videos say nothing on these points.** The flags are for the owner, so that each gap is visible and has a place to be filled.

**T: terms after the yes (Gate D unless stated)**

| Flag | Missing decision | What a viewer will ask | Where it comes up | What the video does now | What unblocks it, and where the new line goes |
|---|---|---|---|---|---|
| **T1** | **Deposit and payment schedule** | « Je paie un acompte ? Quand le reste ? » | After « Si c'est oui » (V10 S10); step 4 of the steps scene (V04 S8, V05 S10); V27 S6 | Shows only the site's lines: « Si c'est non, vous ne devez rien. Si c'est oui… on enchaîne sur le reste. » The campaign kit's drafts (deposit before work, balance before handover, invoice in EUR) are **not** owner decisions and are not used | Owner decision N5 → slot R « Après le oui » |
| **T2** | **Ownership at delivery**: code, design files, domain, hosting accounts, and the Aperçu page itself | « Le site est à moi ? Le domaine est à quel nom ? » | V04 S3 (custom design: who owns the files?); V05 S5 (the content editor: whose account?); V10 S10; every steps scene | Silent. Never « tout vous appartient » [FB §2.2] | N5 → slot R |
| **T3** | **Revision rounds** included in the firm price | « Combien de modifications pour ce prix ferme ? » | The firm-price scene (V04 S7, V05 S9, V06 S8): « le prix ne bouge plus ensuite »; V04 S3; V10 S10 | States only the firm-price line, with nothing on rounds | N5 → one small line under the firm-price scene, or slot R |
| **T4** | **Hosting, domain, certificate, renewals**: included? who pays after year one? whose account? | « L'hébergement est compris ? Qui paie l'an prochain ? » | V04 (its card line « Mise en ligne, domaine et certificat configurés » is cut [FB §2.1 #17]); V05 S5; V06 S5 (hosting an app); V07 (does maintenance include hosting?) | Silent. Also leaves out « un forfait, sans frais cachés » (faq2, app.js:87) and « Quatre étapes. Zéro surprise. » (app.js:48/146/247; V10 S4b block 1 and the `#how` title in the captures): a hosting or renewal bill after launch would contradict either while those costs are unwritten | N5 on T1–T4, plus one client site live on its own domain → restore the Essentiel line (V04 S4b), « sans frais cachés », and « Quatre étapes. Zéro surprise. » (S4b block 1; the capture may then start at the h2) |
| **T5** | **What included support covers** (1, 3 or 6 months) | « Le mois de support, ça couvre quoi ? » | Weeks-and-support scenes (V04 S5, V05 S7, V06 S6); V07 S3; V27 S2–S4 | Shows the number of months only | Owner-items §4 → one line under each support mention |
| **T6** | **What maintenance covers, what sets 18 000 vs 60 000 DA a month, and whether there is a light plan (X6)** | « Chaque mois, j'ai quoi ? Pourquoi cet écart ? » | V07 S5–S6 | The range and « au mois, sans engagement de durée » only. **Hold V07** until decided [ST §5]. Maintenance is left out of V27 for the same reason | Owner-items §4 + X6 → reserved slot R6 in V07; then add one maintenance line to V27 |
| **T7** | **« Sous 24 h ouvrées »**: a first reply only, or also a fix for a site that is down? Which working days and hours? | « Si mon site tombe un vendredi, il est réparé quand ? » | V07 S4; step 2 of every steps scene; V27 S6; V10 S6 (« 5 jours ouvrés ») | Says « on vous répond », a reply, and never "réparé". No weekday names on screen | Owner decision on support vs maintenance, hours and working days |
| **T8** | **What the client supplies, and by when; when the delivery clock starts** | « Quel contenu j'envoie ? Les 2 à 4 semaines partent de quand ? » | V10 S5–S6; weeks scenes (V04 S5, V05 S7, V06 S6) | Uses the site's lines: « à réception de vos contenus » and the restated « Délai et prix fermes sont fixés une fois le projet cadré ensemble ». Lists no content items | N5 → one line in V10 S5 and in the weeks scene |
| **T9** | **Quote or contract signed before work; applicable law** (France: a written, itemised transfer of rights) | « On signe quoi ? Sous quel droit ? » | After « oui »; the firm-price scene; V27 S6 | Says « un périmètre écrit et un prix ferme » (site) and never "contrat" | Owner-items §1 + the lawyer → slot R |
| **T10** | **Invoice currency and payment methods** | « Je paie en dollars ? Comment ? » | EN 16:9 USD prices; Gulf cuts | USD only as "about … excl. tax" with the conversion note. **No payment method on screen, ever**, even after the decision [ST §11 #8] | Owner-items §1; methods stay off screen even then |
| **T11** | **The tax status of the DA prices.** On the site, the DA cards carry no tax label (index.html:773, :790, :807, :822), and the estimator deliberately leaves it off for DZD (app.js:1877). Only the €/$ notes say "HT" or "excl. tax" (app.js:378-379, :490-491, :605-606). No legal form or tax regime is published (OWNER-CONTENT §1 gives "auto-entrepreneur" only as an example) | « La TVA s'ajoute ? » | Every DA price card; Hook B | **DA figures carry « env. » / «نحو» [à relire par un arabophone natif] and no tax label.** € and $ lines keep HT / excl. tax. The facts-bank rule « HT » on every price [FB "How to use"] is suspended for dinars until this is settled | **OWNER PREREQUISITE:** the owner, with the accountant, states whether the DA ranges are before tax. If they are, add « HT » / «غير شاملة الضريبة» [à relire par un arabophone natif] to every DA string and re-time (§1.2). If not, the DA strings stay as they are |

**A: the Aperçu's undecided rules (owner-items §3)**

| Flag | Missing decision | What a viewer will ask | Where it comes up | What the video does now | What unblocks it |
|---|---|---|---|---|---|
| **A1** | What counts as « entreprise immatriculée »? Sole traders? Which proof (RC, SIRET, trade licence)? | « Je suis auto-entrepreneur, ça compte ? » | V10 S12; the steps scenes; the conditions beat; V27 S7 | Says « entreprises immatriculées » only, without the kit's "(SIRET)" or "trade licence or CR" | Owner-items §3 |
| **A2** | When the 5 working days start, and what content they need | (see T8) | V10 S6 | « 5 jours ouvrés, à réception de vos contenus » | Owner-items §3 |
| **A3** | What happens when the month's 4 places are taken | « Et si le mois est complet ? » | V10 S12; steps scenes; the conditions beat | No counter, no "places left", no waitlist line [FB §1.3] | Owner-items §3; a waitlist line only when it is true that day [ST §7.2] |
| **A4** | Which projects get an Aperçu: a Moteur web application? e-commerce? | « Il me faut une application : j'ai droit à l'Aperçu ? » | V06 steps scene and end card (no Aperçu); V27 S7 | V06 shows steps 1–2 only and keeps « Décrire mon projet → » after Gate B. V27 keeps the Aperçu line to "your homepage" | Owner-items §3. If yes, V06 gets the full four-step scene (V04's S8) and the Aperçu CTA |
| **A5** | After a "no": what happens to the page and the client's content | « Vous gardez mon contenu ? La page reste en ligne ? » | V10 S9 | Silent. The kit's rule (preview taken offline, materials deleted, never reused) is not on the site | Owner decides and adds it to the site → one small line under V10 S9 |
| **A6** | After a "yes": is the Aperçu handed over before a contract and payment (the kit says not until signed and paid)? Does the homepage count inside the package's price and weeks? | « Je repars avec la page ? Elle est comptée dans le prix ? » | V10 S10 | Says only « la page d'accueil est déjà faite : on enchaîne sur le reste » | Owner-items §3 + N5 → slot R |
| **A7** | **Order of the firm price and the Aperçu.** The site's method puts the written scope and firm price in step 2, before the Aperçu in step 3. The campaign kit's call script gives a range during the Aperçu call and the quote after it | « Je connais le prix avant ou après avoir vu la page ? » | Steps scenes (V04 S8, V05 S10, V06 S9); V10 S4b (16:9 option); V27 S6–S7; V05 S3 (the `#how` still) | The steps scenes show the **step titles only**. **V27 S6 states step 2 alone, with its condition**, and V27 S7 (after Gate B) is a **separate offer card, not node 3 of the same line**, so V27 does not place the firm price before or after the Aperçu. V05 S3's still is a picture of the site's own published method (step 2 before step 3), shown as an example of the Arabic layout, not as a statement of order | The owner states the order. Then the steps scene can say it; if the order differs from the site's, the site changes first and the capture is retaken |
| **A8** | May the Aperçu be promoted (organically) before the ANAE registration? A question for the lawyer | — | **All of V10; the Gate-0 step-3 mention in the long package masters (V04 S8, V05 S10) and in V05 S3's `#how` still (step 3 and its paragraph); caption line 3; V27 S7; every post-Gate-B conditions beat and end card** | Before Gate B the Aperçu appears only as step 3 of the method, with its conditions and no call to action, as the strategy allows [ST §4]. Everything else waits for Gate B | **OWNER PREREQUISITE:** the lawyer's question, booked in W0 [ST §8.1], must cover the Gate-0 step-3 mention explicitly, not only the push. If the answer is that no promotion is allowed before registration, step 3 is removed: the steps scenes use the "Steps 1–2" form (as V06), V05 S3 uses its arch-and-chips fallback, and caption line 3 is dropped |

**O: other open points**

| Flag | Point | Where it comes up | Now |
|---|---|---|---|
| **O1** | Reuse of the 25 generated engravings [FB §3.1] | Every plate | Plates are conditional; each video has a fallback (§1.4) |
| **O2** | Music: the owner's listening test [MU §3.5], and `--cues` (§1.5) | All | Silent track until both exist |
| **O3** | Loi Toubon: an Arabic page shown as the subject, with a French caption, in the FR-FR Studio cut | V05 S3 | The FR-FR cut uses the `fr-strict` render (arch and chips, no Arabic page) until the lawyer answers [ST §3.3]; then the still may return under its French caption |
| **O4** | AED and SAR prices | Gulf cuts | No price [FB §1.5] |
| **O5** | Native Arabic review, Algeria and Gulf | Every AR string | Nothing AR is published before sign-off |
| **O6** | **Gulf reading of the "no landmarks" rule**: may Algerian plates carry their captions in Gulf cuts? | V10 S3, V05 S1 (AR-GU, EN-GU) | Plates shown uncaptioned in Gulf cuts (§1.4) |
| **O7** | **The site's own Arabic inside the `#how` capture** is itself awaiting native review (app.js:210-212; OWNER-CONTENT item 8) | V05 S3 (every cut that shows the AR still) | Listed for review in §4.1; no AR still is rendered before sign-off or a corrected recapture |

**Reserved slot R, « Après le oui ».** In V10 it sits after S10. **In V04–V06 it sits between the firm line and the steps scene**, so that the conditions stay the last thing before the call to action [ST §3.4]. It runs 5–8 s and holds one or two lines written only from the owner's decided terms (T1, T2, T3, T9, A6). Until then it is **not rendered**, and the timeline simply closes the gap. The social cut has no slot R.

### 1.8 Shared scenes (the same text in V04, V05 and V06, plus V06's shorter steps)

These blocks recur. The scene tables refer to them by name. Lines measured in the 800 px box.

**Firm line** (9.4 s, two blocks, split at the em dash; measured 3 + 2 lines in FR and EN, 3 + 1 in AR). Visual: the hatched week range and the dotted price outline both turn into one solid brass line: one timeline, one number. Long masters only.

| | FR | AR [à relire par un arabophone natif] | EN | Source |
|---|---|---|---|---|
| Block 1 | « Délai et prix fermes sont fixés une fois le projet cadré ensemble » | «نحدّد معك الموعد والسعر النهائيين بعد أن نضبط معاً نطاق العمل» [à relire par un arabophone natif] | "Firm timeline and price are set once we agree the scope together" | **Restated** from two site sentences: faq1.a « Le délai ferme est fixé dès que le projet est cadré ensemble » (app.js:86/184/285) and estFine « Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite » (app.js:391/503/618). 12 words, 5.2 s |
| Block 2 | « — le prix ne bouge plus ensuite. » | «— ولا يتغيّر السعر بعدها.» [à relire par un arabophone natif] | "— the price then stays fixed." | Same sources. 6 words, 3.1 s. ⚑ T3, T4, T9 |

**Steps** (18.8 s, two blocks; long masters only). **9:16 layout:** a vertical dimension line on the reading-start side (x ≈ 170 in FR and EN, x ≈ 910 in AR) with four nodes at about y 360, 560, 760 and 960. The titles sit beside the nodes in a 680 px column, at body size.
- **Block 1, the four titles.** They enter one per node fill, 0.5 s apart (2.0 s), then the whole list holds for its reading time (21 words in EN, 8.35 s). Measured: 2, 2, 2 and 1 lines in FR and EN (about 540 px), 1, 2, 1 and 1 in AR.
- **Then the titles fade (0.4 s) and the nodes keep only their numbers**; node 3 turns brass.
- **Block 2, the conditions**, at small print (46 px; AR 52 px) across the full 800 px box, under the line: measured 4 lines in FR, 3 in EN and AR. 17 words, 6.95 s.
- In 16:9 the line runs across the frame at y ≈ 760 and the titles sit above their nodes; the conditions follow full width at 64 px.

| | FR | AR [à relire par un arabophone natif] | EN | Source |
|---|---|---|---|---|
| Block 1 | « 1 Vous décrivez le projet · 2 On revient sous 24 h ouvrées · 3 On construit l'Aperçu — gratuit · 4 Vous décidez » | «1 تصف المشروع · 2 نعود إليك خلال 24 ساعة عمل · 3 نبني المعاينة — مجّاناً · 4 أنت تقرّر» [à relire par un arabophone natif] | "1 You describe the project · 2 We reply within 24 working hours · 3 We build the Preview — free · 4 You decide" | app.js:394-397/506-509/621-624 (site) |
| Block 2 | « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » | «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [à relire par un arabophone natif] | "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." | app.js:403/515/630 (site) |

- Before Gate B this is the only mention of the Aperçu in the package videos, with its conditions and no call to action [ST §4]. After Gate B it doubles as the conditions beat before the end card.
- Flags: ⚑ A7 (the order of the firm price and the Aperçu), A8, T7 (« 24 h » means a reply), A1, A3.

**Steps 1–2** (V06 only, 13.3 s, three blocks; measured 2, 3 and 2 lines at most).

| | FR | AR [à relire par un arabophone natif] | EN | Source |
|---|---|---|---|---|
| Block 1 | « 1 Vous décrivez le projet » | «1 تصف المشروع» [à relire par un arabophone natif] | "1 You describe the project" | app.js:394/506/621 (site) |
| Block 2 | « Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe. » | «دقيقتان، كتابةً أو مشافهة. بالفرنسية أو الإنجليزية أو العربية.» [à relire par un arabophone natif] | "Two minutes, in writing or out loud. In French, English or Arabic." | app.js:394/506/621 (site) |
| Block 3 | « 2 On revient sous 24 h ouvrées » | «2 نعود إليك خلال 24 ساعة عمل» [à relire par un arabophone natif] | "2 We reply within 24 working hours" | app.js:395/507/622 (site) |

The dimension line ends open after node 2. ⚑ A4, T7.

**Price card** (series spec; 8.4 s in 9:16 and 4:5, 9.1 s in 16:9; two blocks). Visual: a `--navy` card with a brass (`--crimson`) hairline. « env. » sits above in small print; the range wipes in, in reading direction, with no counting, in `--crimson-text` at the §1.2 size; the second-currency line sits under it in small print, `--muted`. ♪ held pad (once cues exist).
- Block 1 is the price line for the cut, from §1.2. FR-DZ: « env. 90 000 – 160 000 DA » + « env. 600 – 1 100 € HT » = 9 tokens, 4.15 s (the longest 9:16 version). 16:9 AR: the DA line + the $ line = 11 tokens, 4.85 s, which sets the 16:9 length.
- Block 2 is the note: « Fourchette indicative, pas un devis. » / «تقدير استرشادي، لا عرض سعر رسمي.» [à relire par un arabophone natif] / "An indicative range, not a quote." (app.js:391/503/618, first sentence, site). 6 words (EN, AR), 3.1 s.
- Gulf cuts use the no-price line instead (§1.2), 3.5 s.
- ⚑ T11.

**The social cut (`len=short`).** Hook and for-line (S1) → two scope scenes → weeks and support → price card or the Gulf no-price line → (after Gate B: the conditions beat) → end card. No firm line, no steps scene, no slot R, so no Aperçu mention before Gate B. The firm price and the method live in the long masters and on YouTube. Each video lists its social-cut timeline. Before Gate B the social cuts run 39–42 s (FR-FR 4:5 44–46 s); after Gate B, 40–48 s. **TikTok's target is 15–40 s** [CH §1.5]: where a Gulf cut runs past 40 s, drop S2 for TikTok (−4.2 to −5.2 s).

---

## 2. V10 · L'Aperçu / The Preview / المعاينة [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | What the buyer sends, what is built, the call, the decision, and the conditions. Nothing beyond the site's own strings |
| **Lengths** | 9:16 long: 79.4 s (DZ), 85.4 s (Gulf) · social cut 44.1 s (DZ), 50.1 s (Gulf), 50.4 s (FR-FR 4:5, LinkedIn) · 16:9: 78.4 s, 4 chapters; 89.5 s with the optional scene S4b |
| **Cuts** | FR-DZ 9:16 (« 0 DA ») · FR-FR 4:5 (« 0 € », Paris line, « Lien en commentaire », the social cut) · AR-DZ 9:16 and AR-GU 9:16 (the same file except the end-card market line and the uncaptioned plate; «0») · EN-GU 9:16 ("Paid so far: 0", Gulf line) · 16:9 FR (then AR, EN) |
| **Gate** | **B** for the whole video (it includes A8), plus the AR review (§0.3). Rendered with `gate=post` only. Calendar: W10 if Gate B is open; AR the next Sunday (W11); if B opens later, two weeks after the Aperçu launch trailer [ST §8.2, §8.3 rule 4] |
| **Emblem / plates** | Viewfinder glyph (index.html:564) · `lighthouse.webp` (Pl. V) in S3, uncaptioned in Gulf cuts · `bench.webp` in S4 (O1) |
| **Sound** | (Once cues exist.) Chime when the beam passes (S3) · one tick per moment, five fine ticks in S6 · held pad under S12 · heartbeat and sting in S13 |

### 2.1 Scene table (9:16 master; times for the DZ cuts)

| # | Time (s) | Visual and motion (coded; assets by path) · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–3.1 | Arcanum ground, brass grid. At y≈760 the timeline's **last node**: a brass ring, and the figure "0" drawing in stroke by stroke as an SVG path (220 px, brass), then cross-fading to the Geist Mono 700 "0" (§1.4); currency after it. A cyan dimension line runs in from the reading-start edge. ♪ pad and one tick from frame 0 | « Payé jusqu'ici : 0 DA » (FR-FR: « 0 € ») | «المدفوع حتى الآن: 0» [à relire par un arabophone natif] | "Paid so far: 0" | Hook H2 [CH §1.7]. 4 words, 2.4 s, alone. app.js:320/432/547 + index.html:580 (site). The video opens on the end of the story and then shows how it gets there |
| S2 | 3.1–7.3 | The cyan line **rewinds**: the fill retracts from the "0" node back to the start (right to left in FR/EN, left to right in AR), passing three empty nodes | « Voyez votre page d'accueil avant de payer. » | «شاهد صفحتك الرئيسية قبل أن تدفع.» [à relire par un arabophone natif] | "See your homepage before you pay." | 7 words, 3.45 s; 2 lines. FR: share-card tagline, index.html:26 (site). EN/AR restated from prev.brief (app.js:515/630) |
| S3 | 7.3–10.4 | The viewfinder glyph's four corner brackets draw in (240 px, brass) and frame the centre. Behind, `lighthouse.webp` inks in (`--ice` 22%); its beam moves at the site's 8 s cycle for the scene, about a third of one sweep, and rests. Plate chip at y≈1180 (**not in Gulf cuts**, O6): « Pl. V — Cap Carbon · Béjaïa » / «لوحة 5 — رأس كاربون · بجاية» [à relire par un arabophone natif] / "Pl. V — Cap Carbon · Béjaïa". ♪ chime | Kicker « Offre signature » · title « L'Aperçu » (Cinzel 132 px) | «عرض مميّز» · «المعاينة» [à relire par un arabophone natif] | "Signature offer" · "The Preview" | 4 words (EN), 2.4 s. app.js:402/514/629 (site); plate captions app.js:73/171/272. The site's promise « Zéro risque. Juste la preuve. » is left out: S2 already carries the promise, and "zero risk" is the only superlative-like line. ⚑ O1. Reviewer: the kit asks to pair «المعاينة» with «الموقع الإلكتروني» in ads, so that it is not read as a site inspection [à relire par un arabophone natif] |
| S4 | 10.4–18.8 | `bench.webp` inks in at the top (a workbench seen from above, no person). Below, a generic homepage wireframe builds itself block by block on a `--navy` card: nav, « Votre logo », headline bar, image block, three cards. « Illustration » chip | Block 1: « Avant tout paiement, » · Block 2: « on construit la page d'accueil de votre nouveau site, avec votre contenu. » | «قبل أيّ دفع،» · «نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت.» [à relire par un arabophone natif] | "Before any payment," · "we build your new site's homepage with your own content." | **Split after « avant tout paiement »** (one block measured 4 lines in FR and EN). 3 + 12 words (FR), 2.05 + 5.2 s; 1 + 3 lines. app.js:403/515/630, first sentence ✂ before « en 5 jours ouvrés » (moved to S6 with its condition). The bench stands for the studio's work, never for the founder [FB §1.2] |
| S5 | 18.8–22.3 | The wireframe shrinks upward. The timeline returns empty with four nodes. Node 1 fills cyan and a small document icon (24-grid stroke) slides into it. ♪ tick | « 1 · Vous envoyez votre contenu » | «1 · ترسل إلينا محتواك» [à relire par un arabophone natif] | "1 · You send your content" | 5 words, 2.75 s. app.js:319/431/546 (site). ⚑ **T8 / A2**: which content (texts, photos, logo) and by when is undecided, so no items are named |
| S6 | 22.3–30.3 | Segment 1→2 fills in **five equal steps**, each a fine brass tick (the site's five build marks, index.html:578). No weekday names. ♪ five fine ticks | « 2 · On construit votre page d'accueil » then « 5 jours ouvrés, à réception de vos contenus » | «2 · نبني صفحتك الرئيسية» then «5 أيام عمل من استلام المحتوى» [à relire par un arabophone natif] | "2 · We build your homepage" then "5 working days, once we have your content" | 6 + 8 words, 3.1 + 3.8 s. app.js:319/431/546 + the facts-bank condition [FB §1.3]. ⚑ **A2** (when the days start), **T7** (which working days) |
| S7 | 30.3–37.6 | Node 3: a call window drawn in line (16:10, two tiles). The left tile shows the S4 wireframe, shared on screen. The right tile shows the **studio's « N » monogram drawn as a path** in brass (§1.4): **no face, no person, no name**. A thin dial sweeps 0→30 min around the node | « 3 · On vous la présente » then « visio de 30 min » | «3 · نعرضها عليك» then «في مكالمة فيديو من 30 دقيقة» [à relire par un arabophone natif] | "3 · We walk you through it" then "30-minute video call" | 6 (EN) + 6 (AR) words, 3.1 + 3.1 s. app.js:320/432/547 (site). Who leads the call is not shown: the team line is undecided [FB §2.1 #1, #13] |
| S8 | 37.6–40.4 | Node 4 fills. The line ends in a fork: two short branches | « 4 · Vous décidez » | «4 · أنت تقرّر» [à relire par un arabophone natif] | "4 · You decide" | 3 words, 2.05 s. app.js:320/432/547 (site) |
| S9 | 40.4–44.6 | The lower branch ("no") lights and runs to the brass "0" node from S1, which reappears: the loop closes. The upper branch stays dim | « Si c'est non, vous ne devez rien. » | «إن كان الجواب لا، فلا شيء عليك.» [à relire par un arabophone natif] | "If it's no, you owe nothing." | 7 words, 3.45 s. app.js:397/509/624, first sentence (site). ⚑ **A5**: what happens to the page and the content after a no |
| S10 | 44.6–51.6 | The upper branch ("yes") lights. The homepage wireframe returns at its end, and further page outlines appear behind it one by one (the rest of the site), then settle | « Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste. » | «وإن كان نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل.» [à relire par un arabophone natif] | "If it's yes, the homepage is already done: we move straight on to the rest." | 15 words (EN), 6.25 s; 3 lines in every language. app.js:397/509/624 (site). ⚑ **T1** deposit · **T9** contract · **T2** ownership · **T3** revisions · **A6** hand-over and price · **A7** order |
| R | — | **Not rendered** until Gate D: « Après le oui », 5–8 s, written from the owner's decided terms | — | — | — | §1.7 |
| S11 | 51.6–59.3 | The full timeline returns small at the top, all four nodes filled, ending on "0" | Block 1: « Vous dites oui en connaissance de cause : » · Block 2: « vous avez déjà vu le résultat. » | «تقول «نعم»» · «وقد رأيت صفحتك الرئيسية بالفعل.» [à relire par un arabophone natif] | "You say yes" · "having already seen your homepage." | **Split at the colon** (the FR line measured 4 lines). 7 + 6 words (FR), 3.45 + 3.1 s. FR app.js:404 (site). **EN and AR are restated from the French**, kept to what the viewer has actually seen (the homepage): the site's EN and AR lines ("The easiest yes you'll ever give…", app.js:516/631) are superlatives, and everything after the yes (A6, T1, T3) is undecided. Reviewer: the earlier AR draft «تقول «نعم» وأنت على بيّنة: فقد رأيت النتيجة بالفعل.» was replaced because «على بيّنة» may read as "fully informed" [à relire par un arabophone natif] |
| S12 | 59.3–69.8 | Everything dims. The conditions sit alone on a `--navy` card with a brass hairline frame, at **body size**, as a **stacked list of three items**, each entering as its own block (earlier items stay, dimmed). ♪ held pad, no ticks | « Gratuit et sans engagement » · « Réservé aux entreprises immatriculées » · « 4 Aperçus par mois au maximum, tous clients confondus » | «مجّاناً ودون التزام» · «للشركات المسجّلة فقط» · «4 معاينات في الشهر كحدّ أقصى لجميع العملاء» [à relire par un arabophone natif] | "Free, no obligation" · "Registered businesses only" · "At most 4 Previews a month, across all clients" | 4 + 4 + 9 words (FR), 2.4 + 2.4 + 4.15 s; measured 2 + 2 + 3 lines in FR (about 600 px), 1 + 1 + 2 in AR. app.js:403/515/630 (site, set as a list). Placed last, just before the call to action [ST §3.4]. ⚑ **A1** (who counts as registered), **A3** (when the 4 are taken). No counter, no "places left" [FB §1.3] |
| S13 | 69.8–79.4 | End card (§1.6): the glyph settles, then block A, (block M), block B. ♪ heartbeat and sting, fade over the last 1.2 s | « Demander mon Aperçu → » · « Lien en bio » (FR-FR: « Écrivez-moi « Aperçu » en message privé » · « Lien en commentaire ») | «اطلب معاينتك ←» · «الرابط في الملف التعريفي» [à relire par un arabophone natif] | "Request my Preview →" · "Link in bio" | 9.6 s (DZ); 15.9 s FR-FR, 15.6 s Gulf, 8.6 s 16:9 (§1.6) |

**Social cut (`len=short`)**, the file for TikTok, Shorts, Stories, WhatsApp Status and LinkedIn: S1 0–3.1 · S2 3.1–7.3 · S5 7.3–10.8 · S6 10.8–18.8 · **S7′** 18.8–23.7, one block « 3 · On vous la présente — visio de 30 min » / «3 · نعرضها عليك في مكالمة فيديو من 30 دقيقة» [à relire par un arabophone natif] / "3 · We walk you through it — 30-minute video call" (9 words, 2 lines) · **S8′** 23.7–28.9, one block « 4 · Vous décidez. Si c'est non, vous ne devez rien. » / «4 · أنت تقرّر. إن كان الجواب لا، فلا شيء عليك.» [à relire par un arabophone natif] / "4 · You decide. If it's no, you owe nothing." (10 words, 2 lines) · **S12′** 28.9–34.5, the conditions short form (§1.6, 56 px) · end card 34.5–44.1 (DZ). FR-FR 4:5: 50.4 s; Gulf: 50.1 s, past TikTok's 40 s target: for TikTok, drop S5 and S2 (about 42 s), or post the Aperçu launch trailer's 30 s there, as the strategy already does for EN in W10 [ST §8.2]. S4, S9 (merged), S10, S11 and S3 are dropped; the full conditions line goes in the caption.

### 2.2 16:9 adaptation (YouTube and the site's Aperçu card)

- **Layout:** the four-moment timeline runs across the frame at y≈760, like the site's card (index.html:574-582), with the text column above it. In AR the timeline runs right to left and the text is right-aligned. The call window and the wireframe sit in the visual column. S12's three items stack in the text column at 64 px. Same scenes and timing as 9:16, with the 16:9 end card: **78.4 s**.
- **Chapters** (each ≥ 10 s, first at 00:00 [CH §1.2]):

  | Time | FR | EN | AR [à relire par un arabophone natif] |
  |---|---|---|---|
  | 00:00 | La promesse | The promise | الوعد [à relire par un arabophone natif] |
  | 00:19 | Les quatre moments | The four moments | المراحل الأربع [à relire par un arabophone natif] |
  | 00:38 | Vous décidez | You decide | أنت تقرّر [à relire par un arabophone natif] |
  | 01:00 | Les conditions | The conditions | الشروط [à relire par un arabophone natif] |

- **Optional S4b, « Dans la méthode » (11.1 s, YouTube only).** It goes after S4 and takes the video to **89.5 s**, just under the 90–120 s the channel research suggests for a long-form Aperçu video [CH §5.2].
  - **One block only: the shared steps block 1 (§1.8), titles only, with step 3 in brass** (⚑ A7). The earlier block 1, « Quatre étapes. Zéro surprise. », is removed: "no surprises" promises what « sans frais cachés » promises while T1–T4 are open. It returns only with « sans frais cachés » (⚑ T4).
  - With S4b, the chapters become 00:00 La promesse · 00:19 Dans la méthode · 00:30 Les quatre moments · 00:49 Vous décidez · 01:11 Les conditions.
- The end card has no pointer (§1.6).

### 2.3 CTA and `?ref=` (the post links; nothing on screen)

| File | Placement (week [ST §8.2]) | Link | ref |
|---|---|---|---|
| FR-DZ long | Instagram Reel + Facebook Page (W10 Tue) | IG: bio `{SITE}?lang=fr&ref=dz-ig-bio`; FB post text `{SITE}?lang=fr&ref=dz-fb-fr-w10#apercu` | `dz-ig-bio` / `dz-fb-fr-w10` |
| FR-DZ social cut | YouTube Short (W10 Tue) | linked to the 16:9 video; code where the link is clickable | `yt-ys-fr-w10` |
| FR-DZ social cut | Instagram Story link sticker | `{SITE}?lang=fr&ref=dz-ig-fr-w10#apercu` | `dz-ig-fr-w10` |
| FR-DZ social cut | WhatsApp Status (Gate B; only if the link preview can be removed) | `{SITE}?lang=fr&ref=dz-wa-fr-w10#apercu` | `dz-wa-fr-w10` |
| FR-FR 4:5 social cut | LinkedIn, first comment (W10 Tue) | `{SITE}?lang=fr&cur=eur&ref=fr-li-fr-w10#apercu` | `fr-li-fr-w10` |
| EN-GU long | Instagram Reel (W10 Thu) | bio `{SITE}?lang=en&cur=usd&ref=gu-ig-bio` | `gu-ig-bio` |
| EN-GU social cut | YouTube Short (W10 Thu). TikTok already has the trailer's EN | linked to the 16:9 video | `yt-ys-en-w10` |
| AR-DZ long | Instagram Reel + Facebook post text (W11 Sun) | `{SITE}?lang=ar&ref=dz-fb-ar-w11#apercu` | `dz-fb-ar-w11` |
| AR-GU social cut | TikTok (W11 Sun) | bio `{SITE}?lang=ar&cur=usd&ref=gu-tt-bio` | `gu-tt-bio` |
| 16:9 FR (AR, EN when reviewed) | YouTube description (W10) | `{SITE}?lang=fr&ref=yt-yl-fr-apercu#apercu` · `?lang=ar&ref=yt-yl-ar-apercu#apercu` · `?lang=en&cur=usd&ref=yt-yl-en-apercu#apercu` | `yt-yl-{fr,ar,en}-apercu` |
| 16:9 (desktop) / social cut (mobile) | The site, on the Aperçu card (Gate W) | none: the card's own button | — |

**Caption, which must carry the conditions in full** [CH §1.7]:
- FR: « L'Aperçu : avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu, en 5 jours ouvrés à réception de vos contenus. On vous la présente en visio (30 min). Si vous dites non, vous ne devez rien. » + « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » + label + link (app.js:403, site; the condition comes from [FB §1.3]).
- AR: «المعاينة: قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت، خلال 5 أيام عمل من استلام المحتوى، ونعرضها عليك في مكالمة فيديو مدّتها 30 دقيقة. إن قلت لا، فلا شيء عليك.» + «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [à relire par un arabophone natif] + label + link (app.js:630, site + condition).
- EN: "The Preview: before any payment, we build your new site's homepage with your own content, in 5 working days once we have your content, and walk you through it on a 30-minute video call. If you say no, you owe nothing." + "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." + label + link (app.js:515, site + condition).

### 2.4 What V10 cannot answer yet

| The viewer's question | Scene | Flag |
|---|---|---|
| What exactly do I send, and when do the 5 days start? | S5, S6 | T8, A2 |
| Which days count as working days? | S6 | T7 |
| What happens to my page and my content if I say no? | S9 | A5 |
| If I say yes: deposit? contract? do I get the page? is it counted in the price? how many changes? who owns it? | S10 | T1, T9, A6, T3, T2 |
| Will I know the firm price before or after the Aperçu? | S10 (and S4b in 16:9) | A7 |
| Does my business count as registered? What if this month is full? | S12 | A1, A3 |
| Is promoting it before the registration allowed? | the whole video | A8 |

---

## 3. V04 · Essentiel / Essential / الأساسي [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | What Essentiel contains, how long it takes, the support included, the indicative price, how the firm timeline and price are set, and how a project starts |
| **Lengths** | 9:16 long: 71.9 s DZ, 73.0 s Gulf (72.6 / 73.7 after Gate B) · social cut: 39.2 s DZ, 40.3 s Gulf (45.5 / 46.6 after B) · 4:5 FR-FR, long: 77.2 s (78.9 after B) · 16:9: 69.8 s (72.3 after B), 3 chapters |
| **Cuts** | FR-DZ 9:16 (DA + €), long and social · FR-FR 4:5 (€) · AR-DZ 9:16 (DA), long · AR-GU 9:16 (no price), social · EN-GU 9:16 (no price), social · 16:9 FR (DA + €); AR (DA + $) and EN ($) when reviewed |
| **Gate** | 0. After Gate B: the conditions beat and the Aperçu CTA (§1.6). Calendar: FR W8 Tue, EN W8 Thu, AR W9 Sun; W6/W7 instead if Gate B is late [ST §8.2, §8.3 rule 4] |
| **Emblem / plate** | Hexagon with a pulse (index.html:770) · `px-plan.webp` floor-plan texture (O1) |
| **Hook B (optional, FR-DZ only)** | Open on the price card « Site vitrine : env. 90 000 – 160 000 DA » (H5 [CH §1.7]; no « HT », ⚑ T11) for 3.8 s, then S1. 6 words, alone. Use it only as an A/B test against the default hook; it adds 3.8 s |

### 3.1 Scene table (9:16 master; times for the DZ cuts before Gate B)

| # | Time (s) | Visual and motion · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–5.9 | The hexagon emblem draws in (path, then the dot, which pulses twice at the site's 2.6 s and rests) at y≈520. `px-plan.webp` fades up behind at 12%. ♪ chime | Block 1: kicker « Formule » · title « Essentiel ». Block 2: « Une présence crédible, vite en ligne. » | «باقة» · «الأساسي» · then «حضور موثوق، على الإنترنت بسرعة.» [à relire par un arabophone natif] | "Package" · "Essential" · then "A credible presence, live quickly." | Hook: 2 words, alone ≥ 1.5 s (1.7 s). Then 6 words, 3.1 s; 2 lines. app.js:357/469/584 (site); the kicker is new |
| S2 | 5.9–11.1 | Page rectangles appear as rooms on the floor plan: 1, then up to 5. A Geist Mono counter 1→5 in brass, one tick each | « Vitrine ou landing, 1 à 5 pages » | «موقع تعريفي أو صفحة هبوط، من 1 إلى 5 صفحات» [à relire par un arabophone natif] | "Showcase or landing site, 1 to 5 pages" | 10 words (AR), 4.5 s; 2 lines. app.js:358/470/585 (site) |
| S3 | 11.1–17.0 | A generic "template" card (grey blocks) gets a colour swatch dragged over it. A brass burin rule strikes it through and it slides out. A blank sheet takes its place and a page is engraved onto it line by line (the plate wipe, applied to a wireframe). « Illustration » chip | « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs » | «تصميم مخصّص — لا قالب معاد تلوينه أبداً» [à relire par un arabophone natif] | "Custom design — never a re-themed template" | 12 words, 5.2 s; 3 lines (FR). app.js:359/471/586 (site). ⚑ **T3** (rounds of changes), **T2** (who owns the design files) |
| S4 | 17.0–21.5 | The engraved page reflows from a desktop frame (16:10) into a phone frame; blocks re-stack. Beside it, a small code-like panel (`--navy`, Geist Mono 40 px) with two fields: `title` « Votre entreprise » / "Your company" / «اسم شركتك» [à relire par un arabophone natif], and `description` as two grey bars. **No search-result line, no position, no ranking.** « Illustration » chip | « Responsive, performance et SEO de base » | «متجاوب وسريع، مع أساسيات تحسين محرّكات البحث (SEO)» [à relire par un arabophone natif] | "Responsive, fast, with foundational SEO" | 8 words (AR), 3.8 s; 3 lines (AR, with « البحث (SEO) » [à relire par un arabophone natif] bound by U+00A0). app.js:360/472/587 (site). No scores, rankings or speed figures [FB §2.1 #8]; nothing that shows the business appearing in search results, which the site does not promise |
| (S4b) | — | **Not rendered.** The site's fourth line « Mise en ligne, domaine et certificat configurés » (app.js:361) is left out | — | — | — | OWNER [FB §2.1 #17]. ⚑ **T4**. It returns when a client site is live on its own domain and the hosting terms are written |
| S5 | 21.5–26.4 | The **shared 0–16-week scale** draws across the frame (Geist Mono ticks). A hatched brass range fills weeks 2–4. After it, a small « mise en ligne » node, then one cyan segment for the month of support | « 2 à 4 semaines · 1 mois de support inclus » | «من 2 إلى 4 أسابيع · شهر دعم مشمول» [à relire par un arabophone natif] | "2 to 4 weeks · 1 month of support included" | 9 words, 4.15 s; 2 lines. app.js:357+362/469+474/584+589 (site). ⚑ **T8** (the weeks run from when?), **T5** (what support covers) |
| S6 | 26.4–34.8 (Gulf: 26.4–29.9) | **Price card** (§1.8); Gulf: the no-price line over the held week bars | FR-DZ: « env. » + « 90 000 – 160 000 DA » + small « env. 600 – 1 100 € HT », then « Fourchette indicative, pas un devis. » · FR-FR: « env. 600 – 1 100 € HT » only, then the note | AR-DZ: «نحو» + «90 000 – 160 000 دج» then «تقدير استرشادي، لا عرض سعر رسمي.» [à relire par un arabophone natif] · AR-GU: «سعر قبل عرض السعر.» [à relire par un arabophone natif] | EN-GU: "A price before the quote." · EN 16:9: "about" + "$670–1,200" + "excl. tax", then "An indicative range, not a quote." | 8.4 s (Gulf 3.5 s; 16:9 9.1 s). §1.2. ⚑ **T11** |
| S7 | 34.8–44.2 | **Firm line** (§1.8), long masters only | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 9.4 s. ⚑ **T3**, **T4**, **T9** |
| R | — | **Not rendered** until Gate D: « Après le oui » (between the firm line and the steps) | — | — | — | ⚑ T1, T2, T3, T9 |
| S8 | 44.2–63.0 | **Steps** (§1.8), long masters only | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 18.8 s. ⚑ **A7**, **A8**, **T7**, **A1**, **A3** |
| S9 | 63.0–71.9 | End card (§1.6). The hexagon settles. ♪ heartbeat and sting | Before Gate B: « Lien en bio » · after: « Demander mon Aperçu → » + « Lien en bio » | «الرابط في الملف التعريفي» · after B: «اطلب معاينتك ←» [à relire par un arabophone natif] | "Link in bio" · after B: "Request my Preview →" | 8.9 s DZ (9.6 after B); 14.2 / 15.9 FR-FR; 14.9 / 15.6 Gulf; 6.1 / 8.6 16:9. Market lines per §1.6 |

**Social cut (`len=short`)**: S1 0–5.9 · S2 5.9–11.1 · S3 11.1–17.0 · S5 17.0–21.9 · S6 21.9–30.3 (Gulf: the no-price line, 21.9–25.4) · end card 30.3–39.2 (Gulf 25.4–40.3). After Gate B: the conditions beat 30.3–35.9, end card 35.9–45.5 (Gulf: beat 25.4–31.0, card 31.0–46.6). FR-FR 4:5 short (not posted: LinkedIn takes the long master): 44.5 s.

### 3.2 16:9 adaptation: 69.8 s (72.3 s after Gate B)

- **Layout:** the emblem and the floor plan sit in the visual column. Scope lines stack in the text column at 64 px; earlier lines stay, dimmed, so that by S4 the three scope lines read as a list.
- **Week scale and steps:** the week scale (S5) and the four-node steps line (S8) run full width at y≈760. In AR they run right to left. The conditions run full width at 64 px (3 lines in FR).
- **Price card (S6):** FR shows DA with € underneath, AR shows DA with $ underneath (the longest version, 9.1 s), EN shows $.
- **Chapters:**

  | Time | FR | EN | AR [à relire par un arabophone natif] |
  |---|---|---|---|
  | 00:00 | Ce qui est inclus | What's included | ما تتضمّنه الباقة [à relire par un arabophone natif] |
  | 00:22 | Délai et prix | Timeline and price | المدّة والسعر [à relire par un arabophone natif] |
  | 00:45 | Comment ça démarre | How it starts | كيف نبدأ [à relire par un arabophone natif] |

### 3.3 CTA and `?ref=`

Weeks as planned (W8, AR W9). If V04 moves to W6 (swap rule 4), the codes take `w06` and `w07`.

| File | Placement (week) | Link | ref |
|---|---|---|---|
| FR-DZ long | Instagram Reel + Facebook Page (W8 Tue) | IG bio `dz-ig-bio`; FB post text `{SITE}?lang=fr&ref=dz-fb-fr-w08#pricing` | `dz-ig-bio` / `dz-fb-fr-w08` |
| FR-DZ social cut | YouTube Short (W8 Tue) | linked to the 16:9 video | `yt-ys-fr-w08` |
| FR-DZ social cut | Instagram Story link sticker | `{SITE}?lang=fr&ref=dz-ig-fr-w08#pricing` | `dz-ig-fr-w08` |
| FR-DZ social cut | WhatsApp Status (from Gate B; only if the preview can be removed) | `{SITE}?lang=fr&ref=dz-wa-fr-w08#pricing` | `dz-wa-fr-w08` |
| FR-FR 4:5 long | LinkedIn, first comment (W8 Tue, optional: Christmas week) | `{SITE}?lang=fr&cur=eur&ref=fr-li-fr-w08#pricing` | `fr-li-fr-w08` |
| EN-GU social cut | TikTok, Instagram, YouTube Short (W8 Thu) | bios `{SITE}?lang=en&cur=usd&ref=gu-tt-bio` / `gu-ig-bio`; Short linked to the 16:9 video | `gu-tt-bio` / `gu-ig-bio` / `yt-ys-en-w08` |
| AR-DZ long | Instagram Reel + Facebook post text (W9 Sun) | `{SITE}?lang=ar&ref=dz-fb-ar-w09#pricing` | `dz-fb-ar-w09` |
| AR-GU social cut | TikTok (W9 Sun) | bio `{SITE}?lang=ar&cur=usd&ref=gu-tt-bio` | `gu-tt-bio` |
| 16:9 FR (AR, EN when reviewed) | YouTube description (W8) | `{SITE}?lang=fr&ref=yt-yl-fr-essentiel#pricing` · `?lang=ar&ref=yt-yl-ar-essentiel#pricing` · `?lang=en&cur=usd&ref=yt-yl-en-essentiel#pricing` | `yt-yl-{fr,ar,en}-essentiel` |
| 16:9 (desktop) / social cut (mobile) | The site, beside the Essentiel card (Gate W) | none | — |

### 3.4 What V04 cannot answer yet

| The viewer's question | Scene | Flag |
|---|---|---|
| Who owns the design files? How many rounds of changes? | S3 | T2, T3 |
| Are the domain, certificate and hosting included, and who pays next year? (The site's card says « configurés »; the video does not) | S4b | T4 |
| From when do the 2–4 weeks run? What does the month of support cover? | S5 | T8, T5 |
| Is the DA price before or after tax? | S6 | T11 |
| What do I sign, how many revisions does the firm price include, and do I pay a deposit? | S7, R | T9, T3, T1 |
| Is the firm price known before the Aperçu? | S8 | A7 |

---

## 4. V05 · Studio / Studio / الاستوديو [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | The recommended package: more pages, three languages with native right-to-left Arabic, a documented design system, content the client edits, technical SEO, weeks, support and price, then how a project starts |
| **Lengths** | 9:16 long: 85.6 s DZ, 86.7 s Gulf (86.3 / 87.4 after Gate B) · social cut: 41.0 s DZ, 42.1 s Gulf (47.3 / 48.4 after B) · LinkedIn takes the social cut in 4:5: 46.3 s (53.6 after B), because the long FR-FR master runs 90.9 s · 16:9: 83.5 s (86.0 after B), 3 chapters |
| **Cuts** | As V04. The EN cut is the strategy's "no price; trilingual with RTL" slot when it is scheduled |
| **Gate** | 0, plus O7 for any S3 still. Calendar: W8 only if V04 ran in W6; otherwise next quarter [ST §5, §8.2] |
| **Emblem / plate** | Swinging compass (index.html:787) · `arch.webp`, Pl. II, uncaptioned in Gulf cuts (O1, O6) · stills of the studio's own `#how` steps list (§8.2) |

### 4.1 Scene table (9:16 master; times for the DZ cuts before Gate B)

| # | Time (s) | Visual and motion · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–6.6 | The compass emblem draws in, swings once at the site's 3.4 s and rests. With block 2 (not before 1.5 s), the « Recommandé » chip slides in beside the title (brass fill, `--on-crimson` text, the site's `t-pop`), and `arch.webp` inks in behind with its chip « Pl. II — Arc de Trajan · Timgad » / «لوحة 2 — قوس تراجان · تيمقاد» [à relire par un arabophone natif] / "Pl. II — Arch of Trajan · Timgad" (no plate chip in Gulf cuts). ♪ chime | Block 1: kicker « Formule » · title « Studio ». Block 2: « Le site qui porte vraiment l'entreprise. » + chip « Recommandé » | «باقة» · «الاستوديو» · then «الموقع الذي يحمل الشركة فعلاً.» + «الموصى به» [à relire par un arabophone natif] | "Package" · "Studio" · then "The site that actually carries the business." + "Recommended" | Hook: 2 words, alone ≥ 1.5 s. Block 2 counts the chip: 8 words (EN), 3.8 s; 2 lines. app.js:356+363/468+475/583+590 (site). ⚑ O1, O6 |
| S2 | 6.6–10.8 | Page rectangles multiply in a grid from 6 to 15, with a brass counter | « Site sur mesure, 6 à 15 pages » | «موقع مخصّص، من 6 إلى 15 صفحة» [à relire par un arabophone natif] | "Custom site, 6 to 15 pages" | 7 words, 3.45 s; 2 lines. app.js:364/476/591 (site) |
| S3 | 10.8–18.8 | **Block 1:** three language chips, FR · EN · AR, appear in turn under the arch's three bays (lighting the bays themselves needs hand-traced clip paths, §8.5; without them, the chips alone). **Block 2:** a plain browser frame (blank address bar) shows a **real still of the studio's own site**: the `ol.steps` list of `#how` only (§1.4), Arcanum. **FR and EN cuts:** the FR (or EN) still, then a **reading-direction wipe** to the same list in AR, mirrored; never cross-faded; French or English captions over the Arabic page (the strategy's language-switch exception [ST §3.3]). **AR cuts:** the EN still wipes to the AR still; the FR still never appears under Arabic text. **FR-FR 4:5:** `fr-strict`, the arch and chips only (O3). **Social cut:** the arch and chips only, so the short cut makes no Aperçu mention. Chip on the frame: « Exemple : le site de Numidea Labs » / "Example: Numidea Labs' own site" / «مثال: موقع نوميديا لابز نفسه» [à relire par un arabophone natif] | Block 1: « Trilingue FR / EN / AR, » · Block 2: « avec un arabe RTL pensé nativement » | «ثلاثي اللغة فرنسي / إنجليزي / عربي،» · «بعربية مصمّمة من الأساس للكتابة من اليمين إلى اليسار» [à relire par un arabophone natif] | "Trilingual FR / EN / AR," · "with Arabic RTL built natively" | **Split** (the AR line measured 4 lines). 5 + 9 words (AR), 2.75 + 4.15 s; 2 + 2 lines. app.js:365/477/592 (site). The demo restates [FB §1.8] ("ce site même est trilingue"). Captures `marketing/captures/how-{fr,en,ar}.png` (§8.2). The still shows the site's own step 2 before step 3 (⚑ A7) and step 3's Aperçu text (⚑ A8). ⚑ **O3**, **O7**: **no AR still is rendered** (in any cut) before the native reviewer signs off the Arabic it contains (table below), or the site's Arabic is corrected and recaptured; until then every cut uses the arch-and-chips version |
| S4 | 18.8–23.3 | A **style-and-component sheet in Arcanum only**, coded from the site's tokens (themes.css:23-46): a type scale (Cinzel heading, Geist body, Geist Mono label, a Plex Arabic line), five swatches (`--void`, `--navy`, `--ice`, `--crimson`, `--teal`), a button and a card. It assembles piece by piece, each piece wiping in reading direction. The root theme never changes. Chip: « Exemple : le système de ce site » / "Example: this site's own system" / «مثال: نظام هذا الموقع» [à relire par un arabophone natif] | « Design system documenté — styles, composants, le kit complet » | «نظام تصميم موثّق — الأنماط والمكوّنات والعدّة كاملة» [à relire par un arabophone natif] | "Documented design system — styles, components, the full kit" | 8 words, 3.8 s; 3 lines (FR, EN). app.js:366/478/593 (site). **No six-theme cycle:** it implied that a Studio client gets six switchable themes, which is not in the offer, and switching `:root[data-theme]` recolours the whole frame, the caption being read included. The six themes belong in V25 « Un site, six thèmes » [ST §5], built from six pre-captured stills wiped inside a framed panel on the fixed Arcanum ground, about 1 s each |
| S5 | 23.3–28.2 | A generic editor panel (« Illustration » chip): a field « Titre » is edited, the cursor types a fictional title (« Nos horaires d'été » / «مواعيد العمل الصيفية» [à relire par un arabophone natif] / "Our summer hours"), and the page beside it updates on the same frame | « CMS ou back-office pour gérer le contenu vous-même » | «نظام إدارة محتوى أو لوحة تحكّم لتدير المحتوى بنفسك» [à relire par un arabophone natif] | "CMS or back-office so you manage the content yourself" | 9 words, 4.15 s; 3 lines (FR, EN). app.js:367/479/594 (site); the typed example is new and fictional. ⚑ **T2** (whose account), **T4** (where it is hosted, who pays), **T5** |
| S6 | 28.2–35.2 | Three items, each with a **neutral list marker**: a small brass diamond (a square outline turned 45°, 1.5 stroke on the 24 grid) drawn in per item. **No check marks** (they would read as "passed" or "compliant"), no numbers, no scores | Block 1: « SEO technique, » · Block 2: « Core Web Vitals, accessibilité » | «الجانب التقني من تحسين محرّكات البحث (SEO)،» · «ومؤشّرات الأداء، وإتاحة الوصول» [à relire par un arabophone natif] | "Technical SEO," · "Core Web Vitals, accessibility" | **Split** (the AR line measured 4 lines). 7 + 4 words (AR), 3.45 + 2.4 s; 2 + 2 lines, « البحث (SEO) » [à relire par un arabophone natif] bound by U+00A0. app.js:368/480/595 (site) |
| S7 | 35.2–40.1 | Shared week scale: the range 3–7 hatched, then three cyan month segments after the launch node | « 3 à 7 semaines · 3 mois de support inclus » | «من 3 إلى 7 أسابيع · ثلاثة أشهر دعم مشمولة» [à relire par un arabophone natif] | "3 to 7 weeks · 3 months of support included" | 9 words, 4.15 s; 2 lines. app.js:363+369/475+481/590+596 (site). ⚑ **T8**, **T5** |
| S8 | 40.1–48.5 (Gulf: 40.1–43.6) | **Price card** (§1.8) | FR-DZ « env. » + « 180 000 – 420 000 DA » + small « env. 1 200 – 2 800 € HT », then the note | AR-DZ «نحو» + «180 000 – 420 000 دج» then the note · AR-GU: the no-price line [à relire par un arabophone natif] | EN-GU: the no-price line · EN 16:9 "about" + "$1,300–3,100" + "excl. tax", then the note | 8.4 s (Gulf 3.5; 16:9 9.1). §1.2. ⚑ **T11** |
| S9 | 48.5–57.9 | **Firm line** (§1.8) | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 9.4 s. ⚑ **T3**, **T4**, **T9** |
| R | — | **Not rendered** until Gate D (between the firm line and the steps) | — | — | — | ⚑ T1, T2, T3, T9 |
| S10 | 57.9–76.7 | **Steps** (§1.8) | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 18.8 s. ⚑ **A7**, **A8**, **T7**, **A1**, **A3** |
| S11 | 76.7–85.6 | End card, compass settles | as V04 S9 | as V04 S9 [à relire par un arabophone natif] | as V04 S9 | 8.9 s DZ (§1.6) |

**The site's Arabic inside the `#how` capture (S3), for the native reviewer.** The capture shows these site strings exactly as they are (app.js:621-624). They are already marked for review on the site (app.js:210-212; OWNER-CONTENT item 8). They go into `copy/v05-studio.json` under `capturedText`, each with `arReviewed: false`.

| Step | Title (h3) | Paragraph |
|---|---|---|
| 1 | تصف المشروع [à relire par un arabophone natif] | دقيقتان، كتابةً أو مشافهة. بالفرنسية أو الإنجليزية أو العربية. [à relire par un arabophone natif] |
| 2 | نعود إليك خلال 24 ساعة عمل [à relire par un arabophone natif] | بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق. ليس سعراً تقريبياً، بل رقمٌ واحد. [à relire par un arabophone natif] |
| 3 | نبني المعاينة — مجّاناً [à relire par un arabophone natif] | الصفحة الرئيسية لموقعك بمحتواك، قبل أيّ دفع. للشركات المسجّلة، 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. [à relire par un arabophone natif] |
| 4 | أنت تقرّر [à relire par un arabophone natif] | إن كان الجواب لا، فلا شيء عليك. وإن كان نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل. [à relire par un arabophone natif] |

If the reviewer corrects any of these, the correction is a change to the public site (made in the site's workflow, not from this folder), and the capture is retaken after it.

**Social cut (`len=short`)**: S1 0–6.6 · S2 6.6–10.8 · S3 (arch and chips) 10.8–18.8 · S7 18.8–23.7 · S8 23.7–32.1 (Gulf: 23.7–27.2) · end card 32.1–41.0 (Gulf 27.2–42.1). After Gate B: beat 32.1–37.7, card 37.7–47.3 (Gulf: beat 27.2–32.8, card 32.8–48.4). FR-FR 4:5 (LinkedIn): 46.3 s, 53.6 s after B.

**If the reviewed Arabic runs long:** shorten S3's demo first (the arch and chips only). S3 still states the fact.

### 4.2 16:9 adaptation: 83.5 s (86.0 s after Gate B), rendered only if V05 takes the W8 slot

- **Layout:**
  - S3: the arch fills the visual column, and two site stills sit side by side with the wipe crossing between them: FR 16:9 shows FR | AR under French captions (the strategy's exception), AR 16:9 shows EN | AR, EN 16:9 shows EN | AR.
  - S4: the same single-theme sheet as 9:16, larger.
- **Chapters:**

  | Time | FR | EN | AR [à relire par un arabophone natif] |
  |---|---|---|---|
  | 00:00 | Ce qui est inclus | What's included | ما تتضمّنه الباقة [à relire par un arabophone natif] |
  | 00:36 | Délai et prix | Timeline and price | المدّة والسعر [à relire par un arabophone natif] |
  | 00:59 | Comment ça démarre | How it starts | كيف نبدأ [à relire par un arabophone natif] |

### 4.3 CTA and `?ref=`

Same pattern as V04 (§3.3), with the slug changed, when V05 is scheduled (W8 if V04 ran in W6):
- FR, Tue W8: `dz-fb-fr-w08`, `dz-ig-fr-w08`, `fr-li-fr-w08` (the 4:5 social cut), `yt-ys-fr-w08`.
- EN, Thu W8: `gu-ig-bio` / `gu-tt-bio`, Short `yt-ys-en-w08`.
- AR, Sun W9: `dz-fb-ar-w09`; TikTok uses `gu-tt-bio`.
- YouTube: `yt-yl-{fr,ar,en}-studio`.
- WhatsApp Status after Gate B: `dz-wa-fr-w08`.
- Anchor: `#pricing`.

### 4.4 What V05 cannot answer yet

| The viewer's question | Scene | Flag |
|---|---|---|
| Whose account is the content editor in? Where is it hosted, and who pays for it? What does support cover? | S5 | T2, T4, T5 |
| From when do the weeks run? | S7 | T8 |
| Is the price before or after tax? | S8 | T11 |
| Revisions, contract, deposit? | S9, R | T3, T9, T1 |
| Is the firm price known before the Aperçu? | S10 (and the S3 still) | A7 |
| May a French-targeted video show an Arabic page? | S3 | O3 |

---

## 5. V06 · Moteur / Engine / المحرّك [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | The package for a business tool rather than a site: what kind of application, what it can include, weeks, support and price, then how a project starts |
| **Lengths** | 9:16 long: 70.5 s DZ, 71.6 s Gulf (71.6 / 72.6 after Gate B) · social cut: 39.3 s DZ, 40.4 s Gulf (40.4 / 41.4 after B) · 4:5 FR-FR, long: 75.8 s (76.8 after B) · 16:9: 68.4 s (70.9 after B), **not rendered** until it has a calendar slot |
| **Cuts** | As V04 |
| **Gate** | 0. After Gate B: « Décrire mon projet → » (no Aperçu, ⚑ A4), with no conditions beat. Calendar: next quarter [ST §5] |
| **Emblem / plate** | Turning gear (index.html:804) · `strata.webp`, Pl. IV (O1), with a **coded core-sample layer of this video's own** (below) |
| **Special rule** | **The Aperçu is not shown in this video** until the owner says whether a web application gets one (⚑ A4). The steps scene stops at step 2 (§1.8 "Steps 1–2") |

**The plate and the illustrations.** The site's strata motion is a 2 px core line moving **across** the plate (`core-drill`, styles.css:2209-2214). This video adds its own coded layer instead: a 2 px brass core line drawn **downward** through the plate, one stratum per scope scene (new). In 9:16 the plate is 800 px wide and about 337 px tall (1100:463), so each stratum is only about 85 px: the illustrations sit in a panel **above the plate** (in the text box, y ≈ 660–1180), each joined to its stratum by a thin leader line; the plate itself sits below y 1240, as decoration.

### 5.1 Scene table (9:16 master; times for the DZ cuts before Gate B)

| # | Time (s) | Visual and motion · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–7.7 | The gear emblem draws in and turns at the site's tempo (10 s a turn) for about 4 s, then eases to rest. `strata.webp` inks in below; with block 2 (not before 1.5 s), its chip « Pl. IV — Coupe des couches » / «لوحة 4 — مقطع في طبقات الأرض» [à relire par un arabophone natif] / "Pl. IV — Section through the strata". ♪ chime | Block 1: kicker « Formule » · title « Moteur ». Block 2: « Quand il vous faut un outil métier, pas seulement un site. » | «باقة» · «المحرّك» · then «حين تحتاج شركتك إلى أداة عمل، لا إلى موقع فحسب.» [à relire par un arabophone natif] | "Package" · "Engine" · then "For when your business needs a tool, not just a site." | Hook: 2 words, alone ≥ 1.5 s. Then 11 words, 4.85 s; 3 lines (FR, EN). app.js:370/482/597 (site). ⚑ O1 |
| S2 | 7.7–12.6 | The core line descends to the first stratum; the panel above shows a generic platform outline. « Illustration » chip | « Application web sur mesure : plateforme, portail ou outil métier » | «تطبيق ويب مخصّص: منصّة أو بوابة أو أداة عمل» [à relire par un arabophone natif] | "Custom web application: platform, portal or business tool" | 9 words, 4.15 s; 3 lines (FR, EN). app.js:371/483/598 (site). Shown as an offer, not as past projects [FB §1.6 note] |
| S3 | 12.6–17.1 | Second stratum: in the panel, a generic app shell assembles: a sign-in card, a checkout step (**no payment-method marks**) and a dashboard with **unlabelled bars, no figures** | « Paiement, comptes utilisateurs, tableaux de bord » | «الدفع وحسابات المستخدمين ولوحات المتابعة» [à relire par un arabophone natif] | "Payments, user accounts, dashboards" | 6 words, 3.1 s, plus 0.7 s for the animation; 3 lines (FR, AR). app.js:372/484/599 (site). Never a payment method on screen [FB §2.2] |
| S4 | 17.1–21.6 | Third stratum: a few abstract "web page" tiles feed points into a table, and the table into the app panel. No third-party names or logos on the tiles | « Scraping et intelligence marché, intégrés à l'application » | «استخراج البيانات وتحليل السوق، مدمجان في التطبيق» [à relire par un arabophone natif] | "Scraping and market intelligence, built into the application" | 8 words (EN), 3.8 s; 3 lines (FR, EN). app.js:373/485/600 (site) |
| S5 | 21.6–25.6 | Fourth stratum: connectors link the app to three neutral boxes labelled « Vos outils » / «أدواتك» [à relire par un arabophone natif] / "Your tools" (new). No third-party logos | « Intégrations API et outils internes » | «تكاملات واجهات برمجية وأدوات داخلية» [à relire par un arabophone natif] | "API integrations and internal tools" | 5 words, 2.75 s, plus 0.5 s for the animation. app.js:374/486/601 (site). ⚑ **T4** (hosting and running costs of an application are unwritten) |
| S6 | 25.6–30.5 | Shared week scale: the range 8–16 fills the whole right half. Then six cyan month segments after the launch node | « 8 à 16 semaines · 6 mois de support inclus » | «من 8 إلى 16 أسبوعاً · ستّة أشهر دعم مشمولة» [à relire par un arabophone natif] | "8 to 16 weeks · 6 months of support included" | 9 words, 4.15 s; 2 lines. app.js:370+375/482+487/597+602 (site). ⚑ **T8**, **T5** |
| S7 | 30.5–38.9 (Gulf: 30.5–34.0) | **Price card** (§1.8). The figures at 72 px like every price: « 450 000 – 1 200 000 DA » measures 742 px and holds on one line with its currency | FR-DZ « env. » + « 450 000 – 1 200 000 DA » + small « env. 3 000 – 7 900 € HT », then the note | AR-DZ «نحو» + «450 000 – 1 200 000 دج» then the note · AR-GU: the no-price line [à relire par un arabophone natif] | EN-GU: the no-price line · EN 16:9 "about" + "$3,400–9,000" + "excl. tax", then the note | 8.4 s (Gulf 3.5; 16:9 9.1). §1.2. ⚑ **T11**, **T10** |
| S8 | 38.9–48.3 | **Firm line** (§1.8) | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 9.4 s. ⚑ **T3**, **T4**, **T9** |
| R | — | **Not rendered** until Gate D (between the firm line and the steps) | — | — | — | ⚑ T1, T2, T3, T9 |
| S9 | 48.3–61.6 | **Steps 1–2** (§1.8): two nodes on the dimension line; the line ends open | (§1.8) | (§1.8) [à relire par un arabophone natif] | (§1.8) | 13.3 s. ⚑ **A4** (if a web application gets an Aperçu, replace this with V04's S8), **T7** |
| S10 | 61.6–70.5 | End card, gear settles | as V04 S9, but after Gate B « Décrire mon projet → » | «صِف لنا مشروعك ←» after B [à relire par un arabophone natif] | after B: "Describe my project →" | 8.9 s DZ; 10.0 s after B (§1.6) |

**Social cut (`len=short`)**: S1 0–7.7 · S2 7.7–12.6 · S3 12.6–17.1 · S6 17.1–22.0 · S7 22.0–30.4 (Gulf: 22.0–25.5) · end card 30.4–39.3 (Gulf 25.5–40.4). After Gate B: card 30.4–40.4 (Gulf 25.5–41.4); no conditions beat (no Aperçu).

### 5.2 16:9 adaptation: 68.4 s (70.9 s after Gate B); not rendered until V06 has a slot

- **Layout:** the strata plate spans the visual column top to bottom, with the core line and the four layers stacked; the illustrations sit beside the layers they describe. The scope lines sit in the text column. The week scale and the steps run full width.
- **Chapters:**

  | Time | FR | EN | AR [à relire par un arabophone natif] |
  |---|---|---|---|
  | 00:00 | Ce qui est inclus | What's included | ما تتضمّنه الباقة [à relire par un arabophone natif] |
  | 00:26 | Délai et prix | Timeline and price | المدّة والسعر [à relire par un arabophone natif] |
  | 00:49 | Comment ça démarre | How it starts | كيف نبدأ [à relire par un arabophone natif] |

### 5.3 CTA and `?ref=`

Codes are assigned when V06 is scheduled (next quarter), on V04's pattern: `dz-fb-fr-wNN`, `dz-ig-fr-wNN`, `fr-li-fr-wNN`, `yt-ys-fr-wNN`, `dz-fb-ar-wNN`, `dz-wa-fr-wNN`; TikTok `gu-tt-bio`; YouTube `yt-yl-{fr,ar,en}-moteur` (reserved, not rendered). Anchor: `#pricing`.

### 5.4 What V06 cannot answer yet

| The viewer's question | Scene | Flag |
|---|---|---|
| Who hosts the application and pays its running costs? | S5 | T4 |
| What do the 6 months of support cover? From when do the weeks run? | S6 | T5, T8 |
| Before or after tax? Which currency and how do I pay? | S7 | T11, T10 |
| Revisions, contract, deposit, ownership of the code? | S8, R | T3, T9, T1, T2 |
| Do I get an Aperçu for an application? | S9, end card | A4 |

---

## 6. V07 · Maintenance / الصيانة [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | What happens after launch: the support each package includes, then optional monthly maintenance with no lock-in, and its range. **Nothing about what it covers** (T5, T6) |
| **Lengths** | 9:16: 53.2 s (59.5 after Gate B) · 4:5 FR-FR: 58.5 s (65.8 after B) · 16:9: 50.4 s (58.5 after B), **not rendered** while on hold |
| **Cuts** | FR-DZ 9:16 (DA + €) · FR-FR 4:5 (€) · AR-DZ 9:16 (DA) · 16:9 FR (DA + €), AR (DA + $), EN ($). No Gulf cut and no social cut [ST §5 V07] |
| **Gate** | **Hold publication** until T5 and T6 are decided, together with the light-plan question (X6) [ST §5 V07]. The script is ready: once the terms exist, slot R6 is filled and the video is re-timed |
| **Emblem / plate** | No package emblem: the dimension line continuing past « mise en ligne » is the motif. **No plate by default.** `faq4.png` (the site's illustration for « Et après le lancement ? ») is **not used**: its scaffolding carries a small worker with a hammer [FB §3.1], and beside « On reste. » that figure would stand for the studio or the founder [FB §1.2, §2.4]. Option if O1 allows: `faq1.png` (schedule grid with a finish flag; no figure) beside the launch node in S1 and S7, ≤ 512 px |

### 6.1 Scene table (9:16 master; times for the DZ cut before Gate B)

| # | Time (s) | Visual and motion · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–3.1 | A dimension line arrives at a brass « mise en ligne » node, and the line keeps going past it, dotted. (Option: `faq1.png` inks in above, ≤ 512 px.) **No figure.** ♪ pad and tick | « Et après le lancement ? » | «وماذا بعد الإطلاق؟» [à relire par un arabophone natif] | "What happens after launch?" | 4 words, 2.4 s. faq4.q app.js:89/187/288 (site) |
| S2 | 3.1–5.5 | The dotted line turns solid. Nothing else in the frame: no plate, no figure, no person beside « On reste. » | « On reste. » | «نبقى معك.» [à relire par un arabophone natif] | "We stay." | 2 words, 1.7 s. faq4.a app.js:89/187/288 (site) |
| S3 | 5.5–12.6 | Three stacked bars start at the launch node, labelled with the emblems and names « Essentiel · Studio · Moteur », and extend 1, 3 and 6 month segments in cyan | « Chaque formule inclut 1, 3 ou 6 mois de support » | «كل باقة تشمل دعماً لمدّة شهر أو 3 أو 6 أشهر» [à relire par un arabophone natif] | "Every package includes 1, 3 or 6 months of support" | 11 words (AR), 4.85 s, plus 1.5 s to read the bars. faq4.a (site). ⚑ **T5** (what support covers) |
| S4 | 12.6–17.1 | A small reply mark (a speech-bubble line on the 24 grid) pulses once on the bars | « … et on vous répond sous 24 h ouvrées. » | «… ونردّ عليك خلال 24 ساعة عمل.» [à relire par un arabophone natif] | "… and we reply within 24 working hours." | 8 words, 3.8 s. faq4.a (site). ⚑ **T7**: a reply, not a repair time. No weekday names |
| S5 | 17.1–24.4 | Where the support bars end, the line continues as separate month segments, each one ending with a clean cut: **no chain, no lock**. Any segment can be the last one | Block 1: « Ensuite, la maintenance est en option : » · Block 2: « au mois, sans engagement de durée. » | «بعدها تصبح الصيانة اختيارية:» · «اشتراك شهري دون التزام بمدّة.» [à relire par un arabophone natif] | "After that, maintenance is optional:" · "monthly, with no lock-in." | **Split at the colon** (the FR line measured 4 lines). 6 + 6 words (FR), 3.1 + 3.1 s; 2 + 2 lines. faq4.a (site). ⚑ **T6** |
| S6 | 24.4–30.7 | Price card, one block (no note). ♪ held pad | FR-DZ « env. » + « 18 000 – 60 000 DA par mois » + small « env. 120 – 400 € HT par mois » · FR-FR: € only | AR-DZ «نحو» + «18 000 – 60 000 دج شهرياً» [à relire par un arabophone natif] | EN 16:9 "about" + "$130–450 a month" + "excl. tax" | 13 tokens with the € line, 5.55 s. app.js:376/488/603 + RETAINER app.js:1709 (site figures, §1.2; no tax label on DA). **No « fourchette indicative » line**: the site does not say what sets this range. ⚑ **T6**, **T11** |
| R6 | — | **Not rendered** until the owner decides: « Ce que couvre la maintenance » (what each month includes, what sets the range, whether hosting is in it) | — | — | — | ⚑ T5, T6, T4 |
| S7 | 30.7–36.3 | The launch node in close-up; a small flag on it stays planted (no fireworks) | « Pas de « bonne chance » le jour de la mise en ligne. » | «لا «حظّاً موفقاً» يوم الإطلاق.» [à relire par un arabophone natif] | "No "good luck" on launch day." | 11 words, 4.85 s; 2 lines. faq4.a (site) |
| S8 | 36.3–44.3 | Recap diagram across the frame: « Livraison » node → support segment → month segments with « si vous la voulez »; block 2 arrives as the month segments draw | Block 1: « Livraison → support inclus : 1, 3 ou 6 mois » · Block 2: « → maintenance, si vous la voulez » | «التسليم ← دعم مشمول: شهر أو 3 أو 6 أشهر» · «← صيانة، إن أردتها» [à relire par un arabophone natif] | "Launch → support included: 1, 3 or 6 months" · "→ maintenance, if you want it" | **Split** (one block measured 4 lines in FR and EN). 9 (AR) + 5 words, 4.15 + 2.75 s; 2 + 2 lines. Restated from app.js:376/488/603 and faq4.a. The arrows point left in Arabic, by site convention |
| S9 | 44.3–53.2 | End card (no emblem: the line ends on the wordmark) | as V04 S9 | as V04 S9 [à relire par un arabophone natif] | as V04 S9 | 8.9 s DZ (§1.6). After Gate B, the conditions beat comes first |

### 6.2 16:9 adaptation: 50.4 s (58.5 s after Gate B); not rendered while V07 is on hold

- **Layout:** the bars and the month segments run full width. The text sits above them.
- **Chapters:**

  | Time | FR | EN | AR [à relire par un arabophone natif] |
  |---|---|---|---|
  | 00:00 | Après le lancement | After launch | بعد الإطلاق [à relire par un arabophone natif] |
  | 00:18 | La maintenance | Maintenance | الصيانة [à relire par un arabophone natif] |
  | 00:37 | En résumé | In short | باختصار [à relire par un arabophone natif] |

### 6.3 CTA and `?ref=`

- Weeks are assigned when V07 is scheduled.
- YouTube: `yt-yl-{fr,ar,en}-maint` (reserved, not rendered).
- Social: `dz-fb-fr-wNN`, `fr-li-fr-wNN`, `dz-fb-ar-wNN`.
- Anchor: `#pricing`.

### 6.4 What V07 cannot answer yet

| The viewer's question | Scene | Flag |
|---|---|---|
| What does the included support cover? | S3 | T5 |
| If my site is down, is it fixed within 24 h, or only answered? | S4 | T7 |
| What do I get each month? Why 18 000 or 60 000 DA? Is hosting in it? | S5, S6, R6 | T6, T4 |
| Before or after tax? | S6 | T11 |

---

## 7. V27 · « Quelle formule pour moi ? » / "Which package is for me?" / «أيّ باقة تناسبني؟» [à relire par un arabophone natif]

| | |
|---|---|
| **Purpose** | Help a buyer place themselves using the site's own "for" lines, see the three packages side by side on one honest scale, and know the next step when unsure. **No invented qualifying questions**: the site's for-lines are the guide |
| **Format** | 16:9 only (1920×1080). Three columns: Essentiel, Studio, Moteur. In AR the column order is mirrored (Essentiel on the right) |
| **Length** | 81.3 s before Gate B; 98.5 s after (S7 added) |
| **Cuts** | 16:9 FR (DA), AR (DA), EN ($). The € figures go in the FR description. The LinkedIn carousel is optional and needs its own 4:5 layout (§8.6) |
| **Gate** | 0. S7 only after Gate B. Calendar: **W11, if the W8 review keeps the hours; otherwise next quarter** [ST §5, §8.2]. It takes the old « Trois formules » long-form slot; AR and EN as reviews allow |
| **Assets** | The three emblems (index.html:770, :787, :804) and the « Recommandé » chip; `px-contour.webp` as the pricing texture behind, at 10% (O1) |
| **Left out** | Maintenance. It has its own video (V07, on hold for T6). Add one line here once T6 is decided |

**Layout.** S2–S4: the lifted column widens to **900 px** and the other two shrink to their emblems (about 300 px each) on either side; its text is set at 64 px (AR 72 px) and measures 3 lines at most in every language. S5: **three rows**, not three columns (below).

### 7.1 Scene table (16:9)

| # | Time (s) | Visual and motion · sound | FR | AR [à relire par un arabophone natif] | EN | Reading · sources · flags |
|---|---|---|---|---|---|---|
| S1 | 0.0–3.5 | The three emblems draw in across three columns, **with no names and no chip**: the question names them, and nothing else enters during the hook. ♪ three chimes, one per emblem | « Essentiel, Studio ou Moteur ? » | «الأساسي أم الاستوديو أم المحرّك؟» [à relire par un arabophone natif] | "Essential, Studio or Engine?" | 5 words (AR), 2.75 s, alone. Names app.js:357/363/370 and the EN/AR lines (site); the question is new |
| S2 | 3.5–16.8 | The Essentiel column lifts (900 px), its name appears under the emblem; the others shrink. Three blocks appear in turn in the column | « Une présence crédible, vite en ligne. » → « Vitrine ou landing, 1 à 5 pages » → « 2 à 4 semaines · 1 mois de support inclus » | «حضور موثوق، على الإنترنت بسرعة.» → «موقع تعريفي أو صفحة هبوط، من 1 إلى 5 صفحات» → «من 2 إلى 4 أسابيع · شهر دعم مشمول» [à relire par un arabophone natif] | "A credible presence, live quickly." → "Showcase or landing site, 1 to 5 pages" → "2 to 4 weeks · 1 month of support included" | 3.1 + 4.5 + 4.15 s. app.js:357-362/469-474/584-589 (site). ⚑ **T5** |
| S3 | 16.8–31.5 | The Studio column lifts, with its name and the « Recommandé » chip | « Le site qui porte vraiment l'entreprise. » → « Site sur mesure, 6 à 15 pages · trilingue FR / EN / AR · CMS » → « 3 à 7 semaines · 3 mois de support inclus » | «الموقع الذي يحمل الشركة فعلاً.» → «موقع مخصّص، من 6 إلى 15 صفحة · ثلاثي اللغة · نظام إدارة محتوى» → «من 3 إلى 7 أسابيع · ثلاثة أشهر دعم مشمولة» [à relire par un arabophone natif] | "The site that actually carries the business." → "Custom site, 6 to 15 pages · trilingual FR / EN / AR · CMS" → "3 to 7 weeks · 3 months of support included" | 3.8 (with the chip) + 5.2 + 4.15 s. app.js:363-369/475-481/590-596; the middle line is trimmed from three site lines (restated) |
| S4 | 31.5–46.2 | The Moteur column lifts, with its name | « Quand il vous faut un outil métier, pas seulement un site. » → « Application web sur mesure : comptes, paiement, tableaux de bord » → « 8 à 16 semaines · 6 mois de support inclus » | «حين تحتاج شركتك إلى أداة عمل، لا إلى موقع فحسب.» → «تطبيق ويب مخصّص: حسابات المستخدمين والدفع ولوحات المتابعة» → «من 8 إلى 16 أسبوعاً · ستّة أشهر دعم مشمولة» [à relire par un arabophone natif] | "For when your business needs a tool, not just a site." → "Custom web application: user accounts, payments, dashboards" → "8 to 16 weeks · 6 months of support included" | 4.85 + 4.15 + 4.15 s. app.js:370-375/482-487/597-602; the middle line is restated from t3a + t3b |
| S5 | 46.2–60.2 | **Side by side, in rows.** (1) The shared 0–16-week scale draws across the frame with three hatched bars, one row per package (2–4, 3–7, 8–16), y ≈ 160–520, 2.5 s with no text. (2) Under it, three **price rows** (package name, then its range), y ≈ 560–850, coming in as one block: measured at 76 px, the widest row is 1398 px (EN Moteur), inside the 1600 px safe width; ranges never break. (3) The note, 54 px. ♪ held pad | « Essentiel · env. 90 000 – 160 000 DA » / « Studio · env. 180 000 – 420 000 DA » / « Moteur · env. 450 000 – 1 200 000 DA » → « Fourchette indicative, pas un devis. » | «الأساسي · نحو 90 000 – 160 000 دج» / «الاستوديو · نحو 180 000 – 420 000 دج» / «المحرّك · نحو 450 000 – 1 200 000 دج» → «تقدير استرشادي، لا عرض سعر رسمي.» [à relire par un arabophone natif] | "Essential · about $670–1,200 excl. tax" / "Studio · about $1,300–3,100 excl. tax" / "Engine · about $3,400–9,000 excl. tax" → "An indicative range, not a quote." | 2.5 s + 7.3 s (EN, 18 tokens) + 3.1 s. §1.2 (DA without a tax label, ⚑ T11); app.js:391/503/618 (site). Each package's own range only: no market comparison and no "cheaper than" [FB §1.5]. ⚑ **T11**, **T10** |
| S6 | 60.2–75.2 | The rows fade back. The dimension line returns with nodes 1 and 2 only | « Pas sûr ? Décrivez le projet. » → « On revient sous 24 h ouvrées avec nos questions. » → « Puis, une fois le cadrage validé ensemble, un périmètre écrit et un prix ferme. » | «لست متأكّداً؟ صِف لنا مشروعك.» → «نعود إليك خلال 24 ساعة عمل بأسئلتنا،» → «ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق.» [à relire par un arabophone natif] | "Not sure? Describe the project." → "We reply within 24 working hours with our questions." → "Then, once we have agreed on what to build, a written scope and a firm price." | 2.75 + 4.15 + 6.6 s (EN, 16 words); 3 lines at most. Restated from app.js:394-395/506-507/621-622, **with the condition restored** (« dès que le cadrage est validé ensemble » / "once we have agreed on what to build" / «بمجرّد أن نتّفق معاً على هذا النطاق» [à relire par un arabophone natif], app.js:395/507/622): the firm price follows the agreed scope, not the 24-hour reply. The AR third block is the site's own wording (app.js:622). « Pas sûr ? » is new. ⚑ **A7**, **T7**, **T9** |
| S7 | 75.2–89.9 | **After Gate B only.** A **separate offer card**, not node 3 of S6's line: the dimension line clears, and the viewfinder glyph draws in on its own `--navy` card. The conditions run full width at 64 px. ♪ held pad under the conditions | « Entreprise immatriculée ? » → « On construit d'abord votre page d'accueil, gratuitement : c'est l'Aperçu. » → « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » | «شركة مسجّلة؟» → «نبني الصفحة الرئيسية أولاً ومجّاناً، وهذه هي المعاينة.» → «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [à relire par un arabophone natif] | "Registered business?" → "We build your homepage first, for free: that's the Preview." → "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." | **Split at the question** (one block measured 4 lines in FR). 1.7 + 4.5 + 6.95 s. FR app.js:87 ✂, AR app.js:286 ✂ (site); EN restated from app.js:185; terms app.js:403/515/630. ⚑ **A1**, **A3**, **A4** (does a Moteur project get one?), **A8** |
| S8 | 75.2–81.3 (before Gate B) / 89.9–98.5 (after) | End card (§1.6), the three emblems settling side by side | Before B: block A only (16:9 has no pointer) · after B: « Demander mon Aperçu → » | after B: «اطلب معاينتك ←» [à relire par un arabophone natif] | after B: "Request my Preview →" | 6.1 / 8.6 s |

**Chapters:**

| Time | FR | EN | AR [à relire par un arabophone natif] | Note |
|---|---|---|---|---|
| 00:00 | Essentiel | Essential | الأساسي [à relire par un arabophone natif] | |
| 00:17 | Studio | Studio | الاستوديو [à relire par un arabophone natif] | |
| 00:32 | Moteur | Engine | المحرّك [à relire par un arabophone natif] | |
| 00:47 | Côte à côte | Side by side | جنباً إلى جنب [à relire par un arabophone natif] | |
| 01:01 | Pas sûr ? | Not sure? | لست متأكّداً؟ [à relire par un arabophone natif] | |
| 01:16 | L'Aperçu | The Preview | المعاينة [à relire par un arabophone natif] | After Gate B only |

### 7.2 CTA and `?ref=`

- YouTube (W11, if confirmed): `{SITE}?lang=fr&ref=yt-yl-fr-formules#pricing`, then `yt-yl-ar-formules` and `yt-yl-en-formules` with `?lang=ar` / `?lang=en&cur=usd`. The longest code, `yt-yl-ar-formules`, has 17 characters.
- The FR description adds the € ranges from §1.2 and the conversion note.
- LinkedIn PDF carousel (FR-FR, €): **not in the calendar** (W11's LinkedIn slot holds C1 and the optional V09 [ST §8.2]). If it is scheduled: first comment `{SITE}?lang=fr&cur=eur&ref=fr-li-fr-wNN#pricing`, spec in §8.6.
- The site's pricing section (Gate W): none.

### 7.3 What V27 cannot answer yet

Everything in V04–V06's lists, in short:
- weeks start (T8);
- support content (T5) and maintenance (T6, so it is left out);
- tax on the DA prices (T11) and currency or payment (T10);
- terms after the yes (T1–T3, T9);
- whether the firm price comes before the Aperçu (A7);
- whether every package gets an Aperçu (A4).

---

## 8. Production

### 8.1 Files and parameters (all private, under `marketing/pipeline/`)

- **V04, V05 and V06 are one template:** `videos/pk-formule.html?pk=essentiel|studio|moteur`, with three copy dictionaries (`copy/v04-essentiel.json`, `copy/v05-studio.json`, `copy/v06-moteur.json`) and one illustration module per package. The other videos: `videos/v10-apercu.html`, `v07-maintenance.html`, `v27-formules.html`.
- **Copy outside the markup:** one dictionary per video in `copy/<id>.json`, with a `src` reference per string (the app.js lines and facts-bank sections quoted above) and `arReviewed: false` until sign-off [PL §5.1]. The shared blocks in §1.8 and the end card in §1.6 belong in one `copy/shared.json`. Site text that appears inside a capture goes under `capturedText` (§4.1).
- **URL parameters:** the existing `ratio`, `lang` and `theme` [PL §4], plus:
  - `cut=fr-dz|fr-fr|ar-dz|ar-gu|en-gu|yt` chooses the price display, the plate captions, the pointer, the market line and the CTA;
  - `len=long|short` chooses the long master or the social cut (the strategy calls it `cut=short` [ST §5.1]; here `cut` already names the market cut);
  - `gate=pre|post` chooses the end-card variant, the conditions beat and V27's S7;
  - `pk=` for the package template.
- **The end card never prints a URL or a ref code.** The code lives in the post's link and in the render report (`<id>.report.json`), so each file can be matched to its code.

### 8.2 Components and captures to build (from [PL §5.2] "to build", plus what these scripts add)

| Component | Used in | Notes |
|---|---|---|
| **Per-block safe check and line-count assertion** | all | The scene timeline emits check frames (each text block's settled frame); `render.mjs` seeks each and runs `safeCheck()` with the §1.3 box; each text element's height ÷ line height ≤ 3 (body) or ≤ 4 (small print). Replaces today's last-frame-only check (render.mjs:161-163) |
| **Timing script** | all | Reads `copy/*.json`, prints each scene's reading budget on the longest language, fails if a scene is shorter than its blocks need (`timing.mjs` is the prototype) |
| **Cue export + `bed.mjs --cues`** | all | Tick mute ranges, chime and tick events from the scene timeline, a ticks-off switch, and the bed rendered at each cut's length [MU §3.4]. Until it exists: the silent track (§1.5) |
| End card (series spec), conditions beat | all | §1.6. Sequence A → M → B; solid cursor; per-cut length |
| Price card, with the no-price line | V04–V07, V27 | §1.8. The site's price type, one size, wipe-in, no counting |
| Dimension line: nodes, fill, open end, vertical steps layout; five-tick build, fork and rewind (V10) | V10, steps scenes, V07, V27 | Runs right to left in AR. Ticks are positions, never weekday names |
| Week scale, 0–16 weeks, shared | V04–V06, V27 | Hatched range plus month segments; rows in V27 |
| Page grid with counter (1→5, 6→15) | V04, V05 | On the floor-plan texture or plain |
| Emblem draw-in (four site SVGs) at the site's tempo | all | Paths copied privately with their source line (§1.4) |
| Marks drawn as paths: the "0" (V10 S1), the « N » monogram (V10 S7), the diamond marker (V05 S6) | V10, V05 | §1.4 |
| Coded illustrations: wireframe homepage, reflow, page-title panel, content editor, style-and-component sheet, app shell, data flow, connectors, call window | V10, V04–V06 | Fictional placeholders, « Illustration » chip, no logos, figures, ticks or search results |
| Plate clip paths: the arch's three bays (optional); V06's core-sample layer | V05, V06 | Hand-traced; the bays fall back to chips only |
| Still frame (browser chrome, blank address bar) | V05 S3 | Wiped, never cross-faded |
| Caption chips | all | §1.3 size; part of the picture, not timed text |
| **4:5 layout**, LTR and RTL, designed natively ("defined, not designed" [PL §7]) | V04 (LinkedIn long), V10 and V05 (LinkedIn social cut), carousels | Only where LinkedIn or a carousel has a slot |
| **Captures** `marketing/captures/how-{fr,en,ar}.png` | V05 S3 | See the steps below |

**How to make the captures:**
1. Run Playwright against a local, read-only static server of `/home/user/STICKITTY.INC`.
2. Use `?lang=fr|en|ar`, the Arcanum theme, a 1440×900 viewport, `prefers-reduced-motion: reduce`, and wait for the fonts to load.
3. Take an element screenshot of **`#how ol.steps` only**: it leaves out the kicker, the title h2#how-h (« Quatre étapes. Zéro surprise. ») and the lead, and the `.how-cta` buttons.
4. Write the files to the scratchpad only, never into the repository.
5. Check every capture: no client logo, no line from the do-not-claim list, no h2 or lead in the frame.
6. **The AR capture is not used in any render** until the native reviewer has signed off its Arabic (§4.1, O7).

### 8.3 Render plan: what the calendar actually posts (4.2 s of render time per second of video, per output [PL §3]; re-measure on the rendering machine)

Render the gate variant that will be live on the publication date; re-render the other only if the date moves (after Gate B, only the conditions beat and the end card change).

| Video | Slot [ST §8.2] | Files | Seconds of video | Approx. render (×2 margin) |
|---|---|---|---|---|
| V04 | W8 (or W6) | FR-DZ long, AR-DZ long; FR-DZ, AR-GU, EN-GU social cuts; FR-FR 4:5 long; 16:9 FR = 7 | ≈ 411 | ≈ 29 min (58) |
| V10 | W10 if Gate B | FR-DZ, AR-DZ, EN-GU long; FR-DZ, EN-GU, AR-GU social cuts; FR-FR 4:5 social cut; 16:9 FR = 8 | ≈ 517 | ≈ 36 min (72) |
| V27 | W11 if hours | 16:9 FR = 1 | ≈ 81 | ≈ 6 min (11) |
| AR and EN 16:9 of V04 and V10 | as reviews allow (W10+) | 4 | ≈ 296 | ≈ 21 min (42) |
| **Total in the 12 weeks** | | **20 files** | | **≈ 1.5 h (≈ 3 h with the margin), unattended** |
| V05, if it takes W8 | W8 | as V04, with the 4:5 social cut = 7 | ≈ 426 | ≈ 30 min (60) |
| V06, V07 | next quarter / on hold | none | — | — |

Example: `node render.mjs videos/pk-formule.html?pk=essentiel --ratios 9x16 --langs fr --cut fr-dz --len short --gate pre --theme arcanum --audio <silent or approved bed>`, run once per file in the table.

### 8.4 QA before any file is published

1. `npm run lint` passes on `videos/` and `copy/`: no do-not-claim terms, no percentages, no « HT » or «غير شاملة الضريبة» [à relire par un arabophone natif] on a DA string while T11 is open, every price string carries U+202F / U+00A0 / U+2060 where §1.2 requires them, and the Arabic carries the review marker [PL §2.8].
2. A person reads each `copy/<id>.json` against this file and the facts bank. Every price matches §1.2 character for character.
3. The Arabic is signed off by the native reviewer (Algeria for AR-DZ, Gulf usage for AR-GU [ST §7.1]), **including the site's Arabic inside any capture** (`capturedText`, §4.1). Set `arReviewed: true`, then remove the marker from the rendered copy only.
4. The gate for that video is open (§0.3), and slot R is still unrendered unless Gate D is met.
5. The render report says `verify OK`, the **per-block** safe-area check and the line-count assertion pass with the §1.3 box, and `timing.mjs` passes on the reviewed copy. **Until the per-block check exists, a person steps through one still per text block in every cut** and checks the box by eye.
6. A real phone check:
   - every block is readable in its time;
   - the Arabic shapes and joins correctly, and no line starts with a Latin word;
   - nothing sits under the platform interface, checked with the phone **in a French or English interface and in an Arabic one** (the button rail follows the app language);
   - the video makes sense with the sound off;
   - 16:9: in a 1280 px desktop player and in landscape full screen on a phone (§1.3).
7. The post's link is tested: the site opens in the right language and currency, the anchor works, the link preview is removed (or the link left out), and a test WhatsApp prefill ends with ` [ref]` (once WhatsApp is live).
8. No client screen, no face, no figure, no URL, no payment mark, no check mark on a quality line, no search-result line, and in Gulf cuts no landmark caption, flag or emblem (§1.4), appears in any frame. Step through the review stills.

### 8.5 Hours (estimates for one person, from the component lists; not measured)

**Series components** (shared with the trailer and services scripts; windows from [ST §6.4]):

| Component | Estimate | Window |
|---|---|---|
| Per-block safe check and line-count assertion | 3–4 h | W0–W1, pipeline tooling |
| Timing script on `copy/*.json` | 2–3 h | W0–W1 |
| `cut`, `len`, `gate`, `pk` parameters; per-cut end-card length; report per cut | 2–3 h | W0–W1 |
| Cue export and `bed.mjs --cues` (with a ticks-off switch) | 4–6 h | W0–W1 |
| End card (series spec) and conditions beat | 4–6 h | W0–W1, template A |
| Dimension line, including the vertical steps layout | 3–4 h | W0–W1, template A |
| Caption chips | 0.5–1 h | W0–W1 |
| **Subtotal** | **18.5–27 h** | Overlaps the strategy's 12–15 h of tooling and 11–15 h of template A |

**Shared package components** (proposed for **W4–W5**, with the Aperçu trailer's price card):

| Component | Estimate |
|---|---|
| Price card and no-price line | 2–3 h |
| Week scale | 2–3 h |
| Firm line | 1–2 h |
| Steps scene (titles, collapse, conditions) and Steps 1–2 | 2–3 h |
| **Subtotal** | **7–11 h** |

**Per video** (beyond the components above):

| Video | What it adds | Estimate | Window |
|---|---|---|---|
| V04 (template C) | Page grid with counter 1–2 h; emblem draw-in 1.5–2.5 h; template strike and engraved page 2–3 h; reflow 1.5–2 h; page-title panel 0.5–1 h; 4:5 layout LTR and RTL 2–3 h; 16:9 layout 3–4 h; copy, assembly, social cut and phone check 3–4 h | 14.5–21.5 h | W6–W7 (W4–W5 if Gate B is late) |
| V10 | Glyph and "0" path 1–1.5 h; wireframe build 2–3 h; call window and « N » mark 1.5–2 h; five-tick build, fork and rewind 2–3 h; conditions list 0.5 h; 4:5 layout 2–3 h; 16:9 layout 3–4 h; copy, assembly, social cut and check 3–4 h | 15–21 h | W8–W9 |
| V05 | Content editor with typing 2–3 h; style-and-component sheet 1.5–2.5 h; still frame and captures 2–3 h; arch bay clips (optional) 1.5–2 h; copy, assembly, social cut and check 3–4 h; 16:9 layout 3–4 h | 13–18.5 h | only if scheduled |
| V06 | App shell 2–3 h; data flow 1.5–2 h; connectors 1–1.5 h; core-sample layer and panel 1–1.5 h; copy, assembly, social cut and check 3–4 h | 8.5–12 h (+3–4 h for 16:9) | next quarter |
| V07 | Recap diagram, assembly, check | 3–5 h | on hold |
| V27 | Column lift and rows layout 3–4 h; assembly and check 2–3 h (+2–3 h for the carousel) | 5–7 h | W11 if hours |

**Against the strategy's budget** [ST §6.4]: template C is budgeted at 12–18 h; these scripts need about **22–32 h** (the package components plus V04's own pieces). The V10 explainer is budgeted at 6–10 h; it needs about **15–21 h**. Proposal: build the shared package components in W4–W5 (the strategy already allows template C there if Gate B is late), so that W6–W7 carries only V04's own pieces, about 7–11 h a week on top of the weekly tasks. **OWNER PREREQUISITE:** confirm these hours, or slip V04 and V10 by one master slot each. The cadence concern of the first draft (a new 64–79 s master almost every week, W4–W8) no longer applies: the revised calendar places one package master (V04) and V10 in the window, with V05 only as an alternative.

### 8.6 Carousels (4:5 pages from native 4:5 stills, never crops) [ST §6.5]

Stills are rendered with `--still <frame>` from the 4:5 layout, at each block's settled frame; a page may hold two blocks that the video shows in sequence, because the reader sets the pace. Exported to PDF with the strategy's "4:5 stills to PDF" tool (W0–W1).

**« Ce que contient Essentiel »** (W7 if Gate B is closed; optional W9 [ST §8.2]):

| Page | Frame | Strings |
|---|---|---|
| 1 | V04 S1, block 2 settled | « Formule · Essentiel » + « Une présence crédible, vite en ligne. » |
| 2 | S2 | « Vitrine ou landing, 1 à 5 pages » |
| 3 | S3 | « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs » |
| 4 | S5 | « 2 à 4 semaines · 1 mois de support inclus » |
| 5 | S6 | IG + FB (`cut=fr-dz`): « env. 90 000 – 160 000 DA » + « env. 600 – 1 100 € HT » + the note · LinkedIn PDF (`cut=fr-fr`): « env. 600 – 1 100 € HT » + the note. The conversion note goes in the post text |
| 6 | S7, block 2 settled | the firm line, both blocks |
| 7 | S8, a still state with titles and conditions together (`still=steps`) | the four titles + the full conditions |
| 8 | End card | block A + pointer (« Lien en bio » / « Lien en commentaire »); after Gate B, the Aperçu CTA (page 7 already carries the conditions) |

**V27's carousel:** not in the calendar. If it is scheduled, it needs its own 4:5 layout (the 16:9 three-column frames cannot be cropped to 4:5) and a `cut=fr-fr` variant with € rows: 1 the question; 2–4 one page per package (for-line, scope line, weeks); 5 the week bars and three € rows (« Essentiel · env. 600 – 1 100 € HT » …) + the note; 6 « Pas sûr ? » + step 2 with its condition; (after Gate B) 7 the Aperçu card with the conditions; 8 the end card.

**A Studio carousel** (« Ce que contient un site Studio », a W5 Thursday fallback in the pre-review strategy) is not in the revised calendar. If it returns, it follows the Essentiel spec with V05's frames, and its S3 page uses the `fr-strict` still for LinkedIn (O3).

### 8.7 Cross-file alignment (other files this revision does not edit)

| File | What should change to match this file |
|---|---|
| `strategy.md` | §3.2 ("Price on screen: DA HT", hook H5 « … DA HT. »), §6.3 ("DA HT"), §6.5 ("every page that shows a price carries « env. … HT »"): DA without « HT » until T11. §5 lengths for V04–V07, V10 and V27 (§0.1 here); the V04–V06 short cut excludes the steps scene. §6.4: template C 22–32 h and V10 15–21 h, or the W4–W5 split proposed in §8.5. V02's title « Quatre étapes. Zéro surprise. » carries the promise this file holds back until T1–T4 |
| `pipeline.md` | §5.2: the price card wipes in (it says "counted up from 0"); the end card shows no `?ref=` code; `safeCheck()` per text block, not on the last frame; the 4:5 layout is a design task |
| `scripts-trailer.md`, `scripts-services.md` | The end card: the §1.6 series spec (no blinking cursor, no URL, no beam sweep on the card, CTA as text, label « Studio web & logiciel · Bordj Bou Arréridj, Algérie », sequence A → M → B, conditions as their own beat before the card). The 9:16 box x 140–940 for every language (they use x 120–940 and AR x 140–960). The Arabic pointer: «الرابط في الملف التعريفي» here, «الرابط في الملف الشخصي» in the services script [à relire par un arabophone natif]; the reviewer picks one |
| `music.md` | §3.4: `--cues` with a ticks-off switch is now a planned component (§8.2); the percussion-only bed needs its second pass before it is offered |
| `channels.md` | §1.4: the box x 80–940 / AR x 140–1000 becomes x 140–940 for every language. §5.2: the 16:9 lengths here (69.8–86.0 s per package, 78.4–89.5 s for the Aperçu, 50.4 s for maintenance) stay under its 2–3 min / 90–120 s / 60–90 s research targets, because the scripts use only the site's strings; reaching those lengths would need content the facts bank does not hold |
| `facts-bank.md` | "How to use", prices: the « HT » rule does not apply to dinar prices until T11 is settled |

---

## 9. Open questions for the owner

Most of these are the flags in §1.7. Here they are in the order that unblocks the most video. Items marked **OWNER PREREQUISITE** block a render or a publication.

1. **Gate D terms (T1, T2, T3, T4, T9):** deposit and schedule, ownership at delivery, revision rounds, hosting and renewals, quote or contract. Each one unlocks slot R « Après le oui » in four videos. T1–T4 together also bring back Essentiel's domain line, « sans frais cachés » and « Quatre étapes. Zéro surprise. ».
2. **Tax on the dinar prices (T11), OWNER PREREQUISITE with the accountant:** are the DA ranges before tax? Until you say so, the videos show « env. … DA » with no tax label, as the site's DA cards do. The € and $ lines keep « HT » / "excl. tax".
3. **The lawyer's question (A8), OWNER PREREQUISITE:** when you book it (W0), make it cover the Gate-0 mention of the Aperçu as step 3 of the method (the long package masters, V05's `#how` still, caption line 3), not only the Aperçu push.
4. **Hours (§8.5), OWNER PREREQUISITE:** the package template needs about 22–32 h and the V10 explainer about 15–21 h, against 12–18 h and 6–10 h in the strategy. Confirm the time (with the shared components moved to W4–W5), or let V04 and V10 slip one master slot each.
5. **Support and maintenance (T5, T6, T7):** what the included months cover, what each maintenance month covers and what sets 18 000 vs 60 000 DA, and whether « sous 24 h ouvrées » is a reply or a fix. V07 is held, and maintenance is left out of V27, until these are decided.
6. **The Aperçu's rules (A1–A6):** who counts as registered, when the 5 days start and what content they need, what happens when the month is full, which projects get one (**does a Moteur web application?** Until then V06 keeps « Décrire mon projet → »), what happens to the page and the content after a no, and whether the page is handed over before a contract.
7. **Order (A7):** does the written scope and firm price come **before** the Aperçu (as the site's method shows) or **after** it (as the campaign kit's call script implies)?
8. **V10's gate:** the revised strategy publishes V10 from Gate B (W10). Should it also wait for Gate A (own domain, registration)?
9. **Gulf cuts (O6):** may the lighthouse and arch plates keep their captions (« Cap Carbon · Béjaïa », « Arc de Trajan · Timgad ») in the Gulf cuts? They say "Algeria", not "local office"; the written rule says "no landmarks". Until you confirm, they are shown uncaptioned there.
10. **The site's Arabic in the `#how` capture (O7):** the native reviewer reads the eight strings in §4.1 before V05's S3 still is rendered. Corrections go to the site first.
11. **Arabic tax label for the $ lines:** «قبل الضريبة» (the site) or «غير شاملة الضريبة» (the facts-bank rule) [à relire par un arabophone natif]? And should the Arabic name of the offer be paired with «الموقع الإلكتروني», as the campaign kit advises [à relire par un arabophone natif]?
12. **The France call to action after Gate B:** the strategy uses the kit's « Écrivez-moi « Aperçu » en message privé » (first person, your voice, answered in LinkedIn messages). Keep it, or use the site's « Demander mon Aperçu → »?
13. **Wording choices in these scripts:**
    - The Aperçu's EN and AR outcome line is restated from the French and kept to "having already seen your homepage"; the site's EN and AR line is a superlative.
    - « Zéro risque » is left out.
    - « sans frais cachés » and « Quatre étapes. Zéro surprise. » are left out until T1–T4 are settled.
    - The firm timeline and the firm price are joined into one restated line, shown in two blocks (§1.8).

    Do you agree with all four?
14. **Hook B for Essentiel (FR-DZ):** test a price-first opening (« Site vitrine : env. 90 000 – 160 000 DA ») against the default, or not?
15. **The engravings (O1):** may the existing generated plates appear in these videos? Every video has a fallback without them, and none uses a plate with a figure.
16. **Music (O2):** after the listening test and once `--cues` exists, the code-made bed or the silent track? The percussion-only bed waits for its second pass.
17. **Loi Toubon (O3):** may the FR-FR Studio cut show an Arabic page as its subject, with a French caption? Until the answer, it uses the `fr-strict` render.
18. **The longer Aperçu video:** on YouTube, keep the 78.4 s version, or add scene S4b for 89.5 s?
19. **Website videos (Gate W):** which hosting option, (a), (b) or (c) [CH §5.3]? On mobile the site's player should serve the 9:16 social cut or the 4:5 file, not the 16:9.

---

## 10. Revision log (2026-10-26, after review)

Each line: the review issue → what changed here.

**Prices and honesty**
- « HT » on dinar prices was an unbacked tax claim → DA strings carry « env. » / «نحو» [à relire par un arabophone natif] only (§1.2 table, price card, Hook B, V04 S6, V05 S8, V06 S7, V07 S6, V27 S5); € and $ keep HT / excl. tax; T11 rewritten as an OWNER PREREQUISITE; the lint checks it (§8.4).
- AR price strings marked only in the row label → the marker follows each Arabic price string (§1.2).
- « Quatre étapes. Zéro surprise. » on screen → removed from V10 S4b (titles only now); the `#how` capture starts at `ol.steps`; restored only with « sans frais cachés » after T1–T4 (§0.2, T4).
- V27 S6 dropped the condition on the firm price → restored in FR, EN and AR (the AR from app.js:622), split into two blocks and re-timed (10.8 → 15.0 s).
- V04 S4 search-result line → replaced by a page-title panel with placeholders; « Illustration » chip added.
- V05 S6 check marks → neutral diamond markers.
- V05 S4 six-theme cycle (implied six themes for clients; unbuildable on `:root`; full-frame recolours) → a single-theme style-and-component sheet with « Exemple : le système de ce site »; the six-stills method noted for V25.
- V10 S12 (now S11) EN "knowing what you get" → "having already seen your homepage"; AR restated to match, with a note on «على بيّنة» [à relire par un arabophone natif] for the reviewer.
- Gulf "no landmarks" rule contradicted by captioned plates → rule restated (§1.4); Gulf cuts show the plates uncaptioned until the owner confirms (O6).
- `faq4.png` worker beside « On reste. » → plate dropped from V07; dimension line alone, `faq1.png` (no figure) as an option; "no plate with a figure" added to §1.4.
- V05 S3 AR still shows unreviewed site Arabic → the eight captured strings are listed for review (§4.1), go into `copy/v05-studio.json`, and no AR still is rendered before sign-off (O7; QA step 3).
- V05 S3 mixed FR and AR in AR cuts, and captured the lead → AR cuts wipe EN → AR; capture is `ol.steps` only; the social cut uses the arch and chips.
- A7 vs V27 S6–S7 → S7 is a separate offer card, not node 3; A7 states what V27 does.
- A8 scope → its "Where it comes up" now covers the Gate-0 step-3 mentions and caption line 3, with the fallback if the lawyer says no.

**Lengths, layout and timing**
- 9:16 masters too long for TikTok, Shorts, Stories and Status → a social cut (`len=short`) per package (about 39–42 s before Gate B) and the V10 social cut (44.1 s DZ) as the file for those placements; placement tables rewritten (§2.3, §3.3).
- 16:9 plan vs the calendar → 16:9 rendered only for slotted videos (V04 W8, V10 W10, V27 W11, V05 only if it takes W8); V06 and V07 16:9 reserved, not rendered; codes and weeks re-mapped to the revised calendar; the channel research's longer targets addressed in §8.7.
- No hours → §8.5, per component and per video, compared with the strategy's budget, with the W4–W5 proposal and an OWNER PREREQUISITE.
- Safe zone → one box x 140–940 for every language (the intersection; the rail follows the app language); every wrap re-measured at 800 px.
- Safe check on the last frame only → per-block check frames and a line-count assertion specified (§1.3, §8.2); manual still-by-still check until then (QA step 5).
- Blocks over 3 lines → split: firm line (at the em dash), V10 S4 (after « avant tout paiement »), V10 S12 conditions (three-item list), V05 S3, V05 S6, V07 S8; also found in the re-measure: V10 S11 (FR) and V07 S5 (FR); V27 S7 (FR, 16:9).
- V27 S5 three columns impossible → three rows, widest 1398 px in 1600 px; S2–S4 lifted column at 900 px, measured.
- 16:9 type too small → body 64 px, small print 54 px, conditions 64 px full width; 16:9 designed for landscape; the site's mobile player serves 9:16 or 4:5; the phone-upright check replaced.
- End card unreadable in 7 s → a sequence A → M → B with its own reading times, motto dropped, lengths per cut (§1.6).
- Theme cycle unbuildable → removed (see above).
- Wordmark and colour tokens → rebuilt as the site does (Cinzel « Num »/« Labs », Geist 600 « idea » in `--teal-text`, solid cursor block); text tokens vs fill tokens in the token table.
- Conflicting shared specs → one end-card spec and one price-card spec labelled as the series spec; post-Gate-B CTAs aligned with the strategy (Aperçu CTA after a conditions beat; France « Écrivez-moi « Aperçu » … »; V06 excepted); other files' changes listed in §8.7.
- Price typesetting → the site's price type, one size (72 px; 76 px in 16:9; 80–88 px does not fit), U+202F / U+00A0 / U+2060 required.
- Timing arithmetic → every Time column recomputed by `timing.mjs` from the final strings (numerals counted as words); price card 8.4 s; V27 S5 14.0 s; V10 S7 7.3 s.
- Cue map vs `bed.mjs` → cue export added to §8.2 and §8.5; silent track until then; percussion-only bed not offered.
- Chip size and the hook → chips 40 px on `--void`; no chip or plate caption in a hook's 1.5 s (V05 S1, V06 S1, V27 S1 changed).
- Plate and emblem motion → V06's drill is the video's own coded layer with the illustrations beside the plate; bay clip tracing budgeted; beam, gear and swing at the site's tempo.
- Favicon « N » and the stroked "0" → drawn as paths (§1.4).
- Steps scene in 9:16 → vertical line, titles beside it, collapse to numbers, then the conditions; measured.
- Gulf no-price slot → one line, 3.5 s, pointer left to the end card.
- V10 gate stated two ways → §0.3 and §2 both say Gate B (with A8) plus the AR review, following the revised strategy; `gate=post` only; the A-and-B option put to the owner (§9 Q8).
- Conditions before the call to action [ST §3.4] → V10's outcome line and conditions swapped (the outcome is now S11, the conditions S12, last before the end card; flags A1 and A3 re-pointed); in V04–V06 slot R moves between the firm line and the steps scene.
- Carousels → §8.6 specs for « Ce que contient Essentiel » (with the € variant and PDF export) and V27's optional carousel; the Studio carousel noted as not in the revised calendar.
