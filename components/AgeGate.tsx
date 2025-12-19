import React from 'react';

interface AgeGateProps {
  onVerify: () => void;
}

export const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
      <div className="max-w-md w-full p-8 border border-neutral-800 bg-neutral-900 shadow-2xl">
        <div className="border-b border-neutral-800 pb-6 mb-6">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest text-center">
            Restricted Access
          </h2>
        </div>
        
        <div className="space-y-6 text-center">
          <p className="text-neutral-400 text-sm leading-relaxed">
            This website contains sexually explicit material intended for adults only. 
            Access is strictly prohibited for individuals under the age of 18 (or the age of majority in your jurisdiction).
          </p>
          
          <div className="py-4 px-6 bg-neutral-950 border border-red-900/30">
            <p className="text-red-500 text-xs font-mono uppercase tracking-wider">
              18+ Compliance Verification
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col gap-3">
          <button 
            onClick={onVerify}
            className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors rounded-sm"
          >
            I am 18 or Older - Enter
          </button>
          
          <a 
            href="https://www.google.com" 
            className="w-full py-4 bg-transparent border border-neutral-800 text-neutral-500 font-medium uppercase tracking-wider text-center hover:text-white hover:border-neutral-600 transition-colors rounded-sm text-sm"
          >
            Leave Website
          </a>
        </div>
      </div>
    </div>
  );
};