/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'india-red': '#C8102E',
        'india-blue': '#0A3161',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
}