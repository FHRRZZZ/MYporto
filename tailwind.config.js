/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#facc15", // Yellow 400
          DEFAULT: "#eab308", // Yellow 500
          dark: "#ca8a04", // Yellow 600
        },
        secondary: {
          light: "#ef4444", // Red 500
          DEFAULT: "#dc2626", // Red 600
          dark: "#991b1b", // Red 800
        },
        accent: {
          light: "#3b82f6", // Blue 500
          DEFAULT: "#2563eb", // Blue 600
          dark: "#1d4ed8", // Blue 700
        },
        comic: {
          black: "#000000",
          white: "#ffffff",
          paper: "#fefce8",
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
