module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a1929',
        'dark-text': '#a8a29e',
        'dark-hover': '#f4ebe5',

        'light-bg': '#e0e0e3',
        'light-text': '#374151',
        'light-hover': '#374151'
      },
    },
  },
  plugins: [],
}
