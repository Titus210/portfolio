/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Small screens, like mobile
        'md': '768px', // Medium screens, like tablets
        'lg': '1024px', // Large screens, like laptops
        'xl': '1280px', // Extra-large screens, like desktops
      },
      colors: {
        primary: {
          DEFAULT: '#007ACC',
        },
        secondary: {
          DEFAULT: '#00C5A8',
        },
        primaryBg: {
          DEFAULT: '#040303',
        },
        secondaryBg: {
          DEFAULT: '#0A0B12',
        },
        accent: {
          DEFAULT: '#FF6B6B',
        },
        text: {
          DEFAULT: '#333333',
          primary: '#007ACC',
          secondary: '#FF6B6B',
          visited: '#8044CC',
        },
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        header: ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        'h1': '24px',
        'h2': '18px',
        'base': '16px',
        'sm': '14px',
      },
      spacing: {
        '20': '20px',
      },
      boxShadow: {
        'nav': '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'button': '0px',
      },
      width: {
        'button': '150px',
      },
      height: {
        'button': '40px',
      },
    },
  },
  plugins: [],
}
