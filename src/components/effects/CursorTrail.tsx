"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Dot = { x: number; y: number; life: number };

export function CursorTrail() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;

      // add a dot every move, but keep it subtle
      dotsRef.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (dotsRef.current.length > 70) dotsRef.current.shift();
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // decay & draw
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.life *= 0.92;

        const a = Math.max(0, Math.min(1, d.life));
        if (a < 0.03) continue;

        // cyan glow + tiny core, very subtle
        ctx.beginPath();
        ctx.fillStyle = `rgba(34,211,238,${0.10 * a})`;
        ctx.arc(d.x, d.y, 10 * a, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(34,197,94,${0.14 * a})`;
        ctx.arc(d.x, d.y, 2.2 * a, 0, Math.PI * 2);
        ctx.fill();
      }

      // keep list trimmed
      dotsRef.current = dots.filter((d) => d.life > 0.05);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[40]"
      aria-hidden="true"
    />
  );
}