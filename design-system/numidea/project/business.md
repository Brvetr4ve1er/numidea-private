# The business

What Numidea Labs sells, at what price, and what the site says about its work. Every figure comes from the site: dictionary keys (`price.t1name`) are in `assets/app.js`, prices are set in dinars in `PRICE_MODEL` and `RETAINER`, and the euro and dollar figures are exactly what the site shows when a visitor switches currency (dinars ÷ 151 or ÷ 134, rounded by the site's own rule). Before using any line here in marketing, check its gate in `marketing.md` and its status in `claims.md`. Arabic strings are marked [AR à relire]: they await a native speaker's review.

## L'Aperçu, the signature offer

The offer that sets the studio apart in all three markets: before any payment, the studio builds the homepage of the buyer's new site with the buyer's own content and walks them through it. **It never appears without its conditions**, and in marketing it is held to Gate B (a headline, a call to action) or, before that, to step 3 of the method (`marketing.md`).

| Element | French | English | Key |
|---|---|---|---|
| Tag | Offre signature | Signature offer | `prev.tag` |
| Name | L'Aperçu | The Preview | `prev.name` |
| Promise | Zéro risque. Juste la preuve. | Zero risk: see it before you pay. | `prev.promise` |
| Brief | Avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu. Si vous dites non, vous ne devez rien. | Before any payment, we build your new site's homepage with your own content. If you say no, you owe nothing. | `prev.brief` |
| **Conditions** | Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. | Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients. | `prev.terms` |
| Outcome | Vous dites oui en connaissance de cause : vous avez déjà vu le résultat. | The easiest yes you'll ever give — because you've already seen it. | `prev.outcome` |
| Button | Demander mon Aperçu → (hero: Demander mon Aperçu gratuit →) | Request my Preview → (hero: Request my free Preview →) | `prev.cta`, `hero.cta1` |
| WhatsApp text | Bonjour Numidea Labs, je souhaite voir l'Aperçu gratuit de mon futur site. | Hello Numidea Labs, I would like to see a free Preview of my new website. | `prev.waText` |

Arabic: the name «المعاينة», the promise «بلا مخاطرة. ترى النتيجة قبل أن تدفع.», the conditions «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [AR à relire].

**The path, as the Aperçu card tells it** (`prev.tl1`–`prev.tl5`; the site's separate method section was folded into this card on 2026-10-26):

| # | French | English | Duration |
|---|---|---|---|
| 1 | Vous décrivez le projet — Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe. | You describe the project — Two minutes, in writing or out loud. In French, English or Arabic. | — |
| 2 | On revient sous 24 h ouvrées — Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. Pas une fourchette, un chiffre. | We reply within 24 working hours — First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. Not a range — one number. | 24 h ouvrées |
| 3 | Vous envoyez votre contenu, on construit votre page d'accueil | You send your content and we build your homepage | 5 jours ouvrés (`prev.tl3d`) |
| 4 | On vous la présente | We walk you through it | visio de 30 min (`prev.tl4d`) |
| 5 | Vous décidez — Payé jusqu'ici : 0 DA | You decide — Paid so far: 0 | — |

- Wherever « 5 jours ouvrés » appears in marketing, add « à réception de vos contenus » / "once we have your content" / «من استلام المحتوى» [AR à relire]: the clock starts when the content has arrived.
- `prev.tl5p`, « Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste. », is on the owner's list of claims to confirm (OWNER-CONTENT §14): leave it out of marketing until he does.
- **Undecided, so never stated:** what counts as « immatriculée » in each market (sole traders, SIRET, a Gulf trade licence), exactly when the 5 days start, what happens when the month's 4 places are taken, which services get an Aperçu, and what happens to the homepage and the content after a no or a yes (IMPROVEMENTS A5).
- The campaign kit's extra qualifiers, « (SIRET) », « projet de site à partir d'environ 600 € HT » and « décision prévue d'ici 3 mois », are not on the site. Use them only if the owner adopts them.
- No « places left this month » counter: nobody keeps that count yet.

## The three packages

Prices are ranges set in dinars and shown on the tier cards; the firm price follows the scoping (`price.estFine`). Source: `price.t1*`–`price.t3*`, `PRICE_MODEL`.

| | **Essentiel** / Essential | **Studio** / Studio (badge « Recommandé » / "Recommended") | **Moteur** / Engine |
|---|---|---|---|
| For | Une présence crédible, vite en ligne. / A credible presence, live quickly. | Le site qui porte vraiment l'entreprise. / The site that actually carries the business. | Quand il vous faut un outil métier, pas seulement un site. / For when your business needs a tool, not just a site. |
| Dinars | 90 000 – 160 000 DA | 180 000 – 420 000 DA | 450 000 – 1 200 000 DA |
| Euros (≈, HT) | 600 – 1 100 € | 1 200 – 2 800 € | 3 000 – 7 900 € |
| Dollars (≈, excl. tax) | $670–1,200 | $1,300–3,100 | $3,400–9,000 |
| Duration | 2 à 4 semaines / 2 to 4 weeks | 3 à 7 semaines / 3 to 7 weeks | 8 à 16 semaines / 8 to 16 weeks |
| Support included | 1 mois / 1 month | 3 mois / 3 months | 6 mois / 6 months |

**Scope, as each card lists it:**
- **Essentiel:** Vitrine ou landing, 1 à 5 pages · Design sur mesure — jamais un modèle tout fait repeint à vos couleurs · Responsive, performance et SEO de base · ~~Mise en ligne, domaine et certificat configurés~~ (on the card, but on the owner's list to confirm: no delivered client site is served from its own domain yet; leave it out). EN: Showcase or landing site, 1 to 5 pages · Custom design — never a re-themed template · Responsive, fast, with foundational SEO.
- **Studio:** Site sur mesure, 6 à 15 pages · Trilingue FR / EN / AR, avec un arabe RTL pensé nativement · Design system documenté — styles, composants, le kit complet · CMS ou back-office pour gérer le contenu vous-même · SEO technique, Core Web Vitals, accessibilité. EN: Custom site, 6 to 15 pages · Trilingual FR / EN / AR, with Arabic RTL built natively · Documented design system — styles, components, the full kit · CMS or back-office so you manage the content yourself · Technical SEO, Core Web Vitals, accessibility.
- **Moteur:** Application web sur mesure : plateforme, portail ou outil métier · Paiement, comptes utilisateurs, tableaux de bord · Scraping et intelligence marché, intégrés à l'application · Intégrations API et outils internes. EN: Custom web application: platform, portal or business tool · Payments, user accounts, dashboards · Scraping and market intelligence, built into the application · API integrations and internal tools.

Arabic names: «الأساسي», «الاستوديو», «المحرّك»; durations «من 2 إلى 4 أسابيع», «من 3 إلى 7 أسابيع», «من 8 إلى 16 أسبوعاً» [AR à relire].

**Price strings for marketing** (the site's figures with « env. »; dinars carry no tax label until the accountant answers):

| | Essentiel | Studio | Moteur | Maintenance |
|---|---|---|---|---|
| FR, DA | env. 90 000 – 160 000 DA | env. 180 000 – 420 000 DA | env. 450 000 – 1 200 000 DA | env. 18 000 – 60 000 DA par mois |
| FR, € | env. 600 – 1 100 € HT | env. 1 200 – 2 800 € HT | env. 3 000 – 7 900 € HT | env. 120 – 400 € HT par mois |
| EN, $ | about $670–1,200 excl. tax | about $1,300–3,100 excl. tax | about $3,400–9,000 excl. tax | about $130–450 a month, excl. tax |
| AR, DA [AR à relire] | نحو 90 000 – 160 000 دج | نحو 180 000 – 420 000 دج | نحو 450 000 – 1 200 000 دج | نحو 18 000 – 60 000 دج شهرياً |

Caption note whenever € or $ is shown: « Conversion au taux officiel de la Banque d'Algérie (1 € ≈ 151 DA, octobre 2026), arrondie. » / "Converted at the Bank of Algeria official rate ($1 ≈ 134 DZD, October 2026), rounded." (`price.curNoteEUR`, `price.curNoteUSD`, cut before their VAT sentence.)

### Maintenance

« Maintenance après livraison, si vous la voulez : 18 000 – 60 000 DA par mois. Sans engagement de durée. » / "Maintenance after launch, if you want it: 18,000–60,000 DZD a month. No lock-in." (`price.retainerA`, `price.retainerB`, `RETAINER`). Shown as ≈ 120 – 400 € and ≈ $130–450 a month. **What it covers, and what sets the range, are undecided:** say nothing about its content. The same holds for what the included 1, 3 or 6 months of support cover.

### How prices work

- Fixed price per written scope: « Au forfait : un prix fixe pour un périmètre écrit. Si le travail déborde, c'est le prestataire qui absorbe l'écart. » … « C'est ainsi que nous chiffrons chaque projet. » (`md.fH`, `md.fP`, end of `md.fW`).
- Indicative range, then a firm price: « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » (`price.estFine`).
- Published: « Un prix avant le devis. » / "A price before the quote." (`price.title`).
- « un forfait, sans frais cachés » / "no surprise fees" (`faq2.a`). The October audit noted that nothing yet says what happens after the yes, so prefer the firm-price line.
- Floor: « nos formules commencent à 90 000 DA pour un site vitrine » / "Our packages start at 90,000 DZD for a showcase site" (`faq2.a`).
- Rush: « Un calendrier compressé coûte plus cher : +25 % dans notre estimateur. » (`md.d6p`).
- What moves a quote (`md.d1h`–`md.d6p`): le périmètre, le design, les langues (« Chaque langue ajoute du contenu ; l'arabe ajoute une mise en page de droite à gauche. »), les intégrations, le contenu, le délai.

### Other project types (estimator only)

Indicative, never a quote; always labelled « fourchette indicative » / "indicative range". Base ranges from `PRICE_MODEL`, converted by the site's rule.

| Type (`price.ty*`) | DA | ≈ € | ≈ $ | Weeks | In the base |
|---|---|---|---|---|---|
| E-commerce | 220 000 – 550 000 | 1 500 – 3 600 | 1,600–4,100 | 5 – 10 | 60 products |
| Automatisation / Automation | 140 000 – 420 000 | 930 – 2 800 | 1,000–3,100 | 2 – 6 | 3 flows |
| Identité visuelle / Visual identity | 90 000 – 180 000 | 600 – 1 200 | 670–1,300 | 2 – 5 | 2 deliverables |

### The market comparison the site publishes

Behind « Comment on chiffre » the site sets its packages beside typical 2026 ranges, experienced freelancer to agency, excluding tax (`mk.p`), with its sources named on the page (an Algerian freelance-rate barometer, French and US studio and directory price pages, the Bank of Algeria daily rate).

| Project | Algeria | France | United States |
|---|---|---|---|
| Vitrine / showcase | 50 000 – 100 000 DA | 1 500 – 6 000 € | $1,500–12,000 |
| Site sur mesure | 180 000 – 400 000 DA | 6 000 – 10 000+ € | $6,000–20,000 |
| E-commerce | 150 000 – 1 000 000 DA | 2 000 – 20 000 € | $5,000–30,000 |
| Application web | 200 000 – 2 000 000 DA | 10 000 – 50 000 € | $20,000–60,000+ |
| Identité | 80 000 – 150 000 DA | 1 200 – 5 000+ € | $500–30,000 |

- « Une journée de développeur confirmé en France coûte 480 – 650 € ≈ 70 000 – 100 000 DA au taux officiel, soit à peu près le prix d'un site vitrine complet sur le marché algérien. » (`mk.day1`, `mk.day2`).
- **What it backs:** every package sits below the typical France and US ranges at the official rate. Say so only with the sources line below, in the caption or on the visual.
- **What it does not back:** "cheaper than the Algerian market". Essentiel (90–160k DA) sits above the Algerian showcase range (50–100k DA); Studio and Moteur sit inside the Algerian ranges. Never call the studio the cheapest anywhere.
- **The sources line.** On the site the sources are named one by one, studios and platforms included; marketing never names them (`claims.md`: no other studio or seller in public). "Sources named" means this fixed line, never a studio's, an agency's or a platform's name:
  - FR: « Sources : un baromètre des tarifs freelance 2026 (Algérie) ; des grilles de prix publiées par des studios, un baromètre de prix et des taux journaliers de freelances (France) ; des guides de prix publiés par des studios et par un annuaire (États-Unis) ; le taux officiel de la Banque d'Algérie, début octobre 2026. Fourchettes courantes, du freelance confirmé à l'agence, hors taxes. Le détail est sur le site : Tarifs › Comment on chiffre › Sources et méthode. »
  - EN: "Sources: a 2026 freelance-rate barometer (Algeria); price pages published by studios, a price barometer and freelance day rates (France); pricing guides published by studios and by a directory (United States); the Bank of Algeria official rate, early October 2026. Typical ranges, from an experienced freelancer to an agency, excluding tax. The detail is on the site: Pricing › How we price › Sources and method."
  - It carries the same weight for the day-rate line (`mk.day1`, `mk.day2`). Arabic: write it from the French and have it reviewed [AR à relire].
- Never quote the end of `mk.note` (« nous livrons avec les mêmes outils … React, Next.js, Vercel »): a tool claim on the barred list.

## The services: five core, five more

« Nos cinq services principaux — et cinq autres juste en dessous. » / "Our five core services — and five more just below." (`svc.lead`). Families: « Sites & design » · « Données & automatisation » · « Conseil & IA » / "Sites & design" · "Data & automation" · "Advisory & AI" (`svc.fam*`).

These are capabilities offered, not a track record. Only websites and brand identity have work on the site (the Alliance Travel sheet lists « Identité de marque »). Never imply past projects in the other eight. Lines marked ✂ are the site's sentence with a barred fragment removed.

| Key | Name FR / EN | Promise FR / EN | The line to use (FR) |
|---|---|---|---|
| `f1` | Sites & applications web / Sites & web applications | Le choix évident. / The obvious choice. | Sites et applications web sur mesure — rapides, bien référencés, pensés pour convertir, du front-end au cloud. Pas de modèle acheté puis maquillé : on dessine votre site de zéro. (never with the tool pills printed under it) |
| `f2` | Identité & systèmes visuels / Branding & visual systems | La confiance avant le premier mot. / Trust before a word is read. | Logos, couleurs, typographie, animation et une charte complète, documentée, prête à l'emploi : ce qui donne à une petite entreprise l'allure d'une maison établie. |
| `f3` | Automatisation & pipelines / Automation & pipelines | Supprimez la corvée. / Delete the busywork. | Scrapers, pipelines de données, génération de leads, automatisations, outils internes. Le travail répétitif et fragile qui dévore vos heures — on le fait tourner seul à 3 h du matin. |
| `f4` | Intelligence marché & produit / Market & product intelligence | Voir le marché clairement. / See the market clearly. | Transformez les données publiques du web en base exploitable : veille concurrentielle, suivi des prix et des catalogues — structurées, interrogeables. (✂ the legal clause « dans le respect des conditions de chaque site et du RGPD » waits for the owner) |
| `f5` | Stratégie & conseil croissance / Strategy & growth consulting | De la donnée, pas des impressions. / (EN: use the brief, the promise reads as slang) | Audits marketing complets, analyse des tunnels de vente, positionnement concurrentiel, feuilles de route — honnêtes, ROI d'abord, par phases. On étudie votre secteur avant le premier appel. |
| `c1` | Boutique & réservation / E-commerce & booking | De la visite au paiement. / From browse to paid. | ✂ Boutiques en ligne et systèmes de réservation adaptés aux habitudes d'achat en Algérie : commande par WhatsApp. (the site's line goes on with « paiement à la livraison », which waits for the owner's OK because no payment terms exist, and a platform name, which stays out) |
| `c2` | Design graphique & réseaux sociaux / Graphic & social design | Des visuels qui arrêtent le regard. / Scroll-stopping, on brand. | Packs réseaux sociaux, carrousels, infographies, print — depuis un système visuel verrouillé, pour que tout vous ressemble. |
| `c3` | Data science & analytics | Du signal dans le bruit. / Signal out of noise. | Un travail statistique rigoureux — modélisation économétrique, séries temporelles, prévision, tableaux de bord. Analyse testée et défendable. |
| `c4` | Systèmes de connaissance / Knowledge systems | Une entreprise qui se souvient. / A company that remembers. | ✂ Architecture de connaissance interne, documentation. Des structures qui s'entretiennent seules. (the site's line names note-taking methods and tools; the owner decides whether c4 is rewritten without them or left out) |
| `c5` | Outils & assistants IA sur mesure / Custom AI tools & skills | Le logiciel qui construit votre logiciel. / Software that builds your software. | ✂ Outils internes, générateurs et assistants sur mesure : une tâche répétitive se lance en un clic. (the site's sentence names an AI model: never quote it whole) |

English briefs are on the same keys in the English block; trim the same fragments (the f1 and f3 tool lists, the c5 model name).

## Work: the project sheets

The site's project sheets (`scene/`, generated from `scripts/scene-data.mjs`) describe each project by what its site lets a visitor do, read off the live builds. Marketing describes them **only** in those words, and only under these rules:
- **No client has given permission yet.** A client's name, logo, screenshot or sheet appears only after that client's written permission, kept on file (an email or a WhatsApp message).
- **Client or employer.** The founder's CV on the site lists Bordj Steel and Alliance Travel as positions. Until the owner decides how to describe each, never write « client », « livré » or "delivered" for them. Heading: « Quelques réalisations » / "Some of our work".
- No metric, no result, no count of projects, and none of the clients' own figures visible in their screenshots.
- Every client link today is a `netlify.app` build; no client domain serves the site. Never show the hostname; a drawn browser frame has a blank address bar.

**Bordj Steel (sheet Pl. 01).** Permission and wording pending. « Construction métallique · B2B · Algérie », « Site corporate B2B », 12 pages, French. Summary: « La présence en ligne d'un fabricant de charpente métallique et de panneaux sandwich : un catalogue par métier, des références chiffrées, un media center et un espace recrutement. » Deliverables: Site corporate, 12 pages · Catalogue produits : 4 fiches métier · Références et chiffres clés · Media center (blog) · Contact et recrutement · Pages légales. What the site gives:
- « Un acheteur trouve la bonne gamme sans appeler : une page par unité de production, avec ce qu'elle fabrique et à quoi cela sert. » / "A buyer finds the right product line without calling: one page per production unit, with what it makes and what it is used for."
- « Un bureau d'études lit les caractéristiques techniques en ligne, essaie les épaisseurs de panneau sur une coupe interactive et télécharge le catalogue en PDF. » / "An engineering office reads the technical data online, tries each panel thickness on an interactive cross-section and downloads the PDF catalogue."
- « Un client joint directement le bon service, du commercial au montage : chacun a son numéro direct, et numéros comme e-mails se copient d'un clic. »
- « Avant un premier rendez-vous, un maître d'ouvrage voit des chantiers de référence — où, et ce qui a été fourni et monté. »
- « Un candidat consulte les offres d'emploi et postule, ou envoie une candidature spontanée. »
- Never the card's « leader de la construction métallique en Algérie » (a ranking), never the figures in its screenshots.

**Alliance Travel (sheet Pl. 02).** Permission and wording pending. « Agence de voyage · Bordj Bou Arréridj », « Identité, site et parcours de réservation », 9 pages, FR · EN · AR. Summary: « Une agence de voyages organisés : chaque destination a sa page, son prix « à partir de » et un calculateur qui envoie le devis sur WhatsApp. Trilingue, arabe en RTL, en mode clair et sombre. » Deliverables: Identité de marque · Site trilingue FR · EN · AR, arabe en RTL · 7 pages destination · Calculateur de devis vers WhatsApp · Service de rendez-vous visa · Mode clair et mode sombre. What the site gives:
- « Un voyageur choisit sa date, son hôtel, sa chambre et le nombre de voyageurs par âge, et voit le total estimé avant de contacter l'agence. » / "A traveller picks the date, hotel, room and how many travellers of each age, and sees the estimated total before contacting the agency."
- « Il prépare son dossier en ligne — le passeport de chaque voyageur, vérifié à la saisie — et l'envoie sur WhatsApp en un message complet, ou par e-mail. »
- « Avant de réserver, il lit le programme de chaque destination jour par jour, ce que couvre le forfait et ce qui reste à prévoir. »
- « Pour un visa, il voit pour chaque pays le centre qui traite le dossier et ce que l'agence peut faire, puis écrit à un conseiller avec sa demande déjà rédigée. »
- « Il lit le site en arabe, en français ou en anglais, et trouve l'agence la plus proche avec son itinéraire. » / "They read the site in Arabic, French or English, and find the nearest branch with directions."
- Its captures carry the client's own figures (ratings, counts, years): never in frame.

**AlmaFlowClim (sheet Pl. 05).** Permission pending; **the client's own domain serves a different site**, so never show or name that domain, never say the site is live at the client's, and present it as a redesign proposal unless the owner confirms the client adopted it. « Climatisation, chauffage, plomberie · Île-de-France », « Site vitrine et demande de devis », 7 pages, French. Summary: « Un artisan de Gennevilliers qui installe et dépanne climatisation, chauffage et plomberie : une page par métier, ses réalisations chantier par chantier et un devis en un formulaire, pensés pour les recherches locales. » Deliverables: Site vitrine, 7 pages · 3 pages métier · Page de réalisations · Formulaire de devis · SEO local par ville desservie · Mentions légales. What the site gives:
- « En cas de panne, un client appelle d'un simple appui depuis la page du métier concerné : le numéro est en tête de page. »
- « Pour un projet, il choisit sa prestation dans le formulaire de devis — installation, entretien, dépannage, chauffe-eau, salle de bain — et la demande arrive avec son type de travaux. »
- « Un habitant de Colombes ou de Nanterre voit d'emblée que l'artisan se déplace chez lui : les villes desservies sont listées sur l'accueil. »
- Its captures show the client's phone number, its own figures and third-party brand chips: avoid or crop.

**Glaive Store (sheet Pl. 03).** Usable now, always as a portfolio demo, never a client: « Démo portfolio » / "Portfolio demo", and in any frame « Projet de démonstration (portfolio) – pas un projet client ». « Une démo de portfolio, annoncée comme telle sur le site : une marque de matériel gaming inventée de A à Z, avec boutique filtrable, fiches produit et un quiz qui recommande le bon équipement. » English-only screens: not for France. Avoid its shop grid (fictional star ratings and review counts).

**WorkspaceHQ v3 (sheet Pl. 04).** Usable now as proof of craft, never as a case study or a service: the founder's own product. « Le projet préféré du fondateur » / "The founder's favourite project". « Notre propre produit : une console qui scanne chaque dépôt de la machine et transforme l'hygiène git en quêtes. Livré avec son site de lancement, une démo jouable et Bit, son compagnon en pixel art. » Say « code public sur GitHub », never "open source". Skip the features screen tile and the gain line that name an AI model. English only.

**Never:** Nomara Voyages (on the site's work grid and logo strip today, never in marketing); the two projects once shown as « En cours » (Doctor Cherfia, Étoile de l'Est) and their placeholder hostnames.

## Contact facts the site shows

| Fact | What the site says | Condition for marketing |
|---|---|---|
| Place | Bordj Bou Arréridj · Algérie (`contact.vStudio`); « On est basés à Bordj Bou Arréridj » (opening clause of `faq5.a` only) | OK. The rest of `faq5.a` is barred |
| Reply | « < 24 h ouvrées · FR · EN · AR » (`contact.vReply`) | A first reply only. Working days and hours are not defined yet |
| Time zone | « UTC+1 · l'heure de Paris en hiver, 1 h de moins en été » / "UTC+1 (Algeria) · 2 h behind Riyadh, 3 h behind Dubai · same as Paris in winter, 1 h behind in summer" (`contact.vTz`) | OK |
| WhatsApp | +213 672 41 25 78, « message gratuit via l'appli » (`contact.waNote`); greeting « Bonjour Numidea Labs — j'aimerais parler d'un projet. » (`wa.hello`) | A dedicated business number is a Gate B item. No voice calls or hours are stated. Never on a visual |
| Email | hamissemohamedyasser@gmail.com | The founder's personal Gmail; the studio has no mailbox on its own domain yet. Never on a visual; prefer WhatsApp or the site |
| Website | https://brvetr4ve1er.github.io/Numidea.tech/ (`?lang=en`, `?lang=ar`; `?cur=eur`, `?cur=usd`) | No own domain yet. Never on a visual; every posted link carries a `?ref=` code (`marketing.md`) |
| Contact form | « Le bouton ouvre votre messagerie avec votre message déjà rédigé … Ce site ne conserve pas votre message. » (`form.note`) | OK |
| Founder's profiles | LinkedIn, GitHub, Behance | Their bios need rewriting before any piece links to them |
| Legal identity | None published: the legal notice waits on 14 fields | Never claim registration, legal form or numbers |
