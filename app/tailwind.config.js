/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'bebas-bold': ['Bebas Neue Bold', 'sans-serif'],
          'bebas-book': ['Bebas Neue Book', 'sans-serif'],
          'bebas-light': ['Bebas Neue Light', 'sans-serif'],
          'bebas-regular': ['Bebas Neue Regular', 'sans-serif'],
          'bebas-thin': ['Bebas Neue Thin', 'sans-serif'],
        },
        screens: {
          'max-lg': {'max': '1023px'},
        }
      },
    },
    plugins: [],
  } 