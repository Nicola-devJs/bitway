"use client";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import { NextImage } from "@/common/components/NextImage";
import { feedbackButtonIcons } from "@/common/constants/constantImages";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fontSize?: number;
  paddingBlock?: number;
  width?: number;
  outlined?: boolean;
  icon?: keyof typeof feedbackButtonIcons;
  loading?: boolean;
}

export const ButtonApp: FC<IProps> = ({
  children,
  fontSize = 16,
  paddingBlock = 16,
  width,
  outlined,
  icon,
  loading,
  ...props
}) => {
  return (
    <StyledButton $fz={fontSize} $pb={paddingBlock} $w={width} $outlined={outlined} onClick={props.onClick} {...props}>
      {icon && <NextImage info={feedbackButtonIcons[icon]} $width={24} $height={24} objectFit="contain" />}
      {children}
      {loading && (
        <CyrcleLoader>
          <div></div>
        </CyrcleLoader>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $fz: number; $pb: number; $w?: number; $outlined?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  font-family: inherit;
  font-weight: 400;
  background-color: ${(props) => (props.$outlined ? theme.colors.white : theme.colors.blue)};
  color: ${(props) => (props.$outlined ? theme.colors.blue : theme.colors.white)};
  width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w) : "100%")};
  border: 1px solid ${(props) => (props.$outlined ? theme.colors.blue : "transparent")};
  padding-block: ${(props) => transformAdaptiveSize(props.$pb)};
  border-radius: 0.694vw;
  font-size: ${(props) => transformAdaptiveSize(props.$fz)};
  cursor: pointer;

  & > div {
    margin-right: 0.694vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    font-size: ${(props) => `${props.$fz}px`};
    padding-block: ${(props) => `${props.$pb}px`};
    width: ${(props) => (props.$w ? `${props.$w}px` : "100%")};
    border-radius: 10px;

    & > div {
      margin-right: 10px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.desktop)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.desktop)};
    width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w, theme.media.desktop) : "100%")};
    border-radius: 0.834vw;

    & > div {
      margin-right: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.tablet)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.tablet)};
    width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w, theme.media.tablet) : "100%")};
    border-radius: 1.302vw;

    & > div {
      margin-right: 1.302vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.phone)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.phone)};
    width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w, theme.media.phone) : "100%")};
    border-radius: 2.353vw;

    & > div {
      margin-right: 2.353vw;
    }
  }
`;

const loaderScale = keyframes`
   0% {
      transform: rotate(0deg);
   }
   50% {
      transform: rotate(180deg);
   }
   100% {
      transform: rotate(360deg);
   }
`;

const CyrcleLoader = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  animation: ${loaderScale} 1s infinite ease-in-out;
  position: absolute;
  z-index: 1;

  div {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background-color: transparent;
    border-radius: 50%;
  }

  div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(to right, ${theme.colors.white}, ${theme.colors.blue});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    box-sizing: border-box;
  }
`;
