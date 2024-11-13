/** @type {import('tailwindcss').Config} */
const { join } = require('path');
module.exports = {
  content: ['./public/html}', join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
