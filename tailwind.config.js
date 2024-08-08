/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#4E77F5",
        2: "#FFFFFF",
        3: "#09AFFF",
        4: "#2A3143",
        5: "#4C76F5",
        6: "#8A90A4",
        7: "#1D326F",
        8: "#083791",
        9: "#121273",
        10: "#ADADAD",
        11: "#083791",
        12: "#052E71",
        13: "#2E77F9",
        14: "#AAC8FD",
        15: "#6475ED",
        16: "#345CFB",
        17: "#6C6C6C",
        18: "#0297FF",
        19: "#A2A7FF",
        20: "#0256FF",
        21: "#ECF5FF",
        22: "#5C76F1",
        23: "#9996ff",
        24: "#002CFF",
        25: "#254D73",
        26: "#005CFF",
        27: "#8D9FFF",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playwrite: ["Playwrite AR", "serif"],
      bodoni: ["Bodoni Moda", "serif"],
    },
    fontSize: {
      "3xs": "0.375rem",
      "2xs": "0.5rem",
      "1xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "3.5xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    backgroundImage: {
      "hero-mobile": "url(/assets/family-together.webp)",
      "hero-tablet": "url(/assets/hero-bg-md.webp)",
    },
    backgroundSize: {
      100: "100%",
      130: "130%",
      150: "150%",
    },
    backgroundPosition: {
      "custom-sm": "calc(50% + 70px) calc(50% + 10px)",
      "custom-md": "calc(50% + 70px) calc(50% + 30px)",
      "custom-lg": "calc(50% + 5px) calc(50% + 45px)",
    },
    boxShadow: {
      custom: "0 0 10px 0px rgba(0, 0, 0, 0.1)",
      custom2: "0 3px 5px 0.1px rgba(0, 0, 0, 0.1)",
      custom3: "0 4px 10px 0.1px rgba(0, 0, 0, 0.1)",
    },
    textShadow: {
      default: "0 2px 4px rgba(0, 0, 0, 0.10)",
      md: "0 4px 8px rgba(0, 0, 0, 0.10)",
      lg: "0 10px 15px rgba(0, 0, 0, 0.10)",
      xl: "0 0px 5px rgba(0, 0, 0, 1)",
    },
    borderWidth: {
      DEFAULT: "1px",
      none: "0",
      xs: "2px",
      s: "3px",
      md: "4px",
      lg: "6px",
      xl: "8px",
    },
  },
};
