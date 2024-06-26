import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { ButtonApp } from "../../button/ButtonApp";

export const ClearButton = styled(ButtonApp)`
  margin-top: 0.694vw;
  height: 3.472vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-top: 10px;
    height: 50px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-top: 0.834vw;
    height: 4.17vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-top: 1.302vw;
    height: 6.51vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    margin-top: 2.353vw;
    height: 11.765vw;
  }
`;
