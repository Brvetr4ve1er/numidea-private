# CarouselPage

One page of a 4:5 carousel (1080 × 1350) for Instagram and LinkedIn: a top row with the wordmark and the page count, then a kicker, a heading, a lead and one thing (a plate, a list or a figure). An intentional addition, composed from the site's components (`.logo`, `.kicker`, `.sec`, `.t-list`, the framed plate) with the rules in README › Marketing formats; the site has no social formats.

## When to use

- Instagram carousels (5–8 pages) and LinkedIn document carousels (6–10 pages, exported as a PDF), and single 4:5 posts.
- The plan's carousels: « Ce que vous obtenez », « Quatre étapes », « L'arabe, ce n'est pas une traduction », « Les autres services » (`marketing.md`).

## What the consumer provides

```html
<div class="fmt fmt-45" lang="fr">
  <div class="fmt-safe">
    <div class="fmt-top"><span class="logo fmt-mark">Num<i>idea</i> Labs<span class="cursor" aria-hidden="true"></span></span><span class="fmt-label">2 / 5</span></div>
    <span class="kicker">02 — Inclus</span>
    <h2 class="sec">On dessine votre site <em>de zéro.</em></h2>
    <p class="fmt-lead">Pas de modèle acheté puis maquillé.</p>
    <ul class="t-list fmt-push"><li>Vitrine ou landing, 1&nbsp;à 5&nbsp;pages</li>…</ul>
  </div>
</div>
```

- The page count, « n / total ».
- A kicker numbered per page (two digits, an em dash, one word), a heading with its closing words in `<em>`, a lead, and exactly one thing:
  - a plate as the page's figure: `.plate-frame.fmt-figure` with the engraving in `pi-figure` (.62), captioned on its `void` chip (see `Plate`);
  - a list: `.t-list` with the site's own items;
  - a figure: a price row from `PricePost`.
- Copy from `copy-library.md`, one language per carousel.

## Do

- Margins 54px (5%), which also clear the 34px Instagram's 3:4 profile-grid crop takes off each side.
- Heading 96px (`sec` on the canvas; it balances its lines), lead 52px, labels and kicker about 40px, list items 51px, small print 44px or more.
- The first page carries the hook (seven words or fewer) and the reason to swipe; the last page is an `EndCard`.
- Say each fact once per carousel: a page that repeats the cover's line is cut.
- On LinkedIn, the link goes in the first comment, with its `?ref=` code (`marketing.md`).

## Don't

- Don't put more than one thing on a page, or a card beside a plate.
- Don't use a client's name, logo or screenshot (no client has given written permission), a client count, a result, a quote or a rating.
- Don't put a URL, an email address or a `?ref=` code on a page.
- Don't run Arabic before a native speaker has reviewed it; Arabic pages mirror the whole layout (`dir="rtl"`), the wordmark excepted.
- Don't let the list or the figure run into the bottom margin: cut an item instead.
