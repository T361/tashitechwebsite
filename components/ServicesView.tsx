import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Shield, Database, ArrowUpRight, Code, Cpu } from 'lucide-react';
import ScrambleText from './ScrambleText';

const ServicesView: React.FC = () => {
  const marqueeItems = ["AI AGENTS", "BLOCKCHAIN IDENTITY", "SMART CONTRACTS", "AUTOMATION", "WORK THAT WORKS!", "VERIFIABLE INTELLIGENCE", "DECENTRALIZED DATA"];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="w-full bg-transparent text-white relative pt-32 pb-32 overflow-hidden">
      
      {/* Infinite Marquee - Cyber Style */}
      <div className="w-full bg-white/5 backdrop-blur-sm text-white overflow-hidden py-6 mb-32 transform -skew-y-2 border-y border-white/20">
         <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
               <div key={i} className="text-5xl md:text-7xl font-tight font-black uppercase tracking-tighter flex items-center gap-12 text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  <span className={i % 2 === 0 ? "text-white" : "text-transparent"}>{item}</span>
                  <span className="w-4 h-4 bg-white rotate-45 shadow-[0_0_10px_white]"></span>
               </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b-2 border-white/20 pb-12">
           <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="text-7xl md:text-[10rem] font-tight font-black tracking-tighter uppercase leading-[0.8]"
           >
             Core<br/>
             <span className="text-stroke-2 text-transparent stroke-white">Systems</span>
           </motion.h2>
           <div className="flex flex-col items-end mt-12 md:mt-0">
             <p className="text-xl md:text-2xl font-mono max-w-sm text-right leading-tight mb-4 text-gray-300">
               Infrastructure for the <br/>autonomous economy.
             </p>
             <div className="flex gap-2">
                <span className="w-2 h-2 bg-white"></span>
                <span className="w-2 h-2 bg-white"></span>
                <span className="w-2 h-2 bg-white animate-pulse shadow-[0_0_10px_white]"></span>
             </div>
           </div>
        </div>

        {/* Masonry-style Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
           
           {/* Card 01 - Large */}
           <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 bg-white/5 backdrop-blur-md border border-white/20 p-12 flex flex-col justify-between min-h-[600px] hover:bg-white/10 hover:border-white/50 transition-all duration-500 group relative overflow-hidden"
           >
              {/* Massive Number Background */}
              <span className="absolute -bottom-20 -right-10 text-[20rem] font-tight font-black text-white/5 group-hover:text-white/10 transition-colors select-none pointer-events-none z-0">01</span>

              <div className="relative z-10 flex justify-between items-start">
                 <span className="font-mono text-xs border border-white/30 px-2 py-1 rounded-full uppercase tracking-wider text-gray-300">Verifiable Compute</span>
                 <Brain size={64} strokeWidth={1} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
              <div className="relative z-10 mt-auto">
                 <h3 className="text-5xl md:text-7xl font-tight font-black uppercase tracking-tighter mb-6 leading-none text-white">
                    <ScrambleText text="AI Agents" hover={true} />
                 </h3>
                 <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md border-l-2 border-white/50 pl-6 text-gray-300">
                   On-chain audit trails for every agent action. Immutable logs ensuring total compliance and trust.
                 </p>
              </div>
              <div className="relative z-10 flex justify-end mt-12">
                 <div className="w-16 h-16 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all hover:scale-110">
                    <ArrowUpRight size={32} />
                 </div>
              </div>
           </motion.div>

           {/* Card 02 - Vertical */}
           <motion.div 
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 bg-white/5 backdrop-blur-md border border-white/20 p-10 flex flex-col justify-between min-h-[600px] group hover:bg-white hover:text-black transition-all duration-500 relative"
           >
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  {[...Array(36)].map((_, i) => <div key={i} className="border border-black"></div>)}
              </div>

              <div className="flex justify-between items-start relative z-10">
                 <span className="font-mono text-xs border border-current px-2 py-1 rounded-full uppercase tracking-wider opacity-80">Identity Layer</span>
                 <Shield size={56} strokeWidth={1} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:drop-shadow-none" />
              </div>
              <div className="relative z-10 mt-auto">
                 <div className="font-tight font-black text-9xl mb-4 leading-none opacity-20 group-hover:opacity-100 transition-opacity">ID</div>
                 <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4 font-tight">Decentralized Identity (DID)</h3>
                 <p className="text-lg font-mono opacity-80">
                   Identity standards for autonomous systems. Enabling secure agent-to-agent commerce without human oversight.
                 </p>
              </div>
              <div className="w-full h-[2px] bg-current mt-8 group-hover:scale-x-110 transition-transform origin-left"></div>
           </motion.div>

           {/* Card 03 - Wide */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-12 bg-black/80 backdrop-blur-xl border border-white/20 py-20 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-16 items-center group relative overflow-hidden"
           >
              {/* Animated Background Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-white animate-pulse"></div>
                 <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white animate-pulse delay-75"></div>
                 <div className="absolute top-0 left-0 w-[1px] h-full bg-white animate-pulse delay-150"></div>
                 <div className="absolute top-0 right-0 w-[1px] h-full bg-white animate-pulse delay-300"></div>
              </div>

              <div className="flex flex-col gap-6 relative z-10 md:w-1/2">
                 <div className="flex items-center gap-4 text-gray-400">
                    <Code size={20} />
                    <span className="font-mono text-sm uppercase tracking-[0.2em]">03 // Smart Logic</span>
                 </div>
                 <h3 className="text-6xl md:text-8xl font-tight font-black uppercase tracking-tighter leading-[0.9] text-white">
                   Smart <br/><span className="text-stroke-1 text-transparent stroke-white">Gates</span>
                 </h3>
              </div>
              
              <div className="relative z-10 md:w-1/2 flex gap-8 items-start text-gray-200">
                  <Cpu size={64} className="flex-shrink-0 mt-2 animate-pulse text-white shadow-[0_0_20px_white]" />
                  <p className="text-xl md:text-2xl font-light leading-relaxed">
                     Contract-based approval logic for AI execution. Deterministic guardrails that prevent <span className="font-bold underline decoration-2 underline-offset-4 decoration-white">hallucination-based errors</span> in critical infrastructure.
                  </p>
              </div>
           </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServicesView;