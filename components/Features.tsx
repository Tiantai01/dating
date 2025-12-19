import React from 'react';
import { BENEFITS } from '../constants';
import { Check } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif italic text-white mb-6">Standards of Excellence</h2>
            <p className="text-neutral-400 text-sm leading-7">
              We verify every platform listed in our directory. If it doesn't meet our strict criteria for privacy, security, and quality, it doesn't make the cut.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-0 border-t border-neutral-900">
              {BENEFITS.map((benefit, index) => (
                <div 
                  key={index}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-neutral-900 hover:bg-neutral-950 transition-colors px-4 -mx-4"
                >
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <span className="text-neutral-700 font-mono text-sm pt-1">0{index + 1}</span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{benefit.title}</h3>
                  </div>
                  <div className="md:w-1/2 flex items-start gap-3">
                    <p className="text-neutral-500 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};