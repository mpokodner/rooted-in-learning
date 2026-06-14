import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import "./projects/portfolio.css";
import AboutContactForm from "./AboutContactForm";

import reactDictionaryImg from "./projects/images/react-dictionary-project.png";
import aiPoetryImg from "./projects/images/PoemGenerator_Thumbnail.png";
import dataVizImg from "./projects/images/pythonadvanced.png";
import weatherAppImg from "./projects/images/react-weather-app.png";

export const metadata: Metadata = {
  title: "About | Greenhouse Schools",
  description:
    "The Rooted Learner is led by Michelle Pokodner — a current educator, multilingual-learner specialist, and full-stack builder helping new and reimagined schools design coherent systems from seed.",
  keywords: [
    "Greenhouse Schools",
    "education consultant",
    "multilingual learner specialist",
    "curriculum design",
    "science of reading",
    "new school advisory",
    "edtech development",
    "school systems design",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | The Rooted Learner — Greenhouse Schools",
    description:
      "We read the climate before we adjust it. Michelle Pokodner helps new and reimagined schools design coherent, learner-centered systems from the ground up.",
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
  "12+ years in K–8 classrooms",
  "Reading interventionist & curriculum designer",
  "Science of Reading & WIDA / multilingual specialist",
  "Full-stack developer building instructional tools",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michelle Pokodner",
  jobTitle: "Curriculum-Integrity Partner",
  url: "https://www.therootedlearner.com/about",
  worksFor: {
    "@type": "Organization",
    name: "The Rooted Learner — Greenhouse Schools",
    url: "https://www.therootedlearner.com",
  },
  description:
    "Current educator, multilingual-learner specialist, and full-stack builder helping new and reimagined schools design coherent systems from seed.",
  sameAs: [
    "https://www.linkedin.com/in/michelle-pokodner-edtech/",
    "https://www.instagram.com/rootedinlearninged/",
    "https://www.youtube.com/@TheRootedLearner",
  ],
  knowsAbout: [
    "Greenhouse Schools",
    "Reading Intervention",
    "Science of Reading",
    "Curriculum Design",
    "Multilingual Learner Support",
    "EdTech Development",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="section hero" aria-labelledby="about-heading">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">About · the grower</span>
            <h1 id="about-heading" className="display mt-3">
              We read the climate{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                before
              </span>{" "}
              we adjust it.
            </h1>
            <p className="lead mt-3">
              The Rooted Learner is led by Michelle Pokodner — a current classroom
              educator, multilingual-learner specialist, and full-stack builder. We help
              new and reimagined schools design coherent, learner-centered systems from
              the ground up.
            </p>
            <div className="btn-row mt-4">
              <Link href="/services#audit" className="btn btn-primary btn-lg">
                Work with us
              </Link>
              <Link href="/about#contact" className="btn btn-outline btn-lg">
                Start a conversation
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
                  alt="Michelle Pokodner, curriculum-integrity partner and full-stack builder"
                  width={440}
                  height={550}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              ) : (
                <span className="ph-label">portrait · Michelle Pokodner</span>
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
              The Rooted Learner didn&apos;t start as a business. It started as a teacher
              getting tired of waiting for better tools and deciding to build them from the
              inside out. Twelve years in K–8 classrooms, reading intervention, curriculum
              design, and a growing certainty that the problem was never the people — it was
              that the systems were never designed to work together.
            </p>
            <p className="muted">
              Entrenched systems are nearly impossible to change from the inside. But new
              schools are a greenhouse: you can build the right system there from seed, with
              no bureaucracy fighting you. The proof we generate in those rooms is the lever
              that eventually moves the harder systems too. That&apos;s the shift — from
              fixing what&apos;s broken to designing what gets to start right.
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
                Current educator. Multilingual-learner specialist. Full-stack builder.
                AI-fluent. In the new-school advisory space, most advisors hand you a vision
                deck. We give you the vision and the working system.
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

      {/* Research flywheel */}
      <section className="section" aria-labelledby="learning-zones-heading">
        <div className="container">
          <div className="feature-band feature-band--reverse">
            <div className="reveal">
              <span className="eyebrow">The long game</span>
              <h2 id="learning-zones-heading" className="h-lg mt-3">
                Learning Zones — the book that writes itself.
              </h2>
              <p className="muted mt-3">
                Every school we work with can join a simple data partnership. Year over year,
                that accumulates proprietary, longitudinal evidence on what makes learning
                communities thrive — &ldquo;Blue Zones, but for education.&rdquo; It&apos;s our
                case studies, our moat, and the spine of a body of research, all as a byproduct
                of doing the work well.
              </p>
              <div className="mt-4">
                <Link href="/learn/blog" className="link-arrow">
                  Read the field notes <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="reveal">
              <div className="ph" style={{ minHeight: "260px" }}>
                <span className="ph-label">map · learning zones research</span>
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
