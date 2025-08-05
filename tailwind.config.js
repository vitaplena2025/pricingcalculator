/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // activamos modo oscuro
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem'
      }
    }
  },
  plugins: []
}
