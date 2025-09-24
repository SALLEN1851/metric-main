import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './theme/**/*.{html,hubspot,hubl}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
