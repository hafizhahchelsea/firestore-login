/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mage': "url('./asset/bg.jpg')"
      }
    },
  },
  plugins: [],
}

