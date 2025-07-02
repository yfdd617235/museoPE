/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Barlow', 'sans-serif'],
        title: ['SouvenirBold', 'serif'],
        //sans: ['Helvetica', 'Arial', 'sans-serif'], // puedes dejarla si aún la usas en otras partes
      },
    },
  },
  plugins: [],
}
