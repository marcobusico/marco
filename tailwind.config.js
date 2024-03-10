/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#e5e5e5",
      black: "#1a1a1a",
      gray: "#6f6f6f",
      bgray: "#8c8c8c",
    },
  },
  plugins: [],
};
