import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Workflow, Shield, Globe, Server, Cpu, Zap, Plus } from 'lucide-react';
import ScrambleText from './ScrambleText';

const ServicesView: React.FC = () => {
  const coreFeatures = [
    {
      title: "Verifiable AI",
      id: "MOD_01",
      desc: "On-chain audit trails for every agent action. Immutable logs ensuring total compliance.",
      icon: Brain,
    },
    {
      title: "Identity (DID)",
      id: "MOD_02",
      desc: "Decentralized Identity standards for autonomous systems and agent-to-agent commerce.",
      icon: Shield,
    },
    {
      title: "Smart Gates",
      id: "MOD_03",
      desc: "Contract-based approval logic for AI execution. Deterministic guardrails.",
      icon: Database,
    },
    {
      title: "Hyper-Automation",
      id: "MOD_04",
      desc: "Complex workflows using n8n, Make.com, and Zapier to bridge legacy and AI systems.",
      icon: Workflow,
    }
  ];

  const capabilities = [
    { name: "Web Development", tools: "React 19, MERN, Next.js", icon: Globe },
    { name: "Cloud Architecture", tools: "AWS, GCP, Serverless", icon: Server },
    { name: "Custom Agents", tools: "LangChain, AutoGPT", icon: Cpu },
    { name: "Integration", tools: "Zapier, Make, n8n", icon: Zap },
  ];

  return (
    <div className="w-full bg-transparent text-black relative">
      
      <div className="pt-20 pb-10 px-6 md:px-12 border-b border-black/10 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
           <span className="w-2 h-2 bg-black"></span>
           <span className="font-mono text-xs uppercase tracking-widest text-gray-500">System Capabilities</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase max-w-4xl">
           <ScrambleText text="PROBABILISTIC INTELLIGENCE." /> <br/>
           <span className="text-gray-400">DETERMINISTIC TRUTH.</span>
        </h2>
      </div>

      {/* Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/10">
        {coreFeatures.map((feature, idx) => (
          <div 
            key={idx} 
            className="group relative min-h-[320px] p-8 md:p-10 border-r border-black/10 hover:bg-black/5 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Crosshair Decorations */}
            <div className="absolute top-0 left-0 p-2 opacity-20"><Plus size={10} /></div>
            <div className="absolute top-0 right-0 p-2 opacity-20"><Plus size={10} /></div>
            <div className="absolute bottom-0 left-0 p-2 opacity-20"><Plus size={10} /></div>
            <div className="absolute bottom-0 right-0 p-2 opacity-20"><Plus size={10} /></div>

            {/* Scanning Line Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

            <div className="relative z-10">
               <div className="flex justify-between items-start mb-8">
                  <feature.icon className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] text-gray-400 border border-gray-300 px-1">{feature.id}</span>
               </div>
               <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">{feature.title}</h3>
            </div>
            
            <p className="text-xs font-medium leading-relaxed opacity-60 max-w-[90%] group-hover:opacity-90 transition-opacity">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Stack Section */}
      <div className="grid grid-cols-1 md:grid-cols-12">
         {/* Title Area */}
         <div className="md:col-span-4 p-8 md:p-12 border-r border-black/10 bg-black text-white flex flex-col justify-center">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Stack<br/>Architecture</h3>
            <p className="font-mono text-xs opacity-60">Modular. Scalable. Secure.</p>
         </div>

         {/* Capabilities List */}
         <div className="md:col-span-8 bg-white/80 backdrop-blur-md">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="group flex items-center justify-between p-6 md:p-8 border-b border-black/10 hover:bg-black/5 transition-colors cursor-default">
                 <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-gray-400">0{idx + 1}</span>
                    <div className="flex items-center gap-4">
                       <cap.icon size={18} className="opacity-50 group-hover:opacity-100" />
                       <span className="font-bold text-lg uppercase tracking-tight">{cap.name}</span>
                    </div>
                 </div>
                 <div className="hidden md:block">
                    <span className="font-mono text-[10px] bg-gray-100 px-2 py-1 rounded-sm uppercase tracking-wide group-hover:bg-black group-hover:text-white transition-colors">{cap.tools}</span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ServicesView;