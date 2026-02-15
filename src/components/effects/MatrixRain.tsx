"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function MatrixRain() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const chars = "01<>/\\{}[]()$#@*+=-";
    let columns: number[] = [];
    let fontSize = 14;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // columns based on width
      fontSize = window.innerWidth < 600 ? 12 : 14;
      const colCount = Math.floor(window.innerWidth / fontSize);
      columns = new Array(colCount).fill(0).map(() => Math.random() * window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      // transparent fade for trails (very subtle)
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < columns.length; i++) {
        const x = i * fontSize;
        const y = columns[i];

        const ch = chars[Math.floor(Math.random() * chars.length)];
        // subtle green, not bright
        ctx.fillStyle = "rgba(34,197,94,0.16)";
        ctx.fillText(ch, x, y);

        // move down
        columns[i] += fontSize * (0.75 + Math.random() * 0.55);

        // reset randomly
        if (columns[i] > window.innerHeight + 80 && Math.random() > 0.975) {
          columns[i] = -Math.random() * 200;
        }
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
      className="pointer-events-none fixed inset-0 z-[5] opacity-[0.55]"
      aria-hidden="true"
    />
  );
}