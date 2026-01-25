"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/microlearning", label: "Microlearning" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/favorites", label: "Favorites" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DED0]">
      <nav className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 bg-[#5C6B4A] rounded-[0.5rem] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-base font-semibold text-[#5C6B4A] hidden sm:inline">
              Rooted in Learning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  isActive(link.href)
                    ? "text-[#5C6B4A]"
                    : "text-[#666666] hover:text-[#5C6B4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="bg-[#5C6B4A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4A5638] transition-all"
            >
              Contact
            </Link>
          </div>

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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-[#E8DED0] pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-3 px-4 rounded-[0.75rem] transition-colors ${
                    isActive(link.href)
                      ? "text-[#5C6B4A] bg-[#F5EFE7] font-semibold"
                      : "text-[#666666] hover:text-[#5C6B4A] hover:bg-[#F5EFE7]/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-[#E8DED0]">
                <Link
                  href="/#contact"
                  className="block w-full bg-[#5C6B4A] text-white text-center py-3 rounded-[0.75rem] font-semibold text-sm hover:bg-[#4A5638] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
