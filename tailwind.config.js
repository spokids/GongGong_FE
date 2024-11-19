// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: '390px', max: '410px' }, 
      },
      spacing: {
        'padding-default': '20px',
      },
      container: {
        center: true,
        padding: '20px',
      },
    },
  },
  plugins: [],
};
