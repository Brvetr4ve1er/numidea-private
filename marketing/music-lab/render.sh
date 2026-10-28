#!/usr/bin/env bash
# PRIVATE: Numidea Labs marketing. Never copy into the public site repository.
# Render a procedural bed, set its loudness, encode it, measure it, hash it.
# Usage: render.sh <name> <target LUFS> [bed.mjs args...]
#   e.g. render.sh bed-full-s7 -14 --seed 7 --mode full
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
FF="$HERE/../pipeline/node_modules/ffmpeg-static/ffmpeg"
NAME="$1"; TARGET="$2"; shift 2
OUT="$HERE/out"; mkdir -p "$OUT"
node "$HERE/bed.mjs" --out "$OUT/$NAME.f32.wav" "$@"

# pass 1: measure
M=$("$FF" -hide_banner -nostats -i "$OUT/$NAME.f32.wav" -af "loudnorm=I=$TARGET:TP=-2:LRA=11:print_format=json" -f null - 2>&1 | sed -n '/^{/,/^}/p')
gi() { echo "$M" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>console.log(JSON.parse(s)['$1']))"; }
# pass 2: linear normalisation to the target, true-peak limited
"$FF" -hide_banner -loglevel error -y -i "$OUT/$NAME.f32.wav" \
  -af "loudnorm=I=$TARGET:TP=-2:LRA=11:measured_I=$(gi input_i):measured_TP=$(gi input_tp):measured_LRA=$(gi input_lra):measured_thresh=$(gi input_thresh):offset=$(gi target_offset):linear=true,aresample=48000" \
  -c:a pcm_s24le "$OUT/$NAME.wav"
"$FF" -hide_banner -loglevel error -y -i "$OUT/$NAME.wav" -c:a aac -b:a 384k -ar 48000 "$OUT/$NAME.m4a"

# measure the delivered (lossy) file, the one the platforms receive
echo "== $NAME.m4a (EBU R128, true peak) =="
"$FF" -hide_banner -nostats -i "$OUT/$NAME.m4a" -af ebur128=peak=true -f null - 2>&1 | sed -n '/Summary:/,$p'
# pictures for review
"$FF" -hide_banner -loglevel error -y -i "$OUT/$NAME.wav" -lavfi "showspectrumpic=s=1200x500:legend=1:fscale=log:color=intensity" "$OUT/$NAME.spectrum.png"
"$FF" -hide_banner -loglevel error -y -i "$OUT/$NAME.wav" -lavfi "showwavespic=s=1200x240:split_channels=1:colors=0xE6B450|0x4DD0E1" "$OUT/$NAME.wave.png"
sha256sum "$OUT/$NAME.wav" "$OUT/$NAME.m4a"
