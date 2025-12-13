import { test, expect } from '@playwright/test';

test('redirecting page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('Play with CODEGEN', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).click();
    await page.waitForTimeout(3000);
});