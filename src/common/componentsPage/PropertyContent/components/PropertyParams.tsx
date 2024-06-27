"use client";
import React, { FC } from "react";
import { PropertyContentBody } from "../PropertyContentPage";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import styled from "styled-components";
import { IPropertyCard } from "@/common/interfaces/property/property";
import type { PropertyParamsFields } from "@/common/interfaces/property/fields/paramsFields";
import { getDetailsProperty } from "@/common/helpers/other";
import { paramsPropertyLocalization } from "@/common/constants/detailsProperty";

interface IProps {
  property: IPropertyCard;
}

export const PropertyParams: FC<IProps> = ({ property }) => {
  return (
    <PropertyContentBody>
      <div>
        <DetailsTable>
          {getDetailsProperty<keyof PropertyParamsFields>(
            property,
            [
              { key: "balconies" },
              { key: "bathroom" },
              { key: "floor" },
              { key: "floorHouse" },
              { key: "generalArea", postfix: "m²" },
              { key: "livingArea", postfix: "m²" },
              { key: "numberRooms" },
              { key: "typeStructure" },
            ],
            paramsPropertyLocalization
          ).map(([name, value]) => (
            <li key={value}>
              <TextApp weight={700}>{name}</TextApp>
              <TextApp>{value}</TextApp>
            </li>
          ))}
        </DetailsTable>
      </div>
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
