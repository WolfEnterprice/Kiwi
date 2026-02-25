/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ea1f5c",
        "secondary": "#99CC33",
        "background-light": "#f8f6f6",
        "background-dark": "#0a0a0a",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      boxShadow: {
        'neon-fuchsia': '0 0 15px rgba(234, 31, 92, 0.6), 0 0 5px rgba(234, 31, 92, 0.4)',
        'neon-green': '0 0 15px rgba(153, 204, 51, 0.6), 0 0 5px rgba(153, 204, 51, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

