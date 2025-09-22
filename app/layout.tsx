import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveChat } from '@/components/chat/LiveChat';
import { NotificationProvider } from '@/components/providers/NotificationProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

// Define viewport separately to fix Vercel warnings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#dc2626', // Matches your brand red
};

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'KurakotKiller.ph - Expose Philippines Flood Control Corruption',
  description: 'Track the $9.5B flood-control corruption scandal in the Philippines. Real-time evidence sharing, protest coordination, and community chat for justice.',
  keywords: [
    'Philippines corruption 2025',
    'flood scandal protests',
    'kurakot tracker',
    '#TrillionPesoMarch',
    '#Floodgate',
    '#LabanSaKatiwalian',
  ],
  authors: [{ name: 'KurakotKiller.ph Team' }],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  openGraph: {
    title: 'KurakotKiller.ph: Track the Flood Scam!',
    description: 'Join thousands of Filipinos exposing the flood-control corruption scandal. Share evidence, track protests, demand justice.',
    url: 'https://kurakotkiller.ph',
    siteName: 'KurakotKiller.ph',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KurakotKiller.ph - Anti-Corruption Platform',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KurakotKiller.ph: Track the Flood Scam!',
    description: 'Join thousands of Filipinos exposing corruption. Share evidence, track protests, demand justice.',
    creator: '@KurakotKillerPH',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <NotificationProvider>
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <Footer />
            <LiveChat />
          </NotificationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
