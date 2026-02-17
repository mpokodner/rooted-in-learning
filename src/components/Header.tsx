"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/resources/lessons", label: "Lessons" },
    { href: "/consulting", label: "Consulting" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}
      role="banner"
    >
      <nav className="container" aria-label="Primary navigation">
        {/* Logo */}
        <Link href="/" className="header-logo" aria-label="Rooted in Learning — Home">
          <div className="header-logo-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="header-logo-text">Rooted in Learning</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="header-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`header-nav-link${isActive(item.href) ? " header-nav-link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Utility Actions */}
        <div className="header-actions">
          {/* Newsletter CTA */}
          <Link href="/blog#newsletter" className="header-newsletter-btn">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="header-newsletter-text">Subscribe</span>
          </Link>

          {/* Login / Account */}
          <Link href="/login" className="header-login-btn" aria-label="Login to your account">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="header-login-text">Login</span>
          </Link>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="header-mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="container">
            <div className="header-mobile-menu">
              {/* Navigation Links */}
              <div className="header-mobile-nav-group">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`header-mobile-link${isActive(item.href) ? " header-mobile-link--active" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="header-mobile-cta-group">
                <Link
                  href="/consulting"
                  className="header-mobile-cta-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Consultation
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/blog#newsletter"
                  className="header-mobile-cta-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Join the Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
