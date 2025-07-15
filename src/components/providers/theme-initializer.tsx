"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/lib/store/theme-store";

export function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Apply the theme to the document on client side
    setTheme(theme);
  }, [theme, setTheme]);

  return <>{children}</>;
} 