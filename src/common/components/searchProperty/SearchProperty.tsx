"use client";
import { TextApp } from "@/common/styledComponents/Text";
import React, { useEffect } from "react";
import styled from "styled-components";
import searchIcon from "@/assets/icons/filter-panel/search.svg";
import { NextImage } from "../NextImage";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { LocationSearch, PriceSearch, TypePropertySearch } from "./components";
import Link from "next/link";

export const SearchProperty = () => {
  return (
    <ContainerApp>
      <SearchPropertyContainer>
        <SearchPropertyRow>
          <LocationSearch />
          <PriceSearch />
          <TypePropertySearch />
        </SearchPropertyRow>
        <Search href="/properties">
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

const Search = styled(Link)`
  width: 3.889vw;
  height: 3.889vw;
  border-radius: 0.694vw;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 2.778vw 1.389vw;
  cursor: pointer;

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
