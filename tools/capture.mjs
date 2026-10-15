import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const BASE = 'http://127.0.0.1:5173'
const OUT = 'shots/desktop'
const routes = [
  ['home', '/'],
  ['uitdaging', '/uitdaging'],
  ['de-camera', '/de-camera'],
  ['voor-wie', '/voor-wie'],
  ['managed', '/oculomix-managed-service'],
  ['eigen', '/eigen-beheer'],
  ['over-ons', '/over-ons'],
  ['nieuws', '/nieuws'],
  ['contact', '/contact'],
  ['privacy', '/privacy-statement'],
]

mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })

for (const [name, route] of routes) {
  await page.goto(BASE + route, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(800)
  // scroll through the page to trigger ScrollTrigger reveals + Lenis
  const height = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y)
    await page.waitForTimeout(45)
  }
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(600)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(600)
  const h = await page.evaluate(() => document.body.scrollHeight)
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true })
  console.log(`${name}: ${h}px`)
}

await browser.close()
