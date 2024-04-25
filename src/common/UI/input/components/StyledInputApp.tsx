import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";

export const ContainerInput = styled.div`
  position: relative;
  label {
    margin-bottom: 0.347vw;
    display: inline-block;

    @media (max-width: ${theme.media.desktop}px) {
      margin-bottom: 0.417vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      margin-bottom: 0.5vw;
    }
  }
`;

export const StyledInput = styled.input<{ $error?: boolean; $size?: number; $width?: number }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.grayOpacity(0.2))};
  padding: 1.111vw;
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: ${(props) => (props.$size ? transformAdaptiveSize(props.$size) : transformAdaptiveSize(16))};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    padding: 1.334vw;
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.desktop)
        : transformAdaptiveSize(18, theme.media.desktop)};
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: 2.6vw;
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.tablet)
        : transformAdaptiveSize(16, theme.media.tablet, 120)};
    border-radius: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.phone)
        : transformAdaptiveSize(16, theme.media.phone)};
    padding: 1.583vw;
    &::placeholder {
    font-size: 3.5vw;
  }
  }
`;
