import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  hover?: boolean;
  speed?: number;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', hover = false, speed = 30 }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const animate = () => {
    let iteration = 0;
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplay(prev => 
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (!hover) animate();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (hover) {
      setIsHovering(true);
      animate();
    }
  };

  return (
    <span 
      className={`font-mono ${className}`} 
      onMouseEnter={handleMouseEnter}
    >
      {display}
    </span>
  );
};

export default ScrambleText;