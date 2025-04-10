import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // WARNING: This allows production builds to succeed even if there are type errors.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Change to false if you want a temporary redirect
      },
    ];
  },
  // other config options can go here
};

export default nextConfig;
