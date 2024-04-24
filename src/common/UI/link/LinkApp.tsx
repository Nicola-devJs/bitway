"use client";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  path: string;
  children: string;
  color?: string;
  size?: number;
  notViewUnderline?: boolean;
}

export const LinkApp: FC<IProps> = ({
  children,
  path,
  color = theme.colors.dark,
  size = 16,
  notViewUnderline = false,
}) => {
  return (
    <CustomLink href={path} $fz={size} $color={color} $isNotViewUnderline={notViewUnderline}>
      {children}
    </CustomLink>
  );
};

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
