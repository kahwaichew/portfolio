// Exports each .artboard in a mockup page to a PNG with a headless browser.
// Usage: node design/render.mjs design/jalan.html public/work/jalan [artboardId=fileName ...]
// With no ids, every artboard is exported under its own id.
import { chromium } from 'playwright-core';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [page, outDir, ...ids] = process.argv.slice(2);
// Uses the locally installed Edge or Chrome rather than downloading a browser
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL ?? 'msedge' });
const tab = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1800, height: 1200 } });
await tab.goto(pathToFileURL(path.resolve(page)).href, { waitUntil: 'networkidle' });
await tab.evaluate(() => document.fonts.ready);

const targets = ids.length
  ? ids.map((spec) => spec.split('='))
  : (await tab.$$eval('.artboard', (els) => els.map((el) => [el.id]))) ;
for (const [id, name = id] of targets) {
  const file = path.join(outDir, `${name}.png`);
  await tab.locator(`#${id}`).screenshot({ path: file });
  console.log(file);
}
await browser.close();
