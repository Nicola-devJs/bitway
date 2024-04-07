"use client";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";

interface IProps {
  children: ReactNode;
  fontSize?: number;
}

export const ButtonApp: FC<IProps> = ({ children, fontSize = 16 }) => {
  return <StyledButton $fontSize={fontSize}>{children}</StyledButton>;
};

const StyledButton = styled.button<{ $fontSize: number }>`
  font-family: inherit;
  font-weight: 500;
  background-color: ${theme.colors.blue};
  color: #fff;
  padding: 0.938vw 2.083vw;
  border-radius: 0.69vw;
  font-size: ${(props) => transformAdaptiveSize(props.$fontSize)};

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fontSize, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fontSize, theme.media.tablet)};
  }
`;
