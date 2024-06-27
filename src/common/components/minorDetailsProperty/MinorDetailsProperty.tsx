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
import iconFloorWhite from "@/assets/icons/property-card/floor-w.svg";
import iconFloorBlack from "@/assets/icons/property-card/floor-b.svg";
import iconGeneralAreaWhite from "@/assets/icons/property-card/generalArea-w.svg";
import iconGeneralAreaBlack from "@/assets/icons/property-card/generalArea-b.svg";
import iconLivingAreaWhite from "@/assets/icons/property-card/livingArea-w.svg";
import iconLivingAreaBlack from "@/assets/icons/property-card/livingArea-b.svg";
import iconNumberRoomsWhite from "@/assets/icons/property-card/numberRooms-w.svg";
import iconNumberRoomsBlack from "@/assets/icons/property-card/numberRooms-b.svg";

interface IProps {
  property: IPropertyCard;
  color: "white" | "black";
}

export const MinorDetailsProperty = ({ property, color }: IProps) => {
  if (isApartmentProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconNumberRoomsWhite : iconNumberRoomsBlack} $width={24} />{" "}
          <span>{property.numberRooms}</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconGeneralAreaWhite : iconGeneralAreaBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconFloorWhite : iconFloorBlack} $width={24} />{" "}
          <span>{property.floor}</span>
        </div>
      </>
    );
  }
  if (isHouseProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconNumberRoomsWhite : iconNumberRoomsBlack} $width={24} />{" "}
          <span>{property.numberRooms}</span>
        </div>
        <div>
          <NextImage info={color === "white" ? iconGeneralAreaWhite : iconGeneralAreaBlack} $width={24} />{" "}
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
          <NextImage info={color === "white" ? iconGeneralAreaWhite : iconGeneralAreaBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
      </>
    );
  }
  if (isGarageProperty(property)) {
    return (
      <>
        <div>
          <NextImage info={color === "white" ? iconGeneralAreaWhite : iconGeneralAreaBlack} $width={24} />{" "}
          <span>{property.generalArea} m²</span>
        </div>
      </>
    );
  }
  return null;
};
