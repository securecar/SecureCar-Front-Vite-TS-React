/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a9ffe9',
          DEFAULT: '#4a90e2',
          dark: '#366ba9',
        },
        link_color: {
          DEFAULT: '#5f5f5f',
          hover: '#0054c8'
        }
      },
      fontFamily: {
        DEFAULT: ['insitu', 'sans-serif'],
      },
    },
    borderRadius : {
      'none': '0',
      DEFAULT: '0.25rem',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl' : '12px',
      'custom-xl' : '30px',
      'custom-xlg' : '20px',
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'celular' : {'max':'550px'},
      'tablet' : {'max':'819px'},
      'tela': {'min': '820px'},
      'tela-xl':{'min' : '820px','max':'1200px'},
      'ate-tela' : {'max' : '1024px'}
    }
  },
  plugins: [],
}
