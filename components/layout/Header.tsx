"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useNotification } from '@/components/providers/NotificationProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { unreadCount } = useNotification();

  const navigation = [
    { name: t('dashboard'), href: '/' },
    { name: t('protest_tracker'), href: '/protests' },
    { name: t('upload'), href: '/upload' },
    { name: t('transparency'), href: '/transparency' },
    { name: t('contact'), href: '/contact' },
    { name: t('safety'), href: '/safety' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 text-black py-2 px-4 text-center font-bold text-sm md:text-base">
        <div className="max-w-7xl mx-auto">
          {language === 'en' 
            ? "KurakotKiller.ph: Built for Filipinos, by Filipinos. Corrupt officials stole our funds, so we're using Vercel's free hosting to expose them. This isn't about profit—it's about justice for our nation." 
            : "KurakotKiller.ph: Ginawa para sa mga Pinoy, ng mga Pinoy. Ninakaw ng mga corrupt na opisyal ang aming pondo, kaya ginagamit namin ang libre na hosting ng Vercel para ilantad sila. Hindi ito para sa kita—ito ay para sa katarungan para sa aming bansa."
          }
          <Link href="#support" className="ml-2 underline hover:no-underline">
            {t('support_us')}!
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black border-b border-red-600 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-red-600 to-yellow-400 p-2 rounded-lg">
                <span className="text-black font-black text-xl">KK</span>
              </div>
              <span className="font-bold text-xl text-white">
                KurakotKiller<span className="text-red-500">.ph</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Notification Bell */}
              <button className="relative p-2 text-gray-300 hover:text-red-400 transition-colors">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center notification-bounce">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'en' ? 'TAG' : 'ENG'}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button className="relative p-2 text-gray-300 hover:text-red-400 transition-colors">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-red-600">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors font-medium px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white w-fit"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'Tagalog' : 'English'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}