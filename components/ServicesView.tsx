import React from 'react';
import { Brain, Shield, Zap, Database, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Autonomous Agents",
    desc: "Deploy intelligent agents that plan, reason, and execute complex workflows without constant human oversight."
  },
  {
    icon: Shield,
    title: "Verifiable Identity",
    desc: "Every agent is assigned a decentralized identity (DID), ensuring on-chain accountability for every action taken."
  },
  {
    icon: Zap,
    title: "Hyper-Automation",
    desc: "Seamlessly integrate with 5,000+ apps. From ERPs to CRMs, Tashi agents orchestrate your entire stack."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    desc: "SOC2 Type II ready infrastructure with deterministic guardrails that prevent hallucination in critical tasks."
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    desc: "Your data stays yours. Train and deploy models on your private infrastructure or VPC."
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    desc: "Low-latency inference running on a distributed edge network for real-time responsiveness."
  }
];

const ServicesView: React.FC = () => {
  return (
  <div className="w-full py-[120px] md:py-[120px] relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-tight text-black mb-6">
            The Infrastructure of Intelligence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide the foundational layer for the agentic economy. 
            Reliable, scalable, and verifiable tools for the next generation of software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesView;