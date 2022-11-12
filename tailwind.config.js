/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#E6E9F2",
        card_bg_sm: "#EFF0F5",
        dark: "#616A81",
        dark_hover: "#3A4562",
        secondary: "#878D9D",
      },
      screens: {
        xsm: "540px",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slider: "carousel 2s linear infinite",
      },
    },
  },
  plugins: [],
};
