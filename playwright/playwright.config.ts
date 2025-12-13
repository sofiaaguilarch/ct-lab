import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30_000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: '../reports/playwright-html' }],
  ],

  use: {
    headless: true,
    actionTimeout: 10_000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
});