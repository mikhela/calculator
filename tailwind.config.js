/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        firstbg: "rgba(59,70,100,255)",
        firstbuttonsbg: "rgba(234,227,219,255)",
        inputbgfirst: "#181f32",
        secondbg: "rgba(230,230,230,255)",
        secondinput: "rgba(238,238,238,255)",
        contentin: "rgba(238,238,238,255)",
        bgthird: "rgba(23,6,42,255)",
        inputbgthird: "rgba(30,8,54,255)"

      },
    },
  },
  plugins: [],
}

