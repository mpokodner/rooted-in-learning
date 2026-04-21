import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#59564c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.therootedlearner.com"),
  title: {
    default: "The Rooted Learner | EdTech Solutions for Modern Educators",
    template: "%s | The Rooted Learner",
  },
  description:
    "Curriculum systems consulting, standards-aligned tools, and instructional technology for K–12 districts. Built by Michelle Pokodner, a 12+ year classroom veteran and full-stack developer.",
  keywords: [
    "education technology",
    "edtech",
    "teaching resources",
    "classroom tools",
    "professional development",
    "curriculum design",
    "teacher resources",
    "educational templates",
    "classroom management",
    "reading intervention",
    "literacy tools",
  ],
  authors: [{ name: "Michelle Pokodner", url: "https://www.therootedlearner.com" }],
  creator: "Michelle Pokodner",
  publisher: "The Rooted Learner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.therootedlearner.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.therootedlearner.com",
    siteName: "The Rooted Learner",
    title: "The Rooted Learner | EdTech Solutions for Modern Educators",
    description:
      "EdTech consulting, AI-powered teacher tools, and standards-aligned curriculum resources for grades 1–8. Built by a classroom veteran and full-stack developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Rooted Learner - EdTech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rooted Learner | EdTech Solutions",
    description:
      "Bridging pedagogy and technology with 12+ years of classroom experience.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Cal Sans - Heading Font by Cal.com */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@calcom/font@1.1.0/index.css"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Rooted Learner",
              "url": "https://www.therootedlearner.com",
              "logo": "https://www.therootedlearner.com/logo.png",
              "description": "Curriculum systems consulting, standards-aligned tools, and instructional technology for K–12 districts. Built by a 12+ year classroom veteran.",
              "founder": {
                "@type": "Person",
                "name": "Michelle Pokodner",
                "jobTitle": "Curricular Solutions Architect",
                "url": "https://www.therootedlearner.com/about"
              },
              "sameAs": [
                "https://www.youtube.com/@TheRootedLearner",
                "https://www.tiktok.com/@therootedlearner",
                "https://www.instagram.com/rootedinlearninged/",
                "https://www.linkedin.com/in/michelle-pokodner-edtech/",
                "https://www.pinterest.com/rootedinlearninged/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@therootedlearner.com",
                "contactType": "customer service"
              }
            }),
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YN9FTS3PL5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YN9FTS3PL5');
          `}
        </Script>

        {/* Google Tag Manager — Head Script */}
        {GTM_ID && (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        {/* Google Tag Manager — noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <AuthProvider>{children}</AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
