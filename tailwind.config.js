// tailwind.config.js
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "390px", max: "410px" },
      },
      spacing: {
        "padding-default": "20px",
      },
      padding: {
        'custom': '0',
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: {
          40: "#A3A3A8",
          60: "#76767C",
          70: "#5F5F67",
          100: "#1A1A25",
          'foundation':{
            100: "#1A1A25",
          }
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          400: "#FF8C2E",
        },
        foundation: {
          5: "#F3F3F4",
          40: "#A3A3A8",
          60: "#76767C",
          100: "#1A1A25",
        }
      },
      fontSize: {
        subtitle1: ["16px", "150%"],
        title1: ["20px", "160%"],
        title2: ["18px", "150%"],
        headline1: ["24px", "144.444%"],
        body6: ["16px", "162.5%"],
        body7: ["16px", "162.5%"],
        body8: ["14px", "162.5%"],
        body9: ["14px", "157.143%"],
        button3: ["12px", "166.667%"],
        caption4: ["12px", "166.667%"],
        link: ["14px", "157.143% "],
      },
      fontWeight: {
        regular: "400",
      },
    },
  },
  plugins: [],
};
