import React from 'react';
import { Mail } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="w-full py-24 border-t border-gray-100 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-black text-white rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Abstract Circle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-[80px] opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-tight tracking-tight mb-8">
              Ready to automate your enterprise?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12">
              Join the forward-thinking companies building their future on Tashi. 
              Schedule a consultation with our solutions engineers.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:admin@tashitech.ai" 
                className="group inline-flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold hover:text-gray-300 transition-colors border-b-2 border-white/20 pb-1 hover:border-white"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                admin@tashitech.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;