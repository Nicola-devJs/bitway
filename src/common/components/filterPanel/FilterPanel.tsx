"use client";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";
import locationIcon from "@/assets/icons/filter-panel/location.svg";
import dollarIcon from "@/assets/icons/filter-panel/coin-dollar.svg";
import homeIcon from "@/assets/icons/filter-panel/home.svg";
import searchIcon from "@/assets/icons/filter-panel/search.svg";
import { NextImage } from "../NextImage";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";

export const FilterPanel = () => {
  return (
    <ContainerApp>
      <FilterPanelContainer>
        <FilterPanelRow>
          <FilterPanelItem>
            <div>
              <NextImage info={locationIcon} $width={24} objectFit="contain" />
            </div>

            <div>
              <TextApp.Heading color={theme.colors.white} size={20}>
                Location
              </TextApp.Heading>
              <TextApp color={theme.colors.whiteOpacity(0.5)}>Tiraspol, PMR</TextApp>
            </div>
          </FilterPanelItem>
          <FilterPanelItem>
            <div>
              <NextImage info={dollarIcon} $width={24} objectFit="contain" />
            </div>

            <div>
              <TextApp.Heading color={theme.colors.white} size={20}>
                Price
              </TextApp.Heading>
              <TextApp color={theme.colors.whiteOpacity(0.5)}>$1000 - 10 000</TextApp>
            </div>
          </FilterPanelItem>
          <FilterPanelItem>
            <div>
              <NextImage info={homeIcon} $width={24} objectFit="contain" />
            </div>

            <div>
              <TextApp.Heading color={theme.colors.white} size={20}>
                Type of property
              </TextApp.Heading>
              <TextApp color={theme.colors.whiteOpacity(0.5)}>Apartment</TextApp>
            </div>
          </FilterPanelItem>
        </FilterPanelRow>
        <Search>
          <NextImage info={searchIcon} $width={24} objectFit="contain" />
        </Search>
      </FilterPanelContainer>
    </ContainerApp>
  );
};

const FilterPanelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: -3.472vw 0 6.944vw;
  background-color: ${theme.colors.blue};
  width: max-content;
  position: relative;
  z-index: 2;
  padding: 1.389vw;
  border-radius: 0.694vw;

  @media (max-width: ${theme.media.desktop}px) {
    margin: -4vw 0 4.17vw;
    padding: 1.668vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin: 4vw 0 6.51vw;
    width: 100%;
    padding: 2.604vw;
    border-radius: 1.302vw;
  }
`;

const FilterPanelRow = styled.div`
  display: flex;
  align-items: center;
`;

const FilterPanelItem = styled.div`
  display: flex;

  padding-inline: 2.5vw;

  &:first-child {
    padding-left: 0vw;
  }
  &:last-child {
    padding-right: 0vw;
  }

  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.whiteOpacity(0.1)};
  }

  & > div:first-child {
    width: 4.167vw;
    height: 4.167vw;
    border-radius: 50%;
    background-color: ${theme.colors.whiteOpacity(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.111vw;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    h5 {
      flex: 1 1 auto;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-inline: 3.003vw;

    & > div:first-child {
      width: 5.004vw;
      height: 5.004vw;
      margin-right: 1.334vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-inline: 1.688vw;

    & > div:first-child {
      width: 7.813vw;
      height: 7.813vw;
      margin-right: 2.083vw;
    }

    & > div:last-child {
      h5 {
        font-size: 2.2vw;
      }

      p {
        font-size: 1.9vw;
      }
    }
  }
`;

const Search = styled.div`
  width: 3.889vw; // 56
  height: 3.889vw;
  border-radius: 0.694vw; // 10
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.778vw;
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    width: 4.671vw;
    height: 4.671vw;
    margin-left: 3.336vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 7.292vw;
    height: 7.292vw;
    margin-left: 5.208vw;
    border-radius: 1.302vw;
  }
`;
