/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'LiteRed': '#E63946',
        'Marfil': '#F1FAEE',
        'LiteBlue': '#A8DADC',
        'Blue': '#457B9D',
        'Marine': '#1D3557'
      }
    },
  },
  plugins: [],
}





