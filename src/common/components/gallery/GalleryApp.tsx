"use client";
import React, { useContext, FC } from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { theme } from "@/assets/theme/theme";
import { playfair } from "@/common/constants/font";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { useScreenExtension } from "@/common/hooks/screenExtension";
import mockImage from "@/assets/images/main-img.jpg";

interface IProps {
  gallery: string[];
}

export const GalleryApp: FC<IProps> = ({ gallery = [] }) => {
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const [maxTabletScreen, maxPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone, maxScreen: true },
  ]);

  const viewPicturies = maxPhoneScreen ? 2 : maxTabletScreen ? 4 : 5;

  const openModalSlideHandler = (position: number) => () => {
    setOptionModalHandler({ type: "gallery", options: { images: gallery, initialPosition: position + 1 } });
    showHandler();
  };

  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ContainerImage>
          <NextImage info={gallery[0] || mockImage} $fullWidth $height={679} />
        </ContainerImage>
        <ContainerApp>
          <ContainerImages>
            {gallery.slice(1, viewPicturies).map((img, id) => (
              <ContainerImage key={id}>
                <NextImage info={img} $width={212} $height={125} onClick={openModalSlideHandler(id)} />
              </ContainerImage>
            ))}
            {gallery.slice(viewPicturies).length === 1 ? (
              <ContainerImage>
                <NextImage
                  info={gallery[viewPicturies]}
                  $width={212}
                  $height={125}
                  onClick={openModalSlideHandler(viewPicturies)}
                />
              </ContainerImage>
            ) : gallery.slice(viewPicturies).length > 1 ? (
              <MoreImages
                className={playfair.className}
                onClick={openModalSlideHandler(viewPicturies - 1)}
                $remaining={gallery.slice(viewPicturies).length}
              >
                <ContainerImage>
                  <NextImage info={gallery[viewPicturies]} $width={212} $height={125} />
                </ContainerImage>
              </MoreImages>
            ) : null}
          </ContainerImages>
        </ContainerApp>
      </div>
    </>
  );
};

const ContainerImages = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.389vw;
  margin-top: -4.306vw;

  & > div {
    cursor: pointer;
  }

  & div {
    border-radius: 0.694vw;
    overflow: hidden;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 20px;
    margin-top: -62px;
    & div {
      border-radius: 10px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
    margin-top: -5.171vw;
    & div {
      border-radius: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
    margin-top: -8.073vw;

    & div {
      border-radius: 1.302vw;
    }
  }
`;

const MoreImages = styled.div<{ $remaining: number }>`
  position: relative;
  &::after {
    content: "+${(props) => props.$remaining} More";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: ${theme.colors.white};
    font-size: 1.667vw;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    &::after {
      font-size: 24px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    &::after {
      font-size: 2.002vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    &::after {
      font-size: 3.125vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    &::after {
      font-size: 5.647vw;
    }
  }
`;

const ContainerImage = styled.div`
  background-image: url(${mockImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
