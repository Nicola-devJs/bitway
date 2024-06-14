import { theme } from "@/assets/theme/theme";
import { InputApp } from "@/common/UI/input/InputApp";
import { SelectApp } from "@/common/UI/select/SelectApp";
import { categoryProperty, listFloor, listLocation } from "@/common/constants/mockMainFilter";
import { TextApp } from "@/common/styledComponents/Text";
import { ReadonlyURLSearchParams } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

type SearchParamsType = { searchParams?: ReadonlyURLSearchParams };

const PropertyType = ({ searchParams }: SearchParamsType) => {
  return (
    <ContainerContent>
      <InputApp.Checkbox label="Продажа" onChange={(data) => console.log(data)} />
      <InputApp.Checkbox label="Аренда" onChange={(data) => console.log(data)} />
    </ContainerContent>
  );
};

const Categories = ({ searchParams }: SearchParamsType) => {
  const value = searchParams?.get("typeProperty");

  return (
    <ContainerContent>
      {categoryProperty.map((category) => (
        <InputApp.Checkbox
          label={category.value}
          key={category.value}
          checked={category.value === value}
          onChange={(data) => console.log(data)}
        />
      ))}
    </ContainerContent>
  );
};

const Location = ({ searchParams }: SearchParamsType) => {
  const value = searchParams?.get("location");

  return (
    <ContainerContent>
      <SelectApp
        label="Локация"
        options={listLocation}
        changeHandler={(locale) => console.log(locale)}
        value={value || ""}
      />
    </ContainerContent>
  );
};

const Rooms = ({ searchParams }: SearchParamsType) => {
  return (
    <ContainerContent>
      <SelectApp label="Комнаты" options={listFloor} changeHandler={(locale) => console.log(locale)} />
    </ContainerContent>
  );
};

const PriceRange = ({ searchParams }: SearchParamsType) => {
  const value = searchParams?.get("price");
  const rangeData: { from: number; to: number } = JSON.parse(value || "{}");
  const priceMax = 100;
  const [rangeState, setRangeState] = useState({ min: rangeData.from, max: rangeData.to });

  return (
    <ContainerContent>
      <InputApp.Range
        min={rangeData.from}
        max={rangeData.to}
        priceGap={rangeData.to * 0.1}
        rangeState={rangeState}
        setRangeState={setRangeState}
      >
        <TextRange>
          Стоимость: ${rangeState.min} - ${rangeState.max}
        </TextRange>
      </InputApp.Range>
    </ContainerContent>
  );
};

// TODO Чтобы в AccardionBody открытый селект, нормально отображался, необходимо в экспортируемый объект добавить поле zIndex: number

export default [
  { label: "Выбрать локацию", content: <Location />, zIndex: 5 },
  { label: "Тип недвижимости", content: <PropertyType /> },
  { label: "Категория", content: <Categories /> },
  { label: "Колличество комнат", content: <Rooms />, zIndex: 5 },
  { label: "Ценовой диапазон", content: <PriceRange /> },
];

const ContainerContent = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1.111vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    & > *:not(:last-child) {
      margin-bottom: 1.334vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & > *:not(:last-child) {
      margin-bottom: 2.083vw;
    }
  }
`;

const TextRange = styled(TextApp)`
  margin-bottom: 1.111vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-bottom: 16px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 2.083vw;
  }
`;
