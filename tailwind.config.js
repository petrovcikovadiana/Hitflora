/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "2400px",
    },
    extend: {
      colors: {
        headerGreen: "#90CA3E",
        dotGreen: "#709D31",
        circleGreen: "#ebf9db",
        darkGreen: "#255644",
        icons: "#337858",
        heroGreen: "#000D02",
        lightGrey: "#EDEBE9",
        lineGrey: "#B7B7B7",
        textGrey: "#81867B",
        lightYellow: "#FFFCEF",
        yellow: "#E8BD68",
        shadeWhite: "#f8fcf8",
        shadeGrey: "#9E8E8E",
        opacityBlack: "#00000080",
        logoRed: "#CC0000",
        boxGreen: "#102719",
        navbarGreen: "#0C2009",
        darkGrey: "#2b2b2b",
        lightBlack: "#121212",
        textBlue: "#099bf9",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
