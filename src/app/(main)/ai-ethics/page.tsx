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
              I use Claude as a writing and planning assistant for educator-facing work. I chose it because:
            </p>
            <ul className="legal-list">
              <li>
                Anthropic&apos;s mission centers on AI safety and responsible
                development
              </li>
              <li>
                Educator-facing drafts stay in a person&apos;s hands before they
                are published
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
              <li>Please do not submit student information through website forms.</li>
              <li>
                Early conversations and demonstrations use sample or adult-provided
                information.
              </li>
              <li>
                Any future use of student information will be scoped with the
                district before implementation.
              </li>
              <li>
                We will document what an AI tool does and does not process before
                student information is used.
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
                Educators review AI-assisted materials before they use them with
                students
              </li>
              <li>
                Educator-facing drafts should be identifiable as drafts, not as
                finished student decisions
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">What I Don&apos;t Do</h2>
            <ul className="legal-list">
              <li>I don&apos;t use AI to make decisions about individual students</li>
              <li>
                Student information is not collected by the website forms, and this
                site does not send it to an AI provider
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
              I keep these frameworks in view while designing educator-facing AI workflows. This list is not a certification:
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
              <a href="mailto:admin@therootedlearner.com">
                admin@therootedlearner.com
              </a>{" "}
              or use the <Link href="/contact">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
