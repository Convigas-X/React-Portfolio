/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Dark Material You Color Palette
        background: '#020617', // slate-950
        surface: {
          DEFAULT: '#0f172a', // slate-900
          variant: '#1e293b', // slate-800
        },
        primary: {
          DEFAULT: '#60a5fa', // blue-400
          container: '#1e3a8a', // blue-900
          on: '#ffffff',
        },
        secondary: {
          DEFAULT: '#a78bfa', // violet-400
          container: '#4c1d95', // violet-900
          on: '#ffffff',
        },
        outline: {
          DEFAULT: '#334155', // slate-700
          variant: '#475569', // slate-600
        },
      },
    },
  },
  plugins: [],
}