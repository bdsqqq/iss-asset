module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "75vh": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
