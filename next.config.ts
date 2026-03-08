import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/teacher-shop", permanent: true },
      { source: "/products/lessons", destination: "/teacher-shop", permanent: true },
      { source: "/products/teacher-tools", destination: "/teacher-shop", permanent: true },
      { source: "/products/assessalign", destination: "/edtech-tools", permanent: true },
      { source: "/parents", destination: "/parent-resources", permanent: true },
      { source: "/family-hub", destination: "/parent-resources", permanent: true },
      { source: "/services/consulting", destination: "/work-with-me", permanent: true },
      { source: "/resources/recommended-tools", destination: "/my-picks", permanent: true },
      { source: "/recommended-tools", destination: "/my-picks", permanent: true },
      { source: "/resources", destination: "/teacher-shop", permanent: true },
      { source: "/resources/favorites", destination: "/my-picks", permanent: true },
      { source: "/resources/lessons", destination: "/teacher-shop", permanent: true },
      { source: "/resources/teacher-tools", destination: "/teacher-shop", permanent: true },
      { source: "/shop", destination: "/teacher-shop", permanent: true },
      { source: "/shop/:slug", destination: "/teacher-shop", permanent: true },
      { source: "/consulting", destination: "/work-with-me", permanent: true },
      { source: "/consulting/assessalign", destination: "/edtech-tools", permanent: true },
      { source: "/about/projects", destination: "/about#projects", permanent: true },
    ];
  },
};

export default nextConfig;
