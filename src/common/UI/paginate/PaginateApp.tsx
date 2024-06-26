"use client";
import styled from "styled-components";
import React, { FC, useState } from "react";
import { theme } from "@/assets/theme/theme";
import { NextImage } from "@/common/components/NextImage";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import arrowLeftBlack from "@/assets/icons/slider/arrow-left-b-slider.svg";
import arrowRightBlack from "@/assets/icons/slider/arrow-right-b-slider.svg";

interface IProps {
  sizePage?: number;
  activePage: number;
  changeActivePage: (idPage: number) => void;
  amountPages: number;
}

export const PaginateApp: FC<IProps> = ({ sizePage = 40, amountPages, activePage, changeActivePage }) => {
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === amountPages;

  return (
    <PaginateContainer>
      {Array(amountPages)
        .fill(" ")
        .map((_, id) => (
          <PaginateItem key={id} $size={sizePage} $actvie={activePage === id + 1} onClick={() => changeActivePage(id)}>
            {id + 1}
          </PaginateItem>
        ))}
      <>
        <PaginateArrowLeft
          $isDisabled={isFirstPage}
          disabled={isFirstPage}
          onClick={() => changeActivePage(activePage - 1)}
        >
          <NextImage info={arrowLeftBlack} $width={12} $height={8} objectFit="contain" />
        </PaginateArrowLeft>
        <PaginateArrowRight
          $isDisabled={isLastPage}
          disabled={isLastPage}
          onClick={() => changeActivePage(activePage + 1)}
        >
          <NextImage info={arrowRightBlack} $width={12} $height={8} objectFit="contain" />
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

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 10px;
    margin: 50px 0 100px auto;
    padding-inline: 40px;
  }

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

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: ${(props) => `${props.$size}px`};
    height: ${(props) => `${props.$size}px`};
    border-radius: 5px;
  }

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

const PaginateArrowRight = styled.button<{ $isDisabled: boolean }>`
  position: absolute;
  right: 0;
  width: 1.667vw;
  height: 1.667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  background-color: transparent;

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 2.002vw;
    height: 2.002vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 3.125vw;
    height: 3.125vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    width: 5.647vw;
    height: 5.647vw;
  }
`;

const PaginateArrowLeft = styled(PaginateArrowRight)`
  left: 0;
`;
