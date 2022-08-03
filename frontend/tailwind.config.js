/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins'],
        jost:['jost']
      },
      backgroundImage:{
        'img1':"url('/src/assets/img6.png')"
      }
    },
  },
  plugins: [],
}
