module.exports = {
  content: [
    './public/*.html'
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
