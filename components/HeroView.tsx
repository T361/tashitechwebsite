import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Plus } from 'lucide-react';
import ScrambleText from './ScrambleText';
import GeometricCore from './GeometricCore';

interface HeroViewProps {
  navigateToServices: () => void;
}

const HeroView: React.FC<HeroViewProps> = ({ navigateToServices }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Parallax Transforms for Text
  const textY1 = useTransform(scrollY, [0, 800], [0, 150]);
  const textY2 = useTransform(scrollY, [0, 800], [0, 50]);
  
  // Background Shape Animation
  const shapeY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Magnetic Button Logic
  const btnRef = useRef<HTMLButtonElement>(null);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  const handleBtnMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    springX.set(x * 0.3);
    springY.set(y * 0.3);
  };

  const handleBtnLeave = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[100vh] flex flex-col relative overflow-hidden bg-transparent pt-24 md:pt-32 text-white"
    >
      {/* 3D Geometric Core Layer */}
      <div className="absolute inset-0 z-0 top-[-10%] md:top-0">
          <GeometricCore />
      </div>

      {/* Abstract Blue Geometric Elements (Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Floating Blue Orb 1 */}
         <motion.div 
           style={{ y: shapeY }}
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.03, 0.08, 0.03],
           }}
           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-tashi-blue blur-[140px] rounded-full mix-blend-screen"
         />
         
         {/* Floating Blue Orb 2 */}
         <motion.div 
           animate={{ 
             x: [-50, 50, -50],
             opacity: [0.02, 0.06, 0.02],
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#0044CC] blur-[120px] rounded-full mix-blend-screen"
         />

         {/* Geometric Outline Circle - Slow Rotation */}
         <motion.div
            style={{ x: '-50%', y: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[50%] left-[50%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-tashi-blue/10 rounded-full border-dashed"
         />
      </div>
      
      {/* Background Grid - High Precision */}
      <div className="absolute inset-0 grid grid-cols-[1fr_1fr_1fr_1fr] border-l border-r border-white/5 pointer-events-none z-0">
          <div className="border-r border-white/5 relative h-full">
             <div className="absolute top-[30%] right-[-4px] text-tashi-blue/50"><Plus size={8} /></div>
          </div>
          <div className="border-r border-white/5 relative h-full">
             <div className="absolute bottom-[30%] right-[-4px] text-tashi-blue/50"><Plus size={8} /></div>
          </div>
          <div className="border-r border-white/5 relative h-full"></div>
          <div></div>
      </div>

      <div className="flex-grow flex flex-col justify-center relative z-10 px-4 md:px-12 max-w-[1800px] mx-auto w-full">
        
        <div className="flex flex-col relative">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
             {/* Tech Badge */}
             <div className="inline-flex items-center gap-4 mb-8 group cursor-default">
                <div className="w-8 h-[1px] bg-tashi-blue"></div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-tashi-blue/80">
                  Autonomous Infrastructure
                </span>
             </div>

             {/* UPDATED TYPOGRAPHY - Strict B&W, Dramatic Weights, Parallax */}
             <div className="relative z-20 mb-12 md:mb-16 mix-blend-difference">
                 <h1 className="text-[11vw] md:text-[9vw] leading-[0.85] font-tight tracking-[-0.04em] uppercase text-white">
                   <motion.div 
                     style={{ y: textY1, x: -20 }} 
                     animate={{ x: 0 }} 
                     transition={{ duration: 1 }} 
                     className="block font-light" 
                   >
                      Verifiable
                   </motion.div>
                   <motion.div 
                      style={{ y: textY2, x: 20 }} 
                      animate={{ x: 0 }} 
                      transition={{ duration: 1, delay: 0.1 }} 
                      className="block pl-[5vw] font-black" 
                   >
                      Intelligence
                   </motion.div>
                 </h1>
             </div>

             <motion.div 
                style={{ opacity }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 border-t border-white/10 pt-8 md:pt-12 backdrop-blur-[2px]"
             >
                <div className="max-w-xl">
                   <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-200">
                     The black box era is over. <br/>
                     <span className="text-gray-500">We build deterministic systems for the decentralized economy.</span>
                   </p>
                </div>
                
                <div className="flex flex-col gap-4 self-start md:self-auto">
                   <motion.button 
                     ref={btnRef}
                     onMouseMove={handleBtnMove}
                     onMouseLeave={handleBtnLeave}
                     style={{ x: springX, y: springY }}
                     onClick={navigateToServices}
                     className="group relative flex items-center gap-6 text-sm font-bold tracking-[0.2em] uppercase hover:text-white transition-colors"
                   >
                     {/* Button Glow */}
                     <div className="absolute inset-0 bg-tashi-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                     <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black flex items-center justify-center rounded-full group-hover:bg-tashi-blue group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_#0055FF]">
                        <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform md:scale-125" />
                     </div>
                     <span className="relative z-10 group-hover:pl-2 transition-all duration-300">
                       <ScrambleText text="Our Systems" hover={true} />
                     </span>
                   </motion.button>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;