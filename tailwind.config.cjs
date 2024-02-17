const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
  // purge: {
  //   enabled: process.env.NODE_ENV === "production",
  //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      height: {
        inherit: "inherit",
        webkit: "-webkit-fill-available",
      },
      width: {
        webkit: "-webkit-fill-available",
      },
      borderRadius: {
        xs: "5px",
        sm: "8px",
        md: "12px",
        DEFAULT: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      boxShadow: {
        card: "3px 3px 10px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: "interRegular",
        light: "interLight",
        normal: "interRegular",
        medium: "interMedium",
        bold: "interBold",
      },
      colors: {
        primary: {
          DEFAULT: "#222222",
          100: "#FFFFFF",
          200: "#F8F9FA",
          300: "#A1A0A3",
          400: "#25262A",
          500: "#666666",
        },
        secondary: {
          DEFAULT: "#23F4F9",
          100: "#23F4F9",
          200: "#27d8db",
          300: "#23c4c6",
          400: "#1da0a3",
          400: "#1da0a3",
          500: "#138082",
        },
        danger: { DEFAULT: "#FF3838", 100: "#ecd8dd" },
        success: { DEFAULT: "#2ecc71", 100: "#cdf2dd" },
        dark: { 100: "#17191A", 200: "#131517", DEFAULT: "#111315" },
      },
      screens: {
        "2xs": "320px",
        xs: "480px",
        ml: "900px",
        "2xl": "1450px",
      },
    },
  },
  plugins: [aspectRatio, addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );
  addBase({
    ":root": newVars,
  });
}
