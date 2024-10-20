/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated from purge to content
  darkMode: 'media', // You can also remove this line if you don't need dark mode
  theme: {
    extend: {
      colors: {
        customBlue: '#1089B8',
        customBlueHover: '#166d92',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
