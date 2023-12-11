import plugin from "tailwindcss/plugin";

const getLayoutWidth = (num, base = 16) => {
  const grid = 46;
  const gutter = 32;
  const px = grid * num + gutter * (num - 1);
  return `${px / base}rem`;
};

const layout = plugin(function ({ addUtilities }) {
  const newUtils = {};
  for (let i = 1; i <= 24; i++) {
    const num = i;
    newUtils[`.layout-${num}`] = { width: `${getLayoutWidth(num)}` };
  }
  addUtilities(newUtils);
});

module.exports = layout;
