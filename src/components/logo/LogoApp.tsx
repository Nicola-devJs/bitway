import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { NextImage } from "../NextImage";

export const LogoApp = () => {
  return <NextImage info={logo} $width="10.208vw" $widthDesktop="12.26vw" $widthTablet="19.141vw" />;
};
