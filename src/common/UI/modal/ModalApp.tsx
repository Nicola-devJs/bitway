"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { playfair } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ButtonApp } from "../button/ButtonApp";
import { NextImage } from "@/common/components/NextImage";
import closeSlider from "@/assets/icons/close-slider.svg";
import { ModalOverlay, ModalBody, ModalContent, IconAlertModal } from "./styledComponents.tsx/StyledModalApp";
import { CloseModalSlider, SliderInfo } from "./styledComponents.tsx/StyledModalAppSlider";
import { IAlertProps, IGalleryProps, IInitializationModal, IModalProps, ModalType } from "../../interfaces/IModal";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { SliderApp } from "@/common/components/slider/SliderApp";
import { theme } from "@/assets/theme/theme";
import { useScreenExtension } from "@/common/hooks/useScreenExtension";

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
  const confirmHandler = () => {
    buttonHandler?.();
    hideHandler();
  };

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
          <ButtonApp onClick={confirmHandler}>{textButton}</ButtonApp>
        </ModalContent>
      </ModalBody>
    </ModalOverlay>
  );
};

ModalApp.Gallery = ({ width = 942, height = 621, images, initialPosition, show, hideHandler }: IGalleryProps) => {
  const [positionSlide, setPositionSlide] = useState(initialPosition);
  const getPosition = (pos: number) => setPositionSlide(pos);

  const slideImages = useMemo(
    () => images.map((img) => <NextImage info={img} $width={width} $height={height} />),
    [images]
  );

  useEffect(() => {
    setPositionSlide(initialPosition);
  }, [show]);

  return (
    <ModalOverlay className={show} onClick={hideHandler}>
      <SliderApp
        slides={slideImages}
        width={width}
        height={height}
        initialPosition={initialPosition}
        showArrowsNavigation
        getPosition={getPosition}
      >
        <CloseModalSlider onClick={hideHandler}>
          <NextImage info={closeSlider} $width={24} $height={24} />
        </CloseModalSlider>
        <SliderInfo>
          {positionSlide + 1} of {images.length}
        </SliderInfo>
      </SliderApp>
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
