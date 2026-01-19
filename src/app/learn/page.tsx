import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const featuredArticle = {
  title: 'Unlocking Literacy: The Shift to Structured Literacy in K-5',
  category: 'Science of Reading',
  excerpt: 'An in-depth look at how structured literacy approaches are transforming reading outcomes in elementary education—moving away from balanced literacy models towards data-backed methodologies.',
  image: '👩‍👧',
  readTime: '8 min read',
};

const articles = [
  {
    id: 1,
    title: 'Top 5 Tablets for Interactive Learning in 2024',
    category: 'EdTech Reviews',
    excerpt: 'We tested the latest hardware to find the most durable and student-friendly device...',
    image: '📱',
    date: 'Sep 15, 2024',
    bgColor: 'from-calm-spirit/30 to-gentle-hold',
  },
  {
    id: 2,
    title: 'Implementing Data Walls Without Compromising Privacy',
    category: 'Data-Driven',
    excerpt: 'How to visualize student progress for staff collaboration while maintaining strict...',
    image: '📊',
    date: 'Sep 12, 2024',
    bgColor: 'from-womb-bloom/20 to-gentle-hold',
  },
  {
    id: 3,
    title: 'Universal Design for Learning: A Starter Guide',
    category: 'Differentiation',
    excerpt: 'Practical steps to start implementing UDL principles in your lesson planning to...',
    image: '🎯',
    date: 'Sep 10, 2024',
    bgColor: 'from-moss/15 to-gentle-hold',
  },
  {
    id: 4,
    title: 'Why Micro-Credentialing is the Future of PD',
    category: 'Professional Dev',
    excerpt: 'Moving away from "sit and get" workshops towards competency-based recognition...',
    image: '🎓',
    date: 'Aug 28, 2024',
    bgColor: 'from-sacred-ember/10 to-gentle-hold',
  },
  {
    id: 5,
    title: 'Virtual Reality in History Class: Hype or Helpful?',
    category: 'EdTech Trends',
    excerpt: 'A critical review of VR content available for social studies curriculums and the impact...',
    image: '🥽',
    date: 'Aug 25, 2024',
    bgColor: 'from-soft-presence/20 to-gentle-hold',
  },
  {
    id: 6,
    title: 'Scaffolding Math Problems for Struggling Learners',
    category: 'Instruction',
    excerpt: 'Techniques for breaking down complex equations and concepts without lowering...',
    image: '➗',
    date: 'Aug 22, 2024',
    bgColor: 'from-calm-spirit/20 to-gentle-hold',
  },
];

const categories = [
  { label: 'All', active: true },
  { label: 'Science of Reading', active: false },
  { label: 'EdTech Reviews', active: false },
  { label: 'Data-Driven', active: false },
  { label: 'Differentiation', active: false },
];

const trustBadges = [
  { icon: '✓', label: 'ESSA Level IV', sublabel: 'Evidence-Based' },
  { icon: '📚', label: 'Research-Backed', sublabel: '100+ Citations' },
  { icon: '🔒', label: 'GDPR Compliant', sublabel: 'Privacy-First' },
  { icon: '🏫', label: 'District Trusted', sublabel: '50+ Schools' },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-rooted-earth py-16 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-calm-spirit uppercase tracking-widest mb-3">
              Knowledge Base
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Research & Insights
            </h1>
            <p className="text-calm-spirit text-lg">
              Explore evidence-based teaching strategies, the latest EdTech trends, and practical applications for the modern classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-rooted-earth-light/30 border-b border-rooted-earth/20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat.active
                    ? 'bg-rooted-earth text-white'
                    : 'bg-white text-onyx-light hover:bg-gentle-hold border border-border'
                }`}
              >
                {cat.label === 'All' && <span className="mr-1">✦</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-new-light border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm">
                <span className="text-moss">{badge.icon}</span>
                <div>
                  <span className="font-semibold text-onyx">{badge.label}</span>
                  <span className="text-onyx-muted ml-1 hidden sm:inline">· {badge.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-sm bg-new-light">
        <div className="container">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Article Image */}
              <div className="bg-gradient-to-br from-womb-bloom/30 to-gentle-hold p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-8xl">{featuredArticle.image}</div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-moss/10 text-moss text-xs font-semibold uppercase tracking-wide rounded-full w-fit mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-onyx mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-onyx-muted mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sacred-ember hover:gap-3 transition-all"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section bg-new-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="article-card hover-lift group">
                <div className={`article-card-image bg-gradient-to-br ${article.bgColor} flex items-center justify-center`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {article.image}
                  </span>
                </div>
                <div className="article-card-content">
                  <div className="flex items-center gap-2 text-xs text-onyx-muted mb-2">
                    <span className="font-semibold text-sacred-ember uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-onyx mb-2 leading-snug group-hover:text-sacred-ember transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-onyx-muted mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-onyx-muted hover:text-sacred-ember transition-colors uppercase tracking-wide"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-rooted-earth py-16 px-6">
        <div className="container">
          <div className="text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-white/10 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Join 50,000+ Educators
            </h2>
            <p className="text-calm-spirit mb-8">
              Get the latest research-based strategies and EdTech insights delivered straight to your inbox every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="input flex-1 bg-white border-0"
              />
              <button className="btn btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-calm-spirit">
              We care about your data in our{' '}
              <Link href="#" className="underline hover:text-white">
                Privacy Policy
              </Link>
              . No spam, ever.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

