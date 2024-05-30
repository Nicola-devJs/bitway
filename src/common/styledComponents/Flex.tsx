"use client";
import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/transformValues";
import { theme } from "@/assets/theme/theme";

interface IStyledProps {
  $flexType?: "row" | "column";
  $justify?: "center" | "flex-end" | "flex-start" | "stretch";
  $align?: "center" | "flex-end" | "flex-start" | "stretch";
  $flexGap?: number;
}

interface IProps extends IStyledProps, HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const FlexContent: FC<IProps> = ({ children, $align = "stretch", $justify = "stretch", ...props }) => {
  return (
    <StyledFlexContent $align={$align} $justify={$justify} {...props}>
      {children}
    </StyledFlexContent>
  );
};

const StyledFlexContent = styled.div<IStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$flexType === "column" ? "column" : "row")};
  gap: ${(props) => (props.$flexGap ? transformAdaptiveSize(props.$flexGap) : 0)};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: ${(props) => props.$flexGap || 0}px;
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
