import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Use | The Rooted Learner",
  description:
    "Terms and conditions governing the use of The Rooted Learner website, resources, and services.",
  robots: "noindex, follow",
};

export default function TermsOfUsePage() {
  return (
    <div>
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="legal-hero-title">Terms of Use</h1>
          <p className="legal-hero-subtitle">
            These terms govern your use of The Rooted Learner website, resources, and services. By using our site, you agree to these terms.
          </p>
          <span className="legal-hero-date">Last updated: February 2026</span>
        </div>
      </section>

      {/* Content */}
      <section className="legal-body">
        <div className="legal-container">

          <div className="legal-section">
            <h2 className="legal-section-title">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing or using The Rooted Learner website at therootedlearner.com (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Use and our <Link href="/privacy">Privacy Policy</Link>. If you do not agree to these terms, please do not use the Site.
            </p>
            <p className="legal-text">
              We reserve the right to update these terms at any time. Continued use of the Site after changes constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">2. About Our Services</h2>
            <p className="legal-text">
              The Rooted Learner provides educational resources, including but not limited to:
            </p>
            <ul className="legal-list">
              <li>Downloadable lesson plans, curriculum materials, and teaching resources</li>
              <li>Teacher tools and technology tutorials</li>
              <li>Curated product recommendations and affiliate-linked favorites</li>
              <li>Educational consulting services for schools, districts, and individual educators</li>
              <li>Blog articles with teaching strategies and professional development content</li>
              <li>A weekly email newsletter</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">3. User Accounts</h2>
            <p className="legal-text">
              Some features of the Site require a registered account. When creating an account, you agree to:
            </p>
            <ul className="legal-list">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activity under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="legal-text">
              We reserve the right to suspend or terminate accounts that violate these terms, contain false information, or are used for unauthorized purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">4. Intellectual Property &amp; Content Ownership</h2>
            <div className="legal-callout">
              <p>
                <strong>Important:</strong> All original content on The Rooted Learner &mdash; including lessons, tutorials, blog posts, graphics, logos, and website design &mdash; is owned by Michelle Van Slyke / The Rooted Learner and is protected by copyright law.
              </p>
            </div>
            <p className="legal-text">
              <strong>What you may do:</strong>
            </p>
            <ul className="legal-list">
              <li>Download and use purchased resources for your personal classroom or homeschool use</li>
              <li>Share links to our content (with proper attribution)</li>
              <li>Print resources for use within your own educational setting</li>
            </ul>
            <p className="legal-text">
              <strong>What you may not do:</strong>
            </p>
            <ul className="legal-list">
              <li>Redistribute, resell, or share downloaded resources with others (including via email, shared drives, or social media)</li>
              <li>Modify our resources and claim them as your own</li>
              <li>Use our content for commercial purposes without written permission</li>
              <li>Copy, scrape, or reproduce website content in bulk</li>
              <li>Remove copyright notices or attribution from any materials</li>
            </ul>
            <p className="legal-text">
              If you&apos;d like to use our content beyond personal classroom use (for professional development, district-wide distribution, etc.), please <Link href="/contact">contact us</Link> to discuss licensing options.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">5. Purchases &amp; Digital Products</h2>
            <p className="legal-text">
              When purchasing resources through the Site:
            </p>
            <ul className="legal-list">
              <li>All sales of digital products are final. Due to the nature of downloadable content, we generally do not offer refunds once a file has been accessed or downloaded.</li>
              <li>If you experience a technical issue with a download, please <Link href="/contact">contact us</Link> and we will work to resolve it.</li>
              <li>Prices are subject to change without notice. Promotional pricing is valid only during the stated promotion period.</li>
              <li>Purchases grant you a single-user license unless otherwise specified.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">6. Affiliate Links &amp; Recommendations</h2>
            <p className="legal-text">
              Some links on our Site (particularly in our Favorites section) are affiliate links. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you.
            </p>
            <p className="legal-text">
              We only recommend products and tools we have personally used or thoroughly vetted. Affiliate relationships never influence our editorial content or recommendations. All opinions are our own.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">7. Consulting Services</h2>
            <p className="legal-text">
              Consulting engagements (including AssessAlign and other services) are subject to separate agreements between The Rooted Learner and the contracting school, district, or organization. General terms include:
            </p>
            <ul className="legal-list">
              <li>Consulting services are provided on an as-agreed basis with specific deliverables outlined in a proposal or contract</li>
              <li>Content created during consulting engagements remains the intellectual property of The Rooted Learner unless otherwise agreed in writing</li>
              <li>Cancellation and rescheduling policies are specified in individual service agreements</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">8. Acceptable Use</h2>
            <p className="legal-text">
              You agree not to use the Site to:
            </p>
            <ul className="legal-list">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Upload or transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Scrape, crawl, or use automated tools to extract content without permission</li>
              <li>Engage in any activity that disrupts or interferes with the Site&apos;s functionality</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">9. Disclaimer of Warranties</h2>
            <p className="legal-text">
              The Site and all content, resources, and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. While we strive to provide accurate, high-quality educational content:
            </p>
            <ul className="legal-list">
              <li>We do not guarantee that our resources will meet every student&apos;s or classroom&apos;s specific needs</li>
              <li>Educational outcomes may vary based on implementation, student population, and other factors</li>
              <li>We do not guarantee uninterrupted or error-free access to the Site</li>
              <li>Blog content and tutorials are provided for informational purposes and should not be considered a substitute for professional development or specialized training</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">10. Limitation of Liability</h2>
            <p className="legal-text">
              To the fullest extent permitted by law, The Rooted Learner and its owner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our resources. Our total liability for any claim related to our services shall not exceed the amount you paid for the specific product or service in question.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">11. Governing Law</h2>
            <p className="legal-text">
              These Terms of Use are governed by and construed in accordance with the laws of the State of Maryland, United States, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts located in Baltimore City, Maryland.
            </p>
          </div>

          <div className="legal-contact">
            <h3 className="legal-contact-title">Questions About These Terms?</h3>
            <p>
              If you have any questions about these Terms of Use, please reach out.
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
