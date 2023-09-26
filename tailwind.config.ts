import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-mac': '#dddddd',
        'blue-ukraine': '#0057b7',
        'yellow-ukraine': '#ffdd00',
      },
    },
    fontFamily: {
      chicago: ["Chicago", "sans-serif" ],
    },
  },
  plugins: [],
} satisfies Config

