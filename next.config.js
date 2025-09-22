/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Keep for now, re-enable later for linting
  },
  images: {
    domains: ['images.pexels.com', 'your-supabase-url.supabase.co'], // Replace with your Supabase domain
  },
};

module.exports = nextConfig;
