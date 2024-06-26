"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC, LabelHTMLAttributes } from "react";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/transformValues";
import { playfair } from "../constants/font";

interface IProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  size?: number;
  weight?: number;
  color?: string;
  children: React.ReactNode;
  className?: string;
  as?: string;
}

const TextApp = ({ children, size = 16, color = theme.colors.dark, weight = 400, ...props }: IProps) => {
  return (
    <StyledText $c={color} $s={size} $fw={weight} {...props}>
      {children}
    </StyledText>
  );
};

TextApp.Heading = ({ children, size = 18, color = theme.colors.dark, weight = 700, ...props }: IProps) => {
  return (
    <StyledText as={"h5"} $c={color} $s={size} $fw={weight} {...props}>
      {children}
    </StyledText>
  );
};

TextApp.Block = ({
  title,
  text,
  $mb,
  textAlign = "start",
  maxWidht,
}: {
  title: string;
  text?: string;
  $mb?: number;
  textAlign?: "center" | "start" | "end";
  maxWidht?: number;
}) => {
  return (
    <StyledTextBlock $mb={$mb} $textAlign={textAlign} $maxWidht={maxWidht}>
      <TextApp.Heading as="h2" className={playfair.className} size={40} weight={800}>
        {title}
      </TextApp.Heading>
      {text && <TextApp color={theme.colors.gray}>{text}</TextApp>}
    </StyledTextBlock>
  );
};

export { TextApp };

const StyledText = styled.p<{ $s: number; $c: string; $fw?: number }>`
  font-weight: ${(props) => (props.$fw ? props.$fw : 400)};
  color: ${(props) => props.$c};
  font-size: ${(props) => transformAdaptiveSize(props.$s)};

  @media (min-width: ${theme.media.desktopLarge}px) {
    font-size: ${(props) => props.$s}px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.tablet)};
  }

  @media (max-width: ${theme.media.phone}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$s, theme.media.phone)};
  }
`;

const StyledTextBlock = styled.div<{ $mb?: number; $textAlign: "center" | "start" | "end"; $maxWidht?: number }>`
  ${(props) => props.$mb && `margin-bottom: ${transformAdaptiveSize(props.$mb)};`}
  max-width: ${(props) => props.$maxWidht && transformAdaptiveSize(props.$maxWidht)};
  text-align: ${(props) => props.$textAlign};
  margin-inline: ${(props) => props.$textAlign === "center" && "auto"};
  margin-left: ${(props) => props.$textAlign === "end" && "auto"};

  p {
    margin-top: 0.694vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    ${(props) => props.$mb && `margin-bottom: ${props.$mb}px;`}
    max-width: ${(props) => props.$maxWidht}px;
    p {
      margin-top: 10px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    ${(props) => props.$mb && `margin-bottom: ${transformAdaptiveSize(props.$mb, theme.media.desktop)};`}
    max-width: ${(props) => props.$maxWidht && transformAdaptiveSize(props.$maxWidht, theme.media.desktop)};
    p {
      margin-top: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    ${(props) => props.$mb && `margin-bottom: ${transformAdaptiveSize(props.$mb, theme.media.tablet)};`}
    max-width: ${(props) => props.$maxWidht && transformAdaptiveSize(props.$maxWidht, theme.media.tablet)};
    p {
      margin-top: 1.302vw;
    }
  }
`;
