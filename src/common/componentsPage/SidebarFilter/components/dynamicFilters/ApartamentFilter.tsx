import React, { useEffect, useState } from "react";
import { CheckboxesFilter, InputRange, SelectFilter } from "../ComponentsSidebarFilter";
import { FilterContainer } from "../FilterContainer";
import { IDynamicFilter } from "../../interfaces";
import {
  optionsFloorApartament,
  optionsParking,
  optionsRenovation,
  optionsRoom,
  optionsTypeStructure,
} from "@/common/constants/filter";
import { useSearchParams } from "next/navigation";
import { parserRangeText } from "../../halpers";

interface IApartamentFilter {
  typeStructure: string[];
  generalArea: [string, string];
  floorHouse: string[];
  numberRooms: string[];
  renovation: string[];
  parking: string;
}

export const ApartamentFilter = ({ onChangeDynamicFilter }: IDynamicFilter) => {
  const initialSearchParams = useSearchParams();

  const [filters, onChangeFilters] = useState<IApartamentFilter>({
    floorHouse: initialSearchParams.getAll("floorHouse"),
    generalArea: [initialSearchParams.get("generalAreaFrom") || "", initialSearchParams.get("generalAreaTo") || ""],
    numberRooms: initialSearchParams.getAll("numberRooms"),
    parking: initialSearchParams.get("parking") || "",
    renovation: initialSearchParams.getAll("renovation"),
    typeStructure: initialSearchParams.getAll("typeStructure"),
  } as IApartamentFilter);

  const handleSetFilterType = (filter: keyof IApartamentFilter) => {
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
        case "renovation":
          onChangeFilters({ ...filters, renovation: value });
          break;
        case "parking":
          onChangeFilters({ ...filters, parking: value });
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
      <FilterContainer label={"Этажность дома"}>
        <CheckboxesFilter
          value={filters.floorHouse}
          onChange={handleSetFilterType("floorHouse")}
          options={optionsFloorApartament}
        />
      </FilterContainer>
      <FilterContainer label={"Кол-во комнат"}>
        <CheckboxesFilter
          value={filters.numberRooms}
          onChange={handleSetFilterType("numberRooms")}
          options={optionsRoom}
        />
      </FilterContainer>
      <FilterContainer label={"Парковка"} zIndex={1}>
        <SelectFilter value={filters.parking} onChange={handleSetFilterType("parking")} options={optionsParking} />
      </FilterContainer>
      <FilterContainer label={"Ремонт"}>
        <CheckboxesFilter
          value={filters.renovation}
          onChange={handleSetFilterType("renovation")}
          options={optionsRenovation}
        />
      </FilterContainer>
    </>
  );
};
