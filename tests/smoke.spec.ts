import { test, expect } from '@playwright/test'

const routes = [
  '/',
  '/uitdaging',
  '/de-camera',
  '/voor-wie',
  '/oculomix-managed-service',
  '/eigen-beheer',
  '/over-ons',
  '/nieuws',
  '/contact',
  '/privacy-statement',
]

test.describe('smoke', () => {
  for (const route of routes) {
    test(`${route} renders without console errors`, async ({ page }) => {
      const errors: string[] = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      await page.goto(route)
      await expect(page.locator('nav').first()).toBeVisible()
      await expect(page.locator('footer').first()).toBeVisible()
      expect(errors).toEqual([])
    })
  }

  test('services dropdown opens', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: /onze services/i })
    await toggle.click()
    await expect(page.getByRole('link', { name: /managed service/i }).first()).toBeVisible()
  })

  test('contact form has required fields', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.getByRole('button', { name: /versturen/i })).toBeVisible()
  })
})
