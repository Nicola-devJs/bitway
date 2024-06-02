"use client";
import { theme } from "@/assets/theme/theme";
import { playfair } from "@/common/constants/font";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { NextImage } from "@/common/components/NextImage";
import mainImage from "@/assets/images/main-img.jpg";

export const HomeHeadingBlock = () => {
  return (
    <>
      {/* <ContainerApp>
        <HeadingBlock>
          <TextApp.Heading as="h1" size={60} className={playfair.className} weight={700}>
            Let’s start search for your dream home
          </TextApp.Heading>
          <div>
            <TextApp>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </TextApp>
            <LinkApp.Button href="/properties" width={262}>
              Get Started
            </LinkApp.Button>
          </div>
        </HeadingBlock>
      </ContainerApp> */}
      <MainImageWrapper>
        <NextImage info={mainImage} $fullWidth />
      </MainImageWrapper>
    </>
  );
};

const HeadingBlock = styled.div`
  display: flex;
  gap: 2.083vw;
  margin-block: 3.472vw;

  h1 {
    line-height: 1;
  }

  div {
    width: 31.736vw;
  }

  p {
    margin-bottom: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 30px;
    margin-block: 50px;

    div {
      width: 457px;
    }

    p {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 2.502vw;
    margin-block: 4.17vw;

    div {
      width: 38.115vw;
    }

    p {
      margin-bottom: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

const MainImageWrapper = styled.div`
  width: 100%;
  height: 45.208vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    height: 651px;
  }

  @media (max-width: ${theme.media.phone}px) {
    height: 58.824vw;
  }
`;
