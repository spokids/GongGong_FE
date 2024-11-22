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
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: {
          40: "#A3A3A8",
          70: "#5F5F67",
          100: "#1A1A25",
        },
        orange: {
          100: "#FFEDD5",
          200: "#FED7AA",
          400: "#FF8C2E",
        },
      },
      fontSize: {
        title1: ["20px", "160%"],
        body7: ["16px", "162.5%"],
        body6: ["16px", "162.5%"],
        body9: ["14px", "157.143%"],
        caption4: ["12px", "166.667%"],
      },
      fontWeight: {
        regular: "400",
      },
    },
  },
  plugins: [],
};
