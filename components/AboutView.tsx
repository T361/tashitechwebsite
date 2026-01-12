import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const AboutView: React.FC = () => {
  return (
    <div className="w-full bg-transparent text-black">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        
        {/* Typography Column */}
        <div className="p-8 md:p-20 border-r border-black/10 flex flex-col justify-center bg-white/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 font-mono text-xs text-gray-400 uppercase tracking-widest border-b border-black/10 pb-2 inline-block">
              // Mission_Statement_03
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
              THE END OF <br/>
              <span className="opacity-30">BLACK BOXES.</span>
            </h2>
            
            <div className="text-lg md:text-xl font-light space-y-8 max-w-md">
              <p>
                <span className="font-bold">Tashi Tech</span> wasn't founded to build simple websites. We were founded to solve the crisis of trust in <span className="bg-black text-white px-1">Artificial Intelligence</span>.
              </p>
              <p className="text-gray-600 text-base">
                Today, data lives in silos. AI models hallucinate without consequence. We are building the bridge between probabilistic intelligence and deterministic Blockchain truth.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
               <div className="px-4 py-2 border border-black/20 text-xs font-mono uppercase">HQ: Islamabad</div>
               <div className="px-4 py-2 border border-black/20 text-xs font-mono uppercase">Global_Ops</div>
            </div>
          </motion.div>
        </div>

        {/* Visual / Stats Column */}
        <div className="bg-black text-white p-8 md:p-20 flex flex-col justify-center relative overflow-hidden">
           {/* Scanlines */}
           <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%)', backgroundSize: '100% 4px' }}></div>
           
           <div className="relative z-10 grid gap-12">
             <div className="group">
               <span className="block text-7xl md:text-8xl font-black mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-white/50 transition-all duration-500">
                  <ScrambleText text="100%" />
               </span>
               <div className="h-px w-12 bg-white/50 mb-2"></div>
               <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Verifiable Execution</span>
             </div>
             
             <div className="group">
               <span className="block text-7xl md:text-8xl font-black mb-2">24/7</span>
               <div className="h-px w-12 bg-white/50 mb-2"></div>
               <span className="text-xs font-mono uppercase tracking-widest text-gray-400">System Uptime</span>
             </div>

             <div className="group">
               <span className="block text-7xl md:text-8xl font-black mb-2">ZERO</span>
               <div className="h-px w-12 bg-white/50 mb-2"></div>
               <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Data Leakage</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutView;