module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{js,ts,jsx,tsx}",],
  content: [],
  theme: {
    extend: {
      colors: {
        'gray-mac': '#dddddd',
      },
    },
    fontFamily: {
      chicago: ["Chicago", "sans-serif" ],
    },
  },
  plugins: [],
}
