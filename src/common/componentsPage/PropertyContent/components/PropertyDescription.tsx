"use client";
import { theme } from "@/assets/theme/theme";
import { NextImage } from "@/common/components/NextImage";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { PropertyContentBlock, PropertyContentBody } from "../PropertyContentPage";

interface IProps {
  description: string;
  plans: string[];
}

export const PropertyDescription: FC<IProps> = ({ description, plans }) => {
  const { setOptionModalHandler, showHandler } = useContext(ModalContext);

  const openModalSlideHandler = (position: number) => () => {
    setOptionModalHandler({ type: "gallery", options: { images: plans, initialPosition: position } });
    showHandler();
  };

  return (
    <>
      <PropertyContentBody>
        <PropertyContentBlock>
          <TextApp>{description}</TextApp>
        </PropertyContentBlock>

        <div>
          <TextApp.Heading>Floor Plan</TextApp.Heading>
          <FloorPlanBlock>
            {plans.map((plan, id) => (
              <NextImage key={id} info={plan} $fullWidth onClick={openModalSlideHandler(id)} />
            ))}
          </FloorPlanBlock>
        </div>
      </PropertyContentBody>
    </>
  );
};

const FloorPlanBlock = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.694vw;

  & > div {
    align-self: center;
    justify-self: center;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    grid-gap: 10px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    grid-gap: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-gap: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    grid-gap: 2.353vw;
  }
`;
