import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Crosshair } from 'lucide-react';
import { ViewState, NavItem } from '../types';
import ScrambleText from './ScrambleText';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'INDEX' },
  { id: 'services', label: 'SYSTEMS' },
  { id: 'about', label: 'MISSION' },
  { id: 'contact', label: 'UPLINK' },
];

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b border-black/10 flex items-center justify-between px-6 lg:px-12"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      >
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onViewChange('home')}
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-black text-white overflow-hidden">
             <Cpu size={18} className="relative z-10" />
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-tighter uppercase">TASHI<span className="font-light">TECH</span></span>
            <span className="text-[0.55rem] font-mono tracking-[0.2em] text-gray-500 uppercase">Verifiable Intelligence</span>
          </div>
        </div>

        {/* Desktop Nav - HUD Style */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`relative group flex flex-col items-center justify-center h-10 px-2`}
              >
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <span className={`text-[10px] font-mono text-gray-400 transition-colors ${isActive ? 'text-black' : ''}`}>
                    0{idx + 1}
                  </span>
                  <span className={`${isActive ? 'text-black' : 'text-gray-500 group-hover:text-black'} transition-colors duration-300`}>
                     {isActive ? <ScrambleText text={`[ ${item.label} ]`} speed={50} /> : item.label}
                  </span>
                </div>
                {/* Active Indicator Line */}
                <span className={`absolute -bottom-5 w-full h-[2px] bg-black transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            );
          })}
        </nav>

        {/* Right Side Status */}
        <div className="hidden md:flex items-center gap-4">
           <div className="flex flex-col items-end">
              <span className="text-[0.6rem] font-mono uppercase text-gray-400">Net_Status</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                <span className="text-xs font-bold tracking-wider">ONLINE</span>
              </div>
           </div>
           <button 
             onClick={() => onViewChange('contact')}
             className="ml-4 w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
           >
             <Crosshair size={18} className="group-hover:rotate-90 transition-transform duration-500" />
           </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 border border-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden"
          >
             {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  onViewChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-6 border-b border-gray-100 group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-gray-400">0{i + 1} //</span>
                  <span className="text-3xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;