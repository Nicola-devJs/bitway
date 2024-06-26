import { theme } from "@/assets/theme/theme";
import { Accordion } from "@/common/components/accordion/Accordion";
import { FC, ReactNode, useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";
import { SelectFilter, CheckboxesFilter, InputRange } from "./ComponentsSidebarFilter";
import {
  optionsCategory,
  optionsRoom,
  optionsLocation,
  optionsPropertyType,
  optionsTransactionType,
} from "@/common/constants/filter";
import { useDebounce } from "@/common/hooks/debounce";
import { useSearchParams } from "next/navigation";
import { generateSearchParams } from "../../../helpers/searchParams";
import { DynamicFilters } from "./dynamicFilters/DynamicFilters";
import { FilterContainer } from "./FilterContainer";
import { parserRangeText } from "../halpers";

interface IProps {
  setSearchParams: (searchParams: string) => void;
}

export const SidebarFilters: FC<IProps> = ({ setSearchParams }) => {
  const initialSearchParams = useSearchParams();
  const setSearchParamsDebounce = useDebounce(setSearchParams);
  const [filterStorage, setFilterStorage] = useState({
    location: initialSearchParams.getAll("location"),
    typeTransaction: initialSearchParams.getAll("typeTransaction"),
    typeProperty: initialSearchParams.getAll("typeProperty"),
    category: initialSearchParams.get("category") || "",
    price: [initialSearchParams.get("priceFrom") || "", initialSearchParams.get("priceTo") || ""] as [string, string],
  });

  function fetchingPropetiesWithFilters(filters: Record<string, string | string[]>) {
    const searchParams = generateSearchParams(filters, initialSearchParams.toString());

    setSearchParamsDebounce(searchParams);
  }

  const fetchingPropetiesWithDynamicFilters = (dynamicFilter: Record<string, string | string[]>) => {
    const updatedDynamicFilter = { ...dynamicFilter, category: filterStorage.category };
    const searchParams = generateSearchParams(updatedDynamicFilter, initialSearchParams.toString());

    setSearchParamsDebounce(searchParams);
  };

  useEffect(() => {
    const {
      price: [priceFrom, priceTo],
      ...otherfilterStorage
    } = filterStorage;

    fetchingPropetiesWithFilters({ ...otherfilterStorage, priceFrom, priceTo });
  }, [filterStorage]);

  const handleSetFilterType = (filter: keyof typeof filterStorage) => {
    return (value: any) => {
      switch (filter) {
        case "location":
          setFilterStorage({ ...filterStorage, location: value });
          break;
        case "typeTransaction":
          setFilterStorage({ ...filterStorage, typeTransaction: value });
          break;
        case "typeProperty":
          setFilterStorage({ ...filterStorage, typeProperty: value });
          break;
        case "category":
          setFilterStorage({ ...filterStorage, category: value });
          break;
        case "price":
          setFilterStorage({ ...filterStorage, price: value });
          break;
        default:
          setFilterStorage(filterStorage);
      }
    };
  };

  return (
    <>
      <FilterContainer label={"Выбрать локацию"} zIndex={7}>
        <CheckboxesFilter
          value={filterStorage.location}
          onChange={handleSetFilterType("location")}
          options={optionsLocation}
        />
      </FilterContainer>

      <FilterContainer label={"Сделка"}>
        <CheckboxesFilter
          value={filterStorage.typeTransaction}
          onChange={handleSetFilterType("typeTransaction")}
          options={optionsTransactionType}
        />
      </FilterContainer>

      <FilterContainer label={"Недвижимость"}>
        <CheckboxesFilter
          value={filterStorage.typeProperty}
          onChange={handleSetFilterType("typeProperty")}
          options={optionsPropertyType}
        />
      </FilterContainer>

      <FilterContainer label={"Ценовой диапазон"}>
        <InputRange
          value={filterStorage.price}
          onChange={handleSetFilterType("price")}
          parserText={parserRangeText(filterStorage.price[0], filterStorage.price[1], "Стоимость", "₽")}
        />
      </FilterContainer>

      <FilterContainer label={"Категория"} zIndex={6}>
        <SelectFilter
          value={filterStorage.category}
          onChange={handleSetFilterType("category")}
          options={optionsCategory}
        />
      </FilterContainer>

      <DynamicFilters category={filterStorage.category} onChangeDynamicFilter={fetchingPropetiesWithDynamicFilters} />
    </>
  );
};
