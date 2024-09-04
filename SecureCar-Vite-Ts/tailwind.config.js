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
        inter: ['Inria Serif', 'sans-serif'],
      },
    },
    borderRadius : {
      'none': '0',
      DEFAULT: '0.25rem',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl' : '30px'
    }
  },
  plugins: [],
}
