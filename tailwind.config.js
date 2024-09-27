/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        '3xl': '1921px',
        'xs' :'0px',
      },
    },
  },
  plugins: [],
}

