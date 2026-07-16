/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Every color the site uses lives here, named so it's obvious
      // what it's for. Change a hex here and it updates everywhere.
      colors: {
        ink: "#0a0a12", // main background
        panel: "#12121f", // card / box background
        panel2: "#181828", // slightly lighter panel
        pink: "#ff3fb0", // primary neon accent
        green: "#3dffa0", // secondary neon accent (titles/glow)
        cyan: "#4ffbea", // screen glow / links
        purple: "#7a5cff", // borders / desk color
        ivory: "#eef0ff", // main text
        muted: "#9797b8", // secondary text
      },
      fontFamily: {
        // Press Start 2P = chunky pixel display font, used sparingly
        pixel: ["'Press Start 2P'", "monospace"],
        // VT323 = a readable pixel-styled font, used for body copy
        mono: ["'VT323'", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        glow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        typeLine: {
          "0%": { width: "0%" },
          "45%": { width: "100%" },
          "55%": { width: "100%" },
          "100%": { width: "0%" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 8px" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        float: "float 4s ease-in-out infinite",
        bob: "bob 2.6s ease-in-out infinite",
        glow: "glow 2.2s ease-in-out infinite",
        typeLine: "typeLine 3.2s steps(20) infinite",
        scan: "scan 1s linear infinite",
        twinkle: "twinkle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
