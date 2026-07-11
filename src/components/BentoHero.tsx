"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function getUtmSource(): string {
  if (typeof window === "undefined") return "";
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("utm_source") || "";
  } catch {
    return "";
  }
}

export default function BentoHero() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [downloadEmail, setDownloadEmail] = useState("");
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSignup = async () => {
    if (!signupEmail || !signupEmail.includes("@")) return;
    setSignupStatus("loading");
    try {
      const utmSource = getUtmSource();
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signupEmail,
          source: "homepage-bento",
          tag: "newsletter",
          ...(utmSource && { referrer: utmSource }),
        }),
      });
      if (res.ok) {
        setSignupStatus("success");
        setSignupEmail("");
      } else {
        setSignupStatus("error");
      }
    } catch {
      setSignupStatus("error");
    }
  };

  const handleDownload = async () => {
    if (!downloadEmail || !downloadEmail.includes("@")) return;
    setDownloadStatus("loading");
    try {
      const utmSource = getUtmSource();
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: downloadEmail,
          source: "homepage-bento-download",
          sendFreebie: true,
          tag: "claude-educators-pdf",
          ...(utmSource && { referrer: utmSource }),
        }),
      });
      if (res.ok) {
        setDownloadStatus("success");
        setDownloadEmail("");
      } else {
        setDownloadStatus("error");
      }
    } catch {
      setDownloadStatus("error");
    }
  };

  return (
    <section className="bento-hero">
      {/* Hero tile — large left */}
      <div className="bento-tile bento-tile--hero">
        <Image
          src="/images/homepage-hero.png"
          alt="Educator in a learning environment"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="bento-hero-overlay">
          <span className="bento-pill">Independent Education Press</span>
          <h1>The Rooted Learner</h1>
          <p>Practical AI training &amp; classroom tools for teachers of multilingual learners</p>
        </div>
      </div>

      {/* Signup tile — top right */}
      <div className="bento-tile bento-tile--signup">
        <span className="bento-eyebrow">Newsletter</span>
        <h2>Grow your inbox</h2>
        <p>Teaching tips, AI strategies, and new resources — delivered when we have something worth sharing.</p>
        {signupStatus === "success" ? (
          <p className="bento-success">You&apos;re in! Check your inbox.</p>
        ) : (
          <div className="bento-capture">
            <input
              type="email"
              placeholder="your@email.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignup()}
              aria-label="Email for newsletter"
            />
            <button
              type="button"
              className="btn btn-terra"
              onClick={handleSignup}
              disabled={signupStatus === "loading"}
            >
              {signupStatus === "loading" ? "..." : "Subscribe"}
            </button>
          </div>
        )}
        {signupStatus === "error" && (
          <p className="bento-error">Something went wrong. Try again.</p>
        )}
        <p className="bento-fine">Free, no spam, unsubscribe anytime.</p>
      </div>

      {/* Download tile — middle right */}
      <div className="bento-tile bento-tile--download">
        <span className="bento-eyebrow bento-eyebrow--terra">Free Download</span>
        <h2>Claude for Educators</h2>
        <p>Prompt templates, classroom workflows, and real examples — 18 pages of practical AI guidance.</p>
        {downloadStatus === "success" ? (
          <p className="bento-success bento-success--light">Check your inbox for the download link!</p>
        ) : (
          <div className="bento-capture bento-capture--dark">
            <input
              type="email"
              placeholder="your@email.com"
              value={downloadEmail}
              onChange={(e) => setDownloadEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleDownload()}
              aria-label="Email for PDF download"
            />
            <button
              type="button"
              className="btn bento-btn-download"
              onClick={handleDownload}
              disabled={downloadStatus === "loading"}
            >
              {downloadStatus === "loading" ? "..." : "Get the PDF"}
            </button>
          </div>
        )}
        {downloadStatus === "error" && (
          <p className="bento-error bento-error--light">Something went wrong. Try again.</p>
        )}
        <p className="bento-fine bento-fine--light">PDF &middot; 18 pages &middot; free with email</p>
      </div>

      {/* Shop tile — bottom left */}
      <Link href="/shop" className="bento-tile bento-tile--shop">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h2>Shop</h2>
          <p>Classroom-ready resources</p>
        </div>
        <div className="bento-hover-overlay">
          <ul>
            <li>MCAP-aligned units</li>
            <li>Differentiated resources</li>
            <li>Microlearning lessons</li>
          </ul>
        </div>
      </Link>

      {/* Learn tile — bottom right */}
      <Link href="/learn" className="bento-tile bento-tile--learn">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <h2>Learn</h2>
          <p>Training &amp; free resources</p>
        </div>
        <div className="bento-hover-overlay">
          <ul>
            <li>AI Educator Course</li>
            <li>Free teaching tips</li>
          </ul>
        </div>
      </Link>
    </section>
  );
}
