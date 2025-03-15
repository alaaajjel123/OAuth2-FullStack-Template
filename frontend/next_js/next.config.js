/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
      return [
        {
          source: '/profile',
          has: [
            {
              type: 'cookie',
              key: 'access_token',
            },
          ],
          permanent: false,
          destination: '/login',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  