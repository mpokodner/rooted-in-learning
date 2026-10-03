import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE_URL = process.env.BASELINE_URL ?? "https://www.therootedlearner.com";
const OUT_DIR = process.env.BASELINE_OUT ?? "docs/visual-baseline/before";

const ROUTES = [
  "/",
  "/about",
  "/for-teachers",
  "/for-districts",
  "/learn",
  "/learn/blog",
  "/learn/blog/why-i-built-the-rooted-learner",
  "/contact",
  "/privacy",
];

const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

async function main() {
  try {
    const outRoot = path.resolve(OUT_DIR);
    await mkdir(outRoot, { recursive: true });

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const route of ROUTES) {
      const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "--");
      for (const viewport of VIEWPORTS) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle", timeout: 60_000 });
        const dest = path.join(outRoot, `${slug}-${viewport.name}.png`);
        await page.screenshot({ path: dest, fullPage: true });
        console.log(`wrote ${dest}`);
      }
    }

    await browser.close();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("visual-baseline failed", { message });
    process.exit(1);
  }
}

void main();
