import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#FAFAFA',
        'card-bg': '#FFFFFF',
        accent: '#84CC16',
        'accent-dark': '#65A30D',
        'accent-light': '#F7FEE7',
        'text-primary': '#0A0A0A',
        'text-secondary': '#4B5563',
        'text-tertiary': '#9CA3AF',
        border: '#E5E7EB',
        'offset-shadow': '#0A0A0A',
        'kairos-accent': '#0D9488',
        'kairos-light': '#F0FDFA',
        'codebase-accent': '#059669',
        'codebase-light': '#ECFDF5',
        'scheduler-accent': '#6366F1',
        'scheduler-light': '#EEF2FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '11': ['11px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        '12': ['12px', { lineHeight: '1.5' }],
        '13': ['13px', { lineHeight: '1.5' }],
        '14': ['14px', { lineHeight: '1.5' }],
        '16': ['16px', { lineHeight: '1.6' }],
        '18': ['18px', { lineHeight: '1.5' }],
        '20': ['20px', { lineHeight: '1.5' }],
        '28': ['28px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '48': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '56': ['56px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '72': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        card: '6px 6px 0px #0A0A0A',
        'card-hover': '8px 8px 0px #0A0A0A',
        hero: '4px 4px 0px #0A0A0A',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config

