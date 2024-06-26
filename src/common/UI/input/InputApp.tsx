"use client";
import React, { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import { jost } from "@/common/constants/font";
import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { ContainerInput, InputPasswordEye, StyledInput } from "./components/StyledInputApp";
import type { ControllerRenderProps, UseControllerReturn } from "react-hook-form";
import { ClearButton } from "./components/StyledInputAppRange";
import { ContainerCode } from "./components/StyledInputAppCode";
import { ContainerCheckbox, StyledCheckbox } from "./components/StyledInputAppCheckbox";
import eyeShow from "@/assets/icons/show-eye.svg";
import eyeHide from "@/assets/icons/hide-eye.svg";
import { NextImage } from "@/common/components/NextImage";
import { TextApp } from "@/common/styledComponents/Text";
import { FlexContent } from "@/common/styledComponents/Flex";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  errorMessage?: string;
  size?: number;
  padding?: number;
  onChange: (...event: any[]) => void;
}

interface IPropsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  errorMessage?: string;
  size?: number;
  padding?: number;
}

interface IPropsCode {
  codes: UseControllerReturn[];
}

interface IPropsRange {
  from: string;
  to: string;
  onChangeFrom: (value: string) => void;
  onChangeTo: (value: string) => void;
  onClear: () => void;
}

// TODO Проблема с гидрацией StyledInput

const InputApp = ({ label, errorMessage, size = 16, padding = 16, ...props }: IProps) => {
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
        $padding={padding}
        {...props}
        value={props.value || ""}
      />

      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Password = ({ label, errorMessage, size = 16, padding = 16, ...props }: IProps) => {
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
        $padding={padding}
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
          $padding={16}
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

InputApp.Phone = ({ label, errorMessage, onChange, size = 16, padding = 16, ...props }: IProps) => {
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
        $padding={padding}
        {...props}
        value={props.value ?? ""}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Text = ({ label, errorMessage, size = 16, padding = 16, ...props }: IPropsTextarea) => {
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
        $padding={padding}
        {...props}
        value={props.value ?? ""}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
};

InputApp.Range = ({ from, to, onChangeFrom, onChangeTo, onClear }: IPropsRange) => {
  const handleChangeFrom: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newFrom = event.target.value;

    onChangeFrom(newFrom);
  };

  const handleChangeTo: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newTo = event.target.value;

    onChangeTo(newTo);
  };

  return (
    <>
      <FlexContent $align="center" $flexGap={16}>
        <InputApp type="number" label={"От"} onChange={handleChangeFrom} value={from} padding={12} />
        <InputApp type="number" label={"По"} onChange={handleChangeTo} value={to} padding={12} />
      </FlexContent>
      {(from || to) && (
        <ClearButton onClick={onClear} outlined>
          Очистить
        </ClearButton>
      )}
    </>
  );
};

export { InputApp };
