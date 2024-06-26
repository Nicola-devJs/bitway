import { theme } from "@/assets/theme/theme";
import styled from "styled-components";

const SliderInfo = styled.div`
  position: absolute;
  bottom: 1.389vw;
  left: 50%;
  transform: translateX(-50%);
  width: 10vw;
  padding: 1.111vw;
  border-radius: 0.694vw;
  text-align: center;
  color: ${theme.colors.white};
  font-weight: 700;
  background-color: ${theme.colors.darkOpacity(0.8)};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @media (min-width: ${theme.media.desktopLarge}px) {
    bottom: 20px;
    width: 144px;
    padding: 16px;
    border-radius: 10px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.334vw;
    border-radius: 0.834vw;
    width: 12.01vw;
    bottom: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.083vw;
    border-radius: 1.302vw;
    width: 18.75vw;
    bottom: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    padding: 3.765vw;
    border-radius: 2.353vw;
    width: 33.882vw;
    bottom: 4.706vw;
  }
`;

export { SliderInfo };
