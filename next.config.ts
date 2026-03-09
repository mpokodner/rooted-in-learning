import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/shop", permanent: true },
      { source: "/products/lessons", destination: "/shop", permanent: true },
      { source: "/products/teacher-tools", destination: "/shop", permanent: true },
      { source: "/products/assessalign", destination: "/tools", permanent: true },
      { source: "/parents", destination: "/parent-resources", permanent: true },
      { source: "/family-hub", destination: "/parent-resources", permanent: true },
      { source: "/services/consulting", destination: "/services", permanent: true },
      { source: "/resources/recommended-tools", destination: "/my-picks", permanent: true },
      { source: "/recommended-tools", destination: "/my-picks", permanent: true },
      { source: "/resources", destination: "/shop", permanent: true },
      { source: "/resources/favorites", destination: "/my-picks", permanent: true },
      { source: "/resources/lessons", destination: "/shop", permanent: true },
      { source: "/resources/teacher-tools", destination: "/shop", permanent: true },
      { source: "/teacher-shop", destination: "/shop", permanent: true },
      { source: "/work-with-me", destination: "/services", permanent: true },
      { source: "/edtech-tools", destination: "/tools", permanent: true },
      { source: "/consulting", destination: "/services", permanent: true },
      { source: "/consulting/assessalign", destination: "/tools", permanent: true },
      { source: "/about/projects", destination: "/about#projects", permanent: true },
    ];
  },
};

export default nextConfig;
