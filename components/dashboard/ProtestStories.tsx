"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown, MessageCircle, Clock, Plus } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface Story {
  id: number;
  text: string;
  author: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  timestamp: Date;
  location?: string;
}

// Mock protest stories
const initialStories: Story[] = [
  {
    id: 1,
    text: "Flooded our barangay despite $10M flood control project being 'completed' 2 years ago. Where's the drainage? Where's the pump station? Our families are suffering while officials get rich! #LabanSaKatiwalian",
    author: 'FloodVictimQC',
    upvotes: 1248,
    downvotes: 12,
    comments: 89,
    timestamp: new Date(Date.now() - 7200000),
    location: 'Quezon City'
  },
  {
    id: 2,
    text: "I was at the Luneta protest yesterday. 40,000+ Filipinos united for justice! Saw families who lost homes to floods while officials bought luxury cars with our tax money. This is our moment!",
    author: 'ProtestWarrior',
    upvotes: 892,
    downvotes: 8,
    comments: 156,
    timestamp: new Date(Date.now() - 14400000),
    location: 'Manila'
  },
  {
    id: 3,
    text: "My lola's house floods every year. DPWH said they built a 'world-class' drainage system in our area for ₱2.5B. I went to check - it's just a small canal that gets clogged immediately. KURAKOT!",
    author: 'AnonymousApo',
    upvotes: 2156,
    downvotes: 15,
    comments: 234,
    timestamp: new Date(Date.now() - 21600000),
    location: 'Marikina'
  },
  {
    id: 4,
    text: "THREAD: How I discovered our flood control project was fake. Used FOIA to get documents, cross-referenced with Google Earth, found empty lots worth ₱500M. Evidence attached. RT to spread!",
    author: 'DataDetective',
    upvotes: 3421,
    downvotes: 23,
    comments: 445,
    timestamp: new Date(Date.now() - 28800000),
    location: 'Pasig'
  },
  {
    id: 5,
    text: "Cebu flood wall collapsed after 1 month. Cost: ₱750M. My engineering friends say it should have lasted 50 years minimum. Someone used substandard materials and pocketed the difference. SOBRANG KURAKOT!",
    author: 'CebuEngineer',
    upvotes: 1876,
    downvotes: 19,
    comments: 298,
    timestamp: new Date(Date.now() - 36000000),
    location: 'Cebu City'
  }
];

export function ProtestStories() {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [newStory, setNewStory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { t } = useLanguage();

  const submitStory = () => {
    if (newStory.trim() && newStory.length <= 500) {
      const story: Story = {
        id: Date.now(),
        text: newStory.trim(),
        author: `Anonymous${Math.floor(Math.random() * 1000)}`,
        upvotes: 0,
        downvotes: 0,
        comments: 0,
        timestamp: new Date(),
      };
      setStories(prev => [story, ...prev]);
      setNewStory('');
      setShowForm(false);
    }
  };

  const voteStory = (id: number, type: 'up' | 'down') => {
    setStories(prev => 
      prev.map(story => 
        story.id === id
          ? {
              ...story,
              upvotes: type === 'up' ? story.upvotes + 1 : story.upvotes,
              downvotes: type === 'down' ? story.downvotes + 1 : story.downvotes,
            }
          : story
      )
    );
  };

  const formatTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  return (
    <Card className="bg-gray-800 border-red-600">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-red-500" />
            Protest Stories & Impact Reports
          </CardTitle>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-red-600 hover:bg-red-700 text-white"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            Share Your Story
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Story Submission Form */}
        {showForm && (
          <div className="mb-6 p-4 bg-gray-700 rounded-lg border border-red-600">
            <h4 className="font-semibold text-white mb-3">Share Your Protest Experience or Corruption Impact</h4>
            <Textarea
              value={newStory}
              onChange={(e) => setNewStory(e.target.value)}
              placeholder="Tell your story about the flood scandal, protest experience, or how corruption affected you... (Max 500 characters)"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 mb-3"
              rows={4}
              maxLength={500}
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {newStory.length}/500 characters
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowForm(false);
                    setNewStory('');
                  }}
                  className="border-gray-600 text-gray-400 hover:bg-gray-600"
                >
                  Cancel
                </Button>
                <Button
                  onClick={submitStory}
                  disabled={!newStory.trim() || newStory.length > 500}
                  className="bg-red-600 hover:bg-red-700 text-white"
                  size="sm"
                >
                  Share Story
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Anonymous submission. Stories are community-moderated for credibility.
            </p>
          </div>
        )}

        {/* Stories Feed */}
        <div className="space-y-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {story.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">{story.author}</span>
                    {story.location && (
                      <span className="text-gray-400 text-sm ml-2">• {story.location}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{formatTimeAgo(story.timestamp)}</span>
                </div>
              </div>

              {/* Story Content */}
              <p className="text-gray-200 mb-4 leading-relaxed">
                {story.text}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => voteStory(story.id, 'up')}
                    className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{story.upvotes}</span>
                  </button>
                  
                  <button
                    onClick={() => voteStory(story.id, 'down')}
                    className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm font-medium">{story.downvotes}</span>
                  </button>

                  <div className="flex items-center gap-1 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{story.comments}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  Share on X
                </Button>
              </div>

              {/* Credibility Score */}
              <div className="mt-3 pt-3 border-t border-gray-600">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    Credibility: {Math.floor(((story.upvotes - story.downvotes) / Math.max(story.upvotes + story.downvotes, 1)) * 100)}%
                  </span>
                  <span className="text-yellow-400">
                    ⭐ Community Verified
                  </span>
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
            Load More Stories
          </Button>
        </div>

        {/* Community Guidelines */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-yellow-600">
          <h4 className="font-semibold text-yellow-400 mb-2">📋 Community Guidelines</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Share factual experiences and evidence-based observations</li>
            <li>• Respect others' stories and avoid personal attacks</li>
            <li>• Include location details when relevant for tracking patterns</li>
            <li>• Stories are moderated by community votes - report false claims</li>
            <li>• High-credibility stories may be featured on our X account @KurakotKillerPH</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}