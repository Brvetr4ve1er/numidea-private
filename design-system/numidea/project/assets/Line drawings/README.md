# Line drawings

Six square drawings (512 × 512 px PNG), one beside each answer of the site's FAQ. Like the engravings, each is **white line art on pure black**, generated in earlier image runs and now a closed set, applied as a **luminance mask over a theme ink**, never shown as a picture (the recipe is in `assets/Engravings/README.md`).

## How the site draws them

- Inked in `teal-text`, at full strength, inside a 92px tile: `void` ground, 1px `hairline` border, `r-sm` corners, 8px padding.
- Each sits in the open answer panel, beside the answer it illustrates, not beside the question: at smaller sizes they were unreadable.
- Below 560px wide the site hides them.
- No caption, no motion.

## The files

| File | What it depicts | Beside | Use in marketing |
|---|---|---|---|
| `faq1.png` | A schedule grid with hatched bars, a finish flag and a dimension line | FAQ 1, how long a project takes | Lead times, the method's calendar |
| `faq2.png` | A balance scale: a rolled plan against a stack of coins | FAQ 2, what it costs | Prices, « Un prix avant le devis » |
| `faq3.png` | Three linked speech bubbles with abstract script | FAQ 3, which languages | French, English and Arabic; right-to-left |
| `faq4.png` | A building elevation with scaffolding and a tiny worker | FAQ 4, after launch | « On reste. », support included |
| `faq5.png` | Two drafting desks linked by an arc over a globe | FAQ 5, remote work | Working from Bordj Bou Arréridj, the time zone |
| `faq6.png` | A diagram: a direct line between two terminals, beside a detour through stacked boxes | FAQ 6, studio versus agency | Hold: it pictures « pas d'intermédiaire », a claim that waits for the owner |

## Do

- Ink them in `teal-text`; in a tile, keep the site's `void` ground and `hairline` border.
- Keep them at 92px or larger: about 90px is the floor below which they turn into smudges.
- Use one drawing per card, as the card's single marker, never beside a number or an icon.

## Don't

- Don't use `faq6.png` to illustrate "no middleman" or "one team" until the owner confirms who the buyer deals with.
- Don't show them white-on-black, recolour them outside the tokens, or animate them in a loop.
- Don't make new drawings in this style.
