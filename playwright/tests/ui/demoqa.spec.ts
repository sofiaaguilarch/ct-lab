import { test, expect } from '@playwright/test';

test('DemoQA: fill text box and assert', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.fill('#userName', 'Carlos Tester');
  await page.fill('#userEmail', 'carlos@example.com');
  await page.fill('#currentAddress', 'Calle 123');
  await page.fill('#permanentAddress', 'Calle 456');

  await page.click('#submit');

  await expect(page.locator('#output')).toContainText('Carlos Tester');
  await expect(page.locator('#output')).toContainText('carlos@example.com');
});