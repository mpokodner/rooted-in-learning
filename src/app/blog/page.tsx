import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rooted in Learning",
  description:
    "Thoughtful insights for intentional learning at home. Explore evidence-based teaching strategies and educational philosophy.",
  openGraph: {
    title: "The Pedagogy Blog | Rooted in Learning",
    description:
      "Thoughtful insights for intentional learning at home.",
  },
};

const features = [
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    label: "Pedagogy Articles",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    label: "Teaching Insights",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    label: "EdTech Reviews",
  },
];

export default function BlogPage() {
  const progress = 60;

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Tree Illustration */}
            <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B9B7A]/20 to-[#F5EFE7] rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-28 h-28 md:w-36 md:h-36" viewBox="0 0 100 100" fill="none">
                  {/* Tree trunk */}
                  <rect x="45" y="55" width="10" height="30" fill="#5C6B4A" opacity="0.7" rx="2" />
                  {/* Roots */}
                  <path d="M45 80 Q35 85 25 82" stroke="#5C6B4A" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M55 80 Q65 85 75 82" stroke="#5C6B4A" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M48 85 Q40 92 30 88" stroke="#5C6B4A" strokeWidth="2" opacity="0.4" fill="none" />
                  <path d="M52 85 Q60 92 70 88" stroke="#5C6B4A" strokeWidth="2" opacity="0.4" fill="none" />
                  {/* Tree crown */}
                  <ellipse cx="50" cy="35" rx="32" ry="30" fill="#6B7B5E" opacity="0.3" />
                  <ellipse cx="38" cy="40" rx="22" ry="20" fill="#6B7B5E" opacity="0.4" />
                  <ellipse cx="62" cy="40" rx="22" ry="20" fill="#6B7B5E" opacity="0.4" />
                  <ellipse cx="50" cy="28" rx="24" ry="22" fill="#5C6B4A" opacity="0.5" />
                  <ellipse cx="50" cy="22" rx="18" ry="16" fill="#5C6B4A" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-xs mx-auto mb-10">
              <div className="flex items-center justify-between text-xs text-[#666666] mb-2">
                <span className="uppercase tracking-[0.15em] font-semibold">Cultivating</span>
                <span className="font-bold text-[#2D2D2D]">{progress}%</span>
              </div>
              <div className="h-2 bg-[#E8DED0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C17B5C] to-[#D4A57B] rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="hero-heading text-[#2D2D2D] mb-2">
              Something impactful is
            </h1>
            <h2 className="text-h1 md:text-display-md text-[#6B7B5E] mb-8">
              growing
            </h2>

            <p className="text-[#666666] text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              We&apos;re cultivating a new space for pedagogy articles, educational insights, and curated resources. Our digital ecosystem is expanding to better serve educators and learners alike.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-3.5 px-5 border-2 border-[#E8DED0] rounded-[0.75rem] flex-1 bg-white text-[#2D2D2D] focus:outline-none focus:border-[#5C6B4A]"
                />
                <button className="bg-[#5C6B4A] text-white px-6 py-3.5 rounded-[0.75rem] text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#4A5638] transition-all shadow-md">
                  Notify me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-xs text-[#999999]">
              Be the first to know when we launch. No spam, just seeds of knowledge.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-[#E8DED0] shadow-sm">
                  <span className="text-[#5C6B4A]">{feature.icon}</span>
                  <span className="text-sm font-medium text-[#2D2D2D]">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
