// The series end card (scripts-trailer.md §3.4 "End card"; strategy.md
// §3.4; scripts-packages.md §1.6): the wordmark, the label (F07) or the
// short place line (T53), the motto (F29), a pointer per placement (F30),
// and the CTA (F08) ONLY when cta=1, after Gate B. No URL, no email, no
// phone number, no ref code, ever. V01 never sets cta: it has no call to
// action, and the copy loader refuses T13 in v01-30 anyway (gated).
//
// The text blocks are [data-copy] blocks filled by the copy loader. What
// lives here are the parts that are not copy:
//
//   WORDMARK      the site's logo (F20; index.html:1256 `.logo`):
//                 « Num » + « idea » + « Labs » in the theme's logo face
//                 (--font-logo, Cinzel 700 .04em in Arcanum, styles.css:43),
//                 « idea » in --font-swash (Geist 600) and --teal-text
//                 (styles.css:140), then the cursor: a SOLID --crimson block,
//                 0.41 x 0.91 em, that never blinks (styles.css:142; BRAND.md
//                 "The logo"). Always left to right (styles.css:2464). A mark,
//                 not copy: the same in every master, never translated.
//   pointerFor()  which pointer a render shows (F30, the T52 note in
//                 copy/trailer.json): « Lien en bio » by default; the LinkedIn
//                 file (pointer=li) says « Lien en commentaire »; none in 16:9
//                 (YouTube, the site) and none in story=1 renders (the link
//                 sticker is the pointer).
export const WORDMARK = { parts: ['Num', 'idea', ' Labs'], src: 'F20', ref: 'index.html a.logo (fact F20 cites l. 1256; l. 1265 at site 076c991); styles.css:43, :139-142, :2464' };

export function buildWordmark(el) {
  el.textContent = '';
  el.dir = 'ltr';
  el.setAttribute('translate', 'no');
  el.dataset.src = WORDMARK.src;
  const [a, b, c] = WORDMARK.parts;
  const i = document.createElement('i');
  i.textContent = b;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');
  el.append(a, i, c, cursor);
  return el;
}

export function pointerFor({ ratio, params }) {
  if (ratio === '16x9' || params.has('story')) return null;
  return params.get('pointer') === 'li' ? 'li' : 'bio';
}
