"use client";
import { theme } from "@/assets/theme/theme";
import { SliderInfo, CloseModalSlider } from "@/common/UI/modal/styledComponents.tsx/StyledModalAppSlider";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import arrowRightSlider from "@/assets/icons/arrow-right-slider.svg";
import arrowLeftSlider from "@/assets/icons/arrow-left-slider.svg";
import { TextApp } from "@/common/styledComponents/Text";
import { playfair } from "@/common/constants/font";

interface IProps {
  slides: React.ReactNode[];
  initialPosition?: number;
  width?: number;
  height?: number;
  countViewSlide?: number;
  children?: React.ReactNode;
  showArrowsNavigation?: boolean;
  getPosition?: (pos: number) => void;
  titleSlider?: string;
  countTrack?: number;
}

export const SliderApp: FC<IProps> = ({
  slides,
  initialPosition = 0,
  height,
  width,
  countViewSlide = 1,
  children,
  showArrowsNavigation,
  getPosition,
  titleSlider,
  countTrack = 1,
}) => {
  const [positionSlide, setPositionSlide] = useState(initialPosition);

  const incrementPosition = () => {
    if (positionSlide < slides.length - 1) {
      getPosition?.(positionSlide + 1);
      setPositionSlide(positionSlide + 1);
    }
  };

  const decrementPosition = () => {
    if (positionSlide > 0) {
      getPosition?.(positionSlide - 1);
      setPositionSlide(positionSlide - 1);
    }
  };

  useEffect(() => {
    setPositionSlide(initialPosition);
  }, [initialPosition]);

  return (
    <>
      {titleSlider && (
        <SliderTop>
          <TextApp.Heading as="h2" size={40} weight={700} className={playfair.className}>
            {titleSlider}
          </TextApp.Heading>
          <NavigationBlock>
            <SliderNavigationArrowLeft
              $disabled={positionSlide === 0}
              disabled={positionSlide === 0}
              onClick={decrementPosition}
              $customPosition
            >
              <NextImage info={arrowLeftSlider} $height={9.5} $width={13.5} objectFit="contain" />
            </SliderNavigationArrowLeft>
            <SliderNavigationArrowRight
              $disabled={countTrack * (positionSlide + countViewSlide) > slides.length - 1}
              disabled={countTrack * (positionSlide + countViewSlide) > slides.length - 1}
              onClick={incrementPosition}
              $customPosition
            >
              <NextImage info={arrowRightSlider} $height={9.5} $width={13.5} objectFit="contain" />
            </SliderNavigationArrowRight>
          </NavigationBlock>
        </SliderTop>
      )}

      <StyledSliderApp onClick={(e) => e.stopPropagation()} $width={width} $height={height}>
        <SliderTrackContainer>
          <SliderTrack
            $pos={positionSlide}
            $slides={slides.length}
            $countView={countViewSlide}
            $countTrack={countTrack}
          >
            {slides.map((slide, key) => (
              <Slide key={key}>{slide}</Slide>
            ))}
          </SliderTrack>
        </SliderTrackContainer>
        {children}
        {showArrowsNavigation && (
          <>
            <SliderNavigationArrowLeft
              $disabled={positionSlide === 0}
              disabled={positionSlide === 0}
              onClick={decrementPosition}
            >
              <NextImage info={arrowLeftSlider} $height={9.5} $width={13.5} objectFit="contain" />
            </SliderNavigationArrowLeft>
            <SliderNavigationArrowRight
              $disabled={countTrack * (positionSlide + countViewSlide) > slides.length - 1}
              disabled={countTrack * (positionSlide + countViewSlide) > slides.length - 1}
              onClick={incrementPosition}
            >
              <NextImage info={arrowRightSlider} $height={9.5} $width={13.5} objectFit="contain" />
            </SliderNavigationArrowRight>
          </>
        )}
      </StyledSliderApp>
    </>
  );
};

const StyledSliderApp = styled.div<{ $width?: number; $height?: number }>`
  position: relative;
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  height: ${(props) => (props.$height ? transformAdaptiveSize(props.$height) : "100%")};
  border-radius: 1.389vw;

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    height: ${(props) => (props.$height ? transformAdaptiveSize(props.$height, theme.media.desktop) : "100%")};
    border-radius: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    height: ${(props) => (props.$height ? transformAdaptiveSize(props.$height, theme.media.tablet) : "100%")};
    border-radius: 2.604vw;
  }
`;

const SliderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3.472vw;
  h2 {
    max-width: 44.097vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 4.17vw;
    h2 {
      max-width: 52.961vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 6.51vw;
    h2 {
      max-width: 82.682vw;
    }
  }
`;

const NavigationBlock = styled.div`
  display: flex;
  gap: 1.389vw;

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
  }
`;

const SliderTrackContainer = styled.div`
  overflow: hidden;
  margin: -1.042vw;

  @media (max-width: ${theme.media.desktop}px) {
    margin: -1.251vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin: -1.953vw;
  }
`;

const SliderTrack = styled.div<{ $pos: number; $slides: number; $countView: number; $countTrack: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${Math.ceil(props.$slides / props.$countTrack)}, ${100 / props.$countView}%)`};
  grid-template-rows: ${(props) => `repeat(${props.$countTrack}, 1fr)`};
  transform: ${(props) => `translateX(-${(100 / props.$countView) * props.$pos}%)`};
  transition: transform 0.2s ease-in-out;
`;

const SliderNavigationArrowRight = styled.button<{ $disabled?: boolean; $customPosition?: boolean }>`
  position: ${(props) => (props.$customPosition ? "static" : "absolute")};
  right: -5.972vw;
  top: 50%;
  transform: ${(props) => (props.$customPosition ? "none" : "translateY(-50%)")};
  width: 3.889vw;
  height: 3.889vw;
  border-radius: 0.694vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$disabled
      ? props.$customPosition
        ? theme.colors.grayOpacity(0.05)
        : theme.colors.whiteOpacity(0.2)
      : theme.colors.blue};
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    right: -7.173vw;
    width: 4.671vw;
    height: 4.671vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    right: -11.198vw;
    width: 7.292vw;
    height: 7.292vw;
    border-radius: 1.302vw;
  }
`;

const SliderNavigationArrowLeft = styled(SliderNavigationArrowRight)`
  left: -5.972vw;

  @media (max-width: ${theme.media.desktop}px) {
    left: -7.173vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    left: -11.198vw;
  }
`;

const Slide = styled.div`
  padding: 1.042vw;

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.251vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 1.953vw;
  }
`;
