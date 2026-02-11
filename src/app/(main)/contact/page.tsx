import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rooted in Learning",
  description: "Get in touch with Michelle. Questions, collaborations, speaking engagements — let's connect.",
  keywords: ["contact", "educator", "consulting", "speaking", "collaboration"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
                Get in Touch
              </p>
              <h1 className="text-h1 text-[var(--text-dark)] mb-4">Contact</h1>
              <p className="text-[var(--text-muted)]">
                Have a question, want to collaborate, or just want to say hello? Fill out the form below and I&apos;ll get back to you within 48 hours.
              </p>
            </div>

            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)] bg-white">
                    <option value="">Select a topic...</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="support">Support / Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)] resize-none" placeholder="How can I help you?" />
                </div>
                <button type="submit" className="w-full btn btn-lg btn-primary rounded-[var(--radius-lg)]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
