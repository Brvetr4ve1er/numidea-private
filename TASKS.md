# Open work, 29 October 2026

Private checkpoint of everything in progress for Numidea Labs and the personal hub. Kit layout: `marketing/` (plan, scripts, pipeline, stickers), `magnific/` (catalogue and renders), `ds/` (design-system source), `carousel/`, `tools/`. Site work lives in the public repository and its `IMPROVEMENTS.md`.

| # | Thread | Status | Next step | Waits on | Where |
|---|---|---|---|---|---|
| 1 | Deploy of the site | Every push since 25 Oct is undeployed (live stamp 202610251516); GitHub Actions jobs fail in seconds (billing / spending limit) | Clear the billing block; the next push deploys through the gates | Owner (GitHub billing) | repo `.github/workflows/pages.yml` |
| 2 | Weekly improvement cycle | Scheduled task "Weekly site improvement", Mondays 08:38 Algiers, fresh session each run; it stops and reports when Actions is blocked | Nothing; it runs on its own | Billing (to ship anything) | claude.ai scheduled tasks |
| 3 | Marketing and video plan Q4 2026 | Plan, strategy, channels, facts bank, calendar written; Claude Doc published | Owner answers in the plan's questions section | Owner | `marketing/PLAN.md`, Claude Doc "Marketing & video plan — Q4 2026" |
| 4 | V01 « L'atlas » trailer | Rendered (FR, 9:16, 16:9, 4:5); owner did not like the infographic style | Re-cut later with the new characters if wanted | Owner direction | `marketing/out/v01`, `marketing/pipeline` |
| 5 | Week 1 carousel « Le parcours » | Canva template version and Claude Design version exist; owner found both not catchy enough | Superseded by the miniature world and the « Relevés » series | Owner | Canva "Semaine 1 — Le parcours"; claude.ai artifact UATyJTUpzTFfMN1hfcpD1K |
| 6 | Miniature-world carousel script | Full 9-slide production script; Canva renders were rejected and Canva generation is stopped | Build from the brand engravings in code, or drop | Owner | `carousel/miniature-world-script.json` |
| 7 | « Relevés » carousel series (10 ideas, Azuki-inspired) | Plan done: every client category and all ten services covered | Adapt to the characters (flame coder hosts, Yasser and Kūro sign); build Relevé 01 « Formule. » first | Owner go | `marketing/azuki-carousel-plan.md` |
| 8 | Sticker pack « Yasser & Kūro · Numidea » | 14 animated loops, reviewed twice; WhatsApp pack (.wastickers + sample-app folder), GIF/WebM/MP4/PNG zips delivered | ProRes on request; site versions (finite, ≤5 s) come with the hub | Owner (which ProRes) | `marketing/stickers/` (render.mjs, runtime.js, pack.mjs, scenes/, assets/, out/_deliver) |
| 9 | Magnific catalogue | 55 assets (one failed render); 54 full-resolution files downloaded 28 Oct with SHA-256; the signed links in the original manifest expire on 31 Oct 00:00 UTC; after that `creations_get` re-issues them | Keep the files; use set C for the brand and the hub | — | `magnific/CATALOG.md`, `manifest-notokens.json`, `SHA256SUMS-full.txt`, `full/` |
| 10 | Cut-outs | Local rembg (isnet-anime for Yasser, general for Kūro), fixes: coat lettering painted out, eye holes filled, paper cleared from fingers and hair | Reuse for the hub masters | — | `magnific/cut*`, `tools/cutout.py`, `marketing/stickers/assets/_orig` |
| 11 | Magnific hero clips (image-to-video) | Not started | Quote each run before generating | Owner OK per run | — |
| 12 | Design System « Numidea Labs » | Published in Claude; still bans generated images and faces | Update its imagery rules to the owner's 27 Oct decisions (renders allowed, the founder as a character) | Owner OK | claude.ai artifact MdZgybSoEWEnRRw3byBDd7, `ds/` |
| 13 | Personal hub rebuild (VOIDSPLUNKER.std) | Built, reviewed by the owner (titles approved 28 Oct), pushed 28 Oct; not deployed (billing) | Owner answers: what the page says of Kūro, the N badge, the symbols on « A world in miniature »; refresh the knowledge-base graph | Owner; GitHub billing | repo `hub/`; masters in `hub-art/` here (synced 29 Oct) |
| 14 | Private toolkit repository | Pushed to Brvetr4ve1er/numidea-private (main) on 28 Oct | Push updates when the kit changes | — | GitHub `numidea-private` |
| 15 | Owner answers still open on the site | Legal identity, terms after the yes, client permissions (case studies: given 29 Oct for four clients), AlmaFlowClim's site status, the lawyer on the Aperçu (Gate B), the Arabic reviewer, decision #11 (founder-card link), A3 (team wording) | — | Owner | repo `IMPROVEMENTS.md`, `OWNER-CONTENT.md` |
| 16 | Case studies on the hub (Claude Design project e95bba9b…) | Owner asked 29 Oct: Heetch first, then Alliance Travel, AlmaFlow, Bordj Steel, Traveler, the Studio page and the hub in the Numidea system; the four clients agreed in writing; the owner holds the font licences | A session with the Claude Design connector reads `CaseHeetch.dc.html` and builds `hub/work/heetch/` | Claude Design connector (new session) | `handoff/2026-10-29-studio-hub.md` |

## How to resume
- Stickers: `cd marketing/stickers && node render.mjs scenes/<name>.html` (needs a Chromium and the pipeline's ffmpeg-static), then `node pack.mjs pack.json`.
- Cut-outs: `python3 tools/cutout.py <sheet.png> <outdir> isnet-anime` (rembg, scipy, opencv).
- Magnific: the owner's library; re-issue download links with `creations_get` by id.
