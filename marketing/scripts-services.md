# Numidea Labs: service explainer scripts (V11–V15) and a note on the five other services

PRIVATE. Never copy this file, or anything rendered from it, into `/home/user/STICKITTY.INC` (the public repository).
Written 2026-10-26 against the site at commit `ecf48bb`. That commit only adds `IMPROVEMENTS.md` to `82603b0`, so every site string quoted here is the one the facts bank was built from. **Revised the same day after review:** §15 lists every change, issue by issue.
Every Arabic string is marked **[à relire par un arabophone natif]**. Nothing here is approved for posting; §12 lists the gates.

**Sources and tags used in this file**

| Tag | File |
|---|---|
| [FB §x] | `marketing/facts-bank.md` |
| [CH §x] | `marketing/channels.md` |
| [PL §x] | `marketing/pipeline.md` |
| [MU §x] | `marketing/music.md` |
| [ST §x] | `marketing/strategy.md` (video IDs V11–V15 and C1 come from its slate, §5; the calendar is its §8.2) |
| [TR §x], `F01`… | `marketing/scripts-trailer.md` and its fact key (reused here, not repeated) |
| [PK §x] | `marketing/scripts-packages.md` |
| [IM] | `/home/user/STICKITTY.INC/IMPROVEMENTS.md` (public backlog from the October 2026 site audit) |
| [BR] / [TH] | `/home/user/STICKITTY.INC/BRAND.md` / `/home/user/STICKITTY.INC/assets/themes.css` |
| [GP] / [CA] / [CO] | vault `Maps/Gaps and plan.md` / `notes/research/competitor-analysis-and-plan.md` / `Maps/Copy audit.md` |
| [SF] | the timing lint and fit measurement for this file: `marketing/_review/sv-fit/` (`copy.mjs`, `copy16.mjs`, `lint.mjs`, `gen.mjs`, `gen16.mjs`, `run.mjs`; results in `lint.out`, `lint16.out`, `fit916.out`, `fit16.out`) |
| `SVnn` | this file's fact key (§3) |

---

## 0. Summary

- **Five service explainers, one template.** Each service has a **40 s 9:16 master** (Reels, TikTok, Shorts). The **4:5 is a crop of the 9:16 render**, as in the trailer [TR §3.3], so no 4:5 layout has to be designed. The strategy's slate already uses the 40 s length [ST §5]. There is **no separate 16:9 per service**: each service becomes a **48 s segment of one chained « Cinq services » YouTube video**, next quarter [ST §5], with one shared closing (§4.2). Each week renders only what the calendar posts (§11).
- **Structure of every master:** hook (the site's own promise or the buyer's question, set at frame 0) → the SME's problem → what the studio does (site lines only) → **a real example** → how to start → end card.
- **Reading load is now checked, not estimated.** Every block follows the strategy's sequential reading budget, every scene passes a cumulative check of 3 words a second or less, and every block was measured with the site's own fonts in the pipeline's Chromium, in all three languages, inside redesigned bands (§4.1, §4.3; [SF]: all pass, every block fits).
- **"Real example" without anyone's permission.** Each service shows something real the studio made for itself, labelled « Exemple réel »:
  - V11: the studio's own method section (steps 1 and 2) switching to right-to-left Arabic;
  - V12: the studio's own identity, one card re-inked through three of its six themes (all six in the 16:9 segment);
  - V13: the site's own automatic checks, with their real scope;
  - V14: the site's own price comparison, **labelled as compiled from published guides**;
  - V15: the studio's own website audit **only if the owner agrees (S-AUDIT)**; until then a fictional audit structure, labelled « Exemple » with « exemple fictif ».

  Client screens appear only in **variant A**, marked **REQUIRES CLIENT PERMISSION**: V11 and V12 only, FR master only, one client per render. V13 has no variant A.
- **No price in the 9:16 masters.** One master then serves Algeria, France and the Gulf. The 16:9 segments add one indicative range where the site has one: V11 (Essentiel), V12 (identity), V13 (automation).
- **End cards follow the strategy** [ST §3.4]: block A is the wordmark and the label; block B is « Lien en bio » before Gate B, then a call to action plus the pointer. Which call to action V12–V15 carry after Gate B is an **owner decision** (§4.7, Q7).
- **Make V11 (Sites & applications web) first, then V12 (Identité & systèmes visuels)** (§1). V11 takes the strategy's slot (W12, or W10 or W8 under its swap rules); V12–V15 are next-quarter or upgrade items [ST §5, §8.2–8.3].
- **The five other services:** only « Boutique & réservation » (c1) earns a video, and only if the owner promotes it to a card as the audit recommends (option A of [IM] M2). The other four get no video and stay at most a named line (§10).

---

## 1. Which two to make first, and why

| | V11 Sites & applications web | V12 Identité & systèmes visuels | V13 Automatisation & pipelines | V14 Intelligence marché & produit | V15 Stratégie & conseil croissance |
|---|---|---|---|---|---|
| Case on the site | Yes: every project sheet is a site | Yes: Alliance Travel's sheet lists « Identité de marque » [FB §1.6] | None | None | None |
| Real example with no permission | Own trilingual site (method steps 1–2, mirrored) | Own identity system (themes, wordmark, type, contrast rule) | Own site checks (narrowed to what they test); the video pipeline (16:9 only) | Own price comparison, **compiled from published guides** (a sourced output, never shown as a collection run) | Own website audit (**S-AUDIT**); default: a fictional audit structure |
| Buyer fit | The core buyer in all three markets | Algerian and French SMEs checking whether a business looks real [CH §2.1, §3.1] | Competitor analysis: "the three services that sell (sites, web apps, automation)" [GP › The landing page; CA §7] | The audit: "speaks to a different buyer" (« du RGPD ») [IM M2] | The audit: a different buyer (« feuilles de route ») [IM M2] |
| Home page future | Card under every option | Card under option A and option B [IM M2] | Card under B; one line under A | One line under A; merged into automation under B | Folded under A and B |
| Next step exists | Packages (V04–V06) and the Aperçu (V10) | The Studio package includes a documented design system | Moteur includes API integrations and internal tools | Moteur includes market intelligence | None beyond the method |
| Risk | Low | Low (no plates; theme cycle needs the theme loader or falls back to cuts) | Medium: abstract proof; GDPR questions around lead generation (left out) | Medium: the RGPD clause stays off screen until S-LEGAL [ST §5 V14] | Medium: self-audit exposure (S-AUDIT) |

**Decision: V11, then V12.**

1. **Proof.** They are the only two services the site can back with delivered work [FB §1.6], and the only two whose N variant shows the actual service output: a real trilingual site, a real identity system.
2. **Permission-free now.** Both can be rendered and posted in the soft launch (Gate 0 plus Arabic review), with no client asked [ST §7.1].
3. **They sell the offer.** A website is what the Aperçu builds, and identity is part of the Studio package. The buyer who watches them has somewhere to go next (V04–V06, V10).
4. **They survive the home-page decision.** Whatever the owner picks for [IM] M2, web and identity stay full cards. V13–V15 may become one line or merge.
5. **Self-demonstrating.** V12 is an identity video made entirely in the studio's own identity system, and V11's real example is the site's right-to-left mirror, the Gulf lead angle [CH §4.3].
6. **They pay for the template.** The shared build (§4, §11) is done for V11; V12–V15 then add one bespoke beat each, copy and a review.

**Then:** V13 third. It is the one remaining service the competitor analysis calls a seller, and the Moteur package already sells it. V14 and V15 wait for the owner's M2 answer (**S-M2, due by W9**, when the strategy plans the next quarter's slate [ST §8.2 W9]):
- **If M2 option B** (market intelligence merged into automation, strategy folded): merge V13 and V14 into one « Données & automatisation » master. Keep V14's comparison beat as its real example and V13's checks as its second segment in « Cinq services ». Turn V15 into a 4:5 carousel.
- **If option A:** keep V13–V15 as written, in that order.

**Calendar (aligned with the strategy as it now stands):**
- **V11** takes the strategy's slot: **W12** by default; **W10** if Gate B is late (W10's fallback); **W8** under swap rule 4 if Gate B opens later than W6 [ST §8.2, §8.3]. The FR master posts on the Tuesday, the EN cut on the Thursday, the AR cut the following Sunday, the 4:5 on LinkedIn [ST §6.2].
- **The service template is built in the two weeks before V11's slot**: W10–W11 for W12, W8–W9 for W10, W6–W7 for W8 (in that case template C for V04 moves to W4–W5, as the strategy already plans [ST §6.4]). There is **no W0–W1 batch**: W0–W1 already carries the pipeline tooling and template A [ST §6.4, §8.1].
- **V12–V15** are next-quarter items, or a week-between upgrade under swap rule 8 once a template master takes 4 hours or less [ST §8.3]. None has a slot in W1–W12, so none is built in this window.
- The earlier example "W6 if Gate B is late, alongside V16" is withdrawn: W6's fallback is V04 [ST §8.2, §8.3].

---

## 2. Rules these scripts apply

All of [TR §1] applies. In short:
- facts only from the facts bank; do-not-claim list; Aperçu conditions on every mention;
- price wording « env. … HT » / "about … excl. tax" / «نحو … غير شاملة الضريبة» [à relire par un arabophone natif];
- client screens only with permission; French-only screens for France; Gulf "studio based in Algeria", no flags or landmarks;
- no face for the founder; no new generated images, footage or music; determinism rules.

Added for services:

1. **Capabilities, not a track record.** Except for websites and identity, the site has no case for any service [FB §1.6]. Never imply past client projects in V13–V15, and never show a client screen in them. « Exemple réel » labels only the studio's own work, and the label says what the work was (a website audit, a comparison compiled from published guides). Coded mock-ups carry « exemple fictif » / "fictional example" / «مثال افتراضي» [à relire par un arabophone natif] in the frame.
2. **Site lines only.** On-screen copy quotes, trims or plainly restates the service lines (app.js f1–f5) and the package scope lines. Lines dropped from the site's copy, and why:

| Dropped | Where on the site | Why |
|---|---|---|
| The stack and hosting names in the f1 brief and its service pills; any tool list | f1 brief, service pills | Do-not-claim #4, #5 [FB §2.1] |
| The tool list ending f3 and the "powered by" clause of c5 | f3, c5 briefs | They name an AI model: hard rule |
| "Scrapers", "génération de leads" / "lead engines" | f3 brief | Jargon; the Arabic for scrapers and pipelines reads as paint scrapers and water pipes [CO › Arabic]. Collecting leads raises GDPR questions the site does not answer (open question 4) |
| « à 3 h du matin » / "at 3am" | f3 brief | The site's own figure of speech, but it reads as a promise that client tasks run at night. Left out on screen and in captions until the owner answers open question 4 |
| « collectées dans le respect des conditions de chaque site et du RGPD » | f4 brief | A legal-compliance promise, for a service with no delivered case, by a studio with no published legal identity. Off screen and out of captions until **S-LEGAL** (owner and lawyer) [ST §5 V14] |
| « Les données publiques du web » as the subject of V14 | f4 brief | Without the condition clause, a video about collecting web data would show collection without its stated limits. V14 shows the output (a structured, queryable base) instead |
| "Data, not vibes." | f5 EN promise | Slang flagged by the copy audit [FB §1.6 note; CO]. The EN hook renders the French promise plainly: "Data, not impressions." |
| "brutally" (honest) | f5 EN brief | Tone; the FR and AR say « honnêtes » / «بصراحة» [à relire par un arabophone natif] |
| « Scraping » | Moteur scope t3c | Jargon; the line keeps « l'intelligence marché, intégrée à l'application » |
| Shopify | c1 brief | Third-party platform; delivery unconfirmed (only relevant to §10) |
| « du front-end au cloud » | f1 brief | Jargon; adds nothing on screen |

3. **Arabic words to avoid** [CO › Arabic], all [à relire par un arabophone natif]:
   - قمع [à relire par un arabophone natif] (funnel; reads as "repression");
   - استخبارات [à relire par un arabophone natif] (intelligence; reads as "espionage");
   - الأنابيب / كاشطات [à relire par un arabophone natif] (pipelines / scrapers; read as water pipes / paint scrapers);
   - على الهوية [à relire par un arabophone natif] ("on brand"; reads as ID checks).

   The site's own Arabic already avoids them, and these scripts reuse it.
4. **The Aperçu on screen.**
   - **E0 (before Gate B): not at all.** The own-site captures are cropped to method steps 1 and 2 (§4.8), so step 3 and the section's lead (« Entreprise immatriculée ? Vous ne payez rien avant d'avoir vu votre page d'accueil tourner. ») never appear. The strategy's Gate-B fallback would allow step 3 with its conditions [ST §3.4, §4], but at capture scale its condition text is not legible, so these scripts leave it out.
   - **E1 (from Gate B, and G3 for V11):** V11 gets its own Aperçu beat: the headline (SV40) and the **short-form conditions** on screen (SV41), with the full line and « 5 jours ouvrés à réception de vos contenus » in the caption [ST §3.3, §3.4]. V12–V15 show the Aperçu only if the owner adopts the strategy's every-end-card rule (§4.7, Q7); their S5 then becomes the conditions beat.
5. **No URL on screen** [ST §3.4]. The links with their `?ref=` codes go where a platform makes them clickable (§4.7). The trailer's on-screen address is removed in the strategy [ST §5.1], so the earlier open question on this is settled.
6. **Captures of the studio's own site** are limited to method steps 1 and 2 (§4.8). The trailer avoided own-site captures entirely because the hero, title block and founder card carry unbacked lines [TR §3.6]; the strategy now allows `#how` captures with the buttons cropped out [ST §3.3]. The crop here is narrower still.
7. **Prices:** none in the 9:16 masters. In the 16:9 segments they are revealed by a wipe, never counted up [TR §1], always with « fourchette indicative » for the estimator types [FB §1.5]. DA for FR and AR versions, plus € in the FR line (it serves Algeria and France); USD for EN [ST §3.2].
8. **French typography and no-break characters** [BR › French punctuation, Ranges must not wrap apart]. French strings carry U+202F before ? ! ; and inside numbers (`90 000`), U+00A0 before : and before a currency or « HT », U+00A0 inside « », and around a range dash U+00A0, then the en dash, then U+2060 and U+00A0, exactly as the site's dictionaries do. English ranges carry the same dash sequence. `services.json` is the source of truth (Appendix A); the copy lint rejects an ordinary space in any of these positions (§11).
9. **French and Arabic in one frame.** Never, except where the language switch is the subject [ST §3.3]. The strategy's exception covers V11 S3–S4 (here: S4 only). One case needs the owner to extend it (§14): V12's 16:9 type specimen (« Aa » beside «أب» [à relire par un arabophone natif]). The AR master's mirror starts from **English**, never French (§5.2). Variant A, whose permitted client captures are French, exists for the FR master only.
10. **The brand's own bans** [ST §3.3; BR › The logo, The anti-slop sweep]: the wordmark's cursor is a solid block and never blinks; no gradient-filled text; no glow on type; every loop settles; colours only from the theme tokens; text never sits over a capture or a dense engraving, only on a solid theme surface or the plain ground.
11. **Links go to `#how`, never `#services`** (§4.7). On the live page the `#services` cards carry the f1 stack line and pills (React, Next.js, Vite, Tailwind, Vercel), the f3 tool line with a pill that names an AI model, and c5's « propulsés par … » clause naming the same model (index.html:599-600, :621-622, :690). This file does not repeat the name (hard rule). Gate **S-LINK** (§12).

---

## 3. Fact key

Trailer fact IDs reused as they stand [TR §2]:
- F03 (the full conditions line) and F04 (« 5 jours ouvrés » + « à réception de vos contenus »): captions only in these masters;
- F07 (label « Studio web & logiciel · Bordj Bou Arréridj, Algérie »; short place line « Bordj Bou Arréridj, Algérie »);
- F08 (« Demander mon Aperçu → », `prev.cta`; the strategy's one wording for the series [ST §3.2]);
- F09 (« Quelques réalisations » / "Selected projects" / «نماذج من الأعمال» [à relire par un arabophone natif]; an OWNER PREREQUISITE in the trailer);
- F10, F11 (client sector lines; 16:9 variant A only), F12 (package names), F14 (Essentiel prices), F20 (wordmark), F25 (mock-up placeholders), F26 (Glaive badge), F28 (« Un prix avant le devis. »), F29 (motto), F30 (pointer), F33 (« Fourchette indicative, pas un devis. Le prix ferme suit… », captions).

The trailer's F01 is now its V10 hook (« Votre page d'accueil, avant de payer. »); this file's Aperçu headline is SV40.

Line references for app.js are FR / EN / AR. EN and AR scope lines sit 112 and 227 lines after the FR ones, as in [FB §1.5].

| ID | Fact used on screen | Source | FB § | Status |
|---|---|---|---|---|
| SV01 | « Sites & applications web » | `f1.name` app.js:405 / :517 / :632 | 1.6 | OK |
| SV02 | « On dessine votre site de zéro. » (9:16); « Pas de modèle acheté puis maquillé » in the caption | `f1.brief`, last sentence, app.js:406 / :518 / :633 | 1.6 | OK (tool list cut; trimmed) |
| SV03 | « Rapide et bien référencé » (« pensé pour convertir » goes to the caption) | `f1.brief`, first clause, restated | 1.6 | OK (restated) |
| SV04 | « En arabe, de droite à gauche. »; the right-to-left mirror; « Ce site même est trilingue, avec une expérience arabe (RTL) pensée nativement. » (16:9) | `hero.title` app.js:21 / :119 / :220; `faq3.a` app.js:88 / :186 / :287 | 1.1, 1.8 | OK |
| SV05 | « Ou une application web sur mesure » | Moteur scope `price.t3a` app.js:372 / :484 / :599; `price.t3for` | 1.5 | OK (restated) |
| SV06 | Hook « Votre site ne vous ressemble plus ? » | [CH §1.7] H3, from the outreach kit P1, restated; [ST §3.2] | — | OK (a question; no claim) |
| SV07 | « Trois formules, un prix avant le devis. »; tab names Essentiel · Studio · Moteur | package names app.js:357-375 (F12); `price.title` app.js:353 / :465 / :580 (F28) | 1.5 | OK |
| SV08 | « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs » (16:9) | `price.t1b` app.js:359 / :471 / :586 | 1.5 | OK |
| SV09 | « Responsive, performance et SEO de base » (16:9 FR) | `price.t1c` app.js:360 / :472 / :587 | 1.5 | OK |
| SV10 | « Identité & systèmes visuels » · « La confiance avant le premier mot. » | `f2.name`, `f2.promise` app.js:407 / :519 / :634 | 1.6 | OK |
| SV11 | « L'allure d'une maison établie. »; « Logo, couleurs, typographie, animation »; « Une charte documentée, prête à l'emploi » | `f2.brief` app.js:408 / :520 / :635, split and trimmed | 1.6 | OK (trimmed) |
| SV12 | « Dans la formule Studio : un design system documenté. » | `price.t2c` app.js:365 / :477 / :592 | 1.5 | OK |
| SV13 | Six themes on one token contract; « Six thèmes, un seul système. »; « Chaque paire texte–fond passe le contraste WCAG AA. »; theme names (9:16) and two accent tokens each (16:9 only) | [TH]:1-12 (one block per theme, the same tokens), :23-170; the contract check `scripts/themes-check.mjs` | 3.5 | OK (the studio's own system) |
| SV14 | Wordmark « Numidea Labs »; faces Cinzel, Geist, IBM Plex Sans Arabic. The wordmark takes each theme's own logo tokens: Cinzel 700 .04em in Arcanum, Geist with negative tracking in the other five | index.html:1256; styles.css:43, :139-142; [TH]:43, :68, :93, :117, :143, :167; `assets/fonts/OFL.txt` | 3.3, 3.4 | OK |
| SV15 | « Nos règles de marque, documentées : thèmes, typographie, mouvement » (16:9) | `BRAND.md`: a working document titled « Numidea Labs — Themes » that records the themes, the fonts and the motion rules (with history and CSS notes). It is not a polished brand book, and the plates are generated images the studio cannot make more of (BRAND.md:1155, :1213-1217) | task brief; 3.1 | OK as worded. Never « charte » for BRAND.md, never « planches illustrées » as a deliverable |
| SV16 | Identity: env. 90 000 –⁠ 180 000 DA HT · env. 600 –⁠ 1 200 € HT · about $670 –⁠ 1,300 excl. tax · 2 à 5 semaines | `PRICE_MODEL.identite` app.js:685; conversion app.js:1707 | 1.5 | OK + « fourchette indicative » (16:9 only) |
| SV17 | « Automatisation & pipelines » · « Supprimez la corvée. » | `f3.name`, `f3.promise` app.js:409 / :521 / :637 | 1.6 | OK |
| SV18 | « Le travail répétitif et fragile (qui dévore vos heures) : on le fait tourner seul. »; nouns « automatisations, pipelines de données, outils internes » | `f3.brief` app.js:410 / :522 / :637 | 1.6 | OK (scrapers, leads, « à 3 h du matin » and the tool list cut) |
| SV19 | « Une tâche répétitive se lance en un clic. » | `c5.brief`, trimmed, app.js:425 / :537 / :652 | 1.6 | OK (model name cut) |
| SV20 | « Intégrations API et outils internes » (Moteur) | `price.t3d` app.js:375 / :487 / :602 | 1.5 | OK |
| SV21 | Automation: env. 140 000 –⁠ 420 000 DA HT · env. 930 –⁠ 2 800 € HT · about $1,000 –⁠ 3,100 excl. tax (2 à 6 semaines · 3 flux inclus in the description) | `PRICE_MODEL.auto` app.js:684 | 1.5 | OK + « fourchette indicative » (16:9 only) |
| SV22 | The site's own checks, **with their exact scope**: K1 « Chaque texte du site principal, en trois langues » (check 1: every key of the main site's dictionaries exists in fr, en and ar; `workspacehq/` is English-only and not covered); K2 « Chaque lien interne mène à sa cible » (checks 3 and 8: local files exist, `#fragment` links land); K3 « Chaque tarif de formule, d'une seule grille » (check 8c: tier and maintenance figures equal `PRICE_MODEL`/`RETAINER`; the market table and the typed day rate are not covered) | `scripts/check.mjs:5-40` (labels 1, 3, 8, 8c) | **not in FB** | **NEW: add to FB §1 with these exact scopes before rendering (G8)**. The Western-digits and no-result-figure checks (8f, 5c) are no longer on screen |
| SV23 | This video pipeline: rendered frame by frame, then checked automatically: colour and frame timing **on a sample frame** (frame 45), fonts loaded, captions inside the safe area (**today on the last frame only, against a box that reaches y 1440**) | [PL §2] checks 3, 4, 5, 6; `pipeline/render.mjs:161-163`; `runtime/scene.js:24` | **not in FB** | **NEW: add to FB §1 with these scopes (G8).** The « Zone lisible » chip waits for **S-SAFE** (§12). No "every frame" claim |
| SV24 | « Intelligence marché & produit » · « Voir le marché clairement. » | `f4.name`, `f4.promise` app.js:411 / :523 / :638 | 1.6 | OK |
| SV25 | « Une base exploitable, structurée, interrogeable. »; « Veille concurrentielle, suivi des prix et des catalogues » | `f4.brief` app.js:412 / :524 / :639, restated and trimmed | 1.6 | OK. **The condition clause is off screen and out of captions until S-LEGAL** [ST §5 V14] |
| SV26 | The market comparison, **labelled with its method**: « Notre comparatif » + « Compilé d'après des guides publiés »; 9:16: the « Vitrine » row for Algeria and France; 16:9: the « Vitrine » row for three markets as bars on one log scale with « Échelle logarithmique · convertis au taux officiel, début octobre 2026 »; the full table and the named sources in the caption and description | `mk.p` app.js:321 / :433 / :548; `mk.method` app.js:329 / :441 / :556; `MARKET` app.js:2500-2506; sources index.html:976-983; [BR › Visualisations] (log scale said in the caption) | 1.5 | OK + method on screen + sources in the caption. Compiled by hand from about nine published guides, never shown as an automated collection. The Numidea column is left out |
| SV27 | « Dans la formule Moteur : l'intelligence marché, intégrée à l'application. » | `price.t3c` app.js:374 / :486 / :601, restated | 1.5 | OK (« Scraping » cut) |
| SV28 | « Stratégie & conseil croissance » · « De la donnée, pas des impressions. » (EN: "Data, not impressions.") | `f5.name`, `f5.promise` app.js:413 / :525 / :640 | 1.6 + note | OK (EN restated from the FR promise) |
| SV29 | « Audits marketing, tunnels de vente » · « Positionnement, feuilles de route » (16:9: « Audits marketing complets, analyse des tunnels de vente » · « Positionnement concurrentiel, feuilles de route » · « Honnêtes, ROI d'abord, par phases. ») · « On étudie votre secteur avant le premier appel. » | `f5.brief` app.js:414 / :526 / :641 | 1.6 | OK (trimmed) |
| SV30 | **An audit of the studio's own website (copy and UX)**: five lenses; each finding re-checked, 54 of 55 kept; verdicts cut / merge / add / fix; who acts (done without asking / owner decision / owner facts) | [IM]:11-19 | **not in FB** | **OWNER (S-AUDIT, §12)**. It was a website copy and UX audit (the site's audit and content-audit workflow), not a marketing or strategy engagement, so it is labelled as such. **How the re-checks were done is for the owner to confirm before any wording implies people**; no "sceptic" or reviewer persona appears |
| SV31 | Method steps 1–2: « Vous décrivez le projet — deux minutes … » · « On revient sous 24 h ouvrées ; le prix ferme suit, une fois le périmètre cadré ensemble. » | `price.ob1h/ob1p`, `price.ob2h/ob2p` app.js:394-395 / :506-507 / :621-622 | 1.4 | OK (restated, **with the scoping condition**) |
| SV32 | « Décrire mon projet → » | `price.obCta1` app.js:398 / :510 / :625 | — | OK; invites a message, so **Gate B** |
| SV33 | « Réponse sous 24 h ouvrées » | app.js:24 / :122 / :223 | 1.7 | OK (a first reply, nothing more). On screen only in SB1 (V15); captions otherwise |
| SV34 | Pointer « Lien en bio » / "Link in bio" / «الرابط في الملف التعريفي» [à relire par un arabophone natif]; « Lien en commentaire » (LinkedIn); none in 16:9 | [ST §3.4]; F30 | — | OK (label) |
| SV35 | Labels « Exemple réel » / « Exemple » and « exemple fictif » | this file | — | Labels, not facts. « Exemple réel » only on the studio's own work, and the line beside it says what the work was |
| SV36 | Card benefits, trimmed for 9:16: Bordj Steel « Un acheteur trouve la bonne gamme et sa fiche technique sans appeler. »; Alliance « Un voyageur estime son budget et envoie sa demande sur WhatsApp. » | `proj4.gain`, `proj2.gain` app.js:42 / :140 / :241 (restated) | 1.9 | **OWNER: REQUIRES CLIENT PERMISSION** (Gate C) |
| SV37 | Alliance identity: « Identité, site et parcours de réservation »; « Identité · site trilingue · mode clair et sombre »; palette and fonts | `scripts/scene-data.mjs:117-124`, :155 / :161 / :167, :157 / :163 / :169 | 1.9 | **OWNER: REQUIRES CLIENT PERMISSION** + relationship wording |
| SV38 | Alliance booking file sent on WhatsApp | `scene-data.mjs:130-151` (gain 2) | 1.9 | **Not used.** It is a website feature, not an automation project (the V13 swap that used it is deleted, §7.1) |
| SV39 | Glaive: « une marque de matériel gaming inventée de A à Z » + badge (F26), `work/glaive/d4.webp` (quiz) only | `scene-data.mjs:226` / :232 / :238; kit `campaign-readme.md:242` | 1.9 | OK + badge in frame for the whole hold + its own header (16:9 AR and EN segments only) |
| SV40 | « Voyez votre page d'accueil avant de payer. » / "See your homepage before you pay." / «شاهد صفحتك الرئيسية قبل أن تدفع.» [à relire par un arabophone natif] | index.html:26, :33 (share-card title); [ST §3.2] H1 | 1.3 | **Gate B + G3**, V11 E1 only |
| SV41 | Short-form conditions: « Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. » (EN and AR restated) | [ST §3.4]; index.html:34 | 1.3 | OK where a scene cannot hold the full line; the full line (F03) and F04 go in the caption |
| SV42 | Label (F07); short place line (F07 short) on E1 cards of V12–V15; motto (F29) optional, omitted in 9:16 for lack of time | `hero.eyebrow` app.js:20 / :118 / :219; `tb.place`; `footer.tag` app.js:110 / :208 / :309 | 1.1 | OK |
| SV43 | « Ce site même est trilingue. » (`fr-strict` only) | `faq3.a` app.js:88, trimmed | 1.8 | OK |

---

## 4. The shared template

### 4.1 Formats, time grid and reading rules

| Output | Canvas | Length | Use |
|---|---|---|---|
| 9:16 master | 1080×1920, 30 fps | 40.00 s (1200 frames) | Reels, Facebook Reels, TikTok, Shorts, Stories (a `story=1` render keeps y 1250–1450 empty for the link sticker [TR §3.3]). Not WhatsApp Status: 40 s is above its 15–30 s target [CH §1.5]; Status gets a still (§11) |
| 4:5 | 1080×1350 | 40.00 s | **A crop of the 9:16 render**, window y 90–1440 (`crop=1080:1350:0:90`) [TR §3.3]: the 9:16 text band lands at y 200–1150. LinkedIn (FR, with `pointer=li`), Instagram and Facebook feed |
| 16:9 segment | 1920×1080, 30 fps | 48.00 s per service (C1–C3) | Chained into « Cinq services » (next quarter), with one shared closing of 19.33 s (§4.2). Not uploaded per service by default (§13 Q14) |

- Music at 90 BPM: one beat is 0.667 s (20 frames), one bar 2.667 s. Scene boundaries fall on a beat; every text entrance falls on a half-beat (10 frames) [TR §3.1]. All five videos keep 90 BPM, including the Engineering-themed V13 (the music brief suggests 96 BPM for that theme [MU §5.3]; open question 10).
- **Reading rules** (the lint enforces all of them [SF]):
  1. **Hook:** 6 words or fewer, fully set at frame 0, alone until its budget ends.
  2. **Sequential budget** [ST §3.3]: each block gets 0.35 s per word + 1 s, counted on the longest of the three languages, **before the next block enters**, and stays on screen at least that long.
  3. **Cumulative check** (new): at every text entrance after a scene's first and at the scene's end, the words that entered since the scene started, **picture text included**, divided by the time elapsed, must be 3 a second or less.
  4. **Picture text** (tab names, chips, placeholders, column heads, the Glaive badge) enters with its picture and gets no slot of its own, but it counts in rule 3. A picture label that opens a scene enters with the scene's first text block.
  5. **Small print:** at least 44 px in 9:16 and 56 px in 16:9, held at least 3 s, repeated in the caption.
  6. **One block at a time in the line band** (§4.3): the outgoing block rises and fades in 0.33 s as the next one lands, so at most two are visible, and only during that handover.
- **Result:** every 9:16 master and variant passes rules 1–6 (`lint.out`), and so does every 16:9 segment and the shared closing (`lint16.out`). The scene tables give each block's budget and each scene's word load.

### 4.2 Scene skeleton

**9:16 master (40 s).** Most videos use the base grid; the rows note where one moves.

| Scene | Base time | Frames | Beats | Job | Moves |
|---|---|---|---|---|---|
| S1 Hook | 0.00–2.67 | 0–79 | 0–4 | The service's glyph draws itself; the hook is already set at f0 | — |
| S2 Problem | 2.67–8.00 | 80–239 | 4–12 | One site line and a coded "before → after" | — |
| S3 What we do | 8.00–17.33 | 240–519 | 12–26 | Service name as header; two lines, one at a time | V14 ends 16.00; V15 ends 16.67 |
| S4 Real example | 17.33–28.00 | 520–839 | 26–42 | A real asset (N) or one client (A), labelled | V14 from 16.00; V15 from 16.67; V11 E1 ends 24.00 |
| S5 How to start | 28.00–33.33 | 840–999 | 42–50 | One line: the package line, or the method (V15) | V11 E1: the Aperçu beat 24.00–32.67 |
| S6 End card | 33.33–40.00 | 1000–1199 | 50–60 | Block A (wordmark + label), block B (pointer, or CTA + pointer) | V11 E1: 32.67–40.00 |

**16:9 segment (48 s per service), chapters inside « Cinq services »:**

| Chapter | Time in the segment | Kicker on screen (site kicker style, Geist Mono) |
|---|---|---|
| C1 | 0.00–12.00 | « 01 — Le problème » / "01 — The problem" / «01 — المشكلة» [à relire par un arabophone natif] |
| C2 | 12.00–28.00 | « 02 — Ce que nous faisons » / "02 — What we do" / «02 — ما نقدّمه» [à relire par un arabophone natif] |
| C3 | 28.00–48.00 | « 03 — Exemple » / "03 — Example" / «03 — مثال» [à relire par un arabophone natif] (the header inside says whether it is real) |

**Shared closing, once at the end of « Cinq services » (19.33 s):** C4 « Pour commencer » 0.00–12.67 (M1 @0.00, M2 @5.33; four-step glyph row), end card 12.67–19.33. YouTube chapters (if all five segments run): 0:00 Sites & applications web · 0:48 Identité & systèmes visuels · 1:36 Automatisation & pipelines · 2:24 Intelligence marché & produit · 3:12 Stratégie & conseil croissance · 4:00 Pour commencer. Every chapter is at least 10 s, the first at 00:00 [CH §1.2]. Total about 4 min 19 s.

**Shared blocks:**

| Key | FR | AR | EN | Source |
|---|---|---|---|---|
| SB1 (V15 S5) | « Vous décrivez le projet : réponse sous 24 h ouvrées. » (9 w, 4.15 s) | «تصف المشروع، ثم نردّ خلال 24 ساعة عمل.» [à relire par un arabophone natif] | "Your brief, then our reply within 24 working hours." | SV31, SV33 (restated) |
| M1 (shared closing) | « 1 · Vous décrivez le projet : deux minutes, en français, anglais ou arabe. » | «1 · تصف المشروع: دقيقتان، بالعربية أو الفرنسية أو الإنجليزية.» [à relire par un arabophone natif] | "1 · You describe the project: two minutes, in English, French or Arabic." | SV31 |
| M2 (shared closing) | « 2 · On revient sous 24 h ouvrées ; le prix ferme suit, une fois le périmètre cadré ensemble. » | «2 · نعود إليك خلال 24 ساعة عمل، ثم السعر النهائي بمجرّد أن نتّفق معاً على النطاق.» [à relire par un arabophone natif] (restates the site's «بمجرّد أن نتّفق معاً على هذا النطاق» [à relire par un arabophone natif]) | "2 · We reply within 24 working hours; the firm price follows once the scope is agreed together." | SV31 (with the site's condition « dès que le cadrage est validé ensemble ») |
| LABEL (block A) | « Studio web & logiciel · Bordj Bou Arréridj, Algérie » | «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [à relire par un arabophone natif] | "Web & software studio · Bordj Bou Arréridj, Algeria" | F07, SV42 |
| PLACE (block A, E1 of V12–V15) | « Bordj Bou Arréridj, Algérie » | «برج بوعريريج، الجزائر» [à relire par un arabophone natif] | "Bordj Bou Arréridj, Algeria" | F07 short, SV42 |
| E0 pointer | « Lien en bio »; LinkedIn « Lien en commentaire »; 16:9 none | «الرابط في الملف التعريفي» [à relire par un arabophone natif] | "Link in bio" | SV34, F30 |
| E1a (V11) | « Demander mon Aperçu → » | «اطلب معاينتك ←» [à relire par un arabophone natif] | "Request my Preview →" | F08 |
| E1b (V12–V15, default) | « Décrire mon projet → » | «صِف لنا مشروعك ←» [à relire par un arabophone natif] | "Describe my project →" | SV32 |
| LR (label) | « Exemple réel » | «مثال حقيقي» [à relire par un arabophone natif] | "Real example" | SV35 |
| LX (label) | « Exemple » | «مثال» [à relire par un arabophone natif] | "Example" | SV35 |
| LF (chip) | « exemple fictif » | «مثال افتراضي» [à relire par un arabophone natif] | "fictional example" | SV35 |

### 4.3 Layout bands, type sizes and measured fits

**9:16: one text box for every language, x 140–940, y 290–1240** (800 px wide), Arabic right-aligned in the same box [ST §3.3; TR §3.3]. Below y 1240 and above y 290: decoration only. The earlier bands (a 340 px checklist that held accumulating lists, a 140 px S4 header) did not fit the copy and are replaced:

| Band | y | Holds | Type (Latin · Arabic, +12%, line-height 1.5, never letter-spaced) |
|---|---|---|---|
| **S1 hook** | 380–760 | The hook, alone | Cinzel 700 .01em, line-height 1.1, 84–120 px, ≤ 3 lines · Plex Arabic 700, 94–134 px, ≤ 3 lines |
| **H** header | 290–480 | S2: the hook at header size; S3: the service name; S4: kicker + one short line | Header: Cinzel 700, 56–80 px, ≤ 2 lines · 63–90 px, ≤ 2 lines. Kicker: Geist Mono 500 .06em, 44–48 px, 1 line · Plex 600, 50–54 px. S4 line: Geist 600, 60–72 px, **1 line** · Plex 700, 67–70 px, 1 line; kicker and line 8 px apart |
| **V** visual | 500–940 | Mock-up, diagram, table, browser frame (≤ 704 × 440), lens cards | Picture text: Geist Mono 500, 44–48 px · Plex 600, 50–54 px |
| **L** line band | 960–1240 | **One block at a time**: a line, a check, a benefit, or small print, with a drawn tick at its reading-start edge where it is a list item | Line: Geist 600, 60–72 px, ≤ 3 lines · Plex 600, 67–80 px, ≤ 2 lines. Small print: Geist 500, 44–52 px, line-height 1.3, ≤ 4 lines · Plex 600, 50–58 px, ≤ 3 lines |
| **S6** end card | 290–1240 | Wordmark 88 px (≈ 721 px wide with the cursor), label, pointer or button | Label: Geist 500, 46–56 px, ≤ 2 lines · Plex 600, 52–62 px. Pointer: 46–52 px · 52–58 px. Button label: Geist 600, 44–52 px · Plex 700, 50–56 px |

Nothing goes below 60 px for a line a viewer must read, nor below 44 px for small print [CH §1.3].

**Measured** on 2026-10-26 in the pipeline's Chromium (headless shell 1194) with the site's own woff2 faces at commit `ecf48bb`: 277 9:16 blocks in FR, EN and AR, **all fit** ([SF] `fit916.out`). Highlights:
- Hooks: FR 95–120 px (V11 95 px, 3 lines, 314 px); EN 111–120 px; AR 112–126 px, 2 lines.
- S2 header (the hook re-set): FR/EN 73–80 px, 2 lines, ≤ 176 px; AR 63–90 px; V11's Arabic hook needs 2 lines at 63 px, 189 px of the 190 px band (the tightest fit in the file).
- S3 headers: « Identité & systèmes visuels » 80 px, 2 lines, 176 px (AR 86 px, 1 line); all others the same or smaller.
- S4: kicker 48 px (58 px tall) + 8 px + one line at 72 px (83 px): 149 px. Arabic: kicker 50 px (75 px) + 8 px + one line, which fits one line at 72 px but is **capped at 70 px** (105 px) so the stack stays at 188 px inside the 190 px band.
- Lines: every Latin line fits ≤ 3 lines at 64–72 px (≤ 259 px); every Arabic line ≤ 2 lines at 67–80 px (≤ 240 px).
- Small print: V11's conditions (SV41) 52 px, 3 lines, 203 px (AR 58 px, 2 lines, 174 px); V14's method line 52 px.
- V14 table (FR/EN): row title 52 px; lane names 52 px; ranges in Geist Mono 700 tabular at 64 px, one line each: 376 px with the gaps, in the 440 px band. Arabic, if a real-table AR cut is ever made: the row title moves into the S4 line («مقارنتنا: الموقع التعريفي» [à relire par un arabophone natif], 72 px, 1 line) and the two rows stack in 400 px.
- V15 lens cards (350 px wide each, 2 × 3 grid): 52 px, 1 line (AR 53–58 px).
- End card: label FR/EN 56 px, 2 lines, 140 px (AR 56 px, 168 px); short place line 56 px, 1 line; button labels 52 px (AR 56 px).

**4:5:** the crop window y 90–1440 contains the whole box; no separate layout.

**16:9:** text column x 120–900 (780 px), visual column x 960–1800 (840 px); Arabic mirrors the columns (text x 1020–1800, visual x 120–960) but never the captures or artwork. Text y 80–960 (the bottom 120 px stay free for the player). Full-width rows (prices, M1, M2, the label) x 120–1800. **Frames in the visual column are at most 820 px wide** (a browser frame 820 × 512). **Sizes** [ST §3.3: ≥ 56 px for any text that must be read]: hook Cinzel 700, 76–96 px, ≤ 3 lines; header Cinzel 700, 56–72 px, ≤ 2 lines; kicker Geist Mono 500, 56 px; body Geist 600, 56–64 px, ≤ 3 lines; full-width rows Geist 600, 56–64 px, ≤ 2 lines; small print Geist 500, 56–60 px; chips Geist Mono 56 px; label 56–64 px; Arabic +12% (63 px and up), line-height 1.5. Conditions, if ever shown in 16:9: ≥ 64 px. **Measured:** 211 16:9 blocks, all fit ([SF] `fit16.out`); the longest are V11's W2 (61–64 px, 3 lines; AR 72 px, 3 lines, 324 px) and the price rows (61–64 px, 2 lines; AR 72 px, 2 lines). The text column holds the header and at most two body blocks; in Arabic, when a third would overflow, the oldest leaves first (the per-scene safe check decides, §11).

### 4.4 Components

Reused from [TR §3.4]: plate reveal, captions, blueprint draw, mock-up (no mirror in these masters), Aperçu timeline (V11 E1), ink wipe (with the loader below), browser frame (blank address bar), price card (wipe-in only, 16:9), end card, fit-text, safe-area check, music bed.

New for services:

| Component | What it does | Notes |
|---|---|---|
| **Service glyph** | The service's own 24×24 icon from the site, scaled to 360 px (520 px in 16:9). Each stroked path carries `pathLength="1"` and draws in by stroke-dashoffset on the clock (the `.ai` grammar, BRAND.md "Animated icons"). One idle cycle, then still | Paths copied verbatim from index.html: f1 :594 (browser window), f2 :605 (three circles), f3 :616 (three linked nodes), f4 :627 (target with crosshair), f5 :638 (rising line with arrow). **`vector-effect: non-scaling-stroke` at 3.5 px** (the blueprint's 3 px weight, the brand's hairline drafting language), not a stroke that scales with the icon (that gave 22.5 px at 360 px against the site's 1.5 px at 26 px, styles.css:794-795). Coded, owned by the studio, nothing generated |
| **Line band** | One block at a time in L (§4.3). A list item gets a drawn tick at its reading-start edge (the glyph's stroke grammar); the visual above keeps the accumulation (nodes light, phases fill, the card builds) | Ticks are drawn, never an emoji |
| **Before → after** | S2's coded metaphor per service: a template repainted three times, then wiped for the blueprint (V11); four mismatched pieces snapping into one system (V12); rows ticked by hand, then swept by one pipeline line (V13; **no clock**); blank tags flying into a table (V14); a contour terrain crossed by a survey line (V15) | Abstract grey shapes and placeholders only; no invented brand, no fake data, no trend |
| **Theme loader** (for the ink wipe) | At `ready()`, fetch `/site/themes.css` and insert an in-memory constructed stylesheet with every `:root[data-theme="x"]` rewritten to `[data-theme="x"]`, so a layer can carry its own theme. The tokens are still read live from the site and nothing is written to disk [TR §3.4, technique (a)] | Needed because every token block is scoped to `:root[data-theme=…]` ([TH]:23, :49, :74, :99, :123, :149) and the pipeline sets the theme once on the root (`runtime/scene.js:61-66`): a `data-theme` on an inner layer resolves nothing. **Gate S-THEME** (§12): before any use, prove one wipe frame by frame: the two layers resolve different `--void`; `--font-logo` changes on the layer (Cinzel in Arcanum, Geist in the others); any plate mask on the layer re-inks; the determinism check passes (7 frames, identical hashes). **Fallback:** cuts on the beat, never a two-theme frame |
| **Theme cycle** (V12) | One card re-inked: 9:16 three themes (Arcanum, Daylight, Noir), about 2.5 s each; 16:9 all six, 2.0 s each. Chips: the theme name only in 9:16; name and two accent tokens in 16:9 | The card holds the wordmark, a heading, a primary button and the f2 glyph (no plate: [ST §5 V12]). The wordmark follows each theme's logo tokens as the site does (SV14). Fallback (S-THEME not met): hard cuts on the beat, one per theme |
| **Market row** (V14, 9:16) | One project type (« Site vitrine ») as two labelled lanes (Algérie, France) with their ranges, wiped in lane by lane. No bars, so no scale to explain | Data from `MARKET` (app.js:2500-2506). Ranges in Geist Mono 700, tabular, ≥ 52 px (measured 64 px), with the no-break characters of rule 8 |
| **Market bars** (V14, 16:9) | The same row for three markets as bars on one **logarithmic** scale, amounts converted to one currency for the drawing, labels in each market's native currency; the small-print line says « Échelle logarithmique · convertis au taux officiel, début octobre 2026 » | The site's own chart method [BR › Visualisations]: the market caption says the scale is logarithmic. The full five-row table goes in the description, not on screen |
| **Audit board** (V15) | Five lens cards; verdict tags dropping onto grey rows; in 16:9 also three "who acts" columns | No item text from the real backlog is ever legible (only tags and grey bars) |
| **Own-site capture frame** (V11) | The browser frame (blank address bar) holding the desktop capture of steps 1–2; the capture wipes in the reading direction to its Arabic twin; then the frame steps aside at 60% and a phone-width card with the phone capture slides in beside it | Replaces the earlier phone frame, which could not be phone-shaped inside the visual band. Captures per §4.8 |

### 4.5 Theme, plate and glyph per video

Plates and textures depend on gate G6; each has the coded fallback in [TR §3.6]. **Rules:** text never sits over an engraving or texture (they stay outside the H and L bands, or in the decoration zone below y 1240); no raster is shown above 1.0× its source size; the `px-*` textures (1400–1600 × 594–679) are used as bands, never as full-frame grounds.

| Video | Base theme | Theme changes | Plates and textures | Glyph |
|---|---|---|---|---|
| V11 Sites | Arcanum | **None** (Arcanum throughout, so V11 needs no ink wipe) | `px-plan.webp` as a band in the decoration zone (y 1260–1640) at 10%, S1; `coin-horse` + `coin-palm` in S5 at ≤ 320 px (their source size); `lighthouse.webp` (1100 px) in the decoration zone of the end card | f1 |
| V12 Identité | Arcanum | S4 cycle (S-THEME, or cuts) and back to Arcanum at S5 | **None** [ST §5 V12]: the coins and `hub-design.png` are removed | f2 |
| V13 Automatisation | Engineering (32 px drafting grid) | To Arcanum at S5 (wipe once S-THEME passes; a cut on the beat until then) | `strata.webp` (1100×462) as a band under the rows in S2, its core-sample motion once | f3 |
| V14 Intelligence marché | Daylight (paper, ink, ochre, deep teal) | To Arcanum at S5, as V13 | `px-stars.webp` as a band at 8% in S1; `px-contour.webp` (1400×594) as a band behind S2's tags | f4 |
| V15 Stratégie | Noir | To Arcanum at S5, as V13 | `px-contour.webp` band (terrain) in S2; `faq1.png` (the schedule grid) in S3 at ≤ 512 px, its source size | f5 |

**Never used:**
- `coin-king.webp` and `faq6.png` [TR §3.6];
- `bench.webp` (no founder beat here);
- `arch.webp` behind any text, and `hub-design.png` (a figure from the founder's artist page; BRAND says the hub is not the studio [BR › hub/]);
- any plate in V12;
- every client file in N variants;
- AlmaFlowClim files, and the unconfirmed project's files [FB §2.1 #6];
- `og.jpg`;
- `work/alliance/m2.webp`, `d2.webp`, `d4.webp` (client DA prices on screen: « 129.000 DA », « Book · 258 000 DA », « 419.000 DA »; m2 is mostly French despite its English toggle), `work/alliance/d1.webp`, `d3.webp` (« Operating since 2019 · 1,200+ files processed »: a client figure), `m1`;
- `work/glaive/d1.webp`, `d2.webp`, `d3.webp` (ratings and review counts « ★ 4.8 (540) », « 4.9 · 212 reviews », « BEST SELLER », « SAVE 14% »);
- any capture of the hero, title block, proof band, founder card, services, stack section or work cards of the studio's own site (§4.8);
- the WorkspaceHQ trailer audio [MU §6].

No scene depends on a plate to carry meaning.

### 4.6 Music

Code-made bed, D minor, 90 BPM [MU §5.2]. Shade per theme [MU §5.3]:
- **Noir:** pad filter lower, heartbeat louder, fewer chimes.
- **Daylight:** D Dorian, brighter pad.
- **Engineering:** ticks in front, short chimes.

Loudness: −14 LUFS for the social and YouTube masters, true peak ≤ −1 dBTP on the encoded file, loudness range ≤ 4 LU [MU §4.5]. Every message must work with the sound off.

**One cue file per video, length and end state, generated from `services.json`** (the block entry times), not one hand-made map: the text-entrance ticks, the mirror chime, V12's wipe ticks and V13's hand-ticks differ from video to video, and E0 and E1 differ. This needs `--cues` and per-length chord maps in `bed.mjs`, which the strategy budgets in the W0–W1 pipeline tooling [ST §6.4]; until they exist, the services render with the pipeline's silent track.

**9:16, 40 s, base events** (the generator moves them with the scene boundaries):

| Time | Beat | Event |
|---|---|---|
| 0.00 | 0 | Chime D; pad at full level (fade-in ≤ 50 ms); burin ticks on 16ths while the glyph draws |
| 2.67 | 4 | Accent tick (hook → header) |
| 5.33 | 8 | Chime on the S2 "after" moment (the wipe, snap, sweep or fly-in); chord B♭maj7 |
| 8.00 | 12 | Accent tick (header changes) |
| Each text entrance | — | Soft tick (none under a price, a condition or the terms) |
| 10.67 | 16 | Chord Fmaj9 |
| 16.00 | 24 | Chord Csus2 |
| S4 start | 26 (V14 24, V15 25) | Chime (the real example); S4 theme shade |
| 20.67 | 31 | V11 only: chime on the right-to-left wipe |
| 21.33 | 32 | Chord Dm |
| 26.67 | 40 | Chord B♭maj7 |
| 28.00 | 42 | Accent tick; **tick layer mutes**; the pad holds under any price, condition or terms |
| 30.67 | 46 | Chord Csus2 |
| 33.33 | 50 | Chime (lighthouse beam or end card) |
| 34.00 | 51 | **Sting:** frame-drum stroke, then D + A chimes [MU §5.4] |
| 38.80–40.00 | — | Audio fade; the picture holds its last frame (no visual fade) |

**V11 E1:** frame-drum stroke under the « 0 » at **26.67**, one second before the conditions enter at 27.67; no cue at all from 27.67 to 32.67; end-card chime 32.67, sting 33.33.
**V12 S4:** one soft tick per theme change and a single chime on the last state, so the chime density stays low [MU §4.5].
**16:9 segments:** chords every 8 beats; a chime and a layer change at each chapter (12.00, 28.00); the closing's sting on the end card's first beat; fade over the last 1.2 s.

### 4.7 End cards, calls to action, links and `?ref=` codes

**End cards follow [ST §3.4]:** block A is the wordmark (rebuilt in code, solid cursor, always left to right) with the label; block B is the pointer, or after Gate B the call to action plus the pointer. No URL, no email, no code on screen. The motto is optional and is omitted in 9:16 (no time); 16:9 may add it under the label when the card is held 7 s or more.

| State | When | V11 | V12–V15 |
|---|---|---|---|
| **E0** | From Gate 0 (soft launch) | S5: « Trois formules, un prix avant le devis. »; S6: wordmark + LABEL @33.33, pointer @37.00 | S5: the package line (V15: SB1); S6 as V11 |
| **E1** (default of this file) | From Gate B [ST §7.1] (and G3 for V11) | S4 shortened to frame 1; S5: the Aperçu beat (SV40 + SV41); S6: wordmark + LABEL @32.67, button « Demander mon Aperçu → » + pointer @36.33 | S5 unchanged; S6: wordmark + PLACE @33.33, button « Décrire mon projet → » + pointer @36.00; « Réponse sous 24 h ouvrées » in the caption |
| **E1-ap** (only if the owner adopts the strategy's every-end-card rule) | From Gate B, after S-END | as E1 | S5 becomes the conditions beat (SV41 @28.33, 4.85 s); S6: wordmark + PLACE, button « Demander mon Aperçu → » + pointer @36.00. Note: V12–V15 never say what the Aperçu is on screen; the caption must |
| **16:9 closing** | Next quarter | — | Block A only before Gate B (no pointer: the description and end screen carry the link [ST §3.4; PK §1.6]); after Gate B the call to action of the owner's end-card rule |

**Which rule after Gate B is an owner decision (S-END, Q7).** The strategy puts the Aperçu call to action, after a conditions beat, on every end card [ST §4, §7.2]; this file keeps the Aperçu to V11 because the Aperçu is a homepage and which services get one is undecided [FB §1.3]. Both states are scripted and both pass the lint; once the owner picks, the other document follows.

**Codes** [CH §1.8; ST §10.2]: `{market}-{platform}-{lang}-sv{slug}`, plus `n` for the N variant of V11 and V12 (A and N are then comparable after 8 weeks). Slugs: `web` (V11), `id` (V12), `auto` (V13), `intel` (V14), `strat` (V15); `sv5` for « Cinq services ». The longest, `yt-ys-ar-svintel` or `yt-ys-ar-svstrat`, has 16 characters, inside the site's 20-character cut (app.js `refTag()`).

| Placement | Clickable? | Code | Link (base `https://brvetr4ve1er.github.io/Numidea.tech/` until the own domain exists) |
|---|---|---|---|
| Facebook Page post FR / AR (Algeria) | Yes | `dz-fb-fr-sv{slug}[n]`, `dz-fb-ar-sv{slug}[n]` | E0: `?lang=fr&ref=…#how` · E1: V11 `?lang=fr&cur=dzd&ref=…#apercu`, V12–V15 `…#how` |
| Instagram Reel or carousel; TikTok | No | Bio codes `dz-ig-bio`, `gu-tt-bio`… [ST §10.2] | Bio link |
| Instagram or Facebook Story with link sticker | Yes | `dz-ig-fr-sv{slug}`, `gu-ig-en-sv{slug}` | `…#how` per market (`?lang=en&cur=usd` for the Gulf); E1 V11 `#apercu` |
| LinkedIn (founder), first comment, preview removed | Yes | `fr-li-fr-sv{slug}[n]` | `?lang=fr&cur=eur&ref=…#how` (E1 V11: `#apercu`) |
| YouTube « Cinq services » description | Yes | `yt-yl-{fr\|ar\|en}-sv5` | `?lang=…&ref=…#how`; the description also carries the full market table with every source link (V14) |
| YouTube Short (9:16) description | Check in Studio | `yt-ys-{lang}-sv{slug}` | Same; later, link the Short to « Cinq services » |
| WhatsApp Status (from Gate B) | Yes | `dz-wa-{fr\|ar}-sv{slug}` | A still (§11) with `?lang=…&cur=dzd&ref=…#apercu` (V11) or `#how` |

`#how` and `#apercu` exist on the page (index.html:700, :562); `#how` carries the method, with step 3 and its conditions as the site writes them. **No link goes to `#services` (index.html:555) until the owner trims the f1, f3 and c5 lines and pills on the site** (site work, outside this folder; gate S-LINK). The query always comes before the `#`, so the code survives the jump [FB §1.11]. If the owner prefers the strategy's week codes (`w{NN}`), the weekly log can map slugs to weeks; do not mix the two schemes in one week.

### 4.8 Fresh captures of the studio's own site (into the scratchpad only)

| ID | Region | Language | Size | Used in |
|---|---|---|---|---|
| CAP-how-{fr,en,ar}-d | `#how`, **steps 1 and 2 only**: on desktop (≥ 1100 px the steps sit in four columns, styles.css:2688) columns 1–2, which are on the right in Arabic | FR, EN, AR (`?lang=`) | Desktop 1440×900 | V11 S4 frame 1 (FR master: fr → ar; EN and AR masters: en → ar); 16:9 C3 |
| CAP-how-{ar,fr}-m | `#how`, steps 1 and 2 only (stacked) | AR (all masters); FR (`fr-strict`) | Phone 390×844 @2x | V11 S4 frame 2 |

**How:**
- Serve the checkout read-only with any static server, or extend the pipeline's server, which today mounts only `assets/` [PL §4].
- Capture with the pipeline's Chromium into `…/scratchpad/marketing/captures/own/`.
- **Emulate reduced motion** (`page.emulateMedia({ reducedMotion: 'reduce' })`): the site then gives the finished picture at once [BR › Visualisations, "reduced motion … get the finished picture"]. Then **scroll the whole section through the viewport before the shot**, so `.reveal` has risen, the glyph strokes have left `stroke-dashoffset: 1` (`.in`, styles.css:797-799) and the lazy masks have their URLs (`.lz-on`, BRAND.md "Masks load lazily"). Wait for `document.fonts.ready`, then take an element screenshot of the steps-1–2 region.
- **Never** run `npm run work:capture`, `shots` or `og`: they write into the repository [FB §3.2].
- Record the commit in the file name.

**Crop rules (check every capture before use):**
- **Only steps 1 and 2.** No kicker, title, lead, step 3, step 4 or buttons. Step 2 keeps its own words (« … un prix ferme dès que le cadrage est validé ensemble. Pas une fourchette, un chiffre. »).
- **Content:** nothing from the hero lede, title block, proof band, founder card, services, stack, work cards, estimator or market section is in frame [ST §3.3].
- **Arabic capture:** Western digits. If the page shows a pending-review note, it may stay in frame.
- **Refresh:** recapture whenever the site's copy for `#how` changes (G8).

If the owner prefers no own-site capture at all (the trailer's choice), V11's S4 uses the coded mock-up with the mirror instead; the label then becomes « Exemple » with « exemple fictif », and the beat loses its "real" status.

---

## 5. V11 · Sites & applications web (`svweb`)

### 5.1 Brief

| | |
|---|---|
| **The SME's problem** | A site that no longer looks like the business, or a ready-made template repainted in the company's colours. Three market versions of the same doubt: Algerian buyers compare against 20 000–60 000 DA packs and ask what a higher price buys [ST §3.2]; French buyers want proof they can check; Gulf buyers want Arabic that is written, not translated [CH §2.1, §3.1, §4.1]. The video answers with what is included, never with a comparison |
| **What the studio does** | Sites and web apps designed from scratch (SV02); fast and search-optimised (SV03); in French, English or Arabic, with Arabic built right to left (SV04); or a custom web application when the business needs a tool (SV05); three packages and a price before the quote (SV07) |
| **Real example (N)** | The studio's own method section, steps 1–2, mirrored from the master's starting language to Arabic, then the same Arabic page on desktop and phone (§4.8). The Glaive demo appears only in the 16:9 AR and EN segments, under its own header |
| **Variant A** | FR master only, one client per render: Bordj Steel `work/bordjsteel/d2.webp` or Alliance Travel `previews/alliancetravel.webp`, each with its trimmed card benefit (SV36). **REQUIRES CLIENT PERMISSION** for each |
| **CTA** | E0 « Lien en bio »; E1 « Demander mon Aperçu → » after the Aperçu beat. Codes `…-svwebn` (N), `…-svweb` (A) |
| **Left out** | Tool names; client counts; « livré », "delivered" and "clients"; « domaine et certificat configurés » (do-not-claim #17); AlmaFlowClim (domain caveat); any Numidea screen outside steps 1–2 of `#how`; « pensé pour convertir » and « Pas de modèle acheté puis maquillé » (captions only) |

### 5.2 9:16 master (40 s, N, E0 default)

Reading column: each block's words (longest language), its budget and when it ends; then the scene's load (words that entered, picture text included, and the worst cumulative rate). All from [SF] `lint.out`.

| Scene · time (frames) · theme | Visual, assets, permission | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.67 (f0–79) · Arcanum | `--void` ground, brass grid 64 px at 7%; `px-plan.webp` band at 10% below y 1260, drifting. **f1 glyph** (360 px, y 800–1160) draws path by path 0.00–1.60, then one idle cycle. Hook fully set at f0 (thumbnail-safe), no logo intro. 2.67: hook eases into the H band; the glyph shrinks to a 120 px seal at the header's reading-start edge | T1 « Votre site ne vous ressemble plus ? » [SV06] | T1 «هل ما زال موقعك يشبه شركتك؟» [SV06] [à relire par un arabophone natif] | T1 "Does your website still fit you?" [SV06] | 6 w → 3.10 s. Measured: FR 95 px, 3 lines; EN 114 px; AR 112 px, 2 lines | f0 chime D; ticks while the glyph draws |
| **S2 Problem** · 2.67–8.00 (f80–239) · Arcanum | V band: a grey template wireframe (hero block, three cards, no text). At 3.33, 4.00 and 4.67 its fill colours swap (three neutral palettes; layout never changes): "repainted, same template". 5.33: a brass burin rule wipes it away in the reading direction; the **blueprint** [TR §3.4] draws from zero, 5.67–7.67 | T2 @3.33 « On dessine votre site de zéro. » [SV02] | T2 «نصمّم موقعك من الصفر.» [SV02] [à relire par un arabophone natif] | T2 "We design your site from scratch." [SV02] | T2 6 w → 6.43. S2: 6 new words, 1.1/s | Soft tick per repaint; 5.33 chime + B♭maj7 |
| **S3 What we do** · 8.00–17.33 (f240–519) · Arcanum | Header wipes to T4. The blueprint fills with theme surfaces and the F25 placeholders (8.67), 640×400 in V. **13.33:** the same frame becomes an app screen (a sidebar and three rows of grey bars, **no chart, no trend**) with the LF chip (13.67). No mirror here: it is S4's real example | T4 @8.00 « Sites & applications web » [SV01] · T5 @10.67 « Rapide et bien référencé » [SV03] · T7 @13.33 « Ou une application web sur mesure » [SV05] · LF @13.67 « exemple fictif » · placeholders « Votre logo » / « Votre entreprise » [F25] | T4 «مواقع وتطبيقات ويب» [SV01] [à relire par un arabophone natif] · T5 «سريعة ومحسّنة لمحرّكات البحث» [SV03] [à relire par un arabophone natif] · T7 «أو تطبيق ويب مخصّص» [SV05] [à relire par un arabophone natif] · LF «مثال افتراضي» [à relire par un arabophone natif] · placeholders «شعارك هنا» [à relire par un arabophone natif] / «اسم نشاطك» [F25] [à relire par un arabophone natif] | T4 "Sites & web applications" · T5 "Fast and search-optimised" · T7 "Or a custom web application" · LF "fictional example" · placeholders "Your logo" / "Your business" | T4 3 w → 10.05 · T5 4 w → 13.07 (leaves 13.33) · T7 6 w → 16.43. S3: 19 words, worst 2.6/s | 8.00 accent tick; 10.67 Fmaj9; tick per line; 16.00 Csus2 |
| **S4 Real example (N)** · 17.33–28.00 (f520–839) · Arcanum | **Frame 1, 17.33–24.33:** browser frame (blank address bar, 704×440 in V) with CAP-how-fr-d (FR master) or CAP-how-en-d (EN and AR masters), push-in 1.00 → 1.03; **20.67** the capture wipes in the right-to-left direction to CAP-how-ar-d. **Frame 2, 24.33–28.00:** the browser frame steps to the reading-start side at 60% and a phone-width card with CAP-how-ar-m slides in beside it | Header @17.33: LR « Exemple réel » + T8 « Notre propre site » [SV35] · T9 @20.67 « En arabe, de droite à gauche. » [SV04] · T10 @24.33 « Sur téléphone comme sur ordinateur. » [SV09, restated] | LR «مثال حقيقي» [à relire par un arabophone natif] + T8 «موقعنا نحن» [SV35] [à relire par un arabophone natif] · T9 «بالعربية، من اليمين إلى اليسار.» [SV04] [à relire par un arabophone natif] · T10 «على الهاتف كما على الحاسوب.» [à relire par un arabophone natif] | LR "Real example" + T8 "Our own site" · T9 "In Arabic, right to left." · T10 "On phone and desktop alike." | Header 5 w → 20.08 · T9 6 w → 23.77 (leaves 24.00) · T10 5 w → 27.08. S4: 16 words, worst 1.6/s | 17.33 chime; **20.67 chime (mirror)**; 21.33 Dm; 24.33 tick; 26.67 B♭maj7 |
| **S5 How to start (E0)** · 28.00–33.33 (f840–999) · Arcanum | Three tier tabs (names only, **no figures**) light in reading order with T11. `coin-horse` and `coin-palm` (≤ 320 px) each turn once and settle | T11 @28.33 « Trois formules, un prix avant le devis. » [SV07] · tabs « Essentiel · Studio · Moteur » [F12] | T11 «ثلاث باقات، وسعر قبل عرض السعر.» [SV07] [à relire par un arabophone natif] · tabs «الأساسي · الاستوديو · المحرّك» [à relire par un arabophone natif] | T11 "Three packages, a price before the quote." · tabs "Essential · Studio · Engine" | T11 7 w → 31.78. S5: 10 words, 1.9/s | 28.00 accent tick; tick layer mutes; 30.67 Csus2 |
| **S6 End card (E0)** · 33.33–40.00 (f1000–1199) · Arcanum | Block A: wordmark rebuilt in code (Cinzel 700 .04em, « idea » in `--teal-text`, a **solid `--crimson` cursor that never blinks**) + label. Block B: the pointer as a plain chip. `lighthouse.webp` in the decoration zone, one coded beam sweep 33.67–35.67. The last frame holds | EA @33.33 wordmark + « Studio web & logiciel · Bordj Bou Arréridj, Algérie » [F20, F07] · E0 @37.00 « Lien en bio » (LinkedIn: « Lien en commentaire ») [F30] | EA «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [à relire par un arabophone natif] · E0 «الرابط في الملف التعريفي» [à relire par un arabophone natif] | EA "Web & software studio · Bordj Bou Arréridj, Algeria" · E0 "Link in bio" | EA 7 w → 36.78 · E0 4 w → 39.40 | 33.33 chime (beam); **34.00 sting**; 38.80–40.00 audio fade |

**France, `fr-strict` (gate G7):** if the lawyer applies the Loi Toubon to organic posts, the France render keeps everything on screen in French: S4 frame 1 shows CAP-how-fr-d with no wipe and T9s « Ce site même est trilingue. » [SV43] (5 w → 23.42); frame 2 shows CAP-how-fr-d at 60% beside CAP-how-fr-m, with T10. Lint and fit: pass.

**AR master:** the mirror starts from the English capture, so French interface never sits under Arabic captions (the same AR render serves the Gulf on TikTok).

### 5.3 E1 (from Gate B and G3): the Aperçu beat

S1–S3 as E0.

| Scene · time · theme | Visual | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S4 (E1)** · 17.33–24.00 · Arcanum | Frame 1 only (as E0) | Header + T9 as E0 | as E0 [à relire par un arabophone natif] | as E0 | as E0. S4: 11 words, 1.7/s | as E0 |
| **S5 The Aperçu** · 24.00–32.67 (f720–979) · Arcanum | The site's four moments as a dimension line in V [TR §3.4 Timeline]: n1 envelope 24.33; n2 build marks 25.00 (**unlabelled: no day count on screen**); n3 call frame 25.67; n4 « 0 » stamped 26.67. Conditions on a solid `--navy` band in L | T11e @24.00 « Voyez votre page d'accueil avant de payer. » [SV40] · T03s @27.67 « Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. » [SV41] | T11e «شاهد صفحتك الرئيسية قبل أن تدفع.» [SV40] [à relire par un arabophone natif] · T03s «مجّاناً ودون التزام · للشركات المسجّلة · 4 في الشهر كحدّ أقصى» [SV41] [à relire par un arabophone natif] | T11e "See your homepage before you pay." · T03s "Free, no obligation · registered businesses · at most 4 a month." | T11e 7 w → 27.45 · T03s 11 w → 32.52, on screen 5.0 s (≥ 3 s); measured FR 52 px, 3 lines; AR 58 px, 2 lines. S5: 19 words, worst 2.6/s | Pad holds; frame-drum stroke under the « 0 » at 26.67; **no cue 27.67–32.67** |
| **S6 End card (E1)** · 32.67–40.00 · Arcanum | As E0; block B is the site's primary button (`--crimson` fill, `--on-crimson` text) with the pointer under it | EA @32.67 · E1a @36.33 « Demander mon Aperçu → » [F08] + « Lien en bio » | EA [à relire par un arabophone natif] · E1a «اطلب معاينتك ←» [à relire par un arabophone natif] + «الرابط في الملف التعريفي» [à relire par un arabophone natif] | EA · E1a "Request my Preview →" + "Link in bio" | EA 7 w → 36.12 · E1a 6 w → 39.43 | 32.67 chime; **33.33 sting**; fade |

The full conditions line (F03) and « 5 jours ouvrés à réception de vos contenus » (F04) go in the caption (§5.6).

### 5.4 Variant A (S4 swap; FR master only; one client per render; REQUIRES CLIENT PERMISSION)

S4 time, theme and sound are unchanged. The permitted captures are French, so variant A exists only for the FR master (rule 9); AR and EN stay N.

| Render | Visual | FR | Reading |
|---|---|---|---|
| A-Bordj Steel | Browser frame (blank address bar) with `work/bordjsteel/d2.webp` (« NOS PRODUITS »), wiped in at 17.33. **REQUIRES CLIENT PERMISSION: Bordj Steel** | Header @17.33: kicker F09 « Quelques réalisations » + « Bordj Steel » · B1 @20.33 « Un acheteur trouve la bonne gamme et sa fiche technique sans appeler. » [SV36] | Header 5 w → 20.08 · B1 12 w → 25.53 (measured 66 px, 3 lines). S4: 17 words, 1.7/s |
| A-Alliance | `previews/alliancetravel.webp` (French, no price on screen). **REQUIRES CLIENT PERMISSION: Alliance Travel** | Header: F09 + « Alliance Travel » · B2 @20.33 « Un voyageur estime son budget et envoie sa demande sur WhatsApp. » [SV36] | as above (B2 68 px, 3 lines) |

Never in A:
- `d1`, `d3`, `m1` of Bordj Steel;
- Alliance `d1`, `d2`, `d3`, `d4`, `m1`, `m2` (client figures, a ranking, or client DA prices: §4.5);
- AlmaFlowClim, unless the owner adds a France-only render with `work/almaflow/d4.webp`, with permission and his wording ("site made for the client" or "redesign proposal"), its domain never shown [TR §5.3];
- the words « client », « livré », "delivered".

### 5.5 16:9 segment (48 s, for « Cinq services »)

From [SF] `lint16.out` and `fit16.out`; every block passes.

| Chapter · time | Visual and assets | FR | AR | EN | Reading |
|---|---|---|---|---|---|
| **C1** · 0.00–12.00 | T1 in the text column, f1 glyph 520 px in the visual column; 2.67–6.67 the repaint; 6.67 wipe; the blueprint draws and fills (6.67–12.00) | T1 · T2 @3.33 « On dessine votre site de zéro. » · W1 @6.67 « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs. » [SV08] | T1, T2 [à relire par un arabophone natif] · W1 «تصميم مخصّص — لا قالب معاد تلوينه أبداً.» [SV08] [à relire par un arabophone natif] | T1, T2 · W1 "Custom design — never a re-themed template." [SV08] | T2 → 6.43 · W1 12 w → 11.87. C1: 24 words, 2.0/s |
| **C2** · 12.00–28.00 | T4 header; the mock-up builds (placeholders 12.67); T5 @14.67; T7 @17.33 (app screen, LF chip 17.67). **Price row 20.67–28.00**, full width, wiped in, never counted | T4 · T5 · T7 · P1 @20.67 « Site vitrine (Essentiel) : env. 90 000 –⁠ 160 000 DA HT · env. 600 –⁠ 1 100 € HT · fourchette indicative, pas un devis. » [F14; FB §1.5] | T4, T5, T7 [à relire par un arabophone natif] · P1 «موقع تعريفي (الأساسي): من نحو 90 000 إلى 160 000 دج، غير شاملة الضريبة · تقدير استرشادي، لا عرض سعر رسمي.» [à relire par un arabophone natif] (no € line) | T4, T5, T7 · P1 "Showcase site (Essential): about $670 –⁠ 1,200 excl. tax · an indicative range, not a quote." | P1 18 w → 27.97 (61–64 px, 2 lines). C2: 37 words, worst 2.6/s |
| **C3 (N), FR version** · 28.00–48.00 | 28.00–38.33: browser frame (≤ 820 px), CAP-how-fr-d; 31.33 wipe to CAP-how-en-d; **34.67 wipe right-to-left to CAP-how-ar-d** (chime). 38.33–48.00: CAP-how-ar-d at 60% beside CAP-how-ar-m | Header LR + « Notre propre site » · W2 @31.33 « Ce site même est trilingue, avec une expérience arabe (RTL) pensée nativement. » [SV04] · W3 @38.33 « Responsive, performance et SEO de base — dès la formule Essentiel. » [SV09] | — | — | Header → 30.75 · W2 13 w → 36.88 · W3 10 w → 42.83. C3: 28 words, 1.7/s |
| **C3 (N), AR and EN versions** | 28.00–38.33 as FR (starting from EN). **38.33: the header line changes** to « Notre démo de boutique » and the frame shows `work/glaive/d4.webp` (the quiz; no ratings), cropped below the site's top bars, **badge F26 in frame for the whole hold** | — | Header «مثال حقيقي» [à relire par un arabophone natif] + «موقعنا نحن» [à relire par un arabophone natif], then T8g «متجرنا التجريبي» [à relire par un arabophone natif] · W2 «هذا الموقع نفسه ثلاثي اللغات، بنسخة عربية مبنيّة من اليمين إلى اليسار.» [SV04] [à relire par un arabophone natif] · badge «نموذج تجريبي – ليس مشروع عميل» [F26] [à relire par un arabophone natif] · W3g «علامة لعتاد الألعاب مبتكرة بالكامل: متجر، وصفحات منتجات، واختبار.» [SV39] [à relire par un arabophone natif] | Header "Real example" + "Our own site", then T8g "Our shop demo" · W2 "This very site is trilingual, with an Arabic version built right to left." · badge "Portfolio demo – not a client project" [F26] · W3g "A gaming-gear brand invented end to end: shop, product pages, quiz." [SV39] | T8g 3 w → 40.38 · W3g 11 w → 45.52. C3: 38 words, 2.1/s |
| **C3 (A), FR version only** | 28.00–38.00 Bordj Steel `d2`; 38.00–48.00 Alliance preview. **REQUIRES CLIENT PERMISSION** for each | F09 header; F10 / F11 sector chips; B1, B2 | — | — | Re-run the lint before rendering |

`fr-strict`: the FR segment shows CAP-how-fr-d and CAP-how-fr-m only, with W2.

### 5.6 Captions

**FR (E0)**
> Votre site ne vous ressemble plus ?
> Sites et applications web sur mesure — rapides, bien référencés, pensés pour convertir — en français, anglais ou arabe. Pas de modèle acheté puis maquillé : on dessine votre site de zéro.
> Trois formules (Essentiel, Studio, Moteur) et un prix avant le devis, sur le site.
> Dans la vidéo : la méthode de notre propre site, en français puis en arabe, de droite à gauche.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

E1 adds:
> L'Aperçu : avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu, en 5 jours ouvrés à réception de vos contenus, puis on vous la présente en visio (30 min). Si vous dites non, vous ne devez rien.
> Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus.

**EN (E0)**
> Does your website still fit you?
> Custom websites and web apps — fast, search-optimised, built to turn visitors into enquiries — in English, French and Arabic. No ready-made templates: we design your site from scratch.
> In the video: our own site's method section, switching to right-to-left Arabic.
> Web & software studio based in Algeria · UTC+1, 2 h behind Riyadh, 3 h behind Dubai.

E1 adds the Preview paragraph and terms [TR §5.7], with "5 working days once we have your content".

**AR (E0)** [à relire par un arabophone natif]
> هل ما زال موقعك يشبه شركتك؟ [à relire par un arabophone natif]
> مواقع وتطبيقات ويب مخصّصة، سريعة ومحسّنة لمحرّكات البحث، بالعربية والفرنسية والإنجليزية. لا نعيد تلوين قالب جاهز: نصمّم موقعك من الصفر. [à relire par un arabophone natif]
> في الفيديو: قسم المنهجية في موقعنا نحن، وهو ينتقل إلى العربية من اليمين إلى اليسار. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

E1 adds the Arabic Preview paragraph and terms [TR §5.7], with «خلال 5 أيام عمل من استلام المحتوى» [à relire par un arabophone natif].

Hashtags and search phrases per market: [CH §1.9].

---

## 6. V12 · Identité & systèmes visuels (`svid`)

### 6.1 Brief

| | |
|---|---|
| **The SME's problem** | A small company whose logo, colours and type do not hold together, so it looks smaller than it is. That matters because buyers in Algeria and France check whether a business is real before writing [CH §2.1, §3.1]. The site's promise: « La confiance avant le premier mot. » |
| **What the studio does** | Logo, colour, typography, motion and a documented system, ready to use (SV11); styles, components, the full kit, included in the Studio package (SV12) |
| **Real example (N)** | The studio's own identity: the wordmark rebuilt in code, one card re-inked through three of its six themes in 9:16 (all six in 16:9) from the live tokens, and the contrast rule every pair passes (SV13, SV14). In 16:9, also « Nos règles de marque, documentées : thèmes, typographie, mouvement » (SV15) |
| **Variant A** | Alliance Travel's identity: its logo `assets/clients/alliance.svg`, its palette (#002C51, #237A4A, #9CE8B2, #F7F1E3, #0A0F15) as swatches, its fonts (DM Sans, Tajawal), the light and dark modes; the FR preview capture in the FR master only (SV37). **REQUIRES CLIENT PERMISSION** and the relationship wording. Bordj Steel's identity work appears only on the founder's CV as a position, so it is not used [FB §2.1 #16] |
| **CTA** | E0 « Lien en bio »; E1 per §4.7. Codes `…-svidn` / `…-svid` |
| **Left out** | Every plate (the coins and `hub-design.png`) [ST §5 V12]; the favicon (its colours predate the six themes [FB §3.3]); « gravé », "hand-engraved" or "AI-free"; any client logo in N; « planches illustrées » as a deliverable; the blinking cursor |

### 6.2 9:16 master (40 s, N, E0 default)

| Scene · time (frames) · theme | Visual, assets, permission | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.67 · Arcanum | **f2 glyph** (three circles) draws one circle at a time 0.00–1.60. Hook set at f0. Glyph shrinks to a seal at 2.67 | T1 « La confiance avant le premier mot. » [SV10] | T1 «الثقة قبل قراءة كلمة.» [SV10] [à relire par un arabophone natif] | T1 "Trust before a word is read." [SV10] | 6 w → 3.10 (FR 107 px, 3 lines; AR 126 px, 2 lines) | f0 chime D; ticks |
| **S2 Problem** · 2.67–8.00 · Arcanum | Four coded pieces (a business card, a shop sign, an invoice header, a profile avatar), each with grey bars in a different system typeface and grey tint; no legible text. **5.33:** a burin rule passes and all four **snap into one system** (same type, colour and logo box), now reading the placeholder F25 | T2 @3.33 « L'allure d'une maison établie. » [SV11] · placeholder @5.33 « Votre entreprise » [F25] | T2 «حضور مؤسسة راسخة.» [SV11] [à relire par un arabophone natif] · placeholder «اسم نشاطك» [F25] [à relire par un arabophone natif] | T2 "The look of an established firm." [SV11] · placeholder "Your business" | T2 6 w → 6.43. S2: 8 words, 1.5/s | 5.33 chime (snap) + B♭maj7 |
| **S3 What we do** · 8.00–17.33 · Arcanum | Header wipes to T3. The system card builds in V with the LF chip (8.67): logo box → colour swatches → « Aa » specimen → **the f2 glyph drawing itself as the motion example** (during T4) → a coded "charte" spread with section rules (during T5) | T3 @8.00 « Identité & systèmes visuels » [SV10] · T4 @10.67 « Logo, couleurs, typographie, animation » [SV11] · T5 @13.33 « Une charte documentée, prête à l'emploi » [SV11] | T3 «الهوية والأنظمة البصرية» [à relire par un arabophone natif] · T4 «شعار وألوان وخطوط وحركة» [à relire par un arabophone natif] · T5 «نظام تصميم موثّق وجاهز للاستخدام» [à relire par un arabophone natif] | T3 "Branding & visual systems" · T4 "Logo, colour, typography, motion" · T5 "A documented system, ready to use" | T3 → 10.05 · T4 4 w → 13.07 · T5 6 w → 16.43. S3: 15 words, worst 1.9/s | Tick per line; 10.67 Fmaj9; 16.00 Csus2 |
| **S4 Real example (N)** · 17.33–28.00 · Arcanum → Daylight → Noir | 17.67–19.33: the **wordmark** assembles (« Num » + « idea » in `--teal-text` + « Labs », always left to right, solid cursor). **Theme cycle** (§4.4): Arcanum to 21.33; Daylight 21.33–24.00; Noir 24.00–28.00, by ink wipe (S-THEME) or cuts on the beat. The card re-inks from the live tokens: wordmark, a heading, a primary button, the f2 glyph. **The wordmark follows each theme's logo tokens as the site does** (Cinzel 700 .04em, then Geist 600 −.015em, then Geist 700 −.02em) [SV14]. Chips: theme name only, @19.33, @21.33, @24.00 | Header @17.33: LR « Exemple réel » + T7 « Notre propre identité » [SV35] · T8 @20.67 « Six thèmes, un seul système. » [SV13] · T9 @23.67 « Chaque paire texte–fond passe le contraste WCAG AA. » [SV13] · chips « Arcanum », « Daylight », « Noir » | LR «مثال حقيقي» [à relire par un arabophone natif] + T7 «هويتنا نحن» [à relire par un arabophone natif] · T8 «ستّة مظاهر، ونظام واحد.» [à relire par un arabophone natif] (the site's word for theme is «المظهر» [à relire par un arabophone natif], app.js:274) · T9 «كل ثنائية نص وخلفية تجتاز معيار التباين WCAG AA.» [à relire par un arabophone natif] · chips in Latin script | LR "Real example" + T7 "Our own identity" · T8 "Six themes, one system." · T9 "Every text and surface pair passes WCAG AA contrast." | Header → 20.08 · T8 5 w → 23.42 · T9 9 w → 27.82. S4: 22 words, 2.1/s | 17.33 chime; one soft tick per theme change; 24.00 chime (last state) |
| **S5 How to start** · 28.00–33.33 · Arcanum | Wipe or cut back to Arcanum. A Studio tab (name only, no figure) with one lit line | T10 @28.33 « Dans la formule Studio : un design system documenté. » [SV12] | T10 «ضمن باقة الاستوديو: نظام تصميم موثّق.» [à relire par un arabophone natif] | T10 "In the Studio package: a documented design system." | T10 8 w → 32.13. S5: 9 words, 1.7/s | Tick layer mutes; pad holds |
| **S6 End card** · 33.33–40.00 · Arcanum | As V11 S6 (E0). E1 per §4.7 | as V11 | as V11 [à relire par un arabophone natif] | as V11 | as V11 | 33.33 chime; 34.00 sting |

**Why « un seul système » and not « une seule identité »:** the site's wordmark changes typeface with the theme (Cinzel only in Arcanum, [TH]:43 against :68, :93), and the video shows that truthfully. What all six share is one token contract ([TH]:1-12). The owner may prefer to hold the wordmark in Arcanum's face for the whole cycle (Q13); the card would then show a state the site never shows, so this file does not.

### 6.3 Variant A (S4 swap; REQUIRES CLIENT PERMISSION: Alliance Travel, plus the owner's relationship wording)

| Time | Visual | FR | AR | EN |
|---|---|---|---|---|
| 17.33–28.00 · Daylight shade | Alliance's logo (`assets/clients/alliance.svg`) drawn in #002C51 on #F7F1E3; five palette swatches (no hex text in 9:16; scene-data.mjs:117-124); « Aa » in DM Sans and «أب» [à relire par un arabophone natif] in Tajawal (the client's own bilingual type, the subject of the frame); the ground swaps to #0A0F15 at 23.67 (light → dark mode). FR master only: `previews/alliancetravel.webp` wipes in at 24.33 | Header @17.33: kicker F09 « Quelques réalisations » + « Alliance Travel » · A1 @20.33 « Identité, site et parcours de réservation » · fonts chip @20.67 « DM Sans · Tajawal » · A2 @23.67 « Identité · site trilingue · mode clair et sombre » [SV37] | F09 «نماذج من الأعمال» [à relire par un arabophone natif] + «Alliance Travel» · A1 «الهوية والموقع ومسار الحجز» [SV37] [à relire par un arabophone natif] · A2 «الهوية · موقع ثلاثي اللغة · الوضع الفاتح والداكن» [SV37] [à relire par un arabophone natif] | F09 "Selected projects" + "Alliance Travel" · A1 "Identity, site and booking journey" · A2 "Identity · trilingual site · light and dark mode" |

Reading: header 5 w → 20.08 · A1 6 w → 23.43 · A2 7 w → 27.12. S4: 21 words, worst 2.2/s. The Arabic header ends with the Latin name on its own line, because a line never starts with a Latin word [CH §1.3].

### 6.4 16:9 segment (48 s, for « Cinq services »)

| Chapter · time | Visual and assets | FR | AR | EN | Reading |
|---|---|---|---|---|---|
| **C1** · 0.00–12.00 | T1 + f2 glyph; the four mismatched pieces 2.67–6.67; the snap at 6.67 (chime; the placeholder appears); the system pieces settle and breathe once | T1 · T2f @3.33 « Ce qui donne à une petite entreprise l'allure d'une maison établie. » [SV11] | T1, T2f «ما يمنح الشركة الصغيرة حضور مؤسسة راسخة.» [à relire par un arabophone natif] | T1 · T2f "Everything that gives a small company the look of an established firm." | T2f 12 w → 8.53. C1: 20 words |
| **C2** · 12.00–28.00 | T3 header; T4 @14.33; T5 @17.00; **type specimen** from 17.33: « Aa » Cinzel 700, « Aa » Geist, «أب» IBM Plex Sans Arabic, each labelled with its family name in Geist Mono 56 px [SV14] (the FR version shows the Arabic specimen as the subject: owner to extend the strategy's exception, §14). **Price row 20.33–28.00** (wipe) | T3–T5 · P1 @20.33 « Identité visuelle : env. 90 000 –⁠ 180 000 DA HT · env. 600 –⁠ 1 200 € HT · 2 à 5 semaines · fourchette indicative. » [SV16] | T3–T5 [à relire par un arabophone natif] · «أب» [à relire par un arabophone natif] · P1 «هوية بصرية: من نحو 90 000 إلى 180 000 دج، غير شاملة الضريبة · من 2 إلى 5 أسابيع · تقدير استرشادي.» [à relire par un arabophone natif] | T3–T5 · P1 "Visual identity: about $670 –⁠ 1,300 excl. tax · 2 to 5 weeks · an indicative range, not a quote." | P1 18 w → 27.63. C2: 37 words, 2.3/s |
| **C3 (N)** · 28.00–48.00 | 28.00–30.67 wordmark builds. Six states, 2.0 s each: Arcanum from 30.67, wipes at 32.67 (Noir), 34.67 (Daylight), 36.67 (Mono), 38.67 (Alt-neon), 40.67 (Engineering); one chip per state with its name and two accent tokens: « Arcanum · #E6B450 · #34D0E8 », « Noir · #E5484D · #C9CED6 », « Daylight · #8C5E0A · #0E6E78 », « Mono · #F5F5F5 · #BDBDBD », « Alt-neon · #FF3EA5 · #3EE6FF », « Engineering · #FF5B1F · #8EC5E8 » [SV13]. 42.67–48.00: a coded contents page with **three** rules drawn in (themes, typography, motion) | Header LR + T7 · T8 @31.00 · T9 @34.00 · W5 @42.67 « Nos règles de marque, documentées : thèmes, typographie, mouvement. » [SV15] | T7, T8, T9 [à relire par un arabophone natif] · W5 «قواعد هويتنا، موثّقة: المظاهر والخطوط والحركة.» [à relire par un arabophone natif] | T7, T8, T9 · W5 "Our brand rules, written down: themes, typography, motion." | Header → 30.75 · T8 → 33.75 · T9 → 38.15 · W5 8 w → 46.47. C3: 45 words incl. chips, worst 2.7/s |
| **C3 (A)** | 28.00–38.00: N compressed (wordmark + three wipes); 38.00–48.00: Alliance as §6.3, palette with its hex values. **REQUIRES CLIENT PERMISSION** | as above + §6.3 | [à relire par un arabophone natif] | as above + §6.3 | Re-run the lint before rendering |

### 6.5 Captions

**FR (E0)**
> La confiance avant le premier mot.
> Logos, couleurs, typographie, animation et une charte complète, documentée, prête à l'emploi : ce qui donne à une petite entreprise l'allure d'une maison établie.
> Dans la vidéo : notre propre identité, trois de nos six thèmes, un seul système.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

**EN (E0)**
> Trust before a word is read.
> Logos, colour, typography, motion and a complete, documented design system: everything that gives a small company the look of an established firm.
> In the video: our own identity, three of our six themes, one system.
> Web & software studio based in Algeria.

**AR (E0)** [à relire par un arabophone natif]
> الثقة قبل قراءة كلمة. [à relire par un arabophone natif]
> شعارات وألوان وخطوط وحركة، ونظام تصميم كامل وموثّق — ما يمنح الشركة الصغيرة حضور مؤسسة راسخة. [à relire par un arabophone natif]
> في الفيديو: هويتنا نحن، ثلاثة من مظاهرنا الستّة ونظام واحد. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

E1 adds « Décrire mon projet : réponse sous 24 h ouvrées. » / "Describe your project: reply within 24 working hours." / «صِف لنا مشروعك: نردّ خلال 24 ساعة عمل.» [à relire par un arabophone natif]

---

## 7. V13 · Automatisation & pipelines (`svauto`)

### 7.1 Brief

| | |
|---|---|
| **The SME's problem** | The repetitive, error-prone work that eats hours (SV18), in the site's own words |
| **What the studio does** | Automations, data pipelines and internal tools (SV18); a repetitive task launched in one click (SV19); in the Moteur package, API integrations and internal tools (SV20) |
| **Real example (N)** | The studio's own internal automation: two of the checks its site runs on itself, worded to their exact scope (SV22); in the 16:9 segment, a third check and this video's own render-and-verify pipeline (SV23). **Both are labelled as the studio's own tools, never as client work.** The status panel is a coded visualisation with no file or tool names on screen |
| **Variant A** | **None.** The earlier 16:9 swap to Alliance Travel's booking file (SV38) is deleted: it showed a website feature as a past automation project, against rule 1. If the owner wants Alliance shown, it goes in V11's variant A, with permission |
| **CTA** | E0; E1 per §4.7. Codes `…-svauto` |
| **Left out** | "Scrapers" and lead generation (§2); tool names; « à 3 h du matin » and the 03:00 clock (open question 4: until the owner answers, the line is « on le fait tourner seul » and no clock is drawn); the Western-digits and no-result-figures checks |

### 7.2 9:16 master (40 s, E0 default)

| Scene · time · theme | Visual, assets | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.67 · Engineering | Graphite ground, 32 px drafting grid. **f3 glyph** (three linked nodes) draws node, node, node, then the links. Hook set at f0 | T1 « Supprimez la corvée. » [SV17] | T1 «احذف العمل الممل.» [SV17] [à relire par un arabophone natif] | T1 "Delete the busywork." [SV17] | 3 w → 2.05 (FR/EN 120 px, 2 lines) | f0 chime; ticks in front (Engineering shade) |
| **S2 Problem** · 2.67–8.00 · Engineering | A column of identical grey rows; a cursor ticks them one by one, slowly (2.67–5.33). **5.33:** one orange line (the glyph's link stroke) sweeps through every row and ticks them all at once. `strata.webp` band under the rows. **No clock, no stars** | T2 @2.67 « Le travail répétitif et fragile : on le fait tourner seul. » [SV18] | T2 «العمل المتكرّر الهشّ: نجعله يعمل وحده.» [SV18] [à relire par un arabophone natif] | T2 "Repetitive, error-prone work: we make it run itself." [SV18] | T2 10 w → 7.17. S2: 10 words, 1.9/s | Ticks on each hand-tick; **5.33 chime (sweep)** |
| **S3 What we do** · 8.00–17.33 · Engineering | The glyph grows into a three-node diagram; nodes light with T5 and T8 | T4 @8.00 « Automatisation & pipelines » [SV17] · T5 @10.33 « Pipelines de données, outils internes » [SV18] · T8 @13.33 « Une tâche répétitive se lance en un clic. » [SV19] | T4 «الأتمتة ومعالجة البيانات» [à relire par un arabophone natif] · T5 «معالجة البيانات آلياً، وأدوات داخلية» [à relire par un arabophone natif] · T8 «مهمّة متكرّرة تنطلق بنقرة واحدة.» [à relire par un arabophone natif] | T4 "Automation & pipelines" · T5 "Data pipelines, internal tools" · T8 "A repetitive task runs in one click." | T4 → 10.05 · T5 5 w → 13.08 · T8 8 w → 17.13. S3: 16 words, 1.7/s | Tick per node |
| **S4 Real example** · 17.33–28.00 · Engineering | A calm status panel in V: grey rows (no text, no file names, no terminal); a row ticks as each check lands | Header @17.33: LR « Exemple réel » + T9 « Nos propres contrôles » [SV22] · K1 @20.33 « Chaque texte du site principal, en trois langues » · K3 @24.33 « Chaque tarif de formule, d'une seule grille » [SV22] | LR «مثال حقيقي» [à relire par un arabophone natif] + T9 «فحوصنا الآلية» [à relire par un arabophone natif] · K1 «كل نصّ في الموقع الرئيسي، بثلاث لغات» [à relire par un arabophone natif] · K3 «كل سعر باقة، من جدول واحد» [à relire par un arabophone natif] | LR "Real example" + T9 "Our own checks" · K1 "All the main site's text, in three languages" · K3 "Every package price, from one grid" | Header → 20.08 · K1 8 w → 24.13 · K3 7 w → 27.78. S4: 20 words, 1.9/s | One soft tick per check |
| **S5 How to start** · 28.00–33.33 · Arcanum | Cut on the beat to Arcanum (ink wipe once S-THEME passes); a Moteur tab (name only) with one lit line | T11 @28.33 « Dans la formule Moteur : intégrations API et outils internes. » [SV20] | T11 «ضمن باقة المحرّك: تكاملات API وأدوات داخلية.» [SV20] [à relire par un arabophone natif] | T11 "In the Engine package: API integrations and internal tools." | T11 9 w → 32.48 (AR 74 px, 2 lines). S5: 10 words, 1.9/s | Tick layer mutes |
| **S6 End card** · 33.33–40.00 · Arcanum | As V11 S6 (E0); E1 per §4.7 | as V11 | [à relire par un arabophone natif] | as V11 | as V11 | chime; sting; fade |

### 7.3 16:9 segment (48 s, for « Cinq services »)

| Chapter · time | Visual and assets | FR | AR | EN | Reading |
|---|---|---|---|---|---|
| **C1** · 0.00–12.00 | T1 + glyph; rows ticked by hand 2.67–6.67; the sweep at 6.67; the rows settle. No clock | T1 · T2f @2.67 « Le travail répétitif et fragile qui dévore vos heures : on le fait tourner seul. » [SV18] | T1 · T2f «العمل المتكرّر الهشّ الذي يلتهم ساعاتك: نجعله يعمل وحده.» [à relire par un arabophone natif] | T1 · T2f "The repetitive, error-prone work quietly eating hours: we make it run itself." | T2f 14 w → 8.57 |
| **C2** · 12.00–28.00 | T4 header; T5 @14.33; T8 @18.33; diagram. **Price row 22.33–28.00** (wipe) | T4 · T5 « Automatisations, pipelines de données, outils internes » · T8 · P1 @22.33 « Automatisation : env. 140 000 –⁠ 420 000 DA HT · env. 930 –⁠ 2 800 € HT · fourchette indicative. » [SV21] | T4 · T5 «أتمتة سير العمل، ومعالجة البيانات آلياً، وأدوات داخلية» · T8 [à relire par un arabophone natif] · P1 «أتمتة: من نحو 140 000 إلى 420 000 دج، غير شاملة الضريبة · تقدير استرشادي.» [à relire par un arabophone natif] | T4 · T5 "Workflow automations, data pipelines, internal tools" · T8 · P1 "Automation: about $1,000 –⁠ 3,100 excl. tax · an indicative range, not a quote." | T5 8 w → 18.13 · T8 → 22.13 · P1 13 w → 27.88. « 2 à 6 semaines · 3 flux inclus » in the description |
| **C3** · 28.00–48.00 | Status panel with three rows ticking (28.00–42.33); then the pipeline beat: a frame-counter strip runs under four chips | Header LR + « Nos propres contrôles » · K1 @31.00 · K2 @35.00 « Chaque lien interne mène à sa cible » · K3 @38.67 [SV22] · T10 @42.33 « Cette vidéo aussi : rendue image par image, puis vérifiée automatiquement. » [SV23] · chips @43.00 « Couleur · Image · Polices · Zone lisible » | Header, K1, K3 [à relire par un arabophone natif] · K2 «كل رابط داخلي يصل إلى وجهته» [à relire par un arabophone natif] · T10 «وهذا الفيديو أيضاً: أُنتج إطاراً بإطار، ثم فُحص آلياً.» [à relire par un arabophone natif] · chips «الألوان · الإطار · الخطوط · المنطقة المقروءة» [à relire par un arabophone natif] | Header, K1, K3 · K2 "Every internal link reaches its target" · T10 "This video too: rendered frame by frame, then checked automatically." · chips "Colour · Frame · Fonts · Readable area" | K1 → 34.80 · K2 → 38.45 · K3 → 42.12 · T10 10 w → 46.83. C3: 42 words, 2.1/s. **SV23 and the « Zone lisible » chip wait for S-SAFE**; without it, the chip row is « Couleur · Image · Polices » |

### 7.4 Captions

**FR (E0)**
> Supprimez la corvée.
> Automatisations, pipelines de données, outils internes : le travail répétitif et fragile qui dévore vos heures, on le fait tourner seul.
> Dans la vidéo : deux des contrôles automatiques de notre propre site.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

**EN (E0)**
> Delete the busywork.
> Workflow automations, data pipelines, internal tools: the repetitive, error-prone work quietly eating hours, made to run itself.
> In the video: two of our own site's automatic checks.
> Web & software studio based in Algeria.

**AR (E0)** [à relire par un arabophone natif]
> احذف العمل الممل. [à relire par un arabophone natif]
> أتمتة سير العمل، ومعالجة البيانات آلياً، وأدوات داخلية: العمل المتكرّر الهشّ الذي يلتهم ساعاتك، نجعله يعمل وحده. [à relire par un arabophone natif]
> في الفيديو: اثنان من الفحوص الآلية لموقعنا نحن. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

---

## 8. V14 · Intelligence marché & produit (`svintel`)

### 8.1 Brief

| | |
|---|---|
| **The SME's problem** | Competitors' prices and catalogues are scattered, and a business cannot see the market as one picture. The site's answer is a usable, structured, queryable base (SV25). The problem is shown visually (blank tags), not stated as a claim |
| **What the studio does** | Competitor monitoring, price and catalogue tracking, structured and queryable (SV25); built into the application in the Moteur package (SV27). **The f4 condition clause (« collectées dans le respect des conditions de chaque site et du RGPD ») is off screen and out of captions until S-LEGAL** [ST §5 V14] |
| **Real example (N)** | The site's own market price comparison (SV26), **labelled with its method on screen**: « Notre comparatif » and « Compilé d'après des guides publiés ». It was put together by hand from about nine published guides (`mk.method`; sources index.html:976-983), so the video never shows a collection run near it and never calls it the output of the service. The Numidea column is left out, so the video compares markets, never the studio's prices [FB §1.5] |
| **Gulf masters (AR, EN)** | Rendered with `slot=fx` (the fictional table) **until the owner answers Q9**: the strategy lists DA prices under "Never" for the Gulf [ST §3.2], and the reading that market data is not a studio price is not yet confirmed |
| **Variant A** | None |
| **CTA** | E0; E1 per §4.7. Codes `…-svintel` |
| **Left out** | «استخبارات» [à relire par un arabophone natif] (§2.3); « Scraping »; any named competitor, score or follower count from the private research [ST §11]; any depiction of collecting from a named site or of personal data; the RGPD clause (S-LEGAL) |

### 8.2 9:16 master (40 s, E0 default; FR master)

| Scene · time · theme | Visual, assets | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.67 · Daylight | Paper ground, ink. **f4 glyph** (target, crosshair, small dot) draws; `px-stars.webp` band at 8%. Hook set at f0 | T1 « Voir le marché clairement. » [SV24] | T1 «رؤية السوق بوضوح.» [SV24] [à relire par un arabophone natif] | T1 "See the market clearly." [SV24] | 4 w → 2.40 | f0 chime; Daylight shade (D Dorian) |
| **S2 Problem** · 2.67–8.00 · Daylight | Dozens of small **blank** grey price tags (no text, no figures) scattered over a `px-contour.webp` band. **5.33:** they fly into a clean table grid | T2 @3.33 « Une base exploitable, structurée, interrogeable. » [SV25] | T2 «قاعدة بيانات قابلة للاستخدام، مهيكلة وقابلة للاستعلام.» [SV25] [à relire par un arabophone natif] | T2 "A usable base, structured and queryable." | T2 7 w → 6.78. S2: 7 words | **5.33 chime (fly-in)** |
| **S3 What we do** · 8.00–16.00 · Daylight | The grid becomes a coded table with grey rows; a query bar types a placeholder filter; one column sorts. Column heads and the LF chip ink in at 14.67 | T4 @8.00 « Intelligence marché & produit » [SV24] · T5 @10.67 « Veille concurrentielle, suivi des prix et des catalogues » [SV25] · heads « Produit · Prix · Date · Source » + LF | T4 «تحليل السوق والمنتجات» [à relire par un arabophone natif] · T5 «رصد المنافسين، وتتبّع الأسعار والكتالوجات» [à relire par un arabophone natif] · heads «المنتج · السعر · التاريخ · المصدر» [à relire par un arabophone natif] · LF | T4 "Market & product intelligence" · T5 "Competitor monitoring, price and catalogue tracking" · heads "Product · Price · Date · Source" · LF | T4 → 10.05 · T5 8 w → 14.47. S3: 17 words, 2.1/s | Tick per line |
| **S4 Real example** · 16.00–28.00 · Daylight | **Market row** (§4.4) in V: title « Site vitrine », lanes « Algérie » and « France », each with its range in Geist Mono (64 px measured), wiped in lane by lane from 18.67. No bars. The caption carries the US column, the full table and the sources | Header @16.00: LR « Exemple réel » + T9 « Notre comparatif » [SV26] · ROW @18.67 « Site vitrine » · « Algérie 50 000 –⁠ 100 000 DA » · « France 1 500 –⁠ 6 000 € » · T10m @24.67 (small print) « Compilé d'après des guides publiés » [SV26] | — (AR master: `slot=fx`) | — (EN master: `slot=fx`) | Header → 18.40 · ROW 14 w → 24.57 · T10m 5 w → 27.42, on screen 3.33 s. S4: 23 words, 2.1/s | 16.00 chime; no cue under figures; pad holds |
| **S4 `slot=fx`** (AR and EN masters until Q9) · 16.00–28.00 | The fictional table keeps querying and sorting, grey rows only, LF chip | — | LFk «مثال افتراضي» [à relire par un arabophone natif] + «رصد الأسعار» [à relire par un arabophone natif] | LFk "Fictional example" + "Price monitoring" | Header 6 w → 19.10; nothing else | as above |
| **S5 How to start** · 28.00–33.33 · Arcanum | Cut on the beat to Arcanum (or ink wipe after S-THEME); Moteur tab (name only) | T12 @28.33 « Dans la formule Moteur : l'intelligence marché, intégrée à l'application. » [SV27] | T12 «ضمن باقة المحرّك: تحليل السوق مدمج في التطبيق.» [SV27] [à relire par un arabophone natif] | T12 "In the Engine package: market intelligence built into the application." | T12 10 w → 32.83 (FR 68 px, 3 lines) | Tick layer mutes |
| **S6 End card** · 33.33–40.00 · Arcanum | As V11 S6 (E0); E1 per §4.7 | as V11 | [à relire par un arabophone natif] | as V11 | as V11 | chime; sting; fade |

If the owner answers Q9 with "market data may run in the Gulf", the AR master gets the real row: the S4 line becomes «مقارنتنا: الموقع التعريفي» [à relire par un arabophone natif] and the rows read «الجزائر» [à relire par un arabophone natif] + «من 50 000 إلى 100 000 دج» [à relire par un arabophone natif], «فرنسا» [à relire par un arabophone natif] + «من 1 500 إلى 6 000 €» [à relire par un arabophone natif] (stacked, 400 px; lint pass); the method line is «جُمعت من أدلّة أسعار منشورة» [à relire par un arabophone natif].

### 8.3 16:9 segment (48 s, for « Cinq services »; FR version; AR and EN use `slot=fx` until Q9)

| Chapter · time | Visual and assets | FR | AR | EN | Reading |
|---|---|---|---|---|---|
| **C1** · 0.00–12.00 | T1 + glyph; blank tags 2.67–6.67; the fly-in at 6.67; the table settles | T1 · T2 @3.33 | [à relire par un arabophone natif] | T1 · T2 | T2 → 6.78 |
| **C2** · 12.00–28.00 | T4 header; T5 @14.33; the fictional table with its query bar, heads and LF chip from 18.33. No condition line (S-LEGAL) | T4, T5, heads, LF | [à relire par un arabophone natif] | T4, T5, heads, LF | T5 → 18.13. C2: 17 words |
| **C3** · 28.00–48.00 | **Market bars** (§4.4): the « Site vitrine » row for Algeria, France and the United States on one log scale, from 33.67; Numidea column left out | Header LR + « Notre comparatif » · M0 @30.67 (small print) « Compilé d'après des guides publiés » · ROW1 @33.67 « Site vitrine · Algérie 50 000 –⁠ 100 000 DA · France 1 500 –⁠ 6 000 € · États-Unis 1 500 –⁠ 12 000 $ » · W8 @42.33 (small print) « Échelle logarithmique · convertis au taux officiel, début octobre 2026 » [SV26] | (fx: header «مثال افتراضي» [à relire par un arabophone natif] + «رصد الأسعار») [à relire par un arabophone natif] | (fx) | Header → 30.40 · M0 → 33.42 · ROW1 21 w → 42.02 · W8 10 w → 46.83. C3: 40 words, 2.1/s. The **full five-row table, the conversion rates and every source with its link** go in the description |

Row and column labels in all three languages come from the site's own keys: `price.tyVitrine` … `price.tyBrand` (app.js:383-384 / :495-496 / :610-611) and `mk.colDz`, `mk.colFr`, `mk.colUs`.

### 8.4 Captions

**FR (E0)**
> Voir le marché clairement.
> Veille concurrentielle, suivi des prix et des catalogues : une base exploitable, structurée et interrogeable.
> Dans la vidéo : notre propre comparatif des prix d'un site vitrine en 2026, compilé d'après des guides publiés. Fourchettes courantes, du freelance confirmé à l'agence, hors taxes : Algérie 50 000 –⁠ 100 000 DA · France 1 500 –⁠ 6 000 € · États-Unis 1 500 –⁠ 12 000 $.
> Sources : Onyxlab, Baromètre des tarifs freelance 2026 · Tandem Studio · Les Créavores · HeySimon · LeFreelance (TJM d'après Malt) · Pitchsite · 8GNC · Clutch · change : Banque d'Algérie.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

**EN (E0; Gulf, `slot=fx`)**
> See the market clearly.
> Competitor monitoring, price and catalogue tracking: a usable base, structured and queryable.
> In the video: a fictional example of a price-monitoring table.
> Web & software studio based in Algeria.

**AR (E0; `slot=fx`)** [à relire par un arabophone natif]
> رؤية السوق بوضوح. [à relire par un arabophone natif]
> رصد المنافسين، وتتبّع الأسعار والكتالوجات: قاعدة بيانات قابلة للاستخدام، مهيكلة وقابلة للاستعلام. [à relire par un arabophone natif]
> في الفيديو: مثال افتراضي لجدول رصد الأسعار. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

---

## 9. V15 · Stratégie & conseil croissance (`svstrat`)

### 9.1 Brief

| | |
|---|---|
| **The SME's problem** | Marketing decided on impressions rather than data (the site's promise, SV28), and a consultant who learns the sector on the client's time. The site's answer: « On étudie votre secteur avant le premier appel. » |
| **What the studio does** | Full marketing audits, funnel analysis, competitive positioning, roadmaps; honest, ROI-first, phased (SV29) |
| **Real example** | **Default (until S-AUDIT): « Exemple » + « Structure d'un audit » with the LF chip**: five lens cards and verdict tags on grey rows, no « notre propre site », no figures. **With S-AUDIT:** « Exemple réel » + « L'audit de notre site » (16:9: « La méthode de l'audit de notre propre site web »), the five lenses and « Chaque constat revérifié : 54 retenus sur 55. » (SV30). It was a website copy and UX audit, and the label says so; no reviewer persona, no « contradicteur »; the owner confirms how the re-checks were done before any wording implies people |
| **Variant A** | None |
| **CTA** | E0; E1 per §4.7. Codes `…-svstrat` |
| **Left out** | "Data, not vibes."; "brutally"; قمع [à relire par un arabophone natif]; any competitor name, score or follower count from the private research; any result promise (ROI figures, growth percentages); « Pas une fourchette, un chiffre. » (no price for strategy work exists on the site) |

### 9.2 9:16 master (40 s, E0 default)

| Scene · time · theme | Visual, assets | FR [fact] | AR [fact] | EN [fact] | Reading | Sound |
|---|---|---|---|---|---|---|
| **S1 Hook** · 0.00–2.67 · Noir | Near-black ground, signal-red accent. **f5 glyph** (baseline, rising line, arrow) draws. Hook set at f0 | T1 « De la donnée, pas des impressions. » [SV28] | T1 «بيانات، لا انطباعات.» [SV28] [à relire par un arabophone natif] | T1 "Data, not impressions." [SV28, restated] | 6 w → 3.10 | f0 chime; Noir shade (lower pad, heartbeat louder) |
| **S2 Problem** · 2.67–8.00 · Noir | `px-contour.webp` terrain band in steel ink; a survey dimension line crosses it and drops five markers (5.33, chime) | T2 @3.33 « On étudie votre secteur avant le premier appel. » [SV29] | T2 «ندرس قطاعك جيداً قبل أيّ مكالمة.» [SV29] [à relire par un arabophone natif] | T2 "We do the sector homework before the call." [SV29] | T2 8 w → 7.13 | 5.33 chime |
| **S3 What we do** · 8.00–16.67 · Noir | The glyph's line becomes a roadmap: `faq1.png` (≤ 512 px) inks in at 25%; three hatched phases fill one after another | T3 @8.00 « Stratégie & conseil croissance » [SV28] · I1 @10.67 « Audits marketing, tunnels de vente » · I2 @13.67 « Positionnement, feuilles de route » [SV29] | T3 «الاستراتيجية واستشارات النمو» [à relire par un arabophone natif] · I1 «تدقيق تسويقي، وتحليل المسارات التسويقية» [à relire par un arabophone natif] · I2 «تموضع تنافسي، وخرائط طريق للنمو» [à relire par un arabophone natif] | T3 "Strategy & growth consulting" · I1 "Marketing audits, funnel analysis" · I2 "Positioning, growth roadmaps" | T3 → 10.05 · I1 5 w → 13.42 · I2 5 w → 16.42. S3: 13 words, 1.5/s | Tick per item |
| **S4 Example (default)** · 16.67–28.00 · Noir | **Audit board:** five lens cards (2 × 3 grid) enter one by one from 20.00; at 23.67 verdict tags drop onto six grey rows (no text) | Header @16.67: LX « Exemple » + « Structure d'un audit » · LF @17.00 · lenses @20.00 « Téléphone · Redites · Manques · Affirmations · Autres pages » · tags @23.67 « Couper · Fusionner · Ajouter · Corriger » | LX «مثال» [à relire par un arabophone natif] + «بنية التدقيق» [à relire par un arabophone natif] · LF · lenses «الهاتف · التكرار · النواقص · الادّعاءات · الصفحات الأخرى» [à relire par un arabophone natif] · tags «حذف · دمج · إضافة · تصحيح» [à relire par un arabophone natif] | LX "Example" + "How an audit is built" · LF · lenses "Phone · Repeats · Gaps · Claims · Other pages" · tags "Cut · Merge · Add · Fix" | Header → 19.77 · lenses 6 w → 23.10 · tags 4 w → 26.07. S4: 18 words, worst 2.4/s | 16.67 chime; tick per lens; 23.67 frame-drum stroke |
| **S4 with S-AUDIT** · 16.67–28.00 | As above; verdict tags as picture only | Header @16.67: LR « Exemple réel » + « L'audit de notre site » [SV30] · lenses @20.00 · W9 @23.33 « Chaque constat revérifié : 54 retenus sur 55. » [SV30] | LR «مثال حقيقي» [à relire par un arabophone natif] + «تدقيق موقعنا نحن» [à relire par un arabophone natif] · W9 «كل ملاحظة أُعيد فحصها: بقيت 54 من 55.» [à relire par un arabophone natif] | LR "Real example" + "Our own website audit" · W9 "Each finding re-checked: 54 of 55 kept." | Header → 19.77 · lenses → 23.10 · W9 8 w → 27.13. S4: 20 words, 1.8/s | as above |
| **S5 How to start** · 28.00–33.33 · Arcanum | Cut on the beat to Arcanum (or ink wipe after S-THEME); the four-step row (method glyphs, numbers only) | SB1 @28.33 « Vous décrivez le projet : réponse sous 24 h ouvrées. » [SV31, SV33] | SB1 «تصف المشروع، ثم نردّ خلال 24 ساعة عمل.» [à relire par un arabophone natif] | SB1 "Your brief, then our reply within 24 working hours." | SB1 9 w → 32.48. S5: 13 words, 2.4/s | Tick layer mutes |
| **S6 End card** · 33.33–40.00 · Arcanum | As V11 S6 (E0); E1 per §4.7 | as V11 | [à relire par un arabophone natif] | as V11 | as V11 | chime; sting; fade |

### 9.3 16:9 segment (48 s, for « Cinq services »)

| Chapter · time | Visual and assets | FR | AR | EN | Reading |
|---|---|---|---|---|---|
| **C1** · 0.00–12.00 | T1 + glyph; the terrain survey 2.67–12.00 | T1 · T2 @3.33 | [à relire par un arabophone natif] | T1 · T2 | T2 → 7.13 |
| **C2** · 12.00–28.00 | T3 header; I1 @14.33; I2 @18.33; T8 @21.33; roadmap with three phases labelled « Phase 1 · Phase 2 · Phase 3 » filling from 24.33 | T3 · I1 « Audits marketing complets, analyse des tunnels de vente » · I2 « Positionnement concurrentiel, feuilles de route » · T8 « Honnêtes, ROI d'abord, par phases. » [SV29] · phases | T3 · I1 «تدقيقات تسويقية كاملة، وتحليل المسارات التسويقية» [à relire par un arabophone natif] · I2 «تموضع تنافسي، وخرائط طريق للنمو» [à relire par un arabophone natif] · T8 «بصراحة، والأولوية للعائد، وعلى مراحل.» [à relire par un arabophone natif] · «المرحلة 1 · المرحلة 2 · المرحلة 3» [à relire par un arabophone natif] | T3 · I1 "Full marketing audits, funnel analysis" · I2 "Competitive positioning, growth roadmaps" · T8 "Honest, ROI-first, phased." · phases | I1 → 18.13 · I2 → 21.08 · T8 → 24.08. C2: 27 words |
| **C3 (default)** · 28.00–48.00 | Header + LF; the five lenses (31.33); tags and rows (34.67); the three "who acts" columns (37.33) | LX + « Structure d'un audit » · lenses · tags · WHO @37.33 « Sans attendre · À votre décision · Faits à fournir » | [à relire par un arabophone natif] · WHO «دون انتظار · بقرار منك · معلومات لديك أنت» [à relire par un arabophone natif] | WHO "Done without asking · Your decision · Facts only you have" | WHO 9 w → 41.48. C3: 27 words |
| **C3 with S-AUDIT** | Header LR + « La méthode de l'audit de notre propre site web » (28.00); lenses (33.00); W9 (36.33); tags (41.00); WHO (43.67) | W9 « Chaque constat revérifié avant d'être retenu : 54 sur 55. » [SV30] | header «منهجية تدقيق موقعنا الإلكتروني نحن» [à relire par un arabophone natif] · W9 «كل ملاحظة أُعيد فحصها قبل اعتمادها: 54 من أصل 55.» [à relire par un arabophone natif] | header "How we audited our own website" · W9 "Each finding re-checked before it was kept: 54 of 55." | Header 11 w → 32.85 · W9 → 40.83 · WHO → 47.82. C3: 40 words, 2.2/s |

### 9.4 Captions

**FR (E0)**
> De la donnée, pas des impressions.
> Audits marketing complets, analyse des tunnels de vente, positionnement concurrentiel, feuilles de route : honnêtes, ROI d'abord, par phases. On étudie votre secteur avant le premier appel.
> Studio web & logiciel · Bordj Bou Arréridj, Algérie.

**EN (E0)**
> Data, not impressions.
> Full marketing audits, funnel analysis, competitive positioning, growth roadmaps: honest, ROI-first, phased. We do the sector homework before the call.
> Web & software studio based in Algeria.

**AR (E0)** [à relire par un arabophone natif]
> بيانات، لا انطباعات. [à relire par un arabophone natif]
> تدقيقات تسويقية كاملة، وتحليل المسارات التسويقية، وتموضع تنافسي، وخرائط طريق للنمو — بصراحة، والأولوية للعائد، وعلى مراحل. ندرس قطاعك جيداً قبل أيّ مكالمة. [à relire par un arabophone natif]
> استوديو ويب وبرمجيات · برج بوعريريج، الجزائر. [à relire par un arabophone natif]

With S-AUDIT, each caption adds one line: « Dans la vidéo : la méthode de l'audit de notre propre site web. » / "In the video: how we audited our own website." / «في الفيديو: منهجية تدقيق موقعنا نحن.» [à relire par un arabophone natif]

---

## 10. The five other services: do they deserve videos?

Context: the audit asks whether these belong on the home page at all ([IM] M2, priority 19). Ten services take 2.4 phone screens before the first price. Option A, which the audit recommends, keeps web, identity and « Boutique & réservation » as cards and puts the rest in one line with a route to them. The competitor analysis likewise says to fold everything but sites, web apps and automation into one line [GP › The landing page].

| Service (site line, trimmed) | Video? | Why | Instead |
|---|---|---|---|
| **c1 Boutique & réservation** · « Boutiques en ligne et systèmes de réservation adaptés aux habitudes d'achat en Algérie : commande par WhatsApp, paiement à la livraison. » (app.js:417; « Shopify » left out) | **Yes, one 9:16 (30 s, FR and AR, Algeria only), if the owner promotes it to a card (M2 option A). No slot in W1–W12: next quarter** | It answers the Algerian buyer directly (WhatsApp ordering, cash on delivery), which the audit found folded away. It has real non-client material: the Glaive demo shop (badged; `d4` only, or `d2`/`d3` with the rating rows masked) and the estimator's E-commerce range (env. 220 000 –⁠ 550 000 DA HT, 5–10 weeks, 60 products in the base, « fourchette indicative ») [FB §1.5]. Worded as a service offered, never as delivered shops [IM M2] | Outline: hook « De la visite au paiement. » (c1 promise) → WhatsApp order and cash on delivery as a coded flow (LF chip) → Glaive quiz with the badge in frame → E-commerce range (FR-DZ) → SB1 → end card. Write it to the same lint (§4.1) when scheduled. **Not for the Gulf** (« habitudes d'achat en Algérie »). Not for France (English Glaive screens) |
| **c2 Design graphique & réseaux sociaux** · « Packs réseaux sociaux, carrousels, infographies, print — depuis un système visuel verrouillé, pour que tout vous ressemble. » | No | The marketing series itself is its demonstration: every post comes from one visual system. A dedicated video would be the studio advertising its own posts | One page in the C1 carousel « Les autres services » [ST §5]; V24 « Comment cette vidéo est faite » covers the craft |
| **c3 Data science & analytics** · « Un travail statistique rigoureux — modélisation économétrique, séries temporelles, prévision, tableaux de bord. » | No | A different buyer (analysts, not SME owners); no case and nothing the studio can show without inventing data; « analyse testée et défendable » cannot be shown on screen | One line in C1; off the home page (fold into the one-line list, or a future /services/ page [CO; design proposal]) |
| **c4 Systèmes de connaissance** · « Architecture de connaissance interne … documentation … » | No | The site line is built on tool names and jargon (Obsidian/PARA, Zettelkasten, RAG); no case; the studio's own knowledge base is private | Left out of C1 too unless the owner rewrites it in plain words [ST §5 C1]; off the home page |
| **c5 Outils & assistants IA sur mesure** · « Outils internes, générateurs et assistants sur mesure : une tâche répétitive se lance en un clic. » (model name cut) | No | The site line names an AI model (hard rule); no case; "AI" promises sit awkwardly beside the owner's no-generation rule for the studio's own marketing. Its useful half is already inside V13 (SV19) | Fold into automation (V13), as the audit's option A implies; off the home page |

**Recommendation for the home-page question (input to the owner's M2 decision, not a site change):** the video evidence points the same way as the audit's option A. Only web, identity and shop have something real to show a buyer today. Automation keeps a line, and the Moteur package keeps selling it. Market intelligence and strategy read best as parts of Moteur and of the method rather than as stand-alone cards. Whatever the owner decides, the C1 carousel lists c1 (without Shopify, and « paiement à la livraison » only after the owner's OK), c2, c3 and c5's plain half, each as a capability and never as past work; c4 stays out. This now matches the strategy's C1 [ST §5 C1].

---

## 11. Render plan, build and files

**One file:** `pipeline/videos/service.html`. Parameters still to add to `render.mjs` (the strategy budgets `--params` in its W0–W1 pipeline tooling [ST §6.4]):
`?svc=web|id|auto|intel|strat &v=n|a &client=bs|at &end=e0|e1|e1ap &strict=1 &slot=fx &audit=1 &pointer=bio|li|none &story=1 &seg=1`, on top of the existing `ratio`, `lang`, `theme`, `guides` [PL §4]. `seg=1` renders the 48 s 16:9 segment; the closing is `svc=close`.
Copy goes in `pipeline/copy/services.json` (Appendix A). Each block's entry time comes from the copy file, so the timeline, the lint, the cue file and the subtitles share one source.

**Build, re-estimated from the component list** (it replaces "6–8 h, then each service is copy"):

| Build | Contains | Estimate | When |
|---|---|---|---|
| **Service template + V11** (template D) | Service glyph; line band with ticks; V11's before → after (repaint, wipe, reuse of the blueprint); mock-up → app-screen morph; own-site captures (a static server for the site root, reduced-motion capture with scroll-through, six crops) and the capture frame with its right-to-left wipe; E0/E1 end-card states; `services.json` with the cumulative and no-break lint rules; the cue-file generator; assembly, determinism, phone check, `fr-strict` pass | **12–16 h** | The two weeks before V11's slot (W10–W11 for W12; W8–W9 for W10; W6–W7 for W8) |
| V12 | Theme loader and the S-THEME proof (2–3 h; or 0.5 h for the cut fallback); system card; four-pieces snap; assembly and check | 6–8 h | Next quarter, or an upgrade slot |
| V13 | Rows and sweep; three-node diagram; status panel; assembly and check | 4–5 h | Next quarter |
| V14 | Blank tags fly-in; fictional table with query bar; market row; `slot=fx`; assembly and check | 5–6 h | Next quarter |
| V15 | Terrain survey; roadmap phases; audit board; assembly and check | 5–6 h | Next quarter |
| « Cinq services » 16:9 | Five 48 s segment layouts, market bars on a log scale, price rows, chapter kickers, the shared closing, chained render, SRT per language | 8–12 h | Next quarter |
| Pipeline features these scripts assume | `--params`; `--cues` and per-length chord maps; the per-scene `safeCheck()` with the 9:16 box; fit-text on every block; SRT/VTT from the copy | Budgeted in the strategy's W0–W1 pipeline tooling (12–15 h) [ST §6.4]; **if they slip, add 6–10 h to V11's build** | W0–W1 |

Total for V11 in this 12-week window: **12–16 h** (the strategy's template D row says 8–12 h: §14). The other four and « Cinq services » add about 28–37 h next quarter.

**What each V11 week renders** (only what the calendar posts [ST §6.2, §8.2]):

| File | Post | Render time (4.2 s per video second [PL §3]) |
|---|---|---|
| `service-web-n-e0__9x16__fr.mp4` | Tue: IG + FB Reel, YouTube Short | ≈ 2.8 min |
| `service-web-n-e0__9x16__fr__frstrict__li.mp4` → 4:5 crop | Tue: LinkedIn 4:5 (`fr-strict` until the Loi Toubon answer; pointer « Lien en commentaire ») | ≈ 2.8 min + crop |
| `service-web-n-e0__9x16__en.mp4` | Thu: TikTok, IG, YouTube Short | ≈ 2.8 min |
| `service-web-n-e0__9x16__ar.mp4` | The following Sun: IG + FB, TikTok | ≈ 2.8 min |
| Stills f70, f500, f800, f990, f1190 (9:16) | WhatsApp Status from Gate B; carousel pages | seconds |

**File naming:** `service-{slug}-{n|a}-{e0|e1|e1ap}__{ratio}__{lang}[__frstrict][__fx][__li].mp4`, for example `service-web-n-e0__9x16__ar.mp4`. About 11 minutes of renders for a V11 week, 22 with the 2× margin. E1 and variant A are rendered only when their gate opens. EN and AR 16:9 come with « Cinq services », not before.

```
node render.mjs videos/service.html --ratios 9x16 --langs fr,en,ar --params svc=web,v=n,end=e0 --audio music/service-web-e0-40.m4a
node render.mjs videos/service.html --ratios 9x16 --langs fr --params svc=web,v=n,end=e0,strict=1,pointer=li --audio music/service-web-e0-40.m4a
ffmpeg -i out/service-web-n-e0__9x16__fr__frstrict__li.mp4 -vf crop=1080:1350:0:90 -c:a copy out/service-web-n-e0__4x5__fr__frstrict__li.mp4
```

(`--params` and the per-video bed are still to add [TR §10.3; §4.6].)

**Stills for carousels and covers (9:16):**
- f70: hook, inside the 3:4 grid crop, used as the Instagram cover;
- f500: the end of S3 (the second line in place);
- f800: the real example;
- f990: how to start;
- f1190: end card.

The LinkedIn PDF carousel uses the 4:5 crop at the same frames. Every still that shows a price (16:9 only) carries « env. … HT ».

**Subtitles:** one SRT per language for YouTube and one VTT per language for the site, generated from the copy dictionary's in and out times. No SRT on LinkedIn (text burned in) [CH §1.3].

**Per render (the render fails if any check fails):**
- the copy lint: the do-not-claim list, **any AI model name**, the Arabic marker, the sequential budget, **the cumulative rule (≤ 3 words a second, picture text included)**, and **the no-break characters of rule 8** (an ordinary space before ? ! ; : or a currency, inside a grouped number, inside « », or around a range dash is an error);
- fit-text on every block at the §4.3 ranges; no size fits → the render fails;
- verify reports OK [PL §2];
- `safeCheck()` with the 9:16 box **x 140–940, y 290–1240** (`RATIOS['9x16'].safe = { t: 290, r: 140, b: 680, l: 140 }`) on **the last frame of every scene and the settled frame of each entrance** [TR §3.4; ST §3.3] (gate S-SAFE; today it runs on the video's last frame only, `render.mjs:161-163`, against a box that reaches y 1440, `runtime/scene.js:24`);
- for any scene with a theme change, the S-THEME proof on file;
- the frame check against FB §2.1 and §2.4, recorded in the render report [ST §3.3];
- loudness measured on the final MP4 [MU §4.5].

---

## 12. Gates

All of [TR §11] applies, with these readings and additions:

| # | Gate | Applies to |
|---|---|---|
| G1 | Native review of every Arabic string, including placeholders, chips, column heads, captions and chapter titles; Algerian and Gulf reviewers if the owner wants both [CH §2.3]. Reviewed copy that runs longer re-runs the lint before any render | All AR files; FR and EN files of V11 (Arabic capture) and V12 16:9 («أب» [à relire par un arabophone natif] specimen) |
| G2 | CTA gate (privacy page, legal name, dedicated WhatsApp number) = Gate B | Every E1 file. E0 files may post from Gate 0 |
| G3 | The owner confirms the Aperçu may be promoted now (capacity, employment contract, lawyer on promotion before registration) | V11 E1; every E1-ap file |
| G4 | Written client permission, plus the relationship wording ("client" or not) | Every A file (V11, V12; FR master and 16:9 FR only) |
| G5 | The owner's listening test of the code-made bed; ledger row present | Every file |
| G6 | The owner confirms the existing engravings may be reused; otherwise the coded fallback [TR §3.6] | The textures and plates of §4.5 (none in V12) |
| G7 | The lawyer's reading of the Loi Toubon for organic posts; otherwise `fr-strict` for France | V11 FR files posted for France |
| G8 | Copy re-checked against app.js, `MARKET`, `scripts/check.mjs` and `IMPROVEMENTS.md` at the render commit. **SV22 and SV23 are added to the facts bank first, with the exact scopes of §3; SV30 only with S-AUDIT** | Every file |
| G9 | Not used: no URL on screen [ST §3.4] | — |
| **S-CAP** | Own-site captures of steps 1–2 taken from the current checkout with reduced motion and a scroll-through, cropped and checked per §4.8 | V11 N |
| **S-AUDIT** | The owner agrees to show the studio's own website audit (lenses, "54 of 55", verdicts, who acts) **and says how the re-checks were done**; otherwise the default « Structure d'un audit » | V15 |
| **S-M2** | The owner's answer on [IM] M2 (which services stay full cards), **due by W9** | Whether V14 and V15 are made as written, merged (V13 + V14) or turned into a carousel (V15); the « Boutique & réservation » video |
| **S-LEGAL** | **The owner and a lawyer confirm** that « collectées dans le respect des conditions de chaque site et du RGPD » can be backed (method, legal identity, privacy page). Until then the clause is off screen and out of captions [ST §5 V14] | V14, and V13 if the owner keeps "lead generation" as an offer |
| **S-THEME** | The theme loader is built and one wipe is proven frame by frame (§4.4) | Any ink wipe: V12 S4, V13–V15 S5. Fallback: cuts on the beat |
| **S-SAFE** | The per-scene `safeCheck()` with the 9:16 box runs (§11) | Every render; the « Zone lisible » chip and SV23 in V13 16:9 |
| **S-LINK** | The owner trims the f1, f3 and c5 lines and pills on the site (site work) | Any link to `#services`; until then every link goes to `#how` or `#apercu` |
| **S-END** | The owner picks the end-card rule after Gate B (§4.7) | E1 of V12–V15; the 16:9 closing |

---

## 13. Open questions for the owner

1. **Priority and M2 (S-M2, by W9).** Do you agree to make V11 first and V12 next? And what is your answer on the home-page question M2 (option A, option B, or keep ten services)? It decides whether V14 and V15 stay separate, merge with V13, or become a carousel.
2. **Own-site captures (S-CAP).** May steps 1 and 2 of the method section of the studio's own site be captured in FR, EN and AR into the scratchpad for V11's real example?
3. **Self-audit (S-AUDIT).** May V15 show the studio's own October website audit (five lenses, "54 of 55 findings kept", verdicts, who acts)? **How were the findings re-checked** (by you, by a scheduled workflow, by tools)? No wording will imply people until you say.
4. **Automation wording.**
   - Keep the site's « on le fait tourner seul à 3 h du matin » in videos, or the plainer « on le fait tourner seul » used here?
   - Is lead generation still an offer, given the GDPR questions it raises? These scripts leave "scrapers" and "génération de leads" off screen.
5. **Identity, variant A.** Does the permission request to Alliance Travel cover showing its brand identity (logo, palette, fonts) as identity work by the studio? How should the relationship be described?
6. **16:9 pointer.** The strategy and the package scripts put no pointer on 16:9 end cards. Keep that, or use « Lien dans la description » / "Link in the description" / «الرابط في الوصف» [à relire par un arabophone natif] in all three scripts?
7. **End card after Gate B (S-END), and which services get an Aperçu.** The strategy puts the Aperçu call to action on every end card; this file keeps it to V11 and gives V12–V15 « Décrire mon projet → ». Which rule? If the Aperçu goes on every card, V12–V15's S5 becomes the conditions beat (scripted as E1-ap).
8. **« Boutique & réservation ».** If it becomes a full card, should its 30 s video (outline in §10) be scripted next quarter, ahead of V14 and V15? May it say « paiement à la livraison » before the payment terms are decided (Gate D)?
9. **Gulf and V14.** May Gulf posts show market price data in DA, € and $ (it is not a studio price)? Until you answer, the AR and EN masters use the fictional table.
10. **Music.** Is one 90 BPM bed per video acceptable for all five, including the Engineering-themed V13 (the brief suggests 96 BPM for that theme)?
11. **EN promise for strategy.** The scripts use "Data, not impressions." in place of the site's "Data, not vibes." Should the site's English line change the same way? That is site work, outside this folder.
12. **V14's legal clause (S-LEGAL).** May « dans le respect des conditions de chaque site et du RGPD » appear on screen, after a lawyer's check? Until then it stays off.
13. **V12's wordmark.** The theme cycle shows the wordmark as the site does (Cinzel in Arcanum, Geist in the other themes). Keep that, or hold Arcanum's face through the cycle?
14. **« Cinq services ».** One chained video of about 4 min 19 s with one closing (recommended here), or five separate 60 s uploads (each would repeat M1, M2 and the end card)?
15. **Site work (S-LINK).** Trim the f1 stack line and its pills, the f3 tool line and its model-name pill, and c5's « propulsés par … » clause, so the services section can be linked? Until then links go to `#how`.
16. **Variant A order.** Which client's permission do you expect first (Bordj Steel or Alliance Travel)? Variant A renders one client per 9:16 file.

---

## 14. Changes this file needs in other files (not made here)

| File | Change | Why |
|---|---|---|
| `strategy.md` §6.4 | Template D (V11): 12–16 h, not 8–12 h; add a row for V12–V15 (4–8 h each) and « Cinq services » (8–12 h) next quarter | §11 |
| `strategy.md` §7.1 and §8.1 (W0 owner list) | Add S-M2 (answer by W9), S-CAP, S-AUDIT (with how the re-checks were done), S-THEME, S-SAFE, S-LINK, S-END; S-LEGAL already appears as Q16 | §12 |
| `strategy.md` §3.3 | Extend the FR/AR exception to V12's 16:9 type specimen, or the FR segment drops «أب» [à relire par un arabophone natif] | Rule 9 |
| `strategy.md` §3.4 / §7.2 | Record the owner's S-END choice, and the 16:9 pointer choice (Q6) for all three scripts | §4.7 |
| `strategy.md` §5 | V11–V15: "9:16 40 s (4:5 crop); 16:9 as a 48 s segment of « Cinq services »"; V14's Gulf masters use `slot=fx` until Q9 | §0, §8 |
| `facts-bank.md` §1 | Add SV22 and SV23 with the exact scopes of §3; add SV30 only with S-AUDIT; add SV40–SV43 if the bank keeps cross-file keys | G8 |
| `channels.md` §8 | Services on YouTube: one chained « Cinq services » long-form, plus the Shorts; WhatsApp Status gets stills, not the 40 s masters | §4.1, §11 |
| `pipeline.md` §5.2 | Add the theme loader, the per-scene `safeCheck()` box, the capture server mount for the site root, and the cue-file generator | §4.4, §11 |

---

## 15. Revision log (review of 2026-10-26)

| Issue | What changed |
|---|---|
| V13 variant A presented Alliance's booking file as an automation project | The swap is deleted (§7.1, §7.3); V13 has no variant A; SV38 is marked "not used"; rule 1 now forbids client screens in V13–V15 |
| V14 implied the comparison came from the studio's data collection | S2–S3 no longer show web-data collection; S4 says « Notre comparatif » with « Compilé d'après des guides publiés » on screen (9:16 and 16:9); SV26 records the method; captions list the sources |
| V15 called a website audit a marketing audit and implied a team | Default S4 is a fictional « Structure d'un audit »; with S-AUDIT the label is « L'audit de notre site » / « La méthode de l'audit de notre propre site web »; W9 is « Chaque constat revérifié … » with no reviewer persona; the owner confirms how the re-checks were done (SV30, S-AUDIT, Q3) |
| Links sent viewers to `#services` (the stack line and the model-name lines) | Every link goes to `#how` (or `#apercu` for V11 E1); gate S-LINK; rule 11; Q15 |
| `#how` captures showed the Aperçu in E0 against rule 4 | Captures cropped to steps 1–2 (no lead, no step 3); rule 4 rewritten for E0 and E1; G3 reworded |
| M2 dropped the scoping condition; V15's « Pas une fourchette, un chiffre. » | M2 now « … le prix ferme suit, une fois le périmètre cadré ensemble » (EN "once the scope is agreed together"; AR restating the site); V15's T12 dropped |
| K1/K3 and the pipeline chips overstated what the checks test | K1 « du site principal », K3 « Chaque tarif de formule », T10 without "every frame", SV22/SV23 with exact scopes for FB §1; the « Zone lisible » chip waits for S-SAFE |
| V12's brand-book page overstated BRAND.md and listed plates as a deliverable | W5 « Nos règles de marque, documentées : thèmes, typographie, mouvement »; no « Planches illustrées »; no plates in V12 at all (SV15) |
| V11's header stayed « notre propre site » over the Glaive demo; d2 showed ratings | The 9:16 masters no longer show Glaive; in the 16:9 AR/EN segment the header changes to « Notre démo de boutique » and the frame is `glaive/d4` (no ratings), badge in frame |
| `alliance/m2` called English; DA prices in Gulf masters | m2 (and d2, d4) are not used anywhere (§4.5); variant A is FR master only, with Bordj Steel `d2` or the Alliance preview, neither showing a price |
| V11's dashboard had invented data with a trend | The app screen is grey bars only, no chart, with the LF chip |
| « 3 h du matin » kept on screen while the brief said otherwise | S2 has one line, « Le travail répétitif et fragile : on le fait tourner seul. »; no 03:00 clock, no stars; the brief and §2 agree; Q4 |
| V14's RGPD line as an unbacked legal promise | Off screen and out of captions until S-LEGAL (owner + lawyer), as the strategy decided |
| Copy did not fit the bands | Bands redesigned (H 290–480, V 500–940, L 960–1240, one block at a time); S4 headers are a kicker plus one short line; the phone frame is replaced; every 9:16 and 16:9 block measured in all three languages: 277 + 211 blocks, all fit (§4.3, [SF]) |
| Hold checks ignored blocks on screen together | The sequential budget and a cumulative rule (≤ 3 words a second, picture text counted) are in the lint; every scene passes; V14 shows one row, V13 two checks (three in 16:9), V13 S2 one line, V11 E1 gets an 8.67 s Aperçu beat (§4.1) |
| Two themes in one frame were impossible in the pipeline | Theme loader (selectors rewritten in memory, tokens still read live), a frame-by-frame proof (S-THEME), cuts as fallback; V11 needs no wipe |
| safeCheck ran on the last frame only, with a loose box | §11 requires the 9:16 box x 140–940, y 290–1240 on the last frame of every scene and each entrance (S-SAFE) |
| Formats and lengths did not match the strategy | 9:16 40 s (as the strategy's slate now says), 4:5 as a crop, no per-service 16:9; the 16:9 becomes 48 s segments of « Cinq services » next quarter; each week renders only what the calendar posts (§11) |
| Build estimate and calendar unrealistic | Build re-estimated (V11 12–16 h; the rest next quarter); template built in the two weeks before V11's slot; the W0–W1 batch and the "W6 alongside V16" example removed (§1, §11) |
| End cards differed from the strategy | Label and CTA wording aligned (« Studio web & logiciel · … », « Demander mon Aperçu → »); motto optional; no « Lien en bio » on 16:9; the after-Gate-B rule is an owner decision with both states scripted (§4.7, S-END, Q6, Q7) |
| FR and AR mixed in one frame | The AR mirror starts from English; variant A is FR-only; V12's 16:9 specimen needs the strategy's exception (§14) |
| V14 Gulf masters showed DA | `slot=fx` for AR and EN until Q9 |
| Script gates missing from the strategy; C1 contents | S-M2 due W9 and the other gates listed for the strategy (§14); C1 now matches the strategy; « Boutique & réservation » has no slot this quarter |
| Blinking cursor; wordmark contradiction | Solid cursor everywhere; V12's motion example is the glyph drawing; the wordmark follows each theme's logo tokens and T8 says « un seul système » (Q13) |
| Glyph stroke scaled to 22.5 px | `vector-effect: non-scaling-stroke` at 3.5 px |
| Text over an engraving; hub figure; upscaled rasters | No plate behind text; `hub-design.png` and `arch.webp` removed; coins ≤ 320 px, faq ≤ 512 px; `px-*` as bands (§4.5) |
| No no-break characters | Rule 8; FR strings and price ranges in this file and in Appendix A carry U+202F, U+00A0 and U+2060; the lint rejects ordinary spaces in those positions |
| 1040 px frame in an 840 px column; no 16:9 sizes | Frames ≤ 820 px; 16:9 sizes stated and measured (§4.3) |
| One cue map for five videos; a drum stroke under the terms | One cue file per video, length and end state, generated from `services.json`; V11 E1's stroke moves to the « 0 » at 26.67, a second before the conditions (§4.6) |
| Captures would show unrevealed steps and blank masks | Reduced-motion emulation and a scroll-through before the shot (§4.8) |
| Theme cycle too fast for its chips | 9:16: three themes at about 2.5 s, names only; 16:9: six at 2.0 s with tokens |
| Log-scale chart without saying so | 9:16 has no bars (a labelled row); 16:9 bars carry « Échelle logarithmique · convertis au taux officiel, début octobre 2026 » |

---

## Appendix A. Copy dictionary shape for `pipeline/copy/services.json`

One object per service, one key per block, the same fields as the trailer's dictionary [TR Appendix A], plus `t` (entry time, seconds) and `role` (the §4.3 box). Shared blocks live under `_shared`. French values carry the rule-8 characters (U+202F, U+00A0, U+2060); they are present, though invisible, in the values below. The full block list for all five videos is in [SF] `copy.mjs` and `copy16.mjs`, which the lint and the fit measurement already read.

```json
{
  "_meta": {
    "built": "2026-10-26",
    "site_commit": "ecf48bb",
    "ar_marker": "à relire par un arabophone natif",
    "rule": "No new facts. Re-check every string against assets/app.js, MARKET, scripts/check.mjs and IMPROVEMENTS.md at the render commit.",
    "lint": ["do-not-claim", "model-names", "ar_review", "sequential-budget", "cumulative<=3wps", "no-break-chars"]
  },
  "_shared": {
    "LABEL": { "src": "F07", "role": "label", "fr": "Studio web & logiciel · Bordj Bou Arréridj, Algérie", "en": "Web & software studio · Bordj Bou Arréridj, Algeria", "ar": "استوديو ويب وبرمجيات · برج بوعريريج، الجزائر", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
    "E0": { "src": "SV34", "role": "pointer", "fr": "Lien en bio", "en": "Link in bio", "ar": "الرابط في الملف التعريفي", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
    "M2": { "src": "SV31", "role": "row16", "fr": "2 · On revient sous 24 h ouvrées ; le prix ferme suit, une fois le périmètre cadré ensemble.", "en": "2 · We reply within 24 working hours; the firm price follows once the scope is agreed together.", "ar": "2 · نعود إليك خلال 24 ساعة عمل، ثم السعر النهائي بمجرّد أن نتّفق معاً على النطاق.", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
    "E1b": { "src": "SV32", "gate": "B", "role": "cta", "fr": "Décrire mon projet →", "en": "Describe my project →", "ar": "صِف لنا مشروعك ←", "ar_review": "à relire par un arabophone natif", "arReviewed": false }
  },
  "web": {
    "T1": { "src": "SV06", "t": 0, "role": "hook", "fr": "Votre site ne vous ressemble plus ?", "en": "Does your website still fit you?", "ar": "هل ما زال موقعك يشبه شركتك؟", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
    "T8": { "src": "SV35", "t": 17.333, "role": "s4line", "kicker": "LR", "fr": "Notre propre site", "en": "Our own site", "ar": "موقعنا نحن", "ar_review": "à relire par un arabophone natif", "arReviewed": false, "variant": "n" },
    "T03s": { "src": "SV41", "t": 27.667, "role": "small", "end": "e1", "gate": "B+G3", "fr": "Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum.", "en": "Free, no obligation · registered businesses · at most 4 a month.", "ar": "مجّاناً ودون التزام · للشركات المسجّلة · 4 في الشهر كحدّ أقصى", "ar_review": "à relire par un arabophone natif", "arReviewed": false },
    "B1": { "src": "SV36", "t": 20.333, "role": "line", "permission": "Bordj Steel: REQUIRES CLIENT PERMISSION", "langs": ["fr"], "fr": "Un acheteur trouve la bonne gamme et sa fiche technique sans appeler.", "variant": "a" },
    "P1_16x9": { "src": "F14", "t": 20.667, "role": "row16", "seg": true, "fr": "Site vitrine (Essentiel) : env. 90 000 –⁠ 160 000 DA HT · env. 600 –⁠ 1 100 € HT · fourchette indicative, pas un devis.", "en": "Showcase site (Essential): about $670 –⁠ 1,200 excl. tax · an indicative range, not a quote.", "ar": "موقع تعريفي (الأساسي): من نحو 90 000 إلى 160 000 دج، غير شاملة الضريبة · تقدير استرشادي، لا عرض سعر رسمي.", "ar_review": "à relire par un arabophone natif", "arReviewed": false }
  }
}
```

Every block in §5–§9 becomes one key in the same way. The lint must also refuse a file whose Arabic values lack `ar_review`, any value containing a name from the do-not-claim list or an AI model name [PL §2, check 8], any scene that fails the sequential or cumulative rule, and any French or range value with an ordinary space where rule 8 requires a no-break character.
