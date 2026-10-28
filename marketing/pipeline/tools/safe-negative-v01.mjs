// Negative tests for the per-block safe check on V01, S1-S5 (9:16 and 16:9, FR):
// each fault must be caught, and the untouched frame must pass.
//   node tools/safe-negative-v01.mjs
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';

const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true });
let failed = 0;
const expect = (name, got, want) => {
  const ok = want ? got.length > 0 : got.length === 0;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}: ${got.length ? JSON.stringify(got) : 'no violation'}`);
};
for (const [ratio, W, H] of [['9x16', 1080, 1920], ['16x9', 1920, 1080]]) {
  const page = await (await browser.newContext({ viewport: { width: W, height: H } })).newPage();
  await page.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=fr&cut=s1&render`);
  await page.waitForFunction(() => window.__scene);
  await page.evaluate(() => window.__scene.ready());
  const run = (fn) => page.evaluate(`(() => { window.__scene.seekFrame(99); ${fn}; const v = window.__scene.safeCheck(); window.__scene.seekFrame(98); window.__scene.seekFrame(99); return v; })()`);
  console.log(`-- ${ratio}`);
  expect('untouched f99', await run(''), false);
  expect('T40 pushed 400 px down', await run(`document.getElementById('t40').style.marginTop = '400px'`), true);
  await page.evaluate(() => { document.getElementById('t40').style.marginTop = ''; });
  expect('T40 box narrowed to 300 px (text overflows its box)', await run(`const e = document.getElementById('t40'); e.dataset.box = e.style.left.replace('px','') + ',' + parseFloat(e.style.top) + ',300,400'`), true);
  expect('T40 forced to 3 lines in a fixed 1-line height (vertical overflow)', await run(`const e = document.getElementById('t40'); const [x,y] = e.dataset.box.split(','); e.style.width = '300px'; e.style.height = '110px'; e.dataset.box = x + ',' + y + ',800,110'`), true);
  await page.evaluate(() => { const e = document.getElementById('t40'); e.style.width = ''; e.style.height = ''; });
  expect('blueprint pushed 300 px right', await run(`document.getElementById('bp').style.marginLeft = '300px'`), true);
  await page.close();

  // S2 and S3 (cut s1-s3 keeps the master's frame numbers): the mock-up's
  // text slots, T41, the coins and T09. Faults use properties the updaters
  // never write (margins, width), and are undone after each case.
  const p2 = await (await browser.newContext({ viewport: { width: W, height: H } })).newPage();
  await p2.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=fr&cut=s1-s3&render`);
  await p2.waitForFunction(() => window.__scene);
  await p2.evaluate(() => window.__scene.ready());
  const at = (f, fn, undo = '') => p2.evaluate(`(() => { window.__scene.seekFrame(${f}); ${fn}; const v = window.__scene.safeCheck(); ${undo}; window.__scene.seekFrame(${f - 1}); window.__scene.seekFrame(${f}); return v; })()`);
  const slot = `document.querySelector('[data-copy="M02"]')`;
  expect('untouched f133 (« Votre site » filled)', await at(133, ''), false);
  expect('M02 pushed 300 px right, out of its mock-up slot', await at(133, `${slot}.style.marginLeft = '300px'`, `${slot}.style.marginLeft = ''`), true);
  expect('T41 squeezed to 400 px wide (overflows its box downward)', await at(133, `const e = document.getElementById('t41'); window.__w = e.style.width; e.style.width = '400px'`, `document.getElementById('t41').style.width = window.__w`), true);
  expect('untouched f380 (S3 settled)', await at(380, ''), false);
  expect('coin-horse pushed 400 px down', await at(380, `document.getElementById('coin-horse').style.marginTop = '400px'`, `document.getElementById('coin-horse').style.marginTop = ''`), true);
  expect('T09 pushed 200 px left', await at(380, `document.getElementById('t09').style.marginLeft = '-200px'`, `document.getElementById('t09').style.marginLeft = ''`), true);
  expect('untouched f380 again (faults undone)', await at(380, ''), false);
  await p2.close();

  // S4 and S5 (cut s4-s5 starts at master f460: page frame = master - 460).
  const p3 = await (await browser.newContext({ viewport: { width: W, height: H } })).newPage();
  await p3.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=fr&cut=s4-s5&render`);
  await p3.waitForFunction(() => window.__scene);
  await p3.evaluate(() => window.__scene.ready());
  const at3 = (master, fn, undo = '') => { const f = master - 460; return p3.evaluate(`(() => { window.__scene.seekFrame(${f}); ${fn}; const v = window.__scene.safeCheck(); ${undo}; window.__scene.seekFrame(${f - 1}); window.__scene.seekFrame(${f}); return v; })()`); };
  const byId = (id) => `document.getElementById('${id}')`;
  expect('untouched f600 (S4 settled)', await at3(600, ''), false);
  expect('founder card pushed 300 px down, out of its box', await at3(600, `${byId('founder')}.style.marginTop = '300px'`, `${byId('founder')}.style.marginTop = ''`), true);
  expect('T32 squeezed to 300 px wide (overflows its box downward)', await at3(600, `window.__w = ${byId('t32')}.style.width; ${byId('t32')}.style.width = '300px'`, `${byId('t32')}.style.width = window.__w`), true);
  expect('untouched f860 (S5 held)', await at3(860, ''), false);
  expect('wordmark pushed 400 px right', await at3(860, `${byId('wordmark')}.style.marginLeft = '400px'`, `${byId('wordmark')}.style.marginLeft = ''`), true);
  expect('T51 pushed 600 px down', await at3(860, `${byId('t51')}.style.marginTop = '600px'`, `${byId('t51')}.style.marginTop = ''`), true);
  if (ratio === '9x16') expect('T52 pushed 500 px down (into the platform UI)', await at3(860, `${byId('t52')}.style.marginTop = '500px'`, `${byId('t52')}.style.marginTop = ''`), true);
  else expect('Plate V (a 16:9 key visual) pushed 300 px down', await at3(860, `${byId('light')}.style.marginTop = '300px'`, `${byId('light')}.style.marginTop = ''`), true);
  expect('untouched f899 (faults undone)', await at3(899, ''), false);
  await p3.close();

  // Scene splices (overlapCheck): T42 forced on screen while S2 wipes out,
  // the wordmark forced on screen while S4 wipes out; both must be caught.
  const p4 = await (await browser.newContext({ viewport: { width: W, height: H } })).newPage();
  await p4.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=fr&render`);
  await p4.waitForFunction(() => window.__scene);
  await p4.evaluate(() => window.__scene.ready());
  const sp = (f, id) => p4.evaluate(`(() => { const s = window.__scene; s.seekFrame(${f}); const e = document.getElementById('${id}');
    const v0 = s.overlapCheck(); e.style.visibility = ''; e.style.clipPath = 'inset(-2% 50% -2% 0%)'; const v = s.overlapCheck();
    s.seekFrame(${f - 1}); s.seekFrame(${f}); return [v0.length, v]; })()`);
  let [clean, got] = await sp(315, 't42');
  expect('untouched f315 (S2 wiping out): no splice', clean ? [1] : [], false);
  expect('T42 forced in at f315, half wiped (spliced with T40 / T41)', got, true);
  [clean, got] = await sp(675, 'wordmark');
  expect('untouched f675 (S4 wiping out): no splice', clean ? [1] : [], false);
  expect('wordmark forced in at f675, half wiped (spliced with the founder card)', got, true);
  await p4.close();

  // The 4:5 crop (cropCheck, pointer=li renders only): Plate V or the
  // workbench pushed across the window's bottom edge must be caught.
  if (ratio === '9x16') {
    const p5 = await (await browser.newContext({ viewport: { width: W, height: H } })).newPage();
    await p5.goto(`${server.url}/videos/v01.html?ratio=${ratio}&lang=fr&pointer=li&render`);
    await p5.waitForFunction(() => window.__scene);
    await p5.evaluate(() => window.__scene.ready());
    const cc = (f, fn, undo) => p5.evaluate(`(() => { const s = window.__scene; s.seekFrame(${f}); ${fn}; const v = s.cropCheck(); ${undo}; return v; })()`);
    expect('untouched f890 (pointer=li): no plate cut by the window', await cc(890, '', ''), false);
    expect('Plate V pushed 200 px down, across y 1440', await cc(890, `${byId('light')}.style.marginTop = '200px'`, `${byId('light')}.style.marginTop = ''`), true);
    expect('workbench pushed 100 px down, across y 1440', await cc(600, `${byId('bench')}.style.marginTop = '100px'`, `${byId('bench')}.style.marginTop = ''`), true);
    await p5.close();
  }
}
await browser.close(); await server.close();
console.log(failed ? `${failed} negative test(s) FAILED` : 'safe check: every fault caught, the untouched frame passes');
process.exit(failed ? 1 : 0);
