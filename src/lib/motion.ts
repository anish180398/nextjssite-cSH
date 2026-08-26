"use client";

import { useEffect, useState } from "react";

// Shared animation tokens consumed by both Motion (motion/react) transitions
// and anime.js ease/duration defaults, so every animation in the app moves
// to the same rhythm instead of each component inventing its own timing.

export const easing = {
  out: [0.16, 1, 0.3, 1] as const, // expo-out — entrances, reveals, exits
  inOut: [0.65, 0, 0.35, 1] as const, // continuous/looping motion
};

export const spring = {
  default: { type: "spring", stiffness: 260, damping: 24 } as const,
  soft: { type: "spring", stiffness: 160, damping: 20 } as const,
};

export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
  slower: 1.2,
};

// anime.js takes milliseconds and a cubic-bezier string rather than a tuple.
export const animeEasing = {
  out: "cubicBezier(0.16, 1, 0.3, 1)",
  inOut: "cubicBezier(0.65, 0, 0.35, 1)",
};

export const animeDuration = {
  fast: duration.fast * 1000,
  base: duration.base * 1000,
  slow: duration.slow * 1000,
  slower: duration.slower * 1000,
};

// Standard Motion `variants` for a scroll-triggered fade/rise reveal.
export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

// Wraps `revealUp` (or any variants) with a per-item stagger for lists/grids.
export function staggerContainer(staggerChildren = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/**
 * Tracks the `prefers-reduced-motion` media query so both Motion and
 * anime.js call sites can gate/shorten animations at runtime. Complements
 * the blanket CSS override in globals.css, which only catches plain-CSS
 * animations/transitions, not JS-driven ones.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}

/** Counts up to `target` on mount via requestAnimationFrame; jumps straight to `target` when `isActive` is false (reduced motion). */
export function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive, duration]);

  return value;
}
