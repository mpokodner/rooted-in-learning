import type { Metadata } from "next";
import { Source_Sans_3, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Rooted Learner | Grounded in Growth",
  description: "Educational resources and professional development for educators. Science of Reading-aligned materials, intervention strategies, and classroom tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
