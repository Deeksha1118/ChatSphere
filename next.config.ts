import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "little-starling-755.convex.cloud"},
      {hostname: "oaidalleapiprodscus.blob.core.windows.net"},
    ],
  },
};

export default nextConfig;
