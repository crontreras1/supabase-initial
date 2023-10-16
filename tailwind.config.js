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
        hoverFocus: '#f87171',
        buttonLink: '#38bdf8',
        hoverButtonLink: '#7dd3fc'
      }
    },
  },
  plugins: [],
}