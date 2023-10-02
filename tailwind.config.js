/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'backgroundImage': {
      'hero-pattern': "url('/src/assets/background_5.jpg')",
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
    extend: {
      colors: {
        'spoty-green': '#1DB954',
        'youtube-red': '#FF0000'
      }
    },
    fontFamily: {
      'common': ['upheavtt'],
      'display': ['"Pixelify Sans"']
    }
  },
  plugins: [],
}

