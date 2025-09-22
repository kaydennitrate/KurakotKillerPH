"use client";

import { ArrowDown, MapPin, MessageCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg")'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              {t('hero_title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-red-600/20 backdrop-blur-sm border border-red-600 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-red-400">₱9.5B</div>
              <div className="text-sm text-gray-300">{t('stolen_funds')}</div>
            </div>
            <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">40K+</div>
              <div className="text-sm text-gray-300">{t('protesters')}</div>
            </div>
            <div className="bg-red-600/20 backdrop-blur-sm border border-red-600 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-red-400">156</div>
              <div className="text-sm text-gray-300">{t('ghost_projects')}</div>
            </div>
            <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">1.2M</div>
              <div className="text-sm text-gray-300">{t('views_online')}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg group"
            >
              <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('share_evidence')}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 text-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('join_chat')}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold px-8 py-4 text-lg group"
            >
              <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('track_protests')}
            </Button>
          </div>

          {/* Trending Hashtags */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">{t('trending_hashtags')}:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['#TrillionPesoMarch', '#Floodgate', '#LabanSaKatiwalian', '#KurakotExposed'].map((hashtag) => (
                <span
                  key={hashtag}
                  className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-red-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
