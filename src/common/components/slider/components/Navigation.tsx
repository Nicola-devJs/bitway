import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { NextImage } from "../../NextImage";
import arrowSlider from "@/assets/icons/arrow-slider.svg";
import { FC } from "react";

interface ILeftProps {
  positionSlide: number;
  decrementPosition: () => void;
}

interface IRightProps {
  positionSlide: number;
  incrementPosition: () => void;
  lastSlideId: number;
}

export const SliderNavigationArrowLeft: FC<ILeftProps> = ({ decrementPosition, positionSlide }) => {
  return (
    <StyledSliderNavigationArrowLeft $disable={positionSlide === 0} onClick={decrementPosition}>
      <NextImage info={arrowSlider} $height={9.5} $width={13.5} objectFit="contain" />
    </StyledSliderNavigationArrowLeft>
  );
};

export const SliderNavigationArrowRight: FC<IRightProps> = ({ incrementPosition, positionSlide, lastSlideId }) => {
  return (
    <StyledSliderNavigationArrowRight $disable={positionSlide === lastSlideId} onClick={incrementPosition}>
      <NextImage info={arrowSlider} $height={9.5} $width={13.5} objectFit="contain" />
    </StyledSliderNavigationArrowRight>
  );
};

const StyledSliderNavigationArrowRight = styled.div<{ $disable?: boolean }>`
  position: absolute;
  right: -5.972vw;
  top: 50%;
  transform: translateY(-50%);
  width: 3.889vw;
  height: 3.889vw;
  border-radius: 0.694vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$disable ? theme.colors.whiteOpacity(0.2) : theme.colors.blue)};
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

const StyledSliderNavigationArrowLeft = styled(StyledSliderNavigationArrowRight)`
  left: -5.972vw;
  transform: rotate(180deg);

  @media (max-width: ${theme.media.desktop}px) {
    left: -7.173vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    left: -11.198vw;
  }
`;
