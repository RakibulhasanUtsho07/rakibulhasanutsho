import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted at this app instead of a parent folder's lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
