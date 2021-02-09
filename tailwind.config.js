module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primaryDark":"#18191A",
        "primary":"#15181C",
        "primaryLight":"#D9D9D9",
        "hightlight":"#1DA1F2",
        "error":"#E0245E",
        "info":"#FED200",
        "success":"#03DAC6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
