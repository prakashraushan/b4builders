import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 blocks query strings on local image src by default (see version-16 upgrade notes).
    // Omitting `search` allows any query string — needed for our cache-busting "?v=<mtime>"
    // on the hero photo — while `pathname: "**"` keeps matching every local image as before.
    localPatterns: [
      {
        pathname: "**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
