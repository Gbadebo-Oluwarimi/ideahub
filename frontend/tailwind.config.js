/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins']
      },
      backgroundImage:{
        'img1':"url('/src/assets/img3.jpg')"
      }
    },
  },
  plugins: [],
}
