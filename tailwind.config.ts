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
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-tertiary': '#787878',
        'text-muted': '#5a5a5a',
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          pale: '#a5b4fc',
          dark: '#4f46e5',
        },
        'border-subtle': '#252535',
        'border-hover': '#3d3d3d',
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
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
