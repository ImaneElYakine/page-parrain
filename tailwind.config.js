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
        'dark-fushia': '#73003f',
        'vert' : '#629D00'
      },
      fontFamily: {
        'mediametrie': ['Mediametrie', 'sans-serif'],
      },
      screens: {
        'lg': '1140px',
        'md': '910px'
      }
    },


  },
  plugins: [],
}
