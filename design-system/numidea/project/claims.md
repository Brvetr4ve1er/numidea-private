# Claims: what to say and never say

Read this before writing any copy. It is built from the studio's facts bank (every usable line, with its source) and its do-not-claim list, checked against the site as it stands in October 2026. Source keys such as `prev.terms` are the site's dictionary keys in `assets/app.js`. Arabic is marked [AR à relire]: it awaits a native speaker's review and is never published before it.

## The honesty rules

1. **Quote, don't invent.** Use a fact only if it is listed here or in `business.md`, worded as given or restated more plainly. No new number, client, feature, result, quote, team member, promise or legal datum.
2. **The site is not a safe source on its own.** Several sentences live on the site today are barred below. Check every line against §2.
3. **Clients appear only with written permission.** No client has given it yet. Until a client does, in writing (an email or a WhatsApp message, kept), its name, logo, screenshots and project sheet stay out of marketing.
4. **No face for the founder,** ever: never generated, drawn or implied. The monogram « Y » or the workbench engraving stands in.
5. **No payment terms or payment methods of any kind,** in any piece, caption or reply.
6. **No AI model names anywhere,** including inside quoted site lines and screenshots.
7. **No new generated images, footage, voices or music.** The existing engravings are the closed set; never describe them as hand-made.
8. **The Aperçu never appears without its conditions,** and only as Gate B allows (`marketing.md`).
9. **Arabic is reviewed by a native speaker before it is published,** including the Arabic inside any screenshot.
10. **Competitor research stays private.** Never name another studio or seller in public, and never compare with one.

Status tags: **OK** usable as written · **OK +** usable with the condition stated · **OWNER** waits for the owner · **NO** never.

## 1. Lines you may use

### 1.1 Identity, place, contact

| Fact | French | English | Source | Status |
|---|---|---|---|---|
| Name | Numidea Labs | Numidea Labs | JSON-LD; `footer.rights` | OK. Arabic prose: نوميديا لابز [AR à relire] |
| What it is | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Web & software studio · Bordj Bou Arréridj, Algeria | `hero.eyebrow` | OK. AR: استوديو ويب وبرمجيات · برج بوعريريج، الجزائر [AR à relire] |
| Headline | Votre site sur mesure, en français, anglais ou arabe. | Custom websites, in English, French and Arabic. | `hero.title` | OK. AR: موقعك المخصّص، بالعربية والفرنسية والإنجليزية. [AR à relire] |
| One-line description | Studio web et logiciel à Bordj Bou Arréridj, Algérie. On conçoit, on code, on livre et on suit vos sites et applications, en français, anglais et arabe. | Web and software studio in Bordj Bou Arréridj, Algeria. We design, build, launch and support websites and web apps in English, French and Arabic. | `meta.desc` | OK |
| Share-card line | Voyez votre page d'accueil avant de payer | (closest: "Zero risk: see it before you pay.") | `og:title`; `prev.promise` | OK + Gate B: it is an Aperçu headline |
| Coordinates | 36°04′N · 4°46′E | same | hero dimension line | OK, as a visual device |
| Time zone | UTC+1 · l'heure de Paris en hiver, 1 h de moins en été | UTC+1 (Algeria) · 2 h behind Riyadh, 3 h behind Dubai · same as Paris in winter, 1 h behind in summer | `contact.vTz` | OK |
| Motto | Enraciné en Numidie · bâti sur des idées | Rooted in Numidia · built on ideas | `footer.tag` | OK. AR: جذورها في نوميديا · مبنيّة على الأفكار [AR à relire] |
| Based in | On est basés à Bordj Bou Arréridj | We're based in Bordj Bou Arréridj | opening clause of `faq5.a` | OK for that clause only |
| Sign-off | Construit à Bordj Bou Arréridj, avec du café noir et du TypeScript. | Built in Bordj Bou Arréridj, with black coffee and TypeScript. | README; the site's old footer | OWNER: the site contains no TypeScript, and the owner has not chosen the new wording (IMPROVEMENTS F14) |
| WhatsApp | +213 672 41 25 78 · message gratuit via l'appli | free message in the app | `contact.waNote` | OK +: the personal number; a dedicated business number is a Gate B item. Never on a visual |
| Email | hamissemohamedyasser@gmail.com | same | index.html | OK +: the founder's personal Gmail. Never on a visual; prefer WhatsApp or the site |
| Website | https://brvetr4ve1er.github.io/Numidea.tech/ | same | `BASE` | OK +: no own domain yet. Never on a visual; links carry `?ref=` |

### 1.2 The founder (no face, ever)

| Fact | French | English | Source | Status |
|---|---|---|---|---|
| Name | Yasser Hamisse | Yasser Hamisse | founder card; JSON-LD | OK +: LinkedIn uses "Mohamed Yasser Hamisse"; use the site's form |
| Role | Designer graphique & développeur web · Fondateur | Graphic designer & web developer · Founder | `founder.role` | OK |
| Languages | FR C2 · EN C1 · AR langue maternelle | FR C2 · EN C1 · AR native | founder card; `founder.arPill` | OK |
| Education | Informatique — Université Mohamed El Bachir El Ibrahimi · 2018–2024 | Computer Science — Univ. Mohamed El Bachir El Ibrahimi · 2018–2024 | `founder.edu` | OK |
| Freelance since | en freelance depuis 2019 | freelance since 2019 | `fx2`, `fx2.when` | OK +: never turn it into a count of years |
| His promise | Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement. | I turn the brief into the build, and I stay once it's live. | second sentence of `founder.bio` | OK. The first sentence (« Six ans… ») is barred |
| Section title | Le studio a un visage. | The studio has a face. | `founder.title` | OWNER: true only once a real photo exists |

### 1.3 L'Aperçu (Gate B for headlines and calls to action)

All in `business.md` with keys. The lines: name « L'Aperçu » / "The Preview"; promise « Zéro risque. Juste la preuve. » / "Zero risk: see it before you pay."; brief (`prev.brief`); the five-step path (`prev.tl1`–`prev.tl5`); the outcome (`prev.outcome`); the buttons (`hero.cta1`, `prev.cta`); the WhatsApp text (`prev.waText`).

- **Conditions, with every mention:** « Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. » / "Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients." / «مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء.» [AR à relire] (`prev.terms`).
- **Short form** for a frame that cannot hold the full line, with the full line in the caption: « Gratuit et sans engagement · entreprises immatriculées · 4 par mois au maximum. » (the share card's own text) / "Free, no obligation · registered businesses · at most 4 a month." / «مجّاناً ودون التزام · للشركات المسجّلة · 4 في الشهر كحدّ أقصى» [AR à relire].
- Next to « 5 jours ouvrés », always « à réception de vos contenus » / "once we have your content" / «من استلام المحتوى» [AR à relire].
- **Before Gate B** the Aperçu appears only as step 3 of the method, with its conditions and no call to action. The owner's lawyer is asked whether even that may run before the studio's registration; if not, it waits for Gate A.
- **OWNER:** `prev.tl5p` (« Si c'est oui, la page d'accueil est déjà faite… ») and the open rules (who qualifies, when the clock starts, what happens after a no). The English outcome line is a superlative ("The easiest yes you'll ever give"), and the Arabic restates it: in English and Arabic use the brief instead, or leave the outcome out; the French outcome is OK.

### 1.4 The method: four steps

The site told the method in its own section until 2026-10-26; the same path now lives in the Aperçu card. For a method piece, use these steps (facts bank, from the method section's strings):

| # | French | English |
|---|---|---|
| 1 | Vous décrivez le projet — Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe. | You describe the project — Two minutes, in writing or out loud. In French, English or Arabic. |
| 2 | On revient sous 24 h ouvrées — Avec nos questions, puis un périmètre écrit et un prix ferme dès que le cadrage est validé ensemble. Pas une fourchette, un chiffre. | We reply within 24 working hours — First with our questions. Then, once we have agreed on what to build, with a written scope and a firm price. Not a range — one number. |
| 3 | On construit l'Aperçu — gratuit — La page d'accueil de votre site, avec votre contenu, avant tout paiement. Pour les entreprises immatriculées, 4 par mois au maximum, tous clients confondus. | We build the Preview — free — Your site's homepage, with your own content, before any payment. For registered businesses: at most 4 a month, across all clients. |
| 4 | Vous décidez — Si c'est non, vous ne devez rien. | You decide — If it's no, you owe nothing. |

- Title: « Quatre étapes. » / "Four steps." The site's « Zéro surprise » / "No surprises" waits for written terms after the yes (Gate D).
- Step 4 stops at « vous ne devez rien »; its second half is an OWNER item (§1.3).

### 1.5 Packages and prices

All figures, durations, scope lines and price strings are in `business.md`. Usable as given, with these conditions:
- every price starts with « env. » / "about" / «نحو»; € and $ add « HT » / "excl. tax"; dinars carry no tax label until the accountant answers;
- the conversion note goes in the caption;
- Essentiel's « Mise en ligne, domaine et certificat configurés » is OWNER;
- no AED or SAR price exists: Gulf pieces show no price;
- « Un prix avant le devis. » (`price.title`) and « Fourchette indicative, pas un devis… » (`price.estFine`) are OK;
- maintenance: the range and « Sans engagement de durée » only, never what it covers;
- the market comparison only with the fixed sources line in `business.md` (it names kinds of source, never a studio, an agency or a platform); never « moins cher ».

### 1.6 Services

Capabilities, never a track record. Use the lines in `business.md` (the ✂ trimmed ones where marked). Only websites and identity have work on the site.

### 1.7 Delivery and replies

| Promise | French | English | Source | Status |
|---|---|---|---|---|
| Lead times | Cela dépend du périmètre : comptez 2 à 4 semaines pour un site vitrine, 3 à 7 pour un site sur mesure, 8 à 16 pour une application web. Le délai ferme est fixé dès que le projet est cadré ensemble. | It depends on the scope: 2 to 4 weeks for a showcase site, 3 to 7 for a custom site and 8 to 16 for a web application. You get a firm timeline as soon as we have agreed the scope together. | `faq1.a` | OK |
| Reply | < 24 h ouvrées | < 24 working hours | `tb.replyV` | OK +: a first reply, nothing more |
| After launch | On reste. Chaque formule inclut 1, 3 ou 6 mois de support, et on vous répond sous 24 h ouvrées. Ensuite, la maintenance est en option : au mois, sans engagement de durée. Pas de « bonne chance » le jour de la mise en ligne. | We stay. Every package includes 1, 3 or 6 months of support, and we reply within 24 working hours. After that, maintenance is optional: monthly, with no lock-in. No “good luck” on launch day. | `faq4.a` | OK; never describe what support covers |
| What to bring | Dites-nous ce qu'il vous faut : une urgence à traiter, quelque chose à corriger, une échéance à tenir. En français, anglais ou arabe. | Tell us what you need: an urgent job, something that needs fixing, a deadline to meet. In English, French or Arabic. | `contact.sub` | OK |
| Privacy | Ce site ne conserve pas votre message. | This site does not keep your message. | `form.note` | OK |

### 1.8 Languages and right to left

- « Français, arabe et anglais — à l'oral, à l'écrit, et dans le produit livré. Ce site même est trilingue, avec une expérience arabe (RTL) pensée nativement. » / "French, Arabic and English — spoken, written, and in everything we deliver. This very site is trilingual, with a natively mirrored Arabic (right-to-left) experience." (`faq3.a`). OK.
- « Chaque langue ajoute du contenu ; l'arabe ajoute une mise en page de droite à gauche. » / "Each language adds content; Arabic adds a right-to-left layout." (`md.d3p`). OK.
- « Trilingue FR / EN / AR, avec un arabe RTL pensé nativement » (`price.t2b`). OK.
- The site switching FR / EN / AR and mirroring to right to left is honest footage, within the own-site capture rule (§6).

### 1.9 Projects

Only as the project sheets describe them, with the permission and wording rules in `business.md`. Glaive Store (always badged as a demo) and WorkspaceHQ (the founder's own product, « code public sur GitHub ») are usable now; every client project waits for its written permission.

### 1.10 Plate captions

« Pl. I — Les Bibans · Bordj Bou Arréridj », « Pl. II — Arc de Trajan · Timgad », « Pl. III — Monnaies numides », « Pl. IV — Cap Carbon · Béjaïa », « Pl. V — Le Grand Erg » (`pl.vista`, `pl.arch`, `pl.coins`, `pl.light`, `pl.dunes`), with the English and Arabic on the same keys. OK.

### 1.11 Measurement

Every link may carry `?ref=<code>` and `utm_*`; the code rides in the email the visitor sends and at the end of the WhatsApp message. Nothing is stored by the site: no pixel, no analytics, no cookies. Never promise a tracker.

## 2. Do-not-claim

Each item is live on the site today, or was, and must not be used.

| # | The claim | Why it is barred | Say instead |
|---|---|---|---|
| 1 | A team size: « un fondateur designer-développeur et trois spécialistes », « 4 personnes dans l'équipe », « Avec lui, l'équipe » and the initials D, S, T | Unconfirmed, and the founder's own personal page calls the studio "an agency of one" | « Numidea Labs », « le studio », or the founder by name |
| 2 | « 6 ans » / "6 yrs" / « Six ans à concevoir… » | Unconfirmed; the CV shows freelance work since 2019 | « en freelance depuis 2019 » |
| 3 | « des clients en France » (plural), "clients anywhere — including in France" | Unconfirmed: one French client appears, and its own domain serves another site | « On est basés à Bordj Bou Arréridj » and the time-zone line |
| 4 | Delivery with React, Next.js, Vercel (the market note, the f1 tool pills, « Santé · Next.js ») | Every delivered build is served from elsewhere; only one shows Next.js | No tool names. « Design sur mesure — jamais un modèle tout fait repeint à vos couleurs », « on dessine votre site de zéro » |
| 5 | A tool stack: React Native, Expo, Docker, Cloudflare | No delivered project shows them; the tools section left the site | Leave the stack out |
| 6 | Nomara Voyages in any form: name, logo, screenshot, Omra card, benefit line | Client status unconfirmed; the campaign rule is never, whatever the answer | Nothing |
| 7 | Client counts: « 4 sites clients », « 4 sites livrés », « 4 projets livrés », « Quatre sites clients sont en ligne », a plate counter | The count includes an unconfirmed client and a site not live on its client's domain | Name the shown projects one by one, with permission; no total |
| 8 | Any client result or metric, including the clients' own figures in screenshots (tonnages, areas, ratings, traveller counts, percentages, « 150+ », « intervention sous 24h ») | Nothing can be backed, and on a studio visual they read as the studio's results | What a visitor can do on the site (`business.md`) |
| 9 | « leader de la construction métallique en Algérie » | A ranking claim, in the studio's own voice | « fabricant de charpente métallique et de panneaux sandwich » |
| 10 | Testimonials, quotes, reviews, stars, « ce qu'en disent nos clients » | None exist | Nothing |
| 11 | WorkspaceHQ "open source" | The repository has no licence and no README | « code public sur GitHub » |
| 12 | The « En cours » projects (Doctor Cherfia Clinic, Étoile de l'Est) and their hostnames | Not confirmed; the hostnames were placeholders; the cards left the site | Nothing |
| 13 | « Pas d'intermédiaire : une seule équipe cadre, code et livre votre projet », « vous parlez directement à celui qui construit votre projet » | Waits on the team decision; the team card gives first contact to sales | Nothing (OWNER) |
| 14 | « Environ 20 % de temps de production en moins grâce à l'IA », « En cours d'apprentissage : motion design et montage vidéo » | An unbacked figure; the line waits on the owner | Nothing |
| 15 | The certifications line | Waits on the owner | Nothing (OWNER) |
| 16 | The founder's current employer and dated jobs, and Bordj Steel or Alliance Travel as positions | Capacity and contract questions are open | « Designer graphique & développeur web · Fondateur » |
| 17 | Essentiel's « Mise en ligne, domaine et certificat configurés » as proven | No delivered client site is served from its own domain yet | The other Essentiel lines (OWNER) |
| 18 | Any registration, legal form, RC, NIF, ANAE, legal notice, « société », « entreprise enregistrée » for the studio | No legal identity is published | « studio » only |
| 19 | VAT mechanics (« facture sans TVA, autoliquidée … art. 283-2 du CGI ») | A legal datum about invoicing; no invoicing entity exists yet | « HT » / "excl. tax" only (OWNER) |
| 20 | « Ils nous ont confié leur site » / "They trusted us with their websites" | Waits on the client questions | « Quelques réalisations » / "Some of our work" (OWNER) |
| 21 | Any wording that names an AI model: the c5 service line, a WorkspaceHQ gain line and features tile, the end of the f3 tool list | Hard rule: no model names | « outils internes », « assistants sur mesure » |

Also barred: « moins cher » or any claim to be the cheapest; « meilleur », « n°1 », « le seul studio qui… »; any "places left" line without that day's real count; « tout vous appartient »; "Le studio a un visage" until a real photo exists.

## 3. Undecided: never state

Only the owner can settle these. Until he does, say nothing about them, in posts, captions, replies or catalogues:
- **Payment:** deposit, schedule, invoice currency, payment methods of any kind, who invoices.
- **Ownership at delivery:** code, design files, domain, hosting accounts. Never « tout vous appartient ».
- **Hosting:** included or not, who pays after the first year; revision rounds; what the client supplies and when.
- **Support and maintenance:** what the included support covers, what maintenance adds, why it costs 18 000 to 60 000 DA.
- **The Aperçu's rules** beyond the site's strings.
- **The tax status of the dinar prices.**
- **AED or SAR prices** (none exist).
- **Profiles and badges:** any Google, directory or review profile, rating or "verified" badge (none exist).
- **Calls, opening hours and working days:** leave every hours field empty.

## 4. Permissions and relationships

- **No client has been asked yet.** Each use of a client's name, logo, screenshot or sheet needs that client's written permission, covering organic posts and videos.
- **Bordj Steel and Alliance Travel:** client or employer? Until the owner decides, never « client », « livré », "delivered".
- **AlmaFlowClim:** permission, and its own domain serves another site: never show or name that domain, never call the site live there; a redesign proposal unless the owner confirms adoption.
- **Nomara Voyages:** never.

## 5. Visual don'ts

- No face for the founder; never `assets/Engravings/coin-king.webp` or any figure as him.
- Never caption `assets/Engravings/vista-mid.webp` as the Medracen.
- No third-party trademarks as endorsements: one client capture shows equipment brands and a subsidy label; crop them out or skip that frame.
- No client phone number large on screen.
- No Glaive frame without its demo badge in frame; avoid its shop grid with fictional ratings.
- No `netlify.app` hostname; a drawn browser frame has a blank address bar.
- Gulf: no flags, landmarks, emblems or local-office look. France: French-only screens.
- No new generated images, footage or music; no stock photos.
- No gradient-filled text, no glow on type, no blinking cursor, no loop that never settles, no colour outside the tokens.

## 6. Captures of the studio's own site

The site is the studio's own work, so it may be shown without anyone's permission, but only in regions that carry no barred line, captured into a private folder (never with the repository's capture scripts, which write into it), in a browser frame with a blank address bar.

- **Allowed:** the package cards in the dinar view, with Essentiel's « Mise en ligne, domaine et certificat configurés » masked (never the € or $ view, whose note carries the VAT line, the estimator or the market section); the Aperçu card, only in Gate B pieces, with its buttons cropped out (in English and Arabic also crop the outcome line); the FAQ with only answers 1, 3 and 4 open; the language and theme switches shown on one of these regions.
- **Never in frame:** the hero (its lede states the team, and its plate rotates client previews, Nomara's included); the title block and the proof line (« 4 sites clients », « 4 sites livrés », the client logos); the service rows with tool pills; the work section; the founder and team cards (« Six ans », the initials); FAQ answers 5 and 6; the market note.
- If a region cannot meet this, draw a coded mock-up instead.

## 7. Before publishing

1. Every fact is in this file or in `business.md`; nothing is new.
2. Nothing from §2, §3 or §5 appears, in the copy or in any image.
3. Every Aperçu mention carries its conditions, and the piece's gate is open (`marketing.md`).
4. Every price carries « env. » / "about" / «نحو», the right currency for its market, and HT on € and $ only.
5. Arabic has been reviewed by a native speaker.
6. No URL, email or ref code on the visual; the posted link carries its `?ref=` code; a link preview that shows the Aperçu headline is removed before Gate B.
7. One language per piece; French-only screens for France; "based in Algeria" for the Gulf.
