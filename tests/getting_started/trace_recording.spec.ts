import { test, expect } from '@playwright/test';

test.skip('redirecting page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test.skip('trace recording testing', async ({ page }) => {
    await page.goto('https://playwright.dev/');
});