import type { Metadata } from "next";
import Link from "next/link";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Projects | Rooted in Learning",
  description: "Explore Michelle's portfolio — from curriculum design to full-stack web development.",
  keywords: ["portfolio", "projects", "web development", "curriculum design", "educational technology"],
};

const projects = [
  {
    title: "Rooted in Learning",
    description: "Full-stack EdTech platform built with Next.js, Supabase, and Stripe. Features e-commerce, authentication, blog, and email automation.",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    status: "In Progress",
  },
  {
    title: "AssessAlign",
    description: "Assessment alignment tool helping educators and administrators map assessments to standards for data-driven instruction.",
    tags: ["React", "Node.js", "PostgreSQL"],
    status: "In Progress",
    link: "/consulting/assessalign",
  },
  {
    title: "Reading Comprehension Bundle",
    description: "Standards-aligned ELA curriculum bundle for grades 3-5. Best-selling resource used by 500+ teachers.",
    tags: ["Curriculum Design", "ELA", "K-8"],
    status: "Published",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <div className="portfolio-hero-inner">
            <p className="portfolio-hero-label">Skills &amp; Portfolio</p>
            <h1 className="portfolio-hero-title">Projects</h1>
            <p className="portfolio-hero-desc">
              A showcase of work spanning curriculum design, educational technology, and full-stack web development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="portfolio-container">
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card-header">
                  <h2 className="project-card-title">{project.title}</h2>
                  <span className={`project-status ${
                    project.status === "In Progress"
                      ? "project-status--in-progress"
                      : "project-status--published"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <Link href={project.link} className="project-link">
                    View Project
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to About */}
      <section className="portfolio-back-section">
        <div className="portfolio-container">
          <div className="portfolio-back-inner">
            <Link href="/about" className="portfolio-back-link">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
