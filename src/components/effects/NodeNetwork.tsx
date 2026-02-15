"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Node = { x: number; y: number; vx: number; vy: number };

export function NodeNetwork() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let nodes: Node[] = [];
    let maxDist = 140;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = window.innerWidth * window.innerHeight;
      const count = Math.max(18, Math.min(42, Math.floor(area / 45000)));
      maxDist = window.innerWidth < 700 ? 115 : 140;

      nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // draw links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // move
        a.x += a.vx;
        a.y += a.vy;

        // bounce
        if (a.x < 0 || a.x > window.innerWidth) a.vx *= -1;
        if (a.y < 0 || a.y > window.innerHeight) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const t = 1 - dist / maxDist;
            // subtle cyan lines
            ctx.strokeStyle = `rgba(34,211,238,${0.08 * t})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        ctx.fillStyle = "rgba(34,211,238,0.12)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[6] opacity-[0.85]"
      aria-hidden="true"
    />
  );
}