"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// 1. Grid Particles (Premium Dots with Mouse Glow)
export const GridBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-60" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1.5px, transparent 0)`,
          backgroundSize: '48px 48px' 
        }} 
      />
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, var(--color-accent), transparent)`,
          opacity: 0.2
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 2. Animated Flowing Curves (Organic Parallax)
export const FlowBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.div style={{ y: y1, rotate }} className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-50">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, i % 2 === 0 ? 1.2 : 0.8, 1],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%"]
            }}
            transition={{
              duration: 25 + i * 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-[${400 + i * 200}px] h-[${400 + i * 200}px] border-2 border-accent/20 blur-[1px]`}
            style={{ 
                width: 400 + i * 150, 
                height: 400 + i * 150,
                transform: `rotate(${i * 45}deg)` 
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 3. Interactive Matrix Spark (Cursor Attraction)
export const SparkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let sparks: Spark[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    class Spark {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      life: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.color = Math.random() > 0.4 ? '163, 230, 53' : '34, 197, 94';
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 250) {
          const force = (250 - dist) / 250;
          this.vx += dx * force * 0.005;
          this.vy += dy * force * 0.005;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.004;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.8})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (sparks.length < 60 && Math.random() > 0.85) {
        sparks.push(new Spark(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].update();
        sparks[i].draw();
        if (sparks[i].life <= 0) sparks.splice(i, 1);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="absolute inset-0 opacity-60 dark:opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 4. Gradient Orbs (Floating & Interactive)
export const OrbBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 60, y: (e.clientY / window.innerHeight - 0.5) * 60 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-60">
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          x: { type: "spring", damping: 12, stiffness: 100 },
          y: { type: "spring", damping: 12, stiffness: 100 },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/25 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{
          x: -mousePos.x * 2,
          y: -mousePos.y * 2,
          rotate: [360, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          x: { type: "spring", damping: 15, stiffness: 80 },
          y: { type: "spring", damping: 15, stiffness: 80 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/20 blur-[180px] rounded-full"
      />
    </div>
  );
};


