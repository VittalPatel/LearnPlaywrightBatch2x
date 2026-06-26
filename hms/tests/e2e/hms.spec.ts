import { test, expect } from '@playwright/test';

test('dashboard loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('HMS Command Center')).toBeVisible();
});
