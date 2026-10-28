# Numidea Labs: music and sound for organic videos with no voiceover

PRIVATE. Never copy this file, the `music-lab/` folder, or anything made from them into `/home/user/STICKITTY.INC` (the public repository).
Research and test done on 2026-10-26. Web sources are listed at the end as [M1]…[M25], each with its URL. `channels.md` and `facts-bank.md` (same folder) are cited as [CH §x] and [FB §x]. This file goes deeper than [CH §1.6] and replaces it where they differ.

Scope, as decided by the owner on 2026-10-26: coded motion-design videos; on-screen text plus music, with no voiceover; FR, AR and EN versions; Facebook, Instagram, TikTok, LinkedIn, YouTube and the website; organic reach only. Standing rules that apply here: no new AI generations of any kind, which includes music ("No more generations", 2026-10-10; [FB "How to use"]); no trackers; no model names.

---

## 0. The short version

1. **Write the music in code, by default, on every channel.** It is the only source in this comparison that covers all five platforms and the website under one licence: the studio's own. It needs no credit line, matches no Content ID reference, is not AI-generated, and leaves its own proof (the script, its arguments, the file's hash). A working prototype was built and measured here (§3). It renders a 30-second bed in about 6 seconds, it is bit-for-bit reproducible, and it reaches the loudness targets. **Nobody has listened to it yet.** The owner must listen before it is used (§3.5).
2. **One fallback that also travels: a Pixabay track, checked one at a time.** The licence allows commercial use on social media and inside videos, with no credit needed [M4][M5]. It has three catches. Some tracks are registered with Content ID, so claims can arrive even when the use is legal. Pixabay accepts AI-made uploads if they are labelled, and the owner's rule excludes those. Pixabay "do[es] not warrant that any consents or licenses have been obtained" [M4]. Keep the proof described in §4.3.
3. **The libraries inside the platforms stay on their platform.** TikTok's Commercial Music Library terms say "Commercial Uses outside of TikTok are not permitted" [M12]. Meta's Sound Collection is offered for videos on Facebook and Instagram [M9]. Use them only for a post made and kept inside that one app, never in the master that goes everywhere.
4. **Never use trending sounds or the general in-app libraries on the studio's accounts.** TikTok: "Businesses cannot use the general music library for commercial usage" [M10]. Instagram: its music library is for "personal, non-commercial use" [M8]. Meta's Music Guidelines: content with unlicensed music "may be blocked, muted or removed" [M7].
5. **Use the YouTube Audio Library on YouTube only.** YouTube says its tracks will not be claimed through Content ID [M1]. YouTube does not say they may be used anywhere else, and declines to advise on off-platform use [M1]. Keep these tracks out of the cross-posted master and off the website.
6. **Do not use CC BY music (Free Music Archive and similar) in short videos.** The licence allows commercial use with credit [M13][M14]. In practice the credit must be repeated in every cut, language and caption [M15][M16], some artists still use Content ID, and FMA "cannot and does not license music", so it cannot clear a claim [M15]. It is acceptable for a YouTube long-form video with credit in the video and the description.
7. **Loudness:** social masters at **−14 LUFS integrated**, long explainers and website files at **−16 LUFS**, and a true peak of **−1 dBTP or lower, measured on the encoded AAC file**. Every video must also work with the sound off (§4.5).
8. **Mood:** an engraved atlas at night. One tonal centre (D minor) across every video; slow harmony; a bell-like chime for stars and the lighthouse beam; fine clockwork ticks for the engraver's tool; a soft frame-drum heartbeat for "rooted". No drops, risers, vocals or trending styles (§5).
9. **One audio file already in the repository is a risk.** The 16 sounds of the WorkspaceHQ trailer, including `music1.mp3` and `music2.mp3`, have no recorded source or licence [FB §3.6]. They are already published on the public site. Do not reuse them, and ask the owner where they came from (§6).

---

## 1. Comparison: what each source allows a business account to do

"Covers" means the licence or terms say so in writing. "Not stated" means this research found no text either way, and that counts as not covered.

| Source | Business / promotional use | Platforms covered | Website (self-hosted MP4) | Credit needed | Claim / takedown exposure | Proof you can keep | AI-content exposure |
|---|---|---|---|---|---|---|---|
| **Music written in code** (own work) | Yes: own copyright | All | Yes | No | Very low: not registered in any fingerprint system (keep it that way, §4.3) | Script + arguments + SHA-256 of the output; re-rendering reproduces it bit for bit (§3.3) | None: no model involved |
| **Pixabay Music** | Yes: "commercial or non-commercial purposes" [M4]; FAQ: social media yes, commercial videos yes if part of a larger work [M5] | All (no platform restriction in the licence) | Yes, inside a video; never as a standalone file [M4] | No [M4][M5] | **Medium**: "some tracks are registered with Content ID… automated claims even when the track is used legally"; Meta platforms "may mute or block content" [M5] | Certificate only for Content-ID-registered tracks; otherwise "download link, file name, and the license summary" [M5] | **Possible**: AI uploads are accepted if "clearly labeled" [M5]. Filter them out |
| **YouTube Audio Library**, standard licence | Yes on YouTube, monetised videos included [M1] | YouTube. Off-platform use is not stated, and YouTube "can't give legal guidance… off the platform" [M1] | No (not stated) | No [M1] | **None on YouTube**: tracks "won't be claimed by a rights holder through the Content ID system" [M1] | Screenshot of the Studio listing with its licence type, plus the date | Not stated |
| **YouTube Audio Library**, CC BY tracks | Yes, under CC BY | All, with credit (CC BY) | Yes, with credit | **Yes**: credit "in your video's description" on YouTube [M1] | Low on YouTube [M1]; elsewhere, as for any CC BY track | The attribution text copied from Studio [M1] | Not stated |
| **Free Music Archive**, CC BY / BY-SA / CC0 | Yes for BY, BY-SA, CC0. **No** for any NC licence. ND licences forbid syncing to video [M13] | All, with credit | Yes, with credit | **Yes**: title, artist, source and licence [M14]; FMA: credit "appears in the video" and in the text that goes with it [M15] | **Medium**: "Some artists on the FMA have started using YouTube's Content ID"; FMA cannot clear claims, so you must "reach out to the artists" [M15] | Track page PDF, licence version, credit line used | Not stated |
| **Meta Sound Collection** | Offered for videos on Facebook and Instagram [M9]; a law firm reads it as usable by commercial accounts [M6] | **Facebook and Instagram** only | No | No | Low on Meta | In-app screenshot plus date | Not stated |
| **TikTok Commercial Music Library** | Yes: organic posts, ads, branded content [M10] | **TikTok only**: "Commercial Uses outside of TikTok are not permitted" [M12] | No | No | TikTok "may take down any videos" or mute them if it loses a track's rights [M12] | In-app screenshot plus date | Not stated |
| **Trending sounds / general in-app libraries** (TikTok, Instagram, Facebook) | **No**: TikTok general library not for business commercial use [M10]; Instagram library "personal, non-commercial" [M8]; Meta: commercial use "prohibited unless you have obtained appropriate licenses" [M7] | — | — | — | High: blocked, muted or removed [M7] | — | — |
| **LinkedIn** | No in-app music library found by this research; bring licensed music | — | — | — | Normal copyright notices | — | — |
| **AI music generators** (any, including the Magnific audio tools) | **Excluded by the owner's rule** | — | — | — | — | — | — |

Two points the table cannot show:
- **A platform offering a sound in its picker is not a licence for any other place.** A law-firm analysis (Osborne Clarke, 27 March 2026) reads "commercial" broadly ("As soon as an economic purpose is pursued – even indirectly"). It treats a Business or Creator account as "a strong indication that the account is a commercial one", and says that where a use "is not clearly covered by the platform licences, a separate licence must be obtained" [M6].
- **Claims on YouTube Shorts are severe.** A Short longer than 1 minute that has an active copyright claim is blocked worldwide [CH S17]. Content ID claims are not strikes, but a rejected dispute can lead to a removal request and then a strike [M18].

---

## 2. Notes on each source

### 2.1 YouTube Audio Library
- **What YouTube's own page says.** "Music and sound effects from the YouTube Audio Library are copyright-safe." Downloaded tracks "won't be claimed by a rights holder through the Content ID system." Tracks under the "standard YouTube Audio Library license" need no attribution. CC tracks need credit "in your video's description", and the attribution text can be copied from Studio [M1]. The page has no date beyond "©2026 Google".
- **Outside YouTube.** YouTube's page is silent on other uses and adds: "YouTube can't give legal guidance, including guidance on issues with music that can occur off the platform" [M1]. A 2021 vendor article quotes the Audio Library channel's own rule: "You MUST contact the artist if you wish to use the music on any project outside of YouTube" [M2]. Search results on this point disagree and are mostly vendor blogs [M3]. **Policy:** standard-licence tracks go on YouTube-only uploads, never in the cross-posted master or the site file.
- **Fit here.** Useful when a YouTube long-form explainer needs a track that code cannot make well. Otherwise the code-made bed does the same job everywhere.

### 2.2 Pixabay Music (licence read on 2026-10-26; Terms "Last updated: 20 October, 2026")
- **Grant:** an "irrevocable, worldwide, perpetual (or as long as allowed by law), non-exclusive and royalty-free right" to use content "for commercial or non-commercial purposes" [M4]. The summary page says the same in short: use for free, no attribution needed, modify or adapt [M4b].
- **Prohibited uses that matter for video:**
  - Selling or distributing content "on a Standalone basis", meaning use where "no creative effort has been applied". A music file offered for download alone on the site would breach this. Music synced inside a video does not.
  - Using content "as part of a trade-mark… business name or service mark". So never make a Pixabay track (or a part of one) the studio's sonic logo. That is one more reason to make the sting in code (§5.4).
  - Misleading or deceptive use [M4].
- **Risk sits with the user:** "We do not warrant that any consents or licenses have been obtained in relation to any Content"; the user indemnifies Pixabay [M4].
- **Content ID:** Pixabay's FAQ says some tracks are registered, which "can result in automated claims even when the track is used legally". "License certificates are available for tracks registered with YouTube's Content ID"; for other tracks, keep the "download link, file name, and the license summary" as proof. Facebook, Instagram and Pinterest "also use automated detection systems that may mute or block content" [M5].
- **AI:** "AI content is welcome on Pixabay, but it must be original, clearly labeled" [M5]. A Pixabay track may therefore be machine-made. Pick only tracks with no AI label, and record that you checked (§4.3).
- **Fit here:** an acceptable fallback that travels to every channel and the site, chosen track by track.

### 2.3 Free Music Archive and CC BY music: what the credit costs
- **Which licences work:** CC BY, BY-SA and CC0 allow commercial use. BY-NC, BY-NC-SA and BY-NC-ND do not, and NC also rules out "advertising, or promoting a product or service". BY-ND and BY-NC-ND forbid syncing to video, because syncing "constitutes a derivative work" [M13]. A studio promoting its services is commercial, so **NC tracks are out**.
- **What a correct credit contains:** title, author, source (with a link) and licence (with a link), known as "TASL" [M14]. CC BY 4.0 allows attribution "in any reasonable manner based on the medium, means and context" [M14]. Creative Commons suggests putting it "both in the description box and in… the video recording itself", and possibly on a separate credits web page [M14]. FMA is stricter for video: the credit "appears in the video… as well as in any written blurb that accompanies the work" [M15].
- **What that means here, per placement:**
  - Instagram Reels and Facebook: an end-card line in the video, plus the caption.
  - Instagram and Facebook Stories and WhatsApp Status: no caption, so the credit must be inside the video.
  - TikTok: in the video, plus the caption.
  - LinkedIn: in the video, plus the post text.
  - YouTube: in the description and on an end card.
  - Website: a line under the player, plus a credits page.
  - Every one of those has to be written in FR, AR and EN, and checked again on every re-cut. A short credit line in Arabic would look like «موسيقى: "العنوان" — الفنان (المصدر)، رخصة CC BY 4.0» **[à relire par un arabophone natif]**.
- **Claims:** CC licensing "does not conflict" with an artist using Content ID; FMA "cannot and does not license music" and tells video makers to "reach out to the artists themselves" [M15]. FMA points to Tribe of Noise PRO for paid, no-credit licences [M13][M15]. That is paid, so it is out of scope while the budget is organic only.
- **Fit here:** not for 15–40-second social cuts. Acceptable for a YouTube long-form explainer if one CC BY track is the right one, with credit in the video and the description.

### 2.4 Meta: Sound Collection, the general library, and the Music Guidelines
- **Sound Collection:** "over 14,000 music tracks from established composers and songwriters and over 1,500 sound effects", described as "an audio library of sound effects and royalty-free music that you can download for your videos", for videos "you create and upload to Facebook and Instagram" (Meta blog, 15 July 2025) [M9]. Instagram's help page says Sound Collection songs are "entirely royalty free and safe to use in Reels and Instagram Stories" (quoted in search results; the page did not render here) [M8]. No text found allows use outside Meta.
- **The general Instagram library:** "intended for personal, non-commercial use", and "certain business accounts and certain types of posts do not have access to the library" [M8].
- **Meta Music Guidelines** (effective 26 March 2024): "Use of music for commercial or non-personal purposes in particular is prohibited… unless you have obtained appropriate licenses"; content "may be blocked, muted or removed" [M7].
- **Fit here:** only for a Story or Reel made inside the Instagram or Facebook app and never exported. The master carries its own code-made music instead.

### 2.5 TikTok: Commercial Music Library and trending sounds
- **What TikTok says:** the CML is "a pre-cleared global music library of 1 million songs… free for businesses to use". It covers organic posts (including duets and stitches), video ads and branded content. "Businesses cannot use the general music library for commercial usage." For other users' original sounds, "consult your legal team" (help page, last updated July 2025) [M10]. A Business Account adding sound "will only see sounds from the Commercial Music Library" (help page, last updated July 2026) [M11].
- **CML user terms:** "Commercial Uses outside of TikTok are not permitted and no rights are granted by TikTok for such uses", including "posting videos on third party digital platforms". The sounds may not be distributed "separately from the videos". If TikTok loses a track, it "may take down any videos" that use it, or mute them [M12].
- **Trending sounds:** they come from the general library, which is not licensed for a business's commercial use [M10]. Trend formats can still be used visually with a CML sound or our own audio. Do not chase a trending sound.
- **Uploading a video that already has its own music:** vendor guides report a "Music Usage Confirmation" step when a business account uploads music it licensed itself [M19]. This research did not find that step on TikTok's own pages. With code-made music the studio holds all rights, so it can answer any such prompt truthfully.
- **Fit here:** CML only for a TikTok-native post. The master's code-made bed is the normal path.

### 2.6 LinkedIn
This research found no LinkedIn help page describing a music library for video posts. Vendor guides say creators bring their own music [M20] (vendor, low weight). The cross-posted master with code-made music covers LinkedIn.

### 2.7 AI music generators
Excluded by the owner's standing rule (no new generations), which covers the Magnific audio and music tools that are connected to this machine. The same rule is why AI-labelled Pixabay tracks are filtered out (§2.2). None of the platform libraries says whether its tracks were made with AI tools. This research found no statement either way.

---

## 3. Music written in code: the feasibility test

### 3.1 What was built (private, `music-lab/`)
- `music-lab/bed.mjs`: about 260 lines of plain Node 22, with no dependencies, samples or network access. It synthesises a stereo 48 kHz bed from a seed, a tempo and a length in bars. It has two modes:
  - `full`, five layers:
    - **pad**: detuned saw voices through a slowly opening low-pass filter (the night air);
    - **bass**: carried by its 2nd and 3rd harmonics so that phone speakers can hear it;
    - **burin ticks**: band-passed noise plus a short wooden click on a 16th-note grid, with small seeded variations (the engraver's tool, precision);
    - **heartbeat**: a soft frame-drum stroke on beat 1 (rooted);
    - **chime**: an inharmonic bell on the D-minor pentatonic at each chord change, at frame 0, and on the end card (stars, the lighthouse beam).
    
    All layers go through an 8-line feedback-delay reverb of about 3.4 s. Harmony: Dm(add9) → B♭maj7 → Fmaj9 → Csus2 → Dm, two bars each at 90 BPM, then a 3.3-s tail.
  - `perc`, with no melodic instruments: the ticks plus a frame-drum pattern of low "dum" and high "tak" strokes over a very quiet drone on D. It is the option in §5.5.
- `music-lab/render.sh`: runs the script, then two-pass `loudnorm` to the chosen target with a −2 dBTP limit. It encodes AAC-LC at 48 kHz and 384 kb/s (YouTube's recommended upload audio [M22]), measures the encoded file (EBU R128 with true peak), draws a spectrogram and a waveform, and writes SHA-256 hashes. It uses the ffmpeg 7.0.2 static binary already installed in `marketing/pipeline/node_modules/ffmpeg-static/`.
- `music-lab/ledger.csv`: the licence ledger (§4.3), with the two prototype beds entered.

### 3.2 Results (measured on the encoded `.m4a`, the file the platforms receive)

| File (in `music-lab/out/`) | Use | Integrated | Loudness range | True peak | Through a phone-speaker filter* |
|---|---|---|---|---|---|
| `bed-full-s7.m4a` | social master | −13.8 LUFS | 1.2 LU | −5.2 dBTP | −17.7 LUFS (−3.9 LU) |
| `bed-full-s21.m4a` | same, other seed | −13.8 LUFS | 1.1 LU | −5.3 dBTP | −17.7 LUFS (−3.9 LU) |
| `bed-full-s7-site.m4a` | site / long-form level | −15.8 LUFS | 1.2 LU | −7.2 dBTP | −19.7 LUFS (−3.9 LU) |
| `bed-perc-s7.m4a` | percussion-only option | −16.2 LUFS | 3.0 LU | −1.4 dBTP | −24.3 LUFS (−8.1 LU) |

\*Two 2-pole high-pass filters at 250 Hz, a rough stand-in for a phone's speaker. A smaller drop means the music survives better on phones.

- **Speed:** the whole script (synthesis, two loudness passes, encoding, measurement, pictures) took about 6 s of wall time for 30 s of audio on this 4-core machine. Muxing the bed into a 9:16 H.264 test video took about 3 s (`out/mux-test.mp4`, 29.97 s, AAC stereo 48 kHz). Music is not a bottleneck.
- **Reproducible:** two renders with the same arguments gave byte-identical files (same SHA-256). The script, its arguments and the hash prove what was rendered and that it was made here. `out/SHA256SUMS` lists every file. The script's hash is `167ef7eb…c209e`.
- **The phone check changed the mix.** The first version put its bass in pure sine waves at 44–78 Hz and lost 4.9 LU through the phone filter. Moving the bass weight into harmonics and raising the drum's pitch brought the loss to 3.9 LU. The percussion-only mode still loses 8.1 LU, because the "dum" stroke and the drone sit low. **It needs another pass** before use.
- **Even level:** a loudness range of 1.1–1.2 LU means the full bed stays at a steady level, which suits reading on-screen text. The same steadiness could feel static over a 2–4-minute explainer, so long pieces need sections (§3.4).
- **What the spectrogram shows** (`out/*.spectrum.png`, reviewed here): the chord changes every 5.3 s, the chime partials, the tick grid up to the top of the spectrum, and a clean decay at the end. No clipping: the full-mode true peak is −5.2 dBTP.

### 3.3 Does it sound acceptable? What can and cannot be said
- **Can be said, from measurement:** it is technically sound. It is on the loudness target, below the peak ceiling, has no clipping, keeps a steady level, is reproducible, and follows the intended structure: a sound at frame 0, a chord every two bars, a resolution with the chime on the end card, then the tail.
- **Cannot be said:** whether it is pleasant, whether it feels "engraved and nocturnal", or whether it sounds cheap. That needs ears. **This research did not listen to it.** The owner should listen before any use (§3.5).
- **What this technique is good and bad at.** Code synthesis does convincing sustained pads, bells and chimes, clicks and ticks, simple drums, drones and soft pulses: the ambient and minimal register, where synthesised sound is the native material. It does not do convincing acoustic instruments (oud, strings, piano, voice) or a human performance. Faking those in code would sound fake. Licensed sample libraries would be a separate licence decision, and they are out of scope. The brand brief in §5 deliberately asks only for what code does well.

### 3.4 How it would be used in production
- **Sound follows the picture's clock.** The WorkspaceHQ trailer already pairs a composition clock with a cue list and an offline WAV mixdown (`workspacehq/embed/hq-audio.js`; [FB §3.6]). The marketing pipeline can do the same: the scene list that times the text cards also emits audio cues (chime on a plate reveal, tick on a text card), and `bed.mjs` grows a `--cues cues.json` input. The bed is rendered at the video's exact length, so it ends on the end card instead of being cut.
- **One bed serves all three languages.** There are no lyrics or voice, so the FR, AR and EN cuts share a bed when their timings match. The music adds no per-language work.
- **Long explainers (16:9, 2–4 min):** change sections every 20–30 s, aligned with the YouTube chapters (a new chord cycle, a layer entering or leaving). Then resolve on the end card.
- **Two implementation routes, same licence status.** Either pure Node (this prototype: deterministic, no browser needed) or WebAudio `OfflineAudioContext` in the headless browser that renders the frames (the `hq-audio.js` pattern, with synth nodes in place of samples). The Node route is preferred: OfflineAudioContext output may differ between browser versions, which weakens the "re-render gives the same hash" proof.
- **Sound effects** (tick, chime, soft whoosh) come from the same script. Do not borrow the WorkspaceHQ trailer's samples (§6).

### 3.5 The owner's listening test (about 10 minutes)
Listen to these files (paths are relative to the folder that holds this file):
- `music-lab/out/bed-full-s7.m4a`
- `music-lab/out/bed-full-s21.m4a`
- `music-lab/out/bed-perc-s7.m4a`
- `music-lab/out/mux-test.mp4` (the bed under a plain Arcanum-coloured 9:16 frame)

Play each once on a phone speaker at normal volume and once on earbuds. Answer three questions per file:
1. Does it feel like the site's night atlas, or like generic stock music?
2. Does anything sound cheap, harsh or annoying by the third play (the ticks especially)?
3. Can you read a text card over it without the music pulling attention?

Two "no" answers to question 1, or one "yes" to question 2, means another iteration. The usual adjustments are tick level, chime density and pad brightness. They are arguments to the script, not a new approach.

---

## 4. Policy

### 4.1 Which source on which channel

| Channel (owner's list) | Default | Allowed instead, when needed | Never |
|---|---|---|---|
| Algeria: Facebook Page + Instagram (FR + AR) | Code-made bed baked into the master | Pixabay track (checked, §4.2) in the master; Meta Sound Collection only for a Story or Reel made inside the app and never exported | General Instagram/Facebook library, trending audio |
| France: Instagram + LinkedIn (FR) | Code-made bed | Pixabay track (checked); Sound Collection for an Instagram-only, in-app post | Same as above |
| Gulf: Instagram + TikTok (AR + EN) | Code-made bed (percussion-only variant if the owner chooses it, §5.5) | Pixabay track (checked); TikTok CML only for a TikTok-native post; Sound Collection for an Instagram-only post | Trending sounds; the general TikTok library |
| YouTube (Shorts and long-form) | Code-made bed | YouTube Audio Library standard tracks on YouTube-only uploads; one CC BY track in a long-form video, with credit in the video and description | Any claimed track in a Short over 1 minute [CH S17]; NC/ND tracks |
| Website (self-hosted MP4, CSP `media-src 'self'`) | Code-made bed | Pixabay track (checked), inside the video only | YouTube Audio Library standard tracks; platform-library audio; the WorkspaceHQ trailer files |

Everywhere: no AI-generated music, no commercial hits, no track without a written licence, and no music used to make a post feel like a listening experience [M7].

### 4.2 Picking a stock track (fallback only)
1. Pixabay first; YouTube Audio Library only for YouTube-only uploads.
2. On the track page, check and record:
   - no AI label;
   - whether the track is registered with Content ID (Pixabay shows a certificate option for those [M5]);
   - the exact title and artist.
3. Download from the official button only. Never re-download from a mirror or rip from a video.
4. Prefer tracks that are not registered with Content ID. If the right track is registered, download its licence certificate on the same day.
5. Never use the track's name, or a recognisable part of it, as the studio's sonic logo (Pixabay's trademark clause [M4]).
6. Enter it in the ledger (§4.3) before the first render that uses it.

### 4.3 Proof of licence: what to keep, and where
Keep everything in the private marketing folder, never in the public repository. One row per audio asset in `music-lab/ledger.csv`, with these columns:
- asset id;
- file and its SHA-256;
- source type;
- title and author exactly as published;
- source URL;
- licence name, licence URL, and the date the licence page was seen;
- proof files;
- the credit line, if one is required;
- channels allowed;
- AI-generated: must be "no";
- Content ID registered;
- videos that use it.

| Source | Proof to save (at download time, dated) |
|---|---|
| Code-made | `bed.mjs` and `render.sh` at that version (their SHA-256), the exact arguments, the output SHA-256 (`out/SHA256SUMS`), render date. A re-render must reproduce the hash. **Never upload these beds to a distributor or service that registers Content ID**: the studio's own videos could then be claimed |
| Pixabay | Download link, original file name, licence summary (Pixabay's own advice [M5]); PDF of the track page and of the Terms page (dated 20 October 2026); the licence certificate for Content-ID-registered tracks [M5]; a web-archive snapshot of the track page |
| YouTube Audio Library | Screenshot of the Studio listing showing the licence type; for CC tracks, the attribution text exactly as Studio gives it [M1] |
| FMA / CC BY | PDF of the track page showing the licence and its version; the TASL credit as published; the URLs of the posts that carry it |
| Meta Sound Collection / TikTok CML | Screenshot of the track in the in-app picker with its label, account name, date; the post URL. These tracks cannot be exported, so no file goes in the ledger |

**When a claim arrives:**
- **YouTube:** check who claims. Dispute only with a true reason ("having all the necessary rights", or "misidentified" for own code-made music) and attach the ledger evidence. The claimant has 30 days to respond. Never dispute in bulk or out of habit: "Repeated or malicious abuse of the dispute process can result in penalties" [M18].
- **Meta and TikTok:** reply with the same evidence through the in-app notice. A muted post is better re-uploaded with the code-made bed than argued over.

### 4.4 Measurement (no trackers)
The music's effect is hard to isolate, so do not chase it. If two beds are compared, post comparable videos and read platform-native retention only (for example YouTube's "viewed vs swiped away" for Shorts [CH §1.2]). Attribution of leads stays on the `?ref=` / `utm_*` codes [CH §1.8].

### 4.5 How loud, and how the sound sits in the cut

| Item | Rule | Why / source |
|---|---|---|
| Social masters (Reels, TikTok, Shorts, LinkedIn, Facebook) | **−14 LUFS integrated** | YouTube plays back at a −14 LUFS reference and does not turn quieter content up [M21]; Spotify gives the same −14 target [M23]. No published normalisation target was found for Meta, TikTok or LinkedIn, and −14 is the common cross-platform choice |
| YouTube long-form (2–4 min) and the website file | **−16 LUFS integrated** | AES TD1008 gives −16 LUFS as the distribution loudness for music [M24]; easier on the ear over minutes and on a page |
| Percussion-only beds | −16 LUFS | Their transients hit the peak ceiling first (measured: −1.4 dBTP at −16.2 LUFS, §3.2) |
| True peak | **≤ −1 dBTP on the encoded file**; limiter at −2 dBTP before encoding | Lossy encoding adds peaks: Spotify asks for −1 dBTP, or −2 dBTP for masters louder than −14 LUFS [M23] |
| Loudness range | ≤ 4 LU for a bed under text | A steady level keeps attention on the words (prototype: 1.2 LU) |
| Phone check | ≤ 4 LU loss through the 250 Hz high-pass test in §3.2 | Most viewers hear a phone speaker; bass below about 150 Hz mostly disappears there |
| Cues (tick, chime) | Short-term loudness stays within ±3 LU of the target; no cue louder than the opening | House rule: a cue marks a change, it never startles |
| Start | Sound at full level from frame 0 (fade-in ≤ 50 ms) | The hook is in the first 2 s [CH §1.7] |
| End | Resolve on the end card; tail ≤ 3.3 s; last 1.2 s fades to silence | Clean loop point for platforms that replay |
| Encoding | AAC-LC, 48 kHz, stereo, 384 kb/s, in the MP4 | YouTube's recommended upload settings [M22]; accepted by the other platforms |
| Website player | Starts muted, with a visible sound toggle; never relies on autoplay with sound | Browsers allow muted autoplay always and sound only after interaction [M17]; the site's reduced-motion rules still apply |
| Sound off | The message must be complete with the sound off | No voiceover: the text carries everything [CH §1.3] |

Check every master with `render.sh`'s measurement step (or `ffmpeg -af ebur128=peak=true`) on the final MP4's audio, not on the WAV.

---

## 5. Mood brief: how the brand should sound

### 5.1 Where the brief comes from (BRAND.md)
- The site reads "as an engraved atlas of the region the studio works from", "rooted in Numidia". Its plates include a night sky with "twinkling sky, a constellation that draws itself" (Les Bibans), a lighthouse whose "beam sweeps" (Cap Carbon), dunes, a hanging lantern, and turning coins (BRAND.md, "The atlas").
- The motion is "tuned for calm rather than spectacle" (BRAND.md, "The ambient layer").
- "Nothing loops forever — still": every loop plays a few cycles and settles (BRAND.md, "The atlas"). The music should do the same and settle on the end card.
- The default theme is Arcanum, "arcane blue and brass, engraved Cinzel display".

### 5.2 The brief
- **Words:** nocturnal, engraved, precise, rooted, unhurried. Warm brass in a cold night.
- **Tempo:** 84–96 BPM; 90 by default.
- **Tonal centre:** D minor (Aeolian), with D Dorian for brighter pieces. Every video in the series sits on the same centre, so the series sounds like one voice and any two cuts can be joined.
- **Harmony:** slow, one chord every 2 bars, modal. No big cadence until the end card, which resolves to D.
- **Instruments, each tied to a picture:**

| Sound | Picture it belongs to | In the prototype |
|---|---|---|
| Soft, filtered, slowly opening pad | the night air over the plates | pad |
| Bell-like inharmonic chime, pentatonic | a star appearing, the constellation drawing, the lighthouse beam passing, a plate revealed | chime |
| Fine clockwork ticks | the engraver's burin; a text card arriving; precision | burin ticks |
| Soft frame-drum heartbeat | rootedness; the end card | heartbeat |
| Low drone on D (optional) | the desert plate, dunes | perc-mode drone |

- **Mixing to the picture:** a chime on each plate reveal and on the end card; a tick on each text card; silence or a held pad under a price or a condition, so that nothing hurries the reader. No "cash register" or coin sounds near prices.
- **Avoid:**
  - drops, risers and EDM build-ups;
  - trap hi-hats and "corporate" ukulele, whistling or inspirational piano;
  - vocals and lyrics (the cuts are language-neutral, and there is no voiceover);
  - trending songs;
  - "Arabian" pastiche (snake-charmer flutes, stock exotic scales). The rootedness comes from the frame drum and the plates, not from a cliché.

### 5.3 Variants by theme (when a video uses another site theme)

| Theme | Change from the default |
|---|---|
| Arcanum (default) | As above |
| Noir | 80 BPM, darker pad (lower filter), heartbeat louder, fewer chimes |
| Daylight | D Dorian, brighter pad, more chime, fewer ticks |
| Mono | Ticks and heartbeat only, almost no harmony |
| Engineering | Ticks in front, 96 BPM, drafting-table clockwork, short chimes |
| Alt-neon | Brighter pad with a slow arpeggio; use sparingly (furthest from the default identity) |

### 5.4 Sonic signature (2–3 s)
The same short sting closes every video: a frame-drum stroke, then D + A chimes ringing out. Repeated, it becomes recognisable. Make it in code (§2.2: a Pixabay track may not be used as part of a mark). Do not describe it publicly as a registered mark.

### 5.5 Arabic versions: percussion-only option (owner decision)
Views on musical instruments differ among Muslims. Wikipedia's summary: "Many Islamic scholars believe… [Islam] prohibit[s] creating or indulging in any form of music", while "others have asserted that some specific musical traditions are permissible". The article also notes that some permit the frame drum (daf) [M25]. This research has no data on what Numidea's Algerian or Gulf buyers prefer, so this is a choice, not a finding. The owner may decide that AR cuts (or Ramadan posts) use the percussion-only bed (`--mode perc`), which has ticks and frame drum and no melodic instruments. The prototype exists; its low end needs another pass (§3.2).

---

## 6. Audio already in the repository: a risk to clear
- `workspacehq/embed/assets/audio/` holds 16 MP3 files: `music1` (30.02 s), `music2` (62.04 s), and 14 effects. They are used by the WorkspaceHQ trailer (`hq-audio.js`), which is published on the public site. The files carry no title, artist or copyright tags, only the encoder tag `Lavf60.16.101`. They were added in commit `a0b6689` (2026-10-05). Their origin cannot be established from the files, and the repository records no source or licence [FB §3.6].
- **Policy:** do not reuse any of them in marketing. **Owner question:** where did they come from, and under what licence? If the answer is unknown, or they were generated, replace them on the site with code-made sounds (`bed.mjs` already makes ticks, chimes and soft strokes). That change is site work, outside this marketing task, and is flagged here only.

---

## 7. Open questions for the owner
1. **Listen to the prototypes (§3.5).** Is the code-made direction acceptable as the default? Which seed or variant comes closest?
2. **Arabic and Gulf cuts:** offer the percussion-only bed for AR versions, or for Ramadan posts only, or not at all (§5.5)?
3. **WorkspaceHQ trailer audio:** where did the 16 files come from, and under what licence (§6)?
4. **Pixabay fallback:** allow it, given that some tracks are Content-ID-registered and some uploads are AI-made, or keep code-made music only?
5. **Platform-native posts:** are in-app-only Stories and Reels (with Sound Collection or CML music) part of the plan, or is every post cut from the master? This decides whether the in-app libraries are used at all.

---

## Sources (all read on 2026-10-26 unless stated)

- [M1] YouTube Help, "Use music and sound effects from the Audio Library" (no date on page; "©2026 Google"). https://support.google.com/youtube/answer/3376882?hl=en
- [M2] Lickd, "YouTube Audio Library: what is it & what are its limitations", 11 Feb 2021 (vendor; quotes the Audio Library channel rule on off-YouTube use). https://lickd.co/youtube-audio-library/
- [M3] Search results on off-YouTube use, mostly vendor blogs that disagree (low weight): https://www.licenseorg.com/guide/music-audio/youtube-audio-library ; https://zorbasmedia.com/?p=39209 ; https://www.creatoressentials.com/glossary/youtube-audio-library/
- [M4] Pixabay, Terms of Service, section 5 "Content License", "Last updated: 20 October, 2026". https://pixabay.com/service/terms/ — [M4b] Pixabay, Content License Summary. https://pixabay.com/service/license-summary/
- [M5] Pixabay, FAQ (music: Content ID, licence certificates, social media, commercial video, AI uploads). https://pixabay.com/service/faq/
- [M6] Osborne Clarke, "Use of music on social media platforms: what businesses and creators need to know about usage", 27 Mar 2026 (law firm). https://www.osborneclarke.com/insights/use-music-social-media-platforms-what-businesses-and-creators-need-know-about-usage
- [M7] Meta, Music Guidelines, effective 26 Mar 2024. https://www.facebook.com/legal/music_guidelines
- [M8] Instagram Help Center, music library and Sound Collection (wording quoted from search results; the page did not render here). https://help.instagram.com/402084904469945
- [M9] Meta for Government & Nonprofits, "Using Music in Videos on Facebook and Instagram" / "Adding Music to Your Reels", 15 Jul 2025. https://www.facebook.com/government-nonprofits/blog/music-for-videos-on-facebook-and-instagram
- [M10] TikTok Ads Help, "Commercial Music Library", last updated July 2025. https://ads.tiktok.com/help/article/commercial-music-library?lang=en
- [M11] TikTok Ads Help, "How to use the Commercial Music Library", last updated July 2026. https://ads.tiktok.com/resources/help/article/how-to-use-the-commercial-music-library?lang=en
- [M12] TikTok, "Commercial Music Library User Terms" (no date on the rendered page). https://www.tiktok.com/legal/page/global/commercial-music-library-user-terms/en
- [M13] Free Music Archive, "License Guide" (© 2026 Tribe of Noise). https://freemusicarchive.org/License_Guide
- [M14] Creative Commons wiki, "Recommended practices for attribution" (TASL; CC BY 4.0 "any reasonable manner"). https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- [M15] Free Music Archive, "FAQ For Videos & Films". https://freemusicarchive.org/FAQ_For_Videos/
- [M16] Free Music Archive, FAQ (licence summaries). https://freemusicarchive.org/faq/
- [M17] Chrome for Developers, "Autoplay policy in Chrome". https://developer.chrome.com/blog/autoplay
- [M18] YouTube Help, "Dispute a Content ID claim". https://support.google.com/youtube/answer/2797454?hl=en
- [M19] Vendor guides on TikTok's "Music Usage Confirmation" for business uploads (not confirmed on TikTok's own pages; low weight): https://www.soundstripe.com/blogs/tiktok-music-licensing-rules ; https://dynamoi.com/learn/tiktok-music-promotion/can-i-use-my-own-music-on-tiktok-business-account
- [M20] Vendor guides on music for LinkedIn video (low weight): https://soundstripe.com/blogs/best-royalty-free-music-for-linked-in-videos ; https://cloudcovermusic.com/choosing-music-guide/background-music-linkedin-videos
- [M21] Ian Shepherd (MeterPlugs), "YouTube changes loudness reference to -14 LUFS", 18 Sep 2019. https://www.meterplugs.com/blog/2019/09/18/youtube-changes-loudness-reference-to-14-lufs.html
- [M22] YouTube Help, "Recommended upload encoding settings" (audio: AAC-LC, 48 kHz, stereo 384 kb/s). https://support.google.com/youtube/answer/1722171?hl=en
- [M23] Spotify for Artists, "Loudness normalization" (−14 LUFS; true peak below −1 dBTP, −2 dBTP if louder). https://support.spotify.com/us/artists/article/loudness-normalization/
- [M24] Production Advice (Ian Shepherd), "AES TD1008" summary, 1 Oct 2021 (music −16 LUFS; speech and mixed −18 LUFS). https://productionadvice.co.uk/td1008/
- [M25] Wikipedia, "Islamic views on music". https://en.wikipedia.org/wiki/Islamic_views_on_music
- From `channels.md`: [CH S17] YouTube Help, "Shorts up to three minutes" (claimed Shorts over 1 minute are blocked). https://support.google.com/youtube/answer/15424877?hl=en
