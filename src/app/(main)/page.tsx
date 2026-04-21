import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import "./home.css";

export const metadata: Metadata = {
  title: "The Rooted Learner | Curricular Solutions Architect for K–12 Districts",
  description:
    "I diagnose where your system breaks: curriculum, assessment, multilingual learner access, and technology. Then I build what fixes it. Michelle Pokodner, Curricular Solutions Architect.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Rooted Learner | Curricular Solutions Architect",
    description:
      "I diagnose where your district's curriculum systems break and build what fixes them. Not recommendations. Infrastructure.",
    type: "website",
  },
};

export const revalidate = 60;

export default async function Home() {
  let latestPosts: BlogPostCard[] = [];
  try {
    const allPosts = await client.fetch<BlogPostCard[]>(blogPostsQuery);
    latestPosts = allPosts.slice(0, 3);
  } catch {
    // Sanity fetch failed — show fallback
  }
  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="hero-section">
        <Image
          src="/images/homepage-hero.png"
          alt="Sunlight filtering through tree branches"
          fill
          priority
          className="hero-bg-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-heading animate-fade-up">
            Your district is already paying for the tools.{" "}
            <span className="hero-heading-accent">
              They&apos;re just not working together.
            </span>
          </h1>

          <p className="hero-subheadline animate-fade-up animate-delay-1">
            I diagnose where your system breaks: curriculum, assessment,
            multilingual learner access, and technology. Then I build what
            fixes it.
          </p>

          <p className="hero-identity animate-fade-up animate-delay-2">
            I&apos;m Michelle Pokodner, a Curricular Solutions Architect.
            I&apos;m currently in the classroom, and I build the systems
            I wish we had.
          </p>

          <div className="hero-cta-row animate-fade-up animate-delay-3">
            <Link
              href="/services#audit"
              className="hero-cta-btn hero-cta-btn--earth"
            >
              Start with a System Audit
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a href="#how-it-works" className="hero-cta-btn hero-cta-btn--outline">
              See How I Work
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — WHAT'S BREAKING
      ═══════════════════════════════════════════ */}
      <section className="breaking-section" aria-labelledby="breaking-heading">
        <div className="container">
          <div className="breaking-header">
            <p className="section-label">The Problem</p>
            <h2 id="breaking-heading" className="text-h2 breaking-title">
              Where Your System Breaks
            </h2>
            <p className="breaking-desc">
              Most districts don&apos;t have a single problem. They have
              misalignment across systems.
            </p>
          </div>
          <div className="breaking-grid">
            {[
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                text: "Curriculum and assessments aren\u2019t aligned",
              },
              {
                icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                text: "Multilingual learners can\u2019t access core instruction",
              },
              {
                icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                text: "Tools operate in isolation",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                text: "Teachers are carrying the burden manually",
              },
            ].map((item) => (
              <div key={item.text} className="breaking-card">
                <div className="breaking-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <p className="breaking-text">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="breaking-close">
            You don&apos;t need more tools. You need your system to work.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHAT I DO
      ═══════════════════════════════════════════ */}
      <section className="diagnose-section section--alt" aria-labelledby="diagnose-heading">
        <div className="container">
          <div className="diagnose-header">
            <p className="section-label">What I Do</p>
            <h2 id="diagnose-heading" className="text-h2 diagnose-title">
              I Diagnose and Build
            </h2>
            <p className="diagnose-desc">
              Most consulting stops at recommendations. I stay through the
              build, designing curriculum, aligning assessments, and
              creating the tools that make the system function.
            </p>
          </div>
          <div className="diagnose-cta-row">
            <a href="#how-it-works" className="trust-btn trust-btn--primary">
              See the System
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="howworks-section" aria-labelledby="howworks-heading">
        <div className="container">
          <div className="howworks-header">
            <p className="section-label">The Process</p>
            <h2 id="howworks-heading" className="text-h2 howworks-title">
              Start with Diagnosis
            </h2>
          </div>
          <div className="howworks-steps">
            <div className="howworks-step">
              <div className="howworks-step-number">1</div>
              <div className="howworks-step-content">
                <h3 className="howworks-step-title">Audit</h3>
                <p className="howworks-step-desc">
                  I map where your system breaks.
                </p>
              </div>
            </div>
            <div className="howworks-step">
              <div className="howworks-step-number">2</div>
              <div className="howworks-step-content">
                <h3 className="howworks-step-title">Build</h3>
                <p className="howworks-step-desc">
                  I design and develop the solution.
                </p>
              </div>
            </div>
            <div className="howworks-step">
              <div className="howworks-step-number">3</div>
              <div className="howworks-step-content">
                <h3 className="howworks-step-title">Implement</h3>
                <p className="howworks-step-desc">
                  I support it until it works in classrooms.
                </p>
              </div>
            </div>
          </div>
          <div className="howworks-cta-row">
            <Link href="/services#audit" className="trust-btn trust-btn--primary">
              Start the Audit
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link href="/services" className="trust-btn trust-btn--outline">
              Explore District Work
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — ASSESSALIGN (PROOF)
      ═══════════════════════════════════════════ */}
      <section className="proof-section section--alt" aria-labelledby="proof-heading">
        <div className="container">
          <div className="proof-header">
            <p className="section-label">Proof of Work</p>
            <h2 id="proof-heading" className="text-h2 proof-title">
              I Build the Tools I Recommend
            </h2>
            <p className="proof-desc">
              AssessAlign is a standards-based assessment system I built to solve
              a problem I was experiencing in my own classroom.
            </p>
          </div>
          <div className="proof-cta-row">
            <Link href="/tools/assessalign" className="trust-btn trust-btn--primary">
              Explore AssessAlign
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link href="/services" className="trust-btn trust-btn--outline">
              See District Applications
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — THE REAL PROBLEM
      ═══════════════════════════════════════════ */}
      <section className="realproblem-section" aria-labelledby="realproblem-heading">
        <div className="container">
          <div className="realproblem-content">
            <h2 id="realproblem-heading" className="realproblem-title">
              This Isn&apos;t a People Problem
            </h2>
            <p className="realproblem-lead">
              Teachers aren&apos;t failing. Students aren&apos;t the issue. The
              system wasn&apos;t designed to work together.
            </p>
            <p className="realproblem-body">
              When curriculum, assessment, and access are misaligned, the burden
              shifts to the classroom. That&apos;s where burnout starts, and
              and where students get missed.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — CREDIBILITY
      ═══════════════════════════════════════════ */}
      <section className="credibility-section" aria-labelledby="credibility-heading">
        <div className="container">
          <p className="credibility-eyebrow">Credentials</p>
          <h2 id="credibility-heading" className="credibility-heading">
            Built Inside the Classroom
          </h2>

          <div className="credibility-list">
            <p className="credibility-item">12+ years in K&ndash;8 classrooms</p>
            <p className="credibility-item">Reading interventionist and curriculum designer</p>
            <p className="credibility-item">Science of Reading and multilingual learner specialist</p>
            <p className="credibility-item">Full-stack developer building instructional tools</p>
          </div>

          <p className="credibility-close">
            I don&apos;t step into classrooms to observe. I&apos;m already in one.
          </p>

          <div className="credibility-cta-row">
            <Link href="/about" className="trust-btn trust-btn--outline-light">
              About Michelle
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — AUDIENCE SPLIT
      ═══════════════════════════════════════════ */}
      <section className="split-section" aria-labelledby="split-heading">
        <div className="container">
          <h2 id="split-heading" className="text-h2 split-title">
            Two Ways to Work With Me
          </h2>
          <div className="split-grid">
            <div className="split-card">
              <div className="split-card-icon split-card-icon--district">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="split-card-title">Districts</h3>
              <p className="split-card-desc">
                System-level audits, builds, and implementation.
              </p>
              <Link href="/services" className="split-card-cta">
                Explore District Work
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="split-card">
              <div className="split-card-icon split-card-icon--educator">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="split-card-title">Educators</h3>
              <p className="split-card-desc">
                Classroom tools and resources.
              </p>
              <Link href="/learn" className="split-card-cta">
                Browse Classroom Tools
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — BLOG
      ═══════════════════════════════════════════ */}
      <section className="blog-section section--alt">
        <div className="container">
          <div className="blog-header">
            <div className="blog-header-content">
              <p className="blog-header-label">From the Blog</p>
              <h2 className="text-h3 blog-header-title">
                Insights from Inside the System
              </h2>
              <p className="blog-header-desc">
                Diagnosis, strategy, and what actually works at the classroom
                and district level.
              </p>
            </div>
            <Link href="/learn/blog" className="blog-view-all">
              View all articles
              <svg
                className="blog-view-all-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <p className="blog-empty-text">
                Articles coming soon. Practical strategies grounded in
                Science of Reading, multilingual learner support, and AI in
                education.
              </p>
              <Link href="/learn/blog" className="blog-empty-link">
                Visit the Blog
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — NEWSLETTER / LEAD MAGNET
      ═══════════════════════════════════════════ */}
      <section id="newsletter" className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-card-content">
              <div className="newsletter-icon-wrap">
                <svg
                  className="newsletter-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="newsletter-free-badge">Free Download</span>
              <h3 className="newsletter-card-title">
                Free Claude AI Guide for Educators
              </h3>
              <p className="newsletter-card-desc">
                A practical, step-by-step guide to using Claude AI in your
                classroom: prompt templates, lesson planning workflows,
                and real examples from a current 1&ndash;8 educator. Enter your
                email and I&apos;ll send it straight to your inbox.
              </p>
              <NewsletterForm
                source="homepage-claude-guide"
                buttonText="Get My Free Guide"
              />
              <p className="newsletter-disclaimer">
                Join a growing community of educators. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11 — FOOTER CTA
      ═══════════════════════════════════════════ */}
      <section className="footercta-section">
        <div className="container footercta-inner">
          <p className="footercta-lead">
            Your system isn&apos;t broken because your people aren&apos;t trying.
          </p>
          <p className="footercta-accent">
            It&apos;s broken because it wasn&apos;t designed to work together.
          </p>
          <Link href="/services#audit" className="hero-cta-btn hero-cta-btn--terracotta">
            Start with a System Audit
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
