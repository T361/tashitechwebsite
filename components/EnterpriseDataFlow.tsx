import React from 'react';

interface EnterpriseDataFlowProps {
  className?: string;
}

const EnterpriseDataFlow: React.FC<EnterpriseDataFlowProps> = ({ className = '' }) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ opacity: 0.18 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.02" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* subtle grid */}
        <g stroke="#000" strokeOpacity="0.04" strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={(i * 1200) / 16}
              y1={0}
              x2={(i * 1200) / 16}
              y2={800}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={(i * 800) / 12}
              x2={1200}
              y2={(i * 800) / 12}
            />
          ))}
        </g>

        {/* flowing connections */}
        <g stroke="url(#g1)" strokeWidth="1.4" fill="none" transform="translate(0,40)">
          <path d="M80 120 C200 40, 320 40, 440 120" strokeOpacity="0.9" />
          <path d="M200 220 C360 120, 480 120, 640 220" strokeOpacity="0.8" />
          <path d="M360 340 C480 260, 640 260, 820 340" strokeOpacity="0.7" />
          <path d="M240 460 C360 380, 520 380, 680 460" strokeOpacity="0.6" />
        </g>

        {/* nodes */}
        <g fill="#000" fillOpacity="0.12">
          <circle cx="80" cy="120" r="6" />
          <circle cx="440" cy="120" r="5" />
          <circle cx="640" cy="220" r="6" />
          <circle cx="820" cy="340" r="5" />
          <circle cx="240" cy="460" r="5" />
        </g>

        {/* soft vignette */}
        <rect width="1200" height="800" fill="url(#g1)" opacity="0.02" />
      </svg>
    </div>
  );
};

export default EnterpriseDataFlow;
