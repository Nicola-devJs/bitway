import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import { PropertyCard } from "../propertyCard/PropertyCard";

export type ShowType = "list" | "tile";

interface IProps {
  typeShow: ShowType;
  countTiles?: number;
}

export const ListProperties: FC<IProps> = ({ typeShow, countTiles = 3 }) => {
  return (
    <StyledListProperties $typeShow={typeShow} $countTiles={countTiles}>
      {Array(5)
        .fill(" ")
        .map((_, id) => (
          <PropertyCard key={id} typeShow={typeShow} id={id} />
        ))}
    </StyledListProperties>
  );
};

const StyledListProperties = styled.div<{ $typeShow: ShowType; $countTiles: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => (props.$typeShow === "tile" ? `repeat(${props.$countTiles}, 1fr)` : "1fr")};
  grid-gap: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    grid-template-columns: ${(props) => (props.$typeShow === "tile" ? `repeat(${props.$countTiles - 1}, 1fr)` : "1fr")};
    grid-gap: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-template-columns: 1fr;
  }
`;
