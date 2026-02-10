import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
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
  metadataBase: new URL("https://rootedinlearning-mu.vercel.app"),
  title: {
    default: "Rooted in Learning | EdTech Solutions for Modern Educators",
    template: "%s | Rooted in Learning",
  },
  description:
    "Bridging pedagogy and technology with 15+ years of classroom experience. Discover educational resources, tools, and professional development designed by a certified educator and full-stack developer.",
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
  authors: [{ name: "Rooted in Learning" }],
  creator: "Rooted in Learning",
  publisher: "Rooted in Learning",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rootedinlearning-mu.vercel.app",
    siteName: "Rooted in Learning",
    title: "Rooted in Learning | EdTech Solutions for Modern Educators",
    description:
      "Bridging pedagogy and technology with 15+ years of classroom experience. Discover educational resources, tools, and professional development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rooted in Learning - EdTech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooted in Learning | EdTech Solutions",
    description:
      "Bridging pedagogy and technology with 15+ years of classroom experience.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

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
      </head>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
