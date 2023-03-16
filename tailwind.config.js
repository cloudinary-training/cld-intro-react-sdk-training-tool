/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter var": ["Inter var", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      cldgray: "#eeeef1",
      white: "#ffffff",
      clddarkblue: "#0c163b",
      cldblue: "#3448c5",
      cldlightblue: "#b6d2ff",
      cldyellow: "#f7bc00",
      cldcoral: "#ff5050",
      cldpeach: "#ffd4c4",
      cldturquois: "#48c4d8"
    },
  },
  plugins: [require("daisyui")],
};
