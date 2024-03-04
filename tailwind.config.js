const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
      },
      colors: {
        skin: {
          accent: { DEFAULT: "#fa0001", dark: "#fa0001" },
          base: "#F9FFFF",
          muted: "#EDF4F4",
          dark: "#0c3e95", /*blue color*/
          gray: "#7c9d8b", /*shadow icons, navbar*/
          green: "#089d4c",
          red: "#fe000b",
          lightblue:"#089d4c",

          transparent: "transparent",
          current: "currentColor",
          white: "#ffffff",
          black: "#000000",
          lightgrey: "#444245",
          lightpink: '#F8F7F7',
          pink: '#DF6751',
          bgpink: '#df675126',
          darkpink: '#FEEDEA',
          lightblack : '#333333',
          textbl: "#363636",
          footerlinks: '#363636E6',
          bordertop: '#69788329',
          darkgrey: '#2c090bCC'
        },
      },
      boxShadow: {
        upper:
          "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        "upper-md":
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0))" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
}
