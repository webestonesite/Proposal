/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        webestone: {
          green: '#48B83B',
          darkgreen: '#15803D',
          lightgreen: '#DCFCE7',
          yellow: '#FFC107',
          darkyellow: '#D97706',
          blue: '#2563EB',
          dark: '#0f172a',
          slate: '#475569',
          border: '#86EFAC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
