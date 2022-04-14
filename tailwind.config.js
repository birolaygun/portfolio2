module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      3800: "3800ms",
      3900: "3900ms",
      4000: "4000ms",

      4100: "4100ms",
      4200: "4200ms",
      4300: "4300ms",
      4400: "4400ms",
      4800: "4800ms",
    },
    extend: {
      colors: {
        bg: {
          50: "#1f1f38",
          100: "#2c2c6c",
          150: "#4cb5f6",
        },
      },
      boxShadow: {
        button:
          "0px 2px 4px 0px rgba(255,255,255 0.12), 0px 2px 16px 0px rgba(255,255,255 0.32)",
      },
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
            transform: "sceleX(1)",
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
            opacity: 0,
            transform: "scale(0%)",
          },

          "100%": {
            opacity: 1,
            transform: "scale(100%)",
          },
        },
        fromLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },

          "100%": {
            transform: "translateX(0%)",
          },
        },

        fromRight: {
          "0%": {
            transform: "translateX(100%)",
          },

          "100%": {
            transform: "translateX(0%)",
          },
        },
        fromLeftTwo: {
          "0%": {
            transform: "translateX(-10%)",
          },

          "100%": {
            transform: "translateX(0%)",
          },
        },

        fromRightTwo: {
          "0%": {
            transform: "translateX(10%)",
          },

          "100%": {
            transform: "translateX(0%)",
          },
        },

        fromBottom: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        scaleXSpread: {
          "0%": {
            transform: "scaleX(0);",
          },

          "100%": {
            transform: "scaleX(1);",
          },
        },
        scaleXSpreadDwn: {
          "0%": {
            transform: "scaleX(0);",
          },

          "5%": {
            transform: "scaleX(1);",
          },

          "65%": {
            transform: "scaleX(1);",
          },

          "100%": {
            transform: "scaleX(0);",
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
        fadeInBigSmall: "fadeInBigSmall 500ms ",
        fromLeft: "fromLeft 500ms ",
        fromRight: "fromRight 500ms ",
        fromLeftTwo: "fromLeftTwo 500ms ",
        fromRightTwo: "fromRightTwo 500ms ",
        scaleXSpread: "scaleXSpread 500ms ",
        scaleXSpreadDwn: "scaleXSpreadDwn 10000ms ",
      },
    },
  },

  plugins: [require("tailwindcss-animation-delay")],
};
