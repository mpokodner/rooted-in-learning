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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    {
      href: "/resources",
      label: "Resources",
      dropdown: [
        { href: "/resources/lessons", label: "Lessons" },
        { href: "/resources/tech-tips", label: "Tech Tips" },
        { href: "/resources/favorites", label: "My Favorites" },
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}
      role="banner"
    >
      <nav className="container" aria-label="Primary navigation">
        {/* Logo */}
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
          <span className="header-logo-text">The Rooted Learner</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="header-nav" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
                  >
                    {item.label}
                    <svg
                      className={`header-chevron${openDropdown === item.label ? " header-chevron--open" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="header-dropdown">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="header-dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Utility Actions */}
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
            aria-controls="mobile-menu"
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

      {/* Mobile Menu — rendered inside header, no position:fixed overlay */}
      <div
        id="mobile-menu"
        className={`header-mobile-panel${mobileMenuOpen ? " header-mobile-panel--open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container">
          <ul className="header-mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`header-mobile-link${isActive(item.href) ? " header-mobile-link--active" : ""}`}
                    >
                      {item.label}
                      <svg
                        className={`header-chevron${openDropdown === item.label ? " header-chevron--open" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        style={{ width: "1.25rem", height: "1.25rem" }}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="header-mobile-sub">
                        {item.dropdown.map((dropItem) => (
                          <li key={dropItem.href}>
                            <Link
                              href={dropItem.href}
                              className="header-mobile-sub-link"
                              onClick={closeMobile}
                            >
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`header-mobile-link${isActive(item.href) ? " header-mobile-link--active" : ""}`}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="header-mobile-cta-group">
            <Link
              href="/blog#newsletter"
              className="header-mobile-cta-primary"
              onClick={closeMobile}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Join the Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div className="header-mobile-backdrop" onClick={closeMobile} aria-hidden="true" />
      )}
    </header>
  );
}
