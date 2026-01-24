import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [];

// Logo row: /logo.png + TASHI text
const LogoRow = () => (
  <div className="flex items-center gap-3 select-none" style={{ gap: 12 }}>
    <img
      src="/logo.png"
      alt="Tashi Logo"
      height={32}
      width={32}
      style={{ height: 32, width: 32, objectFit: 'contain', display: 'block' }}
      className="block"
    />
    <span className="text-lg font-bold uppercase tracking-tight text-black">TASHI</span>
  </div>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-tashi-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* --- LOGO ROW --- */}
          <div
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
            aria-label="Go to home"
            role="button"
          >
            <LogoRow />
          </div>

          {/* --- Centered Get Started Button --- */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white rounded-md px-6 py-2 text-base font-medium hover:bg-gray-800 transition-colors shadow-sm"
              style={{ minWidth: 140 }}
            >
              Get Started
            </button>
          </div>

          {/* --- Mobile Toggle --- */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 bg-white pt-12 px-6 md:hidden"
          >
             <div className="flex flex-col gap-6">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-lg font-medium text-black py-2 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 text-center bg-black text-white rounded-lg font-medium"
                >
                  Get Started
                </button>
              </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;