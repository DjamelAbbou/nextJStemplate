/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "var(--main-font)",
      },
      colors: {
        custom: {
          background: "#2A2D34",
          primary: "#197278",
          secondary: "#347175",
          busySecondary: "#347175",
          busyPrimary: "red",
        },
      },
    },
  },
  plugins: [],
};
