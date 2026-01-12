import React from 'react';
import { ViewState } from '../types';
import { motion } from 'framer-motion';
import { Lock, Database, Hexagon } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white border-t-4 border-black pt-24 pb-12 px-6 md:px-12 relative z-10 overflow-hidden font-mono"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">
        
        {/* Branding Section */}
        <div>
           <div className="flex items-center gap-2 mb-6">
             <Hexagon size={32} className="text-black fill-black" />
           </div>
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
             TASHI<br/>TECH.
           </h2>
           <p className="text-sm font-bold text-black uppercase tracking-widest max-w-md border-l-2 border-black pl-4">
             The architecture of truth. Building the verifiable layer for autonomous intelligence.
           </p>
        </div>

        {/* Minimal Right Side - Removed Telemetry Bullshit */}
        <div className="flex justify-start md:justify-end items-end h-full">
            <h3 className="text-9xl text-gray-100 font-black tracking-tighter select-none leading-none -mb-8">
              2026
            </h3>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em]">
         <div className="flex items-center gap-4">
            <span>© 2026 Tashi Technologies</span>
            <span className="hidden md:inline">/</span>
            <span>Islamabad, PK</span>
         </div>
         
         <div className="flex items-center gap-8 text-black opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2"><Lock size={12} /> <span>Encrypted</span></div>
            <div className="flex items-center gap-2"><Database size={12} /> <span>Verified</span></div>
         </div>
      </div>
      
    </motion.footer>
  );
};

export default Footer;