import React, { useState } from 'react';
// Removed AnimatePresence, motion, Menu, X imports (no mobile menu)
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
  // Removed mobile menu state

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

          {/* No mobile menu toggle */}
        </div>
      </header>

      {/* No mobile menu overlay */}
    </>
  );
};

export default Header;