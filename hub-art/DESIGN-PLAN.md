I made no changes to the repo or the scratchpad. One thing is urgent before the plan itself: the manifest's signed download links expire on **31 Oct 2026, 00:00 UTC** (every URL has `exp=1793404800`), not "around 2 Nov" as CATALOG.md says. That leaves about 60 hours from now. The hero image the page depends on (`nV5x8JoYQD`) has not been downloaded yet.

# Hub rebuild plan

## 0. Findings that change the plan

1. **The full-res folder is not the set you need.** `/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/magnific/full/` holds 16 files:
   - only 10 are set C, plus the cut-out `WDkgWegcXe`;
   - 5 are flame-coder (set A) sheets, and `nV5rkLPYQD` there is the flame coder's full body, not the hero `nV5x8JoYQD`.
   - Other ids differ by only a few characters: `mEP69EWhJQ`/`mEP2bXIhJQ`/`mEPZBKNhJQ`, `xSTe3yNjfW`/`xSTe3myjfW`, `yitfTW0PW9`/`yitfTImPW9`, `6AfFeoKiJO`/`6AfbOdZiJO`, `rg0ByG0xtc`/`rg0XqHKxtc`, `P3mCVfW42C`/`P3mQU8C42C`, `WDkLIrPcXe`/`WDkgWegcXe`/`WDkg2YLcXe`.
   - The pipeline must check each source's size and sha256.
2. **The cut-out is the hero with its background removed.** `WDkgWegcXe` (2752×1536 RGBA) is the same frame as the hero: Yasser with the coffee, Kūro sitting. That makes exact layer registration possible. It carries three defects:
   - garbled badge lettering ("Nartiblen") under the hexagon N;
   - opaque paper fringe along the coat's right edge;
   - two stray specks of splatter at the top left.
3. **The art's paper and ink colours are measurable.** Sampled from 5 set C images: paper `#EDD6B9` (±2), ink `#16100C`, coat bone `#F4E2CE`, badge burgundy `#652829`.
4. **The 14 sticker loops are set C and text-free** (only `? ! … Zz` symbols). The file names are French; the site copies need English names. They are 1080², 72–90 frames at 30 fps (2.4–3 s), and 0.3–0.8 MB as WebM.
   - Safari does not render alpha in VP9 WebM, so a transparent WebM would show a black box on iPhones.
5. **`check.mjs` misses several kinds of references.**
   - Block 3 only matches `src="`/`href="`. A missing `srcset`, `data-full` or CSS `url()` file would pass unnoticed.
   - Block 17 fails with "publishes no files" if a budget folder disappears (`hub/poses`).
   - `.gitattributes` has no `*.avif` or `*.webm`, so block 15b fails if either type is added.
6. **Some shared files exist only for the hub.** Space Mono (4 files) and `assets/illus/hub-{design,dev,social,studio}.png` (only `hub/style.css:212-215` uses them) become dead weight once the hub stops using them.
7. **The keyboard tests pin the lightbox.** `keys.mjs:554` needs `#lb`, `#collection .tile--img` (with `data-title`) and `#lbTitle`. Keep these hooks and keys.mjs needs no functional change.
8. **The audit has hard limits.** The desktop `hub` run has an LCP budget of 1.5 s, and audit/sweep currently assume dark is the default. Nothing links into hub anchors: workspacehq links only to `../hub/` (`workspacehq/index.html:66, :331`).
9. **Every push to `claude/numidea-labs-landing-c4jokc` is a deploy** once the gates pass (`.github/workflows/pages.yml`). So: commit locally, push once at the end, and do not bypass the gates while Actions billing is blocked.
10. **There is a private-folder pattern to reuse.** `campaign/` is git-ignored and listed in `NOT_DEPLOYED`, and `scripts/build-creative.mjs` already reads private sources from `./campaign` or an env var.

---

## 1. First step: save the current open work (before any hub change)

**1a. Download now, before 31 Oct 00:00 UTC.**
- Get all 55 full-res renders from the manifest URLs, at least the set C ones the hub uses: `nV5x8JoYQD, IfONrR5tvE, 3zEkVHLREY, mEP2bXIhJQ, mEPZBKNhJQ, 8aJipYmIrU, WDkg2YLcXe, P3mQU8C42C, JN8Cg30Oq4, LwM8kSlswO, hu42BwkvqL`, plus the alternates `bxz0JPX5Y2, xSTe3yNjfW, rg0XqHKxtc, Eb3WxMQuuO, 6AfbOdZiJO, w4BmGAU7EI, P3mCVfW42C, yitfTImPW9, hu42…`.
- Check each file's size against what you expect (1344×768 renders should come in at about 2752×1536) and record its sha256.
- After expiry, the owner's Magnific library can still issue new links (`creations_get`).

**1b. Classify the scratchpad (about 2.9 GB).**

| Class | Content | Action |
|---|---|---|
| Private sources (must keep) | `marketing/*.md` (PLAN, strategy, channels, facts-bank, music, pipeline, scripts-*), `azuki-carousel-plan.md`; `marketing/pipeline` source (without `node_modules`); `marketing/music-lab` sources; `marketing/stickers/{render.mjs,runtime.js,pack.mjs,pack.json,scenes/,assets/}`; `carousel/miniature-world-script.json` + `engravings.png`; `ds/` (design system source); `magnific/CATALOG.md`, `inventory.tsv`, `manifest.json` (with the `?token=` parts removed); `tools/cutout.py`, `cutsheet.cjs`, `measure*.py` | zip "sources" (target < 60 MB) |
| Private assets (costly to redo) | `magnific/full/*.png` plus the new downloads; `magnific/cut*/`; the hub masters from step 5A; `stickers/out/_deliver/*` (44 MB); `marketing/out/v01`; `latlas-v01-fr-en.zip` | zips "art" and "deliverables" |
| Can be regenerated (exclude) | `pipeline/node_modules` (166 MB); `stickers/out/*/frames` (484 MB); `*.mov` (538 MB); virtual environments; `remotion-eval` and `_review` if they turn out to be renders (check first) | list in TASKS only |

**1c. Write a private checkpoint file**, `TASKS-2026-10-28.md`, inside the kit (not in the repo). It lists every open thread with its status, next step, who it waits on, where it lives in the kit, and how to resume:
- the marketing plan (waiting on owner decisions in its §8);
- the V01 trailer;
- the sticker pipeline, its 14 loops and the WhatsApp pack;
- site versions of the stickers (this plan);
- the Magnific catalogue (55 assets), its expiry, and the near-identical ids warning;
- cut-outs and their known defects;
- the Azuki "Relevés" carousel plan, which still assumes faces are absent and needs adapting to Yasser, Kūro and the flame coder;
- the miniature-world carousel script;
- the design-system source;
- Magnific hero clips (not generated yet);
- deploy blocked by GitHub Actions billing;
- the owner answers pending (#11, A3, the §9 questions below).

**1d. Package.** Make three zips (`numidea-private-2026-10-28-{sources,art,deliverables}.zip`) plus a `SHA256SUMS` file. Split any zip over the upload limit.

**1e. Store them durably, never in the public repo.**
- First choice: the owner's Google Drive (the Drive connector is available), in a folder "Numidea private kit / 2026-10-28".
- Fallback: a private GitHub repo the owner creates (for example `Brvetr4ve1er/numidea-private`), attached with push access, with the zips as release assets.
- For convenience, also copy the kit into the git-ignored `/home/user/STICKITTY.INC/campaign/`. Hub sources go to `campaign/hub-art/{src,masters,loops}`. This is a working copy, not durable.

**1f. Public log, with no private content and no machine paths.** Commit to `/home/user/STICKITTY.INC/IMPROVEMENTS.md`:
- a Log row: "checkpoint; deploy blocked by Actions billing; owner answers pending";
- backlog rows:
  - **A11** "Rebuild the hub on the owner's illustrations" (owner request, in progress);
  - **A12** "404 illustration from the empty-state art" (waiting);
  - **F16** "Space Mono unused after A11" (clear-cut).
- Add one line to OWNER-CONTENT.md §12: the 2026-10-28 kit is with the owner as zips, like the campaign kit.

**1g.** Tell the owner in chat: the Drive link plus the §9 questions.

---

## 2. Information architecture

All copy below reuses what the owner has already published on this page. Nothing new is claimed. Proposed titles and captions need his approval (Q7).

| # | Section (id) | What it says | Art (ids, crops) | From the old page |
|---|---|---|---|---|
| 0 | Skip link | "Skip to the work" → `#make` | | the pattern (keys.mjs needs it) |
| 1 | Hero `#hero` (`<header>`) | Breadcrumb "Numidea Labs / VOIDSPLUNKER.std"; eyebrow "Artist · Designer · Developer"; h1 **br4vetr4veler**; "Hamisse Mohamed Yasser"; "form is a function of obsession."; the WorkspaceHQ "NOW PLAYING" cartridge, unchanged | Layered stage: lines and accent layers from `nV5x8JoYQD`; `WDkgWegcXe` split into **Yasser** and **Kūro** layers. Wide crop (full 2752×1536) at ≥1024 px; tall crop `x 1420–2752 × y 0–1536` below that | identity lines, cartridge with the Bit SVG and Press Start 2P, breadcrumb, JSON-LD BreadcrumbList |
| 2 | What I make `#make` | "Design meets code." Three cards:<br>• **Designer**: identity, posters, print → Behance, `#design`<br>• **Developer**: the web and "the systems humming underneath" → GitHub, WorkspaceHQ, LinkedIn<br>• **Artist**: "the process, posted as it happens" → DeviantArt, Instagram, `#collection` | `ksWMyqe16B` cut 01 (drafting a logo), cut 02 (coding; both already in `magnific/cut/`), and a new cut of `6AfFeoKiJO`'s pen-display panel (Kūro on the monitor). Two Kūro cut-outs from `XmUyFdJBfo` as die-cut marginalia | old bio phrases and the old link-group descriptions |
| 3 | Design work `#design` | "Identity. Posters. Print." 12 Behance projects, titles only; "All projects on Behance ↗" | Band `IfONrR5tvE`: heading on its empty left at ≥1024, its right 55% below the heading on smaller screens. Covers `be-00…be-11` (already exported, 438 kB) | Behance tiles without view counts |
| 4 | Studio diary `#collection` | "Yasser and Kūro, after hours." The AI credit line (Q3). Eight prints, each with a title and one line, opening in the `#lb` viewer | Night band `3zEkVHLREY` (bone text on its navy left). Prints in story order: `mEP2bXIhJQ` "4 a.m.", `mEPZBKNhJQ` "Buried", `8aJipYmIrU` "Art director", `WDkg2YLcXe` "The second brain", `P3mQU8C42C` "A world in miniature", `JN8Cg30Oq4` "Morning light", `LwM8kSlswO` "Wandering", `hu42BwkvqL` "tr4veler.exe" (closes on the handle) | `#collection`, `#lb`, `.tile--img`, `data-title`, the keyboard paths |
| 5 | Elsewhere `#links` | "One handle. Every world." Groups Design (Behance, DeviantArt, Pinterest, Tumblr), Code (WorkspaceHQ, GitHub, LinkedIn), Social (Instagram, X, YouTube, Telegram), Contact (the one email). Etsy depends on Q2 | Loop `yasser-perdu` (map, Kūro walking) | the archive's verified handles |
| 6 | Footer `#foot` | "Say hello" + the one email (check 8g); theme pill; © year · VOIDSPLUNKER.std · DZ; the signoff | Loops `yasser-salut` and `kuro-dodo` (the page "falls asleep") | theme pill, year script |

**Removed, and why:**
- **The 33-poster series, the 4 portraits and the epilogue.** They are AI remakes shown with their originals' dates (A10), fan art with open rights (OWNER-CONTENT §10), and a different style. This takes `hub/poses/` and the scroll-driven pose index with it.
- **The view counters and Social highlights.** Hand-updated, low, and named in C5.
- **"STATUS // available for the impossible" and "STUDIO: VOIDSPLUNKER.std × Numidea Labs".** Studio framing (C5).
- **The footer bio "an agency of one … you work directly with me … beats a committee".** It conflicts with the main site's team claim (C5/A3). This is a default to confirm, not a decision taken (Q1).
- **The "coming soon" line, the footer socials row** (it repeats Elsewhere), **the group mask icons, and Space Mono.**
- **Art not used in v1:** pixel sprites (a style mismatch; kept for the 404), set A/B art, generated-label sheets (`yitfTImPW9`, `WDkLIrPcXe`), and the stickers/pins and props sheets (later).

**Owner items:**
- **Resolved on the site:**
  - A10 (the series is gone): decision #18 is superseded.
  - OWNER-CONTENT row 10 (no fan art shown; the files stay in git history).
  - The owner-facts row "A10, C5 Hub fan-art rights" is no longer needed.
- **Partly affected:** C5 stays "waiting". Its evidence lines (`hub/index.html:7-16, :73-78, :334-378, :443, :447, :460-463`) go stale and must be rewritten. Counters and fan art disappear; "agency of one" disappears only once Q1 is answered.
- **Not touched:** decision #11 (the founder card's "Portfolio personnel ↗" at `index.html:1022`) and A3/C3.

---

## 3. Visual system

**Palette.** Both grounds are sampled from the art, so the illustrations melt into the page. Contrast figures were computed against these tokens.

| Token | Light "paper" (default) | Dark "night" |
|---|---|---|
| `--bg` | `#EDD6B9` (the art's paper) | navy sampled from `3zEkVHLREY`'s empty left (about `#0E1522`) |
| `--bg-raised` | `#F4E6D3` | `#162033` |
| `--text` | `#1E1611` (12.7:1) | `#F1E3D0` (14.5:1) |
| `--text-2` | `#5B4535` (6.4:1) | `#B9A892` (7.9:1; 7.05 on raised) |
| `--accent` (links, focus, eyebrow) | `#7A2430` burgundy (7.0:1; bone on it 8.1:1) | `#E59A93` (8.2:1) |
| `--teal` (rare) | `#1F5F5B` (5.2:1) | re-check with the sweep |
| `--line-art` (hero line colour) | `rgba(30,22,17,.62)` | `rgba(241,227,208,.38)` |
| `--rule` | `rgba(30,22,17,.18)` | `rgba(241,227,208,.16)` |

- **Default theme:** paper. Keep the storage key `void-theme`; the inline script becomes `t==='dark'?'dark':'light'`, and `tpSun` starts `aria-pressed="true"`.
- **Bands carry their own ground**, as the cartridge already does. Paper bands always use light tokens; the night band always uses night tokens.
  - In light mode, paper bands are full-bleed and their edges are feathered with a `mask-image` gradient.
  - In dark mode they become inset "prints" (gutter margins, 12 px radius).
- **Type** reuses `assets/fonts/`, which holds Syne, Geist, Geist Mono, Space Mono, Cinzel, Cinzel Decorative and IBM Plex Sans Arabic.
  - **Syne** 700/800 for display; **Geist** 400/500 for body; **Geist Mono** for labels.
  - Geist and Geist Mono are the main site's own files, so visitors coming from the founder card have them cached.
  - Drop Space Mono. Keep `font-display: optional`.
  - Preload `syne-latin` and `geist-latin`. Also preload `geist-latin-ext`, because "Kūro" (U+016B) would otherwise mix fallback and real glyphs within one word.
- **Scale:**
  - h1 Syne 800, about `clamp(38px, 6.4vw, 108px)`, line-height .92, sized to its column with cqw as today;
  - h2 `clamp(32px, 4vw, 60px)`;
  - body 17/1.6, max 62ch;
  - mono labels 12.5 px, tracking .14em.
- **Grid:**
  - 12 columns from 1024 px, 6 columns from 700 to 1023, 4 below;
  - content max 1200 px; gutter `clamp(18px,4vw,64px)`;
  - keep the old CSS's safe-area insets, `94dvh` lightbox, print block, `html{scroll-behavior:auto}` under reduced motion, and the forced-colors fixes.
- **Text over art.**
  - From 1024 px: the text block sits in columns 1–5, on the empty paper of the hero stage and the bands (empty because the art was generated that way). The hero's line art is faded to 35% under the text zone, baked into its mask.
  - Below 1024 px: text first, then the tall crop in a box with a fixed `aspect-ratio` (4/5 under 700 px, 1/1 from 700 to 1023).
- **At 390 px:** breadcrumb, eyebrow, the h1 (about 38 px, one line), name and line, then the stage (about 350×437), then the cartridge. The cartridge starts inside the first screen.
- **At 1440 px:** the stage is full-bleed at 2752/1536, about 804 px tall, so the hero is the first screen.

---

## 4. Motion (inside the audit's limits)

**Hero layers.** Lines (CSS mask on a div), then accents, Yasser and Kūro.
- Every layer is the same box: `position:absolute; inset:-3%; object-fit:cover`, same `object-position`. They stay registered at every crop.
- The stage uses `overflow:clip`.
- Depths reuse `hub/app.js`'s existing engine (old §3), which already settles and writes nothing when idle: `data-parallax` −.03 / −.05 / −.08 / −.12 and `data-depth` 3 / 5 / 9 / 14. Check block 3b parses them.
- The pointer layer only runs on fine pointers. Remove the device-tilt code: it means constant writes while a phone moves, with no intent behind them.

**Entrance (once).** After the Yasser layer decodes, layers rise 12–16 px → 0 over 700 ms, staggered.
- Animate transforms only, never the LCP layer's opacity.
- Gate it on a JS class so that with scripts off the page shows the final state.

**Kūro and Yasser loops.** Three loops: `yasser-perdu` (Elsewhere), `yasser-salut` and `kuro-dodo` (footer). Two die-cut Kūro stills as marginalia.
- **Format: animated WebP, not WebM.** It keeps alpha everywhere, Safari included. The loop count is written into the file; ending on the poster frame needs no JS.
- **Each loop:**
  - frames rotated so the animation starts and ends on the poster frame;
  - 360/480 px;
  - a 6 px bone die-cut border added, so the black cat reads on navy;
  - **total motion ≤ 5 s** (2 plays of a 2.4 s loop, 1 of the 3 s `kuro-dodo`). WCAG 2.2.2 requires a pause control for auto-motion over 5 s, which is why this is "about two" rather than the owner's "about three" (flag).
- **Markup:** `<picture><source media="(prefers-reduced-motion: reduce)" srcset="…-still.webp"><img src="…-still.webp" data-anim="….webp" width height alt="" loading="lazy"></picture>`. An IntersectionObserver (threshold .5) sets `src = data-anim` once.
  - With reduced motion it never observes, so there are no DOM writes (keys.mjs's reduced-motion watch).
  - Without JS the still shows.
  - Width and height are reserved, so there is no layout shift.
- **Keep from today:** the reveal pattern (`html.reveal-armed [data-reveal]` and its focus safety net), the decoded-image fade-in, and the dialog easing (`@starting-style`).
  - Hover: prints lift 2 px with a shadow, 180 ms.
  - Nothing is infinite. Run a static scan to confirm `hub/style.css` has no `infinite`.
- **`hub/app.js` sections:**
  - parallax (old §3, minus tilt);
  - reveal (§3b);
  - entrance (new);
  - loops on view (new);
  - theme (§6, default light);
  - year (§8);
  - lightbox (old §8, with `#lbLink` hidden when a tile has no `data-link`);
  - image fade-in (§9).
  - Delete the dead old §1, §2, §4, §5 and §7.

---

## 5. Asset pipeline

**Stage A: private masters, run once.** A Python tool in the kit: `campaign/hub-art/tools/masters.py`, built on `/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/tools/cutout.py` (rembg with isnet-anime, OpenCV).

1. **Hero figures.** Compare Magnific's cut-out with isnet-anime on the hero and pick the cleaner one. Then:
   - keep the two largest components (Yasser, Kūro) and drop the specks;
   - limit the matte to the inside of the ink outline, which removes the paper fringe;
   - remove the paper colour from semi-transparent edges, since the paper is a known `#EDD6B9`;
   - paint out the badge text inside a recorded rectangle (about x 2374–2456, y 482–506 at source scale) with `cv2.inpaint` (Telea, r=3), using only pixels that differ from the coat colour as the mask. The hexagon N stays.
2. **Line layer.** Ink amount from luminance, from the hero minus the figure mask grown by about 48 px. Chromatic stripes go into a separate RGBA "accents" layer. Fade the lines under the text zone.
3. **Lettering scan.** View every chosen image at 100% of its largest published size. Paint out any legible generated text (coat badges; `WDkg2YLcXe`'s notes; the "Kuro" sheet if `rg0XqHKxtc` is used), or drop the image. Record the rectangles.
4. **QA sheet.** Composite each cut-out on `#000`, the night navy and the paper at 200% and look for fringe.

Masters are pinned by sha256 and archived in the "art" zip.

**Stage B: public, repeatable.** Add `scripts/build-hub-art.mjs` (sharp is already a dev dependency) plus a data-only `scripts/hub-art-data.mjs`.
- Sources are read from `HUB_ART_DIR` or `./campaign/hub-art`. If they are missing it fails with a clear message, like build-creative.
- **Not** part of `npm run build`: CI has no sources, which keeps "build leaves no diff" true.
- Add `"hub:art"` to package.json.
- The recipe holds Magnific ids, expected sizes and sha256s, crop boxes (`wide`, `tall`), widths, quality, paint-out rectangles and loop settings. No signed URLs and no image-model names.
- **What it does:**
  1. checks each source's size and hash;
  2. crops every hero layer with the same box;
  3. encodes WebP (q≈80, effort 6, alpha quality 85; the line mask as alpha-only);
  4. builds the animated WebPs from the sticker renderer's frames (dropped from the zip but rebuilt with the private `render.mjs`; loop count and a ≤5 s assertion);
  5. prints the `srcset` strings and a size table, and fails if a file exceeds the ceilings in check.mjs.
- **Naming:**
  - `hub/art/hero-{lines,accents,yasser,kuro}-{wide,tall}-{w}.webp`
  - `hub/art/band-{design,diary}-{wide,tall}-{w}.webp`
  - `hub/art/make-{designer,developer,artist}-{w}.webp`
  - `hub/art/diary-{4am,buried,…}-{640,960,1600}.webp`
  - `hub/art/be-00…11.webp` (kept)
  - `hub/art/kuro-{sit,paw}-{w}.webp`
  - `hub/loops/{yasser-wave,yasser-lost,kuro-sleep}{,-still}.webp`
- **Width ladders and `sizes`:**
  - hero wide 1280/1920/2560, `sizes="100vw"`; hero tall 640/960/1332;
  - bands 1280/1920 wide and 800/1200 tall;
  - vignettes 480/720/960, `sizes="(min-width:1024px) 360px, (min-width:700px) 45vw, 90vw"`;
  - diary thumbnails 640/960/1280, `sizes="(min-width:1024px) 48vw, 100vw"` (full-row prints 100vw); lightbox `data-full` 1600w.
  - The line mask uses `image-set()` at 1x/2x per media query.
- **Estimated page weight:** about 2.3 MB desktop and 1.6 MB phone on a full scroll, against 3.97 MB today. The published set drops by about 4.5 MB.
- **AVIF:** optional. Only for the 3–4 heaviest prints, and only if it saves 25% or more. It needs `*.avif binary` in `.gitattributes` and a typed `<source>`. WebM is not used on the site.

---

## 6. Gate and documentation changes

- **`scripts/check.mjs`:**
  - **Block 17:** remove the `hub/poses` entry. Set `hub/art` to the new largest file + 10%, dated. Add `hub/loops`. Lower `TOTAL` to the measured size + 10%. The comment changes from "exported by hand" to `scripts/build-hub-art.mjs`.
  - **New block 17b, "hub art and motion"** (and add it to the header list):
    - every `srcset`/`data-full`/`hub/style.css url()` file exists;
    - `width`/`height` attributes equal the file's real size, using the existing `fileSize` reader (VP8X covers animated files);
    - each `NNNw` descriptor equals that file's width, and all candidates share one aspect ratio;
    - `data-w`/`data-h` equal the `data-full` file's size;
    - no unused files in `hub/art` or `hub/loops`;
    - every `img` has an `alt`;
    - no `<video loop>` and no `infinite` in `hub/style.css`;
    - animated WebPs: loop count in the ANIM chunk ≥ 1, and loop count × the sum of frame durations ≤ 5000 ms.
  - **Block 8h:** add "agency of one" to the retired claims only after the owner answers Q1.
- **`scripts/audit.mjs:416, 437-438`:** keep `hub` (light) and `hub m`; replace `hub light m` with `hub dark m` (`init:{'void-theme':'dark'}`); add `hub dark` on desktop. After the full scroll, every `img[data-anim]` must show its animated file. Update the header comment.
- **`scripts/sweep.mjs:36, 61`:** `hub-light` becomes `hub-dark`; add `hub@390` in light and dark.
- **`scripts/keys.mjs`:** `SPEC['hub/index.html']` (line 128) stays `['lightbox']`; update the comments. In reduced-motion runs, add: every `img[data-anim]` still shows its still file after the scroll. Optionally add a hub theme-pill test.
- **`scripts/vbugs.mjs`:** recommended: add hub at 1440/1024/768/390 in both themes, since text over art is where overlaps happen.
- **`scripts/og-capture.mjs`:** add an optional page argument (`node scripts/og-capture.mjs hub`) so `workspacehq/og.jpg` is not rewritten. Re-render `hub/og.jpg` (light, reduced motion, ≤300 kB, 1200×630).
- **CSP:** the theme script edit changes its hash. `npm run build` (build-csp runs last) rewrites the meta, and `bump.mjs` reapplies it. Policy unchanged: images, masks and animated WebPs fall under `img-src 'self'`.
- **Unchanged:** `site.mjs`, the sitemap (one hub URL), `metrics.mjs`.
- **Remove:** `hub/poses/` (and its README), the old `hub/art` posters (`p*`, `tv*`, `imagination*`), `assets/illus/hub-*.png`, `assets/fonts/space-mono-*.woff2`. Rewrite `assets/fonts-hub.css` for Syne, Geist and Geist Mono.
- **Docs:**
  - **`BRAND.md` hub section (~1081–1138):** rewrite it. Keep "the artist's page, not the studio's" and the no-client-sites rule. Add:
    - only set C art on the hub;
    - no generated lettering anywhere (the badge is painted out);
    - the sampled tokens and their contrast figures;
    - bands carry their own ground;
    - hero layers and depths;
    - loops: finite, ≤5 s, settling on the poster frame, still under reduced motion;
    - the pipeline and naming;
    - the hexagon N as a costume detail, not the studio logo (the favicon N stays the mark);
    - what was removed and why.
    - Remove the image-model names it currently lists. Also update the lines about Space Mono (~607–613), the hub masks (~825) and the cartridge (~1469, still true).
  - **`README.md:53`:** the new description, plus `npm run hub:art`.
  - **`knowledge-base/Maps/WorkspaceHQ and hub.md`:** new section table, fonts, scripts, "how it is built". No machine paths: check block 15 rejects them.
  - **`OWNER-CONTENT.md`:** row 10 becomes "no fan art on the site since <date>; still in git history (§12)". Add a section for the hub illustrations (credit wording, Kūro, the insignia).
  - **`IMPROVEMENTS.md`:**
    - A10 becomes "done (superseded) <date, commit>"; decision #18 is answered "superseded";
    - rewrite C5's evidence, status still waiting;
    - A11 done; add decisions #22–#29 (the §9 questions);
    - a Log row with the hub metrics before and after (today: 16.7 phone screens, 76 controls, 3,970,534 B).

---

## 7. Build order (commit locally; push once)

1. **`IMPROVEMENTS.md: checkpoint of the open work; the hub rebuild opened (A11)`**, after step 1. Gate: check.
2. **`tools(hub-art): build-hub-art.mjs and its recipe`.** Gates: check (15c), build leaves no diff.
3. **`gates(hub): both palettes in audit and sweep; 17b reads srcset, data-full and CSS urls; finite animated images`.** Prove it **against the current page** first: it must pass.
4. **`hub: rebuilt on the new illustrations`.** One commit, because the budgets and keys need the whole switch at once:
   - the HTML, CSS and JS;
   - the art export;
   - removal of the old art, poses and masks;
   - `fonts-hub.css`;
   - the block 17 numbers;
   - `npm run build` for the CSP.
   - Gates: full `npm run verify`.
5. **`hub: share card from the new first screen`** (og-capture argument + `hub/og.jpg`). Gate: check.
6. **`fonts: Space Mono goes (no page uses it)`.** Gate: check.
7. **`docs(hub): BRAND, README, knowledge-base map, OWNER-CONTENT, IMPROVEMENTS`.** Gates: check, build.
8. **Owner review.** Send screenshots and the §9 questions. Apply the answers to Q1, Q2 and Q6 before any push.
9. Final `npm run build` (no diff) and `npm run verify`, then **`Bump cache stamps`** (`npm run bump`), then push. The gated Pages deploy runs once billing is restored.
10. **`IMPROVEMENTS.md: the hub rebuild measured live`.**

Commit trailers: keep the session attribution used on every commit. The "no model identifiers" rule applies to the image models in code, docs and commit bodies.

---

## 8. Verification checklist

- **Local gates:** `npm run build && git diff --exit-code`, then `npm run verify`.
  - audit: hub light and dark at desktop and 390; LCP ≤ 1.5 s; layout shift 0; no infinite animations; tap targets; no third-party requests; no CSP violations;
  - sweep: hub, hub-dark, hub@390;
  - keys: lightbox, skip link, focus rings, reduced motion;
  - vbugs; check block 17/17b numbers.
  - Then `npm run metrics` for the hub on phone and desktop.
- **Screenshots** with a git-ignored `_hub-shots.mjs` into `_shots-hub/`:
  - 390×844 and 1440×900 in both themes, full page and first screen;
  - also 768, 1024 (where the layout switches), 844×390, reduced motion, JavaScript off, forced colours, print preview.
- **Art QA:** cut-outs on black, navy and paper at 200%; the lettering scan; each loop's play count measured in Chromium, Firefox and Safari (WebKit).
- **Lighthouse:** `npx --yes lighthouse@<version used by monitor.yml>` against the local server (with `CHROME_PATH` set), mobile and desktop. Targets: LCP ≤ 2.5 s mobile, CLS 0.
- **After deploy:**
  - `AUDIT_BASE=https://brvetr4ve1er.github.io/Numidea.tech AUDIT_ONLY='^hub' node scripts/audit.mjs`;
  - `METRICS_BASE=… npm run metrics`;
  - monitor.yml's stamp check;
  - `npm run links`;
  - a link-preview check of `hub/og.jpg`;
  - old poster URLs returning 404 is expected.

---

## 9. Questions and flags for the owner

1. **Q1 (C5):** ship the hub copy with no team-size claim (recommended), or restore "agency of one / you work directly with me"? Restoring it needs A3's answer.
2. **Q2 (C5):** keep the Etsy link (Bl7nksStudio) in Elsewhere (the current state), or drop it?
3. **Q3 (A10 principle):** wording of the AI credit line, and whether to name the tool. Draft: "Illustrations made with AI image tools."
4. **Q4:** is Kūro a real cat? Until he says so, the copy says only "Kūro, the black cat".
5. **Q5:** the hexagon N on the coat: a costume detail only (default), or adopt it as a mark?
6. **Q6:** confirm dropping the series and the portraits.
7. **Q7:** titles and one-line captions for the 8 diary prints.
8. **Q8:** always paper by default, or follow the OS dark setting?

Also flag:
- the 5-second motion cap versus "about three cycles";
- decision #11 (the "Portfolio personnel" link) stays untouched and still his to make;
- the deploy waits on Actions billing; no bypass.

### Critical Files for Implementation
- /home/user/STICKITTY.INC/hub/index.html
- /home/user/STICKITTY.INC/hub/style.css
- /home/user/STICKITTY.INC/hub/app.js
- /home/user/STICKITTY.INC/scripts/check.mjs
- /home/user/STICKITTY.INC/scripts/build-hub-art.mjs (new, with /home/user/STICKITTY.INC/scripts/hub-art-data.mjs)