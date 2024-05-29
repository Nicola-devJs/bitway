"use client";
import React, { FC } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/transformValues";
import { theme } from "@/assets/theme/theme";

interface IProps {
  children: React.ReactNode;
  $flexType?: "row" | "column";
  $flexGap?: number;
}

export const FlexContent: FC<IProps> = ({ children, ...props }) => {
  return <StyledFlexContent {...props}>{children}</StyledFlexContent>;
};

const StyledFlexContent = styled.div<{ $flexType?: "row" | "column"; $flexGap?: number }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$flexType === "column" ? "column" : "row")};
  gap: ${(props) => (props.$flexGap ? transformAdaptiveSize(props.$flexGap) : 0)};

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: ${(props) => `${props.$flexGap}px` || 0};
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: ${(props) => (props.$flexGap ? transformAdaptiveSize(props.$flexGap, theme.media.desktop) : 0)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: ${(props) => (props.$flexGap ? transformAdaptiveSize(props.$flexGap, theme.media.tablet) : 0)};
  }

  @media (max-width: ${theme.media.phone}px) {
    gap: ${(props) => (props.$flexGap ? transformAdaptiveSize(props.$flexGap, theme.media.phone) : 0)};
  }
`;
