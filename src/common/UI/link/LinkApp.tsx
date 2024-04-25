"use client";
import { theme } from "@/assets/theme/theme";
import { NextImage } from "@/common/components/NextImage";
import { feedbackButtonIcons } from "@/common/constants/constantImages";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import Link, { LinkProps } from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps extends LinkProps {
  children: string;
  color?: string;
  size?: number;
  notViewUnderline?: boolean;
}

interface IPropsLinkButton extends LinkProps {
  children: string;
  fontSize?: number;
  paddingBlock?: number;
  width?: number | "max-content";
  outlined?: boolean;
  icon?: keyof typeof feedbackButtonIcons;
}

const LinkApp = ({ children, color = theme.colors.dark, size = 16, notViewUnderline = false, ...props }: IProps) => {
  return (
    <CustomLink $fz={size} $color={color} $isNotViewUnderline={notViewUnderline} {...props}>
      {children}
    </CustomLink>
  );
};

LinkApp.Button = ({
  children,
  fontSize = 16,
  paddingBlock = 16,
  width,
  outlined,
  icon,
  ...props
}: IPropsLinkButton) => {
  return (
    <LinkButton $fz={fontSize} $pb={paddingBlock} $w={width} $outlined={outlined} {...props}>
      {icon && <NextImage info={feedbackButtonIcons[icon]} $width={24} $height={24} objectFit="contain" />}
      {children}
    </LinkButton>
  );
};

export { LinkApp };

const CustomLink = styled(Link)<{ $fz: number; $color: string; $isNotViewUnderline: boolean }>`
  font-size: ${(props) => transformAdaptiveSize(props.$fz)};
  color: ${(props) => props.$color};
  font-weight: 400;
  position: relative;

  &::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: ${(props) => props.$color};
    position: absolute;
    left: 0;
    bottom: -1px;
    transition: width 0.2s linear;
    display: ${(props) => (props.$isNotViewUnderline ? "none" : "block")};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.tablet)};
  }
`;

const LinkButton = styled(Link)<{ $fz: number; $pb: number; $w?: number | "max-content"; $outlined?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-weight: 400;
  background-color: ${(props) => (props.$outlined ? theme.colors.white : theme.colors.blue)};
  color: ${(props) => (props.$outlined ? theme.colors.blue : theme.colors.white)};
  width: ${(props) =>
    typeof props.$w === "number"
      ? transformAdaptiveSize(props.$w)
      : props.$w === "max-content"
      ? "max-content"
      : "100%"};
  border: 1px solid ${(props) => (props.$outlined ? theme.colors.blue : "transparent")};
  padding-block: ${(props) => transformAdaptiveSize(props.$pb)};
  border-radius: 0.69vw;
  font-size: ${(props) => transformAdaptiveSize(props.$fz)};
  cursor: pointer;

  & > div {
    margin-right: 0.694vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.desktop)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.desktop)};
    width: ${(props) =>
      typeof props.$w === "number"
        ? transformAdaptiveSize(props.$w, theme.media.desktop)
        : props.$w === "max-content"
        ? "max-content"
        : "100%"};
    border-radius: 0.834vw;

    & > div {
      margin-right: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.tablet)};
    padding-block: ${(props) => transformAdaptiveSize(props.$pb, theme.media.tablet)};
    width: ${(props) =>
      typeof props.$w === "number"
        ? transformAdaptiveSize(props.$w, theme.media.tablet)
        : props.$w === "max-content"
        ? "max-content"
        : "100%"};
    border-radius: 1.302vw;

    & > div {
      margin-right: 1.302vw;
    }
  }
`;
