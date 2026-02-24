import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/consulting", destination: "/services/consulting", permanent: true },
      { source: "/consulting/assessalign", destination: "/products/assessalign", permanent: true },
      { source: "/resources/lessons", destination: "/products/lessons", permanent: true },
      { source: "/resources/teacher-tools", destination: "/products/teacher-tools", permanent: true },
      { source: "/resources/favorites", destination: "/resources/recommended-tools", permanent: true },
      { source: "/about/projects", destination: "/about#projects", permanent: true },
      { source: "/shop", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
