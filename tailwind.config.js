/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

