const tailwindForms = require('@tailwindcss/forms');
import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: ['class'], // or 'media' or false
  theme: {
    extend: {
      boxShadow: {
        'control-focus-dark':
          'rgb(17, 18, 23) 0px 0px 0px 2px, rgb(61, 113, 217) 0px 0px 0px 4px',
        'control-focus-light':
          'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(61, 113, 217) 0px 0px 0px 4px',
      },
      ringColor: {
        'focused-primary': 'rgb(38, 152, 255)',
      },
      borderColor: {
        'focused-primary': 'rgb(38, 152, 255)',
      },
    },
  },
  plugins: [tailwindForms],
  corePlugins: {
    preflight: true,
  },
};

export default config;
