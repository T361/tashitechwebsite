import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 min-h-[70vh] flex flex-col justify-center items-center">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <h3 className="text-tashi-blue font-mono text-sm mb-6">04 — CONTACT</h3>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Initiate Protocol.</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto">
          Ready to deploy? Contact our team directly to discuss infrastructure requirements.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="mailto:hr@tashitc.com"
            className="group flex items-center gap-4 bg-tashi-surface border border-white/10 px-8 py-6 rounded-2xl hover:border-tashi-blue hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tashi-blue group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase font-mono mb-1">Email</div>
              <div className="text-xl text-white font-medium">hr@tashitc.com</div>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-tashi-surface border border-white/10 px-8 py-6 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tashi-blue">
              <MapPin size={24} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase font-mono mb-1">Headquarters</div>
              <div className="text-xl text-white font-medium">Islamabad, Pakistan</div>
            </div>
          </div>
        </div>

      </motion.div>

    </div>
  );
};

export default ContactView;