/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "425px",
      tablet: "800px",
      tabletLarge: "1050px",
      desktopSmall: "1200px",
      desktop: "1450px",
    },
    colors: {
      blue: "#0DB8EC",
      white: "#FBF9FB",
      black: "#101010",
      transparent: "transparent",
    },
    fontFamily: {
      code: ["code"],
      prototype: ["prototype"],
      myriadpro: ["myriad-pro"],
    },
    fontWeight: {
      light: "200",
      regular: "400",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      body: "18px",
      subheading: "24px",
      heading: "40px",
    },
    extend: {},
  },
  plugins: [],
};
