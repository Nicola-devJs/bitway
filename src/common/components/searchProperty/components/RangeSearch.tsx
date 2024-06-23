import { IMainFilterParams } from "@/common/constants/filter";
import React, { ChangeEventHandler, useState } from "react";
import { SearchItem } from ".";
import { OptionType } from "@/common/UI/select/SelectApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { FlexContent } from "@/common/styledComponents/Flex";

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
  const changeRangeFrom: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange({ ...value, priceFrom: event.target.value });
  };

  const changeRangeTo: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange({ ...value, priceTo: event.target.value });
  };

  const parserValue = () => {
    const fromValue = value.priceFrom ? `от ${value.priceFrom} ₽` : "";
    const toValue = value.priceTo ? `по ${value.priceTo} ₽` : "";
    return `${fromValue} ${toValue}`.trim();
  };

  return (
    <SearchItem iconW={iconW} title={title} value={parserValue() || "Введите диапазон"}>
      <FlexContent $align="center" $flexGap={16}>
        <InputApp type="number" label={"От"} onChange={changeRangeFrom} value={value.priceFrom} />
        <InputApp type="number" label={"По"} onChange={changeRangeTo} value={value.priceTo} />
      </FlexContent>
    </SearchItem>
  );
};
