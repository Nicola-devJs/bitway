import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import { PropertyCard } from "../propertyCard/PropertyCard";
import { IPropertyCard } from "@/common/interfaces/property/property";

export type ShowType = "list" | "tile";

interface IProps {
  typeShow: ShowType;
  countTiles?: number;
  properties: IPropertyCard[];
}

export const ListProperties: FC<IProps> = ({ typeShow, countTiles = 3, properties }) => {
  return (
    <StyledListProperties $typeShow={typeShow} $countTiles={countTiles}>
      {properties?.map((prop, id) => (
        <PropertyCard key={id} typeShow={typeShow} {...prop} />
      ))}
    </StyledListProperties>
  );
};

const StyledListProperties = styled.div<{ $typeShow: ShowType; $countTiles: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => (props.$typeShow === "tile" ? "repeat(auto-fill, minmax(360px, 1fr))" : "1fr")};
  gap: 2.083vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 30px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-template-columns: ${(props) => (props.$typeShow === "tile" ? "repeat(auto-fill, minmax(250px, 1fr))" : "1fr")};
    gap: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    grid-template-columns: 1fr;
    gap: 4.706vw;
  }
`;
