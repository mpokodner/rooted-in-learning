import Link from "next/link";
import Image from "next/image";

export default function BentoHero() {
  return (
    <section className="bento-hero">
      {/* Hero tile — "I Teach" funnel */}
      <Link href="/for-teachers" className="bento-tile bento-tile--hero">
        <Image
          src="/images/teachers-hero.png"
          alt="Tree ring cross-section illustration with equity, wholeness, innovation"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="bento-hero-overlay">
          <span className="bento-pill">Independent Education Press</span>
          <h1>The Rooted Learner</h1>
          <p>Curriculum, tools, and honest insight for educators who grow their own way.</p>
        </div>
        <div className="bento-hover-overlay bento-hover-overlay--hero">
          <h2>I teach</h2>
          <ul>
            <li>ELD lessons</li>
            <li>MCAP units</li>
            <li>Standards-based Microlearning</li>
          </ul>
        </div>
      </Link>

      {/* Districts tile — "I Lead" funnel */}
      <Link href="/for-districts" className="bento-tile bento-tile--combined">
        <Image
          src="/images/districts-hero.png"
          alt="Watercolor illustration of a school building"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bento-districts-overlay">
          <h2>For Districts</h2>
          <p>Software and support for the schools we serve</p>
        </div>
        <div className="bento-hover-overlay bento-hover-overlay--districts">
          <h2>I lead a school or district</h2>
          <ul>
            <li>Hall Pass &mdash; student movement management your district owns</li>
          </ul>
          <p className="bento-hover-cta">Free 60 day pilot</p>
        </div>
      </Link>

      {/* Shop tile — bottom left */}
      <Link href="/shop" className="bento-tile bento-tile--shop">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h2>Shop</h2>
          <p>Books, guides &amp; printables</p>
        </div>
        <svg className="bento-tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
        <div className="bento-hover-overlay">
          <span className="bento-hover-eyebrow">In the Shop</span>
          <ul>
            <li>MCAP-aligned units</li>
            <li>Differentiated resources</li>
            <li>Microlearning lessons</li>
          </ul>
        </div>
      </Link>

      {/* Learn tile — bottom right */}
      <Link href="/learn" className="bento-tile bento-tile--learn">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <h2>Learn</h2>
          <p>Courses, the Learn Hub &amp; teacher toolkit</p>
        </div>
        <svg className="bento-tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
        <div className="bento-hover-overlay">
          <span className="bento-hover-eyebrow">What You&apos;ll Learn</span>
          <ul>
            <li>AI Educator Course</li>
            <li>Free teaching tips</li>
          </ul>
        </div>
      </Link>
    </section>
  );
}
