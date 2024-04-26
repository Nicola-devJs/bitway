"use client";
import React, { ChangeEvent, InputHTMLAttributes, useCallback, useState } from "react";
import { jost } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { ContainerInput, StyledInput } from "./styledComponents/StyledInputApp";
import type { ControllerRenderProps, UseControllerReturn } from "react-hook-form";
import { RangeContainer, RangeProgress, RangeInput } from "./styledComponents/StyledInputAppRange";
import { ContainerCode } from "./styledComponents/StyledInputAppCode";
import { ContainerCheckbox, StyledCheckbox } from "./styledComponents/StyledInputAppCheckbox";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  errorMessage?: string;
}

interface IPropsCode {
  codes: UseControllerReturn[];
}

interface IPropsRange {
  min: number;
  max: number;
  priceGap: number;
}

const InputApp = ({ label, errorMessage, ...props }: IProps) => {
  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput type="text" className={jost.className} $error={!!errorMessage} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Password = ({ label, errorMessage, ...props }: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 
  const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
  };
 
  return (
      <ContainerInput>
        {label && (
          <TextApp as="label" size={12} weight={500}>
            {label}
          </TextApp>
        )}
        <div style={{ position: 'relative' }}>
          <StyledInput
            type={isPasswordVisible ? "text" : "password"}
            className={jost.className}
            $error={!!errorMessage}
            {...props}
            style={{ paddingRight: '45px' }}
          />
          <p
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px', 
              top: '57%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible size='1.75vw'/> : <AiOutlineEye size='1.75vw'/>}
          </p>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ContainerInput>
  );
 };
 


InputApp.Checkbox = ({ label, errorMessage, ...props }: IProps) => {
  return (
    <ContainerCheckbox as="label">
      <input type="checkbox" {...props} />
      <StyledCheckbox $error={!!errorMessage} />
      {label}
      <ErrorMessage showType="bottom">{errorMessage}</ErrorMessage>
    </ContainerCheckbox>
  );
};

InputApp.Code = ({ codes }: IPropsCode) => {
  const changeHandler = (field: ControllerRenderProps) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 1);
    const nextInput = event.target.nextSibling as HTMLInputElement | null;
    const prevInput = event.target.previousSibling as HTMLInputElement | null;

    value ? nextInput?.focus() : prevInput?.focus();

    field.onChange(value);
  };

  return (
    <ContainerCode>
      {codes?.map((code, id) => (
        <StyledInput
          key={id}
          type="text"
          $size={24}
          $width={70}
          className={jost.className}
          style={{ textAlign: "center", fontWeight: 700 }}
          tabIndex={id + 1}
          value={code.field.value}
          onChange={changeHandler(code.field)}
          onBlur={code.field.onBlur}
          $error={!!code.fieldState.error?.message}
        />
      ))}
    </ContainerCode>
  );
};

InputApp.Range = ({ min, max, priceGap }: IPropsRange) => {
  const [rangeState, setRangeState] = useState({ min, max });

  const thumbRangeHandler = (changeStateHandler: () => void) =>
    rangeState.max - rangeState.min >= priceGap && changeStateHandler();

  const rollbackRangeState = (changeStateHandler: (diff: number) => void) => {
    const differenceRange = priceGap - (rangeState.max - rangeState.min);
    if (differenceRange > 0) {
      changeStateHandler(differenceRange);
    }
  };

  const minThumbRangeUpHandler = () =>
    rollbackRangeState((differenceRange) =>
      setRangeState((prevRangeState) => ({ ...prevRangeState, min: prevRangeState.min - differenceRange }))
    );

  const maxThumbRangeUpHandler = () =>
    rollbackRangeState((differenceRange) =>
      setRangeState((prevRangeState) => ({ ...prevRangeState, max: prevRangeState.max + differenceRange }))
    );

  return (
    <div>
      <RangeContainer>
        <RangeProgress
          $minPrecent={Math.trunc((rangeState.min / max) * 100)}
          $maxPrecent={Math.trunc(100 - (rangeState.max / max) * 100)}
        />
      </RangeContainer>
      <div style={{ position: "relative" }}>
        <RangeInput
          type="range"
          onChange={(e) =>
            thumbRangeHandler(() => setRangeState((prevRangeState) => ({ ...prevRangeState, min: +e.target.value })))
          }
          onMouseUp={minThumbRangeUpHandler}
          onTouchEnd={minThumbRangeUpHandler}
          min={min}
          max={max}
          value={rangeState.min}
        />
        <RangeInput
          type="range"
          min={min}
          max={max}
          onChange={(e) =>
            thumbRangeHandler(() => setRangeState((prevRangeState) => ({ ...prevRangeState, max: +e.target.value })))
          }
          onMouseUp={maxThumbRangeUpHandler}
          onTouchEnd={maxThumbRangeUpHandler}
          value={rangeState.max}
        />
      </div>
    </div>
  );
};


export { InputApp };