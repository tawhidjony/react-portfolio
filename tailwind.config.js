module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { },
    colors:{
      blu: {
        light: '#ff00bc',
        dark: '#00ffc4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
