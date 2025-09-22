"use client";

import { useState } from 'react';
import { TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function TrendingAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-yellow-400 text-black py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 animate-bounce" />
          <span className="font-bold text-sm md:text-base">
            🔥 Top post: 500 upvotes for Manila flood photo! | 1000 signatures reached on DPWH petition!
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-black hover:bg-black/10 p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
