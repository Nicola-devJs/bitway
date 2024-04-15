"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC, LabelHTMLAttributes } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/adaptiveSize";

interface IProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  size?: number;
  weight?: number;
  color?: string;
  children: React.ReactNode;
  className?: string;
  as?: string;
}

const TextApp = ({ children, size = 16, color = theme.colors.dark, weight, ...props }: IProps) => {
  return (
    <StyledText $c={color} $s={size} $fw={weight} {...props}>
      {children}
    </StyledText>
  );
};

TextApp.Heading = ({ children, size = 18, color = theme.colors.dark, ...props }: IProps) => {
  return (
    <StyledText as={"h5"} $c={color} $s={size} $fw={700} {...props}>
      {children}
    </StyledText>
  );
};

export { TextApp };

const StyledText = styled.p<{ $s: number; $c: string; $fw?: number }>`
  font-weight: ${(props) => (props.$fw ? props.$fw : 400)};
  color: ${(props) => props.$c};
  font-size: ${(props) => transformAdaptiveSize(props.$s)};

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.tablet)};
  }
`;
