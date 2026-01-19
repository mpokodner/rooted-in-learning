"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "#projects", label: "Projects" },
    { href: "/learn", label: "Learn" },
    { href: "#favorites", label: "Favorites" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-new-light/95 backdrop-blur-sm border-b border-border">
      <nav className="container">
        <div className="flex-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">🌰</span>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-rooted-earth leading-tight">
                Rooted in Learning
              </span>
              <span className="text-[10px] uppercase tracking-widest text-onyx-muted">
                EdTech Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hide-mobile flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-onyx-light hover:text-sacred-ember transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hide-mobile flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-onyx-muted">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Austin, TX</span>
            </div>
            <button className="btn btn-accent btn-sm">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hide-desktop p-2 text-onyx hover:bg-gentle-hold rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="hide-desktop pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-onyx-light hover:text-sacred-ember py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <button className="btn btn-accent w-full">Contact</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
