import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "../../..");

const FILES = [
  "src/content/site-copy.ts",
  "src/app/(main)/page.tsx",
  "src/app/(main)/aligned/page.tsx",
  "src/app/(main)/partner/page.tsx",
  "src/app/(main)/educators/page.tsx",
  "src/app/(main)/insights/page.tsx",
  "src/app/(main)/contact/page.tsx",
  "src/app/(main)/contact/ContactForm.tsx",
  "src/app/(main)/about/page.tsx",
];

const BANNED = [
  /FERPA/i,
  /COPPA/i,
  /SOC\s*2/i,
  /free\s+pilot/i,
  /free\s+trial/i,
  /guaranteed/i,
  /raise\s+scores/i,
  /replace.{0,40}screener/i,
  /named district/i,
];

describe("phase1 claims guardrail", () => {
  it("does not use banned phrases in new copy and routes", () => {
    const hits: string[] = [];
    for (const file of FILES) {
      const text = readFileSync(path.join(ROOT, file), "utf8");
      for (const pattern of BANNED) {
        if (pattern.test(text)) {
          hits.push(`${file} matched ${pattern}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
