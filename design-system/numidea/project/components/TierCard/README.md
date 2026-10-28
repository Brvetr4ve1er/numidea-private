# TierCard

One of the three published packages (Essentiel, Studio, Moteur) with its price range, its delivery window on a shared 16-week ruler, and what it includes. Hand-written from assets/styles.css › PRICING (`.tiers`, `.tier`, `.tier-pop`, `.t-pop`, `.t-for`, `.t-range`, `.cur`, `.t-time`, `.t-weeks`, `.t-wk`, `.t-list`, `.ai-corner`, `.price-note`) and index.html › `#pricing .tiers`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- A price carousel page, a pricing slide, the price row of a landing page. Show the three together when you can: the cards compare on one ruler.
- « Un prix avant le devis » is the studio's argument; the card is its proof.

## What the consumer provides

The site's own figures, in dinars (the reference currency):

| | Essentiel | Studio (« Recommandé ») | Moteur |
|---|---|---|---|
| For | « Une présence crédible, vite en ligne. » | « Le site qui porte vraiment l'entreprise. » | « Quand il vous faut un outil métier, pas seulement un site. » |
| Range (DA) | 90 000 – 160 000 | 180 000 – 420 000 | 450 000 – 1 200 000 |
| Weeks | 2 à 4 | 3 à 7 | 8 à 16 |
| Ruler bar | start 12.5%, size 12.5% | start 18.75%, size 25% | start 50%, size 50% |
| Support included | 1 mois | 3 mois | 6 mois |

EN names: Essential, Studio, Engine; AR: الأساسي، الاستوديو، المحرّك (awaiting a native speaker's review). Each card's list is the site's (`price.t1a`… in app.js); copy it from the preview.

```html
<div class="tiers">
  <article class="tier tier-pop">
    <span class="t-pop">Recommandé</span>
    <svg class="ai ai-corner" viewBox="0 0 24 24" aria-hidden="true">…</svg>
    <h3>Studio</h3>
    <p class="t-for">Le site qui porte vraiment l'entreprise.</p>
    <p class="t-range"><span class="cur">env.</span> <b>180&#8239;000&nbsp;–&#8288;&nbsp;420&#8239;000</b> <span class="cur">DA</span></p>
    <p class="t-time">3&nbsp;à 7&nbsp;semaines</p>
    <span class="t-weeks" aria-hidden="true"><span class="t-wk"><b style="inset-inline-start:18.75%;inline-size:25%"></b></span><span class="t-wk-n"><span>0</span><span>16&nbsp;semaines</span></span></span>
    <ul class="t-list"><li>…</li></ul>
  </article>
</div>
```

- The bar: start = first week ÷ 16, size = (last week − first week) ÷ 16; the ruler's far end reads « 16 semaines » / "16 weeks" / «16 أسبوعاً».
- The figure is one unbreakable unit: narrow no-break spaces inside the thousands, a no-break space and a word joiner around the dash, exactly as written above.

## Do

- In marketing every price carries « env. » before it (the preview shows this form; the site's card shows the bare range). English: "about … DZD"; Arabic: «نحو … دج» (awaiting review). Euro and dollar prices add « HT » / "excl. tax" after the currency; **dinar prices carry no tax label** until the owner and the accountant say whether they are before tax (`claims.md`), as on the site's dinar cards. Euro and dollar figures are rounded conversions at the October 2026 official rate: env. 600 – 1 100 € HT, 1 200 – 2 800 € HT, 3 000 – 7 900 € HT; about $670–1,200, $1,300–3,100, $3,400–9,000 excl. tax. The conversion note goes in the caption (`business.md`).
- Close the row with « Fourchette indicative, pas un devis. Le prix ferme suit, une fois le périmètre cadré ensemble — et il ne bouge plus ensuite. » (`price-note`, `muted`).
- Card: `navy` with a 4% white top sheen, 1px `hairline` border, radius `r-lg`, padding 32px 24px 24px. Name: Geist 600 30px / 1.15, -.015em, `ice`. For-line and list: 15px / 1.6 `body-strong` (10.12:1 or more). Figure: Geist 700 30px, -.02em, `ice`; « env. », « DA »: Geist Mono 13px, .06em, `teal-text` (7.37:1 or more). Duration and ruler ends: Geist Mono 11px `muted` (6.45:1 or more). Ticks and bar: `teal`.
- Recommended: Studio only. Its ring is `teal` at 45% plus a 1px `teal` 18% halo; the badge is Geist Mono 11px uppercase in `void` on `teal-text` (6.65:1 or more), centred on the top edge, 24px in; its corner icon turns `crimson-text`.
- At 30px the widest figure with « env. » and « DA » needs about 400px of card width. On a narrower row set the figure smaller, as the site's `clamp(19px, 1.9vw, 30px)` does: add `at-1200` to `.tiers` for a row 1,200px wide (the figure at 22.8px, the site's value at that width; the preview uses it). Never let a figure wrap.

## Don't

- Don't list Essentiel's « Mise en ligne, domaine et certificat configurés » in marketing: no delivered client site runs on its own domain yet (owner decision pending). The preview leaves it out.
- Don't claim to be the cheapest: Essentiel sits above the typical Algerian range for a showcase site.
- Don't add AED or SAR prices (none exist): Gulf-facing pieces show no price until the marketing plan's Gate G. Say nothing about payment: terms, deposits and methods are all undecided (Gate D).
- Don't describe what the included support or the optional maintenance (« env. 18 000 – 60 000 DA par mois », no lock-in) covers: undecided.
- Don't add urgency, discounts or "places left".
- Don't scale one card up to feature it: the chosen tier earns a ring and a label, not a different size.

## Differences from the site

Sizes are the desktop ends of the site's clamps (name 30px, figure 30px, range line 25px); `at-1200` sets the figure to the site's 22.8px at a 1,200px width. The 3-column row starts at 720px with a 24px gap. The hover state (`is-hover`: the card lifts 3px and its border turns `hairline-2`) exists for landing pages; a still piece never shows it. The card drop shadow is left out (it needs `--shade`); the corner icons are drawn, without their draw-in and idle motion. Intentional addition: `.t-range .cur:first-child` spaces « env. » on its far side.
