module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: 'Source Sans Pro, Arial, sans-serif',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      primary: {
        light: '#99e4c3',
        DEFAULT: '#4fc08d',
        dark: '#47af80',
      },
      border: '#ced4da',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      borderWidth: ['first'],
    },
  },
  plugins: [],
};
