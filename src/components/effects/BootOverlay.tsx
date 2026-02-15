"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const lines = [
  "[boot] initializing secure environment…",
  "[boot] loading modules: nlp, retrieval, observability",
  "[boot] hardening runtime: policies=enabled",
  "[boot] verifying integrity… ok",
  "[boot] starting ui…",
];

export function BootOverlay() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(() => setShow(false), 250);
      return () => clearTimeout(t);
    }

    const t1 = setInterval(() => {
      setIdx((i) => Math.min(lines.length, i + 1));
    }, 220);

    const t2 = setTimeout(() => {
      setShow(false);
    }, 1400);

    return () => {
      clearInterval(t1);
      clearTimeout(t2);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="w-[92%] max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 shadow-sm">
            <div className="mb-3 font-mono text-xs text-neutral-500">secure_boot</div>
            <div className="space-y-2 font-mono text-sm text-neutral-200">
              {lines.slice(0, idx).map((l) => (
                <div key={l} className="flex gap-2">
                  <span className="text-green-400">›</span>
                  <span>{l}</span>
                </div>
              ))}
              <div className="flex gap-2">
                <span className="text-cyan-300">›</span>
                <span className="text-neutral-300">
                  {idx >= lines.length ? "ready" : "…" }
                  <span className="cy-caret" />
                </span>
              </div>
            </div>

            {!reduce && (
              <motion.div
                className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/5"
                initial={{ opacity: 0.9 }}
              >
                <motion.div
                  className="h-full bg-cyan-400/40"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}