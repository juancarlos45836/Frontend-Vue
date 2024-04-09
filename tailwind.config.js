/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans']
    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9'
      },
      animation: {
        slide: 'slide 16s infinite alternate ease-in-out'
      },
      keyframes: {
        slide: {
          '0%, 20%': { 'margin-left': '0%' },
          '25%, 45%': { 'margin-left': '-100%' },
          '50%, 70%': { 'margin-left': '-200%' },
          '75%, 100%': { 'margin-left': '-300%' }
        }
      }
    }
  },
  plugins: []
}
