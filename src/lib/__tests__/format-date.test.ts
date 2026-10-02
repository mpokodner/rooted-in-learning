import { describe, it, expect } from "vitest";
import { formatDisplayDate } from "@/lib/format-date";

describe("formatDisplayDate", () => {
  it("formats the UTC calendar date the same on every host timezone", () => {
    expect(formatDisplayDate("2026-03-16T00:00:00.000Z")).toBe("March 16, 2026");
  });
});
