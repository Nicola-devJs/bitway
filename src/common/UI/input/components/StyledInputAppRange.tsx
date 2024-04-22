import { theme } from "@/assets/theme/theme";
import styled from "styled-components";

export const RangeContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.grayOpacity(0.2)};
  height: 2px;
  position: relative;
`;

export const RangeProgress = styled.div<{ $minPrecent: number; $maxPrecent: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$minPrecent}%;
  right: ${(props) => props.$maxPrecent}%;
  height: 100%;
  background-color: ${theme.colors.blue};
`;

export const RangeInput = styled.input`
  height: 2px;
  position: absolute;
  width: 100%;
  top: -2px;
  -webkit-appearance: none;
  background: none;
  pointer-events: none;

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.colors.blue};
    pointer-events: auto;
  }

  &[type="range"]::-moz-range-thumb {
    -moz-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.colors.blue};
    pointer-events: auto;
    border: none;
  }
`;
