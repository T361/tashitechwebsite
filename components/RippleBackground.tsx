import React from 'react';
import { motion } from 'framer-motion';

const circles = [
  { r: 120, delay: 0 },
  { r: 180, delay: 1 },
  { r: 240, delay: 2 },
  { r: 320, delay: 3 },
];

const RippleBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" style={{ position: 'absolute', right: 0, left: 'auto', top: 0, bottom: 0 }}>
      {circles.map((c, i) => (
        <motion.circle
          key={i}
          cx={850}
          cy={300}
          r={c.r}
          fill="none"
          stroke="#60a5fa" // blue-400
          strokeOpacity={0.25}
          strokeWidth={6}
          initial={{ scale: 0.8, opacity: 0.25 }}
          animate={{ scale: 1.3, opacity: 0.25 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6,
            delay: c.delay,
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  </div>
);

export default RippleBackground;