import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'contrast-400': 'var(--contrast-400)',
        'contrast-500': 'var(--contrast-500)',
        'contrast-600': 'var(--contrast-600)',
      },
      minHeight: {
        main: 'var(--main-min-height)',
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'secondary-light': 'var(--secondary-light-color)',
      },
      spacing: {
        header: 'var(--header-height)',
        footer: 'var(--footer-height)',
      },
      textColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      borderColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--seconary-color)',
        gray: 'var(--border-gray-color)',
      },
      outlineColor: {
        'gray-dark': 'var(--border-gray-dark-color)',
      },
      fontFamily: {
        sans: ['var(--primary-font)', ...defaultTheme.fontFamily.sans],
        headings: ['var(--headings-font)', ...defaultTheme.fontFamily.sans],
        open: ['var(--tertiary-font)', ...defaultTheme.fontFamily.sans],
      },
      flexBasis: {
        '1/3-with-gap': '30%',
        '2/3-with-gap': '65%',
        '1/2-with-gap': '47.5%',
        '1/4-with-gap': '22%',
      },
      gap: {
        '5percent': '5%',
        '4percent': '4%',
      },
    },
  },
  plugins: [],
};
export default config;
