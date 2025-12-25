import { test, expect } from '@playwright/test';

test('redirecting page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('Play with CODEGEN', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Node.js' }).click();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
    await expect(page.getByRole('button', { name: 'Java' })).toBeVisible();
    await page.getByRole('button', { name: 'Java' }).click();
    await expect(page.getByText('JavaNode.jsPython.NET')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    await page.waitForTimeout(3000);
});