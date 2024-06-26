import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import styled from "styled-components";
import alertIcon from "@/assets/icons/alert-icon.svg";
import { SliderInfo } from "./StyledModalAppSlider";

const ModalBody = styled.div<{ $width: number }>`
  width: ${(props) => transformAdaptiveSize(props.$width)};
  background-color: ${theme.colors.white};
  border-radius: 1.389vw;
  padding: 2.083vw 1.389vw 1.597vw;
  position: relative;
  overflow: auto;

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: ${(props) => `${props.$width}px`};
    border-radius: 20px;
    padding: 30px 20px 23px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.desktop)};
    border-radius: 1.668vw;
    padding: 2.502vw 1.668vw 1.918vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.tablet)};
    border-radius: 2.604vw;
    padding: 3.906vw 2.604vw 2.995vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    border-radius: 0;
    padding: 7.059vw 4.706vw 5.412vw;
  }
`;

const ModalClose = styled.div`
  position: absolute;
  top: 1.389vw;
  right: 1.389vw;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  @media (min-width: ${theme.media.desktopLarge}px) {
    top: 20px;
    right: 20px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    top: 1.668vw;
    right: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    top: 2.604vw;
    right: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    top: 4.706vw;
    right: 4.706vw;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${theme.colors.grayOpacity(0.2)};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0px);
  visibility: hidden;
  transition: all 0.2s ease-in-out;

  & > div {
    opacity: 0;
    transform: translateY(-50px);
    transition: all 0.2s ease-in-out 0.1s;

    &:hover ${SliderInfo}, &:hover ${ModalClose} {
      opacity: 1;
    }
  }

  &.show {
    visibility: visible;
    backdrop-filter: blur(5px);

    & > div {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & h5 {
    margin-bottom: 0.694vw;
  }

  & p {
    margin-bottom: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    & h5 {
      margin-bottom: 10px;
    }

    & p {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    & h5 {
      margin-bottom: 0.834vw;
    }

    & p {
      margin-bottom: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & h5 {
      margin-bottom: 1.302vw;
    }

    & p {
      margin-bottom: 3.906vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & h5 {
      margin-bottom: 2.353vw;
    }

    & p {
      margin-bottom: 7.059vw;
    }
  }
`;

const IconAlertModal = styled.div`
  width: 4.444vw;
  height: 4.444vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};
  margin-bottom: 2.917vw;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 5.972vw;
    height: 5.972vw;
    background-color: ${theme.colors.blueOpacity(0.1)};
  }

  &::after {
    width: 7.5vw;
    height: 7.5vw;
    background-color: ${theme.colors.blueOpacity(0.05)};
  }

  & span {
    background-image: url(${alertIcon.src});
    background-size: cover;
    background-repeat: no-repeat;
    width: 1.389vw;
    height: 1.389vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: 64px;
    height: 64px;
    margin-bottom: 42px;

    &::before {
      width: 86px;
      height: 86px;
    }

    &::after {
      width: 108px;
      height: 108px;
    }

    & span {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 5.338vw;
    height: 5.338vw;
    margin-bottom: 3.503vw;

    &::before {
      width: 7.173vw;
      height: 7.173vw;
    }

    &::after {
      width: 9.008vw;
      height: 9.008vw;
    }

    & span {
      width: 1.668vw;
      height: 1.668vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 8.333vw;
    height: 8.333vw;
    margin-bottom: 5.469vw;

    &::before {
      width: 11.198vw;
      height: 11.198vw;
    }

    &::after {
      width: 14.063vw;
      height: 14.063vw;
    }

    & span {
      width: 2.604vw;
      height: 2.604vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    width: 15.059vw;
    height: 15.059vw;
    margin-bottom: 9.882vw;

    &::before {
      width: 20.235vw;
      height: 20.235vw;
    }

    &::after {
      width: 25.412vw;
      height: 25.412vw;
    }

    & span {
      width: 4.706vw;
      height: 4.706vw;
    }
  }
`;

export { ModalBody, IconAlertModal, ModalContent, ModalOverlay, ModalClose };
