import React from 'react';
import { ViewState } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-transparent text-white pt-20 border-t border-white/10 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 md:px-12 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">Index</h4>
               <ul className="space-y-4 font-mono text-sm text-gray-400">
                  <li onClick={() => onViewChange('about')} className="cursor-pointer hover:text-white hover:pl-2 transition-all duration-300">Manifesto</li>
                  <li onClick={() => onViewChange('services')} className="cursor-pointer hover:text-white hover:pl-2 transition-all duration-300">Solutions</li>
                  <li onClick={() => onViewChange('contact')} className="cursor-pointer hover:text-white hover:pl-2 transition-all duration-300">Contact</li>
               </ul>
            </div>
            <div className="flex flex-col justify-between">
               <div>
                 <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">Global Presence</h4>
                 <p className="font-mono text-sm text-gray-400">Islamabad / Remote</p>
               </div>
               <div className="mt-12">
                  <button onClick={() => onViewChange('contact')} className="group flex items-center gap-4 text-xl font-bold uppercase tracking-tight text-white">
                     <span className="group-hover:tracking-widest transition-all duration-500">Start Project</span>
                     <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={16} />
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Massive Logo */}
      <div className="w-full border-t border-white/10 relative">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <h1 className="text-[25vw] leading-[0.8] font-black tracking-tighter text-center select-none text-white/5 hover:text-white/10 transition-colors duration-700">
            TASHI
         </h1>
      </div>
      
      <div className="bg-black/50 backdrop-blur-md text-gray-500 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase border-t border-white/5 gap-4">
         <div className="flex gap-4">
            <span>Tashi Technologies Corp.</span>
         </div>
         <span>Work That Works!</span>
      </div>
    </footer>
  );
};

export default Footer;