/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1A3E",
        primary: "#293681",
        accent: "#4274D9",
        teal: "#95CCD9",
        pale: "#D0E7E6",
        surface: "#F7FAFB",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
