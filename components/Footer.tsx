import React from 'react';
import { SITE_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-serif italic text-white mb-6">
              {SITE_NAME}
            </h3>
            <p className="text-neutral-500 leading-relaxed text-xs max-w-xs mb-6">
              The premier destination for honest adult entertainment reviews. We connect discerning users with verified, top-tier experiences across dating, streaming, and interactive media.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 hover:border-rose-500 transition-colors"></div>
               <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 hover:border-rose-500 transition-colors"></div>
               <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 hover:border-rose-500 transition-colors"></div>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Categories</h4>
            <ul className="space-y-4 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Live Cams</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Private Dating</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">VR Experiences</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Hookup Apps</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Adult Gaming</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Billing Support</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Report Profile</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Unsubscribe</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">2257 Compliance</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">DMCA Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-neutral-600 text-[10px] uppercase tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. 18+ Only.
          </p>
          <p className="max-w-md text-right hidden md:block">
            This site contains affiliate links. All models appearing on this website are 18 years or older.
          </p>
        </div>
        <p className="mt-4 text-neutral-700 text-[10px] md:hidden">
            This site contains affiliate links. All models appearing on this website are 18 years or older.
        </p>
      </div>
    </footer>
  );
};