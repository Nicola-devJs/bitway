import React from "react";

import logo from "@/assets/images/logo_NestHaven.png";
import logo_white from "@/assets/images/logo_NestHaven_white.png";

import { NextImage } from "../NextImage";

interface IProps {
  isWhite?: boolean;
  size: number;
}

export const LogoApp = ({ isWhite, size }: IProps) => {
  return <NextImage info={isWhite ? logo_white : logo} $width={size} />;
};
