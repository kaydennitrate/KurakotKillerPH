"use client";

import { Hero } from '@/components/home/Hero';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { TrendingAlert } from '@/components/alerts/TrendingAlert';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <TrendingAlert />
      <Hero />
      <Dashboard />
    </>
  );
}
