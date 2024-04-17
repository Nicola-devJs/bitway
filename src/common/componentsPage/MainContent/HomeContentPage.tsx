"use client";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
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
    <ContainerApp>
      <TextApp.Block
        title="Explore the latest properties available"
        text="Using it can make you sound like you have been studying english for a long time. Here’s the challenge"
      />
    </ContainerApp>
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
`;
