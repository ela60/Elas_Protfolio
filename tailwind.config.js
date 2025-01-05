/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInOut: "slideInOut 3s infinite ease-in-out",
      },
      keyframes: {
        slideInOut: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "50%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
