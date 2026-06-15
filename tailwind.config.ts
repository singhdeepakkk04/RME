import type { Config } from "tailwindcss";

/**
 * RME design system — "graph-native, technical, precise".
 * Ink-black canvas, one decisive signal accent (electric lime), disciplined
 * neutral scale. No vague gradients doing the heavy lifting; the accent earns
 * its place by being used sparingly.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light, paper-like canvas. `ink-950` is the page background (warm
        // off-white); `chalk` is the primary text. Kept the names so the
        // component layer didn't have to churn.
        ink: {
          DEFAULT: "#fbfaf8",
          50: "#ffffff",
          900: "#f1efea",
          950: "#fbfaf8",
        },
        panel: "#ffffff",
        panel2: "#f5f3ef",
        hair: "rgba(28,27,24,0.10)",
        hair2: "rgba(28,27,24,0.18)",
        signal: {
          DEFAULT: "#2f855a", // muted sage-green — the single, subtle accent
          dim: "#256c49",
          glow: "rgba(47,133,90,0.10)",
        },
        cyan: "#0f766e",
        chalk: "#1d1c1a", // primary text (near-black, warm)
        ash: "#5d5c57", // muted text
        faint: "#9a988f", // faint text / captions
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        xl2: "20px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        sweep: "sweep 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
