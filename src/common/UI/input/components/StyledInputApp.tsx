import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import { NextImage } from "@/common/components/NextImage";

export const ContainerInput = styled.div`
  position: relative;
  label {
    margin-bottom: 0.347vw;
    display: inline-block;

    @media (max-width: ${theme.media.desktop}px) {
      margin-bottom: 0.417vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      margin-bottom: 0.651vw;
    }

    @media (max-width: ${theme.media.phone}px) {
      margin-bottom: 1.176vw;
    }
  }
`;

export const StyledInput = styled.input<{ $error?: boolean; $size: number; $width?: number }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.grayOpacity(0.2))};
  padding: 1.111vw 3.472vw 1.111vw 1.111vw;
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: ${(props) => transformAdaptiveSize(props.$size)};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    padding: 1.334vw 4.17vw 1.334vw 1.334vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: 2.083vw 6.51vw 2.083vw 2.083vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    border-radius: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.phone) : "100%")};
    padding: 3.765vw 11.765vw 3.765vw 3.765vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    border-radius: 2.353vw;
  }
`;

export const InputPasswordEye = styled.div`
  position: absolute;
  right: 1.111vw;
  bottom: 1.111vw;

  @media (max-width: ${theme.media.desktop}px) {
    right: 1.334vw;
    bottom: 1.334vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    right: 2.083vw;
    bottom: 2.083vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    right: 3.765vw;
    bottom: 3.765vw;
  }
`;
