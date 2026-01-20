import React from 'react';
import { motion } from 'framer-motion';
import EnterpriseDataFlow from './EnterpriseDataFlow';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Fallback to provided handler if contact section not found
    navigateToServices();
  };

  return (
    <section className="w-full relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Enterprise data flow background - subtle and behind everything */}
      <div className="absolute inset-0 -z-10">
        <EnterpriseDataFlow className="absolute inset-0" />
      </div>

      {/* subtle overlay grid to keep texture legible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7f7f8_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f8_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-tight tracking-tight text-black mb-8 leading-[1.1]">
            Enterprise AI Agents.<br />
            <span className="text-gray-400">Blockchain and AI.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Deploy verifiable autonomous agents at scale. Tashi transforms unstructured workflows into deterministic outcomes with intelligent orchestration and audit-grade compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              Start Building
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroView;