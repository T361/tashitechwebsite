import React, { useEffect, useRef } from 'react';

const RippleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true }); // optimize
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // Device detection for performance tuning
    const isMobile = window.innerWidth < 768;
    // Reduce complexity significantly on mobile
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
    resize(); // Initial sizing

    const draw = () => {
      // Clear with offset/height not canvas.width (which is scaled)
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
        const opacity = (1 - centerDist) * 0.4 + 0.1;
        
        // Brand Color Gradient Logic
        const hue = 210 + Math.sin(time * 0.5 + i * 0.1) * 30; 
        
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `hsla(${hue}, 80%, 50%, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `hsla(${hue + 20}, 90%, 60%, ${opacity})`);
        gradient.addColorStop(1, `hsla(${hue - 20}, 80%, 50%, ${opacity * 0.5})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        
        // Enhanced Blue Glow - Expensive on mobile, reduce blur radius or skip
        if (!isMobile) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = `hsla(${hue}, 100%, 50%, ${opacity * 0.8})`;
        } else {
            ctx.shadowBlur = 0; // Disable shadow on mobile for performance
        }

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
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-screen opacity-80"
    />
  );
};

export default RippleBackground;