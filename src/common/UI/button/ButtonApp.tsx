"use client";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";

interface IProps {
  children: ReactNode;
  fontSize?: number;
  paddingBlock?: number;
  width?: number;
}

export const ButtonApp: FC<IProps> = ({ children, fontSize = 16, paddingBlock = 16, width }) => {
  return (
    <StyledButton $fz={fontSize} $pb={paddingBlock} $w={width}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $fz: number; $pb: number; $w?: number }>`
  font-family: inherit;
  font-weight: 500;
  background-color: ${theme.colors.blue};
  color: #fff;
  width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w) : "100%")};
  padding-block: ${(props) => transformAdaptiveSize(props.$pb)};
  border-radius: 0.69vw;
  font-size: ${(props) => transformAdaptiveSize(props.$fz)};
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.desktop)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.desktop)};
    width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w, theme.media.desktop) : "100%")};
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.tablet)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.tablet)};
    width: ${(props) => (props.$w ? transformAdaptiveSize(props.$w, theme.media.tablet) : "100%")};
    border-radius: 1.302vw;
  }
`;