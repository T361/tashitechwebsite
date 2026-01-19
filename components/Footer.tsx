import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="border-t border-gray-100 text-black pt-16 pb-8 relative z-10 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-bold tracking-tight">TASHI</span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Building the verifiable layer of the agentic web.
            </p>
            <div className="text-sm text-gray-400">
              © 2026 Tashi Technologies Corp.
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>Designed for performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;