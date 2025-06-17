import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    '/[locale]/opengraph-image': ['./src/assets/**/*'],
  },
};

export default nextConfig;
