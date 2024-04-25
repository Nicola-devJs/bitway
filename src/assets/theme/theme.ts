export const theme = {
  colors: {
    blue: "#3E54EB",
    darkBlue: "#001ff5",
    white: "#fff",
    dark: "#0F1015",
    gray: "#A4A6AC",
    red: "#B21589",
    grayOpacity: (procent: number) => `rgba(164, 166, 172, ${procent})`,
    whiteOpacity: (procent: number) => `rgba(255, 255, 255, ${procent})`,
    blueOpacity: (procent: number) => `rgba(62, 84, 235, ${procent})`,
    darkOpacity: (procent: number) => `rgba(15, 16, 21, ${procent})`,
  },
  media: {
    desktop: 1199,
    tablet: 768,
    phone: 425,
  },
};
