/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#33ca985e',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-dark': '#0a0a0f',
        'cyber-light': '#1a1a2e',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'dystopian': ['SDDystopian', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 3s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #31cda1a0, 0 0 10px #00eeff2f' },
          '100%': { textShadow: '0 0 10px #548e92ff, 0 0 20px #000000ff, 0 0 30px #00ffbfa4' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '2' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}