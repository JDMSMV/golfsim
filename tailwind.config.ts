import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gs-white': '#ffffff',
        'gs-off': '#faf9f7',
        'gs-light': '#f5f3ef',
        'gs-text': '#111111',
        'gs-gold': '#c8a96e',
        'gs-green': '#2d4a3e',
        'gs-muted': '#888888',
        'gs-border': '#e5e7eb',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
