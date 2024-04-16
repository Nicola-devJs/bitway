"use client";
import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { jost, playfair } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { ContainerCheckbox, ContainerCode, ContainerInput, StyledCheckbox, StyledInput } from "./StyledInputApp";
import type { ControllerRenderProps, UseControllerReturn } from "react-hook-form";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  errorMessage?: string;
}

interface IPropsCode {
  codes: UseControllerReturn[];
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

export { InputApp };
