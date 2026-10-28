# LanguageSwitch

The FR · EN · ع toggle: three squared buttons in one bordered group, the current language filled in teal. Hand-written from assets/styles.css › `.lang`, `.lang button`, `.lang button[aria-pressed="true"]` and index.html › `.nav-right .lang` (the mobile menu repeats it). Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- In a mock-up of the site's header or a landing page that switches language.
- In a marketing visual that makes the trilingual promise concrete: the site switching between French, English and right-to-left Arabic is honest footage of the studio's own work.

## What the consumer provides

```html
<div class="lang" role="group" aria-label="Langue">
  <button type="button" aria-pressed="true" lang="fr" aria-label="Français (FR)">FR</button><button type="button" aria-pressed="false" lang="en" aria-label="English (EN)">EN</button><button type="button" aria-pressed="false" lang="ar" aria-label="العربية (ع)">ع</button>
</div>
```

- The current language as `aria-pressed="true"`; the group label in the page's language (« Langue » / "Language" / «اللغة»).
- Always the three labels FR, EN and the letter ع for Arabic, each with its `lang` attribute (the ع takes IBM Plex Sans Arabic).
- On an Arabic page the group sits in `dir="rtl"` and reads ع · EN · FR from the right.
- For a still: `is-hover` or `is-focus` on a button.

## Do

- Group: 1px `hairline-2` border, radius `r-pill` (4px), 2px between buttons, overflow clipped.
- Buttons: Geist Mono 12px, padding 5px 9px; idle `muted` (6.75:1 or more on `void` and under the navbar's `nav-glass`); hover `ice`; pressed `on-teal` on a `teal` fill (5.97:1 or more).
- Focus: the group clips, so the 2px `teal` ring is drawn inside (offset -3px); on the pressed button the ring turns `on-teal`.
- On touch screens the buttons grow to 40px tall with 12px side padding.

## Don't

- Don't use flags for languages (and none in Gulf-facing pieces at all).
- Don't write "AR" or "عربي" on the Arabic button; the site uses ع.
- Don't show the state by colour alone in markup: keep `aria-pressed`.
- The group's border, `hairline-2`, measures 1.48 to 1.99:1 on `void` (a source value, kept exact); the buttons read by their labels.
