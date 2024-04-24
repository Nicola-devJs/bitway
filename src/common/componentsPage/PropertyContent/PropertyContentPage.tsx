"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { playfair } from "@/common/constants/font";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { TextApp } from "@/common/styledComponents/Text";
import location from "@/assets/icons/location-b.svg";
import { NextImage } from "@/common/components/NextImage";
import { PropertyActions } from "@/common/components/propertyActions/PropertyActions";
import { TabsApp } from "@/common/components/tabs/TabsApp";
import { PropertyDescription } from "./components/PropertyDescription";
import { SliderApp } from "@/common/components/slider/SliderApp";
import { PropertyCard } from "@/common/components/propertyCard/PropertyCard";
import propertiesMockData from "../../../../public/mockData/properties.json";

export const PropertyContentPage = () => {
  return (
    <ContainerApp>
      <PropertyTopInfo>
        <div>
          <TextApp.Heading as="h3" weight={700} size={30} className={playfair.className}>
            Beton Elegant Villa
          </TextApp.Heading>
          <LocationText>
            <NextImage info={location} $width={24} $height={24} />
            <TextApp>3891 Ranchview Dr. Richardson, California 62639</TextApp>
          </LocationText>
          <TextApp.Heading size={24}>$7500000</TextApp.Heading>
        </div>
        <PropertyActions sizeIcon={24} sizeWrapper={56} gapActions={20} />
      </PropertyTopInfo>
      <TabsApp
        listTabs={[
          { title: "Descriptions", content: <PropertyDescription /> },
          { title: "Features", content: "Content" },
          { title: "Mortgage Calculator", content: "Content" },
          { title: "Schedule a Tour", content: "Content" },
        ]}
      />
      <SimilarPropertiesBlock>
        <SliderApp
          slides={propertiesMockData.map((prop) => (
            <PropertyCard typeShow="tile" {...prop} />
          ))}
          titleSlider="Similar Properties"
          countViewSlide={3}
          countTrack={1}
        />
      </SimilarPropertiesBlock>
    </ContainerApp>
  );
};

const PropertyTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-block: 3.472vw;
  padding-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};

  h3 {
    margin-bottom: 0.833vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-block: 4.17vw;
    padding-bottom: 1.668vw;

    h3 {
      margin-bottom: 1.001vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-block: 6.51vw;
    padding-bottom: 2.604vw;

    h3 {
      margin-bottom: 1.563vw;
    }
  }
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.389vw;

  & > div:first-child {
    margin-right: 0.694vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 1.668vw;

    & > div:first-child {
      margin-right: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 2.604vw;

    & > div:first-child {
      margin-right: 1.302vw;
    }
  }
`;

const SimilarPropertiesBlock = styled.div`
  margin-block: 6.944vw;

  @media (max-width: ${theme.media.desktop}px) {
    margin-block: 8.34vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    margin-block: 13.021vw;
  }
`;
