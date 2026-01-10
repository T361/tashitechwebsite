import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Intelligence' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transformations for the sticky header effect
  const height = useTransform(scrollY, [0, 100], ['5rem', '4rem']);
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['0px', '12px']);
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.08)']
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        style={{ height, backgroundColor, backdropFilter: backdropBlur, borderBottomColor: borderColor }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 border-b border-transparent transition-colors duration-300"
      >
        {/* Logo Section - Replaced with Image */}
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => onViewChange('home')}
        >
          {/* IMPORTANT: Upload your logo as 'logo.png' in the public folder */}
          <img 
            src="/logo.png" 
            alt="tashitech.ai" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text if Logo Image is missing */}
          <span className="hidden font-bold text-xl tracking-tight text-white lowercase">
            tashitech<span className="text-tashi-blue">.ai</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative px-2 py-1 ${
                currentView === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-tashi-blue shadow-[0_0_8px_#3B82F6]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          <button 
            onClick={() => onViewChange('contact')}
            className="ml-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-tashi-blue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 text-sm font-medium text-white group flex items-center gap-2"
          >
            Get Started
            <ChevronRight size={14} className="text-tashi-blue group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-light tracking-wide ${
                  currentView === item.id ? 'text-tashi-blue' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;