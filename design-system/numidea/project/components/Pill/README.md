# Pill

A small squared chip in Geist Mono 11px: a tag, a live marker, or the « Démo portfolio » flag that keeps a portfolio piece from passing for client work. Hand-written from assets/styles.css › `.pill`, `.pill.live`, `.pill.concept`, `.fd-pills .pill` and index.html › `.proj .pills` and `#founder .fd-pills`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- Tags under a project: the kind of site and what it covers (« Site vitrine », « SEO », « Marque », « Commerce »).
- `live`: a site that is online, with its word (« En ligne » / "Live" / «على الإنترنت»).
- `concept`: a portfolio demo, never client work (« Démo portfolio » / "Portfolio demo" / «عرض تجريبي»). Any frame that shows Glaive Store keeps this pill in view.
- Inside `.fd-pills`: facts beside the founder's name (languages, city).

## What the consumer provides

```html
<span class="pill">Site vitrine</span>
<span class="pill live">En ligne</span>
<span class="pill concept">Démo portfolio</span>
<div class="fd-pills"><span class="pill">FR C2</span><span class="pill">EN C1</span><span class="pill">AR langue maternelle</span></div>
```

One to three words of the site's own tags. Arabic tags sit in a `dir="rtl"` container and await a native speaker's review.

## Do

- `muted` text on a `navy` chip (7.13:1 or more in all six themes), 1px `hairline-2` border, radius `r-pill` (4px in every theme: a squared chip, not a capsule), padding 5px 11px, tracking .02em.
- `live`: `teal-text` label (7.37:1 or more on `navy`), `teal` border and a 6px `teal` dot with an 8px glow. The word carries the meaning; the colour repeats it.
- `concept`: the same chip with a dashed border.
- Founder variant: 4px 10px padding, .04em tracking.

## Don't

- Don't tag tools or a stack (React, Next.js, Vite, Tailwind, Vercel and the like): `claims.md` lists those claims as unbacked. Never name an AI model.
- Don't mark a client's site « En ligne » in marketing until that client has given written permission, and not for a build that is not on the client's own domain.
- Don't count in a pill (« 4 sites », « 6 ans »): both are on the do-not-claim list.
- Don't round the chip into a capsule or fill it with an accent.
- The 1px `hairline-2` border measures 1.53 to 1.80:1 on `navy` (a source value, kept exact); the chip reads by its text, so never rely on the border alone.
