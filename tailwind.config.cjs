/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      pulseIn: 'pulseIn 0.3s ease-in-out',
      growUpIn: 'growUpIn 0.3s ease-in-out',
    },
    keyframes: {
      pulseIn: {
        '0%': { transform: 'scale(0.75)' },
        '50%': { transform: 'scale(1)' },
        '75%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
      },growUpIn: {
        '0%': { width: '0px' },
        '50%': { width: '1rem' },
        '75%': { width: '2rem' },
        '100%': { width: '3rem' },
      }
    }
  },
  plugins: [],
}
