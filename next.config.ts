import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't leak framework info in response headers.
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.contentful.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
