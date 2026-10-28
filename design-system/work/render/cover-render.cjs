// Renders components/Cover/preview.html at 960 x 288 in the six themes, as the frame does
// (tokens.css + bundle.css preloaded, data-theme on <html>), and measures the name's lines.
const { chromium } = require('/home/user/STICKITTY.INC/node_modules/playwright');
const fs = require('fs'), path = require('path');
const W = __dirname, SITE = path.join(W, 'site'), PROJ = path.join(SITE, 'project');
const THEMES = ['arcanum', 'noir', 'daylight', 'mono', 'altneon', 'engineering'];
const MIME = { '.css': 'text/css', '.woff2': 'font/woff2', '.html': 'text/html' };
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const html = fs.readFileSync(path.join(PROJ, 'components', 'Cover', 'preview.html'), 'utf8');
  for (const theme of THEMES) {
    const page = await browser.newPage({ viewport: { width: 960, height: 288 } });
    const errors = [];
    page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
    await page.route('http://ds.local/**', async route => {
      const u = new URL(route.request().url());
      if (u.pathname === '/preview.html') {
        const doc = html.replace('<html>', `<html data-theme="${theme}">`)
          .replace('<head>', '<head><link rel="stylesheet" href="/project/tokens.css"><link rel="stylesheet" href="/project/components/bundle.css">');
        return route.fulfill({ status: 200, contentType: 'text/html', body: doc });
      }
      const f = path.join(SITE, decodeURIComponent(u.pathname));
      if (!fs.existsSync(f)) return route.fulfill({ status: 404, body: '' });
      return route.fulfill({ status: 200, contentType: MIME[path.extname(f)] || 'application/octet-stream', body: fs.readFileSync(f) });
    });
    await page.goto('http://ds.local/preview.html');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(W, 'shots', `Cover-${theme}.png`) });
    const m = await page.evaluate(() => {
      const h = document.querySelector('.cv-name'), r = document.createRange(); r.selectNodeContents(h);
      const lines = [...r.getClientRects()].map(x => Math.round(x.width));
      const nb = h.getBoundingClientRect(), tb = document.querySelector('.cv-tag').getBoundingClientRect();
      const font = getComputedStyle(h).fontFamily;
      const loaded = document.fonts.check('700 96px Cinzel');
      return { lines, nameTop: Math.round(nb.top), nameRight: Math.round(nb.right), tagRight: Math.round(tb.right), tagBottom: Math.round(tb.bottom), font, loaded,
        sw: document.documentElement.scrollWidth, sh: document.documentElement.scrollHeight };
    });
    console.log(theme, JSON.stringify(m), errors.join(' '));
    await page.close();
  }
  await browser.close();
})();
