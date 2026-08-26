"use client";

import { RingChart } from "@/components/charts/ring-chart";
import { Ring } from "@/components/charts/ring";
import { RingCenter } from "@/components/charts/ring-center";

interface StatRingProps {
  value: number;
  maxValue?: number;
  label: string;
  suffix?: string;
  size?: number;
}

// Thin wrapper around Bklit's ring-chart primitives for a single-value stat.
export function StatRing({ value, maxValue = 100, label, suffix = "%", size = 148 }: StatRingProps) {
  return (
    <RingChart data={[{ label, value, maxValue }]} size={size} strokeWidth={10} baseInnerRadius={48}>
      <Ring index={0} />
      <RingCenter defaultLabel={label} suffix={suffix} />
    </RingChart>
  );
}
