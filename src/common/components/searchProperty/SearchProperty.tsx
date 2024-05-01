"use client";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";
import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";
import searchIcon from "@/assets/icons/filter-panel/search.svg";
import { NextImage } from "../NextImage";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { mainFilter } from "@/common/constants/mockMainFilter";

export const SearchProperty = () => {
  return (
    <ContainerApp>
      <SearchPropertyContainer>
        <SearchPropertyRow>
          {mainFilter.map((typeFilter) => (
            <SearchItemContainer key={typeFilter.title}>
              <SearchPropertyItem>
                <div>
                  <NextImage info={typeFilter.icon_w} $width={24} $height={24} objectFit="contain" />
                </div>

                <div>
                  <TextApp.Heading color={theme.colors.white} size={20}>
                    {typeFilter.title}
                  </TextApp.Heading>
                  <TextApp color={theme.colors.whiteOpacity(0.5)}>{typeFilter.value}</TextApp>
                </div>
              </SearchPropertyItem>
              <SearchItemValues>
                {typeFilter.list.map((item) => (
                  <li key={item}>
                    <div>
                      <NextImage info={typeFilter.icon_b} $width={24} $height={24} objectFit="contain" />
                    </div>
                    {item}
                  </li>
                ))}
              </SearchItemValues>
            </SearchItemContainer>
          ))}
        </SearchPropertyRow>
        <Search>
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
    margin: 4vw 0 6.51vw;
    width: 100%;

    border-radius: 1.302vw;
  }
`;

const SearchPropertyRow = styled.div`
  display: flex;
  align-items: center;
`;

const SearchItemValues = styled.ul`
  position: absolute;
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  background-color: ${theme.colors.white};
  padding: 1.389vw;
  box-shadow: 1px 2px 4px ${theme.colors.grayOpacity(0.2)}, -2px -4px 4px ${theme.colors.grayOpacity(0.2)};
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  li {
    display: flex;
    align-items: center;
    padding: 0.903vw;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 1.389vw;
    }

    &:hover {
      background-color: ${theme.colors.grayOpacity(0.2)};
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.472vw;
      height: 3.472vw;
      background-color: ${theme.colors.grayOpacity(0.05)};
      border-radius: 0.694vw;
      margin-right: 0.694vw;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.668vw;

    li {
      & > div {
        width: 4.17vw;
        height: 4.17vw;
        border-radius: 0.834vw;
        margin-right: 0.834vw;
      }
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.604vw;

    li {
      & > div {
        width: 6.51vw;
        height: 6.51vw;
        border-radius: 1.302vw;
        margin-right: 1.302vw;
      }
    }
  }
`;

const SearchItemContainer = styled.div`
  position: relative;
  padding: 1.389vw 0 1.389vw 1.389vw;

  &:hover ${SearchItemValues} {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  &:not(:last-child) > div:first-child {
    border-right: 1px solid ${theme.colors.whiteOpacity(0.1)};
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.668vw 0 1.668vw 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.604vw 0 2.604vw 2.604vw;
  }
`;

const SearchPropertyItem = styled.div`
  display: flex;

  padding-inline: 2.5vw;

  &:first-child {
    padding-left: 0vw;
  }
  &:last-child {
    padding-right: 0vw;
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
  margin-inline: 2.778vw 1.389vw;
  cursor: pointer;

  @media (max-width: ${theme.media.desktop}px) {
    width: 4.671vw;
    height: 4.671vw;
    margin-inline: 3.336vw 1.668vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 7.292vw;
    height: 7.292vw;
    margin-inline: 2.604vw;
    border-radius: 1.302vw;
  }
`;
