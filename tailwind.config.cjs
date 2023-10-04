/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#FFFFFF',
        'base-200': '#F4F4F5',
        'base-300': '#D4D4D8',
        'base-content': '#0F172A',

        primary: '#4F46E5',
        'primary-focus': '#3730A3',
        'primary-content': '#E0E7FF',

        secondary: '#F4F4F5',
        'secondary-focus': '#E4E4E7',
        'secondary-content': '#0F172A',

        error: '#E11D48',

        'dark-base-100': '#0F172A',
        'dark-base-200': '#1E293B',
        'dark-base-300': '#334155',
        'dark-base-content': '#F4F4F5',

        'dark-primary': '#9333EA',
        'dark-primary-focus': '#6B21A8',
        'dark-primary-content': '#F3E8FF',

        'dark-secondary': '#1E293B',
        'dark-secondary-focus': '#334155',
        'dark-secondary-content': '#F4F4F5',

        'dark-error': '#DC2626',
      },
      fontFamily: {
        icon: ['Icons'],
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        base: {
          css: {
            '--tw-prose-body': theme('colors.base-content'),
            '--tw-prose-headings': theme('colors.base-content'),
            '--tw-prose-invert-body': theme('colors.dark-base-content'),
            '--tw-prose-invert-headings': theme('colors.dark-base-content'),
          },
        },
      }),
    },
  },
}
