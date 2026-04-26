import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import('tailwindcss').Config

export default defineConfig({
   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
        mono: ["'Fira Code'", 'monospace'],
      },
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        card:    'var(--color-card)',
        border:  'var(--color-border)',
        accent:  'var(--color-accent)',
        accent2: 'var(--color-accent2)',
        muted:   'var(--color-muted)',
        primary: 'var(--color-primary)',
      },
      animation: {
        pulse2:     'pulse2 2s infinite',
        slideTrack: 'slideTrack 28s linear infinite',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.4 },
        },
        slideTrack: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [react()],
})


