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
        buttonLink: '#0284c7',
        hoverButtonLink: '#7dd3fc'
      }
    },
  },
  plugins: [],
}