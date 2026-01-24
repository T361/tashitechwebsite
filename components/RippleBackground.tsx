import React from 'react';
import { motion } from 'framer-motion';

const circles = [
  { r: 110, delay: 0, duration: 7 },
  { r: 150, delay: 1, duration: 8 },
  { r: 190, delay: 2, duration: 9 },
  { r: 230, delay: 2.5, duration: 10 },
  { r: 270, delay: 3, duration: 11 },
  { r: 310, delay: 3.5, duration: 12 },
  { r: 350, delay: 4, duration: 13 },
  { r: 390, delay: 4.5, duration: 14 },
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
          stroke="#2563eb" // blue-600
          strokeOpacity={0.22}
          strokeWidth={i % 2 === 0 ? 4 : 5}
          initial={{ scale: 0.85, opacity: 0.22 }}
          animate={{ scale: 1.25, opacity: 0.22 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: c.duration,
            delay: c.delay,
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  </div>
);

export default RippleBackground;