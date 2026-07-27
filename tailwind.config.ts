import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* All colours reference CSS variables so dark/light tokens work */
        base:      "var(--bg)",
        subtle:    "var(--bg-subtle)",
        surface:   "var(--surface)",
        "surface-2": "var(--surface-2)",

        accent:  "var(--accent)",
        "accent-2": "var(--accent-2)",

        /* Legacy aliases kept for backward compat */
        background: "var(--bg)",
        foreground: "var(--text-1)",
        border:     "var(--border)",
        card: {
          DEFAULT:   "var(--surface)",
          foreground:"var(--text-1)",
        },
        muted: {
          DEFAULT:   "var(--surface-2)",
          foreground:"var(--text-2)",
        },
        primary: {
          DEFAULT:   "var(--accent)",
          foreground:"#fff",
        },
        secondary: {
          DEFAULT:   "var(--accent-2)",
          foreground:"#fff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow":         "0 0 48px -10px var(--accent-glow)",
        "glow-primary": "0 0 48px -10px var(--accent-glow)",
        "card":         "0 4px 24px -6px rgba(0,0,0,0.25)",
      },
      animation: {
        "float":       "float 7s ease-in-out infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":   "spin 12s linear infinite",
        "fade-in":     "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-18px)" },
        },
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
