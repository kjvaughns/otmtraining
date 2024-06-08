module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#008000', // Green
        secondary: '#000000', // Black
        accent: '#ffffff', // White
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
