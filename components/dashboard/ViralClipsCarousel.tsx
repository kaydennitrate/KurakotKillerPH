"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Share, ThumbsUp, Eye } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Mock viral clips data
const viralClips = [
  {
    id: 1,
    title: 'Manila Flood During "Completed" Drainage Project',
    author: 'FloodWatcher2025',
    thumbnail: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    views: 125000,
    upvotes: 8500,
    type: 'video',
    description: 'Street flooding despite ₱2.5B drainage system completion certificate'
  },
  {
    id: 2,
    title: 'DPWH Official\'s Luxury Car Collection Exposed',
    author: 'AnonymousLeaker',
    thumbnail: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
    views: 89000,
    upvotes: 6200,
    type: 'photo',
    description: 'Government salary vs luxury lifestyle - where did the money come from?'
  },
  {
    id: 3,
    title: 'Ghost Pump Station - Empty Lot Worth ₱500M',
    author: 'CorruptionHunter',
    thumbnail: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg',
    views: 156000,
    upvotes: 12100,
    type: 'photo',
    description: 'GPS coordinates show "completed" pump station is just empty land'
  },
  {
    id: 4,
    title: 'Cebu Flood Wall Collapse After 1 Month',
    author: 'CebuReporter',
    thumbnail: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpg',
    views: 78000,
    upvotes: 5400,
    type: 'video',
    description: '₱750M flood wall crumbles after first heavy rain'
  },
  {
    id: 5,
    title: 'Contractor Documents Show Kickback Scheme',
    author: 'WhistleblowerPH',
    thumbnail: 'https://images.pexels.com/photos/6913836/pexels-photo-6913836.jpeg',
    views: 203000,
    upvotes: 15600,
    type: 'document',
    description: 'Internal documents reveal systematic corruption in project bidding'
  }
];

export function ViralClipsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % viralClips.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + viralClips.length) % viralClips.length);
  };

  const shareClip = (clip: any) => {
    const shareText = `🔥 VIRAL: "${clip.title}" - ${clip.upvotes.toLocaleString()} upvotes! Exposed on KurakotKiller.ph! #LabanSaKatiwalian @KurakotKillerPH https://kurakotkiller.ph`;
    
    if (navigator.share) {
      navigator.share({
        title: `KurakotKiller.ph - ${clip.title}`,
        text: shareText,
        url: 'https://kurakotkiller.ph'
      });
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <Card className="bg-gray-800 border-red-600">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
          {t('viral_clips')} - Top Community Uploads
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main Carousel */}
        <div className="relative mb-6">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src={viralClips[currentIndex].thumbnail}
              alt={viralClips[currentIndex].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {viralClips[currentIndex].type.toUpperCase()}
                  </span>
                  <span className="text-gray-300 text-sm">
                    by {viralClips[currentIndex].author}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">
                  {viralClips[currentIndex].title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {viralClips[currentIndex].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{viralClips[currentIndex].views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4 text-green-400" />
                      <span>{viralClips[currentIndex].upvotes.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => shareClip(viralClips[currentIndex])}
                    className="bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    <Share className="w-4 h-4 mr-1" />
                    Share to X
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-gray-600 text-white hover:bg-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-gray-600 text-white hover:bg-gray-800"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {viralClips.map((clip, index) => (
            <div
              key={clip.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-red-500 scale-105' 
                  : 'hover:scale-102 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={clip.thumbnail}
                alt={clip.title}
                className="w-full h-16 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {clip.type === 'video' ? '📹' : clip.type === 'photo' ? '📷' : '📄'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {viralClips.reduce((sum, clip) => sum + clip.upvotes, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Total Upvotes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {viralClips.reduce((sum, clip) => sum + clip.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{viralClips.length}</div>
            <div className="text-sm text-gray-400">Evidence Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">24h</div>
            <div className="text-sm text-gray-400">Updated</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}