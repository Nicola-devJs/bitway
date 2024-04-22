"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import iconShare from "@/assets/icons/property-card/share.svg";
import iconHeart from "@/assets/icons/property-card/heart.svg";
import { NextImage } from "../NextImage";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";

interface IProps {
  sizeIcon: number;
  sizeWrapper: number;
  gapActions: number;
}

export const PropertyActions: FC<IProps> = ({ sizeIcon, sizeWrapper, gapActions }) => {
  return (
    <StyledPropertyActions $size={sizeWrapper} $gap={gapActions}>
      <div>
        <NextImage info={iconHeart} $width={sizeIcon} $height={sizeIcon} />
      </div>
      <div>
        <NextImage info={iconShare} $width={sizeIcon} $height={sizeIcon} />
      </div>
    </StyledPropertyActions>
  );
};

const StyledPropertyActions = styled.div<{ $size: number; $gap: number }>`
  display: flex;
  gap: ${(props) => transformAdaptiveSize(props.$gap)};
  & > div {
    width: ${(props) => transformAdaptiveSize(props.$size)};
    height: ${(props) => transformAdaptiveSize(props.$size)};
    border-radius: 0.347vw;
    border: 1px solid ${theme.colors.grayOpacity(0.2)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: ${(props) => transformAdaptiveSize(props.$gap, theme.media.desktop)};

    & > div {
      border-radius: 0.417vw;
      width: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
      height: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: ${(props) => transformAdaptiveSize(props.$gap, theme.media.tablet)};

    & > div {
      border-radius: 0.651vw;
      width: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
      height: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    }
  }
`;
