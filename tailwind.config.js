/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#6BCB77",
        primary2: "#F4D35E",
        secondary1: "#EE6C4D",
        secondary2: "#42A5F5",
        background1: "#FDFDFA",
        background2: "#F8F8F8",
        text1: "#333333",
        text2: "#1F1F1F",
        text3: "#777777",
        alert1: "#4CAF50",
        alert2: "#FF4D4D",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        Popins: ["Poppins", "serif"],
        Playfire: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

