"use client";

import { useCountUp, usePrefersReducedMotion } from "@/lib/motion";
import { StatRing } from "@/components/charts/stat-ring";

function CountStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animated = useCountUp(value, !prefersReducedMotion);

  return (
    <div className="text-center">
      <div className="font-display text-3xl font-semibold text-foreground">
        {animated}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function AboutStats() {
  return (
    <div className="mt-12 grid grid-cols-3 items-center gap-6 border-t border-border pt-8">
      <CountStat value={100} suffix="+" label="Projects Completed" />
      <div className="flex justify-center">
        <StatRing value={98} label="Client Satisfaction" size={128} />
      </div>
      <CountStat value={3} suffix="+" label="Years Experience" />
    </div>
  );
}
