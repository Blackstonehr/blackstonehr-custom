/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        cardBg: 'var(--color-cardBg)',
        text: 'var(--color-text)'
      },
      fontFamily: {
        body: 'var(--font-body)',
        header: 'var(--font-header)'
      }
    }
  },
  plugins: [],
}


