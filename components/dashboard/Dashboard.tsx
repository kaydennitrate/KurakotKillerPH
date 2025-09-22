"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CorruptionHeatmap } from './CorruptionHeatmap';
import { MediaTimeline } from './MediaTimeline';
import { ViralClipsCarousel } from './ViralClipsCarousel';
import { ProtestStories } from './ProtestStories';
import { BountyBoard } from './BountyBoard';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Dashboard() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('corruption_pulse_tracker')}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {t('dashboard_subtitle')}
          </p>
        </div>

        <Tabs defaultValue="heatmap" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-black border border-red-600">
            <TabsTrigger value="heatmap" className="data-[state=active]:bg-red-600">
              {t('heatmap')}
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-red-600">
              {t('media')}
            </TabsTrigger>
            <TabsTrigger value="clips" className="data-[state=active]:bg-red-600">
              {t('viral_clips')}
            </TabsTrigger>
            <TabsTrigger value="stories" className="data-[state=active]:bg-red-600">
              {t('stories')}
            </TabsTrigger>
            <TabsTrigger value="bounty" className="data-[state=active]:bg-red-600">
              {t('bounty_board')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="heatmap" className="space-y-6">
            <CorruptionHeatmap />
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <MediaTimeline />
          </TabsContent>

          <TabsContent value="clips" className="space-y-6">
            <ViralClipsCarousel />
          </TabsContent>

          <TabsContent value="stories" className="space-y-6">
            <ProtestStories />
          </TabsContent>

          <TabsContent value="bounty" className="space-y-6">
            <BountyBoard />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}