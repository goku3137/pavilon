/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Deep charcoal/near-black
        surface: '#121212', // Slightly lighter for cards
        ivory: '#f5f2eb', // Primary text
        muted: '#a3a099', // Secondary text
        accent: {
          light: '#f2dfc6',
          DEFAULT: '#d4af82', // Champagne/warm metallic
          dark: '#a88151',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
