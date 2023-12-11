// const plugin = require("tailwindcss/plugin");
import plugin from "tailwindcss/plugin";

const scrollbarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    ".scrollbar-hide": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    ".ef-scrollbar": {
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "10px",
        "background-color": "rgb(0 0 0 / 20%)",
        border: "2px solid transparent",
        "border-radius": "9px",
        "background-clip": "content-box",
      },
    },
  });
});

module.exports = scrollbarHide;
