module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: '#008000',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
