import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#F2C641',
        tertiary: {
          dark: '#F27405',
          light: '#F2C641',
        },
      },
    },
  },
  plugins: [],
};
export default config;
