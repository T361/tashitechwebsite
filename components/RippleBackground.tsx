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
      
      const lines = 25;
      const verticalSpread = height * 0.7; 
      const startY = height * 0.15; 
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        const yBase = startY + (i / lines) * verticalSpread;
        
        // Opacity gradient for depth
        const centerDist = Math.abs(i - lines / 2) / (lines / 2);
        const opacity = (1 - centerDist) * 0.2 + 0.05;
        
        // Glowing cyan/white color
        ctx.strokeStyle = `rgba(200, 230, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(100, 200, 255, ${opacity})`;

        for (let x = 0; x <= width; x += 10) {
          const noise = Math.sin(x * 0.05 + time) * 2;
          const w1 = Math.sin(x * 0.003 + time * 0.5 + i * 0.2);
          const w2 = Math.sin(x * 0.01 - time * 0.2 + i * 0.1); 
          const amp = 30 + Math.sin(time * 0.5) * 20;

          const yOffset = (w1 + w2) * amp * 0.6 + noise;
          
          if (x === 0) ctx.moveTo(x, yBase + yOffset);
          else ctx.lineTo(x, yBase + yOffset);
        }
        ctx.stroke();
      }

      time += 0.008;
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
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-screen"
    />
  );
};

export default RippleBackground;