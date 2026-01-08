export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary px-6 py-4">
        <nav className="container flex-between">
          <span className="text-xl font-bold text-white">
            🌱 The Rooted Learner
          </span>
          <div className="flex gap-6 text-sm font-medium text-white/90 hide-mobile">
            <a
              href="#"
              className="hover:text-white transition-colors hover:no-underline"
            >
              Resources
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors hover:no-underline"
            >
              Community
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors hover:no-underline"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section-lg bg-surface-soft">
        <div className="container text-center">
          <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl">
            <span className="gradient-text">Grow Your Teaching Practice</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Thoughtfully designed resources and tools that help educators
            cultivate meaningful learning experiences in their classrooms.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn btn-accent">Get Started Free</button>
            <button className="btn btn-secondary">Explore Resources</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-surface-hover">
        <div className="container">
          <h2 className="text-center mb-5">Tools for Every Educator</h2>
          <div className="grid grid-3">
            {/* Card 1 */}
            <div className="card hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-100 text-2xl">
                📚
              </div>
              <h3 className="mt-4 text-xl">Lesson Plans</h3>
              <p className="mt-2 text-text-secondary">
                Standards-aligned, ready-to-use lesson plans crafted by
                experienced educators.
              </p>
            </div>
            {/* Card 2 */}
            <div className="card hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-terra-100 text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl">Creative Activities</h3>
              <p className="mt-2 text-text-secondary">
                Engaging activities that spark curiosity and foster deeper
                understanding.
              </p>
            </div>
            {/* Card 3 */}
            <div className="card hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-200 text-2xl">
                🌿
              </div>
              <h3 className="mt-4 text-xl">Growth Tracking</h3>
              <p className="mt-2 text-text-secondary">
                Monitor student progress with intuitive dashboards and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Our Color Palette</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
            Clean, professional, and accessible — designed for educators
          </p>

          {/* Forest Green Scale */}
          <div className="mt-12">
            <h4 className="mb-4">Forest Green</h4>
            <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className={`h-16 w-full rounded-lg bg-forest-${shade}`}
                    ></div>
                    <span className="mt-1 text-xs text-text-muted">
                      {shade}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Terracotta Scale */}
          <div className="mt-10">
            <h4 className="mb-4">Terracotta</h4>
            <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="flex flex-col items-center">
                    <div
                      className={`h-16 w-full rounded-lg bg-terra-${shade}`}
                    ></div>
                    <span className="mt-1 text-xs text-text-muted">
                      {shade}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mt-10">
            <h4 className="mb-4">Semantic Colors</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="h-16 w-full rounded-lg bg-primary"></div>
                <span className="mt-1 text-sm text-text-muted">Primary</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-full rounded-lg bg-accent"></div>
                <span className="mt-1 text-sm text-text-muted">Accent</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-full rounded-lg bg-surface-soft border border-border"></div>
                <span className="mt-1 text-sm text-text-muted">
                  Surface Soft
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-full rounded-lg bg-surface-hover border border-border"></div>
                <span className="mt-1 text-sm text-text-muted">
                  Surface Hover
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section className="section bg-surface-soft">
        <div className="container">
          <h2 className="text-center mb-5">Component Examples</h2>

          {/* Buttons */}
          <div className="card card-spacious mb-4">
            <h4 className="mb-4">Buttons</h4>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-ghost">Ghost</button>
            </div>
          </div>

          {/* Badges */}
          <div className="card card-spacious mb-4">
            <h4 className="mb-4">Badges</h4>
            <div className="flex flex-wrap gap-3">
              <span className="badge">Default</span>
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-accent">Accent</span>
              <span className="badge badge-success">Success</span>
            </div>
          </div>

          {/* Input */}
          <div className="card card-spacious">
            <h4 className="mb-4">Form Elements</h4>
            <div className="max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input mb-3"
              />
              <button className="btn btn-primary w-full">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-primary text-center">
        <div className="container">
          <h2 className="text-white mb-2">
            Ready to Transform Your Classroom?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 mb-4">
            Join thousands of educators who are creating engaging, meaningful
            learning experiences.
          </p>
          <button className="btn bg-white text-primary hover:bg-surface-soft">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 px-6 py-12">
        <div className="container flex-between stack-mobile gap-6">
          <span className="text-lg font-bold text-white">
            🌱 The Rooted Learner
          </span>
          <div className="flex gap-6 text-sm text-forest-400">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
          <p className="text-sm text-forest-400">
            © 2026 The Rooted Learner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
