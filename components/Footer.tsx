import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-white/10 bg-tashi-surface py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg tracking-tight text-white lowercase">
            tashitech<span className="text-white/50">.ai</span>
          </span>
          <p className="text-[10px] text-gray-500 mt-1 text-center md:text-left">
            Engineering the bedrock of the decentralized, intelligent future.
          </p>
        </div>

        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          © 2026 tashitech.ai
        </p>
      </div>
    </footer>
  );
};

export default Footer;