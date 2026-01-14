import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let time = 0;

    // Stars
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.05
      });
    }

    // Nebulae Blobs
    const blobs = [
      { x: Math.random() * width, y: Math.random() * height, r: 400, color: 'rgba(76, 29, 149, 0.15)', vx: 0.2, vy: 0.1 }, // Deep Purple
      { x: Math.random() * width, y: Math.random() * height, r: 500, color: 'rgba(30, 58, 138, 0.15)', vx: -0.15, vy: 0.2 }, // Deep Blue
      { x: Math.random() * width, y: Math.random() * height, r: 300, color: 'rgba(56, 189, 248, 0.08)', vx: 0.3, vy: -0.1 }, // Light Cyan
    ];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Draw Nebulae
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.r) blob.x = width + blob.r;
        if (blob.x > width + blob.r) blob.x = -blob.r;
        if (blob.y < -blob.r) blob.y = height + blob.r;
        if (blob.y > height + blob.r) blob.y = -blob.r;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Stars
      ctx.globalCompositeOperation = 'source-over';
      stars.forEach(star => {
        star.alpha += star.speed;
        const opacity = Math.abs(Math.sin(star.alpha));
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 0.01;
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default CosmicBackground;