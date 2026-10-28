# Numidea Labs: organic marketing strategy, 12 weeks

PRIVATE. Never copy this file, or anything made from it, into `/home/user/STICKITTY.INC` (the public repository).
Written 2026-10-26, from the research files in this folder and the private vault. The window is **W1 = Sun 1 Nov 2026 to W12 = Sat 23 Jan 2027**, preceded by a set-up week, **W0 = Mon 26 to Sat 31 Oct 2026**. Weeks run Sunday to Saturday, because the working week is Sunday–Thursday in Algeria and Saudi Arabia [CH §2.3, §4.3].
Every Arabic string in this file is marked **[à relire par un arabophone natif]**. No Arabic is posted before a native speaker has reviewed it.

**How sources are cited**

| Tag | File |
|---|---|
| [FB §x] | `marketing/facts-bank.md`: what may be said, what may not, the assets |
| [CH §x], [CH Sx] | `marketing/channels.md` and its numbered web sources |
| [MU §x] | `marketing/music.md` |
| [PL §x] | `marketing/pipeline.md` |
| [CA §x] | vault `notes/research/competitor-analysis-and-plan.md` (§8 = "What not to copy") |
| [GP #x / Nx / Xx / Lx] | vault `Maps/Gaps and plan.md` (gap numbers and plan steps) |
| [MK › …] | vault `Maps/Markets.md` |
| [CM › …] | vault `Maps/Campaign.md` |
| [OD › …] | vault `Maps/Owner decisions pending.md` |
| [DL › …] | vault `Maps/Decision log.md` |
| [KIT §x] | vault `notes/campaign/campaign-outreach-fr.md` (§5 = founder LinkedIn plan) |
| [OC §x] | `/home/user/STICKITTY.INC/OWNER-CONTENT.md` |

Full paths are in the Sources section at the end.

---

## 0. The strategy on one page

1. **The goal is qualified Aperçu requests from registered businesses, not reach.** Social media is where a buyer checks the studio, not where deals close. Competitor accounts are small: Piteur has 20,730 Facebook followers, UpGrowth 196, and Pula Media 25 TikTok followers [CH §0.4, §9]. The studios that score best win through search, directories and WhatsApp [CH §0.4]. Success is counted by `?ref=` codes and conversations, never by followers [§2].
2. **One story everywhere: see your homepage before you pay, in your language.** The Aperçu is the strongest risk reversal in all three markets. No Algerian seller of the 12 scored builds anything before payment [CA §4.1]. The second pillar is native right-to-left Arabic, which is rare in Algeria, absent among global benchmarks and patchy in the Gulf [CA §4.2]. Prices are published and the site's market table cites its sources [CA §4.4].
3. **Trust comes before any push.** The research found that what loses clients is what a buyer finds on checking: a github.io address, a personal Gmail, no registration number, no proof from others [CA §1]. Weeks 1–5 are a **soft launch**: regular posts with no invitation to write. The **push** (Aperçu call to action, WhatsApp, directories, more LinkedIn invitations) starts only when Gates A and B open [§7].
4. **Three publishing slots a week, from one master video.** Each week one coded 9:16 master is rendered in FR, AR and EN, then cut into Reels, TikToks, Shorts, LinkedIn 4:5 and a carousel [CH §0.2; PL §5.3]. The slots are Sun AR, Tue FR, and Thu either a carousel or an EN cut. That comes to about 6–7 hours a week, with a 3-hour minimum mode [§6.4].
5. **One account per platform, one language per post** [CH §0.1]:
   - Algeria: Facebook Page and Instagram, FR and AR.
   - France: the founder's LinkedIn first, plus the shared FR Instagram posts.
   - Gulf: TikTok and Instagram, AR and EN, kept small.
   - YouTube: the explainer library. The website self-hosts its MP4s.
6. **The video programme the owner asked for is in the calendar:**
   - the brand launch trailer (W1);
   - the Aperçu launch trailer (once Gate B opens, W6 at the earliest);
   - an explainer for each package (Essentiel W4, Studio W5, Moteur W7), plus a 16:9 "Trois formules" explainer (W8);
   - service explainers (W9–W12 and the next quarter);
   - the method (W2) and the Arabic RTL craft piece (W3).

   See §5 and §8.
7. **Everything on screen comes from the facts bank.** That means no team size, no "6 ans", no client counts or results, no testimonials, no Nomara, no stack names, no "open source", no legal claims for the studio, no payment terms, and no model names [FB §2]. Client screenshots appear only with written permission, and nobody has asked yet [FB §2.3; OC §6].
8. **Made in code, scored in code:**
   - coded motion design in the site's own engravings, themes and fonts [PL §0];
   - music written in code, never trending sounds or generated audio [MU §0];
   - never a face for the founder [FB §1.2].
9. **Measurement uses only what exists:** `?ref=` on every link that can carry one, a fixed code per bio, the question "Où nous avez-vous découvert ?" in the first reply, a 30-minute weekly log, and platform-native insights [CH §1.8; GP L10]. There are no pixels and no shortener services.
10. **Three reviews:**
    - W4 (28 Nov): a production and gates check.
    - W8 (by 29 Dec): compare channels and re-weight; markets are compared only after 8 weeks [GP L10].
    - W12 (23 Jan): plan the next quarter and decide whether a paid test is worth preparing. The owner chose organic only for now (2026-10-26).

---

## 1. Where things stand on 2026-10-26

- **Scores.** Numidea Labs scores 26/42 in Algeria (median 24.5), 24 in France (median 27) and about 23 in the Gulf (median 27). It leads on risk reversal and design, and scores 0 on social proof in every market [MK › Scorecard; GP › Read this first].
- **Owner items, as checked in the repository at commit `82603b0` today:**
  - the 14 legal fields are still `null` (`scripts/legal-data.mjs`);
  - there is no founder photo (`assets/founder.webp` is absent);
  - the personal Gmail appears 7 times in `index.html`;
  - there are no quotes (`VOICES = []`);
  - the OWNER-CONTENT status table is still dated 2026-10-12 [OC table].

  The plan's NOW steps were due by 23 Oct [GP › NOW], and no note records any of them as done, so this strategy treats all of them as open.
- **Owner decisions of 2026-10-26 (task brief):** coded motion design; on-screen text plus music, no voiceover; FR, AR and EN; four channel groups; organic only. **The Meta click-to-WhatsApp test planned for 9–15 Nov [CM › At a glance] is therefore not part of this plan.** Its launch gates remain useful: most of them are this plan's Gates A and B [§7].
- **Tools are ready:**
  - The render pipeline works (about 4.2 s of render time per second of video, per output) [PL §0, §3].
  - A code-made music bed exists. The owner has not listened to it yet [MU §3].
  - The facts bank lists every usable line in FR, EN and AR [FB §1].
  - Still to build: price card, Aperçu timeline, end card with the `?ref=` code, channel presets and the carousel export [PL §5.2].

---

## 2. Goals

### 2.1 What counts (outcomes)

| # | Goal | Target for W1–W12 | Why this target |
|---|---|---|---|
| O1 | **Qualified Aperçu requests** from an organic source or free lever. "Qualified" uses the kit's four internal criteria: a registered business; a real website or web-app project; a budget at or above the Essentiel floor; a decision within 3 months [CM › Lead qualification]. Only "registered" is said publicly [FB §1.3] | **3** by W12. Keep going at W8 if at least 1 exists, or if conversations are rising | A planning assumption, not a forecast; no data predicts organic yield for a new account. For scale, the paid-test kit expected 0 to 3 qualified prospects from a full week of paid ads [CM › At a glance] |
| O2 | First reply within 24 working hours, on every channel | 100% | It is the site's own promise [FB §1.7]; breaking it costs more than any post earns |
| O3 | Aperçu delivered within 5 working days of receiving complete content | 100% of Aperçus booked | The offer's promise [FB §1.3]. The cap is 4 a month across all sources [CM › Lead qualification] |
| O4 | Aperçu leads to "yes" | Tracked, no target | Too few events in 12 weeks to set a rate |

### 2.2 Trust milestones (owner actions; details in §7)

| Gate | Target | What it unlocks |
|---|---|---|
| 0: ready to publish | Sat 31 Oct (W0) | Brand, method, price, education and behind-the-studio posts |
| C: client permission messages **sent** | Sat 31 Oct; replies expected about a week later [GP #3] | Proof-of-work videos |
| A: a business buyers can verify | W4 (28 Nov) | Directories, verification content, the France push |
| B: allowed to invite messages | W5 (5 Dec) | The Aperçu call to action, WhatsApp, the Aperçu launch trailer |

### 2.3 Output (what the studio controls)

- **At least 30 of the 36 slots published.** Holiday weeks W8–W9 are lighter.
- **Arabic:** 100% of AR posts reviewed before publishing.
- **Claims:** 0 posts with a do-not-claim item. Copy lint passes [PL §2.8], and the script is checked against the facts bank before each render.
- **Links:** 100% of clickable links carry a `?ref=` code.
- **YouTube:** 4 long-form FR videos (trailer, Quatre étapes, L'Aperçu, Trois formules), with AR and EN versions as reviews allow.
- **Directories:** at least 3 profiles live after Gate A, one a week [GP L1].

### 2.4 Signals, not goals

These platform-native numbers choose which topics to remake and which hooks to keep. They are never targets [CH §1.8]:
- Instagram: watch time, sends per reach, likes per reach [CH §1.2, S8].
- YouTube Shorts: "viewed vs swiped away" [CH S47].
- LinkedIn: impressions and average watch time [CH S21].
- TikTok: views and profile visits.

**Not goals:** follower counts, likes and views. Chasing them pulls toward trends, faces and claims this studio cannot make.

---

## 3. Positioning and message

### 3.1 Core positioning (internal; the public lines are in §3.2–3.4)

- **FR:** Numidea Labs, studio web et logiciel à Bordj Bou Arréridj : votre site sur mesure, en français, anglais ou arabe, et sa page d'accueil construite avec votre contenu avant tout paiement.
- **EN:** Numidea Labs is a web and software studio in Bordj Bou Arréridj, Algeria: custom websites in English, French and Arabic, and your homepage built with your own content before any payment.
- **AR:** نوميديا لابز، استوديو ويب وبرمجيات في برج بوعريريج، الجزائر: موقعك المخصّص بالعربية والفرنسية والإنجليزية، وصفحتك الرئيسية مبنيّة بمحتواك أنت قبل أيّ دفع. [à relire par un arabophone natif]

Each line restates site strings [FB §1.1, §1.3]. Whenever the Aperçu is mentioned in public, its conditions come with it (§3.4).

**The three proofs we can show today without anyone's permission:**
1. **The offer itself.** The Aperçu's four moments are already drawn on the site, ending on "Payé jusqu'ici : 0 DA" [FB §1.3, §3.1].
2. **The studio's own trilingual site,** which switches FR / EN / AR and mirrors to right-to-left. "Recording the real site switching languages is honest, strong footage" [FB §1.8].
3. **Published prices and a sourced market table** [FB §1.5; CA §4.4].

The founder's product WorkspaceHQ and the Glaive demo (with its badge) show craft, never client results [FB §1.9].

### 3.2 Message per market

| | Algeria (FB + IG, FR then AR) | France (LinkedIn first, IG, FR only) | Gulf (TikTok + IG, AR and EN) | YouTube + website |
|---|---|---|---|---|
| **Buyer** | Owner or manager of a registered company. Compares against visible packs at 20,000–60,000 DA. Checks WhatsApp, a reply promise and signs of a real business. French dominates search [MK › Algeria; CH §2.1] | Dirigeant of a TPE or PME. Checks the company, invoice, contract, protection after payment, ownership, a named contact and reviews. Finds offshore studios through directories [MK › France; CH §3.1] | SME manager in Dubai or Riyadh. Expects AED/SAR prices, local WhatsApp, a legal identity, openness about working from abroad, speed in days, and Arabic that is written, not translated [MK › Gulf] | A buyer who opens an explainer on purpose: depth on packages, method and the Aperçu [CH §5.1] |
| **What they doubt** | "Why pay 90,000 DA when packs cost 20,000–35,000?" [MK › Algeria, What is missing 5] | "Can I trust a studio abroad?" They are lost on proof, not price [CA §6, rec. 1] | "Is this real, and is it for us?" | "What exactly do I get, and how?" |
| **Our answer** | What is included in Essentiel, line by line (custom design, never a re-themed template), never a comparison with other sellers [CA §6, rec. 1; FB §1.5]. The Aperçu. Arabic done properly. Bordj Bou Arréridj, reply < 24 h ouvrées [FB §1.7] | The Aperçu ("payer pour une promesse" against "voir d'abord", from [KIT §5.5 P3], restated). Same time as Paris all winter [FB §1.1]. Prices in € HT at marketplace level, below typical France ranges, as the sourced table shows [FB §1.5]. The founder's own voice | Arabic written, not translated, with a natively mirrored RTL site [FB §1.8]. Studio based in Algeria, UTC+1, 2 h behind Riyadh and 3 h behind Dubai [FB §1.1]. The Preview | The four steps, the three packages and the Aperçu explained with chapters [CH §5.2] |
| **Price on screen** | **DA HT** with « env. », plus a smaller ≈ € line [FB §1.5] | **€ HT** with « env. » and "conversion approximative" [FB §1.5; KIT §6] | **None.** If asked, "about $… excl. tax" in captions or DMs only. AED and SAR do not exist [FB §1.5; CH §4.3] | Per language version: DA (FR/AR), € (FR-France), USD (EN) |
| **Hooks (frame 0)** [CH §1.7] | H1 « Voyez votre nouveau site avant de payer. » · H5 « Site vitrine : env. 90 000 – 160 000 DA HT. » · H4 (the mirror). AR: «شاهد موقعك الجديد قبل أن تدفع.» [à relire par un arabophone natif] | H3 « Votre site ne vous ressemble plus ? » · H1 · H7 « Design sur mesure — jamais un modèle repeint. » | EN: "Arabic isn't a translation. It's a layout." · "See your new site before you pay." AR: «العربية ليست ترجمة، بل تصميم من اليمين إلى اليسار.» [à relire par un arabophone natif] | H2 « Payé jusqu'ici : 0 DA. » as the Aperçu explainer's opening |
| **Call to action before Gate B** | None. The end card shows the wordmark and « lien en bio » | None. Link in the first comment, no "écrivez-moi" | None. "Link in bio" | Link to the site in the description, with a ref code |
| **Call to action after Gate B** | « Demander mon Aperçu → », WhatsApp (dedicated number) and the site | « Écrivez-moi « Aperçu » en message privé » [KIT §5.5 P3, P8] and the site with `?lang=fr&cur=eur` | "Request my Preview →" or «اطلب معاينتك ←» [à relire par un arabophone natif], via the site with `?lang=en&cur=usd` or `?lang=ar&cur=usd` | Same, in the video's language |
| **Never** | "moins cher", any comparison with a named seller, payment methods, registration claims [FB §1.5, §2.1–2.2] | Invoicing, VAT or autoliquidation lines before a legal identity exists [FB §2.1 #19]. English screens (Loi Toubon rule applied to organic posts) [CH §3.4] | DA prices, a local-office look, flags, landmarks, emblems, payment methods. Every piece says the studio is based in Algeria [CM › Rules for every ad] | Embedding YouTube on the site [CH §5.3] |

### 3.3 Voice and on-screen rules (summary)

- **Tone:** calm, exact and unhurried, like the site's "engraved atlas". The brand's motion is "tuned for calm rather than spectacle" [MU §5.1].
- **Text carries the whole message.** There is no voiceover [CH §1.3]:
  - a hook of 6 words or fewer at frame 0, held at least 1.5 s;
  - body lines held 0.35 s per word plus 1 s;
  - small print of at least 44 px, held 3 s or longer and repeated in the caption.
- **Arabic:** set 10–15% larger, line-height 1.5 or more, never letter-spaced, Western digits [CH §1.3; FB "How to use"].
- **Never mix FR and AR in one frame.** The one exception: a French caption may describe an Arabic page shown as the subject (V03) [CH §2.3].
- **Safe text box on the 9:16 master:** x 80–940, y 290–1240 (Arabic: x 140–1000) [CH §1.4].
  - **Production note:** the pipeline's current 9:16 safe area allows text down to y 1440 (bottom margin 480 px) [PL §5.2]. That is below the Reels interface line of about y 1248 [CH §1.4]. Tighten the pipeline check to the CH box before the first production render.
- **Screenshots are wiped, never cross-faded. Loops settle** [FB §3.1].
- **Music:** the code-made bed by default; a chime on each plate reveal, a tick on each text card, a held pad under prices and conditions; the same coded sting at the end of every video [MU §5].

### 3.4 Conditions and end cards (exact wording)

**The Aperçu conditions go with every mention** [FB §1.3]:
- FR: « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » + « 5 jours ouvrés à réception de vos contenus ».
- EN: "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." + "5 working days once we have your content".
- AR: «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [à relire par un arabophone natif] + «خلال 5 أيام عمل من استلام المحتوى» [à relire par un arabophone natif]

**End card before Gate B:**
- The « Numidea Labs » wordmark, rebuilt in code [FB §3.3].
- The label « Studio web & logiciel · Bordj Bou Arréridj, Algérie » [FB §1.1], or in Arabic «استوديو ويب وبرمجيات · برج بوعريريج، الجزائر» [à relire par un arabophone natif].
- « Lien en bio » / "Link in bio".
- The motto « Enraciné en Numidie · bâti sur des idées » / «جذورها في نوميديا · مبنيّة على الأفكار» [à relire par un arabophone natif] [FB §1.1].
- **Never show a URL or email address on screen:** the github.io address is long and the email is personal [FB §1.1; PL §5.2].

**End card after Gate B:** the same card, plus the call to action from §3.2 and the conditions line above.

**Gulf:** every Gulf cut carries the Arabic or English studio label (the line above), which says the studio is based in Algeria [CM › Rules for every ad].

---

## 4. Content pillars

| Pillar | What it is | Allowed now | Gated | Share of the 24 FR/EN slots (if gates open on time) | Main sources |
|---|---|---|---|---|---|
| **1. The Aperçu** | The offer: four moments, "0 DA", conditions | Mentioned as step 3 of the method, with its conditions and no call to action (V02) | The offer's own videos and every call to action: **Gate B** | 3 slots (V10 FR, V21, V10 EN). After Gate B, the Aperçu line is on **every** end card, so it is the through-line rather than one pillar | [FB §1.3; CH §1.11] |
| **2. How we work: packages, prices, services** | The method, the three packages, how prices work, the five main services and the five more | All of it, from the facts bank. Services are capabilities, not a track record [FB §1.6] | Maintenance as its own video: wait for the light-plan decision [GP #10; CA §6] | 11 slots | [FB §1.4–1.7] |
| **3. Education for SME owners** | Useful on its own: translation versus RTL layout; indicative range versus firm price; what the sourced market table says | Yes | — | 5 slots | [FB §1.5, §1.8; KIT §5.5 P4] |
| **4. Proof of work** | Client sites, shown through what each site lets a visitor do; WorkspaceHQ; the Glaive demo | WorkspaceHQ (code public on GitHub, never "open source"); Glaive with its demo badge in frame; the studio's own site and identity | Any client name, logo or screenshot: **Gate C** for that client. Quotes and reviews: none exist; only later, with consent [FB §2.1 #10] | 2–3 slots | [FB §1.9, §3.2] |
| **5. Behind the studio** | Place (the Bibans, the coordinates, the time zone), the six themes, how the videos are built in code, the workbench | Yes. **No face:** `bench.webp` or the monogram "Y" stands in [FB §1.2]. Real photos only if the owner supplies them | The team: never, until the owner confirms it [FB §2.1 #1] | 3 slots | [FB §1.1, §1.10, §3.1] |

Pillar 2 is heavy on purpose: the owner asked for explainers of the services and packages, and they are the content a checking buyer looks for [CH §1.5, "Lengths"].

---

## 5. Video slate

Lengths and ratios follow [CH §1.5]. "Gate 0" means allowed from W1 (FR), and from the reviewer's sign-off for AR.

| ID | Working title | Pillar | Format | Languages | Gate | Facts and notes |
|---|---|---|---|---|---|---|
| **V01** | **Launch trailer « L'atlas »** | 5 / brand | 9:16, 30–40 s; 16:9, 60–75 s (YouTube featured video) | FR, AR, EN | 0 + engravings OK (P4) | Plates ink in (Bibans, Arc de Trajan). The site flips FR→AR. Six themes. Four promises (sur mesure · FR/EN/AR · prix publiés · Aperçu + conditions). Motto. [FB §1.1, §1.8, §1.10, §3.1, §3.5] |
| **V02** | « Quatre étapes. Zéro surprise. » | 2 | 9:16, 30–40 s; 16:9, 90 s with one chapter per step | FR, AR, EN | 0 (no call to action) | The four steps as written on the site, the Aperçu with its conditions [FB §1.4] |
| **V03** | « L'arabe, ce n'est pas une traduction » | 3 | 9:16, 20–30 s | FR, AR, EN | 0 | The studio's own site, `?lang=fr` → `?lang=ar`, as captured stills with a reading-direction wipe (the pipeline cannot seek a `<video>`) [PL §4.1 rule 6; FB §1.8; CH §1.7 H4] |
| **V04** | Essentiel: « Ce qui est inclus » | 2 | 9:16, 30–40 s | FR (DA and € cuts), AR (DA cut and a no-price cut), EN (no price) | 0 | The scope lines **without** « domaine et certificat configurés » [FB §1.5, §2.1 #17]; 2–4 weeks; 1 month of support |
| **V05** | Studio: « Le site qui porte vraiment l'entreprise » | 2 | same | same | 0 | Trilingual FR/EN/AR with RTL; CMS; 3–7 weeks; 3 months [FB §1.5] |
| **V06** | Moteur: « Quand il vous faut un outil métier » | 2 | same | same | 0 | Web app, payments, accounts, dashboards; 8–16 weeks; 6 months [FB §1.5] |
| V07 | Maintenance | 2 | 9:16, 20 s | FR, AR | Wait for the light-plan decision (X6) | Range and "sans engagement de durée" only, nothing on what it covers [FB §1.5, §2.2]. It is high against the market, so do not feature it alone yet [CA §6] |
| **V08** | « Fourchette indicative ou prix ferme ? » | 3 / 2 | 9:16, 20–30 s | FR, AR, EN | 0 | « Pas une fourchette, un chiffre. »; the firm price follows the scoping [FB §1.4, §1.5] |
| V09 | « Combien coûte un site ? Le tableau, avec ses sources » | 3 | 4:5 PDF carousel | FR (€, France only) | 0 | France and US ranges with the sources named on screen. **Not for Algeria:** Essentiel sits above the Algerian vitrine range, and showing only the favourable columns would mislead [FB §1.5] |
| **V10** | **L'Aperçu: launch trailer and explainer** | 1 | 9:16, 30–45 s, opening on H2 « Payé jusqu'ici : 0 DA. » then rewinding through the four moments; 16:9, 90–120 s with chapters [CH §5.2] | FR, AR, EN | **B** | [FB §1.3]. Nothing beyond the site's strings until the owner decides the Aperçu rules [OD › The Preview's rules] |
| **V11** | Service: Sites & applications web | 2 | 9:16, 20–30 s | FR, AR, EN | 0 | Trimmed line, no tool names [FB §1.6 f1] |
| **V12** | Service: Identité & systèmes visuels | 2 | same | same | 0 (shows the Alliance identity only with Gate C) | Without permission, show Numidea's own identity system: six themes, the wordmark, the plates [FB §1.6 f2, §3.5] |
| **V13** | Service: Automatisation & pipelines | 2 | same | same | 0 | Trimmed: no tool list, no model name [FB §1.6 f3] |
| **V14** | Service: Intelligence marché & produit | 2 | same | same | 0 | [FB §1.6 f4] |
| V15 | Service: Stratégie & conseil croissance | 2 | same | same | 0 | Use the brief in EN, not "Data, not vibes" [FB §1.6 note]. Next quarter |
| V16 | « Un studio à Bordj Bou Arréridj » (place and time) | 5 | 9:16, 20–30 s | FR, AR, EN | 0 | Bibans plate; 36°04′N · 4°46′E; « UTC+1 · l'heure de Paris en hiver »; Riyadh −2 h, Dubai −3 h [FB §1.1] |
| V17 | WorkspaceHQ, the founder's product | 4 | 9:16, 20–30 s | EN only (its screens are English) | 0 | « code public sur GitHub »; skip the screen with the model tile [FB §1.9, §2.1 #21]. Reusing the existing coded trailer would need an adapter (untested) [PL §6] |
| V18 | Glaive Store, portfolio demo | 4 | 9:16, 20 s | EN, AR | 0 | Demo badge **in frame** in every shot [FB §1.9] |
| V19 | « Quelques réalisations » | 4 | carousel or 9:16, 30 s | FR (French screens only) | **C**, per client | Bordj Steel `d2`/`m2`, AlmaFlowClim `d4` (never "en ligne chez le client"), the Alliance preview (its only French capture). Benefit lines only; no figures, phone numbers or brand chips [FB §1.9, §2.4, §3.2] |
| V20 | Case walkthrough « Ce que le site apporte au client » | 4 | 9:16, 40–60 s; 16:9, 2 min | FR, then others | **C** | One per permitted client, from the sheet's five benefit lines [FB §1.9] |
| V21 | « Ce qu'il faut pour un Aperçu » | 1 | carousel | FR, AR, EN | **B** + Aperçu rules | Site strings only. A "places this month" variant only with the real count across all channels that day [FB §1.3; CM R7] |
| V22 | « Travailler avec un studio en Algérie » | 2 | LinkedIn PDF | FR | Part 1 (time zone, languages, video call): 0. Part 2 (invoice): **A + D** + accountant | [FB §1.1, §1.7, §2.1 #19; KIT §5.5 P9] |
| V23 | « Après le oui » | 2 | carousel, 16:9 | FR, AR, EN | **D** | Only what the owner decides [GP #4] |
| V24 | « Comment cette vidéo est faite » | 5 | 9:16, 20–30 s | FR, EN | 0 | "Animée en code, image par image" is true [PL §4]. Never claim the plates are hand-engraved or AI-free: they were generated [FB §3.1] |
| V25 | « Un site, six thèmes » | 5 | 9:16, 20 s | any | 0 | The site's own theme switch, as stills [FB §3.5] |
| V26 | « À qui vous avez affaire » | 2 | carousel | FR, AR, EN | **A** | Legal name, registration, city, once published [GP #2] |
| C1 | « Cinq autres services » | 2 | carousel | FR | 0 | c1–c5 as written on the site; capabilities only [FB §1.6] |

**Long-form (16:9) for YouTube and the website**, one a month as a rule [CH §5.2]:
- V01 trailer: W1.
- V02 « Quatre étapes »: W3.
- V10 « L'Aperçu »: the week Gate B opens, W6 at the earliest.
- « Trois formules » (V04–V06 as chapters, with one maintenance line): W8.
- « Cinq services » (V11–V15): next quarter.

AR and EN versions are re-renders of the same file with the copy dictionary [PL §5.1]. They follow 1–2 weeks later, after review.

---

## 6. Channel plan and weekly rhythm

### 6.1 Per market

| Market | Accounts | Languages | Posts a week | Formats | Timing | Sources |
|---|---|---|---|---|---|---|
| **Algeria** | Instagram (professional) + Facebook Page, one each, shared with the other markets | FR (Tue), AR (Sun) | 2–3 (FR Reel, AR Reel, FR carousel in odd weeks), all cross-posted to the Page through Meta Business Suite | Reels 20–45 s; 4:5 carousel; Stories with a link sticker. WhatsApp Status twice a week from Gate B | Sunday–Thursday working days. Read Insights after 4 weeks before fixing posting times | [CH §2.3, §7, S12, S31] |
| **France** | The founder's LinkedIn profile, plus a minimal company page that reshares (it returns 404 today) [GP #7]. The FR Instagram posts are shared with Algeria | FR only, French-only screens | LinkedIn: 2 in odd weeks (Tue video 4:5 + Thu PDF), 1–2 in even weeks. Plus 15–20 minutes a working day of useful comments | 4:5 video 30–75 s; PDF carousel 6–10 pages (carousels beat video on LinkedIn); link in the first comment | Tue and Thu, 8:30 Paris time (the same as Algeria all winter) | [CH §3.3, S23, S24, S25; KIT §5.1, §5.4] |
| **Gulf** | TikTok (business account) + the shared Instagram | AR (Sun, every week from W2); EN (Thu, even weeks) | About 1.5. Hold this until the W8 review | 9:16, 15–40 s; bolder type and faster cuts on TikTok; TikTok's RTL safe-zone file for Arabic | Sunday–Thursday mornings, Gulf time | [CH §4.3, S15, S16] |
| **YouTube + website** | One YouTube channel; the site | FR first, then AR and EN | Shorts: FR every week, EN in even weeks. Long-form: see §5 | Chapters (a first timestamp at 00:00, at least 3, at least 10 s each), one SRT per language, playlists: Méthode / Formules / Services / L'Aperçu | — | [CH §5, S17, S18] |

**Why fewer posts than [CH §7].** The research grid had 3–4 Instagram posts, 2 TikToks, 2 LinkedIn posts and 1 Short a week. This plan trims it to three slots for three reasons:
- the brief asks for a cadence a one-person studio can sustain;
- each Arabic post needs a native review first;
- the founder's capacity is an open question (employment contract) [OD › Employment contract and capacity].

Buffer's data favours steadiness over volume (3–5 a week on Instagram) [CH S22]. The W8 review can add slots if the hours allow.

### 6.2 The three weekly slots

| Slot | Day | What | Where |
|---|---|---|---|
| **1. FR master** | Tue | This week's master, French | IG Reel + FB Page; LinkedIn (4:5, € cut where prices show); YouTube Short |
| **2. AR** | Sun | **Last** week's master, Arabic. This leaves the reviewer about 4 working days | IG Reel + FB Page; TikTok (Gulf cut); WhatsApp Status from Gate B |
| **3. Alternating** | Thu | Odd weeks: an FR carousel made from the master's frames. Even weeks: the EN cut of an earlier master | Odd: IG + FB carousel, LinkedIn PDF. Even: TikTok, IG Reel, YouTube Short |

### 6.3 Cuts rendered from one master

| Cut | Price display | Used on |
|---|---|---|
| FR-DZ | DA HT (« env. »), with a smaller ≈ € line | IG + FB |
| FR-FR | € HT (« env. »), "conversion approximative" | LinkedIn |
| AR-DZ | DA, «نحو … غير شاملة الضريبة» [à relire par un arabophone natif] | IG + FB |
| AR-GU | No price | TikTok |
| EN-GU | No price | TikTok, IG, YouTube Shorts |

Only the price videos (V04–V06) need all five cuts. The others need one cut per language. The pipeline renders them from one file with a flag [PL §5.3]. Allow about 19 minutes of render time for a 30 s spot in 9 files, or 40 minutes with the 2x margin [PL §3].

### 6.4 Hours

| Task | Steady week | Source |
|---|---|---|
| Choose the topic; write FR copy from the facts bank; draft EN and AR; send AR to the reviewer | 1 h | [CH §7] |
| Adapt the scenes and start the renders (renders run unattended) | 2–2.5 h | [PL §3] |
| Check on a real phone (safe zones, reading time, Arabic shaping); schedule in Meta Business Suite, TikTok Studio, LinkedIn and YouTube Studio | 1 h | [CH §7] |
| Captions, ref codes, pins, comment replies within the working day | 0.5 h | [CM › R4] |
| LinkedIn comments, 15 minutes × 5 days | 1.25 h | [KIT §5.1] |
| Weekly log | 0.5 h | [GP L10] |
| **Total** | **about 6–7 h** | |
| Long-form explainer (in its week) | +3–4 h | |
| One-off build in W0–W1: end card with the ref code, price card, timeline, carousel export (4:5 stills to PDF through the browser), channel presets, tighter safe-area check | about 8–10 h | [PL §5.2] |

**Minimum mode (about 3 h a week)** applies in a week with two or more Aperçus in progress, or when the owner's time is short:
- Tue FR and Sun AR only. LinkedIn gets the Tue video.
- No EN cut, no carousel.
- Long-form every other month.

**Aperçu builds always come before marketing.** The offer is the product.

---

## 7. Trust prerequisites: what blocks what

### 7.1 The gates

**Gate 0: ready to publish (target Sat 31 Oct)**

| Item | Blocks | If late |
|---|---|---|
| Handle, accounts, and one Arabic spelling of the name (the site uses نوميديا لابز [à relire par un arabophone natif]) [CH §1.10] | Everything | The launch slips a week |
| Native Arabic reviewer(s): one familiar with Algerian usage and one with Gulf business usage, or one person who covers both [CH §2.3; OD › A native Arabic reviewer] | Every AR post and every AR frame | The AR slot is skipped. **Never post unreviewed Arabic** |
| Owner listens to the code-made beds (10 minutes) [MU §3.5] | Music in any video | Publish with the pipeline's silent track. Never use in-app music in the master [MU §0] |
| Owner confirms that the existing generated engravings may be reused [FB §3.1, open question] | Plate-based scenes (V01, V16, and the end-card texture) | Use type, theme tokens, the site's own screens and the icon grammar [FB §3.5–3.6] |
| The founder's LinkedIn profile follows the kit, minus unbacked lines (see note 1 below). A real photo if he wishes, never a generated one [KIT §5.2; FB §1.2] | The France push | Post anyway, but do not run invitations |
| GitHub, Behance and Linktree bios rewritten (N3, about 1 h) [GP #5] | Linking the founder's profiles from any bio | Leave them unlinked |

**Gate A: a business buyers can verify (target W4)**

| Item | Blocks | If late |
|---|---|---|
| Own domain and mailbox (N1, then X1) [GP #1] | Any email on screen or in a bio (never the Gmail); directory profiles; a stable LinkedIn "Featured" link | WhatsApp and the site stay the only contact. No directories |
| Registration (ANAE, NIF) and the 14 legal fields published (N2) [GP #2; OC §1] | V26; V22 part 2; Malt (needs the NIF), Clutch, GoodFirms, Sortlist, Go Africa Online; any "who you are dealing with" line | France stays at brand and education level. Credentials are never claimed [FB §2.1 #18] |

**Gate B: allowed to invite messages (target W5)**

| Item | Blocks | If late |
|---|---|---|
| Privacy page live plus a real legal name. The kit says the privacy page must not wait for the ANAE registration, but the site's generator publishes it only with all 14 legal fields, so the owner decides how to publish it first [CH §1.11; OD › Privacy page live before the ads] | **Every post that invites people to write**: V10, V21, end-card calls to action, « écrivez-moi », WhatsApp calls to action | Soft launch continues. The Aperçu appears only as step 3 of the method |
| Dedicated WhatsApp number on a separate SIM, and WhatsApp Business set up (greeting with the privacy and STOP line, away message with the reply time, catalog) [CM › Launch gates; CH §2.4] | WhatsApp calls to action, catalog and Status | The site's contact form is the only path |
| Lawyer's answer: may the Aperçu be promoted before the ANAE registration? Does the Loi Toubon apply to organic posts aimed at France? [FB open question; CH §3.4] | V10 and the Aperçu push | Hold the push |
| Employment contract checked; time blocked for up to 4 Aperçus a month [OD › Employment contract and capacity] | The Aperçu push | Hold the push |
| Lead log and suppression list ready; private, expiring Aperçu hosting [CM › Lead qualification, Launch gates] | Taking and delivering Aperçus | Hold the push |

**Gate C: proof from others (messages sent W0, replies about a week later)**

| Item | Blocks | If late or refused |
|---|---|---|
| Written permission from each client shown (Bordj Steel, Alliance Travel, AlmaFlowClim), kept on file, covering organic posts and videos [OC §6; FB §2.3] | V19, V20, client logos, screenshots or names anywhere, the "Quelques réalisations" carousel | Proof comes from the studio's own site, the Glaive demo (badged) and WorkspaceHQ |
| The owner decides how to describe Bordj Steel and Alliance Travel: client or employer [OD › Employer or client] | The words « client » and « livré » | Use « Quelques réalisations » [FB §1.9] |
| AlmaFlowClim: did the client adopt the build? [OD › Clients' own domains] | Showing it as anything other than a redesign proposal | Present it as a proposal, or leave it out |

**Gate D: terms after the yes**

| Item | Blocks | If late |
|---|---|---|
| Payment schedule, ownership, hosting and revision rounds (N5) [GP #4] | V23; any payment, ownership or hosting line; V22 part 2 | Nothing is said about them [FB §2.2] |

**Other decisions**

| Item | Blocks | If late |
|---|---|---|
| **G:** AED and SAR prices (N7) [GP #6] | Any price for the Gulf | No price, or "about $… excl. tax" in DMs only |
| **W:** where the site's videos are hosted: (a) another origin, (b) final MP4s only in the deploy, or (c) on the host outside git [CH §5.3] | Embedding explainers on the site | Videos live on YouTube; the site may link to them (a plain link is a site change for the owner to approve) |
| GBP eligibility: does the founder meet clients in person? [CH §2.4] | A Google Business Profile in Algeria | No profile |
| Claims decision (N6): team, "6 ans" and the other OWNER-CONTENT §14 items [GP N6] | Any team content | Speak of « le studio » and the founder by name only |

**Notes**
1. Unbacked lines to remove from the kit's LinkedIn "Infos" text until the owner decides: "Projets en ligne : Bordj Steel … Alliance Travel" (waits for Gate C and the relationship wording) [KIT §5.2; FB §2.3].
2. Check whether the kit's LinkedIn post P2 (Bordj Steel, planned for 22 Oct) went out [CH §1.11]. If it did, ask Bordj Steel for permission first in the W0 message.

### 7.2 Soft launch, then push

- **Soft launch (W1 until Gates A and B open):**
  - the three slots, with no invitation to write;
  - bios link to the site with codes;
  - LinkedIn invitations by hand, at most 5 a working day [KIT §5.3];
  - no directories, no WhatsApp call to action.
- **Push (from the week both A and B are open, W6 at the earliest):**
  - V10 launches and is pinned;
  - every end card carries the Aperçu call to action and its conditions;
  - WhatsApp Status twice a week;
  - LinkedIn invitations up to 10 a working day, by hand, with no sales message when someone accepts [KIT §5.1, §5.3];
  - one directory a week [GP L1].
- **When 4 Aperçus are booked in a month (all sources):**
  - pause the Aperçu calls to action [CM › R7];
  - waitlist wording only if it is true, for example « Les Aperçus de [mois] sont tous pris : je prends les demandes pour [mois suivant]. » [KIT §5.5 P10].

---

## 8. The 12-week calendar

Abbreviations:
- IG+FB = Instagram Reel or post, cross-posted to the Facebook Page.
- TT = TikTok.
- LI = the founder's LinkedIn.
- YS / YL = YouTube Short / long-form.
- WA = WhatsApp Status (from Gate B).

Language is in each cell. **Bold** marks the week's master.

### 8.1 Week 0 (Mon 26 – Sat 31 Oct): set-up, nothing published

| Who | Task | Time | Source |
|---|---|---|---|
| Owner | Decide the handle and the Arabic spelling. Create the IG professional account, the FB Page, the TikTok business account, the YouTube channel and the LinkedIn company page, using the current site link (bios are updated after X1) | 1 h | [CH §1.10; GP #7] |
| Owner | LinkedIn profile per the kit: banner « Voyez votre nouveau site avant de payer : L'Aperçu », title, location, "Infos" without the unbacked lines (§7.1 note 1) | 1 h | [KIT §5.2] |
| Owner | N3: rewrite the GitHub, Behance and Linktree bios | 1 h | [GP N3] |
| Owner | N4: one message each to Bordj Steel, Alliance Travel and AlmaFlowClim, asking for written permission to show the site in posts and videos (screens, name, logo). Include the relationship wording and AlmaFlowClim's domain. Nomara is never shown, whatever its status [FB §2.1 #6] | 30 min | [OD › Clients and proof] |
| Owner | Name the Arabic reviewer(s) and agree a turnaround of about 4 working days | — | [CH §2.3] |
| Owner | Listen to the music beds; confirm engravings reuse; confirm that the 9–15 Nov paid test is off; check whether P2 went out; answer the GBP question; book the lawyer question (Aperçu before registration, Loi Toubon for organic posts) | 1 h | [MU §3.5; FB open questions; CH §11] |
| Production | Build the end card with the ref code, the price card (DA, €, none), the carousel export and the presets; tighten the safe area; write and render V01 (9:16 and 16:9) and V02 in FR; run the copy lint | 8–10 h | [PL §5.2–5.3] |

### 8.2 Publishing calendar W1–W12

| Week | Sun: AR (last week's master) | Tue: FR master | Thu: third slot | LinkedIn (FR, France) | YouTube long-form | Notes and gates |
|---|---|---|---|---|---|---|
| **W1** · 1–7 Nov | None: Sun 1 Nov is a public holiday in Algeria, and the AR trailer is still in review | **V01 launch trailer** FR → IG+FB (pin), YS | Carousel « Ce que vous obtenez » (4 promises from V01) FR → IG+FB | Tue V01 4:5 · Thu PDF of the same carousel | V01 16:9 FR (channel trailer) | Gate 0 met. Gate C replies awaited. LinkedIn invitations at most 5 a day |
| **W2** · 8–14 Nov | V01 AR → IG+FB (pin), TT | **V02 Quatre étapes** FR → IG+FB, YS | V01 **EN** → TT, IG, YS | Tue V02 4:5. Nothing Wed 11 (a French public holiday) [KIT §5.4] | — | — |
| **W3** · 15–21 Nov | V02 AR → IG+FB, TT | **V03 L'arabe, pas une traduction** FR → IG+FB, YS | Carousel « 4 choses qui changent de côté » FR → IG+FB | Tue V03 4:5 · Thu PDF « 4 choses… » | **V02 16:9 FR** (November explainer) | Expected: replies from clients (C), domain registered (N1), terms session (N5) |
| **W4** · 22–28 Nov | V03 AR → IG+FB, TT (the lead Arabic piece for the Gulf) | **V04 Essentiel** FR-DZ → IG+FB, YS | V02 **EN** → TT, IG, YS | Tue V04 FR-FR (€) · Thu: optional short text post (founder voice, site strings only: « Un prix avant le devis ») | — | **W4 check** (§10.6). Gate A target |
| **W5** · 29 Nov–5 Dec | V04 AR-DZ → IG+FB; AR-GU (no price) → TT | **V05 Studio** FR-DZ → IG+FB, YS | Carousel: **V19 « Quelques réalisations »** FR if Gate C is open; otherwise « Ce que contient un site Studio » FR → IG+FB | Tue V05 € · Thu PDF (same carousel) | — | Gate B target. If Gate A is open: directory 1 (Sortlist, free, FR) |
| **W6** · 6–12 Dec | V05 AR-DZ → IG+FB; AR-GU → TT | **V10 L'Aperçu launch trailer** FR → IG+FB (pin), YS, if A and B are open; otherwise **V16 Un studio à Bordj Bou Arréridj** FR | V03 **EN** → TT, IG, YS | Tue V10 or V16 4:5 | **V10 16:9 FR** if B is open | From B: Aperçu calls to action on every end card; WA Status starts; LinkedIn invitations up to 10 a day. Directory 2 (Clutch free / GoodFirms) |
| **W7** · 13–19 Dec | V10 or V16 AR → IG+FB, TT (+WA) | **V06 Moteur** FR-DZ → IG+FB, YS (+WA) | Carousel: **V21 « Ce qu'il faut pour un Aperçu »** FR if B is open; otherwise **C1 « Cinq autres services »** FR → IG+FB | Tue V06 € · Thu PDF (same carousel) | — | Directory 3 (Go Africa Online, basic). Local page L3 (BBA, FR + AR) on the site workflow, if Gate W allows a video |
| **W8** · 20–26 Dec | V06 AR-DZ → IG+FB; AR-GU → TT | **V08 Fourchette ou prix ferme ?** FR → IG+FB, YS | V17 WorkspaceHQ **EN** → TT, IG, YS | Optional (Christmas week in France) | **« Trois formules » 16:9 FR** | **W8 review** by Tue 29 Dec (§10.6). Ask permitted clients for a review once a profile exists (X8) |
| **W9** · 27 Dec–2 Jan | V08 AR → IG+FB, TT | **V11 Sites & applications web** FR → IG+FB, YS | Optional: V24 « Comment cette vidéo est faite » FR → IG+FB, or rest | Optional | — | Light week: Fri 1 Jan is a holiday everywhere. Plan the next quarter's slate |
| **W10** · 3–9 Jan | V11 AR → IG+FB, TT | **V12 Identité & systèmes visuels** FR → IG+FB, YS | V05 Studio **EN** (no price; trilingual with RTL) → TT, IG, YS | Tue V12 · Thu PDF **V22 « Travailler avec un studio en Algérie »** part 1 | AR and EN versions of V02, V10 and « Trois formules », as reviews allow | Malt, only if the NIF exists and a small test payout has worked [CM › Outreach] |
| **W11** · 10–16 Jan | V12 AR → IG+FB, TT | **V13 Automatisation & pipelines** FR → IG+FB, YS. Tue 12 Jan is a public holiday in Algeria (Yennayer): post Wed 13 if preferred | C1 « Cinq autres services » FR → IG+FB if not used in W7; otherwise no IG post | Tue V13 · Thu PDF **V09 « Combien coûte un site ? »** (€, sources on the page) | — | Decisions for the next quarter: AED/SAR (G), percussion-only bed for Ramadan posts [MU §5.5]. Ramadan is expected around February 2027, after this window |
| **W12** · 17–23 Jan | V13 AR → IG+FB, TT | **V14 Intelligence marché & produit** FR → IG+FB, YS, or **V20 case walkthrough** FR if Gate C is open | V10 **EN** → TT, IG, YS if B is open; otherwise V18 Glaive demo **EN** (badge in frame) | Tue V14 or V20 · Thu optional | « Cinq services » 16:9 in production (publish next quarter) | **W12 review** Sat 23 Jan (§10.6) |

**Counts if the gates open on time:**
- 12 Tuesday masters; 11 Sunday AR posts (W2–W12); 6 EN cuts (even Thursdays); 4–5 FR carousels (W9's slot is an optional video).
- 16–20 LinkedIn posts.
- 4 FR long-form videos.
- TikTok gets every AR and EN cut.

### 8.3 Swap rules (keep the calendar honest when gates slip)

1. **An item waits for a gate.** If a planned item's gate is not open on the Monday of its week, use the fallback named in its cell. Never use a lighter version of the gated item, such as a client screen "blurred a little" or an Aperçu post "without a call to action but with a WhatsApp number".
2. **Gate C opens for a client.** The next odd-Thursday carousel becomes V19 for that client. The next free Tuesday after W9 can become V20.
3. **Gate A opens.** The next free odd-Thursday carousel becomes V26 « À qui vous avez affaire » (FR), and its EN version follows on the next even Thursday.
4. **Gate B opens later than W6.** V10 moves to the first Tuesday after it opens, and the planned master moves one week later. The Thursday after that becomes V21.
5. **An AR review is late.** Skip the Sunday slot and post that AR cut the following Sunday. Two late reviews in a row mean recruiting a second reviewer or moving AR to alternate weeks [§12].
6. **Two or more Aperçus are in progress.** Switch to minimum mode for that week (§6.4).

---

## 9. Free levers

These are ordered as in the plan: domain, legal identity, then reviews [CH §6; GP › The plan].

| # | Lever | Market | Precondition | When | Effort | What to do | Source |
|---|---|---|---|---|---|---|---|
| 1 | Own domain and mailbox | All | N1 | W1–W3 | Owner 1–2 h, dev about 1 day | Move all bios and links at once. The codes stay the same | [GP #1] |
| 2 | **WhatsApp Business** | DZ, Gulf | Dedicated number, privacy page (Gate B) | Set up W4; live W6 | Half a day | Profile; greeting with the privacy and STOP line; away message with the reply time in Algerian and Gulf time; one catalog item per package and one for the Aperçu (published ranges, « env. HT », no payment methods); Status twice a week; labels for lead stages. No message started by the studio | [CH §2.4, S36, S37; CM › Outreach; KIT §6] |
| 3 | **Founder LinkedIn** | FR (also DZ and Gulf: 5.5 M, 10 M and 12 M members) | Gate 0 profile | From W1 | In §6.4 | 2 posts a week, 15–20 minutes of comments a day, invitations by hand (5 a day, then 10 after A and B), link in the first comment, "Featured" with `fr-li-bio` | [CH §3.3, §1.1; KIT §5] |
| 4 | Facebook Page "as a business check" | DZ | Accounts | W0 | 30 min | Same name, bio, hours and WhatsApp as the site; pin V01 and later V10. Never embed a Facebook plugin on the site | [CH §2.4] |
| 5 | YouTube as the library | All | — | From W1 | In §6.4 | Featured video V01; playlists; chapters; one SRT per language; a ref code in every description | [CH §5.2] |
| 6 | **Google Business Profile**, Bordj Bou Arréridj | DZ only | The founder meets clients in person or travels to them; address decision | W2 if eligible | 1 h plus verification | Service-area business with the address hidden; no keywords in the name. **Not eligible in France or the Gulf** | [CH §2.4, §3.5, §4.4, S32–S34] |
| 7 | **Directories**, one a week | FR: Sortlist (free listing), Malt (after the NIF and a test payout). Gulf: Clutch (free profile), GoodFirms. DZ: Go Africa Online (basic) | Gate A; reviews later | W5–W10 | 1–2 h each | Real facts only; € "à partir de" on Sortlist; no paid credits (organic only) | [CH §6, S34b, S35, S38; GP #11, L1] |
| 8 | **Local and guide pages** with a self-hosted explainer | DZ, FR, Gulf | Gate W; owner facts per page; site workflow (not this folder) | L3 from W7, L4 from W10; L2 and L5 next quarter | About 1 day each | L3 « Création de site web à Bordj Bou Arréridj » (FR + AR); L4 « Combien coûte un site web en Algérie » (FR + AR); L2 /ar/ and /en/ entry pages; L5 the French guide (after A and D) | [GP #12, L2–L5] |
| 9 | Client reviews and credits | All | Gate C, then a profile to review on | W8 onwards | Owner messages | Ask once for a Google, Clutch or LinkedIn recommendation; ask for a « Site : Numidea Labs » credit on their own domain. No review widget on the site | [GP #3, #8, X8] |
| 10 | Monthly link check | All | — | Last Thursday of each month | 20 min | Every bio, pinned post and description link works; take down time-bound posts after their month | [CA §8.13] |
| — | **Not now** | Ouedkniss (it places the studio next to its lowest price anchor); Snapchat; a separate TikTok push for Algeria; paid Sortlist or Codeur credits; LinkedIn Ads | | | | Reconsider at W12 | [CH §2.4, §4.6; CM › Outreach] |

---

## 10. Measurement without trackers

### 10.1 What exists

- **Links carry codes into every contact.** A link to the site can carry `?ref=` and `utm_*`. The form's email body gets a « Source : … » line, and every WhatsApp prefilled message ends with ` [ref]`. The ref is cleaned to `[A-Za-z0-9_-]` and cut at 20 characters (checked in `assets/app.js` at the `refTag()` function).
- **The site stores nothing** [FB §1.11].
- **Language and currency in the link:** `?lang=` and `?cur=` set the visitor's language and currency [FB §1.11].

**No pixel, no analytics script, no YouTube or Facebook embed** [CA §8.5]. Also no link-shortener or link-in-bio service: these log clicks on a third party's servers. That last point is this plan's inference from the no-tracker promise.

### 10.2 Code scheme

The scheme is `{market}-{platform}-{lang}-{id}`, at most 20 characters, `a-z 0-9 -` [CH §1.8].
- **Market** = the post's intended market in this calendar: FR and AR posts on Instagram and Facebook → `dz`; LinkedIn → `fr`; TikTok and EN posts → `gu`; YouTube → `yt`.
- The lead's real country goes into the log from the conversation.

**Fixed codes for bios and profiles** (base URL `https://brvetr4ve1er.github.io/Numidea.tech/` until X1, then the own domain):

| Where | Link |
|---|---|
| Instagram bio (several links if the app allows; check in the app) | `?lang=fr&ref=dz-ig-bio` · `?lang=ar&ref=dz-ig-bio-ar` · `?lang=fr&cur=eur&ref=fr-ig-bio` · `?lang=en&cur=usd&ref=gu-ig-bio` |
| Facebook Page website field | `?lang=fr&ref=dz-fb-bio` |
| TikTok bio (if the account can show a link; check in the app) | `?lang=ar&cur=usd&ref=gu-tt-bio` |
| LinkedIn "Featured" and contact info | `?lang=fr&cur=eur&ref=fr-li-bio` |
| YouTube channel links | `?ref=yt-bio` |
| WhatsApp Business profile | `?ref=wa-bio` |
| Google Business Profile | `?lang=fr&ref=dz-gbp` |
| Directories | `fr-sortlist`, `fr-malt`, `gu-clutch`, `gu-goodfirms`, `dz-gao` |

**Per-post codes, where a link is clickable:**

| Placement | Clickable? | Code | Example |
|---|---|---|---|
| Facebook Page post text | Yes | `dz-fb-{lang}-w{NN}` | `dz-fb-ar-w05` |
| Instagram Story link sticker | Yes | `dz-ig-{lang}-w{NN}` | `dz-ig-fr-w06` |
| Instagram Reel or carousel caption | No: the bio code counts | — | — |
| TikTok caption | No: the bio code counts | — | — |
| LinkedIn first comment | Yes | `fr-li-fr-w{NN}` | `fr-li-fr-w07` |
| YouTube long-form description | Yes | `yt-yl-{lang}-{slug}` | `yt-yl-fr-apercu`, `yt-yl-ar-formules` |
| YouTube Short | Links in Shorts descriptions may not be clickable (check in Studio): rely on the channel links and on linking the Short to its long-form video | `yt-ys-{lang}-w{NN}` where possible | `yt-ys-en-w04` |
| WhatsApp Status text | Yes | `dz-wa-{lang}-w{NN}` | `dz-wa-fr-w07` |

The longest code, `yt-yl-ar-formules`, has 17 characters.

### 10.3 The first-reply question

The first reply in every conversation asks where the person found the studio [CH §1.8]:
- FR: « Merci ! Pour mieux vous répondre : où nous avez-vous découvert ? »
- EN: "Thank you! One quick question: where did you find us?"
- AR: «شكراً! سؤال سريع: من أين تعرّفت علينا؟» [à relire par un arabophone natif]

Ask also which post they saw. It is the only attribution there is for Reels and TikToks.

### 10.4 Lead log (existing)

Use the private Numidea Lead Log [CM › Budget gates, Lead log]. It stores **only the business and the stage**; names and phone numbers stay in WhatsApp.

One row per conversation:

| Column | Values |
|---|---|
| Date | — |
| Ref (or "none") | — |
| Answer to "where did you find us?" | — |
| Market | DZ / FR / GU |
| Business type | — |
| Registered? | Y / N / ? |
| Project | Site / web app / other |
| Stage | Conversation → qualified → Aperçu booked → delivered → yes / no |
| First-reply time | Hours |
| Aperçu content received (date) | — |
| Aperçu delivered (date) | — |

The Aperçu counter is shared across all sources [CM › Lead qualification].

### 10.5 Weekly log (30 minutes, Thursday evening or Saturday)

| Week | Slots planned / published | AR late? | IG: avg watch time · sends per reach (best post) | FB: top Reel plays | TT: views · profile visits | LI: impressions · avg watch time (video), impressions (PDF) | YS: viewed vs swiped (best) | YL: views · avg % viewed | Conversations (by ref / by answer) | Qualified | Aperçus booked / delivered / yes | Gates moved | Next week: keep / change |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| W1 | 3 / | | | | | | | | | | | | |

Rules for the log:
- Platform numbers are copied from each platform's own insights [CH §1.8].
- Compare markets only after 8 weeks [GP L10].
- Keep the log private, next to this file. It never goes into the public repository.

### 10.6 Reviews and decision rules

| Review | Questions | Decision rules (planning rules, set in advance) |
|---|---|---|
| **W4 check** (Sat 28 Nov) | Were at least 10 of 12 slots published? How long does the AR review take? Which gates moved? | Under 9 of 12 slots: switch to minimum mode until the W8 review. Gate A or B still closed: keep the soft launch, and move the owner's gate tasks ahead of new content |
| **W8 review** (by Tue 29 Dec) | Conversations and qualified requests by channel and lever; signals by topic; owner hours | **0 conversations from a platform over 8 weeks, and flat signals:** halve its effort and move the hours to directories, GBP or local pages, where competitors win [CH §0.4]. **At least 1 qualified request:** keep the plan and remake the format that brought it. **Gulf TikTok: 0 profile visits leading to the site:** keep AR only and drop EN [CH §4.3, item 6] |
| **W12 review** (Sat 23 Jan) | O1–O4; gates; which hooks held attention; capacity | Next quarter's slate (V15, V07, « Cinq services », AED/SAR, Ramadan). Whether to propose a small paid test: only if Gates A, B and C are open and an organic format has earned qualified requests, reusing the kit's go/no-go rules [CM › Budget gates]. The owner decides |

---

## 11. What we won't do

Items 1–13 are the vault's competitor analysis §8, applied to organic content. Items 14 onwards come from the standing rules and this research.

1. **Counters and statistics without a source.** This rules out project, client or year counts; satisfaction percentages; and the clients' own figures visible in screenshots, such as 25 000 t/an, 1.2K+, 98 % and 150+ [CA §8.1; FB §2.1 #7, #8].
2. **Self-awarded rankings.** No « meilleur », « n°1 », « leader », and no « le seul studio qui… ». The research found no Algerian seller that builds before payment, but it scored 12 sellers, not all of them [CA §8.2, §4.1; FB §2.1 #9].
3. **Permanent discounts or invented scarcity.** No discount. A "places left" line only with that day's real count across all channels. Take time-bound posts down after their month [CA §8.3; CM › R7].
4. **Concepts shown as client work.** The Glaive badge stays in frame. Mock-ups say « exemple ». A client site is never presented as an Aperçu. AlmaFlowClim is never shown as live on its own domain [CA §8.4; KIT §6; FB §1.9].
5. **Trackers on the site.** No pixel, no YouTube iframe, no Instagram or Facebook widget, no click-logging shortener [CA §8.5; CH §5.3].
6. **A lead database that breaks the "nothing is stored" promise.** The lead log holds the business and the stage only [CA §8.6; CM › Lead log].
7. **Lock-in language.** Maintenance is « sans engagement de durée », and that is a contrast to keep [CA §8.7; FB §1.5].
8. **Payment terms of any kind until the owner decides them,** so no "100% up front" either. Payment methods are never named in a post, a catalog item or a reply template [CA §8.8; FB §2.2].
9. **Guarantees capacity cannot keep.** No "48 h", no "réponse en 1 h", no "satisfait ou remboursé". The only promises are the site's: a first reply within 24 working hours, and the Aperçu in 5 working days once the content has arrived [CA §8.9; FB §1.7].
10. **Content in bulk.** No auto-generated posts, comments or pages. Few pages, each one true [CA §8.10].
11. **Pretending to be local.** No Gulf or French address or number presented as an office, no flags, no landmarks. "Studio based in Algeria" in every Gulf piece [CA §8.11; CM › Rules for every ad].
12. **Comparisons without a source,** and no named competitor in any post. The market table appears only with its sources [CA §8.12; CH §1.7].
13. **Letting proof decay.** A monthly link check; outdated posts come down [CA §8.13].
14. **AI-generated footage, images, voices or music,** and no new generations [DL › Standing rules, "No more generations"]. Do not reuse the one generated photographic scene from the paid-campaign creative kit [CM › The ads]. Never describe the plates as hand-engraved or "sans IA" [FB §3.1].
15. **A face for the founder.** Real photos only if he supplies them. `coin-king.webp` never stands in for him [FB §1.2, §2.4].
16. **Anything on the do-not-claim list:** team size; "6 ans"; « des clients en France »; stack or tool names; Nomara; client counts or results; testimonials; "open source"; « pas d'intermédiaire »; « 20 % plus rapide »; studio registration or legal claims; VAT mechanics [FB §2.1].
17. **AI model names** anywhere, including the WorkspaceHQ features screen and the trimmed service lines [FB §2.1 #21].
18. **Trending sounds or general in-app music libraries.** The platform libraries are used only for posts that stay inside one app. The master carries code-made music. The WorkspaceHQ trailer sounds are not reused [MU §0, §6].
19. **Bought reach of any kind:** no engagement pods, bought followers or likes, automated invitations, messages or comments, or profile scrapers. No WhatsApp message started by the studio [KIT §5.1, §6].
20. **The "Boost" button.** Boosting a post is ad spend, and the owner's rule is organic only for now (2026-10-26).
21. **Unreviewed Arabic.** No FR and AR mixed in one frame; no English screens in posts aimed at France [CH §2.3, §3.4; FB "Channels"].
22. **Vanity targets.** Followers, likes and views are signals, not goals (§2.4).

---

## 12. Risks

| Risk | Effect | Response | Source |
|---|---|---|---|
| The owner has little time (employment contract, capacity) | Missed slots; slow replies that break the 24-hour promise | Minimum mode; Aperçus and replies come before posts | [OD › Employment contract and capacity] |
| Gates A and B slip past W6 | No push; the France and Gulf audiences find a business they cannot check | The soft launch continues honestly; the swap rules apply; gate tasks go first in the owner's week | [CA §1] |
| Arabic review becomes a bottleneck | AR slots slip; the Gulf goes quiet | A second reviewer, or AR on alternate weeks. Never publish unreviewed | [CH §2.3] |
| Clients refuse permission, or stay silent | No client proof | Own site, WorkspaceHQ, Glaive (badged); later an Aperçu-to-site gallery with consent | [GP L8] |
| New accounts get little reach | Low signals | Judge by conversations and refs; move hours to free levers at W8 | [CH §0.4] |
| A post states an unbacked claim | Credibility damage | Copy lint, a facts-bank check before each render; correct and repost within the day | [PL §2.8; FB §0] |
| A music claim or mute | A post is blocked or muted | Code-made music with the proof ledger; re-upload rather than argue | [MU §4.3] |
| A legal point (promotion before registration, Loi Toubon) | Exposure in France | The lawyer's question is a Gate B item; French-only screens for France | [CM › Legal points] |
| The provenance of the engravings | A "no AI" reading of the brand | Owner confirmation (Gate 0); never claim they are hand-made | [FB §3.1] |
| Aperçu demand exceeds 4 a month | Broken promise | Pause rule R7; a waitlist only when true | [CM › R7] |
| Comments ask for AED/SAR prices, payment methods or ownership terms | Pressure to improvise | Reply with facts only. USD "about … excl. tax" for the Gulf. « Le prix ferme vient par écrit, après le cadrage » (step 2). On payment and ownership: the founder answers in writing once the terms exist (Gate D) | [FB §1.4, §2.2] |

---

## 13. Open questions for the owner

Gathered from the research files, plus the questions this plan adds:

1. **Start date and hours.** Is W1 = Sun 1 Nov right? Are about 6–7 hours a week realistic, or should the plan start in minimum mode (about 3 hours)? [CH §11 Q8]
2. **Accounts.** Which handle, and which Arabic spelling of the name? One account per platform for all markets (recommended), or separate Gulf accounts? [CH §11 Q1]
3. **Arabic reviewers.** One for Algeria and one for the Gulf, or one person? Is paying for review acceptable under "organic only"? It is not ad spend. [CH §11 Q7]
4. **Music.** After listening, is the code-made bed acceptable, and which seed? Should Arabic cuts or Ramadan posts use the percussion-only bed? Where did the WorkspaceHQ trailer sounds come from? [MU §7]
5. **Engravings.** May the 25 existing generated engravings be reused in videos? [FB open question]
6. **Clients.** Send the three permission messages this week. How should Bordj Steel and Alliance Travel be described: client or employer? Did AlmaFlowClim adopt the build? Did LinkedIn post P2 go out? [OD › Clients and proof; CH §11 Q4]
7. **Gate B items.** When will the privacy page, the legal name, the dedicated WhatsApp number and private Aperçu hosting exist? And what is the lawyer's answer on promoting the Aperçu before the ANAE registration? [CH §11 Q2; FB open questions]
8. **The Aperçu's rules.** Do sole traders count as registered? When do the 5 days start? What happens after a "no"? Should organic posts state the kit's extra qualifiers (projects from about 600 € HT, a decision within 3 months)? [OD › The Preview's rules; FB §1.3]
9. **Website videos.** Option (a), (b) or (c) for hosting the MP4s? [CH §5.3]
10. **Google Business Profile.** Do you meet Algerian clients in person? [CH §11 Q5]
11. **Paid test.** Is the 9–15 Nov Meta test cancelled, or only postponed until after the W12 review? [CM › At a glance]
12. **Real photos.** Will you supply any real photos of yourself or the workspace, for LinkedIn or behind-the-studio posts? Videos stay faceless either way. [FB §1.2]

---

## Sources

Paths below are relative to the session scratchpad folder that holds `marketing/` and `kb/` (never inside the public repository).

Research files (this folder):
- `marketing/facts-bank.md`
- `marketing/channels.md` (web sources S1–S48 are listed there)
- `marketing/music.md` (web sources M1–M25 are listed there)
- `marketing/pipeline.md`

Private vault:
- `kb/private-vault/notes/research/competitor-analysis-and-plan.md` (§1, §4, §6, §7, §8)
- `kb/private-vault/Maps/Gaps and plan.md`
- `kb/private-vault/Maps/Markets.md`
- `kb/private-vault/Maps/Competitors.md`
- `kb/private-vault/Maps/Campaign.md`
- `kb/private-vault/Maps/Owner decisions pending.md`
- `kb/private-vault/Maps/Decision log.md` (Standing rules)
- `kb/private-vault/notes/campaign/campaign-outreach-fr.md` (§5 founder LinkedIn plan, §6 wording)

Public repository (read only):
- `/home/user/STICKITTY.INC/OWNER-CONTENT.md`
- `/home/user/STICKITTY.INC/assets/app.js` (`refTag()`, lead source)
- `/home/user/STICKITTY.INC/index.html` (CSP `media-src 'self'`, `frame-src 'self'`)
- `/home/user/STICKITTY.INC/scripts/legal-data.mjs` and `/home/user/STICKITTY.INC/scripts/voices-data.mjs` (status checked at commit `82603b0`)
