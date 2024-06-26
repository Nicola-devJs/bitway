import React, { useEffect, useState } from "react";
import { IDynamicFilter } from "../../interfaces";
import { optionsParking } from "@/common/constants/filter";
import { InputRange, SelectFilter } from "../ComponentsSidebarFilter";
import { FilterContainer } from "../FilterContainer";
import { useSearchParams } from "next/navigation";
import { parserRangeText } from "../../halpers";

interface IPlotFilter {
  generalArea: [string, string];
  sewerage: string;
  waterSupply: string;
  gas: string;
  electricity: string;
}

export const PlotFilter = ({ onChangeDynamicFilter }: IDynamicFilter) => {
  const initialSearchParams = useSearchParams();

  const [filters, onChangeFilters] = useState<IPlotFilter>({
    generalArea: [initialSearchParams.get("generalAreaFrom") || "", initialSearchParams.get("generalAreaTo") || ""],
    sewerage: initialSearchParams.get("sewerage") || "",
    waterSupply: initialSearchParams.get("waterSupply") || "",
    gas: initialSearchParams.get("gas") || "",
    electricity: initialSearchParams.get("electricity") || "",
  } as IPlotFilter);

  const handleSetFilterType = (filter: keyof IPlotFilter) => {
    return (value: any) => {
      switch (filter) {
        case "generalArea":
          onChangeFilters({ ...filters, generalArea: value });
          break;

        case "electricity":
          onChangeFilters({ ...filters, electricity: value });
          break;
        case "gas":
          onChangeFilters({ ...filters, gas: value });
          break;

        case "sewerage":
          onChangeFilters({ ...filters, sewerage: value });
          break;
        case "waterSupply":
          onChangeFilters({ ...filters, waterSupply: value });
          break;
        default:
          onChangeFilters(filters);
      }
    };
  };

  useEffect(() => {
    const {
      generalArea: [generalAreaFrom, generalAreaTo],

      ...otherfilters
    } = filters;

    onChangeDynamicFilter({ ...otherfilters, generalAreaFrom, generalAreaTo });
  }, [filters]);

  return (
    <>
      <FilterContainer label={"Диапазон общей площади"}>
        <InputRange
          value={filters.generalArea}
          onChange={handleSetFilterType("generalArea")}
          parserText={parserRangeText(filters.generalArea[0], filters.generalArea[1], "Общая площадь", "m²")}
        />
      </FilterContainer>

      <FilterContainer label={"Электричество"} zIndex={4}>
        <SelectFilter
          value={filters.electricity}
          onChange={handleSetFilterType("electricity")}
          options={optionsParking}
        />
      </FilterContainer>
      <FilterContainer label={"Газ"} zIndex={3}>
        <SelectFilter value={filters.gas} onChange={handleSetFilterType("gas")} options={optionsParking} />
      </FilterContainer>
      <FilterContainer label={"Водоснабжение"} zIndex={2}>
        <SelectFilter
          value={filters.waterSupply}
          onChange={handleSetFilterType("waterSupply")}
          options={optionsParking}
        />
      </FilterContainer>
      <FilterContainer label={"Канализация"} zIndex={1}>
        <SelectFilter value={filters.sewerage} onChange={handleSetFilterType("sewerage")} options={optionsParking} />
      </FilterContainer>
    </>
  );
};
