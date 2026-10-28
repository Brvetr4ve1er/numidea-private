# ProjectCard

A work card (picture on top, category, name, a line of description, a benefit line, tags and links), shown with a neutral slot instead of any client screenshot or client name, because no client has yet given written permission to appear in the studio's marketing. Hand-written from assets/styles.css › `.proj`, `.proj .thumb`, `.proj .browser`, `.proj .body`, `.proj .cat`, `.proj h3`, `.proj .gain`, `.proj .pills`, `.proj .actions` and index.html › `#work .work-grid article.proj`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- A portfolio page in a carousel, a "work" slide, the work grid of a landing page. A safe heading for such a page: « Quelques réalisations » / "Some of our work" / «نماذج من أعمالنا» (awaiting a native speaker's review).
- What may fill it today: Glaive Store, the studio's own fictional brand and shop built as a portfolio demo, always with its « Démo portfolio » pill in view.
- A client's card (Bordj Steel, Alliance Travel, AlmaFlowClim on the site) only after that client's written permission, kept on file: the marketing plan's Gate C, one client at a time. Until the owner decides how to describe each relationship, don't call them « clients » or their sites « livrés ».

## What the consumer provides

```html
<article class="proj">
  <div class="thumb thumb-slot">
    <div class="browser" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
    <span class="slot-note">Capture d'écran · après accord écrit du client</span>
  </div>
  <div class="body">
    <span class="cat">Commerce · Gaming</span>
    <h3>Glaive Store</h3>
    <p>Une marque fictive de matériel gaming et sa boutique en ligne, conçues de A à Z comme démo de portfolio.</p>
    <p class="gain">…</p>   <!-- optional: what a visitor can do on the site -->
    <div class="pills"><span class="pill">Commerce</span><span class="pill">Marque</span><span class="pill concept">Démo portfolio</span></div>
    <div class="actions"><a href="…">Voir le site →</a><a href="…">Voir la planche →</a></div>
  </div>
</article>
```

- The picture: keep `.thumb-slot` with its note until a screenshot may be shown, then replace the note with `<img class="shot" src="…" alt="…">` and drop `thumb-slot`.
- The address bar: leave its `<span>` empty. No hosting hostname appears in marketing.
- The benefit line (`gain`): what a visitor can do on the site, in one sentence, never what changed for the client.
- Put cards in `.work-grid` (two columns, 32px apart) or on their own.

## Do

- Card: `navy` with a 4.5% white top sheen, 1px `hairline` border, radius `r-md`. Picture 16:10. Body padding 24px.
- Category: Geist Mono 11px, uppercase, .14em, `teal-text` (7.37:1 or more). Name: Geist 600 22px / 1.2, `ice`. Description: 15px / 1.6, `muted` (6.36:1 or more), at least three lines tall so cards in a row align. Benefit: 13px `body-strong` above a `hairline` rule, marked by a 7px `teal` diamond. Links: Geist Mono 12px bold `ice`, 1px `hairline-2` border, radius `r-pill`, 38px tall; hover `teal`.
- Hover (or `is-hover` in a still): the card lifts 4px and its edge takes a `teal` ring.
- The slot: `plum` ground with a dashed `hairline-2` inset line and its note in Geist Mono 11px `muted` (6.23:1 or more).

## Don't

- No client screenshot, logo, name, link or sheet before that client's written permission; never Nomara Voyages, whatever the answer.
- No client figures or results, even those visible in a client's own screenshot (tonnages, traveller counts, ratings, "150+"): on a studio post they read as the studio's results.
- No ranking claims about a client (« leader … en Algérie »), no third-party brand chips, no client phone numbers.
- Don't mark a build « En ligne » when it is not on its client's own domain.
- Don't show WorkspaceHQ as a client case: it is the founder's own product (« code public sur GitHub »), proof of craft only.
- Don't tint a card in a client's brand colour (`.proj--brand` on the site needs that client's colours; it is not recreated).

## Differences from the site

Intentional addition: `.thumb-slot` and `.slot-note`, the neutral stand-in for a screenshot. The site's thumb falls back to `--grad-blood`, which tokens.json does not carry. Left out: the screenshot's parallax drift and hover zoom, the per-client brand accents, the media-left rows phones get under 960px, the bento spans, and the card drop shadow (it needs `--shade`).
