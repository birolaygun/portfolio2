module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  
    colors: {
      transparant: "rgba(69, 111, 225, 0)",
      blue: "rgb(69, 111, 225)",
      white: "#FBF8F1",
    },
    animationDelay: {
      11: "4000ms",
      12: "8000ms",
      13: "12000ms",
      14: "16000ms",
      15: "20000ms",
    },
    extend: {
      keyframes: {
        show: {
          "0%": {
            transform: "translateY(-30%)",
            opacity: "0",
          },
          "1%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
          "14%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
          "16%": {
            transform: "translateY(30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(30%)",
            opacity: "0",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "scela(100%)",
          },
          "100%": {
            transform: "scela(50%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 500ms",
        fadeIn: "fadeIn 500ms",
        fadeInDown: "fadeInDown 500ms",
        show: "show 25000ms linear infinite",
      },
    },
  },

  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
