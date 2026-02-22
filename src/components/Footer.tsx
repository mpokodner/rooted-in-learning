"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribeStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch {
      setSubscribeStatus("error");
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Lead Capture Bar */}
      <div className="footer-capture">
        <div className="container">
          <div className="footer-capture-inner">
            <div className="footer-capture-content">
              <h3 className="footer-capture-title">
                Get weekly teaching strategies &amp; free resources
              </h3>
              <p className="footer-capture-desc">
                Join 5,000+ educators. Research-backed insights delivered every Tuesday.
              </p>
            </div>
            <form className="footer-capture-form" onSubmit={handleSubscribe}>
              <div className="footer-capture-input-group">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="your@email.com"
                  className="footer-capture-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-describedby="footer-email-note"
                />
                <button
                  type="submit"
                  className="footer-capture-btn"
                  disabled={subscribeStatus === "loading"}
                >
                  {subscribeStatus === "loading" ? "Sending..." : "Subscribe"}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              {subscribeStatus === "success" && (
                <p className="footer-capture-success">Welcome aboard! Check your inbox.</p>
              )}
              {subscribeStatus === "error" && (
                <p className="footer-capture-error">Something went wrong. Please try again.</p>
              )}
              <p id="footer-email-note" className="footer-capture-note">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="footer-logo-text">The Rooted Learner</span>
              </Link>
              <p className="footer-desc">
                Built by a 12+ year educator, reading interventionist, and EdTech developer. Practical tools and strategies for educators, schools, and families.
              </p>

              {/* Trust Metrics */}
              <div className="footer-trust-metrics">
                <div className="footer-trust-metric">
                  <span className="footer-trust-number">12+</span>
                  <span className="footer-trust-label">Years in Education</span>
                </div>
                <div className="footer-trust-metric">
                  <span className="footer-trust-number">5K+</span>
                  <span className="footer-trust-label">Educators Served</span>
                </div>
                <div className="footer-trust-metric">
                  <span className="footer-trust-number">100+</span>
                  <span className="footer-trust-label">Resources Created</span>
                </div>
              </div>

              {/* Social / Authority Links */}
              <div className="footer-social-row">
                <a
                  href="https://linkedin.com/in/michelle-van-slyke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="LinkedIn"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:hello@therootedlearner.com"
                  className="footer-social-icon"
                  aria-label="Email"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-links-grid">
              {/* Navigation */}
              <div>
                <h5 className="footer-heading">Navigate</h5>
                <ul className="footer-link-list">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/resources/lessons" className="footer-link">Lessons</Link></li>
                  <li><Link href="/consulting" className="footer-link">Consulting</Link></li>
                  <li><Link href="/blog" className="footer-link">Blog</Link></li>
                  <li><Link href="/about" className="footer-link">About</Link></li>
                </ul>
              </div>

              {/* Audience Pathways */}
              <div>
                <h5 className="footer-heading">I&apos;m a...</h5>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/resources/teacher-tools" className="footer-link footer-link--pathway">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                      </svg>
                      Teacher / Educator
                    </Link>
                  </li>
                  <li>
                    <Link href="/consulting" className="footer-link footer-link--pathway">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      School / District Leader
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/lessons" className="footer-link footer-link--pathway">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      Parent / Family
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 className="footer-heading">Resources</h5>
                <ul className="footer-link-list">
                  <li><Link href="/resources/lessons" className="footer-link">Lesson Library</Link></li>
                  <li><Link href="/resources/teacher-tools" className="footer-link">Teacher Tools</Link></li>
                  <li><Link href="/resources/favorites" className="footer-link">Favorites</Link></li>
                  <li><Link href="/blog" className="footer-link">Blog Articles</Link></li>
                  <li><Link href="/contact" className="footer-link">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-bottom-text">
            &copy; {new Date().getFullYear()} The Rooted Learner. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Use</Link>
            <Link href="/accessibility" className="footer-bottom-link">Accessibility</Link>
          </div>
          <p className="footer-bottom-text">
            Built with <span className="accent">intention</span> in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
