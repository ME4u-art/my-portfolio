import { useEffect, useRef } from 'react';
import './background.css';

export default function BackGround() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      radius: number;
      velocity: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;

      constructor() {
        this.x = Math.random() * (canvas?.width ?? window.innerWidth);
        this.y = Math.random() * (canvas?.height ?? window.innerHeight);
        this.radius = Math.random() * 1.5 + 0.5;
        this.velocity = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Twinkling effect
        this.opacity = Math.abs(Math.sin(Date.now() * this.twinkleSpeed + this.twinkleOffset));
        
        // Move stars slowly (parallax effect)
        this.y += this.velocity;
        if (canvas && this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        
        // Color variation for stars (blue-white, white, yellow-white)
        const colorVariation = Math.random() * 0.3;
        const r = 255;
        const g = 255 - colorVariation * 50;
        const b = 255 - colorVariation * 30;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.9})`;
        
        // Add glow effect for brighter stars
        if (this.radius > 1) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
        } else {
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        }
        
        ctx.fill();
        ctx.restore();
      }
    }

    // Create stars - Extremely dense starfield like Andromeda image
    const stars: Star[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 3000); // Very dense starfield
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="night-sky" aria-hidden="true">
      {/* Andromeda Galaxy Background Image */}
      <div className="galaxy-background"></div>
    </div>
  );
}

