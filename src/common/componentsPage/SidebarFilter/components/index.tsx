import { theme } from "@/assets/theme/theme";
import { Accordion } from "@/common/components/accordion/Accordion";
import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { SelectFilter, CheckboxesFilter } from "./ComponentsSidebarFilter";
import {
  categoryProperty,
  optionsRoom,
  optionLocation,
  optionsPropertyType,
  optionsTransactionType,
} from "@/common/constants/filter";
import { useDebounce } from "@/common/hooks/debounce";
import { useSearchParams } from "next/navigation";
import { generateSearchParams } from "../../../helpers/searchParams";

interface IProps {
  setSearchParams: (searchParams: string) => void;
}

interface IFilterContainer {
  label: string;
  zIndex?: number;
  children: ReactNode;
}

export const SidebarFilters: FC<IProps> = ({ setSearchParams }) => {
  const initialSearchParams = useSearchParams();

  const fetchingPropetiesWithFiltersDebounce = useDebounce(fetchingPropetiesWithFilters);
  const [filterStorage, setFilterStorage] = useState({
    location: initialSearchParams.getAll("location"),
    typeTransaction: initialSearchParams.getAll("typeTransaction"),
    typeProperty: initialSearchParams.getAll("typeProperty"),
    category: initialSearchParams.get("category") || "",
    // price: defaultValues.price || { from: 0, to: 0 },
  });

  function fetchingPropetiesWithFilters(filters: typeof filterStorage) {
    const searchParams = generateSearchParams(filters, initialSearchParams.toString());

    setSearchParams(searchParams);
  }

  const changeFilterStorage = (filter: typeof filterStorage) => {
    setFilterStorage(filter);
  };

  useEffect(() => {
    fetchingPropetiesWithFiltersDebounce(filterStorage);
  }, [filterStorage]);

  const handleSetFilterType = (filter: string) => {
    return (value: any) => {
      switch (filter) {
        case "location":
          changeFilterStorage({ ...filterStorage, location: value });
          break;
        case "typeTransaction":
          changeFilterStorage({ ...filterStorage, typeTransaction: value });
          break;
        case "typeProperty":
          changeFilterStorage({ ...filterStorage, typeProperty: value });
          break;
        case "category":
          changeFilterStorage({ ...filterStorage, category: value });
          break;
        // case "price":
        //   changeFilterStorage({ ...filterStorage, price: value });
        //   break;
        default:
          changeFilterStorage(filterStorage);
      }
    };
  };

  return (
    <>
      <FilterContainer label={"Выбрать локацию"} zIndex={7}>
        <CheckboxesFilter
          value={filterStorage.location}
          onChange={handleSetFilterType("location")}
          options={optionLocation}
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

      <FilterContainer label={"Категория"} zIndex={6}>
        <SelectFilter
          value={filterStorage.category}
          onChange={handleSetFilterType("category")}
          options={categoryProperty}
        />
      </FilterContainer>

      {/* <FilterContainer label={"Ценовой диапазон"}>
        <PriceRange value={filterStorage.price} onChange={handleSetFilterType("price")} />
      </FilterContainer> */}
    </>
  );
};

const FilterContainer: FC<IFilterContainer> = ({ children, label, zIndex }) => {
  return (
    <ContentContainer>
      <Accordion label={label} zIndex={zIndex} initialView={true}>
        {children}
      </Accordion>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  padding-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.1)};

  margin-bottom: 1.389vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.668vw;
    margin-bottom: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 2.604vw;
    margin-bottom: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-bottom: 4.706vw;
    margin-bottom: 4.706vw;
  }
`;
