/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        zapGreen: "#00d355",
        zapOrange: "#F99D1C",
        zapBlue: "#00AEEF"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
