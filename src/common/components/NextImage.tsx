"use client";

import { theme } from "@/assets/theme/theme";
import Image, { StaticImageData } from "next/image";
import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/transformValues";

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
  info: StaticImageData | string;
  objectFit?: "cover" | "contain";
  $width?: number;
  $height?: number;
  $fullWidth?: boolean;
}

export const NextImage: FC<IProps> = ({ info, objectFit, ...props }) => {
  return (
    <ImageContainer {...props} $obf={objectFit || "cover"}>
      <Image
        src={info}
        alt="image"
        width={props.$fullWidth ? `${1440}` : props.$width}
        height={props.$fullWidth ? `${0}` : props.$height}
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ $width?: number; $height?: number; $obf: string; $fullWidth?: boolean }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : props.$fullWidth ? "100%" : "auto")};
  height: ${(props) => (props.$height ? transformAdaptiveSize(props.$height) : props.$fullWidth ? "100%" : "auto")};
  display: flex;

  img {
    width: inherit;
    height: inherit;
    object-fit: ${(props) => props.$obf};
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: ${(props) => (props.$width ? `${props.$width}px` : props.$fullWidth ? "100%" : "auto")};
    height: ${(props) => (props.$height ? `${props.$height}px` : props.$fullWidth ? "100%" : "auto")};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) =>
      props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : props.$fullWidth ? "100%" : "auto"};
    height: ${(props) =>
      props.$height ? transformAdaptiveSize(props.$height, theme.media.desktop) : props.$fullWidth ? "100%" : "auto"};
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) =>
      props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : props.$fullWidth ? "100%" : "auto"};
    height: ${(props) =>
      props.$height ? transformAdaptiveSize(props.$height, theme.media.tablet) : props.$fullWidth ? "100%" : "auto"};
  }

  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) =>
      props.$width ? transformAdaptiveSize(props.$width, theme.media.phone) : props.$fullWidth ? "100%" : "auto"};
    height: ${(props) =>
      props.$height ? transformAdaptiveSize(props.$height, theme.media.phone) : props.$fullWidth ? "100%" : "auto"};
  }
`;
