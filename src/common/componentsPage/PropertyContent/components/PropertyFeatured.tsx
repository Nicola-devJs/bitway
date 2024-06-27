import React, { FC } from "react";
import { PropertyContentBody } from "../PropertyContentPage";
import { IPropertyCard } from "@/common/interfaces/property/property";
import { TextApp } from "@/common/styledComponents/Text";
import { PropertyFeaturedFields } from "@/common/interfaces/property/fields/featuresFields";
import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { getDetailsProperty } from "@/common/helpers/other";
import { featuredPropertyLocalization } from "@/common/constants/detailsProperty";

interface IProps {
  property: IPropertyCard;
}

export const PropertyFeatured: FC<IProps> = ({ property }) => {
  return (
    <PropertyContentBody>
      <PropertyContentBody>
        <div>
          <DetailsTable>
            {getDetailsProperty<keyof PropertyFeaturedFields>(
              property,
              [
                { key: "additionally" },
                { key: "electricity" },
                { key: "elevators" },
                { key: "entrance" },
                { key: "gas" },
                { key: "heating" },
                { key: "parking" },
                { key: "renovation" },
                { key: "sewerage" },
                { key: "waterSupply" },
              ],
              featuredPropertyLocalization
            ).map(([name, value]) => (
              <li key={value}>
                <TextApp weight={700}>{name}</TextApp>
                <TextApp>{value}</TextApp>
              </li>
            ))}
          </DetailsTable>
        </div>
      </PropertyContentBody>
    </PropertyContentBody>
  );
};

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

  @media (min-width: ${theme.media.desktopLarge}px) {
    grid-row-gap: 16px;
    grid-column-gap: 152px;
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
