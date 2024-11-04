/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgba(var(--bg))",
        textP: "rgba(var(--textP))",
        textS: "rgba(var(--textS))",
        border: "rgba(var(--border))",
      },
    },
  },
  plugins: [],
};
