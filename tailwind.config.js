/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "font-sans"],
        display: ["Laceration", "font-sans"],
      },
      colors: {
        primary: {
          bg: "#FFEBD6",
          DEFAULT: "#FF7F2A",
          card: "#F6F2EE",
        },
      },
    },
  },
  plugins: [],
};
