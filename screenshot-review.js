const { chromium } = require('playwright');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function takeScreenshots() {
  const browser = await chromium.launch();

  // ===== DESKTOP 1440x900 =====
  console.log('--- DESKTOP 1440x900 ---');
  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const dp = await desktopCtx.newPage();
  await dp.goto('https://flamesource.ai', { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(3000);

  // Poster 1 (first visible)
  console.log('Desktop: poster 1');
  await dp.screenshot({ path: '/tmp/layout-review-desktop-poster1.png' });

  // ArrowDown 3 times to get to poster 4
  console.log('Desktop: navigating to poster 4');
  for (let i = 0; i < 3; i++) {
    await dp.keyboard.press('ArrowDown');
    await sleep(1200);
  }
  await dp.screenshot({ path: '/tmp/layout-review-desktop-poster4.png' });

  // ArrowDown to poster 5
  console.log('Desktop: poster 5');
  await dp.keyboard.press('ArrowDown');
  await sleep(1200);
  await dp.screenshot({ path: '/tmp/layout-review-desktop-poster5.png' });

  // ArrowDown to dismiss posters, reveal hero
  console.log('Desktop: hero');
  await dp.keyboard.press('ArrowDown');
  await sleep(1500);
  await dp.screenshot({ path: '/tmp/layout-review-desktop-hero.png' });

  // Scroll through full page to trigger reveals
  console.log('Desktop: scrolling full page');
  for (let i = 0; i < 20; i++) {
    await dp.keyboard.press('ArrowDown');
    await sleep(300);
  }
  await sleep(1000);
  // Scroll back up slowly to ensure everything rendered
  await dp.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);
  // Full page screenshot
  console.log('Desktop: full page screenshot');
  await dp.screenshot({ path: '/tmp/layout-review-desktop-fullpage.png', fullPage: true });

  await desktopCtx.close();

  // ===== MOBILE 375x812 =====
  console.log('--- MOBILE 375x812 ---');
  const mobileCtx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mp = await mobileCtx.newPage();
  await mp.goto('https://flamesource.ai', { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(3000);

  // Poster 1
  console.log('Mobile: poster 1');
  await mp.screenshot({ path: '/tmp/layout-review-mobile-poster1.png' });

  // Navigate to poster 4
  console.log('Mobile: navigating to poster 4');
  for (let i = 0; i < 3; i++) {
    await mp.keyboard.press('ArrowDown');
    await sleep(1200);
  }
  await mp.screenshot({ path: '/tmp/layout-review-mobile-poster4.png' });

  // Poster 5
  console.log('Mobile: poster 5');
  await mp.keyboard.press('ArrowDown');
  await sleep(1200);
  await mp.screenshot({ path: '/tmp/layout-review-mobile-poster5.png' });

  // Dismiss to hero
  console.log('Mobile: hero');
  await mp.keyboard.press('ArrowDown');
  await sleep(1500);
  await mp.screenshot({ path: '/tmp/layout-review-mobile-hero.png' });

  // Scroll full page
  console.log('Mobile: scrolling full page');
  for (let i = 0; i < 25; i++) {
    await mp.keyboard.press('ArrowDown');
    await sleep(300);
  }
  await sleep(1000);
  await mp.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);
  console.log('Mobile: full page screenshot');
  await mp.screenshot({ path: '/tmp/layout-review-mobile-fullpage.png', fullPage: true });

  await mobileCtx.close();
  await browser.close();
  console.log('All screenshots saved!');
}

takeScreenshots().catch(e => { console.error(e); process.exit(1); });
