"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SocialLinks from "./SocialLinks";

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

type NavChild = { href: string; label: string; desc: string };
type NavItem = {
  label: string;
  key: string;
  href?: string;
  children?: NavChild[];
};

const NAV: NavItem[] = [
  { label: "Learn", href: "/learn", key: "learn" },
  { label: "Shop", href: "/shop", key: "shop" },
  {
    label: "For Districts",
    key: "districts",
    href: "/for-districts",
    children: [
      { label: "For Districts", href: "/for-districts", desc: "What we build, and why" },
      { label: "Hall Pass", href: "/for-districts/hallpass", desc: "District-owned student movement management" },
    ],
  },
  { label: "Blog", href: "/learn/blog", key: "blog" },
  {
    label: "About",
    key: "about",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", desc: "The educators behind the work" },
      { label: "Our Approach", href: "/about/approach", desc: "How we diagnose, build, and support" },
      { label: "Contact", href: "/contact", desc: "Start a conversation" },
    ],
  },
];

function isActive(pathname: string, key: string, item: NavItem) {
  if (key === "blog") return pathname.startsWith("/learn/blog");
  if (key === "learn") return pathname === "/learn";
  if (key === "districts") return pathname.startsWith("/for-districts");
  if (key === "about") {
    return pathname === "/about" || pathname.startsWith("/about/") || pathname === "/contact";
  }
  if (item.href) return pathname === item.href || pathname.startsWith(`${item.href}/`);
  if (item.children) {
    return item.children.some((c) => pathname === c.href || pathname.startsWith(`${c.href}/`));
  }
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobile();
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.refresh();
    }
  };

  const openDropdownMenu = (key: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown(key);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

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

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="The Rooted Learner home" onClick={handleBrandClick}>
            <span className="brand-mark">
              <Image src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className={`nav-item${openDropdown === item.key ? " open" : ""}`}
                  onMouseEnter={() => openDropdownMenu(item.key)}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <Link
                    href={item.href || "#"}
                    className={`nav-link${isActive(pathname, item.key, item) ? " active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.key}
                    onClick={(e) => {
                      if (window.innerWidth < 900) {
                        e.preventDefault();
                        toggleDropdown(item.key);
                      }
                    }}
                  >
                    {item.label}
                    <ChevronIcon />
                  </Link>
                  <div className="dropdown" onMouseEnter={() => openDropdownMenu(item.key)} onMouseLeave={scheduleCloseDropdown}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpenDropdown(null)}>
                        {child.label}
                        <span>{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.key} className="nav-item">
                  <Link
                    href={item.href!}
                    className={`nav-link${isActive(pathname, item.key, item) ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          <div className="header-actions">
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
          <Link href="/" className="brand" onClick={handleBrandClick}>
            <span className="brand-mark">
              <Image src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
            </span>
            <span className="brand-text">
              <span className="brand-name">The Rooted Learner</span>
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
                <span style={{ display: "block", padding: "0.9rem 0.5rem", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text-black)", borderBottom: "1px solid var(--border-beige)" }}>
                  {item.label}
                </span>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} className="sub" onClick={closeMobile}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.key} href={item.href!} onClick={closeMobile}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div style={{ padding: "1rem 0.5rem", borderTop: "1px solid var(--border-beige)", marginTop: "auto" }}>
          <SocialLinks
            platforms={["instagram", "youtube", "pinterest", "linkedin"]}
            location="mobile-menu"
          />
        </div>
      </div>
    </>
  );
}
