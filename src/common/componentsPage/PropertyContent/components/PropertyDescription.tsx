"use client";
import { theme } from "@/assets/theme/theme";
import { NextImage } from "@/common/components/NextImage";
import { TextApp } from "@/common/styledComponents/Text";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import plan from "@/assets/images/main-img.jpg";
import { ModalContext } from "@/common/hoc/ModalProvider";

// TODO Временно
const plans = [plan, plan, plan, plan];

export const PropertyDescription = () => {
  const { setOptionModalHandler, showHandler } = useContext(ModalContext);

  const openModalSlideHandler = (position: number) => () => {
    setOptionModalHandler({ type: "gallery", options: { images: plans, initialPosition: position } });
    showHandler();
  };

  return (
    <>
      <StyledPropertyDescription>
        <DescriptionBlock>
          <TextApp>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
            reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione!
            Esse, inventore possimus.
          </TextApp>
          <TextApp>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
            reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione!
            Esse, inventore possimus.
          </TextApp>
          <TextApp>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
            reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione!
            Esse, inventore possimus.
          </TextApp>
        </DescriptionBlock>
        <div>
          <TextApp.Heading>Details</TextApp.Heading>
          <DetailsTable>
            <li>
              <TextApp weight={700}>Built Up Area (sqft)</TextApp>
              <TextApp>3240 sqft</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Dimensions</TextApp>
              <TextApp>40x50</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Carpet Area (sqft)</TextApp>
              <TextApp>2560 sqft</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Built Year</TextApp>
              <TextApp>2017</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Parking</TextApp>
              <TextApp>2</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Bedrooms</TextApp>
              <TextApp>5</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Bathrooms</TextApp>
              <TextApp>7</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Balcony</TextApp>
              <TextApp>2</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Status</TextApp>
              <TextApp>Ready to Move</TextApp>
            </li>
            <li>
              <TextApp weight={700}>Property Category</TextApp>
              <TextApp>Villa</TextApp>
            </li>
          </DetailsTable>
        </div>
        <div>
          <TextApp.Heading>Floor Plan</TextApp.Heading>
          <FloorPlanBlock>
            {plans.map((plan, id) => (
              <NextImage key={id} info={plan} $fullWidth onClick={openModalSlideHandler(id)} />
            ))}
          </FloorPlanBlock>
        </div>
      </StyledPropertyDescription>
    </>
  );
};

const StyledPropertyDescription = styled.div`
  & > div {
    h5 {
      margin-bottom: 1.389vw;
    }

    &:not(:last-child) {
      margin-bottom: 1.389vw;
      padding-bottom: 1.389vw;
      border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    & > div {
      h5 {
        margin-bottom: 1.668vw;
      }

      &:not(:last-child) {
        margin-bottom: 1.668vw;
        padding-bottom: 1.668vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & > div {
      h5 {
        margin-bottom: 2.604vw;
      }

      &:not(:last-child) {
        margin-bottom: 2.604vw;
        padding-bottom: 2.604vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & > div {
      h5 {
        margin-bottom: 4.706vw;
      }

      &:not(:last-child) {
        margin-bottom: 4.706vw;
        padding-bottom: 4.706vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }
`;

const DescriptionBlock = styled.div`
  & p:not(:last-child) {
    margin-bottom: 1.389vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    & p:not(:last-child) {
      margin-bottom: 1.668vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & p:not(:last-child) {
      margin-bottom: 2.604vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & p:not(:last-child) {
      margin-bottom: 4.706vw;
    }
  }
`;

const DetailsTable = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 1.111vw;
  grid-column-gap: 10.556vw;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.grayOpacity(0.2)};
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p:first-child {
      margin-right: 20px;
      &:after {
        content: ":";
      }
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    grid-row-gap: 1.334vw;
    grid-column-gap: 12.677vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-row-gap: 2.083vw;
    grid-column-gap: 19.792vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    grid-row-gap: 3.765vw;
    grid-column-gap: 0;
    grid-template-columns: 1fr;

    &:after {
      display: none;
    }
  }
`;

const FloorPlanBlock = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.694vw;

  & > div {
    align-self: center;
    justify-self: center;
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
