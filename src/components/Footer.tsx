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
    <footer className="bg-[#5C6B4D]">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">
                Rooted in Learning
              </span>
            </Link>
            <p className="text-[#C5D1B8] text-sm mb-6 max-w-sm leading-relaxed">
              Helping educators navigate the digital divide with practical
              tools, thoughtful pedagogy, and a bit of code.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C5D1B8] hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Website"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C5D1B8] hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Share"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C5D1B8] hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-8 md:gap-12">
            {/* Explore Links */}
            <div>
              <h5 className="font-bold text-[#C17F5E] mb-4 text-[11px] uppercase tracking-[0.15em]">
                Explore
              </h5>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#C5D1B8] hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop Links */}
            <div>
              <h5 className="font-bold text-[#C17F5E] mb-4 text-[11px] uppercase tracking-[0.15em]">
                Shop
              </h5>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#C5D1B8] hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h5 className="font-bold text-[#C17F5E] mb-4 text-[11px] uppercase tracking-[0.15em]">
                Support
              </h5>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#C5D1B8] hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#8B9B7A] text-center md:text-left uppercase tracking-wide">
            © {new Date().getFullYear()} Rooted in Learning. All rights reserved.
          </p>
          <p className="text-xs text-[#8B9B7A] uppercase tracking-wide">
            Built with <span className="text-[#C17F5E] font-semibold">intention</span> in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
