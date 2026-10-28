# PricePost

The three packages on one 4:5 post (1080 × 1350), in marketing form: each range starts with « env. », dinars carry no tax label, a smaller € line adds « HT », and the conversion note goes in the caption. An intentional addition, composed from the site's components (`.kicker`, `.sec`, the TierCard's figure and badge, `.logo`) with the price rules in `claims.md` and `business.md`; the site has no social formats.

## When to use

- The « Un prix avant le devis » post and the price page of a carousel, for Algeria (FR, then AR) and France (FR, in € only).
- Never for the Gulf: no AED or SAR price exists. A Gulf piece uses the headline « A price before the quote. » with no figure.
- Not in the brand launch « L'atlas » (W2), which carries no price figure.

## What the consumer provides

```html
<div class="pp-row">
  <div class="pp-head"><span class="pp-name">Studio</span><span class="pp-pop">Recommandé</span><span class="pp-time">3&nbsp;à 7&nbsp;semaines</span></div>
  <p class="pp-range"><span class="cur">env.</span>180&#8239;000&nbsp;–&#8288;&nbsp;420&#8239;000<span class="cur">DA</span></p>
  <p class="pp-alt">env.&nbsp;1&#8239;200&nbsp;–&#8288;&nbsp;2&#8239;800&nbsp;€&nbsp;HT</p>
</div>
```

The site's figures, exactly (`business.md`):

| | Essentiel | Studio (« Recommandé ») | Moteur |
|---|---|---|---|
| Algeria, FR | env. 90 000 – 160 000 DA | env. 180 000 – 420 000 DA | env. 450 000 – 1 200 000 DA |
| Smaller € line (Algeria) or the main figure (France) | env. 600 – 1 100 € HT | env. 1 200 – 2 800 € HT | env. 3 000 – 7 900 € HT |
| Weeks | 2 à 4 semaines | 3 à 7 semaines | 8 à 16 semaines |
| Arabic [AR à relire] | نحو 90 000 – 160 000 دج | نحو 180 000 – 420 000 دج | نحو 450 000 – 1 200 000 دج |

- The caption, never the visual: « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » and, whenever € shows, « Conversion au taux officiel de la Banque d'Algérie (1 € ≈ 151 DA, octobre 2026), arrondie. »
- For France, drop the dinar line and set the € range as the figure (`pp-range`, « env. » before, « € HT » after).

## Do

- Every figure is one unbreakable unit: U+202F inside the thousands, a no-break space and a word joiner around the dash, as in the markup above.
- Figure 60px Geist 700 in `ice`; « env. » and « DA » 40px Geist Mono in `teal-text`; the € line 44px in `muted`; package names 52px Geist 600; weeks 36px mono `muted`; the badge on Studio only, `void` on `teal-text`.
- Close with « Fourchette indicative, pas un devis. » (`fmt-small`) and the wordmark.
- Name the packages as the site does: « Essentiel », « Studio », « Moteur ».

## Don't

- Don't write « HT », « TTC » or any tax wording after a dinar figure: the dinar tax status is undecided until the accountant answers.
- Don't drop « env. », round the figures differently, or show a single price where the site shows a range.
- Don't list what support or maintenance covers, or Essentiel's « Mise en ligne, domaine et certificat configurés » (owner item).
- Don't compare with other sellers, say « moins cher », or set the market table on this post; a comparison piece carries the sources line from `business.md`.
- Don't add a discount, a deadline, a "places left" line or any payment term.
