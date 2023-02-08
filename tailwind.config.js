/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.85, 0.45, 1)',
      },
      keyframes: {
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
