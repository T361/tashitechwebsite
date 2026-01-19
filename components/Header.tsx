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

// --- CONFIGURATION ---
// 1. If you have an image URL, paste it here to use it instead of the local file.
//    Example: "https://via.placeholder.com/150"
const LOGO_URL = "/logo.png"; 

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <motion.div 
              className="flex items-center justify-center text-black relative"
              animate={{ 
                width: isHovered ? 48 : 40, // Slightly larger logo area
                height: isHovered ? 48 : 40 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {!logoError ? (
                <img 
                  src={LOGO_URL} 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={() => {
                    console.warn("Logo image failed to load. Falling back to SVG.");
                    setLogoError(true);
                  }}
                />
              ) : (
                /* --- FALLBACK SVG LOGO --- */
                /* Replace the SVG content below to change the fallback icon */
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="100" height="100" rx="25" fill="black" />
                  
                  {/* The "T" Shape - Delete this <path> and paste your own SVG path here if needed */}
                  <path 
                    d="M32 32H68C69.1046 32 70 32.8954 70 34V44C70 45.1046 69.1046 46 68 46H56V68C56 69.1046 55.1046 70 54 70H46C44.8954 70 44 69.1046 44 68V46H32C30.8954 46 30 45.1046 30 44V34C30 32.8954 30.8954 32 32 32Z" 
                    fill="white" 
                  />
                </svg>
              )}
            </motion.div>
            
            <motion.span 
              className="font-bold tracking-tight font-tight text-black"
              animate={{ fontSize: isHovered ? '1.5rem' : '1.25rem' }}
            >
              TASHI
            </motion.span>
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
              onClick={() => onViewChange('contact')}
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