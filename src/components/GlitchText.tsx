"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-0 text-cyan-300/40"
        animate={{ x: [0, -1, 1, 0], opacity: [0.2, 0.55, 0.25] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-0 text-green-300/30"
        animate={{ x: [0, 1, -1, 0], opacity: [0.15, 0.5, 0.2] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-full w-full"
        animate={{ opacity: [0, 0.7, 0], y: [0, 0, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(34,211,238,0.08) 48%, transparent 55%)",
          mixBlendMode: "screen",
        }}
      />
    </span>
  );
}