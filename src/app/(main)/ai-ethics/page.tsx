import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "AI Ethics & Data Transparency | The Rooted Learner",
  description:
    "How The Rooted Learner uses AI responsibly in education. My commitment to student data privacy, transparency, and ethical AI practices.",
  alternates: { canonical: "/ai-ethics" },
};

export default function AIEthicsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <h1 className="legal-hero-title">AI Ethics &amp; Data Transparency</h1>
          <p className="legal-hero-subtitle">
            My commitment to responsible AI use in education. I believe
            transparency isn&apos;t optional. It&apos;s foundational.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-body">
        <div className="legal-container">
          <div className="legal-callout">
            <p>
              <strong>My AI Philosophy:</strong> I use AI to amplify great
              teaching, never to replace it. Every AI feature I build is
              designed to save educators time while keeping them in control of
              instruction.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">How I Use AI</h2>
            <p className="legal-text">
              AI is used in the following ways across the platform:
            </p>
            <ul className="legal-list">
              <li>
                <strong>AssessAlign</strong>, for question generation, standards
                alignment, and feedback suggestions
              </li>
              <li>
                <strong>Content creation assistance</strong>, for lesson plans
                (always human-reviewed)
              </li>
              <li>
                <strong>Website development and optimization</strong>
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">AI Provider</h2>
            <p className="legal-text">
              I use Anthropic&apos;s Claude as the primary AI engine. I chose
              Claude specifically because:
            </p>
            <ul className="legal-list">
              <li>
                Anthropic&apos;s mission centers on AI safety and responsible
                development
              </li>
              <li>Claude does not use API data to train its models</li>
              <li>
                Anthropic&apos;s education-safety positioning aligns with school
                district requirements
              </li>
              <li>
                Claude&apos;s Constitutional AI approach prioritizes helpful,
                harmless, and honest responses
              </li>
            </ul>
            <p className="legal-text">
              As a Claude ambassador candidate, I am deeply invested in
              demonstrating how responsible AI can transform education while
              protecting students.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Student Data Protection</h2>
            <ul className="legal-list">
              <li>
                I never send personally identifiable student information to AI
                providers
              </li>
              <li>
                All data sent for AI processing is anonymized and aggregated
              </li>
              <li>
                Student names, IDs, grades, and demographic data are stripped
                before any AI processing
              </li>
              <li>Schools retain full ownership of their student data at all times</li>
              <li>
                AI-processed data is not stored by providers beyond the
                immediate request
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Educator Control</h2>
            <p className="legal-text">
              AI should support educator judgment, not override it.
            </p>
            <ul className="legal-list">
              <li>
                All AI-generated content is presented as suggestions, not mandates
              </li>
              <li>
                Educators review and approve AI-generated assessment questions
                before student use
              </li>
              <li>
                AI features can be disabled at any time without losing core
                functionality
              </li>
              <li>
                Full transparency is provided into how AI suggestions are generated
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">What I Don&apos;t Do</h2>
            <ul className="legal-list">
              <li>I don&apos;t use AI to make decisions about individual students</li>
              <li>
                I don&apos;t share student data with AI providers for model training
              </li>
              <li>
                I don&apos;t use AI for student surveillance or behavioral monitoring
              </li>
              <li>
                I don&apos;t replace educator expertise with AI recommendations
              </li>
              <li>
                I don&apos;t collect biometric or sensitive personal data
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Compliance &amp; Frameworks</h2>
            <p className="legal-text">
              These AI practices are designed to align with:
            </p>
            <ul className="legal-list">
              <li>FERPA (Family Educational Rights and Privacy Act)</li>
              <li>COPPA (Children&apos;s Online Privacy Protection Act)</li>
              <li>State-level student data privacy laws</li>
              <li>The UNESCO Recommendation on the Ethics of AI</li>
              <li>Anthropic&apos;s Acceptable Use Policy</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">Continuous Improvement</h2>
            <p className="legal-text">
              AI in education is evolving rapidly. I commit to:
            </p>
            <ul className="legal-list">
              <li>
                Regular audits of all AI systems for bias and accuracy
              </li>
              <li>Updating practices as best practices evolve</li>
              <li>Engaging with educator feedback on AI features</li>
              <li>
                Publishing updates to this page as AI capabilities change
              </li>
            </ul>
          </div>

          <div className="legal-contact">
            <h3 className="legal-contact-title">Questions About These AI Practices?</h3>
            <p>
              I welcome dialogue. Email:{" "}
              <a href="mailto:hello@therootedlearner.com">
                hello@therootedlearner.com
              </a>{" "}
              or use the <Link href="/contact">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
