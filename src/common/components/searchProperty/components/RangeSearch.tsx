import { IMainFilterParams } from "@/common/constants/filter";
import React, { ChangeEventHandler, useState } from "react";
import { SearchItem } from ".";
import { InputApp } from "@/common/UI/input/InputApp";

interface IValue {
  priceFrom: string;
  priceTo: string;
}

interface IProps {
  onChange: (payload: IValue) => void;
  value: IValue;
  props: Omit<IMainFilterParams, "key">;
}

export const RangeSearch = ({ props: { iconW, title }, value, onChange }: IProps) => {
  const changeRangeFrom = (from: string) => {
    onChange({ ...value, priceFrom: from });
  };

  const changeRangeTo = (to: string) => {
    onChange({ ...value, priceTo: to });
  };

  const parserValue = () => {
    const fromValue = value.priceFrom ? `от ${value.priceFrom} ₽` : "";
    const toValue = value.priceTo ? `по ${value.priceTo} ₽` : "";
    return `${fromValue} ${toValue}`.trim();
  };

  const handleClear = () => {
    onChange({ priceFrom: "", priceTo: "" });
  };

  return (
    <SearchItem iconW={iconW} title={title} value={parserValue() || "Введите диапазон"}>
      <InputApp.Range
        from={value.priceFrom}
        to={value.priceTo}
        onChangeFrom={changeRangeFrom}
        onChangeTo={changeRangeTo}
        onClear={handleClear}
      />
    </SearchItem>
  );
};
