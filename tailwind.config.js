/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c0b',
        panel: '#111512',
        line: '#252b26',
        acid: '#d7ff64',
        muted: '#929b91'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        mono: ['DM Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: '0 0 55px rgba(215, 255, 100, 0.09)'
      }
    }
  },
  plugins: []
};
