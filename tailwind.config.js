/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
        mono: ["'Fira Code'", 'monospace'],
      },
      colors: {
        bg: '#080c14',
        surface: '#0e1421',
        card: '#111827',
        border: '#1f2d45',
        accent: '#38bdf8',
        accent2: '#818cf8',
        muted: '#64748b',
        primary: '#e2e8f0',
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        slideTrack: 'slideTrack 28s linear infinite',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
        slideTrack: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
