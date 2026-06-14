"use client";

import { useEffect } from "react";

export default function SiteAnimations() {
  useEffect(() => {
    document.body.classList.add("js-anim");

    const header = document.querySelector(".site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealAll = () => {
      reveals.forEach((el) => el.classList.add("in"));
    };

    if ("IntersectionObserver" in window && reveals.length) {
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
        window.removeEventListener("scroll", onScroll);
        io.disconnect();
        window.clearTimeout(failsafe);
        document.body.classList.remove("js-anim");
      };
    }

    revealAll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("js-anim");
    };
  }, []);

  return null;
}
