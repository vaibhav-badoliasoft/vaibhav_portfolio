"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function CyberTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const content = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 10, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -10, filter: "blur(6px)" },
      };

  return (
    <div className="relative z-10">
      <AnimatePresence mode="wait">
        {!reduce && (
          <motion.div
            key={pathname + "-overlay"}
            className="pointer-events-none fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-neutral-950/75"
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute left-0 top-[22%] h-[10px] w-full bg-cyan-400/15 blur-[1px]"
              initial={{ x: "-20%" }}
              animate={{ x: "20%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.div
              className="absolute left-0 top-[58%] h-[8px] w-full bg-green-400/12 blur-[1px]"
              initial={{ x: "18%" }}
              animate={{ x: "-18%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={content}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}