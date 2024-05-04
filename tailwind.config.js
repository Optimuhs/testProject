/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    colors: {
      header_bg: "#242a41",
      content_bg: "#ebebeb",
      progress_bg: "#d3d3d3",
      ok_bg: "#f14b24",
      white: "#ffffff",
      span_bg: "#999999",
    },
    screens: {
      sm: "540px",
    },
  },
  plugins: [],
};
