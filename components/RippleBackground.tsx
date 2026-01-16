import React, { useEffect, useRef } from 'react';

const RippleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const lines = 40; 
      const verticalSpread = height * 0.8; 
      const startY = height * 0.1; 
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        const yBase = startY + (i / lines) * verticalSpread;
        
        // Depth logic
        const centerDist = Math.abs(i - lines / 2) / (lines / 2);
        const opacity = (1 - centerDist) * 0.4 + 0.1;
        
        // Brand Color Gradient Logic (Blue/Cyan/Indigo)
        // Hue 210 (Blue) to 240 (Deep Blue)
        const hue = 210 + Math.sin(time * 0.5 + i * 0.1) * 30; 
        
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `hsla(${hue}, 80%, 50%, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `hsla(${hue + 20}, 90%, 60%, ${opacity})`);
        gradient.addColorStop(1, `hsla(${hue - 20}, 80%, 50%, ${opacity * 0.5})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        
        // Enhanced Blue Glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${hue}, 100%, 50%, ${opacity * 0.8})`;

        // Wave Logic
        for (let x = 0; x <= width; x += 5) {
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