/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active'],
      // ...
      borderColor: ['focus-visible', 'first'],
      // ...
      textColor: ['visited'],
      block: ['group-last'],
    }
  },
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/forms')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
    , require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
