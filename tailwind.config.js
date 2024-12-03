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
        custom: "0",
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        system: {
          blue: "#528DFF",
        },
        primary: {
          5: "#F3F3F4",
          10: "#E9E9EA",
          20: "#D1D1D3",
          30: "#BBBBBE",
          40: "#A3A3A8",
          50: "#8D8D92",
          60: "#76767C",
          70: "#5F5F67",
          80: "#484851",
          90: "#31313B",
          100: "#1A1A25",
          foundation: {
            50: "#8D8D92",
            100: "#1A1A25",
          },
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
        },
      },
      fontSize: {
        headline1: ["24px", "141.667% "],
        headline2: ["24px", "141.667%"],
        title1: ["20px", "160%"],
        title2: ["18px", "144.444%"],
        subtitle1: ["16px", "150%"],
        body1: ["24px", "150%"],
        body2: ["20px", "160%"],
        body3: ["20px", "160%"],
        body4: ["18px", "144.444%"],
        body5: ["18px", "144.444%"],
        body6: ["16px", "162.5%"],
        body7: ["16px", "162.5%"],
        body8: ["14px", "157.143%"],
        body9: ["14px", "157.143%"],
        button1: ["16px", "150%"],
        button2: ["14px", "157.143%"],
        button3: ["12px", "166.667%"],
        caption1: ["14px", "157.143%"],
        caption2: ["14px", "157.143%%"],
        caption3: ["12px", "166.667%"],
        caption4: ["12px", "166.667%"],
        caption5: ["10px", "180%"],
        link: ["14px", "157.143% "],
      },
      fontWeight: {
        regular: "400",
      },
    },
<<<<<<< HEAD
=======
    backgroundImage: {
      "linear-orange":
        "linear-gradient(180deg, #FFF 24.64%, #FFF8F2 72.39%, #FFDEC2 113.93%, #FF8C2E 129.38%)",
    },
    rollupOptions: {
      output:{
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
      }
  }
>>>>>>> f44253ed (#32 [Fix] 청크 사이즈 warning 해결)
  },
  plugins: [],
};
