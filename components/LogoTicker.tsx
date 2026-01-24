import React from 'react';

const logos = [
  "NVIDIA", "MICROSOFT", "GOOGLE CLOUD", "AWS", "SAP", "ORACLE", "SALESFORCE", "IBM"
];

const LogoTicker: React.FC = () => {
  return (
  <div className="w-full bg-white border-y border-gray-100 py-[120px] overflow-hidden">
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-2xl font-bold text-gray-300 select-none tracking-tight font-tight">
              {logo}
            </span>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default LogoTicker;