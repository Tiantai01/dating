import React, { useState, useEffect } from 'react';
import { AgeGate } from './components/AgeGate';
import { Hero } from './components/Hero';
import { OfferCard } from './components/OfferCard';
import { Features } from './components/Features';
import { SEOContent } from './components/SEOContent';
import { Footer } from './components/Footer';
import { OFFERS } from './constants';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage to see if user already verified age
    const verified = localStorage.getItem('age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerification = () => {
    localStorage.setItem('age_verified', 'true');
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-rose-500 selection:text-white">
      {!isVerified && <AgeGate onVerify={handleVerification} />}

      <div className={!isVerified ? 'blur-lg h-screen overflow-hidden' : ''}>
        
        {/* Navigation Bar - Minimalist, text only */}
        <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-neutral-900">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white uppercase font-sans">Velvet<span className="text-rose-600">.</span></span>
            </div>
            
            <div className="flex items-center gap-6">
               <a href="#offers" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hidden sm:block">Collection</a>
               <button className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm">
                 Login
               </button>
            </div>
          </div>
        </nav>

        <Hero />

        {/* Offers Grid Section */}
        <div id="offers" className="py-24 bg-black relative">
          
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-800 pb-8">
              <div>
                <h2 className="text-3xl font-serif italic text-white mb-2">Curated Selections</h2>
                <p className="text-neutral-500 text-sm">Top rated platforms for 2024. Updated daily.</p>
              </div>
              <div className="flex gap-1">
                {['All', 'Live', 'Dating', 'Games'].map((filter) => (
                  <button 
                    key={filter}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-sm border ${
                      filter === 'All' 
                        ? 'bg-rose-900/20 border-rose-900 text-rose-500' 
                        : 'bg-transparent border-transparent text-neutral-500 hover:text-white hover:border-neutral-800'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {OFFERS.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>

        <div id="benefits">
          <Features />
        </div>

        {/* SEO Content Section - Added for organic search value */}
        <SEOContent />

        {/* Newsletter / CTA Section - Sharp and stark */}
        <section className="py-32 bg-neutral-950 border-t border-neutral-900">
          <div className="container mx-auto px-6 text-center">
            <span className="text-rose-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8">
              Private Access
            </h2>
            
            <form className="max-w-md mx-auto flex gap-0">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-black border border-neutral-800 border-r-0 px-6 py-4 text-white text-xs placeholder-neutral-600 focus:outline-none focus:border-rose-900 uppercase tracking-wider rounded-l-sm"
              />
              <button 
                type="button"
                className="bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-rose-700 transition-colors border border-neutral-800 border-l-0 rounded-r-sm"
              >
                Join
              </button>
            </form>
            <p className="mt-6 text-[10px] text-neutral-600 uppercase tracking-widest">
              We respect your inbox. No spam.
            </p>
          </div>
        </section>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;