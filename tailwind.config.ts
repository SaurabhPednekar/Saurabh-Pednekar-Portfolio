import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blue-black base
        base: {
          DEFAULT: "#05070E",
          900: "#05070E",
          800: "#080B14",
          700: "#0B0F1A",
          600: "#11172690",
        },
        // Glass surfaces
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
        },
        // Electric blue accent system
        electric: {
          DEFAULT: "#2E8BFF",
          50: "#E8F2FF",
          100: "#C7E0FF",
          300: "#6BB0FF",
          400: "#3D9BFF",
          500: "#2E8BFF",
          600: "#1C6FE6",
          700: "#1357BF",
        },
        cyan: {
          DEFAULT: "#2BD4FF",
          400: "#4DDCFF",
          500: "#2BD4FF",
        },
        ink: {
          DEFAULT: "#E6EDF8",
          muted: "#94A1BC",
          faint: "#5B6781",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,139,255,0.25), 0 0 40px -8px rgba(46,139,255,0.45)",
        "glow-cyan": "0 0 0 1px rgba(43,212,255,0.25), 0 0 48px -10px rgba(43,212,255,0.4)",
        card: "0 8px 40px -12px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,14,0) 0%, rgba(5,7,14,0.9) 90%)",
        "electric-gradient":
          "linear-gradient(135deg, #2E8BFF 0%, #2BD4FF 100%)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.6s ease-in-out infinite",
        "dash-flow": "dash-flow 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
