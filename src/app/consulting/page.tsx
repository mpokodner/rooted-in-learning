import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting | Rooted in Learning",
  description:
    "Personalized educational consulting for schools, homeschool families, and teacher-entrepreneurs. Book a discovery call today.",
  keywords: ["educational consulting", "teacher coaching", "curriculum consulting", "edtech consulting"],
  openGraph: {
    title: "Consulting | Rooted in Learning",
    description: "Personalized educational consulting and coaching services.",
    type: "website",
  },
};

const services = [
  {
    title: "School Tech Integration",
    description: "Help your school or district successfully implement new technology tools with training and support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Homeschool Curriculum Design",
    description: "Work one-on-one to build a customized curriculum that fits your family's goals and learning style.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Teacher Side Hustle Coaching",
    description: "Turn your expertise into income. Learn how to create and sell educational products online.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ConsultingPage() {
  const progress = 80;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#C17B5C] text-white text-[10px] font-bold uppercase tracking-wide rounded-full mb-6">
              Coming Soon
            </span>
            <h1 className="hero-heading text-[#2D2D2D] mb-6">
              Consulting &amp; Coaching
            </h1>
            <p className="text-[#666666] text-base md:text-lg leading-[1.7] mb-8">
              Personalized support for schools, homeschool families, and teacher-entrepreneurs. Let&apos;s build something great together.
            </p>

            {/* Progress Bar */}
            <div className="max-w-xs mx-auto mb-10">
              <div className="flex items-center justify-between text-xs text-[#666666] mb-2">
                <span className="uppercase tracking-[0.15em] font-semibold">Launching Soon</span>
                <span className="font-bold text-[#2D2D2D]">{progress}%</span>
              </div>
              <div className="h-2 bg-[#E8DED0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C17B5C] to-[#D4A57B] rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-lg bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold text-[#C17B5C] uppercase tracking-[0.15em] mb-4">
              What&apos;s Coming
            </p>
            <h2 className="text-h2 text-[#2D2D2D]">
              Services Preview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-[1.25rem] p-6 md:p-8 border border-[#E8DED0]"
              >
                <div className="w-12 h-12 rounded-[0.75rem] bg-[#5C6B4D] text-white flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{service.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section-lg bg-[#5C6B4D]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-4">
              Be the First to Know
            </h2>
            <p className="text-[#C5D1B8] mb-8">
              Join the waitlist and get early access to consulting services, plus a special launch discount.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 rounded-[0.75rem] border-2 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-[#5C6B4D] px-6 py-3.5 rounded-[0.75rem] font-semibold text-sm hover:bg-[#F5F3F0] transition-all">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
