import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Zap, Shield, ArrowUpRight } from 'lucide-react';

const ServicesView: React.FC = () => {
  const serviceGroups = [
    {
      title: "AI Solutions",
      icon: Brain,
      description: "Enterprise-grade artificial intelligence and autonomous agentic systems.",
      items: [
        "Custom AI Agents",
        "LLM Integration",
        "Agent Identity (DID)"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-blue-900/20 to-transparent"
    },
    {
      title: "Web & Cloud",
      icon: Cloud,
      description: "High-performance full-stack development and scalable cloud infrastructure.",
      items: [
        "Web Development (MERN)",
        "Cloud Services Architecture",
        "Serverless Deployments"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-indigo-900/20 to-transparent"
    },
    {
      title: "Hyper-Automation",
      icon: Zap,
      description: "Streamlining business logic with the world's most powerful integration tools.",
      items: [
        "n8n Workflows",
        "Make.com & Zapier",
        "Process Optimization"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-purple-900/20 to-transparent"
    },
    {
      title: "Blockchain Governance",
      icon: Shield,
      description: "Secure, decentralized decision making layers and smart contract auditing.",
      items: [
        "On-Chain Governance",
        "Smart Contracts",
        "Verifiable Audit Trails"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-gray-800/40 to-transparent"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-4xl"
      >
        <h3 className="text-tashi-blue font-mono text-sm mb-4">02 — INFRASTRUCTURE</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Full-Stack Intelligence.</h2>
        <p className="mt-6 text-xl text-gray-400">
          From the application layer to the blockchain, we engineer the complete stack required for the future of business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-tashi-card p-8 hover:border-tashi-blue/30 transition-colors duration-300 flex flex-col ${group.colSpan}`}
          >
            {/* Ambient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${group.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-tashi-blue/20 group-hover:text-tashi-blue transition-colors">
                <group.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-white">{group.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed border-b border-white/5 pb-6">
                {group.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-tashi-blue mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <ArrowUpRight className="text-tashi-blue" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesView;