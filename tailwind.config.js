/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans']
      },
      spacing: {
        '100': '110rem',
        '99': '53rem',
        '90': '55rem',
        '89': '21rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

