import React from 'react';
import { motion } from 'framer-motion';

const AboutView: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-20 md:py-32 px-4 md:px-12 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-tashi-blue opacity-[0.05] rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-8 md:mb-12">
             <div className="w-12 h-[1px] bg-tashi-blue"></div>
             <div className="font-mono text-xs text-tashi-blue/80 uppercase tracking-[0.2em]">
               The Manifesto
             </div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.05] font-tight font-medium tracking-tight mix-blend-screen">
            The era of <span className="italic font-serif opacity-60">black-box AI</span> is over. 
            We are building the verifiable layer. 
            <br/><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-tashi-blue to-tashi-blue">Total Truth.</span><br/>
            <span className="text-gray-500">On-Chain Permissions.</span><br/>
            <span className="text-gray-600">Deterministic Output.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-20 md:mt-32 border-t border-white/10 pt-12 md:pt-16">
             <div>
                <p className="text-base md:text-xl leading-relaxed text-gray-300 font-light">
                   Data lives in silos. Models hallucinate. We bridge the gap between probabilistic intelligence and deterministic blockchain truth. We don't just build apps; we architect verifiable systems.
                </p>
             </div>
             <div className="flex flex-col gap-4 md:gap-6 font-mono text-xs md:text-sm text-gray-400">
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-tashi-blue group-hover:shadow-[0_0_10px_#0055FF] transition-all"></div>
                   <span className="uppercase tracking-widest group-hover:text-white transition-colors">Audit Trails</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-tashi-blue group-hover:shadow-[0_0_10px_#0055FF] transition-all"></div>
                   <span className="uppercase tracking-widest group-hover:text-white transition-colors">Smart Contracts</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-tashi-blue group-hover:shadow-[0_0_10px_#0055FF] transition-all"></div>
                   <span className="uppercase tracking-widest group-hover:text-white transition-colors">Agent Identity</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutView;