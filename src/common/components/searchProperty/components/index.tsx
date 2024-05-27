"use client";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import { StaticImageData } from "next/image";
import styled from "styled-components";
import { NextImage } from "../../NextImage";
import { mainFilter } from "@/common/constants/mockMainFilter";
import { FC } from "react";

interface IProps {
  title: string;
  icon_w: StaticImageData;
  icon_b: StaticImageData;
  value: string;
  list: string[];
  onChangeHandler: (payload: string) => string;
}

const SearchItem: FC<IProps> = ({ icon_b, icon_w, list, title, value, onChangeHandler }) => {
  return (
    <SearchItemContainer key={title}>
      <SearchPropertyItem>
        <div>
          <NextImage info={icon_w} $width={24} $height={24} objectFit="contain" />
        </div>

        <div>
          <TextApp.Heading color={theme.colors.white} size={20}>
            {title}
          </TextApp.Heading>
          <TextApp color={theme.colors.whiteOpacity(0.5)}>{value}</TextApp>
        </div>
      </SearchPropertyItem>
      <SearchItemValues>
        {list.map((item) => (
          <li key={item} onClick={() => onChangeHandler(item)}>
            <div>
              <NextImage info={icon_b} $width={24} $height={24} objectFit="contain" />
            </div>
            {item}
          </li>
        ))}
      </SearchItemValues>
    </SearchItemContainer>
  );
};

export const LocationSearch = () => {
  // return <SearchItem {...mainFilter.location}  />;
  return null;
};

export const PriceSearch = () => {
  // return <SearchItem {...mainFilter.price} value={priceRange} onChangeHandler={setPriceRange} />;
  return null;
};

export const TypePropertySearch = () => {
  // return <SearchItem {...mainFilter.typeProperty} value={typeProperty} onChangeHandler={setTypeProperty} />;
  return null;
};

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
    flex: 1 1 auto;
    padding: 2.604vw 0 2.604vw 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    padding: 4.706vw 0 4.706vw 4.706vw;
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
    & > div:first-child {
      width: 5.004vw;
      height: 5.004vw;
      margin-right: 1.334vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & > div:first-child {
      width: 7.813vw;
      height: 7.813vw;
      margin-right: 2.083vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & > div:first-child {
      width: 14.118vw;
      height: 14.118vw;
      margin-right: 3.765vw;
    }
  }
`;
