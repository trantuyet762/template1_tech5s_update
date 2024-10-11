/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
        'xs' :'360px',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

