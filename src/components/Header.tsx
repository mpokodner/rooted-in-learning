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
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href.split("#")[0]);
  };

  // Close dropdown when clicking outside
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
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DED0]">
      <nav className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0">
            <div className="w-9 h-9 bg-[#5C6B4A] rounded-[0.5rem] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-base font-semibold text-[#5C6B4A] hidden sm:inline">
              Rooted in Learning
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors rounded-lg hover:bg-[#F5EFE7] ${
                        isActive(item.href)
                          ? "text-[#5C6B4A]"
                          : "text-[#666666] hover:text-[#5C6B4A]"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-[#E8DED0] py-2 min-w-[180px] z-50">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="block px-4 py-2.5 text-sm text-[#666666] hover:text-[#5C6B4A] hover:bg-[#F5EFE7] transition-colors"
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
                    className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors rounded-lg hover:bg-[#F5EFE7] ${
                      isActive(item.href)
                        ? "text-[#5C6B4A]"
                        : "text-[#666666] hover:text-[#5C6B4A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Login Button - Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="bg-[#5C6B4A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4A5638] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-[#2F2F2F] hover:bg-[#F5EFE7] rounded-[0.5rem] transition-colors"
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
          <div className="lg:hidden pb-6 border-t border-[#E8DED0] pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`w-full flex items-center justify-between text-sm font-medium py-3 px-4 rounded-[0.75rem] transition-colors ${
                          isActive(item.href)
                            ? "text-[#5C6B4A] bg-[#F5EFE7] font-semibold"
                            : "text-[#666666] hover:text-[#5C6B4A] hover:bg-[#F5EFE7]/50"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-[#E8DED0] pl-4">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.href}
                              href={dropItem.href}
                              className="block py-2.5 text-sm text-[#666666] hover:text-[#5C6B4A] transition-colors"
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
                      className={`block text-sm font-medium py-3 px-4 rounded-[0.75rem] transition-colors ${
                        isActive(item.href)
                          ? "text-[#5C6B4A] bg-[#F5EFE7] font-semibold"
                          : "text-[#666666] hover:text-[#5C6B4A] hover:bg-[#F5EFE7]/50"
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
