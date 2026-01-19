import React, { useEffect, useRef } from 'react';

const RippleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    const isMobile = window.innerWidth < 768;
    const lines = isMobile ? 20 : 40; 
    const xStep = isMobile ? 10 : 4; 
    const maxDpr = 1.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      const verticalSpread = height * 0.8; 
      const startY = height * 0.1; 
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        const yBase = startY + (i / lines) * verticalSpread;
        
        // Depth logic
        const centerDist = Math.abs(i - lines / 2) / (lines / 2);
        // Subtle gray opacity
        const opacity = (1 - centerDist) * 0.15 + 0.05;
        
        // Monochrome Gradient (Gray)
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(0, 0, 0, ${opacity})`);
        gradient.addColorStop(1, `rgba(0, 0, 0, ${opacity * 0.3})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        
        // No shadow for clean look
        ctx.shadowBlur = 0;

        // Wave Logic
        for (let x = 0; x <= width; x += xStep) {
          const w1 = Math.sin(x * 0.002 + time * 0.8 + i * 0.1);
          const w2 = Math.sin(x * 0.008 - time * 1.5 + i * 0.2); 
          const noise = Math.cos(x * 0.02 + time) * 5;
          const amp = 40 + Math.sin(time * 0.5) * 20;
          const yOffset = (w1 + w2) * amp * 0.8 + noise;
          
          if (x === 0) ctx.moveTo(x, yBase + yOffset);
          else ctx.lineTo(x, yBase + yOffset);
        }
        ctx.stroke();
      }

      time += 0.015;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default RippleBackground;