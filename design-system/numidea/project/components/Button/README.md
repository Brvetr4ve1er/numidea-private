# Button

The site's three buttons in Geist Mono 14px bold: a crimson primary, a teal outline (the WhatsApp way in) and a quiet ghost. Hand-written from assets/styles.css › `.btn`, `.btn-primary`, `.btn-teal`, `.btn-ghost`, `.wa-link`, `.wa-i` and index.html › `.hero-cta`, `#apercu .prev-actions` and `#contact-form`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- Primary: the one action the piece exists for, at most once per frame. On the site that is asking for the Aperçu or starting a project.
- Teal: the second way in, WhatsApp, beside the primary.
- Ghost: a neutral secondary action (on the site: copy or review a message, open the founder's portfolio).
- Gated labels: a button that asks for the Aperçu or invites a WhatsApp message waits for Gate B of the marketing plan. The site's labels below are ready for that day; before it, a piece carries no such call to action.

## What the consumer provides

```html
<a class="btn btn-primary" href="…">Demander mon Aperçu gratuit →</a>
<a class="btn btn-teal wa-link" href="…"><span class="wa-i" aria-hidden="true"><svg viewBox="0 0 24 24">…</svg></span><span>Écrire sur WhatsApp</span></a>
<a class="btn btn-ghost" href="…">Copier mon message</a>
```

- A verb-first label from the site's own copy. FR / EN / AR (the Arabic awaits a native speaker's review): « Demander mon Aperçu gratuit → » / "Request my free Preview →" / «اطلب معاينتك المجانية ←»; « Demander mon Aperçu → » / "Request my Preview →" / «اطلب معاينتك ←»; « Écrire sur WhatsApp » / "Chat on WhatsApp" / «راسلنا عبر واتساب»; « Démarrer un projet → » / "Start a project →" / «ابدأ مشروعاً ←».
- The arrow points the reading way: → in French and English, ← in Arabic, with `dir="rtl"` on an ancestor.
- The WhatsApp icon is the site's inline SVG (two paths, stroke 1.5, `currentColor`); copy it from the preview.
- For a still image of a state, add `is-hover` or `is-focus` (the live page uses `:hover` and `:focus-visible`). In a form, `.form .btn` pads 15px 40px.

## Do

- Keep the metrics: padding 14px 28px, 1px border, radius `r-sm` (8px), gap 8px (9px with the WhatsApp icon), line height 1.6 on a link.
- Primary: `crimson` fill and border, `on-crimson` label (5.02:1 in Noir, 18.16:1 in Monochrome, never under 5:1), resting shadow `btn-glow`; hover and keyboard focus add `glow-crimson` and lift it 2px.
- Teal: transparent, `teal` border, `teal-text` label (6.65:1 or more on `void`); hover washes it with 8% `teal` and adds `glow-teal`.
- Ghost: transparent, `hairline-2` border, `ice` label; hover and focus turn the border `ice`.
- Focus: a 2px solid `teal` ring at 3px offset, 5.38:1 or more on `void`.

## Don't

- Don't put `ice` or white on the crimson fill (1.00 to 3.50:1); the label is always `on-crimson`.
- Don't fill a button with a gradient: the site removed its gradient sweep as a generated-looking tell.
- Don't set a label in `teal` (the fill): it is 3.0:1 on Daylight. Labels use `teal-text`.
- Don't make the ghost the main action: its resting border, `hairline-2`, measures 1.48 to 1.99:1 on `void` (a source value, kept exact); its label carries it.
- Don't write labels about payment: terms, deposits and methods are all undecided, so no button names a way to pay.

## Differences from the site

`r-sm` follows the theme on the site (Noir 6px, Daylight 10px, Monochrome 2px, Alt-neon 10px, Engineering 2px); tokens.css holds Arcanum's 8px for every theme. The press shrink (`scale(.97)`) is kept; the full-width buttons of very narrow phones are not.
