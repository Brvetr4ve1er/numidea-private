# Coded motion design: the render pipeline

PRIVATE. Never copy this file, the `pipeline/` folder or anything rendered by it into `/home/user/STICKITTY.INC` (public repository). The pipeline only **reads** the site's assets.

Proven on this machine on 2026-10-26, against the site at commit `82603b0` (2026-10-26 16:57 UTC). Prototype, test MP4s and reports: `/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/marketing/pipeline/`.

---

## 0. Verdict

**Use plain HTML/CSS/JS scenes driven by a deterministic clock, captured frame by frame by Playwright (headless Chromium) and encoded by `ffmpeg-static` (libx264 + AAC).** Do not adopt Remotion.

- **It works end to end here.** A 3-second test renders at 1080x1920 and at 1920x1080, 30 fps, with the site's real fonts (Cinzel, Cinzel Decorative, Geist, Geist Mono, IBM Plex Sans Arabic), one French line, one Arabic right-to-left line, plate II (Arc de Trajan, `assets/illus/arch.webp`) and a silent AAC track. ffprobe confirms H.264 High, yuv420p, BT.709, AAC-LC 48 kHz stereo, 90 frames, 3.000 s, and `moov` before `mdat` (faststart).
- **Speed:** about **4.2 s of render time per second of video** per output at 1080x1920 on this 4-CPU machine (median of 3 runs). A 30 s reel takes about 2 minutes, a 60 s explainer about 4 minutes.
- **Why not Remotion:** it installs and renders fine here, at the same speed. But it is free only for a company of **3 people or fewer** (contractors count), it means rewriting the brand in React with a webpack build (419 MB of dependencies against 166 MB), and it gives us nothing we need for an organic programme of a few videos a month.
- **Why the plain pipeline fits:** the videos read the site's own `themes.css`, `fonts.css` and engravings over HTTP. The six themes, the luminance-mask plates, the right-to-left rules and the Arabic typography rules carry over to the videos without being copied. Its three dependencies are open-source licensed (playwright-core Apache-2.0; ffmpeg-static GPL-3.0-or-later; @ffprobe-installer LGPL-2.1, whose binary is GPL-3.0), with no team-size terms, and every render is checked automatically.

---

## 1. What was tried

### 1.1 A full ffmpeg (H.264 + AAC)

The only ffmpeg already on the machine is Playwright's (`/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux`). It encodes VP8 only, so it can't produce MP4s for social platforms.

| Source | Installs here? | ffmpeg version | libx264 | aac | Notes | Kept? |
|---|---|---|---|---|---|---|
| `ffmpeg-static@5.3.0` (npm) | yes, 6 s | 7.0.2 static (johnvansickle build, GPLv3) | yes | yes (native) | Its install script downloads the binary from a GitHub release. That worked through the proxy today. | **Yes, primary** |
| `imageio-ffmpeg` (PyPI, in `pipeline/.venv`) | yes, 13 s | 7.0.2 static, the same build | yes | yes | Binary ships inside the wheel, so no GitHub download is needed. 105 MB venv. | **Yes, automatic fallback** (`lib/bin.mjs`) |
| `@ffmpeg-installer/ffmpeg@1.1.0` (npm) | yes, 3 s | git N-47683, built 2018 | yes | yes | Binary ships inside the npm package, but it is 8 years old. | No (removed) |
| Remotion compositor `@remotion/compositor-linux-x64-gnu@4.0.539` (npm, 27 MB) | yes | n7.1 (custom build) | yes | yes (+ libfdk_aac) | Only usable through Remotion. | Evaluation only |

None of the standalone ffmpeg packages ships **ffprobe**. `@ffprobe-installer/ffprobe@2.1.2` (79 MB, ffprobe git N-66595 from 2023) is used. `ffprobe-static@3.1.0` also works, but it is 351 MB (it bundles every platform) and its ffprobe is 4.0.2, so it was removed.

**Chromium:** `/opt/pw-browsers` holds build 1194 (Chromium 141.0.7390.37), as a headless shell and as a full browser. The repo's Playwright 1.61.1 expects build 1228, so the pipeline installs `playwright-core@1.61.1` (no browser download) and always passes the executable path explicitly (`lib/bin.mjs`). Everything can be overridden with `FFMPEG_PATH`, `FFPROBE_PATH`, `CHROMIUM_PATH` and `SITE_ASSETS`.

### 1.2 Remotion: licence and install

**Install:** `remotion`, `@remotion/renderer`, `@remotion/bundler` 4.0.539 and React 18.3.1 install from npm in 23 s (183 packages, 419 MB), compositor included. The same 3-second test was rebuilt as a Remotion composition (`pipeline/remotion-eval/`). It renders with this machine's headless shell (no browser download needed) and passes the same ffprobe checks.

**Licence**, quoted from `node_modules/remotion/LICENSE.md` (the version installed):

> You are eligible to use Remotion for free if you are: an individual · **a for-profit organization with up to 3 employees** · a non-profit or not-for-profit organization · evaluating whether Remotion is a good fit, and are not yet using it in a commercial way.
>
> You are required to obtain a Company License to use Remotion if you are not within the group of entities eligible for a Free License.

The licence FAQ (remotion.dev/docs/license/faq, read 2026-10-26 through a page summary; re-read it before relying on it) adds:

- A one-person company qualifies: "Even if you are incorporated, you can operate under the Free License", provided headcount is 3 or less.
- Agencies and contractors: "their headcount aggregates with yours for the 4-person threshold".
- Company licence: "Remotion for Creators" costs "$25/month per person who writes Remotion code themselves or using agentic coding tools". "Remotion for Automators" costs "$0.01 per render, with a minimum spend of $100/month". When both apply, the combined minimum is $100/month.
- Telemetry: "For server-side rendering, there is no automatic telemetry". In the installed code, a usage event is sent only when a licence key is passed (`@remotion/renderer/dist/render-media.js`, the `licenseKey === null` branch).
- Remotion 5.0 announces a licence change that makes telemetry mandatory for Automators customers.

**Consequence for a studio of 1 to 4 people:** free while the real headcount, including regular freelancers, is 3 or fewer. At 4, it costs at least $25/month per person writing video code. This is about the studio's actual headcount for the licence, not a marketing claim; team size stays off every public text.

---

## 2. The test renders

All files are in `pipeline/out/`, with the full machine-readable report in `pipeline/out/test-3s.report.json`.

| File | Size | Bitrate | Render (wall) | Checks |
|---|---|---|---|---|
| `test-3s__9x16__fr.mp4` (1080x1920) | 1.94 MB | 5.28 Mb/s | 12.3–13.3 s | all pass, determinism 7/7 |
| `test-3s__16x9__fr.mp4` (1920x1080) | 1.83 MB | 4.99 Mb/s | 11.5–12.0 s | all pass, determinism 7/7 |
| `out/langs/test-3s__{9x16,16x9}__{ar,en}.mp4` | 1.8–1.9 MB | | 11.9–12.6 s | all pass, determinism 7/7 |
| `out/audio-test/test-3s__16x9__fr.mp4` (music-bed path, sine test tone) | 1.9 MB | | 10.9 s | all pass; −13.5 LUFS integrated (target −14); fade-out measured |

Review stills of frame 45 are saved next to each MP4 (`*__f045.png`, `*__f060.png`).

Raw ffprobe output (`@ffprobe-installer` ffprobe):

```
test-3s__9x16__fr.mp4
codec_name=h264|profile=High|width=1080|height=1920|pix_fmt=yuv420p|color_space=bt709|color_transfer=bt709|color_primaries=bt709|r_frame_rate=30/1
codec_name=aac|profile=LC|sample_rate=48000|channels=2
duration=3.000000|size=1981414|bit_rate=5283770
box order (ffprobe -v trace): ftyp @0 > moov @40 > free @4494 > mdat @4502   (faststart)
```

Every render is verified automatically (`lib/verify.mjs`). The render fails if any check fails:

1. **Container and streams:** h264, High profile, yuv420p, exact size, 30/1 fps, exact frame count (decoded, not estimated), BT.709 tags, AAC 48 kHz stereo, duration ±0.05 s.
2. **Faststart:** read from the file's top-level box headers. `moov` must come before `mdat`.
3. **Colour:** decoded MP4 frame 45 against the browser's own PNG of frame 45. Mean shift per channel must be under 1.5/255 (measured 0.03–0.21). This catches the classic BT.601/BT.709 mismatch, which would shift brass and teal.
4. **Frame accuracy:** MP4 frame 45 must match browser frame 45 better than frames 44 and 46 (measured 36.7 dB vs 32.4 / 33.4 dB), and PSNR must be at least 32 dB. This catches stale, dropped or shifted frames.
5. **Safe area:** on the last frame, every caption (`[data-cap]`) and every element marked `[data-safe]` must be inside the platform safe area. A negative test (`npm run test:safe`) proves the check catches an element pushed 400 px out.
6. **Fonts and plates:** the render refuses to start if any declared face fails `document.fonts.check()` or any plate fails to decode. The report lists the woff2 files actually fetched: Cinzel 700, Cinzel Decorative 700, Geist 400/500/700, Geist Mono 400, Plex Arabic 600/700 (Arabic and Latin subsets).
7. **Determinism (`--determinism`):** a fresh page re-captures 7 frames in scrambled order (45, 0, 89, 7, 45, 1, 88). Every one must be bit-identical to the main pass.
8. **Copy lint** (`npm run lint`, run before `npm test`): flags the do-not-claim list (team size, "6 ans", plural France clients, React/Next.js/Vercel, Nomara, crypto, "open source", testimonials, percentages) and any file containing Arabic without the « à relire par un arabophone natif » marker. A negative sample trips all five rules it contains.

The Arabic strings in the test are quoted from the site (`assets/app.js`: `hero.title`, `pl.arch`, hero label). They are « à relire par un arabophone natif », and the test video prints that on screen in its top label, together with "TEST DE RENDU" and the frame counter. The test files are not deliverables.

---

## 3. Render speed

Measured on this VM (4 vCPU, 15 GB, CPU steal about 1%), 9:16 1080x1920, 3 s / 90 frames, median of 3 runs interleaved (`pipeline/out/bench/bench2.json`):

| Setting | Total per 3 s video | Wall s per video second | Capture fps |
|---|---|---|---|
| headless shell, PNG frames, **4 workers, x264 slow** (default) | **12.6 s** | **4.2** | 8.7–9.0 |
| same, x264 medium | 12.3 s | 4.1 | 8.3–9.1 |
| full Chromium instead of headless shell | 13.4 s | 4.5 | 8.4–8.7 |
| 1 worker | 17.6 s | 5.9 | 5.8–6.0 |
| JPEG frames (quality 92), x264 medium (draft mode) | 9.1 s | 3.0 | 12.6–13.8 |
| *Remotion 4.0.539, concurrency 4, x264 slow* | *14.7 s (+13.8 s webpack bundle once per batch)* | *4.9* | |

Notes:
- **The browser's PNG capture is the bottleneck.** x264 encodes while frames arrive and finishes about 1.5 s after the last one. Verification adds about 3.7 s per 3 s file (it decodes every frame), roughly proportional to length.
- An earlier one-off benchmark series came out **2x slower** with nothing else running. Budget **2x** on these figures when planning.
- JPEG frames are about 30% faster, but they compress the frame twice (PSNR 35.7 vs 36.7 dB on the same frame). Use them for drafts only.
- Measured on a simple scene. Scenes with large screenshots or many layers will be slower, and each new video's report records its own timing.

**Re-measured 2026-10-26 (V01 build session, same VM, nothing else rendering):** the 3 s test took 10.2–12.8 s at 9:16 and 9.4–10.0 s at 16:9 (3.1–4.3 s per video second, 4 workers, PNG, x264 slow), all verify OK and determinism 7/7. V01 S1 alone (4.0 s, `cut=s1`, three masked plate layers, SVG blueprint, stars) took 7.6 s at 9:16 and 7.2 s at 16:9 (about 1.9 s per video second, capture 20–22 fps). V01 S2 (`cut=s2`, 7.83 s, the mock-up and its mirror) took 9.0 s at 9:16 and 8.3 s at 16:9 (capture 31–34 fps); S3 (`cut=s3`, 5.17 s, two coins, a texture) 7.9 s and 7.2 s (capture 24–28 fps). Under load from other sessions the same S2 render took 41 s and 37 s (capture 6–7 fps). The planning figures below stay as the budget.

**Planning figures** (per output, default settings): 15 s reel ≈ 1 min · 30 s ≈ 2 min · 60 s explainer ≈ 4 min · 90 s ≈ 6.5 min. A 30 s spot in 3 languages × 3 ratios (9 files) takes about 19 min, or about 40 min with the 2x margin.

---

## 4. How the pipeline works

```
pipeline/
  package.json          3 dependencies, pinned: playwright-core 1.61.1, ffmpeg-static 5.3.0, @ffprobe-installer/ffprobe 2.1.2
  render.mjs            CLI: one video file -> MP4 per ratio x language, verified, plus report.json
  lib/server.mjs        static HTTP server; mounts the site's assets/ READ-ONLY at /site/
  lib/bin.mjs           finds ffmpeg / ffprobe / Chromium (env overrides, PyPI fallback)
  lib/encode.mjs        frames on stdin -> H.264 High yuv420p BT.709 + AAC 48 kHz, +faststart
  lib/verify.mjs        ffprobe + box order + colour/frame-accuracy checks
  runtime/scene.js      the clock: window.__scene, seek(t), site easing curves, ratios + safe areas, preview player
  runtime/components.js caption system, plate reveal, rise, reading-direction wipe, fade
  brand/base.css        imports /site/fonts.css + /site/themes.css; stage, safe area, Arabic rules, plate and caption-chip styles
  videos/test-3s.html   the test: ONE file for every ratio, language and theme
  copy/                 one copy dictionary per video (trailer.json = scripts-trailer.md Appendix A)
  runtime/copy.js, fit.js, layout.js, atlas.js, blueprint.js   shared V01+ components (§5.2)
  runtime/founder.js    founder card, no face (the monogram « Y » in its ring; V01 S4, V10-s30 N)
  runtime/endcard.js    the series end card's marks: the wordmark, the pointer per placement (V01 S5)
  runtime/mockup.js     « Votre site » mock-up + right-to-left mirror (V01 S2)
  videos/v01.html + v01.js   V01 « L'atlas », all five scenes (no cut = the 30 s master; ?cut=s1|s2|s3|s4|s5|s1-s3|s4-s5
                        renders a window of the master's clock)
  tools/                copy-lint, benchmarks, determinism probe, safe-area negative tests,
                        snap.mjs (stills + fit/safe report, no encode), contact-sheet.mjs
  remotion-eval/        Remotion comparison only (can be deleted: 419 MB)
  .venv/                imageio-ffmpeg fallback (can be deleted if ffmpeg-static stays installable)
```

**The clock.** A video is a pure function of time. The page exposes `window.__scene` (`duration`, `fps`, `frames`, `seek(t)`, `ready()`, `safeCheck()`). There are two ways to animate, and both can be seeked:
- JS updaters: `scene.on((t) => …)`, using `prog(t, t0, t1, ease)`. The easing curves are the site's own (`--ease-out` = `cubic-bezier(.16,1,.3,1)` and the others in `styles.css`).
- CSS `@keyframes`: on every seek, each Web Animation is paused and its `currentTime` set to `t`. CSS *transitions* are switched off in render mode because they run on the wall clock.

The page never reads `Date.now()` or `performance.now()`. The same URL without `&render` opens a preview player in any browser (space: play/pause; ←/→: one frame).

**The capture loop.** N browser pages (default 4) each load the video. Frames are dealt round-robin (page k renders k, k+N, …). Each frame is `seekFrame(n)` then CDP `Page.captureScreenshot` (PNG, `optimizeForSpeed`). Frames go to ffmpeg's stdin strictly in order. A worker may run at most 3N frames ahead of the encoder, so memory stays flat for long videos.

The CDP screencast is **not** used: it emits frames on the compositor's own schedule, which can skip or duplicate frames.

Chromium flags: `--force-color-profile=srgb`, `--font-render-hinting=none`, `--disable-lcd-text` (no colour fringes to compress), `--disable-partial-raster`, plus the background-throttling switches.

**URL parameters** of every video: `?ratio=9x16|16x9|4x5|1x1 &lang=fr|en|ar &theme=<any of the six site themes> &guides` (draws the safe area). The renderer passes extra ones with `--params k=v,k=v` (V01: `cut=s1|s2|s3|s4|s5|s1-s3|s4-s5|full`, `pointer=li`; a cut is a whole-frame window of the master's clock, so its frame n is the master's frame first + n), and names files with `--name` / `--tag` (`v01__9x16__fr__li__silent.mp4`); `--contact 0,36,99` adds a contact sheet decoded from the MP4.

### 4.1 Determinism: what broke here, and the rules that came out of it

The first renders were **not** repeatable: 3 of 7 re-captured frames differed. Here is what the investigation found:

1. **`will-change` makes it worse: up to 112 levels of difference.** Chromium rasterises a promoted layer once and rescales the bitmap, so a frame's pixels depend on which frames were painted before it. **Rule: never use `will-change` in a video.**
2. **An identity transform left at the end of an animation** (`translateY(0px)`, `opacity: 1`) produced a 1-level antialiasing difference in 4 bytes, depending on paint history. GPU flags, the full browser vs the headless shell, and `--disable-partial-raster` made no difference. **Rule: when an animation has settled, clear the property** (`transform: ''`). The shared components do this, and re-captures became bit-identical (8/8 in `tools/det-flags.mjs`, 7/7 in every render since).
3. No wall clock, no unseeded randomness, no CSS transitions (disabled in render mode).
4. Serve over HTTP, never `file://`: Chromium silently blocks CSS masks and webfonts there (as BRAND.md records for the site).
5. **Fonts must be proven loaded** before frame 0 (`ready()` loads and checks every declared face). A frame in a fallback face is a different design.
6. **Images are decoded at raster time, never later** (`--disable-checker-imaging`, added 2026-10-26). By default Chromium may paint a large image as a blank placeholder until an asynchronous decode lands, so a frame could depend on machine load. V01 S2 at 16:9 once failed determinism on f100 and f101 (the first captures of two workers, Plate I on screen) in a render where capture fell to 7 fps under other sessions' load; it could not be reproduced on demand (6 busy loops), and with the flag the renders are byte-identical to those without it, so it changes no correct pixel. `CHECKER_IMAGING=1` restores Chromium's default, for diagnosis only.
7. Not yet covered: a `<video>` element inside a scene, such as a screen recording, is not seeked by this loop. Use stills or an image sequence instead.
8. **Warm every page before its first capture** (`lib/warm.mjs`, added 2026-10-27). The plates are CSS masks whose `url()` is set by script at `ready()`, and Chromium can attach such an image AFTER a page's first paint of it, even when the same file was decoded through `new Image()`: V01 16:9 master f100 once painted Plate I's fills without its ink (106 levels; 1 in 64 fresh-page first captures under load), and the S4 cut's last frame once lost Plate V's ink on the probe page that painted it first. `--disable-checker-imaging` does not cover it (nothing is attached yet to decode). Every capturing page (`render.mjs` workers and determinism probe, `crop45.mjs`, `v01-stills.mjs`, `v01-preflight.mjs`) now paints the video's warm frames (`scene.warmAt()`: one frame per group of image plates, inside the window of the cut being rendered) until three rounds in a row are pixel-identical, and refuses to capture otherwise. **Rule: a video declares, with `warmAt()`, a frame for every image it shows, inside every cut.**
9. **Never change an element's transform frame by frame while it carries a clip-path** (found 2026-10-27). Plate V's beam turned with `scaleX()` under the wedge's `clip-path`; 16:9 f699 then came out 31 pixels different (2 levels, at the lamp) depending on whether the page had painted two consecutive beam frames before it, even with one page and one worker. Removing either the transform or the clip-path removed the dependence. The beam's turn is now geometry (`atlas.js` lighthouse(): width and left in %, the polygon and gradient mirrored for the second half), and `tools/v01-slice.mjs` captures whole windows of frames ascending on one fresh page and descending on another, so a frame that depends on its neighbours shows up. A translate-only transform with a clip-path (the coins' drift during their wipe) tested independent of history.
10. **Quantise animated translations to 1/64 px** (found 2026-10-27). At the end of the coins' eased drift (S3, the last ~20 frames before the exit) the coin moved by less than 1/64 px per frame; Chromium then did not raster it again, and the frame kept the pixels of whichever neighbour the page had painted first (16:9 f442–f449, up to 12 levels, coin-horse). `atlas.js` `setTransform()` and `components.js` `typeMove()` now put translations on Chromium's own 1/64 px layout unit, so two frames either share a value exactly or differ by a step that is repainted. Scale settles tested clean near their ends. The determinism slice covers the drift's end.

---

## 5. The scene library

### 5.1 Principles

- **One file per video** (`videos/<id>.html`): markup plus timeline. The same file renders every ratio, language and theme. Layout per ratio is CSS under `html[data-ratio=…]`; logical properties and the page `dir` mirror the layout for Arabic.
- **Brand from the site, never copied:** tokens, faces and engravings are read live from `/site/` (read-only mount). Each report records the site commit it was rendered from. To freeze a campaign, render it and keep the report.
- **Copy outside the markup:** one dictionary per video, `{ key: { fr, en, ar } }`. It moves to `copy/<id>.json` with a `src` reference per string (`app.js:21`, facts-bank § …) and `arReviewed: false` until a native speaker signs off.
- **Every number comes from the site.** Prices, package names and Aperçu conditions are quoted from `assets/app.js` with the facts-bank wording rules (« env. … HT », "about … excl. tax", «نحو … غير شاملة الضريبة» [à relire par un arabophone natif]). A check script should compare video copy with `app.js` before each batch, like the site's own checks.

### 5.2 Shared components

| Component | Status | What it does | RTL behaviour | Conditions |
|---|---|---|---|---|
| **Plate reveal** `plate()` | built, used in the test | Engraving from `assets/illus` as a luminance mask over `currentColor` (the site's `.ill` technique, re-inked by the theme). Wipe in reading direction, led by a brass "burin" rule, with a slow 1.06→1 settle. Caption chip in the site's `.pl-cap` style. | The wipe runs right to left; the artwork is never mirrored. | Plates stay large: BRAND.md says they collapse below about 90 px on the site; in video keep them at least 300 px wide. The tomb in plate I is never captioned as the Medracen. |
| **Caption system** `applyCaptions()` + `rise()` / `wipe()` / `fade()` | built | Fills every `[data-cap]` in the video's language; `data-cap-lang` forces another language on one element. Each element gets its own `lang`/`dir`, so bidi, Plex Arabic and "no letter-spacing on Arabic" follow the text. Reveal in reading direction. | Automatic | On-screen text is the voice (no voiceover). Hold each caption long enough to read at phone size. |
| **Scene splices and the 4:5 window** `overlapCheck()` (runtime/scene.js), `cropCheck()` (V01) | built 2026-10-27 | `overlapCheck()`: blocks marked `data-scene` that belong to different scenes must never be painted on shared rows within 200 px (the visible part after the wipe's clip), so no frame splices two headings at a scene change. `cropCheck()`, in renders laid out for the 4:5 crop (`pointer=li`, `frame=45`): every decoration plate wholly inside the y 90–1440 window or wholly outside it. Both run on every frame in `tools/v01-preflight.mjs`; negative tests in `tools/safe-negative-v01.mjs` | | |
| **Safe areas** `RATIOS` + `safeCheck()` + `?guides` | built; **per block since 2026-10-26** | Per-ratio safe area as CSS variables. The check runs on every checkpoint a video declares (`scene.checkAt()`: each block's settled entrance, each scene's last frame) plus the last frame. Every painted text block (`[data-copy]`, `[data-cap]`) and key visual (`[data-safe]`) must sit inside the safe area **and inside its own layout box** (`data-box`), its text runs included (horizontal advance, line boxes vertically). Negative tests: `npm run test:safe`. | The same band in every language (9:16) | 9:16: x 140–940, y 290–1240 (t290 r140 b680 l140) for every language until TikTok's RTL safe-zone file is checked; 16:9: x 120–1800, y 80–960 (the bottom 120 px stay free for the player); 4:5 and 1:1: 90 px. Re-check against each platform's current overlay spec before a production batch. |
| **Screenshot browser frame** | to build | A real client screenshot (`assets/work/…`) in a browser or phone frame, with a slow scroll (translateY of a tall capture) and a cursor. | Frame chrome mirrors; the screenshot does not. | **Only after the client has agreed** (OWNER-CONTENT.md §6; not asked yet). AlmaFlowClim: no address bar showing its domain as live (the domain now serves another site). Nomara: never. Glaive Store is labelled a demo. WorkspaceHQ is the founder's own product. |
| **Price card** | to build (deferred slot module) | Package (Essentiel / Studio / Moteur, maintenance) with its public range. **The figures are wiped in, never counted up** (a count-up shows figures the studio does not charge). | Western digits in Arabic; ranges never wrap apart (BRAND.md). | Ranges from `app.js` only, with the facts-bank wording. DA reference; € / $ rounded as on the site; **no AED or SAR** (none exist on the site). |
| **Timeline** (the Aperçu in 5 working days) | to build | Steps drawn as a dimension line that fills over time. | Runs right to left. | Never without its conditions: registered businesses only, at most 4 a month, free and without obligation, "5 jours ouvrés à réception de vos contenus". |
| **End card** | to build | The series card: wordmark, label, motto, a pointer per placement; the call to action only after Gate B. **No URL, email, phone number or ref code on screen**: links and `?ref=` codes live in captions, descriptions and bios. | | Measurement uses only the site's `?ref=` / `utm` attribution and platform insights. No payment methods on screen. |
| **Music bed** | built (`--audio`); `bed.mjs --dur` added 2026-10-27 | Trimmed to the video, 1.2 s fade-out, loudness-normalised to about −14 LUFS, AAC 48 kHz. Default is a silent AAC track. `music-lab/bed.mjs --dur <s>` makes a bed of exactly that length (V01: `--bars 8.5 --dur 30 --seed 7`, ledger M-0003; the last chord holds under the end card and releases over the last 3.3 s). Without `--dur` the prototype beds re-render bit for bit. | | **Music written in code** (`music-lab/bed.mjs`, music.md) is the default and is allowed; generated (AI) audio is not. Library tracks only under the narrow exceptions in PLAN.md §6. |
| **Copy loader** `runtime/copy.js` | built 2026-10-26; layout rules 2026-10-27 | Layout rules that never change a string: `NOBREAK` keeps fixed phrases on one line (FR « sur mesure », EN « web developer »), and `markSeparatorBreaks()` hides a `data-keep` separator left at a line break (`visibility`, so nothing reflows). Every on-screen string from `copy/<id>.json` with its fact ID (`data-src`). Refuses before frame 0: a missing key or language, a deferred or gated block, a block whose `use` does not name the cut, an unreviewed Arabic string in render mode (unless `&ardraft`, which stamps the frame), and any string matching the cut's forbidden patterns (V01: URL, email, phone, price figure, the Aperçu, a call to action). | `lang`/`dir` per element | Arabic waits for gate G1 |
| **Fit-text** `runtime/fit.js` | built 2026-10-26 | Largest size in the role's range (scripts-trailer.md §3.2) that fits the block's box in its maximum lines, 1 px steps down to the floor; below the range min is reported; **no size ≥ floor fails the render**. Per-block caps where the script measured smaller (V01 T40 header ≤ 72 px). Measured once on a hidden clone. | Arabic +12 %, line-height 1.5 | |
| **Layout** `runtime/layout.js` | built 2026-10-26 | Per-ratio tables of boxes in canvas px; `place()` records `data-box` for the safe check. | `_mirror` reflects every box for Arabic (16:9 columns); `_fixed` boxes (artwork) never move | |
| **Atlas** `runtime/atlas.js` | built 2026-10-26 | The brass grid (theme tokens); `inkIn()` / `wipeState()` reading-direction wipes with the burin rule; **Plate I** (`vista()`): three layers whose skyline clip-paths, fills and inks are read at `ready()` from `/site/styles.css` through a constructed stylesheet that is never applied; `sky()`: seeded stars and the site's constellation drawn on the clock. Plates are checked against ≤ 1.0× their source width. | Wipes run right to left; artwork never mirrored | |
| **Blueprint** `runtime/blueprint.js` | built 2026-10-26 | The homepage outline in 3 px `--crimson` strokes, drawn path by path (`pathLength="1"`); re-laid per frame when it glides to another box, so the stroke stays 3 px. `retire`: the inner strokes are clipped away behind the mock-up's fill edge (same window, curve and direction), so a stroke never crosses the text that replaces it; the frame, chrome line, dots and address bar stay as the mock-up's outline. | The clip follows the reading direction | |
| **Mock-up + mirror** `runtime/mockup.js` | built 2026-10-26 (V01 S2) | « Votre site »: the blueprint's 800 × 500 page filled with theme surfaces (`--navy` page, `--plum` chrome, cards and hatched image block, an unlabeled `--crimson` button, grey bars in `--faint`), the F25 placeholders and the F31 tab row from the copy dictionary. Three states: the master's language shows its placeholders, the others show one grey bar per line of that text, the same width; a `--crimson` underline slides to the active tab. The Arabic state sets `dir="rtl"` and every block glides to its mirrored place (0.6 s, layout only, no transform); look-alike blocks (the cards, their bars) take the nearest mirrored place, so the cards stay and only their bars glide, and a block crossing another on its row yields with the overlap (the logo slot fades under the tab row, the image dims under the text column; 2026-10-27). Text slots are fitted (picture-text roles `mockHead` 40–56 px, `mockLabel` 26–32 px, floors 34 / 22) and shrink to their text, so a mirrored slot lands flush. | AR master: FR and EN as grey bars, the Arabic placeholders only in the mirrored state | Never called an Aperçu, never a client site; never morphs into a screenshot |
| **Coin turn** `coin()` in `runtime/atlas.js` | built 2026-10-26 (V01 S3) | Plate III: a coin inks in (wipe + burin), turns once on the clock (1.2 s; the face scaled by abs(cos θ), so the engraving is never mirrored and no 3D layer is promoted), overshoots a few degrees and settles; own ink strength and drift per depth. A circular mask from the coin's measured rim removes the sliver of a third coin's rim (coin-king, never shown) at the top edge of `coin-horse.webp` and `coin-palm.webp`. | Drift runs against the reading direction | 300 px, settle 1.06: 318 px ≤ the 320 px source |
| **Founder card** `founderCard()` in `runtime/founder.js` | built 2026-10-27 (V01 S4) | The site's stand-in (`.fd-photo`): the monogram « Y » (Geist 700, `--crimson-text`) on the site's disc (`--grad-noir`, brass highlight) inside a 3 px ring in `--crimson` that draws itself from 12 o'clock (`pathLength="1"`). The block spans the band, so it wipes in and out on the same edge as the band's text (in on the S3 exit's edge at 15.33). The « Y » is a mark with its source (F17), not copy. | The roundel sits at the inline start; the ring draws anticlockwise | **No photo, drawing or figure, ever**; never `coin-king.webp` |
| **End card marks** `buildWordmark()`, `pointerFor()` in `runtime/endcard.js` | built 2026-10-27 (V01 S5) | The wordmark (F20): « Num » + « idea » + « Labs » in `--font-logo` (Cinzel 700 .04em in Arcanum), « idea » in `--font-swash` and `--teal-text`, the **solid** `--crimson` cursor (0.41 × 0.91 em, no blink), 88 px (fit-text role `wordmark` proves it fits its box). The pointer: « Lien en bio »; `pointer=li` « Lien en commentaire » (refused for a language with no `_li` string); none in 16:9 or `story=1`. The label, motto and pointer are copy blocks; `data-keep="·"` keeps each segment of a two-line label whole, so it breaks at its separator, never inside « Bordj Bou Arréridj ». | Wordmark always left to right, at the band's start | No CTA unless `cta=1` after Gate B (T13 is gated in the copy loader); no URL, email, phone or ref code |
| **Plate V** `lighthouse()` + `readBeamStyles()` in `runtime/atlas.js` | built 2026-10-27 (V01 S5) | The lighthouse inks in (wipe + burin, settle 1.06 → 1); its beam is the site's `.pi-light .beam` (position on the lamp, size, brass wedge, clip-path, opacity read live from `/site/styles.css`, never applied) and makes ONE half turn on the clock (scaleX = cos πq, an even sine-eased turn, never thinner than the site's .05), from inland to over the sea, then rests. The plate's box clips the beam; its edges are feathered per ratio | The artwork is never mirrored (the site flips the plate in RTL; the videos do not) | |
| **Type move** `typeMove()` in `runtime/components.js` | built 2026-10-26 | A block re-set from one size and box to another word by word (V01 T40 hook → header); horizontal and vertical moves on different eases so words changing line never cross. | Works in both directions | |

### 5.3 Batch rendering to every ratio and language

```
node render.mjs videos/<id>.html --ratios 9x16,4x5,16x9 --langs fr,ar,en [--theme arcanum] [--audio music/<track>.m4a]
-> out/<id>__<ratio>__<lang>.mp4 (+ review stills, + <id>.report.json with timings, fonts, checks)
```

Suggested channel presets, from the owner's decisions of 2026-10-26 (to wire as `--preset`):

| Channel | Languages | Ratios |
|---|---|---|
| Algeria: Facebook / Instagram | fr, ar | 9:16 (Reels, Stories), 4:5 (feed) |
| France: Instagram / LinkedIn | fr only (the facts bank applies the French-language rule to France) | 9:16, 4:5, plus 1:1 or 16:9 for LinkedIn |
| Gulf: Instagram / TikTok | ar, en | 9:16, 4:5 |
| YouTube + site embed | fr, ar, en | 16:9 (explainers), 9:16 (Shorts) |

**Before any publication:** `npm run lint` passes; a person has checked the script against the facts bank; Arabic is signed off by a native speaker; client permission is recorded for every screenshot shown; the report says verify OK.

---

## 6. Install and reproduce

```bash
cd /tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/marketing/pipeline
npm install                       # playwright-core, ffmpeg-static (fetches its binary from a GitHub release), ffprobe
# fallback if that download is ever blocked: python3 -m venv .venv && .venv/bin/pip install imageio-ffmpeg
npm test                          # copy lint + 9:16 and 16:9 French test, stills, determinism, verify
npm run test:langs                # Arabic and English versions
npm run test:safe                 # proves the safe-area check catches an overflow
npm run bench                     # speed, 5 settings x 3 runs (about 4 min)
```

Preview while authoring: run any static server on the pipeline folder that also maps `/site/` to the site's `assets/` (or import `lib/server.mjs`), then open `videos/<id>.html?ratio=9x16&lang=ar`.

The existing WorkspaceHQ trailer (`workspacehq/embed/`) already derives its animation from a single `time` value (`useTime`) and listens for a seek event. In principle it could be rendered through this loop with a small adapter. **Not tested.**

---

## 7. Open questions and limits

1. **Music:** which library, and with which licence for commercial use on Facebook, Instagram, TikTok, LinkedIn and YouTube? Business accounts have narrower in-app music rights on some platforms; check each one. Generated music is excluded by the standing rule.
2. **Client permission** for screenshots in videos: OWNER-CONTENT.md §6, not yet asked. Until then, videos use plates, type, prices and the founder's own product.
3. **Remotion only matters if chosen:** if the owner ever prefers it (timeline studio, embeddable player), the deciding fact is the real headcount including freelancers.
4. **Safe-area values** must be re-checked against current platform specs. The 4:5 and 1:1 layouts are defined in the runtime but not yet designed in a video.
5. **Speed was measured on a simple scene.** Heavy scenes will be slower; each report records its own timing.
6. **`ffmpeg-static` fetches its binary from GitHub at install.** It works today. If blocked, `lib/bin.mjs` falls back to the PyPI binary (same 7.0.2 build) or `FFMPEG_PATH`.
7. The ffmpeg static builds are GPLv3 (`node_modules/ffmpeg-static/ffmpeg.LICENSE`). Running them to produce videos places no terms on the videos. Redistributing the pipeline with the binary would carry the GPL.
8. The masters are high quality (CRF 18, about 5 Mb/s at 1080p30) and every platform re-encodes on upload. If a platform's version looks soft, try CRF 16 before anything else.
