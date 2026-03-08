"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/teacher-shop", label: "Teacher Shop" },
  { href: "/family-hub", label: "Family Hub" },
  { href: "/edtech-tools", label: "EdTech Tools" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/recommended-tools", label: "Recommended Tools" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}
        role="banner"
      >
        <nav className="container" aria-label="Primary navigation">
          <Link href="/" className="header-logo" aria-label="The Rooted Learner — Home">
            <div className="header-logo-icon">
              <Image
                src="/logo.png"
                alt="The Rooted Learner"
                width={52}
                height={52}
                className="header-logo-img"
                style={{ border: "2px solid #000", borderRadius: "0.5rem" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="header-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="header-actions">
            <Link
              href="/work-with-me#discovery"
              className="header-cta-btn"
              style={{
                backgroundColor: "var(--earth)",
                color: "#fff",
                fontWeight: 600,
                padding: "0.375rem 0.875rem",
                borderRadius: "var(--radius-full, 9999px)",
                textDecoration: "none",
                fontSize: "0.75rem",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                letterSpacing: "0.01em",
              }}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: "0.875rem", height: "0.875rem" }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </Link>

            <button
              className="header-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={closeMobile}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 998,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "fixed",
              top: headerHeight,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#FAF7F2",
              zIndex: 999,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              padding: "0.5rem 1.5rem 2rem",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Link
              href="/"
              onClick={closeMobile}
              style={{
                display: "block",
                padding: "0.875rem 0",
                fontSize: "1.125rem",
                fontWeight: 500,
                color: pathname === "/" ? "#5C6B4D" : "#2D2D2D",
                textDecoration: "none",
                borderBottom: "1px solid #E8DED0",
              }}
            >
              Home
            </Link>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                style={{
                  display: "block",
                  padding: "0.875rem 0",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  color: isActive(item.href) ? "#5C6B4D" : "#2D2D2D",
                  textDecoration: "none",
                  borderBottom: "1px solid #E8DED0",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/work-with-me#discovery"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.75rem 1.25rem",
                backgroundColor: "#5C6B4A",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: "1rem", height: "1rem" }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </Link>

            {/* Secondary mobile links */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E8DED0" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: "0.5rem" }}>
                Quick Links
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                  { href: "/privacy", label: "Privacy" },
                  { href: "/terms", label: "Terms" },
                  { href: "/ai-ethics", label: "AI Ethics" },
                  { href: "/accessibility", label: "Accessibility" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      textDecoration: "none",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      backgroundColor: "rgba(0,0,0,0.03)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
