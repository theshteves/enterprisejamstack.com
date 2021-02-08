const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    enabled: true,
    content: ['./src/**/*.tsx', './src/**/*.mdx'],
    options: {
      // bleh
      safelist: [
        'col-start-1',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
        'col-start-8',
        'col-start-9',
        'col-start-10',
        'col-start-11',
        'col-start-12',
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'row-start-1',
        'row-start-2',
        'row-start-3',
        'row-start-4',
        'row-start-5',
        'row-start-6',
        'row-span-1',
        'row-span-2',
        'row-span-3',
        'origin-left',
        'origin-right',
      ],
    },
  },
  theme: {
    colors: {
      ...defaultTheme.colors,
      ...colors,
      brand: {red: '#F83E0D', purple: '#8B3BDB', yellow: '#FCAC14'},
      gray: {
        50: '#e4e4e4',
        100: '#cbcbcb',
        200: '#b2b2b2',
        300: '#9a9a9a',
        400: '#828282',
        500: '#6c6c6c',
        600: '#555555',
        700: '#404040',
        800: '#2d2d2d',
        900: '#191919',
        1000: '#131313',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Greycliff', ...defaultTheme.fontFamily.sans],
        funky: ['Challenge', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            'h1, h2, h3, h4, h5': {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.brand.yellow'),
              '&:hover': {
                color: theme('colors.brand.purple'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
