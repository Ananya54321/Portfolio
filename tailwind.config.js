/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#0075A7",
          2: "#033D72",
          3: "#033D72",
        },
        stroke: {
          1: "#83C0F8",
        },
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        imprima: ["Imprima", "sans-serif"],
      },
    },
  },
};
