# Hub rebuild brief (private; read with DESIGN-PLAN.md)

DESIGN-PLAN.md is the detailed design (sections, tokens, motion, pipeline, gates, docs). This brief records what changed since it was written and wins where they differ.

## Owner answers (28 Oct 2026)
- Footer KEEPS "VOIDSPLUNKER.std is an agency of one … you work directly with me" (the owner's choice; the main site's team wording, A3, stays open and untouched).
- Etsy (Bl7nksStudio) is DROPPED from the links.
- NO AI credit line anywhere on the page.
- The 33-poster series, the epilogue and hub/poses go (start over from the new art).
- Never mention image tools or model names on the page, in code comments, commits or docs.

## Art decisions taken while making the masters
- The hero stage is ALWAYS paper, in both themes (it is a paper "band"): the figures were drawn on paper and Kūro is black. In dark mode the page around it is night navy and the hero stage reads as an inset paper print. Hero text sits on the paper, so hero text always uses the paper tokens.
- The hero's paper measures #FDEDDD (median of its empty area, BGR 221,237,253); the art in general ranges #EDD6B9 to #FDEDDD. Use #FDEDDD (or within 2%) as the light page ground so the hero blends edge to edge; derive the other paper tokens from it and re-check contrast.
- Hero layers are full-frame 2752x1536 and pixel-registered: hero-bg (opaque; figures removed, gap filled with paper), hero-yasser and hero-kuro (RGBA, same canvas). Yasser bbox x 2071-2581 y 47-1491; Kūro bbox x 1731-2019 y 1152-1463. Crop every layer with the same box.
- Loops are animated WebP masters with a bone die-cut border, starting and ending on the poster frame, finite: yasser-wave 2 plays (4.8 s), yasser-lost 1 play (4.0 s), kuro-sleep 1 play (3.0 s), 20 fps. Each has a -still.png. The build resizes them (sharp, animated:true) to display size; keep the loop count.
- Vignettes make-designer, make-developer, make-artist (RGBA cut-outs) and Kūro die-cuts kuro-sit, kuro-paw (RGBA).
- Diary prints (opaque): diary-4am, diary-buried, diary-art-director, diary-second-brain, diary-miniature, diary-morning, diary-wandering, diary-traveler. Bands: band-design (IfONrR5tvE, empty left), band-diary (3zEkVHLREY, dark empty left).
- All lettering generated into the art has been painted out (coat badge text, cup sleeve, wall notes). The hexagon N badge stays as a costume detail.
- Masters: campaign/hub-art/masters (MASTERS.json lists sizes; MASTERS.sha256 pins them). Sources: campaign/hub-art/src. Tools: campaign/hub-art/tools (masters.py, loops.py). campaign/ is git-ignored and never deployed.

## Diary titles (approved by the owner, 28 Oct 2026)
4 a.m. · Buried · Art director · The second brain · A world in miniature · Morning light · Wandering · tr4veler.exe

## Process
- Reviewed by the owner on 28 Oct (screenshots); pushed to claude/numidea-labs-landing-c4jokc the same day. Still open: what the page says of Kuro, the N badge, the symbols on "A world in miniature". The deploy waits on GitHub Actions billing.
- Every commit message ends with the two attribution lines given in the session (Co-Authored-By and Claude-Session).
- npm run build must leave no diff; npm run verify must be green before the final commit.
