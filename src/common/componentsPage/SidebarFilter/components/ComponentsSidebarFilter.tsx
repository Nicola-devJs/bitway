import { theme } from "@/assets/theme/theme";
import { InputApp } from "@/common/UI/input/InputApp";
import { SelectApp } from "@/common/UI/select/SelectApp";
import { TextApp } from "@/common/styledComponents/Text";
import React, { useState } from "react";
import styled from "styled-components";

const PropertyType = () => {
  // TODO Добавить onChange в checkbox
  return (
    <ContainerContent>
      {/* <InputApp.Checkbox label="Buy" />
      <InputApp.Checkbox label="Rent" /> */}
    </ContainerContent>
  );
};

const Categories = () => {
  return (
    <ContainerContent>
      {/* <InputApp.Checkbox label="Apartment" />
      <InputApp.Checkbox label="Villa" />
      <InputApp.Checkbox label="Duplex" />
      <InputApp.Checkbox label="Houses" /> */}
    </ContainerContent>
  );
};

const Location = () => {
  return (
    <ContainerContent>
      <SelectApp
        label="Location"
        options={[
          { label: "Тирасполь", value: "tiras" },
          { label: "Парканы", value: "parcani" },
        ]}
      />
    </ContainerContent>
  );
};

const Rooms = () => {
  return (
    <ContainerContent>
      <SelectApp
        label="Rooms"
        options={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "Четырех комнатная", value: 4 },
        ]}
      />
    </ContainerContent>
  );
};

const PriceRange = () => {
  const priceMax = 199888;
  const [rangeState, setRangeState] = useState({ min: 0, max: priceMax });

  return (
    <ContainerContent>
      <InputApp.Range
        min={0}
        max={priceMax}
        priceGap={priceMax * 0.1}
        rangeState={rangeState}
        setRangeState={setRangeState}
      >
        <TextRange>
          Price: ${rangeState.min} - ${rangeState.max}
        </TextRange>
      </InputApp.Range>
    </ContainerContent>
  );
};

// TODO Чтобы в AccardionBody открытый селект, нормально отображался, необходимо в экспортируемый объект добавить поле zIndex: number

export default [
  { label: "Select location", content: <Location />, zIndex: 5 },
  { label: "Property type", content: <PropertyType /> },
  { label: "Categories", content: <Categories /> },
  { label: "Rooms", content: <Rooms />, zIndex: 5 },
  { label: "Price Range", content: <PriceRange /> },
];

const ContainerContent = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1.111vw;
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

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 2.083vw;
  }
`;
