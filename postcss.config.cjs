/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.cjs"),
    autoprefixer,
    isProduction ? cssnano : false,
  ],
};
