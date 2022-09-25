const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        'tca1':'#f3f4f6', 
        'tca2':'#f9fafb',
        'tca3':'#1f2937',
        'tcb4':'#ccfbf1',
        'tcb5':'#ccfbf1',
        'tcb6':'#14b8a6',
        'tcb7':'#0d9488',
        'tcb8':'#134e4a',
        'tcc9':'#404040',
        'tcc10':'#262626',
        'tcc11':'#171717',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      GrandHotel: ["GrandHotel"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
