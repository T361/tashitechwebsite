import React from 'react';
import { ViewState } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-white text-black pt-20 border-t border-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
               <ul className="space-y-4 font-mono text-sm">
                  <li onClick={() => onViewChange('about')} className="cursor-pointer hover:underline">Manifesto</li>
                  <li onClick={() => onViewChange('services')} className="cursor-pointer hover:underline">Solutions</li>
                  <li onClick={() => onViewChange('contact')} className="cursor-pointer hover:underline">Contact</li>
               </ul>
            </div>
            <div className="flex flex-col justify-between">
               <div>
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Locations</h4>
                 <p className="font-mono text-sm">Islamabad / Global</p>
               </div>
               <div className="mt-12">
                  <button onClick={() => onViewChange('contact')} className="flex items-center gap-2 text-xl font-bold uppercase tracking-tight hover:gap-4 transition-all">
                     Start Project <ArrowUpRight />
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Massive Logo */}
      <div className="w-full border-t border-black">
         <h1 className="text-[25vw] leading-[0.8] font-black tracking-tighter text-center select-none hover:text-transparent hover:bg-clip-text hover:bg-black transition-colors">
            TASHI
         </h1>
      </div>
      
      <div className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center text-[10px] font-mono uppercase">
         <span>© 2026 Tashi Technologies</span>
         <span>Work That Works!</span>
      </div>
    </footer>
  );
};

export default Footer;