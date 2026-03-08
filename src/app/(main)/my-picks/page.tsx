import type { Metadata } from "next";
import Link from "next/link";
import "./favorites.css";

export const metadata: Metadata = {
  title: "My Picks | The Rooted Learner",
  description:
    "Curated list of must-have tools, books, and gear for educators. Personally tested and recommended by a veteran teacher.",
  keywords: [
    "teacher favorites",
    "educator tools",
    "classroom supplies",
    "teaching books",
    "educational gear",
    "AI tools for teachers",
  ],
  alternates: {
    canonical: "/my-picks",
  },
  openGraph: {
    title: "My Picks | The Rooted Learner",
    description:
      "Educator-recommended must-haves, personally tested and recommended.",
    type: "website",
  },
};

const categories = [
  { id: "all", label: "All Tools" },
  { id: "tools", label: "Digital Tools" },
  { id: "books", label: "Books" },
  { id: "gear", label: "Classroom Gear" },
  { id: "ai", label: "AI Tools" },
];

const favorites = [
  { id: 1, title: "Rocketbook Smart Notebook", category: "Gear", description: "Reusable notebook that syncs to cloud. Perfect for quick notes and lesson ideas.", link: "#" },
  { id: 2, title: "Notion for Teachers", category: "Tools", description: "The all-in-one workspace I use to plan lessons, track students, and organize my life.", link: "#", badge: "My #1 Pick" },
  { id: 3, title: "The First Days of School", category: "Books", description: "A classic that every educator should read. Practical classroom management strategies.", link: "#" },
  { id: 4, title: "Blue Light Glasses", category: "Gear", description: "Essential for screen-heavy days. These have saved my eyes during virtual teaching.", link: "#" },
  { id: 5, title: "Canva Pro for Education", category: "Tools", description: "Free for educators! Create stunning worksheets, presentations, and classroom decor.", link: "#", badge: "Best for Materials" },
  { id: 6, title: "Atomic Habits", category: "Books", description: "Game-changer for building routines — for yourself and your students.", link: "#" },
  { id: 7, title: "Google Keep", category: "Tools", description: "My go-to for quick lesson ideas and to-do lists. Syncs everywhere and the color coding helps me organize by subject. Perfect for teachers who think in sticky notes.", link: "#" },
  { id: 8, title: "Kami", category: "Tools", description: "The best PDF annotation tool for classrooms. Students can write directly on worksheets, and I can give real-time feedback. Free for educators.", link: "#", badge: "Best for Digital" },
  { id: 9, title: "Flocabulary", category: "Tools", description: "Hip-hop based learning videos that my students actually ask to watch again. Vocabulary retention skyrockets when you add a beat.", link: "#" },
  { id: 10, title: "Read Aloud by Google", category: "Tools", description: "Free Chrome extension that reads any webpage aloud. Game-changer for struggling readers and multilingual learners accessing content independently.", link: "#" },
  { id: 11, title: "Teach Like a Champion", category: "Books", description: "Doug Lemov's techniques transformed my classroom management. The 'Cold Call' and 'No Opt Out' strategies alone are worth the read.", link: "#" },
  { id: 12, title: "The Reading Strategies Book", category: "Books", description: "Jennifer Serravallo's book lives on my desk. Over 300 strategies organized by goal — I reference it daily during small group planning.", link: "#", badge: "Best for Literacy" },
  { id: 13, title: "Wireless Presenter Clicker", category: "Gear", description: "Moving around the room while presenting changed everything. Students stay engaged when you're not anchored to a desk.", link: "#" },
  { id: 14, title: "Noise-Canceling Headphones", category: "Gear", description: "Essential for grading and planning after school. Also great for students during independent work time.", link: "#" },
  { id: 15, title: "Document Camera", category: "Gear", description: "I use mine daily for modeling writing, showing student work, and interactive read-alouds. Way more versatile than I expected.", link: "#" },
];

export default function MyPicksPage() {
  return (
    <div className="min-h-screen bg-(--neutral-bg)">
      {/* Hero Section */}
      <section className="favs-hero">
        <div className="favs-container">
          <div className="favs-hero-inner">
            <p className="favs-hero-label">Educator-Recommended</p>
            <h1 className="favs-hero-title">My Picks</h1>
            <p className="favs-hero-desc">
              Every tool here is something I&apos;ve personally used or
              thoroughly vetted. I earn a small commission on some purchases —
              but I only recommend what I&apos;d use in my own classroom.
            </p>
          </div>
        </div>
      </section>

      {/* FTC Affiliate Disclosure */}
      <section className="favs-disclosure" aria-label="Affiliate disclosure">
        <div className="favs-container">
          <p className="favs-disclosure-text">
            <strong>Disclosure:</strong> Some links on this page are affiliate
            links. If you purchase through these links, I may earn a small
            commission at no extra cost to you. I only recommend tools I
            personally use and trust. See our full affiliate disclosure in
            our{" "}
            <Link href="/terms" className="favs-disclosure-link">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="favs-filter">
        <div className="favs-container">
          <div className="favs-filter-inner">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                className={`favs-filter-btn${index === 0 ? " favs-filter-btn--active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="favs-grid-section">
        <div className="favs-container">
          <div className="favs-grid">
            {favorites.map((item) => (
              <div key={item.id} className="fav-card">
                <div className="fav-card-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>

                <div className="fav-card-badges">
                  {item.badge && (
                    <span className="fav-card-badge fav-card-badge--highlight">
                      {item.badge}
                    </span>
                  )}
                  <span className="fav-card-badge">{item.category}</span>
                </div>
                <h3 className="fav-card-title">{item.title}</h3>
                <p className="fav-card-desc">{item.description}</p>

                <span
                  className="fav-card-link"
                  style={{ opacity: 0.6, cursor: "default" }}
                >
                  Links coming soon
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="favs-crosslinks">
        <div className="favs-container">
          <div className="favs-crosslinks-grid">
            <Link href="/teacher-shop" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">Teacher Shop</h3>
              <p className="favs-crosslink-desc">
                Lessons, tools, and resources built by a teacher, for teachers.
              </p>
              <span className="favs-crosslink-cta">
                Browse Shop
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
              </span>
            </Link>

            <Link href="/edtech-tools" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">EdTech Tools</h3>
              <p className="favs-crosslink-desc">
                AI-powered tools I&apos;m building for modern educators.
              </p>
              <span className="favs-crosslink-cta">
                Explore Tools
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
              </span>
            </Link>

            <Link href="/work-with-me" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">Work With Me</h3>
              <p className="favs-crosslink-desc">
                Strategic consulting for schools, educators, and families.
              </p>
              <span className="favs-crosslink-cta">
                Learn More
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
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
