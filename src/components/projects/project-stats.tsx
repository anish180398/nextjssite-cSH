"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/contentful";
import { useCountUp, usePrefersReducedMotion } from "@/lib/motion";
import { StatRing } from "@/components/charts/stat-ring";

export default function ProjectStats() {
  const [projectCount, setProjectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const animatedProjectCount = useCountUp(projectCount, !prefersReducedMotion && !isLoading);

  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        const projects = await getAllProjects();
        setProjectCount(projects.length);
      } catch (error) {
        console.error('Error fetching project count:', error);
        setProjectCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectCount();
  }, []);

  return (
    <div className="mt-8 grid grid-cols-3 items-center gap-6 border-t border-border pt-8 sm:grid-cols-1 sm:mt-0 sm:border-t-0 sm:pt-0 sm:gap-8">
      <div>
        <div className="font-display text-3xl font-semibold text-foreground">
          {isLoading ? (
            <div className="h-8 w-12 animate-pulse rounded bg-muted" />
          ) : (
            animatedProjectCount
          )}
        </div>
        <div className="mt-1 text-sm text-muted-foreground">Products Built</div>
      </div>
      <div className="flex justify-start">
        <StatRing value={100} label="User Satisfaction" size={112} />
      </div>
      <div>
        <div className="font-display text-3xl font-semibold text-foreground">15+</div>
        <div className="mt-1 text-sm text-muted-foreground">Technologies Used</div>
      </div>
    </div>
  );
}

