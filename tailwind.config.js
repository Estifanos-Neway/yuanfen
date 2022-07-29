/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Bodoni Moda', 'serif'],
        subLogo: ['ABeeZee', 'sans-serif'],
        main: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#097DAB"
      },
    },
    screens: {
      'xxs': '400px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}