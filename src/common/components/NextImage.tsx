"use client";

import { theme } from "@/assets/theme/theme";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/adaptiveSize";

interface IProps {
  info: StaticImageData | string;
  objectFit?: "cover" | "contain";
  $width?: number;
  $fullWidth?: boolean;
}

export const NextImage: FC<IProps> = ({ info, objectFit, ...props }) => {
  return (
    <ImageContainer {...props} $obf={objectFit || "cover"}>
      <Image src={info} alt="image" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ $width?: number; $obf: string; $fullWidth?: boolean }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : props.$fullWidth ? "100%" : "auto")};
  display: flex;

  img {
    width: inherit;
    height: inherit;
    object-fit: ${(props) => props.$obf};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) =>
      props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : props.$fullWidth ? "100%" : "auto"};
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) =>
      props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : props.$fullWidth ? "100%" : "auto"};
  }
`;
