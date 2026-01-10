import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Fingerprint, ShieldCheck, FileSearch, ArrowUpRight } from 'lucide-react';

const ServicesView: React.FC = () => {
  const serviceGroups = [
    {
      title: "Agent Identity & DID",
      icon: Fingerprint,
      description: "Establishing distinct, sovereign identities for AI agents on the blockchain.",
      items: [
        "AI Agents",
        "Blockchain-Based Agent Identity",
        "Decentralized Identity (DID) for AI Systems"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-blue-900/20 to-transparent"
    },
    {
      title: "On-Chain Governance",
      icon: ShieldCheck,
      description: "Enforcing rigorous access control and permission layers via smart contracts.",
      items: [
        "On-Chain Permissions & Access Control",
        "Smart-Contract Approval Gates",
        "AI Agents with Blockchain Permissions"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-indigo-900/20 to-transparent"
    },
    {
      title: "Verifiable Trust & Audit",
      icon: FileSearch,
      description: "Creating immutable, traceable logs for every agent action and decision.",
      items: [
        "Immutable Agent Activity Logs",
        "Agent Accountability & Traceability",
        "Verifiable AI & Compliance Support",
        "Verifiable AI & On-Chain Audit Trails"
      ],
      colSpan: "md:col-span-1",
      bgGradient: "from-purple-900/20 to-transparent"
    },
    {
      title: "Integration & Automation",
      icon: BrainCircuit,
      description: "Seamlessly bridging artificial intelligence with decentralized infrastructure.",
      items: [
        "AI + Blockchain Integration",
        "Smart Contract Automation"
      ],
      colSpan: "md:col-span-3 lg:col-span-1", // Make it span full width on medium, or single on large if grid changes
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
        <h3 className="text-tashi-blue font-mono text-sm mb-4">02 — CORE CAPABILITIES</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Trust Layer for AI Agents.</h2>
        <p className="mt-6 text-xl text-gray-400">
          We provide the specialized infrastructure required to make Autonomous Agents verifiable, accountable, and secure.
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
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-tashi-card p-8 hover:border-tashi-blue/30 transition-colors duration-300 flex flex-col"
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