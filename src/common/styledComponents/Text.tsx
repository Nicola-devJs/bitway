"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/adaptiveSize";

interface IProps {
  size?: number;
  color?: string;
  children: React.ReactNode;
}

const TextApp = ({ children, size = 16, color = theme.colors.dark }: IProps) => {
  return (
    <StyledText $c={color} $s={size}>
      {children}
    </StyledText>
  );
};

TextApp.Heading = ({ children, size = 18, color = theme.colors.dark }: IProps) => {
  return (
    <StyledText as={"h5"} $c={color} $s={size} $fw={700}>
      {children}
    </StyledText>
  );
};

export { TextApp };

const StyledText = styled.p<{ $s: number; $c: string; $fw?: number }>`
  font-weight: ${(props) => (props.$fw ? props.$fw : 300)};
  color: ${(props) => props.$c};
  font-size: ${(props) => transformAdaptiveSize(props.$s)};

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.tablet)};
  }
`;
