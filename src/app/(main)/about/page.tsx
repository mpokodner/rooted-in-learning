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
  title: "About Michelle Pokodner | The Rooted Learner",
  description:
    "12+ year educator, reading interventionist, curriculum designer, and full-stack developer. I diagnose where district systems break and build what fixes them.",
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
    title: "About Michelle Pokodner | The Rooted Learner",
    description:
      "I started as a classroom teacher trying to make disconnected systems work. Over time, I realized the problem wasn't effort — it was infrastructure. So I started building what didn't exist.",
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

/* ─── Portfolio Projects Grid ─── */
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michelle Pokodner",
  jobTitle: "Curricular Solutions Architect",
  url: "https://www.therootedlearner.com/about",
  worksFor: {
    "@type": "Organization",
    name: "The Rooted Learner",
    url: "https://www.therootedlearner.com",
  },
  description:
    "12+ year classroom veteran, reading interventionist, curriculum designer, and full-stack developer. I diagnose where district curriculum systems break and build what fixes them.",
  sameAs: [
    "https://www.linkedin.com/in/michelle-pokodner-edtech/",
    "https://www.instagram.com/rootedinlearninged/",
    "https://www.youtube.com/@TheRootedLearner",
  ],
  knowsAbout: [
    "Reading Intervention",
    "Science of Reading",
    "Curriculum Design",
    "Multilingual Learner Support",
    "EdTech Development",
    "AI in Education",
  ],
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
            <span>Curricular Solutions Architect</span>
          </div>
          <h1 id="about-heading" className="about-hero-title">
            I Started as a Classroom Teacher
            <br />
            <span className="about-hero-title-accent">Trying to Make Disconnected Systems Work.</span>
          </h1>
          <p className="about-hero-desc">
            Over time, I realized the problem wasn&apos;t effort &mdash; it was
            infrastructure. So I started building what didn&apos;t exist.
          </p>
          <div className="about-hero-actions">
            <Link href="/services" className="about-hero-cta-primary">
              See How I Work with Districts
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
                    alt="Michelle Pokodner — Curricular Solutions Architect and Full-Stack Developer"
                    width={400}
                    height={500}
                    className="about-headshot"
                    style={{ borderRadius: "var(--radius-lg, 1rem)", objectFit: "cover", width: "100%", height: "auto" }}
                    priority
                  />
                ) : (
                  <div
                    className="about-narrative-placeholder"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      aspectRatio: "4 / 5",
                      borderRadius: "var(--radius-lg, 1rem)",
                      background: "linear-gradient(135deg, var(--earth) 0%, var(--earth-dark) 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(4rem, 8vw, 6rem)",
                        fontWeight: 800,
                        color: "rgba(255,255,255,0.25)",
                        letterSpacing: "-0.03em",
                        userSelect: "none",
                      }}
                      aria-hidden="true"
                    >
                      MP
                    </span>
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
                  I started as a classroom teacher trying to make disconnected
                  systems work. Over 12 years in K&ndash;8 classrooms, I became
                  a reading interventionist, a curriculum designer, and the
                  person colleagues called when something needed to actually
                  function.
                </p>
                <p>
                  Over time, I realized the problem wasn&apos;t effort &mdash;
                  it was infrastructure. Curriculum and assessments weren&apos;t
                  aligned. Multilingual learners couldn&apos;t access core
                  instruction. Tools operated in isolation. Teachers were
                  carrying the burden manually.
                </p>
                <p>
                  So I started building what didn&apos;t exist. First came
                  curriculum overlays. Then standards-aligned assessments. Then
                  full-stack instructional tools like AssessAlign. Now I
                  diagnose where district systems break and build what fixes
                  them.
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0 1rem" }}>
                <Link href="/services" className="about-hero-cta-primary" style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}>
                  See How I Work with Districts
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: "1rem", height: "1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Impact Stats */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-number">12+</span>
                  <span className="about-stat-label">Years in Education</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">1–8</span>
                  <span className="about-stat-label">Focused Practice</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">Resources Built</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guiding Principles — inline under My Story */}
          <div className="about-principles">
            <h3 className="about-principles-title">Guiding Principles</h3>
            <div className="about-principles-grid">
              {philosophy.map((item, index) => (
                <div key={index} className="about-principles-card">
                  <span className="about-principles-number">{String(index + 1).padStart(2, "0")}</span>
                  <blockquote className="about-principles-statement">
                    &ldquo;{item.statement}&rdquo;
                  </blockquote>
                  <p className="about-principles-detail">{item.detail}</p>
                </div>
              ))}
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
                <p className="about-timeline-desc">Grades 1–8 educator focused on literacy and intervention</p>
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

      {/* ─── Portfolio Projects Grid ─── */}
      <section id="projects" className="pf-dev section" aria-labelledby="dev-heading">
        <div className="portfolio-container">
          <div className="pf-section-header">
            <p className="pf-section-label">Portfolio</p>
            <h2 id="dev-heading" className="pf-section-title">
              Portfolio Projects
            </h2>
            <p className="pf-section-desc">
              Technical projects demonstrating coding fundamentals, AI integration, and full-stack development skills.
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

      {/* ─── End CTA ─── */}
      <section className="about-end-cta section" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)", backgroundColor: "var(--earth, #5C6B4A)", textAlign: "center" }}>
        <div className="container">
          <Link href="/contact" className="about-hero-cta-primary" style={{ fontSize: "var(--text-lg, 1.125rem)", padding: "1rem 2.5rem" }}>
            Start with a System Audit
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: "1.25rem", height: "1.25rem" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
