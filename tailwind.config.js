// tailwind.config.js
export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
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
