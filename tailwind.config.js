/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.liquid"],
  theme: {
    extend: {
      colors: {
        "brand-background": "#fbf6dd",
        "brand-background-secondary": "#f3b63a",
        "brand-blue": "#2060ac",
        "brand-red": "#df472a",
        "brand-red-secondary": "#e1583b",
      },
    },
  },
  plugins: [],
};
