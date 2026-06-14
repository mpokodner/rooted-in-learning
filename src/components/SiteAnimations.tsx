"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function initReveals() {
  const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  const revealAll = () => {
    reveals.forEach((el) => el.classList.add("in"));
  };

  if (!("IntersectionObserver" in window) || !reveals.length) {
    revealAll();
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  reveals.forEach((el, i) => {
    el.classList.remove("in");
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    io.observe(el);
  });

  requestAnimationFrame(() => {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < (window.innerHeight || 800) * 0.98) {
        el.classList.add("in");
      }
    });
  });

  const failsafe = window.setTimeout(revealAll, 1100);

  return () => {
    io.disconnect();
    window.clearTimeout(failsafe);
  };
}

export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("js-anim");

    const header = document.querySelector(".site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("js-anim");
    };
  }, []);

  useEffect(() => {
    let cleanupReveals = () => {};
    let raf2 = 0;

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        cleanupReveals = initReveals();
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cleanupReveals();
    };
  }, [pathname]);

  return null;
}
