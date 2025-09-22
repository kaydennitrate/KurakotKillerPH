"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'tl';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    protest_tracker: 'Protest Tracker',
    upload: 'Upload Evidence',
    transparency: 'Transparency',
    contact: 'Contact',
    safety: 'Safety Guide',
    support_us: 'Support Us',
    
    // Hero
    hero_title: 'Expose the Flood of Corruption',
    hero_subtitle: 'Track the ₱9.5B flood-control corruption scandal. Share evidence, join protests, demand justice.',
    stolen_funds: 'Stolen Funds',
    protesters: 'Protesters',
    ghost_projects: 'Ghost Projects',
    views_online: 'Views Online',
    share_evidence: 'Share Evidence',
    join_chat: 'Join Chat',
    track_protests: 'Track Protests',
    trending_hashtags: 'Trending Hashtags',
    
    // Dashboard
    corruption_pulse_tracker: 'Corruption Pulse Tracker',
    dashboard_subtitle: 'Real-time monitoring of flood-control project anomalies across the Philippines',
    heatmap: 'Heatmap',
    media: 'Media',
    viral_clips: 'Viral Clips',
    stories: 'Stories',
    bounty_board: 'Bounty Board',
    
    // Map
    corruption_heatmap: 'Corruption Heatmap',
    cost: 'Cost',
    stolen: 'Stolen',
    status: 'Status',
    legend: 'Legend',
    ghost_project: 'Ghost Project',
    overpriced: 'Overpriced',
    substandard: 'Substandard',
    incomplete: 'Incomplete',
    
    // Media Timeline
    viral_media_timeline: 'Viral Media Timeline',
    trending: 'TRENDING',
    video_content: 'Video Content',
    share: 'Share',
    view: 'View',
    load_more_posts: 'Load More Posts',
    
    // Chat
    live_chat: 'Live Chat',
    messages: 'messages',
    type_message: 'Type your message...',
    chat_as: 'Chatting as',
    
    // Footer
    support_kurakotkiller: 'Support KurakotKiller.ph',
    support_message: 'Help us fight corruption! Scan our GCash or Maya QR codes (placeholders below—we\'ll edit images later). Crypto donations welcome too. We\'re not milking Filipinos—this is for justice, transparency, and accountability.',
    qr_placeholder_note: 'Placeholder - Edit later',
    crypto_donations: 'Crypto Donations Welcome',
    copy: 'Copy',
    buy_coffee: 'Buy Me a Coffee',
    follow_us: 'Follow Us',
    transparency_note: 'Donations fund Vercel hosting, Supabase, chat moderation, and protest tools. No profits.',
    view_transparency: 'View Transparency Report',
    contact_email: 'Contact Email',
    built_for_justice: 'Built for justice by Filipinos',
    no_profits_justice: 'No profits, just justice',
    safety_guide: 'Safety Guide',
  },
  tl: {
    // Navigation
    dashboard: 'Dashboard',
    protest_tracker: 'Tagasubaybay ng Protesta',
    upload: 'I-upload ang Ebidensya',
    transparency: 'Transparency',
    contact: 'Makipag-ugnayan',
    safety: 'Gabay sa Kaligtasan',
    support_us: 'Suportahan Kami',
    
    // Hero
    hero_title: 'Ilantad ang Baha ng Korupsyon',
    hero_subtitle: 'Subaybayan ang ₱9.5B flood-control corruption scandal. Magbahagi ng ebidensya, sumali sa protesta, humingi ng katarungan.',
    stolen_funds: 'Ninakaw na Pondo',
    protesters: 'Mga Protestante',
    ghost_projects: 'Ghost Projects',
    views_online: 'Views Online',
    share_evidence: 'Magbahagi ng Ebidensya',
    join_chat: 'Makipag-usap',
    track_protests: 'Subaybayan ang Protesta',
    trending_hashtags: 'Trending na Hashtags',
    
    // Dashboard
    corruption_pulse_tracker: 'Corruption Pulse Tracker',
    dashboard_subtitle: 'Real-time na pagsubaybay sa mga flood-control project anomalies sa buong Pilipinas',
    heatmap: 'Heatmap',
    media: 'Media',
    viral_clips: 'Viral Clips',
    stories: 'Mga Kwento',
    bounty_board: 'Bounty Board',
    
    // Map
    corruption_heatmap: 'Corruption Heatmap',
    cost: 'Gastos',
    stolen: 'Ninakaw',
    status: 'Status',
    legend: 'Legend',
    ghost_project: 'Ghost Project',
    overpriced: 'Overpriced',
    substandard: 'Substandard',
    incomplete: 'Hindi Kumpleto',
    
    // Media Timeline
    viral_media_timeline: 'Viral Media Timeline',
    trending: 'TRENDING',
    video_content: 'Video Content',
    share: 'I-share',
    view: 'Tingnan',
    load_more_posts: 'Magkaroon pa ng Posts',
    
    // Chat
    live_chat: 'Live Chat',
    messages: 'mensahe',
    type_message: 'I-type ang inyong mensahe...',
    chat_as: 'Nakikipag-chat bilang',
    
    // Footer
    support_kurakotkiller: 'Suportahan ang KurakotKiller.ph',
    support_message: 'Tulungan ninyong labanan ang korupsyon! I-scan ang aming GCash o Maya QR codes (placeholders sa ibaba—ie-edit namin ang mga larawan mamaya). Welcome din ang crypto donations. Hindi namin ginagamit ang mga Pinoy—ito ay para sa katarungan, transparency, at accountability.',
    qr_placeholder_note: 'Placeholder - I-edit mamaya',
    crypto_donations: 'Welcome ang Crypto Donations',
    copy: 'Copy',
    buy_coffee: 'Buy Me a Coffee',
    follow_us: 'I-follow Kami',
    transparency_note: 'Ang mga donasyon ay ginagamit para sa Vercel hosting, Supabase, chat moderation, at protest tools. Walang kita.',
    view_transparency: 'Tingnan ang Transparency Report',
    contact_email: 'Contact Email',
    built_for_justice: 'Ginawa para sa katarungan ng mga Pinoy',
    no_profits_justice: 'Walang kita, puro katarungan',
    safety_guide: 'Gabay sa Kaligtasan',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'tl'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tl' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}