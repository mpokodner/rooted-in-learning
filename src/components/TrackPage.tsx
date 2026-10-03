"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function TrackPage({ event }: { event: string }) {
  useEffect(() => {
    try {
      const onClick = (ev: MouseEvent) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;
        const el = target.closest<HTMLElement>("[data-track]");
        if (!el) return;
        const label = (el.getAttribute("data-track-label") || el.textContent || "").trim();
        track(el.getAttribute("data-track") || event, {
          cta_label: label,
          location: el.getAttribute("data-track-location") || "",
          content_category: el.getAttribute("data-track-category") || "",
        });
      };
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    } catch (error) {
      console.error("TrackPage", { event, error });
    }
  }, [event]);
  return null;
}
