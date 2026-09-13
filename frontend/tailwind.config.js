/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          '"Cascadia Code"',
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        term: {
          bg: "#02090D",
          bg2: "#061117",
          panel: "#07151A",
          border: "#10353A",
          "border-bright": "#15545A",
          green: "#00FF9C",
          cyan: "#00E5D4",
          text: "#D7E7F5",
          muted: "#71869C",
          dim: "#465A6D",
          online: "#00FF88",
          selected: "#063B36",
        },
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
