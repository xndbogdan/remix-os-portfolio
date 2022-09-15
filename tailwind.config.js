module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}",],
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
}
