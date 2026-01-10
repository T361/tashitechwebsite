import React from 'react';
import { motion } from 'framer-motion';

const AboutView: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 min-h-[80vh]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-tashi-blue font-mono text-sm mb-4">03 — ABOUT US</h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Built for the <br />Next Era.</h2>
            <div className="prose prose-invert prose-lg text-gray-400">
              <p>
                tashitech.ai wasn't founded to build simple websites. We were founded to solve the fragmentation problem in modern tech stacks.
              </p>
              <p>
                Today, data lives in silos. Blockchain lives in isolation. AI models run without context. We are the bridge builders.
              </p>
              <p>
                Headquartered in Islamabad with a global distributed team, we operate with the precision of a military unit and the creativity of an art studio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/10"
           >
              <img 
                src="https://picsum.photos/800/1200?grayscale" 
                alt="Office Abstract" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
           </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutView;