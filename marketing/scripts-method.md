# Numidea Labs: V02 « Méthode », the method video — 9:16 short cut and 16:9 YouTube cut, variants N and A

PRIVATE. Never copy this file, or anything rendered from it, into `/home/user/STICKITTY.INC` (the public repository).
Written 2026-10-27 against the site at commit `ed1e6ad` (2026-10-27 03:45 UTC). On 2026-10-26 the owner merged the old four-step « Comment ça marche » section into the Aperçu card: the site's path from the first message to the decision is now **five steps**, `prev.tl1`–`prev.tl5` in `assets/app.js` and the `<ol class="ptl">` of `#apercu` (index.html:553-562). This file scripts that path.
It builds on `scripts-trailer.md` [TR] (V01 « L'atlas »: its §4 structure, its components and the series end card are reused), `out/v01/REPORT.md` [RP], `PLAN.md` [PN] §3, §9-§10, `strategy.md` [ST], `facts-bank.md` [FB], `scripts-packages.md` [PK], `channels.md` [CH], `music.md` [MU] and `pipeline.md` [PL].
**Where it departs from the plan files:** they predate the site change. [ST §5], [PN §3, §10 #3] and [PK §0.2] call V02 « Quatre étapes » with step 3 « On construit l'Aperçu — gratuit »; the site now states five steps and no longer carries the « Quatre étapes. Zéro surprise. » title, its lead or the `#how` section. This file follows the site; §8 lists the plan lines to update.
Every Arabic string is marked **[à relire par un arabophone natif]**. Nothing here is approved for posting yet (§7).

---

## 0. Summary

### 0.1 What this file scripts

| ID | What it is | Length · ratios | Gate | Slot [PN §4] | Section |
|---|---|---|---|---|---|
| **V02-s N** (« neutral ») | The method, short cut: the hook (the path's two ends, in the site's words), the five steps as the site states them, the series end card. Step 3 says what happens (you send your content, we build your homepage, 5 working days) and never names the Aperçu. **No call to action, no URL, no price figure** | **970 frames, 32.33 s** · 9:16; the LinkedIn 4:5 is a crop of the `pointer=li` 9:16 render | **0**: postable now | W4: FR Tue 24 Nov, EN Thu 26 Nov; AR after the native review | §4.1 |
| V02-s A (« apercu ») | The same, plus **one inserted scene, S4A**, right after step 3: « L'Aperçu · avant tout paiement » and the site's conditions verbatim (`prev.terms`), alone on their band for 7.0 s | **1200 frames, 40.00 s** · 9:16; 4:5 crop | **A8**: not posted until the lawyer's written OK | — | §4.1 (S4A), §5 |
| **V02-y N** | YouTube cut: the same scenes, slower, with the site's full support lines; five chapters, one per step, each ≥ 10 s | **1570 frames, 52.33 s** · 16:9 | 0 | W5 (YouTube upload) | §4.2 |
| V02-y A | The YouTube cut with S4A | **1800 frames, 60.00 s** · 16:9 | A8 | — | §4.2, §5 |

All four come from one page (`pipeline/videos/v02.html` + `v02.js`, to build) and one copy dictionary (`pipeline/copy/method.json`, Appendix A, created with this file): `cut=s|y` (default from the ratio: 9:16 → `s`, 16:9 → `y`) and `v=n|a` (default `n`). FR and EN masters now. **Arabic is laid out (right-to-left rail, right-aligned 9:16 band, mirrored 16:9 columns) and never rendered before the native review** (G1): the copy loader refuses an AR render while `arReviewed` is false.

### 0.2 The choices that shape every cut

1. **The site's path, not the plan's four steps.** Five steps, in the site's own order and words: (1) « Vous décrivez le projet » (2) « On revient sous 24 h ouvrées » (3) « Vous envoyez votre contenu, on construit votre page d'accueil » (4) « On vous la présente » (5) « Vous décidez ». Each step shows its short label (`prev.tlN`) and one supporting line (`tl1p`, `tl2p`, `tl3d`, `tl4d`, `tl5p`), quoted or trimmed, each with its fact ID (§2).
2. **The title is the site's own word for this card: « Méthode »** / "Process" / «المنهج» [à relire par un arabophone natif] (`nav.about`, app.js:18 / :106 / :197; the menu links it to `#apercu`, index.html:235). It names the video in captions, on YouTube, on the carousel and in file metadata, never on screen. Never « Zéro surprise » (the owner's terms after the yes, T1–T4, do not exist yet: Gate D) and never « Quatre étapes » (the site has five).
3. **Hook = the path's two ends, set at frame 0:** « Vous décrivez le projet » over « Vous décidez » (6 words in FR and EN, 4 in AR), the second line in the swash face. Both are site strings (`prev.tl1`, `prev.tl5`). The first line then shrinks into station 1's label (a type move); the second leaves and comes back as station 5.
4. **The picture is the site's own path.** BRAND.md:704-707 sets it "five steps abreast with the line horizontal (the marker sits ABOVE its copy)", and the site switches to that layout from 720 px of width: the 9:16 band is 800 px wide. So: a dimension line (the hero's `.dim-line` idiom) carrying the site's five marks (styles.css:1515-1575): a ring, a ring, **five day cells** (`.ptl-build`), a ring, and **the decision diamond** in the primary accent. The marks ink in the way the site draws them ("each moment's mark in turn — the line out of it draws once it has appeared, the five days fill one by one, the decision lands last", styles.css:1555-1557), and an active ring slides from station to station. Under the rail, the step's label and its line; under those, one picture per station in a fixed window: faq3 (talk), faq2 (scope and price), the blueprint and the day cells (the build), the call frame (the presentation), the built page (the decision).
5. **No price figure.** « Payé jusqu'ici : 0 DA » (`prev.tl5d` + `.ptl-zero`) is a price figure: it is left out of both variants, every still and every caption.
6. **Two variants, one difference.** A inserts one scene, S4A, between step 3 and step 4. N never names the offer: no « Aperçu », « gratuit », « avant tout paiement », conditions or "4 a month", and the copy loader refuses them in N (§1). Every other frame is identical: N's f0–519 are A's f0–519, and N's f520–969 are A's f750–1199 (9:16); in 16:9 the insert sits at f900 (§5).
7. **The same series as V01:** Arcanum throughout; the `--void` ground with the 2 px brass grid; Cinzel headings, the swash in solid `--teal-text` and `--font-head-em`; Geist body and Geist Mono durations; plates as luminance masks; wipes in the reading direction; exits that end on the scene boundary while the next scene enters on it [RP §1 issue 3]; **the series end card verbatim** (wordmark with its solid cursor, label, motto, pointer); the code-made bed, seed 7, approved by the owner on 2026-10-27 for every language.
8. **Reading time [TR §3.2], checked in every language:** load ≤ 3 words/s per scene; every block held ≥ 0.35 s per word + 1 s; entrances ≥ 0.33 s apart; the hook at hook size ≥ max(1.5 s, words ÷ 3). `_review/measure-v02/timing.mjs` runs the tables of §4.4 against `method.json`: all pass.
9. **Lengths:** 9:16 N 32.33 s and A 40.00 s, inside [PN §3]'s 30–40 s; 16:9 N 52.33 s and A 60.00 s, inside 50–60 s, with five chapters of ≥ 10 s. The 9:16 lines are trimmed to fit A inside 40 s (Q2); the 16:9 carries the site's lines in full.

### 0.3 Owner prerequisites and open points (nothing below is filled in by the script)

| # | What is needed | Blocks | Where |
|---|---|---|---|
| P1 | **The lawyer's written answer to A8**, covering the Aperçu as a step of the method before the ANAE registration. Recommended: put N's shared path to the lawyer too (§5, note) | Every A file | §5, §7 |
| P2 | The native Arabic reviewer: every AR string of this file and of `method.json`, including two trims (T64, T70) and the title «المنهج» | AR masters | G1 |
| P3 | OK on the title « Méthode » / "Process" / «المنهج» | Captions, YouTube, carousel | Q1 |
| P4 | OK on the 9:16 trims: T64 without « dès que le cadrage est validé ensemble », T72 without « on enchaîne sur le reste », « En français, anglais ou arabe. » in the caption only | 9:16 files | Q2 |
| P5 | The dunes plate in the Gulf masters (AR, EN): no objection? Fallback: Plate I, as V01 | S1 of the AR and EN masters | Q4 |
| P6 | A only: in 9:16 A the bed's last chord change (Dm, with its two-note chime) falls under the conditions at 21.33 s. Accept, or add `--chord-chimes off` to `bed.mjs` (already on [TR §3.4]'s tooling list) and re-render that one bed | 9:16 A audio | Q5 |

---

## 1. Rules these scripts apply

V01's rules apply unchanged [TR §1]: site strings only, each with its fact ID; nothing from the do-not-claim list [FB §2] (team size, years, client counts, tool names, Nomara, results, quotes, payment terms, ownership, legal data about the studio); no URL, email, phone number or ref code on screen; no face or figure for the founder (V02 has no founder scene); no client screen or name; Arabic in IBM Plex Sans Arabic, 12 % larger, line-height 1.5, never tracked, Western digits, never a line starting with a Latin word; no gradient text, no glow on type, no blinking cursor; text colours only from the `--*-text` tokens and `--ice` / `--body-strong` / `--muted`, the fill tokens `--crimson` / `--teal` only for strokes, rules and marks; no new generated image, footage or music; the determinism rules [PL §4.1]. V02 adds:

- **N never names or implies the offer.** The N cuts' loader runs `_meta.forbid_n` on every string (« Aperçu », "Preview", «معاين», « gratuit », "free", «مجان», « avant tout paiement », « avant de payer », "before any payment", "before you pay", «قبل أيّ دفع», « sans engagement », "no obligation", «دون التزام», « immatricul… », "registered", «المسجّلة», « par mois », "a month", «في الشهر») on top of `_meta.forbid_all` (V01's list: URL, email or handle, phone-like digits, any price figure or currency, a call to action, and « Payé jusqu'ici » / "Paid so far" / «المدفوع حتى»). A runs `forbid_all` only; T67 and T68 carry the offer and their `use` limits them to the A cuts, so an N render cannot load them.
- **The conditions go with every mention of the Aperçu.** In A, T68 (`prev.terms` verbatim) enters 0.33 s after T67 and holds 7.0 s, the only new text in its scene, on a solid band at body size. Every A still and caption that names the Aperçu carries them in full.
- **« 5 jours ouvrés » never appears without its hand-off.** The site joined the client's content to the build in step 3's own label (site commit `fb6c6c3`, "the path keeps the client's content hand-off"): T66 « 5 jours ouvrés » is always on screen with T65 « Vous envoyez votre contenu, on construit votre page d'accueil » above it, in the video and in every still. This replaces the campaign kit's « à réception de vos contenus » [FB "How to use"], which is not a site string.
- **The order is the site's (⚑ A7 [PK §1.7] now answered by the site).** The written scope and the firm price come at step 2, after « nos questions », before the build at step 3 (`prev.tl2p`). « puis » / "then" / «ثم» stays in every trim, so the 24 h never covers the scope or the price. Nothing is said about revisions (⚑ T3), the contract (⚑ T9) or payment (⚑ T1).
- **« 24 h ouvrées » is a reply** (⚑ T7): no weekday, no hours, never a fix.
- **One language per frame.** The page picture shows the master's language only. V02 has no mirror demo (that is V01's).
- **French typography is the site's:** the no-break spaces of « 24 h », « 5 jours », « 30 min » (U+00A0) and before « : » (U+202F) are kept in `method.json`, so those groups never break across lines.

---

## 2. Fact key (V02 adds F40–F53; F07, F20, F25, F29, F30, F31 are V01's [TR §2])

Line numbers are FR / EN / AR in `assets/app.js` at `ed1e6ad`. They have moved since [TR §2] was written: re-check every string at the render commit (G8). `_review/measure-v02/dict-check.mjs` finds every verbatim string of `method.json` in the site's app.js today.

| ID | Used on screen as | Site source | Status |
|---|---|---|---|
| F40 | T60 « Vous décrivez le projet » / "You describe the project" / «تصف المشروع» [à relire par un arabophone natif]: hook line 1, then station 1's label | `prev.tl1` app.js:289 / :399 / :512; index.html:555 | OK, verbatim |
| F41 | T62a « Deux minutes, par écrit ou de vive voix. »; T62b « En français, anglais ou arabe. » (16:9 only) | `prev.tl1p` :289 / :399 / :512, one sentence each | OK, trimmed by sentence |
| F42 | T63 « On revient sous 24 h ouvrées » | `prev.tl2` :290 / :400 / :513 | OK + ⚑ T7 (a reply) |
| F43 | T64 (9:16) « Avec nos questions, puis un périmètre écrit et un prix ferme. »; T64y (16:9) the first sentence in full | `prev.tl2p` :290 / :400 / :513 | OK. 9:16 trimmed (FR, AR) or restated (EN), Appendix A `edit`. Its last sentence, « Pas une fourchette, un chiffre. », goes to the captions |
| F44 | T65 « Vous envoyez votre contenu, on construit votre page d'accueil » | `prev.tl3` :291 / :401 / :514 | OK, verbatim; carries the content hand-off |
| F45 | T66 « 5 jours ouvrés » | `prev.tl3d` :291 / :401 / :514 | OK, only with T65 |
| F46 | T69 « On vous la présente » | `prev.tl4` :292 / :402 / :515 | OK |
| F47 | T70 « visio de 30 min » | `prev.tl4d` :292 / :402 / :515 | OK. AR trimmed: «مكالمة فيديو من 30 دقيقة» without the site's opening «في» [à relire par un arabophone natif] |
| F48 | T61 (hook line 2) and T71 (station 5) « Vous décidez » | `prev.tl5` :293 / :403 / :516 | OK |
| F49 | T72 (9:16) « Si c'est oui, la page d'accueil est déjà faite. »; T72y (16:9) in full | `prev.tl5p` :293 / :403 / :516 | OK; 9:16 trimmed |
| F50 | T67 « L'Aperçu · avant tout paiement » / "The Preview · before any payment" / «المعاينة · قبل أيّ دفع» [à relire par un arabophone natif] | `prev.name` :370 / :480 / :593 + the opening words of `prev.brief` :371 / :481 / :594, joined by the site's separator | **A only, A8.** Restated |
| F51 | T68 « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » | `prev.terms` :371 / :481 / :594 (= [TR] F03) | **A only, A8.** Verbatim; mandatory with F50 |
| F52 | Title « Méthode » / "Process" / «المنهج» [à relire par un arabophone natif] (never on screen) | `nav.about` :18 / :106 / :197; index.html:235, :270, :1197 | OK |
| F53 | The path's marks and their draw-in order: ring markers, the five day cells, the decision diamond in the primary accent | index.html:553-562; styles.css:1515-1575; app.js:2089-2113 | Visual device, the site's own |
| F07 · F29 · F30 · F20 | End card: T50 label, T51 motto, T52 pointer, the wordmark | [TR §2]; `hero.eyebrow` :20 / :108 / :199; `footer.tag` :100 / :188 / :279 | As V01 |
| F25 · F31 | The page picture: M01 « Votre logo », M02 « Votre entreprise », M03 the tab row | [TR §2] | Picture text, master language only |

**Left out on purpose:** `prev.tl5d` « Payé jusqu'ici : » and the `0 DA` figure (a price figure); `prev.tag` « Offre signature » and `prev.promise` « Zéro risque. Juste la preuve. » (a promise the missing terms after the yes do not back yet); `prev.outcome` (a superlative in EN and AR [PK §0.2]); `prev.cta` and `hero.cta1` (no call to action before Gate B); `hero.lede` (the team claim [FB §2.1 #1]); `tb.previewV` « Gratuit · 5 jours ouvrés » (it names the offer without its conditions); `faq2.a` « sans frais cachés » (⚑ T4).

---

## 3. Building blocks

### 3.1 Time grid

As [TR §3.1]: 30 fps; 90 BPM, so a beat is 20 frames and a bar 80; every scene boundary and every entrance falls on the 10-frame half-beat grid. Exits are 10-frame wipes in the reading direction that **end** on the scene boundary; the next scene's first block enters **on** it, so no frame holds two scenes' text in the same rows [RP §1 issue 3]. "@+0.33" means 0.33 s after the scene's first frame.

### 3.2 Text: roles, shared sizes, measured

- Roles and ranges are `runtime/fit.js`'s [TR §3.2]: hook, header, body, label; Arabic +12 %, line-height 1.5; floors fail the render.
- **Shared sizes (new for V02).** The five station labels share one size, and so do the support lines and the two durations, per ratio and language: the smallest size fit-text finds in the group, so a label does not change size from step to step. The hook's two lines share one size too. The scene code runs `fitAll()`, takes each group's minimum, re-measures every block at that size (`fit.measure`) and flows the text column from those heights (§3.3). **T67 (A) is not in the label group**, so variant A cannot change a size in a shared scene; it is capped at the label size.
- Measured on 2026-10-27 in the pipeline's Chromium (headless shell 1194) with the site's woff2 faces, through `runtime/fit.js` itself (`_review/measure-v02/run.mjs`, `cap.mjs`, `cap2.mjs`; results in `res.json`, log in `run.log`):

| Group (face) | 9:16 FR · EN · AR | 16:9 FR · EN · AR | Limiting block |
|---|---|---|---|
| Hook T60 + T61 (Cinzel 700, `--ice`; T61 in Cinzel Decorative, `--teal-text`; AR Plex 700, T61 in `--teal-text`) | 99 · 112 · 134 px | 96 · 96 · 108 px | 9:16 T61 FR (T60 alone fits 101); AR at the top of its range |
| Station labels T60, T63, T65, T69, T71 (Cinzel 700, `--ice`; T71 in the swash face; AR Plex 700) | **75 · 75 · 80 px** | **74 · 75 · 83 px** | T65 (4 lines in FR and EN) |
| Support lines (Geist 500, `--body-strong`; AR Plex 600): 9:16 T62a, T64, T72; 16:9 T62a, T62b, T64y, T72y | **66 · 66 · 70 px** | **64 · 64 · 68 px** | 9:16 T64 (3 lines); 16:9 the top of the range, AR T72y |
| Durations T66, T70 (Geist Mono 500, uppercase, .08em, `--muted`, as the site's `.ptl-d`; AR Plex 600, no case, no tracking) | 56 · 56 · 60 px (label role) | 64 · 57 · 72 px (body role, so ≥ 56 px [ST §3.3]) | EN T70 "30-MINUTE VIDEO CALL" |
| A: T67 (Cinzel 700, capped at the label size, ≤ 2 lines) | 75 · 73 · 80 px | 74 · 71 · 83 px | — |
| A: T68 on its band (Geist 500, `--ice`; AR Plex 600; body role) | 63 · 72 · 80 px (760 px wide) | 64 · 64 · 72 px (1640 px wide) | — |
| End card (the series card) | as V01 [RP §5]: wordmark 88; T50 52 (AR 56); T51 52 (AR 56); T52 52 (AR 58) | as V01: wordmark 88; T50 48 (AR 50); T51 48 (AR 54) | — |

Lines and heights (px) at those sizes; the boxes of §4.3 are built from them:

| Block | 9:16 FR | 9:16 EN | 9:16 AR | 16:9 FR | 16:9 EN | 16:9 AR |
|---|---|---|---|---|---|---|
| T60 hook | 2 L, 218 | 2 L, 246 | 1 L, 201 | 2 L, 211 | 2 L, 211 | 1 L, 162 |
| T61 hook | 1 L, 109 | 1 L, 123 | 1 L, 201 | 1 L, 106 | 1 L, 106 | 1 L, 162 |
| T60 label | 2 L, 165 | 2 L, 165 | 1 L, 120 | 2 L, 163 | 2 L, 165 | 1 L, 125 |
| T63 | 2 L, 165 | 2 L, 165 | 2 L, 240 | 2 L, 163 | 2 L, 165 | 2 L, 249 |
| T65 | 4 L, 330 | 4 L, 330 | 2 L, 240 | 4 L, 326 | 4 L, 330 | 2 L, 249 |
| T69 | 2 L, 165 | 2 L, 165 | 1 L, 120 | 2 L, 163 | 2 L, 165 | 1 L, 125 |
| T71 | 1 L, 83 | 1 L, 83 | 1 L, 120 | 1 L, 81 | 1 L, 83 | 1 L, 125 |
| T62a | 2 L, 165 | 2 L, 165 | 1 L, 105 | 2 L, 160 | 2 L, 160 | 1 L, 102 |
| T62b (16:9) | — | — | — | 2 L, 160 | 2 L, 160 | 2 L, 204 |
| T64 / T64y | 3 L, 248 | 3 L, 248 | 2 L, 210 | 5 L, 400 | 5 L, 400 | 3 L, 306 |
| T72 / T72y | 2 L, 165 | 2 L, 165 | 2 L, 210 | 3 L, 240 | 3 L, 240 | 3 L, 306 |
| T66 | 1 L, 70 | 1 L, 70 | 1 L, 90 | 1 L, 80 | 1 L, 71 | 1 L, 108 |
| T70 | 1 L, 70 | 1 L, 70 | 1 L, 90 | 1 L, 80 | 1 L, 71 | 1 L, 108 |
| T67 (A) | 2 L, 165 | 2 L, 161 | 1 L, 120 | 2 L, 163 | 2 L, 156 | 1 L, 125 |
| T68 (A) | 6 L, 473 | 5 L, 450 | 4 L, 480 | 3 L, 240 | 2 L, 160 | 2 L, 216 |

Notes:
- The 16:9 support lines and durations meet [ST §3.3]'s ≥ 56 px, and the conditions its ≥ 64 px. The series end card keeps V01's 48 px labels in 16:9 (Q6).
- The hook pair in 9:16 FR (99 px) sits above V01's 84 px floor; 16:9 is at the top of its range.
- Fixed phrases: the site's own no-break spaces keep « 24 h », « 5 jours », « 30 min » together; `NOBREAK` [RP §1 issue 2] needs no V02 entry (no break was found inside a fixed phrase at these sizes; re-check in the preflight's line read-back).

### 3.3 Layout bands

As [TR §3.3]: the 9:16 band is x 140–940, y 290–1240 in every language (Arabic right-aligned inside it); the 4:5 is a crop (y 90–1440) of the 9:16 render; 16:9 has a text column x 120–900 (AR x 1020–1800) and a visual column x 960–1800 (AR x 120–960), text inside y 80–960. V02 adds:

- **The rail row.** 9:16: y 300–380, the line at y 340 from x 156 to 924, stations at x 180, 360, 540, 720, 900. 16:9: y 150–210, the line at y 180 from x 136 to 1784, stations at x 160, 560, 960, 1360, 1760. Arabic: station 1 on the right (9:16 x 900, 16:9 x 1760); plates are never mirrored.
- **The text column flows.** The label's top is fixed (9:16 y 420; 16:9 y 280); the next block sits 28 px under the label's measured height (20 px between two support blocks). It ends above 9:16 y 900 and 16:9 y 960 in every language (§4.3).
- **The station window is fixed:** 9:16 x 140–940, y 920–1240; 16:9 the visual column, y 260–900. Every station's picture appears in the same place.
- **One 9:16 layout serves the Reel and the 4:5 crop.** Every plate and frame lies inside the band; the end card's lighthouse uses V01's crop placement (800 × 433 at y 1000–1433) in every 9:16 render. The band lands at y 200–1150 of the crop. The dunes of S1 are the ground, like Plate I in V01 [RP §5]: they run past the crop's bottom edge by design (only their crests and the caravan show in the 4:5) and are not in `cropCheck()`.

### 3.4 Components

Reused from V01 without change (`pipeline/runtime/`): the copy loader (`copy.js`: `use`, forbid lists, the AR refusal, `ardraft`), fit-text (`fit.js`), layout tables with the RTL mirror (`layout.js`), `inkIn()` and `wipeState()` (`atlas.js`), `typeMove()` (`components.js`), `blueprint()`, `mockup()`, the wordmark and `pointerFor()` (`endcard.js`), `lighthouse()`, the safe check per block, `overlapCheck()` (scene splices), `cropCheck()`, the warm frames, the 2 px grid and the encoder's chroma setting.

New, to build:

| Component | Hours | What it does |
|---|---|---|
| **Rail** `rail()` (`runtime/rail.js`) | 3 | One SVG. The dimension line: 3 px, `--teal` at 45 % (the site's segment colour), end ticks 3 × 21 px (16:9 3 × 24). Five marks, the site's CSS scaled for video: rings Ø 28 px (16:9 Ø 32), 3 px `--teal` stroke over `--void`; the build mark, five cells of 16 × 10 px, 4 px apart (16:9 18 × 12, 5 apart), in `--teal`; the decision mark, a 20 px square (16:9 22 px) in `--crimson`, rotate(45°) scale(.86). **At rest, from f0:** line at 45 %, marks at 35 % opacity. **`activate(n)`:** the segment from n−1 to n is redrawn in solid `--teal` (stroke-dashoffset, 0.5 s, reading direction); mark n pops the site's way (opacity .35 → 1 in .35 s; scale .4 → 1 in .45 s on cubic-bezier(.34,1.4,.64,1); the diamond rotate(45°) scale(.3 → .86)); the **active ring** (Ø 48 px, 16:9 Ø 56, 2 px `--crimson`) slides to n in 0.5 s on the site's ease-out. The build mark's cells fill with the big day cells. Visited marks stay full. Right to left in Arabic; translations quantised to 1/64 px [RP §1] |
| Day cells (in `rail.js`) | 0.5 | Five cells under the blueprint: 9:16 80 × 16 px, 12 px apart (448 px); 16:9 136 × 24 px, 20 apart (760 px). Outline 2 px `--teal` at 45 %, filled `--teal` one per cue with the same pop |
| **Call frame** `callFrame()` | 1.5–2 | A `--navy` window, radius `--r-md`, 2 px `--hairline-2` border; a `--plum` top bar (30 px; 16:9 40 px) with three `--faint` dots at its start, **no text and no address bar**; at its end a ring (Ø 20 px; 16:9 Ø 26) of 2 px `--teal` whose arc (pathLength 1) fills once over the scene: the 30 minutes. Inside, the page picture. **Walkthrough highlight:** a 2 px `--crimson` rounded rectangle that glides (0.4 s, ease-out) over the page's blocks in turn; no cursor, no hand. Wipes in and out in the reading direction |
| Page picture, one state | 0.5 | V01's `mockup()` with a single state (the master's language, filled, no state 2 or 3, no mirror), at 0.56 scale (448 × 280) in 9:16 and 0.95 (760 × 475) in 16:9 |
| Dunes (S1) | 0.5 | `dunes.webp` as a luminance mask, set at f0 through `inkIn()` (no entrance), in `--crimson-text` (the site's ink for this plate, styles.css:2148-2149) at 35 % (the site uses 20 % on a page; 35 % survives the encode), fading into `--void` over its bottom 40 % like `.foot-dunes::after`; drifts 12 px against the reading direction over S1; never mirrored |
| Group fit and flow | 1.5 | `fitAll()`, one size per group (hook pair, labels, supports, durations), heights re-measured at that size, blocks flowed down the column, each block's box recorded in `data-box` for the safe check |
| `videos/v02.html` + `v02.js` | 4–5 | Eight scenes (S1–S7 + S4A), two time tables (`s`, `y`), the variant shift, two layout tables (9:16; 16:9 with `_mirror`), warm frames per plate group, the checkpoints, the forbid lists from `_meta` |
| Tools: preflight, stills, report, batch | 2–3 | V01's, with V02's frames, variants and the variant seam check (§6.3) |
| **Total** | **about 14–16.5 h**, plus 2 h of renders and QA | [PN §5.2] budgets 12–16 h for V02 |

### 3.5 Assets

All under `/home/user/STICKITTY.INC/assets/`, read only, mounted at `/site/`.

| Asset (source size) | Used in | Shown at (≤ 1.0× source, settle included) | Use |
|---|---|---|---|
| `illus/dunes.webp` (1500 × 596) | S1 | 1500 × 596, 1.0×, no settle. 9:16 at x −360, y 1000 (caravan at x 720–904, y 1300–1344); 16:9 at x 210, y 484 (caravan at x 1290–1474, y 784–828) | The hook's ground: a caravan walking a ridge, the path. The site's caption (« Le Grand Erg ») is not shown |
| `illus/faq3.png` (512) | S2 | 9:16 300 px (318 with the 1.06 settle); 16:9 480 px (509) | Three linked speech bubbles in three scripts: « par écrit ou de vive voix », in three languages. `--teal` at 50 % (V01's faq3 ink) |
| `illus/faq2.png` (512) | S3 | as faq3 | A balance: a rolled plan against a stack of coins, « un périmètre écrit et un prix ferme ». No figure. `--teal` at 50 % |
| `illus/lighthouse.webp` (1100 × 595) | S7 | as V01: 9:16 800 × 433 at y 1000–1433; 16:9 840 × 455 | The series end card, one beam sweep |

Not used in V02: the coins (V01's price beat), the bench and the founder card (no founder scene), Plate I (V01's opening; the fallback for the dunes, Q4), `coin-king.webp` and `faq6.png` (never), and every capture of a client site or of Numidea's own site.

---

## 4. V02 « Méthode »: the scenes

**Arcanum throughout.** The tables are written for the FR master; the AR and EN columns give their own masters' text. Variant A inserts S4A after S4; its later scenes shift by +230 frames (+7.67 s) and are otherwise identical.

### 4.1 Scene table, 9:16 short cut (V02-s; the A-only row S4A is marked)

| Scene · time (frames) | Visual and coded animation | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.33 (f0–69) | Ground `--void`, brass grid. **The rail at rest from f0** (y 340): the dimension line, its end ticks and the five marks at 35 %. **Dunes** set at f0 below the hook, brass at 35 %, the caravan on the ridge (x 720–904, y 1300–1344), drifting 12 px against the reading direction. **T60 and T61 fully set at f0** (no reveal), so f0 is the thumbnail. No logo intro | T60 @0.00 « Vous décrivez le projet » [F40] · T61 @0.00 « Vous décidez » [F48] (swash face) | T60 «تصف المشروع» [F40] · T61 «أنت تقرّر» [F48] [à relire par un arabophone natif] | T60 "You describe the project" [F40] · T61 "You decide" [F48] | 6 (EN 6, AR 4) · 2.6/s | f0: hook chimes (A5, then D6 at 0.33) and the Dm(add9) pad at full level; burin ticks from 1.33 (f40) (built in) | f60–69: T61 wipes out; the dunes wipe out (f60–75); T60 eases (`typeMove`, cubic-bezier(.16,1,.3,1), 0.5 s, f60–75) from hook size to the label size, anchored at its top-start corner; station 1 pops and the active ring appears on it (f60–75) |
| **S2 Step 1** · 2.33–6.67 (f70–199) | Station 1 active. T60 is now the label. **faq3.png** inks in `--teal` at 50 % in the station window from f80 (`inkIn` 1.2 s, settle 1.06 → 1 over 3 s) | T60 (label, carried) [F40] · T62a @2.33 « Deux minutes, par écrit ou de vive voix. » [F41] | T62a «دقيقتان، كتابةً أو مشافهة.» [F41] [à relire par un arabophone natif] | T62a "Two minutes, in writing or out loud." [F41] | 8 (EN 7, AR 4) · 1.8/s, T60 carried | f80: first felt pulse, then one per bar. 5.33 (f160): chord → B♭maj7, its chime at f160 and f190 (built in) | f190–199: T60, T62a and faq3 wipe out; the segment 1 → 2 draws and the ring slides to station 2 (f190–205); station 2 pops at f200 |
| **S3 Step 2** · 6.67–12.67 (f200–379) | Station 2 active. **faq2.png** (the plan and the coins on a balance) inks in `--teal` at 50 % from f210 | T63 @6.67 « On revient sous 24 h ouvrées » [F42] · T64 @7.33 « Avec nos questions, puis un périmètre écrit et un prix ferme. » [F43, trimmed] | T63 «نعود إليك خلال 24 ساعة عمل» [F42] · T64 «بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي.» [F43, trimmed] [à relire par un arabophone natif] | T63 "We reply within 24 working hours" [F42] · T64 "First our questions, then a written scope and a firm price." [F43, restated] | 17 (EN 17, AR 14) · 2.8/s | 10.67 (f320): chord → Fmaj9, chime at f320 and f350 (built in) | f370–379: everything wipes out; the segment 2 → 3 draws, the ring slides to station 3 (f370–385); station 3's five cells pop as outlines at f380 |
| **S4 Step 3** · 12.67–17.33 (f380–519) | Station 3 active. The **blueprint** (V01) draws a homepage outline path by path in the window's 448 × 280 box, f380–470 (3.0 s), in brass. **Five day cells** under it fill `--teal` one per beat at f400, 420, 440, 460, 480; the rail's five cells fill with them. f470–488: the blueprint **fills into the page** (V01's fill: `--navy` page, `--plum` chrome, « Votre logo », « Votre entreprise », grey bars, an unlabelled `--crimson` button), master language only | T65 @12.67 « Vous envoyez votre contenu, on construit votre page d'accueil » [F44] · T66 @13.33 « 5 jours ouvrés » [F45] | T65 «ترسل إلينا محتواك، ونبني صفحتك الرئيسية» [F44] · T66 «5 أيام عمل» [F45] · page: «شعارك هنا» / «اسم نشاطك» [F25] [à relire par un arabophone natif] | T65 "You send your content and we build your homepage" [F44] · T66 "5 working days" [F45] · page: "Your logo" / "Your business" [F25] | 12 (EN 12, AR 9) + 4 picture words · 2.6/s (3.4 with the picture text, which is ≤ 30 px in the page and not for reading) | f400: pulse = day cell 1. 16.00 (f480): chord → Csus2 with its chime (f480, f510) = **day cell 5: the build is done** | N and A: f510–519 everything in S4 wipes out (T65, T66, the page, the cells). N: the segment 3 → 4 draws, the ring slides to station 4 (f510–525), station 4 pops at f520. A: the ring stays on station 3 for S4A |
| **S4A Step 3, the Aperçu** · **A only** · 17.33–25.00 (A f520–749) | The ring stays on station 3. **T67** wipes in at the label's place; **T68 on a solid `--navy` band** under it (x 140–940, 20 px inset, 2 px `--hairline-2` border, radius `--r-md`), wiped in the reading direction. **Nothing else enters:** no picture, no motion but the wipes. The conditions are alone at body size for 7.0 s | T67 @17.33 « L'Aperçu · avant tout paiement » [F50] · T68 @17.67 « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » [F51] | T67 «المعاينة · قبل أيّ دفع» [F50] · T68 «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [F51] [à relire par un arabophone natif] | T67 "The Preview · before any payment" [F50] · T68 "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." [F51] | 21 (EN 20, AR 18) · 2.7/s | Pulses at f560, f640. **21.33 (f640): chord → Dm with its chime (f640, f670), under the conditions** (⚑ P6: the music rule wants a held pad here) | f740–749: T67 and the band wipe out; the segment 3 → 4 draws, the ring slides to station 4 (f740–755); station 4 pops at f750 |
| **S5 Step 4** · N 17.33–21.00 (f520–629) · A 25.00–28.67 (f750–859) | Station 4 active. The **call frame** wipes in (0.6 s) in the window: 480 × 320, its bar 30 px, the page inside (448 × 280, the page S4 built). Its 30-minute ring fills once over the scene. The highlight walks two blocks: the heading (from +0.33), then the cards (+1.83) | T69 @+0 « On vous la présente » [F46] · T70 @+0.33 « visio de 30 min » [F47] | T69 «نعرضها عليك» [F46] · T70 «مكالمة فيديو من 30 دقيقة» [F47, trimmed] [à relire par un arabophone natif] | T69 "We walk you through it" [F46] · T70 "30-minute video call" [F47] | 8 (EN 8, AR 7) · 2.2/s | N: pulse at f560. A: pulse at f800 (built in) | +3.33–3.67: T69, T70, the frame's bar, border, ring and highlight wipe out; **the page stays** where it is; the segment 4 → 5 draws and the ring slides to station 5 (+3.33–3.83) |
| **S6 Step 5** · N 21.00–26.00 (f630–779) · A 28.67–33.67 (f860–1009) | Station 5: **the decision diamond lands** in `--crimson` at +0 (rotate 45°, scale .3 → .86 on the site's ease): the rail is complete. The built page stays in the window, without its frame: « déjà faite » | T71 @+0 « Vous décidez » [F48] (swash face) · T72 @+0.33 « Si c'est oui, la page d'accueil est déjà faite. » [F49, trimmed] | T71 «أنت تقرّر» [F48] · T72 «إن كان الجواب نعم، فالصفحة الرئيسية جاهزة بالفعل.» [F49, trimmed] [à relire par un arabophone natif] | T71 "You decide" [F48] · T72 "If it's yes, the homepage is already done." [F49, trimmed] | 11 (EN 10, AR 10) · 2.2/s | N: **21.33 (f640): chord → Dm, the resolution, with its chime (f640, f670), 10 frames after « Vous décidez »**; pulse at f720. A: pulses at f880, f960 (the Dm came in S4A) | +4.67–5.00: everything wipes out, the rail included: the band is empty for the end card |
| **S7 End card** · N 26.00–32.33 (f780–969) · A 33.67–40.00 (f1010–1199) | **The series card before Gate B, as V01 S5** [TR §4.1; RP]: the wordmark (solid cursor, no blink), label, motto, pointer. **No CTA, no URL, no conditions.** The lighthouse at 40 % in `--teal` (800 × 433 at y 1000–1433), one beam sweep +0.33 → +2.33, then still | Wordmark @+0 [F20] · T50 @+0.33 « Studio web & logiciel · Bordj Bou Arréridj, Algérie » [F07] · T51 @+0.67 « Enraciné en Numidie · bâti sur des idées » [F29] · T52 @+3.00 « Lien en bio » [F30] (LinkedIn 4:5: « Lien en commentaire ») | T50 «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [F07] · T51 «جذورها في نوميديا · مبنيّة على الأفكار» [F29] · T52 «الرابط في الملف التعريفي» [F30] [à relire par un arabophone natif] | T50 "Web & software studio · Bordj Bou Arréridj, Algeria" · T51 "Rooted in Numidia · built on ideas" · T52 "Link in bio" (LinkedIn: "Link in comments") | 19 (EN 18, AR 18) · 3.0/s | +0: the end-card chimes D5 + A5; ticks and pulse end; the last chord releases from N 29.03 / A 36.70 s; 1.2 s audio fade at the end | Holds on the last frame (the picture never fades). A loop returns to f0, a complete frame: the hook, the rail, the dunes |

**The five promises of the path** (for the carousel « Méthode », §4.7): (1) you describe the project, in two minutes; (2) we reply within 24 working hours, then a written scope and a firm price; (3) you send your content, we build your homepage in 5 working days; (4) we walk you through it on a 30-minute video call; (5) you decide, and on a yes the homepage is already done.

### 4.2 Scene table, 16:9 YouTube cut (V02-y)

The same scenes and pictures, slower, with the site's full lines (T62b, T64y, T72y) and the two-column layout (§4.3); the walkthrough highlight visits four blocks. **Chapters** (description, §4.6): N 0:00 · 0:10 · 0:20 · 0:30 · 0:40; A 0:00 · 0:10 · 0:20 · 0:38 · 0:48.

| Scene · time (frames) | Visual and coded animation (differences from 9:16) | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–3.33 (f0–99) | The rail at rest across the frame (y 180); the dunes along the bottom (x 210–1710, y 484–1080; caravan at x 1290–1474, y 784–828); T60 and T61 set at f0 in the text column | T60, T61 as 9:16 [F40, F48] | as 9:16 [à relire par un arabophone natif] | as 9:16 | 6 (AR 4) · 1.8/s | f0 hook chimes, pad; ticks from f40 | f90–99: T61 out; the dunes out (f90–105); T60 eases to the label (f90–105); station 1 pops |
| **S2 Step 1** · 3.33–10.00 (f100–299) | faq3 (480 px) inks in in the visual column from f110 | T60 (label) · T62a @3.33 [F41] · T62b @6.67 « En français, anglais ou arabe. » [F41] | T62a as 9:16 · T62b «بالفرنسية أو الإنجليزية أو العربية.» [F41] [à relire par un arabophone natif] | T62a as 9:16 · T62b "In French, English or Arabic." [F41] | 13 (EN 12, AR 9) · 2.0/s | f80 first pulse; 5.33 (f160) B♭maj7 + chime (f160, f190) | f290–299 out; the ring to station 2 (f290–305) |
| **S3 Step 2** · 10.00–20.00 (f300–599) | faq2 (480 px) from f310 | T63 @10.00 [F42] · T64y @10.67 « Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. » [F43] | T63 as 9:16 · T64y «بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق.» [F43] [à relire par un arabophone natif] | T63 as 9:16 · T64y "First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price." [F43] | 24 (EN 27, AR 21) · 2.4/s (EN 2.7) | **10.67 (f320): Fmaj9 + chime as T64y enters**; 16.00 (f480): Csus2 + chime | f590–599 out; the ring to station 3 (f590–605) |
| **S4 Step 3** · 20.00–30.00 (f600–899) | The blueprint draws in the visual column (760 × 475) f600–800 (6.67 s); the five day cells (136 × 24) fill at f620, 680, 740, 800, 860 with the rail's cells; f800–818 the page fills (master language) | T65 @20.00 [F44] · T66 @20.67 [F45] | as 9:16 [à relire par un arabophone natif] | as 9:16 | 12 (AR 9) + 4 picture words · 1.2/s | 21.33 (f640): Dm + chime (the last chord change) under the build; pulses on every bar | f890–899 out; N: the ring to station 4 |
| **S4A Step 3, the Aperçu** · **A only** · 30.00–37.67 (f900–1129) | T67 in the text column; **T68 on a full-width `--navy` band** (x 120–1800) at 64 px (AR 72); the visual column empty | T67 @30.00 [F50] · T68 @30.33 [F51] | as 9:16 [à relire par un arabophone natif] | as 9:16 | 21 (EN 20, AR 18) · 2.7/s | Pulses at f960, f1040, f1120; no chord change | f1120–1129 out; the ring to station 4 |
| **S5 Step 4** · N 30.00–40.00 (f900–1199) · A 37.67–47.67 (f1130–1429) | Call frame 800 × 545 in the visual column (bar 40 px, page 760 × 475); the 30-minute ring fills over the 10 s; the highlight walks **four** blocks: logo (+0.67), heading (+2.67), button (+5.0), cards (+7.33) | T69 @+0 [F46] · T70 @+0.67 [F47] | as 9:16 [à relire par un arabophone natif] | as 9:16 | 8 (AR 7) · 0.8/s | Pulses on every bar | +9.67–10.00 out; the page stays; the ring to station 5 |
| **S6 Step 5** · N 40.00–47.00 (f1200–1409) · A 47.67–54.67 (f1430–1639) | The diamond lands; the page stays | T71 @+0 [F48] · T72y @+0.33 « Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste. » [F49] | T71 as 9:16 · T72y «إن كان الجواب نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل.» [F49] [à relire par un arabophone natif] | T71 as 9:16 · T72y "If it's yes, the homepage is already done: we move straight on to the rest." [F49] | 16 (EN 17, AR 15) · 2.3/s (EN 2.4) | Pulses on every bar | +6.67–7.00 out, the rail included |
| **S7 End card** · N 47.00–52.33 (f1410–1569) · A 54.67–60.00 (f1640–1799) | V01's 16:9 S5: the wordmark, T50 and T51 in the text column, the lighthouse 840 × 455 in the visual column; **no pointer** | Wordmark @+0 [F20] · T50 @+0.33 [F07] · T51 @+0.67 [F29] | as 9:16 [à relire par un arabophone natif] | as 9:16 | 16 (EN 15, AR 14) · 3.0/s | +0: the end-card chimes; the last chord releases from N 49.03 / A 56.70 s; 1.2 s audio fade | Holds on the last frame |

**Website version:** none until the owner's Gate W [ST §7.1]; it would be the 16:9 at −16 LUFS, with no pointer, as V01's.

### 4.3 Layout per ratio, with measured sizes (Arabic: the same band, right-aligned; mirrored columns in 16:9)

Sizes from §3.2; y ranges are FR, with EN where it differs and AR in brackets.

| Scene | 9:16 (band x 140–940; station window y 920–1240) | 16:9 (text x 120–900 / AR 1020–1800; visual x 960–1800 / AR 120–960) |
|---|---|---|
| Rail | y 300–380, line at y 340, x 156–924; stations at x 180 … 900 (AR 900 … 180) | y 150–210, line at y 180, x 136–1784; stations at x 160 … 1760 (AR mirrored) |
| S1 | T60 at y 420: FR 99 px, 2 lines, 420–638; EN 112 px, 2 lines, 420–666 [AR 134 px, 1 line, 420–621]. T61 24 px under it: FR 662–771; EN 690–813 [AR 645–846]. Dunes x −360…1140, y 1000–1596 (decoration; in the 4:5 the caravan sits at y 1210–1254 of the crop) | T60 at y 280: FR/EN 96 px, 2 lines, 280–491 [AR 108 px, 1 line, 280–442]. T61: 515–621 [AR 466–628]. Dunes x 210–1710, y 484–1080 (fixed in AR) |
| S2 | T60 (label) 75 px, 2 lines, 420–585 [AR 80 px, 1 line, 420–540]. T62a 66 px, 2 lines, 613–778 [AR 70 px, 1 line, 568–673]. faq3 300 × 300 at x 390–690, y 930–1230 | T60 74 px (EN 75), 2 lines, 280–443 [AR 83 px, 1 line, 280–405]. T62a 64 px, 2 lines, 471–631 [AR 68 px, 1 line, 433–535]. T62b 64 px, 2 lines, 651–811 [AR 68 px, 2 lines, 555–759]. faq3 480 × 480 at x 1140–1620 [AR x 300–780], y 300–780 |
| S3 | T63 75 px, 2 lines, 420–585 [AR 80 px, 2 lines, 420–660]. T64 66 px, 3 lines, 613–861 [AR 70 px, 2 lines, 688–898]. faq2 300 × 300 at y 930–1230 | T63 2 lines, 280–443 [AR 2 lines, 280–529]. T64y 64 px, 5 lines, 471–871 [AR 68 px, 3 lines, 557–863]. faq2 480 × 480 as faq3 |
| S4 | T65 75 px, 4 lines, 420–750 [AR 80 px, 2 lines, 420–660]. T66 56 px, 778–848 [AR 60 px, 688–778]. Blueprint / page 448 × 280 at x 316–764, y 920–1200; day cells 5 × 80 × 16 at y 1216–1232 | T65 74 px (EN 75), 4 lines, 280–606 [AR 83 px, 2 lines, 280–529]. T66 64 px (EN 57), 634–714 [AR 72 px, 557–665]. Blueprint / page 760 × 475 at x 1000–1760 [AR 160–920], y 290–765; day cells 5 × 136 × 24 at y 795–819 |
| S4A (A) | T67 at y 420: FR 75 px, 2 lines, 420–585; EN 73 px, 420–581 [AR 80 px, 1 line, 420–540]. Band 28 px under it, T68 inset 20 px: FR 63 px, 6 lines, band y 613–1126; EN 72 px, 5 lines, 609–1099 [AR 80 px, 4 lines, 568–1088] | T67 at y 280: FR 74 px, 2 lines, 280–443; EN 71 px, 280–436 [AR 83 px, 1 line, 280–405]. Band x 120–1800: FR 64 px, 3 lines, y 471–751; EN 64 px, 2 lines, 464–664 [AR 72 px, 2 lines, 433–689] |
| S5 | T69 2 lines, 420–585 [AR 1 line, 420–540]. T70 56 px, 613–683 [AR 60 px, 568–658]. Call frame 480 × 320 at x 300–780, y 920–1240; page 448 × 280 at x 316–764, y 950–1230; the ring Ø 20 at the bar's end | T69 2 lines, 280–443 [AR 1 line, 280–405]. T70 64 px (EN 57), 471–551 [AR 72 px, 433–541]. Call frame 800 × 545 at x 980–1780 [AR 140–940], y 260–805; page 760 × 475 at y 310–785 |
| S6 | T71 75 px, 1 line, 420–503 [AR 80 px, 420–540]. T72 66 px, 2 lines, 531–696 [AR 70 px, 2 lines, 568–778]. The page stays at x 316–764, y 950–1230; the diamond on the rail | T71 1 line, 280–361 [AR 280–405]. T72y 64 px, 3 lines, 389–629 [AR 68 px, 3 lines, 433–739]. The page stays |
| S7 | V01's S5 [TR §4.2; RP §5]: wordmark 88 px at y 340–450; T50 y 480–650 (52 px, 2 lines; AR 56 px, 2 lines); T51 y 670–800 (52 px, 2 lines; AR 56 px, 1 line); T52 y 850–940 (52 px; AR 58 px); lighthouse 800 × 433 at x 280–1080, y 1000–1433 | V01's 16:9 S5: wordmark y 194–304; T50 y 330–480 (48 px, 2 lines; AR 50 px); T51 y 500–620 (48 px, 2 lines; AR 54 px, 1 line); no pointer; lighthouse 840 × 455 at x 960–1800 [AR 120–960], y 300–755 |

**4:5** = the 9:16 render cropped at y 90–1440; the LinkedIn file comes from a 9:16 render with `pointer=li` (« Lien en commentaire » / "Link in comments"). Nothing in V02 needs a separate crop layout: the band lands at y 200–1150 of the crop.

### 4.4 Word load and holds (every language; `_review/measure-v02/timing.mjs`)

Words are whitespace-separated tokens; « · », « — », « & » and « : » standing alone are not counted (V01's convention). The scene load counts every block that enters in the scene; T60 is counted in S1, where it enters.

**9:16** (A's later scenes are N's, shifted by 230 frames: the same holds)

| Scene | Blocks entering | Words FR · EN · AR | Length | Load FR · EN · AR |
|---|---|---|---|---|
| S1 | T60, T61 | 6 · 6 · 4 | 2.33 s | 2.57 · 2.57 · 1.71 /s |
| S2 | T62a (T60 carried) | 8 · 7 · 4 | 4.33 s | 1.85 · 1.62 · 0.92 /s |
| S3 | T63, T64 | 17 · 17 · 14 | 6.00 s | 2.83 · 2.83 · 2.33 /s |
| S4 | T65, T66 (+ 4 picture words) | 12 · 12 · 9 | 4.67 s | 2.57 · 2.57 · 1.93 /s |
| S4A (A) | T67, T68 | 21 · 20 · 18 | 7.67 s | 2.74 · 2.61 · 2.35 /s |
| S5 | T69, T70 | 8 · 8 · 7 | 3.67 s | 2.18 · 2.18 · 1.91 /s |
| S6 | T71, T72 | 11 · 10 · 10 | 5.00 s | 2.20 · 2.00 · 2.00 /s |
| S7 | wordmark, T50, T51, T52 | 19 · 18 · 18 | 6.33 s | 3.00 · 2.84 · 2.84 /s |

| Block | Words FR · EN · AR | Minimum hold (the longest language) | Actual hold (entrance → exit start) | OK |
|---|---|---|---|---|
| T60 + T61 hook | 6 · 6 · 4 | 2.0 s at hook size | 2.0 s at hook size (f0–59); T60 then stays as the label to f189 | ✓ |
| T62a | 8 · 7 · 4 | 3.80 s | 4.00 s | ✓ |
| T63 | 6 · 6 · 6 | 3.10 s | 5.67 s | ✓ |
| T64 | 11 · 11 · 8 | 4.85 s | 5.00 s | ✓ |
| T65 | 9 · 9 · 6 | 4.15 s | 4.33 s | ✓ |
| T66 | 3 · 3 · 3 | 2.05 s | 3.67 s | ✓ |
| T67 (A) | 4 · 5 · 4 | 2.75 s (EN) | 7.33 s | ✓ |
| **T68 (A), the conditions** | 17 · 15 · 14 | 6.95 s | **7.00 s, the only new text from 17.67 to 24.67 s** | ✓ |
| T69 | 4 · 5 · 2 | 2.75 s (EN) | 3.33 s | ✓ |
| T70 | 4 · 3 · 5 | 2.75 s (AR) | 3.00 s | ✓ |
| T71 | 2 · 2 · 2 | 1.70 s | 4.67 s | ✓ |
| T72 | 9 · 8 · 8 | 4.15 s | 4.33 s | ✓ |
| T50 / T51 | 7 / 7 (EN 7 / 6, AR 6 / 6) | 3.45 s | 6.00 / 5.67 s (to the last frame) | ✓ |
| T52 | 3 · 3 · 4 | 2.40 s (AR) | 3.33 s | ✓ |

**16:9**

| Scene | Blocks entering | Words FR · EN · AR | Length | Load FR · EN · AR |
|---|---|---|---|---|
| S1 | T60, T61 | 6 · 6 · 4 | 3.33 s | 1.80 · 1.80 · 1.20 /s |
| S2 | T62a, T62b | 13 · 12 · 9 | 6.67 s | 1.95 · 1.80 · 1.35 /s |
| S3 | T63, T64y | 24 · 27 · 21 | 10.00 s | 2.40 · 2.70 · 2.10 /s |
| S4 | T65, T66 (+ 4 picture words) | 12 · 12 · 9 | 10.00 s | 1.20 · 1.20 · 0.90 /s |
| S4A (A) | T67, T68 | 21 · 20 · 18 | 7.67 s | 2.74 · 2.61 · 2.35 /s |
| S5 | T69, T70 | 8 · 8 · 7 | 10.00 s | 0.80 · 0.80 · 0.70 /s |
| S6 | T71, T72y | 16 · 17 · 15 | 7.00 s | 2.29 · 2.43 · 2.14 /s |
| S7 | wordmark, T50, T51 | 16 · 15 · 14 | 5.33 s | 3.00 · 2.81 · 2.63 /s |

Holds (16:9): hook 3.0 s at hook size (minimum 2.0) · T62a 6.33 s (3.80) · T62b 3.00 s (2.75) · T63 9.67 s (3.10) · **T64y 9.00 s (8.35, EN)** · T65 9.67 s (4.15) · T66 9.00 s (2.05) · T67 7.33 s (2.75) · **T68 7.00 s (6.95)** · T69 9.67 s (2.75) · T70 9.00 s (2.75) · T71 6.67 s (1.70) · **T72y 6.33 s (6.25, EN)** · T50 5.00 s (3.45) · T51 4.67 s (3.45). All ✓.

The 16:9 S4 and S5 run slow on purpose: YouTube chapters need ≥ 10 s each, and the build and the walkthrough carry those seconds. **QA** as V01: someone who has not seen the video watches each file on a phone at normal speed; any block they cannot read before it leaves is cut down, not held longer, because the lengths are fixed.

### 4.5 Music cue list

**The bed, unchanged:** `music-lab/bed.mjs`, seed 7, full mode, approved by the owner on 2026-10-27 for every language. One bed per cut and variant (the end-card chimes must land on the end card's first frame), the same bed for FR, EN and AR. No change to `bed.mjs` is needed: `--bars` places the end card, `--dur` ends the file on the last frame.

```
cd music-lab
./render.sh v02-s-n-s7 -14 --bars 9.75   --dur 32.333333 --seed 7 --mode full   # 9:16 N: end card 26.00 s (f780),  1,552,000 samples
./render.sh v02-s-a-s7 -14 --bars 12.625 --dur 40        --seed 7 --mode full   # 9:16 A: end card 33.67 s (f1010), 1,920,000 samples
./render.sh v02-y-n-s7 -14 --bars 17.625 --dur 52.333333 --seed 7 --mode full   # 16:9 N: end card 47.00 s (f1410), 2,512,000 samples
./render.sh v02-y-a-s7 -14 --bars 20.5   --dur 60        --seed 7 --mode full   # 16:9 A: end card 54.67 s (f1640), 2,880,000 samples
```

- **Loudness**, measured on each encoded MP4: −14 LUFS integrated (±0.5), true peak ≤ −1 dBTP, loudness range ≤ 4 LU, one constant gain picked with `tools/loudness.mjs --simulate` [RP §6]. The 16:9 cuts are under a minute, so −14 as V01's 16:9; −16 LUFS is for the website file (Gate W) and long explainers [MU §4.5].
- **Ledger:** one row per bed in `music-lab/ledger.csv` (M-0005 … M-0008) when rendered, with the arguments and hashes.
- **What the bed holds (built in):** five chords of 2 bars: Dm(add9) 0.00 · B♭maj7 5.33 · Fmaj9 10.67 · Csus2 16.00 · Dm 21.33, which then holds until `dur − 3.3 s` and releases; a two-note chime at each change (+1.0 s); the hook chimes at 0.00 and 0.33; burin ticks on 16ths from 1.33 s to the end card; a felt pulse on every bar from 2.67 s to the end card; the end-card chimes D5 + A5 on the end card's first frame. No `--cues` exist yet, so the cues below are where the picture meets the built-in grid.

**9:16**

| Time (N) | Frame N | Frame A | Event (built in) | On screen |
|---|---|---|---|---|
| 0.00 | 0 | 0 | Hook chimes A5 (0.00) + D6 (0.33); the Dm(add9) pad at full level | The hook, set at f0 |
| 1.33 | 40 | 40 | Burin ticks enter | — |
| 2.67 | 80 | 80 | First felt pulse, then one per bar | Station 1; faq3 inks in |
| 5.33 | 160 | 160 | B♭maj7 + chime (f160, f190) | T62a held; f190 the S2 exit |
| 10.67 | 320 | 320 | Fmaj9 + chime (f320, f350) | T64 held; faq2 |
| 13.33 | 400 | 400 | Pulse | T66 and day cell 1 |
| 16.00 | 480 | 480 | Csus2 + chime (f480, f510) | **Day cell 5: the build is done**; f510 the S4 exit |
| 21.33 | 640 | 640 | Dm (the resolution) + chime (f640, f670) | **N: « Vous décidez »**, entered at f630. **A: under the conditions (S4A)** ⚑ P6 |
| 26.00 · 33.67 | 780 | 1010 | End-card chimes D5 + A5; ticks and pulse stop | The wordmark |
| 29.03 · 36.70 | 871 | 1101 | The last chord releases (3.3 s) | — |
| 31.13 · 38.80 | 934 | 1164 | 1.2 s audio fade (the encoder); the picture holds | — |

**16:9**

| Time (N) | Frame N | Frame A | Event (built in) | On screen |
|---|---|---|---|---|
| 0.00 / 1.33 / 2.67 | 0 / 40 / 80 | same | Hook chimes and pad / ticks / first pulse | The hook; station 1 |
| 5.33 | 160 | 160 | B♭maj7 + chime | S2 |
| 10.67 | 320 | 320 | Fmaj9 + chime | **T64y enters on it** |
| 16.00 | 480 | 480 | Csus2 + chime | S3 held |
| 21.33 | 640 | 640 | Dm + chime | S4: the build (day cell 1 at f620) |
| 47.00 · 54.67 | 1410 | 1640 | End-card chimes | The wordmark |
| 49.03 · 56.70 | 1471 | 1701 | Release | — |
| 51.13 · 58.80 | 1534 | 1764 | 1.2 s audio fade | — |

Notes:
- **A, 9:16:** the Dm change and its chime fall 3.67 s into the conditions. The music rule asks for a held pad under the conditions [ST §3.3; TR §5.5]. Fix when wanted: a `--chord-chimes off` switch (planned in [TR §3.4]) and one bed re-rendered; the picture does not change (P6, Q5).
- **16:9:** from 21.33 s the Dm holds for about 28 s (N) or 35 s (A) under the ticks and the pulse, on the bed's slow filter movement. Listen to the 16:9 files before posting; a per-cut chord map (also on [TR §3.4]'s list) would cycle the grid without changing the bed's sound.
- Arabic masters: the same beds (the owner's 2026-10-27 decision).

### 4.6 Captions (V02)

Hashtags and search phrases from [CH §1.9], at most 5 on Instagram, 0–3 on LinkedIn. Links go where [TR §9] says (never on screen; `?ref=` codes, §6.2). N captions name no offer; A captions add the offer and its conditions in full.

**FR (N)**
> Méthode : vous décrivez le projet, vous décidez.
> 1. Vous décrivez le projet. Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe.
> 2. On revient sous 24 h ouvrées. Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. Pas une fourchette, un chiffre.
> 3. Vous envoyez votre contenu, on construit votre page d'accueil : 5 jours ouvrés.
> 4. On vous la présente : visio de 30 min.
> 5. Vous décidez. Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

Sources: F52 with F40 and F48 (line 1, restated); F40–F49 (the five steps, verbatim, `prev.tl1`–`prev.tl5`, `tl1p`, `tl2p`, `tl3d`, `tl4d`, `tl5p`); F07. Algeria: #creationsiteweb #sitevitrine #algerie #bordjbouarreridj #pme. France (LinkedIn): #creationsiteweb #pme.

**FR (A)**: the same, with these two lines after line 3:
> L'Aperçu : avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu. Si vous dites non, vous ne devez rien.
> Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus.

Sources: F50 (`prev.name` + `prev.brief`, verbatim), F51 (`prev.terms`, verbatim). No call to action.

**EN (N)**
> Process: you describe the project, you decide.
> 1. You describe the project. Two minutes, in writing or out loud. In French, English or Arabic.
> 2. We reply within 24 working hours. First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. Not a range — one number.
> 3. You send your content and we build your homepage: 5 working days.
> 4. We walk you through it: 30-minute video call.
> 5. You decide. If it's yes, the homepage is already done: we move straight on to the rest.
> Web & software studio · Bordj Bou Arréridj, Algeria · UTC+1, 2 h behind Riyadh, 3 h behind Dubai.

Sources: F52, F40–F49 (verbatim), F07, [TR] F16 (`contact.vTz`, app.js:481, trimmed). Gulf: #websitedesign #dubaibusiness #riyadhbusiness #arabicwebsite.

**EN (A)**: after line 3:
> The Preview: before any payment, we build your new site's homepage with your own content. If you say no, you owe nothing.
> Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients.

**AR (N)** [à relire par un arabophone natif]
> المنهج: تصف المشروع، وأنت تقرّر. [à relire par un arabophone natif]
> 1. تصف المشروع. دقيقتان، كتابةً أو مشافهة. بالفرنسية أو الإنجليزية أو العربية. [à relire par un arabophone natif]
> 2. نعود إليك خلال 24 ساعة عمل. بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق. ليس سعراً تقريبياً، بل رقمٌ واحد. [à relire par un arabophone natif]
> 3. ترسل إلينا محتواك، ونبني صفحتك الرئيسية: 5 أيام عمل. [à relire par un arabophone natif]
> 4. نعرضها عليك في مكالمة فيديو من 30 دقيقة. [à relire par un arabophone natif]
> 5. أنت تقرّر. إن كان الجواب نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

**AR (A)**: after line 3 [à relire par un arabophone natif]:
> المعاينة: قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت. إن قلت لا، فلا شيء عليك. [à relire par un arabophone natif]
> مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. [à relire par un arabophone natif]

[à relire par un arabophone natif] Sources: F52, F40–F51, F07. Hashtags: #تصميم_مواقع #الجزائر #برج_بوعريريج #موقع_إلكتروني. Reviewer notes:
- Line 1 restates two site strings and adds «و» ("and") between them; line 4 joins `prev.tl4` and `prev.tl4d` as the site's sentence.
- On screen, T70 drops the site's opening «في» (a label line), and T64 drops «بمجرّد أن نتّفق معاً على هذا النطاق» in 9:16: please judge both.
- «المنهج» is the site's menu label, used as the title: please confirm it reads as "the method".
- The kit's warning on «المعاينة» alone [TR §5.7] applies to the A caption and to T67.

**YouTube (16:9) description**: line 1 of the caption, then the chapters, then lines 1–5, the label and the link (`?ref=yt-yl-fr-methode`). FR chapters (N): `0:00 Vous décrivez le projet` · `0:10 On revient sous 24 h ouvrées` · `0:20 Vous envoyez votre contenu, on construit votre page d'accueil` · `0:30 On vous la présente` · `0:40 Vous décidez`. A: `0:00` · `0:10` · `0:20` · `0:38` · `0:48`. EN chapters use the EN labels. Title: « Méthode — Numidea Labs » / "Process — Numidea Labs".

**Subtitles:** an SRT per language for YouTube and a VTT per language for the site (Gate W), generated from the copy dictionary's in and out frames (one cue per block); none on LinkedIn (the text is burned in) [CH §1.3]. The generator is not built yet [RP §11].

### 4.7 Stills, carousel « Méthode » and thumbnails

N never names the Aperçu, so its stills need no conditions line; A's S4A slide carries the conditions on the slide itself.
- **First frame / thumbnail (Reels, TikTok, Shorts):** f0, the hook, the rail and the dunes, set at f0.
- **Instagram cover:** f50 (the same picture, the dunes settled), its text (y 420–846) inside the 3:4 grid crop (y 240–1680).
- **Carousel « Méthode »** (the W5 "between" slot that [PN §4] calls « Quatre étapes »; IG + LinkedIn PDF): 4:5 crops (y 90–1440) of the 9:16 frames; the LinkedIn PDF from the `pointer=li` render, one page per slide at 810 × 1012.5 pt (V01's writer [RP §1 issue 8]). The five step slides are the « cinq étapes » set; the cover is the hook. No added text.

| Slide | N frame | A frame | What it shows |
|---|---|---|---|
| 1 | f50 | f50 | The hook: « Vous décrivez le projet » / « Vous décidez », the rail at rest, the dunes |
| 2 | f185 | f185 | Step 1: T60 + T62a, faq3, station 1 lit |
| 3 | f365 | f365 | Step 2: T63 + T64, faq2 |
| 4 | f505 | f505 | Step 3: T65 above T66, the built page, the five day cells filled |
| — | — | **f735** | **A only: « L'Aperçu · avant tout paiement » and the conditions in full on their band** |
| 5 | f615 | f845 | Step 4: T69 + T70, the call frame |
| 6 | f765 | f995 | Step 5: T71 + T72, the page, the rail complete with the diamond |
| 7 | f960 | f1190 | The series end card (IG: « Lien en bio »; LinkedIn: « Lien en commentaire ») |

Each chosen frame is settled (every block in, every wipe done, before the scene's exit starts).
- **YouTube thumbnail:** 1280 × 720 from the 16:9 f90 (the hook, the rail, the caravan). The same for A: it names no offer.
- No Story renders are planned for V02 (no Story slot in [PN §4]).

---

## 5. Variants N and A in one table

| | **N « neutral »** | **A « apercu »** |
|---|---|---|
| Posting | Postable now (Gate 0): no offer, no CTA | **Not posted until the lawyer's written OK (A8).** Even then no call to action before Gate B |
| Step 3 | S4 only: T65 + T66, the blueprint filling into the page, five day cells | S4, then **S4A**: T67 « L'Aperçu · avant tout paiement » and T68 the conditions verbatim on a `--navy` band, alone for 7.0 s, at body size (9:16 63–80 px; 16:9 64–72 px) |
| Words that may appear | Never « Aperçu », « gratuit », « avant tout paiement », the conditions or « par mois » (`forbid_n`) | Those words only in T67 and T68 (`use`: A cuts only) |
| Every other scene | — | Identical to N, frame for frame |
| 9:16 length | 970 frames, 32.33 s | 1200 frames, 40.00 s |
| 16:9 length · chapters | 1570 frames, 52.33 s · 0:00, 0:10, 0:20, 0:30, 0:40 | 1800 frames, 60.00 s · 0:00, 0:10, 0:20, 0:38, 0:48 |
| Identical frames (checked, §6.3) | — | 9:16: A f0–519 = N f0–519, A f750–1199 = N f520–969. 16:9: A f0–899 = N f0–899, A f1130–1799 = N f900–1569 |
| Bed (`render.sh`, seed 7, −14 LUFS) | `v02-s-n-s7` (`--bars 9.75 --dur 32.333333`); `v02-y-n-s7` (`--bars 17.625 --dur 52.333333`) | `v02-s-a-s7` (`--bars 12.625 --dur 40`); `v02-y-a-s7` (`--bars 20.5 --dur 60`) |
| Music under step 3 | — | 9:16: the Dm change and its chime at 21.33 s under T68 (⚑ P6) |
| Captions | The five steps; no offer line | + `prev.brief` and `prev.terms` in full |
| Carousel | 7 slides | 8 slides (+ the conditions slide) |
| Covers and thumbnails | The hook frame | The same hook frame |
| URL parameter · copy cut | `v=n` (default) · `v02-s-n`, `v02-y-n` | `v=a` · `v02-s-a`, `v02-y-a` |
| File names | `v02__{ratio}__{lang}[__li]__neutral__music-s7.mp4` | `v02__{ratio}__{lang}[__li]__apercu__music-s7.mp4` |

**Note on N.** N never names the offer, but the path it shows is the site's: a homepage is built (step 3), presented (step 4), then « Vous décidez », « Si c'est oui, la page d'accueil est déjà faite » (step 5). That is the order the site publishes for every client. Recommended: the lawyer's A8 question covers the path as N shows it (P1). If the lawyer finds that the path itself promotes the offer, T72 is the line to drop from N (S6 then holds « Vous décidez » alone; no timing changes).

---

## 6. Deliverables, links and render plan

### 6.1 Files (in `out/v02/`; nothing in the public repository)

| File | What | Status |
|---|---|---|
| `v02__9x16__fr__neutral__music-s7.mp4`, `v02__9x16__en__neutral__music-s7.mp4` | 9:16 N, FR and EN | To render now |
| `v02__16x9__fr__neutral__music-s7.mp4`, `v02__16x9__en__neutral__music-s7.mp4` | 16:9 N (YouTube) | To render now |
| `v02__4x5__fr__li__neutral__music-s7.mp4`, `v02__4x5__en__li__neutral__music-s7.mp4` | LinkedIn 4:5: crops of `src/v02__9x16__{fr,en}__li__neutral__music-s7.mp4` | To render now |
| The same six with `apercu` | Variant A | Rendered for review; **not posted before A8** |
| `stills/` | Thumbnails, covers, the carousel slides, the LinkedIn PDFs (N; A in its own sub-folder) | With the renders |
| AR files | — | **Not rendered** (G1); `&ardraft` previews only, stamped as drafts |

No silent versions: the owner approved the bed (2026-10-27).

### 6.2 Where each file goes, and the codes

| File | Channel | Code (example week) | Link |
|---|---|---|---|
| 9:16 FR N | Instagram Reel + Facebook Page Reel (Algeria, France); YouTube Short FR | `dz-fb-fr-w04`; bio `dz-ig-bio`; `yt-ys-fr-w04` | `?lang=fr&ref=…` |
| 16:9 FR N | YouTube upload with chapters (W5) | `yt-yl-fr-methode` | `?lang=fr&ref=…` |
| 4:5 FR N (`li`) + PDF carousel | The founder's LinkedIn | `fr-li-fr-w04` | `?lang=fr&cur=eur&ref=…` |
| 9:16 EN N | TikTok EN, Instagram Reel, YouTube Short EN | bio `gu-tt-bio`; `yt-ys-en-w04` | `?lang=en&cur=usd&ref=…` |
| 9:16 AR N (after G1) | Facebook / Instagram (Algeria, Gulf), TikTok AR | `dz-fb-ar-w05`; bio `dz-ig-bio-ar`, `gu-tt-bio` | `?lang=ar&ref=…` |
| A files | Only after A8, in place of N's next posting of the same placement | — | — |

Links carry no anchor until Gate B (as V01): `#apercu` opens the Aperçu card with its request button, which N and A do not invite.

### 6.3 Render plan (sequential: 4 CPUs)

```
cd pipeline
node tools/copy-lint.mjs                              # the do-not-claim net over videos/ and copy/
node ../_review/measure-v02/dict-check.mjs            # use lists, forbid lists, verbatim strings against app.js
node ../_review/measure-v02/timing.mjs                # §4.4 against method.json
# the four beds (§4.5), then for each variant V in n a (T = neutral | apercu):
node render.mjs videos/v02.html --name v02 --tag ${T}__music-s7 --params v=$V --ratios 9x16 --langs fr,en \
  --audio ../music-lab/out/v02-s-$V-s7.wav --audio-gain <g> --audio-bitrate 384k --determinism --out ../out/v02
node render.mjs videos/v02.html --name v02 --tag ${T}__music-s7 --params v=$V --ratios 16x9 --langs fr,en \
  --audio ../music-lab/out/v02-y-$V-s7.wav --audio-gain <g> --audio-bitrate 384k --determinism --out ../out/v02
node render.mjs videos/v02.html --name v02 --tag ${T}__music-s7 --params v=$V,pointer=li --ratios 9x16 --langs fr,en \
  --audio ../music-lab/out/v02-s-$V-s7.wav --audio-gain <g> --audio-bitrate 384k --determinism --out ../out/v02/src
node tools/crop45.mjs ../out/v02/src/v02__9x16__${L}__li__${T}__music-s7.mp4 --lang $L --params v=$V,pointer=li \
  --out ../out/v02/v02__4x5__${L}__li__${T}__music-s7.mp4        # for L in fr en
```

Per render, as V01 [TR §10.3; RP]: copy lint; fit-text in range for every block; verify (container, faststart, colour, frame accuracy, determinism 7/7); the safe box per block on every frame (preflight sweep); `overlapCheck()` (no spliced scene change); `cropCheck()` on the `pointer=li` renders; loudness on each MP4; per-scene review cuts whose frames must equal the master's. **New for V02: the variant seam check**, the decoded frames of A at f0–519 and f750–1199 against N at f0–519 and f520–969 (16:9: f0–899 and f1130–1799 against f0–899 and f900–1569), pixel-identical. Then one phone pass per file, in a Latin-script and an Arabic interface.

**Time** (V01's measured rate, about 19 frames a second of capture per output [RP §9]): 9:16 N 51 s, A 63 s; 16:9 N 83 s, A 95 s; per language and per `li` source: about 14 minutes of capture for FR and EN, about 25–30 minutes with verify, crops, stills and checks.

### 6.4 Hours

§3.4: about 14–16.5 h of build plus 2 h of renders and QA, against [PN §5.2]'s 12–16 h. The rail is the "dimension line" of [ST §5]'s template A and is reused by V10-s30's timeline, which must follow the same five-step path (§8).

---

## 7. Gates and open questions

**Gates** ([TR §11] applies):

| # | Gate | Applies to |
|---|---|---|
| G1 | A native speaker has reviewed every Arabic string (on screen, page placeholders, tab row, captions, the trims of T64 and T70, the title «المنهج») | AR files |
| A8 | The lawyer's written answer: the Aperçu may be promoted organically before the registration, including as part of the method | Every A file |
| G5 | Music: **answered** (owner, 2026-10-27: the code-made bed, seed 7, every language). Still listen to the 16:9 files for the long last chord (§4.5) | — |
| G8 | Copy re-checked against `assets/app.js` at the render commit (`dict-check.mjs`); lint, fit-text, verify, the safe box, splices, the crop and the variant seams all pass; TikTok's RTL safe-zone file checked (until then x 140–940 for every language) | Every file |
| — | Gate B is **not** needed for N or A (neither has a call to action); G4 (client permission) and G7 (Loi Toubon) do not apply (no client screen, French-only screens in FR, no mirror) | — |

**Questions for the owner**

1. **Title.** « Méthode » / "Process" / «المنهج», the site's own menu label for the card: right for the video, the YouTube upload and the carousel?
2. **9:16 trims.** To keep A inside 40 s, the 9:16 lines are trimmed: T64 « Avec nos questions, puis un périmètre écrit et un prix ferme. » (without « dès que le cadrage est validé ensemble »), T72 « Si c'est oui, la page d'accueil est déjà faite. » (without « on enchaîne sur le reste »), and « En français, anglais ou arabe. » only in the caption. The 16:9 keeps them all. OK? The alternative keeps the condition in T64 and makes S3 0.67 s longer: N 33.0 s, A 40.67 s.
3. **The lawyer.** Will the A8 question include the path as N shows it (§5, note)?
4. **The dunes.** The S1 ground is the site's « Le Grand Erg » plate, a caravan on a ridge: the path. Any objection in the Gulf masters (AR, EN), where desert imagery might read as local? The fallback is Plate I, as in V01.
5. **A's music.** Accept the chime under the conditions in 9:16 A, or add `--chord-chimes off` and re-render that one bed?
6. **16:9 end card size.** The series card keeps V01's 48 px label and motto in 16:9; [ST §3.3] asks ≥ 56 px for text that must be read in 16:9. Keep the series card as it is, or raise it in both V01 and V02 (a re-render of V01's 16:9)?
7. **After A8.** If the lawyer says yes, does A replace N in the next postings of each placement (the 16:9 on YouTube included), or run as its own post?

---

## 8. Changes this file needs in other files (not made here)

| File | Change |
|---|---|
| `PLAN.md` §3 (V02 row), §4 (W5 carousel), §5.2, §10 #3 | Title « Méthode » (not « Quatre étapes »); 9:16 32.3 s (N) / 40.0 s (A), 16:9 52.3 s / 60.0 s with five chapters; blocked by: N nothing (Gate 0), A the lawyer (A8); the W5 carousel is « Méthode » (7 slides, 8 with A); V02 hours 14–16.5 + 2 |
| `strategy.md` §5 (V02 row and the YouTube list), §4 (pillar 1), §6.5, §8.2 | « Quatre étapes. Zéro surprise. » → « Méthode », five steps from `prev.tl1`–`prev.tl5`; step 3 no longer names the Aperçu in the postable cut: the Aperçu appears only in variant A, after A8; the carousel and calendar names |
| `strategy.md` §3.3 (own-site footage) | `#how` no longer exists (the method section left the page on 2026-10-26); the path is `#apercu .ptl` |
| `scripts-packages.md` §0.2 #4, §1.7 (A7, A8), §1.8 « Steps », V05 S3 | The `#how` title and its capture are gone; the « Steps » scenes must take the site's five steps, not four; A7 is answered by the site (scope and firm price at step 2, before the build); V05 S3's `#how` still needs a new source (the `#apercu` path list) or its arch-and-chips fallback |
| `facts-bank.md` §1.3, §1.4 | §1.3: `prev.brief` no longer says « en 5 jours ouvrés » or « visio (30 min) »; the four moments are now the five-step path. §1.4: replace the four steps with F40–F49 and drop the « Quatre étapes. Zéro surprise. » title and lead (no longer on the site) |
| `scripts-trailer.md` §2 (F04, F05) and Appendix A (T02a, T04a, T04b) | The keys moved: « 5 jours ouvrés » is now `prev.tl3d`, « Vous décidez » `prev.tl5`, « Payé jusqu'ici : » `prev.tl5d`; line numbers changed. Re-check before V10-s30, whose timeline should follow the five-step path and reuse V02's rail |
| `channels.md` §5.2 | The « Quatre étapes. Zéro surprise. » row → « Méthode », 52–60 s, one chapter per step (five) |
| `music-lab/ledger.csv` | Rows M-0005 … M-0008 for the four V02 beds once rendered |

---

## Appendix A. Copy dictionary for `pipeline/copy/method.json`

- One key per text block; `src` points to the fact key in §2, `key` and `lines` to the site, `edit` says verbatim, trimmed or restated.
- `use` names cut prefixes (`v02` every cut, `v02-s` 9:16, `v02-y` 16:9, `v02-s-a` / `v02-y-a` variant A only); the loader refuses a block outside its cuts. `TTL` is for captions only and no video cut can load it.
- `arReviewed` stays `false` until a native speaker signs off; every Arabic value carries the review marker in `ar_review`, and the file-level marker is `_meta.ar_marker`.
- French strings keep the site's no-break spaces (` `, ` `).
- The file below is `pipeline/copy/method.json` as created on 2026-10-27 (edit this appendix first, then the file).

```json
{
  "_meta": {
    "built": "2026-10-27",
    "video": "V02 « Méthode » (the method: the site's five-step path, from the first message to the decision)",
    "site_commit": "ed1e6ad",
    "site_keys": "assets/app.js prev.tl1..prev.tl5 (+ tl1p, tl2p, tl3d, tl4d, tl5p), prev.name, prev.brief, prev.terms, nav.about; index.html #apercu .ptl (l. 553-562)",
    "ar_marker": "à relire par un arabophone natif",
    "rule": "No new facts. Every string is the site's own (verbatim, trimmed or restated, as `edit` says), with its fact ID (`src`, scripts-method.md §2) and site key (`key`). Re-check every string against assets/app.js at the render commit. No URL, email, phone number, ref code, price figure or call to action on screen. « Payé jusqu'ici : 0 DA » (prev.tl5d + .ptl-zero) is a price figure and is never used.",
    "source": "scripts-method.md, Appendix A (edit the script first, then this file)",
    "ar_status": "Every ar value is a draft: à relire par un arabophone natif. arReviewed stays false until a native reviewer signs off (gate G1). AR masters are laid out but not rendered before that.",
    "cuts": {
      "v02-s-n": "short cut, 9:16 (and the 4:5 crop of its pointer=li render), variant N, 970 frames, 32.333 s",
      "v02-s-a": "short cut, 9:16 (and the 4:5 crop), variant A, 1200 frames, 40.000 s; not to be posted until the lawyer answers A8",
      "v02-y-n": "YouTube cut, 16:9, variant N, 1570 frames, 52.333 s, five chapters",
      "v02-y-a": "YouTube cut, 16:9, variant A, 1800 frames, 60.000 s, five chapters; not to be posted until the lawyer answers A8"
    },
    "use_rule": "`use` names cut prefixes: v02 = every cut; v02-s = the 9:16 short cut (both variants); v02-y = the 16:9 YouTube cut (both variants); v02-s-a / v02-y-a = variant A only. The copy loader refuses a block whose `use` does not match the cut.",
    "forbid_all": [
      "https?:|www\\.|\\.(?:io|com|dz|fr|tech|app|net)\\b|github",
      "@",
      "\\+?\\d[\\d .]{7,}\\d",
      "\\d\\s?(?:DA|DZD|€|\\$|USD|EUR)\\b|[€$]\\s?\\d|\\bHT\\b|excl\\. tax|دج",
      "Pay[ée] jusqu|Paid so far|المدفوع حتى",
      "→|←|Demander|Request my|اطلب"
    ],
    "forbid_n": [
      "Aper[çc]u|\\bPreview\\b|معاين",
      "[Gg]ratuit|\\b[Ff]ree\\b|مجّان|مجان",
      "avant tout paiement|avant de payer|before any payment|before you pay|قبل أيّ دفع|قبل أي دفع|قبل أن تدفع",
      "sans engagement|no obligation|دون التزام",
      "immatricul|registered|المسجّلة|المسجلة",
      "par mois|a month|في الشهر"
    ],
    "forbid_a_note": "Variant A applies forbid_all only; the Aperçu, « gratuit » and the terms may appear in T67 and T68 alone (their `use` limits them to the -a cuts).",
    "typography": "French strings keep the site's own no-break spaces: U+00A0 in « 24\u00a0h », « 5\u00a0jours », « 30\u00a0min » and U+202F before « : » (prev.tl5p), so a line never breaks inside them.",
    "words": "Words are whitespace-separated tokens; « · », « — », « & » and « : » standing alone are not counted (the V01 convention, scripts-trailer.md §4.3)."
  },
  "TTL": {
    "src": "F52", "key": "nav.about", "lines": "app.js:18 / :106 / :197",
    "use": ["captions"], "edit": "verbatim",
    "note": "The video's title, from the site's own menu label for #apercu. Captions, YouTube title, carousel name and file metadata only: never on screen.",
    "fr": "Méthode", "en": "Process", "ar": "المنهج",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T60": {
    "src": "F40", "key": "prev.tl1", "lines": "app.js:289 / :399 / :512",
    "use": ["v02"], "edit": "verbatim",
    "note": "Hook line 1 (hook size, set at f0), then station 1's label (header size): one block, two states.",
    "fr": "Vous décrivez le projet", "en": "You describe the project", "ar": "تصف المشروع",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T61": {
    "src": "F48", "key": "prev.tl5", "lines": "app.js:293 / :403 / :516",
    "use": ["v02"], "edit": "verbatim",
    "note": "Hook line 2, set at f0, in the swash face; leaves at the end of S1 and returns as T71.",
    "fr": "Vous décidez", "en": "You decide", "ar": "أنت تقرّر",
    "swash": { "fr": "Vous décidez", "en": "You decide" },
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T62a": {
    "src": "F41", "key": "prev.tl1p", "lines": "app.js:289 / :399 / :512",
    "use": ["v02"], "edit": "trimmed: the first sentence of prev.tl1p",
    "fr": "Deux minutes, par écrit ou de vive voix.", "en": "Two minutes, in writing or out loud.", "ar": "دقيقتان، كتابةً أو مشافهة.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T62b": {
    "src": "F41", "key": "prev.tl1p", "lines": "app.js:289 / :399 / :512",
    "use": ["v02-y"], "edit": "trimmed: the second sentence of prev.tl1p (16:9 only; in 9:16 it goes to the caption)",
    "fr": "En français, anglais ou arabe.", "en": "In French, English or Arabic.", "ar": "بالفرنسية أو الإنجليزية أو العربية.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T63": {
    "src": "F42", "key": "prev.tl2", "lines": "app.js:290 / :400 / :513",
    "use": ["v02"], "edit": "verbatim",
    "note": "« 24 h ouvrées » is a reply, nothing more (flag T7): no weekday, no hours.",
    "fr": "On revient sous 24\u00a0h ouvrées", "en": "We reply within 24 working hours", "ar": "نعود إليك خلال 24 ساعة عمل",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T64": {
    "src": "F43", "key": "prev.tl2p", "lines": "app.js:290 / :400 / :513",
    "use": ["v02-s"],
    "edit": "trimmed (FR, AR): the first sentence without its last clause « dès que le cadrage est validé ensemble » / «بمجرّد أن نتّفق معاً على هذا النطاق»; restated (EN): « First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. » shortened to one sentence. « puis » / \"then\" / «ثم» keeps the scope and the price after the questions, never inside the 24 h.",
    "fr": "Avec nos questions, puis un périmètre écrit et un prix ferme.",
    "en": "First our questions, then a written scope and a firm price.",
    "ar": "بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T64y": {
    "src": "F43", "key": "prev.tl2p", "lines": "app.js:290 / :400 / :513",
    "use": ["v02-y"], "edit": "trimmed: prev.tl2p without its last sentence « Pas une fourchette, un chiffre. » (that sentence goes to the captions)",
    "fr": "Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble.",
    "en": "First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price.",
    "ar": "بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T65": {
    "src": "F44", "key": "prev.tl3", "lines": "app.js:291 / :401 / :514",
    "use": ["v02"], "edit": "verbatim",
    "note": "Its own words carry the content hand-off (« Vous envoyez votre contenu ») that must go with « 5 jours ouvrés »: T66 is never on screen, or in a still, without T65.",
    "fr": "Vous envoyez votre contenu, on construit votre page d'accueil", "en": "You send your content and we build your homepage", "ar": "ترسل إلينا محتواك، ونبني صفحتك الرئيسية",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T66": {
    "src": "F45", "key": "prev.tl3d", "lines": "app.js:291 / :401 / :514",
    "use": ["v02"], "edit": "verbatim",
    "fr": "5\u00a0jours ouvrés", "en": "5 working days", "ar": "5 أيام عمل",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T67": {
    "src": "F50", "key": "prev.name + prev.brief", "lines": "app.js:370-371 / :480-481 / :593-594",
    "use": ["v02-s-a", "v02-y-a"], "edit": "restated: the offer's name (prev.name) and the opening words of prev.brief « Avant tout paiement » / \"Before any payment\" / «قبل أيّ دفع», joined by the site's separator",
    "gate": "Variant A only; not to be posted until the lawyer answers A8",
    "fr": "L'Aperçu · avant tout paiement", "en": "The Preview · before any payment", "ar": "المعاينة · قبل أيّ دفع",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T68": {
    "src": "F51", "key": "prev.terms", "lines": "app.js:371 / :481 / :594",
    "use": ["v02-s-a", "v02-y-a"], "edit": "verbatim (the Aperçu's conditions, exactly as the site states them)",
    "gate": "Variant A only; not to be posted until the lawyer answers A8",
    "fr": "Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus.",
    "en": "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients.",
    "ar": "مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T69": {
    "src": "F46", "key": "prev.tl4", "lines": "app.js:292 / :402 / :515",
    "use": ["v02"], "edit": "verbatim",
    "fr": "On vous la présente", "en": "We walk you through it", "ar": "نعرضها عليك",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T70": {
    "src": "F47", "key": "prev.tl4d", "lines": "app.js:292 / :402 / :515",
    "use": ["v02"], "edit": "verbatim (FR, EN); trimmed (AR): «في مكالمة فيديو من 30 دقيقة» without its opening «في», so the line holds in S5's 3.67 s",
    "fr": "visio de 30\u00a0min", "en": "30-minute video call", "ar": "مكالمة فيديو من 30 دقيقة",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T71": {
    "src": "F48", "key": "prev.tl5", "lines": "app.js:293 / :403 / :516",
    "use": ["v02"], "edit": "verbatim",
    "note": "Station 5's label, in the swash face like T61 (the hook's second line comes back). prev.tl5d « Payé jusqu'ici : » and the 0 DA figure are NOT used (a price figure).",
    "fr": "Vous décidez", "en": "You decide", "ar": "أنت تقرّر",
    "swash": { "fr": "Vous décidez", "en": "You decide" },
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T72": {
    "src": "F49", "key": "prev.tl5p", "lines": "app.js:293 / :403 / :516",
    "use": ["v02-s"], "edit": "trimmed: prev.tl5p without « : on enchaîne sur le reste » / \": we move straight on to the rest\" / «: ننتقل مباشرة إلى بقية العمل» (9:16 only)",
    "fr": "Si c'est oui, la page d'accueil est déjà faite.", "en": "If it's yes, the homepage is already done.", "ar": "إن كان الجواب نعم، فالصفحة الرئيسية جاهزة بالفعل.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T72y": {
    "src": "F49", "key": "prev.tl5p", "lines": "app.js:293 / :403 / :516",
    "use": ["v02-y"], "edit": "verbatim",
    "fr": "Si c'est oui, la page d'accueil est déjà faite\u202f: on enchaîne sur le reste.",
    "en": "If it's yes, the homepage is already done: we move straight on to the rest.",
    "ar": "إن كان الجواب نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل.",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T50": {
    "src": "F07", "key": "hero.eyebrow", "lines": "app.js:20 / :108 / :199",
    "use": ["v02"], "edit": "verbatim (the series end card, as V01)",
    "fr": "Studio web & logiciel · Bordj Bou Arréridj, Algérie", "en": "Web & software studio · Bordj Bou Arréridj, Algeria", "ar": "استوديو ويب وبرمجيات · برج بوعريريج، الجزائر",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T51": {
    "src": "F29", "key": "footer.tag", "lines": "app.js:100 / :188 / :279",
    "use": ["v02"], "edit": "verbatim (the series end card, as V01)",
    "fr": "Enraciné en Numidie · bâti sur des idées", "en": "Rooted in Numidia · built on ideas", "ar": "جذورها في نوميديا · مبنيّة على الأفكار",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "T52": {
    "src": "F30", "key": "(label, not a site string)", "lines": "strategy.md §3.4; scripts-trailer.md F30",
    "use": ["v02"], "edit": "label per placement, as V01",
    "note": "none in 16:9 and in story=1 renders",
    "fr": "Lien en bio", "fr_li": "Lien en commentaire", "en": "Link in bio", "en_li": "Link in comments", "ar": "الرابط في الملف التعريفي",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "M01": {
    "src": "F25", "key": "(mock-up placeholder, campaign kit)", "lines": "notes/campaign/campaign-copy-fr.md:21 (vault)",
    "use": ["v02"], "edit": "picture text, not a claim (as V01)",
    "fr": "Votre logo", "en": "Your logo", "ar": "شعارك هنا",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "M02": {
    "src": "F25", "key": "(mock-up placeholder, campaign kit)", "lines": "notes/campaign/campaign-copy-fr.md:21 (vault)",
    "use": ["v02"], "edit": "picture text, not a claim (as V01)",
    "fr": "Votre entreprise", "en": "Your business", "ar": "اسم نشاطك",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  },
  "M03": {
    "src": "F31", "key": "(the site's language switch, restated per master)", "lines": "index.html language switch; scripts-trailer.md F31",
    "use": ["v02"], "edit": "UI picture (the mock-up's tab row, as V01)",
    "fr": "FR · EN · AR", "en": "FR · EN · AR", "ar": "الفرنسية · الإنجليزية · العربية",
    "ar_review": "à relire par un arabophone natif", "arReviewed": false
  }
}
```
