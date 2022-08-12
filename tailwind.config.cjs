/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'shippori': ["Shippori Antique", "sans-serif"],
      },
    },
  },
  plugins: [],
}