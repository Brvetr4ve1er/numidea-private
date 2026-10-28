// Copy loader: every on-screen string comes from one dictionary per video
// (copy/<id>.json), never from the markup. Each entry carries its fact ID
// (`src`, scripts-trailer.md §2), the cuts that may show it (`use`), and the
// Arabic review state (`arReviewed`, "à relire par un arabophone natif").
//
//   const copy = await loadCopy('/copy/trailer.json', { cut: 'v01-30', lang, variant });
//   copy.apply(document)          // fills every [data-copy="T40"] element
//   copy.report()                 // [{ key, src, lang, text }] for the render report
//
// The loader refuses, before frame 0:
//   - a key that is missing, or a language missing from it;
//   - a deferred block (the slot module) or a gated one (the CTA, T13) unless
//     the cut opts in;
//   - a block whose `use` list does not name this cut;
//   - in render mode, an Arabic string not yet signed off by the native
//     reviewer (arReviewed false), unless the URL carries `ardraft`, which
//     stamps the frame as a draft (gate G1);
//   - any string matching the cut's `forbid` patterns (V01: no URL, email,
//     phone, price figure, the Aperçu or a call to action).
// Text is set with DOM text nodes, never innerHTML.

const ARABIC = /[؀-ۿ]/;

export async function loadCopy(url, { cut, lang, variant = null, render = false, ardraft = false, allow = {}, forbid = [] }) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`copy: cannot load ${url} (${res.status})`);
  const dict = await res.json();
  const marker = dict._meta?.ar_marker;
  if (!marker) throw new Error('copy: the file-level Arabic review marker (_meta.ar_marker) is missing');
  const used = new Map();

  // The string for one key in this video's language (or a forced one).
  function get(key, l = lang) {
    const e = dict[key];
    if (!e || key.startsWith('_')) throw new Error(`copy: no key ${key}`);
    if (e.deferred && !allow.deferred) throw new Error(`copy: ${key} is deferred (${e.deferred}); not allowed in ${cut}`);
    if (e.gate && !allow.gated) throw new Error(`copy: ${key} is gated (${e.gate}); not allowed in ${cut}`);
    if (e.use && !e.use.some((u) => u === cut || cut.startsWith(u + '-'))) {
      throw new Error(`copy: ${key} is not used in ${cut} (use: ${e.use.join(', ')})`);
    }
    const vkey = variant && e[`${l}_${variant}`] != null ? `${l}_${variant}` : l;
    const text = e[vkey];
    if (text == null) throw new Error(`copy: ${key} has no ${vkey} string`);
    if (l === 'ar' || ARABIC.test(text)) {
      if (e.ar_review !== marker) throw new Error(`copy: ${key} has Arabic without the review marker`);
      if (render && !e.arReviewed && !ardraft) {
        throw new Error(`copy: ${key}.${l} is not reviewed by a native speaker (arReviewed false); Arabic masters wait for gate G1`);
      }
    }
    for (const re of forbid) if (re.test(text)) throw new Error(`copy: ${key}.${vkey} matches a forbidden pattern ${re} in ${cut}: « ${text} »`);
    const swash = e.swash?.[l] ?? null;
    if (swash && !text.includes(swash)) throw new Error(`copy: ${key}.${l} swash « ${swash} » is not part of « ${text} »`);
    const info = { key, src: e.src, lang: l, variant: vkey !== l ? vkey : null, text, swash,
      arReviewed: l === 'ar' ? !!e.arReviewed : null };
    used.set(`${key}.${vkey}`, info);
    return info;
  }

  // Fill one element: lang/dir per element (bidi, Plex Arabic, no tracking
  // on Arabic follow the text), the fact ID as data-src, the swash half in a
  // span.swash, (data-words) each word in its own span.w so a component can
  // move words one by one (the T40 header move), and (data-keep="·") each
  // segment between separators in a span.keep that never wraps inside, so a
  // two-line label breaks at its separator (« Studio web & logiciel · » /
  // « Bordj Bou Arréridj, Algérie »), not inside a place name. The text is
  // unchanged: the separator stays at the end of its segment, in its own
  // span.sep, so a layout that breaks the line there can hide it
  // (markSeparatorBreaks below) without touching the string.
  function set(el, info) {
    el.textContent = '';
    el.lang = info.lang;
    el.dir = info.lang === 'ar' ? 'rtl' : 'ltr';
    el.dataset.src = info.src;
    const words = el.hasAttribute('data-words');
    const add = (parent, s) => {
      if (!words) { parent.append(s); return; }
      s.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { parent.append(part); return; }
        const w = document.createElement('span'); w.className = 'w'; w.textContent = part; parent.append(w);
      });
    };
    const keep = el.dataset.keep;
    if (keep && !info.swash && !words) {
      const sep = ` ${keep} `;
      const parts = info.text.split(sep);
      parts.forEach((part, i) => {
        const k = document.createElement('span'); k.className = 'keep';
        k.textContent = part;
        if (i < parts.length - 1) {
          const s = document.createElement('span'); s.className = 'sep'; s.textContent = ` ${keep}`;
          k.append(s);
        }
        el.append(k);
        if (i < parts.length - 1) el.append(' ');
      });
      if (el.textContent !== info.text) throw new Error(`copy: ${info.key} segments do not rebuild « ${info.text} »`);
      return;
    }
    if (info.swash) {
      const i = info.text.indexOf(info.swash);
      add(el, info.text.slice(0, i));
      const sw = document.createElement('span'); sw.className = 'swash';
      add(sw, info.swash); el.append(sw);
      add(el, info.text.slice(i + info.swash.length));
    } else add(el, info.text);
  }

  return {
    dict, get, set,
    apply(root = document) {
      for (const el of root.querySelectorAll('[data-copy]')) set(el, get(el.dataset.copy, el.dataset.copyLang || lang));
    },
    report() { return [...used.values()]; },
  };
}

// Fixed phrases that never break across lines, per language: a typographic
// rule applied at render time (like the no-break spaces of price ranges,
// scripts-trailer.md §3.2), so the copy string itself never changes. The
// phrase's words are wrapped, with the spaces between them, in a
// span.nobr (white-space: nowrap); textContent is unchanged.
export const NOBREAK = { fr: ['sur mesure'], en: ['web developer'], ar: [] };
const bare = (s) => s.toLowerCase().replace(/[\s.,;:!?…«»"]+$/u, '').replace(/^[«"\s]+/u, '');
export function keepTogether(el, phrase) {
  const want = phrase.toLowerCase().split(/\s+/);
  // 1. word spans (data-words): consecutive .w siblings, only whitespace between
  const ws = [...el.querySelectorAll('.w')];
  for (let i = 0; i + want.length <= ws.length; i++) {
    const run = ws.slice(i, i + want.length);
    if (!run.every((w, k) => bare(w.textContent) === want[k] || (k < want.length - 1 && w.textContent.toLowerCase() === want[k]))) continue;
    if (!run.every((w) => w.parentNode === run[0].parentNode)) continue;
    const nodes = [];
    for (let n = run[0]; n; n = n.nextSibling) { nodes.push(n); if (n === run[run.length - 1]) break; if (n.nodeType === 3 && n.data.trim()) { nodes.length = 0; break; } }
    if (!nodes.length) continue;
    const span = document.createElement('span'); span.className = 'nobr';
    run[0].before(span); span.append(...nodes);
    return true;
  }
  // 2. plain text nodes
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const re = new RegExp(want.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+'), 'iu');
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const m = re.exec(n.data);
    if (!m) continue;
    const mid = n.splitText(m.index); mid.splitText(m[0].length);
    const span = document.createElement('span'); span.className = 'nobr';
    mid.before(span); span.append(mid);
    return true;
  }
  return false;
}
// Applies NOBREAK to every [data-copy] block in its own language. Returns
// [{ key, phrase }] for the render report.
export function applyNobreak(root = document) {
  const out = [];
  for (const el of root.querySelectorAll('[data-copy]')) {
    const before = el.textContent;
    for (const phrase of NOBREAK[el.lang] || []) {
      if (!new RegExp(phrase.replace(/\s+/g, '\\s+'), 'iu').test(before)) continue;
      if (!keepTogether(el, phrase)) throw new Error(`copy: cannot keep « ${phrase} » together in ${el.dataset.copy}`);
      out.push({ key: el.dataset.copy, phrase });
    }
    if (el.textContent !== before) throw new Error(`copy: keeping phrases together changed the text of ${el.dataset.copy}`);
  }
  return out;
}

// A data-keep block, once laid out: where the line breaks at a separator,
// that separator is hidden (visibility, so nothing reflows), as T09 hides its
// separators between cards. The string is unchanged. Returns the separators
// hidden, for the report.
export function markSeparatorBreaks(el) {
  const keeps = [...el.querySelectorAll(':scope > .keep')];
  const hidden = [];
  keeps.forEach((k, i) => {
    const sep = k.querySelector('.sep');
    if (!sep) return;
    sep.classList.remove('at-break');
    const next = keeps[i + 1];
    if (!next) return;
    const a = [...sep.getClientRects()].pop(), b = next.getClientRects()[0];
    if (a && b && b.top > a.top + a.height / 2) { sep.classList.add('at-break'); hidden.push(sep.textContent.trim()); }
  });
  return hidden;
}

// Patterns no V01 on-screen string may contain (scripts-trailer.md §4,
// PLAN.md §9): no URL, email or phone number, no price figure or currency,
// no Aperçu and no call to action. Checked on every string the video sets.
export const FORBID_V01 = [
  /https?:|www\.|\.(?:io|com|dz|fr|tech|app|net)\b|github/i, // URL
  /@/,                                                        // email / handle
  /\+?\d[\d .]{7,}\d/,                                        // phone-like digit run
  /\d\s?(?:DA|DZD|€|\$|USD|EUR)\b|[€$]\s?\d|\bHT\b|excl\. tax|دج/, // price figure
  /Aper[çc]u|\bPreview\b|معاين/i,                             // the Aperçu (V10 only)
  /→|←|Demander|Request my|اطلب/,                             // call to action
];
