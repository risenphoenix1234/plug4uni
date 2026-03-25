// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:   '#faf7f2',
        sand:    '#e8ddd0',
        border:  '#e2d8ce',
        warm:    '#fff9f3',

        terra: {
          DEFAULT: '#c4714f',
          light:   '#e8906e',
          bg:      '#fef0e8',
        },

        opay: {
          DEFAULT: '#05b083',
          dark:    '#038a67',
          light:   '#e6f8f4',
        },

        slate: {
          plug:    '#3d3530',
        },

        muted:   '#8a7e76',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '18px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(61,53,48,0.07)',
        'card-hover': '0 10px 36px rgba(61,53,48,0.12)',
        green: '0 4px 16px rgba(5,176,131,0.28)',
        terra: '0 4px 16px rgba(196,113,79,0.25)',
      },
    },
  },
  plugins: [],
}