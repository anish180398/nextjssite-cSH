"use client";

import { motion } from "motion/react";
import { duration, easing } from "@/lib/motion";

// Next.js remounts `template.tsx` on every navigation (unlike layout.tsx),
// making it the right place for a per-page enter animation.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.base, ease: easing.out }}
    >
      {children}
    </motion.div>
  );
}
