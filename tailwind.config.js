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
        primary: '#6366f1', // índigo suave
        secondary: '#22c55e', // verde acento
        'background-light': '#f9fafb',
        'background-dark': '#020617',
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
        'neon-fuchsia': '0 12px 30px rgba(99, 102, 241, 0.25)',
        'neon-green': '0 12px 30px rgba(34, 197, 94, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

