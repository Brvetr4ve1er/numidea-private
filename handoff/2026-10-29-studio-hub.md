# Handoff, 29 October 2026: case studies on the studio hub

Read this before building anything from the Claude Design project. It carries
the owner's answers and the rules of the site, so the work starts where the
last session stopped.

## Where things stand

- **Public repository:** `Brvetr4ve1er/Numidea.tech` (GitHub redirects the
  old name, STICKITTY.INC). Every push to the branch
  `claude/numidea-labs-landing-c4jokc` (the default branch) runs the gated
  Pages deploy.
- **Head on 29 Oct:** `1185f08` ("Bump cache stamps"). The hub
  (VOIDSPLUNKER.std, `hub/`) was rebuilt on the owner's illustrations of
  Yasser and Kūro and pushed on 28 Oct after the owner's review. History:
  IMPROVEMENTS.md A11, decisions 22 to 26.
- **Not live yet:** GitHub Actions is blocked by billing, so every job fails
  in a few seconds. The live site still carries stamp 202610251516. Nothing
  can deploy until the owner clears billing; do not try to work around the
  gates.
- **Private kit:** this repository. `hub-art/` holds the hub's masters,
  synced on 29 Oct and pinned by `hub-art/MASTERS.sha256`. In the public
  checkout, `npm run hub:art` reads them from `campaign/hub-art` (git-ignored)
  or from `HUB_ART_DIR`. `TASKS.md` lists every open thread.

## What the owner asked (29 Oct)

Build pages from the Claude Design project
`https://claude.ai/design/p/e95bba9b-748e-48bb-9fe1-131061b320f9`. It holds:

- case studies: Heetch, Alliance Travel, AlmaFlow, Bordj Steel, Traveler;
- `Studio.dc.html`;
- brand books, carousels, a reel, mascot sheets, a motion lab;
- the "Numidea Labs" design system in `_ds/numidea-labs-design-system-…`:
  tokens, base CSS, a component bundle, about 30 display fonts.

The owner's answers:

- **Scope:** case-study pages, the hub restyled with the Numidea system, and
  the Studio page. **Heetch first** (`CaseHeetch.dc.html`, which imports
  `assets/clients/heetch/m-bill.jpg` and `m-duo.jpg`). The rest waits until
  the owner has reviewed Heetch.
- **Client permission:** Heetch, Alliance Travel, AlmaFlow and Bordj Steel
  agreed in writing to case studies. Traveler is the owner's own brand.
  Record this in OWNER-CONTENT.md with the date (the owner's statement of
  29 Oct).
- **Fonts:** the owner holds web licences for every font in the Numidea
  system; use them as they are. The legal page records them as "web licence
  held by the owner (stated 2026-10-29)". Never invent a licence name.
  Today `scripts/build-legal.mjs` flags every served font missing from
  `OFL_FONTS`, so it needs a separate list of owner-licensed fonts.

## How to build the Heetch case study

Follow the WorkspaceHQ import, which brought an earlier Claude Design project
onto the site: BRAND.md › "workspacehq/ — the WorkspaceHQ v3 launch page".

- **Where:** `hub/work/heetch/index.html` (plus its CSS and JS).
  - Add it to `scripts/site.mjs` PAGES. DEPLOY already covers `hub`.
  - Add it to the sitemap and to the SEO and structured-data block
    (check.mjs 18).
  - `npm run build` writes its CSP meta. No inline handlers and no
    `javascript:` URLs.
- **Native HTML/CSS/JS, no React runtime.** Rebuild the design system's
  components in CSS with the bundle's exact values. Port any logic to plain JS.
- **Fonts:** only the faces the page uses, converted to subset WOFF2 and
  self-hosted in `assets/fonts/`. fontTools and brotli are not installed; use
  `PIP_USER=0 pip install --no-user fonttools brotli` with
  `REQUESTS_CA_BUNDLE`/`SSL_CERT_FILE` pointing at the proxy CA bundle.
  Preload only the first-screen faces. check.mjs 17 rejects two identical
  font files and enforces the font budget.
- **Images:** export them with a sharp recipe in the style of
  `scripts/build-hub-art.mjs` and `scripts/hub-art-data.mjs`: width ladders,
  WebP, and width and height on every `<img>`. check.mjs 17 and 17b check
  srcset, data-full, the CSS `url()`s, unused files and the budgets.
- **Motion:** finite only (at most 5 s), and reduced motion gets stills. No
  `infinite` and no `<video loop>`. Layout shift must stay 0.
- **Gates:** add the page's runs to `scripts/audit.mjs`, `sweep.mjs`,
  `keys.mjs` and `vbugs` (desktop and 390, both palettes if it has them).
- **From the hub:** in "Identity. Posters. Print." the Heetch tiles link to
  the case page, and Behance stays as a second link.
- **Docs:** update these in the same change:
  - BRAND.md: a section for the case pages;
  - README.md: the new page;
  - OWNER-CONTENT.md: the four permissions and the font licences;
  - IMPROVEMENTS.md: a new A-item, the decisions as answered, a Log row;
  - `knowledge-base/Maps/WorkspaceHQ and hub.md`.

## Rules that stand

- `npm run build` leaves no diff and `npm run verify` is green before a commit
  is final.
- Screenshots at 390 and 1440, in both palettes, go to the owner before any
  push. Push only after the owner says yes.
- Every commit ends with the session's attribution lines.
- No image-tool or model names on pages, in code comments, commits or docs.
  No AI credit line on the hub (decision 24).
- Carousels, reels, storyboards, mascot sheets and other marketing material
  stay in this private repository, never in the public one. The brand books
  are context, not pages.
- No competitor names in the public repo. Client work appears in marketing
  only with written permission (now given for the four clients above, for
  case studies).
- Never disable TLS verification or unset HTTPS_PROXY.
- The USDT is never used or mentioned.
- Arabic copy is marked for native review.
- Owner items (OWNER-CONTENT.md) do not change without the owner's answer.
- No Magnific generation without quoting each run to the owner first. Canva
  generation is stopped.

## Still open with the owner on the hub

- What the page says of Kūro (today only "Yasser and Kūro, after hours").
- The hexagon "N" on the coat, kept as a costume detail.
- The glyph-like symbols on the print "A world in miniature".
- Paper is the default theme (kept unless the owner says otherwise).
