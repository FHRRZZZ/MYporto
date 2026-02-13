/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563eb", // Blue 600
          DEFAULT: "#1d4ed8", // Blue 700
          dark: "#1e40af", // Blue 800
        },
        secondary: {
          light: "#334155", // Slate 700
          DEFAULT: "#1e293b", // Slate 800
          dark: "#0f172a", // Slate 900
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
