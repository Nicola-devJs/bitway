"use client";
import React, { useContext, useEffect, useState } from "react";
import { playfair } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ButtonApp } from "../button/ButtonApp";
import { NextImage } from "@/common/components/NextImage";

import arrowSlider from "@/assets/icons/arrow-slider.svg";
import closeSlider from "@/assets/icons/close-slider.svg";
import { ModalOverlay, ModalBody, ModalContent, IconAlertModal } from "./styledComponents.tsx/StyledModalApp";
import {
  ModalSlider,
  SliderTrack,
  CloseModalSlider,
  SliderInfo,
  SliderNavigationArrowLeft,
  SliderNavigationArrowRight,
} from "./styledComponents.tsx/StyledModalAppSlider";
import { IAlertProps, IGalleryProps, IInitializationModal, IModalProps, ModalType } from "./interfaces";
import { ModalContext } from "@/common/hoc/ModalProvider";

const ModalApp = ({ width = 432, children, show, hideHandler }: IModalProps) => {
  return (
    <ModalOverlay className={show} onClick={hideHandler}>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        {children}
      </ModalBody>
    </ModalOverlay>
  );
};

ModalApp.Alert = ({ text, title, width = 432, textButton, buttonHandler, show, hideHandler }: IAlertProps) => {
  return (
    <ModalOverlay className={show} onClick={hideHandler}>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        <ModalContent>
          <IconAlertModal>
            <span></span>
          </IconAlertModal>
          <TextApp.Heading className={playfair.className} size={24} weight={700}>
            {title}
          </TextApp.Heading>
          <TextApp>{text}</TextApp>
          <ButtonApp onClick={buttonHandler || hideHandler}>{textButton}</ButtonApp>
        </ModalContent>
      </ModalBody>
    </ModalOverlay>
  );
};

ModalApp.Gallery = ({ width = 942, height = 621, images, initialPosition = 0, show, hideHandler }: IGalleryProps) => {
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
    setDisabledArrows({ left: positionSlide === 0, right: positionSlide === images.length - 1 });
  }, [positionSlide]);

  useEffect(() => {
    setPositionSlide(initialPosition);
  }, [show]);

  return (
    <ModalOverlay className={show} onClick={hideHandler}>
      <ModalSlider onClick={(e) => e.stopPropagation()} $width={width} $height={height}>
        <div style={{ overflow: "hidden" }}>
          <SliderTrack $pos={positionSlide} $slides={images.length}>
            {images.map((img, key) => (
              <NextImage key={key} info={img} $width={width} $height={height} />
            ))}
          </SliderTrack>
        </div>
        <CloseModalSlider onClick={hideHandler}>
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

function InitializationModalApp<T extends ModalType>({ type, options }: IInitializationModal<T>) {
  const { show, hideHandler } = useContext(ModalContext);

  return (
    <>
      {type === "alert" ? (
        <ModalApp.Alert {...(options as any)} show={show} hideHandler={hideHandler} />
      ) : type === "gallery" ? (
        <ModalApp.Gallery {...(options as any)} show={show} hideHandler={hideHandler} />
      ) : (
        <ModalApp {...(options as any)} show={show} hideHandler={hideHandler} />
      )}
    </>
  );
}

export { InitializationModalApp };
