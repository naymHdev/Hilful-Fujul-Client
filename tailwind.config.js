/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        joseFin: "'Josefin Sans', sans-serif",
      },
      backgroundImage: {},
    },
  },
  plugins: [require("daisyui")],
};
