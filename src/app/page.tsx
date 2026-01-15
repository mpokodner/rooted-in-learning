export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <nav className="container flex-between">
          <span className="text-xl font-bold text-flint">
            🌱 The Rooted Learner
          </span>
          <div className="flex items-center gap-8 hide-mobile">
            <div className="flex gap-6 text-sm font-medium text-flint-light">
              <a href="#" className="hover:text-moss transition-colors hover:no-underline">
                Resources
              </a>
              <a href="#" className="hover:text-moss transition-colors hover:no-underline">
                Software
              </a>
              <a href="#" className="hover:text-moss transition-colors hover:no-underline">
                Consulting
              </a>
              <a href="#" className="hover:text-moss transition-colors hover:no-underline">
                About
              </a>
            </div>
            <button className="btn btn-primary text-sm">Get Started</button>
          </div>
          {/* Mobile menu button */}
          <button className="hide-desktop text-flint p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section-lg bg-cream-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">Teacher-Built Tech</span>
              <h1 className="text-balance mb-6">
                Bridging the Gap Between{" "}
                <span className="text-moss">Reading Science</span>
                {" "}and Classroom Reality
              </h1>
              <p className="text-lg text-flint-light mb-8 max-w-xl">
                Educational tools built by a Certified Reading Interventionist who codes. 
                We create software that understands the nuances of literacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary">Explore Resources</button>
                <button className="btn btn-secondary">Try AssessAlign Demo</button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-cream rounded-xl p-8 shadow-lg">
                <div className="aspect-[4/3] bg-sandstone-light rounded-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-flint-muted text-sm">Interactive learning tools designed for diverse learners</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-moss text-white px-4 py-2 rounded-lg shadow-md">
                  <span className="text-xs font-medium">Expertise</span>
                  <p className="text-sm font-bold">Cognitive Science & Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Districts Nationwide</div>
            </div>
            <div>
              <div className="stat-number">3x</div>
              <div className="stat-label">Faster Reading Growth</div>
            </div>
            <div>
              <div className="stat-number">96%</div>
              <div className="stat-label">Educator Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Teacher-Coder Advantage */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">The Teacher-Coder Advantage</h2>
            <p className="text-flint-light text-lg">
              I don&apos;t just build software; I&apos;ve sat in the intervention chair. 
              With an MA in Culturally Diverse Learners, I create tools that actually work for your students.
            </p>
          </div>

          <div className="grid grid-3 gap-6">
            {/* Card 1 */}
            <div className="card hover-lift text-center">
              <div className="feature-icon mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 className="mb-2">Certified Interventionist</h4>
              <p className="text-flint-muted text-sm">
                Deep understanding of literacy development and intervention strategies from years in the classroom.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card hover-lift text-center">
              <div className="feature-icon mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="mb-2">MA in Diverse Learners</h4>
              <p className="text-flint-muted text-sm">
                Specialized knowledge in supporting culturally diverse student populations effectively.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card hover-lift text-center">
              <div className="feature-icon mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="mb-2">Full-Stack Developer</h4>
              <p className="text-flint-muted text-sm">
                Building robust, secure, and user-friendly educational software with modern tech stacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="section bg-cream-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Choose Your Path to Student Success</h2>
            <p className="text-flint-light">
              Whether you need immediate resources or long-term systemic change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* TPT Resources */}
            <div className="card card-spacious">
              <span className="badge badge-accent mb-4">Immediate</span>
              <h3 className="mb-3">Classroom Resources (TPT)</h3>
              <p className="text-flint-muted mb-6">
                Need something for tomorrow&apos;s lesson? High-quality, evidence-based reading intervention materials ready for immediate download.
              </p>
              <button className="btn btn-accent w-full">Shop TPT Store</button>
            </div>

            {/* AssessAlign SaaS */}
            <div className="card card-spacious border-2 border-moss">
              <span className="badge badge-primary mb-4">AssessAlign SaaS</span>
              <h3 className="mb-3">Streamline Data Tracking</h3>
              <p className="text-flint-muted mb-6">
                Stop drowning in spreadsheets. Our specialized software helps you track student progress, align assessments, and visualize growth over time.
              </p>
              <button className="btn btn-primary w-full">Try AssessAlign Demo</button>
            </div>

            {/* PD & Consulting */}
            <div className="card card-spacious">
              <span className="badge mb-4">Long-Term Impact</span>
              <h3 className="mb-3">PD & Consulting</h3>
              <p className="text-flint-muted mb-6">
                Comprehensive Science of Reading workshops and systems consulting to build sustainable intervention frameworks in your school.
              </p>
              <button className="btn btn-outline w-full">Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Success Section */}
      <section className="section bg-moss text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-sandstone-light text-flint mb-4">Data-Driven Success</span>
              <h2 className="text-white mb-4">See the growth you&apos;ve been working for.</h2>
              <p className="text-sandstone-light text-lg mb-6">
                AssessAlign visualizes student progress instantly, allowing you to adjust interventions in real-time. 
                Built for the unique needs of reading specialists.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-sandstone">✓</span>
                  Automatic progress monitoring graphs
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sandstone">✓</span>
                  Group students by skill deficits
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sandstone">✓</span>
                  Export reports for IEP meetings
                </li>
              </ul>
              <button className="btn bg-sandstone text-flint hover:bg-sandstone-light">
                Start Free 14-Day Trial
              </button>
            </div>
            <div className="bg-moss-dark rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-leather"></span>
                <span className="w-3 h-3 rounded-full bg-sandstone"></span>
                <span className="w-3 h-3 rounded-full bg-sandstone-light"></span>
              </div>
              <div className="bg-cream-light rounded-lg p-4">
                <div className="text-flint text-sm font-medium mb-3">Student Growth Trend</div>
                <div className="h-32 flex items-end justify-around gap-2">
                  <div className="w-8 bg-sandstone rounded-t" style={{height: '30%'}}></div>
                  <div className="w-8 bg-sandstone rounded-t" style={{height: '45%'}}></div>
                  <div className="w-8 bg-sandstone rounded-t" style={{height: '40%'}}></div>
                  <div className="w-8 bg-sandstone rounded-t" style={{height: '60%'}}></div>
                  <div className="w-8 bg-sandstone rounded-t" style={{height: '55%'}}></div>
                  <div className="w-8 bg-moss rounded-t" style={{height: '75%'}}></div>
                  <div className="w-8 bg-moss rounded-t" style={{height: '85%'}}></div>
                </div>
                <div className="mt-4 flex justify-between text-xs text-flint-muted">
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Trusted by Educators & Districts</h2>
          </div>

          <div className="grid grid-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="card card-spacious">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sandstone">★</span>
                ))}
              </div>
              <p className="testimonial-quote mb-6">
                &quot;Finally, software that doesn&apos;t feel like it was built by someone who has never been in a classroom. The intervention resources are spot-on.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-flint font-bold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-flint">Sarah Jenkins</div>
                  <div className="text-sm text-flint-muted">Reading Specialist, CO</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card card-spacious">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sandstone">★</span>
                ))}
              </div>
              <p className="testimonial-quote mb-6">
                &quot;The PD session on Science of Reading changed how our entire 3rd grade team approaches literacy blocks. Highly recommended.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-flint font-bold">
                  MD
                </div>
                <div>
                  <div className="font-semibold text-flint">Mark Davis</div>
                  <div className="text-sm text-flint-muted">Principal, Lincoln Elementary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-sm bg-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-3">Free Reading Intervention Checklist</h3>
            <p className="text-flint-muted mb-6">
              Join 5,000+ educators. Get my proven checklist for diagnosing reading gaps and a weekly digest of literacy tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your school email" 
                className="input flex-1"
              />
              <button className="btn btn-primary">Get the Checklist</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-flint px-6 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-lg font-bold text-white mb-4 block">
                🌱 The Rooted Learner
              </span>
              <p className="text-sandstone-light text-sm">
                Empowering educators with tools built by one of their own.
              </p>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Offerings</h6>
              <div className="flex flex-col gap-2 text-sm text-sandstone-light">
                <a href="#" className="hover:text-white">Resources</a>
                <a href="#" className="hover:text-white">Software</a>
                <a href="#" className="hover:text-white">Consulting</a>
              </div>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Company</h6>
              <div className="flex flex-col gap-2 text-sm text-sandstone-light">
                <a href="#" className="hover:text-white">About</a>
                <a href="#" className="hover:text-white">Blog</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Legal</h6>
              <div className="flex flex-col gap-2 text-sm text-sandstone-light">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>

          <div className="divider opacity-20"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sandstone-light">
              © 2026 The Rooted Learner. All rights reserved.
            </p>
            <p className="text-sm text-sandstone-light">
              Made with 🤎 for teachers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
