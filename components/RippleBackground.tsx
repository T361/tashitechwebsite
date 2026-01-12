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
      
      // Configuration for a sharper, more "digital" liquid look
      const lines = 30;
      const verticalSpread = height * 0.8; 
      const startY = height * 0.1; 
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        const yBase = startY + (i / lines) * verticalSpread;
        
        // Opacity gradient: clearer in middle, fading out
        const centerDist = Math.abs(i - lines / 2) / (lines / 2);
        const opacity = (1 - centerDist) * 0.15 + 0.02;
        
        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.lineWidth = 0.8; // Very thin, precise lines

        for (let x = 0; x <= width; x += 5) {
          // Complex digital wave
          const noise = Math.sin(x * 0.05 + time) * 2;
          const w1 = Math.sin(x * 0.002 + time * 0.3 + i * 0.1);
          const w2 = Math.sin(x * 0.008 - time * 0.1 + i * 0.05); 
          const amp = 40 + Math.sin(time * 0.2) * 20;

          const yOffset = (w1 + w2) * amp * 0.5 + noise;
          
          if (x === 0) ctx.moveTo(x, yBase + yOffset);
          else ctx.lineTo(x, yBase + yOffset);
        }
        ctx.stroke();
      }

      time += 0.005; // Slower, more majestic movement
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-multiply opacity-60"
    />
  );
};

export default RippleBackground;