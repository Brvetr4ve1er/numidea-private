# Project context

The website this system was built from, what the October 2026 audit found, what the owner decided, and what only the owner can still supply.

## The website

The site is static: hand-written HTML, CSS and plain JavaScript, with no framework and no runtime dependency, in the public repository `Brvetr4ve1er/Numidea.tech`. It has a home page (`index.html`); the project sheets (`scene/`, one sheet per project, generated from `scripts/scene-data.mjs`); the founder's personal page (`hub/`, a second brand, VOIDSPLUNKER.std, with its own fonts: never the studio's brand); the launch page of WorkspaceHQ v3, the founder's own product (`workspacehq/`); a three-language 404; and a legal notice and privacy page that the build publishes only once all 14 legal fields are filled. French is the default; `?lang=en` and `?lang=ar` switch to English and to Arabic, which mirrors the whole layout right to left, and `?cur=eur` or `?cur=usd` shows prices in euros or dollars. Six themes sit behind a switcher, Arcanum by default. The canonical address is **https://brvetr4ve1er.github.io/Numidea.tech/** (no own domain yet). Every push to the working branch runs the gates (repository checks, HTML validation, a browser audit in three languages, six themes and five screen sizes, a contrast sweep, a visual-bug scan, a keyboard, reduced-motion and right-to-left check); only when every gate is green is the site published, and a red gate leaves the live site as it was. Netlify and Vercel mirrors run a shorter set. A monitor checks the live site every six hours. The site sets no cookie, runs no analytics and stores nothing a visitor sends.

**Home page order:** hero, proof, work, services (led by the Aperçu card, which also tells the method), pricing, team and founder, FAQ, contact. Kickers: 01 — Preuves, 02 — Projets, 03 — Services, 04 — Tarifs, 05 — Équipe & fondateur, 06 — FAQ, 07 — Contact.

**Live versus repository.** The owner's decisions of 2026-10-26 are in the repository; the metrics log of 2026-10-27 records that build as not yet deployed. The live page may still show the earlier version (a method section, a tools section, four counters). Check the live page before quoting or capturing it.

## The October 2026 audit

A full content audit of the home page on 2026-10-26: five lenses (the buyer on a phone, redundancy, missing information, claims and copy, the other pages), a skeptic per finding (54 of 55 findings survived), and measurements. The owner's copy, with the ranked lists and the length chart, is the **"Site audit — October 2026"** doc.

- **Before:** 24.8 phone screens (14.7 on desktop), 1,946 visible French words, 1,252,647 bytes on a phone. A phone buyer reached a way to write at 8.5 screens, the first price at 12.7 and the founder at 18.2.
- **Most unnecessary:** bytes that drew nothing (an invisible screenshot, duplicate font files, a font loaded for one letter: 17% of the phone page); Plate I's 416 KB of masks; the unfolded estimator (2.1 phone screens, repeating the Studio card); the Aperçu stated six times and its path drawn twice; ten services before any price; the tools section; two empty « En cours » cards; the footer repeating the contact block; counters repeating the same « 4 ».
- **Most lacking:** what happens after the yes (payment, tax, ownership, hosting, revisions, guarantee); whether this is a real company and who the buyer deals with; proof from anyone but the studio; a ballpark price near the top; the Aperçu's own rules; a way to write or call from the first screen, with checkable hours; the Gulf buyer's language and currency.
- **Fixed without asking (2026-10-26):** the invisible screenshot, the duplicate and one-letter font files, the phone form's position, the French FAQ's missing price, a silent mail failure, the placeholder hostnames, the Arabic stack lead, the founder's misquoted skills note, two service briefs that repeated their tool pills, unused dictionary keys.
- **After the owner's decisions (measured 2026-10-27, not yet deployed):** 18.2 phone screens (11.2 on desktop), 1,552 words, 589 KB on a phone; the first price at 9.9 screens, the founder at 13.4.

## The owner's decisions on the site (IMPROVEMENTS.md)

| Item | Decision |
|---|---|
| M3: the Aperçu and its path told six times | Approved: told once, in the card; the method section folded into it; FAQ points to it |
| M4: the estimator | Approved: folded in place behind a summary naming what the packages do not price |
| C1: the two « En cours » cards | Approved: hidden until each site is live |
| C2: the tools section and Plate IV (strata) | Approved: removed; plates renumbered I–V |
| C3: four proof counters | Approved: one trust line and the client logo strip |
| C4: Plate I on phones | Approved: hidden at 960px and below |
| M5: the footer's repeated contact columns and the WorkspaceHQ cartridge | Approved: removed |
| F10: no way to write from the first phone screen | Approved: the hero's second button opens WhatsApp with the Aperçu message |
| M1: a starting price and delivery time in the hero | Declined: kept as is |
| M2: which services are full cards | Declined: five cards and five folded |
| Waiting | F14 the « TypeScript » sign-off · C5 the founder card's link to his personal page · M6 where the market comparison lives · A7 Gulf prices · A8 English and Arabic pages of their own · M7 the order of the project sheets · A9 a call to action on the sheets · A10 how the personal page presents its remade posters · F13 Bordj Steel's « leader » line · where the after-the-yes answers go · A3 naming the founder in the hero |

## What only the owner can supply (OWNER-CONTENT.md)

1. The legal notice and privacy details: 14 fields (legal name, form, registration, address and the rest).
2. Client quotes, with consent: none yet.
3. A founder photo: none (a monogram « Y » shows); never a generated face.
4. The team: names, photos and whether the "three specialists" claim stands.
5. A studio email on its own domain (the personal Gmail is in use).
6. Each client's permission to appear in marketing: not asked yet.
7. Nomara Voyages: client or not (never in marketing either way).
8. The native Arabic review of the site's copy.
9. Clients' own domains: none serves the delivered site.
10. The rights to the fan art on the founder's personal page.
11. The lead store: off on purpose (it needs the legal page first).
12. The old campaign kit in the repository's history: the owner's call on a rewrite.
13. WorkspaceHQ: "open source" only after a licence and a README.
14. The claims only the owner can confirm: « 6 ans », « des clients en France », the React / Next.js / Vercel line, Essentiel's « domaine et certificat configurés », « Si c'est oui, la page d'accueil est déjà faite » (`prev.tl5p`), "an agency of one" on his personal page, and AlmaFlowClim's old « Industrie » label (since corrected on the card).

Plus the owner facts the audit added: the terms after the yes, the Aperçu's rules, calls and hours, the tools paid work actually uses, whether ads or WhatsApp Business are planned, and the Gulf invoicing and payment route.

## Documents that exist

- **"Site audit — October 2026"** doc: the owner's copy of the audit, with the ranked lists and the length chart.
- **"Marketing & video plan — Q4 2026"** doc: the owner's copy of the marketing plan summarised in `marketing.md` (written for coded videos; the owner moved the making of the pieces to this system on 2026-10-27).
- In the repository: `BRAND.md` (the design system's rules and the reasons behind them), `README.md`, `OWNER-CONTENT.md`, `IMPROVEMENTS.md` (backlog, decisions and metrics, updated by a weekly improvement cycle on Mondays), `RELEASE.md` (releasing, rollback, monitoring, owner-only settings), and a public knowledge-base vault.
- Private, outside the repository: the marketing kit (strategy, facts bank, channels, scripts) and the earlier paid-campaign kit, with the owner.
