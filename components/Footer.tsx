import React from 'react';
import { ViewState } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-transparent text-white pt-20 border-t border-white/20 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 md:px-12 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400">Navigation</h4>
               <ul className="space-y-4 font-mono text-sm text-gray-200">
                  <li onClick={() => onViewChange('about')} className="cursor-pointer hover:text-white hover:underline decoration-white/50">Manifesto</li>
                  <li onClick={() => onViewChange('services')} className="cursor-pointer hover:text-white hover:underline decoration-white/50">Solutions</li>
                  <li onClick={() => onViewChange('contact')} className="cursor-pointer hover:text-white hover:underline decoration-white/50">Contact</li>
               </ul>
            </div>
            <div className="flex flex-col justify-between">
               <div>
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400">Locations</h4>
                 <p className="font-mono text-sm text-gray-200">Islamabad / Global</p>
               </div>
               <div className="mt-12">
                  <button onClick={() => onViewChange('contact')} className="flex items-center gap-2 text-xl font-bold uppercase tracking-tight hover:gap-4 transition-all text-white">
                     Start Project <ArrowUpRight />
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Massive Logo */}
      <div className="w-full border-t border-white/20">
         <h1 className="text-[25vw] leading-[0.8] font-black tracking-tighter text-center select-none text-white/10 hover:text-white transition-colors duration-700">
            TASHI
         </h1>
      </div>
      
      <div className="bg-white/5 backdrop-blur-md text-gray-400 py-4 px-6 md:px-12 flex justify-between items-center text-[10px] font-mono uppercase border-t border-white/10">
         <span>© 2026 Tashi Technologies</span>
         <span>Work That Works!</span>
      </div>
    </footer>
  );
};

export default Footer;