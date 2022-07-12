/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo: ['Bodoni Moda', 'serif'],
        subLogo: ['ABeeZee', 'sans-serif']
      }
    },
  },
  plugins: [],
}
