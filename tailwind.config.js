/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        'primary-hover': '#005f8a',
        'text-primary': '#0A192F',
        'text-secondary': '#4A5568',
        'bg-secondary': '#F8F9FE',
        'bg-accent': '#E0FBFC',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}