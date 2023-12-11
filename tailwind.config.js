/** @type {import('tailwindcss').Config} */

const pxToRem = (px, base = 16) => `${px / base}rem`;
const range = (start, end) => {
  const arr = [];
  const length = end - start;
  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }
  return arr;
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      break: "1441px",
    },
    fontFamily: {
      pre: ["Pretendard"],
    },
    extend: {
      colors: {
        "primary-100": "#E8DCFD",
        "primary-200": "#D1BAFC",
        "primary-300": "#B597F7",
        "primary-400": "#9D7BF0",
        "primary-500": "#7851E7",
        "primary-600": "#5B3BC6",
        "primary-700": "#4228A6",
        "primary-800": "#2D1985",
        "primary-900": "#1E0F6E",
        "ef-pink": "#FFB4AC",
      },
    },
    spacing: {
      ...range(1, 1000).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
  },
  plugins: [require("./src/plugins/scrollbar-hide.js"), require("./src/plugins/layout.js")],
};
