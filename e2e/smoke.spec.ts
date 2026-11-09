import { expect, test } from '@playwright/test';

test('top page renders without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Works/ })).toBeVisible();
  expect(errors).toEqual([]);
});

test('no horizontal scroll on this viewport', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test('unknown path shows the 404 page', async ({ page }) => {
  await page.goto('/no-such-page');
  await expect(page.getByRole('heading', { name: 'ページが見つかりません' })).toBeVisible();
});
