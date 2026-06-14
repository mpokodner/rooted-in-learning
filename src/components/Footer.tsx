"use client";

import { useState } from "react";
import Link from "next/link";

const SproutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 20h10" />
    <path d="M12 20V10" />
    <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
    <path d="M12 11c0-3 2.2-5.5 6-5.5 0 3.3-2.2 5.5-6 5.5Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Read your greenhouse first.</h2>
            <p>
              One short note and we&apos;ll send the Greenhouse Audit overview — scope,
              timeline, and what you&apos;ll walk away with.
            </p>
          </div>
          <form className="footer-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="you@yourschool.org"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
            />
            <button className="btn btn-terra" type="submit" disabled={status === "loading" || status === "success"}>
              {status === "loading" ? "Sending…" : status === "success" ? "Thank you ✓" : <>Get the overview <ArrowIcon /></>}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">
                <SproutIcon />
              </span>
              <span className="brand-text">
                <span className="brand-name" style={{ color: "#fff" }}>The Rooted Learner</span>
                <span className="brand-sub">Greenhouse Schools</span>
              </span>
            </Link>
            <p className="footer-desc">
              We help new, alternative, international, and microschools — and the edtech
              building for them — design coherent, learner-centered systems from seed.
            </p>
            <div className="footer-stats">
              <div>
                <div className="footer-stat-num">12+</div>
                <div className="footer-stat-label">Years in classrooms</div>
              </div>
              <div>
                <div className="footer-stat-num">2–3 wk</div>
                <div className="footer-stat-label">Audit to clarity</div>
              </div>
              <div>
                <div className="footer-stat-num">100+</div>
                <div className="footer-stat-label">Resources built</div>
              </div>
            </div>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/michelle-pokodner-edtech/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.56V24H.2zM8.34 8.3h4.37v2.15h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.91h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.34z" /></svg>
              </a>
              <a href="https://www.instagram.com/rootedinlearninged/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://www.youtube.com/@TheRootedLearner" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z" /></svg>
              </a>
              <a href="mailto:admin@therootedlearner.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Work With Us</h4>
            <ul>
              <li><Link href="/services">Greenhouse Schools</Link></li>
              <li><Link href="/services#audit">The Greenhouse Audit</Link></li>
              <li><Link href="/tools">Tools We Build</Link></li>
              <li><Link href="/tools/assessalign">AssessAlign</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li><Link href="/learn">Learn Hub</Link></li>
              <li><Link href="/learn/blog">Insights &amp; Blog</Link></li>
              <li><Link href="/learn/teacher-toolkit">Teacher Toolkit</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="/services#audit">Book the Audit</Link></li>
              <li><a href="mailto:admin@therootedlearner.com">admin@therootedlearner.com</a></li>
              <li><Link href="/about#contact">Start a conversation</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} The Rooted Learner · Built with intention in Baltimore, MD</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/ai-ethics">AI Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
