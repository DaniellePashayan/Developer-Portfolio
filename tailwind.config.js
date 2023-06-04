/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans"],
      serif: ["Prata", "serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: "#adadad",
      "dark-gray": "#2c2e35",
      yellow: "#fbe850",
    },
    screens: {
      mobile: "480px",
      tablet: "768px",
      dektop: "992px",
      "xl-desktop": "1280px",
    },
    extend: {},
  },
  plugins: [],
};
