"use client";

import { theme } from "@/assets/theme/theme";
import { jost } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface IPropsCheckbox {
  label?: string;
  id?: string;
}

const InputApp = ({ label, ...props }: IProps) => {
  return (
    <ContainerInput>
      {label && (
        <TextApp as="label" size={12} weight={500}>
          {label}
        </TextApp>
      )}
      <StyledInput type="text" className={jost.className} {...props} />
    </ContainerInput>
  );
};

InputApp.Checkbox = ({ label, id, ...props }: IPropsCheckbox) => {
  return (
    <ContainerCheckbox as="label">
      <input type="checkbox" {...props} />
      <StyledCheckbox />
      <span>{label}</span>
    </ContainerCheckbox>
  );
};

export { InputApp };

const ContainerInput = styled.div`
  label {
    margin-bottom: 0.347vw;
    display: inline-block;

    @media (max-width: ${theme.media.desktop}px) {
      margin-bottom: 0.417vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      margin-bottom: 0.651vw;
    }
  }
`;

const StyledCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${theme.colors.blue};
  border-radius: 2px;
  background-color: transparent;
  margin-right: 10px;
`;

const ContainerCheckbox = styled(TextApp)`
  display: flex;
  align-items: center;
  width: max-content;

  input {
    display: none;
    &:checked + ${StyledCheckbox} {
      background-color: ${theme.colors.blue};
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.blue};
  padding: 1.111vw;
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: 1.111vw;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.334vw;
    font-size: 1.334vw;
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.083vw;
    font-size: 2.083vw;
    border-radius: 1.302vw;
  }
`;
