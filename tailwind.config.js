/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      "Inter": ["Inter", "sans-serif"],
    },
    extend: {
      colors:{
        'rounds': "#E5E5E5",
        'space': "#2B2B2B",
        'ronw': "#767676",
        'twitr': "#FFB400",
        'lin': "#F0F0F6",
      }
    },
  },
  plugins: [],
}
