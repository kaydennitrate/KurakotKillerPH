/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Keep for now, but consider re-enabling later
  },
  images: {
    // Remove unoptimized: true to enable Next.js image optimization
    domains: ['images.pexels.com', 'your-supabase-url.supabase.co'], // Add Supabase if needed
  },
  // Optional: Set metadataBase to fix metadata warnings
  metadataBase: new URL('https://kurakotkiller.ph'), // Or your Vercel URL
};

module.exports = nextConfig;
