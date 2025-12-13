import { test, expect } from '@playwright/test';

test('Lesson 1: My First Test', async ({ page }) => {
  // 1. Go to a website
  await page.goto('https://playwright.dev/');

  // 2. Check the title
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Click a button (Locators)
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Verify the URL changed
  await expect(page).toHaveURL(/.*intro/);
  
  // 5. Take a screenshot (Optional)
  await page.screenshot({ path: 'example-screenshot.png' });
});