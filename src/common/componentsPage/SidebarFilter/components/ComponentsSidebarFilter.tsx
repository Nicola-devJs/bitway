import { theme } from "@/assets/theme/theme";
import { InputApp } from "@/common/UI/input/InputApp";
import { OptionType, SelectApp } from "@/common/UI/select/SelectApp";

import { TextApp } from "@/common/styledComponents/Text";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { useDebounce } from "@/common/hooks/debounce";

interface IProps<T> {
  value: T;
  onChange: (value: T) => void;
  options: { value: string; label: string }[];
}

interface ISelectProps<T> extends IProps<T> {
  label?: string;
}

export const CheckboxesFilter = ({ value, onChange, options }: IProps<Array<string>>) => {
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
      {options.map((type) => (
        <InputApp.Checkbox
          label={type.label}
          name={type.value}
          key={type.value}
          onChange={handleChange}
          checked={value.includes(type.value)}
        />
      ))}
    </ContainerContent>
  );
};

export const SelectFilter = ({ value, onChange, label, options }: ISelectProps<string>) => {
  const handleSelect = (option: OptionType) => {
    onChange(option.value);
  };

  return (
    <ContainerContent>
      <SelectApp
        label={label}
        options={[...options, { label: "Очистить", value: "" }]}
        changeHandler={handleSelect}
        value={{ value, label: value }}
        hideSelected
      />
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
