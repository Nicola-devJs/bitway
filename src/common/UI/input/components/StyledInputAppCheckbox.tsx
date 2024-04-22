import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import doneIcon from "@/assets/icons/check.svg";
import styled from "styled-components";

export const StyledCheckbox = styled.span<{ $error: boolean }>`
  display: inline-block;
  width: 1.389vw;
  height: 1.389vw;
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.grayOpacity(0.2))};
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
