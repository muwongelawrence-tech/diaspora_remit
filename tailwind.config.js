module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        diaspora_bg: "url('/public/images/diasporabackground.jpg')",
      },

      colors : {
        "dark-purple": "#081A51",
        "light-white" : "rgba(255,255,255,0.17)",
        "radiography-gray": "#fafafa",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp")],
};
