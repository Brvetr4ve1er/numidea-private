// Renders every components/<Comp>/preview.html in the six themes the way the
// artifact frame does (tokens.css + bundle.css preloaded, data-theme on <html>),
// screenshots it, and runs a DOM contrast pass on every text element.
const { chromium } = require('/home/user/STICKITTY.INC/node_modules/playwright');
const fs = require('fs'), path = require('path');
const W = __dirname, SITE = path.join(W, 'site'), PROJ = path.join(SITE, 'project');
const THEMES = ['arcanum', 'noir', 'daylight', 'mono', 'altneon', 'engineering'];
const only = process.argv[2] ? process.argv[2].split(',') : null;
const themesArg = process.argv[3] ? process.argv[3].split(',') : THEMES;
const MIME = { '.css': 'text/css', '.woff2': 'font/woff2', '.html': 'text/html', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const comps = fs.readdirSync(path.join(PROJ, 'components')).filter(d => fs.existsSync(path.join(PROJ, 'components', d, 'preview.html')))
    .filter(d => !only || only.includes(d));
  const report = {};
  for (const comp of comps) {
    let html = fs.readFileSync(path.join(PROJ, 'components', comp, 'preview.html'), 'utf8');
    const marker = html.split('\n')[0];
    const width = +(marker.match(/width=(\d+)/) || [0, 900])[1];
    for (const theme of themesArg) {
      const page = await browser.newPage({ viewport: { width, height: 400 } });
      await page.route('http://ds.local/**', async route => {
        const u = new URL(route.request().url());
        if (u.pathname === '/preview.html') {
          const doc = html.replace('<html>', `<html data-theme="${theme}">`)
            .replace('<head>', '<head><link rel="stylesheet" href="/project/tokens.css"><link rel="stylesheet" href="/project/components/bundle.css">');
          return route.fulfill({ status: 200, contentType: 'text/html', body: doc });
        }
        const f = path.join(SITE, decodeURIComponent(u.pathname));
        if (!fs.existsSync(f)) return route.fulfill({ status: 404, body: '' });
        let ct = MIME[path.extname(f)] || 'application/octet-stream';
        if (u.pathname.startsWith('/_blob/')) {
          const b = fs.readFileSync(f);
          ct = b.slice(0, 4).toString() === 'RIFF' ? 'image/webp' : b[0] === 0x89 ? 'image/png' : b.slice(0, 5).toString().includes('<') ? 'image/svg+xml' : 'image/jpeg';
        }
        return route.fulfill({ status: 200, contentType: ct, body: fs.readFileSync(f) });
      });
      const errors = [];
      page.on('requestfailed', r => errors.push('failed ' + r.url()));
      page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
      await page.goto('http://ds.local/preview.html');
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(250);
      const out = path.join(W, 'shots', `${comp}-${theme}.png`);
      await page.screenshot({ path: out, fullPage: true });
      const res = await page.evaluate(() => {
        function parse(c) { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; }
        function over(f, b) { const a = f[3]; return [f[0] * a + b[0] * (1 - a), f[1] * a + b[1] * (1 - a), f[2] * a + b[2] * (1 - a), 1]; }
        function lum(c) { const f = x => { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); }
        function ratio(a, b) { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
        function bgOf(el) {
          const layers = [];
          for (let e = el; e; e = e.parentElement) {
            const c = parse(getComputedStyle(e).backgroundColor);
            if (c && c[3] > 0) { layers.push(c); if (c[3] >= 1) break; }
          }
          let base = [255, 255, 255, 1];
          for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
          return base;
        }
        const rows = [];
        const els = [...document.querySelectorAll('body *')].filter(e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()));
        for (const e of els) {
          const cs = getComputedStyle(e);
          if (cs.visibility === 'hidden' || cs.display === 'none') continue;
          const fg = parse(cs.color); const bg = bgOf(e);
          const col = fg[3] < 1 ? over(fg, bg) : fg;
          const r = ratio(col, bg);
          const size = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
          const need = (size >= 24 || (bold && size >= 18.66)) ? 3 : 4.5;
          rows.push({ text: [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').slice(0, 40), cls: e.className && e.className.baseVal === undefined ? e.className : '', r: +r.toFixed(2), need });
        }
        // overflow check
        const over_ = [...document.querySelectorAll('body *')].filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow === 'visible' && e.clientWidth > 0 && !['SPAN','B','I','A','EM'].includes(e.tagName)).map(e => e.tagName + '.' + e.className);
        return { rows, docW: document.documentElement.scrollWidth, over: over_.slice(0, 5), h: document.documentElement.scrollHeight };
      });
      const fails = res.rows.filter(x => x.r < x.need);
      report[`${comp}/${theme}`] = { fails, errors, docW: res.docW, width, h: res.h, over: res.over };
      await page.close();
    }
  }
  await browser.close();
  for (const [k, v] of Object.entries(report)) {
    const flag = v.fails.length || v.errors.length || v.docW > v.width;
    console.log(`${flag ? 'XX' : 'ok'} ${k} h=${v.h} docW=${v.docW}/${v.width}` + (v.errors.length ? ' ERR ' + v.errors.join(' | ') : '') + (v.fails.length ? ' FAIL ' + JSON.stringify(v.fails) : '') + (v.over.length ? ' OVER ' + v.over.join(',') : ''));
  }
})();
