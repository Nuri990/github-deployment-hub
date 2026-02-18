/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './constants.tsx',
    './types.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d47311',
        'background-light': '#F9F8F6',
        'background-dark': '#221910',
        'text-dark': '#181411',
        'text-muted': '#5C5046',
        'accent-brown': '#3E3228',
        'soft-beige': '#EEEbe6',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
