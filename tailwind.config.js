/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00204a", //darkest
        "prim-light": "#00204a9f",
        "secondary": "#005792",
        "tertiary": "#00bbf0",
        "quaternary": "#d9faff", //lightest
      }
    },
  },
  plugins: [],
}
