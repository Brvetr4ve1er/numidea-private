# ApercuCard

L'Aperçu, the signature offer: before any payment, the studio builds the homepage of the client's new site with the client's own content, and the client decides — told as a five-step path that ends on « Payé jusqu'ici : 0 DA », always with its terms. Hand-written from assets/styles.css › `.preview` (`.glow`, `.glyph`, `.tag`, `h3`, `.promise`, `.brief`, `.prev-terms`, `.prev-actions`, `.prev-wa`, `.outcome`) and `.ptl` (the path) and index.html › `#apercu`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- Gated: the card, any Aperçu headline and every call to action wait for Gate B of the marketing plan (a privacy page, a real legal name, a dedicated WhatsApp number, the lawyer's answers). Until then the Aperçu appears only as step 3 of the method, with its conditions and no button.
- From Gate B, the lead offer of a campaign: the hero card of a landing page, the explainer carousel, the slide that asks for the meeting.
- The path alone (`.ptl-w`) can carry a carousel: one step per page, ending on the 0 DA moment.

## What the consumer provides

The card's markup as in the preview, with the site's copy (Arabic awaiting a native speaker's review):

| Part | FR | EN | AR |
|---|---|---|---|
| Tag | Offre signature | Signature offer | عرض مميّز |
| Name | L'Aperçu | The Preview | المعاينة |
| Promise | Zéro risque. Juste la preuve. | Zero risk: see it before you pay. | بلا مخاطرة. ترى النتيجة قبل أن تدفع. |
| Brief | Avant tout paiement, on construit la page d'accueil de votre nouveau site, avec votre contenu. Si vous dites non, vous ne devez rien. | Before any payment, we build your new site's homepage with your own content. If you say no, you owe nothing. | قبل أيّ دفع، نبني الصفحة الرئيسية لموقعك الجديد بمحتواك أنت. إن قلت لا، فلا شيء عليك. |
| Terms | Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus. | Free, no obligation · registered businesses only · at most 4 Previews a month, across all clients. | مجّاناً ودون التزام · للشركات المسجّلة فقط · 4 معاينات في الشهر كحدّ أقصى لجميع العملاء. |
| Call to action | Demander mon Aperçu → · ou par WhatsApp | Request my Preview → · or on WhatsApp | اطلب معاينتك ← · أو عبر واتساب |
| Outcome | Résultat — Vous dites oui en connaissance de cause : vous avez déjà vu le résultat. | NO: the site's line ("The easiest yes you'll ever give…") is a superlative. Use the brief, or leave the outcome out | NO: the site's line restates the English superlative. Use the brief, or leave the outcome out |

The five steps (`.ptl-s`; the third is `.ptl-build` with five cells, the fifth `.ptl-dec`): « Vous décrivez le projet » · « On revient sous 24 h ouvrées » · « Vous envoyez votre contenu, on construit votre page d'accueil — 5 jours ouvrés » · « On vous la présente — visio de 30 min » · « Vous décidez — Payé jusqu'ici : 0 DA ». EN and AR are in app.js (`prev.tl1`…`prev.tl5d`). The fifth step stops at « Payé jusqu'ici : 0 DA »: never add the site's `prev.tl5p` (« Si c'est oui, la page d'accueil est déjà faite… »), which is on the owner's list of claims to confirm.

## Do

- Carry the terms line every time the offer appears, in the piece's language: in full inside the card; on a frame too small for it, the short form with the full line in the caption (`claims.md` §1.3).
- Wherever « 5 jours ouvrés » appears outside the path, add « à réception de vos contenus » ("once we have your content", «من استلام المحتوى», awaiting review).
- Card: no fill of its own (the page ground shows through, as on the site), a 4.5% white top sheen, 1px `hairline-2` border, radius `r-lg`, padding 48px; a 46px glyph tile in `crimson` with a `crimson-text` mark; a soft `teal` glow at 22% in the top corner.
- Type: tag Geist Mono 11px `crimson-text`; name Geist 600 30px `ice`; promise Geist 600 18px `teal-text`; brief 15px / 1.6 `muted`; terms Geist Mono 12px `body-strong`; outcome 15px `ice` behind a 2px `crimson` rule, its label Geist Mono 11px `teal-text`. The outcome is French only: in English and Arabic leave `.outcome` out.
- Path: step titles 13px `body-strong`, notes 13px `muted`, durations Geist Mono 11px `muted`; markers `teal`, the five build cells `teal`, the decision a `crimson` diamond; « 0 » in Geist 700 22px `ice` with « DA » in Geist Mono 13px `teal-text`. It runs down a rail until its own box is 720px wide, then along a line (a container query).
- From 1100px the card splits: identity left, brief right, the path a row under both.

## Don't

- Don't drop or footnote the terms, and don't shorten them inside the card (the short form is for a frame that cannot hold the card); don't present the offer as open to everyone.
- Don't elaborate past these strings: what counts as « immatriculée », when the five days start, what happens when a month's four places are taken, which services get an Aperçu and what becomes of the page after a « non » are all undecided.
- Don't add a "places left" counter, a deadline or any urgency.
- Don't price what follows the « oui » inside this card; prices live on the TierCard.
- Don't set long copy under the glow's centre (the top-right corner): at its 22% peak `muted` falls to 3.91:1 in Noir. The preview's layout and the site's split layout keep text clear of it (4.66:1 or more where the brief comes closest).

## Differences from the site

Sizes are the desktop ends of the site's clamps (padding 52px and gap 72px in the split layout). The marks' entrance (each marker in turn, the five days filling, the line drawing) is left out: the path is shown drawn, as the site shows it without scripts.
