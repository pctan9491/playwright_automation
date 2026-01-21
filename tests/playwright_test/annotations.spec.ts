import { test, expect } from '@playwright/test';

//test.only
test.skip('redirecting page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

//test.skip
test.skip('Play with CODEGEN', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).click();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
    await expect(page.getByRole('button', { name: 'Java' })).toBeVisible();
    await page.getByRole('button', { name: 'Java' }).click();
    await expect(page.getByText('JavaNode.jsPython.NET')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    await page.waitForTimeout(3000);
});

//conditionally skip the test
test('skip test conditionally', async({ page, isMobile, browserName }, testInfo) => {
    if(isMobile){
        test.skip();
    }
    // Correct way to check for Edge (which runs on Chromium engine)
    test.skip(testInfo.project.use.channel === 'msedge', 'Skipping on Microsoft Edge');
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
    await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
})