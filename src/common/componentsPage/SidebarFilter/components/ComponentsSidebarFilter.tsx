import { theme } from "@/assets/theme/theme";
import { InputApp } from "@/common/UI/input/InputApp";
import { SelectApp } from "@/common/UI/select/SelectApp";
import { categoryProperty, listFloor, listLocation } from "@/common/constants/mockMainFilter";
import { TextApp } from "@/common/styledComponents/Text";
import React, { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "@/common/hooks/debounce";

interface IProps<T> {
  value: T;
  onChange: (value: T) => void;
}

const value1 = "Продажа";
const value2 = "Аренда";

export const TypeTransaction = ({ value, onChange }: IProps<Array<string>>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.name;

    if (value.includes(event.target.name)) {
      onChange(value.filter((val) => val !== newValue));
    } else {
      onChange([...value, newValue]);
    }
  };

  return (
    <ContainerContent>
      <InputApp.Checkbox label={value1} name={value1} onChange={handleChange} checked={value.includes(value1)} />
      <InputApp.Checkbox label={value2} name={value2} onChange={handleChange} checked={value.includes(value2)} />
    </ContainerContent>
  );
};

export const Categories = ({ value, onChange }: IProps<Array<string>>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.name;

    if (value.includes(event.target.name)) {
      onChange(value.filter((val) => val !== newValue));
    } else {
      onChange([...value, newValue]);
    }
  };

  return (
    <ContainerContent>
      {categoryProperty.map((category) => (
        <InputApp.Checkbox
          label={category.value}
          name={category.value}
          key={category.value}
          checked={value.includes(category.value)}
          onChange={handleChange}
        />
      ))}
    </ContainerContent>
  );
};

export const Location = ({ value, onChange }: IProps<string>) => {
  return (
    <ContainerContent>
      <SelectApp label="Локация" options={listLocation} changeHandler={onChange} value={value} />
    </ContainerContent>
  );
};

export const Rooms = ({ value, onChange }: IProps<string>) => {
  return (
    <ContainerContent>
      <SelectApp label="Комнаты" options={listFloor} changeHandler={onChange} value={value} />
    </ContainerContent>
  );
};

export const PriceRange = ({ value, onChange }: IProps<{ from: number; to: number }>) => {
  const handleSetRangeState = (state: { min: number; max: number }) => {
    onChange({ from: state.min, to: state.max });
  };

  return (
    <ContainerContent>
      <InputApp.Range
        min={value.from}
        max={value.to}
        priceGap={value.to * 0.1}
        rangeState={{ min: value.from, max: value.to }}
        setRangeState={handleSetRangeState}
      >
        <TextRange>
          Стоимость: ${value.from} - ${value.to}
        </TextRange>
      </InputApp.Range>
    </ContainerContent>
  );
};

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
