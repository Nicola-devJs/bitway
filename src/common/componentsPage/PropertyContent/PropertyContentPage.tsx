"use client";
import React, { FC, useContext } from "react";
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
import { FormFeedback } from "@/common/components/feedback/FormFeedback";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { useScreenExtension } from "@/common/hooks/screenExtension";
import { IPropertyCard } from "@/common/interfaces/property/property";

export const PropertyContentPage: FC<IPropertyCard> = ({ heading, description, price }) => {
  // TODO Доработать хук useScreenExtension (использовать массив, с инверсией. В хуке задействовать изначальные значения)
  const [minDesktopScreen, maxDesktopScreen, maxTabletScreen, maxPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.desktop },
    { screenExtension: theme.media.desktop, maxScreen: true },
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone, maxScreen: true },
  ]);

  const { showHandler, setOptionModalHandler } = useContext(ModalContext);

  const openModalFormFeedback = () => {
    setOptionModalHandler({ type: "modal", options: { children: <FormFeedback />, width: 700 } });

    showHandler();
  };

  return (
    <ContainerApp>
      <PropertyTopInfo>
        <div>
          <TextApp.Heading as="h3" weight={700} size={30} className={playfair.className}>
            {heading}
          </TextApp.Heading>
          <LocationText>
            <NextImage info={location} $width={24} $height={24} />
            <TextApp>3891 Ranchview Dr. Richardson, California 62639</TextApp>
          </LocationText>
          <TextApp.Heading size={24}>{price} ₽</TextApp.Heading>
        </div>
        <PropertyTopActionBlock>
          <PropertyActions sizeIcon={24} sizeWrapper={56} gapActions={20} />
          {maxDesktopScreen ? (
            <ButtonApp onClick={openModalFormFeedback} width={98}>
              Send
            </ButtonApp>
          ) : null}
        </PropertyTopActionBlock>
      </PropertyTopInfo>
      <PropertyContentContainer>
        <TabsApp
          listTabs={[
            { id: 44, title: "Descriptions", content: <PropertyDescription /> },
            { id: 2, title: "Features", content: "Content 2" },
            { id: 5, title: "Mortgage Calculator", content: "Content 3" },
            { id: 3, title: "Schedule a Tour", content: "Content 4" },
          ]}
        />
        {minDesktopScreen && <FormFeedback />}
      </PropertyContentContainer>
      {/* {objects && (
        <SimilarPropertiesBlock>
          <SliderApp
            slides={objects.data.map((prop) => (
              <PropertyCard typeShow="tile" {...prop} />
            ))}
            titleSlider="Similar Properties"
            countViewSlide={maxPhoneScreen ? 1 : maxTabletScreen ? 2 : 3}
            countTrack={1}
          />
        </SimilarPropertiesBlock>
      )} */}
    </ContainerApp>
  );
};

const PropertyTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
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

  @media (max-width: ${theme.media.phone}px) {
    flex-direction: column;
  }
`;

const PropertyTopActionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div:first-child {
    flex: 1 1 auto;
  }

  @media (max-width: ${theme.media.phone}px) {
    flex-direction: row;
    margin-top: 3.765vw;
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

const PropertyContentContainer = styled.div`
  display: grid;
  grid-template-columns: 58% auto;
  grid-column-gap: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    grid-template-columns: 100%;
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
