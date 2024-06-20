"use client";
import React, { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useState } from "react";
import { jost } from "@/common/constants/font";

import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { ContainerInput, InputPasswordEye, StyledInput } from "./components/StyledInputApp";
import type { ControllerRenderProps, UseControllerReturn } from "react-hook-form";
import { RangeContainer, RangeProgress, RangeInput } from "./components/StyledInputAppRange";
import { ContainerCode } from "./components/StyledInputAppCode";
import { ContainerCheckbox, StyledCheckbox } from "./components/StyledInputAppCheckbox";
import eyeShow from "@/assets/icons/show-eye.svg";
import eyeHide from "@/assets/icons/hide-eye.svg";
import { NextImage } from "@/common/components/NextImage";
import dynamic from "next/dynamic";
import { TextApp } from "@/common/styledComponents/Text";

type RangeType = {
  min: number;
  max: number;
};

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  errorMessage?: string;
  size?: number;
  onChange: (...event: any[]) => void;
}

interface IPropsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  errorMessage?: string;
  size?: number;
}

interface IPropsCode {
  codes: UseControllerReturn[];
}

interface IPropsRange {
  min: number;
  max: number;
  priceGap: number;
  rangeState: RangeType;
  setRangeState: (value: RangeType) => void;
  children?: React.ReactNode;
}

// TODO Проблема с гидрацией StyledInput

const InputApp = ({ label, errorMessage, size = 16, ...props }: IProps) => {
  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput
        type="text"
        className={jost.className}
        $error={!!errorMessage}
        $size={size}
        {...props}
        value={props.value || ""}
      />

      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Password = ({ label, errorMessage, size = 16, ...props }: IProps) => {
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput
        type={isShowPassword ? "text" : "password"}
        className={jost.className}
        $error={!!errorMessage}
        $size={size}
        $pr={50}
        {...props}
        value={props.value ?? ""}
      />
      <InputPasswordEye onClick={() => setShowPassword((prevState) => !prevState)}>
        <NextImage info={isShowPassword ? eyeHide : eyeShow} $width={24} $height={24} objectFit="contain" />
      </InputPasswordEye>
      <ErrorMessage>{errorMessage}</ErrorMessage>
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
          value={code.field.value ?? ""}
          onChange={changeHandler(code.field)}
          onBlur={code.field.onBlur}
          placeholder=""
          $error={!!code.fieldState.error?.message}
        />
      ))}
    </ContainerCode>
  );
};

InputApp.Phone = ({ label, errorMessage, onChange, size = 16, ...props }: IProps) => {
  const phoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^+\d]/g, "");
    onChange?.(value);
  };

  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput
        type="tel"
        className={jost.className}
        $error={!!errorMessage}
        onChange={phoneHandler}
        $size={size}
        {...props}
        value={props.value ?? ""}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Text = ({ label, errorMessage, size = 16, ...props }: IPropsTextarea) => {
  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput
        as={"textarea"}
        className={jost.className}
        $error={!!errorMessage}
        rows={3}
        $size={size}
        {...props}
        value={props.value ?? ""}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Range = ({ min, max, priceGap, children, rangeState, setRangeState }: IPropsRange) => {
  const thumbRangeHandler = (changeStateHandler: () => void) =>
    rangeState.max - rangeState.min >= priceGap && changeStateHandler();
  const rollbackRangeState = (changeStateHandler: (diff: number) => void) => {
    const differenceRange = priceGap - (rangeState.max - rangeState.min);
    if (differenceRange > 0) {
      changeStateHandler(differenceRange);
    }
  };

  const minThumbRangeUpHandler = () =>
    rollbackRangeState((differenceRange) => setRangeState({ ...rangeState, min: rangeState.min - differenceRange }));
  const maxThumbRangeUpHandler = () =>
    rollbackRangeState((differenceRange) => setRangeState({ ...rangeState, max: rangeState.max + differenceRange }));
  return (
    <div>
      {children}
      <RangeContainer>
        <RangeProgress
          $minPrecent={Math.trunc((rangeState.min / max) * 100)}
          $maxPrecent={Math.trunc(100 - (rangeState.max / max) * 100)}
        />
      </RangeContainer>
      <div style={{ position: "relative" }}>
        <RangeInput
          type="range"
          onChange={(e) => thumbRangeHandler(() => setRangeState({ ...rangeState, min: +e.target.value }))}
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
          onChange={(e) => thumbRangeHandler(() => setRangeState({ ...rangeState, max: +e.target.value }))}
          onMouseUp={maxThumbRangeUpHandler}
          onTouchEnd={maxThumbRangeUpHandler}
          value={rangeState.max}
        />
      </div>
    </div>
  );
};

export { InputApp };
