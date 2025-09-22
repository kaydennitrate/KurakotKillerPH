/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Keep for now, re-enable later
  },
  images: {
    domains: ['images.pexels.com', 'your-supabase-url.supabase.co'], // Replace with actual Supabase domain
  },
};

module.exports = nextConfig;
