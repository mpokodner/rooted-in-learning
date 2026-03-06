import type { Metadata } from "next";
import Link from "next/link";
import "./teacher-tools.css";

export const metadata: Metadata = {
  title: "Teacher Tools | The Rooted Learner",
  description:
    "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
  keywords: ["educational technology", "tech tutorials", "classroom technology", "edtech", "teacher tools"],
  alternates: {
    canonical: "/products/teacher-tools",
  },
  openGraph: {
    title: "Teacher Tools | The Rooted Learner",
    description: "Step-by-step technology tutorials for educators.",
    type: "website",
  },
};

const teacherTools = [
  { id: 1, title: "Getting Started with Google Classroom", category: "Google", duration: "10 min", level: "Beginner" },
  { id: 2, title: "Creating Interactive Slides", category: "Presentations", duration: "15 min", level: "Intermediate" },
  { id: 3, title: "Canva for Educators: Complete Guide", category: "Design", duration: "20 min", level: "Beginner" },
  { id: 4, title: "Using AI Tools Responsibly", category: "AI", duration: "12 min", level: "Intermediate" },
  { id: 5, title: "Video Editing Basics for Teachers", category: "Video", duration: "18 min", level: "Beginner" },
  { id: 6, title: "Organizing Digital Files Like a Pro", category: "Productivity", duration: "8 min", level: "Beginner" },
];

const premiumTools = [
  {
    title: "Small Group Planner Pro",
    description:
      "Plan rotations, track progress, and manage targeted instruction across all your groups — with built-in data tracking and printable schedules.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    tag: "Planning",
    hasVideo: true,
  },
  {
    title: "Data Dashboard Kit",
    description:
      "A full spreadsheet-based system for progress monitoring, running records, and assessment data — with auto-generated charts and intervention flags.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    tag: "Data & Assessment",
    hasVideo: true,
  },
  {
    title: "Observation Notes System",
    description:
      "A structured anecdotal notes toolkit with printable templates, digital tracking sheets, and a video walkthrough for building a sustainable note-taking habit.",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    tag: "Classroom Systems",
    hasVideo: true,
  },
  {
    title: "Assessment Calendar Builder",
    description:
      "Map out your full year of assessments, progress monitoring windows, and data review cycles — with editable templates and a setup tutorial.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    tag: "Planning",
    hasVideo: true,
  },
  {
    title: "Parent Communication Pack",
    description:
      "Professional letter templates, progress report formats, and conference prep sheets — everything you need for clear, confident family communication.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    tag: "Communication",
    hasVideo: false,
  },
  {
    title: "Classroom Library Organizer",
    description:
      "A complete system for cataloging, leveling, and organizing your classroom library — includes labels, checkout trackers, and a video setup guide.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    tag: "Literacy",
    hasVideo: true,
  },
];

const relatedBlogPosts = [
  {
    title: "5 Free Tools That Will Transform Your Lesson Planning",
    category: "AI in Education",
    href: "/blog",
  },
  {
    title: "How I Use AI to Differentiate Instruction for 28 Students",
    category: "AI in Education",
    href: "/blog",
  },
  {
    title: "Building a Lesson Planning System That Survives Monday Morning",
    category: "Teaching Systems Design",
    href: "/blog",
  },
];

export default function TeacherToolsPage() {
  return (
    <div className="min-h-screen bg-(--neutral-bg)">
      {/* Hero Section */}
      <section className="tips-hero">
        <div className="tips-container">
          <div className="tips-hero-inner">
            <p className="tips-hero-label">Technology Tutorials</p>
            <h1 className="tips-hero-title">Teacher Tools</h1>
            <p className="tips-hero-desc">
              Step-by-step tutorials to help you integrate technology with confidence. No IT degree required.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="tips-grid-section">
        <div className="tips-container">
          <div className="tips-grid">
            {teacherTools.map((tip) => (
              <div key={tip.id} className="tip-card">
                {/* Icon */}
                <div className="tip-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Meta Badges */}
                <div className="tip-card-meta">
                  <span className="tip-card-badge tip-card-badge--category">{tip.category}</span>
                  <span className="tip-card-badge tip-card-badge--level">{tip.level}</span>
                </div>

                <h3 className="tip-card-title">{tip.title}</h3>

                <div className="tip-card-footer">
                  <span className="tip-card-duration">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tip.duration}
                  </span>
                  <span className="tip-card-cta">
                    Watch
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tools */}
      <section className="tips-premium-section">
        <div className="tips-container">
          <div className="tips-premium-header">
            <p className="tips-section-label">Teacher Tools That Save You Time</p>
            <h2 className="tips-premium-title">
              Systems That Work as Hard as You Do
            </h2>
            <p className="tips-premium-desc">
              Designed by a teacher who actually uses them. Each tool includes
              templates, setup instructions, and video walkthroughs so you can
              start using it today.
            </p>
          </div>

          <div className="tips-premium-grid">
            {premiumTools.map((tool) => (
              <div key={tool.title} className="tips-premium-card">
                <div className="tips-premium-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                  </svg>
                </div>
                <div className="tips-premium-card-meta">
                  <span className="tips-premium-card-tag">{tool.tag}</span>
                  {tool.hasVideo && (
                    <span className="tips-premium-card-video">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Video Included
                    </span>
                  )}
                </div>
                <h3 className="tips-premium-card-title">{tool.title}</h3>
                <p className="tips-premium-card-desc">{tool.description}</p>
                <span className="tips-premium-card-cta">
                  Get This Tool
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="tips-blog-section">
        <div className="tips-container">
          <div className="tips-blog-header">
            <p className="tips-section-label">From the Blog</p>
            <h2 className="tips-blog-title">Related Articles &amp; Deep Dives</h2>
            <p className="tips-blog-desc">
              Go deeper on the strategies behind the tools. These blog posts complement
              our teacher tools with research-backed context and classroom walkthroughs.
            </p>
          </div>

          <div className="tips-blog-grid">
            {relatedBlogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="tips-blog-card">
                <span className="tips-blog-card-category">{post.category}</span>
                <h3 className="tips-blog-card-title">{post.title}</h3>
                <span className="tips-blog-card-link">
                  Read Article
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="tips-blog-viewall">
            <Link href="/blog" className="tips-blog-viewall-btn">
              View All Blog Posts
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Follow Along — Social Media */}
      <section className="tips-social-section">
        <div className="tips-container">
          <div className="tips-social-header">
            <p className="tips-section-label">Follow Along</p>
            <h2 className="tips-social-title">More Teacher Tools on Social</h2>
            <p className="tips-social-desc">
              Quick walkthroughs, behind-the-scenes tool reviews, and implementation
              tips — find me wherever you scroll.
            </p>
          </div>

          <div className="tips-social-grid">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@TheRootedLearner"
              target="_blank"
              rel="noopener noreferrer"
              className="tips-social-card"
            >
              <div className="tips-social-icon tips-social-icon--youtube">
                <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: "#FF0000" }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="tips-social-card-title">YouTube</h3>
              <p className="tips-social-card-desc">Full tutorials &amp; deep dives</p>
              <span className="tips-social-card-link tips-social-card-link--youtube">
                Subscribe
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="tips-social-card"
            >
              <div className="tips-social-icon tips-social-icon--tiktok">
                <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: "#010101" }}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </div>
              <h3 className="tips-social-card-title">TikTok</h3>
              <p className="tips-social-card-desc">Quick tips &amp; tool reviews</p>
              <span className="tips-social-card-link tips-social-card-link--tiktok">
                Follow
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rootedinlearninged/"
              target="_blank"
              rel="noopener noreferrer"
              className="tips-social-card"
            >
              <div className="tips-social-icon tips-social-icon--instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: "#E4405F" }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="tips-social-card-title">Instagram</h3>
              <p className="tips-social-card-desc">Behind the scenes</p>
              <span className="tips-social-card-link tips-social-card-link--instagram">
                Follow
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="tips-crosslinks">
        <div className="tips-container">
          <div className="tips-crosslinks-grid">
            <Link href="/products/lessons" className="tips-crosslink-card">
              <h3 className="tips-crosslink-title">Need ready-to-teach curriculum?</h3>
              <p className="tips-crosslink-desc">Browse lessons designed to save you hours every week.</p>
              <span className="tips-crosslink-cta">
                Browse Lessons &rarr;
              </span>
            </Link>
            <Link href="/services/consulting" className="tips-crosslink-card">
              <h3 className="tips-crosslink-title">Want personalized tech training?</h3>
              <p className="tips-crosslink-desc">Get 1-on-1 consulting for school-wide technology integration.</p>
              <span className="tips-crosslink-cta">
                Explore Consulting &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
