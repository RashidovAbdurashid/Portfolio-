/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0B0F",
        ink: "#121212",
        slate: {
          panel: "#1E293B",
        },
        amber: {
          signal: "#F59E0B",
        },
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(245,158,11,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.06) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at center, rgba(245,158,11,0.18) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        signal: "0 0 0 1px rgba(245,158,11,0.15), 0 20px 60px -20px rgba(245,158,11,0.25)",
        panel: "0 30px 80px -30px rgba(0,0,0,0.7)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
