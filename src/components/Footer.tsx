import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    explore: [
      { label: "Portfolio", href: "/projects" },
      { label: "Philosophy", href: "/blog" },
      { label: "Blog", href: "/blog" },
      { label: "Speaking", href: "/#contact" },
    ],
    shop: [
      { label: "Templates", href: "/microlearning" },
      { label: "Courses", href: "/microlearning" },
      { label: "Consulting", href: "/#contact" },
      { label: "Merch", href: "/microlearning" },
    ],
    support: [
      { label: "FAQ", href: "/#contact" },
      { label: "Contact", href: "/#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="bg-rooted-earth">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-base font-semibold text-white">
                Rooted in Learning
              </span>
            </Link>
            <p className="text-calm-spirit text-sm mb-5 max-w-xs leading-relaxed">
              Helping educators navigate the digital divide with practical
              tools, thoughtful pedagogy, and a bit of code.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-calm-spirit hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Website"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-calm-spirit hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Share"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-calm-spirit hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h5 className="font-semibold text-sacred-ember-light mb-3 text-[10px] uppercase tracking-widest">
              Explore
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-calm-spirit hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h5 className="font-semibold text-sacred-ember-light mb-3 text-[10px] uppercase tracking-widest">
              Shop
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-calm-spirit hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-semibold text-sacred-ember-light mb-3 text-[10px] uppercase tracking-widest">
              Support
            </h5>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-calm-spirit hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-calm-spirit text-center md:text-left">
            © {new Date().getFullYear()} Rooted in Learning. All rights reserved.
          </p>
          <p className="text-xs text-calm-spirit">
            Built with <span className="text-sacred-ember font-medium">intention</span> in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
