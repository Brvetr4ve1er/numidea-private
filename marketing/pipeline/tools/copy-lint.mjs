// Copy lint for video files: blocks the claims the project has marked as
// unconfirmed, crypto payment wording, and Arabic text without the review
// marker. It is a net, not a proof: a human still reads every script
// against the facts bank (../facts-bank.md) before a render is published.
//
//   node tools/copy-lint.mjs [files...]      (default: videos/*.html|js, copy/*.json)
import fs from 'node:fs';
import path from 'node:path';

const RULES = [
  [/trois sp[ée]cialistes|three specialists|4 personnes|quatre personnes|four[- ]person|team of \d/i, 'team size (unconfirmed)'],
  [/\b6 ans\b|\bsix ans\b|\b6 years\b|\bsix years\b|ans d['’]exp[ée]rience|years of experience/i, 'years of experience (unconfirmed; say "depuis 2019")'],
  [/clients en France|clients in France|clients français|French clients/i, 'France clients in the plural (one France client only)'],
  [/\bReact\b|Next\.?js|\bVercel\b/i, 'React / Next.js / Vercel delivery (unconfirmed)'],
  [/Nomara/i, 'Nomara as a client (unconfirmed)'],
  [/\bUSDT\b|crypto|bitcoin|stablecoin/i, 'crypto payment (never)'],
  [/open[- ]source/i, '"open source" for WorkspaceHQ (unconfirmed)'],
  [/t[ée]moignage|testimonial|avis client|customer review|★/i, 'testimonials (none exist yet)'],
  [/\b\d+(?:[.,]\d+)?\s?%/, 'a percentage: is it a client result or metric? (none may be stated)'],
];
const ARABIC = /[؀-ۿ]/;
const MARKER = 'à relire par un arabophone natif';

const files = process.argv.slice(2).length ? process.argv.slice(2) : ['videos', 'copy']
  .filter((d) => fs.existsSync(d))
  .flatMap((d) => fs.readdirSync(d).filter((f) => /\.(html|json|js)$/.test(f)).map((f) => path.join(d, f)));

let problems = 0;
for (const file of files) {
  // Stylesheets and style attributes are layout, not copy: blanked out (line
  // numbers kept) so "width:100%" is not read as a claimed result.
  const blank = (m) => m.replace(/[^\n]/g, ' ');
  const text = fs.readFileSync(file, 'utf8')
    .replace(/<style[\s\S]*?<\/style>/gi, blank)
    .replace(/\sstyle="[^"]*"/gi, blank);
  text.split('\n').forEach((line, i) => {
    for (const [re, why] of RULES) if (re.test(line)) { problems++; console.log(`${file}:${i + 1}  ${why}\n    ${line.trim().slice(0, 140)}`); }
  });
  if (ARABIC.test(text) && !text.includes(MARKER)) { problems++; console.log(`${file}  contains Arabic but no « ${MARKER} » marker`); }
}
console.log(problems ? `${problems} problem(s) in ${files.length} file(s)` : `copy lint: ${files.length} file(s) clean`);
process.exit(problems ? 1 : 0);
