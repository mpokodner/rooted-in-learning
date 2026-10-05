"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

function viewEvent(pathname: string): { name: string; category: string } | null {
  if (pathname.startsWith("/educators/toolkit/") && pathname.length > "/educators/toolkit/".length) {
    return { name: "educator_toolkit_view", category: "toolkit" };
  }
  if (pathname.startsWith("/blog/") && pathname.length > "/blog/".length) {
    return { name: "blog_post_view", category: "blog" };
  }
  if (pathname === "/aligned") return { name: "aligned_page_view", category: "aligned" };
  if (pathname === "/aligned/pilot") return { name: "pilot_page_view", category: "aligned" };
  return null;
}

export default function TrackPage({ event }: { event: string }) {
  useEffect(() => {
    try {
      const viewed = viewEvent(window.location.pathname);
      if (viewed) {
        track(viewed.name, { location: window.location.pathname, content_category: viewed.category });
      }
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
