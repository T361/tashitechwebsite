import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  return (
    <div className="relative w-full overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tashi-blue/20 via-black to-black pointer-events-none z-0" />
      
      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 max-w-5xl leading-[1.1]"
        >
          AI & Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-tashi-blue to-indigo-500">Infrastructure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light"
        >
          Scalable, decentralized, and intelligent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={navigateToServices}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Explore Platform
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
      
    </div>
  );
};

export default HeroView;