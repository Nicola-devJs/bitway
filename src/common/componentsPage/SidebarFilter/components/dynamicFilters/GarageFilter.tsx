import React, { useEffect, useState } from "react";
import { IDynamicFilter } from "../../interfaces";
import { optionsParking } from "@/common/constants/filter";
import { InputRange, SelectFilter } from "../ComponentsSidebarFilter";
import { FilterContainer } from "../FilterContainer";
import { useSearchParams } from "next/navigation";
import { parserRangeText } from "../../halpers";

interface IGarageFilter {
  generalArea: [string, string];
  waterSupply: string;
  electricity: string;
}

export const GarageFilter = ({ onChangeDynamicFilter }: IDynamicFilter) => {
  const initialSearchParams = useSearchParams();

  const [filters, onChangeFilters] = useState<IGarageFilter>({
    generalArea: [initialSearchParams.get("generalAreaFrom") || "", initialSearchParams.get("generalAreaTo") || ""],
    waterSupply: initialSearchParams.get("waterSupply") || "",
    electricity: initialSearchParams.get("electricity") || "",
  } as IGarageFilter);

  const handleSetFilterType = (filter: keyof IGarageFilter) => {
    return (value: any) => {
      switch (filter) {
        case "generalArea":
          onChangeFilters({ ...filters, generalArea: value });
          break;
        case "electricity":
          onChangeFilters({ ...filters, electricity: value });
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

      <FilterContainer label={"Водоснабжение"} zIndex={2}>
        <SelectFilter
          value={filters.waterSupply}
          onChange={handleSetFilterType("waterSupply")}
          options={optionsParking}
        />
      </FilterContainer>
    </>
  );
};
