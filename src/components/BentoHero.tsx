import Link from "next/link";
import Image from "next/image";
import { PRODUCT_NAME } from "@/config/site";

export default function BentoHero() {
  return (
    <section className="bento-hero">
      <Link href="/aligned" className="bento-tile bento-tile--hero">
        <Image
          src="/images/teachers-hero.png"
          alt="Tree ring cross-section illustration with equity, wholeness, innovation"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="bento-hero-overlay">
          <span className="bento-pill">Built by Educators</span>
          <h1>The Rooted Learner</h1>
          <p>
            {PRODUCT_NAME} helps teachers regroup students from what they can actually do — not from a single score.
          </p>
        </div>
        <div className="bento-hover-overlay bento-hover-overlay--hero">
          <span className="bento-hover-eyebrow">{PRODUCT_NAME}</span>
          <h2>See the standard. Form the group.</h2>
          <ul>
            <li>Item-level grouping</li>
            <li>Maryland CCR codes</li>
            <li>Teacher-facing, not student login</li>
          </ul>
          <span className="bento-hover-cta-btn">See {PRODUCT_NAME} &rarr;</span>
        </div>
      </Link>

      <Link href="/districts" className="bento-tile bento-tile--combined">
        <Image
          src="/images/districts-hero.png"
          alt="Watercolor illustration of a school building"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bento-districts-overlay">
          <h2>For schools and districts</h2>
          <p>A conversation about your data, your agreement, and whether {PRODUCT_NAME} belongs in the stack</p>
        </div>
        <div className="bento-hover-overlay bento-hover-overlay--districts">
          <span className="bento-hover-eyebrow">For school and district leaders</span>
          <h2>I lead a school or district</h2>
          <ul>
            <li>Fit, agreements, and next steps — no public price list</li>
          </ul>
          <span className="bento-hover-cta-btn">Request a conversation &rarr;</span>
        </div>
      </Link>

      <Link href="/educators" className="bento-tile bento-tile--shop">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h2>For educators</h2>
          <p>Claude guide, the TPT shop, and the teacher toolkit</p>
        </div>
        <svg className="bento-tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
        <div className="bento-hover-overlay">
          <span className="bento-hover-eyebrow">Classroom-ready</span>
          <ul>
            <li>Claude AI and Cowork guide</li>
            <li>Teachers Pay Teachers shop</li>
            <li>Teacher toolkit</li>
          </ul>
        </div>
      </Link>

      <Link href="/educators#start" className="bento-tile bento-tile--guide">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
          </svg>
          <span className="bento-guide-eyebrow">FREE GUIDE</span>
          <h2>The Educator&apos;s Guide to Claude AI</h2>
          <p>15 chapters, 50+ pages &mdash; free PDF for teachers getting started with AI.</p>
        </div>
        <svg className="bento-tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
        <div className="bento-hover-overlay">
          <span className="bento-hover-eyebrow">Free Resource</span>
          <ul>
            <li>15 chapters for educators</li>
            <li>50+ pages, practical tips</li>
          </ul>
          <span className="bento-hover-cta-btn">Get the free guide &rarr;</span>
        </div>
      </Link>

      <Link href="/blog" className="bento-tile bento-tile--learn">
        <div className="bento-tile-content">
          <svg className="bento-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <h2>Blog</h2>
          <p>Field notes from inside the work</p>
        </div>
        <svg className="bento-tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
        <div className="bento-hover-overlay">
          <span className="bento-hover-eyebrow">From the field</span>
          <ul>
            <li>Diagnosis and grouping</li>
            <li>What holds up in a classroom</li>
          </ul>
        </div>
      </Link>
    </section>
  );
}
