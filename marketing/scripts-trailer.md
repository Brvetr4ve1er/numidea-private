# Numidea Labs: launch trailer scripts — V01 « L'atlas » (brand, Gate 0) and the Aperçu cut-downs (V10 social, Gate B)

PRIVATE. Never copy this file, or anything rendered from it, into `/home/user/STICKITTY.INC` (the public repository).
Written 2026-10-26 against the site at commit `82603b0`. Rechecked at `ecf48bb`: that commit only adds `IMPROVEMENTS.md`, so every quoted string is unchanged. **Revised 2026-10-26 after review** (§14 maps each review issue to its change). It builds on `facts-bank.md` [FB], `channels.md` [CH], `pipeline.md` [PL], `music.md` [MU], `strategy.md` [ST] and `scripts-packages.md` [SP].
Every Arabic string is marked **[à relire par un arabophone natif]**.
Nothing here is approved for posting yet. §11 lists the gates. Items marked **OWNER PREREQUISITE** need a fact, a permission or a decision that only the owner can give; the scripts never fill them in.

---

## 0. Summary

### 0.1 What this file scripts

| ID | What it is | Length · ratios | Gate | Calendar [ST §8.2] | Section |
|---|---|---|---|---|---|
| **V01-30** | Brand launch trailer « L'atlas ». The site's own hero title, split across the hook and the language mirror; « Un prix avant le devis »; the founder's line; the series end card. **No Aperçu, no call to action, no URL** | 30.0 s · 9:16 and 16:9 (one script); 4:5 is a crop of the 9:16 | **0** | W1 Tue (FR); AR and EN after review (W2). W1 only if the W0 hours exist (§10.4, Q7) | §4 |
| V01-06 | Non-offer bumper: « En français, anglais ou arabe. », the mirror, wordmark, place, pointer | 6.0 s · 9:16 (Story render) | 0 | Not scheduled. Rendered only if the strategy adds Story slots after the W4 check | §7 |
| **V10-s30** | The Aperçu, **social cut-down of V10** (the long V10 is [SP §2]): hook, the four moments ending on « 0 », the work (A) or the founder (N), the conditions alone, the end card with the CTA | 30.0 s · 9:16 and its 4:5 crop. (A 16:9 layout is specified in §5.2, but no 16:9 file is planned: YouTube and the site carry the long V10) | **B** + G3 (A also needs C) | With V10, W6 at the earliest | §5 |
| V10-s15 | The Aperçu, 15 s: hook, « Payé jusqu'ici : 0 », the conditions alone, the CTA | 15.0 s · 9:16 (Story render) | **B** + G3 | Not scheduled. Stories / WhatsApp Status after Gate B, if the strategy adds them | §6 |

**Why the file is split this way.** The calendar's launch item is V01, a Gate-0 brand trailer with no call to action, pinned and used as the YouTube channel trailer in W1 [ST §5, §8.2]. The previous version of this file led every cut with the Aperçu and ended on « Demander mon Aperçu gratuit → » plus the URL, so none of it could be posted before Gate B (W5 at the earliest), and it duplicated V10. Now V01 is its own CTA-free script, and the Aperçu-led cuts are V10's social cut-downs. There is one Aperçu treatment: the long V10 in [SP §2] and these cut-downs. The strategy changes this implies are listed in §13.

### 0.2 The choices that shape every cut

1. **Site strings only.** Every on-screen line is a site string, quoted, trimmed or plainly restated, with a fact ID (§2).
2. **Hook of 6 words or fewer, fully set at frame 0.** V01: « Votre site sur mesure, » (4). V10 cuts: « Votre page d'accueil, avant de payer. » (6). V01-06: « En français, anglais ou arabe. » (5) [ST §3.3; CH §1.3].
3. **Reading load of 3 words a second or less in every scene**, counting every block that enters in it (§3.2). Every hold also meets 0.35 s per word + 1 s.
4. **The Aperçu appears only in the V10 cuts, always with its conditions.** The conditions (F03) are on screen **alone**, at body size, for at least 6.3 s, then stay on their band to the end. The CTA only enters after them. The Aperçu's mock-up shows only the master's language, sits only inside the call frame, and is wiped out with it. No language demo follows it, because what the free Aperçu covers is undecided [FB §1.3].
5. **One end card for the whole series** [ST §3.4; SP §1.6]: wordmark, label, motto, a pointer per placement, and the CTA « Demander mon Aperçu → » only after Gate B. **No URL, email, phone number or ref code on screen.** Links live in captions, descriptions, stickers and bios (§9).
6. **Calm by default.** Every cut stays in Arcanum. One optional theme excursion in V10-s30 only, once the ink wipe is built (§3.4, §3.5). The six themes belong to V25 [ST §5].
7. **No client screenshot in anything posted before Gate C.** V01, V01-06 and V10-s15 have none at all. Variant A of V10-s30 uses only the cropped captures in §5.3.
8. **Music written in code**, D minor, 90 BPM [MU §5]. V01 needs one small change to `bed.mjs` (`--dur`); the V10 cuts need the cue input (§3.4).
9. **W1 scope: V01-30 in French only, 9:16 + 16:9, with the 4:5 as a crop.** Everything else waits for the W4 check or its gate (§10).

### 0.3 Owner prerequisites (nothing below is invented in the scripts)

| # | What is needed | Blocks | Where |
|---|---|---|---|
| P1 | **Hours in W0**: about 17–21 h for V01-30 FR alone, or slip V01 to W2 (and V02 to W3, after it is scripted) | V01 in W1 | §10.4, Q7 |
| P2 | Native Arabic reviewer named | Every AR file | G1 |
| P3 | Listening test of the code-made bed, seed chosen | Music in any file | G5, Q8 |
| P4 | **The Arabic-script spelling of the founder's name** (the site only shows « Yasser Hamisse » in Latin) | T30 in the AR masters (a fallback line is used until then) | Q4 |
| P5 | Gate B items: privacy page, legal name, dedicated WhatsApp number; capacity and employment contract; the lawyer's answer on promoting the Aperçu before registration | V10-s30, V10-s15 | G2, G3, Q9 |
| P6 | Written permission from Bordj Steel and Alliance Travel; the client-or-employer decision; approval of the T06 heading in each language | V10-s30 variant A | G4, Q2, Q10 |
| P7 | A fresh capture of Alliance Travel's Arabic page | V10-s30 variant A in Arabic | Q3 |
| P8 | Only if wanted: real FR / EN / AR placeholders in the mirror (an extension of the strategy's one-language-per-frame rule, and the lawyer's Loi Toubon answer for France) | Nothing by default (grey bars are used) | Q6, G7 |
| P9 | Only if wanted: what the free Aperçu includes (languages, pages) | Nothing by default (the Aperçu is never linked to the language demo) | Q11 |

---

## 1. Rules these scripts apply

- **Facts:** every on-screen string is a site string, quoted or trimmed, or a plain restatement of one. Each cites a fact ID from §2. There are no new numbers, clients, results, rankings, quotes or team claims [FB "How to use"].
- **Never on screen:**
  - team size, "6 ans", client counts, "des clients en France", any tool names;
  - Nomara, "En cours" projects, testimonials, "open source", rankings, client figures, star ratings;
  - payment methods or terms, ownership or hosting promises, legal or registration data about the studio [FB §2.1–2.2];
  - a URL, an email address, a phone number or a ref code [ST §3.4; SP §0.2 item 7].
- **The Aperçu (V10 cuts only):**
  - the conditions (F03) go with every mention: on screen alone at body size for at least 6.3 s, then on their band until the end; in full in every caption; on every still that names the Aperçu (§5.8);
  - « à réception de vos contenus » goes next to "5 jours ouvrés";
  - nothing beyond the site's strings: what the Aperçu covers (languages, pages, services) is undecided [FB §1.3; vault `Maps/Owner decisions pending.md:61-64`]. The Aperçu mock-up therefore shows only the master's language and leaves with the call frame;
  - no "places left" counter [FB §1.3];
  - the CTA only after Gate B, and only once the conditions have been on screen.
- **Prices** (only in the deferred slot module, §5.6):
  - FR « env. … HT »; EN "about … excl. tax"; AR «نحو … غير شاملة الضريبة» [à relire par un arabophone natif];
  - DA is the reference; € and $ are the site's own rounded conversions; never AED or SAR [FB §1.5];
  - **revealed by a wipe, never counted up**: a count-up would show figures the studio does not charge on some frames, in thumbnails and in carousel stills;
  - a price row never follows a trilingual demo without saying where trilingual belongs (the Studio row, F32);
  - every price caption carries the site's line "indicative range, not a quote" in its language (F33).
- **Client work (variant A only):**
  - written permission per client, kept on record;
  - the heading T06 is approved by the owner in each language, together with the client-or-employer decision (G4). Proposed: FR « Quelques réalisations », EN "Selected projects", AR «نماذج من الأعمال» [à relire par un arabophone natif]. None of them says "our", "client", « livré » or "delivered";
  - captures are used only in the crops given in §5.3, which leave out client figures, rankings, phone numbers, addresses, ratings and third-party brand chips;
  - the address bar stays blank, with no `netlify.app` hostname [FB §1.9, §2.3, §2.4].
- **France:** French-only screens [FB §2.4]. With the default grey-bar mirror (§3.4) the FR master holds no English or Arabic copy.
- **One language per frame** [ST §3.3]: in the mirror, the languages other than the master's are shown as grey text bars, and the tab row is in the master's script. Real placeholders in other scripts need P8.
- **Gulf:**
  - "studio based in Algeria" appears in every piece: the end-card label (F07) or place line (T53) is in every cut;
  - no flags, landmarks or local-office look;
  - no price on screen by default [CH §4.3].
- **Founder:** no face, ever. The stand-ins are the monogram « Y » and `assets/illus/bench.webp`. `coin-king.webp` is never used [FB §1.2, §2.4].
- **Arabic:**
  - IBM Plex Sans Arabic, 10–15% larger than the Latin size, line-height 1.5 or more, never letter-spaced; Western digits;
  - a line never starts with a Latin word, except a line holding only an address (no such line remains on screen). So in the AR masters the founder's Latin name follows an Arabic word (T30) until P4 gives the Arabic spelling [CH §1.3; Campaign.md].
- **Type and colour (BRAND.md):**
  - **no gradient text, ever** ("The anti-slop sweep"). The swash is solid `--teal-text` in `--font-head-em` (Cinzel Decorative in Arcanum), exactly like `.hero-h .swash` (styles.css:42, :213);
  - text colours come only from `--*-text` tokens; the fill tokens `--crimson` and `--teal` are for strokes, rules, rings and button fills ("Text tokens vs fill tokens"). This matters once a component is reused in another theme: `--crimson-text` differs from `--crimson` in Noir (#FF6B6F) and Engineering (#FF7A45);
  - no blinking: the wordmark's cursor is a solid block (BRAND.md "The logo").
- **Reading load** (§3.2): 6 words or fewer in a hook; 3 words a second or less per scene; holds of 0.35 s per word + 1 s or more; entrances at least 0.33 s apart.
- **No new AI generations** of images, footage or music (standing owner rule). The existing engravings are part of the videos' visual language under the owner's 2026-10-26 decision. They were generated in earlier runs, so they are never described as hand-engraved or "sans IA" [FB §3.1; ST §11 #14].
- **Measurement:**
  - only `?ref=` codes, which the site cleans to `[\w-]` and cuts at 20 characters (app.js:1954-1958);
  - plus each platform's own insights;
  - no pixel or tracker [FB §1.11].
- **Determinism (pipeline rules):** no `will-change`; clear settled properties; no wall clock and no CSS transitions; fonts proven loaded before frame 0; serve over HTTP [PL §4.1].

---

## 2. Fact key (the IDs cited in every table)

"Restated" means a plain restatement of the cited source, with no new fact. Line numbers are FR / EN / AR in `assets/app.js` unless stated.

| ID | Fact used on screen | Source | FB § | Status |
|---|---|---|---|---|
| F01 | V10 hook: « Votre page d'accueil, avant de payer. » / "Your homepage, before you pay." / «صفحتك الرئيسية، قبل أن تدفع.» [à relire par un arabophone natif] | FR: the share-card tagline index.html:26, :33 trimmed (« Voyez » dropped), identical to the kit's on-image text for concept 4 (`notes/campaign/campaign-copy-fr.md:72`). EN and AR restated from `prev.brief` app.js:515 / :630 | 1.1, 1.3 | OK; 6 words; F03 must follow on screen and in the caption |
| F02 | The Aperçu: the homepage before any payment, with the client's content | `prev.brief` app.js:403 / :515 / :630 | 1.3 | OK + F03 |
| F03 | Terms: « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » | `prev.terms` app.js:403 / :515 / :630 | 1.3 | Mandatory with every mention |
| F04 | « 5 jours ouvrés » + « à réception de vos contenus » | `prev.tl2d` app.js:319 / :431 / :546; condition from `campaign-readme.md:249` | 1.3, "How to use" | OK + condition |
| F05 | « Vous décidez » · « Payé jusqu'ici : 0 » | `prev.tl4`, `prev.tl4d` app.js:320 / :432 / :547 (amount without currency, so one master serves every market) | 1.3 | OK |
| F06 | « Votre site sur mesure, » + « en français, anglais ou arabe. » (the hero title, split where the site splits it: the second half is the site's own swash span) | `hero.title` app.js:21 / :119 / :220 | 1.1 | OK |
| F07 | Label « Studio web & logiciel · Bordj Bou Arréridj, Algérie »; short place line « Bordj Bou Arréridj, Algérie » | `hero.eyebrow` app.js:20 / :118 / :219; `tb.place` app.js:24 / :122 / :223 | 1.1 | OK. States "based in Algeria" for the Gulf |
| F08 | CTA « Demander mon Aperçu → » / "Request my Preview →" / «اطلب معاينتك ←» [à relire par un arabophone natif] (one wording for the whole series [SP §1.6]) | `prev.cta` app.js:403 / :515 / :630 | 1.3 | **After Gate B only** (G2) |
| F09 | T06 heading. Proposed: « Quelques réalisations » / "Selected projects" / «نماذج من الأعمال» [à relire par un arabophone natif] | FR `campaign-readme.md:236`; EN and AR restated from the FR, without "our" | 1.9 | **OWNER PREREQUISITE**: approved per language with the client-or-employer decision (G4) |
| F10 | « Bordj Steel · Construction métallique » | sector line scene-data.mjs:81 / :87 / :93 | 1.9 | **OWNER: client permission** |
| F11 | « Alliance Travel · Agence de voyages » | sector line scene-data.mjs:154 / :160 / :166 | 1.9 | **OWNER: client permission** |
| F12 | Package names Essentiel · Studio · Moteur | app.js:357-375 / :469-487 / :584-602 | 1.5 | OK |
| F13 | Essentiel = « site vitrine » | Essentiel scope « Vitrine ou landing, 1 à 5 pages » app.js:358; EN FAQ "start at 90,000 DZD for a showcase site" app.js:185 | 1.5 | OK (restated); slot module only |
| F14 | « env. 90 000 – 160 000 DA HT » · « env. 600 – 1 100 € HT » · "about $670 – 1,200 excl. tax" | `PRICE_MODEL` app.js:680; index.html:773; conversion app.js:1707, :1721-1725 | 1.5 | OK + wording rule; slot module only |
| F15 | "Studio based in Algeria." / «مقرّنا في برج بوعريريج، الجزائر.» [à relire par un arabophone natif] | **FAQ 5, opening clause only** (« On est basés à Bordj Bou Arréridj »), app.js:90 / :188 / :289; the rest of that sentence (« … y compris pour des clients en France », "…including in France", «ومنهم عملاء في فرنسا») is do-not-claim #3 [FB §2.1]; hero label (F07); kit wording `Maps/Campaign.md:73` | 1.7 | OK (opening clause only; restated); slot module P-GU only |
| F16 | "UTC+1 · 2 h behind Riyadh · 3 h behind Dubai" | `contact.vTz` app.js:515 / :630, trimmed | 1.1 | OK; slot module P-GU and captions |
| F17 | « Yasser Hamisse » | index.html:1056 (the AR page shows the same Latin spelling) | 1.2 | OK + the site's spelling. Arabic spelling: **OWNER PREREQUISITE** (P4) |
| F18 | « Designer graphique & développeur web · Fondateur » | `founder.role` app.js:55 / :153 / :254 | 1.2 | OK. AR T31 drops «· المؤسّس» [à relire par un arabophone natif], which moves into T30-AR |
| F19 | « Je reste à vos côtés après le lancement. » | second sentence of `founder.bio`, trimmed, app.js:56 / :154 / :255. The first sentence ("Six ans…") is never used | 1.2 | OK (trimmed) |
| F20 | Wordmark « Numidea Labs » | index.html:1256; styles.css:43, :139-142 | 3.3 | OK (rebuilt in code, §3.4) |
| F21 | `brvetr4ve1er.github.io/Numidea.tech` | index.html:18-22 | 1.1 | **Links only, never on screen** (§9) |
| F22 | `?ref=` attribution | app.js:1924-1958 | 1.11 | OK |
| F23 | Coordinates « 36°04′N · 4°46′E » (visual device) | index.html:302 | 1.1 | OK; slot module P-GU only |
| F24 | The trilingual, natively right-to-left craft the mirror demonstrates | `faq3.a` app.js:88 / :186 / :287 | 1.8 | OK |
| F25 | Mock-up placeholders: « Votre logo », « Votre entreprise »; "Your logo", "Your business"; «شعارك هنا», «اسم نشاطك» [à relire par un arabophone natif] | kit `notes/campaign/campaign-copy-fr.md:21`, `campaign-copy-gulf-ar.md:51`, `campaign-copy-gulf-en.md:101` | — | Placeholders, not claims; never an invented brand |
| F26 | Glaive Store demo badge « Projet de démonstration (portfolio) – pas un projet client » | `campaign-readme.md:242` | 1.9 | Optional swap only (§8) |
| F27 | Plate captions (16:9 only, optional) | app.js:73 / :171 / :272 | 1.10 | OK |
| F28 | « Un prix avant le devis. » / "A price before the quote." / «سعر قبل عرض السعر.» [à relire par un arabophone natif] | `price.title` app.js:353 / :465 / :580 (its second half is the site's swash) | 1.5 | OK. No figure on screen in V01 |
| F29 | Motto « Enraciné en Numidie · bâti sur des idées » / "Rooted in Numidia · built on ideas" / «جذورها في نوميديا · مبنيّة على الأفكار» [à relire par un arabophone natif] | `footer.tag` app.js:110 / :208 / :309 | 1.1 | OK |
| F30 | Pointer « Lien en bio » / "Link in bio" / «الرابط في الملف التعريفي» [à relire par un arabophone natif]; « Lien en commentaire » / "Link in comments" (LinkedIn; the EN label added 2026-10-27 for the EN 4:5 LinkedIn crop) | [ST §3.4]; [SP §1.6] (AR new label) | — | A label, not a fact. None in 16:9 or Story renders |
| F31 | Mock-up tab row: « FR · EN · AR » (FR and EN masters); «الفرنسية · الإنجليزية · العربية» [à relire par un arabophone natif] (AR master) | the site's language switch (index.html:1299-1303), restated in each master's script | 1.8 | UI picture |
| F32 | Studio row: « Studio · trilingue FR / EN / AR » + « env. 180 000 – 420 000 DA HT » (≈ 1 200 – 2 800 € HT; ≈ $1,300 – 3,100) | `price.t2name` app.js:363; `price.t2b` app.js:365 trimmed; `PRICE_MODEL.surmesure` app.js:681; conversions [FB §1.5] | 1.5 | OK; slot module only |
| F33 | « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » | `price.estFine` app.js:391 / :503 / :618 | 1.5 | Captions of every post that shows a price |

---

## 3. Building blocks shared by every cut

### 3.1 Time grid

- **Frame rate:** 30 fps. Frame `f` = time × 30.
- **Music:** 90 BPM, so one beat is 0.667 s (20 frames) and one bar is 2.667 s (80 frames). Every scene cut and text entrance falls on a beat or a half-beat, so a cue list can drive `bed.mjs --cues` once it exists (§3.4).
- **Times are in seconds.** "@6.00" means the block enters at 6.00 s.

### 3.2 Text: reading time, word budget and measured sizes

- **One voice:** the on-screen text carries the whole message. Every message works with the sound off [CH §1.3; MU §4.5].
- **Hook:** 6 words or fewer, fully set at frame 0, at hook size for at least 1.5 s and at least (words ÷ 3) s [ST §3.3].
- **Holds:** every body block stays at least 0.35 s per word + 1 s. Small print stays at least 3 s; **the Aperçu conditions stay at least the word rule (17 words → 6.95 s) and are alone for at least 6.3 s**.
- **Word budget per scene: 3 words a second or less, counting every block that enters in the scene** (blocks that entered in an earlier scene are not counted again). Mock-up placeholders are counted in a second column, as picture text. Entrances are at least 0.33 s apart.
- **First-watch hierarchy**, the order a viewer must get even if they read nothing else:
  - V01: (1) a custom site, (2) in three languages, with the mirror, (3) a price before the quote, (4) a named person who stays after launch, (5) who and where (label).
  - V10 cuts: (1) the promise, (2) the four moments ending on « 0 », (3) the work or the founder (30 s only), (4) **the conditions, alone, at body size**, (5) the CTA. The conditions are a first-watch item, not a second pass: Stories show no caption.

**Sizes, measured** on 2026-10-26 in the pipeline's Chromium (headless shell 1194) with the site's own woff2 faces loaded, at the stated line-heights, with no padding (harness: `marketing/_review/measure/`). Fit-text picks the largest size in the range that fits the box (§3.4); the figures below are what it should find at site commit `ecf48bb`.

| Role (face) | 9:16 range · floor | 16:9 range · floor | Arabic | Measured fits (box) |
|---|---|---|---|---|
| Hook, Cinzel 700 .01em + swash in Cinzel Decorative 700, line-height 1.1, ≤ 3 lines | 84–120 px · 84 | 76–96 px · 76 | Plex Arabic 700, +12%, line-height 1.5 | V10 T01 (800 × 400): FR 88 px, 3 lines, 290 px; EN 91 px, 300 px; AR 112 px, 2 lines, 336 px. V01 T40 (800 × 340): FR/EN 120 px, 2 lines, 264 px; AR 113 px, 2 lines, 339 px. V01-06 T41b (800 × 380): FR 106 px, 3 lines, 350 px; EN 112 px, 370 px; AR 114 px, 2 lines, 342 px. 16:9 (780 wide): T01 FR 86 / EN 89 / AR 108 px; T40 FR/EN 96 px, AR 102 px |
| Header / headline, Cinzel 700 (+ swash) | 56–96 px · 52 | 56–88 px · 48 | +12% | T01 as header (800 × 150): FR/EN 64 px, 2 lines, 141 px; AR 63 px, 1 line. T40 header: FR 65, EN 72, AR 73 px, 1 line. T41 (800 × 300): FR/EN 76 px, 3 lines, 251 px; AR 86 px, 2 lines. T42 (800 × 300): FR/EN 96 px, 2 lines, 211 px; AR 100 px, 2 lines, 300 px. T06: FR 63 px, 1 line (« Quelques réalisations » is 805 px wide at 64); EN 64 px; AR 66 px |
| Body, Geist 400–600 | 52–72 px · 52 | 48–64 px · 48 | +12% | T02 (700 × 140): FR 54, EN 56 px, 2 lines; AR 60 px, 2 lines, 180 px (box 180). T04 (700 × 140): FR/EN 56 px; AR 60 px. T31 (800 × 180): FR/EN 56 px, 2 lines, 146 px; AR 63 px, 1 line. T32 (800 × 250): FR 72 px, 2 lines, 173 px; EN 72 px, 1 line; AR 80 px, 1 line |
| Label, chip, place line, Geist 500 / Geist Mono 500 | 46–56 px · 44 | 40–48 px · 40 | +12% | T50 label (800): FR/EN 52 px, 2 lines, 135 px; AR 56 px, 2 lines, 168 px. T51 motto (Cinzel): FR/EN 52 px, 2 lines, 125 px; AR 56 px, 1 line. T53: 56 px, 1 line (AR 60). T52: 52 px (AR 58). Tabs T09, Geist Mono: 46 px, 1 line (937 px wide at 56: does not fit); AR 60 px. Chips T07/T08: FR 52 px, 2 lines, 135 px; EN 52 px, 1 line; AR 58 px, 1 line |
| **Small print: the Aperçu conditions T03**, Geist 500, line-height 1.3 | 46–56 px · 46 | 40–48 px · 40 | Plex 600, ≥ 52 px | Band 800 × 320: FR 49 px, 5 lines, 318 px; EN 56 px, 4 lines, 291 px; AR 63 px, 3 lines, 284 px. 16:9 band 1680 × 150: FR/EN 48 px, 2 lines, 125 px; AR 50 px, 2 lines, 150 px |
| CTA label in the primary button, Geist 600 | ≤ 52 px · 44 | ≤ 48 px · 40 | Plex 700, ≤ 56 px | « Demander mon Aperçu → » at 52 px = 631 px wide, so the button (label + 40 px padding each side) is 711 px, inside the 800 px band. 16:9: 48 px = 583 px |
| Wordmark (§3.4) | **88 px** (fits up to 97 px with the cursor) | 88 px (up to 95) | always LTR | 88 px ≈ 721 px wide including the cursor block |
| Price figure, Geist Mono 700, tabular (slot module only) | « 90 000 – 160 000 DA HT » on one line ≤ 54 px; or the number alone at 68–72 px with « DA HT » on its own line ≥ 44 px | one line ≤ 53 px; number alone 68–72 px | — | at 72 px the one-line DA range is 950 px wide (does not fit 720 px of card); the number alone is 691 px (Studio's 734 px at 72, fits at 70) |

Notes:
- The 6-word Cinzel hook fits 3 lines only at 88–91 px, below the 96 px that [CH §1.3] gives for Geist-width hooks. Cinzel's capitals are wide. The floor is set at 84 px; the phone reading test (G8) decides whether a 4-line set at 96 px reads better.
- **Fit-text runs on every block, not only the hook**, with the floors above. The render fails if no size in a block's range fits its box (§3.4).
- **Typefaces:** headings in Arcanum use Cinzel 700 .01em, and the swash uses `--font-head-em` (Cinzel Decorative). Labels, figures and tabs use Geist Mono. All Arabic uses IBM Plex Sans Arabic 600/700. Fonts are read live from `/site/fonts.css` [PL §0]. Price ranges use non-breaking spaces.

### 3.3 Layout bands per ratio

| Ratio (canvas) | Text and key-visual band | Decoration only | Note |
|---|---|---|---|
| **9:16** (1080×1920) | **x 140–940, y 290–1240, in every language** (Arabic is right-aligned in the same band) | y < 290 and y > 1240 | Platform chrome mirrors with the viewer's app language, not the video's: an AR video seen in an LTR interface has TikTok's right rail from about x 940, and an FR or EN video seen in an Arabic interface has it on the left up to about x 140. Keep x 140–940 for every language until TikTok's RTL safe-zone file has been checked (G8), then record the result in `RATIOS` |
| **Stories** (9:16, `story=1` renders) | as 9:16 | **y 1250–1450 stays empty** (text and decoration) for the link sticker | No caption is shown in Stories, so any Story that names the Aperçu carries the conditions on screen (the V10 cuts do). No pointer text: the sticker is the pointer. channels.md has no Stories row yet (§13) |
| **4:5** (1080×1350) | **a crop of the 9:16 render**, window y 90–1440 (`crop=1080:1350:0:90`). The 9:16 band lands at y 200–1150, centred | the margins | Not rendered natively: 4:5 is not yet designed in a video [PL §7, item 4]. The 3:4 profile-grid crop removes about 34 px per side, outside x 140–940 [CH §1.4] |
| 1:1 | **dropped** | — | The LinkedIn 4:5 crop replaces it |
| **16:9** (1920×1080) | Two columns: text x 120–900 (Arabic x 1020–1800); visual x 960–1800 (Arabic x 120–960). Text y 80–960 (the bottom 120 px stay free for the player's controls). Full-width rows (the conditions band) x 120–1800 | plates behind | YouTube and the website |

### 3.4 Coded components (all HTML/CSS/JS on the pipeline clock; nothing generated)

| Component | Status [PL §5.2] · when | What it does |
|---|---|---|
| Plate reveal `plate()` | built | Engraving as a luminance mask over the theme's `--teal`. It wipes in the reading direction, led by a brass "burin" rule, then settles from 1.06 to 1 over 3 s. Plates stay at least 300 px wide and are **never shown above 1.0× their source size, settle included** (sizes in §3.6). The artwork is never mirrored for Arabic |
| Captions `applyCaptions()`, `rise()`, `wipe()`, `fade()` | built | Every text block. Each element gets its own `lang` and `dir` |
| **Fit-text + overflow check** | to build · **W1** | Before frame 0, once fonts are proven loaded, picks for **every** block the largest size in its §3.2 range that fits its box in its maximum number of lines, and checks `scrollWidth` and height. Floors: 44 px small print and labels, 52 px body (9:16); 40 / 48 px (16:9); Arabic floors +12%. **The render fails when no size in range fits.** Deterministic, because it is measured once |
| Safe-area check `safeCheck()` | built · **to change (W1)** | Today it uses the 9:16 safe area t250 r120 b480 l120, which lets text reach y 1440 (under the Reels interface), and it runs only on the last frame. Change: `RATIOS['9x16'].safe = { t: 290, r: 140, b: 680, l: 140 }`, and run it on the last frame of every scene **and** on the settled frame of each block's entrance. Story renders also fail if anything but the background paints in y 1250–1450 |
| **Blueprint draw** | to build · W1 | An SVG homepage outline in 3 px `--crimson` strokes (brass in Arcanum): browser outline, nav bar, logo box, heading lines, button, hatched image block, three cards. Paths use `pathLength="1"` and are drawn one after another by stroke-dashoffset on the clock (BRAND.md "Animated icons") |
| **Mock-up + mirror** | to build · W1 | The blueprint filled with theme surfaces. States: the master's language shows the F25 placeholders; **the other languages show grey text bars** (one language per frame); the tab row F31 highlights the active state. The Arabic state sets `dir="rtl"` and every block glides to its mirrored position in 0.6 s, with positions computed from the clock (a FLIP done in code). Two uses: **"Votre site"** in V01 and V01-06; **the Aperçu page** inside the call frame in the V10 cuts (master language only, no mirror). It never morphs into a real screenshot |
| Founder card (no face) | to build · W1 (about 0.5 h) | Monogram « Y » in `--crimson-text` inside a 200 px ring stroked in `--crimson` (index.html:1050). No photo, drawing or figure |
| **End card (the series card)** | to build · W1 | One component for the whole series [ST §3.4; SP §1.6]: the wordmark; the label (F07) or the short place line (T53); the motto (F29); the pointer (F30) per placement; the CTA (F08) **only when `cta=1`**, after Gate B; an optional conditions band for the V10 cuts. **No URL, no email.** Wordmark: « Num » + « idea » + « Labs » in `--font-logo` (Cinzel 700, .04em in Arcanum), with « idea » in `--font-swash` (Geist 600) and `--teal-text`, as `.logo i` (styles.css:139-140); then the cursor, a **solid** `--crimson` block of 0.41 × 0.91 em (styles.css:142), **no blink**. Always left to right. 88 px in 9:16 and 16:9 |
| Skyline clip-paths for Plate I | to build · W1 (about 0.5 h) | At `ready()`, fetch `/site/styles.css`, parse it into a constructed stylesheet (`new CSSStyleSheet()`, `replaceSync`) that is **never adopted or applied**, and read the `clip-path` of `.v-far .v-fill`, `.v-mid .v-fill` and `.v-near .v-fill` (styles.css:2164-2166). The pipeline's `brand/base.css` imports only fonts.css and themes.css, and importing styles.css would bring in the whole site. Chosen over a copy stamped with the site commit, so a site change reaches the video; the render report records the site commit |
| Timeline (the Aperçu) | to build · before W6 | The site's four moments (index.html:570-582) as a dimension line (the hero's `.dim-line` idiom): n1 an envelope icon; n2 five day-ticks (the site's `.ptl-build` marks); n3 a call frame with a 30-minute arc that fills once, holding the Aperçu mock-up; n4 the « 0 » of « Payé jusqu'ici : 0 », stamped with a 1.08→1 settle. **All text, the « 0 » included, uses `--crimson-text`**; `--crimson` is only for the line, ticks and rings. Runs right to left in Arabic |
| Browser frame | to build · after Gate C | `--navy` chrome bar (40 px) with three dots and a **blank** address bar; the cropped capture inside (§5.3); a slow push-in from 1.00 to 1.03. Captures are wiped in, never cross-faded. **Only with the client's written permission** |
| Ink wipe (theme switch) | **optional**; not used by V01 or the default V10 cuts · build before any use, about 2–3 h | Today every token block in themes.css is scoped `:root[data-theme="…"]` and the pipeline sets the theme on the root only (runtime/scene.js:61-66), so a `data-theme` attribute on a layer resolves no tokens and two themes cannot share a frame. Technique: **(a, recommended)** at `ready()`, fetch `/site/themes.css` and insert an in-memory copy with the selectors rewritten from `:root[data-theme="x"]` to `[data-theme="x"]` (still read live from the site, never written to disk), so each layer carries its own theme; check determinism (7 runs, identical hashes). **(b, fallback)** render each theme's scene as its own pass and composite the wipe in ffmpeg (a clip-path wipe of 18 frames plus the 4 px rule in the incoming `--crimson`). Add it to the strategy's one-off build list (§13) |
| Price card | **deferred** (slot module §5.6) | Tier tabs (names only) and lit rows; the figures are wiped in, never counted up; sizes per §3.2 |
| Music bed `--audio` | built · **W1: add `--dur`**; before W6: the rest | Code-made bed, loudness-normalised [MU §3]. What exists: a fixed 5-chord grid (2 bars each), a chime at every chord change, ticks from bar 0.5, a fixed 3.3 s tail (10 bars + 3.3 s = 29.97 s, one frame short of 30.0). **W1 (V01):** `--dur <s>` sets the tail to `dur − body` so the file ends on the exact frame (about 15 minutes of work). **Before W6 (V10 cuts):** per-cut chord maps; `--chord-chimes off`; `--cues <file>` for events (ticks, chimes, frame-drum strokes, the sting) **and layer automation** (tick layer on/off, pad filter); `--ticks-from <s>`. Render one file per cut and variant (§10.3) |

**Background behind text:** none. Text sits on a solid theme surface or on the plain `--void` ground, never directly over a capture or a dense engraving [CH §1.3].

### 3.5 Theme per cut

| Cut | Default | Optional, only once the ink wipe is built and passes determinism |
|---|---|---|
| V01-30 | Arcanum throughout | none |
| V01-06 | Arcanum | none |
| V10-s30 | Arcanum throughout | **one** excursion for S3: variant A into Noir, variant N into Engineering, back to Arcanum at S4 |
| V10-s15 | Arcanum | none |

Arcanum is the identity, and the brand's motion is "tuned for calm rather than spectacle" [ST §3.3]. Three wipes in 11 s, three heading faces and a near-white Daylight frame between two dark ones would read as three brands to a first-time viewer. "Un site, six thèmes" is V25's subject [ST §5].

Tokens come live from `/site/themes.css` [FB §3.5]. Arcanum: `--void` #0A1420, `--crimson` and `--crimson-text` #E6B450 (brass), `--teal` and `--teal-text` #34D0E8.

### 3.6 Assets used, avoided, and the fallback

All paths are under `/home/user/STICKITTY.INC/`. They are **read only**, mounted read-only at `/site/` by the pipeline [PL §4]. Any new capture is taken into `…/scratchpad/marketing/captures/`, never with `npm run work:capture`, which writes into the repository [FB §3.2].

| Asset (source size) | Used in | Shown at (≤ 1.0× source, settle included) | Use |
|---|---|---|---|
| `assets/illus/vista-far.webp`, `vista-mid.webp` (1600×679), `vista-near.webp` (1500×636) | V01 S1, V10 S1 | 9:16: 1080 wide; 16:9: **≤ 1400 wide** (centred) | Plate I, three layers, parallax ≤ 26 px; skyline clip-paths read at runtime (§3.4). No caption in the hook. vista-mid is never captioned as the Medracen |
| `assets/illus/px-plan.webp` (1600×679) | V10-s30 S2 | texture at 10% | slow drift |
| `assets/illus/faq3.png` (512) | V01 S2 | ≤ 480 px, decoration zone | three linked speech bubbles |
| `assets/illus/coin-horse.webp`, `coin-palm.webp` (320) | V01 S3 | **300 px** each | Plate III; each turns once and settles |
| `assets/illus/px-contour.webp` (1400×594) | V01 S3 | texture at 12% | |
| `assets/illus/bench.webp` (1100×614) | V01 S4; V10-s30 S3 (N) | 9:16: 800 wide; 16:9: 840 wide | the workbench from above, no person: the founder stand-in |
| `assets/illus/arch.webp` (1000×558) | V10-s30 S3 (A) | ≤ 900 wide, 35% | Plate II behind the work header |
| `assets/illus/lighthouse.webp` (1100×595) | end cards | **1000 × 541** in 9:16 (y ≥ 1270; masked in y 1250–1450 in Story renders); 840 × 455 in the 16:9 visual column | Plate V; one coded beam sweep |
| `assets/illus/faq5.png` (512) | slot module P-GU only | ≤ 480 px | remote work |
| `assets/work/bordjsteel/d2.webp`, **cropped** | V10-s30 A | §5.3 | **REQUIRES CLIENT PERMISSION: Bordj Steel** |
| `assets/previews/alliancetravel.webp` | V10-s30 A (FR) | §5.3 | **REQUIRES CLIENT PERMISSION: Alliance Travel** |
| `assets/work/alliance/d3.webp`, **cropped** | V10-s30 A (EN) | §5.3 | **REQUIRES CLIENT PERMISSION: Alliance Travel**; never uncropped |

**Never used in any cut:**
- `coin-king.webp` (a portrait) and `faq6.png` (illustrates the unconfirmed "no middleman" claim);
- Nomara files (`assets/previews/nomara.webp`, `assets/clients/nomara.webp`) and `og.jpg` (contains a client capture);
- `assets/work/bordjsteel/d1`, `d3`, `m1` and `previews/bordjsteel.webp` (the client's figures and the "Leader…" ranking line); `bordjsteel/d2` **uncropped** (its footer shows the client's street address and social icons);
- `assets/work/alliance/d1`, `m1` (ratings and figures), `d2`, `d4`, `m2` (the client's tour prices and calculators), and `alliance/d3` **uncropped** (see §5.3);
- every AlmaFlowClim file (permission, the domain now serving a different site, phone number, brand chips);
- `assets/work/glaive/d1` (fictional "WORLD'S #1") and `glaive/d2` (fictional star ratings with review counts, "BEST SELLER", "SAVE 14%");
- client logos as stand-alone marks;
- the WorkspaceHQ trailer audio (no recorded licence [MU §6]);
- **any capture of Numidea's own site.** Its hero lede states the team claim, its title block says « 4 sites clients », its founder card shows « 6 ans », and its hero plate shows client captures. Everything "site-like" here is rebuilt in code from the copy.

**Coded fallback: an unbudgeted contingency.** The owner's 2026-10-26 decision names the engravings as part of the videos' visual language, so the plates are used. If that ever changes, each plate is replaced by coded geometry in the same ink, and no scene depends on a plate to carry meaning:

| Plate | Coded replacement |
|---|---|
| Plate I | A seeded star field and one constellation drawn over a plain ridge line |
| px-plan / px-contour | A CSS blueprint grid / concentric contour ellipses |
| faq3 | Three outlined speech bubbles |
| arch | Dimension lines framing the browser frame |
| bench | A drafting grid with a compass arc |
| coins | Two ruled circles |
| faq5 | A globe of meridian arcs |
| lighthouse | The beam wedge alone over a horizon line |

---

## 4. V01 « L'atlas »: 30 s, Gate 0, no call to action

**900 frames. Arcanum throughout.** The table is written for the FR master; the AR and EN columns give their own masters' text. No Aperçu, no CTA, no URL, no price figure, no client work: it can be posted from Gate 0 in every market.

### 4.1 Scene table

| Scene · time (frames) | Visual and coded animation | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–3.33 (f0–99) | Ground `--void`, brass grid at 64 px and 7%. **Plate I** (vista far/mid/near) inks in along the bottom in the reading direction 0.00–1.20, then drifts; seeded stars appear and one constellation line draws 0.60–1.80. The **blueprint** draws path by path 0.10–2.60. **T40 is fully set at f0** (no reveal), so frame 0 works as a thumbnail. No logo intro | T40 @0.00 « Votre site sur mesure, » [F06] | T40 «موقعك المخصّص،» [F06] [à relire par un arabophone natif] | T40 "Custom websites," [F06] | 4 (AR 2, EN 2) · 1.2/s | f0: hook chime and the pad at full level (built in). Burin ticks from 1.33 (built in) | 3.33–3.83: T40 eases (`cubic-bezier(.16,1,.3,1)`) to header size at the top of the band; the blueprint glides into the mock-up frame |
| **S2 Three languages** · 3.33–10.67 (f100–319) | The blueprint fills into the **"Votre site" mock-up**: `--navy`/`--plum` surfaces, « Votre logo », « Votre entreprise », grey text bars, a `--crimson` button with no label, the tab row (F31). **FR master:** state 1 FR with the placeholders (3.67) → state 2 EN at 7.00, **grey bars** → state 3 Arabic layout at 7.67: `dir="rtl"`, every block glides to its mirrored place 7.67–8.27, **grey bars**. **EN master:** EN → FR (grey) → AR (grey, mirrored). **AR master:** FR (grey) → EN (grey) → AR with the Arabic placeholders, mirrored. **faq3.png** inks in `--teal` at 4.00 in the decoration zone. It is "your site", never called an Aperçu, never a client site | T41 @3.67 « en français, anglais ou arabe. » [F06] (the site's swash half: solid `--teal-text`, `--font-head-em`). T40 stays as the header | T41 «بالعربية والفرنسية والإنجليزية.» [F06] [à relire par un arabophone natif]. Arabic state: «شعارك هنا» / «اسم نشاطك» [F25] [à relire par un arabophone natif] | T41 "in English, French and Arabic." [F06]. EN state: "Your logo" / "Your business" [F25] | 5 (AR 3) + 4 placeholder words · 1.2/s | 5.33 chord → B♭maj7 with its chime (built in). 7.67 mirror chime (needs `--cues`; not in the W1 render) | 10.67: T40, T41, the mock-up and faq3 wipe out in the reading direction (0.33 s) |
| **S3 A price before the quote** · 10.67–15.33 (f320–459) | **Plate III:** `coin-horse.webp` and `coin-palm.webp` (300 px each) ink in at two depths at 10.67 and 11.00; each turns once (on the clock, 1.2 s) and settles. `px-contour.webp` at 12%. The three package names sit on one card row: **names only, no figures** (V01 serves every market) | T42 @10.67 « Un prix avant le devis. » [F28] (swash on « avant le devis. »). T09 @11.33 « Essentiel · Studio · Moteur » [F12] | T42 «سعر قبل عرض السعر.» [F28] [à relire par un arabophone natif]. T09 «الأساسي · الاستوديو · المحرّك» [F12] [à relire par un arabophone natif] | T42 "A price before the quote." [F28]. T09 "Essential · Studio · Engine" [F12] | 8 (AR 7, EN 8) · 1.7/s | 10.67 chord → Fmaj9 with its chime (built in) = the coins | 15.33 wipe out |
| **S4 The atelier** · 15.33–22.67 (f460–679) | **Founder card:** the monogram « Y » in `--crimson-text`, in a 200 px ring stroked in `--crimson`. No photo, drawing or figure. **`bench.webp`** (the workbench from above, no person) inks in `--teal` at 40% at 16.00 with a 1.06→1 settle | T30 @15.67 « Yasser Hamisse » [F17]. T31 @16.33 « Designer graphique & développeur web · Fondateur » [F18]. T32 @18.67 « Je reste à vos côtés après le lancement. » [F19] | T30 «المؤسّس: Yasser Hamisse» [F17, F18] [à relire par un arabophone natif] (**OWNER PREREQUISITE P4**: with the Arabic spelling, T30-AR becomes «المؤسّس: …» in Arabic script). T31 «مصمّم غرافيك ومطوّر ويب» [F18] [à relire par un arabophone natif]. T32 «أبقى بعد الإطلاق.» [F19] [à relire par un arabophone natif] | T30 "Yasser Hamisse" [F17]. T31 "Graphic designer & web developer · Founder" [F18]. T32 "I stay once it's live." [F19] | 15 (AR 10, EN 12) · 2.0/s | 16.00 chord → Csus2 with its chime (built in) = the bench. 21.33 chord → Dm with its chime (built in; under T32, no price on screen) | 22.67 wipe out |
| **S5 End card** · 22.67–30.00 (f680–899) | **The series card before Gate B** [ST §3.4; SP §1.6]: wordmark, label, motto, pointer. **No CTA, no URL, no conditions** (V01 never names the Aperçu). **Plate V** `lighthouse.webp` at 40% in the decoration zone; one coded beam sweep 23.00–25.00, then still | Wordmark @22.67 [F20]. T50 @23.00 « Studio web & logiciel · Bordj Bou Arréridj, Algérie » [F07]. T51 @23.33 « Enraciné en Numidie · bâti sur des idées » [F29]. T52 @25.67 « Lien en bio » [F30] (LinkedIn 4:5: « Lien en commentaire »; 16:9: none) | T50 «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [F07] [à relire par un arabophone natif]. T51 «جذورها في نوميديا · مبنيّة على الأفكار» [F29] [à relire par un arabophone natif]. T52 «الرابط في الملف التعريفي» [F30] [à relire par un arabophone natif] | T50 "Web & software studio · Bordj Bou Arréridj, Algeria" [F07]. T51 "Rooted in Numidia · built on ideas" [F29]. T52 "Link in bio" [F30] | 19 (AR 18, EN 18) · 2.6/s | 22.67: the end-card chimes D + A (built in at the end of the body). 28.80–30.00 fade | Holds on f899. Platforms that loop jump to f0, a complete frame |

**Website version (16:9):** no pointer; the player starts muted with a sound toggle; the audio is at −16 LUFS; under reduced motion the page shows the f300 still instead [MU §4.5; CH §5.3]. Where the MP4 lives is the owner's Gate W [ST §7.1].

**The four promises** (for the W1 carousel « Ce que vous obtenez », §4.6): (1) votre site sur mesure; (2) en français, anglais ou arabe, mirrored; (3) un prix avant le devis; (4) le fondateur reste à vos côtés après le lancement. The strategy's fourth promise was "the Aperçu + conditions"; it is not in V01 (§13).

### 4.2 Layout per ratio (Arabic: the same band, right-aligned; mirrored layouts in 16:9)

| Scene | 9:16 (band x 140–940) | 16:9 (text x 120–900 / AR 1020–1800; visual x 960–1800 / AR 120–960) |
|---|---|---|
| S1 | T40 box y 380–720 (FR/EN 120 px, 2 lines, 264 px; AR 113 px, 2 lines, 339 px). Blueprint 640×400 at x 220–860, y 800–1200. Plate I 1080 wide below y 1240 | T40 in the text column, y 300–520 (FR/EN 96 px, 2 lines; AR 102 px, 1 line). Blueprint 760×470 in the visual column, y 200–670. Plate I ≤ 1400 wide, x 260–1660, y 700–1080 |
| S2 | T40 header y 290–400 (FR 65, EN 72, AR 73 px). T41 y 410–670 (FR/EN 76 px, 3 lines, 251 px; AR 86 px, 2 lines, 258 px). Mock-up 800×500 at y 700–1200. faq3 ≤ 480 px at y 1300–1780 | T40 header y 120–200; T41 y 220–480 (FR 72 px, 2 lines; EN 72 px, 3 lines, 238 px; AR 80 px, 2 lines, 240 px). Mock-up 800×500 in the visual column, y 190–690. faq3 behind the text column at 20%, y 540–1020 |
| S3 | T42 y 330–630 (FR/EN 96 px, 2 lines, 211 px; AR 100 px, 2 lines, 300 px). T09 y 690–780 (Geist Mono 46 px; AR 60 px). Coins 2 × 300 px at y 860–1160 (x 230–530 and 550–850) | T42 y 200–500 (FR/EN 88 px, 2 lines, 194 px; AR 100 px, 2 lines). T09 y 540–600 (46 px; AR 58 px). Coins 2 × 300 px in the visual column, y 300–600 |
| S4 | Roundel 200 px at y 300–500. T30 y 520–625 (FR/EN 80 px; AR 69 px). T31 y 645–795 (FR/EN 56 px, 2 lines, 146 px; AR 63 px, 1 line). T32 y 820–1000 (FR 72 px, 2 lines, 173 px; EN 72 px, 1 line; AR 80 px, 1 line). bench 800×447 at y 1020–1467 (decoration below 1240) | Roundel 160 px y 120–280; T30 y 300–390; T31 y 410–545 (FR/EN 52 px, 2 lines; AR 58 px, 1 line); T32 y 580–735 (FR 64 px, 2 lines; EN 64 px, 1 line; AR 72 px, 1 line). bench 840×469 in the visual column, y 300–769 |
| S5 | Wordmark 88 px at y 340–450. T50 y 480–650 (FR/EN 52 px, 2 lines, 135 px; AR 56 px, 2 lines, 168 px). T51 y 670–800 (FR/EN 52 px, 2 lines, 125 px; AR 56 px, 1 line). T52 y 860–935 (52 px; AR 58 px). Lighthouse 1000×541 at y 1290–1831 | Wordmark 88 px y 200–300; T50 y 330–480 (FR/EN 48 px, 2 lines; AR 50 px, 2 lines, 150 px); T51 y 500–620 (FR/EN 48 px, 2 lines; AR 54 px, 1 line). No pointer. Lighthouse 840×455 in the visual column, y 300–755 |

**4:5** = the 9:16 render cropped at y 90–1440 (§3.3). LinkedIn needs the pointer « Lien en commentaire », so the LinkedIn file is cropped from a 9:16 render made with `pointer=li`.

### 4.3 Word load and holds (FR; the AR and EN blocks have the same number of words or fewer)

| Scene | Blocks entering | Words | Scene length | Load |
|---|---|---|---|---|
| S1 | T40 | 4 | 3.33 s | 1.2 /s |
| S2 | T41 (+ placeholders) | 5 (+4) | 7.33 s | 0.7 /s (1.2 with placeholders) |
| S3 | T42, T09 | 8 | 4.67 s | 1.7 /s |
| S4 | T30, T31, T32 | 15 | 7.33 s | 2.0 /s |
| S5 | wordmark, T50, T51, T52 | 19 | 7.33 s | 2.6 /s |

| Block | Words | Minimum hold | Actual hold | OK |
|---|---|---|---|---|
| T40 hook | 4 | 1.5 s at hook size; 2.4 s | 3.33 s at hook size, 10.67 s in total | ✓ |
| T41 | 5 | 2.75 s | 3.67 → 10.67 = 7.0 s | ✓ |
| T42 | 5 | 2.75 s | 10.67 → 15.33 = 4.67 s | ✓ |
| T09 | 3 | 2.05 s | 11.33 → 15.33 = 4.0 s | ✓ |
| T30 | 2 (AR 3) | 1.7 s (AR 2.05) | 15.67 → 22.67 = 7.0 s | ✓ |
| T31 | 6 | 3.1 s | 16.33 → 22.67 = 6.33 s | ✓ |
| T32 | 7 | 3.45 s | 18.67 → 22.67 = 4.0 s | ✓ |
| T50 | 7 | 3.45 s | 23.00 → 28.80 (fade starts) = 5.8 s | ✓ |
| T51 | 7 | 3.45 s | 23.33 → 28.80 = 5.47 s | ✓ |
| T52 | 3 (AR 4) | 2.05 s (AR 2.4) | 25.67 → 28.80 = 3.13 s | ✓ |

**QA:** someone who has not seen the video watches it on a phone at normal speed. Any block they cannot read before it leaves gets cut down, not held longer, because the cut length is fixed.

### 4.4 Music cue list (V01-30)

- **W1 render:** `node bed.mjs --bars 8.5 --dur 30 --seed {owner's pick}`. With 8.5 bars the existing grid already puts the chords at 0, 5.33, 10.67, 16.00 and 21.33, and the end-card chimes at 22.67, the first frame of the end card. The only change to `bed.mjs` is `--dur` (§3.4). Rows marked "needs `--cues`" are added when that exists, by re-rendering the audio only.
- **Loudness:** −14 LUFS for social and YouTube masters; −16 LUFS for the website file; true peak ≤ −1 dBTP measured on the encoded file; loudness range ≤ 4 LU [MU §4.5].

| Time | Beat | Frame | Event |
|---|---|---|---|
| 0.00 | 0 | 0 | Hook chime; pad at full level (built in) |
| 1.33 | 2 | 40 | Burin ticks enter on 16ths (built in) |
| 3.33 | 5 | 100 | Accent tick, header move (needs `--cues`) |
| 3.67 | 5.5 | 110 | Accent tick, T41 (needs `--cues`) |
| 5.33 | 8 | 160 | Chord → B♭maj7, chime motif (built in) |
| 7.67 | 11.5 | 230 | Chime on the mirror (needs `--cues`) |
| 10.67 | 16 | 320 | Chord → Fmaj9, chime (built in): the coins |
| 11.33 | 17 | 340 | Accent tick, tabs (needs `--cues`) |
| 16.00 | 24 | 480 | Chord → Csus2, chime (built in): the bench |
| 21.33 | 32 | 640 | Chord → Dm, chime (built in) |
| 22.67 | 34 | 680 | End card: D + A chimes ring into the tail (built in); a frame-drum stroke with it needs `--cues` |
| 22.67–30.00 | — | 680–899 | The last chord's release and the reverb tail (tail = 7.33 s with `--dur 30`) |
| 28.80–30.00 | — | 864–899 | 1.2 s fade (pipeline) |

**Arabic masters:** the same bed by default. The percussion-only bed is the owner's choice [MU §5.5]; its low end needs another pass before use.

### 4.5 Captions (V01)

Hashtags and search phrases: [CH §1.9], at most 5 on Instagram. Links go where §9 says.

**FR**
> Votre site sur mesure, en français, anglais ou arabe.
> L'arabe pensé de droite à gauche, nativement. Un prix avant le devis : nos fourchettes de prix sont publiées sur le site. Et après le lancement, on reste à vos côtés.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

Sources: F06; `price.t2b` app.js:365 (« un arabe RTL pensé nativement », restated); F28; `faq2.a` app.js:87 (« Nos fourchettes de prix sont publiées », restated); FAQ "After launch" « On reste. » app.js:89 with F19 (restated); F07.

**EN**
> Custom websites, in English, French and Arabic.
> Arabic built right to left, natively. A price before the quote: our prices are published on the site. And after launch, we stay.
> Web & software studio · Bordj Bou Arréridj, Algeria · UTC+1, 2 h behind Riyadh, 3 h behind Dubai.

Sources: F06; `price.t2b` app.js:477 ("with Arabic RTL built natively", restated); F28; `faq2.a` FR/AR (prices published, restated; the EN FAQ states a starting price instead, which is not used); "We stay." app.js:187; F07; F16.

**AR** [à relire par un arabophone natif]
> موقعك المخصّص، بالعربية والفرنسية والإنجليزية. [à relire par un arabophone natif]
> عربية مصمّمة من الأساس للكتابة من اليمين إلى اليسار. سعر قبل عرض السعر: أسعارنا منشورة على الموقع. وبعد الإطلاق، نبقى معك. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

[à relire par un arabophone natif] Sources: F06; the Studio scope line [FB §1.5]; F28; `faq2.a` app.js:286 («أسعارنا منشورة», restated); "After launch" app.js:288 («نبقى معك»); F07.

### 4.6 Stills, carousel and thumbnail (V01)

V01 never names the Aperçu, so its stills need no conditions line.
- **Instagram cover:** f90 (the hook and the finished blueprint; the text lies inside the 3:4 grid crop).
- **Carousel « Ce que vous obtenez » (W1 Thursday, IG + LinkedIn PDF), 4:5 crops:** f90 (hook) · f300 (« en français, anglais ou arabe. », mirrored) · f450 (« Un prix avant le devis. ») · f670 (the founder) · f890 (end card). If the strategy wants an Aperçu slide in it, that slide carries the full conditions at ≥ 46 px and no CTA (§13).
- **YouTube thumbnail** (V01 16:9 as channel trailer): designed at 1280×720 from the 16:9 f300 frame, in Arcanum.
- **Subtitles:** an SRT per language for YouTube and a VTT per language for the site, generated from the copy dictionary's in and out times. No SRT on LinkedIn, because the text is burned in [CH §1.3].

---

## 5. V10-s30: the Aperçu, 30 s social cut-down (Gate B), variants A and N

**900 frames. Arcanum throughout by default (§3.5).** The long V10 (69.1 s, chapters, 16:9) is [SP §2]; this is its social cut-down, and it replaces the "Social cut" note in [SP §2.4] (§13). Published only when Gate B and G3 are open; variant A also needs G4.

**Why this cut keeps fewer beats than the old 30 s:** at 3 words a second, the conditions alone (17 words) need about 6.3–7 s and the series end card about 7 s, which leaves 16 s for everything else. So the language demo (now V01's, and V03's) and the price slot (now V04's; kept here as a deferred module, §5.6) are no longer in the Aperçu cut. This also keeps the Aperçu away from any language demo (§1).

### 5.1 Scene table

| Scene · time (frames) | Visual and coded animation | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.00 (f0–59) | As V01 S1: Plate I, stars, the blueprint draws 0.10–1.90. **T01 is fully set at f0.** Swash on the second half in solid `--teal-text`, `--font-head-em` | T01 @0.00 « Votre page d'accueil, avant de payer. » [F01] | T01 «صفحتك الرئيسية، قبل أن تدفع.» [F01] [à relire par un arabophone natif] | T01 "Your homepage, before you pay." [F01] | 6 (AR 5, EN 5) · 3.0/s | f0 chime D, pad at full level, ticks from f0 | 2.00–2.50: T01 eases to header size at the top of the band. The blueprint shrinks into the n3 position |
| **S2 The Aperçu** · 2.00–9.33 (f60–279) | px-plan texture at 10%. The **timeline** dimension line draws 2.00–2.67 down the reading-start side. n1 envelope icon (2.33). n2 five day-ticks fill, one per 16th note, 2.67–3.33. n3 (4.00): a call frame opens around the blueprint, its 30-minute arc fills once, and the blueprint **fills** into the Aperçu page: master language only, « Votre logo », « Votre entreprise », grey text bars, a `--crimson` button with no label [F25]. n4 (5.33): the « 0 » at the end of T04 is stamped (Geist Mono 700, `--crimson-text`, 1.08→1) | T01 stays as the header until 9.33. T02 @2.67 « 5 jours ouvrés » / « à réception de vos contenus » [F04]. T04 @5.33 « Vous décidez » / « Payé jusqu'ici : 0 » [F05] | T02 «5 أيام عمل» / «من استلام المحتوى» [F04] [à relire par un arabophone natif]. T04 «أنت تقرّر» / «المدفوع حتى الآن: 0» [F05] [à relire par un arabophone natif]. Placeholders «شعارك هنا» / «اسم نشاطك» [F25] [à relire par un arabophone natif] | T02 "5 working days" / "once we have your content" [F04]. T04 "You decide" / "Paid so far: 0" [F05]. Placeholders "Your logo" / "Your business" [F25] | 13 (AR 12, EN 14) + 4 placeholder words · 1.8/s (2.4 with placeholders) | 2.00 accent tick. 2.67–3.33 five soft ticks. 4.00 accent tick (call frame). 5.33 chord → B♭maj7, no chime; one frame-drum stroke under the « 0 » (no coin or till sounds [MU §5.2]) | **9.33: everything in S2 wipes out in the reading direction (0.33 s): T01, T02, T04, the timeline, the call frame and the Aperçu page.** Nothing carries into S3 |
| **S3A The work** · 9.33–16.00 (f280–479) · **variant A only** | **Plate II** `arch.webp` inks in `--teal` at 35% behind the header. **Browser frame 1** wipes in at 9.67; **frame 2** replaces it by a wipe 12.67–13.00; each with a 1.00→1.03 push-in. Screens and crops per master in §5.3. **Frame 1: REQUIRES CLIENT PERMISSION. Frame 2: REQUIRES CLIENT PERMISSION** | T06 @9.33 « Quelques réalisations » [F09, OWNER]. T07 @10.00 « Bordj Steel · Construction métallique » [F10]. T08 @13.00 « Alliance Travel · Agence de voyages » [F11] | **Not rendered** until an Arabic capture exists (P7, Q3). AR posts use N | T06 "Selected projects" [F09, OWNER]. T08 @10.00 "Alliance Travel · Travel agency" [F11]; T07 @13.00 "Bordj Steel · Structural steel" [F10] | 11 (EN 10) · 1.65/s | 9.33 accent tick. 9.67 accent tick (frame 1). 10.67 chord → Fmaj9 + chime (plate II). 12.67 accent tick (frame 2) | 16.00 wipe out |
| **S3N The founder** · 9.33–16.00 (f280–479) · **variant N** | Founder card: monogram « Y » (`--crimson-text`, ring `--crimson`) at 9.33. `bench.webp` inks in at 10.67 with a 1.06→1 settle (no person) | T30 @9.67 « Yasser Hamisse » [F17]. T31 @10.33 « Designer graphique & développeur web · Fondateur » [F18]. T32 @12.00 « Je reste à vos côtés après le lancement. » [F19] | T30 «المؤسّس: Yasser Hamisse» [F17, F18] [à relire par un arabophone natif] (P4). T31 «مصمّم غرافيك ومطوّر ويب» [F18] [à relire par un arabophone natif]. T32 «أبقى بعد الإطلاق.» [F19] [à relire par un arabophone natif] | T30 "Yasser Hamisse". T31 "Graphic designer & web developer · Founder". T32 "I stay once it's live." | 15 (AR 10, EN 12) · 2.25/s | 9.33 accent tick. 10.33 accent tick (role). 10.67 chord → Fmaj9 + chime (the bench). 12.00 accent tick (promise) | 16.00 wipe out |
| **S4 The conditions** · 16.00–22.67 (f480–679) | The four-moment timeline returns small at the top, all nodes filled, ending on the « 0 » (icons only, no new text). **The conditions sit alone on a solid `--navy` band at body size** (y 900–1240) and **stay on that band to the end of the video** | T03 @16.00 « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » [F03] | T03 «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [F03] [à relire par un arabophone natif] | T03 "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." [F03] | 17 (AR 15, EN 16) · 2.55/s | 16.00 chord → Csus2, **no chime**; the tick layer mutes; the pad holds. No cue under the conditions | 22.67: the timeline recap wipes out; the conditions band stays |
| **S5 End card** · 22.67–30.00 (f680–899) | **The series card after Gate B** (§3.4, `cta=1`), above the conditions band: wordmark, label, motto, CTA as the site's primary button (`--crimson` fill, `--on-crimson` text), pointer. Plate V lighthouse in the decoration zone below the band, one beam sweep 23.00–25.00. **No URL** | Wordmark @22.67 [F20]. T50 @23.00 « Studio web & logiciel · Bordj Bou Arréridj, Algérie » [F07]. T51 @23.33 « Enraciné en Numidie · bâti sur des idées » [F29]. T13 @25.67 « Demander mon Aperçu → » [F08]. T52 @26.00 « Lien en bio » [F30] (LinkedIn: « Lien en commentaire »; 16:9 and Story renders: none). T03 stays | T50 «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [F07] [à relire par un arabophone natif]. T51 «جذورها في نوميديا · مبنيّة على الأفكار» [F29] [à relire par un arabophone natif]. T13 «اطلب معاينتك ←» [F08] [à relire par un arabophone natif]. T52 «الرابط في الملف التعريفي» [F30] [à relire par un arabophone natif] | T50 "Web & software studio · Bordj Bou Arréridj, Algeria". T51 "Rooted in Numidia · built on ideas". T13 "Request my Preview →". T52 "Link in bio" | 22 (AR 20, EN 21) · 3.0/s | **22.67 sting:** a frame-drum stroke, then D + A chimes ring out. 28.80–30.00 fade | Holds on f899; loops to f0 |

### 5.2 Layout per ratio

| Scene | 9:16 (band x 140–940) | 16:9 |
|---|---|---|
| S1 | T01 box y 360–760 (FR 88 px, 3 lines, 290 px; EN 91 px, 3 lines; AR 112 px, 2 lines, 336 px). Blueprint 640×400 at y 800–1200. Plate I below y 1240 | T01 in the text column, y 260–560 (FR 86 px, 3 lines, 284 px; EN 89 px; AR 108 px, 2 lines, 324 px). Blueprint 760×470 in the visual column, y 200–670 |
| S2 | Header (T01) y 290–440 (FR/EN 64 px, 2 lines, 141 px; AR 63 px, 1 line). Dimension line at x 170 (AR x 910), y 470–1230. Text column x 230–930 (AR x 150–850). n1 y 470–530. n2 ticks y 560–590; T02 y 560–740 (FR 54, EN 56 px, 2 lines; AR 60 px, 2 lines, 180 px). n3 call frame 480×270 at y 770–1040, with the Aperçu page inside. n4 + T04 y 1060–1240 (FR/EN 56 px, 2 lines, 140 px; AR 60 px, 2 lines, 180 px) | Header on one line, y 80–150 (FR/EN 64 px; AR 72 px). Horizontal dimension line at y 300, x 160–1760 (right to left in AR), four node icons. T02 in the text column y 380–510 and T04 y 560–690 (FR/EN 52 px, 2 lines, 130 px; AR 55 px, 2 lines, 165 px), each with its step number. Call frame 560×315 in the visual column, y 380–695 |
| S3A | T06 y 290–390 (FR 63 px; EN 64 px). Frame zone y 420–960: 800 wide (40 px chrome + capture), centred vertically. Chip y 990–1130 (FR 52 px, 2 lines, 135 px; EN 52 px, 1 line). Plate II behind the header | T06 and chip in the text column (y 120–190 and y 600–735). Frame 840 wide in the visual column, centred in y 200–800 |
| S3N | Roundel 200 px y 300–500; T30 y 520–625; T31 y 645–795; T32 y 820–1000 (sizes as V01 S4). bench 800×447 at y 1020–1467 | As V01 S4 |
| S4 | Recap timeline (icons) y 320–860. Conditions band y 900–1240, solid `--navy`, text inset 10 px (FR 49 px, 5 lines, 318 px; EN 56 px, 4 lines, 291 px; AR 63 px, 3 lines, 284 px). Lighthouse decoration below 1240 | Recap timeline y 120–400 across the frame. Conditions band full width, x 120–1800, y 810–960 (FR/EN 48 px, 2 lines, 125 px; AR 50 px, 2 lines, 150 px) |
| S5 | Above the band, y 290–895: wordmark 88 px y 290–393; T50 y 405–573 (FR/EN 135 px; AR 168 px); T51 y 585–710 (FR/EN 125 px; AR 84 px); CTA button 90 px tall at y 720–810 (FR label 52 px, button 711 px wide); T52 y 820–895 (FR 68 px; AR 75 px). The band stays at y 900–1240 | End card in the text column, y 120–780: wordmark y 130–230; T50 y 260–410; T51 y 420–535; CTA button (48 px label, 663 px wide, 96 px tall) y 570–666. No pointer. Lighthouse 840×455 in the visual column. The band stays at y 810–960 |

**4:5** = the 9:16 render cropped at y 90–1440: the band y 900–1240 lands at 810–1150. The LinkedIn file is cropped from a `pointer=li` render.

### 5.3 S3A screens and crops per master (variant A)

Every capture below was opened and checked on 2026-10-26. Crops are in the source's pixels (x, y, width × height). Each one is shown at 800 px wide in 9:16 and 840 px wide in 16:9.

| Master | Frame 1 (9.67–12.67) | Frame 2 (13.00–16.00) | Why |
|---|---|---|---|
| FR (Algeria and France) | `assets/work/bordjsteel/d2.webp`, **crop 0, 0, 1440 × 760** (« NOS PRODUITS » and the four product cards; the footer, from y 779, shows the client's street address and social icons and is cut). **REQUIRES CLIENT PERMISSION** | `assets/previews/alliancetravel.webp`, full frame (1280×800): « Le monde, guidé et organisé », no figures. **REQUIRES CLIENT PERMISSION** | French screens only |
| EN (Gulf, YouTube EN) | `assets/work/alliance/d3.webp`, **crop 0, 0, 1440 × 352: the header bar, the eyebrow and the headline only.** Below the headline the capture shows the client's own figures and claims ("Ten countries covered" in the body paragraph from y 375; "Three offices on the ground · BBA & M'Sila", "Operating since 2019 · 1,200+ files processed" in the trust row at y 656). On a Numidea video these would read as Numidea results, and "since 2019" echoes the founder's own « depuis 2019 ». The crop shows at 800 × 196 (plus chrome) and still holds « Tous les voyages » (French) and the client's Arabic switch label in the nav: acceptable UI, check it in G4. **REQUIRES CLIENT PERMISSION** | `assets/work/bordjsteel/d2.webp`, crop as FR. **REQUIRES CLIENT PERMISSION** | Gulf: do not lead with a French client site [CH §4.3] |
| AR (Algeria and Gulf) | **Not rendered.** No Arabic capture exists, and both French captures would put French screens in an Arabic frame and lead the Gulf with a French site. A fresh capture of Alliance Travel's live Arabic page into `scratchpad/marketing/captures/` needs the owner's OK (P7, Q3); look at it before choosing a crop | — | Until then, AR posts use variant N |

Replacement frames considered and rejected: `alliance/d2` and `d4` (the client's tour prices "129.000 DA" / "419.000 DA" and French hero copy), `alliance/d1`, `m1` (ratings and figures), `alliance/m2` (calculator).

- **Fallback if the sites were built as an employee** (OWNER PREREQUISITE P6): either a chip that says so in words the owner approves, for example « Site réalisé par le fondateur, alors salarié de Bordj Steel » [OWNER wording, not to be used before approval], or that client is left out of variant A.
- **AlmaFlowClim** is not used. A France-only swap of frame 2 to `assets/work/almaflow/d4.webp` (the quote page) would need the client's written permission, the owner's description ("site made for the client" or "redesign proposal"), and its domain never shown or called live: the client's domain now serves a different (Hostinger) site [FB §1.9].
- **Phone format.** `assets/work/bordjsteel/m2.webp` (Produits, phone, clean) can replace frame 1 inside a phone outline; the same permission applies.

### 5.4 Word load and holds (FR; EN where it is longer)

| Scene | Blocks entering | Words | Length | Load |
|---|---|---|---|---|
| S1 | T01 | 6 | 2.00 s | 3.0 /s |
| S2 | T02, T04 (+ placeholders) | 13 (EN 14) (+4) | 7.33 s | 1.8 /s (2.4) |
| S3A | T06, T07, T08 | 11 | 6.67 s | 1.65 /s |
| S3N | T30, T31, T32 | 15 | 6.67 s | 2.25 /s |
| S4 | T03 | 17 | 6.67 s | 2.55 /s |
| S5 | wordmark, T50, T51, T13, T52 | 22 | 7.33 s | 3.0 /s |

| Block | Words | Minimum hold | Actual hold | OK |
|---|---|---|---|---|
| T01 hook | 6 | 1.5 s at hook size; 2.0 s | 2.0 s at hook size, 9.33 s in total | ✓ |
| T02 | 8 | 3.8 s | 2.67 → 9.33 = 6.67 s | ✓ |
| T04 | 5 (EN 6) | 2.75 s (EN 3.1) | 5.33 → 9.33 = 4.0 s | ✓ |
| T06 | 2 | 1.7 s | 9.33 → 16.00 = 6.67 s | ✓ |
| T07 / T08 | 4 / 5 | 2.4 / 2.75 s | 2.67 / 3.0 s | ✓ |
| T30 / T31 / T32 | 2 / 6 / 7 | 1.7 / 3.1 / 3.45 s | 6.33 / 5.67 / 4.0 s | ✓ |
| **T03 conditions** | 17 | 6.95 s, alone ≥ 6.3 s | **alone 16.00 → 22.67 = 6.67 s**; on screen 16.00 → 28.80 = 12.8 s | ✓ |
| T50 / T51 | 7 / 7 | 3.45 s | 5.8 / 5.47 s | ✓ |
| T13 CTA | 3 | 2.05 s | 25.67 → 28.80 = 3.13 s; enters 9.67 s after the conditions | ✓ |
| T52 | 3 (AR 4) | 2.05 s (AR 2.4) | 26.00 → 28.80 = 2.8 s | ✓ |

### 5.5 Music cue list (V10-s30; needs `--cues`, `--chord-chimes off`, `--dur 30`)

Chord map: Dm(add9) from beat 0 · B♭maj7 from beat 8 (5.33) · Fmaj9 from beat 16 (10.67) · Csus2 from beat 24 (16.00), held through the conditions · sting at beat 34 (22.67) · tail to 30.00. A and N have different S3 cues, so they are two audio files.

| Time | Beat | Frame | Event |
|---|---|---|---|
| 0.00 | 0 | 0 | Chime D; pad at full level; tick layer on from f0 |
| 2.00 | 3 | 60 | Accent tick |
| 2.67–3.33 | 4–5 | 80–100 | Five soft ticks (day-ticks) |
| 4.00 | 6 | 120 | Accent tick (call frame) |
| 5.33 | 8 | 160 | Chord → B♭maj7 (no chime); frame-drum stroke (the « 0 ») |
| 9.33 | 14 | 280 | Accent tick |
| 9.67 / 12.67 | 14.5 / 19 | 290 / 380 | A only: accent ticks (frames 1 and 2) |
| 10.33 / 12.00 | 15.5 / 18 | 310 / 360 | N only: accent ticks (role, promise) |
| 10.67 | 16 | 320 | Chord → Fmaj9; chime (plate II or the bench) |
| 16.00 | 24 | 480 | Chord → Csus2 (no chime); tick layer mutes; pad holds. Nothing until the sting |
| 22.67 | 34 | 680 | Sting: frame drum + D + A chimes |
| 28.80–30.00 | — | 864–899 | Fade to silence |

### 5.6 Market slot module (deferred: not in any current cut)

The price or place beat no longer fits a 30 s Aperçu cut at 3 words a second. It is kept here, corrected, for a longer V10 social cut (the strategy allows V10 9:16 at 30–45 s [ST §5]) **after the W4 check**, placed after the work or founder beat. Its scene needs about 7 s (21 words at 3 /s).

| Slot | Used by | Blocks | Fact |
|---|---|---|---|
| **P-DZ** (FR master, Algeria) | Algeria FR posts | T09 « Essentiel · Studio · Moteur » (tabs) · row 1, lit: « Essentiel · site vitrine » / « env. » « 90 000 – 160 000 » « DA HT » · **row 2: « Studio · trilingue FR / EN / AR » / « env. » « 180 000 – 420 000 » « DA HT »**, which says where trilingual belongs (in Studio's scope; for other site types it is a paid option, `price.oI18n` app.js:385, `PRICE_OPTS.i18n` app.js:688). Figures as numbers at 68–72 px with « DA HT » on its own line | F12, F13, F14, F32 |
| **P-FR-FR** (France: LinkedIn, the France-only Instagram post) | FR posts for France | Same two rows in € only: « env. 600 – 1 100 € HT » and « env. 1 200 – 2 800 € HT »; the caption adds « conversion approximative » [ST §6.3]. Replaces the old FR master's DA-then-€ line on LinkedIn (Q5) | F12, F13, F14, F32 |
| P-DZ-AR | Algeria-only Arabic placements | T09 «الأساسي · الاستوديو · المحرّك» · «الأساسي · موقع تعريفي» / «من نحو 90 000 إلى 160 000 دج، غير شاملة الضريبة» · «الاستوديو · ثلاثي اللغة: فرنسي / إنجليزي / عربي» / «من نحو 180 000 إلى 420 000 دج، غير شاملة الضريبة» [à relire par un arabophone natif] | F12, F13, F14, F32 |
| P-USD (only if the owner wants a price in the Gulf, Q5) | EN Gulf posts | "Essential · showcase site" / "about $670 – 1,200 excl. tax" · "Studio · trilingual FR / EN / AR" / "about $1,300 – 3,100 excl. tax" | F12, F13, F14, F32 |
| P-GU (AR and EN masters, no price) | Gulf posts | "Studio based in Algeria." [F15] · "UTC+1 · 2 h behind Riyadh · 3 h behind Dubai" [F16] · faq5.png and the coordinates line [F23]. AR: «مقرّنا في برج بوعريريج، الجزائر.» · «أقلّ بساعتين من توقيت الرياض، وبثلاث ساعات من توقيت دبي» [à relire par un arabophone natif] | F15, F16, F23 |

**Every post that shows a price carries the site's line in its caption** (F33):
- P-DZ and P-FR-FR: « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » (app.js:391)
- P-USD: "An indicative range, not a quote. The firm price follows once we have scoped it together — and it does not move after that." (app.js:503)
- P-DZ-AR: «تقدير استرشادي، لا عرض سعر رسمي. السعر النهائي نحدّده بعد أن نضبط معاً نطاق العمل — ولا يتغيّر بعدها.» [à relire par un arabophone natif] (app.js:618)

### 5.7 Captions (V10-s30 and V10-s15; the conditions in full)

**FR**
> Votre page d'accueil, avant de payer.
> L'Aperçu : avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu, en 5 jours ouvrés à réception de vos contenus. On vous la présente en visio (30 min). Si vous dites non, vous ne devez rien.
> Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

Sources: F01, F02, F03, F04, F07.

**EN**
> Your homepage, before you pay.
> The Preview: before any payment, we build your new site's homepage with your own content, in 5 working days once we have your content, and walk you through it on a 30-minute video call. If you say no, you owe nothing.
> Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients.
> Web & software studio · Bordj Bou Arréridj, Algeria · UTC+1, 2 h behind Riyadh, 3 h behind Dubai.

Sources: F01, F02, F03, F04, F07, F16.

**AR** [à relire par un arabophone natif]
> صفحتك الرئيسية، قبل أن تدفع. [à relire par un arabophone natif]
> المعاينة: قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت، خلال 5 أيام عمل من استلام المحتوى، ونعرضها عليك في مكالمة فيديو مدّتها 30 دقيقة. إن قلت لا، فلا شيء عليك. [à relire par un arabophone natif]
> مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

[à relire par un arabophone natif] Sources: F01, F02, F03, F04, F07. Reviewer notes:
- The kit warns that «المعاينة» on its own can read as an inspection and pairs it with «الموقع الإلكتروني» [`campaign-readme.md`, Ads and prefilled messages]. Please judge T13 and this caption on that point. [à relire par un arabophone natif]
- Please also decide between the singular address (the site uses it) and the plural.
- The Algerian caption may use a lighter register if the reviewer prefers [CH §2.3]. The on-screen text stays in Modern Standard Arabic.

### 5.8 Stills (V10 cuts)

Every still that names the Aperçu carries the conditions, legibly: on the profile grid, in a LinkedIn PDF and on a thumbnail there is no caption beside it.
- **Instagram cover:** a designed still (`still=cover`): T01 at hook size plus T03 in full at ≥ 46 px, both inside the 3:4 grid crop. Alternative: f870, where the end card and the conditions band are both on screen.
- **Carousel hook slide** (IG, LinkedIn PDF): the same designed still. Other slides: f270 (the timeline complete), f470 (work or founder), f670 (the conditions alone), f890 (end card).
- **Thumbnails:** V10-s30 goes to Shorts only. Any 1280×720 thumbnail that names the Aperçu carries the short site line « Gratuit et sans engagement, pour les entreprises immatriculées, 4 par mois au maximum. » (index.html:34) at ≥ 40 px. The long V10's thumbnail [SP §2] follows the same rule (§13).

---

## 6. V10-s15: the Aperçu, 15 s (Gate B; the same for A and N)

**450 frames. Arcanum. 9:16 only** (Story render `story=1`, and a plain render for WhatsApp Status). No client work. Not scheduled in [ST §8.2]: rendered only if the strategy adds Story or Status slots after Gate B.

| Scene · time (frames) | Visual and coded animation | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.00 (f0–59) | As V10-s30 S1 | T01 « Votre page d'accueil, avant de payer. » [F01] | T01 «صفحتك الرئيسية، قبل أن تدفع.» [F01] [à relire par un arabophone natif] | T01 "Your homepage, before you pay." [F01] | 6 · 3.0/s | f0 chime D, pad full, ticks | 2.00–2.50 T01 rises to the header |
| **S2 The « 0 »** · 2.00–5.33 (f60–159) | The timeline, compressed: line and n1 at 2.00; five day-ticks 2.00–2.67; n3, a small call glyph holding the blueprint (master language only), at 2.33; n4 at 2.67, the « 0 » stamped (`--crimson-text`) | T04b @2.67 « Payé jusqu'ici : 0 » [F05] | T04b «المدفوع حتى الآن: 0» [F05] [à relire par un arabophone natif] | T04b "Paid so far: 0" [F05] | 3 (AR 4, EN 4) + 4 placeholder words · 0.9/s (2.1) | 2.00–2.67 five soft ticks. 2.67 frame-drum stroke (the « 0 ») | 5.33: everything in S2 wipes out |
| **S3 The conditions** · 5.33–11.67 (f160–349) | The wordmark at the top (a quiet mark, 88 px). The timeline recap, icons only. **The conditions sit alone on their band** (y 900–1240) and stay to the end | Wordmark @5.33 [F20]. T03 @5.33 [F03] | T03 [F03] [à relire par un arabophone natif] | T03 [F03] | 19 · 3.0/s | 5.33 chord → B♭maj7 (no chime); ticks mute; pad holds | 11.67: the recap wipes out; the band stays |
| **S4 End card (condensed)** · 11.67–15.00 (f350–449) | The series card condensed for 15 s: the short place line instead of label + motto. CTA as the primary button. **No URL** | T53 @11.67 « Bordj Bou Arréridj, Algérie » [F07]. T13 @12.00 « Demander mon Aperçu → » [F08]. T52 @12.33 « Lien en bio » [F30] (**none in the Story render**: the sticker carries the link) | T53 «برج بوعريريج، الجزائر» [F07] [à relire par un arabophone natif]. T13 «اطلب معاينتك ←» [F08] [à relire par un arabophone natif]. T52 «الرابط في الملف التعريفي» [F30] [à relire par un arabophone natif] | T53 "Bordj Bou Arréridj, Algeria". T13 "Request my Preview →". T52 "Link in bio" | 10 (AR 10) · 3.0/s | **11.67 sting.** 13.80–15.00 audio fade; **no visual fade** (the last frame holds) | Hold on f449 |

**Holds:** T01 2.0 s at hook size ✓ · T04b 2.67 s (minimum 2.4 s for 4 words) ✓ · **T03 alone 6.33 s, on screen 9.67 s** (minimum 6.95 s) ✓ · T53 3.33 s (2.4) ✓ · T13 3.0 s (2.05) ✓ · T52 2.67 s (AR 2.4) ✓.

**Layout 9:16:** S1 as V10-s30. S2: header y 290–440; compact timeline y 470–940 (four nodes, call glyph 320×180); T04b y 960–1060 (FR/EN 64 px, 1 line; AR 66 px). S3: wordmark y 300–403; recap y 450–850; band y 900–1240 (sizes as §5.2). S4: T53 y 450–525 (56 px; AR 60 px); CTA button y 560–650; T52 y 680–750. Story render: y 1250–1450 empty.

**Music:** chord map Dm(add9) b0 · B♭maj7 b8 (5.33, no chime) held · sting b17.5 (11.67) · tail to 15.00. Needs `--cues`, `--chord-chimes off`, `--dur 15` and a two-chord map.

---

## 7. V01-06: bumper, 6 s (Gate 0; no offer, no conditions needed)

**180 frames. Arcanum. 9:16** (Story render `story=1`, and a plain render). It names no offer, so it needs no conditions and no CTA gate, and it has no client work. Not scheduled in [ST §8.2] (§13).

| Scene · time (frames) | Visual and coded animation | FR (fact) | AR (fact) | EN (fact) | Words · load | Music | Out |
|---|---|---|---|---|---|---|---|
| **S1 Hook + mirror** · 0.00–3.00 (f0–89) | The "Votre site" mock-up (760×475, y 750–1225) already filled in the master's language at f0. At 2.33 it switches to the Arabic layout and every block glides to its mirrored place 2.33–2.93 (grey bars in the FR and EN masters; the Arabic placeholders in the AR master). **T41b is fully set at f0** | T41b @0.00 « En français, anglais ou arabe. » [F06] | T41b «بالعربية والفرنسية والإنجليزية.» [F06] [à relire par un arabophone natif] | T41b "In English, French and Arabic." [F06] | 5 (AR 3) + 4 placeholder words · 1.7/s (3.0) | f0 chime D, pad full. 2.33 mirror chime | 3.00: T41b and the mock-up wipe out (0.33 s) |
| **S2 Mark** · 3.00–6.00 (f90–179) | Wordmark (88 px) with the short place line; pointer. Story render: no pointer | Wordmark + T53 @3.00 « Bordj Bou Arréridj, Algérie » [F20, F07]. T52 @3.33 « Lien en bio » [F30] | T53 «برج بوعريريج، الجزائر» [F07] [à relire par un arabophone natif]. T52 «الرابط في الملف التعريفي» [F30] [à relire par un arabophone natif] | T53 "Bordj Bou Arréridj, Algeria". T52 "Link in bio" | 9 (AR 9) · 3.0/s | **3.00 sting.** 4.80–6.00 audio fade; no visual fade | Hold on f179 |

**Holds:** T41b 3.0 s (minimum 2.75 s; hook size from f0) ✓ · T53 3.0 s (2.4) ✓ · T52 2.67 s (AR 2.4) ✓.

**Layout 9:16:** T41b y 330–720 (FR 106 px, 3 lines, 350 px; EN 112 px, 3 lines, 370 px; AR 114 px, 2 lines, 342 px). Mock-up 760×475 at x 160–920, y 750–1225. S2: wordmark y 600–710; T53 y 740–815; T52 y 850–925. Story render: y 1250–1450 empty.

**Music:** Dm(add9) throughout; f0 chime; 2.33 mirror chime; sting at 3.00 (beat 4.5); tail to 6.00. Needs `--cues`, `--dur 6` and a one-chord map.

**Alternative hook for a later test (not required):** the V10 cuts could test H2 « Payé jusqu'ici : 0 » at frame 0 [CH §1.7], which [SP §2] already uses for the long V10. Compare only on each platform's own retention figures, after the 8-week review [CH §1.8].

---

## 8. What variant N may add, and what it must avoid

**Optional swaps, AR and EN masters only:** never in the FR master, because these screens are in English and the FR master serves France [FB §2.4]. Neither is in any current cut; they could take a half of S3N in a longer future cut.
- **Glaive Store: `assets/work/glaive/d4.webp` (the quiz) only.**
  - The large in-frame badge [F26]: EN "Portfolio demo – not a client project"; AR «نموذج تجريبي – ليس مشروع عميل» [à relire par un arabophone natif]; held at least 3 s. The capture's own top bar ("Portfolio demo · fictional brand and products · nothing is sold or shipped") stays in frame; its fictional promo strip ("FREE SHIPPING OVER $50 · MEMBERS GET EARLY DROPS") is part of the demo.
  - **Avoided:** `d1` (its fictional "WORLD'S #1" line) and **`d2`** (fictional star ratings with review counts such as "4.8 (540)", a "BEST SELLER" badge and "SAVE 14%": in a Numidea video, stars and counts read as reviews or a ranking, even with the badge).
- **WorkspaceHQ, `assets/work/workspacehq/d1.webp`:**
  - described as « Le projet préféré du fondateur » / "The founder's favourite project" (app.js:74 / :172 / :273);
  - never "open source";
  - `d2` is never used (it names an AI model).

**Avoid:**
- any capture of Numidea's own site (§3.6);
- any client name, even through a chip;
- AlmaFlowClim and Nomara.

---

## 9. Links and `?ref=` codes (nothing on screen)

### 9.1 What is on screen

Nothing clickable or typeable: **no URL, email, phone number or ref code** [ST §3.4]. The V10 cuts carry one CTA, T13 « Demander mon Aperçu → » (after Gate B); V01 carries only the pointer. The tracked link goes wherever the platform makes it clickable:
- the Facebook post text;
- the LinkedIn first comment;
- the YouTube description;
- an Instagram or Facebook Story link sticker (placed in y 1250–1450, §3.3);
- the WhatsApp Status caption (from Gate B).

Instagram Reels and TikTok captions are not clickable, so those posts rely on the bio link and its fixed code (`dz-ig-bio`, `gu-ig-bio`, `gu-tt-bio`, `fr-li-bio` [ST §10.2]). The first reply also asks « Où nous avez-vous découvert ? » [ST §10.3].

**Stories have no caption.** Every Story placement that names the Aperçu carries the conditions on screen (V10-s30 and V10-s15 do; a hook-only still of the Aperçu is never posted as a Story). V01-06 names no offer.

### 9.2 Codes and links

- **One scheme for the whole programme** [ST §10.2]: `{market}-{platform}-{lang}-w{NN}`, where `w{NN}` is the week the post actually goes out; YouTube long-form `yt-yl-{lang}-{slug}`, with the slug `atlas` for V01's 16:9. Lower case, `a-z 0-9 -`, at most 20 characters. The site keeps `[\w-]` up to 20 characters and appends ` [code]` to the WhatsApp message (app.js:1954-1958). Variants A and N go out in different weeks, so the week tells them apart; the lead log records which one was seen.
- **Link shape:** V01: `{SITE}?lang={fr|ar|en}[&cur=…]&ref={code}` (no anchor). V10 cuts: `{SITE}?lang=…[&cur=…]&ref={code}#apercu`. The query comes before the anchor, so the code survives the jump [FB §1.11]. `{SITE}` is `https://brvetr4ve1er.github.io/Numidea.tech/` until the own domain exists; then only the base changes, and no video needs re-rendering.

| Placement | File | Code (example week) | Link parameters |
|---|---|---|---|
| Facebook Page post, Algeria FR | V01-30 9:16 FR | `dz-fb-fr-w01` | `?lang=fr&ref=…` |
| Instagram Reel FR (pinned) | V01-30 9:16 FR | bio `dz-ig-bio` | bio link |
| YouTube Short FR | V01-30 9:16 FR | `yt-ys-fr-w01` (where the link is clickable) | `?lang=fr&ref=…` |
| YouTube upload / channel trailer | V01-30 16:9 FR | `yt-yl-fr-atlas` | `?lang=fr&ref=…` |
| LinkedIn (founder), first comment | V01-30 4:5 FR (`pointer=li`) + PDF carousel | `fr-li-fr-w01` | `?lang=fr&cur=eur&ref=…` |
| Facebook / Instagram, Algeria AR | V01-30 9:16 AR | `dz-fb-ar-w02`; bio `dz-ig-bio-ar` | `?lang=ar&ref=…` |
| TikTok AR / EN | V01-30 9:16 AR, EN | bio `gu-tt-bio` | `?lang=ar&cur=usd` / `?lang=en&cur=usd` |
| Facebook post, V10 launch | V10-s30 9:16 FR | `dz-fb-fr-w06` | `?lang=fr&ref=…#apercu` |
| Instagram Story with link sticker | V10-s30 or V10-s15 9:16, `story=1` | `dz-ig-fr-w06` | `?lang=fr&ref=…#apercu` |
| WhatsApp Status FR / AR | V10-s15 9:16 | `dz-wa-fr-w06`, `dz-wa-ar-w07` | `?lang=…&ref=…#apercu` |
| LinkedIn, V10 | V10-s30 4:5 FR (`pointer=li`) | `fr-li-fr-w06` | `?lang=fr&cur=eur&ref=…#apercu` |
| Website | V01-30 16:9 site file | none (the viewer is already on the site) | — |

---

## 10. Deliverables, channel map, render plan and hours

### 10.1 Files, by when they are made

| Video | W0–W1 (if P1) | After the W4 check | After Gate B (W6 at the earliest) | After Gate C (per client) |
|---|---|---|---|---|
| V01-30 | **FR: 9:16, 16:9 (social), 16:9 site (−16 LUFS), 4:5 crop (`pointer=li`)** | AR, EN (9:16, 16:9, 4:5 crop), each after review | — | — |
| V01-06 | — | FR, AR, EN 9:16 (`story=1`), only if the strategy schedules it | — | — |
| V10-s30 N | — | — | FR, AR, EN 9:16; 4:5 crop (`pointer=li`) FR | — |
| V10-s30 A | — | — | — | FR, EN 9:16 (AR when P7 exists) |
| V10-s15 | — | — | FR, AR 9:16 (`story=1` and plain), only if scheduled | — |
| Slot module, 1:1, theme excursion | not planned | | | |

**File naming:** `{v01-30|v01-06|v10-s30|v10-s15}-{a|n}__{ratio}__{lang}[__{story|li|site}].mp4`, for example `v01-30-n__9x16__fr.mp4`.

### 10.2 Where each file goes

| File | Channel |
|---|---|
| V01-30 9:16 FR | Instagram Reel (pinned) + Facebook Page Reel, Algeria and France; YouTube Short FR |
| V01-30 16:9 FR | YouTube upload and **YouTube channel trailer** (30 s; the 60–75 s featured version in [ST §5] is not scripted, §13) |
| V01-30 4:5 FR (`li`) | The founder's LinkedIn, plus the PDF carousel of its stills (§4.6) |
| V01-30 9:16 AR | Instagram/Facebook Reel (Algeria and Gulf); TikTok AR; YouTube Short AR |
| V01-30 9:16 EN | TikTok EN; Instagram Reel; YouTube Short EN |
| V01-30 16:9 site | The website, once the owner decides where the MP4s live (Gate W) [CH §5.3] |
| V10-s30 9:16 FR / AR / EN | Reels (pinned at the V10 launch), TikTok, Shorts, with the long V10 [SP §2] on YouTube and the site |
| V10-s30 4:5 FR (`li`) | LinkedIn |
| V10-s15, V01-06 (`story`) | Stories with a link sticker; WhatsApp Status (from Gate B), if scheduled |

TikTok gets the same 30 s cuts as the other platforms; no 15 s is planned there unless the strategy schedules it.

### 10.3 Render plan

**One page per video:** `pipeline/videos/v01.html` (V01-30 and V01-06) and `pipeline/videos/v10s.html` (V10-s30 and V10-s15). Copy in `pipeline/copy/trailer.json` (Appendix A).

W1 needs only the parameters the renderer already takes (`ratio`, `lang`), so it does not wait for `--params`:
```
node bed.mjs --bars 8.5 --dur 30 --seed {owner's pick} --out music/v01-30.f32.wav   # then encode to music/v01-30.m4a [MU §3]
node render.mjs videos/v01.html --ratios 9x16,16x9 --langs fr --audio music/v01-30.m4a
node render.mjs videos/v01.html --ratios 9x16 --langs fr --params pointer=li --audio music/v01-30.m4a
ffmpeg -i out/v01-30-n__9x16__fr__li.mp4 -vf crop=1080:1350:0:90 -c:a copy out/v01-30-n__4x5__fr__li.mp4
```
(`--params`, used for `pointer`, `cut`, `v`, `story`, `cta`, `still` and `endcard=site`, is still to add to `render.mjs`; until it exists, the LinkedIn pointer can be a second copy key. The crop is re-encoded, so verify runs on the cropped file too.)

Later, for each cut and variant, its own audio file: `v01-06.m4a`, `v10-s30-a.m4a`, `v10-s30-n.m4a`, `v10-s15.m4a`, and `…-site.m4a` at −16 LUFS for website files.

**Per render:**
- the copy lint passes;
- fit-text finds a size in range for every block (or the render fails);
- verify reports OK (container, faststart, colour, frame accuracy, determinism);
- `safeCheck()` passes on the last frame of every scene and at every block's entrance, with the new 9:16 values (§3.4);
- the loudness is measured on the final MP4's audio [PL §2; MU §4.5];
- one phone QA pass per file; AR files after the native review.

**Render time** (the pipeline's planning figures [PL §3]): about 2 min per 30 s output. W1 is 3 outputs plus one crop, under 10 minutes of machine time. Captures make scenes heavier; every report records its own timing.

### 10.4 Hours and scope (OWNER PREREQUISITE P1)

The strategy budgets 8–10 h in W0 for the end card, price card, carousel export, presets, the safe-area fix, and writing and rendering V01 (9:16 and 16:9) and V02 in French [ST §8.1]. V01 alone needs more:

| Task (W1, V01-30 FR) | Hours |
|---|---|
| Fit-text on every block, overflow check, floors, fail-on-no-fit | 2 |
| Safe-area change and per-scene / per-entrance check | 1 |
| Blueprint draw | 2 |
| Mock-up + mirror (FLIP on the clock, grey-bar states, tab row) | 3–4 |
| Founder card; coin turn; skyline clip-paths via CSSOM | 1.5 |
| End card (series component, `cta` and `pointer` switches) | 1.5–2 |
| `bed.mjs --dur`; render the bed (the owner's 10-minute listening test is separate) | 0.5 |
| `videos/v01.html`: five scenes in two layouts, copy JSON | 3–4 |
| Renders, crop, phone QA on 9:16 / 4:5 / 16:9, copy lint and verify | 1.5 |
| Carousel export (5 stills → 4:5 PDF), if not yet built | 1 |
| **Total** | **about 17–21 h** |

Not needed for V01: the price card, the timeline, the browser frame, the ink wipe, `--cues`. V02 has no script yet [ST §5; §13].

**Choose one** (Q7): (a) re-budget W0 to about 25–35 h (V01 as above plus V02 once it is scripted), or (b) **recommended if fewer than about 20 h are free before Sat 31 Oct:** slip V01 to W2 (Tue 10 Nov) and V02 to W3, and use W1 for the accounts and the bios. The strategy's swap rules then shift the AR and EN versions by one week (§13).

Deferred until after the W4 check: V01-06, V10-s15, variant A, the slot module, the real-script mirror option, and every 1:1.

---

## 11. Gates: nothing is posted until these are met

| # | Gate | Applies to | Source |
|---|---|---|---|
| G1 | A native speaker has reviewed every Arabic string: on-screen text, mock-up placeholders, the tab row and captions. If the owner wants separate reviewers for Algeria and the Gulf, both review. FR and EN files carry no Arabic copy by default (grey bars) | All AR files; FR/EN files only with the real-script mirror (P8) | [FB "How to use"; CH §2.3, §4.3] |
| G2 | **CTA gate:** privacy page live, a real legal name, and the dedicated WhatsApp number decided. The V10 cuts invite a request | V10-s30, V10-s15. **Not V01 or V01-06** (no CTA) | [CH §1.11; ST §7.1 Gate B] |
| G3 | The owner confirms the Aperçu may be promoted now: the capacity and employment-contract question, and the lawyer's view on organic promotion before registration | V10-s30, V10-s15 | [`Maps/Owner decisions pending.md:110`; FB open questions] |
| G4 | Written permission recorded per client shown; the owner's decision on how each relationship is described (client or employer); **the owner's approval of the T06 wording in each language** (proposed: « Quelques réalisations », "Selected projects", «نماذج من الأعمال» [à relire par un arabophone natif]); if the sites were built as an employee, the fallback in §5.3 (an approved chip, or that client left out); a check of the cropped frames | V10-s30 variant A | [FB §2.3; OWNER-CONTENT.md §6; `Maps/Owner decisions pending.md:122-123`] |
| G5 | The owner's listening test of the code-made bed is passed and its row is in `music-lab/ledger.csv`. No WorkspaceHQ audio | Every file | [MU §3.5, §4.3, §6] |
| G6 | ~~Engravings reuse~~ **Answered** by the owner's 2026-10-26 decision (the engravings are part of the videos' visual language; no new generations). The coded fallback (§3.6) stays an unbudgeted contingency | — | Owner brief, 2026-10-26 |
| G7 | The lawyer confirms the Loi Toubon reading for organic posts aimed at France | **Only** if the real-script mirror (P8) is chosen for FR files posted for France; the default grey bars need nothing | [CH §3.4] |
| G8 | Copy re-checked against `assets/app.js` at the render commit (the site may change); lint, fit-text, verify and the new safe area all pass; TikTok's RTL safe-zone file checked and its result recorded in `RATIOS` (until then, x 140–940 for every language) | Every file | [PL §5.3] |

The old G9 (re-render the end cards when the domain moves) is retired: no address is on screen.

---

## 12. Open questions for the owner

1. **Engravings.** Answered on 2026-10-26: they are used, and nothing new is generated (G6).
2. **Client permission (variant A).** Will Bordj Steel and Alliance Travel be asked for written permission? Until both answer, only variant N exists.
3. **Fresh Arabic capture.** May a fresh capture of Alliance Travel's live Arabic page be taken into the scratchpad? Until then, variant A has no Arabic master.
4. **The founder on screen.** Are you comfortable with your name, role and the line « Je reste à vos côtés après le lancement » in V01 and in V10-s30 N, with the monogram « Y » and the workbench engraving, and no face? **How is your name written in Arabic script?** The site shows only « Yasser Hamisse »; until you give the spelling, the AR line reads «المؤسّس: Yasser Hamisse» [à relire par un arabophone natif].
5. **Prices (deferred slot module).** On LinkedIn, € only (P-FR-FR, the default now) or DA then €? In the Gulf, no price (default) or the USD "about" figures?
6. **The mirror demo.** Grey bars for the other languages (default: one language per frame, nothing for the lawyer), or real FR / EN / AR placeholders? The second needs the strategy's one-language-per-frame rule extended to the mirror demo, plus G7 for France.
7. **W0 hours.** Can about 17–21 hours go into V01 this week, or should V01 slip to W2 and V02 (which has no script yet) to W3? (§10.4)
8. **Music.** After listening, which seed or variant? Should the Arabic masters use the percussion-only bed?
9. **The CTA gate (V10 cuts only).** When will the privacy page, legal name and dedicated WhatsApp number exist, and what is the lawyer's answer? V01 does not wait for them.
10. **The work heading (variant A).** Is « Quelques réalisations » / "Selected projects" / «نماذج من الأعمال» [à relire par un arabophone natif] right for each language? Were Bordj Steel and Alliance Travel built as a client's projects or as an employee? If as an employee, how should a chip say so, or should that client stay out?
11. **What the free Aperçu includes** (pages, languages). Not needed now: the Aperçu is never attached to the language demo. Only if you want that continuity back, decide it and add it to the facts bank first.
12. **The short cuts.** Should the strategy schedule Story slots for V10-s15 and V01-06, or drop them?

---

## 13. Changes this file needs in other files

Done in this revision:
- `facts-bank.md` §3.2: the `alliance/d3` row now lists the client figures below the headline and the mandatory crop; the `bordjsteel/d2` row notes the footer (address, social icons) and its crop; the `glaive/d2` row lists the star ratings, "BEST SELLER" and "SAVE 14%" (avoid).
- `facts-bank.md` §1.7, "Remote work": OK only for the opening clause « On est basés à Bordj Bou Arréridj »; the rest of that sentence is do-not-claim #3.

Not done here (other files, to be applied by their owner or reviser):

| File | Change |
|---|---|
| `strategy.md` §5 | V01 row: "9:16 30 s and 16:9 30 s, one script (`scripts-trailer.md` §4); 4:5 = crop. Content: Plate I; the hero title split across the hook and the mirror; « Un prix avant le devis »; the founder's line; the series end card. No Aperçu, no six themes (V25)". The 16:9 60–75 s featured version is unscripted: drop it, or script it before it is scheduled. V10 row: "long = `scripts-packages.md` §2 (69.1 s); social cut-downs = `scripts-trailer.md` §5 (V10-s30) and §6 (V10-s15)" |
| `strategy.md` §8.1, §6.4 | W0 is 8–10 h but V01 alone needs about 17–21 h (§10.4 here): re-budget W0 to about 25–35 h or slip V01 to W2 and V02 to W3. Add to the one-off build list: fit-text with floors and fail-on-no-fit, the safe-area change, blueprint, mock-up + mirror, founder card, the series end card, the CSSOM clip-paths, `bed.mjs --dur`; before W6: timeline, `--cues`/chord maps/chime switch; before any use: the ink wipe (2–3 h, technique §3.4); after Gate C: browser frame and crops |
| `strategy.md` §8.2 | Name the file and cut per slot: W1 Tue = V01-30 FR 9:16 (IG+FB pin, YS) + 16:9 (YL, channel trailer) + 4:5 crop (LI); W1 Thu = carousel « Ce que vous obtenez » from the V01 stills, **whose four promises are now the ones in §4.1** (the Aperçu is not one; if wanted, a separate slide with the full conditions and no CTA); W2 = V01-30 AR and EN; W6 = V10 long + V10-s30. V10-s15 and V01-06 are not scheduled: add Story slots (with the conditions on screen) or drop them. If V01 slips, apply swap rule 4's logic to the AR/EN follow-ups |
| `strategy.md` §2.3, §5 long-form list | V01's 16:9 is 30 s; either it counts as one of the "4 long-form FR videos" or the count drops to 3. V02 « Quatre étapes » (W2, W3 16:9) and V03 « L'arabe, ce n'est pas une traduction » (W3) have no script in this folder: script them before W0 ends, or re-sequence to lead with what is scripted at Gate 0 (V04 Essentiel, V11, V27 long-form) and push V02 and V03 back |
| `strategy.md` §3.3 | The 9:16 safe text box becomes x 140–940 for every language (not x 80–940 / AR 140–1000) until TikTok's RTL file is checked. The one-language-per-frame exception: no change needed with the default grey bars; extend it to the mirror demo only if the owner chooses real placeholders (Q6) |
| `strategy.md` §3.4 | Add the condensed end card used by the 15 s and 6 s cuts (short place line « Bordj Bou Arréridj, Algérie » instead of label + motto; no pointer in Story renders) |
| `strategy.md` §7.1 Gate 0 | Engravings row: answered by the owner's 2026-10-26 decision; the fallback is an unbudgeted contingency |
| `strategy.md` §10.2 | The trailer posts use the `w{NN}` scheme; add the YouTube slug `atlas` (`yt-yl-fr-atlas`) |
| `strategy.md` §9 #4, #5 | Pin V01-30 (9:16) on Facebook; the YouTube channel trailer is V01-30 16:9 (30 s) |
| `scripts-packages.md` §2.4 | The "Social cut (30–45 s)" note is superseded by `scripts-trailer.md` §5 and §6. Any V10 thumbnail or cover carries the conditions line (§5.8 here) |
| `scripts-packages.md` §1.3 | Text box x 140–940 for every language (was x 80–940 / AR 140–1000) |
| `channels.md` §1.4 | Add a Stories row: sticker zone y 1250–1450 kept empty; Stories show no caption, so any Story naming the Aperçu carries the conditions on screen. Change the box to x 140–940 for every language until TikTok's RTL file is checked |
| `pipeline.md` §5.2, §2.5 | Music row: "Licensed library music only, never generated audio" predates `music.md`'s bed written in code; reconcile (code-written music is allowed; AI-generated audio is not). Safe area: `RATIOS['9x16'].safe` → t290 r140 b680 l140, checked per scene and per entrance |
| `music.md` | The `bed.mjs` change list in §3.4 here (`--dur` now; chord maps, `--chord-chimes off`, `--cues` with layer automation, `--ticks-from` before W6) |

---

## 14. Revision log (review of 2026-10-26)

| Review issue | Change |
|---|---|
| Blocker: `alliance/d3` shows client figures | Cropped to the header bar, eyebrow and headline (0, 0, 1440 × 352) in §5.3; uncropped use banned in §3.6; facts-bank §3.2 corrected |
| Blocker: no postable W1 script; duplicate of V10 | New V01-30 (Gate 0, no CTA, series end card) in §4; the Aperçu cuts became V10's social cut-downs (§5, §6); strategy changes in §13 |
| The Aperçu attached to the three-language demo | The V10 cuts no longer contain the language demo; the Aperçu page is master-language only and is wiped out with the call frame (§1, §5.1) |
| Trilingual mirror followed by the Essentiel price | The price slot left the 30 s; kept as a deferred module with the Studio « trilingue » row, a P-FR-FR € slot and the P-USD caption line (§5.6) |
| 6 s: conditions unreadable in Stories | The 6 s is now a non-offer bumper (§7); the V10 cuts show the conditions alone ≥ 6.3 s; Story rule in §3.3 and §9.1 |
| 30 s: CTA before its conditions | The conditions enter at 16.00 and stay; the CTA enters at 25.67 (§5.1) |
| Stills without conditions | §5.8 (V10) and §4.6 (V01, which needs none) |
| T06 "our work" | Neutral EN/AR proposals; owner approval per language and an employee fallback in G4 and §5.3 |
| Glaive `d2` | Avoided, with `d1` (§8; facts-bank §3.2) |
| P-USD caption caveat | §5.6 |
| F15 note copied the banned claim | Opening clause only, in §2 and facts-bank §1.7 |
| F02/F03 line numbers | app.js:403 / :515 / :630 |
| Too many words per second | A per-scene word budget (≤ 3 /s) with load tables in §4.3 and §5.4; the 15 s cut rebuilt (§6) |
| Boxes too small for the type | Every box re-laid from sizes measured in the pipeline's Chromium (§3.2); fit-text on every block with floors and fail-on-no-fit; CTA and price sizes fixed |
| End card contradicts the series; URL does not fit | The series end card; T14 and G9 removed; no URL on screen (§3.4, §9) |
| Gradient swash | Solid `--teal-text` in `--font-head-em`; no gradient text, ever (§1) |
| Ink wipe impossible as specified | Default cuts need none; technique (a) or (b) and its budget in §3.4 |
| Cadence unrealistic | W1 = V01-30 FR only; 4:5 as a crop; 1:1 dropped; deferrals and hours in §10.4 |
| Long-form and V02/V03 without scripts; two Aperçu treatments | Single V10 treatment; strategy re-sequencing listed in §13 |
| French hook over 6 words | « Votre page d'accueil, avant de payer. » (6) |
| Arabic safe band | x 140–940 for every language (§3.3) |
| safeCheck called "built" | Marked "to change", with new values and per-scene/per-entrance runs (§3.4) |
| Wordmark | No blink; « idea » in `--font-swash`; 88 px (§3.4) |
| « 0 » in a fill token | `--crimson-text` for all text (§1, §3.4) |
| Theme changes too fast | Arcanum by default; one optional excursion (§3.5) |
| Plate sizes | Shown at ≤ 1.0× source, settle included (§3.6) |
| Music under-scoped | Exact `bed.mjs` changes; per-cut audio files; no chime under the conditions (§3.4, §4.4, §5.5) |
| Skyline clip-paths unreachable | Read at runtime through a constructed stylesheet that is never applied (§3.4) |
| Language rules (AR-A leading with French; Latin-only name line; mixed scripts) | AR-A not rendered until an Arabic capture exists; T30-AR starts with an Arabic word (P4); grey bars by default |
| Codes, TikTok cut, LinkedIn price | `w{NN}` scheme; TikTok gets the 30 s; P-FR-FR € slot (§9, §10, §5.6) |
| Engravings shown as settled and open | G6 and Q1 answered; fallback is a contingency |
| No room for the Story sticker | y 1250–1450 kept empty in Story renders (§3.3) |

### 14.1 V01 render review (2026-10-27)

The rendered V01-30 FR master was reviewed; the render now departs from §3–§4 where the review found a fault. Details, measurements and the checks in `out/v01/REPORT.md` §1 and §11.

| Review issue | Change in the render |
|---|---|
| f0 was the hook alone on an empty grid; the YouTube thumbnail came from f0 | Plate I is set at f0 (no 0.00–1.20 ink-in) and the blueprint's browser outline is drawn at f0; the inner parts still draw 0.10–2.60. The YouTube thumbnail is made from the 16:9 f300 only (§4.6) |
| 16:9 hook broke inside « sur mesure » | Fixed phrases kept on one line at render time (FR « sur mesure », EN « web developer »); the strings are unchanged |
| Scene changes spliced the outgoing and incoming headings | S2, S3 and S4 wipe out half a beat earlier (10.33, 15.00, 22.33); T42, the founder card and the wordmark keep their entrance beats (10.67, 15.33, 22.67) and enter once the band is clear |
| The 4:5 crop cut faq3 and Plate V | The 9:16 render made for the 4:5 crop (`pointer=li`, and the carousel stills) drops faq3 and places Plate V at y 1000–1433 and the workbench at y 1012–1425 |
| The brass grid decoded as grey | 2 px grid lines on even pixels; the encoder quantises chroma finer (x264 `chroma-qp-offset=-4`) |
| Separators hanging at the end of T50 / T51 line 1 | Hidden where the line breaks at them; the strings are unchanged |
| The mirror glide stacked the three cards | Look-alike blocks take the nearest mirrored place; crossing blocks yield (fade or dim) while they overlap |
| LinkedIn PDF pages 0.54 pt taller than painted | The PDF is written by the pipeline at exactly 810 × 1012.5 pt per page |
| (EN master) | T52 `en_li` « Link in comments » added to Appendix A for the EN LinkedIn crop |

---

## Appendix A. Copy dictionary for `pipeline/copy/trailer.json`

- One key per text block. `src` points to the fact key in §2.
- `arReviewed` stays `false` until a native speaker signs off, and every Arabic value carries the review marker in `ar_review` [PL §5.1]. The copy lint must also see the file-level marker.
- `use` lists the cuts that show the block; `deferred` blocks belong to the slot module (§5.6).

```json
{
  "_meta": {
    "built": "2026-10-26",
    "revised": "2026-10-26 (after review)",
    "site_commit": "ecf48bb",
    "ar_marker": "à relire par un arabophone natif",
    "rule": "No new facts. Re-check every string against assets/app.js at the render commit. No URL, email, phone number or ref code on screen."
  },
  "T01": { "src": "F01", "use": ["v10-s30", "v10-s15"], "fr": "Votre page d'accueil, avant de payer.", "en": "Your homepage, before you pay.", "ar": "صفحتك الرئيسية، قبل أن تدفع.", "swash": { "fr": "avant de payer.", "en": "before you pay." }, "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T02a": { "src": "F04", "use": ["v10-s30"], "fr": "5 jours ouvrés", "en": "5 working days", "ar": "5 أيام عمل", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T02b": { "src": "F04", "use": ["v10-s30"], "fr": "à réception de vos contenus", "en": "once we have your content", "ar": "من استلام المحتوى", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T03": { "src": "F03", "use": ["v10-s30", "v10-s15"], "fr": "Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus.", "en": "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients.", "ar": "مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T04a": { "src": "F05", "use": ["v10-s30"], "fr": "Vous décidez", "en": "You decide", "ar": "أنت تقرّر", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T04b": { "src": "F05", "use": ["v10-s30", "v10-s15"], "fr": "Payé jusqu'ici : 0", "en": "Paid so far: 0", "ar": "المدفوع حتى الآن: 0", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T40": { "src": "F06", "use": ["v01-30"], "fr": "Votre site sur mesure,", "en": "Custom websites,", "ar": "موقعك المخصّص،", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T41": { "src": "F06", "use": ["v01-30"], "fr": "en français, anglais ou arabe.", "en": "in English, French and Arabic.", "ar": "بالعربية والفرنسية والإنجليزية.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T41b": { "src": "F06", "use": ["v01-06"], "fr": "En français, anglais ou arabe.", "en": "In English, French and Arabic.", "ar": "بالعربية والفرنسية والإنجليزية.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T42": { "src": "F28", "use": ["v01-30"], "fr": "Un prix avant le devis.", "en": "A price before the quote.", "ar": "سعر قبل عرض السعر.", "swash": { "fr": "avant le devis.", "en": "before the quote." }, "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T06": { "src": "F09", "use": ["v10-s30-a"], "owner": "OWNER PREREQUISITE: approve per language with the client-or-employer decision (G4)", "fr": "Quelques réalisations", "en": "Selected projects", "ar": "نماذج من الأعمال", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T07": { "src": "F10", "use": ["v10-s30-a"], "permission": "Bordj Steel: REQUIRES CLIENT PERMISSION", "fr": "Bordj Steel · Construction métallique", "en": "Bordj Steel · Structural steel", "ar": "إنشاءات معدنية · Bordj Steel", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T08": { "src": "F11", "use": ["v10-s30-a"], "permission": "Alliance Travel: REQUIRES CLIENT PERMISSION", "fr": "Alliance Travel · Agence de voyages", "en": "Alliance Travel · Travel agency", "ar": "وكالة سفر · Alliance Travel", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T09": { "src": "F12", "use": ["v01-30", "slot"], "fr": "Essentiel · Studio · Moteur", "en": "Essential · Studio · Engine", "ar": "الأساسي · الاستوديو · المحرّك", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T30": { "src": "F17", "use": ["v01-30", "v10-s30-n"], "owner": "OWNER PREREQUISITE P4: Arabic-script spelling of the name; until then the AR line starts with an Arabic word", "fr": "Yasser Hamisse", "en": "Yasser Hamisse", "ar": "المؤسّس: Yasser Hamisse", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T31": { "src": "F18", "use": ["v01-30", "v10-s30-n"], "fr": "Designer graphique & développeur web · Fondateur", "en": "Graphic designer & web developer · Founder", "ar": "مصمّم غرافيك ومطوّر ويب", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T32": { "src": "F19", "use": ["v01-30", "v10-s30-n"], "fr": "Je reste à vos côtés après le lancement.", "en": "I stay once it's live.", "ar": "أبقى بعد الإطلاق.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T50": { "src": "F07", "use": ["v01-30", "v10-s30"], "fr": "Studio web & logiciel · Bordj Bou Arréridj, Algérie", "en": "Web & software studio · Bordj Bou Arréridj, Algeria", "ar": "استوديو ويب وبرمجيات · برج بوعريريج، الجزائر", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T51": { "src": "F29", "use": ["v01-30", "v10-s30"], "fr": "Enraciné en Numidie · bâti sur des idées", "en": "Rooted in Numidia · built on ideas", "ar": "جذورها في نوميديا · مبنيّة على الأفكار", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T52": { "src": "F30", "use": ["v01-30", "v01-06", "v10-s30", "v10-s15"], "note": "none in 16:9 and in story=1 renders", "fr": "Lien en bio", "fr_li": "Lien en commentaire", "en": "Link in bio", "en_li": "Link in comments", "ar": "الرابط في الملف التعريفي", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T53": { "src": "F07", "use": ["v01-06", "v10-s15"], "fr": "Bordj Bou Arréridj, Algérie", "en": "Bordj Bou Arréridj, Algeria", "ar": "برج بوعريريج، الجزائر", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "T13": { "src": "F08", "use": ["v10-s30", "v10-s15"], "gate": "after Gate B only (cta=1)", "fr": "Demander mon Aperçu →", "en": "Request my Preview →", "ar": "اطلب معاينتك ←", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "M01": { "src": "F25", "fr": "Votre logo", "en": "Your logo", "ar": "شعارك هنا", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "M02": { "src": "F25", "fr": "Votre entreprise", "en": "Your business", "ar": "اسم نشاطك", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "M03": { "src": "F31", "fr": "FR · EN · AR", "en": "FR · EN · AR", "ar": "الفرنسية · الإنجليزية · العربية", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S10a": { "src": "F13", "deferred": "slot module §5.6", "fr": "Essentiel · site vitrine", "en": "Essential · showcase site", "ar": "الأساسي · موقع تعريفي", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S10b": { "src": "F14", "deferred": "slot module §5.6", "fr_dz": "env. 90 000 – 160 000 DA HT", "fr_fr": "env. 600 – 1 100 € HT", "en_usd": "about $670 – 1,200 excl. tax", "ar": "من نحو 90 000 إلى 160 000 دج، غير شاملة الضريبة", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S11a": { "src": "F32", "deferred": "slot module §5.6", "fr": "Studio · trilingue FR / EN / AR", "en": "Studio · trilingual FR / EN / AR", "ar": "الاستوديو · ثلاثي اللغة: فرنسي / إنجليزي / عربي", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S11b": { "src": "F32", "deferred": "slot module §5.6", "fr_dz": "env. 180 000 – 420 000 DA HT", "fr_fr": "env. 1 200 – 2 800 € HT", "en_usd": "about $1,300 – 3,100 excl. tax", "ar": "من نحو 180 000 إلى 420 000 دج، غير شاملة الضريبة", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S20": { "src": "F15", "deferred": "slot module §5.6 (P-GU)", "en": "Studio based in Algeria.", "ar": "مقرّنا في برج بوعريريج، الجزائر.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "S21": { "src": "F16", "deferred": "slot module §5.6 (P-GU)", "en": "UTC+1 · 2 h behind Riyadh · 3 h behind Dubai", "ar": "أقلّ بساعتين من توقيت الرياض، وبثلاث ساعات من توقيت دبي", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
  "CAP_PRICE": { "src": "F33", "use": ["captions of any post showing a price"], "fr": "Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite.", "en": "An indicative range, not a quote. The firm price follows once we have scoped it together — and it does not move after that.", "ar": "تقدير استرشادي، لا عرض سعر رسمي. السعر النهائي نحدّده بعد أن نضبط معاً نطاق العمل — ولا يتغيّر بعدها.", "ar_review": "à relire par un arabophone natif", "arReviewed": false }
}
```
