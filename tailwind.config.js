/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
          primary: "#FF7F2A",
          // "primary-focus": "#FF660A",
        },
      },
    ],
  },
};
