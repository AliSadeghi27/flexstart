module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vazirmatn: ["Vazirmatn"],
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
        bigCustom: "rgba(0, 0, 0, 0.2) 0px 5px 15px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
