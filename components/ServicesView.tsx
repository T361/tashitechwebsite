import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Shield, Cpu, ScanLine } from 'lucide-react';
import ScrambleText from './ScrambleText';

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ServicesView: React.FC = () => {
  const marqueeItems = ["AI AGENTS", "BLOCKCHAIN IDENTITY", "SMART CONTRACTS", "AUTOMATION", "WORK THAT WORKS!", "VERIFIABLE INTELLIGENCE", "DECENTRALIZED DATA"];
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="w-full bg-transparent text-white relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden perspective-1000">
      
      {/* Infinite Marquee - Streamlined for Mobile */}
      <div className="w-full bg-white/5 backdrop-blur-sm text-white overflow-hidden py-4 md:py-6 mb-20 md:mb-32 border-y border-white/10">
         <div className="flex gap-8 md:gap-12 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
               <div key={i} className="text-3xl md:text-5xl lg:text-7xl font-tight font-black uppercase tracking-tighter flex items-center gap-8 md:gap-12 text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: i % 2 === 0 ? '1px rgba(255,255,255,0.4)' : '1px #0055FF' }}>
                  <span className={i % 2 === 0 ? "text-white/80" : "text-transparent"}>{item}</span>
                  <span className={`w-3 h-3 md:w-4 md:h-4 rotate-45 shadow-[0_0_10px_white] ${i % 2 === 0 ? 'bg-white/50' : 'bg-tashi-blue shadow-[0_0_15px_#0055FF]'}`}></span>
               </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 border-b border-white/10 pb-8 md:pb-12 relative">
           <div className="absolute -bottom-[1px] right-0 w-4 h-4 bg-white/10"></div>
           <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-tight font-black tracking-tighter uppercase leading-[0.85]"
           >
             Core<br/>
             <span className="text-stroke-2 text-transparent stroke-white/80">Systems</span>
           </motion.h2>
           <div className="flex flex-col items-start md:items-end mt-8 md:mt-0">
             <p className="text-lg md:text-xl lg:text-2xl font-mono max-w-sm text-left md:text-right leading-tight mb-4 text-gray-400">
               Infrastructure for the <br/>autonomous economy.
             </p>
           </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
           
           {/* Card 01 - Large */}
           <div className="md:col-span-7 h-full">
             <TiltCard className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-12 flex flex-col justify-between min-h-[450px] md:min-h-[600px] group h-full hover:border-tashi-blue/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-tashi-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 right-0 p-4 opacity-50"><ScanLine className="w-5 h-5 md:w-6 md:h-6 text-white/20" /></div>
                
                <div className="relative z-10 flex justify-end items-start transform translate-z-10">
                   <Brain strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-tashi-blue group-hover:drop-shadow-[0_0_20px_#0055FF] group-hover:scale-110 transition-all duration-500" />
                </div>
                
                <div className="relative z-10 mt-auto transform translate-z-20">
                   <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-tight font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none text-white">
                      <ScrambleText text="AI Agents" hover={true} />
                   </h3>
                   <p className="text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-md border-l border-white/30 pl-4 md:pl-6 text-gray-400 group-hover:text-white group-hover:border-tashi-blue transition-colors">
                     On-chain audit trails for every agent action. Immutable logs ensuring total compliance and trust.
                   </p>
                </div>

                <div className="relative z-10 mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/10 flex flex-wrap gap-4 md:gap-8 font-mono text-[10px] md:text-xs text-gray-600 uppercase tracking-widest">
                    <span>Neural Architecture</span>
                    <span>Blockchain Verification</span>
                </div>
             </TiltCard>
           </div>

           {/* Card 02 - Vertical */}
           <div className="md:col-span-5 h-full">
             <TiltCard className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-10 flex flex-col justify-between min-h-[450px] md:min-h-[600px] group hover:bg-white hover:text-black transition-all duration-500 relative h-full">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                    {[...Array(36)].map((_, i) => <div key={i} className="border border-black/50"></div>)}
                </div>

                <div className="flex justify-end items-start relative z-10">
                   <Shield strokeWidth={1} className="w-10 h-10 md:w-14 md:h-14 group-hover:text-tashi-blue transition-colors" />
                </div>
                <div className="relative z-10 mt-auto">
                   <div className="font-tight font-black text-6xl md:text-9xl mb-2 md:mb-4 leading-none opacity-10 group-hover:opacity-100 transition-opacity text-tashi-blue/20 group-hover:text-tashi-blue">ID</div>
                   <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-tight uppercase tracking-tighter mb-4 leading-none">Decentralized Identity</h3>
                   <p className="text-sm md:text-lg font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                     Identity standards for autonomous systems. Secure agent-to-agent commerce.
                   </p>
                </div>
                <div className="w-full h-[1px] bg-current mt-6 md:mt-8 opacity-20"></div>
             </TiltCard>
           </div>

           {/* Card 03 - Wide */}
           <div className="md:col-span-12">
             <TiltCard className="bg-black/60 backdrop-blur-xl border border-white/10 py-10 px-6 md:py-20 md:px-16 flex flex-col md:flex-row justify-between gap-8 md:gap-16 items-start md:items-center group relative overflow-hidden hover:border-tashi-blue/50 transition-colors duration-500">
                <div className="absolute top-0 left-0 p-4"><div className="w-4 h-4 border-t border-l border-white/30 group-hover:border-tashi-blue transition-colors"></div></div>
                <div className="absolute bottom-0 right-0 p-4"><div className="w-4 h-4 border-b border-r border-white/30 group-hover:border-tashi-blue transition-colors"></div></div>

                <div className="flex flex-col gap-4 md:gap-6 relative z-10 md:w-1/2">
                   <h3 className="text-5xl sm:text-6xl md:text-8xl font-tight font-black uppercase tracking-tighter leading-[0.9] text-white">
                     Smart <br/><span className="text-stroke-1 text-transparent stroke-white/80 group-hover:stroke-tashi-blue transition-colors">Gates</span>
                   </h3>
                </div>
                
                <div className="relative z-10 md:w-1/2 flex gap-4 md:gap-8 items-start text-gray-300">
                    <Cpu strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 mt-2 text-white/80 shadow-[0_0_20px_white] animate-pulse group-hover:text-tashi-blue group-hover:shadow-[0_0_30px_#0055FF] transition-all" />
                    <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                       Contract-based approval logic for AI execution. Deterministic guardrails that prevent <span className="font-bold underline decoration-1 underline-offset-4 decoration-tashi-blue text-white">hallucination-based errors</span> in critical infrastructure.
                    </p>
                </div>
             </TiltCard>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesView;