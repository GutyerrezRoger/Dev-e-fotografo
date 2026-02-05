/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a2426",
        card: "#111b21",
        primary: "#a67951",
        secondary: "#733917",
        light: "#f2dfce",
        text: "#f2f2f2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
