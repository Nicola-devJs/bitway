import { theme } from "@/assets/theme/theme";
import styled, { css } from "styled-components";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import { NextImage } from "@/common/components/NextImage";

export const ContainerInput = styled.div`
  position: relative;
  label {
    margin-bottom: 0.347vw;
    display: inline-block;

    @media (min-width: ${theme.media.desktopLarge}px) {
      margin-bottom: 5px;
    }

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

export const StyledInput = styled.input<{
  $error?: boolean;
  $size: number;
  $width?: number;
  $pr?: number;
  $padding: number;
}>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.blue)};
  padding: ${(props) => transformAdaptiveSize(props.$padding)};
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: ${(props) => transformAdaptiveSize(props.$size)};
  resize: vertical;
  ${(props) =>
    props.$pr &&
    css`
      padding-right: ${transformAdaptiveSize(props.$pr)};
    `}

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  &:placeholder-shown {
    border-color: ${(props) => (props.$error ? theme.colors.red : theme.colors.grayOpacity(0.2))};
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding: ${(props) => props.$padding}px;
    border-radius: 10px;
    width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
    font-size: ${(props) => `${props.$size}px`};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    padding: ${(props) => transformAdaptiveSize(props.$padding, theme.media.desktop)};
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
    border-radius: 0.834vw;

    ${(props) =>
      props.$pr &&
      css`
        padding-right: ${transformAdaptiveSize(props.$pr, theme.media.desktop)};
      `}
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: ${(props) => transformAdaptiveSize(props.$padding, theme.media.tablet)};
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    border-radius: 1.302vw;

    ${(props) =>
      props.$pr &&
      css`
        padding-right: ${transformAdaptiveSize(props.$pr, theme.media.tablet)};
      `}
  }

  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.phone) : "100%")};
    padding: ${(props) => transformAdaptiveSize(props.$padding, theme.media.phone)};
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    border-radius: 2.353vw;

    ${(props) =>
      props.$pr &&
      css`
        padding-right: ${transformAdaptiveSize(props.$pr, theme.media.phone)};
      `}
  }
`;

export const InputPasswordEye = styled.div`
  position: absolute;
  right: 1.111vw;
  bottom: 1.111vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    right: 16px;
    bottom: 16px;
  }

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
