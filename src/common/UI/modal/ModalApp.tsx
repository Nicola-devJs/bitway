"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StaticImageData } from "next/image";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import { playfair } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ButtonApp } from "../button/ButtonApp";
import { NextImage } from "@/common/components/NextImage";
import alertIcon from "@/assets/icons/alert-icon.svg";
import arrowSlider from "@/assets/icons/arrow-slider.svg";
import closeSlider from "@/assets/icons/close-slider.svg";

interface IAlertProps {
  title: string;
  text: string;
  textButton: string;
  width?: number;
  buttonHandler?: () => void;
}

interface IModalProps {
  width?: number;
  children: React.ReactNode;
}

interface IGalleryProp {
  width?: number;
  height?: number;
  images: StaticImageData[] | string[];
  initialPosition?: number;
}

type ModalType = { show?: () => void; hide?: () => void };
const modal: ModalType = {};

const ModalAppOverlay = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    modal.show = () => setShow("show");
    modal.hide = () => setShow("");
  }, []);

  return (
    <ModalOverlay className={show} onClick={modal.hide}>
      {children}
    </ModalOverlay>
  );
};

const ModalApp = ({ width = 432, children }: IModalProps) => {
  return (
    <ModalAppOverlay>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        {children}
      </ModalBody>
    </ModalAppOverlay>
  );
};

ModalApp.Alert = ({ text, title, width = 432, textButton, buttonHandler }: IAlertProps) => {
  return (
    <ModalAppOverlay>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        <ModalContent>
          <IconAlertModal>
            <span></span>
          </IconAlertModal>
          <TextApp.Heading className={playfair.className} size={24} weight={700}>
            {title}
          </TextApp.Heading>
          <TextApp>{text}</TextApp>
          <ButtonApp onClick={buttonHandler || modal.hide}>{textButton}</ButtonApp>
        </ModalContent>
      </ModalBody>
    </ModalAppOverlay>
  );
};

ModalApp.Gallery = ({ width = 942, height = 621, images, initialPosition = 0 }: IGalleryProp) => {
  const [show, setShow] = useState("");
  const [positionSlide, setPositionSlide] = useState(initialPosition);
  const [disabledArrows, setDisabledArrows] = useState({ left: true, right: false });

  const incrementPosition = () => {
    if (positionSlide < images.length - 1) {
      setPositionSlide(positionSlide + 1);
    }
  };

  const decrementPosition = () => {
    if (positionSlide > 0) {
      setPositionSlide(positionSlide - 1);
    }
  };

  useEffect(() => {
    modal.show = () => setShow("show");
    modal.hide = () => setShow("");
  }, []);

  useEffect(() => {
    setDisabledArrows({ left: positionSlide === 0, right: positionSlide === images.length - 1 });
  }, [positionSlide]);

  useEffect(() => {
    setPositionSlide(initialPosition);
  }, [show]);

  return (
    <ModalOverlay className={show} onClick={modal.hide}>
      <ModalSlider onClick={(e) => e.stopPropagation()} $width={width} $height={height}>
        <div style={{ overflow: "hidden" }}>
          <SliderTrack $pos={positionSlide} $slides={images.length}>
            {images.map((img, key) => (
              <NextImage key={key} info={img} $width={width} $height={height} />
            ))}
          </SliderTrack>
        </div>
        <CloseModalSlider onClick={modal.hide}>
          <NextImage info={closeSlider} $width={24} $height={24} />
        </CloseModalSlider>
        <SliderInfo>
          {positionSlide + 1} of {images.length}
        </SliderInfo>
        <SliderNavigationArrowLeft $disable={disabledArrows.left} onClick={decrementPosition}>
          <NextImage info={arrowSlider} $height={9.5} $width={13.5} objectFit="contain" />
        </SliderNavigationArrowLeft>
        <SliderNavigationArrowRight $disable={disabledArrows.right} onClick={incrementPosition}>
          <NextImage info={arrowSlider} $height={9.5} $width={13.5} objectFit="contain" />
        </SliderNavigationArrowRight>
      </ModalSlider>
    </ModalOverlay>
  );
};

export { ModalApp, modal };

const SliderTrack = styled.div<{ $pos: number; $slides: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$slides}, 100%)`};
  transform: ${(props) => `translateX(-${100 * props.$pos}%)`};
  transition: transform 0.2s ease-in-out;
`;

const SliderNavigationArrowRight = styled.div<{ $disable?: boolean }>`
  position: absolute;
  right: -5.972vw;
  top: 50%;
  transform: translateY(-50%);
  width: 3.889vw;
  height: 3.889vw;
  border-radius: 0.694vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$disable ? theme.colors.whiteOpacity(0.2) : theme.colors.blue)};
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    right: -7.173vw;
    width: 4.671vw;
    height: 4.671vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    right: -11.198vw;
    width: 7.292vw;
    height: 7.292vw;
    border-radius: 1.302vw;
  }
`;

const SliderNavigationArrowLeft = styled(SliderNavigationArrowRight)`
  left: -5.972vw;
  transform: rotate(180deg);

  @media (max-width: ${theme.media.desktop}px) {
    left: -7.173vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    left: -11.198vw;
  }
`;

const SliderInfo = styled.div`
  position: absolute;
  bottom: 1.389vw;
  left: 50%;
  transform: translateX(-50%);
  width: 10vw;
  padding: 1.111vw;
  border-radius: 0.694vw;
  text-align: center;
  color: ${theme.colors.white};
  font-weight: 700;
  background-color: ${theme.colors.darkOpacity(0.8)};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.334vw;
    border-radius: 0.834vw;
    width: 12.01vw;
    bottom: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.083vw;
    border-radius: 1.302vw;
    width: 18.75vw;
    bottom: 2.604vw;
  }
`;

const CloseModalSlider = styled.div`
  position: absolute;
  top: 1.389vw;
  right: 1.389vw;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    top: 1.668vw;
    right: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    top: 2.604vw;
    right: 2.604vw;
  }
`;

const ModalSlider = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${(props) => transformAdaptiveSize(props.$width)};
  height: ${(props) => transformAdaptiveSize(props.$height)};
  border-radius: 1.389vw;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.2s ease-in-out 0.1s;

  &:hover ${SliderInfo}, &:hover ${CloseModalSlider} {
    opacity: 1;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.desktop)};
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.desktop)};
    border-radius: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.tablet)};
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.tablet)};
    border-radius: 2.604vw;
  }
`;

const ModalBody = styled.div<{ $width: number }>`
  width: ${(props) => transformAdaptiveSize(props.$width)};
  background-color: ${theme.colors.white};
  border-radius: 1.389vw;
  padding: 2.083vw 1.389vw 1.597vw;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.2s ease-in-out 0.1s;

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

  &.show {
    visibility: visible;
    backdrop-filter: blur(5px);
    & ${ModalBody}, & ${ModalSlider} {
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
