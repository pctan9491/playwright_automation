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

// Group tests & tags
// You can now run tests that have a particular tag with --grep command line option.
// For example, to run only tests with @first tag, use:
// npx playwright test --grep @first
//o run tests containing either tag (logical OR operator):
// npx playwright test --grep '@first|@second'
//Or run tests containing both tags (logical AND operator) using regex lookaheads:
// npx playwright test --grep '@first(?=.*@second)'
test.describe('two tests',() => {
    test('first test', { tag: '@first' }, async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
        await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
    })
    test('second test', { tag: '@second' }, async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
        await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
    })
});

//annotate tests
test('annotate tests', {
    annotation:{
    type: 'annotate-tests',
    description: 'Test to verify the annotation of a test',
    },
} , async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
    await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
})

//Conditionally skip a group of tests
test.describe('conditionally skip a group of tests',() => {
    test.skip(({browserName}) => browserName !== 'firefox', 'Firefox only');
        test('first test', { tag: '@first' }, async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
        await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
    })
    test('second test', { tag: '@second' }, async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
        await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
    })
});

//fixme in beforeach hook
//In Playwright, test.fixme() tells the test runner that "this test is currently broken 
//or undergoing repairs." When the condition browserName === 'chromium' is met, 
// Playwright aborts the test immediately and marks it as Skipped or Expected to Fail.
test.beforeEach(async ({ page, browserName }) => {
    test.fixme(browserName === 'chromium', 'Chromium only');
    await page.goto('https://playwright.dev/');
})
