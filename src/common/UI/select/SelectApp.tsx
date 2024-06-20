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

type OptionType = { label: string; value: string };

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  options: OptionType[];
  changeHandler: (selected: string) => void;
  size?: number;
}

interface IPropsSwitcher {
  options: OptionType[];
  changeHandler: (selected: string | number) => void;
  viewSide?: "left" | "right";
}

interface IPropsSorted extends IPropsSwitcher {
  label: string;
  value: string;
}

const SelectApp = ({ label, errorMessage, options = [], changeHandler, size = 16, value, ...props }: IProps) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const openSelectHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setOpenSelect(true);
  };

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (value: string) => () => {
    changeHandler(value);
    setOpenSelect(false);
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
          value={value || "Не выбран"}
          {...props}
        />
        <NextImage info={arrowSelect} $width={17} onClick={() => setOpenSelect((prev) => !prev)} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ContainerInput>
      <ContainerOptions $isOpen={openSelect} $viewSize={"right"}>
        {options.length ? (
          options.map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt.value)}>
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

SelectApp.Switcher = ({ options = [], changeHandler, viewSide = "right" }: IPropsSwitcher) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (value: string | number) => () => {
    changeHandler(value);
    setOpenSelect(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeSelectOptions);

    return () => {
      document.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  return (
    <ContainerSelect ref={selectRef} $width="max-content">
      <NextImage info={doubleArrow} $width={17} $height={17} onClick={() => setOpenSelect((prev) => !prev)} />
      <ContainerOptions $isOpen={openSelect} $viewSize={viewSide} $width="max-content">
        {options.length ? (
          options.map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt.value)}>
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

SelectApp.Sorted = ({ options = [], changeHandler, viewSide = "left", label, value }: IPropsSorted) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (value: string | number) => () => {
    changeHandler(value);
    setOpenSelect(false);
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
          {label}: {value}
        </TextApp>{" "}
        <NextImage info={arrowSelect} $width={17} objectFit="contain" />
      </SelectSortedContainer>
      <ContainerOptions $isOpen={openSelect} $viewSize={viewSide}>
        {options.length ? (
          options.map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt.value)}>
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
