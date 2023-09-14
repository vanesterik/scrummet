/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{ts,tsx}'],
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
}
