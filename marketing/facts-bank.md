# Numidea Labs: facts bank for marketing copy and video scripts

PRIVATE. Never copy this file, or anything made from it, into `/home/user/STICKITTY.INC` (public repository).
Built 2026-10-26 from the repository at commit `82603b0` (2026-10-26 16:57 UTC) and the private vault (maps dated 2026-10-19).

## How to use this bank

- **Quote, don't invent.** A script may use a fact only if it is in section 1, worded as given here or restated more plainly. No new numbers, clients, features, results or promises (the copy rule "rewrites restate, no new facts", vault `Maps/Copy audit.md:121`).
- **Check section 2 before every script.** Several sentences that are live on the site today are on the do-not-claim list (team size, "6 ans", client counts, tools). The site is not a safe source just because it says something.
- **Status tags** used below:
  - **OK**: usable as written.
  - **OK + condition**: usable only with the condition stated next to it.
  - **OWNER**: waits for an owner decision or permission; do not use yet.
  - **NO**: never use.
- **Citations** are `file:line`. `app.js` means `/home/user/STICKITTY.INC/assets/app.js`; `index.html` means `/home/user/STICKITTY.INC/index.html`; `scene-data.mjs` means `/home/user/STICKITTY.INC/scripts/scene-data.mjs`. For app.js keys, three line numbers are given as FR / EN / AR (the French and English I18N blocks start at app.js:14 and :112, the Arabic at :213; the EXTRA blocks at :315, :427 and :542).
- **Arabic.** Every Arabic string in this file is marked **[à relire par un arabophone natif]**. The site's own Arabic carries the same pending-review banner (app.js:210-212, :539-541; OWNER-CONTENT.md item 8). Arabic conventions on the site: Western digits, arrows pointing left (←), singular "you", brand names in Latin script except نوميديا [à relire par un arabophone natif] in prose (app.js:210-212). Never add letter-spacing to Arabic text: tracking breaks the joins of the script (assets/styles.css:86-92).
- **Prices.** Every price in a video carries "env." + « HT » in French, "about" + "excl. tax" in English, «نحو» + «غير شاملة الضريبة» in Arabic [à relire par un arabophone natif] (campaign kit rule, vault `notes/campaign/campaign-readme.md:250`). Dinars are the reference; euros and dollars are rounded conversions at the Bank of Algeria official rate of October 2026 (app.js:1698-1707). No AED or SAR price exists anywhere: the Gulf gets USD only.
- **The Aperçu never appears without its conditions** (registered businesses only, at most 4 a month across all clients, free and without obligation). Wherever "5 jours ouvrés" appears, add « à réception de vos contenus » / "once we have your content" / «من استلام المحتوى» [à relire par un arabophone natif] (campaign kit, `campaign-readme.md:249`; the site's own timeline starts with "Vous envoyez votre contenu", app.js:319).
- **Channels.** France: everything on screen in French, including screenshots and mock-ups (Loi Toubon; kit rule `notes/campaign/campaign-readme.md:251`). Gulf: "studio based in Algeria", no local-office look, no flags, landmarks or emblems, fictional businesses in mock-ups, no payment methods on screen (vault `Maps/Campaign.md:73`).
- **Hard rules restated:** no model names anywhere (strip them from the service lines that contain one, see 1.6 and 2.1 #21); never mention USDT or any crypto payment; never generate or depict a face for the founder; no new AI-generated images, footage or audio ("No more generations", owner, 2026-10-10, vault `Maps/Decision log.md` standing rules); measurement only through `?ref=` / `utm_*` codes and platform-native insights (section 1.11).

---

## 1. Facts marketing may use

### 1.1 Identity, place, contact

| Fact | FR (exact) | EN (exact) | AR (exact) [à relire par un arabophone natif] | Source | Status |
|---|---|---|---|---|---|
| Name | Numidea Labs | Numidea Labs | Numidea Labs; in prose نوميديا لابز [à relire par un arabophone natif] | index.html:42 (JSON-LD); app.js:109 / :207 / :308 | OK |
| What it is (hero label) | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Web & software studio · Bordj Bou Arréridj, Algeria | استوديو ويب وبرمجيات · برج بوعريريج، الجزائر [à relire par un arabophone natif] | app.js:20 / :118 / :219 | OK |
| Headline | Votre site sur mesure, en français, anglais ou arabe. | Custom websites, in English, French and Arabic. | موقعك المخصّص، بالعربية والفرنسية والإنجليزية. [à relire par un arabophone natif] | app.js:21 / :119 / :220 | OK |
| One-line description | Studio web et logiciel à Bordj Bou Arréridj, Algérie. On conçoit, on code, on livre et on suit vos sites et applications, en français, anglais et arabe. | Web and software studio in Bordj Bou Arréridj, Algeria. We design, build, launch and support websites and web apps in English, French and Arabic. | استوديو ويب وبرمجيات في برج بوعريريج، الجزائر. نصمّم ونبرمج ونطلق مواقع وتطبيقات الويب ونتابعها بعد الإطلاق، بالعربية والفرنسية والإنجليزية. [à relire par un arabophone natif] | app.js:17 / :115 / :216 | OK |
| Share-card tagline | Numidea Labs — Voyez votre page d'accueil avant de payer | (none on the site; closest: "Zero risk: see it before you pay.", app.js:514) | (none on the site; closest: «بلا مخاطرة. ترى النتيجة قبل أن تدفع.», app.js:629) [à relire par un arabophone natif] | index.html:26, :33 | OK |
| Coordinates (hero dimension line) | 36°04′N · 4°46′E | same | same | index.html:302 | OK (visual device) |
| Time zone | UTC+1 · l'heure de Paris en hiver, 1 h de moins en été | UTC+1 (Algeria) · 2 h behind Riyadh, 3 h behind Dubai · same as Paris in winter, 1 h behind in summer | UTC+1 (توقيت الجزائر) · أقلّ بساعتين من توقيت الرياض، وبثلاث ساعات من توقيت دبي [à relire par un arabophone natif] | app.js:403 / :515 / :630 | OK |
| Footer motto | Enraciné en Numidie · bâti sur des idées | Rooted in Numidia · built on ideas | جذورها في نوميديا · مبنيّة على الأفكار [à relire par un arabophone natif] | app.js:110 / :208 / :309 | OK |
| Sign-off line | Construit à Bordj Bou Arréridj, avec du café noir et du TypeScript. | Built in Bordj Bou Arréridj, with black coffee and TypeScript. | بُني في برج بوعريريج، بقهوة سوداء و TypeScript. [à relire par un arabophone natif] | app.js:108 / :206 / :307 | OK (tone line about this site) |
| Email | hamissemohamedyasser@gmail.com | same | same | index.html:47, :1197, :1276 | OK + condition: it is the founder's personal Gmail; the studio has no domain mailbox yet (OWNER-CONTENT.md item 5). Prefer WhatsApp or the site as the call to action |
| WhatsApp | +213 672 41 25 78, "message gratuit via l'appli" | "free message in the app" | «رسالة مجانية عبر التطبيق» [à relire par un arabophone natif] | index.html:158 (`NUMIDEA_WA`), :1198; app.js:403 / :515 / :630 | OK + condition: the campaign kit asks for a dedicated business number if this one is personal (vault `Maps/Owner decisions pending.md:187`) |
| Website | https://brvetr4ve1er.github.io/Numidea.tech/ (`?lang=en`, `?lang=ar` for the other languages) | same | same | index.html:18-22 | OK + condition: no own domain yet; the canonical host is GitHub Pages (vault `Maps/Deploy.md:15`). Add `?ref=` codes (1.11) |
| Founder's public profiles | LinkedIn, GitHub, Behance | same | same | index.html:1066-1071 | OWNER: the gap plan says the GitHub and Behance bios need rewriting before traffic is sent there (`Maps/Owner decisions pending.md:104-106`) |

### 1.2 The founder (no face, ever)

| Fact | FR | EN | AR [à relire par un arabophone natif] | Source | Status |
|---|---|---|---|---|---|
| Name | Yasser Hamisse | Yasser Hamisse | Yasser Hamisse | index.html:1056; JSON-LD :61 | OK + condition: the owner has not fixed one order for his name across pages (LinkedIn uses "Mohamed Yasser Hamisse"); use "Yasser Hamisse" as the site does |
| Role | Designer graphique & développeur web · Fondateur | Graphic designer & web developer · Founder | مصمّم غرافيك ومطوّر ويب · المؤسّس [à relire par un arabophone natif] | app.js:55 / :153 / :254 | OK |
| Languages | FR C2 · EN C1 · AR langue maternelle | FR C2 · EN C1 · AR native | FR C2 · EN C1 · العربية لغة أم [à relire par un arabophone natif] | index.html:1059; app.js:75 / :173 / :274 (`founder.arPill`) | OK |
| Education | Informatique — Université Mohamed El Bachir El Ibrahimi · 2018–2024 | Computer Science — Univ. Mohamed El Bachir El Ibrahimi · 2018–2024 | علوم الحاسوب — جامعة محمد البشير الإبراهيمي · 2018–2024 [à relire par un arabophone natif] | app.js:59 / :157 / :258 | OK |
| Freelance since | Designer graphique & développeur web, en freelance · 2019 — aujourd'hui | Freelance graphic designer & web developer · 2019 — present | مصمّم غرافيك ومطوّر ويب، مستقل · 2019 — حالياً [à relire par un arabophone natif] | app.js:61-62 / :159-160 / :260-261; index.html:1084 | OK + condition: say "depuis 2019"; never turn it into a count of years (see 2.1, "6 ans") |
| Founder's promise | Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement. | I turn the brief into the build, and I stay once it's live. | أحوّل الفكرة إلى منتج، وأبقى بعد الإطلاق. [à relire par un arabophone natif] | second sentence of app.js:56 / :154 / :255 | OK (the first sentence of the same string says "Six ans": do not quote it) |
| Section title | Le studio a un visage. | The studio has a face. | للاستوديو وجه. [à relire par un arabophone natif] | app.js:53 / :151 / :252 | OWNER: true only once a real photo exists; today the card shows a monogram "Y" (index.html:1050-1054) |

Visual rule: no photo of the founder exists in the repository. Never generate one, never draw a face, never use the `coin-king` engraving or any figure to stand for him. A safe stand-in is `assets/illus/bench.webp` (the founder's workbench, seen from above, no person) or the monogram "Y".

### 1.3 L'Aperçu, the signature offer

All strings below are at app.js:402-404 / :514-516 / :629-631 unless stated.

| Element | FR | EN | AR [à relire par un arabophone natif] |
|---|---|---|---|
| Tag | Offre signature | Signature offer | عرض مميّز [à relire par un arabophone natif] |
| Name | L'Aperçu | The Preview | المعاينة [à relire par un arabophone natif] |
| Promise | Zéro risque. Juste la preuve. | Zero risk: see it before you pay. | بلا مخاطرة. ترى النتيجة قبل أن تدفع. [à relire par un arabophone natif] |
| Brief | Avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu, en 5 jours ouvrés. On vous la présente en visio (30 min). Si vous dites non, vous ne devez rien. | Before any payment, we build your new site's homepage with your own content, in 5 working days, and walk you through it on a 30-minute video call. If you say no, you owe nothing. | قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت، خلال 5 أيام عمل، ونعرضها عليك في مكالمة فيديو مدّتها 30 دقيقة. إن قلت لا، فلا شيء عليك. [à relire par un arabophone natif] |
| Terms (always with the offer) | Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. | Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients. | مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. [à relire par un arabophone natif] |
| Outcome | Vous dites oui en connaissance de cause : vous avez déjà vu le résultat. | The easiest yes you'll ever give — because you've already seen it. | أسهل «نعم» ستقولها — لأنّك رأيتها بالفعل. [à relire par un arabophone natif] |
| Timeline, 4 moments (app.js:319-320 / :431-432 / :546-547) | Vous envoyez votre contenu → On construit votre page d'accueil (5 jours ouvrés) → On vous la présente (visio de 30 min) → Vous décidez (Payé jusqu'ici : 0 DA) | You send your content → We build your homepage (5 working days) → We walk you through it (30-minute video call) → You decide (Paid so far: 0) | ترسل إلينا محتواك ← نبني صفحتك الرئيسية (5 أيام عمل) ← نعرضها عليك (في مكالمة فيديو من 30 دقيقة) ← أنت تقرّر (المدفوع حتى الآن: 0) [à relire par un arabophone natif] |
| Title-block values (app.js:24 / :122 / :223) | Aperçu : Gratuit · 5 jours ouvrés | Preview: Free · 5 working days | المعاينة: مجّانية · 5 أيام عمل [à relire par un arabophone natif] |
| Prefilled WhatsApp text | Bonjour Numidea Labs, je souhaite voir l'Aperçu gratuit de mon futur site. | Hello Numidea Labs, I would like to see a free Preview of my new website. | مرحباً نوميديا لابز، أرغب في الاطّلاع على معاينة مجانية لموقعي الجديد. [à relire par un arabophone natif] |
| Call to action | Demander mon Aperçu gratuit → (hero, app.js:23) / Demander mon Aperçu → | Request my free Preview → / Request my Preview → | اطلب معاينتك المجانية ← / اطلب معاينتك ← [à relire par un arabophone natif] |

- Status: **OK + condition**: the terms line goes with every mention; add « à réception de vos contenus » next to the 5 days; the "0 DA" moment is a strong visual (index.html:575-582 already animates it).
- Do not elaborate beyond these strings. What counts as "registered" (sole traders?), when the 5 days start, what happens when the month's 4 places are taken, which services get an Aperçu, and what happens to the page after a "no" are undecided (OWNER; vault `Maps/Owner decisions pending.md:61-64`).
- The campaign kit's long conditions line adds qualifiers that are **not on the site**: "(SIRET)", "projet de site à partir d'environ 600 € HT", "décision prévue d'ici 3 mois" (`campaign-readme.md:231-233`). OWNER: use them only if the owner adopts them for organic posts.
- No "places left this month" counter or urgency beyond "4 par mois au maximum": nobody updates such a count yet (`Maps/Owner decisions pending.md:154-156`; kit rule against urgency, `Maps/Campaign.md:71`).

### 1.4 The method: four steps

Title: « Quatre étapes. Zéro surprise. » / "Four steps. No surprises." / «أربع خطوات. بلا مفاجآت.» [à relire par un arabophone natif] (app.js:48 / :146 / :247). Lead: « Entreprise immatriculée ? Vous ne payez rien avant d'avoir vu votre page d'accueil tourner. » / "Registered business? You pay nothing until you have seen your homepage running." / «شركة مسجّلة؟ لا تدفع شيئاً قبل أن ترى صفحتك الرئيسية تعمل.» [à relire par un arabophone natif] (app.js:49 / :147 / :248). Status OK.

| # | FR (app.js:394-397) | EN (app.js:506-509) | AR (app.js:621-624) [à relire par un arabophone natif] |
|---|---|---|---|
| 1 | Vous décrivez le projet — Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe. | You describe the project — Two minutes, in writing or out loud. In French, English or Arabic. | تصف المشروع — دقيقتان، كتابةً أو مشافهة. بالفرنسية أو الإنجليزية أو العربية. [à relire par un arabophone natif] |
| 2 | On revient sous 24 h ouvrées — Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. Pas une fourchette, un chiffre. | We reply within 24 working hours — First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. Not a range — one number. | نعود إليك خلال 24 ساعة عمل — بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق. ليس سعراً تقريبياً، بل رقمٌ واحد. [à relire par un arabophone natif] |
| 3 | On construit l'Aperçu — gratuit — La page d'accueil de votre site, avec votre contenu, avant tout paiement. Pour les entreprises immatriculées, 4 par mois au maximum, tous clients confondus. | We build the Preview — free — Your site's homepage, with your own content, before any payment. For registered businesses: at most 4 a month, across all clients. | نبني المعاينة — مجّاناً — الصفحة الرئيسية لموقعك بمحتواك، قبل أيّ دفع. للشركات المسجّلة، 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. [à relire par un arabophone natif] |
| 4 | Vous décidez — Si c'est non, vous ne devez rien. Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste. | You decide — If it's no, you owe nothing. If it's yes, the homepage is already done: we move straight on to the rest. | أنت تقرّر — إن كان الجواب لا، فلا شيء عليك. وإن كان نعم، فالصفحة الرئيسية جاهزة بالفعل: ننتقل مباشرة إلى بقية العمل. [à relire par un arabophone natif] |

Rendered at index.html:704-733.

### 1.5 Packages (Essentiel, Studio, Moteur) and maintenance

Prices are set in dinars (`PRICE_MODEL`, app.js:679-686) and shown on the cards at index.html:773, :790, :807. The euro and dollar figures below are exactly what the site displays when the visitor switches currency: `price / 151` (EUR) or `/ 134` (USD), rounded by the site's own rule (app.js:1707, :1721-1725). All are "HT" / "excl. tax" (app.js:377 / :489 / :604).

| | **Essentiel** | **Studio** (badge « Recommandé » / "Recommended" / «الموصى به» [à relire par un arabophone natif]) | **Moteur** |
|---|---|---|---|
| Name EN / AR [à relire par un arabophone natif] | Essential / الأساسي | Studio / الاستوديو | Engine / المحرّك |
| For (AR [à relire par un arabophone natif]) | Une présence crédible, vite en ligne. / A credible presence, live quickly. / حضور موثوق، على الإنترنت بسرعة. | Le site qui porte vraiment l'entreprise. / The site that actually carries the business. / الموقع الذي يحمل الشركة فعلاً. | Quand il vous faut un outil métier, pas seulement un site. / For when your business needs a tool, not just a site. / حين تحتاج شركتك إلى أداة عمل، لا إلى موقع فحسب. |
| DA (HT) | 90 000 – 160 000 DA | 180 000 – 420 000 DA | 450 000 – 1 200 000 DA |
| EUR shown (≈, HT) | ≈ 600 – 1 100 € | ≈ 1 200 – 2 800 € | ≈ 3 000 – 7 900 € |
| USD shown (≈, excl. tax) | ≈ $670 – 1,200 | ≈ $1,300 – 3,100 | ≈ $3,400 – 9,000 |
| Duration (AR [à relire par un arabophone natif]) | 2 à 4 semaines / 2 to 4 weeks / من 2 إلى 4 أسابيع | 3 à 7 semaines / 3 to 7 weeks / من 3 إلى 7 أسابيع | 8 à 16 semaines / 8 to 16 weeks / من 8 إلى 16 أسبوعاً |
| Scope (FR) | Vitrine ou landing, 1 à 5 pages · Design sur mesure — jamais un modèle tout fait repeint à vos couleurs · Responsive, performance et SEO de base · Mise en ligne, domaine et certificat configurés (see 2.1, OWNER) | Site sur mesure, 6 à 15 pages · Trilingue FR / EN / AR, avec un arabe RTL pensé nativement · Design system documenté — styles, composants, le kit complet · CMS ou back-office pour gérer le contenu vous-même · SEO technique, Core Web Vitals, accessibilité | Application web sur mesure : plateforme, portail ou outil métier · Paiement, comptes utilisateurs, tableaux de bord · Scraping et intelligence marché, intégrés à l'application · Intégrations API et outils internes |
| Scope (EN) | Showcase or landing site, 1 to 5 pages · Custom design — never a re-themed template · Responsive, fast, with foundational SEO · Deployment, domain and certificate configured | Custom site, 6 to 15 pages · Trilingual FR / EN / AR, with Arabic RTL built natively · Documented design system — styles, components, the full kit · CMS or back-office so you manage the content yourself · Technical SEO, Core Web Vitals, accessibility | Custom web application: platform, portal or business tool · Payments, user accounts, dashboards · Scraping and market intelligence, built into the application · API integrations and internal tools |
| Scope (AR) [à relire par un arabophone natif] | موقع تعريفي أو صفحة هبوط، من 1 إلى 5 صفحات · تصميم مخصّص — لا قالب معاد تلوينه أبداً · متجاوب وسريع، مع أساسيات تحسين محرّكات البحث (SEO) · النشر، واسم النطاق (الدومين)، وشهادة الأمان SSL — كلّها مُعدّة | موقع مخصّص، من 6 إلى 15 صفحة · ثلاثي اللغة فرنسي / إنجليزي / عربي، بعربية مصمّمة من الأساس للكتابة من اليمين إلى اليسار · نظام تصميم موثّق — الأنماط والمكوّنات والعدّة كاملة · نظام إدارة محتوى أو لوحة تحكّم لتدير المحتوى بنفسك · الجانب التقني من تحسين محرّكات البحث (SEO)، ومؤشّرات الأداء، وإتاحة الوصول | تطبيق ويب مخصّص: منصّة أو بوابة أو أداة عمل · الدفع وحسابات المستخدمين ولوحات المتابعة · استخراج البيانات وتحليل السوق، مدمجان في التطبيق · تكاملات واجهات برمجية وأدوات داخلية |
| Support included (AR [à relire par un arabophone natif]) | 1 mois de support inclus / 1 month of support included / شهر دعم مشمول | 3 mois de support inclus / 3 months of support included / ثلاثة أشهر دعم مشمولة | 6 mois de support inclus / 6 months of support included / ستّة أشهر دعم مشمولة |
| Sources | app.js:357-362 / :469-474 / :584-589; index.html:769-783 | app.js:363-369 / :475-481 / :590-596; index.html:785-801 | app.js:370-375 / :482-487 / :597-602; index.html:803-817 |

**Maintenance (optional, after delivery).** « Maintenance après livraison, si vous la voulez : 18 000 – 60 000 DA par mois. Sans engagement de durée. » / "Maintenance after launch, if you want it: 18,000–60,000 DZD a month. No lock-in." / «الصيانة بعد التسليم، إن أردتها: 18 000 – 60 000 دج شهرياً، دون التزام بمدّة.» [à relire par un arabophone natif] (index.html:820-824; app.js:376 / :488 / :603; `RETAINER` app.js:1709). Shown in euros as ≈ 120 – 400 € and in dollars as ≈ $130 – 450 per month. Status OK + condition: what the plan covers, and what sets the range, are undecided, so say nothing about its content (`Maps/Owner decisions pending.md:52-54`).

**How prices work (OK):**
- Fixed price per written scope: « Au forfait … C'est ainsi que nous chiffrons chaque projet. » (app.js:334-335 / :446-447 / :561-562).
- Firm price after scoping: « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » / "An indicative range, not a quote. The firm price follows once we have scoped it together — and it does not move after that." / «تقدير استرشادي، لا عرض سعر رسمي. السعر النهائي نحدّده بعد أن نضبط معاً نطاق العمل — ولا يتغيّر بعدها.» [à relire par un arabophone natif] (app.js:391 / :503 / :618).
- « un forfait, sans frais cachés » / "no surprise fees" / «دون مفاجآت» [à relire par un arabophone natif] (faq2.a, app.js:87 / :185 / :286).
- Prices published on the site: « Un prix avant le devis. » / "A price before the quote." / «سعر قبل عرض السعر.» [à relire par un arabophone natif] (app.js:353 / :465 / :580).
- Rush: « Un calendrier compressé coûte plus cher : +25 % dans notre estimateur. » (app.js:348 / :460 / :575).
- English FAQ only: "Our packages start at 90,000 DZD for a showcase site" (app.js:185); Arabic FAQ: «تبدأ باقاتنا من 90 000 دج للموقع التعريفي» [à relire par un arabophone natif] (app.js:286). The French FAQ does not state a floor.
- Campaign kit "from" prices consistent with the cards: « Site vitrine dès 600 € HT env. »; "from about USD 670 excl. tax" (`campaign-readme.md:216, :224`).

**Other project types (estimator only, indicative, "pas un devis").** Base ranges from `PRICE_MODEL` (app.js:682-685); E-commerce and Identité also appear in the Numidea column of the market table (index.html:950, :954). Converted with the site's rule:

| Type | DA (HT) | ≈ EUR | ≈ USD | Weeks | Unit included in the base |
|---|---|---|---|---|---|
| E-commerce | 220 000 – 550 000 | 1 500 – 3 600 € | $1,600 – 4,100 | 5 – 10 | 60 products |
| Automatisation / Automation | 140 000 – 420 000 | 930 – 2 800 € | $1,000 – 3,100 | 2 – 6 | 3 flows |
| Identité visuelle / Visual identity | 90 000 – 180 000 | 600 – 1 200 € | $670 – 1,300 | 2 – 5 | 2 deliverables |

Status OK + condition: always labelled « fourchette indicative » / "indicative range".

**Market comparison the site publishes (OK + condition: cite the source on screen or in the caption).**
- « Une journée de développeur confirmé en France coûte 480 – 650 € ≈ 70 000 – 100 000 DA au taux officiel, soit à peu près le prix d'un site vitrine complet sur le marché algérien. » (index.html:969-972; app.js:325-326 / :437-438 / :552-553).
- Typical 2026 ranges, experienced freelancer to agency, excl. tax (index.html:946-955; data app.js:2500-2506): Vitrine: Algeria 50 000–100 000 DA · France 1 500–6 000 € · US $1,500–12,000. Site sur mesure: 180 000–400 000 DA · 6 000–10 000+ € · $6,000–20,000. E-commerce: 150 000–1 000 000 DA · 2 000–20 000 € · $5,000–30,000. Application web: 200 000–2 000 000 DA · 10 000–50 000 € · $20,000–60,000+. Identité: 80 000–150 000 DA · 1 200–5 000+ € · $500–30,000.
- Sources named on the page (index.html:974-981): Onyxlab, Baromètre des tarifs freelance 2026 (Algeria); Tandem Studio, Les Créavores and others (France); Pitchsite, 8GNC, Clutch (US); Banque d'Algérie daily rate.
- What this backs: every Numidea package sits below the typical France and US ranges at the official rate. What it does **not** back: "cheaper than the Algerian market". Essentiel (90–160k DA) sits above the Algerian vitrine range (50–100k DA); Studio and Moteur sit inside the Algerian ranges (app.js:665-668 says so). Never claim Numidea is the cheapest anywhere.
- Do not reuse the end of `mk.note` ("nous livrons avec les mêmes outils … React, Next.js, Vercel"): see 2.1.

### 1.6 Services: five core, five more

Lead: « Nos cinq services principaux — et cinq autres juste en dessous. » / "Our five core services — and five more just below." / «خدماتنا الخمس الرئيسية — وخمس أخرى أدناه.» [à relire par un arabophone natif] (app.js:401 / :513 / :628). Families (app.js:400 / :512 / :627): « Sites & design » · « Données & automatisation » · « Conseil & IA » / "Sites & design" · "Data & automation" · "Advisory & AI" / «المواقع والتصميم» · «البيانات والأتمتة» · «الاستشارة والذكاء الاصطناعي» [à relire par un arabophone natif].

"One line" below is the site's own sentence, trimmed only where a fragment is on the do-not-claim list (marked ✂). All are capabilities offered, not a track record: only websites and brand identity have a case on the site (Alliance Travel's sheet lists « Identité de marque », scene-data.mjs:157). Never imply past projects in the other eight.

| # | Name FR / EN / AR [à relire par un arabophone natif] | Promise FR / EN / AR [à relire par un arabophone natif] | One line (FR, exact or ✂ trimmed) | Source |
|---|---|---|---|---|
| f1 | Sites & applications web / Sites & web applications / مواقع وتطبيقات ويب [à relire par un arabophone natif] | Le choix évident. / The obvious choice. / الخيار البديهي. [à relire par un arabophone natif] | Sites et applications web sur mesure — rapides, bien référencés, pensés pour convertir, du front-end au cloud. ✂ Pas de modèle acheté puis maquillé : on dessine votre site de zéro. (✂ removed: "React · Next.js · Vite · Tailwind sur Vercel.") | app.js:405-406 / :517-518 / :632-633 |
| f2 | Identité & systèmes visuels / Branding & visual systems / الهوية والأنظمة البصرية [à relire par un arabophone natif] | La confiance avant le premier mot. / Trust before a word is read. / الثقة قبل قراءة كلمة. [à relire par un arabophone natif] | Logos, couleurs, typographie, animation et une charte complète, documentée, prête à l'emploi : ce qui donne à une petite entreprise l'allure d'une maison établie. | app.js:407-408 / :519-520 / :634-635 |
| f3 | Automatisation & pipelines / Automation & pipelines / الأتمتة ومعالجة البيانات [à relire par un arabophone natif] | Supprimez la corvée. / Delete the busywork. / احذف العمل الممل. [à relire par un arabophone natif] | Scrapers, pipelines de données, génération de leads, automatisations, outils internes. Le travail répétitif et fragile qui dévore vos heures — on le fait tourner seul à 3 h du matin. ✂ (removed: the tool list at the end of the sentence, which ends with an AI model name) | app.js:409-410 / :521-522 / :636-637 |
| f4 | Intelligence marché & produit / Market & product intelligence / تحليل السوق والمنتجات [à relire par un arabophone natif] | Voir le marché clairement. / See the market clearly. / رؤية السوق بوضوح. [à relire par un arabophone natif] | Transformez les données publiques du web en base exploitable : veille concurrentielle, suivi des prix et des catalogues — collectées dans le respect des conditions de chaque site et du RGPD, structurées, interrogeables. | app.js:411-412 / :523-524 / :638-639 |
| f5 | Stratégie & conseil croissance / Strategy & growth consulting / الاستراتيجية واستشارات النمو [à relire par un arabophone natif] | De la donnée, pas des impressions. / Data, not vibes. / بيانات، لا انطباعات. [à relire par un arabophone natif] | Audits marketing complets, analyse des tunnels de vente, positionnement concurrentiel, feuilles de route — honnêtes, ROI d'abord, par phases. On étudie votre secteur avant le premier appel. | app.js:413-414 / :525-526 / :640-641 |
| c1 | Boutique & réservation / E-commerce & booking / متجر وحجز [à relire par un arabophone natif] | De la visite au paiement. / From browse to paid. / من التصفّح إلى الدفع. [à relire par un arabophone natif] | Boutiques en ligne et systèmes de réservation adaptés aux habitudes d'achat en Algérie : commande par WhatsApp, paiement à la livraison, ou boutique Shopify sur mesure quand c'est pertinent. | app.js:416-417 / :528-529 / :643-644 |
| c2 | Design graphique & réseaux sociaux / Graphic & social design / تصميم غرافيك ومنشورات لشبكات التواصل [à relire par un arabophone natif] | Des visuels qui arrêtent le regard. / Scroll-stopping, on brand. / تصاميم تلفت الانتباه، وتبقى وفيّة لهويتك. [à relire par un arabophone natif] | Packs réseaux sociaux, carrousels, infographies, print — depuis un système visuel verrouillé, pour que tout vous ressemble. | app.js:418-419 / :530-531 / :645-646 |
| c3 | Data science & analytics / Data science & analytics / علم البيانات والتحليلات [à relire par un arabophone natif] | Du signal dans le bruit. / Signal out of noise. / المعنى وسط الضجيج. [à relire par un arabophone natif] | Un travail statistique rigoureux — modélisation économétrique, séries temporelles, prévision, tableaux de bord. Analyse testée et défendable. | app.js:420-421 / :532-533 / :647-648 |
| c4 | Systèmes de connaissance / Knowledge systems / أنظمة المعرفة [à relire par un arabophone natif] | Une entreprise qui se souvient. / A company that remembers. / شركة تتذكّر. [à relire par un arabophone natif] | Architecture de connaissance interne — Obsidian/PARA + Zettelkasten, documentation, bases prêtes pour le RAG. Des structures qui s'entretiennent seules. | app.js:422-423 / :534-535 / :649-650 |
| c5 | Outils & assistants IA sur mesure / Custom AI tools & skills / أدوات ومهارات ذكاء اصطناعي مخصّصة [à relire par un arabophone natif] | Le logiciel qui construit votre logiciel. / Software that builds your software. / برمجيات تبني برمجياتك. [à relire par un arabophone natif] | ✂ Outils internes, générateurs et assistants sur mesure : une tâche répétitive se lance en un clic. (✂ removed: « propulsés par » + an AI model name) | app.js:424-425 / :536-537 / :651-652 |

Notes: the copy audit flagged "Data, not vibes." as slang for an English business audience (vault `Maps/Copy audit.md:50`); prefer the French or Arabic promise, or the brief, in English videos. The EN and AR f1/f3/c5 briefs contain the same fragments to trim.

### 1.7 Delivery and response promises

| Promise | FR (exact) | EN (exact) | AR (exact) [à relire par un arabophone natif] | Source | Status |
|---|---|---|---|---|---|
| Lead times | Cela dépend du périmètre : comptez 2 à 4 semaines pour un site vitrine, 3 à 7 pour un site sur mesure, 8 à 16 pour une application web. Le délai ferme est fixé dès que le projet est cadré ensemble. | It depends on the scope: 2 to 4 weeks for a showcase site, 3 to 7 for a custom site and 8 to 16 for a web application. You get a firm timeline as soon as we have agreed the scope together. | يعتمد على حجم المشروع: من 2 إلى 4 أسابيع للموقع التعريفي، ومن 3 إلى 7 أسابيع للموقع المخصّص، ومن 8 إلى 16 أسبوعاً لتطبيق الويب. ونحدّد معك موعد التسليم النهائي بمجرّد أن نضبط نطاق العمل معاً. [à relire par un arabophone natif] | app.js:86 / :184 / :285 | OK |
| Reply time | < 24 h ouvrées | < 24 working hours | أقل من 24 ساعة عمل [à relire par un arabophone natif] | app.js:24 / :122 / :223; :96 / :194 / :295 | OK + condition: a first reply, nothing more. Whether it also covers fixing a site that is down is undecided |
| After launch | On reste. Chaque formule inclut 1, 3 ou 6 mois de support, et on vous répond sous 24 h ouvrées. Ensuite, la maintenance est en option : au mois, sans engagement de durée (voir les tarifs). Pas de « bonne chance » le jour de la mise en ligne. | We stay. Every package includes 1, 3 or 6 months of support, and we reply within 24 working hours. After that, maintenance is optional: monthly, with no lock-in (see Pricing). No "good luck" on launch day. | نبقى معك. كل باقة تشمل دعماً لمدّة شهر أو 3 أو 6 أشهر، ونردّ عليك خلال 24 ساعة عمل. بعدها تصبح الصيانة اختيارية: اشتراك شهري دون التزام بمدّة (انظر الأسعار). لا «حظّاً موفقاً» يوم الإطلاق. [à relire par un arabophone natif] | app.js:89 / :187 / :288 | OK (do not describe what support covers: undecided) |
| What to bring | Dites-nous ce qu'il vous faut : une urgence à traiter, quelque chose à corriger, une échéance à tenir. En français, anglais ou arabe. | Tell us what you need: an urgent job, something that needs fixing, a deadline to meet. In English, French or Arabic. | أخبرنا بما تريد إنجازه: أمر عاجل، أو موقع يحتاج إلى إصلاح، أو موعد نهائي يقترب. بالفرنسية أو الإنجليزية أو العربية. [à relire par un arabophone natif] | app.js:94 / :192 / :293 | OK |
| Remote work | Oui. On est basés à Bordj Bou Arréridj … | Yes. We're based in Bordj Bou Arréridj … | نعم. مقرّنا في برج بوعريريج … [à relire par un arabophone natif] | app.js:90 / :188 / :289 | OK only for the opening clause: « On est basés à Bordj Bou Arréridj » / "We're based in Bordj Bou Arréridj" / «مقرّنا في برج بوعريريج» [à relire par un arabophone natif]. The rest of that same sentence (« … mais on livre partout — y compris pour des clients en France », "…including in France", «ومنهم عملاء في فرنسا») is do-not-claim #3, and the rest of FAQ 5 is on the do-not-claim list too (2.1) |
| Privacy of the form | Le bouton ouvre votre messagerie avec votre message déjà rédigé … Ce site ne conserve pas votre message. | Sending opens your mail app with the message ready. This site does not keep your message. | يفتح الإرسال تطبيق البريد لديك والرسالة جاهزة. لا يحتفظ هذا الموقع برسالتك. [à relire par un arabophone natif] | app.js:75 / :173 / :274 | OK |

### 1.8 Languages and right-to-left Arabic

- « Français, arabe et anglais — à l'oral, à l'écrit, et dans le produit livré. Ce site même est trilingue, avec une expérience arabe (RTL) pensée nativement. » / "French, Arabic and English — spoken, written, and in everything we deliver. This very site is trilingual, with a natively mirrored Arabic (right-to-left) experience." / «الفرنسية والعربية والإنجليزية — حديثاً وكتابةً وفي المنتَج المُسلَّم. هذا الموقع نفسه ثلاثي اللغات، بنسخة عربية مصمّمة من الأساس للكتابة من اليمين إلى اليسار.» [à relire par un arabophone natif] (app.js:88 / :186 / :287). OK.
- « Chaque langue ajoute du contenu ; l'arabe ajoute une mise en page de droite à gauche. » (app.js:345 / :457 / :572). OK.
- Demonstrable on screen: the site itself switches FR / EN / AR and mirrors to right-to-left (index.html:1299-1303; `?lang=` links index.html:19-22). Recording the real site switching languages is honest, strong footage.
- Delivered example: Alliance Travel's site is trilingual with right-to-left Arabic and light and dark modes (scene-data.mjs:157, :163, :169). OK + condition: client permission (2.3).

### 1.9 Projects: what each sheet says the site gives the client

Ground rules for every project below: no metrics, no results, no "more", no "increased" (the sheets were written that way on purpose, scene-data.mjs:17-23); no client counts (2.1); client screenshots, names and logos only after written permission (2.3); never call Bordj Steel or Alliance Travel "clients" or their sites "livrés" until the owner decides (2.3). The campaign kit's safe heading: « Quelques réalisations » / "Some of our work" / «نماذج من أعمالنا» [à relire par un arabophone natif] (`campaign-readme.md:236`).

Sheet labels for the benefit block (scene-data.mjs:404, :421, :438): « Ce que le site apporte au client » / "What the site gives the client" / «ما يقدّمه الموقع للعميل» [à relire par un arabophone natif]; for the demo « Ce que la démo montre »; for the product « Ce que l'outil apporte à ses utilisateurs ».

#### Bordj Steel (sheet Pl. 01): OWNER (permission; client or employer)

- Build: https://bordjsteelb2b.netlify.app (index.html:448). Sheet: scene/index.html:89-193; data scene-data.mjs:27-99. 12 pages, French (scene-data.mjs:42-43).
- Sector / scope: « Construction métallique · B2B · Algérie » / « Site corporate B2B »; EN "Structural steel · B2B · Algeria" / "B2B corporate site"; AR «إنشاءات معدنية · B2B · الجزائر» / «موقع مؤسسي B2B» [à relire par un arabophone natif] (scene-data.mjs:81-82, :87-88, :93-94).
- Summary FR: « La présence en ligne d'un fabricant de charpente métallique et de panneaux sandwich : un catalogue par métier, des références chiffrées, un media center et un espace recrutement. » (scene-data.mjs:83; EN :89; AR :95).
- Deliverables FR: Site corporate, 12 pages · Catalogue produits : 4 fiches métier · Références et chiffres clés · Media center (blog) · Contact et recrutement · Pages légales (scene-data.mjs:84; EN :90; AR :96).
- The client (context): FR « Un fabricant de Bordj Bou Arréridj aux quatre unités de production, qui travaille pour des usines, des projets agricoles et des promoteurs industriels dans toute l'Algérie. » EN "A Bordj Bou Arréridj manufacturer with four production units, working for factories, farm projects and industrial developers across Algeria." AR «مصنّع في برج بوعريريج له أربع وحدات إنتاج، يعمل لصالح المصانع والمشاريع الزراعية والمطوّرين الصناعيين في أنحاء الجزائر.» [à relire par un arabophone natif] (scene-data.mjs:52-56).
- What the site gives the client (scene-data.mjs:57-78):
  1. `/products`: FR « Un acheteur trouve la bonne gamme sans appeler : une page par unité de production, avec ce qu'elle fabrique et à quoi cela sert. » EN "A buyer finds the right product line without calling: one page per production unit, with what it makes and what it is used for." AR «يجد المشتري خط الإنتاج المناسب دون أن يتصل: صفحة لكل وحدة إنتاج، فيها ما تصنعه وفيمَ يُستعمل.» [à relire par un arabophone natif]
  2. `/products/sandwich-panels`: FR « Un bureau d'études lit les caractéristiques techniques en ligne, essaie les épaisseurs de panneau sur une coupe interactive et télécharge le catalogue en PDF. » EN "An engineering office reads the technical data online, tries each panel thickness on an interactive cross-section and downloads the PDF catalogue." AR «يقرأ مكتب الدراسات الخصائص التقنية على الموقع، ويجرّب سماكات الألواح على مقطع تفاعلي، ويحمّل الكتالوج بصيغة PDF.» [à relire par un arabophone natif]
  3. `/contact`: FR « Un client joint directement le bon service, du commercial au montage : chacun a son numéro direct, et numéros comme e-mails se copient d'un clic. » EN "A customer reaches the right department directly, from sales to site assembly: each has its own direct number, and numbers and email addresses copy in one click." AR «يتصل العميل مباشرة بالقسم المعني، من المبيعات إلى التركيب: لكل قسم رقمه المباشر، والأرقام والبريد تُنسخ بنقرة واحدة.» [à relire par un arabophone natif]
  4. `/references`: FR « Avant un premier rendez-vous, un maître d'ouvrage voit des chantiers de référence — où, et ce qui a été fourni et monté. » EN "Before a first meeting, a project owner sees reference projects — where, and what was supplied and put up." AR «قبل أول لقاء، يطّلع صاحب المشروع على مشاريع مرجعية — أين أُنجزت وما الذي وُرِّد ورُكِّب فيها.» [à relire par un arabophone natif]
  5. `/recrutement`: FR « Un candidat consulte les offres d'emploi et postule, ou envoie une candidature spontanée. » EN "A job seeker reads the openings and applies, or sends an open application." AR «يطّلع الباحث عن عمل على عروض التوظيف ويتقدّم إليها، أو يرسل طلب توظيف من تلقاء نفسه.» [à relire par un arabophone natif]
- Card benefit line: FR « Un acheteur trouve la bonne gamme et ses caractéristiques techniques sans appeler. » EN "A buyer finds the right product line and its technical data without calling." AR «يجد المشتري خط الإنتاج المناسب وخصائصه التقنية دون أن يتصل.» [à relire par un arabophone natif] (app.js:42 / :140 / :241).
- Visual system: Montserrat; #BF272C accent, #4B4B4B text, #6B6B6B secondary, #F5F5F5 surface, #FFFFFF ground (scene-data.mjs:44-51).
- Do not reuse the card description's "leader de la construction métallique en Algérie" (app.js:37): a ranking claim about the client (2.1).

#### Alliance Travel (sheet Pl. 02): OWNER (permission; client or employer)

- Build: https://alliancetravel34.netlify.app (index.html:463). Sheet: scene/index.html:196-300; data scene-data.mjs:100-172. 9 pages, FR · EN · AR (scene-data.mjs:115-116).
- Sector / scope: « Agence de voyage · Bordj Bou Arréridj » / « Identité, site et parcours de réservation »; EN "Travel agency · Bordj Bou Arréridj" / "Identity, site and booking journey"; AR «وكالة سفر · برج بوعريريج» / «الهوية والموقع ومسار الحجز» [à relire par un arabophone natif] (scene-data.mjs:154-155, :160-161, :166-167).
- Summary FR: « Une agence de voyages organisés : chaque destination a sa page, son prix « à partir de » et un calculateur qui envoie le devis sur WhatsApp. Trilingue, arabe en RTL, en mode clair et sombre. » (scene-data.mjs:156; EN :162; AR :168).
- Deliverables FR: Identité de marque · Site trilingue FR · EN · AR, arabe en RTL · 7 pages destination · Calculateur de devis vers WhatsApp · Service de rendez-vous visa · Mode clair et mode sombre (scene-data.mjs:157; EN :163; AR :169).
- The client (context): FR « Une agence de voyages organisés de Bordj Bou Arréridj, présente aussi à M'Sila, chez qui l'on réserve par téléphone, sur WhatsApp ou au guichet. » EN "A package-tour agency from Bordj Bou Arréridj, also in M'Sila, where people book by phone, on WhatsApp or at the desk." AR «وكالة رحلات منظّمة من برج بوعريريج، لها فرع في المسيلة أيضاً، يحجز عملاؤها بالهاتف أو عبر واتساب أو في الوكالة مباشرة.» [à relire par un arabophone natif] (scene-data.mjs:125-129).
- What the site gives the client (scene-data.mjs:130-151):
  1. `/istanbul/`: FR « Un voyageur choisit sa date, son hôtel, sa chambre et le nombre de voyageurs par âge, et voit le total estimé avant de contacter l'agence. » EN "A traveller picks the date, hotel, room and how many travellers of each age, and sees the estimated total before contacting the agency." AR «يختار المسافر التاريخ والفندق ونوع الغرفة وعدد المسافرين حسب أعمارهم، فيرى المجموع التقديري قبل أن يتصل بالوكالة.» [à relire par un arabophone natif]
  2. `/istanbul/`: FR « Il prépare son dossier en ligne — le passeport de chaque voyageur, vérifié à la saisie — et l'envoie sur WhatsApp en un message complet, ou par e-mail. » EN "They put the booking file together online — each traveller's passport details, checked as they type — and send it on WhatsApp as one complete message, or by email." AR «يُعِدّ ملف الحجز على الموقع — بيانات جواز سفر كل مسافر، مع التحقّق منها أثناء الكتابة — ثم يرسله عبر واتساب في رسالة واحدة كاملة، أو بالبريد الإلكتروني.» [à relire par un arabophone natif]
  3. `/bali/`: FR « Avant de réserver, il lit le programme de chaque destination jour par jour, ce que couvre le forfait et ce qui reste à prévoir. » EN "Before booking, they read each destination's day-by-day programme, what the package covers and what to budget for on top." AR «وقبل الحجز، يقرأ برنامج كل وجهة يوماً بيوم، وما تشمله الباقة، وما يبقى عليه أن يحسب حسابه.» [à relire par un arabophone natif]
  4. `/rendez-vous-visa/`: FR « Pour un visa, il voit pour chaque pays le centre qui traite le dossier et ce que l'agence peut faire, puis écrit à un conseiller avec sa demande déjà rédigée. » EN "For a visa, they see for each country which centre handles the file and what the agency can do, then message an advisor with the request already written." AR «وللتأشيرة، يرى لكل بلد المركز الذي يعالج الملف وما يمكن للوكالة أن تتكفّل به، ثم يراسل مستشاراً برسالة طلب جاهزة.» [à relire par un arabophone natif]
  5. `/#agences`: FR « Il lit le site en arabe, en français ou en anglais, et trouve l'agence la plus proche avec son itinéraire. » EN "They read the site in Arabic, French or English, and find the nearest branch with directions." AR «يقرأ الموقع بالعربية أو الفرنسية أو الإنجليزية، ويجد أقرب فرع مع طريق الوصول إليه.» [à relire par un arabophone natif]
- Card description FR « Identité, site trilingue et prise de rendez-vous visa pour une agence de voyages de Bordj Bou Arréridj. » (app.js:35 / :133 / :234). Card benefit FR « Un voyageur estime son budget et envoie une demande complète sur WhatsApp. » (app.js:42 / :140 / :241).
- Visual system: DM Sans, Tajawal; #002C51 ink, #237A4A accent, #9CE8B2 highlight, #F7F1E3 ground, #0A0F15 night (scene-data.mjs:117-124).

#### AlmaFlowClim (sheet Pl. 05): OWNER (permission; not live on the client's own domain)

- Build: https://almaflowclim.netlify.app (index.html:478). Sheet: scene/index.html:513-628; data scene-data.mjs:316-388. 7 pages, French (scene-data.mjs:331-332).
- **Caveat:** the client's own domain `almaflowclim.fr` serves a different (Hostinger) site (OWNER-CONTENT.md item 9). Never show or name that domain, never say the site is « en ligne chez le client ». If the client did not adopt the build, the gap plan says to present it as a redesign proposal (`Maps/Owner decisions pending.md:124`).
- Sector / scope: « Climatisation, chauffage, plomberie · Île-de-France » / « Site vitrine et demande de devis »; EN "Air conditioning, heating, plumbing · Île-de-France" / "Showcase site and quote request"; AR «تكييف وتدفئة وسباكة · إيل دو فرانس» / «موقع تعريفي وطلب عرض سعر» [à relire par un arabophone natif] (scene-data.mjs:370-371, :376-377, :382-383).
- Summary FR: « Un artisan de Gennevilliers qui installe et dépanne climatisation, chauffage et plomberie : une page par métier, ses réalisations chantier par chantier et un devis en un formulaire, pensés pour les recherches locales. » (scene-data.mjs:372; EN :378; AR :384).
- Deliverables FR: Site vitrine, 7 pages · 3 pages métier · Page de réalisations · Formulaire de devis · SEO local par ville desservie · Mentions légales (scene-data.mjs:373; EN :379; AR :385).
- The client (context): FR « Un artisan de Gennevilliers qui installe, entretient et dépanne climatisation, chauffage et plomberie chez des particuliers et des professionnels d'Île-de-France. » EN "A Gennevilliers firm that installs, services and repairs air conditioning, heating and plumbing for homes and businesses across Île-de-France." AR «حِرفي في جونفيلييه يركّب أنظمة التكييف والتدفئة والسباكة ويصونها ويصلح أعطالها، لدى الأفراد والمهنيين في منطقة إيل دو فرانس.» [à relire par un arabophone natif] (scene-data.mjs:341-345).
- What the site gives the client (scene-data.mjs:346-367):
  1. `/climatisation`: FR « En cas de panne, un client appelle d'un simple appui depuis la page du métier concerné : le numéro est en tête de page. » EN "If something breaks down, a customer calls in one tap from the page for that trade: the number sits at the top." AR «عند العطل، يتصل العميل بلمسة واحدة من صفحة التخصّص المعني: الرقم في أعلى الصفحة.» [à relire par un arabophone natif]
  2. `/contact`: FR « Pour un projet, il choisit sa prestation dans le formulaire de devis — installation, entretien, dépannage, chauffe-eau, salle de bain — et la demande arrive avec son type de travaux. » EN "For a project, they pick the job in the quote form — installation, servicing, repair, water heater, bathroom — so the request arrives with its type of work." AR «ولمشروع جديد، يختار الخدمة في استمارة عرض السعر — تركيب أو صيانة أو إصلاح أو سخّان ماء أو حمّام — فيصل الطلب ومعه نوع الأشغال.» [à relire par un arabophone natif]
  3. `/chauffage`: FR « Sur la page du métier qui le concerne, il lit ce qui est installé ou réparé, les marques suivies et les étapes d'une installation, du devis à la mise en service. » EN "On the page for the trade they need, they read what is installed or repaired, the brands covered and the steps of an installation, from quote to commissioning." AR «وفي صفحة التخصّص الذي يحتاجه، يقرأ ما يُركَّب أو يُصلَح، والعلامات التي يتعامل معها الحِرفي، ومراحل التركيب من عرض السعر إلى التشغيل.» [à relire par un arabophone natif]
  4. `/realisations`: FR « Il lit des chantiers proches du sien, chacun avec son métier, sa ville et ce qui a été posé. » EN "They read about jobs like their own, each with its trade, its town and what was fitted." AR «يقرأ عن أشغال تشبه ما يحتاجه، لكلّ منها تخصّصها ومدينتها وما رُكِّب فيها.» [à relire par un arabophone natif] (the page's filter buttons do nothing on the live build: never show them being used, `Maps/Owner decisions pending.md:128`)
  5. `/#zones-title`: FR « Un habitant de Colombes ou de Nanterre voit d'emblée que l'artisan se déplace chez lui : les villes desservies sont listées sur l'accueil. » EN "Someone in Colombes or Nanterre sees at once that the firm comes to their town: the towns served are listed on the home page." AR «يرى ساكن كولومب أو نانتير من أول نظرة أن الحِرفي يتنقّل إلى مدينته: المدن المخدومة مذكورة في الصفحة الرئيسية.» [à relire par un arabophone natif]
- Card description FR « Le site d'un artisan de Gennevilliers en climatisation, chauffage et plomberie : une page par métier, ses réalisations chantier par chantier et une demande de devis en un seul formulaire. » (app.js:36 / :134 / :235).
- Visual system: Roboto; #3A6EA5 accent, #0D141A text, #4DD0E1 highlight, #FEA419 action, #E3F2FD surface (scene-data.mjs:333-340).

#### Glaive Store (sheet Pl. 03): OK + condition (portfolio demo, never a client)

- Build: https://glaivestore.netlify.app (index.html:506). Sheet: scene/index.html:303-405; data scene-data.mjs:173-242. English only (scene-data.mjs:190).
- Always labelled as a demo, inside the frame: FR « Projet de démonstration (portfolio) – pas un projet client », EN "Portfolio demo – not a client project", AR «نموذج تجريبي – ليس مشروع عميل» [à relire par un arabophone natif] (`campaign-readme.md:242`). Site label: « Démo portfolio » / "Portfolio demo" / «عرض تجريبي» [à relire par un arabophone natif] (app.js:46 / :144 / :245).
- Context FR « Pas de client : une marque inventée par le studio, annoncée comme démo sur chaque page, pour montrer une boutique en ligne complète. » (scene-data.mjs:199-203).
- Summary FR « Une démo de portfolio, annoncée comme telle sur le site : une marque de matériel gaming inventée de A à Z, avec boutique filtrable, fiches produit et un quiz qui recommande le bon équipement. » (scene-data.mjs:226; EN :232; AR :238).
- What the demo shows (scene-data.mjs:204-221): `/quiz.html` « Un acheteur qui hésite répond à trois questions — type de matériel, avec ou sans fil, ce qui compte le plus pour lui — et reçoit une sélection. »; `/shop.html` « Il filtre la boutique par catégorie et par prix maximum, puis trie par nouveauté, prix ou note. »; `/compare.html` « Il place des produits côte à côte et compare leurs caractéristiques ligne par ligne. »; `/product.html` « Sur chaque fiche produit, il lit les caractéristiques techniques dans un tableau, juste sous le bouton d'achat. » (EN and AR on the same lines).
- English-only screens: not for videos aimed at France.

#### WorkspaceHQ v3 (sheet Pl. 04): OK + condition (the founder's own product)

- Page: `/home/user/STICKITTY.INC/workspacehq/` (index.html:1292 footer cartridge). Sheet: scene/index.html:408-510; data scene-data.mjs:243-315. English only.
- Lines: « Le projet préféré du fondateur » / "The founder's favourite project" / «المشروع المفضّل لدى المؤسس» [à relire par un arabophone natif] (app.js:74 / :172 / :273); « WorkspaceHQ v3 est sorti — votre code, en jeu d'arcade » / "WorkspaceHQ v3 is out — your codebase, now playable" / «صدر WorkspaceHQ v3 — شيفرتك، لعبة أركيد» [à relire par un arabophone natif] (same lines).
- Context FR « Notre propre produit, pour les développeurs qui gardent de nombreux dépôts git sur une même machine. » (scene-data.mjs:268-272).
- Summary FR « Notre propre produit : une console qui scanne chaque dépôt de la machine et transforme l'hygiène git en quêtes. Livré avec son site de lancement, une démo jouable et Bit, son compagnon en pixel art. » (scene-data.mjs:299).
- Deliverables FR: Console de bureau (Electron), code public sur GitHub · Site de lancement · Vidéo et démonstration guidée · Démo interactive dans le navigateur · Personnage Bit en pixel art (scene-data.mjs:300).
- What it gives its users (scene-data.mjs:273-294): one scan of every repo run on the user's own machine (branches, uncommitted or unpushed work, builds and tests); what moved while away, with one priority action on top; keys and secrets left in plain text flagged before a commit; try the real console in the browser on sample repos. The fourth gain (scene-data.mjs:286-289) names a model: **do not use it**.
- Say « code public sur GitHub », never "open source" (2.1). Not a client project and not a studio service: use only as proof of craft, never as a case study.

### 1.10 Plate captions (visual language, usable as on-screen captions)

App.js:73 / :171 / :272. All OK. [Arabic: à relire par un arabophone natif]

| Plate | FR | EN | AR [à relire par un arabophone natif] |
|---|---|---|---|
| I | Pl. I — Les Bibans · Bordj Bou Arréridj | Pl. I — The Bibans · Bordj Bou Arréridj | لوحة 1 — جبال البيبان · برج بوعريريج [à relire par un arabophone natif] |
| II | Pl. II — Arc de Trajan · Timgad | Pl. II — Arch of Trajan · Timgad | لوحة 2 — قوس تراجان · تيمقاد [à relire par un arabophone natif] |
| III | Pl. III — Monnaies numides | Pl. III — Numidian coins | لوحة 3 — نقود نوميدية [à relire par un arabophone natif] |
| IV | Pl. IV — Coupe des couches | Pl. IV — Section through the strata | لوحة 4 — مقطع في طبقات الأرض [à relire par un arabophone natif] |
| V | Pl. V — Cap Carbon · Béjaïa | Pl. V — Cap Carbon · Béjaïa | لوحة 5 — رأس كاربون · بجاية [à relire par un arabophone natif] |
| VI | Pl. VI — Le Grand Erg | Pl. VI — The Grand Erg | لوحة 6 — العرق الكبير [à relire par un arabophone natif] |

### 1.11 Measurement that already exists (no pixels, no trackers)

- Every link to the site can carry `?ref=<code>` and `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`. When the visitor writes, the contact form's mailto body gets a « Source : … » line and every WhatsApp prefilled message gets ` [<ref>]` at the end (app.js:1924-1958, :1960-1976, :1634-1638). Nothing is stored by the site (form note, app.js:75).
- The parameters survive in-page jumps and are carried to the site's other pages (app.js:1509, `assets/carry.js`).
- `?lang=fr|en|ar` and `?cur=dzd|eur|usd` pick the language and the price currency for the visitor (index.html:120-124; app.js:1734-1742). Gulf links: `?lang=ar&cur=usd` or `?lang=en&cur=usd`; France: `?lang=fr&cur=eur`.
- Everything else comes from the platforms' own insights (Meta, YouTube, LinkedIn, TikTok). No pixel, no analytics script: the site promises none (vault `Maps/Owner decisions pending.md:157`; campaign kit "No Meta pixel on the site", `notes/campaign/campaign-readme.md:177`).

---

## 2. Do-not-claim list

### 2.1 Claims that are live on the site but must not be used

| # | Claim, as it appears | Where | Why | Status | Say instead |
|---|---|---|---|---|---|
| 1 | Team size: « un fondateur designer-développeur et trois spécialistes », « 4 personnes dans l'équipe », « Derrière Numidea : un fondateur … et trois spécialistes », « Avec lui, l'équipe » (D, S, T) | app.js:22 / :120 / :221 (hero lede), :27 / :125 / :226 + index.html:407 (stat "4"), :54 / :152 / :253, :76-79 / :174-177 / :275-278 | Unconfirmed (OWNER-CONTENT.md items 4, 14); contradicts the founder's hub/ page, "an agency of one" (OWNER-CONTENT.md item 14) | NO until the owner confirms | "Numidea Labs", "le studio", or the founder by name. Safe hero lede (trimmed, team sentence removed): « Entreprise immatriculée ? Avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu, en 5 jours ouvrés (4 Aperçus par mois au maximum, tous clients confondus). » AR: «شركة مسجّلة؟ قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت خلال 5 أيام عمل (4 معاينات في الشهر كحدّ أقصى لجميع العملاء).» [à relire par un arabophone natif] |
| 2 | « 6 ans » / "6 yrs" / « Six ans à concevoir … » | app.js:55-56 / :153-154 / :254-255 | Unconfirmed; the CV shows freelance work since 2019, about 7 years (OWNER-CONTENT.md item 14) | NO | « en freelance depuis 2019 » (1.2) |
| 3 | « des clients en France » (plural); "clients anywhere — including in France"; «ومنهم عملاء في فرنسا» [à relire par un arabophone natif] | app.js:90 / :188 / :289 | Unconfirmed; the portfolio shows one French client (OWNER-CONTENT.md item 14), and that client's own domain serves another site | NO | « On est basés à Bordj Bou Arréridj » + the time-zone line (1.1) |
| 4 | Delivery with React, Next.js, Vercel (« nous livrons avec les mêmes outils … : React, Next.js, Vercel »; « React · Next.js · Vite · Tailwind sur Vercel »; « Santé · Next.js ») | app.js:327 / :439 / :554; :406 / :518 / :633; :34 / :132 / :233; index.html:600, :1131-1133 | Every delivered build is served by Netlify; only Bordj Steel shows Next.js (OWNER-CONTENT.md item 14) | NO | No tool names. « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs » (app.js:359); « on dessine votre site de zéro » (app.js:406) |
| 5 | Tool stack: React Native, Expo, Docker, Cloudflare (« Nos outils, sans esbroufe ») | index.html:1131-1135 | No delivered project shows them (OWNER-CONTENT.md item 14) | NO | Leave the stack out of videos |
| 6 | Nomara Voyages as a client: any mention, logo, screenshot, Omra/Umrah card or benefit line | index.html:324, :343, :422, :484-496; app.js:39, :43 / :137, :141 / :238, :242; assets/previews/nomara.webp; assets/clients/nomara.webp | Client status unconfirmed (OWNER-CONTENT.md item 7). The campaign kit adds: never mentioned in any ad, post, profile, chat, quote or listing, whatever the answer (`Maps/Campaign.md:199`) | NO | Nothing |
| 7 | Client counts: « 4 sites clients », « 4 projets livrés », « Quatre sites clients sont en ligne aujourd'hui », the hero plate's "01/05" | app.js:24 / :122 / :223, :28 / :126 / :227; index.html:332, :406 | The count includes Nomara (unconfirmed) and AlmaFlowClim (not on its own domain); gap plan: true counts only (`Maps/Gaps and plan.md:68`) | NO | Name the shown projects one by one, no total |
| 8 | Any client result or metric, including the figures visible in client screenshots (Bordj Steel: 25 000 t/an, 1 500 000 m²/an, 60 000 t/an, reference figures; Alliance: 1.2K+, 98%, 4,9/5 · 320 voyageurs, 7+ ans; AlmaFlowClim: 150+ installations, 150+ clients satisfaits, intervention sous 24h) | assets/work/*, assets/previews/* (see 3.2) | No result can be backed; the figures in the captures are the clients' own claims, and on a Numidea video they read as Numidea results | NO | Benefit lines from 1.9 (what a visitor can do), never what changed |
| 9 | « leader de la construction métallique en Algérie » / "Algeria's structural-steel leader" | app.js:37 / :135 / :236 | A ranking claim (about the client); the kit bans ranking claims (`Maps/Campaign.md:71`) | NO | « fabricant de charpente métallique et de panneaux sandwich » (scene-data.mjs:83) |
| 10 | Testimonials, quotes, reviews, stars, "ce qu'en disent nos clients" | index.html:539-541 (empty `SLOT:voices`); app.js:75 (`work.voicesH`) | None exist (OWNER-CONTENT.md item 2) | NO | Nothing |
| 11 | WorkspaceHQ "open source" | — (removed from the site) | No licence file, no README (OWNER-CONTENT.md item 13) | NO | « code public sur GitHub » (scene-data.mjs:300) |
| 12 | The "En cours" projects: Doctor Cherfia Clinic, Étoile de l'Est, and their hostnames `doctorcherfia.dz`, `etoile-est.app` | index.html:512-536 | Owner has not confirmed they are under way; the hostnames are placeholders (OWNER-CONTENT.md item 9) | NO | Nothing |
| 13 | « Pas d'intermédiaire : une seule équipe cadre, code et livre votre projet » and « vous parlez directement à celui qui construit votre projet » | app.js:91 / :189 / :290; :90 / :188 / :289 | Waits on the team decision; the team card gives first contact to S, sales (app.js:78; OWNER-CONTENT.md item 4; `Maps/Owner decisions pending.md:95`) | OWNER | Only the Aperçu half of FAQ 6 (1.3) |
| 14 | « Production environ 20 % plus rapide grâce à l'IA », « En cours d'apprentissage : motion design et montage vidéo » | app.js:71 / :169 / :270 | An unbacked figure; the whole line waits on the owner (`Maps/Owner decisions pending.md:101`) | NO | Nothing |
| 15 | Certifications line (Duolingo English Test, Artiland.Studio, 3D motion design) | app.js:72 / :170 / :271 | Waits on the owner | OWNER | Nothing |
| 16 | The founder's current employer and dated jobs (Heetch "Mai 2026 — aujourd'hui"; Bordj Steel and Alliance Travel as positions) | index.html:1083-1086; app.js:61-67 | Capacity and contract questions are open (campaign gate on the employment contract, `Maps/Owner decisions pending.md:110`) | NO | « Designer graphique & développeur web · Fondateur » |
| 17 | Essentiel: « Mise en ligne, domaine et certificat configurés » shown as proven | app.js:361 / :473 / :588 | No delivered client site is served from its own domain yet (OWNER-CONTENT.md item 14) | OWNER | List the other four Essentiel lines |
| 18 | "Studio verified": any registration, legal form, RC/NIF, ANAE, legal notice, "société", "entreprise enregistrée" for Numidea itself | — | No legal identity is published; the legal page waits on 14 fields (OWNER-CONTENT.md item 1) | NO | "studio" only |
| 19 | VAT mechanics in videos (« facture sans TVA, autoliquidée … art. 283-2 du CGI ») | app.js:378 / :490 / :605 | A legal datum about invoicing; no invoicing entity exists yet, and the kit says no quote until the legal identity is real (`Maps/Campaign.md` legal points) | OWNER | Keep only « HT » / "excl. tax" |
| 20 | "Ils nous ont confié leur site" / "They trusted us with their websites" / «وثقوا بنا في إنجاز مواقعهم» [à relire par un arabophone natif] | app.js:41 / :139 / :240 | The heading waits on the owner while Nomara is unconfirmed (`Maps/Owner decisions pending.md:174`) | OWNER | « Quelques réalisations » (1.9) |
| 21 | Any wording that names an AI model: « propulsés par [modèle] » (service c5), « pose ses questions à [modèle] » (WorkspaceHQ gain 4), the "Ask [model]" tile on the WorkspaceHQ features screen, the last item of the f3 tool list | app.js:410 / :522 / :637, :425 / :537 / :652; scene-data.mjs:286-289; assets/work/workspacehq/d2.webp | Hard rule: no model names in any deliverable | NO | « outils internes », « assistants sur mesure » |

### 2.2 Things nobody has decided yet (never state them)

All OWNER (vault `Maps/Owner decisions pending.md:29-72`):
- Payment: deposit, schedule, invoice currency, payment methods, who invoices. **Never mention USDT or any crypto payment** (hard rule).
- Ownership at delivery: who owns code, design files, domain, hosting accounts (the old "own every token" line was removed, OWNER-CONTENT; no replacement). Never say « tout vous appartient ».
- Hosting: included or not, who pays after the first year; revision rounds; what the client supplies and when.
- What the included support covers, what maintenance adds, why it costs 18,000 to 60,000 DZD.
- Preview rules beyond the site's strings (1.3).
- AED or SAR prices (none exist; USD only).
- A Google, Clutch or Trustpilot profile, ratings, or "verified" badges (none exist).
- Phone calls, opening hours, working days (`Maps/Owner decisions pending.md:151-153`).

### 2.3 Permissions and relationships (OWNER)

- **No client has been asked for permission** to appear in marketing (OWNER-CONTENT.md item 6; `Maps/Owner decisions pending.md:118-121`). Every use of a client name, logo, screenshot or sheet in a video is conditional on written permission from that client (an email or WhatsApp message, kept). The kit's paid-ad gate covered Bordj Steel and Alliance Travel; organic videos need the same for any client shown, including AlmaFlowClim.
- **Bordj Steel and Alliance Travel: clients or employers?** The founder's CV on the site lists both as positions (index.html:1085-1086). Until the owner decides how to describe each relationship (`Maps/Owner decisions pending.md:122-123`), do not write « client », « livré », « delivered »; the kit's carousel rule already forbids those words (`campaign-readme.md:236`).
- **AlmaFlowClim:** permission, plus the domain caveat in 1.9.
- **Nomara:** never (2.1 #6).

### 2.4 Visual don'ts

- Never generate, draw or imply a face for the founder; never use `coin-king.webp` (a laureate profile) or any figure as him.
- Never caption the mid layer of Plate I (`vista-mid.webp`) as the Medracen: it is a generic round tomb (BRAND.md:1170-1171).
- Never show third-party trademarks as endorsements: AlmaFlowClim's home capture carries Daikin, Mitsubishi, Atlantic, Viessmann and "RGE — Aides MaPrimeRénov'" chips (assets/work/almaflow/d1.webp). Crop them out or avoid that frame.
- Never show a client's phone number large on screen (AlmaFlowClim's "07 55 01 60 13" is in d1/d2/m1/m2).
- No Glaive frame without the demo badge in frame.
- No `netlify.app` hostname as a feature; the design proposal suggests hiding it (`Maps/Owner decisions pending.md:9`). If a browser frame is drawn, leave the address bar blank.
- Gulf videos: no flags, landmarks, emblems or local-office look (`Maps/Campaign.md:73`).
- France videos: French-only screens (3.2 lists the language of each capture).
- No new AI-generated images, footage or music (owner rule; see 3.1 for the existing engravings and the open question).

---

## 3. Visual assets available for videos

All paths are under `/home/user/STICKITTY.INC/` (read only: copy into the scratchpad before processing). Dimensions measured with sharp on 2026-10-26.

### 3.1 Engravings and line illustrations (`assets/illus/`)

**What they are.** White line art on pure black. On the site they are never shown as images: they are luminance masks over `currentColor`, so one file re-inks itself in any theme colour (BRAND.md:772-787). In video, use them the same way (as a mask or alpha channel, filled with a theme's `--ice`, `--crimson` or `--teal`). Below about 90 px they turn into smudges (BRAND.md:791-793).
**Provenance.** They are generated engravings from earlier image-generation runs: "each a generated engraving" (BRAND.md:1155), "Plates were generated instead (60 credits each)" (BRAND.md:1217), the FAQ and hub figures "re-prompted" (BRAND.md:806-808); the source files live in the generation account, not in this repository (vault `Maps/Captures and image tools.md:62`). The owner's 2026-10-26 decision names "engravings" as part of the site's visual language that videos may use; the standing rule "no more Magnific generations" forbids making new ones. Treat the 25 files below as the complete, closed set (see open questions).

| File | Size (px), weight | What it depicts | Site use / caption | Motion on the site |
|---|---|---|---|---|
| vista-far.webp | 1600×679, 133 KB | Long mountain ridge (the Bibans), far layer | Plate I, full-bleed under the hero; « Pl. I — Les Bibans · Bordj Bou Arréridj » | 3-layer parallax, twinkling sky, a constellation that draws itself (BRAND.md:1161) |
| vista-mid.webp | 1600×679, 94 KB | Round colonnaded tomb on a hill with olive trees, mid layer | Plate I (never "Medracen") | same |
| vista-near.webp | 1500×636, 179 KB | Foreground palms, agaves and shrubs, near layer | Plate I | same; skylines traced in styles.css so near layers hide far ones (BRAND.md:1173-1180) |
| arch.webp | 1000×558, 84 KB | Triple-bay Roman triumphal arch with column ruins and paved road | Plate II behind the work header; « Pl. II — Arc de Trajan · Timgad » | parallax |
| coin-king.webp | 320×320, 30 KB | Coin: laureate bearded male profile | Plate III beside pricing; « Pl. III — Monnaies numides » | each coin turns on its own axis, three depths |
| coin-horse.webp | 320×320, 15 KB | Coin: prancing horse | Plate III | same |
| coin-palm.webp | 320×320, 19 KB | Coin: date palm with fruit | Plate III | same |
| strata.webp | 1100×462, 174 KB | Geological cross-section: turf, wavy sediment, fossils, cracked bedrock | Plate IV behind the tools section ("the stack as strata"); « Pl. IV — Coupe des couches » | a core sample drilling across |
| lighthouse.webp | 1100×595, 94 KB | Lighthouse on a rocky cliff above the sea | Plate V behind the contact channels; « Pl. V — Cap Carbon · Béjaïa » | the beam sweeps |
| dunes.webp | 1500×596, 115 KB | Sea of dunes with a small camel caravan on a ridge | Plate VI before the footer; « Pl. VI — Le Grand Erg » | parallax |
| lantern.webp | 560×835, 32 KB | Ornate pierced hanging lantern (fanous) on a chain | Uncaptioned, FAQ gutter | swings |
| bench.webp | 1100×614, 50 KB | Workbench from above: laptop with code, sketchbook of logo sketches, compass, ruler, coffee cup, note; no person | Uncaptioned, behind the founder card | parallax; **the safe founder stand-in** |
| px-contour.webp | 1400×594, 169 KB | Topographic contour-line field | Pricing background texture | slow parallax |
| px-plan.webp | 1600×679, 77 KB | Architectural floor-plan grid | Services background texture | slow parallax |
| px-stars.webp | 1600×679, 66 KB | Star chart / constellation grid | Contact background texture | slow parallax |
| faq1.png | 512×512, 11 KB | Schedule grid with hatched bars, a finish flag and a dimension line | FAQ 1 (lead times) | none |
| faq2.png | 512×512, 8 KB | Balance scale: a rolled plan against a stack of coins | FAQ 2 (price) | none |
| faq3.png | 512×512, 16 KB | Three linked speech bubbles with abstract script | FAQ 3 (languages) | none |
| faq4.png | 512×512, 15 KB | Building elevation with scaffolding and a tiny worker | FAQ 4 (after launch) | none |
| faq5.png | 512×512, 12 KB | Two drafting desks linked by an arc over a globe | FAQ 5 (remote work) | none |
| faq6.png | 512×512, 3 KB | Diagram: a direct line between two terminals beside a detour through stacked boxes | FAQ 6 ("no middleman": an OWNER claim, so don't use it to illustrate that) | none |
| hub-design.png | 512×512, 32 KB | Open sketchbook, crossed compass and fountain pen over construction circles | Founder's personal page hub/ | none |
| hub-dev.png | 512×512, 50 KB | Three stacked circuit boards, isometric | hub/ | none |
| hub-social.png | 512×512, 11 KB | Hub-and-spoke node diagram | hub/ | none |
| hub-studio.png | 512×512, 29 KB | Shipping box with tag and envelope | hub/ | none |

Site motion rules worth keeping in video: nothing loops forever (a few cycles, then rest, BRAND.md:1190-1194); screenshots are wiped, never cross-faded, so they stay flat and sharp (index.html:309-313); the Aperçu's four moments are already drawn as a timeline ending on "0 DA" (index.html:570-582).

### 3.2 Real screenshots of the work

Permission caveat for every client capture: **usable only after that client's written permission** (2.3). Captures were taken from the live builds (scene-data.mjs:1-16; refresh command `npm run work:capture`, which writes into the repository: run any new capture into the scratchpad instead).

- `assets/work/<slug>/d1-d4.webp`: desktop pages, **1440×900**.
- `assets/work/<slug>/m1-m2.webp`: phone pages, **780×1688**.
- `assets/previews/<slug>.webp`: homepage cards, **1280×800**.

| File | Project, page (path) | UI language | Visible content to watch |
|---|---|---|---|
| work/bordjsteel/d1.webp (57 KB) | Bordj Steel, Accueil `/` | FR | Welder photo (client's), « BÂTIR L'AVENIR, ENSEMBLE », « Leader de la construction métallique en Algérie » (ranking: don't feature), figures 25 000 t/an, 1 500 000 m²/an, 60 000 t/an (client's) |
| work/bordjsteel/d2.webp (37 KB) | Bordj Steel, Produits `/products` | FR | « NOS PRODUITS », one card per production line. Cleanest Bordj Steel frame. The footer (from y 779 in the 1440 × 900 capture) shows the client's street address and social icons: crop to x 0, y 0, 1440 × 760 px for videos |
| work/bordjsteel/d3.webp (85 KB) | Bordj Steel, Références `/references` | FR | « NOS RÉFÉRENCES », « Nos réalisations en chiffres » with figures (client's) |
| work/bordjsteel/d4.webp (44 KB) | Bordj Steel, Notre histoire `/about/history` | FR | « NOTRE HISTOIRE », « Notre domaine d'activité » |
| work/bordjsteel/m1.webp (49 KB) | Bordj Steel, Accueil, phone | FR | same figures as d1 |
| work/bordjsteel/m2.webp (39 KB) | Bordj Steel, Produits, phone | FR | product lines; clean |
| previews/bordjsteel.webp (37 KB) | Bordj Steel homepage | FR | hero only |
| work/alliance/d1.webp (114 KB) | Alliance Travel, Les voyages `/#voyages` | EN UI (trust bar in FR) | « 4,9/5 · 320 voyageurs », « 7+ ans d'expérience » (client's), destination cards with « À partir de … DA » |
| work/alliance/d2.webp (35 KB) | Alliance Travel, Istanbul `/istanbul/` | EN | dark page, quote calculator showing 129.000 DA |
| work/alliance/d3.webp (42 KB) | Alliance Travel, Rendez-vous visa `/rendez-vous-visa/` | EN | Headline "Your visa appointment, handled end-to-end." **Not clean below the headline (checked 2026-10-26):** the body paragraph says "Ten countries covered", and the trust row says "Three offices on the ground · BBA & M'Sila", "No trip to Algiers needed", "Operating since 2019 · 1,200+ files processed" (client's figures, 2.1 #8; "since 2019" also echoes the founder's own « depuis 2019 »). Usable only cropped to the header bar, eyebrow and headline: x 0, y 0, 1440 × 352 px (the body text starts at y 375). The nav also shows « Tous les voyages » (French) and the site's Arabic switch label (« عر » [à relire par un arabophone natif]) |
| work/alliance/d4.webp (32 KB) | Alliance Travel, Bali `/bali/` | EN | dark page, calculator 419.000 DA |
| work/alliance/m1.webp (69 KB) | Alliance Travel, home, phone | EN | "Licensed agency", "1.2K+ Travellers guided", "98% Satisfaction rate" (client's: avoid) |
| work/alliance/m2.webp (48 KB) | Alliance Travel, Istanbul, phone | EN | calculator, WhatsApp button |
| previews/alliancetravel.webp (25 KB) | Alliance Travel homepage | **FR** (« Le monde, guidé et organisé ») | the only French Alliance capture; no Arabic capture exists |
| work/almaflow/d1.webp (55 KB) | AlmaFlowClim, Accueil `/` | FR | client phone number, « 150+ installations », « 150+ clients satisfaits », « Intervention sous 24h », brand chips Daikin / Mitsubishi / Atlantic / Viessmann, « RGE — Aides MaPrimeRénov' » (avoid or crop) |
| work/almaflow/d2.webp (63 KB) | AlmaFlowClim, Climatisation `/climatisation` | FR | « Installation & Entretien Climatisation à Gennevilliers »; phone number in the hero |
| work/almaflow/d3.webp (41 KB) | AlmaFlowClim, Réalisations `/realisations` | FR | « 150+ chantiers réalisés en Île-de-France » (client's); filter buttons (broken on the live build) |
| work/almaflow/d4.webp (38 KB) | AlmaFlowClim, Devis `/contact` | FR | « Demandez votre Devis Gratuit sans engagement », the quote form. Cleanest AlmaFlowClim frame |
| work/almaflow/m1.webp (66 KB) | AlmaFlowClim, home, phone | FR | phone number, "150+" claims |
| work/almaflow/m2.webp (64 KB) | AlmaFlowClim, Climatisation, phone | FR | phone number |
| previews/almaflowclim.webp (34 KB) | AlmaFlowClim homepage | FR | "150+ installations" card |
| work/glaive/d1.webp (45 KB) | Glaive Store, Accueil `/` | EN | top bar "Portfolio demo · fictional brand and products · nothing is sold or shipped"; fictional "25 YEARS · WORLD'S #1 GAMING BRAND" (keep the demo badge in frame) |
| work/glaive/d2.webp (43 KB) | Glaive Store, Boutique `/shop.html` | EN | filterable product grid, $ prices; fictional star ratings with review counts ("4.8 (540)", "4.7 (1820)"…), a "BEST SELLER" badge and "SAVE 14%". Avoid in videos: stars and counts read as reviews or a ranking (2.1 #10), even with the demo badge |
| work/glaive/d3.webp (39 KB) | Glaive Store, Fiche produit `/product.html` | EN | product page with spec table |
| work/glaive/d4.webp (28 KB) | Glaive Store, Quiz `/quiz.html` | EN | "What are you shopping for?" |
| work/glaive/m1.webp, m2.webp (58, 35 KB) | Glaive Store, home and product, phone | EN | same as desktop |
| previews/glaive.webp (32 KB) | Glaive Store homepage | EN | "PLAY TO WIN. BUILT FOR GLORY." |
| work/workspacehq/d1.webp (35 KB) | WorkspaceHQ, Lancement | EN | "Your codebase, now playable." |
| work/workspacehq/d2.webp (57 KB) | WorkspaceHQ, Fonctionnalités | EN | "Eight ways to win."; one tile names an AI model ("Ask …"): crop or skip it |
| work/workspacehq/d3.webp (42 KB) | WorkspaceHQ, Démonstration guidée | EN | "Watch it work." |
| work/workspacehq/d4.webp (45 KB) | WorkspaceHQ, Bit | EN | "Small. Pixel. Loyal.", the pixel character |
| work/workspacehq/m1.webp, m2.webp (61, 46 KB) | WorkspaceHQ, phone | EN | — |
| previews/nomara.webp | Nomara Voyages | AR | **NO: never use** |
| og.jpg (1200×630, 86 KB) | Numidea share card | FR | « Voyez votre page d'accueil avant de payer » beside the Bordj Steel capture (permission applies) |

Also usable without client permission: recordings of Numidea's own site (`index.html`, `scene/`) in any theme and language, since it is the studio's own work, provided no client screenshot is legible in the frame.

### 3.3 Logos and marks

| Asset | Path | Size | Notes |
|---|---|---|---|
| Numidea wordmark | no image file: text « Num**idea** Labs » with a blinking cursor (index.html:1256) | — | "idea" in `--teal-text`; face per theme via `--font-logo` (Arcanum: Cinzel 700, tracking .04em; others Geist) (assets/styles.css:43, :139-140; themes.css). Always left-to-right, even on Arabic screens (styles.css:2454). Rebuild it in code |
| Favicon / app mark | assets/favicon.svg | 64×64 | Italic serif "N" with a teal-white-red gradient and a red bar, on a plum-to-navy tile (#09D8C7, #EAF2F4, #BD0927; #411E3A, #17364F, #0D1A2F). These colours predate the six themes |
| Client logos | assets/clients/bordjsteel.svg (859×712), alliance.svg (427×150), almaflow.webp (324×96) | — | The clients' own logos, taken from their sites' headers; the site paints them in one theme colour. Permission required (OWNER-CONTENT.md item 7) |
| Nomara logo | assets/clients/nomara.webp | 357×96 | **NO** |
| WorkspaceHQ marks | workspacehq/favicon.svg, workspacehq/og.jpg; the "Bit" pixel sprite inline at index.html:1292 (#d97757, #f2a27e, #a5543a, #1b1430) | — | Own product |

### 3.4 Fonts (`assets/fonts/`, licences in `assets/fonts/OFL.txt`)

All are SIL Open Font License 1.1, unmodified binaries subset to latin, latin-ext and arabic (OFL.txt:96-106). The OFL lets the fonts be used freely as long as they are not sold by themselves (OFL.txt:19-21), and its terms do not apply to any document created with the fonts (OFL.txt:25-26, :76-78), so rendered video frames are fine.

| Family | Files (weights) | Copyright holder (OFL.txt) | Where the site uses it |
|---|---|---|---|
| Cinzel | 700 (latin, latin-ext) | Natanael Gama / The Cinzel Project Authors (OFL.txt:1, :99) | Arcanum headings and logo (`--font-deco`) |
| Cinzel Decorative | 700 | Natanael Gama (OFL.txt:99) | Arcanum swash and emphasis (`--font-deco-dec`) |
| Geist | 400, 500, 600, 700 | Vercel (OFL.txt:98) | Body text everywhere; headings in Noir, Daylight, Mono, Alt-neon, Engineering |
| Geist Mono | 400, 500, 700 | Vercel (OFL.txt:98) | Kickers, buttons, labels, durations, figures (`--font-mono`) |
| IBM Plex Sans Arabic | 400, 600, 700 (arabic, latin, latin-ext) | IBM (OFL.txt:100) | All Arabic text, display and body (`--font-ar-display`, `--font-ar-body`, styles.css:19-20) |
| Syne; Space Mono | 600-800; 400, 700 | Bonjour Monde; Colophon Foundry (OFL.txt:105-106) | Founder's personal page hub/ only, not the studio brand |

Font stacks: assets/styles.css:13-20. The files are web subsets (woff2); render through a browser (as the site does) or convert locally.

### 3.5 The six themes: colour tokens (`assets/themes.css`)

Roles (themes.css:15-19): `--void` page ground · `--navy` card surface · `--plum` raised surface · `--ice` primary text · `--body-strong` long copy · `--muted` / `--faint` secondary text · `--crimson` primary accent (buttons, rules) · `--teal` secondary accent · `--on-crimson` / `--on-teal` text on those fills · `--hairline` rules. Every text/surface pair passes WCAG AA 4.5:1 (themes.css:7-11). Default theme: Arcanum (index.html:2).

| Token | Arcanum (default) themes.css:23-46 | Noir :49-71 | Daylight :74-96 | Mono :99-120 | Alt-neon :123-146 | Engineering :149-170 |
|---|---|---|---|---|---|---|
| Mood | arcane blue and brass, engraved Cinzel | cinematic black, signal red, steel | warm paper, ink, ochre and deep teal | true black and white, no colour | synthwave violet, magenta, cyan | graphite, safety orange, drafting grid |
| --void | #0A1420 | #0B0B0E | #F6F3EC | #0A0A0A | #0C0716 | #0E1012 |
| --navy | #0F1E30 | #141418 | #FFFFFF | #141414 | #150D26 | #15181B |
| --plum | #13283E | #1B1B21 | #EFEADF | #1C1C1C | #1E1236 | #1B1F23 |
| --ice | #EAF1F8 | #F2F2F4 | #15181D | #F5F5F5 | #F4EEFF | #ECEFF1 |
| --body-strong | #C7D5E2 | #D2D2D9 | #2B3038 | #D4D4D4 | #D8CEF0 | #C9CFD4 |
| --muted | #9DB2C6 | #A2A2AE | #4F5562 | #A3A3A3 | #AC9FCB | #9CA5AD |
| --faint | #7D92A6 | #9696A2 | #5A606C | #999999 | #A193C2 | #929BA3 |
| --crimson (primary accent) | #E6B450 | #E5484D | #8C5E0A | #F5F5F5 | #FF3EA5 | #FF5B1F |
| --crimson-hi | #F4D27A | #FF6369 | #A8741A | #FFFFFF | #FF6CBC | #FF7A45 |
| --crimson-text | #E6B450 | #FF6B6F | #7A5208 | #F5F5F5 | #FF62B5 | #FF7A45 |
| --on-crimson | #0A1420 | #0B0B0E | #FFFFFF | #0A0A0A | #0C0716 | #0E1012 |
| --teal (secondary accent) | #34D0E8 | #C9CED6 | #0E6E78 | #BDBDBD | #3EE6FF | #8EC5E8 |
| --teal-text | #34D0E8 | #C9CED6 | #0B5F68 | #D4D4D4 | #3EE6FF | #8EC5E8 |
| --hairline / --hairline-2 | #1C3550 / #27496B | #24242C / #36363F | #E4DED2 / #D2C9B8 | #262626 / #3A3A3A | #2A1C45 / #3D2A63 | #23282D / #323A42 |
| --grad-blood (swash text) | 135deg #F4D27A → #B07E2A → #13283E | 135deg #FF6369 → #E5484D → #5A1418 | 135deg #A8741A → #8C5E0A → #5C3D06 | 135deg #FFFFFF → #BDBDBD → #3A3A3A | 135deg #FF6CBC → #FF3EA5 → #5B1E8C | 90deg #FF7A45 → #FF5B1F |
| Heading face / weight / tracking | Cinzel (Decorative for emphasis) / 700 / .01em | Geist / 700 / -.035em | Geist / 600 / -.03em | Geist / 500 / -.035em | Geist / 700 / -.025em | Geist / 600 / -.03em |
| Grid (colour, opacity, size) | brass .5, .07, 64px | muted, .035, 64px | ink, .045, 64px | ink, .04, 64px | cyan .7, .06, 48px | muted, .09, 32px |
| Radius sm / md | 8 / 14px | 6 / 10px | 10 / 16px | 2 / 4px | 10 / 18px | 2 / 4px |

The atmosphere gradients (`--atmos`) and glows are in the same blocks (e.g. Arcanum's brass and cyan radial glows, themes.css:36-38).

### 3.6 Coded motion references already in the repository

- `workspacehq/embed/trailer.html` + `hq-trailer.js`, `hq-trailer2.js`, `animations-v3.js`: the WorkspaceHQ launch trailer, a scene list in code (`OM_SCENES`: Boot, Chaos, Decode, …) played on a composition clock (trailer.html).
- `workspacehq/embed/walkthrough.html`: the guided walkthrough.
- `workspacehq/embed/hq-audio.js`: a WebAudio sampler that follows the composition clock, with an offline WAV mixdown (hq-audio.js:1, :67-85), a pattern for rendering audio offline. Its 16 sounds, including `music1.mp3` and `music2.mp3` (workspacehq/embed/assets/audio/), have **no recorded source or licence** in the repository: do not reuse them without the owner confirming where they come from.
- Site motion: the plate motions (BRAND.md:1159-1166), the animated icon grammar (24×24, 1.5 stroke, draw-in then idle; BRAND.md:1196-1211), the hero plate wipe (index.html:309-313), the Aperçu timeline (index.html:570-582).

---

## 4. What limits the story today (context for the strategy)

The competitor analysis named three gaps that cap what any video can claim (vault `Maps/Gaps and plan.md`; `Maps/Owner decisions pending.md:9`):
1. **A business buyers can verify:** no own domain or domain email (personal Gmail, GitHub Pages address), no legal notice, no published registration.
2. **Proof from others:** no quotes, reviews or consented case studies; client permission not yet asked.
3. **Written terms after the yes:** no payment, ownership, hosting or support terms.
Until these move, videos can show the offer (the Aperçu, published prices, the method), the craft (the site itself, the sheets' benefit lines with permission, WorkspaceHQ), and the place (the plates), but no social proof and no business credentials.
