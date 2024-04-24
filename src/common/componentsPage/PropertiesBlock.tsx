import React from "react";
import styled from "styled-components";
import { ListProperties } from "../components/listProperties/ListProperties";
import { ContainerApp } from "../styledComponents/ContainerApp";
import propertiesMockData from "../../../public/mockData/properties.json";
import { SliderApp } from "../components/slider/SliderApp";
import { PropertyCard } from "../components/propertyCard/PropertyCard";
import { doSplitToArray } from "../helpers/transformValues";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "../styledComponents/Text";

export const PropertiesBlock = () => {
  //   const countView =
  //     globalThis.innerWidth > theme.media.desktop
  //       ? 3
  //       : globalThis.innerWidth < theme.media.desktop && globalThis.innerWidth > theme.media.tablet
  //       ? 2
  //       : 1;

  return (
    <ContainerApp>
      {propertiesMockData.length > 3 ? (
        <SliderApp
          slides={propertiesMockData.map((prop) => (
            <PropertyCard typeShow="tile" {...prop} />
          ))}
          titleSlider="Explore the latest properties available"
          countViewSlide={3}
          countTrack={2}
        />
      ) : (
        <>
          <TextApp.Block title="Explore the latest properties available" $mb={50} />
          <ListProperties typeShow="tile" properties={propertiesMockData} />
        </>
      )}
    </ContainerApp>
  );
};
