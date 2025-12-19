export enum OfferCategory {
  LIVESTREAM = 'Live Interaction',
  DATING = 'Private Dating',
  GAMES = 'Interactive Games',
  COMMUNITY = 'VIP Community'
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  category: OfferCategory;
  imageUrl: string;
  ctaText: string;
  affiliateLink: string;
  rating: number; // 1-5
  badge?: string; // e.g., "Trending", "New"
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}