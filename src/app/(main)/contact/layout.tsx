import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Rooted Learner",
  description:
    "Get in touch with Michelle. Consulting inquiries, curriculum questions, collaboration opportunities — let's connect.",
  keywords: [
    "contact",
    "educator",
    "consulting",
    "speaking",
    "collaboration",
    "curriculum inquiry",
  ],
  openGraph: {
    title: "Contact | The Rooted Learner",
    description: "Questions, consulting inquiries, or collaborations — reach out and I'll respond within 48 hours.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
