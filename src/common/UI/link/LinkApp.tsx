"use client";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  path: string;
  children: string;
  color?: string;
  size?: number;
}

export const LinkApp: FC<IProps> = ({ children, path, color = theme.colors.dark, size = 16 }) => {
  return (
    <CustomLink href={path} $fz={size} $color={color}>
      {children}
    </CustomLink>
  );
};

const CustomLink = styled(Link)<{ $fz: number; $color: string }>`
  font-size: ${(props) => transformAdaptiveSize(props.$fz)};
  color: ${(props) => props.$color};
  font-weight: 400;

  @media (max-width: ${theme.media.desktop}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: ${(props) => transformAdaptiveSize(props.$fz, theme.media.tablet)};
  }
`;
