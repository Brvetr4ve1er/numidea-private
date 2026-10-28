# Numidea Labs: channels and formats for an organic-only launch

PRIVATE. Never copy this file, or anything made from it, into `/home/user/STICKITTY.INC` (the public repository).
Research done 2026-10-26. Web sources are listed at the end as [S1]…[S48], each with its URL and its date. Vault sources are cited as [V: file › section]; the facts bank next to this file is cited as [FB §x] (`facts-bank.md`, same folder).
Every Arabic string in this file is marked **[à relire par un arabophone natif]**.

Scope, as decided by the owner on 2026-10-26: coded motion-design videos (no generated footage or images, no face for the founder), on-screen text plus music with no voiceover, French, Arabic and English versions, four channel groups (Algeria on Facebook/Instagram in FR + AR; France on Instagram/LinkedIn in FR; the Gulf on Instagram/TikTok in AR + EN; YouTube plus the website), and organic reach only.

---

## 0. The short version: ten recommendations

1. **Run one account per platform, not one per market.** One Instagram account, one Facebook Page, one TikTok account, one YouTube channel, the founder's LinkedIn profile, and a minimal LinkedIn company page. Each post is in one language. The FR posts serve Algeria and France, the AR posts serve Algeria and the Gulf, and the EN posts serve the Gulf. Anything specific to one market (prices, currency, "travailler avec un studio en Algérie") goes in posts made for that market, with that market's link. A solo studio cannot feed eight accounts. (Recommendation; §1.10.)
2. **Make one master a week and cut it many ways.** Lay out each coded scene so that the 9:16 frame keeps its text inside the band that survives a 4:5 crop and every platform's interface. One render pipeline can then produce 9:16 (Reels, TikTok, Shorts, Stories, WhatsApp Status), 4:5 (LinkedIn, Instagram feed, Facebook feed) and a still-frame carousel. The 16:9 explainers for YouTube and the site are a separate monthly layout. (§1.4, §7.)
3. **Put the promise on screen at frame 0, in text.** With no voiceover, the text is the whole message. TikTok's own guidance is to state the proposition in the first 3 seconds [S15]. LinkedIn's is to show the most important content in the first 10 seconds [S20]. Instagram ranks on watch time, likes and sends [S8]. The working rule for this studio is the offer or the question within the first 2 seconds, with no logo intro. (§1.7.)
4. **Expect credibility from social, not lead volume.** Competitors' accounts are small. On 2026-10-26 the Facebook Pages had these followers: Piteur 20,730; Simplébo 2,999; Global Ads 1,766; INTOUCH 1,315; Symloop 383; UpGrowth 196; Pula Media 12; Dubai TechGuy 4. On TikTok, Pula Media had 25 followers and 7 videos, and UpGrowth had 72 followers and 5 videos. UpGrowth's YouTube channel has no content [S42]. The studios that score best win through search, directories and WhatsApp [V: Markets › Searches buyers make]. The job of organic social here is to give a buyer a living, consistent studio to check, plus slow compounding. (§9.)
5. **France: the founder's LinkedIn profile comes first, and video is not the best LinkedIn format.** Personal profiles get higher engagement than company pages (2.60% against 1.60%) [S24]. Carousels, documents and multi-image posts beat video on LinkedIn [S23][S24]. Post the 4:5 video, and also post the same frames as a PDF carousel. Keep links out of the post body: the reach penalty for external links grew to about 42% in 2025 in Ordinal's data [S25]. (§3.)
6. **Algeria: Facebook Page plus Instagram, in French first with Arabic alongside, and WhatsApp as the place where the conversation closes.** Facebook reaches 27.5 M people in Algeria and Instagram 13.5 M [S1]. The largest Facebook age group is 25–34 (35.5%) and 56% of users are men [S5]. Buyers expect WhatsApp, a reply promise and signs of a real business [V: Markets › Algeria]. Arabic done well is rare among competitors, so it is an open lane [V: Market - Algeria › Patterns]. (§2.)
7. **Gulf: post modestly on Instagram and TikTok. The free levers that matter more there are directories and Arabic pages.** In UAE searches for agencies, directories hold positions 1–7 [V: Market - Gulf › Buyer searches run]. The site has no AED or SAR prices, so Gulf videos show no price, or USD "about" figures only [FB §1.5]. Every Gulf piece says "studio based in Algeria" [V: Campaign › Rules for every ad]. (§4.)
8. **Use music cleared for every platform and the website, or music written in code.** The music libraries inside the platforms only cover their own platform: TikTok's Commercial Music Library covers TikTok only, and Meta's Sound Collection covers Meta only [S28][S29]. YouTube blocks any Short over 1 minute that carries a copyright claim [S17]. The WorkspaceHQ trailer sounds have no recorded licence [FB §3.6]. (§1.6.)
9. **On the website, self-host the MP4s instead of embedding YouTube.** The site's CSP allows `media-src 'self'` and `frame-src 'self'` only (index.html), and the site promises no trackers. A YouTube embed would break the CSP and add Google requests that clash with that promise, so link to YouTube instead. Where the published files live is an owner decision, because the site is deployed from the public repository. (§5, open question 3.)
10. **Measure with `?ref=` codes and the platforms' own insights only.** The WhatsApp prefill carries only `?ref=`, cleaned to `[A-Za-z0-9_-]` and cut at 20 characters (app.js:1954-1958). The codes in §1.8 are built to fit that.

---

## 1. What applies to every market

### 1.1 Audience size by platform (DataReportal Digital 2026, data from late 2025)

These are advertising-reach figures from each platform's ad tools, not active users. LinkedIn counts registered members. TikTok counts people aged 18 and over [S1]–[S4].

| Platform | Algeria [S1] | France [S2] | Saudi Arabia [S3] | UAE [S4] |
|---|---|---|---|---|
| Social media user identities (Oct 2025) | 27.5 M | 51.5 M | 38.6 M | 12.5 M |
| Facebook | 27.5 M | 31.5 M | 17.7 M | 9.70 M |
| Instagram | 13.5 M | 28.2 M | 18.2 M | 8.05 M |
| TikTok (18+) | 24.8 M | 23.4 M | 38.6 M | 12.5 M |
| YouTube | 25.4 M | 51.5 M | 27.5 M | 8.37 M |
| LinkedIn (members) | 5.50 M | 38.0 M | 12.0 M | 10.0 M |
| Snapchat | 9.78 M | 29.8 M | 25.3 M | 5.13 M |

What this changes:
- In Algeria, Facebook is still the largest platform, and TikTok and YouTube are close behind. Instagram reaches about half as many people as Facebook [S1].
- In France, YouTube has the widest reach, but the buyer here is a TPE/PME owner (§3), and LinkedIn's 38 M members matter more than raw reach [S2].
- In Saudi Arabia, TikTok and Snapchat lead [S3]. Snapchat is outside the owner's channel list; see §4.6.
- LinkedIn has 5.5 M members in Algeria [S1], 10.0 M in the UAE [S4] and 12.0 M in Saudi Arabia [S3]. The founder's LinkedIn reaches beyond France at no extra cost.

### 1.2 What the platforms reward (2025–2026)

- **Instagram:** the three signals that matter most are watch time, likes and sends. Mosseri, 22 Jan 2025: "average watch time, likes per reach, and sends per reach" [S8]. Sends weigh more for reaching non-followers [S8]. Reels can run up to 3 minutes [S10]. The profile grid shows 3:4 thumbnails, and 4:5 is the recommended upload for feed posts [S11]. Since December 2025 a post carries at most **5 hashtags**, and Instagram says "fewer (up to 5) more targeted hashtags" work better [S9]. Trial reels show a reel to non-followers first. Eligibility has changed over time: it was all professional accounts at launch and is reported as needing 1,000+ followers later, so check in the app [S13]. Reported in April 2026: accounts that mostly repost content they did not make lose recommendations to non-followers [S46]. Numidea's content is all original, but the clean master must be uploaded each time, never another platform's watermarked export.
- **Facebook:** every new video is now published as a Reel, with no length or format limit, and horizontal video is allowed [S12].
- **TikTok:** state the proposition in the first 3 seconds and the hook in the first 6. Use captions or text overlays, at "5–10 words per second" when using text. Shoot vertical 9:16 at 720p or above. Content "made for TikTok" performs best [S15] (ads guidance, last updated June 2025). Business accounts may choose only from the Commercial Music Library [S28].
- **YouTube:** Shorts are square or vertical videos of up to 3 minutes. A Short over 1 minute with an active copyright claim is blocked worldwide [S17]. For each Short, Studio reports "viewed vs swiped away", the share of viewers who chose to keep watching [S47]. Chapters need a first timestamp at 00:00, at least 3 timestamps in order, and at least 10 seconds each [S18].
- **LinkedIn:** video uploads rose 36% year on year, and LinkedIn added a full-screen vertical player on web and mobile [S21] (Feb 2025). Ads guidance recommends 4:5 vertical, 15–30 s for ads, the most impactful content in the first 10 s, subtitles, and SRT caption files [S20].
- **Frequency:** the posting-frequency data is correlational, not causal. In Buffer's Instagram study (2.1 M posts), moving from 1–2 to 3–5 posts a week brought about 12% more reach per post and faster follower growth; 3–5 a week is its recommended balance [S22]. In Buffer's LinkedIn study (2 M posts), moving from 1 to 2–5 posts a week added about 1,182 impressions per post [S23].

### 1.3 Muted viewing and burned-in text

- **Why every word is on screen:** the owner chose no voiceover, so the on-screen text is the message, not a subtitle. Platform guidance also assumes muted viewing: TikTok says to use captions or text overlays [S15], LinkedIn to consider subtitles [S20], and Meta-relayed guidance says to design for sound off [S30]. The often-quoted "85% of Facebook video is watched without sound" dates from 2016 and is a publishers' claim (Digiday). Do not quote it as current.
- **Reading time:** BBC subtitle guidance, as summarised by Clevercast, sets 160–180 words a minute, or about 0.33–0.375 s per word [S40]. TikTok's ads guidance allows 5–10 words a second [S15], which suits short punches, not explanations. Working rule for these videos: a hook card of up to 6 words, held at least 1.5 s; a body line held for 0.35 s per word plus 1 s, so a 9-word line stays about 4 s; never two new text blocks at once.
- **Sizes on a 1080×1920 canvas** (studio rule built from vendor guides that agree on about 60–80 px for caption text [S43]; check on a real phone):
  - Hook or headline: 96–140 px, at most 3 lines, about 16–20 Latin characters per line.
  - Body: 60–72 px, at most 3 lines, about 26–30 characters per line.
  - Small print (the Aperçu conditions, "env. / HT"): at least 44 px, held 3 s or longer and repeated in the post caption. Never set legal text smaller.
  - **Arabic:** set it 10–15% larger than the Latin size, with line-height 1.5 or more. Never add letter-spacing, because tracking breaks the joins [FB "How to use"]. Use Western digits, never start a line with a Latin word, and write ranges as «من … إلى …» [V: Campaign › Rules for every ad] [à relire par un arabophone natif].
  - Contrast: text sits on solid theme surfaces, never directly over a screenshot. Each theme's WCAG contrast pairs are already enforced by `scripts/themes-check.mjs` [V: BRAND.md, via FB §3.5].
- **The caption field still matters:** write the hook sentence and the searchable phrase in the caption's first line (§1.9). On YouTube, upload an SRT of the on-screen text in the video's language so the words are machine-readable. On LinkedIn, an SRT file is accepted [S20], but because the text is burned in, leave subtitles off there to avoid showing the text twice.

### 1.4 Safe zones and one layout that serves every ratio

| Placement | What is covered | Source and certainty |
|---|---|---|
| Instagram and Facebook Reels (1080×1920) | Top 14% (≈270 px), bottom 35% (≈672 px), 6% per side (≈65 px). The bottom 40% for ads that carry a disclaimer | Meta Ads Guide, Instagram Reels ad spec, quoted by Inro (Aug 2026) [S14]. Meta publishes **no** organic figure, so these are working numbers |
| TikTok (1080×1920) | The right-side button rail, the bottom caption block and the top bar. The safe zone "depends on the dimension, caption length" | TikTok publishes downloadable safe-zone files, including a **separate RTL file for Arabic** [S16]. Use the real files: the interface moves for Arabic |
| YouTube Shorts | No official figure found in this research | Use the Reels numbers |
| Instagram profile grid | 3:4 centre crop of each post | [S11] |
| LinkedIn feed (4:5) | Little interface over the frame | Keep 5% margins |

**One layout for every ratio** (derived from the figures above; inference, test on phones):
- Build every 9:16 master so that all text and key visuals sit inside **x 80–940 px, y 290–1240 px**. That box clears Reels (top 270, bottom 672), keeps clear of TikTok's right-side rail (about 140 px from the right edge) and the 6% side margins, and lies inside the 4:5 centre crop (y 285–1635) and the 3:4 grid crop (y 240–1680).
- Below y 1240, use only decoration: plates, motion and texture, nothing that must be read.
- For Arabic masters, mirror the box: x 140–1000. The TikTok RTL safe file decides the final value [S16].
- The 4:5 cut is a crop of the master, with the text block re-centred. The 16:9 explainers are laid out separately (§5).

### 1.5 Format sheet: what to make for each placement

| Placement | Ratio and resolution | Platform maximum | Numidea's target length | Notes |
|---|---|---|---|---|
| Instagram Reels | 9:16, 1080×1920 | 3 min [S10] | 20–45 s (explainers up to 60–90 s) | Pick the cover frame with the grid's 3:4 crop in mind [S11]; ≤5 hashtags [S9] |
| Instagram feed carousel | 4:5, 1080×1350 | — | 5–8 frames | Stills taken from the master |
| Facebook Page (Reels) | 9:16; 16:9 also allowed | No limit since 2025 [S12] | Same files as Instagram | Cross-post through Meta Business Suite [S31] |
| TikTok | 9:16, at least 720p [S15] | 10 min (ads spec [S16]) | 15–40 s | Commercial Music Library or own licensed music [S28]; RTL safe file for Arabic [S16] |
| LinkedIn video | 4:5 recommended [S20]; 9:16 shows in the vertical player [S21] | Up to 30 min for ads [S20]; organic about 15 min on desktop (third-party [S48]) | 30–75 s | First 10 s carry the point [S20]; link in a comment or none (§3.3) |
| LinkedIn document carousel | PDF, 4:5 or 1:1 pages | — | 6–10 pages | Carousels beat video on LinkedIn [S23][S24] |
| YouTube long-form | 16:9, 1920×1080 | — | 2–5 min explainers; 60–90 s trailer | Chapters [S18]; an SRT per language |
| YouTube Shorts | 9:16 or square | 3 min [S17] | 20–60 s | Music must be cleared: claimed Shorts over 1 min are blocked [S17] |
| Website | 16:9 (desktop), 9:16 or 4:5 (mobile) | — | 45–90 s | Self-hosted MP4 with a poster image, `preload="none"`, click to play, a VTT `<track>`, and a still image under `prefers-reduced-motion` |
| WhatsApp Status | 9:16 | — | 15–30 s | Seen only by people who saved the number (§2.5) |

**Lengths.** Wistia's 2025 report: videos under 5 minutes are watched to 47% on average, videos of 5–30 minutes to 38%, and videos over 30 minutes to 21%. The longer videos convert better (17% over 30 min, 5% at 3–5 min, 2% below that) [S26]. Wistia's own page reports 52% for videos under a minute [S27]. For a studio with no proof, keep social cuts short to win attention, and put the depth (packages, process) in the 2–5 minute YouTube and website explainers that a buyer opens on purpose.

### 1.6 Music without voiceover: licensing

- **The libraries inside the platforms do not travel.** TikTok's Commercial Music Library is cleared for TikTok only, and business accounts can pick only from it [S28]. Instagram's main music library is for personal, non-commercial use and is closed to some business accounts. Its Sound Collection is royalty-free but tied to Meta products [S29]. A single master posted to four platforms and the site needs one licence that covers all of them.
- **Options, from most to least portable:**
  1. **Music written in code**, rendered offline with the video. The WorkspaceHQ trailer already shows the pattern: a WebAudio sampler on the composition clock with an offline WAV mixdown [FB §3.6]. Use only sounds the studio synthesises or records itself. Do not use `music1/2.mp3`, which has no recorded licence [FB §3.6].
  2. **One stock track with a written licence** for social media, a website and YouTube. Keep the licence PDF with the render.
  3. **YouTube Audio Library tracks under CC BY**, which can be used anywhere with credit. The standard Audio Library licence's terms outside YouTube are not stated on YouTube's help page, so use those tracks only on YouTube [S19].
- **Never use** trending platform sounds on the business accounts, and never use any newly generated music (owner rule [FB "How to use"]).

### 1.7 The first 2 seconds: hook patterns that stay honest

These patterns follow the platform guidance in §1.2 [S8][S15][S20]. The "2 seconds" target is the studio's own, stricter rule. Each pattern uses only facts from the facts bank [FB §1]:

| # | Pattern | Frame 0 (FR) | EN | AR [à relire par un arabophone natif] | Fact source |
|---|---|---|---|---|---|
| H1 | The promise | Voyez votre nouveau site avant de payer. | See your new site before you pay. | شاهد موقعك الجديد قبل أن تدفع. [à relire par un arabophone natif] | [FB §1.3]; [V: Campaign › The ads] |
| H2 | The zero | Payé jusqu'ici : 0 DA. (the timeline's last moment, shown first) | Paid so far: 0. | المدفوع حتى الآن: 0 [à relire par un arabophone natif] | [FB §1.3] |
| H3 | The buyer's question | Votre site ne vous ressemble plus ? | Does your site still look like your business? | هل ما زال موقعك يشبه شركتك؟ [à relire par un arabophone natif] | Outreach kit P1 [V: campaign-outreach-fr › 5.5], restated |
| H4 | The mirror | A page flips from LTR to RTL in 1 s: « L'arabe, ce n'est pas une traduction. » | "Arabic isn't a translation. It's a layout." | العربية ليست ترجمة، بل تصميم من اليمين إلى اليسار. [à relire par un arabophone natif] | [FB §1.8]; outreach kit P4 |
| H5 | The price card | Site vitrine : env. 90 000 – 160 000 DA HT. | — (Gulf: no price, §4) | — | [FB §1.5] |
| H6 | The plate | An engraved plate inks itself in, then becomes a live homepage | — | — | Brand motion [FB §3.6] |
| H7 | The checklist | The first box ticks at frame 0: « Design sur mesure — jamais un modèle repeint. » | "Custom design — never a re-themed template." | تصميم مخصّص — لا قالب معاد تلوينه أبداً. [à relire par un arabophone natif] | [FB §1.5] |

Rules: no counters, rankings, client results, "places left", or comparisons that name competitors [V: Gaps and plan › What not to copy; Campaign › Rules for every ad]. When H1 or H2 is used, the Aperçu conditions must appear on screen before the end and in full in the caption [FB §1.3].

### 1.8 Measurement without trackers

- **What already exists:** `?ref=` and `utm_*` are written into the mailto body, and `?ref=` alone is appended to the WhatsApp prefill as ` [code]` (app.js:1924-1958). The site stores nothing [FB §1.11].
- **Code format:** `{market}-{platform}-{lang}-{id}`, at most 20 characters, using only `a-z 0-9 -`:
  - Markets: `dz`, `fr`, `gu`, `yt`, `web`.
  - Platforms: `fb`, `ig`, `tt`, `li`, `ys` (Shorts), `yl` (YouTube long-form), `wa`, `gbp`, `dir`.
  - Examples: `dz-ig-ar-w03`, `fr-li-fr-w05`, `gu-tt-en-w04`, `yt-yl-fr-apercu`.
  - Fixed codes for profiles and directories: `dz-ig-bio`, `gu-tt-bio`, `fr-li-bio`, `fr-malt`, `gu-clutch`, `dz-gao` (Go Africa Online).
- **Why the bio link matters:** Instagram and TikTok captions do not carry clickable links. Point the bio links at market-specific URLs, each with its own code and the right `?lang=`/`?cur=`: France `?lang=fr&cur=eur`, Algeria `?lang=fr` or `?lang=ar`, Gulf `?lang=en&cur=usd` or `?lang=ar&cur=usd` [FB §1.11].
- **Add one question to the first WhatsApp reply:** « Où nous avez-vous découvert ? » Log the answer next to the ref in the existing lead log (business and stage only, never names or numbers [V: Campaign › Budget gates]).
- **Weekly tally (gap plan L10):** count leads by `?ref=`, Aperçu requests and yeses, plus each platform's own numbers:
  - Instagram: watch time, sends per reach, likes per reach [S8].
  - YouTube: Shorts viewed vs swiped away [S47] and retention.
  - LinkedIn: impressions and average watch time [S21].
  - TikTok: views and profile visits.
  - Compare markets only after 8 weeks [V: Gaps and plan › L10].

### 1.9 Hashtags and the words buyers type

- **Limits:** at most 5 hashtags on Instagram [S9]. Mosseri said in May 2025 that hashtags do not raise visibility but tell people what a post is about [S9]. On LinkedIn, use 0–3.
- **Where words do more work:** in the first caption line and the on-screen hook. Take them from the queries buyers actually ran [V: Markets › Searches buyers make].

| Market | Searchable phrase (caption line 1 and on screen) | Hashtags (≤5) |
|---|---|---|
| Algeria FR | « création site web Algérie », « site vitrine prix DA », « Bordj Bou Arréridj » | #creationsiteweb #sitevitrine #algerie #bordjbouarreridj #pme |
| Algeria AR [à relire par un arabophone natif] | «تصميم مواقع الجزائر»، «إنشاء موقع إلكتروني الجزائر سعر» | #تصميم_مواقع #الجزائر #برج_بوعريريج #موقع_إلكتروني |
| France | « création site vitrine prix PME », « site sur mesure » | #creationsiteweb #sitevitrine #tpe #pme (LinkedIn: 0–3) |
| Gulf EN | "website design dubai", "website design riyadh", "bilingual website arabic english" | #websitedesign #dubaibusiness #riyadhbusiness #arabicwebsite |
| Gulf AR [à relire par un arabophone natif] | «تصميم مواقع الرياض»، «تصميم موقع شركة» | #تصميم_مواقع #الرياض #دبي #مواقع_الكترونية |

### 1.10 Accounts, handles and names

- **Handle:** one handle across all platforms, checked against the namesakes that already outrank Numidea in searches for its own name (numidialabs.com, numidia-labs.fr) [V: Gaps and plan › #1]. The Arabic name in prose is نوميديا لابز, the spelling the site uses [FB §1.1] [à relire par un arabophone natif]. Fix one spelling and use it everywhere [V: Market - Gulf › Gaps, item 7].
- **Bio** (one line per language): « Studio web & logiciel · Bordj Bou Arréridj, Algérie · FR / EN / AR » plus the Aperçu with its conditions [FB §1.1, §1.3]. Say nothing about team size, years or clients [FB §2.1].
- **Before the bio links to the founder's public profiles:** the GitHub, Behance and Linktree bios need rewriting first [V: Gaps and plan › #5; FB §1.1].

### 1.11 Gates: what may be posted before the owner decisions land

| Content type | May go live now? | Gate |
|---|---|---|
| Brand pieces: trailer, plates, the studio's own trilingual site, the method, the published packages and prices | Yes | Arabic reviewed by a native speaker before posting |
| Glaive Store | Yes | The "Démo de portfolio · pas un client" badge stays in frame [FB §2.4] |
| WorkspaceHQ | Yes | Described as the founder's product; never "open source" [FB §2.1 #11] |
| Posts that invite people to write ("Écrivez-moi APERÇU", WhatsApp CTA) | **Gated** | Privacy page live, and a real legal name, before any post that invites messages [V: campaign-outreach-fr › 5.4]; a dedicated WhatsApp number decided [V: Owner decisions pending › Dedicated WhatsApp number] |
| Any client screenshot, name or logo (Bordj Steel, Alliance Travel, AlmaFlowClim) | **Gated** | Written permission from each client [OWNER-CONTENT §6; FB §2.3]; AlmaFlowClim never shown as live on its own domain |
| Nomara | **Never** | [FB §2.1 #6] |
| Studio credentials (RC/NIF, legal notice) | **Not yet** | No published identity [FB §2.1 #18] |

Note: the 4-week LinkedIn plan in the outreach kit had P2 (Bordj Steel) on 22 Oct and P5 (Alliance Travel) on 29 Oct [V: campaign-outreach-fr › 5.4]. Both use client screenshots, so both are gated on permission. Check whether P2 already went out.

---

## 2. Algeria: Facebook and Instagram (FR + AR)

### 2.1 Who buys and where they look

- **The buyer:** the owner or manager of a company, ideally a registered one, because the Aperçu requires it [FB §1.3]. They compare against visible pack prices of 20,000–60,000 DA and Ouedkniss ads at 10,000–50,000 DA (unverified) [V: Markets › Algeria, Price landscape].
- **How they check a seller:**
  - WhatsApp first, with a pre-filled message and a reply promise (UpGrowth: 4 working hours).
  - Signs of a real business: address, RC/NIF, ownership promises.
  - Nearly every seller links a Facebook page [V: Market - Algeria › What buyers expect].
  - Symloop's blog calls Facebook and Instagram the number-one ad platforms in Algeria [V: Market - Algeria › What buyers expect].
- **Where they search:** French dominates search. Arabic queries return few Algerian agencies. No web agency ranks for Bordj Bou Arréridj in French or Arabic. "Numidea Labs" returns nothing [V: Markets › Algeria, Searches buyers make].
- **Ouedkniss** ranked 11th among Algerian websites by organic search traffic in July 2025 (Ahrefs) [S41]. It is where the low price anchor lives.

### 2.2 Platform facts

- Facebook reaches 27.5 M, Instagram 13.5 M, TikTok 24.8 M adults, YouTube 25.4 M and LinkedIn 5.5 M members [S1].
- Median mobile download speed is 41.21 Mbps at the end of 2025 [S1], fast enough for 1080p Reels.
- NapoleonCat counts about 32.6–32.9 M Facebook users in September 2026 (the page gives both figures). 25–34 is the largest group (35.5%), 35–44 is 21.3%, and 45–54 is 10.3%. The split is 56% men, 44% women [S5]. Those three age groups are the business owners.
- **Language:** a 2024 study of Algerian Facebook Live sales found that French is used for its prestige and Algerian Arabic for comprehension and reach. The audience "showed a preference for Algerian Arabic with French loanwords", and too much code-switching "can alienate" some viewers [S7].

### 2.3 Recommendations

1. **Language:** French is the lead version for Algeria, because French dominates the market and its search [V: Market - Algeria › Language]. Arabic is the second version, and Arabic done well is the differentiator [V: Market - Algeria › Patterns].
   - Keep on-screen Arabic in clear Modern Standard Arabic, so it can also serve the Gulf.
   - Let the native reviewer decide whether the Algerian **post caption** may use a lighter Algerian register, in line with [S7]. Do not mix French and Arabic inside one frame.
   - Have the Algerian Arabic and the Gulf Arabic reviewed separately: the Gulf kit asks for a reviewer "familiar with Gulf business usage" [V: Campaign › Launch gates].
2. **Formats:**
   - Reels (9:16, 20–45 s), cross-posted to the Facebook Page as Reels [S12].
   - One 4:5 carousel a week: "ce qui est inclus" for a package, or the 4 steps.
   - Stories with a link sticker to the bio-link URL.
3. **Content that answers this market's questions:**
   - **The price anchor:** a factual "Ce qui est inclus dans Essentiel" checklist. Do not compare with other sellers. The vault asks for an Algeria-specific answer to the 20k–35k anchor [V: Market - Algeria › What is missing, 5].
   - **Arabic RTL as a craft** (hook H4).
   - **The Aperçu** (H1/H2), with conditions, posted once the CTA gate opens.
   - **Studio place and time:** the plates, Bordj Bou Arréridj, « réponse < 24 h ouvrées » [FB §1.7].
   - No payment methods or terms in any post until they are decided [FB §2.2].
4. **Cadence (sustainable):** 3 Instagram posts a week (2 Reels, FR + AR, and 1 carousel), all cross-posted to the Facebook Page, plus 2 WhatsApp Status posts. Buffer's data supports 3–5 posts a week [S22].
5. **Timing:** the Algerian weekend is Friday–Saturday, so the working week is Sunday–Thursday [S39]. Schedule posts for working days and read Instagram Insights after 4 weeks before fixing times.

### 2.4 Free levers beyond social (Algeria)

| Lever | Eligibility and facts | Recommendation | Source |
|---|---|---|---|
| Google Business Profile, Bordj Bou Arréridj | Algeria is in Google's list of countries. A profile needs "a physical location that customers can visit, or travels to customers". A service-area business hides its address. A virtual office is not eligible | Open it only if the founder really meets clients in person, at a place or by travelling to them. Set it up as a service-area business with the address hidden. No keywords in the business name | [S32][S33][S34]; [V: Gaps and plan › #7] |
| Facebook Page "as a business check" | Nearly every Algerian seller links one | Same name, bio, hours and WhatsApp as the site. Pin the trailer and the Aperçu explainer. Never embed a Facebook plugin on the site | [V: Gaps and plan › #7] |
| WhatsApp Business: catalog, greeting, away message, Status | Catalog items hold a name, price, description and link [S36]. Status is visible to contacts who saved the number, under the account's privacy setting [S37] | Make one catalog item per package and one for the Aperçu, with the published ranges and « env. HT ». Add the away message with the reply time. Post Status twice a week | [S36][S37]; [V: Gaps and plan › Step 1] |
| Go Africa Online (dz) | Has a sign-up page and a paid "Pack visibilité". Whether a basic listing is free was not confirmed | Basic listing only, once the legal identity is real | [S38]; [V: Gaps and plan › #11] |
| Local SEO pages L3/L4 | No studio ranks for BBA. SnetProDz ranks with one Arabic DZD price page | « Création de site web à Bordj Bou Arréridj » (FR + AR) and « Combien coûte un site web en Algérie » (FR + AR), each with an embedded self-hosted explainer | [V: Gaps and plan › #12] |
| LinkedIn founder posts in French | 5.5 M members in Algeria [S1] | The France LinkedIn posts also reach Algerian industrial B2B buyers. No extra work | [S1] |
| Ouedkniss | The low anchor; web-design ads from about 10k DA (unverified) | **Not recommended** at launch: a listing there places the studio next to its lowest anchor. Reconsider only with a priced one-page offer (gap #15) | [V: Markets › Algeria]; [S41] |

### 2.5 What Algerian competitors post (vault and spot-check, 2026-10-26)

- **Vault:** nearly every Algerian seller links Facebook. UpGrowth links Facebook, Instagram, YouTube, LinkedIn and TikTok; Piteur links six networks; follower counts were unknown [V: Competitors notes, R13 rows].
- **Spot-check, Facebook Page followers** [S42]: Piteur Studio 20,730 (founded 2013/2014); Global Ads 1,766; INTOUCH 1,315; Symloop 383; UpGrowth 196.
- **Spot-check, other platforms** [S42]:
  - UpGrowth on TikTok: 72 followers, 5 videos. Its YouTube channel has no content.
  - UpGrowth's LinkedIn company page: 1,126 followers. Its posts are long French founder-voice texts about company creation and its business hub, with a few videos, not about web design.
  - Piteur's YouTube: 15 subscribers, 3 videos, the latest about 3 years old. Piteur's LinkedIn: 325 followers.
- **What this means:** nobody in this field posts regular video about web design, in French or in Arabic. A steady weekly Reel in both languages would already stand out. But follower counts this small say the deals close through search, WhatsApp and referrals. Social is the place where buyers check you.

---

## 3. France: Instagram and LinkedIn (FR)

### 3.1 Who buys and where they look

- **The buyer:** the dirigeant of a TPE or PME. Before paying a studio abroad they check:
  - a company they can verify (mentions légales, SIREN);
  - an invoice their accountant accepts;
  - a contract under a known law;
  - protection after payment;
  - ownership;
  - a named contact;
  - reviews with counts [V: Markets › France, What buyers expect].
- **How they find offshore studios:** through directories (Sortlist, Codeur, La Fabrique du Net, Malt). French price searches are owned by directories, marketplaces and Kolonell [V: Markets › France].
- **Where French small firms are present** (Afnic, « Réussir avec le web » 2025, about 2,500 micro-enterprises, TPE and PME) [S6]:
  - 64% on social networks (−11 points in a year) and 61% with a website.
  - Facebook 48%, LinkedIn 47%, Instagram 47%; WhatsApp 11%, YouTube 10%, TikTok 10%.
  - Among firms 3 years old or more: Facebook 72%, LinkedIn 69%, Instagram 64%, YouTube 20%.
  - Caveat: the panel is self-diagnosed and 54% of firms are under a year old [S6]. The established firms are Numidea's buyers.

### 3.2 Platform facts

- Instagram reaches 28.2 M, Facebook 31.5 M, YouTube 51.5 M and TikTok 23.4 M adults. LinkedIn has 38.0 M members [S2].

### 3.3 LinkedIn (primary channel for France)

1. **Post from the founder's profile.** In Metricool's 2026 study (673,658 posts):
   - Personal profiles reach 2.60% engagement against 1.60% for company pages, with similar impressions per post.
   - Multi-image posts reach 3.71% engagement against 1.80% for standard video.
   - Carousels average 1,451 impressions against 606 for video [S24].
   - Buffer finds PDF carousels get 278% more engagement than videos, and videos 84% more than text [S23].
   - So each week, post the video (4:5, 30–75 s) **and** a PDF carousel made from the same frames. The company page reshares.
2. **Links:** posts with external links lost about 26.5% of their reach on average in Ordinal's data. The penalty was about 5% in 2023 and about 42% in 2025, and it hits company pages hardest [S25]. Ordinal finds the link-in-comment workaround "directionally positive but not conclusive", with fewer clicks [S25]. Keep the outreach kit's practice of putting the link in the first comment [V: campaign-outreach-fr › 5.1], and put the profile URL with `?ref=fr-li-bio` in the "Featured" section.
3. **Cadence:** 2 posts a week, the plan's own range of 2–3 [V: campaign-outreach-fr › 5.1], plus 15–20 minutes a day of useful comments under target buyers' posts. Buffer: moving from 1 to 2–5 posts a week adds about 1,182 impressions per post [S23]. Keep 8:30 Paris time from the kit, and check it in the post analytics.
4. **Formats that fit LinkedIn:**
   - The Aperçu explainer (60 s).
   - « Mes prix » (packages in EUR HT with « env. ») [FB §1.5].
   - « Ce que contient un site Studio » (carousel).
   - « Travailler avec un studio en Algérie » (time zone, languages, the Aperçu). Leave out invoicing and VAT until a legal identity exists [FB §2.1 #19].
5. **No automation:** no automated invitations or pods [V: campaign-outreach-fr › 5.1].

### 3.4 Instagram (secondary channel for France)

- France and Algeria share the FR Reels from the one account.
- Add one France-only post every other week: prices in EUR HT, a « ?lang=fr&cur=eur » bio link, and French-only screens.
- **Loi Toubon:** the campaign kit requires ads shown in France to be entirely in French, including image text and screenshots [V: Campaign › Legal points]. Apply the same rule to organic posts aimed at France: a promotional video is advertising in substance. Have the lawyer confirm.

### 3.5 Free levers beyond social (France)

| Lever | Facts | Recommendation | Source |
|---|---|---|---|
| Malt | Algeria is an open country for freelancer sign-up (help page updated 2026-10-13) | Sign up after the registration and NIF exist, with a small test payout first | [V: Market - France › Fact-check]; [V: Campaign › Outreach, Platforms] |
| Sortlist | Free listing; providers pay to answer leads; some agencies call the paid leads costly | Free profile with EUR "à partir de" prices; no paid credits now | [S35] |
| Clutch / GoodFirms | Clutch's standard profile is free, with reviews collected online at no cost; the phone-interview review is for paying providers | Free profile once the first client agrees to review | [S34b] |
| La Fabrique du Net, Codeur | Own French price searches | Profile once there is a legal identity | [V: Markets › France] |
| Google Business Profile | Needs a location customers visit, or travelling to customers [S32]. The studio has no French presence | **Not eligible in France.** Do not create one | [S32] |
| French guide page (L5) | « studio hors de France : facture HT, autoliquidation, contrat, propriété » | Write it after X2 and N2. A 2–3 minute YouTube explainer can go with it | [V: Gaps and plan › L5] |

### 3.6 What French-market competitors post (spot-check, 2026-10-26)

- **Simplébo:** YouTube channel with 1.17 K subscribers [S42]. Its videos:
  - « Présentation de Simplébo en 1 minute »: 15 K views, 2 years old.
  - Named client testimonial videos: about 100–440 views each.
  - Educational videos: « 7 pages web indispensables » 4.7 K views; « Qu'est-ce que le référencement naturel » 6.9 K views.
  - A welcome video by Alexandre Bonetti (1 month old) and a few Shorts, the best at 5.2 K views.
  - Facebook: 2,999 followers.
- **What to borrow:** the one-minute presentation and the educational explainers. Testimonials are impossible for Numidea today [FB §2.1 #10].
- **Kolonell:** 23 followers on its LinkedIn company page [S42]. It wins France through programmatic SEO (a 40,016-URL sitemap), not social [V: Competitors › Who to watch, France].
- **Scroll:** wins trust through named staff on LinkedIn and Google reviews [V: Competitors › Who to watch, France].

---

## 4. Gulf: Instagram and TikTok (AR + EN)

### 4.1 Who buys and where they look

- **The buyer:** an SME manager in Dubai or Riyadh. They expect:
  - a price in AED or SAR;
  - WhatsApp on a local number with a reply time;
  - a legal identity;
  - openness about working from abroad;
  - speed in days;
  - Arabic that is written, not translated [V: Markets › Gulf, What buyers expect].
- **Language by country:** in the UAE, many SME sellers are still English-only; in Saudi Arabia, Arabic is the default [V: Market - Gulf › What buyers expect, 7].
- **Where they search:** English agency queries return Clutch, GoodFirms and DesignRush first. Price queries return guides. Arabic city queries reward city pages (Tahwal, Elryad) [V: Market - Gulf › Patterns].

### 4.2 Platform facts

- Saudi Arabia: TikTok reaches 38.6 M adults, Instagram 18.2 M, Snapchat 25.3 M. LinkedIn has 12.0 M members [S3].
- UAE: TikTok reaches 12.5 M adults, Instagram 8.05 M, Facebook 9.70 M. LinkedIn has 10.0 M members [S4].
- A Redseer report (cited by Gulf News, Sep 2025) says 61% of Saudi SMBs report that TikTok improved their visibility [S44]. That figure reflects the businesses' own perception. The article quotes TikTok's public-policy lead alongside it and does not say who commissioned the report.

### 4.3 Recommendations

1. **Languages:** EN for the UAE and AR for Saudi Arabia, posted on the same accounts (§0.1). Gulf Arabic needs a reviewer familiar with Gulf business usage [V: Campaign › Launch gates]. Lead Arabic content with Arabic-language work: the studio's own `?lang=ar` site and the neutral « شعارك هنا » demo homepage [à relire par un arabophone natif]. Do not lead with a French client site [V: Market - Gulf › Recommendations, 8].
2. **Honesty specific to the Gulf:**
   - Say "studio based in Algeria" in every piece.
   - No flags, landmarks or local-office look; mock-ups show fictional businesses; no payment methods [V: Campaign › Rules for every ad].
   - **No price on screen** until AED and SAR exist (gap N7). If a price is needed, show USD "about … excl. tax" exactly as the site shows it [FB §1.5].
   - Show the time zone line: UTC+1, 2 h behind Riyadh, 3 h behind Dubai [FB §1.1].
3. **Formats:**
   - The same 9:16 masters in AR and EN.
   - On TikTok, design with TikTok's RTL safe file for Arabic [S16].
   - TikTok rewards a less polished, native look [S15]. The brand's engraved plates are the opposite of that, so keep the typography bold and the cuts fast in TikTok versions.
4. **Cadence:** 2 TikToks a week (1 AR, 1 EN) and the same 2 Reels on Instagram. Do not post more until the 8-week review.
5. **Timing:** in Saudi Arabia the weekend is Friday–Saturday and the working week Sunday–Thursday. The UAE government moved to Saturday–Sunday in 2022, and private companies set their own week [S39]. Schedule for Sunday–Thursday mornings in Gulf time, which is 2–3 h ahead of Algeria [FB §1.1].
6. **Expectation:** this is the hardest organic market. There is no local proof and no local number, and new accounts start with zero followers. Gulf competitors are barely present on TikTok either (§4.5), and their business comes through search and directories. Keep the effort here small and steady, and put the extra time into the levers in §4.4.

### 4.4 Free levers beyond social (Gulf)

| Lever | Facts | Recommendation | Source |
|---|---|---|---|
| Clutch / GoodFirms / DesignRush | Directories hold positions 1–7 for "web design agency dubai small business" | Free Clutch profile [S34b]; GoodFirms; one a week after the legal identity exists | [V: Market - Gulf › Buyer searches run]; [V: Gaps and plan › L1] |
| Arabic pages that can rank | Tahwal and Elryad rank with Arabic city and price pages | /ar/ entry page (L2), then one Arabic guide page. Never imply a local office | [V: Market - Gulf › Patterns]; [V: Gaps and plan › L2] |
| WhatsApp | Buyers expect a local number and a reply time | State the reply time in Gulf time on the profile and in the away message. A local number is not possible today | [V: Markets › Gulf] |
| Google Business Profile | Not eligible: no location in the Gulf [S32] | None | [S32] |
| LinkedIn (EN) | 10.0 M members in the UAE, 12.0 M in Saudi Arabia [S3][S4] | Optional: post the EN cut on the founder's LinkedIn once a month. Not one of the owner's chosen Gulf channels, so treat it as a by-product | [S3][S4] |

### 4.5 What Gulf competitors post (vault and spot-check, 2026-10-26)

- **Vault:** Pula Media, i17creator, Riyadh Designer and NetSoft link Instagram. i17creator also links TikTok and X. Instagram returned HTTP 429, so follower counts were unknown [V: Market - Gulf › What buyers expect, Social].
- **Spot-check** [S42]. Instagram follower counts were still unreadable (login wall).

| Competitor | TikTok | Other platforms |
|---|---|---|
| Pula Media | 25 followers, 7 videos | LinkedIn 670 followers; Facebook 12 |
| i17creator | 9 followers, 6 videos; bio pins "a cinematic short film" | — |
| Riyadh Designer | 0 followers, 1 video | — |
| Dubai TechGuy | 3 followers, 1 video | YouTube: 1 Short, 84 views; Facebook: 4 followers |

- **What this means:** the Gulf studios with the best scores (Pula Media 34/42, The Web Makers 32/42) win on local proof and search, not social video. An Arabic RTL craft series would face little competition on TikTok, but do not expect it to bring leads by itself.

### 4.6 Not now (outside the owner's channel list)

- **Snapchat** reaches 25.3 M in Saudi Arabia [S3].
- **TikTok in Algeria** reaches 24.8 M adults [S1]. The single TikTok account will be seen by some Algerian viewers anyway, but this is an inference about how distribution works, not a measurement.
- Revisit both at the 8-week review.

---

## 5. YouTube and the website

### 5.1 Role

- YouTube reaches 51.5 M in France, 25.4 M in Algeria, 27.5 M in Saudi Arabia and 8.37 M in the UAE [S1]–[S4].
- For Numidea, YouTube is **the library and the search surface**: the long explainers a buyer watches on purpose, plus Shorts made from the weekly master. Simplébo's channel shows the pattern: a one-minute presentation and educational explainers draw the views (§3.6) [S42].

### 5.2 The explainer series (16:9, FR first, then AR and EN)

| Video | Length | Chapters (≥3, each ≥10 s, first at 00:00 [S18]) | Facts |
|---|---|---|---|
| Brand trailer | 60–90 s | none | [FB §1.1, §1.8]; plates |
| L'Aperçu | 90–120 s | 00:00 La promesse · Vous envoyez votre contenu · 5 jours ouvrés · La visio · Vous décidez · Les conditions | [FB §1.3] |
| Essentiel / Studio / Moteur (one each) | 2–3 min | Pour qui · Ce qui est inclus · Délai · Fourchette de prix · Support inclus · Comment démarrer | [FB §1.5, §1.7] |
| Maintenance | 60–90 s | Ce que c'est · Prix · Sans engagement | [FB §1.5]. Do not describe what it covers [FB §2.2] |
| The five main services (one each) | 60–120 s | — | [FB §1.6] |
| « Quatre étapes. Zéro surprise. » | 90 s | One chapter per step | [FB §1.4] |

- **Cadence:** one long explainer a month, in one language, and one Short a week taken from the weekly master.
- **Per upload:** an SRT per language, a description with the chapters, a link with `?ref=yt-yl-{lang}-{id}`, and a thumbnail designed in the brand's themes.

### 5.3 Website embedding

- **Hosting:** self-host the MP4s (H.264, 720p and 1080p), each with a poster image and `preload="none"`. Play on click, never autoplay with sound. Add a VTT `<track>` per language. Under `prefers-reduced-motion`, show a still image with a play button. Keep within the page-weight budget [V: Motion and illustration].
- **Why not a YouTube iframe:** the site's CSP (`frame-src 'self'`, `media-src 'self'`) blocks it, and the player would add Google requests that clash with the site's no-tracker promise. **Link to the YouTube video**: zero-request link cards are the honest option.
- **Placement:** the Aperçu explainer on the Aperçu card and on /fr/apercu/ (design proposal step 3), and each package explainer on its package card.
- **Owner decision:** the site is deployed from the public repository, and the standing rule keeps marketing material out of it. Three ways forward:
  - (a) Host the final MP4s on another origin. This means a CSP `media-src` change and one third-party request.
  - (b) Allow **final published videos only**, never scripts, plans or source files, into the site's deploy.
  - (c) Publish them on the site's host outside git.

---

## 6. Free organic levers, all markets

The plan's order is #1–#3 first: domain, legal identity, then reviews [V: Gaps and plan].

| # | Lever | Markets | Precondition | Effort | Source |
|---|---|---|---|---|---|
| 1 | Own domain and domain email (all bios and links move once) | All | Owner decision N1 | Owner 1–2 h, dev about 1 day | [V: Gaps and plan › #1] |
| 2 | WhatsApp Business set-up: profile, greeting, away message, catalog, Status | DZ (and all) | Dedicated number decided; privacy page | Half a day | [S36][S37]; [V: Gaps and plan › Step 1] |
| 3 | Facebook Page, Instagram, TikTok, YouTube; LinkedIn company page | All | Handle decided | Half a day | [V: Gaps and plan › X4] |
| 4 | Founder LinkedIn profile per the kit (week 0) | FR, DZ | Real photo of Yasser (a photograph, never generated) | 1–2 h | [V: campaign-outreach-fr › 5.2] |
| 5 | Google Business Profile as a service-area business | DZ only | Real in-person contact with clients | 1 h plus verification | [S32][S33][S34] |
| 6 | Directories, one a week: Malt, Sortlist (FR); Clutch, GoodFirms (Gulf); Go Africa Online (DZ) | FR, Gulf, DZ | Legal identity; then the first reviews | 1–2 h each | [S34b][S35][S38]; [V: Gaps and plan › L1] |
| 7 | Local and guide pages, each with an explainer: BBA (FR/AR), Algerian prices (FR/AR), studio abroad (FR), /ar/ and /en/ entry pages | DZ, FR, Gulf | Owner facts per page | About 1 day each | [V: Gaps and plan › L2–L5] |
| 8 | Client reviews: Google, Clutch, LinkedIn recommendations | All | Permission first, then a profile to review on | Owner messages | [V: Gaps and plan › #3] |

---

## 7. Weekly cadence for a one-person studio

**Production (about 6–8 hours a week; the first month costs more while the scene templates are built):**
- **Sunday or Monday (1 h):** pick the week's topic from the series list, draft the on-screen text in FR from the facts bank, then EN and AR, and send the AR to the reviewer the same day.
- **Monday–Tuesday (2–3 h):** build or adapt the coded scenes and render:
  - the 9:16 master × 3 languages;
  - a 4:5 crop in FR (LinkedIn);
  - stills: a PDF carousel (LinkedIn) and 4:5 images (Instagram).
- **Wednesday (1 h):** QA on a real phone (safe zones, reading time, Arabic shaping), then schedule:
  - Meta Business Suite for Instagram and Facebook [S31];
  - TikTok Studio scheduler on desktop, reported to allow up to 10 days ahead, unconfirmed [S45];
  - LinkedIn's native scheduler [V: campaign-outreach-fr › 5.1].
- **Daily (15–20 min):** LinkedIn comments, replies within the working day [V: Campaign › R4].
- **Monthly (4–6 h):** one 16:9 explainer.

**Publishing grid (one week):**

| Day (working days) | Instagram + Facebook | TikTok | LinkedIn (founder) | YouTube | WhatsApp Status |
|---|---|---|---|---|---|
| Sun | AR Reel (DZ/Gulf) | AR cut | — | — | AR |
| Tue | FR Reel (DZ/FR) | — | Video 4:5 FR, 8:30 Paris | Short (FR or EN) | FR |
| Wed | — | EN cut | — | — | — |
| Thu | FR or AR carousel | — | PDF carousel FR | — | — |
| Monthly | — | — | — | Long explainer | — |

**Totals:** about 3–4 Instagram posts a week, inside Buffer's 3–5 [S22]; 2 TikToks; 2 LinkedIn posts, inside 2–5 [S23]; 1 Short. Hold this for 8 weeks before changing anything [V: Gaps and plan › L10].

---

## 8. Which video type goes where

| Video type | DZ FB/IG | FR IG | FR LinkedIn | Gulf IG/TikTok | YouTube | Site |
|---|---|---|---|---|---|---|
| Brand trailer (30–45 s social; 60–90 s 16:9) | ✓ pinned | ✓ pinned | ✓ | ✓ pinned | ✓ | ✓ hero or founder section |
| L'Aperçu (30–45 s; 90–120 s) | ✓ after CTA gate | ✓ after CTA gate | ✓ after CTA gate | ✓ after CTA gate | ✓ | ✓ Aperçu card |
| Package explainers | ✓ DZD | ✓ EUR | ✓ EUR + carousel | ✓ no price or USD | ✓ | ✓ package cards |
| Service explainers (×5) | ✓ | ✓ | ✓ carousel | ✓ | ✓ Shorts | — |
| Arabic RTL craft | ✓ | — | ✓ (P4 theme) | ✓ lead series | ✓ Short | — |
| Four steps | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ method section |
| Client work walk-throughs | **only with written permission** | same | same | same | same | same |
| Glaive / WorkspaceHQ craft pieces | ✓ with badge | ✓ | ✓ | ✓ | ✓ | — |

---

## 9. What competitors post: summary

| Market | Competitor | What the research and spot-check found | Source |
|---|---|---|---|
| DZ | Piteur Studio | Facebook 20,730; LinkedIn 325; YouTube 15 subscribers, 3 videos, latest about 3 years old | [S42] |
| DZ | Global Ads | Facebook 1,766; a blog with 20 articles and a Google Business Profile | [S42]; [V: Market - Algeria › Fact-check] |
| DZ | INTOUCH | Facebook 1,315 | [S42] |
| DZ | Symloop | Facebook 383; wins French search with DZD price guides | [S42]; [V: Competitors › Who to watch] |
| DZ | UpGrowth | Facebook 196; TikTok 72 followers / 5 videos; YouTube empty; LinkedIn 1,126 with founder-voice posts | [S42] |
| FR | Simplébo | YouTube 1.17 K subscribers: 1-minute presentation, testimonials, educational explainers, Shorts; Facebook 2,999 | [S42] |
| FR | Kolonell | LinkedIn 23; wins through a 40,016-URL sitemap | [S42]; [V: Competitors] |
| Gulf | Pula Media | TikTok 25 / 7 videos; LinkedIn 670; Facebook 12; 5.0 from 17 Google reviews | [S42]; [V: Competitors] |
| Gulf | i17creator | TikTok 9 / 6 videos (cinematic short film) | [S42] |
| Gulf | Riyadh Designer | TikTok 0 / 1 video | [S42] |
| Gulf | Dubai TechGuy | TikTok 3 / 1; YouTube 1 Short (84 views); Facebook 4 | [S42] |

Not readable from here: Instagram follower counts (login wall) and the content of Facebook posts (the page plugin returns only the follower count).

---

## 10. Risks and things not to do

- No claim from the do-not-claim list [FB §2.1]: team size, "6 ans", client counts, "des clients en France", React/Next.js/Vercel, Nomara, results, testimonials, "open source".
- No client screenshot without written permission. No AlmaFlowClim "live on its domain". No third-party brand chips or client phone numbers in frame [FB §2.4].
- No new AI-generated images, footage or music. Never a face for the founder [FB "How to use"].
- No tracking pixel, analytics script or YouTube/Facebook embed on the site.
- No trending sounds on the business accounts (§1.6).
- No "places left" counter, and no urgency beyond the real cap of 4 Aperçus a month [V: Campaign › Rules for every ad].
- Never mention USDT or any crypto payment. Never mention payment terms until they are decided [FB §2.2].
- No Arabic posted before native review. The Algerian and Gulf reviewers may differ.

---

## 11. Open questions for the owner

1. **Accounts:** one account per platform for all markets (recommended), or separate Gulf accounts? Which handle, and which Arabic spelling of the name?
2. **CTA gate:** when will the privacy page, a legal name and a dedicated WhatsApp number exist? Until then, posts cannot invite people to write.
3. **Video files on the site:** host outside the repository; allow final MP4s only into the deploy; or publish them on the host outside git (§5.3)?
4. **Client permissions:** have Bordj Steel, Alliance Travel and AlmaFlowClim been asked? Did LinkedIn post P2 (Bordj Steel, 22 Oct) go out?
5. **Google Business Profile:** do you meet Algerian clients in person, in Bordj Bou Arréridj or by travelling to them? If not, the studio is not eligible.
6. **Music:** compose in code (recommended), or buy one cross-platform licence? And where do the WorkspaceHQ trailer sounds come from?
7. **Arabic reviewers:** one for Algeria, one for the Gulf, or one person for both?
8. **Time budget:** is 6–8 hours a week for marketing realistic, alongside the employment and capacity questions in the campaign gates?

---

## Sources

Dates are the publication or update date where the page gives one. Every page was seen on 2026-10-26.

- [S1] DataReportal, "Digital 2026: Algeria" (Kepios/platform ad tools; data late 2025, published late 2025). https://datareportal.com/reports/digital-2026-algeria
- [S2] DataReportal, "Digital 2026: France" (late 2025). https://datareportal.com/reports/digital-2026-france
- [S3] DataReportal, "Digital 2026: Saudi Arabia" (late 2025). https://datareportal.com/reports/digital-2026-saudi-arabia
- [S4] DataReportal, "Digital 2026: The United Arab Emirates" (late 2025). https://datareportal.com/reports/digital-2026-united-arab-emirates
- [S5] NapoleonCat, "Facebook users in Algeria", September 2026 (ad-audience data). https://napoleoncat.com/stats/facebook-users-in-algeria/
- [S6] Afnic, « Réussir avec le web », étude globale 2025 (PDF; panel of about 2,500, Sep 2024–Aug 2025; press release 1 Dec 2025). https://www.afnic.fr/wp-media/uploads/2026/02/Etude-Afnic-Reussir-Avec-le-Web-2025.pdf and https://www.afnic.fr/wp-media/uploads/2026/01/251201_CP_Afnic_Etude-RALW-2025.pdf
- [S7] Belaidouni, Z. & Kherbache, F., "Code-switching in Facebook Live Sales: A Marketing Strategy in the Algerian Context", AL-Lisaniyyat 30(1), 25 June 2024. https://crstdla.dz/ojs/index.php/allj/article/view/656
- [S8] Social Media Today, "Instagram shares algorithm insights" (Mosseri: watch time, likes, sends), 22 Jan 2025. https://www.socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/
- [S9] Social Media Today, "Instagram's implementing new limits on hashtag use" (5 hashtags), 18 Dec 2025. https://www.socialmediatoday.com/news/instagrams-implementing-new-limits-on-hashtag-use/808309/
- [S10] Engadget, "Instagram swoops in with 3-minute Reels and rectangular profile grids", Jan 2025 (announced 18 Jan 2025). https://www.engadget.com/social-media/instagram-swoops-in-with-3-minute-reels-and-rectangular-profile-grids-as-the-tiktok-ban-gets-real-201316339.html
- [S11] Oktopost, "Instagram grid size guide" (3:4 grid, 4:5 upload), 28 Jan 2025, updated for 2026. https://www.oktopost.com/blog/instagram-grid-size-guide/
- [S12] MediaPost, "Meta to share all Facebook videos as Reels", June 2025. https://www.mediapost.com/publications/article/406751/meta-to-share-all-facebook-videos-as-reels.html ; Tubefilter, 17 June 2025. https://www.tubefilter.com/2025/06/17/meta-facebook-reels-all-videos-update/
- [S13] Instagram Creators blog, "Trial reels" (undated; eligibility reported to change later). https://creators.instagram.com/blog/instagram-trial-reels
- [S14] Inro, "Instagram Reels safe zone checker" (quotes Meta Ads Guide, Instagram Reels ad spec; updated Aug 2026). https://www.inro.social/tools/instagram-reels-safe-zone-checker
- [S15] TikTok Ads Help, "Creative best practices for performance ads" (last updated June 2025). https://ads.tiktok.com/help/article/creative-best-practices?lang=en
- [S16] TikTok Ads Help, "Video ads specifications" (last updated June 2026). https://ads.tiktok.com/help/article/video-ads-specifications?lang=en
- [S17] YouTube Help, "Shorts up to three minutes" (seen 2026-10-26; change effective 15 Oct 2024). https://support.google.com/youtube/answer/15424877?hl=en
- [S18] YouTube Help, "Video chapters". https://support.google.com/youtube/answer/9884579?hl=en
- [S19] YouTube Help, "Use music and sound effects from the Audio Library". https://support.google.com/youtube/answer/3376882?hl=en
- [S20] LinkedIn Help, "Video ads advertising specifications" (seen 2026-10-26). https://www.linkedin.com/help/linkedin/answer/85306
- [S21] TechCrunch, "LinkedIn amps up vertical video tools as uploads jump 36%", 4 Feb 2025. https://techcrunch.com/2025/02/04/linkedin-amps-up-vertical-video-tools-as-uploads-jump-36
- [S22] Buffer, "How often should you post on Instagram in 2025?" (2.1 M posts), 13 Aug 2025. https://buffer.com/resources/how-often-to-post-on-instagram/
- [S23] Buffer, "How often should you post on LinkedIn" (2 M+ posts), 28 Aug 2025. https://buffer.com/resources/how-often-to-post-on-linkedin/
- [S24] Metricool, "LinkedIn trends: 2026 study" (673,658 posts), 16 Apr 2026. https://metricool.com/linkedin-trends/
- [S25] Ordinal, "LinkedIn link penalty study" (data early 2023 to early 2026; undated). https://www.tryordinal.com/blog/linkedin-link-penalty-study
- [S26] Chief Marketer, "Wistia State of Video report: engagement rates down" (2025 report), 11 Apr 2025. https://chiefmarketer.com/wistia-state-of-video-report-engagement-down-content-under-promoted
- [S27] Wistia, "Optimal video length" (dated 1 Jul 2025; cites a later report). https://wistia.com/blog/optimal-video-length
- [S28] Soundstripe, "TikTok music licensing rules for creators and brands" (vendor; business accounts limited to the Commercial Music Library, licence TikTok-only). https://www.soundstripe.com/blogs/tiktok-music-licensing-rules
- [S29] Instagram Help Center, music library and Sound Collection (quoted in search results; the page did not render here). https://help.instagram.com/402084904469945 ; context: Foxi Music, "Instagram Reels music copyright: 2026 legal guide" (vendor). https://www.foximusic.com/blog/instagram-reels-music-copyright-legal-guide/
- [S30] Meta creative guidance relayed by agencies (sound-off design, 9:16 with the bottom 35% clear): Adobe Blog, 4 Nov 2024. https://blog.adobe.com/en/publish/2024/11/04/unlock-potential-reels-best-practices-for-creative-success-using-adobe-creative-cloud ; Digiday, "85 percent of Facebook video is watched without sound" (2016, publisher claims). https://digiday.com/media/silent-world-facebook-video/
- [S31] Buffer, "Meta Business Suite: what it is and how to use it" (scheduling Reels to Facebook and Instagram). https://buffer.com/resources/how-to-use-meta-business-suite/
- [S32] Google Business Profile Help, "Guidelines for representing your business on Google". https://support.google.com/business/answer/3038177?hl=en
- [S33] Google Business Profile Help, countries and regions where Business Profiles can be added (Algeria listed). https://support.google.com/business/answer/6270107
- [S34] Google Business Profile Help, hiding the address for service-area businesses. https://support.google.com/business/answer/2853879?hl=en and https://support.google.com/business/answer/10514137?hl=en
- [S34b] Clutch Help, "What free features does Clutch offer?" https://help.clutch.co/knowledge/free-features-clutch-offers ; Clutch tools page (phone-interview reviews for paying providers). https://clutch.co/tools
- [S35] Sortlist, "How it works for agencies" ("Free listing") https://www.sortlist.co.uk/how-it-works/agency ; Sortlist Help, "Does the client pay for your service?" https://intercom.help/sortlist/en/articles/1714412-does-the-client-pay-for-your-service ; G2 reviews of Sortlist. https://www.g2.com/products/sortlist/reviews
- [S36] WhatsApp Blog, "Introducing catalogs for small businesses" (2019). https://blog.whatsapp.com/introducing-catalogs-for-small-businesses ; catalog steps (vendor guide). https://learn.rasayel.io/en/blog/whatsapp-product-catalog
- [S37] Meta Newsroom, "Helping you find more channels and businesses on WhatsApp" (Updates tab: Status ads, promoted channels), 16 Jun 2025. https://about.fb.com/news/2025/06/helping-you-find-more-channels-businesses-on-whatsapp/ ; Status privacy (guide). https://geekrewind.com/how-to-change-who-can-see-my-status-updates-in-whatsapp/
- [S38] Go Africa Online, Algeria directory (sign-up page and paid "Pack visibilité" seen 2026-10-26). https://www.goafricaonline.com/dz/annuaire
- [S39] The National, "When is the weekend in the Arab world?", 7 Dec 2021. https://thenationalnews.com/mena/2021/12/07/when-is-the-weekend-in-the-arab-world
- [S40] Clevercast, "BBC subtitling guidelines" (summary: 160–180 words a minute). https://clevercast.com/bbc-subtitling-guidelines
- [S41] Ahrefs, "Top websites in Algeria" (July 2025; ouedkniss.com ranked 11). https://ahrefs.com/websites/algeria
- [S42] Spot-checks by this research, 2026-10-26 (public pages fetched without logging in):
  - TikTok: https://www.tiktok.com/@pulamedia ; https://www.tiktok.com/@i17creator ; https://www.tiktok.com/@riyadhdesignercom ; https://www.tiktok.com/@upgrowth.dz ; https://www.tiktok.com/@uaetechguy
  - YouTube: https://www.youtube.com/@UpGrowthDZ ; https://www.youtube.com/@DubaiTechGuy ; https://www.youtube.com/channel/UC7HEeSDmQNcEJoUrQgQNDOQ (Simplébo) ; https://www.youtube.com/channel/UCuMGnmuhMrOPkHSRO5hR6mA (Piteur)
  - LinkedIn: https://www.linkedin.com/company/pulamedia/ ; https://www.linkedin.com/company/kolonell/ ; https://www.linkedin.com/company/upgrowth-dz/ ; https://www.linkedin.com/company/piteur-studio/
  - Facebook Page follower counts through the public page plugin: https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/{intouchdz, GlobalAdServices, Piteur.studio, pulamedia.studio, symloop, simplebocreateurdesitesweb, profile.php?id=100093455988662 (UpGrowth), profile.php?id=61587004736474 (Dubai TechGuy)}
  - Social links taken from each competitor's homepage on the same day. Instagram returned a login wall.
- [S43] Caption-size guides (vendor, low weight): OpenClip, "Caption styling guide" https://openclip.app/guides/caption-styling-guide ; ClipSpeed, "Instagram Reels captions in 2026" https://www.clipspeed.ai/blog/instagram-reels-captions.html
- [S44] Gulf News, "TikTok fuels billions in Saudi Arabia's economy…" (Redseer report), updated 10 Sep 2025. https://gulfnews.com/business/markets/tiktok-fuels-billions-in-saudi-arabias-economy-as-creators-businesses-thrive-1.500263111
- [S45] HopperHQ, "How to schedule TikTok posts in 2026" (TikTok Studio desktop scheduling, reported up to 10 days ahead; not confirmed against TikTok's own help). https://www.hopperhq.com/blog/how-to-schedule-tiktok-posts-desktop-mobile/
- [S46] PetaPixel, "New Instagram policies target reposted content", 30 Apr 2026 (the page returned 403 here; content as summarised in search results). https://petapixel.com/2026/04/30/new-instagram-policies-target-reposted-content/
- [S47] Social Media Examiner on YouTube Shorts "viewed vs swiped away" (and YouTube Studio's "Stayed to watch" label, per ContentStudio). https://www.socialmediaexaminer.com/?p=251758 ; https://contentstudio.io/blog/youtube-shorts-analytics-guide
- [S48] Kapwing, "LinkedIn video size guide" (organic: up to 15 min on desktop, 5 GB, SRT; third-party). https://www.kapwing.com/resources/linkedin-video-size-guide-aspect-ratios-resolution-length-and-best-practices-3/

Vault and repository sources: `kb/private-vault/Maps/` (Markets.md, Competitors.md, Gaps and plan.md, Campaign.md, Owner decisions pending.md, Decision log.md); `kb/private-vault/notes/markets/` (Market - Algeria, France, Gulf); `notes/competitors/*` (R13 rows); `notes/campaign/campaign-outreach-fr.md` (§5 LinkedIn plan); `/home/user/STICKITTY.INC/OWNER-CONTENT.md` §6; `/home/user/STICKITTY.INC/assets/app.js:1924-1958` (lead source and ref tag); `/home/user/STICKITTY.INC/index.html` (CSP meta); `facts-bank.md` (same folder).
