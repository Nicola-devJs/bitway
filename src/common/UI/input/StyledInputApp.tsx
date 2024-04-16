import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import styled from "styled-components";
import doneIcon from "@/assets/icons/check.svg";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";

export const ContainerCode = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.389vw;

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
  }
`;

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
  }
`;

export const StyledCheckbox = styled.span<{ $error: boolean }>`
  display: inline-block;
  width: 1.389vw;
  height: 1.389vw;
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.lightGray)};
  border-radius: 0.139vw;
  background-color: ${theme.colors.white};
  margin-right: 0.694vw;
  position: relative;

  &:after {
    content: "";
    background: url(${doneIcon.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 0.833vw;
    height: 0.833vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 1.668vw;
    height: 1.668vw;
    border-radius: 0.167vw;
    margin-right: 0.834vw;

    &:after {
      width: 1.001vw;
      height: 1.001vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 2.604vw;
    height: 2.604vw;
    border-radius: 0.26vw;
    margin-right: 1.302vw;

    &:after {
      width: 1.563vw;
      height: 1.563vw;
    }
  }
`;

export const ContainerCheckbox = styled(TextApp)`
  position: relative;
  display: flex;
  align-items: center;
  width: max-content;
  cursor: pointer;

  input {
    display: none;
    &:checked + ${StyledCheckbox} {
      background-color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};
      &::after {
        opacity: 1;
      }
    }
  }
`;

export const StyledInput = styled.input<{ $error?: boolean; $size?: number; $width?: number }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.lightGray)};
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
        : transformAdaptiveSize(16, theme.media.desktop)};
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: 2.083vw;
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.tablet)
        : transformAdaptiveSize(16, theme.media.tablet)};
    border-radius: 1.302vw;
  }
`;
