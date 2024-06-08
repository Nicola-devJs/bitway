"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import iconShare from "@/assets/icons/property-card/share.svg";
import iconHeart from "@/assets/icons/property-card/heart.svg";
import iconHeartActive from "@/assets/icons/property-card/heart_active.svg";
import { NextImage } from "../NextImage";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";

interface IProps {
  sizeIcon: number;
  sizeWrapper: number;
  gapActions: number;
  handleFavouriteProperty: () => void;
  handleShareProperty?: () => void;
  isActiveHeart: boolean;
}

export const PropertyActions: FC<IProps> = ({
  sizeIcon,
  sizeWrapper,
  gapActions,
  handleFavouriteProperty,
  handleShareProperty,
  isActiveHeart,
}) => {
  return (
    <StyledPropertyActions $size={sizeWrapper} $gap={gapActions}>
      <div onClick={handleFavouriteProperty}>
        <NextImage
          info={isActiveHeart ? iconHeartActive : iconHeart}
          $width={sizeIcon}
          $height={sizeIcon}
          objectFit="contain"
        />
      </div>
      <div onClick={handleShareProperty}>
        <NextImage info={iconShare} $width={sizeIcon} $height={sizeIcon} objectFit="contain" />
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

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: ${(props) => `${props.$gap}px`};
    & > div {
      border-radius: 5px;
      width: ${(props) => `${props.$size}px`};
      height: ${(props) => `${props.$size}px`};
    }
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

  @media (max-width: ${theme.media.phone}px) {
    gap: ${(props) => transformAdaptiveSize(props.$gap, theme.media.phone)};

    & > div {
      border-radius: 1.176vw;
      width: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
      height: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    }
  }
`;
