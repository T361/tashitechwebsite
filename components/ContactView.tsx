import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import ScrambleText from './ScrambleText';

const ContactView: React.FC = () => {
  return (
    <div className="w-full bg-transparent py-20 md:py-32 border-b border-black/10">
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl p-12 md:p-24 border border-black/10 shadow-2xl relative overflow-hidden"
        >
          {/* Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black"></div>

          <div className="inline-block mb-8 px-3 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest">
            Comms_Channel_Open
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-black">
            <ScrambleText text="INITIATE UPLINK" />
          </h1>
          
          <p className="text-lg md:text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto">
            Ready to deploy verifiable agents? Our engineers are standing by on secure channels.
          </p>

          <a 
            href="mailto:hr@tashitc.com"
            className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border border-black px-8 py-6 hover:bg-black hover:text-white transition-all duration-300"
          >
            <Mail size={32} strokeWidth={1.5} />
            <span>hr@tashitc.com</span>
            <ArrowRight size={32} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform" />
            
            {/* Button Glitch Element */}
            <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-[-1]"></div>
          </a>

          <div className="mt-20 flex justify-center text-center border-t border-black/10 pt-12">
            <div className="grid grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-[10px] text-gray-400">Headquarters</h4>
                <p className="text-sm font-mono">Islamabad, Pakistan</p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-[10px] text-gray-400">Response Time</h4>
                <p className="text-sm font-mono">&lt; 24 Hours</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactView;