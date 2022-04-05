module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   transparant: "rgba(69, 111, 225, 0)",
    //   blue: "rgb(69, 111, 225)",
    //   white: "#FBF8F1",
    // },Lucida Console
    fontFamily: {
      sans: ["Hind Siliguri", "sans-serif"],
      title: ["Verdana", "sans-serif"],
      Lucida: ["Lucida Console", "sans-serif"],
    },
    animationDelay: {
      11: "4000ms",
      12: "8000ms",
      13: "12000ms",
      14: "16000ms",
      15: "20000ms",
      3000: "3000ms",
      4300: "4300ms",
      4600: "4600ms",
      4900: "4900ms",

      5100: "5100ms",
      5200: "5200ms",
      5300: "5300ms",
      5400: "5400ms",
      5500: "5500ms"
    },
    extend: {
      dropShadow: {
        "3xl": "0 0 3px rgb(0, 0, 0)",
      },
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
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        fadeInShadow: {
          "0%": {
            opacity: 1,
            transform: "scaleX(0);",
          },
          "100%": {
            opacity: 1,
            transform: "scelaX(1)",
          },
        },
        fadeInFromLeft: {
          "0%": {
            // opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            // opacity: 1,
            transform: "translateX(0%)",
          },
        },
        fadeInBigSmall: {
          "0%": {
            transform: "scela(0%)",
          },
          "70%": {
            transform: "scela(150%)",
          },
          "100%": {
            transform: "scela(100%)",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 500ms",
        fadeIn: "fadeIn 500ms",
        fadeInDown: "fadeInDown 3000ms",
        show: "show 25000ms linear infinite",
        fadeInShadow: "fadeInShadow 1000ms ",
        fadeInFromLeft: "fadeInFromLeft 300ms ",
        fadeInBigSmall: "fadeInBigSmall 1000ms ",
      },
    },
  },

  plugins: [require("tailwindcss-animation-delay")],
};
