import React from 'react';
import { motion } from 'framer-motion';

const AboutView: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white opacity-5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="font-mono text-xs text-gray-500 mb-12 uppercase tracking-widest">
            // The Manifesto
          </div>
          
          <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-medium tracking-tight">
            The era of <span className="italic font-serif opacity-70">black-box AI</span> is over. 
            We are building the verifiable layer. 
            <br/><br/>
            <span className="text-white border-b-4 border-white">Total Truth.</span><br/>
            <span className="opacity-50">On-Chain Permissions.</span><br/>
            <span className="opacity-50">Deterministic Output.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 border-t border-white/20 pt-12">
             <div>
                <p className="text-xl leading-relaxed text-gray-300">
                   Data lives in silos. Models hallucinate. We bridge the gap between probabilistic intelligence and deterministic blockchain truth.
                </p>
             </div>
             <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   <span className="font-mono text-sm uppercase">Audit Trails</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   <span className="font-mono text-sm uppercase">Smart Contracts</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   <span className="font-mono text-sm uppercase">Agent Identity</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutView;