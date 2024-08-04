/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#00b875",
        darkGrey: "#f8f8fa",
      },
      gridTemplateColumns: {
        "custom-layout": "auto, 1fr"
      },
      borderRadius: {
        "7px":"7px"
      },
      gridTemplateRows: {
        "[auto_1fr-auto]": "auto 1fr, auto"
      },
      padding: {
        "[py5px]": "2px"
      },
      margin:{
        "[margin-10px]": "-30px"
      }
    },
  },
  plugins: [],
}