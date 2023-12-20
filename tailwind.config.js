/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        focus: '#ef4444',
        hFocus: '#f87171',
        primaryColor: '#0284c7',
        hPrimaryColor: '#7dd3fc'
      }
    },
  },
  plugins: [],
}