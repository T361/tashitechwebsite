import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: 'services', label: 'Platform' },
  { id: 'about', label: 'Solutions' },
  { id: 'contact', label: 'Company' },
];

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ height: '4rem' }} 
        animate={{ 
          height: isHovered || isMobileMenuOpen ? '6rem' : '4rem', 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* --- LOGO SECTION (IMAGE FILE) --- */}
          <div 
            className="flex items-center cursor-pointer select-none"
            onClick={() => onViewChange('home')}
          >
            <motion.div 
              className="relative flex items-center justify-center"
              animate={{ 
                height: isHovered ? 48 : 32 // Grows slightly on hover
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* THIS IS THE IMAGE TAG - IT LOOKS FOR public/logo.png */}
              <img 
                src="/logo.png" 
                alt="Tashi Logo" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // keep view state in sync if parent expects it
                onViewChange('contact');
              }}
              className="bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm"
              animate={{
                paddingLeft: isHovered ? 24 : 20,
                paddingRight: isHovered ? 24 : 20,
                paddingTop: isHovered ? 12 : 10,
                paddingBottom: isHovered ? 12 : 10,
                fontSize: isHovered ? '0.95rem' : '0.875rem'
              }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 z-[45] bg-white pt-28 px-6 md:hidden"
          >
             <div className="flex flex-col gap-6">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
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
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    onViewChange('contact');
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