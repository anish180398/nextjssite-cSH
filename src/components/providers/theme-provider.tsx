"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "Reign of Vision-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage after mounting to avoid hydration mismatch
    const stored = localStorage.getItem(storageKey) as Theme;
    if (stored && (stored === "dark" || stored === "light")) {
      setTheme(stored);
    } else {
      setTheme(defaultTheme);
      localStorage.setItem(storageKey, defaultTheme);
    }
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Also set data attribute for better CSS targeting
    root.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="bg-brand-dark text-brand-white min-h-screen" suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}; 