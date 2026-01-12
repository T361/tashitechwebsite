import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Disc } from 'lucide-react';
import ScrambleText from './ScrambleText';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between relative overflow-hidden bg-transparent">
      
      {/* Decorative HUD Lines */}
      <div className="absolute top-10 left-10 w-32 h-[1px] bg-black/20 hidden lg:block"></div>
      <div className="absolute top-10 left-10 w-[1px] h-32 bg-black/20 hidden lg:block"></div>
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-black hidden lg:block"></div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left: Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-12 lg:pt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Removed Protocol Badge */}

            <h1 className="text-[12vw] leading-[0.75] font-black tracking-tighter text-black mb-10 mix-blend-darken select-none">
              <span className="block hover:text-transparent hover:bg-clip-text hover:bg-black transition-all">BLOCKCHAIN</span>
              <div className="flex items-center gap-4">
                 <span className="text-black font-thin animate-pulse">+</span>
                 <span className="block">AI</span>
              </div>
            </h1>

            <p className="text-lg md:text-2xl font-light text-black/80 max-w-xl leading-relaxed mb-12 border-l-4 border-black pl-6">
              <ScrambleText 
                text="We build the verified infrastructure for autonomous agents. No black boxes. Pure deterministic intelligence." 
                speed={10} 
              />
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={navigateToServices}
                className="h-20 px-12 bg-black text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-300 flex items-center gap-4 group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                <ScrambleText text="INITIALIZE_SYSTEM" hover={true} />
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D HUD Artifact */}
        <div className="lg:col-span-4 relative flex items-center justify-center min-h-[400px] lg:min-h-auto overflow-hidden pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent z-0 lg:hidden"></div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative z-10 w-full h-full flex items-center justify-center"
           >
              {/* Rotating Rings HUD */}
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative opacity-80">
                 <div className="absolute inset-0 border-[2px] border-black rounded-full animate-[spin_30s_linear_infinite]"></div>
                 <div className="absolute inset-2 border border-black/20 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed"></div>
                 <div className="absolute inset-16 border-[4px] border-black/10 rounded-full animate-[spin_15s_linear_infinite] border-t-transparent border-l-transparent"></div>
                 
                 {/* Central Core */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-black text-white flex items-center justify-center relative rounded-full overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                       <Disc size={80} className="animate-[spin_4s_linear_infinite]" />
                    </div>
                 </div>

                 {/* Molecules/Particles around HUD */}
                 <div className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 border border-black/5 rounded-full animate-pulse"></div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Footer Ticker - Cleaned up */}
      <div className="border-t border-black bg-white text-black py-4 px-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
         <div className="flex gap-8 opacity-50">
            <span className="hidden md:inline">SYSTEM: ONLINE</span>
         </div>
         <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
            WAITING FOR INPUT
         </div>
      </div>
    </div>
  );
};

export default HeroView;