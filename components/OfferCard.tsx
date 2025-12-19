import React from 'react';
import { Offer } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface OfferCardProps {
  offer: Offer;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
    <div className="group relative block bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300">
      
      {/* Image Container - Sharp edges */}
      <div className="relative h-64 overflow-hidden border-b border-neutral-800">
        <img 
          src={offer.imageUrl} 
          alt={offer.title} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Badge - Rectangular */}
        {offer.badge && (
          <div className="absolute top-0 right-0 z-20">
            <span className="bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              {offer.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">
              {offer.category}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-rose-500 transition-colors">
              {offer.title}
            </h3>
          </div>
          <span className="text-neutral-500 text-sm font-serif italic">
            {offer.rating} / 5.0
          </span>
        </div>
        
        <p className="text-neutral-500 mb-8 text-sm leading-relaxed border-t border-neutral-800 pt-4">
          {offer.description}
        </p>

        <a 
          href={offer.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button className="w-full bg-transparent border border-neutral-700 text-white hover:bg-white hover:text-black font-medium py-3 px-4 uppercase tracking-widest text-xs transition-colors duration-300 flex items-center justify-between group/btn">
            <span>{offer.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};