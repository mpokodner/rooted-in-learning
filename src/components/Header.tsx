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
    href: "/resources",
    label: "Resources",
    dropdown: [
      { href: "/resources/lessons", label: "Lessons" },
      { href: "/resources/teacher-tools", label: "Teacher Tools" },
      { href: "/resources/favorites", label: "Favorites" },
    ],
  },
  {
    href: "/consulting",
    label: "Consulting",
    dropdown: [
      { href: "/consulting", label: "Overview" },
      { href: "/consulting/assessalign", label: "AssessAlign" },
    ],
  },
  { href: "/blog", label: "Blog" },
  {
    href: "/about",
    label: "About",
    dropdown: [
      { href: "/about", label: "About Me" },
      { href: "/about/projects", label: "Portfolio" },
    ],
  },
  { href: "/contact", label: "Contact" },
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
                width={40}
                height={40}
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
            <Link href="/blog#newsletter" className="header-newsletter-btn">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="header-newsletter-text">Subscribe</span>
            </Link>

            <Link href="/login" className="header-login-btn" aria-label="Login to your account">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="header-login-text">Login</span>
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
              href="/blog#newsletter"
              onClick={closeMobile}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.875rem 1.5rem",
                backgroundColor: "#C17B5C",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.875rem",
                borderRadius: "0.75rem",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Join the Newsletter
            </Link>
          </div>
        </>
      )}
    </>
  );
}
