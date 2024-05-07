import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import styled from "styled-components";

export const ContainerSelect = styled.div<{ $width?: string }>`
  position: relative;
  width: ${(props) => props.$width || "100%"};
`;

export const ContainerInput = styled.div<{ $isOpen: boolean }>`
  position: relative;
  label {
    margin-bottom: 0.347vw;
    display: inline-block;
  }

  div {
    position: absolute;
    bottom: 1.333vw;
    right: 1.597vw;
    cursor: pointer;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease-in;
  }

  @media (max-width: ${theme.media.desktop}px) {
    label {
      margin-bottom: 0.417vw;
    }

    div {
      bottom: 1.668vw;
      right: 1.918vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    label {
      margin-bottom: 0.651vw;
    }

    div {
      bottom: 2.604vw;
      right: 2.995vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    label {
      margin-bottom: 1.176vw;
    }

    div {
      bottom: 4.706vw;
      right: 5.412vw;
    }
  }
`;

export const StyledInput = styled.input<{ $error?: boolean; $size: number; $width?: number }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.grayOpacity(0.2))};
  padding: 0.903vw 3.472vw 0.903vw 1.389vw;
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: ${(props) => transformAdaptiveSize(props.$size)};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    padding: 1.084vw 4.17vw 1.084vw 1.668vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};

    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: 1.693vw 6.51vw 1.693vw 2.604vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    border-radius: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.phone) : "100%")};
    padding: 3.059vw 11.765vw 3.059vw 4.706vw;
    font-size: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    border-radius: 2.353vw;
  }
`;

export const ContainerOptions = styled.div<{ $isOpen: boolean; $viewSize: "left" | "right"; $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  position: absolute;
  top: calc(100% + 0.694vw);
  right: 0;
  ${(props) => props.$viewSize === "right" && "left: 0;"}
  z-index: 2;
  border-radius: 0.694vw;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grayOpacity(0.2)};
  padding-block: 0.694vw;
  transform: ${(props) => (props.$isOpen ? "translateY(0px)" : "translateY(-10px)")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  height: ${(props) => (props.$isOpen ? "auto" : "0px")};
  transition: all 0.2s ease-in-out;

  & > div {
    padding: 0.903vw 1.389vw;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grayOpacity(0.1)};
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    top: calc(100% + 0.834vw);
    border-radius: 0.834vw;
    padding-block: 0.834vw;

    & > div {
      padding: 1.084vw 1.668vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    top: calc(100% + 1.302vw);
    border-radius: 1.302vw;
    padding-block: 1.302vw;

    & > div {
      padding: 1.693vw 2.604vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    top: calc(100% + 2.353vw);
    border-radius: 2.353vw;
    padding-block: 2.353vw;

    & > div {
      padding: 3.059vw 4.706vw;
    }
  }
`;

export const SelectSortedContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.694vw;
  cursor: pointer;

  & > div {
    cursor: pointer;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease-in;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 1.302vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    gap: 2.353vw;
  }
`;
