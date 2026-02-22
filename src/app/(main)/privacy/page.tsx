import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy | The Rooted Learner",
  description:
    "How The Rooted Learner collects, uses, and protects your personal information.",
  robots: "noindex, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information when you use The Rooted Learner.
          </p>
          <span className="legal-hero-date">Last updated: February 2026</span>
        </div>
      </section>

      {/* Content */}
      <section className="legal-body">
        <div className="legal-container">

          <div className="legal-callout">
            <p>
              <strong>In short:</strong> We only collect the information we need to provide you with great educational resources.
              We never sell your data to third parties, and we give you full control over your information.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">1. Who We Are</h2>
            <p className="legal-text">
              The Rooted Learner (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is an educational resource platform operated by Michelle Van Slyke, based in Baltimore, Maryland. Our website at therootedlearner.com provides teaching resources, teacher tools, consulting services, curated product recommendations, and educational blog content for K&ndash;8 educators, schools, and families.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">2. Information We Collect</h2>
            <p className="legal-text">
              We collect information in the following ways:
            </p>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#2D2D2D" }}>Information you provide directly</h3>
            <ul className="legal-list">
              <li>Account registration details (name, email address, password)</li>
              <li>Newsletter subscription information (email address)</li>
              <li>Contact form submissions (name, email, message content)</li>
              <li>Purchase and transaction information when buying resources or products</li>
              <li>Any other information you choose to share with us</li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#2D2D2D" }}>Information collected automatically</h3>
            <ul className="legal-list">
              <li>Device information (browser type, operating system, screen resolution)</li>
              <li>Usage data (pages visited, time spent, navigation patterns)</li>
              <li>IP address and approximate geographic location</li>
              <li>Referring website or search terms that led you to our site</li>
              <li>Cookies and similar tracking technologies (see Section 5)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">3. How We Use Your Information</h2>
            <p className="legal-text">We use the information we collect to:</p>
            <ul className="legal-list">
              <li>Provide, maintain, and improve our educational resources and services</li>
              <li>Process your account registration and manage your membership</li>
              <li>Send our weekly newsletter with teaching strategies, free resources, and updates (only if you subscribe)</li>
              <li>Process purchases and deliver digital products</li>
              <li>Respond to your questions, comments, and support requests</li>
              <li>Analyze usage patterns to improve our website and content</li>
              <li>Protect against fraud, abuse, and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">4. How We Share Your Information</h2>
            <p className="legal-text">
              <strong>We never sell your personal information.</strong> We may share limited information with:
            </p>
            <ul className="legal-list">
              <li><strong>Service providers</strong> who help us operate our website (hosting, email delivery, analytics, payment processing). These providers only access information necessary to perform their services and are bound by confidentiality obligations.</li>
              <li><strong>Payment processors</strong> to complete transactions securely. We do not store your full credit card details on our servers.</li>
              <li><strong>Legal authorities</strong> when required by law, court order, or to protect the rights, property, or safety of our users or the public.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">5. Cookies &amp; Tracking Technologies</h2>
            <p className="legal-text">
              We use cookies and similar technologies to:
            </p>
            <ul className="legal-list">
              <li><strong>Essential cookies:</strong> Keep you logged in and remember your preferences</li>
              <li><strong>Analytics cookies:</strong> Understand how visitors use our site so we can improve the experience</li>
              <li><strong>Functional cookies:</strong> Remember your settings and personalization choices</li>
            </ul>
            <p className="legal-text">
              We do not use advertising or behavioral tracking cookies. You can control cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">6. Email &amp; Newsletter</h2>
            <p className="legal-text">
              When you subscribe to our newsletter, we use your email address solely to send you educational content, teaching strategies, and occasional updates about our resources. Every email includes a clear unsubscribe link. We use a third-party email service provider to deliver our newsletter, and your email address is stored securely on their platform.
            </p>
            <p className="legal-text">
              We will never add you to our mailing list without your explicit consent.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">7. Data Security</h2>
            <p className="legal-text">
              We take reasonable technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="legal-list">
              <li>Encrypted data transmission (HTTPS/TLS) across our entire site</li>
              <li>Secure password hashing for user accounts</li>
              <li>Regular security reviews and updates</li>
              <li>Limited employee access to personal data on a need-to-know basis</li>
            </ul>
            <p className="legal-text">
              While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We encourage you to use a strong, unique password for your account.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">8. Children&apos;s Privacy</h2>
            <p className="legal-text">
              The Rooted Learner is designed for adult educators, school administrators, and parents/caregivers &mdash; not for children. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please <Link href="/contact">contact us</Link> immediately and we will promptly delete it.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">9. Your Rights &amp; Choices</h2>
            <p className="legal-text">You have the right to:</p>
            <ul className="legal-list">
              <li><strong>Access</strong> the personal information we hold about you</li>
              <li><strong>Correct</strong> inaccurate or incomplete information</li>
              <li><strong>Delete</strong> your account and associated data</li>
              <li><strong>Unsubscribe</strong> from our newsletter at any time</li>
              <li><strong>Opt out</strong> of non-essential cookies via your browser settings</li>
            </ul>
            <p className="legal-text">
              To exercise any of these rights, please <Link href="/contact">contact us</Link>. We will respond to your request within 30 days.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">10. Third-Party Links</h2>
            <p className="legal-text">
              Our website may contain links to third-party sites, products, or services (including affiliate links in our Favorites section). We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party site you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">11. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="legal-contact">
            <h3 className="legal-contact-title">Questions About Your Privacy?</h3>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, we&apos;re here to help.
            </p>
            <p>
              Email: <a href="mailto:hello@therootedlearner.com">hello@therootedlearner.com</a>
              <br />
              Or use our <Link href="/contact">contact form</Link>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
