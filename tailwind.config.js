/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "font-sans"],
        display: ["Laceration", "font-sans"],
      },
      colors: {
        primary: {
          // bg: "#FFEBD6",
          DEFAULT: "#FF7F2A",
          // card: "#F6F2EE",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=bumblebee]"],
          primary: "#FF7F2A",
          "primary-content": "#131616",
          "base-200": "#F6F2EE",
          "base-300": "#FFF3EB",
          "base-content": "#131616",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          primary: "#FF7F2A",
        },
      },
    ],
  },
};
