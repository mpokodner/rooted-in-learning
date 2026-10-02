"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { flags, nav } from "@/config/site";
import Button from "@/components/ui/Button";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const items = flags.hallpassPublic
    ? [...nav.primary, { href: "/for-districts/hallpass", label: "HallPass" }]
    : nav.primary;

  useEffect(() => {
    try {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    } catch (error) {
      console.error("SiteHeader.overflow", { error });
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    try {
      closeBtnRef.current?.focus();
      const panel = panelRef.current;
      if (!panel) return;

      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeMobile();
          return;
        }
        if (event.key !== "Tab") return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };

      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    } catch (error) {
      console.error("SiteHeader.focusTrap", { error });
    }
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="The Rooted Learner home" onClick={closeMobile}>
            <span className="brand-mark">
              <Image src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {items.map((item) => (
              <div key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link${pathname === item.href || pathname.startsWith(`${item.href}/`) ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <span className="phase1-header-cta">
              <Button href={nav.cta.href}>{nav.cta.label}</Button>
            </span>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        className={`mobile-menu${mobileOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-menu-head">
          <Link href="/" className="brand" onClick={closeMobile}>
            <span className="brand-mark">
              <Image src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
            </span>
          </Link>
          <button
            ref={closeBtnRef}
            type="button"
            className="mobile-close"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="mobile-nav">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMobile}>
              {item.label}
            </Link>
          ))}
          <Link href={nav.cta.href} onClick={closeMobile}>
            {nav.cta.label}
          </Link>
        </nav>
      </div>
      <style>{`
        .phase1-header-cta { display: none; }
        @media (min-width: 900px) {
          .phase1-header-cta { display: inline-flex; }
        }
      `}</style>
    </>
  );
}
