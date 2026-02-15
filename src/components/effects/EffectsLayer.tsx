"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CursorTrail } from "@/components/effects/CursorTrail";
import { MatrixRain } from "@/components/effects/MatrixRain";
import { NodeNetwork } from "@/components/effects/NodeNetwork";

function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|mobile/.test(ua);
}

export function EffectsLayer() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mobile = useMemo(() => isMobileUA(), []);

  useEffect(() => {
    if (reduceMotion || mobile) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    let raf = 0;
    let frames = 0;
    let last = performance.now();
    let lowStreak = 0;

    const tick = (t: number) => {
      frames++;
      const dt = t - last;

      if (dt >= 1000) {
        const fps = (frames * 1000) / dt;
        frames = 0;
        last = t;

        if (fps < 45) lowStreak++;
        else lowStreak = Math.max(0, lowStreak - 1);

        if (lowStreak >= 2) {
          setEnabled(false);
          cancelAnimationFrame(raf);
          return;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, mobile]);

  if (!enabled) return null;

  return (
    <>
      <MatrixRain />
      <NodeNetwork />
      <CursorTrail />
    </>
  );
}