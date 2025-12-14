import { test, expect } from '@playwright/test';

test('AutomationPractice: search and assert results', async ({ page }) => {
  await page.goto('http://automationpractice.pl/index.php');

  await page.fill('#search_query_top', 'dress');
  await page.click('button[name="submit_search"]');

  await expect(page).toHaveURL(/search/);
  await expect(page.locator('.product_list')).toBeVisible();
});