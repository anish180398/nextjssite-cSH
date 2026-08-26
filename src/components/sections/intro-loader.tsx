"use client";

import { useEffect, useState } from "react";
import { animate, createTimeline, stagger } from "animejs";
import { usePrefersReducedMotion } from "@/lib/motion";

const SESSION_KEY = "kryttr-intro-shown";
const WORDMARK = "KRYTTR";

// Purely a decorative overlay mounted above the real page content (which is
// already in the DOM underneath) — never gates content from crawlers.
export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) || prefersReducedMotion) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!visible) return;

    let cancelled = false;
    const timeline = createTimeline({
      onComplete: () => {
        if (!cancelled) setVisible(false);
      },
    });

    timeline
      .add(".intro-letter", {
        opacity: [0, 1],
        y: [24, 0],
        duration: 380,
        delay: stagger(35),
        ease: "outExpo",
      })
      .add(
        ".intro-overlay",
        { opacity: [1, 0], duration: 350, ease: "inOutQuad" },
        "+=250"
      );

    // `.pause()`, not `.revert()` — revert resets the just-finished fade-out
    // back to its pre-animation opacity (1), which left this full-viewport
    // overlay stuck fully opaque (and, worse, still blocking every click on
    // the page underneath) whenever onComplete's setVisible(false) landed
    // in the same commit as this cleanup.
    return () => {
      cancelled = true;
      timeline.pause();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {WORDMARK.split("").map((letter, index) => (
          <span key={index} className="intro-letter inline-block opacity-0">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
