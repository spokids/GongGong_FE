// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include .tsx files
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: '390px', max: '410px' }, // 커스텀 화면 크기
      },
      spacing: {
        'padding-default': '20px', // 기본 padding 값
      },
      container: {
        center: true, // 기본적으로 가운데 정렬
        padding: '20px', // 모든 컨테이너에 기본 패딩 적용
      },
    },
  },
  plugins: [],
};
