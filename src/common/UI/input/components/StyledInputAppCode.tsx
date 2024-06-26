import { theme } from "@/assets/theme/theme";
import styled from "styled-components";

export const ContainerCode = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.389vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 20px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
  }
`;
