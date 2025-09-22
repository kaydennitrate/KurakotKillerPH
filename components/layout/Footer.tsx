"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { toast } from 'sonner';

export function Footer() {
  const { t } = useLanguage();

  const cryptoWallets = [
    {
      name: 'TON',
      address: 'UQD8RmP7C9CDUGuJRuVO1IP7xqpUPR0tFCu5n5rvwGaSM6yt',
    },
    {
      name: 'Solana (SOL/USDC)',
      address: '549m2zaHWppZ56jD9LuqhM4jy9vYVsp7NGVtwFyJsvG7',
    },
    {
      name: 'EVM (ETH/USDT/USDC)',
      address: '0x667756929203c71f66cb33e9e69649f3c7feeae1',
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} address copied to clipboard!`);
  };

  return (
    <footer id="support" className="bg-gray-900 border-t border-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Donation Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('support_kurakotkiller')}
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
              {t('support_message')}
            </p>
          </div>

          {/* QR Codes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">GCash QR</h3>
              <div className="bg-white p-4 rounded-lg inline-block">
                <Image
                  src="/gcash-qr-placeholder.png"
                  alt="GCash QR Code Placeholder"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{t('qr_placeholder_note')}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Maya QR</h3>
              <div className="bg-white p-4 rounded-lg inline-block">
                <Image
                  src="/maya-qr-placeholder.png"
                  alt="Maya QR Code Placeholder"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{t('qr_placeholder_note')}</p>
            </div>
          </div>

          {/* Crypto Wallets */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">
              {t('crypto_donations')}
            </h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {cryptoWallets.map((wallet) => (
                <div key={wallet.name} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="text-red-400 font-medium">{wallet.name}:</span>
                      <p className="text-gray-300 text-sm font-mono break-all mt-1">
                        {wallet.address}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(wallet.address, wallet.name)}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white flex-shrink-0"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      {t('copy')}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buy Me a Coffee */}
          <div className="text-center mb-8">
            <Link
              href="https://buymeacoffee.com/your-buymeacoffee-link"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
            >
              ☕ {t('buy_coffee')}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Social & Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Twitter */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-4">{t('follow_us')}</h3>
              <Link
                href="https://x.com/KurakotKillerPH"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                @KurakotKillerPH on X
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Transparency */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">{t('transparency')}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {t('transparency_note')}
              </p>
              <Link
                href="/transparency"
                className="text-red-400 hover:text-red-300 transition-colors text-sm"
              >
                {t('view_transparency')} →
              </Link>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-4">{t('contact')}</h3>
              <p className="text-gray-400 text-sm">
                {t('contact_email')}: <br />
                <a 
                  href="mailto:admin@kurakotkiller.ph"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  admin@kurakotkiller.ph
                </a>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 KurakotKiller.ph. {t('built_for_justice')} | {t('no_profits_justice')}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/transparency" className="text-gray-400 hover:text-red-400 transition-colors">
                {t('transparency')}
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors">
                {t('contact')}
              </Link>
              <Link href="/safety" className="text-gray-400 hover:text-red-400 transition-colors">
                {t('safety_guide')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
