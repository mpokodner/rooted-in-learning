import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./links.css";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Connect with The Rooted Learner. Take the educator survey, read the blog, and explore free resources for teachers.",
  openGraph: {
    title: "The Rooted Learner | Links",
    description:
      "Take the educator survey and explore free resources for teachers.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfOCHR2yrdn41ak6q-4fYgPjUABlgm7FQgcDQfxXRiOBBJrQ/viewform?usp=sharing";

export default function LinksPage() {
  return (
    <div className="links-page">
      <div className="links-wrapper">
        {/* Brand */}
        <Link href="/" className="links-brand">
          <Image
            src="/logo.png"
            alt="The Rooted Learner"
            width={72}
            height={72}
            className="links-logo"
            priority
          />
          <span className="links-brand-name">The Rooted Learner</span>
          <span className="links-handle">@therootedlearner</span>
        </Link>

        {/* Personal message */}
        <div className="links-message">
          <h2 className="links-message-heading">
            Three things sitting on my desk right now
          </h2>
          <ul className="links-message-list">
            <li className="links-message-item">
              <span className="links-message-marker" aria-hidden="true">
                &mdash;
              </span>
              <span>
                Language overlays for every Into Reading foundational skills
                module.
              </span>
            </li>
            <li className="links-message-item">
              <span className="links-message-marker" aria-hidden="true">
                &mdash;
              </span>
              <span>
                A beginning-of-year MCAP-aligned cold read, matched to a
                posttest, built for schools grading on standards mastery.
              </span>
            </li>
            <li className="links-message-item">
              <span className="links-message-marker" aria-hidden="true">
                &mdash;
              </span>
              <span>
                A curriculum for an AI course for teachers that isn&apos;t hype
                and isn&apos;t fear.
              </span>
            </li>
          </ul>
          <p className="links-message-closer">
            None of them are finished. All from my perspective as an
            educator&nbsp;&mdash; I need yours to know what&apos;s useful and
            what&apos;s noise.
          </p>
        </div>

        {/* CTA */}
        <a
          href={SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="links-cta"
        >
          Share your feedback and expertise
          <span className="links-cta-sub">
            9 questions &middot; 2 minutes &middot; no email required
          </span>
        </a>

        {/* Divider */}
        <div className="links-divider">
          <span className="links-divider-label">More from me</span>
        </div>

        {/* Secondary links */}
        <div className="links-secondary">
          <Link href="/learn/blog" className="links-secondary-card">
            <span className="links-secondary-icon">
              <svg
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
            </span>
            <span className="links-secondary-label">Blog</span>
          </Link>
          <Link href="/" className="links-secondary-card">
            <span className="links-secondary-icon">
              <svg
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
            </span>
            <span className="links-secondary-label">Homepage</span>
          </Link>
        </div>

        {/* Socials */}
        <div className="links-socials">
          <a
            href="https://www.instagram.com/rootedinlearninged/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="links-social-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@TheRootedLearner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="links-social-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@therootedlearner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="links-social-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
            </svg>
          </a>
          <a
            href="https://www.pinterest.com/rootedinlearninged/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="links-social-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/michelle-pokodner-edtech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="links-social-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="links-footer">
          &copy; 2026 The Rooted Learner
        </footer>
      </div>
    </div>
  );
}
