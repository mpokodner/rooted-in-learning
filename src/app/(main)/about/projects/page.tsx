import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import "./portfolio.css";

import reactDictionaryImg from "./images/react-dictionary-project.png";
import aiPoetryImg from "./images/PoemGenerator_Thumbnail.png";
import dataVizImg from "./images/pythonadvanced.png";
import weatherAppImg from "./images/react-weather-app.png";

export const metadata: Metadata = {
  title: "Portfolio | Rooted in Learning",
  description:
    "From EdTech platforms to instructional design systems — explore a portfolio that bridges 12+ years of education expertise with modern development.",
  keywords: [
    "portfolio",
    "edtech development",
    "curriculum design",
    "instructional design",
    "educational technology",
    "web development",
    "assessment tools",
  ],
  openGraph: {
    title: "Portfolio | Rooted in Learning",
    description:
      "EdTech development, instructional design, and curriculum projects from an educator who builds.",
    type: "website",
  },
};

/* ─── Skill Domains ─── */
const skillDomains = [
  {
    title: "EdTech Development",
    desc: "Full-stack platforms & tools",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "earth" as const,
  },
  {
    title: "Instructional Design",
    desc: "Curriculum & microlearning",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "terracotta" as const,
  },
  {
    title: "AI & Prompt Engineering",
    desc: "AI integrations & tools",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "gold" as const,
  },
  {
    title: "Data & Analytics",
    desc: "Visualization & insights",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "sage" as const,
  },
];

/* ─── Featured Flagship Projects ─── */
interface FeaturedProject {
  category: string;
  title: string;
  description: string;
  skills: string[];
  highlights: string[];
  status: "Live" | "In Progress" | "Published";
  href: string;
  linkLabel: string;
  isInternal: boolean;
  color: "earth" | "terracotta";
}

const featuredProjects: FeaturedProject[] = [
  {
    category: "EDTECH DEVELOPMENT",
    title: "AssessAlign — Intelligent Assessment Orchestration",
    description:
      "A full-stack EdTech platform I designed and built to solve a problem I saw repeatedly across schools: inconsistent assessment-to-standards alignment. AssessAlign uses AI-driven standardization, real-time analytics, and automated rubric generation to help educators and administrators make truly data-driven instructional decisions.",
    skills: [
      "React + TypeScript",
      "Node.js",
      "OpenAI API",
      "PostgreSQL",
      "AWS",
      "LTI 1.3 Integration",
    ],
    highlights: [
      "AI-powered feedback loops",
      "Standards mapping engine",
      "Real-time analytics dashboard",
      "LMS integration (Canvas, Blackboard, Moodle)",
    ],
    status: "In Progress",
    href: "/consulting/assessalign",
    linkLabel: "Explore AssessAlign",
    isInternal: true,
    color: "earth",
  },
  {
    category: "INSTRUCTIONAL DESIGN",
    title: "Microlearning Lesson System — Standards-Aligned Curriculum",
    description:
      "A complete library of ready-to-teach, standards-aligned lessons designed using Science of Reading principles and Universal Design for Learning. Each lesson follows a structured microlearning format: clear objective, guided practice, independent application, and built-in assessment — designed to save educators hours of planning time while maintaining instructional rigor.",
    skills: [
      "Curriculum Design",
      "Science of Reading",
      "UDL Framework",
      "Assessment Design",
      "Differentiation",
      "Multilingual Learner Support",
    ],
    highlights: [
      "Standards-aligned to Common Core & state standards",
      "Microlearning format for focused instruction",
      "Built-in formative assessment checkpoints",
      "Differentiation tiers for intervention & enrichment",
    ],
    status: "Published",
    href: "/resources/lessons",
    linkLabel: "Browse Lessons",
    isInternal: true,
    color: "terracotta",
  },
];

/* ─── Development Projects Grid ─── */
interface DevProject {
  category: string;
  categoryColor: "dev" | "ai" | "data";
  title: string;
  description: string;
  skills: string[];
  status: "Published" | "In Progress";
  link: string;
  image: StaticImageData;
}

const devProjects: DevProject[] = [
  {
    category: "REACT DEVELOPMENT",
    categoryColor: "dev",
    title: "Interactive React Dictionary",
    description:
      "Vocabulary learning tool with categorized word collections (nouns, verbs, adjectives), supplemented with images to support acquisition.",
    skills: ["React.js", "Hooks", "Dynamic Rendering", "State Management"],
    status: "Published",
    link: "https://www.shecodes.io/cohorts/2675/projects/2651626?_gl=1*1e7xlw1*_gcl_au*NDAxODI1MDY4LjE3NDczOTExNjAuMTU5NTA2MjEyMC4xNzQ4Njk2MzY0LjE3NDg2OTY5MDI.",
    image: reactDictionaryImg,
  },
  {
    category: "AI PROMPT ENGINEERING",
    categoryColor: "ai",
    title: "AI Poetry Generator",
    description:
      "Creative content generation app leveraging AI API integration with responsive design and modern UI/UX principles.",
    skills: ["AI Integration", "Prompt Engineering", "API Integration", "JavaScript DOM"],
    status: "Published",
    link: "https://www.shecodes.io/cohorts/2521/projects/2603943",
    image: aiPoetryImg,
  },
  {
    category: "PYTHON DATA SCIENCE",
    categoryColor: "data",
    title: "Internet Population Data Visualization",
    description:
      "Global internet population analysis by continent using OOP, data manipulation libraries, and interactive charts.",
    skills: ["Python OOP", "Data Visualization", "Data Manipulation", "File Processing"],
    status: "Published",
    link: "https://www.shecodes.io/cohorts/2618/projects/2634791",
    image: dataVizImg,
  },
  {
    category: "REACT DEVELOPMENT",
    categoryColor: "dev",
    title: "Weather Application",
    description:
      "Real-time weather data from OpenWeather API with city search, 5-day forecast, and temperature unit toggling.",
    skills: ["React.js", "ES6+", "Component Architecture", "Responsive Design"],
    status: "Published",
    link: "https://www.shecodes.io/cohorts/2661/projects/2646774?_gl=1*ukbm8c*_gcl_au*NDAxODI1MDY4LjE3NDczOTExNjAuMTU5NTA2MjEyMC4xNzQ4Njk2MzY0LjE3NDg2OTY5MDI.",
    image: weatherAppImg,
  },
];

/* ─── Credentials ─── */
const credentials = [
  {
    label: "Certified Educator",
    detail: "12+ Years Classroom Experience",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    label: "Full-Stack Developer",
    detail: "React · Next.js · Python · AI",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    label: "Curriculum Designer",
    detail: "K–12 Literacy & EdTech",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    label: "Science of Reading",
    detail: "Certified & Practicing",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export default function ProjectsPage() {
  return (
    <div className="portfolio-page">
      {/* ─── Hero ─── */}
      <section className="pf-hero" aria-labelledby="pf-heading">
        <div className="pf-hero-bg" aria-hidden="true">
          <div className="pf-hero-orb pf-hero-orb--1" />
          <div className="pf-hero-orb pf-hero-orb--2" />
        </div>
        <div className="portfolio-container pf-hero-content">
          <p className="pf-hero-label">Portfolio</p>
          <h1 id="pf-heading" className="pf-hero-title">
            An Educator Who
            <br />
            <span className="pf-hero-accent">Designs &amp; Builds</span>
          </h1>
          <p className="pf-hero-desc">
            12+ years of classroom experience meets full-stack development.
            Explore projects that bridge pedagogy, technology, and design.
          </p>

          {/* Skill Domain Pillars */}
          <div className="pf-domains">
            {skillDomains.map((domain) => (
              <div key={domain.title} className={`pf-domain pf-domain--${domain.color}`}>
                <div className="pf-domain-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={domain.icon} />
                  </svg>
                </div>
                <div className="pf-domain-text">
                  <span className="pf-domain-title">{domain.title}</span>
                  <span className="pf-domain-desc">{domain.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Flagship Projects ─── */}
      <section className="pf-featured section" aria-labelledby="featured-heading">
        <div className="portfolio-container">
          <div className="pf-section-header">
            <p className="pf-section-label">Flagship Projects</p>
            <h2 id="featured-heading" className="pf-section-title">
              Where Education Meets Engineering
            </h2>
          </div>

          <div className="pf-featured-stack">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`pf-flagship pf-flagship--${project.color}`}
              >
                <div className="pf-flagship-header">
                  <div className="pf-flagship-meta">
                    <span className={`pf-flagship-category pf-flagship-category--${project.color}`}>
                      {project.category}
                    </span>
                    <span className={`pf-flagship-status pf-flagship-status--${project.status === "In Progress" ? "progress" : "live"}`}>
                      <span className="pf-flagship-status-dot" />
                      {project.status}
                    </span>
                  </div>
                  <h3 className="pf-flagship-title">{project.title}</h3>
                  <p className="pf-flagship-desc">{project.description}</p>
                </div>

                <div className="pf-flagship-body">
                  {/* Highlights */}
                  <div className="pf-flagship-highlights">
                    <h4 className="pf-flagship-sub-heading">Key Features</h4>
                    <ul className="pf-flagship-highlight-list">
                      {project.highlights.map((h) => (
                        <li key={h}>
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="pf-flagship-skills">
                    <h4 className="pf-flagship-sub-heading">Technologies &amp; Methods</h4>
                    <div className="pf-flagship-tags">
                      {project.skills.map((skill) => (
                        <span key={skill} className={`pf-flagship-tag pf-flagship-tag--${project.color}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pf-flagship-footer">
                  {project.isInternal ? (
                    <Link href={project.href} className={`pf-flagship-cta pf-flagship-cta--${project.color}`}>
                      {project.linkLabel}
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={`pf-flagship-cta pf-flagship-cta--${project.color}`}>
                      {project.linkLabel}
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {index === 0 && (
                    <Link href="/consulting" className="pf-flagship-secondary">
                      Learn about my consulting practice
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Development Projects Grid ─── */}
      <section className="pf-dev section" aria-labelledby="dev-heading">
        <div className="portfolio-container">
          <div className="pf-section-header">
            <p className="pf-section-label">Development Projects</p>
            <h2 id="dev-heading" className="pf-section-title">
              Code, Create, Ship
            </h2>
            <p className="pf-section-desc">
              From React applications to Python data science — hands-on projects that demonstrate technical range.
            </p>
          </div>

          <div className="pf-dev-grid">
            {devProjects.map((project) => (
              <article key={project.title} className="pf-dev-card">
                {/* Image */}
                <div className="pf-dev-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="pf-dev-image"
                    placeholder="blur"
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-dev-overlay"
                  >
                    <span className="pf-dev-overlay-btn">
                      View Project
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Content */}
                <div className="pf-dev-content">
                  <span className={`pf-dev-category pf-dev-category--${project.categoryColor}`}>
                    {project.category}
                  </span>
                  <h3 className="pf-dev-title">{project.title}</h3>
                  <p className="pf-dev-desc">{project.description}</p>
                  <div className="pf-dev-tags">
                    {project.skills.map((skill) => (
                      <span key={skill} className="pf-dev-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="pf-dev-footer">
                    <span className="pf-dev-status">{project.status}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-dev-link"
                    >
                      View Project
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── More Coming Soon ─── */}
      <section className="pf-upcoming section" aria-labelledby="upcoming-heading">
        <div className="portfolio-container">
          <div className="pf-upcoming-inner">
            <div className="pf-upcoming-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h2 id="upcoming-heading" className="pf-upcoming-title">More Projects in Progress</h2>
            <p className="pf-upcoming-desc">
              New EdTech tools, curriculum systems, and AI-powered learning
              experiences are currently in development. Subscribe to get
              updates when they launch.
            </p>
            <Link href="/blog#newsletter" className="pf-upcoming-cta">
              Get Notified
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Credentials & Cross-links ─── */}
      <section className="pf-credentials section" aria-labelledby="cred-heading">
        <div className="portfolio-container">
          <div className="pf-credentials-inner">
            <p className="pf-section-label">About the Builder</p>
            <h2 id="cred-heading" className="pf-section-title">
              Built by an Educator Who Codes
            </h2>
            <p className="pf-credentials-desc">
              With 12+ years of classroom experience, Science of Reading certification,
              and full-stack development training, I bring a unique lens to every project
              — blending pedagogy with modern technology to build tools that actually work
              for educators.
            </p>

            <div className="pf-credentials-grid">
              {credentials.map((cred) => (
                <div key={cred.label} className="pf-credential">
                  <div className="pf-credential-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={cred.icon} />
                    </svg>
                  </div>
                  <h3 className="pf-credential-label">{cred.label}</h3>
                  <p className="pf-credential-detail">{cred.detail}</p>
                </div>
              ))}
            </div>

            <div className="pf-credentials-actions">
              <Link href="/about" className="pf-credentials-btn-primary">
                Read My Full Story
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/consulting" className="pf-credentials-btn-secondary">
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
