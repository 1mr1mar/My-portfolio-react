/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          blink: {
            '50%': { opacity: '0' },
          },
          slideIn: {
            from: { opacity: '0', transform: 'translateY(10px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
          pop: {
            from: { opacity: '0', transform: 'scale(0.9)' },
            to: { opacity: '1', transform: 'scale(1)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
            '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
            '100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
          },
        },
        animation: {
          blink: 'blink 0.8s step-end infinite',
          slideIn: 'slideIn 0.6s ease-out forwards',
          pop: 'pop 0.5s ease-out forwards',
          glow: 'glow 1s infinite alternate',
        },
      },
    },
    plugins: [],
  };
  module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  