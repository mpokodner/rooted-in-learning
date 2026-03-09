import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import "./about.css";
import "./projects/portfolio.css";

import reactDictionaryImg from "./projects/images/react-dictionary-project.png";
import aiPoetryImg from "./projects/images/PoemGenerator_Thumbnail.png";
import dataVizImg from "./projects/images/pythonadvanced.png";
import weatherAppImg from "./projects/images/react-weather-app.png";

export const metadata: Metadata = {
  title: "About Michelle | The Rooted Learner",
  description:
    "12+ year educator, reading interventionist, curriculum designer, and EdTech developer. Building the infrastructure that makes great teaching sustainable.",
  keywords: [
    "education consultant",
    "reading interventionist",
    "curriculum designer",
    "science of reading",
    "EdTech developer",
    "multilingual learner specialist",
    "portfolio",
    "edtech development",
    "instructional design",
    "educational technology",
    "web development",
    "assessment tools",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Michelle | The Rooted Learner",
    description:
      "From classroom practitioner to education infrastructure builder. 12+ years shaping how teaching works — plus a portfolio of EdTech projects and curriculum design.",
    type: "website",
  },
};

const expertise = [
  {
    title: "Reading Interventionist",
    description: "Specialized in diagnosing and closing literacy gaps using structured, research-backed methods.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Science of Reading Certified",
    description: "Trained in the evidence base behind how children learn to read — phonics, fluency, comprehension, and beyond.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Curriculum Designer",
    description: "Creates standards-aligned, classroom-tested lessons that educators and families can use immediately.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Multilingual Learner Specialist",
    description: "Deep expertise supporting English learners with culturally responsive, linguistically informed instruction.",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    title: "EdTech Developer",
    description: "Building AI-supported instructional tools that give educators cognitive leverage in their daily work.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Digital Marketing Trained",
    description: "Understands content strategy, SEO, and conversion — bridging education expertise with reach.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const philosophy = [
  {
    statement: "Teaching is infrastructure, not performance.",
    detail: "The best teaching systems run whether you had coffee or not. I design tools that create leverage, not dependency.",
  },
  {
    statement: "Research should be usable, not just publishable.",
    detail: "Evidence-based practice only matters if it reaches classrooms. I translate research into ready-to-use resources.",
  },
  {
    statement: "Every learner deserves access — regardless of language or starting point.",
    detail: "Multilingual learners and students with skill gaps deserve tools designed for their reality, not adapted as an afterthought.",
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
    href: "/products/assessalign",
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
    href: "/products/lessons",
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
    link: "https://www.shecodes.io/projects/2651626?_gl=1*15h5bjp*_gcl_au*MTg4OTQwNTg2LjE3NjUzODk1ODE.",
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
    link: "https://www.shecodes.io/projects/2603943?_gl=1*1v0bu1k*_gcl_au*MTg4OTQwNTg2LjE3NjUzODk1ODE.",
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

const headshotExists = fs.existsSync(path.join(process.cwd(), "public", "headshot.jpg"));

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ─── Identity Hero ─── */}
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero-bg" aria-hidden="true">
          <div className="about-hero-circle about-hero-circle--1" />
          <div className="about-hero-circle about-hero-circle--2" />
        </div>
        <div className="container about-hero-container">
          <div className="about-hero-badge">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Practitioner &rarr; Builder &rarr; Strategist</span>
          </div>
          <h1 id="about-heading" className="about-hero-title">
            I Build the Infrastructure
            <br />
            <span className="about-hero-title-accent">That Makes Teaching Sustainable</span>
          </h1>
          <p className="about-hero-desc">
            12+ years as an educator, reading interventionist, and curriculum designer.
            Now building AI-powered tools and research-backed resources that give
            teachers leverage and give families confidence.
          </p>
          <div className="about-hero-actions">
            <Link href="/services" className="about-hero-cta-primary">
              Work With Me
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/shop" className="about-hero-cta-secondary">
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Narrative Arc ─── */}
      <section className="about-narrative section" aria-labelledby="narrative-heading">
        <div className="container">
          <div className="about-narrative-grid">
            {/* Image / Visual */}
            <div className="about-narrative-visual">
              <div className="about-narrative-image">
                {headshotExists ? (
                  <Image
                    src="/headshot.jpg"
                    alt="Michelle Van Slyke — Educator, Reading Interventionist, and EdTech Developer"
                    width={400}
                    height={500}
                    className="about-headshot"
                    style={{ borderRadius: "var(--radius-lg, 1rem)", objectFit: "cover", width: "100%", height: "auto" }}
                    priority
                  />
                ) : (
                  <div className="about-narrative-placeholder">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p>Add headshot.jpg to /public</p>
                  </div>
                )}
              </div>
              <div className="about-narrative-accent" aria-hidden="true" />
            </div>

            {/* Story Content */}
            <div className="about-narrative-content">
              <p className="about-section-label">My Story</p>
              <h2 id="narrative-heading" className="about-section-title">
                From Classroom Teacher to Education Architect
              </h2>
              <div className="about-narrative-text">
                <p>
                  I started where most educators start — overwhelmed, under-resourced,
                  and running on passion. Over 12 years in the classroom, I became a
                  reading interventionist, a curriculum designer, and the person
                  colleagues called when something needed to actually work.
                </p>
                <p>
                  Along the way, I earned Science of Reading certification, developed
                  expertise supporting multilingual learners, and realized that the
                  biggest problem in education isn&apos;t a lack of talent — it&apos;s
                  a lack of infrastructure.
                </p>
                <p>
                  So I started building. First came ready-to-teach lessons. Then came
                  consulting. Now I&apos;m developing AI-powered instructional tools
                  that give educators the leverage they&apos;ve always deserved.
                </p>
                <p>
                  <strong>The Rooted Learner</strong> is the ecosystem I wish I&apos;d
                  had: lessons that save time, strategies backed by research, tools
                  that actually work, and a community that understands the job.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-number">12+</span>
                  <span className="about-stat-label">Years in Education</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">K–8</span>
                  <span className="about-stat-label">Focused Practice</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">Resources Built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section className="about-timeline section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="about-timeline-header">
            <p className="about-section-label">Career Path</p>
            <h2 id="timeline-heading" className="about-section-title">
              Professional Journey
            </h2>
          </div>

          <div className="about-timeline-list">
            <div className="about-timeline-item">
              <div className="about-timeline-dot" aria-hidden="true" />
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">Classroom Teacher</h3>
                <p className="about-timeline-desc">K-8 educator focused on literacy and intervention</p>
                <span className="about-timeline-date">2012-2020</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-dot" aria-hidden="true" />
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">Reading Interventionist</h3>
                <p className="about-timeline-desc">Specialized in diagnosing and closing literacy gaps</p>
                <span className="about-timeline-date">2018-2024</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-dot" aria-hidden="true" />
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">Curriculum Designer</h3>
                <p className="about-timeline-desc">Standards-aligned lesson design and assessment</p>
                <span className="about-timeline-date">2020-Present</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-dot" aria-hidden="true" />
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">EdTech Developer</h3>
                <p className="about-timeline-desc">Building AI-powered tools for educators</p>
                <span className="about-timeline-date">2024-Present</span>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-dot" aria-hidden="true" />
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">Founder, The Rooted Learner</h3>
                <p className="about-timeline-desc">Education infrastructure company</p>
                <span className="about-timeline-date">2025-Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Grid ─── */}
      <section className="about-expertise section" aria-labelledby="expertise-heading">
        <div className="container">
          <div className="about-expertise-header">
            <p className="about-section-label">Areas of Expertise</p>
            <h2 id="expertise-heading" className="about-section-title">
              What I Bring to the Table
            </h2>
            <p className="about-expertise-desc">
              A rare combination of deep classroom experience, research training,
              technical skill, and strategic thinking.
            </p>
          </div>

          <div className="about-expertise-grid">
            {expertise.map((item) => (
              <div key={item.title} className="about-expertise-card">
                <div className="about-expertise-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="about-expertise-card-title">{item.title}</h3>
                <p className="about-expertise-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects & Portfolio ─── */}
      <section id="projects" className="pf-featured section" aria-labelledby="projects-heading">
        <div className="portfolio-container">
          <div className="pf-section-header">
            <p className="pf-section-label">Projects &amp; Portfolio</p>
            <h2 id="projects-heading" className="pf-section-title">
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
                    <Link href="/services" className="pf-flagship-secondary">
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
            <p className="pf-section-label">Learning Projects</p>
            <h2 id="dev-heading" className="pf-section-title">
              Learning Projects
            </h2>
            <p className="pf-section-desc">
              Technical learning projects from my development training — demonstrating coding fundamentals and growth.
            </p>
          </div>

          <div className="pf-dev-grid">
            {devProjects.map((project) => (
              <article key={project.title} className="pf-dev-card">
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

      {/* ─── Philosophy ─── */}
      <section className="about-philosophy section-lg" aria-labelledby="philosophy-heading">
        <div className="container">
          <div className="about-philosophy-header">
            <p className="about-section-label">What I Believe</p>
            <h2 id="philosophy-heading" className="about-section-title about-section-title--light">
              Guiding Principles
            </h2>
          </div>
          <div className="about-philosophy-grid">
            {philosophy.map((item, index) => (
              <div key={index} className="about-philosophy-card">
                <span className="about-philosophy-number">{String(index + 1).padStart(2, "0")}</span>
                <blockquote className="about-philosophy-statement">
                  &ldquo;{item.statement}&rdquo;
                </blockquote>
                <p className="about-philosophy-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results Statement ─── */}
      <section className="about-proof section" aria-labelledby="proof-heading">
        <div className="container">
          <div className="about-proof-header">
            <p className="about-section-label">Track Record</p>
            <h2 id="proof-heading" className="about-section-title">
              Results That Speak
            </h2>
          </div>
          <div className="about-proof-grid" style={{ justifyContent: "center" }}>
            <div className="about-proof-card" style={{ maxWidth: "40rem", textAlign: "center" }}>
              <div className="about-proof-stars" aria-label="Results statement">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="about-proof-star" style={{ width: "2rem", height: "2rem", color: "var(--earth, #5C6B4D)", fill: "none" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="about-proof-quote">
                In my 12+ years as a reading interventionist, I&apos;ve built
                literacy systems that moved 80% of struggling readers up at
                least one level per semester. Now I help schools build these
                systems at scale.
              </p>
              <p className="about-proof-author">
                Launching Spring 2026 &mdash; reviews from real customers coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conversion Fork ─── */}
      <section className="about-fork section" aria-labelledby="fork-heading">
        <div className="container">
          <h2 id="fork-heading" className="sr-only">Next Steps</h2>
          <div className="about-fork-grid">
            {/* Consulting Path */}
            <div className="about-fork-card about-fork-card--consulting">
              <div className="about-fork-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="about-fork-title">Need Personalized Support?</h3>
              <p className="about-fork-desc">
                Whether you&apos;re a school implementing new systems, or an educator
                building a plan — let&apos;s talk strategy.
              </p>
              <Link href="/services" className="about-fork-btn about-fork-btn--primary">
                Explore Consulting
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Lessons Path */}
            <div className="about-fork-card about-fork-card--lessons">
              <div className="about-fork-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="about-fork-title">Ready-to-Use Lessons</h3>
              <p className="about-fork-desc">
                Standards-aligned curriculum for educators and families. Download,
                teach, and reclaim your time.
              </p>
              <Link href="/shop" className="about-fork-btn about-fork-btn--secondary">
                Browse Lesson Library
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
