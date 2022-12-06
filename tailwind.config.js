/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'test.html'
  ],
  theme: {
    extend: {
      colors: {
        'fushia' : '#AD005E',
        'vert' : '#629D00'
      },
      fontFamily: {
        'mediametrie': ['Mediametrie', 'sans-serif'],
      },
      screens: {
        'lg': '1090px',
        'md': '840px'
      }
    },


  },
  plugins: [],
}
