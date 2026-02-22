import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Accessibility | The Rooted Learner",
  description:
    "Our commitment to making The Rooted Learner accessible to all educators, regardless of ability.",
  robots: "noindex, follow",
};

export default function AccessibilityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h1 className="legal-hero-title">Accessibility</h1>
          <p className="legal-hero-subtitle">
            As educators, we believe everyone deserves equal access to learning resources. We&apos;re committed to making our site usable for all.
          </p>
          <span className="legal-hero-date">Last updated: February 2026</span>
        </div>
      </section>

      {/* Content */}
      <section className="legal-body">
        <div className="legal-container">

          <div className="legal-callout">
            <p>
              <strong>Our commitment:</strong> The Rooted Learner is built with accessibility as a core principle, not an afterthought. We continuously work to ensure our website and resources meet or exceed accessibility standards so that every educator can benefit from our content.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Our Standards</h2>
            <p className="legal-text">
              We strive to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards. These internationally recognized guidelines ensure that web content is perceivable, operable, understandable, and robust for all users, including those with disabilities.
            </p>
            <p className="legal-text">
              Accessibility is an ongoing effort, and we regularly review and improve our site to maintain and enhance compliance.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Accessibility Features</h2>
            <p className="legal-text">
              Here are some of the accessibility features built into The Rooted Learner:
            </p>

            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "1rem", color: "#2D2D2D" }}>Navigation &amp; Structure</h3>
            <ul className="legal-list">
              <li>Semantic HTML with proper heading hierarchy (h1 through h6) for clear content structure</li>
              <li>ARIA landmarks and labels on navigation, main content, and footer regions</li>
              <li>Skip-to-content capability for keyboard users</li>
              <li>Consistent, predictable navigation across all pages</li>
              <li>Clear focus indicators on all interactive elements</li>
            </ul>

            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "1rem", color: "#2D2D2D" }}>Visual Design</h3>
            <ul className="legal-list">
              <li>Sufficient color contrast ratios that meet or exceed WCAG AA requirements</li>
              <li>Information is never conveyed by color alone &mdash; text labels and icons are used alongside color cues</li>
              <li>Responsive design that adapts to different screen sizes, zoom levels, and orientations</li>
              <li>Legible font sizes with scalable typography using relative units</li>
              <li>Reduced motion for users who prefer minimal animation</li>
            </ul>

            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "1rem", color: "#2D2D2D" }}>Content &amp; Media</h3>
            <ul className="legal-list">
              <li>Descriptive alt text on all meaningful images</li>
              <li>Decorative images are hidden from screen readers using appropriate ARIA attributes</li>
              <li>Link text that is descriptive and makes sense out of context</li>
              <li>Form fields with associated labels and clear error messaging</li>
              <li>PDF and downloadable resources created with accessibility in mind</li>
            </ul>

            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "1rem", color: "#2D2D2D" }}>Keyboard &amp; Assistive Technology</h3>
            <ul className="legal-list">
              <li>Full keyboard navigation support across all interactive elements</li>
              <li>Dropdown menus and mobile navigation are operable via keyboard</li>
              <li>Tested with common screen readers (VoiceOver, NVDA)</li>
              <li>No keyboard traps &mdash; users can navigate freely through all content</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Assistive Technology Compatibility</h2>
            <p className="legal-text">
              The Rooted Learner is designed to be compatible with:
            </p>
            <ul className="legal-list">
              <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Screen readers (VoiceOver on macOS/iOS, NVDA and JAWS on Windows, TalkBack on Android)</li>
              <li>Voice recognition software</li>
              <li>Screen magnification tools</li>
              <li>Alternative input devices</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Downloadable Resources</h2>
            <p className="legal-text">
              We make every effort to ensure our downloadable lesson plans, templates, and other educational materials are accessible. This includes:
            </p>
            <ul className="legal-list">
              <li>Using proper heading structures in documents</li>
              <li>Adding alt text to images within downloadable resources</li>
              <li>Using readable fonts and adequate text sizing</li>
              <li>Providing content in commonly accessible formats (PDF, Google Docs)</li>
            </ul>
            <p className="legal-text">
              If you need a resource in an alternative format, please <Link href="/contact">contact us</Link> and we will do our best to accommodate your request.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Known Limitations</h2>
            <p className="legal-text">
              While we work hard to ensure accessibility across our entire site, we acknowledge that some areas may still need improvement. Known limitations include:
            </p>
            <ul className="legal-list">
              <li>Some older downloadable resources may not have full accessibility markup &mdash; we are updating these on an ongoing basis</li>
              <li>Third-party embedded content (such as social media feeds or external video players) may not fully meet our accessibility standards</li>
              <li>User-generated content (such as blog comments, if enabled) may not always follow accessibility best practices</li>
            </ul>
            <p className="legal-text">
              We are actively working to address these limitations and welcome your feedback to help prioritize improvements.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Feedback &amp; Reporting Barriers</h2>
            <p className="legal-text">
              Accessibility is a journey, not a destination. If you encounter any barriers while using The Rooted Learner, we genuinely want to know. Your feedback helps us improve the experience for everyone.
            </p>
            <p className="legal-text">
              When reporting an accessibility issue, it&apos;s helpful to include:
            </p>
            <ul className="legal-list">
              <li>The page URL where the issue occurred</li>
              <li>A description of the problem you encountered</li>
              <li>The assistive technology or browser you were using</li>
              <li>Any suggestions for how we could improve</li>
            </ul>
            <p className="legal-text">
              We aim to respond to all accessibility feedback within 5 business days.
            </p>
          </div>

          <div className="legal-contact">
            <h3 className="legal-contact-title">Report an Accessibility Issue</h3>
            <p>
              We take every report seriously and are committed to resolving accessibility barriers as quickly as possible.
            </p>
            <p>
              Email: <a href="mailto:hello@therootedlearner.com">hello@therootedlearner.com</a>
              <br />
              Or use our <Link href="/contact">contact form</Link>
            </p>
            <p style={{ fontSize: "0.75rem", color: "#8A8A8A", marginBottom: 0 }}>
              Please include &ldquo;Accessibility&rdquo; in the subject line so we can prioritize your message.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
