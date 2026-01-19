import React from 'react';
import { motion } from 'framer-motion';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  return (
    <div className="w-full relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-tight tracking-tight text-black mb-8 leading-[1.1]">
            Enterprise AI Agents.<br/>
            <span className="text-gray-400">Blockchain and AI.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Deploy verifiable autonomous agents at scale. Tashi transforms unstructured workflows into deterministic outcomes with intelligent orchestration and audit-grade compliance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={navigateToServices}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              Start Building
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroView;