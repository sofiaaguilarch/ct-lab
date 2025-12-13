import { test, expect } from '@playwright/test';

test('SauceDemo E2E: login -> add item -> checkout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory.html/);

  await page.click('text=Sauce Labs Backpack');
  await page.click('button[id^="add-to-cart"]');

  await page.click('#shopping_cart_container');
  await expect(page.locator('.cart_item')).toHaveCount(1);
});