"use client";
import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "@/assets/icons/filter-panel/search.svg";
import { NextImage } from "../NextImage";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { mainFilter } from "@/common/constants/filter";
import { useRouter, useSearchParams } from "next/navigation";
import { generateSearchParams } from "@/common/helpers/searchParams";
import { SelectSearch } from "./components/SelectSearch";
import { RangeSearch } from "./components/RangeSearch";

export const SearchProperty = () => {
  const { push } = useRouter();
  const initialSearchParams = useSearchParams();
  const [searchValues, setSearchValues] = useState({
    location: "",
    category: "",
    price: { priceFrom: "", priceTo: "" },
  });

  const navigateToSearchParams = (searchParams: string) => {
    push(`properties?${searchParams}`);
    console.log(searchParams);
  };

  function fetchingPropetiesWithFilters() {
    const {
      price: { priceFrom, priceTo },
      ...otherSearchValues
    } = searchValues;

    const searchParams = generateSearchParams(
      { ...otherSearchValues, priceFrom, priceTo },
      initialSearchParams.toString()
    );

    navigateToSearchParams(searchParams);
  }

  const changeSearchValues = (filter: typeof searchValues) => {
    setSearchValues(filter);
  };

  const handleSetFilterType = (filter: string) => {
    return (value: any) => {
      switch (filter) {
        case "location":
          changeSearchValues({ ...searchValues, location: value });
          break;
        case "category":
          changeSearchValues({ ...searchValues, category: value });
          break;
        case "price":
          changeSearchValues({ ...searchValues, price: value });
          break;
        default:
          changeSearchValues(searchValues);
      }
    };
  };

  return (
    <ContainerApp>
      <SearchPropertyContainer>
        <SearchPropertyRow>
          <SelectSearch
            props={mainFilter.location}
            value={searchValues.location}
            onChange={handleSetFilterType("location")}
          />
          <RangeSearch props={mainFilter.price} value={searchValues.price} onChange={handleSetFilterType("price")} />
          <SelectSearch
            props={mainFilter.category}
            value={searchValues.category}
            onChange={handleSetFilterType("category")}
          />
        </SearchPropertyRow>
        <Search onClick={fetchingPropetiesWithFilters}>
          <NextImage info={searchIcon} $width={24} $height={24} objectFit="contain" />
        </Search>
      </SearchPropertyContainer>
    </ContainerApp>
  );
};

const SearchPropertyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: -3.472vw 0 6.944vw;
  background-color: ${theme.colors.blue};
  width: max-content;
  position: relative;
  z-index: 2;

  border-radius: 0.694vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin: -50px 0 100px;
    border-radius: 10px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin: -4vw 0 4.17vw;

    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin: 0 0 6.51vw;
    width: 100%;
    flex-direction: column;

    border-radius: 0;
  }
`;

const SearchPropertyRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.media.tablet}px) {
    width: 100%;
  }

  @media (max-width: ${theme.media.phone}px) {
    flex-wrap: wrap;
  }
`;

const Search = styled.button`
  width: 3.889vw;
  height: 3.889vw;
  border-radius: 0.694vw;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 2.778vw 1.389vw;
  cursor: pointer;

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: 56px;
    height: 56px;
    margin-inline: 40px 20px;
    border-radius: 10px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 4.671vw;
    height: 4.671vw;
    margin-inline: 3.336vw 1.668vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 100%;
    height: 7.292vw;
    margin-inline: 0;
    border-radius: 0;
    border: 2px solid ${theme.colors.blue};
    border-top: none;
  }

  @media (max-width: ${theme.media.phone}px) {
    height: 13.176vw;
  }
`;
