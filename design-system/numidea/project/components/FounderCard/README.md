# FounderCard

The founder card: a « Y » monogram roundel where a photo would be, the name Yasser Hamisse, his role, a few fact pills and one line in his own voice, and never a face. Hand-written from assets/styles.css › `.founder-card`, `.fd-top`, `.fd-photo`, `.fd-photo .mono`, `.fd-id h3`, `.fd-role`, `.fd-pills`, `.fd-bio` and index.html › `#founder .founder-card`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- "Who builds it" in a deck, a carousel's last page, the about block of a landing page.
- With the workbench engraving (`assets/Engravings/bench.webp`, a desk seen from above, no person) behind it when a picture is wanted: it is the safe stand-in for the founder.

## What the consumer provides

```html
<div class="founder-card">
  <div class="fd-top">
    <div class="fd-photo"><span class="mono" aria-hidden="true">Y</span></div>
    <div class="fd-id">
      <h3>Yasser Hamisse</h3>
      <p class="fd-role">Designer graphique &amp; développeur web · Fondateur</p>
      <div class="fd-pills"><span class="pill">FR C2</span><span class="pill">EN C1</span><span class="pill">AR langue maternelle</span><span class="pill">Bordj Bou Arréridj</span></div>
    </div>
  </div>
  <p class="fd-bio">Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement.</p>
</div>
```

Backed content only (Arabic awaiting a native speaker's review):

- Name: « Yasser Hamisse », as the site writes it, in Latin letters in every language.
- Role: « Designer graphique & développeur web · Fondateur » / "Graphic designer & web developer · Founder" / «مصمّم غرافيك ومطوّر ويب · المؤسّس».
- Pills: « FR C2 », « EN C1 », « AR langue maternelle » / "AR native" / «العربية لغة أم», « Bordj Bou Arréridj » / «برج بوعريريج».
- One line: « Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement. » / "I turn the brief into the build, and I stay once it's live." / «أحوّل الفكرة إلى منتج، وأبقى بعد الإطلاق.»
- If a date is wanted: « en freelance depuis 2019 », never a count of years.

## Do

- Roundel: 100px circle, a navy-to-void ground, a 2px `crimson` ring at 50%, a soft `crimson` 22% light from its top left; the « Y » in Geist 700 46px `crimson-hi`. In Daylight `crimson-hi` is 4.06:1 on plain `navy` but only about 3.0:1 inside the roundel: measured behind the letter, 3.04:1 at worst (3.5:1 typical), and 2.97:1 at the light's peak, which the centred letter does not reach. That passes only as large bold type (3:1). Keep the monogram centred, bold and 26px or larger (the site's 46px is safest); never set it smaller, off-centre toward the light, or on a stronger tint. In a Daylight piece you may leave the light out (no `.fd-photo::after`), which restores 4.06:1.
- Card: `navy`, 1px `hairline-2` border, radius `r-lg`, padding 40px, a 2px `crimson` line fading in and out along its top.
- Name: Geist 600 30px / 1.15, -.015em, `ice`. Role: Geist Mono 11px uppercase .14em `teal-text` (7.37:1 or more). Pills: the founder variant (4px 10px). Line: 18px / 1.5 `body-strong` (11.25:1 or more).
- Under 640px the top row stacks and centres.

## Don't

- Never generate, draw, illustrate or imply a face for the founder, and never use the coin engraving's laureate profile or any figure to stand for him. A photo goes in the roundel only when the owner supplies a real portrait (`<img>` inside `.fd-photo`; the monogram steps aside).
- Don't use « Six ans » / « 6 ans », the team size (« trois spécialistes », the D · S · T team cards), « Le studio a un visage. » (true only once a real photo exists), current or past employers and dated positions, certifications, or « 20 % plus rapide grâce à l'IA ».
- Don't link his public profiles from marketing until their bios are rewritten (owner decision pending).

## Differences from the site

The roundel's ground on the site is `--grad-noir`, a per-theme gradient tokens.json does not carry; `bundle.css` draws it from `navy` to `void`. Sizes are the desktop ends of the site's clamps (roundel 100px, letter 46px, name 30px, padding 40px). Left out: the profile links, the résumé panel and its buttons (their content is on the do-not-claim list), and the card drop shadow (it needs `--shade`).
