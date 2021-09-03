module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
          'main-bg': "url('/src/assets/images/bg.jpg')",
          'main-bg-1': "url('/src/assets/images/bg1.jpg')",
      }),
      colors:{
        blu: {
          light: '#ff00bc',
          dark: '#00ffc4',
        },
        wenge:{
          200:"#B7A6AD",
          300:"#A9949D",
          400:"#9A828C",
          500:"#1E2C26",
        },
        charleston:{
          100:"#EEEEEE",
          400:"#222831",
          500:"#312B22",
        }
      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
