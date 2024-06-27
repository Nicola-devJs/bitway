import { IPropertyCard } from "@/common/interfaces/property/property";
import React from "react";
import { NextImage } from "../NextImage";
import {
  isApartmentProperty,
  isHouseProperty,
  isGarageProperty,
  isPlotProperty,
} from "@/common/interfaces/property/typeGuards";

import iconBathWhite from "@/assets/icons/property-card/bath-w.svg";
import iconBathBlack from "@/assets/icons/property-card/bath-b.svg";

interface IProps {
  property: IPropertyCard;
  color: "white" | "black";
}

export const MinorDetailsProperty = ({ property, color }: IProps) => {
  if (isApartmentProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.numberRooms}</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.floor}</span>
        </div>
      </>
    );
  }
  if (isHouseProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.numberRooms}</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.bathroom}</span>
        </div>
      </>
    );
  }
  if (isPlotProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
      </>
    );
  }
  if (isGarageProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconBathWhite : iconBathBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
      </>
    );
  }
  return null;
};
