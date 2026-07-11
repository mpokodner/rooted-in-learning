import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import "./projects/portfolio.css";
import AboutContactForm from "./AboutContactForm";
import SocialLinks from "@/components/SocialLinks";

import reactDictionaryImg from "./projects/images/react-dictionary-project.png";
import aiPoetryImg from "./projects/images/PoemGenerator_Thumbnail.png";
import dataVizImg from "./projects/images/pythonadvanced.png";
import weatherAppImg from "./projects/images/react-weather-app.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Rooted Learner is co-founded by Michelle and Chris Pokodner — educators who bridge pedagogy and production code to build the classroom tools and district software they wished existed.",
  keywords: [
    "education technology",
    "co-founders",
    "multilingual learner specialist",
    "curriculum design",
    "AI for educators",
    "district software",
    "edtech development",
    "school systems design",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — The Rooted Learner",
    description:
      "Co-founded by Michelle and Chris Pokodner — educators who bridge pedagogy and production code to build tools and software for districts.",
    type: "website",
  },
};

const thesisCards = [
  {
    title: "Roots",
    description:
      "The learner stays grounded in who they are — language, identity, community. We never rip them out of their soil.",
    icon: (
      <>
        <path d="M12 22V12" />
        <path d="M12 12c-2 0-5-2-5-6 0 0 5 0 5 4" />
        <path d="M12 12c2 0 5-2 5-6 0 0-5 0-5 4" />
        <path d="M8 22h8" />
      </>
    ),
    terra: false,
  },
  {
    title: "Greenhouse",
    description:
      "The conditions we build around them — curriculum, assessment, pathways, and tech tuned to fit, not to an imagined average.",
    icon: (
      <>
        <path d="M3 21V9l9-6 9 6v12z" />
        <path d="M3 9h18M12 3v18M7.5 6v15M16.5 6v15" />
      </>
    ),
    terra: false,
  },
  {
    title: "The grower",
    description:
      "Us. The one who reads what the climate needs before adjusting it — which is, literally, the diagnostic, audit-first model.",
    icon: (
      <>
        <path d="M12 2v6M5 9l2 2M19 9l-2 2" />
        <path d="M4 14c0 4 3.5 8 8 8s8-4 8-8c-3 0-5 1-8 4-3-3-5-4-8-4Z" />
      </>
    ),
    terra: true,
  },
];

const credentials = [
  "12+ years in K–8 classrooms (Michelle)",
  "Reading intervention, curriculum design & WIDA / multilingual specialist",
  "AI Solutions Specialist & SIS Administrator (Chris)",
  "Full-stack developers building district software and classroom tools",
];

const stats = [
  { num: "12+", label: "Years in classrooms" },
  { num: "100+", label: "Resources built" },
  { num: "K–8", label: "Lived experience" },
  { num: "2–3 wk", label: "Audit to clarity" },
];

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

const headshotExists = fs.existsSync(
  path.join(process.cwd(), "public", "headshot.jpg")
);

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Rooted Learner",
  url: "https://www.therootedlearner.com",
  description:
    "Practical AI training, standards-aligned classroom tools, and district software from educators who still teach.",
  founder: [
    {
      "@type": "Person",
      name: "Michelle Pokodner",
      jobTitle: "Co-Founder & Curriculum Architect",
      knowsAbout: ["Reading Intervention", "Curriculum Design", "Multilingual Learner Support", "Science of Reading"],
    },
    {
      "@type": "Person",
      name: "Chris Pokodner",
      jobTitle: "Co-Founder & AI Solutions Architect",
      knowsAbout: ["AI Solutions", "Workflow Automation", "SIS Administration", "District Software"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/michelle-pokodner-edtech/",
    "https://www.instagram.com/rootedinlearninged/",
    "https://www.youtube.com/@TheRootedLearner",
    "https://www.pinterest.com/rootedinlearninged/",
  ],
};

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <section className="section hero" aria-labelledby="about-heading">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">About · our story</span>
            <h1 id="about-heading" className="display mt-3">
              Pedagogy meets{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                production code.
              </span>
            </h1>
            <p className="lead mt-3">
              The Rooted Learner is co-founded by Michelle and Chris Pokodner —
              educators who bridge 12+ years of classroom expertise with AI
              solutions, workflow automation, and district software development.
              We build the tools we wished existed.
            </p>
            <div className="btn-row mt-4">
              <Link href="/work-with-me" className="btn btn-primary btn-lg">
                Work with us
              </Link>
              <Link href="/about/approach" className="btn btn-outline btn-lg">
                See our approach
              </Link>
            </div>
          </div>
          <div className="reveal">
            <div
              className="ph"
              style={{
                minHeight: "clamp(320px, 40vw, 440px)",
                padding: 0,
                overflow: "hidden",
              }}
            >
              {headshotExists ? (
                <Image
                  src="/headshot.jpg"
                  alt="Michelle and Chris Pokodner, co-founders of The Rooted Learner"
                  width={440}
                  height={550}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              ) : (
                <span className="ph-label">portrait · Michelle &amp; Chris Pokodner</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section--beige section" aria-labelledby="origin-heading">
        <div className="container container--narrow">
          <span className="eyebrow reveal">The origin</span>
          <h2 id="origin-heading" className="h-lg mt-3 reveal">
            Built inside the classroom — not above it.
          </h2>
          <div className="stack mt-4 reveal">
            <p className="muted">
              The Rooted Learner didn&apos;t start as a business. It started as two
              educators getting tired of waiting for better tools and deciding to
              build them from the inside out.
            </p>
            <p className="muted">
              <strong>Michelle</strong> brings 12+ years in K–8 classrooms — reading
              intervention, curriculum design, and multilingual-learner
              specialization. She&apos;s the practitioner who knows which questions
              a district evaluator is really asking, because she&apos;s been on both
              sides of that table.
            </p>
            <p className="muted">
              <strong>Chris</strong> brings AI solutions architecture, workflow
              automation, and SIS administration from a decade inside Conroe ISD.
              He built Hall Pass, ScholarGen, and the technical infrastructure that
              turns audit findings into working district software.
            </p>
            <p className="muted">
              Together, we bridge pedagogy and production code. That combination is
              why we can deliver a curriculum audit <em>and</em> the custom technology
              to implement it — not one or the other.
            </p>
          </div>
          <blockquote className="pullquote mt-6 reveal">
            &ldquo;The decisions made in curriculum meetings determine what&apos;s possible in
            classrooms — and what&apos;s possible in classrooms determines what&apos;s possible
            for students.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* The greenhouse thesis */}
      <section className="section" aria-labelledby="thesis-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The thesis</span>
            <h2 id="thesis-heading" className="h-xl mt-3">
              Roots, greenhouse, grower.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              It doesn&apos;t compete with &ldquo;rooted.&rdquo; It completes it. The point
              was never the ideal classroom — it&apos;s the conditions these learners actually
              need.
            </p>
          </div>
          <div className="grid grid-3 mt-6">
            {thesisCards.map((card) => (
              <article key={card.title} className="card reveal">
                <div
                  className={`card-icon${card.terra ? " card-icon--terra" : ""}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section--earth section" aria-labelledby="credentials-heading">
        <div className="container glass">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">Why us</span>
              <h2
                id="credentials-heading"
                className="h-xl mt-3"
                style={{ color: "#fff" }}
              >
                A rare combination in this market.
              </h2>
              <p className="lead mt-3">
                Classroom expertise. AI fluency. District operations. Full-stack development.
                Most advisors hand you a vision deck. We give you the vision and the working
                system.
              </p>
              <ul className="tick-list mt-4">
                {credentials.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="grid grid-2" style={{ gap: "1rem" }}>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderColor: "rgba(255,255,255,0.16)",
                    }}
                  >
                    <div className="stat-num">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section
        id="projects"
        className="pf-dev section section--beige"
        aria-labelledby="dev-heading"
      >
        <div className="portfolio-container">
          <div className="pf-section-header reveal">
            <p className="pf-section-label">Portfolio</p>
            <h2 id="dev-heading" className="pf-section-title">
              Portfolio Projects
            </h2>
            <p className="pf-section-desc">
              Technical projects demonstrating coding fundamentals, AI integration, and
              full-stack development skills.
            </p>
          </div>

          <div className="pf-dev-grid">
            {devProjects.map((project) => (
              <article key={project.title} className="pf-dev-card reveal">
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                <div className="pf-dev-content">
                  <span
                    className={`pf-dev-category pf-dev-category--${project.categoryColor}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="pf-dev-title">{project.title}</h3>
                  <p className="pf-dev-desc">{project.description}</p>
                  <div className="pf-dev-tags">
                    {project.skills.map((skill) => (
                      <span key={skill} className="pf-dev-tag">
                        {skill}
                      </span>
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
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="section--beige section"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">Start the conversation</span>
              <h2 id="contact-heading" className="h-xl mt-3">
                Tell us what&apos;s growing.
              </h2>
              <p className="lead mt-3" style={{ maxWidth: "42ch" }}>
                Whether you&apos;re founding a school, reimagining one, or building the tools
                that serve them — start by telling us what you&apos;re trying to grow.
              </p>
              <p className="muted mt-4">
                <strong>
                  <a href="mailto:admin@therootedlearner.com">
                    admin@therootedlearner.com
                  </a>
                </strong>
                <br />
                Available nationwide &amp; internationally · remote &amp; on-site
              </p>
              <p className="muted mt-2">Built with intention in Baltimore, MD</p>
              <div className="mt-4">
                <p className="muted" style={{ marginBottom: "0.75rem", fontWeight: 600 }}>Connect with us</p>
                <SocialLinks
                  platforms={["instagram", "youtube", "pinterest", "linkedin", "email"]}
                  location="about"
                />
              </div>
            </div>
            <div className="reveal">
              <AboutContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
