import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="section bg-[var(--earth)]">
        <div className="container text-center">
          <p className="text-[var(--text-xs)] font-bold text-[var(--earth-light)] uppercase tracking-[var(--tracking-widest)] mb-4">
            Skills &amp; Portfolio
          </p>
          <h1 className="text-h1 text-white mb-4">Projects</h1>
          <p className="text-[var(--earth-light)] max-w-lg mx-auto">
            A showcase of work spanning curriculum design, educational technology, and full-stack web development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 transition-all hover:shadow-lg hover:border-[var(--earth-light)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h2 className="text-h3 text-[var(--text-dark)]">{project.title}</h2>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    project.status === "In Progress"
                      ? "bg-[var(--beige-bg)] text-[var(--terracotta)]"
                      : "bg-[var(--earth)]/10 text-[var(--earth)]"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[var(--beige-bg)] rounded-full text-xs font-medium text-[var(--text-dark)]">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Link href={project.link} className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[var(--terracotta)] hover:gap-3 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
