"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, MessageCircle, Share, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Mock social media posts
const socialPosts = [
  {
    id: 1,
    platform: 'X',
    author: '@PinoyActivist2025',
    content: 'EXPOSED: ₱2.5B flood control project in QC - only 30% complete but 100% paid! Where did our money go? #TrillionPesoMarch #Floodgate',
    timestamp: '2 hours ago',
    likes: 15200,
    retweets: 8500,
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    trending: true
  },
  {
    id: 2,
    platform: 'TikTok',
    author: '@FloodWatchPH',
    content: 'POV: You paid ₱50M for flood control but your street still floods every rainy season 🌊💸 #LabanSaKatiwalian',
    timestamp: '4 hours ago',
    likes: 45600,
    shares: 12300,
    video: true,
    trending: true
  },
  {
    id: 3,
    platform: 'X',
    author: '@CitizenReporter',
    content: 'THREAD: How DPWH officials allegedly pocketed billions through ghost flood control projects. Evidence attached 🧵',
    timestamp: '6 hours ago',
    likes: 8900,
    retweets: 5200,
    hasThread: true
  },
  {
    id: 4,
    platform: 'X',
    author: '@ProtestLeaderPH',
    content: 'LIVE from Luneta: 40,000+ Filipinos demand accountability for the flood scandal! Join us! #KurakotExposed',
    timestamp: '8 hours ago',
    likes: 32100,
    retweets: 18700,
    isLive: true,
    trending: true
  }
];

export function MediaTimeline() {
  const { t } = useLanguage();

  const sharePost = (post: any) => {
    const shareText = `Exposed on KurakotKiller.ph! ${post.content} Join the fight: https://kurakotkiller.ph #LabanSaKatiwalian @KurakotKillerPH`;
    
    if (navigator.share) {
      navigator.share({
        title: 'KurakotKiller.ph - Corruption Exposed',
        text: shareText,
        url: 'https://kurakotkiller.ph'
      });
    } else {
      navigator.clipboard.writeText(shareText);
      // Show toast notification
    }
  };

  return (
    <Card className="bg-gray-800 border-red-600">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-500" />
          {t('viral_media_timeline')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {socialPosts.map((post) => (
            <div key={post.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600 relative">
              {post.trending && (
                <div className="absolute top-2 right-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    🔥 {t('trending')}
                  </span>
                </div>
              )}
              
              {post.isLive && (
                <div className="absolute top-2 right-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                    🔴 LIVE
                  </span>
                </div>
              )}

              {/* Platform & Author */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${post.platform === 'X' ? 'bg-blue-500' : 'bg-pink-500'}`} />
                  <span className="text-gray-400 text-sm font-medium">{post.platform}</span>
                </div>
                <span className="text-white font-semibold">{post.author}</span>
                <span className="text-gray-400 text-sm">{post.timestamp}</span>
              </div>

              {/* Content */}
              <p className="text-gray-200 mb-4 leading-relaxed">
                {post.content}
              </p>

              {/* Media Preview */}
              {post.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Post media"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {post.video && (
                <div className="mb-4 bg-gray-600 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-300">{t('video_content')}</p>
                </div>
              )}

              {/* Engagement Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes?.toLocaleString() || post.shares?.toLocaleString()}</span>
                  </div>
                  {post.retweets && (
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.retweets.toLocaleString()}</span>
                    </div>
                  )}
                  {post.hasThread && (
                    <span className="text-blue-400 font-medium">🧵 Thread</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => sharePost(post)}
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                  >
                    <Share className="w-4 h-4 mr-1" />
                    {t('share')}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-500 text-gray-400 hover:bg-gray-600 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {t('view')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            {t('load_more_posts')}
          </Button>
        </div>

        {/* Hashtag Tracking */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-white mb-4">{t('trending_hashtags')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { tag: '#TrillionPesoMarch', count: '892K' },
              { tag: '#Floodgate', count: '654K' },
              { tag: '#LabanSaKatiwalian', count: '432K' },
              { tag: '#KurakotExposed', count: '298K' }
            ].map((hashtag, index) => (
              <div key={index} className="text-center">
                <div className="text-red-400 font-bold text-lg">{hashtag.count}</div>
                <div className="text-gray-300 text-sm">{hashtag.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}