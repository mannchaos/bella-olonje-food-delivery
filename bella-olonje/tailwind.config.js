/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
        pop: ["Poppins"],
      },
      colors: {
        orange: "#FA4A0C",
        black: "#252B42",
        blrWhite: "#F7F7F7",
        slatBlack: "#737373",
      },
    },
  },
  plugins: [],
};
