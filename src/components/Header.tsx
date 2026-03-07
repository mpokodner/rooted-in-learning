"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    dropdown: [
      { href: "/products/assessalign", label: "AssessAlign" },
      { href: "/products/lessons", label: "Lessons" },
      { href: "/products/teacher-tools", label: "Teacher Tools" },
    ],
  },
  { href: "/resources", label: "Resources" },
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
          {/* Logo only — no text */}
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
                      <div className="header-dropdown">
                        {item.dropdown.map((d) => (
                          <Link key={d.href} href={d.href} className="header-dropdown-link"
                            onClick={() => setOpenDropdown(null)}>{d.label}</Link>
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
              href="/blog"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Subscribe
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

      {/* Mobile menu — rendered OUTSIDE header as a fixed overlay with inline styles */}
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
                            {d.label}
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

            <Link
              href="/blog"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.625rem 1.25rem",
                backgroundColor: "#5C6B4A",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.8125rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: "1rem", height: "1rem" }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Subscribe for Tips
            </Link>
          </div>
        </>
      )}
    </>
  );
}
