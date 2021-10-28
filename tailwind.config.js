const { slateDark, redDark, blueDark } = require("@radix-ui/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...slateDark,
      ...redDark,
      ...blueDark,
    },
    extend: {
      stroke: {
        ...slateDark,
        ...redDark,
        ...blueDark,
      },
      height: {
        "75vh": "75vh",
      },
      maxWidth: {
        32: "8rem",
      },
      padding: {
        "16/9": "56.25%",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
