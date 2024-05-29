"use client";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import { TextApp } from "@/common/styledComponents/Text";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { theme } from "@/assets/theme/theme";
import { SliderApp } from "../slider/SliderApp";
import { playfair } from "@/common/constants/font";
import { LinkApp } from "@/common/UI/link/LinkApp";
import imageProperty from "@/assets/images/main-img.jpg";
import { IPropertyCard } from "@/common/interfaces/property/property";

interface IProps {
  properties: IPropertyCard[];
}

export const FeaturedProperty: FC<IProps> = ({ properties }) => {
  const [propId, setPropId] = useState(0);

  return (
    <ContainerApp>
      <FeaturedPropertyBlock>
        <TextApp.Block
          title="Featured Properties"
          text="Using it can make you sound like you have been studying english for a long time. Here’s the challenge"
          $mb={50}
          textAlign="center"
        />
        <div style={{ position: "relative" }}>
          <SliderApp
            slides={properties.slice(0, 5).map((prop) => (
              <FeaturedPropertyImageWrapper>
                <NextImage info={imageProperty} $fullWidth className="img" />
              </FeaturedPropertyImageWrapper>
            ))}
            infinityMode={4000}
            getPosition={setPropId}
          />
          <FeaturedPropertyInfoBlock>
            <TextApp.Heading color={theme.colors.white} size={24} className={playfair.className}>
              {properties[propId].heading}
            </TextApp.Heading>
            <TextApp color={theme.colors.white} size={20}>
              ${properties[propId].price}
            </TextApp>
            <TextApp color={theme.colors.white}>{properties[propId].description}</TextApp>
            {/* <FeaturedPropertyInfoComponents>
              {Object.keys(properties[propId]).map((comp) => (
                <div key={comp}>
                  <NextImage info={propertyCardIconsWhite[comp]} $width={24} />
                  
                  <span>{properties[propId].components[comp]}</span>
                </div>
              ))}
            </FeaturedPropertyInfoComponents> */}
            <LinkApp.Button
              href={`/properties/${properties[propId].id}`}
              width={182}
              outlined
              color={theme.colors.white}
            >
              More Details
            </LinkApp.Button>
          </FeaturedPropertyInfoBlock>
        </div>
      </FeaturedPropertyBlock>
    </ContainerApp>
  );
};

const FeaturedPropertyBlock = styled.div`
  position: relative;
  padding-bottom: 13.889vw;

  .img {
    overflow: hidden;
    border-radius: 1.111vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 16.681vw;

    .img {
      border-radius: 1.334vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 0;

    .img {
      border-radius: 2.083vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    .img {
      border-radius: 3.765vw;
    }
  }
`;

const FeaturedPropertyImageWrapper = styled.div`
  width: 100%;
  height: 34.722vw;

  @media (max-width: ${theme.media.phone}px) {
    height: 47.059vw;
  }
`;

const FeaturedPropertyInfoBlock = styled.div`
  position: absolute;
  right: 6.944vw;
  bottom: -6.944vw;
  padding: 1.389vw;
  background-color: ${theme.colors.blue};
  border-radius: 0.694vw;
  width: 34.722vw;

  & > *:not(:last-child) {
    margin-bottom: 0.694vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.668vw;
    border-radius: 0.834vw;
    right: 8.34vw;
    bottom: -8.34vw;
    width: 41.701vw;

    & > *:not(:last-child) {
      margin-bottom: 0.834vw;
    }
  }
  @media (max-width: ${theme.media.tablet}px) {
    position: static;
    padding: 2.604vw;
    border-radius: 1.302vw;
    width: 100%;
    margin-top: 1.302vw;

    & > *:not(:last-child) {
      margin-bottom: 1.302vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    position: static;
    padding: 4.706vw;
    border-radius: 2.353vw;
    margin-top: 2.353vw;

    & > *:not(:last-child) {
      margin-bottom: 2.353vw;
    }
  }
`;

const FeaturedPropertyInfoComponents = styled.div`
  display: flex;
  align-items: center;
  gap: 1.389vw;
  margin-block: 1.111vw 2.083vw !important;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.694vw;
    span {
      color: ${theme.colors.white};
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
    margin-block: 1.334vw 2.502vw !important;

    & > div {
      gap: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
    margin-block: 2.083vw 3.906vw !important;
    & > div {
      gap: 1.302vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    gap: 4.706vw;
    margin-block: 3.765vw 7.059vw !important;
    & > div {
      gap: 2.353vw;
    }
  }
`;
