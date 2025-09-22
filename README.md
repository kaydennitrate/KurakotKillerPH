# KurakotKiller.ph - Anti-Corruption Platform

<div align="center">
  
  ![KurakotKiller.ph](https://img.shields.io/badge/KurakotKiller.ph-Anti--Corruption%20Platform-red)
  ![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
  ![Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-black)
  ![Philippines](https://img.shields.io/badge/Built%20for-Philippines-blue)
  
  **Expose the ₱3.3T Flood-Control Corruption Scandal**
  
  *Built for Filipinos, by Filipinos. Since corrupt officials stole our funds, we're using Vercel's free hosting to expose them.*

</div>

## 🔥 About KurakotKiller.ph

KurakotKiller.ph is a real-time corruption pulse tracker specifically built to expose the 2025 Philippines flood-control corruption scandal ("Floodgate"). The platform empowers Filipinos to share evidence, track protests, and demand justice through:

- **Interactive Corruption Heatmap** - Track flood-control project anomalies nationwide
- **Live Community Chat** - Real-time discussions and evidence sharing
- **Viral Evidence Sharing** - Community-voted evidence with social media integration
- **Protest Coordination** - Live protest tracking with safety information
- **Anonymous Contributions** - Secure evidence submission with credibility voting

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-anonymous-account/kurakotkiller-ph)

### Deployment Steps:

1. **Create Anonymous GitHub Account**
   ```
   Username suggestion: KurakotKillerDev
   Email: Use a secure, anonymous email
   Keep identity completely private
   ```

2. **One-Click Vercel Deploy**
   - Click the "Deploy with Vercel" button above
   - Connect your anonymous GitHub account
   - Deploy automatically to Vercel's free tier
   - Get instant `.vercel.app` subdomain

3. **Custom Domain Setup** (kurakotkiller.ph)
   - Purchase domain from Namecheap: `kurakotkiller.ph`
   - In Vercel Dashboard → Settings → Domains
   - Add custom domain: `kurakotkiller.ph`
   - Configure DNS records as shown by Vercel
   - SSL certificate auto-generated

4. **Environment Variables Setup**
   - Copy `.env.example` to `.env.local`
   - Configure Supabase (database & auth)
   - Add X/Twitter API keys for social integration
   - Set up other optional services

## 🛠 Local Development Setup

```bash
# Clone repository
git clone https://github.com/KurakotKillerDev/kurakotkiller-ph.git
cd kurakotkiller-ph

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 Core Features

### 🗺️ Interactive Dashboard
- **Corruption Heatmap**: Leaflet.js map showing flood project anomalies
- **Media Timeline**: Trending X posts and TikTok videos (#TrillionPesoMarch, #Floodgate)
- **Viral Clips Carousel**: Top community-uploaded evidence
- **Bounty Board**: Gamified contribution system with points and achievements

### 💬 Live Chat System
- Real-time community discussions powered by Supabase Realtime
- Anonymous usernames (e.g., "PinoyFighter123")
- Media sharing (photos, videos up to 5MB)
- Message pinning and community moderation
- Mobile-friendly collapsible interface

### 📤 Evidence Upload System
- Anonymous file uploads (photos, videos, documents)
- Community voting (upvote/downvote) for credibility
- Automatic sharing to X with @KurakotKillerPH tags
- Gamified points system for contributors

### 📍 Protest Tracking
- Live protest location mapping
- Safety tips and crowd updates
- Protest story submission (max 500 characters)
- Community-moderated credibility system

## 🌐 Language Support

Built-in Tagalog/English toggle using react-i18next:
- **English**: Full interface in English
- **Tagalog**: Key terms translated ("Upload" → "I-upload", "Chat" → "Makipag-usap")
- Automatic browser language detection
- Mobile-friendly language switcher

## 🔒 Privacy & Security

- **Anonymous Identity**: No personal Twitter/GitHub links
- **Generic Contact**: admin@kurakotkiller.ph
- **GDPR Compliant**: IP anonymization, secure data handling
- **Community Moderation**: Keyword filtering, report system
- **Secure Storage**: Supabase with row-level security

## 💰 Donation System

### Digital Wallets (QR Codes)
- **GCash QR**: `/public/gcash-qr-placeholder.png` (edit with your QR)
- **Maya QR**: `/public/maya-qr-placeholder.png` (edit with your QR)

### Cryptocurrency Wallets
- **TON**: `UQD8RmP7C9CDUGuJRuVO1IP7xqpUPR0tFCu5n5rvwGaSM6yt`
- **Solana**: `549m2zaHWppZ56jD9LuqhM4jy9vYVsp7NGVtwFyJsvG7`
- **EVM**: `0x667756929203c71f66cb33e9e69649f3c7feeae1`

### External Platforms
- **Buy Me a Coffee**: Configure in `.env.local`

### Transparency Promise
All donations fund hosting, moderation, and protest tools. No profits, just justice.

## 🐦 Social Media Integration

### X (Twitter) Integration
- **Official Account**: [@KurakotKillerPH](https://x.com/KurakotKillerPH)
- **Auto-generated Shares**: "Exposed on KurakotKiller.ph! #LabanSaKatiwalian [link] @KurakotKillerPH"
- **Hashtag Tracking**: #TrillionPesoMarch, #Floodgate, #LabanSaKatiwalian
- **X API Integration**: Real-time trending post embedding

### TikTok Promotion Script
```
"Flooded streets, stolen billions? Chat live and share proof on KurakotKiller.ph! 
#LabanSaKatiwalian #FloodgateExposed @KurakotKillerPH"
```

Use with 10-second protest footage background for maximum viral potential.

## 📱 Progressive Web App (PWA)

- **Offline Support**: Service worker for offline access
- **Push Notifications**: Breaking news and protest updates
- **Mobile-Optimized**: Native app-like experience
- **Add to Home Screen**: One-tap installation
- **Fast Loading**: <2s load time on 3G networks

## 🛡️ Content Moderation

### Automatic Filters
- Keyword blocking: "scam", "idiot", spam prevention
- Rate limiting: Upload/chat/voting limits
- File type validation: Images, videos, documents only
- File size limits: 5MB maximum

### Community Moderation
- Report button on all content
- Community voting for credibility
- Auto-archive chat after 24 hours
- Moderator review system

## 📈 SEO Optimization

### Target Keywords
- "Philippines corruption 2025"
- "flood scandal protests"
- "kurakot tracker"
- "#TrillionPesoMarch"

### SEO Features
- Open Graph meta tags for social sharing
- Structured data markup
- XML sitemap (`/sitemap.xml`)
- Robots.txt configuration
- Canonical URLs and proper heading structure

## 🔧 Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom activist theme
- **Database**: Supabase (PostgreSQL with real-time subscriptions)
- **Authentication**: Supabase Auth (email/password)
- **File Storage**: Vercel Blob or Supabase Storage
- **Maps**: Leaflet.js for interactive corruption heatmap
- **Hosting**: Vercel (free tier optimized)
- **Domain**: Custom domain (kurakotkiller.ph)

## 📂 Project Structure

```
kurakotkiller-ph/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage with hero and dashboard
│   ├── globals.css        # Global styles and custom CSS
│   └── (pages)/           # Additional pages
├── components/            # Reusable React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── dashboard/        # Heatmap, Timeline, Stories, etc.
│   ├── chat/             # Live chat system
│   ├── providers/        # Context providers (Language, Notifications)
│   └── ui/               # Shadcn/ui components
├── public/               # Static assets
│   ├── manifest.json     # PWA manifest
│   ├── sitemap.xml       # SEO sitemap
│   └── *-qr-placeholder.png # QR code placeholders
├── lib/                  # Utility functions and configurations
├── next.config.js        # Next.js configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # This file
```

## 🚨 Important Notes

### For Developers
1. **Keep Identity Anonymous**: No personal social media links
2. **Use Free Tier Only**: Vercel free hosting, Supabase free tier
3. **Regular Updates**: Keep trending content fresh
4. **Community First**: Prioritize user safety and authentic content

### For Users
1. **Content Disclaimer**: "User-submitted; KurakotKiller.ph not responsible for accuracy"
2. **Safety First**: Follow protest safety guidelines in `/safety`
3. **Report Issues**: Use report buttons for inappropriate content
4. **Stay Anonymous**: Platform protects user privacy

## 🔄 Alternative Domains

If `kurakotkiller.ph` is unavailable:
- `bantaykurakot.ph`
- `floodgateph.com`
- `labansakatiwalian.ph`
- `corruptiontracker.ph`

## 📞 Support & Contact

- **General Contact**: admin@kurakotkiller.ph
- **Twitter Support**: [@KurakotKillerPH](https://x.com/KurakotKillerPH)
- **Transparency Report**: `/transparency`
- **Safety Guidelines**: `/safety`

## 📜 License

This project is released into the public domain for the benefit of the Filipino people. Use, modify, and distribute freely in the fight against corruption.

---

<div align="center">
  
  **"Para sa bayan, laban sa kurakot!"**
  
  *Built with ❤️ for justice and accountability*
  
  [🌐 Visit KurakotKiller.ph](https://kurakotkiller.ph) | [🐦 Follow @KurakotKillerPH](https://x.com/KurakotKillerPH)
  
</div>
