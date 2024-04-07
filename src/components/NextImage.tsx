"use client";

import { theme } from "@/assets/theme/theme";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  info: StaticImageData | string;
  objectFit?: "cover" | "contain";
  $width?: string;
  $widthDesktop?: string;
  $widthTablet?: string;
}

export const NextImage: FC<IProps> = ({ info, objectFit, ...props }) => {
  return (
    <ImageContainer {...props}>
      <Image src={info} alt="image" objectFit={objectFit && "cover"} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ $width?: string; $widthDesktop?: string; $widthTablet?: string }>`
  width: ${(props) => (props.$width ? props.$width : "auto")};

  img {
    width: inherit;
    height: inherit;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$widthDesktop ? props.$widthDesktop : "auto")};
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$widthTablet ? props.$widthTablet : "auto")};
  }
`;
