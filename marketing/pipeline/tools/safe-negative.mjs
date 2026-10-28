// Negative test for the safe-area check: push the signature 400px down.
import { chromium } from 'playwright-core';
import { startServer } from '../lib/server.mjs';
import { SITE_ASSETS, PIPELINE_ROOT, CHROMIUM } from '../lib/bin.mjs';
const server = await startServer({ root: PIPELINE_ROOT, mounts: { '/site/': SITE_ASSETS } });
const browser = await chromium.launch({ executablePath: CHROMIUM, headless: true });
const page = await (await browser.newContext({ viewport: { width: 1080, height: 1920 } })).newPage();
await page.goto(server.url + '/videos/test-3s.html?ratio=9x16&lang=fr&render');
await page.evaluate(() => window.__scene.ready());
console.log('settled, untouched:', JSON.stringify(await page.evaluate(() => { window.__scene.seekFrame(89); return window.__scene.safeCheck(); })));
console.log('signature pushed down:', JSON.stringify(await page.evaluate(() => { document.getElementById('sig').style.marginBottom = '-400px'; return window.__scene.safeCheck(); })));
await browser.close(); await server.close();
