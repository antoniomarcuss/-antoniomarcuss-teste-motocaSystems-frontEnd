/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A233C",
        secondary: "#312D4B",
        code: "#8C57FF",
        buttonPrimary: "#3BADFB",
      },
    },
  },
  plugins: [],
};
