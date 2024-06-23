/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      primaryFont:["Alata", "sans-serif"],
      secondaryFont:["IBM Plex Mono", "monospace"]
    },
    
  },
  plugins: [],
}