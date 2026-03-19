import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0c0c0c',
          surface: '#111111',
          elevated: '#161620',
        },
        text: {
          primary: '#ffffff',
          secondary: '#999999',
          tertiary: '#555555',
          muted: '#444444',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          pale: '#a5b4fc',
          dark: '#4f46e5',
        },
        border: {
          subtle: '#1e1e2e',
          hover: '#333333',
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
