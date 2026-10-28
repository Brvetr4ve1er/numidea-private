const { chromium } = require('/home/user/STICKITTY.INC/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  await p.goto('file:///home/user/STICKITTY.INC/index.html');
  await p.waitForTimeout(1500);
  const el = await p.$('.plate');
  const box = await el.boundingBox();
  await p.screenshot({ path: __dirname + '/shots/site-plate.png', clip: { x: box.x - 20, y: box.y - 20, width: 220, height: 160 } });
  const info = await p.evaluate(() => { const k = document.querySelector('.pk.tl'); const cs = getComputedStyle(k); const pl = getComputedStyle(document.querySelector('.plate')); return { pk: [cs.top, cs.left, cs.borderTopWidth, cs.borderTopColor, cs.width], plate: [pl.overflow, pl.borderRadius, pl.borderTopWidth] }; });
  console.log(JSON.stringify(info));
  await b.close();
})();
