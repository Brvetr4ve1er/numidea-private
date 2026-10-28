// PRIVATE: Numidea Labs marketing. Never copy into the public site repository.
//
// Procedural music bed, written in code, no samples, no generation service.
// Deterministic: the same arguments always give the same samples, so the
// script + its arguments + the output's SHA-256 are the proof of authorship.
//
// Usage:
//   node bed.mjs --out bed.f32.wav [--seed 7] [--bpm 90] [--bars 10] [--mode full|perc] [--dur 30]
//
// --dur <s> (added 2026-10-26 for V01-30, scripts-trailer.md §3.4, §4.4): the
// file lasts exactly <s> seconds (a whole number of 48 kHz samples), so it
// ends on the video's last frame. The body (bars) is unchanged; the tail
// after it becomes dur - body instead of the fixed 3.3 s. In that tail the
// last chord sustains until dur - 3.3 s, then releases over the last 3.3 s
// as in the prototype, and the last 1.2 s still fade to silence.
// Without --dur nothing changes: the prototype beds re-render bit for bit
// (out/SHA256SUMS).
//   V01-30: node bed.mjs --bars 8.5 --dur 30 --seed 7  (chords at 0, 5.33,
//   10.67, 16.00, 21.33; the end-card chimes at 22.67; tail 7.33 s)
//
// mode=full : pad + bass + "burin" ticks + felt pulse + chime motif (default)
// mode=perc : ticks + a frame-drum pattern (dum/tak) only, no melodic
//             instruments except a very quiet drone on D (an option for audiences who
//             prefer no melodic instruments; owner decision)
//
// Output: 48 kHz, stereo, 32-bit float WAV, peak-normalised to -6 dBFS.
// Loudness is set afterwards with ffmpeg loudnorm (see render.sh).

import { writeFileSync } from 'node:fs';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => {
  if (v.startsWith('--')) a.push([v.slice(2), arr[i + 1]]);
  return a;
}, []));
const OUT = args.out || 'bed.f32.wav';
const SEED = +(args.seed ?? 7);
const BPM = +(args.bpm ?? 90);
const BARS = +(args.bars ?? 10);          // 10 bars at 90 BPM = 26.7 s + tail
const MODE = args.mode || 'full';
const SR = 48000;
const BEAT = 60 / BPM, BAR = 4 * BEAT, STEP = BEAT / 4;
const BODY = BARS * BAR;                  // music ends here, then the tail
const FIXED_DUR = args.dur != null ? +args.dur : null;
if (FIXED_DUR != null && !(FIXED_DUR >= BODY + 1.2)) {
  throw new Error(`bed: --dur ${args.dur} must be a number of seconds >= body + 1.2 s (body = ${BODY.toFixed(3)} s at ${BARS} bars, ${BPM} BPM)`);
}
const TAIL = FIXED_DUR != null ? FIXED_DUR - BODY : 3.3;
const DUR = FIXED_DUR != null ? FIXED_DUR : BODY + TAIL;
// The last chord (and the perc drone) holds until RELEASE_AT, then decays
// over the last 3.3 s as in the prototype. Without --dur, RELEASE_AT = BODY
// (unchanged). With a longer tail (V01: 7.33 s) the chord sustains under the
// end card instead of decaying for 7 s: a 7 s decay put the loudness range
// at 7.9 LU, over the <= 4 LU rule for a bed under text (music.md §4.5,
// scripts-trailer.md §4.4), and music.md §4.5 keeps the audible tail <= 3.3 s.
const RELEASE_AT = FIXED_DUR != null ? Math.max(BODY, DUR - 3.3) : BODY;
// --dur: exactly dur x 48000 samples (no float rounding past the last frame)
const N = FIXED_DUR != null ? Math.round(FIXED_DUR * SR) : Math.ceil(DUR * SR);

// ---------- helpers ----------
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const rnd = mulberry32(SEED);
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
const L = new Float32Array(N), R = new Float32Array(N);       // dry bus
const VL = new Float32Array(N), VR = new Float32Array(N);     // reverb send
const db = x => Math.pow(10, x / 20);

function polyblep(t, dt) {
  if (t < dt) { t /= dt; return t + t - t * t - 1; }
  if (t > 1 - dt) { t = (t - 1) / dt; return t * t + t + t + 1; }
  return 0;
}
// TPT state-variable filter (Simper), low-pass output
function svf() {
  let ic1 = 0, ic2 = 0, a1 = 0, a2 = 0, a3 = 0, k = 1.4;
  return {
    set(fc, q) { const g = Math.tan(Math.PI * Math.min(fc, SR * 0.45) / SR); k = 1 / q; a1 = 1 / (1 + g * (g + k)); a2 = g * a1; a3 = g * a2; },
    lp(v0) { const v3 = v0 - ic2, v1 = a1 * ic1 + a2 * v3, v2 = ic2 + a2 * ic1 + a3 * v3; ic1 = 2 * v1 - ic1; ic2 = 2 * v2 - ic2; return v2; },
    bp(v0) { const v3 = v0 - ic2, v1 = a1 * ic1 + a2 * v3, v2 = ic2 + a2 * ic1 + a3 * v3; ic1 = 2 * v1 - ic1; ic2 = 2 * v2 - ic2; return v1; },
  };
}
// smooth envelope: attack, hold until `off`, then exponential-ish release
function env(t, a, off, rel) {
  if (t < 0) return 0;
  let e = t < a ? Math.sin(0.5 * Math.PI * t / a) : 1;
  if (t > off) e *= Math.max(0, 1 - (t - off) / rel) ** 2;
  return e;
}

// ---------- harmony: D minor, i - VI - III - VII - i ----------
// voicings as MIDI notes; the first note of each is the bass (sine)
const CHORDS = [
  [38, 50, 57, 64, 65],   // Dm(add9)
  [34, 46, 53, 57, 62],   // Bbmaj7
  [41, 53, 57, 60, 67],   // Fmaj9 (no 3rd doubling)
  [36, 48, 55, 62, 64],   // Csus2(add9)
  [38, 50, 57, 62, 65],   // Dm, closed, to resolve
];
const CH_LEN = 2 * BAR;

// ---------- pad + bass ----------
function renderPad() {
  CHORDS.forEach((ch, ci) => {
    const t0 = ci * CH_LEN;
    const last = ci === CHORDS.length - 1;
    const off = last ? RELEASE_AT : t0 + CH_LEN;     // last chord holds to the end of the body (or RELEASE_AT)
    const rel = last ? DUR - RELEASE_AT - 0.2 : 1.6;
    const att = ci === 0 ? 0.05 : 1.1;                // first chord is there at frame 0 (hook)
    const s0 = Math.floor(t0 * SR), s1 = Math.min(N, Math.ceil((off + rel) * SR));
    const fl = svf(), fr = svf();
    const voices = ch.slice(1).map((m, vi) => ({
      f: mtof(m), ph: [rnd(), rnd(), rnd(), rnd()],
      det: [-6, 3, 6, -3].map(c => Math.pow(2, c / 1200)),
      g: 0.16 * (vi === ch.length - 2 ? 0.7 : 1),
    }));
    const bass = { f: mtof(ch[0]), ph: 0 };
    for (let s = s0; s < s1; s++) {
      const t = s / SR, lt = t - t0;
      if ((s & 31) === 0) {
        const lfo = 0.5 + 0.5 * Math.sin(2 * Math.PI * 0.07 * t + 1.3);
        const fc = 700 + 900 * lfo * env(lt, 2.5, 1e9, 1);   // opens slowly within each chord
        fl.set(fc, 0.8); fr.set(fc * 1.07, 0.8);
      }
      const e = env(lt, att, off - t0, rel);
      let xl = 0, xr = 0;
      for (const v of voices) {
        for (let k = 0; k < 4; k++) {
          const dt = v.f * v.det[k] / SR;
          v.ph[k] += dt; if (v.ph[k] >= 1) v.ph[k] -= 1;
          const saw = 2 * v.ph[k] - 1 - polyblep(v.ph[k], dt);
          if (k < 2) xl += saw * v.g; else xr += saw * v.g;
        }
      }
      const yl = fl.lp(xl) * e, yr = fr.lp(xr) * e;
      bass.ph += bass.f / SR; if (bass.ph >= 1) bass.ph -= 1;
      // fundamental kept low; 2nd and 3rd harmonics carry the bass line on phone speakers
      const w = 2 * Math.PI * bass.ph;
      const b = (Math.sin(w) * 0.12 + Math.sin(2 * w) * 0.07 + Math.sin(3 * w) * 0.035) * e;
      L[s] += yl + b; R[s] += yr + b;
      VL[s] += yl * 0.35; VR[s] += yr * 0.35;
    }
  });
}

// ---------- "burin" ticks: the engraving tool, 16th-note clockwork ----------
// probability per 16th step, bar-long pattern; accents on the beat
const TICK_P = [1, .25, .55, .2, .9, .2, .6, .35, .95, .25, .55, .2, .85, .3, .65, .45];
function renderTicks() {
  const startBar = MODE === 'perc' ? 0 : 0.5;      // in full mode the ticks enter half a bar in
  for (let step = Math.round(startBar * 16); step < BARS * 16; step++) {
    const p = TICK_P[step % 16];
    if (rnd() > p) continue;
    const t = step * STEP + (rnd() - 0.5) * 0.004;  // tiny human jitter, still "precise"
    const acc = step % 4 === 0 ? 1 : 0.55 + 0.25 * rnd();
    const pan = (step % 2 ? 0.25 : -0.25) + (rnd() - 0.5) * 0.2;
    const bp = svf(); bp.set(5200 + 2600 * rnd(), 2.2);
    const f2 = 1700 + 300 * rnd();
    const s0 = Math.floor(t * SR), len = Math.floor(0.06 * SR);
    for (let i = 0; i < len && s0 + i < N; i++) {
      const tt = i / SR;
      const n = bp.bp(rnd() * 2 - 1) * Math.exp(-tt / 0.012);
      const wood = Math.sin(2 * Math.PI * f2 * tt) * Math.exp(-tt / 0.009) * 0.5;
      const x = (n * 0.9 + wood) * 0.11 * acc * (MODE === 'perc' ? 1.4 : 1);
      L[s0 + i] += x * (1 - pan); R[s0 + i] += x * (1 + pan);
      VL[s0 + i] += x * 0.25; VR[s0 + i] += x * 0.25;
    }
  }
}

// ---------- felt pulse: a soft low heartbeat on beat 1 (and 3 in perc mode) ----------
function hit(t, f0, f1, dec, skinF, skinAmt, g, send) {
  const s0 = Math.floor(t * SR), len = Math.floor(0.5 * SR);
  let ph = 0;
  const nf = svf(); nf.set(skinF, 0.9);
  for (let i = 0; i < len && s0 + i < N; i++) {
    const tt = i / SR;
    const f = f1 + (f0 - f1) * Math.exp(-tt / 0.04);  // pitch drop: a frame-drum stroke, not a club kick
    ph += f / SR;
    const body = Math.sin(2 * Math.PI * ph) * Math.exp(-tt / dec);
    const skin = nf.lp(rnd() * 2 - 1) * Math.exp(-tt / 0.025) * skinAmt;  // the hand on the skin
    const x = (body + skin) * g;
    L[s0 + i] += x; R[s0 + i] += x;
    VL[s0 + i] += x * send; VR[s0 + i] += x * send;
  }
}
function renderPulse() {
  if (MODE === 'perc') {
    // frame-drum pattern on eighth notes, 8 per bar: dum . tak . dum tak . tak
    // (dum = low open stroke, tak = high edge stroke); last bar thins out
    const PAT = ['D', '', 'T', '', 'D', 'T', '', 'T'];
    for (let e8 = 0; e8 < BARS * 8; e8++) {
      const k = PAT[e8 % 8]; if (!k) continue;
      const t = e8 * BEAT / 2 + (rnd() - 0.5) * 0.003;
      const v = 0.85 + 0.15 * rnd();
      if (k === 'D') hit(t, 130, 88, 0.14, 1400, 0.7, 0.42 * v, 0.10);
      else hit(t, 330, 260, 0.035, 3200, 1.1, 0.22 * v, 0.14);
    }
    return;
  }
  for (let beat = 4; beat < BARS * 4; beat += 4) {   // full mode: a soft heartbeat on beat 1, from bar 2
    hit(beat * BEAT, 120, 72, 0.16, 1800, 0.6, 0.34, 0.08);
  }
}

// ---------- chime: inharmonic bell, D minor pentatonic, at chord changes ----------
const PENTA = [74, 77, 79, 81, 84, 86];
const PARTIALS = [[1, 1, 2.6], [2.0, 0.28, 1.6], [2.76, 0.42, 1.1], [5.4, 0.16, 0.45], [8.93, 0.06, 0.25]];
function chime(t, m, g, pan) {
  const f = mtof(m), s0 = Math.floor(t * SR), len = Math.floor(3.2 * SR);
  for (let i = 0; i < len && s0 + i < N; i++) {
    const tt = i / SR;
    let x = 0;
    for (const [r, a, d] of PARTIALS) x += Math.sin(2 * Math.PI * f * r * tt) * a * Math.exp(-tt / d);
    x *= g * Math.min(1, tt / 0.002);
    L[s0 + i] += x * (1 - pan); R[s0 + i] += x * (1 + pan);
    VL[s0 + i] += x * 0.7; VR[s0 + i] += x * 0.7;
  }
}
function renderChimes() {
  // frame 0: the hook sparkle, then a short motif at each chord change
  chime(0.0, 81, 0.07, -0.3); chime(0.33, 86, 0.06, 0.3);
  for (let ci = 1; ci < CHORDS.length; ci++) {
    const t = ci * CH_LEN;
    const a = PENTA[Math.floor(rnd() * PENTA.length)], b = PENTA[Math.floor(rnd() * PENTA.length)];
    chime(t, a, 0.05, -0.25); chime(t + BEAT * 1.5, b, 0.04, 0.25);
  }
  // the end card: D + A, let it ring into the tail
  chime(BODY, 74, 0.07, -0.15); chime(BODY + 0.04, 81, 0.05, 0.15);
}

// ---------- reverb: 8-line feedback delay network, ~3.4 s, damped ("night air") ----------
function renderReverb() {
  const LEN = [1433, 1601, 1867, 2053, 2251, 2399, 2617, 2797];
  const RT60 = 3.4, PRE = Math.floor(0.022 * SR);
  const lines = LEN.map(n => ({ buf: new Float32Array(n), i: 0, n, g: Math.pow(10, -3 * n / (RT60 * SR)), lp: 0 }));
  const damp = 0.42;
  const pre = new Float32Array(PRE + 1); let pi = 0;
  const outs = new Float32Array(8);
  for (let s = 0; s < N; s++) {
    const xin = pre[pi]; pre[pi] = (VL[s] + VR[s]) * 0.5; pi = (pi + 1) % pre.length;
    let sum = 0;
    for (let k = 0; k < 8; k++) { const ln = lines[k]; outs[k] = ln.buf[ln.i]; sum += outs[k]; }
    const h = (2 / 8) * sum;
    let wl = 0, wr = 0;
    for (let k = 0; k < 8; k++) {
      const ln = lines[k];
      const fb = (outs[k] - h) * ln.g;
      ln.lp += (1 - damp) * (fb - ln.lp);             // one-pole low-pass in the loop
      ln.buf[ln.i] = ln.lp + xin * (k & 1 ? -0.35 : 0.35);
      ln.i = (ln.i + 1) % ln.n;
      if (k & 1) wr += outs[k]; else wl += outs[k];
    }
    L[s] += wl * 0.30; R[s] += wr * 0.30;
  }
}

// ---------- build ----------
if (MODE === 'full') { renderPad(); renderChimes(); }
else {
  // perc mode keeps a quiet sub drone on D so the bed is not empty between hits
  for (let s = 0; s < N; s++) { const t = s / SR; const e = env(t, 0.05, RELEASE_AT, DUR - RELEASE_AT - 0.2); const w = 2 * Math.PI * mtof(38) * t; const x = (Math.sin(w) * 0.035 + Math.sin(2 * w) * 0.025 + Math.sin(3 * w) * 0.012) * e; L[s] += x; R[s] += x; }
}
renderTicks();
renderPulse();
renderReverb();

// master: DC/rumble high-pass (one-pole, ~40 Hz), soft clip, fades, peak to -6 dBFS
const hpA = Math.exp(-2 * Math.PI * 40 / SR);
let hl = 0, hr = 0, pl = 0, pr = 0, peak = 0;
for (let s = 0; s < N; s++) {
  const xl = L[s], xr = R[s];
  hl = hpA * (hl + xl - pl); pl = xl; hr = hpA * (hr + xr - pr); pr = xr;
  const t = s / SR;
  const fin = Math.min(1, t / 0.012);
  const fout = t > DUR - 1.2 ? Math.max(0, (DUR - t) / 1.2) ** 2 : 1;
  L[s] = Math.tanh(hl * 1.1) * fin * fout; R[s] = Math.tanh(hr * 1.1) * fin * fout;
  peak = Math.max(peak, Math.abs(L[s]), Math.abs(R[s]));
}
const norm = db(-6) / (peak || 1);
// 32-bit float WAV
const data = Buffer.alloc(N * 2 * 4);
for (let s = 0; s < N; s++) { data.writeFloatLE(L[s] * norm, s * 8); data.writeFloatLE(R[s] * norm, s * 8 + 4); }
const hdr = Buffer.alloc(44);
hdr.write('RIFF', 0); hdr.writeUInt32LE(36 + data.length, 4); hdr.write('WAVE', 8);
hdr.write('fmt ', 12); hdr.writeUInt32LE(16, 16); hdr.writeUInt16LE(3, 20); hdr.writeUInt16LE(2, 22);
hdr.writeUInt32LE(SR, 24); hdr.writeUInt32LE(SR * 8, 28); hdr.writeUInt16LE(8, 32); hdr.writeUInt16LE(32, 34);
hdr.write('data', 36); hdr.writeUInt32LE(data.length, 40);
writeFileSync(OUT, Buffer.concat([hdr, data]));
console.log(JSON.stringify({ out: OUT, seed: SEED, bpm: BPM, bars: BARS, mode: MODE, seconds: +DUR.toFixed(3), samples: N,
  body: +BODY.toFixed(3), tail: +TAIL.toFixed(3), releaseAt: +RELEASE_AT.toFixed(3), chords: CHORDS.map((_, i) => +(i * CH_LEN).toFixed(3)), endChimes: +BODY.toFixed(3), rawPeak: +peak.toFixed(4) }));
