import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: there is an unrelated package-lock.json in the user's home folder.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
