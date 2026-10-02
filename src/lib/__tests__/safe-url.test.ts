import { describe, it, expect } from "vitest";
import { safeInternalPath, isAllowedCheckoutUrl } from "@/lib/safe-url";

describe("safeInternalPath", () => {
  it("allows relative admin paths", () => {
    expect(safeInternalPath("/admin/orders", "/admin")).toBe("/admin/orders");
  });

  it("rejects protocol-relative and absolute URLs", () => {
    expect(safeInternalPath("//evil.com", "/admin")).toBe("/admin");
    expect(safeInternalPath("https://evil.com", "/admin")).toBe("/admin");
    expect(safeInternalPath("/\\evil.com", "/admin")).toBe("/admin");
  });
});

describe("isAllowedCheckoutUrl", () => {
  const site = "https://www.therootedlearner.com";

  it("allows same-origin success URLs", () => {
    expect(
      isAllowedCheckoutUrl(
        `${site}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
        site
      )
    ).toBe(true);
  });

  it("rejects other origins", () => {
    expect(isAllowedCheckoutUrl("https://evil.example/phish", site)).toBe(false);
  });
});
