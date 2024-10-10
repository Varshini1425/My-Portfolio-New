/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "#0a0e17",
        textColor: "#e6f1ff",
        accentColor: "#64ffda",
        secondaryColor: "#112240",
        tertiaryColor: "#233554",
        bgAnotherWhite: "#DEFCF9",
        textColorTeal: "#439A97",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
