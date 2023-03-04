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
      pulseOut: 'pulseOut 0.3s ease-in-out',
      growUpIn: 'growUpIn 0.3s ease-in-out',
      transformUp: 'transformUp 0.3s ease-in-out',
      transformDown: 'transformDown 0.3s ease-in-out',
      modalOpacityIn: 'modalOpacityIn 0.3s ease-in-out',
      modalOpacityOut: 'modalOpacityOut 0.3s ease-in-out',
      ratate45Clockwise: 'ratate45Clockwise 0.3s ease-in-out',
      ratate45ConterClockwise: 'ratate45ConterClockwise 0.3s ease-in-out',
    },
    keyframes: {
      pulseIn: {
        '0%': { transform: 'scale(0.75)' },
        '50%': { transform: 'scale(1)' },
        '75%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
      },
      pulseOut: {
        '0%': { transform: 'scale(1)' },
        '25%': { transform: 'scale(1.05)' },
        '50%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0.25)' },
      }
      ,growUpIn: {
        '0%': { width: '0px' },
        '50%': { width: '1rem' },
        '75%': { width: '2rem' },
        '100%': { width: '3rem' },
      },
      transformUp: {
        '0%': { transform: 'translateY(100%)'},
        '25%': { transform: 'translateY(75%)' },
        '50%': { transform: 'translateY(50%)' },
        '75%': { transform: 'translateY(25%)' },
        '100%': { transform: 'translateY(0%)'},
      },
      transformDown: {
        '0%': { transform: 'translateY(0%)' },
        '25%': { transform: 'translateY(25%)' },
        '50%': { transform: 'translateY(50%)' },
        '75%': { transform: 'translateY(75%)' },
        '100%': { transform: 'translateY(100%)'},
      },
      modalOpacityIn: {
        '0%': { opacity: '0' },
        '50%': { opacity: '0.25' },
        '75%': { opacity: '0.6' },
        '100%': { opacity: '1'},
      },
      modalOpacityOut: {
        '0%': { opacity: '1' },
        '50%': { opacity: '0.66' },
        '75%': { opacity: '0.33' },
        '100%': { opacity: '0'},
      },
      ratate45Clockwise: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(45deg)'},
      },
      ratate45ConterClockwise: {
        '0%': { transform: 'rotate(45deg)' },
        '100%': { transform: 'rotate(0deg)'},
      },
    },
    extend: {
      zIndex: {
        'postModal': '90',
        'createPost': '100',
        'ceateIcon': '150',
      },
      screens: {
        'xs': {'min':'1px','max': '1023px'},
        // => @media (min-width: 576px) { ... }
      }
    }
  },
  plugins: [],
}
