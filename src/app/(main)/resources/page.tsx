import type { Metadata } from "next";
import Link from "next/link";
import "./resources.css";

export const metadata: Metadata = {
  title: "Free Resources | The Rooted Learner",
  description:
    "Free educator resources: lesson samples, teacher tools, downloadables, framework guides, and recommended tools for literacy instruction, EdTech integration, and classroom systems.",
  keywords: [
    "free teacher resources",
    "lesson samples",
    "teacher tools",
    "framework guides",
    "literacy resources",
    "edtech tools",
    "classroom downloads",
    "science of reading resources",
  ],
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Free Resources | The Rooted Learner",
    description:
      "Free educator resources: lesson samples, teacher tools, downloadables, framework guides, and recommended tools.",
    type: "website",
  },
};

const lessonSamples = [
  {
    title: "Phonemic Awareness Warm-Up",
    grade: "K–2",
    description:
      "A structured 10-minute warm-up routine that builds phonemic awareness through blending, segmenting, and manipulation activities.",
    tag: "Science of Reading",
  },
  {
    title: "Vocabulary in Context",
    grade: "3–5",
    description:
      "A Tier 2 vocabulary lesson using context clues, morphology, and repeated exposure across reading and writing.",
    tag: "Vocabulary",
  },
  {
    title: "Multilingual Comprehension Scaffold",
    grade: "2–5",
    description:
      "A comprehension lesson designed with built-in scaffolds for multilingual learners, including visual supports and sentence frames.",
    tag: "MLLs",
  },
];

const teacherTools = [
  {
    title: "Small Group Planning Template",
    description:
      "Organize your small group rotations, track student progress, and plan targeted instruction all in one place.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  },
  {
    title: "Data Tracking Dashboard",
    description:
      "A simple spreadsheet-based tracker for progress monitoring, running records, and assessment data across your class.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Observation Notes Organizer",
    description:
      "Capture meaningful anecdotal notes during instruction with this structured observation tool designed for busy teachers.",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
  },
];

const downloadables = [
  {
    title: "Science of Reading Quick Reference",
    description: "A one-page visual guide to the key components of structured literacy and the Science of Reading.",
    format: "PDF",
  },
  {
    title: "Assessment Calendar Template",
    description: "Plan your assessment windows, progress monitoring schedule, and data review cycles for the year.",
    format: "PDF",
  },
  {
    title: "Parent Communication Templates",
    description: "Ready-to-use letter templates for communicating reading progress, intervention plans, and home practice tips.",
    format: "PDF",
  },
  {
    title: "Classroom Library Audit Checklist",
    description: "Evaluate and organize your classroom library for diversity, reading levels, and student interest.",
    format: "PDF",
  },
];

const recommendedTools = [
  {
    title: "Canva for Education",
    description: "Create beautiful presentations, worksheets, and visual aids with free education-specific templates.",
    category: "Design & Materials",
    href: "/resources/recommended-tools",
  },
  {
    title: "Bookshop.org",
    description: "Support independent bookstores while building your classroom library. Curated lists for every grade level.",
    category: "Classroom Library",
    href: "/resources/recommended-tools",
  },
  {
    title: "Kami",
    description: "Annotate PDFs, create interactive worksheets, and provide digital feedback on student work.",
    category: "Digital Classroom",
    href: "/resources/recommended-tools",
  },
  {
    title: "View All Recommended Tools",
    description: "Browse my full collection of tested and recommended tools, books, gear, and software for educators.",
    category: "Full Collection",
    href: "/resources/recommended-tools",
    isViewAll: true,
  },
];

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="resources-hero" aria-labelledby="resources-heading">
        <div className="container resources-hero-container">
          <p className="resources-hero-label">Free for Educators</p>
          <h1 id="resources-heading" className="resources-hero-title">
            Resources That Actually Help
          </h1>
          <p className="resources-hero-desc">
            Practical tools, lesson samples, and frameworks built from real
            classroom experience. No fluff, no gated upsells — just genuinely
            useful resources for your teaching practice.
          </p>
          <nav className="resources-jump-nav" aria-label="Jump to section">
            <a href="#lessons" className="resources-jump-link">Lesson Samples</a>
            <a href="#tools" className="resources-jump-link">Teacher Tools</a>
            <a href="#downloads" className="resources-jump-link">Downloadables</a>
            <a href="#recommended" className="resources-jump-link">Recommended Tools</a>
          </nav>
        </div>
      </section>

      {/* Free Lesson Samples */}
      <section id="lessons" className="resources-section resources-section--white" aria-labelledby="lessons-heading">
        <div className="container">
          <div className="resources-section-header">
            <p className="resources-section-label">Free Lesson Samples</p>
            <h2 id="lessons-heading" className="resources-section-title">
              See the Teaching in Action
            </h2>
            <p className="resources-section-desc">
              Preview complete lesson plans built on Science of Reading
              research. Each includes objectives, materials, procedures, and
              differentiation suggestions.
            </p>
          </div>

          <div className="resources-lessons-grid">
            {lessonSamples.map((lesson) => (
              <div key={lesson.title} className="resources-lesson-card">
                <div className="resources-lesson-top">
                  <span className="resources-lesson-tag">{lesson.tag}</span>
                  <span className="resources-lesson-grade">{lesson.grade}</span>
                </div>
                <h3 className="resources-lesson-title">{lesson.title}</h3>
                <p className="resources-lesson-desc">{lesson.description}</p>
                <span className="resources-card-link">
                  Preview Lesson
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Teacher Tools */}
      <section id="tools" className="resources-section" aria-labelledby="tools-heading">
        <div className="container">
          <div className="resources-section-header">
            <p className="resources-section-label">Free Teacher Tools</p>
            <h2 id="tools-heading" className="resources-section-title">
              Systems That Save You Time
            </h2>
            <p className="resources-section-desc">
              Planning templates, data trackers, and organizational tools
              designed by a teacher who actually uses them.
            </p>
          </div>

          <div className="resources-tools-grid">
            {teacherTools.map((tool) => (
              <div key={tool.title} className="resources-tool-card">
                <div className="resources-tool-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                  </svg>
                </div>
                <h3 className="resources-tool-title">{tool.title}</h3>
                <p className="resources-tool-desc">{tool.description}</p>
                <span className="resources-card-link">
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

      {/* Downloadables */}
      <section id="downloads" className="resources-section resources-section--white" aria-labelledby="downloads-heading">
        <div className="container">
          <div className="resources-section-header">
            <p className="resources-section-label">Downloadables</p>
            <h2 id="downloads-heading" className="resources-section-title">
              Print, Use, Repeat
            </h2>
            <p className="resources-section-desc">
              Quick-reference guides, templates, and checklists you can
              download and start using today.
            </p>
          </div>

          <div className="resources-downloads-grid">
            {downloadables.map((item) => (
              <div key={item.title} className="resources-download-card">
                <div className="resources-download-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <span className="resources-download-format">{item.format}</span>
                </div>
                <div className="resources-download-content">
                  <h3 className="resources-download-title">{item.title}</h3>
                  <p className="resources-download-desc">{item.description}</p>
                </div>
                <span className="resources-download-btn">
                  Download Free
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools (Affiliate) */}
      <section id="recommended" className="resources-section resources-section--white" aria-labelledby="recommended-heading">
        <div className="container">
          <div className="resources-section-header">
            <p className="resources-section-label">Recommended Tools</p>
            <h2 id="recommended-heading" className="resources-section-title">
              Tools I Actually Use
            </h2>
            <p className="resources-section-desc">
              Every tool here has been personally tested in my own teaching
              practice. I only recommend what I&apos;d use in my own classroom.
            </p>
          </div>

          <div className="resources-recommended-grid">
            {recommendedTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className={`resources-recommended-card${(tool as { isViewAll?: boolean }).isViewAll ? " resources-recommended-card--cta" : ""}`}
              >
                <span className="resources-recommended-category">{tool.category}</span>
                <h3 className="resources-recommended-title">{tool.title}</h3>
                <p className="resources-recommended-desc">{tool.description}</p>
                <span className="resources-card-link">
                  {(tool as { isViewAll?: boolean }).isViewAll ? "Browse All Tools" : "Learn More"}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="resources-newsletter" aria-labelledby="newsletter-heading">
        <div className="container">
          <div className="resources-newsletter-inner">
            <h2 id="newsletter-heading" className="resources-newsletter-title">
              Get New Resources in Your Inbox
            </h2>
            <p className="resources-newsletter-desc">
              I share new free resources, teaching strategies, and tool
              recommendations every week. Join the list.
            </p>
            <Link href="/blog" className="resources-newsletter-btn">
              Visit the Blog for More
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
