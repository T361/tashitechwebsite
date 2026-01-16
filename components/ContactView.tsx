import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import ScrambleText from './ScrambleText';

const ContactView: React.FC = () => {
  return (
    <div className="w-full bg-transparent py-16 md:py-32 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-24 border border-white/10 relative overflow-hidden group hover:border-tashi-blue/30 transition-colors duration-500"
        >
          {/* Subtle Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-tashi-blue opacity-[0.05] blur-[100px] pointer-events-none group-hover:opacity-10 transition-opacity duration-500"></div>

          {/* Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50 group-hover:border-tashi-blue transition-colors"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50 group-hover:border-tashi-blue transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50 group-hover:border-tashi-blue transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50 group-hover:border-tashi-blue transition-colors"></div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-tight tracking-tighter mb-6 md:mb-8 text-white">
            <ScrambleText text="INITIATE UPLINK" />
          </h1>
          
          <p className="text-base md:text-xl font-light text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto px-4">
            Ready to deploy verifiable agents? Our engineers are standing by on secure channels.
          </p>

          <a 
            href="mailto:hr@tashitc.com"
            className="group relative inline-flex items-center gap-3 md:gap-4 text-xl md:text-4xl font-bold font-tight border border-white/20 px-6 py-4 md:px-10 md:py-8 hover:bg-tashi-blue hover:border-tashi-blue hover:text-white transition-all duration-300 text-white overflow-hidden"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            <span className="relative z-10">hr@tashitc.com</span>
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform relative z-10" strokeWidth={1.5} />
            
            {/* Button Glitch Element */}
            <div className="absolute inset-0 bg-tashi-blue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>

          <div className="mt-12 md:mt-20 flex justify-center text-center border-t border-white/10 pt-8 md:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 text-center sm:text-left">
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-[10px] text-gray-500">Headquarters</h4>
                <p className="text-sm font-mono text-gray-300">Islamabad, Pakistan</p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-[10px] text-gray-500">Response Time</h4>
                <p className="text-sm font-mono text-gray-300">&lt; 24 Hours</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactView;