# EndCard

The last frame of every piece: the wordmark at ×4, the label « Studio web & logiciel · Bordj Bou Arréridj, Algérie », the motto and a pointer to the link, with no URL, on a 9:16 or 4:5 canvas. An intentional addition, composed from the site's wordmark, mono labels and the erg engraving with the end-card rules in README › Marketing formats; the site has no social formats.

## When to use

- The last frame of a vertical piece, the last page of a carousel, the closing slide of a deck.
- Before Gate B, every piece ends here, with no call to action. After Gate B, which pieces end on the Aperçu call to action (after a short conditions beat) is the owner's open decision (`marketing.md` §10); until he decides, keep this card as it is.

## What the consumer provides

```html
<div class="fmt fmt-916" lang="fr">
  <div class="fmt-safe fmt-end">
    <span class="logo fmt-mark is-xl fmt-push">Num<i>idea</i> Labs<span class="cursor" aria-hidden="true"></span></span>
    <p class="fmt-label is-teal">Studio web &amp; logiciel<br>Bordj Bou Arréridj, Algérie</p>
    <p class="fmt-small">Enraciné en Numidie · bâti sur des&nbsp;idées</p>
    <p class="fmt-label is-ice fmt-push">Lien en bio</p>
  </div>
  <i class="fd-ink fmt-deco" style="left:-110px;width:1300px;bottom:0;mask-image:url(<assets/Engravings/dunes.webp>)" aria-hidden="true"></i>
</div>
```

The label, the motto and the pointer per market (Arabic awaiting a native speaker's review):

| Market | Label (`hero.eyebrow`) | Motto (`footer.tag`) | Pointer |
|---|---|---|---|
| Algeria, FR | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Enraciné en Numidie · bâti sur des idées | Lien en bio |
| Algeria and Gulf, AR | استوديو ويب وبرمجيات · برج بوعريريج، الجزائر | جذورها في نوميديا · مبنيّة على الأفكار | الرابط في الملف التعريفي |
| France, FR | Studio web & logiciel · Bordj Bou Arréridj, Algérie | Enraciné en Numidie · bâti sur des idées | Lien en commentaire (LinkedIn) · Lien en bio (Instagram) |
| Gulf, EN | Web & software studio · Bordj Bou Arréridj, Algeria | Rooted in Numidia · built on ideas | Link in bio |
| YouTube | the label in the video's language | optional | none |

## Do

- The wordmark at ×4 (`fmt-mark is-xl`, 88px), without its glow; the label in `teal-text` mono at 40px, on two lines where it does not fit one (the line break replaces the middle dot); the motto at 44px in `muted`; the pointer in `ice` mono.
- 9:16: the stack centred in the safe box (x 140–940, y 290–1240), the pointer at its foot, the erg (`dunes.webp`, `crimson-text` at .2) below y 1240 as decoration. 4:5: the stack from the top, inside 54px margins, the erg under it, never behind a line of text.
- Gulf pieces keep « Algeria » in the label every time.

## Don't

- Don't put a URL, an email address, a phone number or a `?ref=` code on the card: the link and its code live in the post (bio, caption or first comment).
- Don't add the Aperçu, its headline or its button before Gate B, or ever without its conditions.
- Don't add a QR code, a handle that is not decided yet, a team line or « 6 ans ».
- Don't draw a logo or put the favicon mark here: the wordmark is the mark.
