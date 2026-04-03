"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const R = 91, G = 244, B = 174; // #5BF4AE
const COUNT = 65;
const MAX_DIST = 160;
const SPEED = 0.25;

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      const w = canvas!.width;
      const h = canvas!.height;
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
      }));
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${R},${G},${B},0.45)`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}
