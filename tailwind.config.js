/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/assets/header_photo.jpg')",
      },
      screens: {
        esm: '450px',
      },
    },
    fontFamily: {
      signature: ['Open Sans'],
    },
  },
  plugins: [],
}
