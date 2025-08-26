"use client";

import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/contentful";

export default function ProjectStats() {
  const [projectCount, setProjectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-brand-white/10 max-w-2xl mx-auto">
      <div className="text-center group">
        <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">
          {isLoading ? (
            <div className="h-8 w-12 bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded animate-pulse"></div>
          ) : (
            `${projectCount}`
          )}
        </div>
        <div className="text-sm text-brand-white/60 drop-shadow-sm">Products Built</div>
      </div>
      <div className="text-center group">
        <div className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl mb-2">15+</div>
        <div className="text-sm text-brand-white/60 drop-shadow-sm">Technologies Used</div>
      </div>
      <div className="text-center group">
        <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">100%</div>
        <div className="text-sm text-brand-white/60 drop-shadow-sm">User Satisfaction</div>
      </div>
    </div>
  );
}
