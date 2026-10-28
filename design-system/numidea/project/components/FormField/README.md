# FormField

A contact-form field: a mono uppercase label, an input on the translucent field ground, and a one-line message under it that turns crimson on error. Hand-written from assets/styles.css › `.field`, `.field label`, `.field input`, `.field textarea`, `.field .err`, `.field .err.hint`, `.field.invalid`, `.form-row`, `.form-note`, `.form .btn` and index.html › `#contact-form`. Static rendition: plain markup styled by `components/bundle.css`.

## When to use

- Landing pages and lead forms built from this system; mock-ups of the site's contact section.
- A live form that invites messages waits for Gate B of the marketing plan (a privacy page and a real legal name). A mock-up of the site's own form does not.
- Two fields side by side in a `.form-row` (name and email), the message full width, the submit button last.

## What the consumer provides

```html
<div class="field invalid">
  <label for="f-name">Nom</label>
  <input id="f-name" name="name" type="text" placeholder="Votre nom" aria-invalid="true" aria-describedby="f-name-err">
  <span class="err" id="f-name-err">Ajoutez un nom pour qu'on sache à qui parler.</span>
</div>
```

- A visible label tied to the input; the message `span.err` always present (empty when valid, at least 14px tall so the form never jumps), linked by `aria-describedby`.
- `invalid` on the field when it fails; `hint` on the message for a neutral note; `is-focus` on the input for a still of the focused state.
- The site's copy (Arabic awaiting a native speaker's review):

| | FR | EN | AR |
|---|---|---|---|
| Labels | Nom · Email · Message | Name · Email · Message | الاسم · البريد · الرسالة |
| Placeholders | Votre nom · vous@entreprise.com · Qu'est-ce qu'on construit ? | Your name · you@company.com · What are we building? | اسمك · you@company.com · ماذا سنبني؟ |
| Errors | Ajoutez un nom pour qu'on sache à qui parler. · Ajoutez un email pour qu'on puisse répondre. · Cet email a l'air incomplet — vérifiez-le. · Dites-nous une ligne sur le projet. | Add a name so we know who we're talking to. · Add an email so we can reply. · That email looks incomplete — check it. · Give us one line about the project. | أدخِل اسمك لنعرف مع من نتحدّث. · أدخِل بريدك الإلكتروني لنتمكّن من الردّ عليك. · يبدو هذا البريد ناقصاً — تحقّق منه. · أخبرنا بسطر عن المشروع. |
| Submit | Démarrer un projet → | Start a project → | ابدأ مشروعاً ← |

## Do

- Label: Geist Mono 11px, uppercase, tracking .14em, `muted` (6.37:1 or more, on a `band` too).
- Input: `field-bg` fill, 1px `hairline-2` border, radius `r-sm`, padding 13px 16px, Geist 15px (16px under 960px and on touch, so phones do not zoom), `ice` text (15.89:1 or more); placeholder `faint` (5.63:1 or more).
- Focus: a 2px solid `teal` outline at 2px offset, the border `teal`, plus `glow-teal`. It sits outside the border, so a field in error keeps its crimson border and still reads as focused.
- Invalid: `crimson` border (4.80:1 or more as a mark) and the message in Geist Mono 11px `crimson-text` (5.88:1 or more). The message words the fix; colour only repeats it.
- Under the button, say plainly what happens: « Le bouton ouvre votre messagerie avec votre message déjà rédigé : il ne vous reste qu'à l'envoyer. Ce site ne conserve pas votre message. » (`form-note`, Geist Mono 12px `muted`). Change that sentence if the form ever stores or forwards anything.
- Arabic: the field in `dir="rtl"`, typed text and placeholders in IBM Plex Sans Arabic.

## Don't

- Don't replace the label with the placeholder.
- Don't ask for payment details, ID numbers or anything the studio has not decided to collect; don't promise a reply faster than « < 24 h ouvrées ».
- Don't signal an error by the border colour alone.
- The resting border, `hairline-2`, measures 1.40 to 1.99:1 against the ground (a source value, kept exact): the label and the fill carry the field; focus and error lift the edge.
