import { optionsCategory } from "@/common/constants/filter";
import React from "react";
import { IDynamicFilter } from "../../interfaces";
import { ApartamentFilter } from "./ApartamentFilter";
import { HouseFilter } from "./HouseFilter";
import { GarageFilter } from "./GarageFilter";
import { PlotFilter } from "./PlotFilter";

interface IProps extends IDynamicFilter {
  category: string;
}

type CategoryType = "Дом" | "Квартира" | "Гараж" | "Участок";

export const DynamicFilters = ({ category, onChangeDynamicFilter }: IProps) => {
  switch (category as CategoryType) {
    case "Квартира":
      return <ApartamentFilter onChangeDynamicFilter={onChangeDynamicFilter} />;
    case "Дом":
      return <HouseFilter onChangeDynamicFilter={onChangeDynamicFilter} />;
    case "Гараж":
      return <GarageFilter onChangeDynamicFilter={onChangeDynamicFilter} />;
    case "Участок":
      return <PlotFilter onChangeDynamicFilter={onChangeDynamicFilter} />;
    default:
      return <></>;
  }
};
