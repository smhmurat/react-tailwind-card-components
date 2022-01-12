module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#e74c3c',
        'secondary-color': '#ecf0f1',
        'silver-color': '#bdc3c7',
        'sun-color': '#f1c40f',
        'color-1': '#f39c12',
        'color-2': '#16a085',
        'color-3': '#2980b9',
        'color-4': '#8e44ad'
      },
    },
  },
  plugins: [],
}
