"use client";
import { NextImage } from "@/common/components/NextImage";
import React from "react";
import banner from "@/assets/images/main-img.jpg";
import styled from "styled-components";
import { TextApp } from "@/common/styledComponents/Text";
import { playfair } from "@/common/constants/font";
import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { theme } from "@/assets/theme/theme";
import { usePathname } from "next/navigation";
import { BREADCRUMBS_MENU } from "@/common/constants/mockMenu";

export const BannerLayour = () => {
  const pathname = usePathname();

  return (
    <BannerContainer>
      <NextImage info={banner} $fullWidth $height={570}></NextImage>
      <DescriptionContainer>
        <BannerTitle size={60} className={playfair.className} color={theme.colors.white}>
          {BREADCRUMBS_MENU[pathname]}
        </BannerTitle>
        <Breadcrumbs style={{ padding: 0 }} color={theme.colors.white} />
      </DescriptionContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
`;

const DescriptionContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const BannerTitle = styled(TextApp.Heading)`
  margin-bottom: 10px;
`;
