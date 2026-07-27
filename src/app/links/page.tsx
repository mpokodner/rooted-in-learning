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

        {/* Mini Footer */}
        <footer className="flex flex-col items-center gap-3 pt-4 pb-8">
          <a
            href="https://www.instagram.com/therootedlearner/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-onyx-muted hover:text-sacred-ember transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @therootedlearner
          </a>
          <p className="text-xs text-onyx-muted/60">
            &copy; 2026 Rooted in Learning
          </p>
        </footer>
      </div>
    </div>
  );
}
