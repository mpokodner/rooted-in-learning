import type { Metadata } from "next";
import Link from "next/link";
import "./learn.css";
import NewsletterForm from "@/components/NewsletterForm";
import CourseWaitlist from "@/components/learn/CourseWaitlist";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "AI tools, strategies, and training that give teachers their time back. Free how-to videos, a weekly newsletter, and a course built to prevent burnout.",
  keywords: [
    "AI for teachers",
    "teacher burnout prevention",
    "AI education course",
    "educator AI training",
    "classroom AI tools",
    "lesson planning AI",
    "teacher professional development",
  ],
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learn",
    description:
      "Free tutorials, weekly tips, and a course designed to help educators use AI to save time and prevent burnout.",
    type: "website",
  },
};

const upcomingVideos = [
  {
    title: "Getting Started with Claude for Lesson Planning",
    description: "Set up your first AI workflow and plan a full week in under an hour.",
  },
  {
    title: "AI-Powered Differentiation in 5 Minutes",
    description: "How to use AI to create tiered materials without tripling your prep.",
  },
  {
    title: "Data-Driven Planning Without the Spreadsheet",
    description: "Turn assessment data into next-day instructional moves — with AI doing the heavy lifting.",
  },
];

const shopCategories = [
  {
    title: "Lesson Plans",
    desc: "Standards-aligned, ready to teach",
    icon: <path d="M4 4h16v16H4z M8 8h8M8 12h8M8 16h5" />,
  },
  {
    title: "Assessment Tools",
    desc: "Formative and summative templates",
    icon: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
  },
  {
    title: "ELD Resources",
    desc: "Multilingual learner supports",
    icon: <><path d="M5 8h14M5 12h9M5 16h12" /><circle cx="18" cy="14" r="3" /></>,
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="section hero" aria-labelledby="learn-heading">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Learn</span>
            <h1 id="learn-heading" className="display mt-3">
              AI tools and strategies that give you{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                your time back.
              </span>
            </h1>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Practical training, weekly tips, and classroom-ready resources — built
              by educators who know what burnout looks like and how to fight it.
            </p>
            <div className="btn-row mt-4">
              <a href="#newsletter" className="btn btn-terra btn-lg">
                Join the newsletter
              </a>
              <a href="#course" className="btn btn-outline btn-lg">
                Explore the course
              </a>
            </div>
            <div className="badge-row mt-4">
              <span className="chip">Lesson Planning</span>
              <span className="chip">AI Workflows</span>
              <span className="chip">Burnout Prevention</span>
              <span className="chip">Data-Driven Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section--beige section" id="newsletter" aria-labelledby="newsletter-heading">
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">Weekly newsletter</span>
          <h2 id="newsletter-heading" className="h-xl mt-3 reveal">
            Grow your inbox — not your workload.
          </h2>
          <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: "48ch" }}>
            Every week: one AI tip you can use Monday, what&apos;s new in the shop,
            and strategies that actually save time. Written by a teacher who&apos;s
            still in it.
          </p>
          <NewsletterForm
            source="learn-page"
            buttonText="Subscribe"
            sendFreebie={false}
            tag="newsletter"
            formClassName="capture-form mt-4 reveal"
            buttonClassName="btn btn-terra"
            inputClassName="capture-form-input"
          />
          <p className="note mt-2 reveal">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Free Videos */}
      <section className="section" id="videos" aria-labelledby="videos-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Free videos</span>
            <h2 id="videos-heading" className="h-xl mt-3">
              Watch and learn — at your own pace.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Short, practical how-to videos on using AI in your classroom. New
              episodes on YouTube every week.
            </p>
          </div>
          <div className="learn-videos-grid mt-6">
            {upcomingVideos.map((video) => (
              <article key={video.title} className="learn-video-card reveal">
                <div className="learn-video-placeholder">
                  <svg className="learn-video-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="learn-video-badge">Coming soon</span>
                </div>
                <h3 className="learn-video-title">{video.title}</h3>
                <p className="learn-video-desc">{video.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 reveal">
            <a
              href="https://www.youtube.com/@TheRootedLearner"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Subscribe on YouTube <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* AI Course Waitlist */}
      <section className="section--earth section" id="course" aria-labelledby="course-heading">
        <div className="container glass">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">Coming soon</span>
              <h2 id="course-heading" className="h-xl mt-3" style={{ color: "#fff" }}>
                The AI Educator Course
              </h2>
              <p className="lead mt-3">
                A step-by-step course for teachers ready to use AI to optimize
                workflows, plan with data-driven insights, and reclaim the hours
                that burnout steals. Built by educators, for educators.
              </p>
              <ul className="tick-list mt-4">
                <li><CheckIcon />Optimize daily workflows with AI tools you can trust</li>
                <li><CheckIcon />Plan lessons using data-driven insights — not guesswork</li>
                <li><CheckIcon />Reclaim your time and protect against burnout</li>
              </ul>
            </div>
            <div className="reveal">
              <div className="learn-course-signup">
                <h3>Be the first to know when enrollment opens.</h3>
                <CourseWaitlist />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="section--beige section" aria-labelledby="shop-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">In the shop</span>
            <h2 id="shop-heading" className="h-xl mt-3">
              Classroom-ready resources you can use this week.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Books, guides, and printables — field-tested and standards-aligned.
            </p>
          </div>
          <div className="grid grid-3 mt-6">
            {shopCategories.map((cat) => (
              <Link
                key={cat.title}
                href="/shop"
                className="card card--hover reveal"
                style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
              >
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {cat.icon}
                  </svg>
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 reveal">
            <Link href="/shop" className="link-arrow">
              Browse the shop <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="section" aria-labelledby="explore-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Explore more</span>
            <h2 id="explore-heading" className="h-xl mt-3">
              Free resources and field notes.
            </h2>
          </div>
          <div className="learn-explore-grid mt-6">
            <Link href="/learn/teacher-toolkit" className="card card--hover reveal" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 7l9-4 9 4-9 4-9-4Z" />
                  <path d="M21 10v6M7 9v5c0 1.5 2.2 3 5 3s5-1.5 5-3V9" />
                </svg>
              </div>
              <h3>Teacher Toolkit</h3>
              <p>Free, classroom-ready downloads — templates, frameworks, and the Claude AI guide.</p>
              <div className="mt-4">
                <span className="link-arrow">Get the toolkit <ArrowIcon /></span>
              </div>
            </Link>

            <Link href="/learn/blog" className="card card--hover reveal" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
              <div className="card-icon card-icon--terra">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <h3>Insights &amp; Blog</h3>
              <p>Field notes from inside the work — audit teardowns, build-vs-buy, and what actually works.</p>
              <div className="mt-4">
                <span className="link-arrow">Read the blog <ArrowIcon /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* District CTA */}
      <section className="section--beige section">
        <div className="container container--narrow text-center">
          <p className="lead mx-auto reveal" style={{ maxWidth: "42ch" }}>
            If you&apos;re a school or district trying to solve this at a systems level...
          </p>
          <div className="btn-row mt-3 reveal" style={{ justifyContent: "center" }}>
            <Link href="/work-with-me" className="btn btn-outline">
              Work with us <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
