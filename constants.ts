import { Offer, OfferCategory, Benefit } from './types';

export const SITE_NAME = "Velvet Connect";

// ============================================================================
// 重要配置区
// ============================================================================
// 说明：
// 1. imageUrl: 替换为你的产品图片链接 (可以使用 Imgur 图床或本地 public 文件夹路径)
// 2. affiliateLink: 替换为你的联盟追踪链接 (Tracking Link)
// 3. title/description: 修改为更有吸引力的文案
// ============================================================================

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Secret Live',
    description: 'Top-rated private streaming platform featuring verified independent broadcasters. Experience HD video chat with no scripts, ensuring genuine connection.',
    category: OfferCategory.LIVESTREAM,
    // [TODO] 替换下方图片链接
    imageUrl: 'https://picsum.photos/id/338/600/400', 
    ctaText: 'Watch Live Now',
    // [TODO] 替换下方 # 为你的联盟链接，例如 'https://bit.ly/xxxx'
    affiliateLink: '#',
    rating: 4.9,
    badge: 'Trending'
  },
  {
    id: '2',
    title: 'Local Encounters',
    description: 'The #1 rated discreet dating app for local meetups. Advanced location matching with end-to-end encryption for total anonymity.',
    category: OfferCategory.DATING,
    // [TODO] 替换下方图片链接
    imageUrl: 'https://picsum.photos/id/64/600/400',
    ctaText: 'View Local Matches',
    // [TODO] 替换下方 # 为你的联盟链接
    affiliateLink: '#',
    rating: 4.7,
    badge: 'Verified Users'
  },
  {
    id: '3',
    title: 'After Dark VR',
    description: 'Next-gen adult VR experiences. Compatible with Oculus and mobile. Immerse yourself in 8K resolution interactive scenarios.',
    category: OfferCategory.GAMES,
    // [TODO] 替换下方图片链接
    imageUrl: 'https://picsum.photos/id/453/600/400',
    ctaText: 'Try VR Free',
    // [TODO] 替换下方 # 为你的联盟链接
    affiliateLink: 'https://t.crjmpx.com/279489/7477?aff_sub5=SF_006OG000004lmDN',
    rating: 4.8
  },
  {
    id: '4',
    title: 'Elite Singles',
    description: 'Premium dating for successful professionals. The sophisticated alternative to casual hookup sites, focusing on high-quality connections.',
    category: OfferCategory.DATING,
    // [TODO] 替换下方图片链接
    imageUrl: 'https://picsum.photos/id/331/600/400',
    ctaText: 'Join Elite List',
    // [TODO] 替换下方 # 为你的联盟链接
    affiliateLink: '#',
    rating: 4.6
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Verified Profiles Only',
    description: 'We rigorously filter bots. Connect with real people verified via ID and photo checks for a safe adult dating experience.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Anonymous & Secure',
    description: 'Your privacy is paramount. We feature platforms with military-grade encryption and discreet billing statements.',
    iconName: 'Lock'
  },
  {
    title: 'Instant Premium Access',
    description: 'Skip the waiting lists. Our partners provide immediate access to 4K streams and VIP dating features upon registration.',
    iconName: 'Zap'
  }
];
