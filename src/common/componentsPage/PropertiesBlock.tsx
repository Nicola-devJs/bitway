"use client";
import React from "react";
import { ListProperties } from "../components/listProperties/ListProperties";
import { ContainerApp } from "../styledComponents/ContainerApp";
import { SliderApp } from "../components/slider/SliderApp";
import { PropertyCard } from "../components/propertyCard/PropertyCard";
import { TextApp } from "../styledComponents/Text";
import { useScreenExtension } from "../hooks/screenExtension";
import { theme } from "@/assets/theme/theme";
import { IPropertyCard } from "../interfaces/property/property";
import styled from "styled-components";
import { transformAdaptiveSize } from "../helpers/transformValues";

type PropertiesBlockWrapperStyledType = { $bg?: string; $paddingBlock?: number };
interface IProps {
  title?: string;
  properties: IPropertyCard[];
  countTrack?: number;
}

export const PropertiesBlock = ({
  title,
  properties,
  countTrack = 1,
  ...styled
}: IProps & PropertiesBlockWrapperStyledType) => {
  const [maxTabletScreen, maxPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone, maxScreen: true },
  ]);

  return (
    <PropertiesBlockWrapper {...styled}>
      <ContainerApp>
        {properties.length !== 0 ? (
          properties.length > 3 ? (
            <SliderApp
              slides={properties.map((prop) => (
                <PropertyCard typeShow="tile" property={prop} />
              ))}
              titleSlider={title}
              countViewSlide={maxPhoneScreen ? 1 : maxTabletScreen ? 2 : 3}
              countTrack={countTrack}
            />
          ) : (
            <>
              {title && <TextApp.Block title={title} $mb={50} />}
              <ListProperties typeShow="tile" properties={properties} />
            </>
          )
        ) : (
          <div>Объектов не найдено</div>
        )}
      </ContainerApp>
    </PropertiesBlockWrapper>
  );
};

const PropertiesBlockWrapper = styled.div<PropertiesBlockWrapperStyledType>`
  background-color: ${(props) => props.$bg || "inherit"};
  padding-block: ${(props) => (props.$paddingBlock ? transformAdaptiveSize(props.$paddingBlock) : 0)};

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-block: ${(props) => props.$paddingBlock || 0}px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: ${(props) =>
      props.$paddingBlock ? transformAdaptiveSize(props.$paddingBlock, theme.media.desktop) : 0};
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: ${(props) =>
      props.$paddingBlock ? transformAdaptiveSize(props.$paddingBlock, theme.media.tablet) : 0};
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-block: ${(props) =>
      props.$paddingBlock ? transformAdaptiveSize(props.$paddingBlock, theme.media.phone) : 0};
  }
`;
