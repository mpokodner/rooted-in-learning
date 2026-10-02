"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function TrackPage({ event }: { event: string }) {
  useEffect(() => {
    try {
      const nodes = document.querySelectorAll<HTMLElement>("[data-track]");
      const onClick = (ev: Event) => {
        const el = ev.currentTarget as HTMLElement;
        track(el.getAttribute("data-track") || event);
      };
      nodes.forEach((node) => node.addEventListener("click", onClick));
      return () => nodes.forEach((node) => node.removeEventListener("click", onClick));
    } catch (error) {
      console.error("TrackPage", { event, error });
    }
  }, [event]);
  return null;
}
