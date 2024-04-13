/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arinze-blue': '#72CBE7',
        'A-writeup': '#878787',
      },
    },
  },
  plugins: [],
}