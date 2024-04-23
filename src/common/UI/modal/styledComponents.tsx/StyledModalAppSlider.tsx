import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import styled from "styled-components";

const SliderTrack = styled.div<{ $pos: number; $slides: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$slides}, 100%)`};
  transform: ${(props) => `translateX(-${100 * props.$pos}%)`};
  transition: transform 0.2s ease-in-out;
`;

const SliderNavigationArrowRight = styled.div<{ $disable?: boolean }>`
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

const SliderNavigationArrowLeft = styled(SliderNavigationArrowRight)`
  left: -5.972vw;
  transform: rotate(180deg);

  @media (max-width: ${theme.media.desktop}px) {
    left: -7.173vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    left: -11.198vw;
  }
`;

const SliderInfo = styled.div`
  position: absolute;
  bottom: 1.389vw;
  left: 50%;
  transform: translateX(-50%);
  width: 10vw;
  padding: 1.111vw;
  border-radius: 0.694vw;
  text-align: center;
  color: ${theme.colors.white};
  font-weight: 700;
  background-color: ${theme.colors.darkOpacity(0.8)};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.334vw;
    border-radius: 0.834vw;
    width: 12.01vw;
    bottom: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.083vw;
    border-radius: 1.302vw;
    width: 18.75vw;
    bottom: 2.604vw;
  }
`;

const CloseModalSlider = styled.div`
  position: absolute;
  top: 1.389vw;
  right: 1.389vw;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    top: 1.668vw;
    right: 1.668vw;
    opacity: 1;
  }

  @media (max-width: ${theme.media.tablet}px) {
    top: 2.604vw;
    right: 2.604vw;
  }
`;

const ModalSlider = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${(props) => transformAdaptiveSize(props.$width)};
  height: ${(props) => transformAdaptiveSize(props.$height)};
  border-radius: 1.389vw;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.2s ease-in-out 0.1s;

  &:hover ${SliderInfo}, &:hover ${CloseModalSlider} {
    opacity: 1;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.desktop)};
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.desktop)};
    border-radius: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.tablet)};
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.tablet)};
    border-radius: 2.604vw;
  }
`;

export {
  SliderTrack,
  ModalSlider,
  CloseModalSlider,
  SliderNavigationArrowLeft,
  SliderNavigationArrowRight,
  SliderInfo,
};
