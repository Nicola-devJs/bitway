"use client";
import { theme } from "@/assets/theme/theme";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { ListProperties } from "@/common/components/listProperties/ListProperties";
import { playfair } from "@/common/constants/font";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";

export const HomeHeadingBlock = () => {
  return (
    <>
      <ContainerApp>
        <HeadingBlock>
          <TextApp.Heading as="h1" size={60} className={playfair.className} weight={700}>
            Let’s start search for your dream home
          </TextApp.Heading>
          <div>
            <TextApp>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </TextApp>
            <ButtonApp width={262}>Get Started</ButtonApp>
          </div>
        </HeadingBlock>
      </ContainerApp>
    </>
  );
};

export const HomeLatestProperties = () => {
  return (
    <LatestPropertiesBlock>
      <ContainerApp>
        <TextApp.Block title="Explore the latest properties available" $mb={50} />
        <ListProperties typeShow="tile" />
      </ContainerApp>
    </LatestPropertiesBlock>
  );
};

const HeadingBlock = styled.div`
  display: flex;
  gap: 2.083vw;
  margin-block: 3.472vw;
  div {
    width: 31.736vw;
  }

  p {
    margin-bottom: 2.083vw;
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

  @media (max-width: ${theme.media.desktop}px) {
    gap: 3.906vw;
    margin-block: 6.51vw;

    div {
      width: 59.505vw;
    }

    p {
      margin-bottom: 3.906vw;
    }
  }
`;

const LatestPropertiesBlock = styled.div`
  background-color: ${theme.colors.grayOpacity(0.1)};
  padding-block: 4.861vw;

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 5.838vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 9.115vw;
  }
`;
