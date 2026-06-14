"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SproutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 20h10" />
    <path d="M12 20V10" />
    <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
    <path d="M12 11c0-3 2.2-5.5 6-5.5 0 3.3-2.2 5.5-6 5.5Z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

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

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

type NavChild = { href: string; label: string; desc: string };
type NavItem =
  | { label: string; href: string; key: string; children?: never }
  | { label: string; key: string; href?: never; children: NavChild[] };

const NAV: NavItem[] = [
  { label: "Greenhouse Schools", href: "/services", key: "services" },
  {
    label: "Tools",
    key: "tools",
    children: [
      { label: "Tools Overview", href: "/tools", desc: "What we build, and why" },
      { label: "AssessAlign", href: "/tools/assessalign", desc: "Standards-aligned assessment engine" },
    ],
  },
  {
    label: "Learn",
    key: "learn",
    children: [
      { label: "Insights & Blog", href: "/learn/blog", desc: "Field notes from inside the work" },
      { label: "Teacher Toolkit", href: "/learn/teacher-toolkit", desc: "Free, classroom-ready downloads" },
      { label: "Learn Hub", href: "/learn", desc: "Everything in one place" },
    ],
  },
  { label: "Shop", href: "/shop", key: "shop" },
  { label: "About", href: "/about", key: "about" },
];

function isActive(pathname: string, key: string, href?: string, children?: NavChild[]) {
  if (key === "home") return pathname === "/";
  if (href && pathname.startsWith(href)) return true;
  if (children) {
    return children.some((c) => pathname.startsWith(c.href));
  }
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="The Rooted Learner home">
            <span className="brand-mark">
              <SproutIcon />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
              <span className="brand-sub">Greenhouse Schools</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className={`nav-item${openDropdown === item.key ? " open" : ""}`}
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`nav-link${isActive(pathname, item.key, undefined, item.children) ? " active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.key}
                    onClick={() => toggleDropdown(item.key)}
                  >
                    {item.label}
                    <ChevronIcon />
                  </button>
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                        <span>{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.key} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(pathname, item.key, item.href) ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          <div className="header-actions">
            <Link href="/services#audit" className="btn btn-terra header-cta">
              Book the Audit
            </Link>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="mobile-menu-head">
          <Link href="/" className="brand" onClick={closeMobile}>
            <span className="brand-mark">
              <SproutIcon />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
              <span className="brand-sub">Greenhouse Schools</span>
            </span>
          </Link>
          <button type="button" className="mobile-close" aria-label="Close menu" onClick={closeMobile}>
            <CloseIcon />
          </button>
        </div>
        <nav className="mobile-nav">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.key}>
                <Link href={item.children[0].href} onClick={closeMobile}>
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} className="sub" onClick={closeMobile}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.key} href={item.href} onClick={closeMobile}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <Link href="/services#audit" className="btn btn-terra btn-lg" onClick={closeMobile}>
          Book the Greenhouse Audit <ArrowIcon />
        </Link>
      </div>
    </>
  );
}
