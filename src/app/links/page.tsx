import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Connect with Rooted in Learning. Take the educator survey, read the blog, and explore free resources for teachers.",
  openGraph: {
    title: "Rooted in Learning | Links",
    description:
      "Connect with Rooted in Learning. Take the educator survey and explore free resources for teachers.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfOCHR2yrdn41ak6q-4fYgPjUABlgm7FQgcDQfxXRiOBBJrQ/viewform?usp=sharing";

const secondaryLinks = [
  {
    label: "Read the Blog",
    href: "/blog",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    external: false,
  },
  {
    label: "Explore the Homepage",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    external: false,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rootedinlearninged/",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheRootedLearner",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@therootedlearner",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/rootedinlearninged/",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-new-light flex flex-col items-center">
      <div className="w-full max-w-[480px] mx-auto px-5 py-10 md:py-16 flex flex-col items-center gap-8">
        {/* Brand Mark */}
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-rooted-earth rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-bold text-rooted-earth font-[family-name:var(--font-sans)]">
              Rooted in Learning
            </h1>
            <p className="text-sm text-onyx-muted mt-0.5">@therootedlearner</p>
          </div>
        </div>

        {/* Personal Message Card */}
        <div className="w-full rounded-2xl bg-gentle-hold/40 px-6 py-6 md:px-8 md:py-8">
          <h2 className="text-xl font-[family-name:var(--font-serif)] italic text-onyx mb-4 leading-snug">
            Three things sitting on my desk right now
          </h2>
          <ul className="space-y-3 mb-5">
            <li className="flex gap-3 text-[15px] text-onyx-muted leading-relaxed">
              <span className="text-sacred-ember mt-1 shrink-0">&#9998;</span>
              <span>
                Language overlays for every Into Reading foundational skills
                module.
              </span>
            </li>
            <li className="flex gap-3 text-[15px] text-onyx-muted leading-relaxed">
              <span className="text-sacred-ember mt-1 shrink-0">&#9998;</span>
              <span>
                A beginning-of-year MCAP-aligned cold read, matched to a
                posttest, built for schools grading on standards mastery.
              </span>
            </li>
            <li className="flex gap-3 text-[15px] text-onyx-muted leading-relaxed">
              <span className="text-sacred-ember mt-1 shrink-0">&#9998;</span>
              <span>
                A curriculum for an AI course for teachers that isn&apos;t hype
                and isn&apos;t fear.
              </span>
            </li>
          </ul>
          <p className="text-[15px] text-onyx-muted leading-relaxed">
            None of them are finished. All of them are from my perspective as an
            educator — and I need yours to know what&apos;s useful and
            what&apos;s noise.
          </p>
        </div>

        {/* Primary CTA — Survey */}
        <a
          href={SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-sacred-ember hover:bg-sacred-ember-dark text-white rounded-2xl py-4 px-6 font-semibold text-base transition-all hover:shadow-lg active:scale-[0.98]"
        >
          Help Me Decide What to Build
          <span className="block text-white/80 text-xs font-normal mt-1">
            2-minute survey &middot; 9 questions &middot; No email required
          </span>
        </a>

        {/* Secondary Links */}
        <div className="w-full flex flex-col gap-3">
          {secondaryLinks.map((link) => {
            const LinkTag = link.external ? "a" : Link;
            const externalProps = link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <LinkTag
                key={link.href}
                href={link.href}
                {...externalProps}
                className="flex items-center gap-4 w-full bg-white rounded-2xl border border-[rgba(89,86,76,0.12)] px-5 py-4 hover:border-calm-spirit hover:shadow-md transition-all active:scale-[0.98] group"
              >
                <span className="w-10 h-10 rounded-xl bg-gentle-hold/60 flex items-center justify-center text-rooted-earth shrink-0">
                  {link.icon}
                </span>
                <span className="text-sm font-medium text-onyx flex-1">
                  {link.label}
                </span>
                <svg
                  className="w-4 h-4 text-onyx-muted group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </LinkTag>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white border border-[rgba(89,86,76,0.12)] flex items-center justify-center text-onyx-muted hover:text-sacred-ember hover:border-calm-spirit transition-all"
            >
              {s.svg}
            </a>
          ))}
        </div>

        {/* Mini Footer */}
        <footer className="flex flex-col items-center gap-2 pt-2 pb-8">
          <p className="text-xs text-onyx-muted/60">
            &copy; 2026 Rooted in Learning
          </p>
        </footer>
      </div>
    </div>
  );
}
