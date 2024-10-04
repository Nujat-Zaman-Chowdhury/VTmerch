/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #EC3339 0%, #BB1117 100%)',
      },
    },
    fontFamily: {
      'actOfRejection': ['ActOfRejection', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#060606',
          '-webkit-font-smoothing':'antialiased',
          '-moz-osx-font-smoothing':'grayscale',          
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities)
    },



    function ({ addUtilities }) {
      const newGradient = {
        '.text-gradient': {
          'background': 'linear-gradient(180deg, #DE2A2F 0%, #EF5256 100%)',
'background-clip': 'text',
'-webkit-background-clip': 'text',
'-webkit-text-fill-color': 'transparent'
        },
      };
      addUtilities(newGradient)
    }


  ],
}

