import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Square, ChevronRight } from 'lucide-react';
import ScrambleText from './ScrambleText';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Mouse parallax effect for the "Intelligence" text
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; 
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  // Vertical Block Stream Logic
  const [blocks, setBlocks] = useState<string[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const hash = Math.random().toString(36).substring(2, 12).toUpperCase();
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 } as any);
      setBlocks(prev => [`${timestamp} :: ${hash}`, ...prev].slice(0, 25));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-[100vh] flex flex-col relative overflow-hidden bg-transparent pt-24 text-white"
    >
      
      {/* Background Grid - subtle & animated */}
      <div className="absolute inset-0 grid grid-cols-[1fr_1px_1fr_1px_1fr] border-l border-r border-white/10 pointer-events-none z-0">
          <div className="border-r border-white/10 relative">
            <motion.div 
              className="absolute top-0 right-[-1px] width-[1px] height-[100px] bg-white/20" 
              animate={{ top: ['0%', '100%'] }} 
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="bg-white/5 opacity-0"></div>
          <div className="border-r border-white/10 relative">
             <motion.div 
              className="absolute bottom-0 right-[-1px] width-[1px] height-[50px] bg-white/20" 
              animate={{ bottom: ['0%', '100%'] }} 
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="bg-white/5 opacity-0"></div>
          <div></div>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 relative z-10 px-6 md:px-12">
        
        {/* Left: Offset Typography */}
        <div className="lg:col-span-9 flex flex-col justify-center py-20 relative">
          
          {/* Floating Data Point */}
          <motion.div 
             className="absolute top-[10%] left-[5%] font-mono text-[9px] uppercase tracking-widest text-gray-400 hidden lg:block"
             style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          >
             System Status: Optimized
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-[10px] font-mono mb-8 tracking-widest uppercase transform hover:skew-x-12 transition-transform cursor-crosshair">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                Protocol v3.1 // Stable
             </div>

             <h1 className="text-[13vw] lg:text-[11vw] leading-[0.8] font-tight font-black tracking-[-0.04em] text-white mb-12 uppercase mix-blend-lighten z-20">
               <motion.div style={{ y: y1, x: mousePosition.x }} className="block pl-4 md:pl-0">
                  Intelli<span className="text-stroke-1 text-transparent stroke-white">gence</span>
               </motion.div>
               <motion.div style={{ y: y2, x: mousePosition.x * 1.5 }} className="block text-right lg:pr-20 text-white">
                  Architected<span className="text-white">.</span>
               </motion.div>
             </h1>

             <motion.div 
                style={{ opacity }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-white/20 pt-8"
             >
                <div className="max-w-xl">
                  <p className="text-xl md:text-3xl font-tight font-medium leading-tight mb-4 text-gray-200">
                    We build the bedrock of the <br/>decentralized future.
                  </p>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    Verified Agents • On-Chain Truth • Zero Hallucinations
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                   <button 
                     onClick={navigateToServices}
                     className="group flex items-center gap-6 text-sm font-bold tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
                   >
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center group-hover:bg-transparent group-hover:text-white border border-white transition-all duration-300">
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                     </div>
                     <span className="group-hover:translate-x-2 transition-transform duration-300">
                       <ScrambleText text="Explore Solutions" hover={true} />
                     </span>
                   </button>
                </div>
             </motion.div>
          </motion.div>
        </div>

        {/* Right: Vertical Data Stream */}
        <div className="lg:col-span-3 hidden lg:flex flex-col justify-between items-end pb-20 border-l border-white/10 pl-8 relative h-full">
           <div className="pt-32 w-full">
              <div className="text-right mb-8">
                 <h3 className="font-tight font-bold text-2xl uppercase">Live Feed</h3>
                 <div className="w-full h-[1px] bg-white/50 mt-2"></div>
              </div>
              
              <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-gray-400 opacity-80 overflow-hidden h-[400px] mask-image-gradient">
                 {blocks.map((block, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                     animate={{ opacity: 1 - i * 0.04, x: 0, filter: 'blur(0px)' }}
                     className="flex items-center gap-3 w-full justify-end border-r-2 border-transparent hover:border-white pr-2 transition-all cursor-help"
                   >
                      <span className="tracking-tighter">{block}</span>
                      <Square size={6} className={`fill-current ${i === 0 ? 'text-white animate-pulse' : 'text-gray-600'}`} />
                   </motion.div>
                 ))}
              </div>
           </div>

           <div className="w-full">
             <div className="flex justify-between items-end border-b border-white/20 pb-2 mb-2">
                <span className="font-mono text-[10px] uppercase">Node Status</span>
                <span className="font-mono text-[10px] uppercase text-green-400">Active</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/20 pb-2">
                <span className="font-mono text-[10px] uppercase">Latency</span>
                <span className="font-mono text-[10px] uppercase">12ms</span>
             </div>
           </div>
        </div>
      </div>
      
      {/* Decorative large text background */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white opacity-5 pointer-events-none select-none font-tight leading-none z-0">
        TRUTH
      </div>
    </div>
  );
};

export default HeroView;