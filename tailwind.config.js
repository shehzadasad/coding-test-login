/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#131B15",
      },
    },
  },
  plugins: [],
};
