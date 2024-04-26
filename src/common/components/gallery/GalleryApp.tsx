"use client";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import imageGallery from "@/assets/images/main-img.jpg";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { theme } from "@/assets/theme/theme";
import { playfair } from "@/common/constants/font";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { useScreenExtension } from "@/common/hooks/useScreenExtension";

export const GalleryApp = () => {
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const [maxTabletScreen] = useScreenExtension([{ screenExtension: theme.media.tablet, maxScreen: true }]);

  const viewPicturies = !maxTabletScreen ? 5 : 4;

  const mockGallery = Array(8)
    .fill(" ")
    .map(() => imageGallery);

  const openModalSlideHandler = (position: number) => () => {
    setOptionModalHandler({ type: "gallery", options: { images: mockGallery, initialPosition: position + 1 } });
    showHandler();
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <NextImage info={mockGallery[0]} $fullWidth />{" "}
        <ContainerApp>
          <ContainerImages>
            {mockGallery.slice(1, viewPicturies).map((img, id) => (
              <NextImage key={id} info={img} $width={212} $height={125} onClick={openModalSlideHandler(id)} />
            ))}
            {mockGallery.slice(viewPicturies).length === 1 ? (
              <NextImage
                info={mockGallery[viewPicturies]}
                $width={212}
                $height={125}
                onClick={openModalSlideHandler(viewPicturies)}
              />
            ) : mockGallery.slice(viewPicturies).length > 1 ? (
              <MoreImages
                className={playfair.className}
                onClick={openModalSlideHandler(viewPicturies - 1)}
                $remaining={mockGallery.slice(viewPicturies).length}
              >
                <NextImage info={mockGallery[viewPicturies]} $width={212} $height={125} />
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
  justify-content: space-between;
  gap: 1.389vw;
  margin-top: -4.306vw;

  & > div {
    cursor: pointer;
  }

  & div {
    border-radius: 0.694vw;
    overflow: hidden;
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
`;
