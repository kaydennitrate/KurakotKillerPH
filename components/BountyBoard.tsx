"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Upload, Share, Award } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface Contributor {
  id: number;
  username: string;
  points: number;
  uploads: number;
  verified: number;
  badge: string;
  streak: number;
}

// Mock leaderboard data
const topContributors: Contributor[] = [
  {
    id: 1,
    username: 'JuanDelaCruz',
    points: 2850,
    uploads: 45,
    verified: 38,
    badge: '🥇 Corruption Hunter',
    streak: 12
  },
  {
    id: 2,
    username: 'ProtestLeader2025',
    points: 2340,
    uploads: 38,
    verified: 32,
    badge: '🥈 Truth Warrior',
    streak: 8
  },
  {
    id: 3,
    username: 'FloodWatchPH',
    points: 1980,
    uploads: 42,
    verified: 25,
    badge: '🥉 Evidence Master',
    streak: 15
  },
  {
    id: 4,
    username: 'AnonymousHero',
    points: 1650,
    uploads: 29,
    verified: 22,
    badge: '⭐ Rising Star',
    streak: 6
  },
  {
    id: 5,
    username: 'DataDetective',
    points: 1420,
    uploads: 35,
    verified: 18,
    badge: '🔍 Investigator',
    streak: 9
  }
];

const achievements = [
  { name: 'First Upload', desc: 'Share your first evidence', points: 50, icon: '📸' },
  { name: 'Truth Seeker', desc: 'Get 100 upvotes on a single post', points: 100, icon: '👁️' },
  { name: 'Viral Warrior', desc: 'Post reaches 10K views', points: 200, icon: '🔥' },
  { name: 'Corruption Hunter', desc: 'Upload 50 verified pieces of evidence', points: 500, icon: '🏆' },
  { name: 'Community Hero', desc: 'Help verify 100 other posts', points: 300, icon: '🦸' },
  { name: 'Protest Champion', desc: 'Document 10 protest events', points: 250, icon: '✊' }
];

export function BountyBoard() {
  const { t } = useLanguage();

  const shareAchievement = (contributor: Contributor) => {
    const shareText = `🏆 I'm #${topContributors.indexOf(contributor) + 1} on KurakotKiller.ph leaderboard with ${contributor.points} points! Join the fight against corruption! ${contributor.badge} #LabanSaKatiwalian @KurakotKillerPH https://kurakotkiller.ph`;
    
    if (navigator.share) {
      navigator.share({
        title: `KurakotKiller.ph - Leaderboard Achievement`,
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
          <Trophy className="w-5 h-5 text-yellow-500" />
          Community Bounty Board
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Gamified contribution system - Earn points for exposing corruption!
        </p>
      </CardHeader>
      <CardContent>
        {/* Point System */}
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-900/20 to-red-900/20 rounded-lg border border-yellow-600">
          <h4 className="font-semibold text-yellow-400 mb-3">🎯 How to Earn Points</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+10</div>
              <div className="text-gray-300">Per Upvoted Upload</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">+20</div>
              <div className="text-gray-300">Per Verified Evidence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">+50</div>
              <div className="text-gray-300">Per Achievement Unlocked</div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mb-6">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Top Contributors This Month
          </h4>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div key={contributor.id} className={`p-4 rounded-lg border ${
                index === 0 ? 'bg-yellow-900/20 border-yellow-600' :
                index === 1 ? 'bg-gray-700 border-gray-500' :
                index === 2 ? 'bg-orange-900/20 border-orange-600' :
                'bg-gray-700 border-gray-600'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-yellow-600 text-black' :
                      index === 1 ? 'bg-gray-500 text-white' :
                      index === 2 ? 'bg-orange-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {index < 3 ? ['🥇', '🥈', '🥉'][index] : `#${index + 1}`}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{contributor.username}</div>
                      <div className="text-sm text-gray-400">{contributor.badge}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-yellow-400">
                      {contributor.points.toLocaleString()} pts
                    </div>
                    <div className="text-xs text-gray-400">
                      {contributor.verified}/{contributor.uploads} verified • {contributor.streak} day streak
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareAchievement(contributor)}
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white ml-4"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-500" />
            Achievements to Unlock
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{achievement.name}</div>
                    <div className="text-sm text-gray-400">{achievement.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-400">+{achievement.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Challenge */}
        <div className="p-4 bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-lg border border-red-600">
          <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
            🔥 February 2025 Challenge: #FloodgateFiles
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Upload evidence of flood-control project irregularities. Top 10 contributors get featured on our X account @KurakotKillerPH and receive special "Floodgate Hunter" badges.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Challenge ends in: <span className="text-white font-semibold">18 days</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white" size="sm">
              <Upload className="w-4 h-4 mr-1" />
              Join Challenge
            </Button>
          </div>
        </div>

        {/* Your Stats (Mock) */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h4 className="font-semibold text-white mb-3">Your Progress</h4>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-xl font-bold text-yellow-400">0</div>
              <div className="text-gray-400">Points Earned</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-400">0</div>
              <div className="text-gray-400">Uploads Made</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-400">0</div>
              <div className="text-gray-400">Evidence Verified</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Upload className="w-4 h-4 mr-1" />
              Start Contributing
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}