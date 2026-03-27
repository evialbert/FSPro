// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Aceasta va genera un site static ultra-rapid care nu dă niciodată 522
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;