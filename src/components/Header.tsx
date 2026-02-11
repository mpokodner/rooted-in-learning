"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About",
      dropdown: [
        { href: "/about#my-story", label: "My Story" },
        { href: "/about#contact", label: "Contact" },
      ],
    },
    {
      href: "/resources",
      label: "Resources",
      dropdown: [
        { href: "/resources/lessons", label: "Lessons" },
        { href: "/resources/tech-tips", label: "Tech Tips" },
        { href: "/resources/favorites", label: "Favorites" },
      ],
    },
    { href: "/consulting", label: "Consulting" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-(var(--neutral-bg)]/95 backdrop-blur-md border-b border-(var(--border-beige)]">
      <nav className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-(var(--duration-fast)] shrink-0">
            <div className="w-9 h-9 bg-(var(--earth)] rounded-(var(--radius-md)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-(var(--text-base)] font-semibold text-(var(--earth)] font-(var(--font-heading)] hidden sm:inline">
              Rooted in Learning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-(var(--text-xs)] font-semibold uppercase tracking-(var(--tracking-widest)] transition-colors duration-(var(--duration-fast)] rounded-(var(--radius-md)] hover:bg-(var(--beige-bg)] ${
                        isActive(item.href)
                          ? "text-(var(--earth)]"
                          : "text-(var(--text-muted)] hover:text-(var(--earth)]"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-(var(--duration-fast)] ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-(var(--white)] rounded-(var(--radius-lg)] shadow-(var(--shadow-lg)] border border-(var(--border-beige)] py-2 min-w-[180px] z-50">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="block px-4 py-2.5 text-(var(--text-sm)] text-(var(--text-muted)] hover:text-(var(--earth)] hover:bg-(var(--beige-bg)] transition-colors duration-(var(--duration-fast)]"
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
                    className={`px-4 py-2 text-[(var(--text-xs))] font-semibold uppercase tracking-(var(--tracking-widest)] transition-colors duration-(var(--duration-fast)] rounded-(var(--radius-md)] hover:bg-(var(--beige-bg)] ${
                      isActive(item.href)
                        ? "text-(var(--earth)]"
                        : "text-(var(--text-muted)] hover:text-(var(--earth)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Login Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="bg-(var(--earth)] text-(var(--text-on-dark)] px-5 py-2.5 rounded-(var(--radius-full)] text-(var(--text-sm)] font-semibold hover:bg-(var(--earth-dark)] transition-all duration-(var(--duration-base)] inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">Login</span>
            </Link>

            <button
              className="lg:hidden p-2.5 text-(var(--text-dark)] hover:bg-(var(--beige-bg)] rounded-(var(--radius-md)] transition-colors duration-(var(--duration-fast)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-(var(--border-beige)] pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`w-full flex items-center justify-between text-(var(--text-sm)] font-medium py-3 px-4 rounded-(var(--radius-lg)] transition-colors duration-(var(--duration-fast)] ${
                          isActive(item.href)
                            ? "text-(var(--earth)] bg-(var(--beige-bg)] font-semibold"
                            : "text-(var(--text-muted)] hover:text-(var(--earth)] hover:bg-(var(--beige-bg)]/50"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-(var(--duration-fast)] ${openDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-(var(--border-beige)] pl-4">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.href}
                              href={dropItem.href}
                              className="block py-2.5 text-(var(--text-sm)] text-(var(--text-muted)] hover:text-(var(--earth)] transition-colors duration-(var(--duration-fast)]"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
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
                      className={`block text-(var(--text-sm)] font-medium py-3 px-4 rounded-(var(--radius-lg)] transition-colors duration-(var(--duration-fast)] ${
                        isActive(item.href)
                          ? "text-(var(--earth)] bg-(var(--beige-bg)] font-semibold"
                          : "text-(var(--text-muted)] hover:text-(var(--earth)] hover:bg-(var(--beige-bg)]/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}