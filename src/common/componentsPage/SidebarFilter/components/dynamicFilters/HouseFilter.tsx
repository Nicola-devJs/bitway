import React, { useEffect, useState } from "react";
import { IDynamicFilter } from "../../interfaces";
import {
  optionsTypeStructure,
  optionsFloorHouse,
  optionsRoom,
  optionsParking,
  optionsRenovation,
  optionsHeating,
} from "@/common/constants/filter";
import { CheckboxesFilter, InputRange, SelectFilter } from "../ComponentsSidebarFilter";
import { FilterContainer } from "../FilterContainer";
import { useSearchParams } from "next/navigation";
import { parserRangeText } from "../../halpers";

interface IHouseFilter {
  typeStructure: string[];
  generalArea: [string, string];
  livingArea: [string, string];
  numberRooms: string[];
  floorHouse: string[];
  sewerage: string;
  waterSupply: string;
  gas: string;
  heating: string[];
  electricity: string;
}

export const HouseFilter = ({ onChangeDynamicFilter }: IDynamicFilter) => {
  const initialSearchParams = useSearchParams();

  const [filters, onChangeFilters] = useState<IHouseFilter>({
    floorHouse: initialSearchParams.getAll("floorHouse"),
    generalArea: [initialSearchParams.get("generalAreaFrom") || "", initialSearchParams.get("generalAreaTo") || ""],
    livingArea: [initialSearchParams.get("livingAreaFrom") || "", initialSearchParams.get("livingAreaTo") || ""],
    numberRooms: initialSearchParams.getAll("numberRooms"),
    typeStructure: initialSearchParams.getAll("typeStructure"),
    sewerage: initialSearchParams.get("sewerage") || "",
    waterSupply: initialSearchParams.get("waterSupply") || "",
    gas: initialSearchParams.get("gas") || "",
    electricity: initialSearchParams.get("electricity") || "",
    heating: initialSearchParams.getAll("heating"),
  } as IHouseFilter);

  const handleSetFilterType = (filter: keyof IHouseFilter) => {
    return (value: any) => {
      switch (filter) {
        case "typeStructure":
          onChangeFilters({ ...filters, typeStructure: value });
          break;
        case "generalArea":
          onChangeFilters({ ...filters, generalArea: value });
          break;
        case "floorHouse":
          onChangeFilters({ ...filters, floorHouse: value });
          break;
        case "numberRooms":
          onChangeFilters({ ...filters, numberRooms: value });
          break;
        case "electricity":
          onChangeFilters({ ...filters, electricity: value });
          break;
        case "gas":
          onChangeFilters({ ...filters, gas: value });
          break;
        case "heating":
          onChangeFilters({ ...filters, heating: value });
          break;
        case "livingArea":
          onChangeFilters({ ...filters, livingArea: value });
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
      livingArea: [livingAreaFrom, livingAreaTo],
      ...otherfilters
    } = filters;

    onChangeDynamicFilter({ ...otherfilters, generalAreaFrom, generalAreaTo, livingAreaFrom, livingAreaTo });
  }, [filters]);

  return (
    <>
      <FilterContainer label={"Тип структуры"}>
        <CheckboxesFilter
          value={filters.typeStructure}
          onChange={handleSetFilterType("typeStructure")}
          options={optionsTypeStructure}
        />
      </FilterContainer>
      <FilterContainer label={"Диапазон общей площади"}>
        <InputRange
          value={filters.generalArea}
          onChange={handleSetFilterType("generalArea")}
          parserText={parserRangeText(filters.generalArea[0], filters.generalArea[1], "Общая площадь", "m²")}
        />
      </FilterContainer>
      <FilterContainer label={"Диапазон жилой площади"}>
        <InputRange
          value={filters.livingArea}
          onChange={handleSetFilterType("livingArea")}
          parserText={parserRangeText(filters.livingArea[0], filters.livingArea[1], "Жилая площадь", "m²")}
        />
      </FilterContainer>
      <FilterContainer label={"Этажность дома"}>
        <CheckboxesFilter
          value={filters.floorHouse}
          onChange={handleSetFilterType("floorHouse")}
          options={optionsFloorHouse}
        />
      </FilterContainer>
      <FilterContainer label={"Кол-во комнат"}>
        <CheckboxesFilter
          value={filters.numberRooms}
          onChange={handleSetFilterType("numberRooms")}
          options={optionsRoom}
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
      <FilterContainer label={"Отопление"}>
        <CheckboxesFilter value={filters.heating} onChange={handleSetFilterType("heating")} options={optionsHeating} />
      </FilterContainer>
    </>
  );
};
