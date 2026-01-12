import React, { useEffect, useRef } from 'react';

const AnimatedGridBackground: React.FC = () => {
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
      
      const gridSize = 60; // Spacing between grid points
      const crossSize = 2; // Size of the crosshair
      
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Create a wave effect for opacity based on position and time
          // Using sine waves to create a breathing/scanning effect
          const waveX = Math.sin(x * 0.002 + time * 0.5);
          const waveY = Math.cos(y * 0.003 + time * 0.3);
          const noise = (waveX + waveY) / 2; // Range roughly -1 to 1
          
          // Map to a subtle opacity range (0.05 to 0.25)
          const opacity = ((noise + 1) / 2) * 0.2 + 0.05;
          
          ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
          
          ctx.beginPath();
          // Draw a small cross (+)
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
        }
      }

      time += 0.02;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedGridBackground;