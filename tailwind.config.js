const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        'gradient-end': '#E84D70',
        'gradient-mid': '#A337F6',
        'gradient-start': '#28A7ED',
        'amethyst-purple': '#AD1FEA',
        'amethyst-purple-hover': '#C75AF6',
        'cornflower-blue': '#4661E6',
        'ghost-white': '#F2F4FF',
        'alice-blue': '#F7F8FD',
        'indigo-ink': '#3A4374',
        'slate-gray': '#647196',
        peach: '#F49F85',
        'sky-blue': '#62BCFA ',
        'sub-header-bg': '#373F68',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
