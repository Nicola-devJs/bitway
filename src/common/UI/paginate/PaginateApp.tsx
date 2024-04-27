"use client";
import styled from "styled-components";
import React, { FC, useState } from "react";
import { theme } from "@/assets/theme/theme";
import { NextImage } from "@/common/components/NextImage";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import arrowRight from "@/assets/icons/arrow-left-slider.svg";

interface IProps {
  sizeItem?: number;
  itemsLenght: number;
  viewCountItems: number;
}

export const PaginateApp: FC<IProps> = ({ sizeItem = 40, itemsLenght, viewCountItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  const listPaginate = Array(Math.ceil(itemsLenght / viewCountItems))
    .fill(1)
    .map((_, id) => id + 1);

  return (
    <PaginateContainer>
      {listPaginate.map((item, id) => (
        <PaginateItem key={id} $size={sizeItem} $actvie={activeItem === id} onClick={() => setActiveItem(id)}>
          {item}
        </PaginateItem>
      ))}
      <>
        <PaginateArrowLeft
          $isActive={activeItem !== 0}
          disabled={activeItem === 0}
          onClick={() => setActiveItem(activeItem - 1)}
        >
          <NextImage info={arrowRight} $width={12} $height={8} objectFit="contain" />
        </PaginateArrowLeft>
        <PaginateArrowRight
          $isActive={activeItem !== listPaginate.length - 1}
          disabled={activeItem === listPaginate.length - 1}
          onClick={() => setActiveItem(activeItem + 1)}
        >
          <NextImage info={arrowRight} $width={12} $height={8} objectFit="contain" />
        </PaginateArrowRight>
      </>
    </PaginateContainer>
  );
};

const PaginateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.694vw;
  margin: 3.472vw 0 6.944vw auto;
  padding-inline: 2.778vw;
  width: max-content;

  @media (max-width: ${theme.media.desktop}px) {
    margin: 4.17vw 0 8.34vw auto;
    padding-inline: 3.336vw;
    gap: 0.834vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    margin: 6.51vw 0 13.021vw auto;
    padding-inline: 5.208vw;
    gap: 1.302vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    margin: 11.765vw 0 23.529vw auto;
    padding-inline: 9.412vw;
    gap: 2.353vw;
  }
`;

const PaginateItem = styled.div<{ $size: number; $actvie: boolean }>`
  width: ${(props) => transformAdaptiveSize(props.$size)};
  height: ${(props) => transformAdaptiveSize(props.$size)};
  background-color: ${(props) => (props.$actvie ? theme.colors.blue : theme.colors.white)};
  border-radius: 0.347vw;
  border: 1px solid ${(props) => (props.$actvie ? theme.colors.blue : theme.colors.grayOpacity(0.2))};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: ${(props) => (props.$actvie ? theme.colors.white : theme.colors.dark)};

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
    height: ${(props) => transformAdaptiveSize(props.$size, theme.media.desktop)};
    border-radius: 0.417vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    height: ${(props) => transformAdaptiveSize(props.$size, theme.media.tablet)};
    border-radius: 0.651vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    height: ${(props) => transformAdaptiveSize(props.$size, theme.media.phone)};
    border-radius: 1.176vw;
  }
`;

const PaginateArrowRight = styled.button<{ $isActive: boolean }>`
  position: absolute;
  right: 0;
  width: 1.667vw;
  height: 1.667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  transform: rotate(180deg);
  background-color: transparent;

  @media (max-width: ${theme.media.desktop}px) {
    left: 1.334vw;
    width: 2.002vw;
    height: 2.002vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    left: 2.083vw;
    width: 3.125vw;
    height: 3.125vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    left: 3.765vw;
    width: 5.647vw;
    height: 5.647vw;
  }
`;

const PaginateArrowLeft = styled(PaginateArrowRight)`
  left: 0;
  transform: rotate(0deg);

  @media (max-width: ${theme.media.desktop}px) {
    right: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    right: 2.083vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    right: 3.765vw;
  }
`;
