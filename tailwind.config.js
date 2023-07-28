module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3'
      }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio')
  ]
}
