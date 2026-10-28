# Copy library

Ready lines for headlines, sublines, calls to action and captions, each traced to a site string (its key in `assets/app.js`, or the page it is on) or to a line of the studio's facts bank. They are sorted by pillar, then by the gate each one needs (`marketing.md`). Use them as written, or shorten them; never add a fact (`claims.md`).

- **Gate 0** lines may run now. **Gate B** lines invite people to write or headline the Aperçu: hold them until Gate B opens. **Gate C** lines need that client's written permission. **Gate D** lines need written terms after the yes.
- Arabic is the site's own copy or a restatement of it, marked [AR à relire]: it awaits a native speaker's review. Where no Arabic is given, the Arabic is on the same key in the site's Arabic block.
- Every price carries « env. » / "about" / «نحو»; € and $ add « HT » / "excl. tax"; dinars carry no tax label. Every mention of the Aperçu carries its conditions.
- One language per piece. French typography: U+202F before ; ! ? and a no-break space before : and inside « » (README).

## Pillar 5: behind the studio, and the brand (Gate 0)

| Role | French | English | Arabic [AR à relire] | Source |
|---|---|---|---|---|
| Headline | Votre site sur mesure, en français, anglais ou arabe. | Custom websites, in English, French and Arabic. | موقعك المخصّص، بالعربية والفرنسية والإنجليزية. | `hero.title` |
| Label, end card | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Web & software studio · Bordj Bou Arréridj, Algeria | استوديو ويب وبرمجيات · برج بوعريريج، الجزائر | `hero.eyebrow` |
| Subline | Studio web et logiciel à Bordj Bou Arréridj, Algérie. On conçoit, on code, on livre et on suit vos sites et applications, en français, anglais et arabe. | Web and software studio in Bordj Bou Arréridj, Algeria. We design, build, launch and support websites and web apps in English, French and Arabic. | استوديو ويب وبرمجيات في برج بوعريريج، الجزائر. نصمّم ونبرمج ونطلق مواقع وتطبيقات الويب ونتابعها بعد الإطلاق، بالعربية والفرنسية والإنجليزية. | `meta.desc` |
| Motto | Enraciné en Numidie · bâti sur des idées | Rooted in Numidia · built on ideas | جذورها في نوميديا · مبنيّة على الأفكار | `footer.tag` |
| Device | 36°04′N · 4°46′E | 36°04′N · 4°46′E | 36°04′N · 4°46′E | hero dimension line |
| Caption | UTC+1 · l'heure de Paris en hiver, 1 h de moins en été | UTC+1 (Algeria) · 2 h behind Riyadh, 3 h behind Dubai · same as Paris in winter, 1 h behind in summer | UTC+1 (توقيت الجزائر) · أقلّ بساعتين من توقيت الرياض، وبثلاث ساعات من توقيت دبي | `contact.vTz` |
| Subline | On est basés à Bordj Bou Arréridj. | We're based in Bordj Bou Arréridj. | مقرّنا في برج بوعريريج. | opening clause of `faq5.a` |
| Founder's line | Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement. — Yasser Hamisse, designer graphique & développeur web · fondateur | I turn the brief into the build, and I stay once it's live. — Yasser Hamisse, graphic designer & web developer · founder | أحوّل الفكرة إلى منتج، وأبقى بعد الإطلاق. | `founder.bio` (2nd sentence), `founder.role` |
| Caption | En freelance depuis 2019. | Freelance since 2019. | — | `fx2.when` |
| Plate captions | Pl. I — Les Bibans · Bordj Bou Arréridj · Pl. II — Arc de Trajan · Timgad · Pl. III — Monnaies numides · Pl. IV — Cap Carbon · Béjaïa · Pl. V — Le Grand Erg | Pl. I — The Bibans · Bordj Bou Arréridj · Pl. II — Arch of Trajan · Timgad · Pl. III — Numidian coins · Pl. IV — Cap Carbon · Béjaïa · Pl. V — The Grand Erg | لوحة 1 — جبال البيبان · برج بوعريريج … لوحة 5 — العرق الكبير | `pl.*` |
| End-card pointer | Lien en bio · (LinkedIn) Lien en commentaire | Link in bio | الرابط في الملف التعريفي | marketing plan, end cards |

## Pillar 2: how we work (Gate 0)

### Prices

| Role | French | English | Arabic [AR à relire] | Source |
|---|---|---|---|---|
| Headline | Un prix avant le devis. | A price before the quote. | سعر قبل عرض السعر. | `price.title` |
| Subline | Nos prix, publiés — à côté des tarifs courants en Algérie, en France et aux États-Unis. | Our prices, published — next to typical rates in Algeria, France and the United States. | — | `price.lead` (first sentence) |
| Hook (Algeria) | Site vitrine : env. 90 000 – 160 000 DA. | — | — | Essentiel range, `PRICE_MODEL` |
| Package | Essentiel · Une présence crédible, vite en ligne. · env. 90 000 – 160 000 DA · 2 à 4 semaines | Essential · A credible presence, live quickly. · about $670–1,200 excl. tax · 2 to 4 weeks | الأساسي · حضور موثوق، على الإنترنت بسرعة. · نحو 90 000 – 160 000 دج · من 2 إلى 4 أسابيع | `price.t1*` |
| Package | Studio · Le site qui porte vraiment l'entreprise. · env. 180 000 – 420 000 DA · 3 à 7 semaines | Studio · The site that actually carries the business. · about $1,300–3,100 excl. tax · 3 to 7 weeks | الاستوديو · الموقع الذي يحمل الشركة فعلاً. · نحو 180 000 – 420 000 دج · من 3 إلى 7 أسابيع | `price.t2*` |
| Package | Moteur · Quand il vous faut un outil métier, pas seulement un site. · env. 450 000 – 1 200 000 DA · 8 à 16 semaines | Engine · For when your business needs a tool, not just a site. · about $3,400–9,000 excl. tax · 8 to 16 weeks | المحرّك · حين تحتاج شركتك إلى أداة عمل، لا إلى موقع فحسب. · نحو 450 000 – 1 200 000 دج · من 8 إلى 16 أسبوعاً | `price.t3*` |
| France price line | Site vitrine : env. 600 – 1 100 € HT | — | — | Essentiel in €, the site's conversion |
| Subline | Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. | An indicative range, not a quote. The firm price follows once we have scoped it together — and it does not move after that. | تقدير استرشادي، لا عرض سعر رسمي. السعر النهائي نحدّده بعد أن نضبط معاً نطاق العمل — ولا يتغيّر بعدها. | `price.estFine` |
| Punch | Pas une fourchette, un chiffre. | Not a range — one number. | ليس سعراً تقريبياً، بل رقمٌ واحد. | `prev.tl2p` |
| Subline | Au forfait : un prix fixe pour un périmètre écrit. | Fixed price: one fixed price for a written scope. | — | `md.fH`, `md.fP` |
| Support line | 1, 3 ou 6 mois de support inclus, selon la formule. | 1, 3 or 6 months of support included, by package. | — | `price.t1e`, `t2f`, `t3e`, `faq4.a` |
| Maintenance | Maintenance après livraison, si vous la voulez : env. 18 000 – 60 000 DA par mois. Sans engagement de durée. | Maintenance after launch, if you want it: about 18,000–60,000 DZD a month. No lock-in. | — | `price.retainerA`, `price.retainerB` (never say what it covers) |
| Caption (€, $) | Conversion au taux officiel de la Banque d'Algérie (1 € ≈ 151 DA, octobre 2026), arrondie. | Converted at the Bank of Algeria official rate ($1 ≈ 134 DZD, October 2026), rounded. | تحويل بالسعر الرسمي لبنك الجزائر (1 $ ≈ 134 دج، أكتوبر 2026)، مع التقريب. | `price.curNote*`, cut before the VAT sentence |

Gulf pieces show no price; use the headline « A price before the quote. » / «سعر قبل عرض السعر.» instead.

### Craft and method

| Role | French | English | Arabic [AR à relire] | Source |
|---|---|---|---|---|
| Hook | Design sur mesure — jamais un modèle tout fait repeint à vos couleurs. | Custom design — never a re-themed template. | تصميم مخصّص — لا قالب معاد تلوينه أبداً. | `price.t1b` |
| Subline | Pas de modèle acheté puis maquillé : on dessine votre site de zéro. | No ready-made templates: we design your site from scratch. | — | end of `f1.brief` |
| Headline | Quatre étapes. | Four steps. | أربع خطوات. | method title, without « Zéro surprise » (Gate D) |
| Step 1 | Vous décrivez le projet. Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe. | You describe the project. Two minutes, in writing or out loud. In French, English or Arabic. | تصف المشروع. دقيقتان، كتابةً أو مشافهة. بالفرنسية أو الإنجليزية أو العربية. | `prev.tl1`, `prev.tl1p` |
| Step 2 | On revient sous 24 h ouvrées. Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. | We reply within 24 working hours. First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. | نعود إليك خلال 24 ساعة عمل. بأسئلتنا أولاً، ثم بنطاق عمل مكتوب وسعر نهائي بمجرّد أن نتّفق معاً على هذا النطاق. | `prev.tl2`, `prev.tl2p` (without its last sentence; never drop the scoping condition) |
| Step 3 (the only Aperçu mention before Gate B) | On construit l'Aperçu — gratuit. La page d'accueil de votre site, avec votre contenu, avant tout paiement. Pour les entreprises immatriculées, 4 par mois au maximum, tous clients confondus. | We build the Preview — free. Your site's homepage, with your own content, before any payment. For registered businesses: at most 4 a month, across all clients. | نبني المعاينة — مجّاناً. الصفحة الرئيسية لموقعك بمحتواك، قبل أيّ دفع. للشركات المسجّلة، 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. | facts bank, method step 3 (no call to action; the lawyer's answer pending) |
| Step 4 | Vous décidez. Si c'est non, vous ne devez rien. | You decide. If it's no, you owe nothing. | أنت تقرّر. إن كان الجواب لا، فلا شيء عليك. | facts bank, method step 4 (first half) |
| Subline | Cela dépend du périmètre : comptez 2 à 4 semaines pour un site vitrine, 3 à 7 pour un site sur mesure, 8 à 16 pour une application web. | It depends on the scope: 2 to 4 weeks for a showcase site, 3 to 7 for a custom site and 8 to 16 for a web application. | — | `faq1.a` |
| Headline | On reste. | We stay. | نبقى معك. | `faq4.a` |
| Punch | Pas de « bonne chance » le jour de la mise en ligne. | No “good luck” on launch day. | لا «حظّاً موفقاً» يوم الإطلاق. | `faq4.a` |
| Caption | Réponse < 24 h ouvrées · FR · EN · AR | Reply < 24 working hours · FR · EN · AR | — | `contact.vReply` |

### Services (capabilities, never a track record)

| Service | Promise FR | Promise EN | Source |
|---|---|---|---|
| Sites & applications web | Le choix évident. | The obvious choice. | `f1.promise` |
| Identité & systèmes visuels | La confiance avant le premier mot. | Trust before a word is read. | `f2.promise` |
| Automatisation & pipelines | Supprimez la corvée. | Delete the busywork. | `f3.promise` |
| Intelligence marché & produit | Voir le marché clairement. | See the market clearly. | `f4.promise` |
| Stratégie & conseil croissance | De la donnée, pas des impressions. | (English: use the brief) | `f5.promise` |
| Boutique & réservation | De la visite au paiement. | From browse to paid. | `c1.promise` |
| Design graphique & réseaux sociaux | Des visuels qui arrêtent le regard. | Scroll-stopping, on brand. | `c2.promise` |
| Data science & analytics | Du signal dans le bruit. | Signal out of noise. | `c3.promise` |
| Systèmes de connaissance | Une entreprise qui se souvient. | A company that remembers. | `c4.promise` |
| Outils & assistants IA sur mesure | Le logiciel qui construit votre logiciel. | Software that builds your software. | `c5.promise` |

Subline for a services piece: « Nos cinq services principaux — et cinq autres juste en dessous. » / "Our five core services — and five more just below." (`svc.lead`). Briefs: `business.md`, with the ✂ trims.

## Pillar 3: education for business owners (Gate 0)

| Role | French | English | Arabic [AR à relire] | Source |
|---|---|---|---|---|
| Hook | L'arabe, ce n'est pas une traduction. | Arabic isn't a translation. It's a layout. | العربية ليست ترجمة، بل تصميم. | restates `md.d3p` and `faq3.a` |
| Subline | Chaque langue ajoute du contenu ; l'arabe ajoute une mise en page de droite à gauche. | Each language adds content; Arabic adds a right-to-left layout. | — | `md.d3p` |
| Subline | Français, arabe et anglais — à l'oral, à l'écrit, et dans le produit livré. | French, Arabic and English — spoken, written, and in everything we deliver. | الفرنسية والعربية والإنجليزية — حديثاً وكتابةً وفي المنتَج المُسلَّم. | `faq3.a` |
| Proof line | Ce site même est trilingue, avec une expérience arabe (RTL) pensée nativement. | This very site is trilingual, with a natively mirrored Arabic (right-to-left) experience. | هذا الموقع نفسه ثلاثي اللغات، بنسخة عربية مصمّمة من الأساس للكتابة من اليمين إلى اليسار. | `faq3.a` |
| Hook | Fourchette indicative ou prix ferme ? | Indicative range or firm price? | — | restates `price.estFine` |
| Headline | Il y a quatre façons de facturer un projet. Chacune est la norme quelque part. | There are four ways to bill a project. Each one is the norm somewhere. | — | `md.p` |
| List | Au forfait · Au temps passé · À l'abonnement · À la valeur | Fixed price · Time and materials · Retainer · Value-based | — | `md.fH`, `md.tH`, `md.aH`, `md.vH` |
| Headline + list | Ce qui fait bouger un devis : le périmètre, le design, les langues, les intégrations, le contenu, le délai. | What moves a quote: scope, design, languages, integrations, content, timeline. | — | `md.drH`, `md.d1h`–`md.d6h` |
| Fact (with the sources line below, in the caption or on the visual) | Une journée de développeur confirmé en France coûte 480 – 650 € ≈ 70 000 – 100 000 DA au taux officiel, soit à peu près le prix d'un site vitrine complet sur le marché algérien. | A day's work by an experienced developer in France costs €480–650 ≈ 70,000–100,000 DZD at the official rate — roughly the price of an entire showcase site on the Algerian market. | — | `mk.day1`, `mk.day2` |
| Sources line (caption, with any market comparison or the day-rate fact) | Sources : un baromètre des tarifs freelance 2026 (Algérie) ; des grilles de prix publiées par des studios, un baromètre de prix et des taux journaliers de freelances (France) ; des guides de prix publiés par des studios et par un annuaire (États-Unis) ; le taux officiel de la Banque d'Algérie, début octobre 2026. Fourchettes courantes, du freelance confirmé à l'agence, hors taxes. Le détail est sur le site : Tarifs › Comment on chiffre › Sources et méthode. | Sources: a 2026 freelance-rate barometer (Algeria); price pages published by studios, a price barometer and freelance day rates (France); pricing guides published by studios and by a directory (United States); the Bank of Algeria official rate, early October 2026. Typical ranges, from an experienced freelancer to an agency, excluding tax. The detail is on the site: Pricing › How we price › Sources and method. | — | `business.md`, the market comparison; names kinds of source, never a studio |
| Hook (a question, no fact) | Votre site ne vous ressemble plus ? | Does your site still look like your business? | هل ما زال موقعك يشبه شركتك؟ | the plan's hook H3 |

## Pillar 4: proof of work

### Gate 0: the studio's own work

| Role | French | English | Source |
|---|---|---|---|
| Headline | Le projet préféré du fondateur | The founder's favourite project | WorkspaceHQ line |
| Subline | WorkspaceHQ v3 : une console qui scanne chaque dépôt de la machine et transforme l'hygiène git en quêtes. Code public sur GitHub. | WorkspaceHQ v3: a console that scans every repository on the machine and turns git hygiene into quests. Public code on GitHub. | project sheet Pl. 04 (never "open source") |
| Badge, in every frame | Projet de démonstration (portfolio) – pas un projet client | Portfolio demo – not a client project | Glaive Store rule |
| Subline | Une marque de matériel gaming inventée de A à Z, avec boutique filtrable, fiches produit et un quiz qui recommande le bon équipement. | A gaming-gear brand invented from scratch, with a filterable shop, product pages and a quiz that recommends the right gear. | project sheet Pl. 03 (restated in English) |
| Headline | Six thèmes, un seul système. | Six themes, one system. | facts bank: the six themes on one token contract |

### Gate C: client work, one client at a time, after written permission

| Role | French | English | Source |
|---|---|---|---|
| Heading | Quelques réalisations | Some of our work | campaign-kit safe heading (never « client », « livré » until the owner decides) |
| Bordj Steel | Un acheteur trouve la bonne gamme et ses caractéristiques techniques sans appeler. | A buyer finds the right product line and its technical data without calling. | `proj4.gain` |
| Alliance Travel | Un voyageur estime son budget et envoie une demande complète sur WhatsApp. | A traveller estimates the budget and sends a complete request on WhatsApp. | `proj2.gain` (EN restated) |
| AlmaFlowClim | En cas de panne, un client appelle d'un simple appui depuis la page du métier. | If something breaks down, a customer calls in one tap from the page for that trade. | `proj3.gain` (present it as a redesign proposal unless the owner confirms adoption) |
| Sheet label | Ce que le site apporte au client | What the site gives the client | project sheets |

## Pillar 1: L'Aperçu

### Gate B: headlines, calls to action, invitations to write

| Role | French | English | Arabic [AR à relire] | Source |
|---|---|---|---|---|
| Headline | Voyez votre page d'accueil avant de payer. | See your homepage before you pay. | شاهد صفحتك الرئيسية قبل أن تدفع. | `og:title`; share card |
| Headline | Zéro risque. Juste la preuve. | Zero risk: see it before you pay. | بلا مخاطرة. ترى النتيجة قبل أن تدفع. | `prev.promise` |
| Hook | Payé jusqu'ici : 0 DA. | Paid so far: 0. | المدفوع حتى الآن: 0 | `prev.tl5d` and the path's last moment |
| Lead | Entreprise immatriculée ? Vous ne payez rien avant d'avoir vu votre page d'accueil tourner. | Registered business? You pay nothing until you have seen your homepage running. | شركة مسجّلة؟ لا تدفع شيئاً قبل أن ترى صفحتك الرئيسية تعمل. | facts bank, the method's lead |
| Subline | Avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu. Si vous dites non, vous ne devez rien. | Before any payment, we build your new site's homepage with your own content. If you say no, you owe nothing. | قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت. إن قلت لا، فلا شيء عليك. | `prev.brief` |
| Path | Vous décrivez le projet → On revient sous 24 h ouvrées → Vous envoyez votre contenu, on construit votre page d'accueil (5 jours ouvrés à réception de vos contenus) → On vous la présente (visio de 30 min) → Vous décidez. Payé jusqu'ici : 0 DA | You describe the project → We reply within 24 working hours → You send your content and we build your homepage (5 working days once we have your content) → We walk you through it (30-minute video call) → You decide. Paid so far: 0 | تصف المشروع ← نعود إليك خلال 24 ساعة عمل ← ترسل إلينا محتواك، ونبني صفحتك الرئيسية (5 أيام عمل من استلام المحتوى) ← نعرضها عليك (في مكالمة فيديو من 30 دقيقة) ← أنت تقرّر. المدفوع حتى الآن: 0 | `prev.tl1`–`prev.tl5d` |
| Outcome | Vous dites oui en connaissance de cause : vous avez déjà vu le résultat. | (use the French or the brief; the English outcome is a superlative) | — | `prev.outcome` |
| **Conditions, full** | Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. | Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients. | مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. | `prev.terms` |
| **Conditions, short** (full line in the caption) | Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. | Free, no obligation · registered businesses · at most 4 a month. | مجّاناً ودون التزام · للشركات المسجّلة · 4 في الشهر كحدّ أقصى | share card; marketing plan |
| Call to action | Demander mon Aperçu gratuit → | Request my free Preview → | اطلب معاينتك المجانية ← | `hero.cta1` |
| Call to action | Demander mon Aperçu → | Request my Preview → | اطلب معاينتك ← | `prev.cta` |
| Call to action | Écrire sur WhatsApp | Chat on WhatsApp | راسلنا عبر واتساب | `hero.cta2` (with the dedicated number only) |
| Prefilled message | Bonjour Numidea Labs, je souhaite voir l'Aperçu gratuit de mon futur site. | Hello Numidea Labs, I would like to see a free Preview of my new website. | مرحباً نوميديا لابز، أرغب في الاطّلاع على معاينة مجانية لموقعي الجديد. | `prev.waText` |
| Contact headline | Parlons de votre projet. | Let's talk about your project. | لنتحدّث عن مشروعك. | `contact.title` |
| Contact subline | Dites-nous ce qu'il vous faut : une urgence à traiter, quelque chose à corriger, une échéance à tenir. En français, anglais ou arabe. | Tell us what you need: an urgent job, something that needs fixing, a deadline to meet. In English, French or Arabic. | أخبرنا بما تريد إنجازه: أمر عاجل، أو موقع يحتاج إلى إصلاح، أو موعد نهائي يقترب. بالفرنسية أو الإنجليزية أو العربية. | `contact.sub` |
| Waitlist (only when true) | Les Aperçus de [mois] sont tous pris : je prends les demandes pour [mois suivant]. | — | — | marketing plan; only with the real count |

### Gate D: after the yes

| Role | French | English | Source |
|---|---|---|---|
| Headline | Quatre étapes. Zéro surprise. | Four steps. No surprises. | the site's former method title; « Zéro surprise » needs written terms |
| Heading | Après le oui | After the yes | planned piece; its content waits for the owner's terms |

## Never in a line

« moins cher », « meilleur », « n°1 », « leader », « le seul », a team size, « 6 ans », a client count or result, a quote or a rating, Nomara, a tool or model name, « open source », a registration claim, a payment term or method, « tout vous appartient », an AED or SAR price, a URL, email or ref code on the visual. Full list: `claims.md`.
