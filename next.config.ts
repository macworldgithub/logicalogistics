import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
