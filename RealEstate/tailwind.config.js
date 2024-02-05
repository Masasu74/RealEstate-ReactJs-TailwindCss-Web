/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#091638',
      'secondary':'#F3F3FA',
      'hover':'#6E8AE9',
      'blue':'#1C3988',
      'white':'#FFFFFF',
    },
    extend: {
      margin: ['responsive'],
    },
  },
  plugins: [],
}

