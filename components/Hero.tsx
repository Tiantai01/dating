import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffers = () => {
    const element = document.getElementById('offers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-end pb-24 md:items-center md:pb-0 overflow-hidden border-b border-neutral-900">
      {/* Background Image - Less overlay, more image power */}
      <div className="absolute inset-0 z-0">
        {/* [TODO] 在这里更换首屏背景大图。建议使用深色系、诱惑但不过于露骨的高清图片(1920x1080) */}
        <img 
          src="https://i.ibb.co/ZRnp1K2K/Screen-Shot-2025-12-21-173059-472.png" 
          alt="Background" 
          className="w-full h-full object-cover filter brightness-[0.4] grayscale-[30%]"
        />
        {/* Subtle vignette instead of heavy gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-9">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-rose-600"></span>
            <span className="text-rose-500 text-xs font-bold uppercase tracking-[0.2em]">
              Premium Adult Gateway
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-6 leading-[0.9]">
            Velvet <br/>
            <span className="not-italic font-sans font-bold tracking-tighter">Connection</span>
          </h1>
          
          <p className="text-lg text-neutral-400 mb-10 max-w-2xl font-light border-l border-neutral-700 pl-6">
            The definitive guide to the world's most exclusive <strong className="text-neutral-200 font-medium">adult dating sites</strong> and <strong className="text-neutral-200 font-medium">private live cam</strong> platforms. 
            Discretion is our currency. Pleasure is your return.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0">
            <button 
              onClick={scrollToOffers}
              className="bg-rose-700 hover:bg-rose-800 text-white px-10 py-5 font-bold uppercase tracking-wider text-sm transition-all rounded-sm"
            >
              Access Verified Collection
            </button>
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 px-8 py-5 flex items-center gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-neutral-300 uppercase tracking-wider">2,400+ Active Models</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 hidden md:block"></div>
    </section>
  );
};
