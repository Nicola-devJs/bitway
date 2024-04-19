export const theme = {
  colors: {
    blue: "#3E54EB",
    white: "#fff",
    dark: "#0F1015",
    gray: "#A4A6AC",
    lightGray: "#A4A6AC",
    red: "#B21589",
    lightGrayOpacity: (procent: number) => `rgba(164, 166, 172, ${procent})`,
    whiteOpacity: (procent: number) => `rgba(255, 255, 255, ${procent})`,
    blueOpacity: (procent: number) => `rgba(62, 84, 235, ${procent})`,
  },
  media: {
    desktop: 1199,
    tablet: 768,
  },
};
