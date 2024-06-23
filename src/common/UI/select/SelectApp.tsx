import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { jost } from "@/common/constants/font";
import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { TextApp } from "@/common/styledComponents/Text";
import arrowSelect from "@/assets/icons/arrow-select.svg";
import doubleArrow from "@/assets/icons/double-arrow.svg";
import { NextImage } from "@/common/components/NextImage";
import {
  ContainerSelect,
  ContainerInput,
  StyledInput,
  ContainerOptions,
  SelectSortedContainer,
} from "./styledComponents/StyledSelectApp";

export type OptionType = { label: string; value: string };

interface IProps {
  label?: string;
  errorMessage?: string;
  options: OptionType[];
  changeHandler: (selected: OptionType) => void;
  value: OptionType;
  size?: number;
  viewSide?: "left" | "right";
  hideSelected?: boolean;
}

const SelectApp = ({ label, errorMessage, options = [], changeHandler, size = 16, value, hideSelected }: IProps) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const openSelectHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setOpenSelect((prevState) => !prevState);
  };

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (option: OptionType) => () => {
    if (option.value !== value.value) {
      changeHandler(option);
      setOpenSelect(false);
    }
  };

  const getOptions = () => {
    if (hideSelected) {
      return options.filter((option) => option.value !== value.value);
    } else {
      return options;
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSelectOptions);

    return () => {
      document.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  return (
    <ContainerSelect ref={selectRef}>
      <ContainerInput $isOpen={openSelect}>
        {label && (
          <TextApp as="label" size={12} weight={500}>
            {label}
          </TextApp>
        )}
        <StyledInput
          type="text"
          className={jost.className}
          $error={!!errorMessage}
          onMouseDown={openSelectHandler}
          readOnly
          $size={size}
          value={value.label || "Не выбран"}
        />
        <NextImage info={arrowSelect} $width={17} onClick={() => setOpenSelect((prev) => !prev)} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ContainerInput>
      <ContainerOptions $isOpen={openSelect} $viewSize={"right"}>
        {getOptions().length ? (
          getOptions().map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt)}>
              {opt.label}
            </div>
          ))
        ) : (
          <div>Пустой список</div>
        )}
      </ContainerOptions>
    </ContainerSelect>
  );
};

SelectApp.Sorted = ({ options = [], changeHandler, viewSide = "left", label, value }: IProps) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (option: OptionType) => () => {
    if (option.value !== value.value) {
      changeHandler(option);
      setOpenSelect(false);
    }
  };

  const toggleSelectSortedHandler = () => {
    setOpenSelect((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", closeSelectOptions);

    return () => {
      document.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  return (
    <ContainerSelect ref={selectRef} $width="max-content">
      <SelectSortedContainer $isOpen={openSelect} onClick={toggleSelectSortedHandler}>
        <TextApp>
          {label}: {value.label}
        </TextApp>{" "}
        <NextImage info={arrowSelect} $width={17} objectFit="contain" />
      </SelectSortedContainer>
      <ContainerOptions $isOpen={openSelect} $viewSize={viewSide}>
        {options.length ? (
          options.map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt)}>
              {opt.label}
            </div>
          ))
        ) : (
          <div>Пустой список</div>
        )}
      </ContainerOptions>
    </ContainerSelect>
  );
};

export { SelectApp };
