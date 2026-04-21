"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/services", label: "District Work" },
  { href: "/tools/assessalign", label: "AssessAlign" },
  {
    href: "/learn",
    label: "Resources",
    children: [
      { href: "/learn/teacher-toolkit", label: "Teacher Toolkit" },
      { href: "/learn/blog", label: "Blog" },
      { href: "/shop", label: "Classroom Tools" },
    ],
  },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  const openDesktopDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(true);
  }, []);

  const closeDesktopDropdown = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setDesktopDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

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
    setDesktopDropdownOpen(false);
    setMobileLearnOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileLearnOpen(false);
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
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="header-nav-dropdown-wrapper"
                  onMouseEnter={openDesktopDropdown}
                  onMouseLeave={closeDesktopDropdown}
                >
                  <Link
                    href={item.href}
                    className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
                  >
                    {item.label}
                    <svg
                      className={`header-chevron${desktopDropdownOpen ? " header-chevron--open" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {desktopDropdownOpen && (
                    <div className="header-dropdown">
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`header-dropdown-link${idx < item.children!.length - 1 ? " header-dropdown-link--bordered" : ""}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="header-actions">
            <Link
              href="/services#audit"
              className="header-cta-btn"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Start the Audit
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
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0.875rem 0",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: isActive(item.href) ? "#5C6B4D" : "#2D2D2D",
                      textDecoration: "none",
                      borderBottom: mobileLearnOpen ? "none" : "1px solid #E8DED0",
                      background: "none",
                      border: "none",
                      borderBottomWidth: mobileLearnOpen ? 0 : 1,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#E8DED0",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    aria-expanded={mobileLearnOpen}
                  >
                    {item.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{
                        transition: "transform 0.2s ease",
                        transform: mobileLearnOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileLearnOpen && (
                    <div style={{ borderBottom: "1px solid #E8DED0" }}>
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        style={{
                          display: "block",
                          padding: "0.625rem 0 0.625rem 1.25rem",
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: isActive(item.href) && pathname === item.href ? "#5C6B4D" : "#555",
                          textDecoration: "none",
                          borderBottom: "1px solid #F0EBE3",
                        }}
                      >
                        All {item.label}
                      </Link>
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          style={{
                            display: "block",
                            padding: "0.625rem 0 0.625rem 1.25rem",
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: isActive(child.href) ? "#5C6B4D" : "#555",
                            textDecoration: "none",
                            borderBottom: idx < item.children!.length - 1 ? "1px solid #F0EBE3" : "none",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}

            {/* Mobile CTA */}
            <Link
              href="/services#audit"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#5C6B4A",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Start the Audit
            </Link>

            {/* Secondary mobile links */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E8DED0" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: "0.5rem" }}>
                Quick Links
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
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
