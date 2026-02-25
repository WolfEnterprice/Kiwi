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
        primary: '#dc2626', // rojo
        secondary: '#ef4444', // rojo acento
        'background-light': '#f9fafb',
        'background-dark': '#020617',
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "logo": ["Bebas Neue", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      boxShadow: {
        'neon-fuchsia': '0 12px 30px rgba(220, 38, 38, 0.35)',
        'neon-green': '0 12px 30px rgba(239, 68, 68, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

