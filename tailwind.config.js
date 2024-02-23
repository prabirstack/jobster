/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "976px",
      lg: "1120px",
      xl: "1440px",
    },
    colors: {
      "primary-50": "#eff6ff",
      "primary-100": "#dbeafe",
      "primary-200": "#bfdbfe",
      "primary-300": "#93c5fd",
      "primary-400": "#60a5fa",
      "primary-500": "#3b82f6",
      "primary-600": "#2563eb",
      "primary-700": "#1d4ed8",
      "primary-800": "#1e40af",
      "primary-900": "#1e3a8a",

      // Gray
      "grey-50": "#f0f4f8",
      "grey-100": " #d9e2ec",
      "grey-200": " #bcccdc",
      "grey-300": " #9fb3c8",
      "grey-400": " #829ab1",
      "grey-500": " #627d98",
      "grey-600": " #486581",
      "grey-700": " #334e68",
      "grey-800": " #243b53",
      "grey-900": " #102a43",

      /* rest of the colors */
      white: "#fff",
      black: "#222",
      "red-light": "#f8d7da",
      "red-dark": "#842029",
      "green-light": "#d1e7dd",
      "green-dark": "#0f5132",
      // other
    },
    fontFamily: {
      headingFont: ["Roboto Condensed", "sans-serif"],
      bodyFont: ["Cabin", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
