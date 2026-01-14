import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react';
import { ViewState, NavItem } from '../types';
import ScrambleText from './ScrambleText';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'MANIFESTO' },
  { id: 'services', label: 'SOLUTIONS' },
  { id: 'contact', label: 'CONTACT' },
];

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-24 bg-white/90 backdrop-blur-sm flex items-center justify-between px-6 lg:px-12 border-b border-black"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo Area */}
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onViewChange('home')}
        >
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter uppercase">TASHI</span>
            <span className="text-[0.6rem] font-mono tracking-widest uppercase">Technologies</span>
          </div>
        </div>

        {/* Desktop Nav - Editorial Style */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item, idx) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className="relative group flex items-start gap-1"
              >
                <span className="text-[10px] font-mono -mt-1">{`0${idx + 1}`}</span>
                <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                   {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Side Tagline */}
        <div className="hidden md:flex items-center gap-6">
           <div className="text-right">
              <div className="text-xs font-black uppercase tracking-tight">WORK THAT WORKS!</div>
              <div className="text-[0.6rem] font-mono text-gray-500">SYSTEMS ONLINE</div>
           </div>
           <button 
             onClick={() => onViewChange('contact')}
             className="w-12 h-12 bg-black text-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
           >
             <ArrowUpRight size={20} />
           </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 border border-black bg-black text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between pt-32 pb-12 px-6 md:hidden"
          >
             <div className="flex flex-col gap-4">
               {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-4 border-b border-black group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-black">0{i + 1}</span>
                    <span className="text-4xl font-black uppercase tracking-tighter group-hover:pl-4 transition-all duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              ))}
             </div>
             
             <div className="text-xs font-mono">
                WORK THAT WORKS!<br/>
                ©2026 TASHI TECH
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;