import { theme } from "@/assets/theme/theme";
import { Accordion } from "@/common/components/accordion/Accordion";
import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { TypeTransaction, Location, Categories, PriceRange, Rooms } from "./ComponentsSidebarFilter";
import { useDebounce } from "@/common/hooks/debounce";
import { useSearchParams } from "next/navigation";

interface IProps {
  defaultValues: { location: string | null; price: { from: number; to: number }; category: string | null };
}

interface IFilterContainer {
  label: string;
  zIndex?: number;
  children: ReactNode;
}

const generateSearchParams = (filters: Record<string, any>) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    params.append(key, value);
  }

  console.log(params.getAll("typeTransaction"));
};

export const SidebarFilters: FC<IProps> = ({ defaultValues }) => {
  const fetchingPropetiesWithFiltersDebounce = useDebounce(fetchingPropetiesWithFilters);
  const [filterStorage, setFilterStorage] = useState({
    location: defaultValues.location || "",
    typeTransaction: [],
    category: defaultValues.category ? [defaultValues.category] : [],
    rooms: "",
    // price: defaultValues.price || { from: 0, to: 0 },
  });

  // TODO Доделать метод

  function fetchingPropetiesWithFilters(filters: typeof filterStorage) {
    generateSearchParams(filters);
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
        case "category":
          changeFilterStorage({ ...filterStorage, category: value });
          break;
        case "rooms":
          changeFilterStorage({ ...filterStorage, rooms: value });
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
      <FilterContainer label={"Выбрать локацию"} zIndex={5}>
        <Location value={filterStorage.location} onChange={handleSetFilterType("location")} />
      </FilterContainer>

      <FilterContainer label={"Сделка"}>
        <TypeTransaction value={filterStorage.typeTransaction} onChange={handleSetFilterType("typeTransaction")} />
      </FilterContainer>

      <FilterContainer label={"Категория"}>
        <Categories value={filterStorage.category} onChange={handleSetFilterType("category")} />
      </FilterContainer>

      <FilterContainer label={"Колличество комнат"} zIndex={5}>
        <Rooms value={filterStorage.rooms} onChange={handleSetFilterType("rooms")} />
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
