import React from "react";
import logo_b from "@/assets/images/logo-b.png";
import logo_w from "@/assets/images/logo-w.png";
import logo from "@/assets/images/logo_NestHaven.png";

import { NextImage } from "../NextImage";

interface IProps {
  isWhite?: boolean;
  size: number;
}

export const LogoApp = ({ isWhite, size }: IProps) => {
  return <NextImage info={isWhite ? logo : logo} $width={size} />;
};
