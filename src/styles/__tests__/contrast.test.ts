import { describe, expect, it } from "vitest";

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const conv = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * conv(r) + 0.7152 * conv(g) + 0.0722 * conv(b);
}

function contrast(a: string, b: string) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

describe("phase1 contrast tokens", () => {
  it("meets AA for body and primary pairs", () => {
    expect(contrast("#2d2d2d", "#faf7f2")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#6b6b6b", "#faf7f2")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#faf7f2", "#5c6b4a")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#5c6b4a", "#faf7f2")).toBeGreaterThanOrEqual(3);
  });
});
