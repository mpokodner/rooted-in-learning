import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/products", destination: "/shop", permanent: true },
      { source: "/products/lessons", destination: "/shop", permanent: true },
      { source: "/products/teacher-tools", destination: "/shop", permanent: true },
      { source: "/products/assessalign", destination: "/tools/assessalign", permanent: true },
      { source: "/parents", destination: "/", permanent: true },
      { source: "/family-hub", destination: "/", permanent: true },
      { source: "/parent-resources", destination: "/", permanent: true },
      { source: "/services/consulting", destination: "/services", permanent: true },
      { source: "/resources/recommended-tools", destination: "/shop", permanent: true },
      { source: "/recommended-tools", destination: "/shop", permanent: true },
      { source: "/resources", destination: "/shop", permanent: true },
      { source: "/resources/favorites", destination: "/shop", permanent: true },
      { source: "/my-picks", destination: "/shop", permanent: true },
      { source: "/resources/lessons", destination: "/shop", permanent: true },
      { source: "/resources/teacher-tools", destination: "/shop", permanent: true },
      { source: "/teacher-shop", destination: "/shop", permanent: true },
      { source: "/work-with-me", destination: "/services", permanent: true },
      { source: "/edtech-tools", destination: "/tools", permanent: true },
      { source: "/consulting", destination: "/services", permanent: true },
      { source: "/consulting/assessalign", destination: "/tools/assessalign", permanent: true },
      { source: "/about/projects", destination: "/about#projects", permanent: true },
      { source: "/learn/toolkit", destination: "/learn/teacher-toolkit", permanent: true },
      { source: "/learn/toolkit/:slug", destination: "/learn/teacher-toolkit/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
