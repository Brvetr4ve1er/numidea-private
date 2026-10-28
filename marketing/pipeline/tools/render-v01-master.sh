#!/usr/bin/env bash
# PRIVATE. V01-30 « L'atlas », French and English masters: the whole render
# plan (scripts-trailer.md §10.3, PLAN.md §9), in order and sequential (4 CPUs;
# other sessions may be rendering). Every step fails the run on a failed check.
#   npm run v01:master        (from pipeline/)
# Outputs in ../out/v01/ (REPORT.md lists them, with the checks and the
# timings of every step from timings.tsv). The silent files are the defaults
# until the owner's listening test (P3 / G5); the music-s7 files are previews
# with the code-made bed (ledger M-0003). Arabic is not rendered (gate G1).
# REPORT=0 skips the last step (the report), e.g. while its tool is edited.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=../out/v01
LANGS="fr en"
BED=../music-lab/out/v01-30-s7.wav   # bed.mjs --bars 8.5 --dur 30 --seed 7, normalised by render.sh (ledger M-0003)
GAIN=-0.17                            # one constant gain: -14.00 LUFS on the encoded AAC (tools/loudness.mjs --simulate)
FRAMES=0,90,100,200,300,320,450,460,670,680,890,899
labels() { # labels <LANG> <pointer text or empty>
  local L="$1" P="$2"
  local end="S5 settled · end card"; [ -n "$P" ] && end="$end, $P"
  echo "f0 S1 first · hook, Plate I, blueprint outline (thumbnail)|S1 settled · blueprint drawn, cover|S2 first · T40 to header|S2 settled · state 1 $L placeholders|S2 settled · state 3 mirrored|S3 first · S2 cleared, T42 wipes in|S3 settled · coins turned|S4 first · S3 cleared, card wipes in|S4 settled · founder|S5 first · S4 cleared, wordmark wipes in|$end|f899 last frame (held)"
}
li_text() { [ "$1" = fr ] && echo "Lien en commentaire" || echo "Link in comments"; }

mkdir -p $OUT
TIMINGS=$OUT/timings.tsv
printf 'step\tstart_utc\tseconds\n' > $TIMINGS
step() { # step <name> <command...>: run it, log its wall time
  local name="$1"; shift
  local t0; t0=$(date +%s.%N)
  local s; s=$(date -u +%FT%TZ)
  echo "== $name"
  "$@"
  printf '%s\t%s\t%.1f\n' "$name" "$s" "$(echo "$(date +%s.%N) - $t0" | bc)" >> $TIMINGS
}

# 1. copy lint; the safe, splice and crop checks' negative tests; the five
#    per-scene review cuts (FR, out/v01/checks: the seams the preflight
#    compares the master against); preflight (fit-text and fonts; safe box,
#    scene splices and the 4:5 crop on all 900 frames of each variant; seams)
step lint node tools/copy-lint.mjs
step safe-negative node tools/safe-negative-v01.mjs
step checks npm run --silent v01:checks
step preflight node tools/v01-preflight.mjs --variants 9x16:fr,16x9:fr,9x16:fr:li,9x16:en,16x9:en,9x16:en:li

# 2. silent masters (the default): 9:16 and 16:9 per language, then the 9:16 pointer=li sources of the LinkedIn 4:5
for L in $LANGS; do
  step render-silent-$L node render.mjs videos/v01.html --name v01 --tag silent --report v01__${L}__silent --ratios 9x16,16x9 --langs $L --still 239 --determinism \
    --out $OUT --contact $FRAMES --contact-labels "$(labels ${L^^} '')"
done
step render-silent-li node render.mjs videos/v01.html --name v01 --tag silent --params pointer=li --ratios 9x16 --langs fr,en --still 239 --determinism --out $OUT/src

# 3. music previews (same picture; loudness, true peak, range and phone check measured on each MP4)
for L in $LANGS; do
  step render-music-$L node render.mjs videos/v01.html --name v01 --tag music-s7 --report v01__${L}__music-s7 --ratios 9x16,16x9 --langs $L --audio $BED --audio-gain $GAIN \
    --audio-bitrate 384k --still 500 --determinism --out $OUT
done
step render-music-li node render.mjs videos/v01.html --name v01 --tag music-s7 --params pointer=li --ratios 9x16 --langs fr,en --audio $BED --audio-gain $GAIN \
  --audio-bitrate 384k --still 500 --determinism --out $OUT/src

# 4. LinkedIn 4:5: crop y 90-1440 of the pointer=li renders, re-encoded and re-verified
for L in $LANGS; do
  step crop-4x5-silent-$L node tools/crop45.mjs $OUT/src/v01__9x16__${L}__li__silent.mp4 --lang $L --params pointer=li --ref 239 --out $OUT/v01__4x5__${L}__li__silent.mp4 \
    --contact $FRAMES --contact-labels "$(labels ${L^^} "$(li_text $L)")"
  step crop-4x5-music-$L node tools/crop45.mjs $OUT/src/v01__9x16__${L}__li__music-s7.mp4 --lang $L --params pointer=li --ref 500 --out $OUT/v01__4x5__${L}__li__music-s7.mp4
done

# 5. stills (§4.6) and the loudness summary of the six music files
step stills node tools/v01-stills.mjs --out $OUT/stills --langs fr,en
step loudness node tools/loudness.mjs $(for L in $LANGS; do echo $OUT/v01__9x16__${L}__music-s7.mp4 $OUT/v01__16x9__${L}__music-s7.mp4 $OUT/v01__4x5__${L}__li__music-s7.mp4; done) --json $OUT/loudness.json

# 6. review aids: frame-by-frame strips of the scene changes and the mirror,
#    decoded from the masters; determinism slices (whole windows of frames
#    captured ascending and descending on two fresh pages)
step review-strips node tools/v01-review-strips.mjs --out $OUT --langs fr,en
step slice node tools/v01-slice.mjs --out $OUT/preflight

# 7. REPORT.md: every file, an independent ffprobe pass, the checks and the timings
[ "${REPORT:-1}" = 0 ] || node tools/v01-report.mjs --out $OUT
