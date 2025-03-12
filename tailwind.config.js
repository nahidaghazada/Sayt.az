/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{htm,js}"],
  theme: {
    extend: {
      screens: {
        mini: '340px',
        lsm: '550px',
        tablet: '640px',
        lmd: "900px",
        smg: '998px',
        large: '1170px',
    },
  },
  plugins: [],
}
}

