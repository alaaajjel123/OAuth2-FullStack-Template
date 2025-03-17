/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true, // Enable the `/app` directory (Next.js 13+)
    },
  };
  
  module.exports = nextConfig;