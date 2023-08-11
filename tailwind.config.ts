import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '32px',
        lg: '64px',
      },
    },
    extend: {
      colors: {
        brand: '#ef820f',
        current: 'currentColor',
        error: '#f25137',
        transparent: 'transparent',
        white: '#ffffff',
        semiPale: '#3c4959',
      },
      fontFamily: {
        literata: ['literata'],
      },
    },
  },
  plugins: [],
};
export default config;