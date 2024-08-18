/** @type {import('tailwindcss').Config} */
export default {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: {
          extend: {
               fontFamily: {
                    inter: ['Inter', 'sans-serif'],
                    poppins: ['Poppins', 'sans-serif'],
                    montserrat: ['Montserrat', 'sans-serif'],
                    open_sans: ['Open Sans', 'sans-serif'],
                    taviraj: ['Taviraj', 'serif'],
               },
               colors: {},
          },
     },
     plugins: [],
};
