/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        sumi: "#14141c",
        paper: { DEFAULT: "#edebe7", deep: "#e1dfda" },
        sakura: "#ff4f87",
        electric: "#25d0e8",
        amber: "#ffc24b",
      },
      fontFamily: {
        display: ["Anton", "Arial Narrow", "sans-serif"],
        body: ["Manrope Variable", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "58ch",
      },
    },
  },
  plugins: [],
};
