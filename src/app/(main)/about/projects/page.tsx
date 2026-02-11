import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./portfolio.css";

import reactDictionaryImg from "./images/react-dictionary-project.png";
import aiPoetryImg from "./images/PoemGenerator_Thumbnail.png";
import dataVizImg from "./images/pythonadvanced.png";
import weatherAppImg from "./images/react-weather-app.png";

export const metadata: Metadata = {
  title: "Projects | Rooted in Learning",
  description: "Explore Michelle's portfolio — from curriculum design to full-stack web development.",
  keywords: ["portfolio", "projects", "web development", "curriculum design", "educational technology"],
};

const projects = [
  {
    category: "REACT DEVELOPMENT",
    title: "Interactive React Dictionary",
    description:
      "Ideal for students learning new vocabulary. Interactive React Dictionary organized in categories-nouns, verbs, adjectives. Supplemented with images to support vocabulary acquisition.",
    skills: ["React.js", "Component-Based Hooks", "Dynamic Rendering", "Data Fetching", "State Management"],
    status: "Published" as const,
    link: "https://www.shecodes.io/cohorts/2675/projects/2651626?_gl=1*1e7xlw1*_gcl_au*NDAxODI1MDY4LjE3NDczOTExNjAuMTU5NTA2MjEyMC4xNzQ4Njk2MzY0LjE3NDg2OTY5MDI.",
    image: reactDictionaryImg,
  },
  {
    category: "AI PROMPT ENGINEERING",
    title: "AI Poetry Generator with API Integration",
    description:
      "Interactive poetry generator application leveraging artificial intelligence API integration for creative content generation. Features responsive web design, JavaScript DOM manipulation, and modern UI/UX principles.",
    skills: ["AI Integration", "Prompt Engineering", "API Integration", "Javascript DOM", "Responsive Design"],
    status: "Published" as const,
    link: "https://www.shecodes.io/cohorts/2521/projects/2603943",
    image: aiPoetryImg,
  },
  {
    category: "PYTHON DATA SCIENCE",
    title: "Internet Population Data Visualization",
    description:
      "Advanced Python data visualization project analyzing global internet population statistics by continent using object-oriented programming, data manipulation libraries, and interactive charts.",
    skills: ["Python OOP", "Data Visualization", "Data Manipulation", "File Processing"],
    status: "Published" as const,
    link: "https://www.shecodes.io/cohorts/2618/projects/2634791",
    image: dataVizImg,
  },
  {
    category: "REACT DEVELOPMENT",
    title: "Weather Application Using React.js",
    description:
      "Interactive weather application with real-time data from OpenWeather API. Features city search, 5-day forecast, temperature unit toggling, and responsive mobile-first design.",
    skills: ["React.js", "JavaScript ES6+", "Component Architecture", "State Management", "Responsive Design", "Modern CSS"],
    status: "Published" as const,
    link: "https://www.shecodes.io/cohorts/2661/projects/2646774?_gl=1*ukbm8c*_gcl_au*NDAxODI1MDY4LjE3NDczOTExNjAuMTU5NTA2MjEyMC4xNzQ4Njk2MzY0LjE3NDg2OTY5MDI.",
    image: weatherAppImg,
  },
];

const credentials = [
  { label: "Certified Educator", detail: "15+ Years Classroom Experience" },
  { label: "Full-Stack Developer", detail: "React · Next.js · Python" },
  { label: "Curriculum Designer", detail: "K–12 Literacy & EdTech" },
  { label: "SheCodes Graduate", detail: "Front-End · React · Python" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-(--neutral-bg)">
      {/* Hero with Credentials */}
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <div className="portfolio-hero-inner">
            <p className="portfolio-hero-label">Skills &amp; Portfolio</p>
            <h1 className="portfolio-hero-title">Projects &amp; Work</h1>
            <p className="portfolio-hero-desc">
              From curriculum design to full-stack development — a showcase of work bridging education and technology.
            </p>

            {/* Credential Badges in Hero */}
            <div className="hero-credentials">
              {credentials.map((cred) => (
                <div key={cred.label} className="hero-credential">
                  <span className="hero-credential-label">{cred.label}</span>
                  <span className="hero-credential-detail">{cred.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid — 2×2 */}
      <section className="projects-section">
        <div className="portfolio-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                {/* Image with Hover Overlay */}
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    placeholder="blur"
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-overlay"
                  >
                    <span className="project-overlay-btn">
                      View Project
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Category Badge */}
                <span
                  className={`project-category ${
                    project.category.includes("CURRICULUM")
                      ? "project-category--curriculum"
                      : project.category.includes("DATA") || project.category.includes("PYTHON")
                      ? "project-category--data"
                      : "project-category--dev"
                  }`}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h2 className="project-card-title">{project.title}</h2>

                {/* Description */}
                <p className="project-card-desc">{project.description}</p>

                {/* Skills */}
                <div className="project-skills-section">
                  <h3 className="project-skills-heading">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                    Skills &amp; Technologies
                  </h3>
                  <div className="project-tags">
                    {project.skills.map((skill) => (
                      <span key={skill} className="project-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Footer: status + link */}
                <div className="project-card-footer">
                  <span className="project-status project-status--published">
                    {project.status}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials / About Footer Section */}
      <section className="credentials-section">
        <div className="portfolio-container">
          <div className="credentials-inner">
            <p className="credentials-label">About the Developer</p>
            <h2 className="credentials-title">Built by an Educator Who Codes</h2>
            <p className="credentials-desc">
              With 15+ years of classroom experience, certifications in education and literacy coaching, and training in full-stack web development through SheCodes, I bring a unique perspective to every project — blending pedagogy with modern technology.
            </p>
            <div className="credentials-grid">
              {credentials.map((cred) => (
                <div key={cred.label} className="credential-card">
                  <h3 className="credential-card-label">{cred.label}</h3>
                  <p className="credential-card-detail">{cred.detail}</p>
                </div>
              ))}
            </div>
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
