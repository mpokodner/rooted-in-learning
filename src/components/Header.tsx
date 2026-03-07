"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface DropdownItem {
  href: string;
  label: string;
  desc?: string;
}

interface NavItem {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/products",
    label: "Products",
    dropdown: [
      { href: "/products/assessalign", label: "AssessAlign", desc: "AI-powered assessment" },
      { href: "/products/lessons", label: "Lessons", desc: "K-8 curriculum packs" },
      { href: "/products/teacher-tools", label: "Teacher Tools", desc: "Tech tutorials" },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    dropdown: [
      { href: "/resources", label: "Free Resources", desc: "Downloads & samples" },
      { href: "/resources/recommended-tools", label: "Recommended Tools", desc: "Curated picks" },
      { href: "/parents", label: "For Parents", desc: "Family learning support" },
    ],
  },
  { href: "/services/consulting", label: "Consulting" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
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
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="header-nav" ref={dropdownRef}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} style={{ position: "relative" }}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
                    >
                      {item.label}
                      <svg
                        className={`header-chevron${openDropdown === item.label ? " header-chevron--open" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="header-dropdown" style={{ minWidth: "14rem" }}>
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            className="header-dropdown-link"
                            onClick={() => setOpenDropdown(null)}
                            style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}
                          >
                            <span style={{ fontWeight: 500 }}>{d.label}</span>
                            {d.desc && (
                              <span style={{ fontSize: "0.7rem", color: "#888", fontWeight: 400 }}>
                                {d.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href}
                    className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="header-actions">
            <Link
              href="/contact"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              Get in Touch
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
            {/* Home link for mobile (since it's not in NAV_ITEMS) */}
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
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "0.875rem 0",
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        color: isActive(item.href) ? "#5C6B4D" : "#2D2D2D",
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid #E8DED0",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={2}
                        style={{
                          transform: openDropdown === item.label ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div style={{ paddingLeft: "1rem", borderLeft: "2px solid #E8DED0", margin: "0.25rem 0 0.5rem" }}>
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            onClick={closeMobile}
                            style={{
                              display: "block",
                              padding: "0.625rem 0",
                              fontSize: "1rem",
                              color: "#666",
                              textDecoration: "none",
                            }}
                          >
                            <span>{d.label}</span>
                            {d.desc && (
                              <span style={{ display: "block", fontSize: "0.75rem", color: "#999", marginTop: "0.125rem" }}>
                                {d.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
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
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              Get in Touch
            </Link>

            {/* Secondary mobile links */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E8DED0" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: "0.5rem" }}>
                Quick Links
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
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
