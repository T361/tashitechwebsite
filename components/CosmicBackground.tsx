import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha false might be faster if we clear fully
    if (!ctx) return;

    let time = 0;
    const isMobile = window.innerWidth < 768;
    const maxDpr = 1.5;

    // Stars
    const starCount = isMobile ? 60 : 200;
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    
    const initStars = (w: number, h: number) => {
        stars.length = 0;
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 1.5,
                alpha: Math.random(),
                speed: Math.random() * 0.05
            });
        }
    };

    // Nebulae Blobs
    const blobs = [
      { x: 0, y: 0, r: 400, color: 'rgba(76, 29, 149, 0.15)', vx: 0.2, vy: 0.1 }, 
      { x: 0, y: 0, r: 500, color: 'rgba(30, 58, 138, 0.15)', vx: -0.15, vy: 0.2 }, 
      { x: 0, y: 0, r: 300, color: 'rgba(56, 189, 248, 0.08)', vx: 0.3, vy: -0.1 }, 
    ];

    let animationId: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      initStars(width, height);
      
      // Reset blobs center
      blobs[0].x = Math.random() * width; blobs[0].y = Math.random() * height;
      blobs[1].x = Math.random() * width; blobs[1].y = Math.random() * height;
      blobs[2].x = Math.random() * width; blobs[2].y = Math.random() * height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
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
      ctx.fillStyle = '#FFFFFF'; 
      
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.speed;
        const opacity = Math.abs(Math.sin(star.alpha));
        
        // Optimization: Skip very faint stars
        if (opacity < 0.05) continue;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    draw();

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