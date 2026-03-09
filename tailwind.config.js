/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // Blue 400
          DEFAULT: "#3b82f6", // Blue 500
          dark: "#2563eb", // Blue 600
        },
        secondary: {
          light: "#3b82f6", // Blue 500
          DEFAULT: "#1e40af", // Blue 800
          dark: "#1e3a8a", // Blue 900
        },
        accent: {
          light: "#eff6ff", // Blue 50
          DEFAULT: "#ffffff", // White
          dark: "#dbeafe", // Blue 100
        },
        comic: {
          black: "#000000",
          white: "#ffffff",
          paper: "#ffffff",
        }
      },
      fontFamily: {
        comic: ["'Comic Neue'", "cursive"],
        bangers: ["'Bangers'", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-lg': '8px 8px 0px 0px #000000',
        'comic-sm': '2px 2px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
