"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagChange: (tag: string) => void;
  className?: string;
}

export function TagFilter({
  tags,
  selectedTag,
  onTagChange,
  className,
}: TagFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Sort tags alphabetically
  const sortedTags = useMemo(() => {
    return tags.sort();
  }, [tags]);

  const handleTagClick = (tag: string) => {
    onTagChange(tag);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Desktop Version - Horizontal Pills */}
      <div className="hidden md:flex flex-wrap gap-2 justify-center">
        {sortedTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
              selectedTag === tag
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Mobile Version - Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg shadow-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        >
          <span className="text-foreground font-medium">
            Filter: {selectedTag}
          </span>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
            >
              {sortedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg",
                    selectedTag === tag
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-primary/5"
                  )}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-background/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Hook for filtering items by tag
export function useTagFilter<T extends { tags?: string[] }>(
  items: T[],
  selectedTag: string
) {
  return useMemo(() => {
    if (selectedTag === "All") {
      return items;
    }
    return items.filter((item) =>
      item.tags?.some((tag) =>
        tag.toLowerCase().includes(selectedTag.toLowerCase())
      )
    );
  }, [items, selectedTag]);
}

// Helper to extract unique tags from items
export function extractTags<T extends { tags?: string[] }>(items: T[]): string[] {
  const tagSet = new Set<string>();
  
  items.forEach((item) => {
    item.tags?.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  
  return Array.from(tagSet);
} 