/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'about': '3fr 2fr',
      },
      colors: {
        'light-gray': '#d7d7d7',
        'dark-gray':'#494949',
        'orange': '#f9a72a',
        'light-blue': '#373f70',
        'dark-blue': '#242940',
        'black': '#1b1b1b'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
