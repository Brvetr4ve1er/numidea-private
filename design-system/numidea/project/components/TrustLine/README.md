# TrustLine

The proof line: one centred sentence of facts the studio can stand behind, joined by middle dots, under the « 01 — Preuves » kicker. Hand-written from assets/styles.css › `.proof`, `.proof-line` and index.html › `section.proof`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- Under a hero, at the foot of an ad, on the last page of a carousel: a quiet line of checkable facts.
- Pair it with the Kicker's eyebrow only; it has no heading of its own.

## What the consumer provides

```html
<section class="proof">
  <span class="kicker">01 — Preuves</span>
  <p class="proof-line">Réponse&nbsp;&lt;&nbsp;24&nbsp;h&nbsp;ouvrées&nbsp;· FR&nbsp;·&nbsp;EN&nbsp;·&nbsp;AR</p>
</section>
```

The site's line is « 4 sites livrés · réponse < 24 h ouvrées · FR · EN · AR ». Its count is on the do-not-claim list (it includes an unconfirmed client and a build that is not on its client's own domain), so marketing uses the line without it: « Réponse < 24 h ouvrées · FR · EN · AR » / "Reply < 24 working hours · FR · EN · AR" / «الردّ في أقل من 24 ساعة عمل · بالفرنسية والإنجليزية والعربية» (awaiting a native speaker's review).

Other segments that are backed and may join the line:

- « Studio web & logiciel · Bordj Bou Arréridj, Algérie » / "Web & software studio · Bordj Bou Arréridj, Algeria"
- « Aperçu gratuit » only from Gate B of the marketing plan, and only with the Aperçu's full terms nearby (see ApercuCard)
- « Prix publiés » / "Published prices"
- « UTC+1 » (with the site's time-zone sentence where there is room)

## Do

- Geist 15px / 1.6, `muted`, centred (6.75:1 or more on `void`), on the page ground (`.proof` is `void`).
- No-break spaces inside each segment and around the dots, as the site writes it, so a segment never splits across lines.
- Name what can be checked: a reply time, the languages, the place.

## Don't

- No counts: « 4 sites livrés », « 4 projets », « 6 ans », team size.
- No « livrés » / "delivered", no « Ils nous ont confié leur site », no client logos or names without that client's written permission.
- No testimonials, stars, ratings, reviews or "verified" badges: none exist.
- No tools or stack, no model names, no registration or legal status for the studio (none is published), no rankings, no « des clients en France ».
- Don't bold or colour single segments.
