import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import styled from "styled-components";
import alertIcon from "@/assets/icons/alert-icon.svg";
import { CloseModalSlider, SliderInfo } from "./StyledModalAppSlider";

const ModalBody = styled.div<{ $width: number }>`
  width: ${(props) => transformAdaptiveSize(props.$width)};
  background-color: ${theme.colors.white};
  border-radius: 1.389vw;
  padding: 2.083vw 1.389vw 1.597vw;

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

    &:hover ${SliderInfo}, &:hover ${CloseModalSlider} {
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

  & h5 {
    margin-bottom: 0.694vw;
  }

  & p {
    margin-bottom: 2.083vw;
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
`;

export { ModalBody, IconAlertModal, ModalContent, ModalOverlay };
