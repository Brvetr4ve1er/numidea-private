# V01-30 « L'atlas » — French and English masters, render report

PRIVATE. Never copy this folder, or anything in it, into `/home/user/STICKITTY.INC`.

- **What:** the 30 s brand launch trailer, French and English masters, 900 frames at 30 fps, Arcanum throughout (scripts-trailer.md §4; PLAN.md §9). Coded motion design only: HTML/CSS/JS scenes on a deterministic clock, captured frame by frame by headless Chromium, encoded by ffmpeg (libx264 + AAC).
- **This round:** the reviewers' nine issues of 2026-10-27 were each checked against the files; the real ones are fixed in the scene code and every file was rendered again (§1). The English master is new. The previous round's outputs are kept, unchanged, in `_review/v01-round1/out-v01/` for comparison.
- **Page:** `pipeline/videos/v01.html` + `pipeline/videos/v01.js` (all five scenes; no `cut` = the 30 s master). Copy: `pipeline/copy/trailer.json` (Appendix A). Batch: `pipeline/tools/render-v01-master.sh` (`npm run v01:master`); this report: `pipeline/tools/v01-report.mjs`.
- **Rendered:** batch started 2026-10-27 03:12:34 UTC (timings in §9), against the site at `076c991 2026-10-26 22:48:08 +0000` (assets read only, mounted at `/site/`). Toolchain: ffmpeg version 7.0.2-static (libx264 `chroma-qp-offset=-4`, native AAC); ffprobe version N-66595-gc2b38619c0-static; Chromium headless shell 141.0.7390.37; 4 CPUs; renders run one after another.
- **Default = the silent files.** The owner has not done the listening test (P3 / G5), so the `music-s7` files are previews with the code-made bed (`bed.mjs --bars 8.5 --dur 30 --seed 7`, ledger M-0003). Same picture, bit for bit (§6).
- **Not rendered:** Arabic (waits for the native reviewer, G1; the page lays it out and an AR render refuses to start without `arReviewed`).
- **Verdict:** every check below passes.

## 1. The review of 2026-10-27: each issue, checked, and what was done

| # | Issue (severity) | Checked against the files | Decision | What changed | Measured after (encoded files) |
|---|---|---|---|---|---|
| 1 | f0 and the default YouTube thumbnail are the hook alone on an empty grid (major) | Confirmed: round-1 9:16 f0 decodes 1.95 % of pixels off the ground (16:9 1.29 %); the 1280×720 YouTube thumbnail was made from f0, not from f300 as §4.6 says | **Fixed** | Plate I is set (inked) at f0 and the blueprint's brass browser outline (frame, chrome line, dots, address bar) is drawn at f0; only the page's inner parts draw over 0.10–2.60 and the plate drifts (`v01.js` T.bpPreset, `blueprint.js` preset). The YouTube thumbnail is now made only from the 16:9 f300 (`stills/v01__16x9__{fr,en}__yt-thumb-1280x720__f300.png`); no f0 YouTube thumbnail is produced | 9:16 f0: 14.73 % of pixels off the ground (f90: 16.72 %); 16:9 f0: 15.45 %; 4:5 f0: 4.01 % (in the 4:5 window Plate I sits below the frame: f0 there is the hook and the outline). A loop from f899 now returns to the hook, the plate and the drawing |
| 2 | The 16:9 hook breaks inside « sur mesure » (major) | Confirmed (round 1: « VOTRE SITE SUR / MESURE, ») | **Fixed** | A no-break rule at render time (`runtime/copy.js` NOBREAK, `applyNobreak()`): the phrase's words are wrapped in a `white-space: nowrap` span; the string is unchanged (the loader checks `textContent`). The same class of break was found in the new EN master (« Graphic designer & web / developer ») and is fixed the same way (« web developer ») | Hook lines read from the page: 16:9 FR « Votre site / sur mesure, », 9:16 FR « Votre site / sur mesure, », 16:9 EN « Custom / websites, »; T31 EN 9:16 « Graphic designer & / web developer · Founder ». Fit-text: 16:9 hook 96 px, 2 lines; safe box clean (§5) |
| 3 | Scene-change wipes splice the outgoing and incoming headings (major) | Confirmed: T42, the founder card and the wordmark entered on the exit's own wipe edge, in shared rows | **Fixed** | Each exit now ends on the scene boundary and the next scene's first block enters on it: S2 out 10.33–10.67 (f310–320), T42 in from 10.67 (f320–338); S3 out 15.00–15.33, founder card from 15.33; S4 out 22.33–22.67, wordmark from 22.67 (f680–698). The entrances keep §4.1's beats (the 10.67 chord, the 22.67 end-card chimes); each exit starts half a beat earlier than §4.1's "Out" time. A new check, `scene.overlapCheck()`, fails any frame where blocks of two scenes share rows within 200 px, and runs on all 900 frames of every variant | 0 spliced frame(s) in 6 variants × 900 frames (§5); the negative tests force T42 in at f315 and the wordmark in at f675 and both are caught. Frame-by-frame strips decoded from the masters: `review/v01__9x16__fr__s2s3__f306-f341.png`, `review/v01__16x9__fr__s2s3__f306-f341.png`, `review/v01__9x16__en__s2s3__f306-f341.png`, `review/v01__16x9__en__s2s3__f306-f341.png`, `review/v01__9x16__fr__s3s4__f446-f481.png`, `review/v01__9x16__en__s3s4__f446-f481.png`, `review/v01__9x16__fr__s4s5__f666-f701.png`, `review/v01__16x9__fr__s4s5__f666-f701.png`, `review/v01__9x16__en__s4s5__f666-f701.png`, `review/v01__16x9__en__s4s5__f666-f701.png` |
| 4 | The 4:5 crop cuts faq3 and Plate V into fragments; carousel slides 2 and 5 (major) | Confirmed (round 1: faq3's top at y 1265–1350 of the crop; Plate V's lantern alone in the corner) | **Fixed** | A layout for the crop (`v01.js` CROP45), used by the `pointer=li` source of the LinkedIn 4:5 and by the Instagram carousel stills (`frame=45`): faq3 is not shown (only 200–240 px of free height under the mock-up inside the window, below §3.4's 300 px minimum for a plate); Plate V 800×433 at y 1000–1433 under the end card, its rocks running off the right edge; the workbench 740×413 at y 1012–1425. `scene.cropCheck()` fails any frame where a plate crosses the window's edge | 0 plate(s) cut, all 900 frames of both pointer=li variants (§5). Carousel slides 2 and 5 re-exported (FR and EN, IG and LinkedIn) and the PDF rebuilt |
| 5 | The brass grid decodes as neutral grey; no --atmos glows or grid mask (minor) | Confirmed for the colour: round-1 9:16 f0 line (+4, +5, +4.88) over the ground (neutral). Tested: 2 px lines alone at half opacity still decoded neutral (+4.39/+4.39/+4.39); the loss is x264's chroma quantisation of a 1–2 code tint, not only 4:2:0 | **Fixed (colour); the glows and mask declined** | Grid lines 2 px wide on even pixel coordinates at the token's own 7 % (`brand/base.css` .grid), and the encoder quantises chroma 4 steps finer (`lib/encode.mjs` X264_PARAMS `chroma-qp-offset=-4`). Declined: the site's --atmos glows and its top-weighted grid mask. §4.1 sets the ground as --void with the brass grid at 64 px and 7 % for the whole trailer; the mask would remove the grid from the 9:16 band's lower half and the 16:9 lower third; and wide dark radial gradients band in 8-bit 4:2:0. It is a look change for the owner to ask for (§11) | Decoded line minus ground: 9:16 (+8.66, +5.07, +1.96), 16:9 (+7.56, +5.6, +2.01), 4:5 (+8.83, +5.2, +2.02); the browser frame (+8, +5.51, +1): brass (R rises most, B least). Bitrate of the silent masters: 9:16 FR 1756 kb/s (round 1: 1609), 16:9 FR 1495 kb/s (round 1: 1353); the frames changed too, so this is not the chroma setting alone (measured alone on the same 300 frames: +6.3 %) |
| 6 | T50 and T51 end line 1 on their « · » (minor) | Confirmed | **Fixed** | The separator is its own span; once laid out, a separator left at a line break is hidden with `visibility` so nothing reflows (`copy.js` markSeparatorBreaks); the string is unchanged | 9:16 FR T50 « Studio web & logiciel / Bordj Bou Arréridj, Algérie », T51 « Enraciné en Numidie / bâti sur des idées »; 16:9 FR T50 « Studio web & logiciel / Bordj Bou Arréridj, Algérie »; EN 9:16 T50 « Web & software studio / Bordj Bou Arréridj, Algeria », T51 « Rooted in Numidia / built on ideas » |
| 7 | The mirror glide moves every block straight through the others; the three cards stack into one (minor) | Confirmed (round 1 f238–f240) | **Fixed** | Look-alike blocks take the nearest mirrored place: the three cards stay put and only their bars glide to the other side of each card; where a block must cross another on its row, the one behind yields with the overlap: the logo slot fades under the tab row, the hatched image dims to 28 % under the text column (`runtime/mockup.js`). Positions still come from the clock, layout only | Glide destinations: image 470->40; card1 40->40; card2 285->285; card3 530->530; button 40->590. Strips f226–f251: `review/v01__9x16__fr__mirror__f226-f251.png`, `review/v01__16x9__fr__mirror__f226-f251.png`, `review/v01__9x16__en__mirror__f226-f251.png`, `review/v01__16x9__en__mirror__f226-f251.png` |
| 8 | The LinkedIn PDF pages are 0.54 pt taller than their painted area (minor) | Confirmed (MediaBox 1013.04 pt, content painted from the top over 1012.5 pt). The suggested box [0 0 810 1012.5] alone would not have fixed it: the content was drawn down from y 1013.04, so the strip at the bottom would have stayed unpainted | **Fixed** | The PDF is written by the pipeline (`tools/v01-stills.mjs` writePdf), not printed by Chromium: each page is exactly 810 × 1012.5 pt with MediaBox = CropBox = [0 0 810 1012.5], one image drawn over the whole box, the slide PNG's own pixels | FR: 5 pages; [0 0 810 1012.5], painted 810 x 1012.5 pt from (0, 0); EN: 5 pages; [0 0 810 1012.5], painted 810 x 1012.5 pt from (0, 0) (re-read and checked page by page; the image streams inflate to the PNGs' bytes) |
| 9 | The 4:5 crop cuts the S2 and S5 engravings and the S1 constellation (minor; the same as 4) | Partly confirmed: faq3 and Plate V, as in 4. Not confirmed for the constellation: it spans y 1290–1412, inside the window (round 1 and now); only single stars fall either side of y 1440, and Plate I (the ground) lies below the window | **Fixed** with 4; the constellation needed no change | As 4; the constellation's lines and nodes are in `cropCheck()` | As 4 |

Also found and fixed while rendering this round: **a fresh page could paint an engraving's first frame without its ink.** The S2 review cut failed its determinism check (6/7) on its f0 = master f100 (16:9); reproduced on 1 of 64 fresh-page first captures under load: Plate I's fills painted, its ink missing (106 levels, x 264–1658, y 749–1079). The plates are CSS masks whose url() is set by script, and Chromium can attach the image after the first paint. Since Plate I is now on screen from f0, every worker's first frame was exposed. Every capturing page now paints the video's warm frames until three rounds in a row are pixel-identical before it captures (`lib/warm.mjs`, in `render.mjs`, `crop45.mjs`, `v01-stills.mjs`, `v01-preflight.mjs`): 0 differences in 64 captures under the same load. A second run then failed on the S4 cut's last frame (f699, 16:9), where Plate V starts to ink in but none of that cut's warm frames showed it; the warm frames are now one per group of image plates, clamped into each cut's own window (`v01.js` WARM; pipeline.md §4.1 rule 8). A third run failed on the same S4 frame for another reason: **Plate V's beam came out 31 pixels different (2 levels, at the lamp) depending on the frames painted before it**, even with one page and one worker. The beam turned with the site's `scaleX()` under its wedge `clip-path`; removing either property removed the dependence. The turn is now drawn as geometry (`atlas.js` lighthouse(): the box's width and left in %, the polygon and the gradient mirrored for the second half), the same shape at every phase (compared with round 1's frames), and the coins' translate-plus-wipe tested independent of history (pipeline.md §4.1 rule 9). Then the new determinism slice found **16:9 EN f442–f449 differing between the ascending and descending passes**: at the end of the coins' eased drift the coin moved by less than 1/64 px per frame, Chromium did not raster it again, and the frame kept the pixels of whichever neighbour the page had painted first (coin-horse, up to 12 levels). Animated translations are now quantised to Chromium's 1/64 px layout unit (`atlas.js` setTransform, `components.js` typeMove; pipeline.md §4.1 rule 10); tested clean in both orders, and the scale settles tested clean near their ends. The failed runs were stopped before any deliverable was kept, and everything was rendered again from the top. A determinism slice now captures whole windows of consecutive frames in ascending and descending order on two fresh pages (`tools/v01-slice.mjs`): 9x16 fr f0–f12 13/13; 9x16 fr f226–f251 26/26; 9x16 fr f306–f345 40/40; 16x9 fr f666–f735 70/70; 16x9 en f380–f481 102/102; 9x16 fr f380–f459 80/80; 9x16 en li f676–f760 85/85; 9x16 fr f0–f899 900/900. This round: 88 pages warmed, 3–4 rounds each; determinism 7/7 on every render (§4).

## 2. Deliverables

| File | What | Where it goes | Size | Render time | Checks |
|---|---|---|---|---|---|
| `v01__9x16__fr__silent.mp4` | 9:16 FR, silent track (the default until the listening test) | Instagram / Facebook Reel, YouTube Short (FR) | 6.28 MB | 54.25 s (capture 49.12 s at 18.3 fps; verify 19.62 s) | ffprobe pass; verify pass |
| `v01__9x16__fr__music-s7.mp4` | 9:16 FR, code-made bed seed 7 (preview) | the same, once the owner has listened (G5) | 7.46 MB | 53.49 s (capture 47.55 s at 18.9 fps; verify 9.97 s) | ffprobe pass; verify pass; loudness pass |
| `v01__16x9__fr__silent.mp4` | 16:9 FR, silent track, no pointer | YouTube upload and channel trailer | 5.35 MB | 51.85 s (capture 46.15 s at 19.5 fps; verify 16.67 s) | ffprobe pass; verify pass |
| `v01__16x9__fr__music-s7.mp4` | 16:9 FR, code-made bed seed 7 (preview) | the same, once the owner has listened (G5) | 6.53 MB | 49.81 s (capture 44.54 s at 20.2 fps; verify 10.64 s) | ffprobe pass; verify pass; loudness pass |
| `v01__4x5__fr__li__silent.mp4` | 4:5 FR LinkedIn, crop y 90-1440 of the 9:16 pointer=li render, silent | the founder's LinkedIn | 4.12 MB | source render 52.23 s + crop/encode 12.04 s (verify 13.98 s) | ffprobe pass; verify pass |
| `v01__4x5__fr__li__music-s7.mp4` | 4:5 FR LinkedIn, crop of the 9:16 pointer=li music render (preview) | the same, once the owner has listened (G5) | 5.30 MB | source render 48.93 s + crop/encode 11.87 s (verify 8.15 s) | ffprobe pass; verify pass; loudness pass |
| `v01__9x16__en__silent.mp4` | 9:16 EN, silent track (the default until the listening test) | TikTok EN, Instagram Reel, YouTube Short EN | 6.20 MB | 51.29 s (capture 45.97 s at 19.6 fps; verify 17.85 s) | ffprobe pass; verify pass |
| `v01__9x16__en__music-s7.mp4` | 9:16 EN, code-made bed seed 7 (preview) | the same, once the owner has listened (G5) | 7.38 MB | 52.36 s (capture 47.05 s at 19.1 fps; verify 9.53 s) | ffprobe pass; verify pass; loudness pass |
| `v01__16x9__en__silent.mp4` | 16:9 EN, silent track, no pointer | YouTube upload (EN) | 5.30 MB | 49.08 s (capture 44.2 s at 20.4 fps; verify 18.91 s) | ffprobe pass; verify pass |
| `v01__16x9__en__music-s7.mp4` | 16:9 EN, code-made bed seed 7 (preview) | the same, once the owner has listened (G5) | 6.48 MB | 47.08 s (capture 42.35 s at 21.3 fps; verify 9.69 s) | ffprobe pass; verify pass; loudness pass |
| `v01__4x5__en__li__silent.mp4` | 4:5 EN LinkedIn, crop y 90-1440 of the 9:16 pointer=li render, silent | the founder's LinkedIn | 4.02 MB | source render 50.88 s + crop/encode 11.02 s (verify 12.54 s) | ffprobe pass; verify pass |
| `v01__4x5__en__li__music-s7.mp4` | 4:5 EN LinkedIn, crop of the 9:16 pointer=li music render (preview) | the same, once the owner has listened (G5) | 5.20 MB | source render 49.84 s + crop/encode 11.18 s (verify 7.83 s) | ffprobe pass; verify pass; loudness pass |

Intermediate files in `src/`: the 9:16 `pointer=li` renders the 4:5 files are cropped from (`v01__9x16__{fr,en}__li__{silent,music-s7}.mp4`, verified like the masters, not for posting: they are laid out for the crop and their pointer reads « Lien en commentaire » / "Link in comments").

Contact sheets (12 frames each, decoded from the encoded MP4: f0, every scene's first and settled frame, f899): `v01__9x16__fr__silent__contact.png`, `v01__16x9__fr__silent__contact.png`, `v01__4x5__fr__li__silent__contact.png`, `v01__9x16__en__silent__contact.png`, `v01__16x9__en__silent__contact.png`, `v01__4x5__en__li__silent__contact.png`. Frames: f0 (S1 first: the hook, Plate I, the blueprint outline), f90 (S1 settled), f100 (S2 first), f200 (state 1, the master's placeholders), f300 (state 3, mirrored), f320 (S3 first: S2 cleared, T42 wipes in), f450 (S3 settled), f460 (S4 first: the card wipes in), f670 (S4 settled), f680 (S5 first: the wordmark wipes in), f890 (S5 settled), f899 (last frame, held). The music files have the same picture (§6), so they share these sheets.

Review strips (`review/`, every frame decoded from the silent masters, cropped to the region under review): `review/v01__9x16__fr__s2s3__f306-f341.png`, `review/v01__9x16__fr__s3s4__f446-f481.png`, `review/v01__9x16__fr__s4s5__f666-f701.png`, `review/v01__9x16__fr__mirror__f226-f251.png`, `review/v01__16x9__fr__s2s3__f306-f341.png`, `review/v01__16x9__fr__s4s5__f666-f701.png`, `review/v01__16x9__fr__mirror__f226-f251.png`, `review/v01__9x16__en__s2s3__f306-f341.png`, `review/v01__9x16__en__s3s4__f446-f481.png`, `review/v01__9x16__en__s4s5__f666-f701.png`, `review/v01__9x16__en__mirror__f226-f251.png`, `review/v01__16x9__en__s2s3__f306-f341.png`, `review/v01__16x9__en__s4s5__f666-f701.png`, `review/v01__16x9__en__mirror__f226-f251.png`.

Review stills saved by the renderer next to each file (`…__f239.png` silent, `…__f500.png` music): the browser's own PNG of the frame the colour and frame-accuracy checks compare against.

## 3. Independent ffprobe pass (every MP4)

Run by this report, separately from the renderer's verify: `ffprobe -count_frames` (frames decoded and counted, not estimated) and the file's top-level box order read from the box headers.

| File | Video | Size | fps (r / avg) | Frames | Duration (format / video / audio) | Audio | Box order | Result |
|---|---|---|---|---|---|---|---|---|
| `v01__9x16__fr__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1756 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__9x16__fr__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 2086 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `v01__16x9__fr__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1495 kb/s total | 1920x1080 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__16x9__fr__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1825 kb/s total | 1920x1080 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `v01__4x5__fr__li__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1151 kb/s total | 1080x1350 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__4x5__fr__li__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1482 kb/s total | 1080x1350 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `v01__9x16__en__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1733 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__9x16__en__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 2064 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `v01__16x9__en__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1481 kb/s total | 1920x1080 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__16x9__en__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1812 kb/s total | 1920x1080 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `v01__4x5__en__li__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1125 kb/s total | 1080x1350 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `v01__4x5__en__li__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1455 kb/s total | 1080x1350 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `src/v01__9x16__fr__li__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1542 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `src/v01__9x16__fr__li__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1872 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |
| `src/v01__9x16__en__li__silent.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1521 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 2 kb/s | ftyp > moov > free > mdat | pass |
| `src/v01__9x16__en__li__music-s7.mp4` | h264 High, yuv420p, bt709/bt709/bt709, 1851 kb/s total | 1080x1920 | 30/1 / 30/1 | 900 | 30.000 / 30.000 / 30.000 s | aac LC, 48000 Hz, 2 ch, 332 kb/s | ftyp > moov > free > mdat | pass |

Required: h264, yuv420p, 30/1 fps, 900 frames, faststart (`moov` before `mdat`), an AAC track, 30.000 s.

## 4. The renderer's verify (per file) and determinism

| Check | `9x16__fr__silent` | `9x16__fr__music-s7` | `16x9__fr__silent` | `16x9__fr__music-s7` | `4x5__fr__li__silent` | `4x5__fr__li__music-s7` | `9x16__en__silent` | `9x16__en__music-s7` | `16x9__en__silent` | `16x9__en__music-s7` | `4x5__en__li__silent` | `4x5__en__li__music-s7` |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H.264 High, yuv420p, size, 30/1, 900 frames, BT.709 tags, AAC 48 kHz stereo, ±0.05 s | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| faststart (moov before mdat) | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| colour: MP4 frame vs browser PNG, mean shift < 1.5/255 | pass (0.04, 0.04, -0.74) | pass (0.02, 0.04, -0.81) | pass (0.05, 0.02, -0.74) | pass (0.05, 0.02, -0.81) | pass (0.05, 0.04, -0.7) | pass (0.06, 0.05, -0.74) | pass (0.04, 0.04, -0.73) | pass (0.01, 0.04, -0.81) | pass (0.05, 0.02, -0.74) | pass (0.04, 0.02, -0.81) | pass (0.07, 0.05, -0.68) | pass (0.07, 0.06, -0.74) |
| PSNR ≥ 32 dB vs the browser frame | pass (39.92 dB) | pass (42.16 dB) | pass (40.63 dB) | pass (42.12 dB) | pass (39.16 dB) | pass (40.61 dB) | pass (39.84 dB) | pass (42.38 dB) | pass (40.54 dB) | pass (42.31 dB) | pass (39.04 dB) | pass (40.51 dB) |
| frame accuracy: closest to its own browser frame, not n±1 | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| safe area + own box, per block, on every checkpoint | pass (37 frames) | pass (37 frames) | pass (36 frames) | pass (36 frames) | on its 9:16 source render | on its 9:16 source render | pass (37 frames) | pass (37 frames) | pass (36 frames) | pass (36 frames) | on its 9:16 source render | on its 9:16 source render |
| 4:5: 9:16 band inside the 4:5 safe area; audio copied unchanged | n/a | n/a | n/a | n/a | pass | pass | n/a | n/a | n/a | n/a | pass | pass |
| no page errors | pass | pass | pass | pass | n/a (crop) | n/a (crop) | pass | pass | pass | pass | n/a (crop) | n/a (crop) |

Determinism (a fresh, warmed page re-captures 7 frames in a scrambled order: the middle frame twice, f0, f1, f7, f898, f899; every one must be bit-identical to the main pass):
- `v01__9x16__fr__silent.mp4`: 7/7 identical
- `v01__16x9__fr__silent.mp4`: 7/7 identical
- `v01__9x16__en__silent.mp4`: 7/7 identical
- `v01__16x9__en__silent.mp4`: 7/7 identical
- `src/v01__9x16__fr__li__silent.mp4`: 7/7 identical
- `src/v01__9x16__en__li__silent.mp4`: 7/7 identical
- `v01__9x16__fr__music-s7.mp4`: 7/7 identical
- `v01__16x9__fr__music-s7.mp4`: 7/7 identical
- `v01__9x16__en__music-s7.mp4`: 7/7 identical
- `v01__16x9__en__music-s7.mp4`: 7/7 identical
- `src/v01__9x16__fr__li__music-s7.mp4`: 7/7 identical
- `src/v01__9x16__en__li__music-s7.mp4`: 7/7 identical
- the ten per-scene review cuts in `checks/`: v01-s1__9x16__fr 7/7, v01-s1__16x9__fr 7/7, v01-s2__9x16__fr 7/7, v01-s2__16x9__fr 7/7, v01-s3__9x16__fr 7/7, v01-s3__16x9__fr 7/7, v01-s4__9x16__fr 7/7, v01-s4__16x9__fr 7/7, v01-s5__9x16__fr 7/7, v01-s5__16x9__fr 7/7

## 5. Text and layout checks: copy lint, fonts, fit-text, the safe box per block, scene splices, the 4:5 crop

- **Copy lint** (`tools/copy-lint.mjs`, the do-not-claim net over `videos/` and `copy/`): clean (the batch stops otherwise). The copy loader also refuses, before frame 0, any V01 string that matches a URL, an email, a phone number, a price figure, the Aperçu or a call to action, a gated or deferred block, or a block whose `use` does not name `v01-30`.
- **Fonts** proven loaded before frame 0 (`document.fonts.check()` on every declared face; the render refuses otherwise): 700 120px "Cinzel" ok; 700 76px "Cinzel Decorative" ok; 700 113px "IBM Plex Sans Arabic" ok; 600 56px "IBM Plex Sans Arabic" ok; 400 52px "Geist" ok; 500 52px "Geist" ok; 600 52px "Geist" ok; 700 48px "Geist" ok; 500 46px "Geist Mono" ok. Faces fetched from `/site/fonts/`: `cinzel-700-latin.woff2`, `geist-latin.woff2`, `cinzel-decorative-700-latin.woff2`, `ibm-plex-sans-arabic-700-arabic.woff2`, `ibm-plex-sans-arabic-700-latin.woff2`, `ibm-plex-sans-arabic-600-arabic.woff2`, `ibm-plex-sans-arabic-600-latin.woff2`, `geist-mono-latin.woff2`.
- **Plates decoded** before frame 0: `vista-far.webp` ok, `vista-mid.webp` ok, `vista-near.webp` ok, `faq3.png` ok, `px-contour.webp` ok, `coin-horse.webp` ok, `coin-palm.webp` ok, `bench.webp` ok, `lighthouse.webp` ok; then the warm-up (§1). Never shown above 1.0× their source width, settle included (9:16: far 0.713, mid 0.609, near 0.76, faq3 0.994, contour 1, coin_horse 0.994, coin_palm 0.994, bench 0.771, light 0.964; crop layout: bench 0.713, light 0.771).
- **Fit-text** on every block (the largest size in the role's range that fits its box in its maximum lines; no size at or above the floor fails the render):

| Block | 9:16 FR | 16:9 FR | 9:16 FR li | 9:16 EN | 16:9 EN | 9:16 EN li |
|---|---|---|---|---|---|---|
| T40 / hook | 120 px, 2 lines, box 800x340 (84–120, floor 84) ok | 96 px, 2 lines, box 780x220 (76–96, floor 76) ok | 120 px, 2 lines, box 800x340 (84–120, floor 84) ok | 120 px, 2 lines, box 800x340 (84–120, floor 84) ok | 96 px, 2 lines, box 780x220 (76–96, floor 76) ok | 120 px, 2 lines, box 800x340 (84–120, floor 84) ok |
| T40 / header | 65 px, 1 line, box 800x110 (56–72, floor 52) ok | 63 px, 1 line, box 780x96 (56–72, floor 48) ok | 65 px, 1 line, box 800x110 (56–72, floor 52) ok | 72 px, 1 line, box 800x110 (56–72, floor 52) ok | 72 px, 1 line, box 780x96 (56–72, floor 48) ok | 72 px, 1 line, box 800x110 (56–72, floor 52) ok |
| T41 | 78 px, 3 lines, box 800x260 (56–96, floor 52) ok | 78 px, 3 lines, box 780x260 (56–88, floor 48) ok | 78 px, 3 lines, box 800x260 (56–96, floor 52) ok | 78 px, 3 lines, box 800x260 (56–96, floor 52) ok | 78 px, 3 lines, box 780x260 (56–88, floor 48) ok | 78 px, 3 lines, box 800x260 (56–96, floor 52) ok |
| M01 | 32 px, 1 line, box 240x48 (26–32, floor 22) ok | 32 px, 1 line, box 240x48 (26–32, floor 22) ok | 32 px, 1 line, box 240x48 (26–32, floor 22) ok | 32 px, 1 line, box 240x48 (26–32, floor 22) ok | 32 px, 1 line, box 240x48 (26–32, floor 22) ok | 32 px, 1 line, box 240x48 (26–32, floor 22) ok |
| M02 | 51 px, 1 line, box 410x92 (40–56, floor 34) ok | 51 px, 1 line, box 410x92 (40–56, floor 34) ok | 51 px, 1 line, box 410x92 (40–56, floor 34) ok | 56 px, 1 line, box 410x92 (40–56, floor 34) ok | 56 px, 1 line, box 410x92 (40–56, floor 34) ok | 56 px, 1 line, box 410x92 (40–56, floor 34) ok |
| M03 | 32 px, 1 line, box 320x48 (26–32, floor 22) ok | 32 px, 1 line, box 320x48 (26–32, floor 22) ok | 32 px, 1 line, box 320x48 (26–32, floor 22) ok | 32 px, 1 line, box 320x48 (26–32, floor 22) ok | 32 px, 1 line, box 320x48 (26–32, floor 22) ok | 32 px, 1 line, box 320x48 (26–32, floor 22) ok |
| T42 | 96 px, 2 lines, box 800x300 (56–96, floor 52) ok | 88 px, 2 lines, box 780x300 (56–88, floor 48) ok | 96 px, 2 lines, box 800x300 (56–96, floor 52) ok | 96 px, 2 lines, box 800x300 (56–96, floor 52) ok | 88 px, 2 lines, box 780x300 (56–88, floor 48) ok | 96 px, 2 lines, box 800x300 (56–96, floor 52) ok |
| T09 | 48 px, 1 line, box 800x110 (46–56, floor 44) ok | 46 px, 1 line, box 780x110 (40–48, floor 40) ok | 48 px, 1 line, box 800x110 (46–56, floor 44) ok | 48 px, 1 line, box 800x110 (46–56, floor 44) ok | 46 px, 1 line, box 780x110 (40–48, floor 40) ok | 48 px, 1 line, box 800x110 (46–56, floor 44) ok |
| T30 | 80 px, 1 line, box 800x105 (56–80, floor 52) ok | 80 px, 1 line, box 780x100 (56–80, floor 48) ok | 80 px, 1 line, box 800x105 (56–80, floor 52) ok | 80 px, 1 line, box 800x105 (56–80, floor 52) ok | 80 px, 1 line, box 780x100 (56–80, floor 48) ok | 80 px, 1 line, box 800x105 (56–80, floor 52) ok |
| T31 | 56 px, 2 lines, box 800x150 (52–56, floor 52) ok | 52 px, 2 lines, box 780x135 (48–52, floor 48) ok | 56 px, 2 lines, box 800x150 (52–56, floor 52) ok | 56 px, 2 lines, box 800x150 (52–56, floor 52) ok | 52 px, 2 lines, box 780x135 (48–52, floor 48) ok | 56 px, 2 lines, box 800x150 (52–56, floor 52) ok |
| T32 | 72 px, 2 lines, box 800x180 (52–72, floor 52) ok | 64 px, 2 lines, box 780x160 (48–64, floor 48) ok | 72 px, 2 lines, box 800x180 (52–72, floor 52) ok | 72 px, 1 line, box 800x180 (52–72, floor 52) ok | 64 px, 1 line, box 780x160 (48–64, floor 48) ok | 72 px, 1 line, box 800x180 (52–72, floor 52) ok |
| wordmark | 88 px, 1 line, box 800x110 (88–88, floor 80) ok | 88 px, 1 line, box 780x110 (88–88, floor 80) ok | 88 px, 1 line, box 800x110 (88–88, floor 80) ok | 88 px, 1 line, box 800x110 (88–88, floor 80) ok | 88 px, 1 line, box 780x110 (88–88, floor 80) ok | 88 px, 1 line, box 800x110 (88–88, floor 80) ok |
| T50 | 52 px, 2 lines, box 800x170 (46–52, floor 44) ok | 48 px, 2 lines, box 780x150 (40–48, floor 40) ok | 52 px, 2 lines, box 800x170 (46–52, floor 44) ok | 52 px, 2 lines, box 800x170 (46–52, floor 44) ok | 48 px, 2 lines, box 780x150 (40–48, floor 40) ok | 52 px, 2 lines, box 800x170 (46–52, floor 44) ok |
| T51 | 52 px, 2 lines, box 800x130 (46–52, floor 44) ok | 48 px, 2 lines, box 780x120 (40–48, floor 40) ok | 52 px, 2 lines, box 800x130 (46–52, floor 44) ok | 52 px, 2 lines, box 800x130 (46–52, floor 44) ok | 48 px, 2 lines, box 780x120 (40–48, floor 40) ok | 52 px, 2 lines, box 800x130 (46–52, floor 44) ok |
| T52 | 52 px, 1 line, box 800x90 (46–52, floor 44) ok | — | 52 px, 1 line, box 800x90 (46–52, floor 44) ok | 52 px, 1 line, box 800x90 (46–52, floor 44) ok | — | 52 px, 1 line, box 800x90 (46–52, floor 44) ok |

- **Kept together at render time** (NOBREAK; strings unchanged): FR T40 « sur mesure »; EN T31 « web developer ». **Separators hidden at a break:** 9x16 FR T50 1, T51 1; 16x9 FR T50 1, T51 1; 9x16 EN T50 1, T51 1; 16x9 EN T50 1, T51 1.
- **Safe box, per block.** 9:16: every text block (`[data-copy]`) and key visual (`[data-safe]`) inside x 140–940, y 290–1240 **and** inside its own layout box (text runs included); 16:9: x 120–1800, y 80–960 plus the column boxes.
  - the renderer, on the checkpoint frames the page declares (each block's settled entrance, each scene's last frame, the halfway point of every wipe, the last frame): 9x16 fr 37 frames, 0 violation(s); 16x9 fr 36 frames, 0 violation(s); 9x16 en 37 frames, 0 violation(s); 16x9 en 36 frames, 0 violation(s); 9x16 fr li 37 frames, 0 violation(s); 9x16 en li 37 frames, 0 violation(s);
  - the preflight sweep, on **every** frame (900 per variant, wipes and moves in flight included): 9x16:fr 0; 16x9:fr 0; 9x16:fr:li 0; 9x16:en 0; 16x9:en 0; 9x16:en:li 0 violation(s).
- **Scene splices** (`scene.overlapCheck()`, every frame): 9x16:fr 0; 16x9:fr 0; 9x16:fr:li 0; 9x16:en 0; 16x9:en 0; 9x16:en:li 0 spliced frame(s).
- **The 4:5 crop** (`scene.cropCheck()`, every frame of the renders laid out for it): 9x16:fr:li 0; 9x16:en:li 0 plate(s) cut by the y 90–1440 window. The 9:16 band lands at x 140–940, y 200–1150 of the crop, inside its 90 px safe area, so the per-block 9:16 check carries over.
- **Negative tests** (`tools/safe-negative-v01.mjs`): blocks pushed out of the band or squeezed out of their box in S1–S5, a heading forced in during the S2 and S4 exits, and Plate V or the workbench pushed across the 4:5 window are all caught; the untouched frames pass (the batch stops otherwise).
- **Seams:** the master's frames are pixel-identical to the per-scene review cuts rendered in this batch (`checks/`): 9x16:fr: s1 f45 = master f45 identical, s2 f139 = master f239 identical, s3 f26 = master f346 identical, s4 f40 = master f500 identical, s5 f50 = master f730 identical; 16x9:fr: s1 f45 = master f45 identical, s2 f139 = master f239 identical, s3 f26 = master f346 identical, s4 f40 = master f500 identical, s5 f50 = master f730 identical.

## 6. Music previews: loudness (measured on the encoded MP4) and picture identity

| File | Integrated (target −14 ± 0.5 LUFS) | True peak (≤ −1 dBTP) | Loudness range (≤ 4 LU) | Phone check (≤ 4 LU loss) | Result |
|---|---|---|---|---|---|
| `v01__9x16__fr__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |
| `v01__16x9__fr__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |
| `v01__4x5__fr__li__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |
| `v01__9x16__en__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |
| `v01__16x9__en__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |
| `v01__4x5__en__li__music-s7.mp4` | -14 LUFS (ebur128); -14.00 LUFS (BS.1770-4) | -5.4 dBTP | 1.2 LU | -17.9 LUFS (−3.9 LU) | pass |

Bed: `music-lab/out/v01-30-s7.wav` (sha256 `59c83a8a744a72f1…`, ledger M-0003), made by `node bed.mjs --bars 8.5 --dur 30 --seed 7` through `music-lab/render.sh` (two-pass linear loudnorm, limiter at −2 dBTP). Audio chain in the encoder: `atrim=0:30,afade=t=out:st=28.800:d=1.2,volume=-0.17dB,aresample=48000`, AAC-LC 48 kHz stereo at 384k. The gain is one constant, so the bed's own range and dynamics are kept. The silent files carry a silent AAC-LC 48 kHz stereo track (192 kb/s nominal).

Picture identity (the H.264 bitstream of the video track, md5):
- `v01__9x16__fr__silent.mp4` = `v01__9x16__fr__music-s7.mp4`: identical (`f8acba249bb53f683a24dd26a4d4e87d`)
- `v01__16x9__fr__silent.mp4` = `v01__16x9__fr__music-s7.mp4`: identical (`765f5613055d40a5ed14174bbccc8802`)
- `src/v01__9x16__fr__li__silent.mp4` = `src/v01__9x16__fr__li__music-s7.mp4`: identical (`84845d0bc6c0e248d3d5bfcaad7d1672`)
- `v01__4x5__fr__li__silent.mp4` = `v01__4x5__fr__li__music-s7.mp4`: identical (`0caefd065adee8ba3205bfe256137f9b`)
- `v01__9x16__en__silent.mp4` = `v01__9x16__en__music-s7.mp4`: identical (`d58f80e150efc5a2edc8cea329c1a59c`)
- `v01__16x9__en__silent.mp4` = `v01__16x9__en__music-s7.mp4`: identical (`4331bbb1327816487e6168e15bd3f4fe`)
- `src/v01__9x16__en__li__silent.mp4` = `src/v01__9x16__en__li__music-s7.mp4`: identical (`955472caf353479292450e061384187f`)
- `v01__4x5__en__li__silent.mp4` = `v01__4x5__en__li__music-s7.mp4`: identical (`50c278960b4149a4644d63a43046f758`)

## 7. On-screen copy and fact IDs (re-checked against the site at `076c991`)

| Block | Fact | FR on screen | Re-check | EN on screen | Re-check |
|---|---|---|---|---|---|
| M01 | F25 | « Votre logo » | mock-up placeholder (campaign kit), picture text, not a claim | "Your logo" | mock-up placeholder (campaign kit), picture text, not a claim |
| M02 | F25 | « Votre entreprise » | mock-up placeholder (campaign kit), picture text, not a claim | "Your business" | mock-up placeholder (campaign kit), picture text, not a claim |
| M03 | F31 | « FR · EN · AR » | found in assets/app.js / index.html (3 segments) | "FR · EN · AR" | found in assets/app.js / index.html (3 segments) |
| T40 | F06 | « Votre site sur mesure, » | found in assets/app.js / index.html | "Custom websites," | found in assets/app.js / index.html |
| T41 | F06 | « en français, anglais ou arabe. » | found in assets/app.js / index.html | "in English, French and Arabic." | found in assets/app.js / index.html |
| T42 | F28 | « Un prix avant le devis. » (swash: « avant le devis. ») | found in assets/app.js / index.html | "A price before the quote." (swash: "before the quote.") | found in assets/app.js / index.html |
| T09 | F12 | « Essentiel · Studio · Moteur » | found in assets/app.js / index.html (3 segments) | "Essential · Studio · Engine" | found in assets/app.js / index.html (3 segments) |
| T30 | F17 | « Yasser Hamisse » | found in assets/app.js / index.html | "Yasser Hamisse" | found in assets/app.js / index.html |
| T31 | F18 | « Designer graphique & développeur web · Fondateur » | found in assets/app.js / index.html (2 segments) | "Graphic designer & web developer · Founder" | found in assets/app.js / index.html (2 segments) |
| T32 | F19 | « Je reste à vos côtés après le lancement. » | found in assets/app.js / index.html | "I stay once it's live." | found in assets/app.js / index.html |
| T50 | F07 | « Studio web & logiciel · Bordj Bou Arréridj, Algérie » | found in assets/app.js / index.html (2 segments) | "Web & software studio · Bordj Bou Arréridj, Algeria" | found in assets/app.js / index.html (2 segments) |
| T51 | F29 | « Enraciné en Numidie · bâti sur des idées » | found in assets/app.js / index.html (2 segments) | "Rooted in Numidia · built on ideas" | found in assets/app.js / index.html (2 segments) |
| T52 | F30 | « Lien en bio » | pointer label per placement, not a fact | "Link in bio" | pointer label per placement, not a fact |
| mark:wordmark | F20 | « Numidea Labs » | mark rebuilt in code (index.html a.logo (fact F20 cites l. 1256; l. 1265 at site 076c991); styles.css:43, :139-142, :2464) | "Numidea Labs" | mark rebuilt in code (index.html a.logo (fact F20 cites l. 1256; l. 1265 at site 076c991); styles.css:43, :139-142, :2464) |
| mark:monogram | F17 | « Y » | mark rebuilt in code (index.html .fd-photo .mono (scripts-trailer.md §3.4 cites l. 1050; l. 1053 at site 076c991); facts-bank.md §1.2) | "Y" | mark rebuilt in code (index.html .fd-photo .mono (scripts-trailer.md §3.4 cites l. 1050; l. 1053 at site 076c991); facts-bank.md §1.2) |
| T52 (pointer=li) | F30 | « Lien en commentaire » | pointer label per placement, not a fact (4:5 LinkedIn only) | "Link in comments" | the same; `en_li` added to Appendix A and `trailer.json` on 2026-10-27 for this file (F30 is a label, not a fact) |

16:9 has no pointer (no T52). Nothing on screen is a URL, an email, a phone number, a price figure, the Aperçu, a call to action, a client name or capture, or a face: the founder is the monogram « Y » in its ring and `bench.webp` (the workbench from above, no person). `coin-king.webp` is never loaded. Arcanum tokens are read live from `/site/themes.css`.

## 8. Stills (§4.6) in `stills/`

- `stills/v01__9x16__fr__thumb__f000.png` (1080x1920, 723 KB): First frame, 9:16 FR (Reels, Shorts, TikTok): the hook, Plate I and the blueprint outline
- `stills/v01__9x16__fr__ig-cover__f090.png` (1080x1920, 746 KB): Instagram cover, 9:16 FR f90: the hook and the finished blueprint (text inside the 3:4 grid crop)
- `stills/v01__4x5__fr__carousel-ig__1-f090.png` (1080x1350, 76 KB): Carousel slide 1 (Instagram, FR), 4:5 crop of 9:16 f90 (crop layout)
- `stills/v01__4x5__fr__carousel-ig__2-f300.png` (1080x1350, 78 KB): Carousel slide 2 (Instagram, FR), 4:5 crop of 9:16 f300 (crop layout)
- `stills/v01__4x5__fr__carousel-ig__3-f450.png` (1080x1350, 420 KB): Carousel slide 3 (Instagram, FR), 4:5 crop of 9:16 f450 (crop layout)
- `stills/v01__4x5__fr__carousel-ig__4-f670.png` (1080x1350, 233 KB): Carousel slide 4 (Instagram, FR), 4:5 crop of 9:16 f670 (crop layout)
- `stills/v01__4x5__fr__carousel-ig__5-f890.png` (1080x1350, 304 KB): Carousel slide 5 (Instagram, FR), 4:5 crop of 9:16 f890 (crop layout)
- `stills/v01__4x5__fr__li__thumb__f000.png` (1080x1350, 60 KB): First frame, LinkedIn 4:5 FR: f0 of the pointer=li render, cropped y 90-1440
- `stills/v01__4x5__fr__li__carousel__1-f090.png` (1080x1350, 76 KB): Carousel slide 1 (LinkedIn, FR), 4:5 crop of 9:16 pointer=li f90
- `stills/v01__4x5__fr__li__carousel__2-f300.png` (1080x1350, 78 KB): Carousel slide 2 (LinkedIn, FR), 4:5 crop of 9:16 pointer=li f300
- `stills/v01__4x5__fr__li__carousel__3-f450.png` (1080x1350, 420 KB): Carousel slide 3 (LinkedIn, FR), 4:5 crop of 9:16 pointer=li f450
- `stills/v01__4x5__fr__li__carousel__4-f670.png` (1080x1350, 233 KB): Carousel slide 4 (LinkedIn, FR), 4:5 crop of 9:16 pointer=li f670
- `stills/v01__4x5__fr__li__carousel__5-f890.png` (1080x1350, 306 KB): Carousel slide 5 (LinkedIn, FR), 4:5 crop of 9:16 pointer=li f890
- `stills/v01__16x9__fr__thumb__f000.png` (1920x1080, 804 KB): First frame, 16:9 FR, 1920 x 1080: the hook, Plate I and the blueprint outline
- `stills/v01__16x9__fr__yt-thumb-1280x720__f300.png` (1280x720, 134 KB): YouTube thumbnail FR, 1280 x 720 from the 16:9 f300 (§4.6): the default, upload it as the custom thumbnail
- `stills/v01__4x5__fr__li__carousel.pdf` (PDF, 1.09 MB): LinkedIn PDF carousel « Ce que vous obtenez » (FR): the five LinkedIn slides, one per page, 810 x 1012.5 pt = 1080 x 1350 px
- `stills/v01__9x16__en__thumb__f000.png` (1080x1920, 720 KB): First frame, 9:16 EN (Reels, Shorts, TikTok): the hook, Plate I and the blueprint outline
- `stills/v01__9x16__en__ig-cover__f090.png` (1080x1920, 743 KB): Instagram cover, 9:16 EN f90: the hook and the finished blueprint (text inside the 3:4 grid crop)
- `stills/v01__4x5__en__carousel-ig__1-f090.png` (1080x1350, 74 KB): Carousel slide 1 (Instagram, EN), 4:5 crop of 9:16 f90 (crop layout)
- `stills/v01__4x5__en__carousel-ig__2-f300.png` (1080x1350, 75 KB): Carousel slide 2 (Instagram, EN), 4:5 crop of 9:16 f300 (crop layout)
- `stills/v01__4x5__en__carousel-ig__3-f450.png` (1080x1350, 422 KB): Carousel slide 3 (Instagram, EN), 4:5 crop of 9:16 f450 (crop layout)
- `stills/v01__4x5__en__carousel-ig__4-f670.png` (1080x1350, 222 KB): Carousel slide 4 (Instagram, EN), 4:5 crop of 9:16 f670 (crop layout)
- `stills/v01__4x5__en__carousel-ig__5-f890.png` (1080x1350, 303 KB): Carousel slide 5 (Instagram, EN), 4:5 crop of 9:16 f890 (crop layout)
- `stills/v01__4x5__en__li__thumb__f000.png` (1080x1350, 57 KB): First frame, LinkedIn 4:5 EN: f0 of the pointer=li render, cropped y 90-1440
- `stills/v01__4x5__en__li__carousel__1-f090.png` (1080x1350, 74 KB): Carousel slide 1 (LinkedIn, EN), 4:5 crop of 9:16 pointer=li f90
- `stills/v01__4x5__en__li__carousel__2-f300.png` (1080x1350, 75 KB): Carousel slide 2 (LinkedIn, EN), 4:5 crop of 9:16 pointer=li f300
- `stills/v01__4x5__en__li__carousel__3-f450.png` (1080x1350, 422 KB): Carousel slide 3 (LinkedIn, EN), 4:5 crop of 9:16 pointer=li f450
- `stills/v01__4x5__en__li__carousel__4-f670.png` (1080x1350, 222 KB): Carousel slide 4 (LinkedIn, EN), 4:5 crop of 9:16 pointer=li f670
- `stills/v01__4x5__en__li__carousel__5-f890.png` (1080x1350, 305 KB): Carousel slide 5 (LinkedIn, EN), 4:5 crop of 9:16 pointer=li f890
- `stills/v01__16x9__en__thumb__f000.png` (1920x1080, 801 KB): First frame, 16:9 EN, 1920 x 1080: the hook, Plate I and the blueprint outline
- `stills/v01__16x9__en__yt-thumb-1280x720__f300.png` (1280x720, 132 KB): YouTube thumbnail EN, 1280 x 720 from the 16:9 f300 (§4.6): the default, upload it as the custom thumbnail
- `stills/v01__4x5__en__li__carousel.pdf` (PDF, 1.07 MB): LinkedIn PDF carousel « Ce que vous obtenez » (EN): the five LinkedIn slides, one per page, 810 x 1012.5 pt = 1080 x 1350 px

Checks: still f239 identical to the render's own frame (v01__9x16__fr__silent__f239.png): pass; still f239 identical to the render's own frame (v01__9x16__fr__li__silent__f239.png): pass; still f239 identical to the render's own frame (v01__16x9__fr__silent__f239.png): pass; carousel PDF (FR): 5 pages, every MediaBox and CropBox [0 0 810 1012.5], each painted whole by its slide, pixels = the PNG slides (5 pages; [0 0 810 1012.5], painted 810 x 1012.5 pt from (0, 0)): pass; still f239 identical to the render's own frame (v01__9x16__en__silent__f239.png): pass; still f239 identical to the render's own frame (v01__9x16__en__li__silent__f239.png): pass; still f239 identical to the render's own frame (v01__16x9__en__silent__f239.png): pass; carousel PDF (EN): 5 pages, every MediaBox and CropBox [0 0 810 1012.5], each painted whole by its slide, pixels = the PNG slides (5 pages; [0 0 810 1012.5], painted 810 x 1012.5 pt from (0, 0)): pass. Stills are lossless browser PNGs of the masters' frames (the pixels the encoder received), cropped or scaled in RGB. **Upload:** the YouTube thumbnail is the f300 one (§4.6). On Instagram pick the f90 cover; on TikTok, Shorts and LinkedIn the first frame now carries the hook, Plate I and the blueprint outline, and choosing f90 as the cover at upload remains the stronger option.

## 9. Timings (wall clock, this batch)

| Step | Started (UTC) | Seconds |
|---|---|---|
| lint | 2026-10-27 03:12:34 | 0.1 |
| safe-negative | 2026-10-27 03:12:34 | 6.2 |
| checks | 2026-10-27 03:12:40 | 207.1 |
| preflight | 2026-10-27 03:16:08 | 36.2 |
| render-silent-fr | 2026-10-27 03:16:44 | 143.1 |
| render-silent-en | 2026-10-27 03:19:07 | 137.8 |
| render-silent-li | 2026-10-27 03:21:25 | 119.5 |
| render-music-fr | 2026-10-27 03:23:24 | 124.6 |
| render-music-en | 2026-10-27 03:25:29 | 119.4 |
| render-music-li | 2026-10-27 03:27:28 | 118.7 |
| crop-4x5-silent-fr | 2026-10-27 03:29:27 | 26.5 |
| crop-4x5-music-fr | 2026-10-27 03:29:54 | 20.6 |
| crop-4x5-silent-en | 2026-10-27 03:30:14 | 24.1 |
| crop-4x5-music-en | 2026-10-27 03:30:38 | 19.7 |
| stills | 2026-10-27 03:30:58 | 21.7 |
| loudness | 2026-10-27 03:31:20 | 5.7 |
| review-strips | 2026-10-27 03:31:25 | 23.6 |
| slice | 2026-10-27 03:31:49 | 216.6 |
| **total** | | **1371.2** (22.9 min) |

Per render (open, warm-up and ready + capture + encode tail; verify, determinism and contact sheet are counted separately in the step times):
- `v01__9x16__fr__silent.mp4`: 54.25 s (capture 49.12 s, 18.3 fps); verify 19.62 s
- `v01__16x9__fr__silent.mp4`: 51.85 s (capture 46.15 s, 19.5 fps); verify 16.67 s
- `v01__9x16__en__silent.mp4`: 51.29 s (capture 45.97 s, 19.6 fps); verify 17.85 s
- `v01__16x9__en__silent.mp4`: 49.08 s (capture 44.2 s, 20.4 fps); verify 18.91 s
- `v01__9x16__fr__li__silent.mp4`: 52.23 s (capture 46.98 s, 19.2 fps); verify 8.13 s
- `v01__9x16__en__li__silent.mp4`: 50.88 s (capture 45.9 s, 19.6 fps); verify 7.48 s
- `v01__9x16__fr__music-s7.mp4`: 53.49 s (capture 47.55 s, 18.9 fps); verify 9.97 s
- `v01__16x9__fr__music-s7.mp4`: 49.81 s (capture 44.54 s, 20.2 fps); verify 10.64 s
- `v01__9x16__en__music-s7.mp4`: 52.36 s (capture 47.05 s, 19.1 fps); verify 9.53 s
- `v01__16x9__en__music-s7.mp4`: 47.08 s (capture 42.35 s, 21.3 fps); verify 9.69 s
- `v01__9x16__fr__li__music-s7.mp4`: 48.93 s (capture 43.21 s, 20.8 fps); verify 9.51 s
- `v01__9x16__en__li__music-s7.mp4`: 49.84 s (capture 45.47 s, 19.8 fps); verify 9.75 s
- 4:5 crops: FR silent 12.04 s crop + encode (26.01 s with verify and contact sheet), music 11.87 s (20.02 s); EN silent 11.02 s crop + encode (23.57 s with verify and contact sheet), music 11.18 s (19.01 s).

## 10. Owner rules, as built

- Coded motion design only: no generated image, footage or music. The engravings are the site's existing plates (owner's decision of 2026-10-26); the bed is written in code.
- Founder: no face or figure, only the monogram « Y » and the workbench engraving.
- No client screenshot or name; no price figure (T09 is the three package names only); no Aperçu; no call to action; no URL, email, phone or ref code.
- Arcanum throughout. Every on-screen line from `copy/trailer.json` with its fact ID (§7).
- Arabic not rendered (G1). Music previews only until the listening test (G5); post the silent files by default.

## 11. Problems, departures from the script, and open items

- No check failed.

Departures from scripts-trailer.md made in this round (PLAN.md §10 does not cover them; each follows a review finding):
- §4.1 S1: Plate I no longer inks in over 0.00–1.20; it is set at f0 with the blueprint's browser outline (issue 1). The inner parts still draw over 0.10–2.60.
- §4.1 "Out": S2, S3 and S4 wipe out half a beat earlier (10.33, 15.00, 22.33 instead of 10.67, 15.33, 22.67), so that no frame holds two scenes (issue 3). The entrances (T42 10.67, the founder card 15.33, the wordmark 22.67) keep their beats and now wipe in over 0.6 s on the site's ease-out instead of riding the exit's edge. Holds still meet §4.3 (T41 6.67 s, T42 4.33 s, T09 3.67 s, T32 3.67 s, minimum 3.45 s).
- §3.3 / §4.2 4:5: the LinkedIn file is cropped from a 9:16 render laid out for the crop (no faq3; Plate V and the workbench moved inside the window), so it is no longer the same picture as the 9:16 Reel below the band (issue 4). The text band is unchanged.
- §3.6 / §4.1 grid: 2 px lines (the site's 1 CSS px is 3 device px on a phone) and the encoder's chroma QP −4 (issue 5).
- Appendix A: T52 gains `en_li` « Link in comments » for the EN LinkedIn file (task brief of 2026-10-27; F30 is a label, not a fact).

Notes:
- The scene table's 28.80–30.00 "fade" is applied to the sound only (the encoder's 1.2 s audio fade): the picture holds on the end card to f899, so f890 (the carousel's end-card still) is whole; a platform that loops now jumps from the end card to the hook with Plate I and the blueprint outline.
- Owner choice, not done: the site's --atmos glows and top-weighted grid mask behind the video (issue 5). If wanted, render one test with them and check the banding on a phone before adopting it.
- Not made in this batch (outside the step): the 16:9 website file at −16 LUFS (bed M-0004 exists; waits on Gate W), the SRT/VTT subtitles of §4.6, the AR master (G1).
- Before posting: the phone QA pass per file (G8), the owner's listening test before any music file is used (G5), and the TikTok RTL safe-zone check (G8; the band stays x 140–940 until then).

## 12. Every file in `out/v01/`

Deliverables, contact sheets, review stills and reports:

| File | Size | sha256 (first 16) |
|---|---|---|
| `loudness.json` | 5 KB | `a4d548b57678c742` |
| `timings.tsv` | 1 KB | `7b9aaf51284f1cb3` |
| `v01__16x9__en__music-s7.mp4` | 6.48 MB | `a5434bacea78019a` |
| `v01__16x9__en__music-s7__f500.png` | 401 KB | `3e4f03abbb228d8b` |
| `v01__16x9__en__silent.mp4` | 5.30 MB | `40a761d7e178e003` |
| `v01__16x9__en__silent__contact.png` | 488 KB | `9aa1d507e6e7b163` |
| `v01__16x9__en__silent__f239.png` | 231 KB | `4951b540565c54d2` |
| `v01__16x9__fr__music-s7.mp4` | 6.53 MB | `a711c334bbafa1d3` |
| `v01__16x9__fr__music-s7__f500.png` | 405 KB | `57421aeb46993aac` |
| `v01__16x9__fr__silent.mp4` | 5.35 MB | `2b82192098c16a45` |
| `v01__16x9__fr__silent__contact.png` | 499 KB | `faf22e542338723a` |
| `v01__16x9__fr__silent__f239.png` | 235 KB | `90ad363e6589058d` |
| `v01__4x5__en__li__music-s7.mp4` | 5.20 MB | `0c9fbdd277909457` |
| `v01__4x5__en__li__music-s7.report.json` | 5 KB | `15807ef825620501` |
| `v01__4x5__en__li__silent.mp4` | 4.02 MB | `cb8da4434b3e9d09` |
| `v01__4x5__en__li__silent.report.json` | 3 KB | `07033a6b50e6faf1` |
| `v01__4x5__en__li__silent__contact.png` | 449 KB | `719e54ed62394987` |
| `v01__4x5__fr__li__music-s7.mp4` | 5.30 MB | `9eeca0c8cc9063bd` |
| `v01__4x5__fr__li__music-s7.report.json` | 5 KB | `844689dc63769f3c` |
| `v01__4x5__fr__li__silent.mp4` | 4.12 MB | `b68054b9f1469454` |
| `v01__4x5__fr__li__silent.report.json` | 3 KB | `6d9c0125d55d418c` |
| `v01__4x5__fr__li__silent__contact.png` | 463 KB | `8a8dcd8416ad237d` |
| `v01__9x16__en__music-s7.mp4` | 7.38 MB | `1de9d6f343ee7c99` |
| `v01__9x16__en__music-s7__f500.png` | 395 KB | `a28a21150fe3a55b` |
| `v01__9x16__en__silent.mp4` | 6.20 MB | `d3176a7a48b96603` |
| `v01__9x16__en__silent__contact.png` | 644 KB | `5b62092e44340e5e` |
| `v01__9x16__en__silent__f239.png` | 247 KB | `95d78440ee8e14e6` |
| `v01__9x16__fr__music-s7.mp4` | 7.46 MB | `33811c8176c3a347` |
| `v01__9x16__fr__music-s7__f500.png` | 398 KB | `c24f9302b1d16bca` |
| `v01__9x16__fr__silent.mp4` | 6.28 MB | `46a2163cbb66adff` |
| `v01__9x16__fr__silent__contact.png` | 660 KB | `1239a2a3fedfabcc` |
| `v01__9x16__fr__silent__f239.png` | 250 KB | `373af713baa93e5a` |
| `v01__en__music-s7.report.json` | 72 KB | `07417eafab5e1fc0` |
| `v01__en__silent.report.json` | 69 KB | `cee833b038e5ced4` |
| `v01__fr__music-s7.report.json` | 72 KB | `70a9c7c2e0faab43` |
| `v01__fr__silent.report.json` | 69 KB | `92ef3a4769503632` |

`src/` (the 9:16 pointer=li sources of the 4:5 crops):

| File | Size | sha256 (first 16) |
|---|---|---|
| `src/v01__9x16__en__li__music-s7.mp4` | 6.62 MB | `80d8e4de62b0125b` |
| `src/v01__9x16__en__li__music-s7__f500.png` | 373 KB | `dbcffa45df6eabc2` |
| `src/v01__9x16__en__li__silent.mp4` | 5.44 MB | `7eb9bd35d723e148` |
| `src/v01__9x16__en__li__silent__f239.png` | 154 KB | `fe4d2d2182d396d0` |
| `src/v01__9x16__fr__li__music-s7.mp4` | 6.69 MB | `46748c4b988fe491` |
| `src/v01__9x16__fr__li__music-s7__f500.png` | 377 KB | `6746aabbd342e68c` |
| `src/v01__9x16__fr__li__silent.mp4` | 5.51 MB | `e13b3664ae3cab2f` |
| `src/v01__9x16__fr__li__silent__f239.png` | 158 KB | `6509f15728278754` |
| `src/v01__li__music-s7.report.json` | 74 KB | `c294a8f88b8fdd31` |
| `src/v01__li__silent.report.json` | 70 KB | `2e5d01a697f3edfd` |

`stills/`:

| File | Size | sha256 (first 16) |
|---|---|---|
| `stills/stills.json` | 9 KB | `7c4e997aea48c02d` |
| `stills/v01__16x9__en__thumb__f000.png` | 801 KB | `11989343981749bd` |
| `stills/v01__16x9__en__yt-thumb-1280x720__f300.png` | 132 KB | `5de9d7d90da6e8f3` |
| `stills/v01__16x9__fr__thumb__f000.png` | 804 KB | `9ff9288ab39d621e` |
| `stills/v01__16x9__fr__yt-thumb-1280x720__f300.png` | 134 KB | `1d86b79b501de080` |
| `stills/v01__4x5__en__carousel-ig__1-f090.png` | 74 KB | `e20ce9686accaeac` |
| `stills/v01__4x5__en__carousel-ig__2-f300.png` | 75 KB | `0f163790d1fa8388` |
| `stills/v01__4x5__en__carousel-ig__3-f450.png` | 422 KB | `d66fe0544926b2fb` |
| `stills/v01__4x5__en__carousel-ig__4-f670.png` | 222 KB | `e1e66df48cb6027f` |
| `stills/v01__4x5__en__carousel-ig__5-f890.png` | 303 KB | `37b52e00bc47dac8` |
| `stills/v01__4x5__en__li__carousel.pdf` | 1.07 MB | `24d8a5fdaab13eff` |
| `stills/v01__4x5__en__li__carousel__1-f090.png` | 74 KB | `e20ce9686accaeac` |
| `stills/v01__4x5__en__li__carousel__2-f300.png` | 75 KB | `0f163790d1fa8388` |
| `stills/v01__4x5__en__li__carousel__3-f450.png` | 422 KB | `d66fe0544926b2fb` |
| `stills/v01__4x5__en__li__carousel__4-f670.png` | 222 KB | `e1e66df48cb6027f` |
| `stills/v01__4x5__en__li__carousel__5-f890.png` | 305 KB | `6a7fb0cf80e5abf2` |
| `stills/v01__4x5__en__li__thumb__f000.png` | 57 KB | `ff8a2cc21124e41c` |
| `stills/v01__4x5__fr__carousel-ig__1-f090.png` | 76 KB | `d5e5d480432dd2af` |
| `stills/v01__4x5__fr__carousel-ig__2-f300.png` | 78 KB | `40976b2dbcd33282` |
| `stills/v01__4x5__fr__carousel-ig__3-f450.png` | 420 KB | `71760b7c946a1dbf` |
| `stills/v01__4x5__fr__carousel-ig__4-f670.png` | 233 KB | `678a1d433f55f1ec` |
| `stills/v01__4x5__fr__carousel-ig__5-f890.png` | 304 KB | `f95afba29330fd52` |
| `stills/v01__4x5__fr__li__carousel.pdf` | 1.09 MB | `0622d12bcfadcbcb` |
| `stills/v01__4x5__fr__li__carousel__1-f090.png` | 76 KB | `d5e5d480432dd2af` |
| `stills/v01__4x5__fr__li__carousel__2-f300.png` | 78 KB | `40976b2dbcd33282` |
| `stills/v01__4x5__fr__li__carousel__3-f450.png` | 420 KB | `71760b7c946a1dbf` |
| `stills/v01__4x5__fr__li__carousel__4-f670.png` | 233 KB | `678a1d433f55f1ec` |
| `stills/v01__4x5__fr__li__carousel__5-f890.png` | 306 KB | `bb29a32690c1da1a` |
| `stills/v01__4x5__fr__li__thumb__f000.png` | 60 KB | `a3ce69cef0bf5b9a` |
| `stills/v01__9x16__en__ig-cover__f090.png` | 743 KB | `b1177fbad480c9b9` |
| `stills/v01__9x16__en__thumb__f000.png` | 720 KB | `0a152f410145e514` |
| `stills/v01__9x16__fr__ig-cover__f090.png` | 746 KB | `2d057c919f524d36` |
| `stills/v01__9x16__fr__thumb__f000.png` | 723 KB | `8c12f1dda65bbcf5` |

`review/` (frame-by-frame strips decoded from the masters):

| File | Size | sha256 (first 16) |
|---|---|---|
| `review/strips.json` | 3 KB | `51003034dbf922af` |
| `review/v01__16x9__en__mirror__f226-f251.png` | 341 KB | `8058244f7ceba089` |
| `review/v01__16x9__en__s2s3__f306-f341.png` | 158 KB | `37270af1080f1093` |
| `review/v01__16x9__en__s4s5__f666-f701.png` | 164 KB | `3a0bbf31c3380da7` |
| `review/v01__16x9__fr__mirror__f226-f251.png` | 353 KB | `ef14b0adf137bf06` |
| `review/v01__16x9__fr__s2s3__f306-f341.png` | 154 KB | `602b4150451ecbdd` |
| `review/v01__16x9__fr__s4s5__f666-f701.png` | 178 KB | `6144762320557d5c` |
| `review/v01__9x16__en__mirror__f226-f251.png` | 338 KB | `46eae3e9aee7ecc1` |
| `review/v01__9x16__en__s2s3__f306-f341.png` | 326 KB | `214df7aaaec8dd59` |
| `review/v01__9x16__en__s3s4__f446-f481.png` | 233 KB | `d7f00da3d628282e` |
| `review/v01__9x16__en__s4s5__f666-f701.png` | 174 KB | `d8879616d523cc28` |
| `review/v01__9x16__fr__mirror__f226-f251.png` | 369 KB | `da2f16e0764ec26f` |
| `review/v01__9x16__fr__s2s3__f306-f341.png` | 322 KB | `935f695c42135b54` |
| `review/v01__9x16__fr__s3s4__f446-f481.png` | 227 KB | `2f5ea989498e09f9` |
| `review/v01__9x16__fr__s4s5__f666-f701.png` | 192 KB | `f8d89af5c46159e2` |

`preflight/` and `checks/` (the per-scene review cuts the preflight's seam check compares the master against):

| File | Size | sha256 (first 16) |
|---|---|---|
| `checks/v01-s1__16x9__fr__silent.mp4` | 1.42 MB | `d86d2e728bf6c382` |
| `checks/v01-s1__16x9__fr__silent__contact.png` | 656 KB | `be6c4caa7ac444d4` |
| `checks/v01-s1__16x9__fr__silent__f045.png` | 844 KB | `d7c5f1eb1d779a0a` |
| `checks/v01-s1__9x16__fr__silent.mp4` | 1.70 MB | `d7e900dd0269a353` |
| `checks/v01-s1__9x16__fr__silent__contact.png` | 721 KB | `8bcd3f37cf861ecb` |
| `checks/v01-s1__9x16__fr__silent__f045.png` | 745 KB | `65c54b02f6377517` |
| `checks/v01-s1__silent.report.json` | 55 KB | `dd38fe2b87d35446` |
| `checks/v01-s2__16x9__fr__silent.mp4` | 1.12 MB | `0e338cc88434c81e` |
| `checks/v01-s2__16x9__fr__silent__contact.png` | 698 KB | `7349b7de8570ba9a` |
| `checks/v01-s2__16x9__fr__silent__f139.png` | 235 KB | `90ad363e6589058d` |
| `checks/v01-s2__9x16__fr__silent.mp4` | 1.34 MB | `2c337e88146500a7` |
| `checks/v01-s2__9x16__fr__silent__contact.png` | 959 KB | `cd88b03a48bfbf79` |
| `checks/v01-s2__9x16__fr__silent__f139.png` | 250 KB | `373af713baa93e5a` |
| `checks/v01-s2__silent.report.json` | 57 KB | `62175b94b88c5869` |
| `checks/v01-s3__16x9__fr__silent.mp4` | 1.16 MB | `66bbc6e94dfd70bc` |
| `checks/v01-s3__16x9__fr__silent__contact.png` | 543 KB | `e9cecabfe71a792f` |
| `checks/v01-s3__16x9__fr__silent__f026.png` | 477 KB | `1969143d7c8e0e0e` |
| `checks/v01-s3__9x16__fr__silent.mp4` | 1.36 MB | `026f90737c69eff2` |
| `checks/v01-s3__9x16__fr__silent__contact.png` | 803 KB | `3a48d5dcf2932634` |
| `checks/v01-s3__9x16__fr__silent__f026.png` | 652 KB | `29100d147c796026` |
| `checks/v01-s3__silent.report.json` | 56 KB | `32c202a524f7c6a2` |
| `checks/v01-s4__16x9__fr__silent.mp4` | 1.01 MB | `a36dc02b3fb1954f` |
| `checks/v01-s4__16x9__fr__silent__contact.png` | 391 KB | `f5e8e042b7aaacef` |
| `checks/v01-s4__16x9__fr__silent__f040.png` | 405 KB | `57421aeb46993aac` |
| `checks/v01-s4__9x16__fr__silent.mp4` | 1.01 MB | `1674c520c986988f` |
| `checks/v01-s4__9x16__fr__silent__contact.png` | 513 KB | `1c57c6c6548bfccf` |
| `checks/v01-s4__9x16__fr__silent__f040.png` | 398 KB | `c24f9302b1d16bca` |
| `checks/v01-s4__silent.report.json` | 57 KB | `54a493a809c5fa76` |
| `checks/v01-s5__16x9__fr__silent.mp4` | 1.24 MB | `67a0abfd62d3d5ba` |
| `checks/v01-s5__16x9__fr__silent__contact.png` | 559 KB | `468a37896863ce1c` |
| `checks/v01-s5__16x9__fr__silent__f050.png` | 580 KB | `13bf5df7681a1eeb` |
| `checks/v01-s5__9x16__fr__silent.mp4` | 1.55 MB | `ec2dada046b637a0` |
| `checks/v01-s5__9x16__fr__silent__contact.png` | 762 KB | `cf4d20f27cb8baae` |
| `checks/v01-s5__9x16__fr__silent__f050.png` | 714 KB | `81e8359eab490e29` |
| `checks/v01-s5__silent.report.json` | 56 KB | `294f2f65dd7845c7` |
| `preflight/measures.json` | 4 KB | `c7b853b384a8bab0` |
| `preflight/preflight.json` | 12 KB | `3e5afcdd71b54a79` |
| `preflight/slice.json` | 2 KB | `e2bc2107ec29e90d` |
