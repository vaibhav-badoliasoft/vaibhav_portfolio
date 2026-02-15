"use client";

import { motion, useReducedMotion } from "framer-motion";

export function CyberBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 cy-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-neutral-950/70" />
      <div className="absolute inset-0 cy-scanlines opacity-[0.18]" />

      <motion.div
        className="absolute left-[10%] top-[20%] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 40, -10, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-[35%] h-56 w-56 rounded-full bg-green-400/10 blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, -10, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}