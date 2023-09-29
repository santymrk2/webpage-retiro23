/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'backgroundImage': {
      'hero-pattern': "url('https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg')",
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '5rem',
      '7xl': '8rem',
      '8xl': '12rem',
      '9xl': '15rem'
    },
    extend: {},
    fontFamily: {
      'common': ['upheavtt'],
      'display': ['"Pixelify Sans"']
    }
  },
  plugins: [],
}
