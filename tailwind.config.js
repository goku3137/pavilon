/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d4af37',
          DEFAULT: '#b5952f',
          dark: '#8e7525',
        },
        maroon: {
          DEFAULT: '#800000',
        },
        cream: {
          DEFAULT: '#FFFDD0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
