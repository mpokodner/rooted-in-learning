"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { flags, links, nav, PRODUCT_NAME } from "@/config/site";
import { copy } from "@/content/site-copy";
import CookieSettings from "@/components/ui/CookieSettings";

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const form = e.currentTarget;
      if (!(form instanceof HTMLFormElement)) {
        setStatus("error");
        return;
      }
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "footer-kit",
          tag: "newsletter",
          website: new FormData(form).get("website"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("SiteFooter.subscribe", { error });
      setStatus("error");
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Stay in the loop</h2>
            <p>{copy.footer.blurb}</p>
          </div>
          <form className="footer-form" onSubmit={handleSubscribe}>
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <label htmlFor="footer-website">Website</label>
              <input id="footer-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
              suppressHydrationWarning
            />
            <button className="btn" type="submit" disabled={status === "loading" || status === "success"}>
              {status === "loading" ? "Sending…" : status === "success" ? "Subscribed!" : "Subscribe"}
            </button>
            <p className="footer-form-note">{copy.forms.studentNotice}</p>
            {status === "error" ? <p role="alert">Something went wrong. Please try again.</p> : null}
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">
                <Image src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
              </span>
              <span className="brand-text">
                <span className="brand-name" style={{ color: "#fff" }}>
                  The Rooted Learner
                </span>
              </span>
            </Link>
            <p className="footer-desc">{copy.footer.blurb}</p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {nav.primary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              {flags.hallpassPublic ? (
                <li>
                  <Link href="/for-districts/hallpass">HallPass</Link>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <Link href="/contact">{nav.cta.label}</Link>
              </li>
              {links.tpt ? (
                <li>
                  <a href={links.tpt} rel="noopener noreferrer" target="_blank">
                    Teachers Pay Teachers
                  </a>
                </li>
              ) : null}
              {links.linkedin ? (
                <li>
                  <a href={links.linkedin} rel="noopener noreferrer" target="_blank" data-track="linkedin_click" data-track-location="footer" data-track-category="linkedin">
                    LinkedIn
                  </a>
                </li>
              ) : null}
              {links.youtube ? (
                <li>
                  <a href={links.youtube} rel="noopener noreferrer" target="_blank">
                    YouTube
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/trust">Data & trust</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/accessibility">Accessibility</Link>
              </li>
              <li>
                <Link href="/ai-ethics">AI Ethics</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} The Rooted Learner
          </p>
          <div className="footer-legal">
            <CookieSettings />
            <span>{PRODUCT_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
