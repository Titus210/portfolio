/** @type {import('tailwindcss').Config} */

/**
 * Tailwind CSS Configuration:
 *
 * This configuration file defines the styles and theme settings for Tailwind CSS.
 *
 * Explanation:
 * - The `content` property specifies the files to watch for classes used in HTML, JSX, and TSX files.
 * - The `theme` property extends the default Tailwind CSS theme with customizations.
 *   - It defines custom screen breakpoints for responsive design.
 *   - Custom colors are added for primary, secondary, and background colors.
 *   - Custom font families are defined for 'sans' and 'header' text.
 *   - Font sizes, spacing, box shadows, border radius, and dimensions are customized.
 * - The `plugins` property is currently empty and can be used for adding additional Tailwind CSS plugins.
 */
export default {
  content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],

  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: {
          DEFAULT: '#007ACC',
        },
        primaryLight: {
          DEFAULT: '#71a9f7',
        },
        secondary: {
          DEFAULT: '#00C5A8',
        },
        primaryBg: {
          DEFAULT: '#032B43',
        },
        secondaryBg: {
          DEFAULT: '#032f4b',
        },
        accent: {
          DEFAULT: '#FF6B6B',
        },
        text: {
          DEFAULT: '#f7f7f7',
          primary: '#f7f7f7',
          secondary: '#F34213',
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
