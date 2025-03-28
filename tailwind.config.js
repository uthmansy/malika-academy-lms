/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { primary: "#653ab8", secondary: "#666666" } },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
