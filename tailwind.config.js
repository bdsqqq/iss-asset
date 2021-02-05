module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "75vh": "75vh",
      },
      maxWidth: {
        32: "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
