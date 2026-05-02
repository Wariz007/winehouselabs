import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nofsppfzoizezbjxyttp.supabase.co',
      },
    ],
  },
};

export default nextConfig;