"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center
                 bg-[var(--surface)] border border-[var(--border)]
                 text-[var(--text-2)] hover:text-[var(--accent)]
                 hover:border-[var(--accent)] transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4.5 h-4.5" strokeWidth={2} />
      ) : (
        <Moon className="w-4.5 h-4.5" strokeWidth={2} />
      )}
    </motion.button>
  );
}
