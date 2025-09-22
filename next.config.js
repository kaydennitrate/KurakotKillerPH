/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip linting for faster builds
  },
  images: {
    domains: ['images.pexels.com'], // For Pexels images in dashboard
  },
};

module.exports = nextConfig;
