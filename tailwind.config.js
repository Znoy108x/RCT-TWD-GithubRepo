module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily:{
      "inter": ['Inter', 'sans-serif'],
      "popins": ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}