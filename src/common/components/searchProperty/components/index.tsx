"use client";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import styled from "styled-components";
import { NextImage } from "../../NextImage";
import { IMainFilterParams } from "@/common/constants/filter";
import { ReactNode, useEffect, useRef, useState } from "react";
import { OptionType } from "@/common/UI/select/SelectApp";
import { StaticImageData } from "next/image";

interface ISearchProps {
  iconW: StaticImageData;
  value: string;
  title: string;
  children: ReactNode;
}

export const SearchItem = ({ iconW, value, title, children }: ISearchProps) => {
  const [isActiveSelect, setActiveSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setActiveSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSelectOptions);

    return () => {
      document.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  return (
    <SearchItemContainer ref={selectRef}>
      <SearchPropertyItem onClick={() => setActiveSelect((prevMode) => !prevMode)}>
        <div>
          <NextImage info={iconW} $width={24} $height={24} objectFit="contain" />
        </div>

        <div>
          <TextApp.Heading color={theme.colors.white} size={20}>
            {title}
          </TextApp.Heading>
          <InputSearch color={theme.colors.whiteOpacity(0.5)} value={value || "Выберите фильтр"} readOnly />
        </div>
      </SearchPropertyItem>
      <SearchItemValues className={isActiveSelect ? "open" : ""}>{children}</SearchItemValues>
    </SearchItemContainer>
  );
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

  &.open {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  li {
    display: flex;
    align-items: center;
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

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding: 20px;

    li {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      & > div {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.668vw;

    &:not(:last-child) {
      margin-bottom: 1.668vw;
    }

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

    &:not(:last-child) {
      margin-bottom: 2.604vw;
    }

    li {
      & > div {
        width: 6.51vw;
        height: 6.51vw;
        border-radius: 1.302vw;
        margin-right: 1.302vw;
      }
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    padding: 4.706vw;

    &:not(:last-child) {
      margin-bottom: 4.706vw;
    }

    li {
      & > div {
        width: 11.765vw;
        height: 11.765vw;
        border-radius: 2.353vw;
        margin-right: 2.353vw;
      }
    }
  }
`;

const SearchItemContainer = styled.div`
  position: relative;
  padding: 1.389vw 0 1.389vw 1.389vw;

  &:not(:last-child) > div:first-child {
    border-right: 1px solid ${theme.colors.whiteOpacity(0.1)};
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding: 20px 0 20px 20px;
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
  cursor: pointer;
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

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-inline: 36px;

    & > div:first-child {
      width: 60px;
      height: 60px;
      margin-right: 16px;
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

const InputSearch = styled.input`
  border: 0;
  font: inherit;
  background-color: transparent;
  font-size: 1.111vw;
  color: ${theme.colors.whiteOpacity(0.5)};
  pointer-events: none;

  @media (min-width: ${theme.media.desktopLarge}px) {
    font-size: 16px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    font-size: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    font-size: 2.083vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    font-size: 3.765vw;
  }
`;
