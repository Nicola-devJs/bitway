import React from "react";
import { ListProperties } from "../components/listProperties/ListProperties";
import { ContainerApp } from "../styledComponents/ContainerApp";
import propertiesMockData from "../../../public/mockData/properties.json";
import { SliderApp } from "../components/slider/SliderApp";
import { PropertyCard } from "../components/propertyCard/PropertyCard";
import { TextApp } from "../styledComponents/Text";
import { useScreenExtension } from "../hooks/useScreenExtension";
import { theme } from "@/assets/theme/theme";

export const PropertiesBlock = () => {
  const [maxTabletScreen, maxPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone, maxScreen: true },
  ]);

  return (
    <ContainerApp>
      {propertiesMockData.length > 3 ? (
        <SliderApp
          slides={propertiesMockData.map((prop) => (
            <PropertyCard typeShow="tile" {...prop} />
          ))}
          titleSlider="Explore the latest properties available"
          countViewSlide={maxPhoneScreen ? 1 : maxTabletScreen ? 2 : 3}
          countTrack={maxPhoneScreen ? 1 : 2}
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
